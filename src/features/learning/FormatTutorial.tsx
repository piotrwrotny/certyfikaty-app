/**
 * Neutral, skippable format tutorial (FR-029, D04 §3 "Pomijalne ćwiczenie
 * formatu"). The examples are exactly those specified in D04: neutral labels
 * Opcja 1–4, no RE concepts, no EO, no reserve. Scoring uses the same domain
 * functions. Nothing is recorded as evidence or exposure; the current
 * question's key is never involved.
 */
import { useState } from 'react';
import { Dialog } from '@/ui/Dialog.tsx';
import { ChoiceControls } from './ChoiceControls.tsx';
import type { QuestionPrompt } from '@/content/projections.ts';
import { score, emptyAnswer, type AnyAnswer, type ItemFormat, type ScoringItem } from '@/domain/scoring.ts';
import { toDecimalString } from '@/domain/fraction.ts';

const EXAMPLES: Record<ItemFormat, { prompt: QuestionPrompt; item: ScoringItem; keyText: string }> = {
  A: {
    prompt: { id: 'TUT-A', revision: 'r1', format: 'A', weight: 1, stemMarkdown: 'Przykład formatu A. Poprawna jest Opcja 2.', instruction: 'Wybierz jedną odpowiedź.', decisions: ['1', '2', '3', '4'].map((n) => ({ id: n, textMarkdown: `Opcja ${n}.` })) },
    item: { format: 'A', weight: 1, answerKey: { selectedIds: ['2'] } },
    keyText: 'Tylko pojedynczy wybór Opcji 2 daje 1 pkt. Pusty, inny lub nadmiarowy wybór daje 0.',
  },
  P: {
    prompt: { id: 'TUT-P', revision: 'r1', format: 'P', weight: 2, k: 2, stemMarkdown: 'Przykład formatu P. Poprawne są Opcje 1 i 3.', instruction: 'Wybierz 2 odpowiedzi.', decisions: ['1', '2', '3', '4'].map((n) => ({ id: n, textMarkdown: `Opcja ${n}.` })) },
    item: { format: 'P', weight: 2, k: 2, answerKey: { selectedIds: ['1', '3'] } },
    keyText: 'Tylko Opcja 1: 1 pkt. Opcje 1 i 2: 1 pkt. Trzy zaznaczenia: 0 pkt za całe pytanie.',
  },
  K: {
    prompt: { id: 'TUT-K', revision: 'r1', format: 'K', weight: 1, m: 3, stemMarkdown: 'Przykład formatu K. Klucz: Prawda, Fałsz, Prawda.', instruction: 'W każdym wierszu wybierz Prawda albo Fałsz.', decisions: [1, 2, 3].map((n) => ({ id: String(n), textMarkdown: `Etykieta ${String(n)}.` })) },
    item: { format: 'K', weight: 1, m: 3, answerKey: { truthByDecisionId: { '1': true, '2': false, '3': true } } },
    keyText: 'Dwa trafne wiersze i jeden pusty dają 2/3 pkt, a nie 1. Pusty wiersz nie oznacza „Fałsz”.',
  },
};

export function FormatTutorial({ format, open, onClose, announce }: { format: ItemFormat; open: boolean; onClose: () => void; announce: (m: string) => void }) {
  const ex = EXAMPLES[format];
  const [value, setValue] = useState<AnyAnswer>(() => emptyAnswer(format, ex.prompt.decisions.map((d) => d.id)));
  const [shown, setShown] = useState(false);
  const result = shown ? score(ex.item, value) : null;
  return (
    <Dialog open={open} onClose={onClose} labelledBy="tutorial-title">
      <div className="dialoghead">
        <span className="micro muted">Przykład punktacji · bez wpływu na wynik</span>
        <button type="button" className="small" onClick={onClose}>Wróć do pytania</button>
      </div>
      <div className="dialogbody">
        <h2 id="tutorial-title">Jak liczymy format {format}?</h2>
        <p>{ex.prompt.stemMarkdown}</p>
        <ChoiceControls prompt={ex.prompt} value={value} onChange={(v) => { setValue(v); setShown(false); }} locked={false} mode="learning" idPrefix={`tut-${format}`} announce={announce} />
        <div className="actions">
          <button type="button" className="primary" onClick={() => { setShown(true); }}>Pokaż wynik przykładu</button>
          <button type="button" className="link" onClick={() => { setValue(emptyAnswer(format, ex.prompt.decisions.map((d) => d.id))); setShown(false); }}>Wyczyść</button>
        </div>
        {result ? (
          <div className="notice" role="status">
            <p><strong>{toDecimalString(result.points)} / {toDecimalString(result.maxPoints)} pkt</strong> w tym przykładzie.</p>
            <p>{ex.keyText}</p>
          </div>
        ) : null}
        <p className="micro muted">To ćwiczenie formatu. Nie ujawnia klucza bieżącego pytania i nie jest dowodem wiedzy RE.</p>
      </div>
    </Dialog>
  );
}
