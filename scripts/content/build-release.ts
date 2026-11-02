/**
 * content:build / content:release — deterministic release generator (docs/04,
 * docs/09, TASK-011). Builds immutable package files + manifest; review and
 * learner channels have separate output directories. The manifest is written LAST.
 *
 * Inputs: content/normalized/*.json (packages) and content/withdrawals/*.json
 * (cumulative withdrawals, written by content:convert from review/withdrawals.yaml).
 * Technical fixtures (tests/fixtures/content) enter ONLY with --with-fixtures (e2e builds);
 * they never reach an ordinary learner release.
 *
 * A package still in review is skipped and listed. --strict (content:release) refuses
 * the learner release BEFORE writing anything when a package meant for learners
 * (approved, permitted or with allowed uses) fails the gate, or a package is broken.
 * Without approved packages the learner release is a valid EMPTY corpus.
 */
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, posix } from 'node:path';
import { ROOT, stableJson, sha256HexOfBytes, loadValidators, formatAjvErrors, schemaValid } from './lib.ts';
import { validateManifestSemantics, combine } from '../../src/content/validate.ts';
import type { ContentManifest, ManifestPackageEntry } from '../../src/content/types.ts';
import { collectWithdrawals, planChannel, readPackages, type Channel, type ChannelPlan } from './release-plan.ts';

const args = process.argv.slice(2);
function argValue(name: string): string | undefined {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
}
const channel = (argValue('--channel') ?? 'both') as Channel | 'both';
const strict = args.includes('--strict');
const withFixtures = args.includes('--with-fixtures');
const sequence = Number(argValue('--sequence') ?? '1');
const createdAt = argValue('--created-at') ?? '2026-11-02T00:00:00Z'; // fixed for determinism; operator overrides at publish

const validators = loadValidators();
const packages = [
  ...readPackages(resolve(ROOT, 'content/normalized')),
  ...(withFixtures ? readPackages(resolve(ROOT, 'tests/fixtures/content')) : []),
];
const { withdrawals, problems } = collectWithdrawals(resolve(ROOT, 'content/withdrawals'));
if (problems.length > 0) {
  for (const p of problems) console.error(`withdrawals: ${p}`);
  process.exit(1);
}

function writeChannel(ch: Channel, plan: ChannelPlan): string {
  const releaseId = `${ch}-${String(sequence).padStart(4, '0')}`;
  const outDir = resolve(ROOT, 'release-out/content', ch);
  const releaseDir = resolve(outDir, 'releases', releaseId);
  rmSync(releaseDir, { recursive: true, force: true });
  mkdirSync(resolve(releaseDir, 'packages'), { recursive: true });

  const entries: ManifestPackageEntry[] = [];
  for (const pkg of plan.included) {
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
  }

  const manifest: ContentManifest = {
    schemaVersion: '1.0.0',
    releaseId,
    releaseSequence: sequence,
    channel: ch,
    createdAt,
    compatibility: { contentSchemaVersion: '1.0.0', minAppVersion: '0.1.0', maxAppMajor: 0 },
    packages: entries,
    withdrawals: [...withdrawals],
    releaseNote: ch === 'review'
      ? 'Wydanie recenzenckie: pakiety do odrębnego review; nie jest wydaniem uczniowskim.'
      : entries.length === 0
        ? 'Brak dopuszczonych materiałów: poprawny pusty korpus, bez wniosku o uczniu.'
        : 'Wydanie uczniowskie z pakietów dopuszczonych przez bramkę treści.',
    publicationChannel: ch === 'review' ? 'internal-review' : 'internal-lan',
  };
  if (!schemaValid(validators.contentManifest, manifest)) {
    throw new Error(`Manifest schema failed: ${formatAjvErrors(validators.contentManifest)}`);
  }
  const semantics = combine(validateManifestSemantics(manifest));
  if (!semantics.ok) throw new Error(`Manifest semantics failed: ${semantics.issues.map((i) => i.code).join(',')}`);
  // Manifest is written LAST (atomic publish step is the operator's rename/swap on the host).
  writeFileSync(resolve(outDir, 'manifest.json'), stableJson(manifest), 'utf-8');
  return releaseId;
}

const channels: Channel[] = channel === 'both' ? ['review', 'learner'] : [channel];
const plans = channels.map((ch) => ({ ch, plan: planChannel(packages, ch, validators.contentPackage) }));
let failed = false;
for (const { ch, plan } of plans) {
  for (const ex of plan.excluded) {
    console.log(`[${ch}] excluded ${ex.id}${ex.blocking ? ' (BLOKUJE)' : ' (do review, pominięty)'}: ${ex.reasons.join('; ')}`);
  }
  if (ch === 'learner' && strict && plan.excluded.some((e) => e.blocking)) {
    console.error('[learner] STRICT: pakiet przeznaczony dla uczniów nie przechodzi bramki albo jest uszkodzony — wydanie odrzucone, nic nie zapisano');
    failed = true;
  }
}
if (!failed) {
  for (const { ch, plan } of plans) {
    const releaseId = writeChannel(ch, plan);
    const ids = plan.included.map((p) => `${p.packageId}@${p.revision}`);
    console.log(`[${ch}] release ${releaseId}: included ${String(ids.length)} package(s): ${ids.join(', ') || '(none)'}; withdrawals: ${String(withdrawals.length)}`);
  }
}
process.exit(failed ? 1 : 0);
