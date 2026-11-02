import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { toPrompt, toSolution, assertPromptSafe } from '@/content/projections.ts';
import type { ContentPackage } from '@/content/types.ts';

const root = resolve(__dirname, '..', '..');
const t21 = JSON.parse(readFileSync(resolve(root, 'content/normalized/T21.r1-full1.json'), 'utf-8')) as ContentPackage;

describe('QuestionPrompt projection (QA-14, TASK-009)', () => {
  it('contains no key, rationale, criterion, family, novelty or source anchor for any of the 32 T21 items', () => {
    expect(t21.questions).toHaveLength(32);
    for (const q of t21.questions) {
      const p = toPrompt(q);
      expect(() => { assertPromptSafe(p); }).not.toThrow();
      const json = JSON.stringify(p);
      for (const r of q.rationales) expect(json).not.toContain(r.bodyMarkdown);
      expect(json).not.toMatch(/REG-T21|KRY-T21|ZAK-T21|FAM-T21|RAT-T21|answerKey|truthByDecisionId|selectedIds/);
      expect(Object.keys(p).sort()).toEqual(['decisions', 'format', 'id', 'instruction', 'revision', 'stemMarkdown', 'weight', ...(q.k !== undefined ? ['k'] : []), ...(q.m !== undefined ? ['m'] : [])].sort());
    }
  });

  it('solution projection carries the key and every rationale', () => {
    const q = t21.questions[0];
    if (!q) throw new Error('fixture');
    const s = toSolution(q);
    expect(s.rationales).toHaveLength(q.decisions.length);
    expect(s.answerKey).toEqual(q.answerKey);
  });

  it('assertPromptSafe rejects leaked fields', () => {
    expect(() => { assertPromptSafe({ id: 'x', answerKey: {} }); }).toThrow(/answerKey/);
    expect(() => { assertPromptSafe({ id: 'x', rationales: [] }); }).toThrow(/rationales/);
  });
});

describe('T21 import fidelity (QA-10/QA-31)', () => {
  it('keeps every source status: pending review, review-only, no uses, review-only rights, no forms', () => {
    expect(t21.status.review).toBe('pending');
    expect(t21.status.publication).toBe('review-only');
    expect(t21.status.allowedUses).toEqual([]);
    expect(t21.rights.status).toBe('review-only');
    expect(t21.forms).toEqual([]);
    expect(t21.families.every((f) => f.review === 'pending')).toBe(true);
    expect(t21.questions.every((q) => q.noveltyReview === 'pending')).toBe(true);
  });

  it('has 32 items, 128 rationales, weight 47, 4 open activities, 8 notes, 3 comparisons, 8 remediations', () => {
    expect(t21.questions.reduce((n, q) => n + q.rationales.length, 0)).toBe(128);
    expect(t21.questions.reduce((n, q) => n + q.weight, 0)).toBe(47);
    expect(t21.openActivities).toHaveLength(4);
    expect(t21.knowledge.filter((k) => /^N-T21-0[1-8]$/.test(k.id))).toHaveLength(8);
    expect(t21.knowledge.filter((k) => k.kind === 'comparison')).toHaveLength(3);
    expect(t21.remediations).toHaveLength(8);
    // F is the first and G the second follow-up; D is never a follow-up
    for (const rem of t21.remediations) {
      expect(rem.followUpRefs.map((r) => r.id.slice(4, 5))).toEqual(['F', 'G']);
    }
  });

  it('format comes from the field, not the ID prefix', () => {
    const byPrefix = { B: 'A', F: 'K', G: 'P', D: 'A' } as const;
    for (const q of t21.questions) expect(q.format).toBe(byPrefix[q.id.slice(4, 5) as keyof typeof byPrefix]);
  });
});
