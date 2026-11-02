/**
 * Content updater: probe → stage → verify → commit → use → recover/GC
 * (docs/04). Network and crypto run outside IndexedDB transactions; the commit
 * is one short transaction guarded by compare-and-swap on the active release
 * pointer. A failure at any step leaves the previous whole release working.
 */
import type { CpreDb, ContentReleaseRecord, ContentPackageRecord } from '@/data/db.ts';
import type { ContentManifest, ContentPackage } from '@/content/types.ts';
import {
  combine,
  validateLearnerGate,
  validateManifestSemantics,
  validateManifestStructure,
  validatePackageSemantics,
  validatePackageStructure,
  type ValidationIssue,
} from '@/content/validate.ts';

export const MANIFEST_MAX_BYTES = 256 * 1024;
export const PACKAGE_MAX_BYTES = 10 * 1024 * 1024;
export const UPDATE_MAX_BYTES = 50 * 1024 * 1024;
export const PROBE_TIMEOUT_MS = 8_000;
export const CHECK_COOLDOWN_MS = 60_000;
export const VISIBLE_PERIODIC_MS = 5 * 60_000;
export const RETRY_BACKOFF_MS = [30_000, 120_000, 600_000, 1_800_000] as const;

export const APP_VERSION = { major: 0, minor: 1, patch: 0 };
export const SUPPORTED_CONTENT_SCHEMA = '1.0.0';

export const ACTIVE_RELEASE_KEY = 'activeContentReleaseId';

export type ProbeOutcome =
  | { kind: 'no-change' }
  | { kind: 'new-release'; manifest: ContentManifest; manifestSha256: string }
  | { kind: 'needs-app-update'; manifest: ContentManifest }
  | { kind: 'unreachable'; reason: string }
  | { kind: 'invalid'; issues: readonly ValidationIssue[] };

export interface UpdaterIO {
  /** no-store fetch of a same-origin URL; returns bytes or throws. */
  fetchBytes(url: string, opts: { timeoutMs: number; maxBytes: number }): Promise<Uint8Array>;
  sha256Hex(bytes: Uint8Array): Promise<string>;
  now(): number;
}

export function parseVersion(v: string): { major: number; minor: number; patch: number } | null {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(v);
  if (!m) return null;
  return { major: Number(m[1]), minor: Number(m[2]), patch: Number(m[3]) };
}

export function appCompatible(manifest: ContentManifest, app = APP_VERSION): boolean {
  if (manifest.compatibility.contentSchemaVersion !== SUPPORTED_CONTENT_SCHEMA) return false;
  const min = parseVersion(manifest.compatibility.minAppVersion);
  if (!min) return false;
  const cmp = app.major !== min.major ? app.major - min.major : app.minor !== min.minor ? app.minor - min.minor : app.patch - min.patch;
  if (cmp < 0) return false;
  if (app.major > manifest.compatibility.maxAppMajor) return false;
  return true;
}

function decodeJson(bytes: Uint8Array): unknown {
  return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) as unknown;
}

export class ContentUpdater {
  private lastSuccessfulCheck = 0;
  private failureCount = 0;
  private running: Promise<unknown> | null = null;

  constructor(
    private readonly db: CpreDb,
    private readonly io: UpdaterIO,
    private readonly manifestUrl: string,
    private readonly channelName = 'ireb-cpre-updates',
  ) {}

  /** Cooldown: automatic triggers skip if the last successful check was < 60 s ago. */
  shouldAutoCheck(): boolean {
    return this.io.now() - this.lastSuccessfulCheck > CHECK_COOLDOWN_MS;
  }

  nextRetryDelay(): number {
    const idx = Math.min(this.failureCount, RETRY_BACKOFF_MS.length - 1);
    return RETRY_BACKOFF_MS[idx] ?? 1_800_000;
  }

  /** Probe the configured same-origin manifest; captive portals and HTML 200s are not new content. */
  async probe(): Promise<ProbeOutcome> {
    let bytes: Uint8Array;
    try {
      bytes = await this.io.fetchBytes(this.manifestUrl, { timeoutMs: PROBE_TIMEOUT_MS, maxBytes: MANIFEST_MAX_BYTES });
    } catch (err) {
      this.failureCount += 1;
      return { kind: 'unreachable', reason: err instanceof Error ? err.message : String(err) };
    }
    let data: unknown;
    try {
      data = decodeJson(bytes);
    } catch {
      this.failureCount += 1;
      return { kind: 'unreachable', reason: 'Odpowiedź nie jest poprawnym JSON (możliwy portal logowania)' };
    }
    const structure = validateManifestStructure(data);
    if (!structure.ok) {
      this.failureCount += 1;
      return { kind: 'invalid', issues: structure.issues };
    }
    const manifest = data as ContentManifest;
    const semantics = validateManifestSemantics(manifest);
    if (!semantics.ok) {
      this.failureCount += 1;
      return { kind: 'invalid', issues: semantics.issues };
    }
    this.failureCount = 0;
    this.lastSuccessfulCheck = this.io.now();

    const active = await this.getActiveRelease();
    if (active) {
      if (manifest.releaseSequence < active.releaseSequence) return { kind: 'no-change' };
      if (manifest.releaseSequence === active.releaseSequence) {
        const sha = await this.io.sha256Hex(bytes);
        if (manifest.releaseId !== active.releaseId || sha !== active.manifestSha256) {
          return { kind: 'invalid', issues: [{ code: 'SEQUENCE_REUSED', path: '$', message: 'Ten sam sequence z innym ID/digest jest błędem wydawcy' }] };
        }
        return { kind: 'no-change' };
      }
    }
    if (!appCompatible(manifest)) return { kind: 'needs-app-update', manifest };
    const manifestSha256 = await this.io.sha256Hex(bytes);
    return { kind: 'new-release', manifest, manifestSha256 };
  }

  /**
   * Stage + verify + commit a new release. Serialized per instance; the commit
   * transaction re-checks the pointer so two tabs cannot double-commit.
   */
  async applyRelease(manifest: ContentManifest, manifestSha256: string): Promise<{ ok: true } | { ok: false; issues: readonly ValidationIssue[] }> {
    if (this.running) await this.running.catch(() => undefined);
    const run = this.applyReleaseInner(manifest, manifestSha256);
    this.running = run;
    try {
      return await run;
    } finally {
      this.running = null;
    }
  }

  private async applyReleaseInner(manifest: ContentManifest, manifestSha256: string): Promise<{ ok: true } | { ok: false; issues: readonly ValidationIssue[] }> {
    const issues: ValidationIssue[] = [];
    const baseUrl = new URL(this.manifestUrl, globalThis.location?.href ?? 'http://localhost/');
    const origin = baseUrl.origin;

    // STAGE: download missing immutable packages; verify bytes/digest/schema outside any transaction.
    const staged: ContentPackageRecord[] = [];
    let totalBytes = 0;
    for (const entry of manifest.packages) {
      const existing = await this.db.contentPackages.get(`${entry.packageId}@${entry.revision}`);
      if (existing && existing.sha256 === entry.sha256) {
        staged.push(existing);
        continue;
      }
      if (entry.bytes > PACKAGE_MAX_BYTES) {
        issues.push({ code: 'PACKAGE_TOO_LARGE', path: entry.url, message: `Package exceeds ${String(PACKAGE_MAX_BYTES)} bytes` });
        continue;
      }
      totalBytes += entry.bytes;
      if (totalBytes > UPDATE_MAX_BYTES) {
        issues.push({ code: 'UPDATE_TOO_LARGE', path: '$', message: 'Update exceeds total size limit' });
        break;
      }
      const url = new URL(entry.url, baseUrl);
      if (url.origin !== origin) {
        issues.push({ code: 'CROSS_ORIGIN', path: entry.url, message: 'Package URL resolves outside own origin' });
        continue;
      }
      let bytes: Uint8Array;
      try {
        bytes = await this.io.fetchBytes(url.toString(), { timeoutMs: PROBE_TIMEOUT_MS, maxBytes: PACKAGE_MAX_BYTES });
      } catch (err) {
        issues.push({ code: 'DOWNLOAD_FAILED', path: entry.url, message: err instanceof Error ? err.message : String(err) });
        continue;
      }
      if (bytes.byteLength !== entry.bytes) {
        issues.push({ code: 'BYTES_MISMATCH', path: entry.url, message: `Expected ${String(entry.bytes)} bytes, got ${String(bytes.byteLength)}` });
        continue;
      }
      const sha = await this.io.sha256Hex(bytes);
      if (sha !== entry.sha256) {
        issues.push({ code: 'DIGEST_MISMATCH', path: entry.url, message: 'SHA-256 does not match manifest' });
        continue;
      }
      let payload: unknown;
      try {
        payload = decodeJson(bytes);
      } catch {
        issues.push({ code: 'BAD_JSON', path: entry.url, message: 'Package is not valid JSON' });
        continue;
      }
      const structure = validatePackageStructure(payload);
      if (!structure.ok) {
        issues.push(...structure.issues);
        continue;
      }
      const pkg = payload as ContentPackage;
      if (pkg.packageId !== entry.packageId || pkg.revision !== entry.revision) {
        issues.push({ code: 'IDENTITY_MISMATCH', path: entry.url, message: 'Package identity differs from manifest entry' });
        continue;
      }
      const semantic = combine(validatePackageSemantics(pkg), validateLearnerGate(pkg, { channel: manifest.channel, publicationChannel: manifest.publicationChannel }));
      if (!semantic.ok) {
        issues.push(...semantic.issues);
        continue;
      }
      staged.push({
        key: `${entry.packageId}@${entry.revision}`,
        packageId: entry.packageId,
        revision: entry.revision,
        sha256: entry.sha256,
        bytes: entry.bytes,
        payload: pkg,
        storedAt: new Date().toISOString(),
      });
    }
    // One failed required file blocks activation of the whole release.
    if (issues.length > 0 || staged.length !== manifest.packages.length) {
      await this.db.contentReleases.put({
        releaseId: manifest.releaseId,
        releaseSequence: manifest.releaseSequence,
        channel: manifest.channel,
        manifest,
        manifestSha256,
        state: 'rejected',
        validationComplete: false,
        stagedAt: new Date().toISOString(),
      });
      return { ok: false, issues };
    }

    // Persist staged packages before commit (writes may be chunked; staging is not activation).
    await this.db.transaction('rw', this.db.contentPackages, async () => {
      for (const record of staged) await this.db.contentPackages.put(record);
    });
    const release: ContentReleaseRecord = {
      releaseId: manifest.releaseId,
      releaseSequence: manifest.releaseSequence,
      channel: manifest.channel,
      manifest,
      manifestSha256,
      state: 'staging',
      validationComplete: true,
      stagedAt: new Date().toISOString(),
    };
    await this.db.contentReleases.put(release);

    // COMMIT: short transaction; CAS on the pointer; verify staged packages are all present.
    try {
      await this.db.transaction('rw', [this.db.contentReleases, this.db.contentPackages, this.db.appState, this.db.withdrawals], async () => {
        const pointer = await this.db.appState.get(ACTIVE_RELEASE_KEY);
        const activeId = typeof pointer?.value === 'string' ? pointer.value : null;
        if (activeId) {
          const active = await this.db.contentReleases.get(activeId);
          if (active && active.releaseSequence >= manifest.releaseSequence) {
            throw new Error('CONCURRENT_COMMIT');
          }
        }
        for (const entry of manifest.packages) {
          const stored = await this.db.contentPackages.get(`${entry.packageId}@${entry.revision}`);
          if (!stored || stored.sha256 !== entry.sha256) throw new Error('STAGED_PACKAGE_MISSING');
        }
        const stagedRelease = await this.db.contentReleases.get(manifest.releaseId);
        if (!stagedRelease?.validationComplete) throw new Error('VALIDATION_INCOMPLETE');
        if (activeId && activeId !== manifest.releaseId) {
          const prev = await this.db.contentReleases.get(activeId);
          if (prev) await this.db.contentReleases.put({ ...prev, state: 'superseded' });
        }
        await this.db.contentReleases.put({ ...stagedRelease, state: 'active', activatedAt: new Date().toISOString() });
        await this.db.appState.put({ key: ACTIVE_RELEASE_KEY, value: manifest.releaseId });
        // Withdrawals are cumulative decisions; they never delete learner history.
        for (const w of manifest.withdrawals) {
          const existing = await this.db.withdrawals.get(w.decisionId);
          if (!existing) {
            await this.db.withdrawals.add({ decisionId: w.decisionId, withdrawal: w, sourceReleaseId: manifest.releaseId, receivedAt: new Date().toISOString() });
          }
        }
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (message === 'CONCURRENT_COMMIT') return { ok: true }; // other tab committed the same or newer release
      return { ok: false, issues: [{ code: 'COMMIT_FAILED', path: '$', message }] };
    }
    this.broadcast({ type: 'release-activated', releaseId: manifest.releaseId });
    return { ok: true };
  }

  async getActiveRelease(): Promise<ContentReleaseRecord | null> {
    const pointer = await this.db.appState.get(ACTIVE_RELEASE_KEY);
    if (typeof pointer?.value !== 'string') return null;
    const release = await this.db.contentReleases.get(pointer.value);
    return release && release.state === 'active' ? release : null;
  }

  /** Recover after restart: incomplete staging is discarded; the old release stays. */
  async recover(): Promise<void> {
    const stale = await this.db.contentReleases.where('state').anyOf(['staging', 'rejected']).toArray();
    for (const r of stale) {
      await this.db.contentReleases.put({ ...r, state: 'rejected' });
    }
  }

  /**
   * GC: delete only inactive, unpinned packages. Pinned snapshots and packages
   * referenced by any profile's attempts are kept. Never deletes history.
   */
  async garbageCollect(): Promise<number> {
    const active = await this.getActiveRelease();
    const keep = new Set<string>();
    if (active) for (const p of active.manifest.packages) keep.add(`${p.packageId}@${p.revision}`);
    const releases = await this.db.contentReleases.toArray();
    for (const r of releases) {
      if (r.state === 'staging' || r.state === 'active') {
        for (const p of r.manifest.packages) keep.add(`${p.packageId}@${p.revision}`);
      }
    }
    // Releases referenced by any attempt of any profile stay available.
    const referencedReleases = new Set<string>();
    await this.db.attempts.each((a) => {
      referencedReleases.add(a.contentReleaseId);
    });
    for (const rid of referencedReleases) {
      const r = await this.db.contentReleases.get(rid);
      if (r) for (const p of r.manifest.packages) keep.add(`${p.packageId}@${p.revision}`);
    }
    let removed = 0;
    const all = await this.db.contentPackages.toArray();
    for (const pkg of all) {
      if (!keep.has(pkg.key)) {
        await this.db.contentPackages.delete(pkg.key);
        removed += 1;
      }
    }
    return removed;
  }

  private broadcast(message: Record<string, unknown>): void {
    try {
      const ch = new BroadcastChannel(this.channelName);
      ch.postMessage(message);
      ch.close();
    } catch {
      // BroadcastChannel unsupported: DB remains the source of truth.
    }
  }
}

export function createFetchIO(): UpdaterIO {
  return {
    async fetchBytes(url, opts) {
      const controller = new AbortController();
      const timer = setTimeout(() => { controller.abort(); }, opts.timeoutMs);
      try {
        const res = await fetch(url, { cache: 'no-store', redirect: 'error', signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${String(res.status)}`);
        const type = res.headers.get('content-type') ?? '';
        if (type.includes('text/html')) throw new Error('Otrzymano HTML zamiast JSON (możliwy portal logowania)');
        const buf = new Uint8Array(await res.arrayBuffer());
        if (buf.byteLength > opts.maxBytes) throw new Error('Odpowiedź przekracza limit rozmiaru');
        return buf;
      } finally {
        clearTimeout(timer);
      }
    },
    async sha256Hex(bytes) {
      const digest = await crypto.subtle.digest('SHA-256', bytes.slice().buffer);
      return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
    },
    now: () => Date.now(),
  };
}
