import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { ContentUpdater, type UpdaterIO, ACTIVE_RELEASE_KEY, appCompatible } from '@/updates/updater.ts';
import { ContentStore } from '@/content/store.ts';
import { AttemptRepository } from '@/data/attempts.ts';
import { ProfileRepository } from '@/data/profiles.ts';
import type { ContentManifest, ContentPackage } from '@/content/types.ts';
import { freshDb, conditions } from './helpers.ts';

const root = resolve(__dirname, '..', '..');
const enc = new TextEncoder();
const tech = JSON.parse(readFileSync(resolve(root, 'content/normalized/TECH01.r1.json'), 'utf-8')) as ContentPackage;
const t21 = JSON.parse(readFileSync(resolve(root, 'content/normalized/T21.r1-full1.json'), 'utf-8')) as ContentPackage;

function sha(bytes: Uint8Array): string {
  return createHash('sha256').update(bytes).digest('hex');
}

class FakeHost implements UpdaterIO {
  files = new Map<string, Uint8Array>();
  failures = new Map<string, Error>();
  clock = 1_000_000;
  fetchBytes(url: string): Promise<Uint8Array> {
    const failure = this.failures.get(url);
    if (failure) return Promise.reject(failure);
    const f = this.files.get(url);
    if (!f) return Promise.reject(new Error('HTTP 404'));
    return Promise.resolve(f);
  }
  sha256Hex(bytes: Uint8Array): Promise<string> {
    return Promise.resolve(sha(bytes));
  }
  now(): number {
    return this.clock;
  }
  publish(seq: number, pkgs: ContentPackage[], opts: { channel?: 'learner' | 'review'; tamper?: boolean; withdrawals?: ContentManifest['withdrawals']; minApp?: string } = {}): ContentManifest {
    const channel = opts.channel ?? 'learner';
    const releaseId = `${channel}-${String(seq).padStart(4, '0')}`;
    const entries = pkgs.map((p) => {
      const bytes = enc.encode(JSON.stringify(p));
      const url = `releases/${releaseId}/packages/${p.packageId}.${p.revision}.json`;
      // tamper: same byte length, different content → only the SHA-256 check can catch it
      const tampered = enc.encode(JSON.stringify({ ...p, title: p.title.replace(/.$/, (c) => (c === 'x' ? 'y' : 'x')) }));
      this.files.set(`http://lan.test/content/learner/${url}`, opts.tamper ? tampered : bytes);
      return { packageId: p.packageId, revision: p.revision, url, bytes: bytes.byteLength, sha256: sha(bytes) };
    });
    const manifest: ContentManifest = {
      schemaVersion: '1.0.0', releaseId, releaseSequence: seq, channel, createdAt: '2026-11-02T00:00:00Z',
      compatibility: { contentSchemaVersion: '1.0.0', minAppVersion: opts.minApp ?? '0.1.0', maxAppMajor: 0 },
      packages: entries, withdrawals: opts.withdrawals ?? [], releaseNote: 'test', publicationChannel: channel === 'learner' ? 'internal-lan' : 'internal-review',
    };
    this.files.set(MANIFEST, enc.encode(JSON.stringify(manifest)));
    return manifest;
  }
}

const MANIFEST = 'http://lan.test/content/learner/manifest.json';

async function setup() {
  const db = await freshDb();
  const host = new FakeHost();
  const updater = new ContentUpdater(db, host, MANIFEST);
  return { db, host, updater, store: new ContentStore(db) };
}

async function check(updater: ContentUpdater) {
  const probe = await updater.probe();
  if (probe.kind === 'new-release') return { probe, apply: await updater.applyRelease(probe.manifest, probe.manifestSha256) };
  return { probe, apply: null };
}

describe('content updater (QA-21..26)', () => {
  it('first activation of a valid learner release; empty learner release is valid too', async () => {
    const { host, updater, store } = await setup();
    host.publish(1, []);
    const r1 = await check(updater);
    expect(r1.apply?.ok).toBe(true);
    expect((await store.getActiveContent())?.packages).toHaveLength(0);
    host.publish(2, [tech]);
    const r2 = await check(updater);
    expect(r2.apply?.ok).toBe(true);
    expect((await store.getActiveContent())?.packages.map((p) => p.packageId)).toEqual(['TECH01']);
  });

  it('host unreachable / captive portal HTML / invalid JSON keeps the previous release (QA-22)', async () => {
    const { host, updater, store } = await setup();
    host.publish(1, [tech]);
    await check(updater);
    host.failures.set(MANIFEST, new Error('Timeout'));
    expect((await updater.probe()).kind).toBe('unreachable');
    host.failures.clear();
    host.files.set(MANIFEST, enc.encode('<html>Zaloguj się</html>'));
    expect((await updater.probe()).kind).toBe('unreachable');
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0001');
  });

  it('bad digest / truncated download / review-only package: zero partial activation (QA-23, QA-31)', async () => {
    const { host, updater, store } = await setup();
    host.publish(1, [tech]);
    await check(updater);
    // immutable packages already stored are reused; a new revision forces a download
    host.publish(2, [{ ...tech, revision: 'r1-b' }], { tamper: true });
    const bad = await check(updater);
    if (bad.apply && !bad.apply.ok) expect(bad.apply.issues.map((i) => i.code)).toContain('DIGEST_MISMATCH');
    expect(bad.apply?.ok).toBe(false);
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0001');

    const m = host.publish(3, [tech, t21]);
    const reviewOnly = await check(updater);
    expect(reviewOnly.apply?.ok).toBe(false);
    if (reviewOnly.apply && !reviewOnly.apply.ok) expect(reviewOnly.apply.issues.map((i) => i.code)).toContain('LEARNER_REVIEW_PENDING');
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0001');
    void m;

    host.publish(4, [tech]);
    host.failures.set('http://lan.test/content/learner/releases/learner-0004/packages/TECH01.r1.json', new Error('connection reset'));
    // package already stored with same sha → reused, so force a new revision to exercise download failure
    const tech2 = { ...tech, revision: 'r2' };
    host.publish(5, [tech2]);
    host.failures.set('http://lan.test/content/learner/releases/learner-0005/packages/TECH01.r2.json', new Error('connection reset'));
    const truncated = await check(updater);
    expect(truncated.apply?.ok).toBe(false);
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0001');
  });

  it('incompatible manifest requires app update and does not activate (QA-26)', async () => {
    const { host, updater, store } = await setup();
    host.publish(1, [tech]);
    await check(updater);
    host.publish(2, [tech], { minApp: '9.0.0' });
    expect((await updater.probe()).kind).toBe('needs-app-update');
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0001');
    expect(appCompatible({ compatibility: { contentSchemaVersion: '2.0.0', minAppVersion: '0.1.0', maxAppMajor: 0 } } as ContentManifest)).toBe(false);
  });

  it('two tabs committing concurrently: one commit, consistent pointer (QA-26)', async () => {
    const { db, host } = await setup();
    const u1 = new ContentUpdater(db, host, MANIFEST);
    const u2 = new ContentUpdater(db, host, MANIFEST);
    const manifest = host.publish(1, [tech]);
    const s = sha(enc.encode(JSON.stringify(manifest)));
    const [a, b] = await Promise.all([u1.applyRelease(manifest, s), u2.applyRelease(manifest, s)]);
    expect(a.ok && b.ok).toBe(true);
    const active = await db.contentReleases.where('state').equals('active').toArray();
    expect(active).toHaveLength(1);
    expect((await db.appState.get(ACTIVE_RELEASE_KEY))?.value).toBe('learner-0001');
  });

  it('rollback via higher sequence keeps progress and history; pinned attempt keeps its release (QA-25)', async () => {
    const { db, host, updater, store } = await setup();
    host.publish(1, [tech]);
    await check(updater);
    const profile = await new ProfileRepository(db).create('Ania');
    const attempts = new AttemptRepository(db);
    const q = tech.questions[0];
    if (!q) throw new Error('fixture');
    const snap = await store.pinSnapshot(q);
    const attempt = await attempts.create({ profileId: profile.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'learner-0001', pinnedItems: [{ itemId: q.id, revision: q.revision, snapshotKey: snap.key }], itemOrder: [], conditions: conditions() });
    await attempts.saveDraft(profile.id, attempt, { itemId: q.id, revision: q.revision, format: q.format, value: ['1'] });

    const changed = { ...tech, revision: 'r2', questions: tech.questions.map((x) => x.id === q.id ? { ...x, revision: 'r2', stemMarkdown: 'Zmieniony stem' } : x) };
    host.publish(2, [changed]);
    expect((await check(updater)).apply?.ok).toBe(true);
    host.publish(3, [tech]); // publisher rollback to previous payloads with higher sequence
    expect((await check(updater)).apply?.ok).toBe(true);
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0003');
    expect(await attempts.listAnswers(profile.id, attempt.id)).toHaveLength(1);
    expect((await store.getSnapshot(snap.key))?.stemMarkdown).toBe(q.stemMarkdown);
    // GC keeps packages referenced by attempts' release
    await updater.garbageCollect();
    expect(await db.contentPackages.get('TECH01@r1')).toBeDefined();
  });

  it('same sequence with different ID is a publisher error, not a swap', async () => {
    const { host, updater } = await setup();
    host.publish(1, [tech]);
    await check(updater);
    const m = JSON.parse(new TextDecoder().decode(host.files.get(MANIFEST))) as ContentManifest;
    host.files.set(MANIFEST, enc.encode(JSON.stringify({ ...m, releaseId: 'learner-0001b' })));
    expect((await updater.probe()).kind).toBe('invalid');
  });

  it('kill before commit: restart leaves old release; staging rejected (QA-24)', async () => {
    const { db, host, updater, store } = await setup();
    host.publish(1, [tech]);
    await check(updater);
    // simulate a crash after staging but before commit
    const m2 = host.publish(2, [{ ...tech, revision: 'r9' }]);
    await db.contentReleases.put({ releaseId: m2.releaseId, releaseSequence: 2, channel: 'learner', manifest: m2, manifestSha256: 'x', state: 'staging', validationComplete: false, stagedAt: '' });
    const restarted = new ContentUpdater(db, host, MANIFEST);
    await restarted.recover();
    expect((await store.getActiveContent())?.releaseId).toBe('learner-0001');
    expect((await db.contentReleases.get(m2.releaseId))?.state).toBe('rejected');
  });

  it('withdrawals are recorded cumulatively without deleting answers (QA-28)', async () => {
    const { db, host, updater, store } = await setup();
    host.publish(1, [tech], { withdrawals: [{ decisionId: 'WD-1', itemRef: { id: 'TECH-A1', revision: 'r1' }, status: 'key-disputed', reasonCode: 'TEST', decidedAt: '2026-11-02T00:00:00Z', decisionRef: 'test' }] });
    await check(updater);
    expect(await store.isWithdrawn('TECH-A1', 'r1')).toMatchObject({ status: 'key-disputed' });
    expect(await db.withdrawals.count()).toBe(1);
  });

  it('cooldown and backoff schedule', async () => {
    const { host, updater } = await setup();
    host.publish(1, []);
    await updater.probe();
    expect(updater.shouldAutoCheck()).toBe(false);
    host.clock += 61_000;
    expect(updater.shouldAutoCheck()).toBe(true);
    host.failures.set(MANIFEST, new Error('down'));
    await updater.probe();
    expect(updater.nextRetryDelay()).toBe(120_000);
  });
});
