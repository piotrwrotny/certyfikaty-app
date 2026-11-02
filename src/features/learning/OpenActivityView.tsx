/** Open retrieval (FR-006): prompt before rubric, explicit self-assessment, no CPRE points. */
import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import type { AttemptRecord } from '@/data/db.ts';
import { listOpenActivities } from '@/content/store.ts';
import { Page } from '@/ui/Layout.tsx';
import { Markdown } from '@/ui/Markdown.tsx';

export function OpenActivityView({ activityId }: { activityId: string }) {
  const { learning, profile, content, navigate, setSaveError } = useApp();
  const activity = listOpenActivities(content.packages).find((a) => a.id === activityId);
  const [text, setText] = useState('');
  const [attempt, setAttempt] = useState<AttemptRecord | null>(null);
  const [selfLevel, setSelfLevel] = useState<string>('');
  const [saved, setSaved] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { headingRef.current?.focus(); }, [attempt]);

  if (!activity || !content.releaseId) {
    return <Page title="CPRE · Nauka"><h1 tabIndex={-1}>Tego materiału jeszcze nie ma.</h1><div className="actions"><button type="button" className="primary" onClick={() => { navigate({ name: 'goals' }); }}>Wybierz dostępny cel</button></div></Page>;
  }
  const submit = async () => {
    try {
      setAttempt(await learning.submitOpen(profile.id, content.releaseId ?? '', activity, text));
    } catch {
      setSaveError('Nie udało się zapisać odpowiedzi. Spróbuj ponownie.');
    }
  };
  const levels = [
    { id: 'all', label: 'Moja odpowiedź spełnia wszystkie elementy rubryki' },
    { id: 'part', label: 'Spełnia część elementów' },
    { id: 'none', label: 'Nie spełnia elementów rubryki' },
    { id: 'unsure', label: 'Nie potrafię tego ocenić' },
  ];
  return (
    <Page title="CPRE · Nauka" focused sideSummary="Źródło oceny" side={<><h2>Źródło oceny</h2><p>Samoocena według rubryki. Nie jest oceną ekspercką ani niezależnym pomiarem i nie daje punktów CPRE.</p></>}>
      <div className="rowhead"><span className="tag">Nauka</span><span className="micro muted">Wypowiedź otwarta</span></div>
      <h1 ref={headingRef} tabIndex={-1}>{attempt ? 'Porównaj z rubryką.' : 'Odpowiedz własnymi słowami.'}</h1>
      <Markdown className="md" text={activity.promptMarkdown} />
      <label className="block" htmlFor="open-answer">Twoja odpowiedź</label>
      <textarea id="open-answer" value={text} readOnly={Boolean(attempt)} onChange={(e) => { setText(e.currentTarget.value); }} />
      {!attempt ? (
        <div className="actions">
          <button type="button" className="primary" onClick={() => { void submit(); }}>Zapisz i porównaj z rubryką</button>
          <button type="button" className="link" onClick={() => { navigate({ name: 'goals' }); }}>Wróć do celów</button>
        </div>
      ) : (
        <section className="feedback">
          <h2>Rubryka i wzorzec</h2>
          <Markdown className="md" text={activity.rubricMarkdown} />
          <fieldset>
            <legend>Samoocena — nie ocena ekspercka</legend>
            {levels.map((l) => (
              <label className="block" key={l.id}><input type="radio" name="self" value={l.id} checked={selfLevel === l.id} disabled={saved} onChange={() => { setSelfLevel(l.id); }} /> {l.label}</label>
            ))}
          </fieldset>
          <div className="notice">To ćwiczenie odtworzenia. Samoocena pozostaje samooceną i nie jest dowodem niezależnego pomiaru.</div>
          <div className="actions">
            <button type="button" className="primary" disabled={!selfLevel || saved} onClick={() => {
              void learning.recordSelfAssessment(profile.id, attempt, activity, selfLevel === 'all' ? 1 : 0, 1).then(() => { setSaved(true); });
            }}>{saved ? 'Zapisano samoocenę' : 'Zapisz samoocenę'}</button>
            <button type="button" className="link" onClick={() => { navigate({ name: 'session' }); }}>Kontynuuj sesję</button>
          </div>
        </section>
      )}
    </Page>
  );
}
