import type { ContentPackage, Question, Rationale } from '@/content/types.ts';
import type { DecisionOutcome } from '@/domain/scoring.ts';
import { listCriteria } from '@/content/store.ts';
import { primaryScope } from '@/services/learning.ts';

/** The deciding rule: the rule shared by all rationales of the item (fallback: key decision's first rule). */
export function decidingRuleId(q: Question): string | null {
  const sets = q.rationales.map((r) => new Set(r.ruleIds));
  const first = q.rationales[0]?.ruleIds ?? [];
  const shared = first.find((id) => sets.every((s) => s.has(id)));
  if (shared) return shared;
  const keyId = 'selectedIds' in q.answerKey ? q.answerKey.selectedIds[0] : q.decisions[0]?.id;
  return q.rationales.find((r) => r.decisionId === keyId)?.ruleIds[0] ?? first[0] ?? null;
}

export function rationaleFor(q: Question, decisionId: string): Rationale | undefined {
  return q.rationales.find((r) => r.decisionId === decisionId);
}

export function isErrorOutcome(o: DecisionOutcome | undefined): boolean {
  return o === 'selected-incorrect' || o === 'omitted-correct' || o === 'row-incorrect' || o === 'row-blank' || o === 'row-double';
}

/** Text status per decision; meaning never relies on colour (D03 §4). */
export function outcomeText(q: Question, decisionId: string, outcome: DecisionOutcome | undefined): string {
  if (q.format === 'K') {
    const truth = 'truthByDecisionId' in q.answerKey ? q.answerKey.truthByDecisionId[decisionId] : undefined;
    const correctLabel = truth ? 'Prawda' : 'Fałsz';
    switch (outcome) {
      case 'row-correct': return 'Ocena poprawna.';
      case 'row-blank': return `Brak odpowiedzi. Poprawna ocena: ${correctLabel}.`;
      case 'row-double': return `Zapisano obie wartości — 0 pkt za ten wiersz. Poprawna ocena: ${correctLabel}.`;
      case 'row-incorrect':
      case 'selected-correct':
      case 'selected-incorrect':
      case 'omitted-correct':
      case 'not-selected-distractor':
      case undefined:
        return `Ocena niepoprawna. Poprawna ocena: ${correctLabel}.`;
    }
  }
  switch (outcome) {
    case 'selected-correct': return 'Wybrana poprawna odpowiedź.';
    case 'selected-incorrect': return 'Wybrana niepoprawna odpowiedź.';
    case 'omitted-correct': return 'Pominięta poprawna odpowiedź.';
    case 'not-selected-distractor':
    case 'row-blank':
    case 'row-correct':
    case 'row-double':
    case 'row-incorrect':
    case undefined:
      return 'Odpowiedź nie należy do klucza.';
  }
}

/** Neutral topic label that is safe before an answer (no scope names). */
export function topicLabelFor(packages: readonly ContentPackage[], q: Question): string {
  const pkg = packages.find((p) => p.questions.some((x) => x.id === q.id));
  return pkg ? pkg.title.split(' (')[0] ?? pkg.title : 'Wybrany cel';
}

export function goalLabelFor(packages: readonly ContentPackage[], q: Question): string {
  const scope = primaryScope(q);
  const crit = listCriteria(packages).find((c) => c.id === scope.criterionId);
  const aspect = crit?.aspects.find((a) => a.id === scope.aspectId);
  const note = packages.flatMap((p) => p.knowledge).find((k) => k.kind === 'note' && k.contactScopes.some((c) => c.criterionId === scope.criterionId && c.aspectId !== undefined && c.aspectId === scope.aspectId));
  return note?.title ?? aspect?.label ?? crit?.description ?? 'Wybrany cel';
}

export function formatMs(ms: number | null): string {
  if (ms === null) return 'brak danych';
  const min = Math.round(ms / 60000);
  if (min < 60) return `${String(min)} min`;
  const h = Math.round(ms / 3600000);
  if (h < 48) return `${String(h)} h`;
  return `${String(Math.round(ms / 86400000))} dni`;
}
