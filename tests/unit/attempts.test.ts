import { describe, expect, it } from 'vitest';
import { AttemptRepository, WriteConflictError, AlreadySubmittedError, LeaseHeldError } from '@/data/attempts.ts';
import { ProfileRepository } from '@/data/profiles.ts';
import { scoreA, scoreP, scoreK, type ScoringItem } from '@/domain/scoring.ts';
import { fraction, equals, sum, fractionFromJson } from '@/domain/fraction.ts';
import { freshDb, conditions } from './helpers.ts';

const A = { format: 'A' as const, weight: 1, answerKey: { selectedIds: ['b'] } };

describe('attempts: draft, submit, immutable history (TASK-014)', () => {
  it('submit is idempotent and keeps the original answer', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const repo = new AttemptRepository(db);
    let attempt = await repo.create({ profileId: p.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: ['Q@r1'], conditions: conditions() });
    attempt = (await repo.saveDraft(p.id, attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['a'] })).attempt;
    const first = await repo.submitItem(p.id, attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['a'], scoreResult: scoreA(A, ['a']) });
    const second = await repo.submitItem(p.id, first.attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['b'], scoreResult: scoreA(A, ['b']) });
    expect(second.evaluation.id).toBe(first.evaluation.id);
    expect(second.answer.value).toEqual(['a']);
    expect(await repo.listEvaluations(p.id, attempt.id)).toHaveLength(1);
    // a later draft cannot overwrite a submitted learning answer
    await expect(repo.saveDraft(p.id, second.attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['b'] })).rejects.toBeInstanceOf(AlreadySubmittedError);
  });

  it('two tabs writing the same attempt: one wins, the other gets a detected conflict (QA-04)', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const tab1 = new AttemptRepository(db, 'tab-1');
    const tab2 = new AttemptRepository(db, 'tab-2');
    const attempt = await tab1.create({ profileId: p.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    const results = await Promise.allSettled([
      tab1.saveDraft(p.id, attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['a'] }),
      tab2.saveDraft(p.id, attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['c'] }),
    ]);
    const ok = results.filter((r) => r.status === 'fulfilled');
    const failed = results.filter((r) => r.status === 'rejected');
    expect(ok).toHaveLength(1);
    expect(failed).toHaveLength(1);
    expect((failed[0] as PromiseRejectedResult).reason).toBeInstanceOf(WriteConflictError);
  });

  it('foreign lease blocks writes until explicit takeover', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const tab1 = new AttemptRepository(db, 'tab-1');
    const tab2 = new AttemptRepository(db, 'tab-2');
    const attempt = await tab1.create({ profileId: p.id, kind: 'topic-test', mode: 'check', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    await expect(tab2.renewLease(p.id, attempt)).rejects.toBeInstanceOf(LeaseHeldError);
    const taken = await tab2.takeOver(p.id, attempt);
    expect(taken.leaseOwner).toBe('tab-2');
  });

  it('writes are bound to the captured profileId; another profile cannot write (QA-03/05)', async () => {
    const db = await freshDb();
    const profiles = new ProfileRepository(db);
    const ania = await profiles.create('Ania');
    const bartek = await profiles.create('Bartek');
    const repo = new AttemptRepository(db);
    const attempt = await repo.create({ profileId: ania.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    await expect(repo.saveDraft(bartek.id, attempt, { itemId: 'Q', revision: 'r1', format: 'A', value: ['a'] })).rejects.toBeInstanceOf(WriteConflictError);
    expect(await repo.listAnswers(bartek.id, attempt.id)).toHaveLength(0);
  });
});

describe('topic test: flags, finalize, convert (QA-15, QA-16)', () => {
  const items: Record<string, ScoringItem> = {
    'A1@r1': A,
    'P1@r1': { format: 'P', weight: 2, k: 2, answerKey: { selectedIds: ['1', '3'] } },
    'K1@r1': { format: 'K', weight: 2, m: 3, answerKey: { truthByDecisionId: { '1': true, '2': false, '3': true } } },
  };

  it('finalize is idempotent and yields one result', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const repo = new AttemptRepository(db);
    let attempt = await repo.create({ profileId: p.id, kind: 'topic-test', mode: 'check', contentReleaseId: 'r', pinnedItems: [], itemOrder: Object.keys(items), conditions: conditions() });
    attempt = (await repo.saveDraft(p.id, attempt, { itemId: 'A1', revision: 'r1', format: 'A', value: ['b'], flagged: true })).attempt;
    attempt = (await repo.saveDraft(p.id, attempt, { itemId: 'P1', revision: 'r1', format: 'P', value: ['1', '2', '3'] })).attempt; // excess
    attempt = (await repo.saveDraft(p.id, attempt, { itemId: 'K1', revision: 'r1', format: 'K', value: { '1': true, '2': null, '3': true } })).attempt; // blank row
    // still editable before finalization
    attempt = (await repo.saveDraft(p.id, attempt, { itemId: 'K1', revision: 'r1', format: 'K', value: { '1': true, '2': null, '3': false } })).attempt;
    const evaluate = (ans: { itemInstanceId: string; value: unknown }) => {
      const item = items[ans.itemInstanceId];
      if (!item) throw new Error('unknown');
      if (item.format === 'A') return scoreA(item, ans.value as string[]);
      if (item.format === 'P') return scoreP(item, ans.value as string[]);
      return scoreK(item, ans.value as Record<string, boolean | null>);
    };
    const [r1, r2] = await Promise.all([repo.finalize(p.id, attempt, evaluate), repo.finalize(p.id, attempt, evaluate).catch((e: unknown) => e)]);
    expect(r1.evaluations).toHaveLength(3);
    const again = await repo.finalize(p.id, r1.attempt, evaluate);
    expect(again.evaluations.map((e) => e.id).sort()).toEqual(r1.evaluations.map((e) => e.id).sort());
    expect(await repo.listEvaluations(p.id, attempt.id)).toHaveLength(3);
    void r2;
    const total = sum((await repo.listEvaluations(p.id, attempt.id)).map((e) => fractionFromJson(e.points)));
    // A 1 + P 0 (excess) + K 1 row of 3 → 2/3
    expect(equals(total, fraction(5, 3))).toBe(true);
  });

  it('conversion is irreversible and keeps answers', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const repo = new AttemptRepository(db);
    let attempt = await repo.create({ profileId: p.id, kind: 'topic-test', mode: 'check', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    attempt = (await repo.saveDraft(p.id, attempt, { itemId: 'A1', revision: 'r1', format: 'A', value: ['a'] })).attempt;
    attempt = await repo.pause(p.id, attempt);
    expect(attempt.lifecycle).toBe('paused');
    attempt = await repo.resume(p.id, attempt);
    expect(attempt.breaks[0]?.to).toBeDefined();
    attempt = await repo.convertToLearning(p.id, attempt);
    expect(attempt.currentMode).toBe('learning');
    expect(attempt.initialMode).toBe('check');
    const again = await repo.convertToLearning(p.id, attempt);
    expect(again.lifecycle).toBe('converted');
    expect(await repo.listAnswers(p.id, attempt.id)).toHaveLength(1);
  });
});
