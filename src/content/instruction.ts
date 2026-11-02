/**
 * Format instruction shown above A/P/K controls. Derived from the format and k only,
 * so the instruction can never disagree with scoring. The authoring converter writes
 * the same text into `questions[].instruction` (docs/13 §8).
 */
import type { ItemFormat } from '@/domain/scoring.ts';

export function formatInstruction(p: { readonly format: ItemFormat; readonly k?: number }): string {
  if (p.format === 'A') return 'Wybierz jedną odpowiedź.';
  if (p.format === 'P') return `Wybierz ${String(p.k ?? 2)} odpowiedzi.`;
  return 'W każdym wierszu wybierz Prawda albo Fałsz. Brak wyboru pozostaje brakiem odpowiedzi.';
}
