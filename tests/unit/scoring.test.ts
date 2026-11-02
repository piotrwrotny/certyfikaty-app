import { describe, expect, it } from 'vitest';
import { fraction } from '@/domain/fraction.ts';
import { completeness, scoreA, scoreK, scoreP, type ScoringItemA, type ScoringItemK, type ScoringItemP } from '@/domain/scoring.ts';

const A: ScoringItemA = { format: 'A', weight: 3, answerKey: { selectedIds: ['b'] } };
const P: ScoringItemP = { format: 'P', weight: 2, k: 2, answerKey: { selectedIds: ['a', 'c'] } };
const K: ScoringItemK = { format: 'K', weight: 2, m: 3, answerKey: { truthByDecisionId: { '1': true, '2': false, '3': true } } };

describe('scoring A (QA-06)', () => {
  it('correct single choice earns full weight', () => {
    expect(scoreA(A, ['b']).points).toEqual(fraction(3));
  });
  it('wrong, empty and imported excess all earn 0', () => {
    expect(scoreA(A, ['a']).points).toEqual(fraction(0));
    expect(scoreA(A, []).points).toEqual(fraction(0));
    const excess = scoreA(A, ['b', 'a']);
    expect(excess.points).toEqual(fraction(0));
    expect(excess.reason).toBe('excess');
  });
  it('marks the omitted correct option', () => {
    expect(scoreA(A, ['a']).decisionOutcomes['b']).toBe('omitted-correct');
  });
});

describe('scoring P (QA-07)', () => {
  it('one correct of k=2 earns w/2; mixed pair earns w/2', () => {
    expect(scoreP(P, ['a']).points).toEqual(fraction(1));
    expect(scoreP(P, ['a', 'b']).points).toEqual(fraction(1));
  });
  it('3 selections with 2 hits earn 0 (no hard cap, excess zeroes)', () => {
    const r = scoreP(P, ['a', 'c', 'b']);
    expect(r.points).toEqual(fraction(0));
    expect(r.reason).toBe('excess');
  });
  it('no points for unselected distractors; w=3,k=2 partial is 3/2', () => {
    const P3: ScoringItemP = { ...P, weight: 3 };
    expect(scoreP(P3, ['a', 'b']).points).toEqual(fraction(3, 2));
  });
  it('full match earns full weight; empty earns 0', () => {
    expect(scoreP(P, ['a', 'c']).points).toEqual(fraction(2));
    expect(scoreP(P, []).points).toEqual(fraction(0));
  });
});

describe('scoring K (QA-08)', () => {
  it('correct/blank/wrong earns exactly 2/3 for m=3,w=2', () => {
    expect(scoreK(K, { '1': true, '2': null, '3': false }).points).toEqual(fraction(2, 3));
  });
  it('correct/double/correct earns exactly 4/3', () => {
    const r = scoreK(K, { '1': true, '2': 'both', '3': true });
    expect(r.points).toEqual(fraction(4, 3));
    expect(r.doubleRows).toBe(1);
  });
  it('blank never looks like a chosen Fałsz', () => {
    const r = scoreK(K, { '1': true, '2': null, '3': true });
    expect(r.decisionOutcomes['2']).toBe('row-blank');
    expect(r.blankRows).toBe(1);
  });
  it('supports m=4 and m=5', () => {
    const K4: ScoringItemK = { format: 'K', weight: 2, m: 4, answerKey: { truthByDecisionId: { '1': true, '2': false, '3': true, '4': false } } };
    expect(scoreK(K4, { '1': true, '2': false, '3': true, '4': null }).points).toEqual(fraction(3, 2));
    const K5: ScoringItemK = { format: 'K', weight: 3, m: 5, answerKey: { truthByDecisionId: { '1': true, '2': true, '3': false, '4': false, '5': true } } };
    expect(scoreK(K5, { '1': true, '2': true, '3': false, '4': false, '5': true }).points).toEqual(fraction(3));
    expect(scoreK(K5, { '1': true, '2': null, '3': null, '4': null, '5': null }).points).toEqual(fraction(3, 5));
  });
});

describe('A with 5 options', () => {
  it('scores exactly one key among five decisions', () => {
    const A5: ScoringItemA = { format: 'A', weight: 1, answerKey: { selectedIds: ['e'] } };
    expect(scoreA(A5, ['e']).points).toEqual(fraction(1));
    expect(scoreA(A5, ['d']).points).toEqual(fraction(0));
  });
});

describe('completeness facts (neutral, pre-feedback)', () => {
  it('counts P selections against k without judging correctness', () => {
    const c = completeness({ format: 'P', k: 2, decisionIds: ['a', 'b', 'c', 'd', 'e'] }, ['a', 'b', 'c']);
    expect(c.excess).toBe(true);
    expect(c.selectedCount).toBe(3);
  });
  it('counts blank K rows', () => {
    const c = completeness({ format: 'K', decisionIds: ['1', '2', '3'] }, { '1': true, '2': null, '3': null });
    expect(c.blankRows).toBe(2);
  });
});
