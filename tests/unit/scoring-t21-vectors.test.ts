/**
 * QA-10: the 176 explicit expected vectors from T21 QA §7 plus full
 * enumeration of 1024 answer states (range 0..w, excess/blank rules). This is
 * arithmetic verification, not a content review of the keys.
 */
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fraction, equals, compare, type Fraction, ZERO } from '@/domain/fraction.ts';
import { score, type ScoringItem, type KAnswer, type KRecordedDecision } from '@/domain/scoring.ts';

interface InventoryItem {
  id: string;
  format: 'A' | 'P' | 'K';
  weight: number;
  answerKey: { selectedIds?: string[]; truthByDecisionId?: Record<string, boolean> };
  decisionCount: number;
}
interface Vector {
  id: string;
  itemId: string;
  format: 'A' | 'P' | 'K';
  weight: number;
  answer: string[] | Record<string, boolean | null | 'both'>;
  expectedPoints: { numerator: number; denominator: number };
}

const root = resolve(__dirname, '..', '..');
const inventory = (JSON.parse(readFileSync(resolve(root, 'examples/t21/t21-item-inventory.json'), 'utf-8')) as { questions: InventoryItem[] }).questions;
const vectors = (JSON.parse(readFileSync(resolve(root, 'examples/t21/t21-scoring-golden-vectors.json'), 'utf-8')) as { vectors: Vector[] }).vectors;
const byId = new Map(inventory.map((q) => [q.id, q]));

function toScoringItem(inv: InventoryItem): ScoringItem {
  if (inv.format === 'A') return { format: 'A', weight: inv.weight, answerKey: { selectedIds: inv.answerKey.selectedIds ?? [] } };
  if (inv.format === 'P') return { format: 'P', weight: inv.weight, k: inv.answerKey.selectedIds?.length ?? 0, answerKey: { selectedIds: inv.answerKey.selectedIds ?? [] } };
  const truth = inv.answerKey.truthByDecisionId ?? {};
  return { format: 'K', weight: inv.weight, m: Object.keys(truth).length, answerKey: { truthByDecisionId: truth } };
}

describe('T21 golden vectors (176)', () => {
  it('has exactly 176 vectors', () => {
    expect(vectors.length).toBe(176);
  });
  for (const v of vectors) {
    it(`${v.id} ${v.itemId}`, () => {
      const inv = byId.get(v.itemId);
      expect(inv).toBeDefined();
      if (!inv) return;
      const item = toScoringItem(inv);
      const answer = Array.isArray(v.answer) ? v.answer : (v.answer as KAnswer);
      const result = score(item, answer);
      expect(equals(result.points, fraction(v.expectedPoints.numerator, v.expectedPoints.denominator)),
        `${v.id}: got ${String(result.points.numerator)}/${String(result.points.denominator)}`).toBe(true);
    });
  }
});

describe('T21 full state enumeration (1024 states)', () => {
  it('every state is within 0..w and obeys excess/blank rules', () => {
    let count = 0;
    for (const inv of inventory) {
      const item = toScoringItem(inv);
      const w: Fraction = fraction(inv.weight);
      if (inv.format === 'A' || inv.format === 'P') {
        const options = ['a', 'b', 'c', 'd', 'e'].slice(0, inv.decisionCount);
        for (let mask = 0; mask < 2 ** options.length; mask += 1) {
          const answer = options.filter((_, i) => (mask & (1 << i)) !== 0);
          const result = score(item, answer);
          count += 1;
          expect(compare(result.points, ZERO)).toBeGreaterThanOrEqual(0);
          expect(compare(result.points, w)).toBeLessThanOrEqual(0);
          if (inv.format === 'A' && answer.length !== 1) expect(equals(result.points, ZERO)).toBe(true);
          if (inv.format === 'P' && answer.length > (inv.answerKey.selectedIds?.length ?? 0)) expect(equals(result.points, ZERO)).toBe(true);
        }
      } else {
        const values: KRecordedDecision[] = [null, false, true, 'both'];
        const rows = Object.keys(inv.answerKey.truthByDecisionId ?? {});
        const total = values.length ** rows.length;
        for (let i = 0; i < total; i += 1) {
          const answer: Record<string, KRecordedDecision> = {};
          let rem = i;
          for (const row of rows) {
            answer[row] = values[rem % values.length] ?? null;
            rem = Math.floor(rem / values.length);
          }
          const result = score(item, answer);
          count += 1;
          expect(compare(result.points, ZERO)).toBeGreaterThanOrEqual(0);
          expect(compare(result.points, w)).toBeLessThanOrEqual(0);
          // 'both' and blank rows never contribute points
          const contributing = rows.filter((r) => typeof answer[r] === 'boolean' && answer[r] === inv.answerKey.truthByDecisionId?.[r]).length;
          expect(equals(result.points, fraction(inv.weight * contributing, rows.length))).toBe(true);
        }
      }
    }
    expect(count).toBe(1024);
  });
});
