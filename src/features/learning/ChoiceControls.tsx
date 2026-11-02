/**
 * A/P/K controls (FR-007–009, D-DEC-05). Receives ONLY a QuestionPrompt —
 * the solution is never passed into this component. Feedback content is
 * injected by the parent through `renderAfter` after the allowed boundary.
 *
 * A: radio group, change, clear; no auto-submit.
 * P: checkboxes without hard cap, neutral counter n/k.
 * K: one radio group per row, initial null, per-row clear, text state.
 */
import { type ReactNode } from 'react';
import type { QuestionPrompt } from '@/content/projections.ts';
import type { AnyAnswer, KAnswer, KDecision, SelectionAnswer } from '@/domain/scoring.ts';
import { InlineMarkdown } from '@/ui/Markdown.tsx';
import { formatInstruction } from '@/content/instruction.ts';

export function ChoiceControls({ prompt, value, onChange, locked, renderAfter, mode, idPrefix, announce }: {
  prompt: QuestionPrompt;
  value: AnyAnswer;
  onChange: (next: AnyAnswer) => void;
  locked: boolean;
  renderAfter?: (decisionId: string) => ReactNode;
  mode: 'learning' | 'check';
  idPrefix: string;
  announce: (msg: string) => void;
}) {
  const legend = `${formatInstruction(prompt)} Maksymalnie ${String(prompt.weight)} pkt.`;

  if (prompt.format === 'K') {
    const k = value as KAnswer;
    const setRow = (id: string, v: KDecision) => {
      onChange({ ...k, [id]: v });
    };
    return (
      <fieldset>
        <legend>{legend}</legend>
        {prompt.decisions.map((d, i) => {
          const current = k[d.id] ?? null;
          const stateText = current === null ? 'Brak odpowiedzi.' : current === 'both' ? 'Zapisano obie wartości (nieprawidłowy zapis).' : `Twoja odpowiedź: ${current ? 'Prawda' : 'Fałsz'}.`;
          return (
            <fieldset className="krow" key={d.id}>
              <legend>{String(i + 1)}. <InlineMarkdown text={d.textMarkdown} /></legend>
              <div className="kcontrols">
                {([true, false] as const).map((v) => (
                  <label key={String(v)}>
                    <input
                      type="radio"
                      name={`${idPrefix}-k-${d.id}`}
                      value={String(v)}
                      checked={current === v}
                      disabled={locked}
                      onChange={() => { setRow(d.id, v); }}
                    />
                    {v ? 'Prawda' : 'Fałsz'}
                  </label>
                ))}
                {!locked ? (
                  <button
                    type="button"
                    className="link"
                    id={`${idPrefix}-clear-${d.id}`}
                    aria-label={`Wyczyść wiersz ${String(i + 1)}`}
                    onClick={() => {
                      setRow(d.id, null);
                      announce(`Wiersz ${String(i + 1)}: brak odpowiedzi.`);
                    }}
                  >
                    Wyczyść
                  </button>
                ) : null}
              </div>
              <p className="status">{stateText}</p>
              {renderAfter?.(d.id)}
            </fieldset>
          );
        })}
      </fieldset>
    );
  }

  const sel = value as SelectionAnswer;
  const type = prompt.format === 'A' ? 'radio' : 'checkbox';
  const toggle = (id: string, checked: boolean) => {
    if (prompt.format === 'A') {
      onChange([id]);
      return;
    }
    onChange(checked ? [...sel.filter((x) => x !== id), id] : sel.filter((x) => x !== id));
  };
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        <div className="options">
          {prompt.decisions.map((d) => {
            const chosen = sel.includes(d.id);
            return (
              <div className="option" key={d.id}>
                <label>
                  <input
                    name={`${idPrefix}-choice`}
                    type={type}
                    value={d.id}
                    id={`${idPrefix}-opt-${d.id}`}
                    checked={chosen}
                    disabled={locked}
                    onChange={(e) => { toggle(d.id, e.currentTarget.checked); }}
                  />
                  <span>
                    <InlineMarkdown text={d.textMarkdown} />
                    {locked && chosen ? <><br /><strong className="micro">Twój wybór</strong></> : null}
                  </span>
                </label>
                {renderAfter?.(d.id)}
              </div>
            );
          })}
        </div>
      </fieldset>
      {prompt.format === 'P' ? (
        <>
          <p id={`${idPrefix}-count`} className="status" aria-live="polite">
            Zaznaczono {String(sel.length)} z {String(prompt.k ?? 2)} wymaganych.
          </p>
          {mode === 'learning' && !locked ? (
            <p className="status" id={`${idPrefix}-excess`}>
              {sel.length > (prompt.k ?? 2) ? 'Nadmiar zaznaczeń da 0 pkt za całe pytanie. Możesz poprawić wybór lub świadomie oddać.' : ''}
            </p>
          ) : null}
        </>
      ) : null}
    </>
  );
}
