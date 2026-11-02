/**
 * content:build / content:release — deterministic release generator (docs/04,
 * docs/09, TASK-011). Builds immutable package files + manifest; review and
 * learner channels have separate output directories; the learner channel fails
 * hard on any package that does not pass the learner gate (--strict) and
 * otherwise produces a valid EMPTY learner release (a correct state before any
 * content is approved). The manifest is written LAST.
 */
import { mkdirSync, writeFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { resolve, posix } from 'node:path';
import { ROOT, readJson, stableJson, sha256HexOfBytes, loadValidators, formatAjvErrors, schemaValid } from './lib.ts';
import { validatePackageSemantics, validateLearnerGate, validateManifestSemantics, combine } from '../../src/content/validate.ts';
import type { ContentPackage, ContentManifest, ManifestPackageEntry } from '../../src/content/types.ts';

const args = process.argv.slice(2);
function argValue(name: string): string | undefined {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
}
const channel = (argValue('--channel') ?? 'both') as 'review' | 'learner' | 'both';
const strict = args.includes('--strict');
const sequence = Number(argValue('--sequence') ?? '1');
const createdAt = argValue('--created-at') ?? '2026-11-02T00:00:00Z'; // fixed for determinism; operator overrides at publish

const validators = loadValidators();
const normalizedDir = resolve(ROOT, 'content/normalized');
const packages: ContentPackage[] = existsSync(normalizedDir)
  ? readdirSync(normalizedDir).filter((f) => f.endsWith('.json')).sort().map((f) => readJson<ContentPackage>(`content/normalized/${f}`))
  : [];

interface BuildResult {
  releaseId: string;
  dir: string;
  included: string[];
  excluded: { id: string; reasons: string[] }[];
}

function buildChannel(ch: 'review' | 'learner'): BuildResult {
  const releaseId = `${ch}-${String(sequence).padStart(4, '0')}`;
  const outDir = resolve(ROOT, 'release-out/content', ch);
  const releaseDir = resolve(outDir, 'releases', releaseId);
  rmSync(releaseDir, { recursive: true, force: true });
  mkdirSync(resolve(releaseDir, 'packages'), { recursive: true });

  const included: string[] = [];
  const excluded: { id: string; reasons: string[] }[] = [];
  const entries: ManifestPackageEntry[] = [];
  const publicationChannel = ch === 'review' ? 'internal-review' : 'internal-lan';

  for (const pkg of packages) {
    if (!schemaValid(validators.contentPackage, pkg)) {
      excluded.push({ id: pkg.packageId, reasons: [`schema: ${formatAjvErrors(validators.contentPackage)}`] });
      continue;
    }
    const semantic = validatePackageSemantics(pkg);
    if (!semantic.ok) {
      excluded.push({ id: pkg.packageId, reasons: semantic.issues.map((i) => i.code) });
      continue;
    }
    const gate = validateLearnerGate(pkg, { channel: ch, publicationChannel });
    if (!gate.ok) {
      excluded.push({ id: pkg.packageId, reasons: gate.issues.map((i) => i.code) });
      continue;
    }
    // review channel also requires rights to cover internal-review
    if (ch === 'review' && !pkg.rights.channels.includes('internal-review')) {
      excluded.push({ id: pkg.packageId, reasons: ['RIGHTS_CHANNEL'] });
      continue;
    }
    const json = stableJson(pkg);
    const bytes = new TextEncoder().encode(json);
    const fileName = `${pkg.packageId}.${pkg.revision}.json`;
    writeFileSync(resolve(releaseDir, 'packages', fileName), json, 'utf-8');
    entries.push({
      packageId: pkg.packageId,
      revision: pkg.revision,
      url: posix.join('releases', releaseId, 'packages', fileName),
      bytes: bytes.byteLength,
      sha256: sha256HexOfBytes(bytes),
    });
    included.push(`${pkg.packageId}@${pkg.revision}`);
  }

  const manifest: ContentManifest = {
    schemaVersion: '1.0.0',
    releaseId,
    releaseSequence: sequence,
    channel: ch,
    createdAt,
    compatibility: { contentSchemaVersion: '1.0.0', minAppVersion: '0.1.0', maxAppMajor: 0 },
    packages: entries,
    withdrawals: [],
    releaseNote: ch === 'review'
      ? 'Wydanie recenzenckie: pakiety do odrębnego review; nie jest wydaniem uczniowskim.'
      : included.length === 0
        ? 'Brak dopuszczonych materiałów: poprawny pusty korpus, bez wniosku o uczniu.'
        : 'Wydanie uczniowskie z pakietów dopuszczonych przez bramkę treści.',
    publicationChannel,
  };
  if (!schemaValid(validators.contentManifest, manifest)) {
    throw new Error(`Manifest schema failed: ${formatAjvErrors(validators.contentManifest)}`);
  }
  const semantics = combine(validateManifestSemantics(manifest));
  if (!semantics.ok) throw new Error(`Manifest semantics failed: ${semantics.issues.map((i) => i.code).join(',')}`);
  // Manifest is written LAST (atomic publish step is the operator's rename/swap on the host).
  writeFileSync(resolve(outDir, 'manifest.json'), stableJson(manifest), 'utf-8');
  return { releaseId, dir: releaseDir, included, excluded };
}

const channels: ('review' | 'learner')[] = channel === 'both' ? ['review', 'learner'] : [channel];
let failed = false;
for (const ch of channels) {
  const result = buildChannel(ch);
  console.log(`[${ch}] release ${result.releaseId}: included ${String(result.included.length)} package(s): ${result.included.join(', ') || '(none)'}`);
  for (const ex of result.excluded) {
    console.log(`[${ch}] excluded ${ex.id}: ${ex.reasons.join('; ')}`);
  }
  if (ch === 'learner' && strict && result.excluded.length > 0) {
    // --strict: operator intends to publish specific content; review-only input is a hard failure.
    console.error(`[learner] STRICT: review-only/unapproved packages present — release refused`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
