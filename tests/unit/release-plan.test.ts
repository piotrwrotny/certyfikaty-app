import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { collectWithdrawals, planChannel, readPackages } from '../../scripts/content/release-plan.ts';
import { ROOT, loadValidators } from '../../scripts/content/lib.ts';
import type { ContentPackage, Withdrawal } from '../../src/content/types.ts';

const read = (p: string) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf-8')) as ContentPackage;
const T21 = read('content/normalized/T21.r1-full1.json');
const TECH = read('tests/fixtures/content/TECH01.r1.json');
const schema = loadValidators().contentPackage;

const temps: string[] = [];
afterEach(() => { for (const d of temps.splice(0)) rmSync(d, { recursive: true, force: true }); });
const tempDir = () => { const d = mkdtempSync(join(tmpdir(), 'cpre-release-')); temps.push(d); return d; };

describe('release plan: learner channel', () => {
  it('skips a package still in review without blocking, includes an approved one', () => {
    const plan = planChannel([T21, TECH], 'learner', schema);
    expect(plan.included.map((p) => p.packageId)).toEqual(['TECH01']);
    expect(plan.excluded).toEqual([expect.objectContaining({ id: 'T21', blocking: false })]);
  });

  it('blocks when a package meant for learners fails the gate', () => {
    const approvedWithoutRights = { ...T21, status: { ...T21.status, review: 'approved', publication: 'permitted', allowedUses: ['learning'], decisionRef: 'DEC-1' } } as ContentPackage;
    const plan = planChannel([approvedWithoutRights], 'learner', schema);
    expect(plan.included).toEqual([]);
    expect(plan.excluded[0]).toEqual(expect.objectContaining({ id: 'T21', blocking: true }));
    expect(plan.excluded[0]?.reasons).toContain('LEARNER_RIGHTS');
  });

  it('blocks broken and duplicate packages', () => {
    const broken = { ...TECH, questions: TECH.questions.map((q) => ({ ...q, rationales: [] })) } as ContentPackage;
    const plan = planChannel([TECH, { ...TECH }, broken], 'learner', schema);
    expect(plan.excluded.map((e) => [e.reasons[0], e.blocking])).toEqual([['DUPLICATE_PACKAGE_ID', true], ['DUPLICATE_PACKAGE_ID', true]]);
    const alone = planChannel([{ ...broken, packageId: 'BROKEN' }], 'learner', schema);
    expect(alone.excluded[0]?.blocking).toBe(true);
  });

  it('an empty corpus gives an empty, valid plan', () => {
    expect(planChannel([], 'learner', schema)).toEqual({ included: [], excluded: [] });
  });
});

describe('release plan: review channel and the ordinary corpus', () => {
  it('review channel needs rights covering internal-review', () => {
    const noReviewRights = { ...T21, rights: { status: 'unresolved', channels: [] } } as ContentPackage;
    const plan = planChannel([T21, noReviewRights], 'review', schema);
    expect(plan.included.map((p) => p.revision)).toEqual(['r1-full1']);
  });

  it('the ordinary corpus holds no technical fixture, so the learner release is empty today', () => {
    const corpus = readPackages(resolve(ROOT, 'content/normalized'));
    expect(corpus.map((p) => p.packageId)).not.toContain('TECH01');
    expect(corpus.filter((p) => (p.status.decisionRef ?? '').startsWith('FIXTURE-'))).toEqual([]);
    expect(planChannel(corpus, 'learner', schema).included).toEqual([]);
  });
});

describe('release plan: cumulative withdrawals', () => {
  const w = (decisionId: string, id = 'Q1'): Withdrawal => ({ decisionId, itemRef: { id, revision: 'r1' }, status: 'withdrawn', reasonCode: 'KEY-ERROR', decidedAt: '2026-11-02T00:00:00Z', decisionRef: 'Osoba; protokół' });

  it('merges every topic file in name order', () => {
    const dir = tempDir();
    writeFileSync(join(dir, 'T22.json'), JSON.stringify([w('WD-T22-0001')]));
    writeFileSync(join(dir, 'T23.json'), JSON.stringify([w('WD-T23-0001'), w('WD-T23-0002')]));
    expect(collectWithdrawals(dir)).toEqual({ withdrawals: [w('WD-T22-0001'), w('WD-T23-0001'), w('WD-T23-0002')], problems: [] });
  });

  it('reports a decision id used twice and a file that is not a list', () => {
    const dir = tempDir();
    writeFileSync(join(dir, 'A.json'), JSON.stringify([w('WD-1')]));
    writeFileSync(join(dir, 'B.json'), JSON.stringify([w('WD-1', 'Q2')]));
    writeFileSync(join(dir, 'C.json'), JSON.stringify({ withdrawals: [] }));
    const r = collectWithdrawals(dir);
    expect(r.withdrawals).toEqual([w('WD-1')]);
    expect(r.problems).toEqual(['B.json: wycofanie WD-1 występuje już w A.json', 'C.json: oczekiwano listy wycofań']);
  });

  it('a missing directory means no withdrawals', () => {
    expect(collectWithdrawals(join(tempDir(), 'none'))).toEqual({ withdrawals: [], problems: [] });
  });
});
