/** L0 — short note: core first, optional details; reading is exposure, not evidence. */
import { useEffect, useRef } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import { listGoals } from '@/services/planner.ts';
import { Page } from '@/ui/Layout.tsx';
import { Markdown } from '@/ui/Markdown.tsx';
import { useStartGoal } from './SessionView.tsx';

/** Split a note into its core (first paragraph) and the rest (optional detail). */
function splitCore(md: string): [string, string] {
  const parts = md.split(/\n\s*\n/);
  return [parts[0] ?? md, parts.slice(1).join('\n\n')];
}

export function LessonView({ goalKey }: { goalKey: string }) {
  const { content, learning, profile, navigate } = useApp();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const startGoal = useStartGoal();
  const goal = listGoals(content.packages).find((g) => g.key === goalKey);
  const note = goal?.note;
  useEffect(() => {
    headingRef.current?.focus();
    if (note) void learning.openKnowledge(profile.id, note);
  }, [note, learning, profile.id]);

  if (!goal || !note) {
    return (
      <Page title="CPRE · Nauka">
        <p className="eyebrow">Dostępność materiału</p>
        <h1 ref={headingRef} tabIndex={-1}>Tego materiału jeszcze nie ma.</h1>
        <p className="lead">Brakuje przygotowanej treści dla wybranego rozróżnienia. To ograniczenie materiału, a nie ocena Twojej wiedzy.</p>
        <div className="actions"><button type="button" className="primary" onClick={() => { navigate({ name: 'goals' }); }}>Wybierz dostępny cel</button></div>
      </Page>
    );
  }
  const [core, rest] = splitCore(note.bodyMarkdown);
  return (
    <Page title="CPRE · Nauka" focused sideSummary="Co zostanie sprawdzone?" side={<><h2>Co zostanie sprawdzone?</h2><p>Następne zadanie wymaga decyzji. Samo przeczytanie materiału nie oznacza samodzielnego wykonania.</p></>}>
      <p className="eyebrow">Nauka · krótkie wprowadzenie</p>
      <h1 ref={headingRef} tabIndex={-1}>{note.title}</h1>
      <Markdown className="md" text={core} />
      {rest ? (
        <details>
          <summary>Rozwiń warunki i przykłady</summary>
          <Markdown className="md" text={rest} />
        </details>
      ) : null}
      <p className="micro muted">Własne objaśnienie projektu; nie jest oficjalną polską definicją IREB.</p>
      <div className="actions">
        {goal.baseItem ? <button type="button" className="primary" onClick={() => { void startGoal(goal); }}>Przejdź do pytania</button> : null}
        <button type="button" className="link" onClick={() => { navigate({ name: 'goals' }); }}>Wybierz inny cel</button>
      </div>
    </Page>
  );
}
