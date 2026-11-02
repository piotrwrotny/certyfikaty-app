/**
 * Targeted correction (L7) and the follow-up chain B → REM → F → alternative
 * help → G (FR-015–017). Neutral correction without diagnosis. After two failed
 * follow-ups there is no automatic third check; D is never used as one.
 */
import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import type { AttemptRecord } from '@/data/db.ts';
import type { Question, Remediation } from '@/content/types.ts';
import { findQuestion, findKnowledge } from '@/content/store.ts';
import { ItemUnavailableError } from '@/services/learning.ts';
import { Page } from '@/ui/Layout.tsx';
import { Markdown } from '@/ui/Markdown.tsx';
import { goalLabelFor } from './helpers.ts';

export function RemediationView({ attemptId }: { attemptId: string }) {
  const { learning, profile, content, navigate } = useApp();
  const profileId = profile.id;
  const [data, setData] = useState<{ attempt: AttemptRecord; question: Question; rem: Remediation | null; nextRef: string | null } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    void (async () => {
      const attempt = await learning.attempts.get(profileId, attemptId);
      if (!attempt) { navigate({ name: 'session' }, { replace: true }); return; }
      const question = await learning.pinnedQuestion(attempt);
      if (!question) { navigate({ name: 'state', kind: 'missing' }, { replace: true }); return; }
      let rem: Remediation | null;
      let nextRef: string | null;
      if (attempt.kind === 'follow-up' && attempt.remediationId) {
        rem = content.packages.flatMap((p) => p.remediations).find((r) => r.id === attempt.remediationId) ?? null;
        const idx = rem ? rem.followUpRefs.findIndex((r) => r.id === question.id) : -1;
        nextRef = rem && idx >= 0 ? rem.followUpRefs[idx + 1]?.id ?? null : null;
      } else {
        rem = learning.findRemediation(content.packages, question);
        nextRef = rem?.followUpRefs[0]?.id ?? null;
      }
      if (rem) await learning.openRemediation(profileId, rem, attempt.id);
      setData({ attempt, question, rem, nextRef });
      requestAnimationFrame(() => { headingRef.current?.focus(); });
    })();
  }, [learning, profileId, attemptId, content.packages, navigate]);

  if (!data) return <Page title="CPRE · Nauka"><p className="muted">Wczytujemy korektę…</p></Page>;
  const { attempt, question, rem, nextRef } = data;
  const isSecond = attempt.kind === 'follow-up';
  const nextAvailable = nextRef ? findQuestion(content.packages, nextRef) : null;
  const sourceId = attempt.kind === 'follow-up' ? attempt.sourceAttemptId ?? attempt.id : attempt.id;

  const startNext = async () => {
    if (!nextRef || !rem || !content.releaseId) return;
    try {
      const next = await learning.startItem(profileId, content.packages, content.releaseId, nextRef, {
        kind: 'follow-up',
        sourceAttemptId: sourceId,
        remediationId: rem.id,
        failedFollowUps: attempt.kind === 'follow-up' ? attempt.failedFollowUps ?? 0 : 0,
      });
      navigate({ name: 'question', attemptId: next.id });
    } catch (err) {
      if (err instanceof ItemUnavailableError) navigate({ name: 'state', kind: err.reason === 'missing' ? 'novariant' : err.reason === 'withdrawn' ? 'withdrawn' : 'disputed' });
      else setError('Nie udało się rozpocząć zadania. Spróbuj ponownie.');
    }
  };

  if (!rem) {
    return (
      <Page title="CPRE · Nauka" side={<><h2>Co zostaje zachowane?</h2><p>Historia odpowiedzi i ujawnień. Brak wariantu nie tworzy negatywnego dowodu o uczniu.</p></>}>
        <p className="eyebrow">Dostępność materiału</p>
        <h1 ref={headingRef} tabIndex={-1}>Brakuje nowego zadania do tej kontroli.</h1>
        <p className="lead">Możesz wrócić do znanego przykładu dla utrwalenia. Nie potwierdzi on nowego kontekstu ani odroczonego transferu.</p>
        <div className="actions">
          <button type="button" className="primary" onClick={() => { navigate({ name: 'session' }); }}>Wróć do sesji</button>
          <button type="button" className="link" onClick={() => { navigate({ name: 'question', attemptId: attempt.id }); }}>Wróć do pierwotnego pytania</button>
        </div>
      </Page>
    );
  }

  const knowledgeLinks = rem.knowledgeRefs.map((r) => findKnowledge(content.packages, r.id)).filter((k): k is NonNullable<typeof k> => k !== null);

  return (
    <Page
      title="CPRE · Nauka"
      focused
      sideSummary="Pierwotna próba pozostaje"
      side={<><h2>Pierwotna próba pozostaje</h2><p>Po powrocie zobaczysz tę samą odpowiedź i wynik. Kolejne zadanie ma własny zapis.</p></>}
    >
      <p className="eyebrow">Nauka · {isSecond ? 'inne wyjaśnienie' : 'korekta'}</p>
      <h1 ref={headingRef} tabIndex={-1}>{isSecond ? 'Spróbujmy inaczej.' : 'Popraw jedno rozróżnienie.'}</h1>
      <p className="micro muted">{goalLabelFor(content.packages, question)} · ten sam cel, zmienione zadanie.</p>
      <Markdown className="md" text={isSecond ? rem.alternativeHelpMarkdown : rem.bodyMarkdown} />
      {knowledgeLinks.length > 0 ? (
        <details>
          <summary>Rozwiń materiał do korekty</summary>
          {knowledgeLinks.map((k) => (
            <section key={k.id} className="topic">
              <h2>{k.title}</h2>
              <Markdown className="md" text={k.bodyMarkdown} />
            </section>
          ))}
        </details>
      ) : null}
      {error ? <div className="notice error" role="alert">{error}</div> : null}
      <div className="actions">
        {nextAvailable ? (
          <button type="button" className="primary" onClick={() => { void startNext(); }}>{isSecond ? 'Druga kontrola' : 'Spróbuj innego przypadku'}</button>
        ) : (
          <button type="button" className="primary" onClick={() => { navigate({ name: 'state', kind: 'novariant' }); }}>Sprawdź dostępność zadania</button>
        )}
        <button type="button" className="link" onClick={() => { navigate({ name: 'question', attemptId: sourceId }); }}>Wróć do pierwotnego pytania</button>
        <button type="button" className="link" onClick={() => { navigate({ name: 'session' }); }}>Odłóż korektę i kontynuuj</button>
      </div>
      <p className="micro muted">Możesz odłożyć ten zakres i kontynuować naukę. Zachowamy potrzebę ponownej kontroli.</p>
    </Page>
  );
}
