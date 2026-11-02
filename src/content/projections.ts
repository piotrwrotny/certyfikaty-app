/**
 * Projections separating what an active (not yet finalized) attempt may see
 * from solution data (docs/05, QA-14). The test component receives ONLY
 * QuestionPrompt; QuestionSolution is attached by the attempt service after the
 * allowed boundary. Hiding with CSS is never sufficient.
 */
import type { ItemFormat } from '@/domain/scoring.ts';
import type { Question, Rationale, AnswerKey, Decision, Revision } from './types.ts';

export interface PromptDecision {
  readonly id: string;
  readonly textMarkdown: string;
}

/** Safe-before-feedback projection: no key, no rationale, no family/EO/criterion hints. */
export interface QuestionPrompt {
  readonly id: string;
  readonly revision: Revision;
  readonly format: ItemFormat;
  readonly weight: number;
  readonly k?: number;
  readonly m?: number;
  readonly stemMarkdown: string;
  readonly instruction: string;
  readonly decisions: readonly PromptDecision[];
}

/** Revealed only after submit (Nauka) or finalization/conversion (Sprawdzenie). */
export interface QuestionSolution {
  readonly id: string;
  readonly revision: Revision;
  readonly answerKey: AnswerKey;
  readonly rationales: readonly Rationale[];
}

const PROMPT_KEYS = ['id', 'revision', 'format', 'weight', 'k', 'm', 'stemMarkdown', 'instruction', 'decisions'] as const;

export function toPrompt(question: Question): QuestionPrompt {
  const out: Record<string, unknown> = {};
  for (const key of PROMPT_KEYS) {
    const value = (question as unknown as Record<string, unknown>)[key];
    if (value !== undefined) out[key] = key === 'decisions' ? (value as readonly Decision[]).map((d) => ({ id: d.id, textMarkdown: d.textMarkdown })) : value;
  }
  return out as unknown as QuestionPrompt;
}

export function toSolution(question: Question): QuestionSolution {
  return {
    id: question.id,
    revision: question.revision,
    answerKey: question.answerKey,
    rationales: question.rationales,
  };
}

/** Forbidden keys that must never appear on a prompt object (defense in depth for QA-14). */
const FORBIDDEN_PROMPT_KEYS = ['answerKey', 'rationales', 'criterionMappings', 'familyRef', 'noveltyReview', 'sourceAnchor', 'role'];

export function assertPromptSafe(prompt: unknown): void {
  if (typeof prompt !== 'object' || prompt === null) throw new TypeError('Prompt must be an object');
  for (const key of FORBIDDEN_PROMPT_KEYS) {
    if (key in prompt) throw new Error(`QuestionPrompt leaks solution data: field "${key}" present`);
  }
}
