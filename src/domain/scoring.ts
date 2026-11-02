import { fraction, type Fraction, ZERO } from './fraction.ts';

/**
 * Scoring rules from docs/06 and Blueprint F11. The format always comes from the
 * item metadata (`format`), never from the item ID prefix.
 */
export type ItemFormat = 'A' | 'P' | 'K';

/** Stored K decision value: null = no answer (never displayed as "Fałsz"). */
export type KDecision = boolean | null;
/** Values that may arrive from an import or a corrupted record; 'both' = two values recorded for one row. */
export type KRecordedDecision = KDecision | 'both';

export type SelectionAnswer = readonly string[];
export type KAnswer = Readonly<Record<string, KRecordedDecision>>;
export type AnyAnswer = SelectionAnswer | KAnswer;

export interface SelectionKey {
  readonly selectedIds: readonly string[];
}
export interface TruthKey {
  readonly truthByDecisionId: Readonly<Record<string, boolean>>;
}

export interface ScoringItemA {
  readonly format: 'A';
  readonly weight: number;
  readonly answerKey: SelectionKey;
}
export interface ScoringItemP {
  readonly format: 'P';
  readonly weight: number;
  readonly k: number;
  readonly answerKey: SelectionKey;
}
export interface ScoringItemK {
  readonly format: 'K';
  readonly weight: number;
  readonly m: number;
  readonly answerKey: TruthKey;
}
export type ScoringItem = ScoringItemA | ScoringItemP | ScoringItemK;

export type DecisionOutcome =
  | 'selected-correct'
  | 'selected-incorrect'
  | 'omitted-correct'
  | 'not-selected-distractor'
  | 'row-correct'
  | 'row-incorrect'
  | 'row-blank'
  | 'row-double';

export type ScoreReason = 'exact-match' | 'wrong-or-empty' | 'excess' | 'partial' | 'none' | 'per-row';

export interface ScoreResult {
  readonly format: ItemFormat;
  readonly points: Fraction;
  readonly maxPoints: Fraction;
  readonly reason: ScoreReason;
  readonly selectedCount: number;
  readonly correctCount: number;
  readonly decisionOutcomes: Readonly<Record<string, DecisionOutcome>>;
  readonly blankRows: number;
  readonly doubleRows: number;
}

function unique(ids: readonly string[]): string[] {
  return [...new Set(ids)];
}

export function scoreA(item: ScoringItemA, answer: SelectionAnswer): ScoreResult {
  const selected = unique(answer);
  const key = item.answerKey.selectedIds[0];
  const max = fraction(item.weight);
  const outcomes: Record<string, DecisionOutcome> = {};
  const exact = selected.length === 1 && selected[0] === key;
  for (const id of selected) outcomes[id] = id === key ? 'selected-correct' : 'selected-incorrect';
  if (key !== undefined && !selected.includes(key)) outcomes[key] = 'omitted-correct';
  return {
    format: 'A',
    points: exact ? max : ZERO,
    maxPoints: max,
    reason: exact ? 'exact-match' : selected.length > 1 ? 'excess' : 'wrong-or-empty',
    selectedCount: selected.length,
    correctCount: key !== undefined && selected.includes(key) ? 1 : 0,
    decisionOutcomes: outcomes,
    blankRows: selected.length === 0 ? 1 : 0,
    doubleRows: 0,
  };
}

export function scoreP(item: ScoringItemP, answer: SelectionAnswer): ScoreResult {
  const selected = unique(answer);
  const keySet = new Set(item.answerKey.selectedIds);
  const k = item.k;
  const max = fraction(item.weight);
  const correct = selected.filter((id) => keySet.has(id)).length;
  const outcomes: Record<string, DecisionOutcome> = {};
  for (const id of selected) outcomes[id] = keySet.has(id) ? 'selected-correct' : 'selected-incorrect';
  for (const id of keySet) if (!selected.includes(id)) outcomes[id] = 'omitted-correct';
  const base = { format: 'P' as const, maxPoints: max, selectedCount: selected.length, correctCount: correct, decisionOutcomes: outcomes, blankRows: selected.length === 0 ? 1 : 0, doubleRows: 0 };
  if (selected.length > k) {
    return { ...base, points: ZERO, reason: 'excess' };
  }
  const points = fraction(item.weight * correct, k);
  return { ...base, points, reason: correct === 0 ? 'none' : correct === k ? 'exact-match' : 'partial' };
}

export function scoreK(item: ScoringItemK, answer: KAnswer): ScoreResult {
  const truth = item.answerKey.truthByDecisionId;
  const rows = Object.keys(truth);
  const m = item.m;
  const max = fraction(item.weight);
  let correct = 0;
  let blank = 0;
  let double = 0;
  let answered = 0;
  const outcomes: Record<string, DecisionOutcome> = {};
  for (const row of rows) {
    const given = answer[row];
    const expected = truth[row];
    if (given === null || given === undefined) {
      blank += 1;
      outcomes[row] = 'row-blank';
    } else if (given === 'both') {
      double += 1;
      answered += 1;
      outcomes[row] = 'row-double';
    } else if (typeof given === 'boolean') {
      answered += 1;
      if (given === expected) {
        correct += 1;
        outcomes[row] = 'row-correct';
      } else {
        outcomes[row] = 'row-incorrect';
      }
    } else {
      // Unknown value: never a point, never shown as "Fałsz".
      outcomes[row] = 'row-blank';
      blank += 1;
    }
  }
  return {
    format: 'K',
    points: fraction(item.weight * correct, m),
    maxPoints: max,
    reason: 'per-row',
    selectedCount: answered,
    correctCount: correct,
    decisionOutcomes: outcomes,
    blankRows: blank,
    doubleRows: double,
  };
}

export function isSelectionAnswer(answer: AnyAnswer): answer is SelectionAnswer {
  return Array.isArray(answer);
}

export function asSelection(answer: AnyAnswer): SelectionAnswer {
  if (!isSelectionAnswer(answer)) throw new TypeError('A/P answers must be an array of decision IDs');
  return answer;
}

export function asK(answer: AnyAnswer): KAnswer {
  if (isSelectionAnswer(answer) || typeof answer !== 'object') throw new TypeError('K answers must be a row map');
  return answer;
}

export function score(item: ScoringItem, answer: AnyAnswer): ScoreResult {
  switch (item.format) {
    case 'A':
      return scoreA(item, asSelection(answer));
    case 'P':
      return scoreP(item, asSelection(answer));
    case 'K':
      return scoreK(item, asK(answer));
  }
}

export function emptyAnswer(format: ItemFormat, decisionIds: readonly string[]): AnyAnswer {
  if (format === 'K') {
    const out: Record<string, KDecision> = {};
    for (const id of decisionIds) out[id] = null;
    return out;
  }
  return [];
}

/** Neutral completeness facts shown before feedback (never correctness). */
export interface AnswerCompleteness {
  readonly answered: boolean;
  readonly blankRows: number;
  readonly selectedCount: number;
  readonly requiredCount: number | null;
  readonly excess: boolean;
}

export function completeness(
  item: { readonly format: ItemFormat; readonly k?: number; readonly decisionIds: readonly string[] },
  answer: AnyAnswer,
): AnswerCompleteness {
  if (item.format === 'K') {
    const a = asK(answer);
    const blank = item.decisionIds.filter((id) => a[id] === null || a[id] === undefined).length;
    return {
      answered: blank < item.decisionIds.length,
      blankRows: blank,
      selectedCount: item.decisionIds.length - blank,
      requiredCount: item.decisionIds.length,
      excess: false,
    };
  }
  const sel = unique(asSelection(answer));
  const required = item.format === 'P' ? (item.k ?? null) : 1;
  return {
    answered: sel.length > 0,
    blankRows: sel.length === 0 ? 1 : 0,
    selectedCount: sel.length,
    requiredCount: required,
    excess: item.format === 'P' && required !== null && sel.length > required,
  };
}
