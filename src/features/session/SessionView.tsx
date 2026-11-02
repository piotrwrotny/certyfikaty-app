/**
 * S01 Sesja: one recommendation with a stated reason, entry from material or
 * question, other goal, and the topic-test entry. An active/paused check makes
 * this a neutral resume card (no help, no hints).
 */
import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import { recommend, type Recommendation, type Goal } from '@/services/planner.ts';
import { ItemUnavailableError } from '@/services/learning.ts';
import { Page } from '@/ui/Layout.tsx';
import { formatMs } from '@/features/learning/helpers.ts';
import type { Route } from '@/app/router.ts';

export function useStartGoal() {
  const { learning, profile, content, navigate } = useApp();
  return async (goal: Goal, itemId?: string): Promise<void> => {
    const id = itemId ?? goal.baseItem?.id;
    if (!id || !content.releaseId) {
      navigate({ name: 'state', kind: 'missing' });
      return;
    }
    try {
      const attempt = await learning.startItem(profile.id, content.packages, content.releaseId, id);
      await learning.clearPlan(profile.id, 'suspended-learning');
      navigate({ name: 'question', attemptId: attempt.id });
    } catch (err) {
      if (err instanceof ItemUnavailableError) {
        const kind: Extract<Route, { name: 'state' }>['kind'] = err.reason === 'missing' ? 'missing' : err.reason === 'withdrawn' ? 'withdrawn' : 'disputed';
        navigate({ name: 'state', kind });
      } else throw err;
    }
  };
}

export function SessionView() {
  const { db, profile, content, navigate } = useApp();
  const [rec, setRec] = useState<Recommendation | null>(null);
  const [now] = useState(() => Date.now());
  const headingRef = useRef<HTMLHeadingElement>(null);
  const startGoal = useStartGoal();

  useEffect(() => {
    let alive = true;
    void recommend(db, profile.id, content.loaded ? content.packages : null).then((r) => {
      if (alive) setRec(r);
    });
    return () => { alive = false; };
  }, [db, profile.id, content]);

  useEffect(() => {
    if (rec) headingRef.current?.focus();
  }, [rec]);

  const side = (
    <>
      <h2>Dwa konteksty</h2>
      <p>W Nauce pomoc jest dostępna i odnotowana. W Sprawdzeniu wyjaśnienia i punkty pojawiają się na końcu.</p>
      <div className="line">
        <h2>Zakres materiału</h2>
        <p>{content.packages.length === 0 ? 'Brak dopuszczonych materiałów na tym urządzeniu.' : content.packages.map((p) => p.title).join('; ')}</p>
        <p className="micro">To wycinek przygotowania, a nie pełny kurs Foundation Level. Wynik nie oznacza gotowości do egzaminu.</p>
      </div>
    </>
  );

  if (!rec) return <Page title="CPRE · Sesja"><p className="muted">Wczytujemy sesję…</p></Page>;

  if (rec.kind === 'resume-test') {
    const a = rec.attempt;
    return (
      <Page title="CPRE · Sprawdzenie" side={<><h2>Twój wybór</h2><p>Możesz zmienić warunki całej próby i kontynuować naukę. Wymaga to świadomego potwierdzenia.</p></>}>
        <p className="eyebrow">Sprawdzenie · zapisane miejsce</p>
        <h1 ref={headingRef} tabIndex={-1}>Wróć do rozpoczętej próby.</h1>
        <p className="lead">Odpowiedzi i flagi są zachowane. Wynik pojawi się po zatwierdzeniu całego zestawu.</p>
        {a.lifecycle === 'suspended-withdrawal' ? (
          <div className="notice warning"><p>Ta próba wymaga aktualizacji materiału. Zachowaliśmy odpowiedzi.</p></div>
        ) : (
          <div className="notice">Bez limitu czasu. Przerwa zostanie odnotowana; pomoc dziedzinowa pozostaje zamknięta.</div>
        )}
        <div className="actions">
          <button type="button" className="primary" onClick={() => { navigate(a.lifecycle === 'suspended-withdrawal' ? { name: 'test-review', attemptId: a.id } : { name: 'test', attemptId: a.id, index: 0 }); }}>
            {a.lifecycle === 'suspended-withdrawal' ? 'Zobacz możliwe działania' : 'Wznów sprawdzenie'}
          </button>
          <button type="button" className="link" onClick={() => { navigate({ name: 'test-review', attemptId: a.id }); }}>Przejdź do przeglądu odpowiedzi</button>
        </div>
      </Page>
    );
  }

  let body: React.ReactNode;
  switch (rec.kind) {
    case 'no-content':
      body = (
        <>
          <h1 ref={headingRef} tabIndex={-1}>Materiały są przygotowywane.</h1>
          <p className="lead">Na tym urządzeniu nie ma jeszcze dopuszczonych materiałów do nauki.</p>
          <p className="muted">To ograniczenie materiału, a nie ocena Twojej wiedzy. Gdy pojawi się nowe wydanie na hoście, pobierzemy je automatycznie.</p>
          <div className="actions">
            <button type="button" className="primary" onClick={() => { navigate({ name: 'data' }); }}>Sprawdź dane aplikacji</button>
          </div>
        </>
      );
      break;
    case 'resume-learning':
      body = (
        <>
          <h1 ref={headingRef} tabIndex={-1}>Wróć do zapisanego miejsca.</h1>
          <p className="lead">{typeof rec.plan.payload['label'] === 'string' ? rec.plan.payload['label'] : 'Przerwana nauka'}</p>
          <p className="muted">Zapisana odpowiedź i jej wynik pozostają bez zmian. Powrót nie tworzy nowej próby.</p>
          <div className="actions">
            <button type="button" className="primary" onClick={() => { navigate({ name: 'question', attemptId: String(rec.plan.payload['attemptId']) }); }}>Wznów zapisane miejsce</button>
            <button type="button" className="link" onClick={() => { navigate({ name: 'goals' }); }}>Wybierz inny cel</button>
          </div>
        </>
      );
      break;
    case 'delayed':
      body = (
        <>
          <h1 ref={headingRef} tabIndex={-1}>Jeden cel.<br />Jeden kolejny krok.</h1>
          <p className="lead">Późniejsza kontrola: {rec.goal.criterionDescription}</p>
          <p className="muted">Poprzednia samodzielna próba była {formatMs(now - Date.parse(rec.lastAttemptAt))} temu. Najpierw spróbuj bez ponownego objaśnienia.</p>
          {rec.knownItem ? <div className="notice"><p>To znane lub bliskie zadanie. Może służyć powtórce; jego wynik nie potwierdza nowej niezależnej rodziny.</p></div> : null}
          <div className="actions">
            <button type="button" className="primary" onClick={() => { void startGoal(rec.goal, rec.item.id); }}>Spróbuj pytania</button>
            <button type="button" className="link" onClick={() => { navigate({ name: 'goals' }); }}>Wybierz inny cel</button>
          </div>
        </>
      );
      break;
    case 'new-goal':
    case 'all-touched': {
      const goal = rec.goal;
      body = (
        <>
          <h1 ref={headingRef} tabIndex={-1}>Jeden cel.<br />Jeden kolejny krok.</h1>
          {goal ? <p className="lead">{goal.criterionDescription}</p> : null}
          <p className="muted">{rec.kind === 'new-goal' ? rec.reason : 'Każdy dostępny cel ma już Twoją próbę. Możesz utrwalić wybrany zakres albo zakończyć sesję.'}</p>
          <div className="actions">
            {goal?.note ? <button type="button" className="primary" onClick={() => { navigate({ name: 'lesson', goalKey: goal.key }); }}>Zacznij od wprowadzenia</button> : null}
            {goal?.baseItem ? <button type="button" className={goal.note ? '' : 'primary'} onClick={() => { void startGoal(goal); }}>Spróbuj pytania</button> : null}
          </div>
          <div className="line">
            <button type="button" className="link" onClick={() => { navigate({ name: 'goals' }); }}>Wybierz inny cel</button>
          </div>
        </>
      );
      break;
    }
  }

  return (
    <Page title="CPRE · Sesja" side={side}>
      <p className="eyebrow">Twoja sesja</p>
      {body}
      {rec.kind !== 'no-content' ? (
        <div className="line">
          <h2>Chcesz sprawdzić wybrany zakres?</h2>
          <p className="muted">Oddzielna próba bez pomocy. Odpowiedzi można zmieniać do zakończenia całości.</p>
          <button type="button" className="small" onClick={() => { navigate({ name: 'test-intro' }); }}>Poznaj warunki sprawdzenia</button>
        </div>
      ) : null}
    </Page>
  );
}
