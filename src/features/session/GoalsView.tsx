/**
 * S02 — choose another goal. Grouped per criterion. Material entry names the
 * scope (the learner chose to read it); question-first entry does NOT name the
 * scope before the answer (INTRO-T21, B-DEC-14: a revealing title is help).
 */
import { useEffect, useRef } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import { listGoals, groupByCriterion, nextScopeForQuestion } from '@/services/planner.ts';
import { listOpenActivities } from '@/content/store.ts';
import { Page } from '@/ui/Layout.tsx';
import { useStartGoal } from './SessionView.tsx';

export function GoalsView() {
  const { db, profile, content, navigate } = useApp();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const startGoal = useStartGoal();
  const groups = groupByCriterion(listGoals(content.packages));
  const open = listOpenActivities(content.packages);
  useEffect(() => { headingRef.current?.focus(); }, []);
  return (
    <Page title="CPRE · Wybór celu" side={<><h2>Zachowane miejsce</h2><p>Wybór innego celu zachowuje dotychczasowe próby. Jeśli przerwiesz naukę, wrócisz do tej samej odpowiedzi i jej wyjaśnienia.</p></>}>
      <p className="eyebrow">Wybór celu</p>
      <h1 ref={headingRef} tabIndex={-1}>Czego chcesz spróbować?</h1>
      <p className="muted">Wybór innego celu zachowuje dotychczasowe próby.</p>
      {groups.length === 0 ? (
        <div className="notice"><p>Tego materiału jeszcze nie ma. To ograniczenie materiału, a nie ocena Twojej wiedzy.</p></div>
      ) : null}
      {groups.map((grp) => {
        const withNotes = grp.goals.filter((g) => g.note);
        const hasQuestion = grp.goals.some((g) => g.baseItem);
        return (
          <section className="topic" key={grp.criterionId}>
            <h2>{grp.description}</h2>
            <p className="micro muted">{grp.topicLabel} · zakres częściowy</p>
            <div className="actions">
              {hasQuestion ? (
                <button type="button" className="primary" onClick={() => {
                  void nextScopeForQuestion(db, profile.id, grp).then((g) => { if (g) void startGoal(g); });
                }}>Zacznij od pytania</button>
              ) : <span className="micro muted">Brak zadania do tego celu.</span>}
            </div>
            {withNotes.length > 0 ? (
              <details>
                <summary>Zacznij od wprowadzenia</summary>
                <ul className="factlist">
                  {withNotes.map((g) => (
                    <li key={g.key}><button type="button" className="link" onClick={() => { navigate({ name: 'lesson', goalKey: g.key }); }}>{g.label}</button></li>
                  ))}
                </ul>
              </details>
            ) : null}
          </section>
        );
      })}
      {open.length > 0 ? (
        <section className="topic">
          <h2>Wypowiedź otwarta z rubryką</h2>
          <p className="micro muted">Samodzielne odtworzenie z pamięci, potem jawna samoocena według rubryki. Samoocena nie daje punktów CPRE.</p>
          <div className="actions">
            {open.map((o, i) => (
              <button key={o.id} type="button" className="link" onClick={() => { navigate({ name: 'open', activityId: o.id }); }}>Polecenie otwarte {String(i + 1)}</button>
            ))}
          </div>
        </section>
      ) : null}
      <div className="actions"><button type="button" className="link" onClick={() => { navigate({ name: 'session' }); }}>Wróć do sesji</button></div>
    </Page>
  );
}
