/**
 * content:validate — validates every normalized package and the repo fixtures:
 * JSON Schema (Ajv 2020, local schemas), semantic rules, learner-gate checks
 * and reference integrity (docs/07). Also re-checks the negative cases.
 */
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, readJson, loadValidators, formatAjvErrors, schemaValid } from './lib.ts';
import { validatePackageSemantics, validatePackageStructure, validateLearnerGate, combine } from '../../src/content/validate.ts';
import type { ContentPackage } from '../../src/content/types.ts';
import { collectWithdrawals } from './release-plan.ts';

let failures = 0;
function check(name: string, ok: boolean, details?: string): void {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${details && !ok ? ` — ${details}` : ''}`);
  if (!ok) failures += 1;
}

const validators = loadValidators();

// 1. Normalized packages and technical fixtures. An empty corpus is a valid state.
const normalizedDir = resolve(ROOT, 'content/normalized');
const fixturesDir = resolve(ROOT, 'tests/fixtures/content');
const files = existsSync(normalizedDir) ? readdirSync(normalizedDir).filter((f) => f.endsWith('.json')) : [];
const fixtureFiles = existsSync(fixturesDir) ? readdirSync(fixturesDir).filter((f) => f.endsWith('.json')) : [];
if (files.length === 0) console.log('PASS  content/normalized: brak pakietów (poprawny pusty korpus)');
for (const [dir, list] of [['content/normalized', files], ['tests/fixtures/content', fixtureFiles]] as const) {
  for (const file of list) {
    const pkg = readJson<ContentPackage>(`${dir}/${file}`);
    const schemaOk = schemaValid(validators.contentPackage, pkg);
    check(`${dir}/${file}: JSON Schema 2020-12`, schemaOk, formatAjvErrors(validators.contentPackage));
    const semantic = combine(validatePackageStructure(pkg), validatePackageSemantics(pkg));
    check(`${dir}/${file}: semantic rules`, semantic.ok, semantic.issues.map((i) => i.code).join(','));
  }
}

// 1b. Technical fixtures never sit in the ordinary corpus (CLAUDE.md: fixtures do not reach the learner release).
const fixtureIds = new Set(fixtureFiles.map((f) => readJson<ContentPackage>(`tests/fixtures/content/${f}`).packageId));
const leaked = files.map((f) => readJson<ContentPackage>(`content/normalized/${f}`))
  .filter((p) => fixtureIds.has(p.packageId) || (p.status.decisionRef ?? '').startsWith('FIXTURE-'));
check('content/normalized: brak fixtures technicznych', leaked.length === 0, leaked.map((p) => p.packageId).join(','));

// 1c. Cumulative withdrawals are valid manifest entries with unique decision ids.
const collected = collectWithdrawals(resolve(ROOT, 'content/withdrawals'));
check('content/withdrawals: unikalne identyfikatory decyzji', collected.problems.length === 0, collected.problems.join('; '));
const emptyManifest = readJson<Record<string, unknown>>('examples/learner-empty-manifest.json');
check(`content/withdrawals: ${String(collected.withdrawals.length)} wpisów zgodnych ze schematem manifestu`,
  schemaValid(validators.contentManifest, { ...emptyManifest, withdrawals: collected.withdrawals }), formatAjvErrors(validators.contentManifest));

// 2. Learner gate: T21 (pending review) must be rejected; TECH01 must pass.
if (files.includes('T21.r1-full1.json')) {
  const t21 = readJson<ContentPackage>('content/normalized/T21.r1-full1.json');
  const gate = validateLearnerGate(t21, { channel: 'learner', publicationChannel: 'internal-lan' });
  check('T21 rejected on learner channel (review pending, review-only, no uses, no rights)', !gate.ok && gate.issues.length >= 4);
  const reviewGate = validateLearnerGate(t21, { channel: 'review', publicationChannel: 'internal-review' });
  check('T21 allowed on review channel', reviewGate.ok);
}
if (fixtureFiles.includes('TECH01.r1.json')) {
  const tech = readJson<ContentPackage>('tests/fixtures/content/TECH01.r1.json');
  const gate = validateLearnerGate(tech, { channel: 'learner', publicationChannel: 'internal-lan', intendedUses: ['learning', 'topic-test'] });
  check('TECH01 (synthetic technical fixture) passes learner gate', gate.ok, gate.issues.map((i) => i.code).join(','));
}

// 3. Review fixture from the handoff package stays review-only.
const reviewFixture = readJson<ContentPackage>('examples/t21/t21-review-fixture.json');
check('examples review fixture: JSON Schema', schemaValid(validators.contentPackage, reviewFixture), formatAjvErrors(validators.contentPackage));
const fixtureGate = validateLearnerGate(reviewFixture, { channel: 'learner', publicationChannel: 'internal-lan' });
check('examples review fixture rejected on learner channel', !fixtureGate.ok);

// 4. Negative cases from the handoff package.
interface NegativeCase { name: string; schema: string; check: 'schema' | 'semantic' | 'learner-gate'; expectedCode: string | null; data: unknown }
const negative = readJson<{ cases: NegativeCase[] }>('examples/negative-cases.json');
for (const c of negative.cases) {
  const validator = c.schema === 'content-package' ? validators.contentPackage : validators.contentManifest;
  if (c.check === 'schema') {
    check(`negative(schema): ${c.name}`, !(validator(c.data)));
  } else if (c.check === 'semantic') {
    const schemaOk = validator(c.data);
    if (!schemaOk) {
      check(`negative(semantic): ${c.name}`, true);
      continue;
    }
    const res = c.schema === 'content-package'
      ? validatePackageSemantics(c.data as ContentPackage)
      : { ok: true, issues: [] };
    const hit = !res.ok && (c.expectedCode === null || res.issues.some((i) => i.code === c.expectedCode));
    check(`negative(semantic): ${c.name} (${c.expectedCode ?? 'any'})`, hit, res.issues.map((i) => i.code).join(','));
  } else {
    const pkg = c.data as ContentPackage;
    const res = validateLearnerGate(pkg, { channel: 'learner', publicationChannel: 'internal-lan' });
    check(`negative(learner-gate): ${c.name}`, !res.ok);
  }
}

// 5. Manifest examples
const reviewManifest = readJson<unknown>('examples/releases/review-0001/manifest.json');
check('example review manifest: JSON Schema', schemaValid(validators.contentManifest, reviewManifest), formatAjvErrors(validators.contentManifest));
const learnerEmpty = readJson<unknown>('examples/learner-empty-manifest.json');
check('empty learner manifest valid', schemaValid(validators.contentManifest, learnerEmpty), formatAjvErrors(validators.contentManifest));

console.log(failures === 0 ? '\ncontent:validate OK' : `\ncontent:validate FAILED (${String(failures)})`);
process.exit(failures === 0 ? 0 : 1);
