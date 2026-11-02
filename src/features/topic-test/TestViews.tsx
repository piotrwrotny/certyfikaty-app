/**
 * S06 Sprawdzenie (T0–T7). Before finalization the views hold ONLY
 * QuestionPrompt projections: no key, rationale, earned points, rule/EO/source
 * titles or knowledge in state, DOM, accessible names, document title or URL.
 * Flags are always available; answers stay editable until finalization of the
 * whole form; finalization is idempotent; conversion is irreversible.
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import type { AttemptRecord, AnswerRecord, EvaluationRecord } from '@/data/db.ts';
import { itemInstanceId, WriteConflictError, LeaseHeldError } from '@/data/attempts.ts';
import { toPrompt, type QuestionPrompt } from '@/content/projections.ts';
import type { Question } from '@/content/types.ts';
import { completeness, emptyAnswer, score, type AnyAnswer } from '@/domain/scoring.ts';
import { fractionFromJson, toDecimalString, toPercentString, sum } from '@/domain/fraction.ts';
import { Page } from '@/ui/Layout.tsx';
import { ConfirmDialog } from '@/ui/Dialog.tsx';
import { Markdown } from '@/ui/Markdown.tsx';
import { ChoiceControls } from '@/features/learning/ChoiceControls.tsx';
import { useSerializedWrites } from '@/features/learning/useSerializedWrites.ts';
import { decidingRuleId, rationaleFor, isErrorOutcome, outcomeText } from '@/features/learning/helpers.ts';
import { findRule } from '@/content/store.ts';
import { ItemUnavailableError, sumPoints, toScoringItem } from '@/services/learning.ts';

const NEUTRAL_TITLE = 'CPRE · Sprawdzenie';

export const CONVERT_TITLE = 'Przejść ze Sprawdzenia do Nauki?';
export const CONVERT_BODY = 'Przejście do Nauki udostępni wyjaśnienia. Ta próba nie wróci do niezależnego Sprawdzenia. Odpowiedzi zostaną zachowane.';

// ---------------- T0: conditions ----------------
export function TestIntroView() {
  const { learning, profile, content, navigate } = useApp();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [dictionary, setDictionary] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [known, setKnown] = useState<boolean | null>(null);
  const forms = learning.eligibleForms(content.packages);
  const first = forms[0];
  useEffect(() => { headingRef.current?.focus(); }, []);
  useEffect(() => {
    if (!first) return;
    void (async () => {
      const complete = await learning.historyComplete(profile.id);
      let any = false;
      for (const ref of first.form.itemRefs) {
        const fam = first.pkg.questions.find((q) => q.id === ref.id)?.familyRef.id;
        if ((await learning.exposure.assessNovelty(profile.id, ref.id, fam, complete)) !== 'new') any = true;
      }
      setKnown(any);
    })();
  }, [first, learning, profile.id]);

  if (!first) {
    return (
      <Page title={NEUTRAL_TITLE} side={<><h2>Co zostaje zachowane?</h2><p>Brak formy nie tworzy negatywnego dowodu o uczniu. Nauka pozostaje dostępna.</p></>}>
        <p className="eyebrow">Sprawdzenie · warunki</p>
        <h1 ref={headingRef} tabIndex={-1}>Nie mamy odpowiedniego zestawu do tego zakresu.</h1>
        <p className="lead">Test tematu wymaga osobno dopuszczonej formy. Sama liczba pytań w materiale nie tworzy formy sprawdzenia.</p>
        <div className="actions"><button type="button" className="primary" onClick={() => { navigate({ name: 'session' }); }}>Wróć do sesji</button></div>
      </Page>
    );
  }
  const { form, pkg } = first;
  const items = form.itemRefs.map((r) => pkg.questions.find((q) => q.id === r.id)).filter((q): q is Question => Boolean(q));
  const maxPoints = items.reduce((n, q) => n + q.weight, 0);
  const start = async () => {
    if (!content.releaseId) return;
    try {
      const attempt = await learning.startTopicTest(profile.id, content.packages, content.releaseId, form, form.dictionaryAllowed && dictionary);
      navigate({ name: 'test', attemptId: attempt.id, index: 0 });
    } catch (err) {
      setError(err instanceof ItemUnavailableError ? 'Ten zestaw nie jest teraz dostępny. Materiał wymaga aktualizacji.' : 'Nie udało się rozpocząć próby. Spróbuj ponownie.');
    }
  };
  return (
    <Page title={NEUTRAL_TITLE} side={<><h2>W pierwszym przyroście</h2><p>Test tematu bez limitu czasu. Pełny mock na czas pozostaje późniejszym zakresem.</p></>}>
      <p className="eyebrow">Sprawdzenie · warunki</p>
      <h1 ref={headingRef} tabIndex={-1}>Wynik zobaczysz na końcu.</h1>
      <p className="lead">{form.title}</p>
      <ul className="factlist">
        <li>{String(items.length)} zadania · łącznie {String(maxPoints)} pkt · bez limitu czasu.</li>
        <li>Możesz zmieniać odpowiedzi i oznaczać pytania do powrotu.</li>
        <li>Wyjaśnienia, źródła, cele i zdobyte punkty pojawią się po zakończeniu całości.</li>
        <li>Możesz zapisać miejsce i zrobić przerwę bez otwierania pomocy.</li>
        <li>{known === null ? 'Sprawdzamy nowość zadań…' : known ? 'Część zadań lub ich rodzin była już pokazana w tym profilu: nowość niepotwierdzona.' : 'Zadania nie były pokazane w tym profilu.'}</li>
      </ul>
      <div className="notice warning">
        <strong>Zakres i ograniczenia</strong>
        <p>{pkg.limitations[0] ?? 'Wycinek przygotowania.'} Wynik nie jest progiem zaliczenia ani oceną gotowości do egzaminu.</p>
      </div>
      {form.dictionaryAllowed ? (
        <>
          <label className="block"><input type="checkbox" checked={dictionary} onChange={(e) => { setDictionary(e.currentTarget.checked); }} /> Profil dopuszcza neutralny słownik językowy bez definicji RE</label>
          <p className="micro muted">To warunek próby. Słownik pojęć CPRE pozostaje pomocą dziedzinową.</p>
        </>
      ) : null}
      {error ? <div className="notice error" role="alert">{error}</div> : null}
      <div className="actions">
        <button type="button" className="primary" onClick={() => { void start(); }}>Rozpocznij sprawdzenie</button>
        <button type="button" className="link" onClick={() => { navigate({ name: 'session' }); }}>Wróć do sesji</button>
      </div>
    </Page>
  );
}

// ---------------- shared loader: prompts only ----------------
interface TestState {
  attempt: AttemptRecord;
  prompts: QuestionPrompt[];
  answers: Map<string, AnswerRecord>;
}

function useTestAttempt(attemptId: string) {
  const { learning, profile, navigate } = useApp();
  const [state, setState] = useState<TestState | null>(null);
  const load = useCallback(async () => {
    const attempt = await learning.attempts.get(profile.id, attemptId);
    if (attempt?.kind !== 'topic-test') { navigate({ name: 'session' }, { replace: true }); return; }
    const questions = await learning.pinnedQuestions(attempt);
    // Critical withdrawal/dispute of a pinned revision suspends the WHOLE form neutrally.
    if (attempt.lifecycle === 'active' || attempt.lifecycle === 'paused') {
      for (const q of questions) {
        if (await learning.content.isWithdrawn(q.id, q.revision)) {
          const suspended = await learning.attempts.suspendForWithdrawal(profile.id, attempt);
          const ans = await learning.attempts.listAnswers(profile.id, attempt.id);
          setState({ attempt: suspended, prompts: questions.map(toPrompt), answers: new Map(ans.map((a) => [a.itemInstanceId, a])) });
          return;
        }
      }
    }
    const answers = await learning.attempts.listAnswers(profile.id, attempt.id);
    setState({ attempt, prompts: questions.map(toPrompt), answers: new Map(answers.map((a) => [a.itemInstanceId, a])) });
  }, [learning, profile.id, attemptId, navigate]);
  useEffect(() => { void load(); }, [load]);
  return { state, setState, reload: load };
}

function answerFor(state: TestState, p: QuestionPrompt): AnyAnswer {
  return state.answers.get(itemInstanceId(p.id, p.revision))?.value ?? emptyAnswer(p.format, p.decisions.map((d) => d.id));
}

function SuspendedNotice({ attempt }: { attempt: AttemptRecord }) {
  const { learning, profile, navigate } = useApp();
  return (
    <Page title={NEUTRAL_TITLE}>
      <p className="eyebrow">Sprawdzenie · wstrzymane</p>
      <h1 tabIndex={-1}>Ta próba wymaga aktualizacji materiału.</h1>
      <p className="lead">Zachowaliśmy odpowiedzi. Możesz zakończyć próbę bez wyniku do wnioskowania albo świadomie przejść do Nauki.</p>
      <div className="actions">
        <button type="button" className="primary" onClick={() => { void learning.attempts.abandon(profile.id, attempt).then(() => { navigate({ name: 'session' }); }); }}>Zakończ bez wyniku</button>
        <button type="button" className="link" onClick={() => { void learning.attempts.convertToLearning(profile.id, attempt).then(() => { navigate({ name: 'test-result', attemptId: attempt.id }); }); }}>Przejdź do Nauki</button>
      </div>
    </Page>
  );
}

// ---------------- T1: answering ----------------
export function TestQuestionView({ attemptId, index }: { attemptId: string; index: number }) {
  const app = useApp();
  const { learning, profile, navigate, announce, setSaveError } = app;
  const profileId = profile.id;
  const { state, setState, reload } = useTestAttempt(attemptId);
  const [convertOpen, setConvertOpen] = useState(false);
  const [conflict, setConflict] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stateRef = useRef(state);
  useLayoutEffect(() => { stateRef.current = state; });
  const writes = useSerializedWrites();
  useEffect(() => {
    // adopt a (re)loaded attempt; later versions come from the write chain
    if (state && writes.getLatest()?.id !== state.attempt.id) writes.setLatest(state.attempt);
  }, [state, writes]);

  useEffect(() => {
    app.registerActiveAttempt(attemptId);
    return () => { app.registerActiveAttempt(null); };
  }, [app, attemptId]);

  useEffect(() => {
    if (!state) return;
    if (state.attempt.lifecycle === 'paused') {
      writes.setLatest(state.attempt);
      void writes.run((a) => learning.attempts.resume(profileId, a), (r) => r).then((a) => { setState((s) => (s ? { ...s, attempt: a } : s)); });
    }
  }, [state, learning, profileId, setState, writes]);

  useEffect(() => { headingRef.current?.focus(); }, [index, state?.attempt.id]);

  if (!state) return <Page title={NEUTRAL_TITLE}><p className="muted">Wczytujemy próbę…</p></Page>;
  const { attempt, prompts } = state;
  if (attempt.lifecycle === 'suspended-withdrawal') return <SuspendedNotice attempt={attempt} />;
  if (attempt.lifecycle === 'finalized' || attempt.lifecycle === 'converted' || attempt.lifecycle === 'abandoned') {
    navigate({ name: 'test-result', attemptId }, { replace: true });
    return null;
  }
  const i = Math.min(Math.max(index, 0), prompts.length - 1);
  const p = prompts[i];
  if (!p) return null;
  const inst = itemInstanceId(p.id, p.revision);
  const flagged = state.answers.get(inst)?.flagged ?? false;

  const save = async (value: AnyAnswer, flag?: boolean) => {
    const s = stateRef.current;
    if (!s) return;
    const prev = s.answers.get(inst);
    const optimistic: AnswerRecord = prev ? { ...prev, value, flagged: flag ?? prev.flagged } : { profileId, attemptId, itemInstanceId: inst, itemId: p.id, revision: p.revision, format: p.format, value, state: 'draft', flagged: flag ?? false, responseVersion: 0, updatedAt: '' };
    const answers = new Map(s.answers);
    answers.set(inst, optimistic);
    setState({ ...s, answers });
    try {
      const res = await writes.run((a) => learning.attempts.saveDraft(profileId, a, { itemId: p.id, revision: p.revision, format: p.format, value, ...(flag !== undefined ? { flagged: flag } : {}) }), (r) => r.attempt);
      setState((cur) => {
        if (!cur) return cur;
        const m = new Map(cur.answers);
        m.set(inst, res.answer);
        return { ...cur, attempt: res.attempt, answers: m };
      });
      setSaveError(null);
    } catch (err) {
      if (err instanceof LeaseHeldError) setConflict('Ta próba jest otwarta w innej karcie.');
      else if (err instanceof WriteConflictError) { setConflict('Inna karta zapisała nowszą wersję tej próby. Wczytaliśmy aktualny zapis.'); writes.setLatest(null); await reload(); }
      else setSaveError('Nie udało się zapisać odpowiedzi. Spróbuj ponownie.');
    }
  };

  const pause = async () => {
    const s = stateRef.current;
    if (!s) return;
    await writes.run((a) => learning.attempts.pause(profileId, a), (r) => r);
    navigate({ name: 'session' });
  };

  const confirmConvert = async () => {
    const s = stateRef.current;
    if (!s) return;
    await writes.run((a) => learning.attempts.convertToLearning(profileId, a), (r) => r);
    setConvertOpen(false);
    navigate({ name: 'test-result', attemptId });
  };

  return (
    <Page
      title={NEUTRAL_TITLE}
      side={
        <>
          <h2>Odpowiedzi można zmieniać</h2>
          <p>Punkty i wyjaśnienia pojawią się po zatwierdzeniu całej próby.</p>
          <nav className="pager" aria-label="Pytania testu">
            {prompts.map((pp, j) => {
              const f = state.answers.get(itemInstanceId(pp.id, pp.revision))?.flagged ?? false;
              return (
                <button key={pp.id} type="button" className={j === i ? 'current' : ''} aria-current={j === i ? 'step' : undefined} aria-label={`Pytanie ${String(j + 1)}${f ? ', oznaczone do powrotu' : ''}`} onClick={() => { navigate({ name: 'test', attemptId, index: j }); }}>
                  {String(j + 1)}<span>{f ? 'flaga' : ''}</span>
                </button>
              );
            })}
          </nav>
          <div className="line"><button type="button" className="small" onClick={() => { void pause(); }}>Zapisz miejsce i wyjdź</button></div>
          {attempt.conditions.dictionaryAllowed ? (
            <label className="block micro">
              <input type="checkbox" checked={attempt.conditions.dictionaryUsed} onChange={(e) => {
                const v = e.currentTarget.checked;
                void writes.run((a) => learning.attempts.setConditions(profileId, a, { dictionaryUsed: v }), (r) => r).then((a) => { setState((s) => (s ? { ...s, attempt: a } : s)); });
              }} /> Użyto dopuszczonego neutralnego słownika
            </label>
          ) : null}
          <p className="micro muted">Instrukcje i maksymalne wagi są jawne. Brak flagi nie wpływa na punkty.</p>
        </>
      }
    >
      <p className="eyebrow">Sprawdzenie · bez limitu</p>
      <div className="rowhead">
        <span className="tag check">Pytanie {String(i + 1)} z {String(prompts.length)}</span>
        <button type="button" className="small" aria-pressed={flagged} onClick={() => { void save(answerFor(state, p), !flagged); announce(flagged ? 'Usunięto oznaczenie.' : 'Oznaczono do powrotu.'); }}>
          {flagged ? 'Oznaczone do powrotu' : 'Oznacz do powrotu'}
        </button>
      </div>
      <h1 ref={headingRef} tabIndex={-1}>Twoja odpowiedź.</h1>
      <Markdown className="md" text={p.stemMarkdown} />
      {conflict ? (
        <div className="notice warning" role="alert">
          <p>{conflict}</p>
          <button type="button" className="small" onClick={() => { void learning.attempts.get(profileId, attempt.id).then((cur) => learning.attempts.takeOver(profileId, cur ?? attempt)).then((a) => { writes.setLatest(a); setState((s) => (s ? { ...s, attempt: a } : s)); setConflict(null); }); }}>Przejmij edycję w tej karcie</button>
        </div>
      ) : null}
      <ChoiceControls prompt={p} value={answerFor(state, p)} onChange={(v) => { void save(v); }} locked={false} mode="check" idPrefix={`t${String(i)}`} announce={announce} />
      <div className="actions">
        {i > 0 ? <button type="button" onClick={() => { navigate({ name: 'test', attemptId, index: i - 1 }); }}>Poprzednie</button> : null}
        {i < prompts.length - 1 ? (
          <button type="button" className="primary" onClick={() => { navigate({ name: 'test', attemptId, index: i + 1 }); }}>Następne pytanie</button>
        ) : (
          <button type="button" className="primary" onClick={() => { navigate({ name: 'test-review', attemptId }); }}>Przegląd odpowiedzi</button>
        )}
      </div>
      <div className="line">
        <button type="button" className="link" onClick={() => { void save(emptyAnswer(p.format, p.decisions.map((d) => d.id))); }}>Wyczyść odpowiedź</button>
        <button type="button" className="link" onClick={() => { setConvertOpen(true); }}>Przejdź do Nauki</button>
      </div>
      <ConfirmDialog id="convert" open={convertOpen} title={CONVERT_TITLE} body={CONVERT_BODY} confirmLabel="Przejdź do Nauki" onConfirm={() => { void confirmConvert(); }} onCancel={() => { setConvertOpen(false); }} />
    </Page>
  );
}

// ---------------- T2: neutral review & finalization ----------------
export function TestReviewView({ attemptId }: { attemptId: string }) {
  const { learning, profile, navigate } = useApp();
  const { state } = useTestAttempt(attemptId);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { headingRef.current?.focus(); }, [state?.attempt.id]);
  if (!state) return <Page title={NEUTRAL_TITLE}><p className="muted">Wczytujemy próbę…</p></Page>;
  const { attempt, prompts } = state;
  if (attempt.lifecycle === 'suspended-withdrawal') return <SuspendedNotice attempt={attempt} />;
  if (attempt.lifecycle === 'finalized' || attempt.lifecycle === 'converted') {
    navigate({ name: 'test-result', attemptId }, { replace: true });
    return null;
  }
  const facts = prompts.map((p) => {
    const c = completeness({ format: p.format, ...(p.k !== undefined ? { k: p.k } : {}), decisionIds: p.decisions.map((d) => d.id) }, answerFor(state, p));
    return { c, miss: p.format === 'K' ? c.blankRows : c.selectedCount === 0 ? 1 : 0 };
  });
  const missing = facts.reduce((n, f) => n + f.miss, 0);
  const excess = facts.filter((f) => f.c.excess).length;
  const rows = prompts.map((p, i) => {
    const c = facts[i]?.c ?? completeness({ format: p.format, decisionIds: [] }, []);
    const flagged = state.answers.get(itemInstanceId(p.id, p.revision))?.flagged ?? false;
    const desc = p.format === 'K' ? `${String(c.selectedCount)} z ${String(p.decisions.length)} wierszy z odpowiedzią` : `${String(c.selectedCount)} ${c.selectedCount === 1 ? 'zaznaczenie' : c.selectedCount > 1 && c.selectedCount < 5 ? 'zaznaczenia' : 'zaznaczeń'}`;
    return (
      <li key={p.id}>
        <div><strong>Pytanie {String(i + 1)}</strong><p className="micro muted">{desc}{flagged ? ' · oznaczone do powrotu' : ''}</p></div>
        <button type="button" className="small" onClick={() => { navigate({ name: 'test', attemptId, index: i }); }} aria-label={`Otwórz pytanie ${String(i + 1)}`}>Otwórz</button>
      </li>
    );
  });
  const finalize = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await learning.finalizeTest(profile.id, attempt);
      navigate({ name: 'test-result', attemptId }, { replace: true });
    } catch {
      setError('Nie udało się zapisać zakończenia. Odpowiedzi pozostają zachowane. Spróbuj ponownie.');
      setBusy(false);
    }
  };
  return (
    <Page title={NEUTRAL_TITLE} side={<><h2>Ostatnia kontrola</h2><p>To świadome zatwierdzenie całości. Flagi pomagają w przeglądzie; nie trzeba ich usuwać, aby zakończyć.</p></>}>
      <p className="eyebrow">Sprawdzenie · przed zakończeniem</p>
      <h1 ref={headingRef} tabIndex={-1}>Przejrzyj odpowiedzi.</h1>
      <p>Możesz wrócić do każdego pytania. Nie pokazujemy jeszcze ich poprawności.</p>
      <ul className="summarylist">{rows}</ul>
      <div className={`notice ${missing || excess ? 'warning' : ''}`}>
        <strong>Brakujące decyzje: {String(missing)}. Pytania P z nadmiarem zaznaczeń: {String(excess)}.</strong>
        <p>Nadmiar zaznaczeń daje 0 pkt za P. Puste decyzje otrzymują 0 pkt w swoim zakresie. Możesz mimo to zakończyć.</p>
      </div>
      <p>Po zakończeniu odpowiedzi zostaną zamknięte i pokażemy wynik całego zestawu.</p>
      {error ? <div className="notice error" role="alert">{error}</div> : null}
      <div className="actions">
        <button type="button" className="primary" disabled={busy} onClick={() => { void finalize(); }}>{busy ? 'Zapisywanie…' : 'Zakończ i pokaż wynik'}</button>
        <button type="button" className="link" onClick={() => { navigate({ name: 'test', attemptId, index: 0 }); }}>Wróć do odpowiedzi</button>
      </div>
    </Page>
  );
}

// ---------------- T5/T7: result (only after finalization or conversion) ----------------
export function TestResultView({ attemptId }: { attemptId: string }) {
  const { learning, profile, navigate } = useApp();
  const [data, setData] = useState<{ attempt: AttemptRecord; questions: Question[]; evaluations: EvaluationRecord[]; answers: AnswerRecord[] } | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    void (async () => {
      const attempt = await learning.attempts.get(profile.id, attemptId);
      if (attempt?.kind !== 'topic-test') { navigate({ name: 'session' }, { replace: true }); return; }
      if (attempt.lifecycle === 'active' || attempt.lifecycle === 'paused') { navigate({ name: 'test', attemptId, index: 0 }, { replace: true }); return; }
      const questions = await learning.pinnedQuestions(attempt);
      const evaluations = await learning.attempts.listEvaluations(profile.id, attempt.id);
      const answers = await learning.attempts.listAnswers(profile.id, attempt.id);
      setData({ attempt, questions, evaluations, answers });
      requestAnimationFrame(() => { headingRef.current?.focus(); });
    })();
  }, [learning, profile.id, attemptId, navigate]);
  if (!data) return <Page title={NEUTRAL_TITLE}><p className="muted">Wczytujemy wynik…</p></Page>;
  const { attempt, questions, evaluations, answers } = data;
  const converted = attempt.lifecycle === 'converted';
  const abandoned = attempt.lifecycle === 'abandoned';
  // For converted attempts points of saved answers are computed for display only (no finalized evaluation exists).
  const perItem = questions.map((q) => {
    const inst = itemInstanceId(q.id, q.revision);
    const ev = evaluations.find((e) => e.itemInstanceId === inst && !e.correctionOf);
    if (ev) return { q, points: fractionFromJson(ev.points), max: fractionFromJson(ev.maxPoints) };
    const ans = answers.find((a) => a.itemInstanceId === inst);
    const r = score(toScoringItem(q), ans?.value ?? emptyAnswer(q.format, q.decisions.map((d) => d.id)));
    return { q, points: r.points, max: r.maxPoints };
  });
  const total = converted || abandoned ? { points: sum(perItem.map((x) => x.points)), max: sum(perItem.map((x) => x.max)) } : sumPoints(evaluations);
  const breaks = attempt.breaks.length;
  return (
    <Page
      title={converted ? 'CPRE · Nauka' : NEUTRAL_TITLE}
      side={<><h2>Przegląd nie nadpisuje wyniku</h2><p>Odpowiedzi zostały zachowane. Otwarcie wyjaśnień jest ekspozycją dla przyszłych prób, bez zmiany warunków oddanej odpowiedzi.</p><p className="micro muted">{attempt.conditions.dictionaryUsed ? 'Odnotowano użycie dopuszczonego neutralnego słownika.' : 'Użycie neutralnego słownika: nieodnotowane.'}</p></>}
    >
      <p className="eyebrow">{converted ? 'Nauka po zmianie warunków' : abandoned ? 'Sprawdzenie · zakończone bez wyniku' : 'Sprawdzenie · zakończone'}</p>
      <h1 ref={headingRef} tabIndex={-1}>{converted ? 'Próba przeszła do Nauki.' : abandoned ? 'Próba zakończona bez wyniku.' : 'Zobacz wynik i następny krok.'}</h1>
      <p className="score">{toDecimalString(total.points)} / {toDecimalString(total.max)} <small>pkt · {toPercentString(total.points, total.max)} punktów</small></p>
      <p className="muted">
        {converted ? 'Punkty zapisanych odpowiedzi. Nie sfinalizowano niezależnego Sprawdzenia; to przegląd w Nauce.' : abandoned ? 'Wynik nie jest używany do wnioskowania.' : `Bez limitu · ${attempt.conditions.noveltyAtStart === 'new' ? 'zadania nowe w historii profilu' : 'nowość niepotwierdzona'} · ${String(breaks)} ${breaks === 1 ? 'zapisana przerwa' : 'zapisanych przerw'}.`}
      </p>
      <div className="notice warning">Wynik dotyczy wybranego wycinka. Nie określa opanowania celu, progu zaliczenia ani gotowości do egzaminu.</div>
      <h2>Przejrzyj dowolne zadanie</h2>
      {perItem.map((x, i) => (
        <div className="resultrow" key={x.q.id}>
          <div className="rowhead">
            <h2>Pytanie {String(i + 1)} · {x.q.format}</h2>
            <span>{toDecimalString(x.points)} / {toDecimalString(x.max)} pkt</span>
          </div>
          <button type="button" className="small" onClick={() => { navigate({ name: 'test-item', attemptId, index: i }); }}>Otwórz odpowiedź i wyjaśnienia</button>
        </div>
      ))}
      <div className="actions">
        <button type="button" className="primary" onClick={() => { navigate({ name: 'session' }); }}>Wróć do nauki z jednym celem</button>
        <button type="button" className="link" onClick={() => { navigate({ name: 'scope' }); }}>Zakres i ograniczenia dowodów</button>
      </div>
    </Page>
  );
}

// ---------------- T6: read-only review of one item ----------------
export function TestItemReviewView({ attemptId, index }: { attemptId: string; index: number }) {
  const { learning, profile, content, navigate, announce } = useApp();
  const [data, setData] = useState<{ attempt: AttemptRecord; q: Question; answer: AnyAnswer; outcomes: Record<string, string> } | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    void (async () => {
      const attempt = await learning.attempts.get(profile.id, attemptId);
      if (!attempt || (attempt.lifecycle !== 'finalized' && attempt.lifecycle !== 'converted' && attempt.lifecycle !== 'abandoned')) {
        navigate({ name: 'session' }, { replace: true });
        return;
      }
      const questions = await learning.pinnedQuestions(attempt);
      const q = questions[index];
      if (!q) { navigate({ name: 'test-result', attemptId }, { replace: true }); return; }
      const inst = itemInstanceId(q.id, q.revision);
      const ans = (await learning.attempts.listAnswers(profile.id, attempt.id)).find((a) => a.itemInstanceId === inst);
      const value = ans?.value ?? emptyAnswer(q.format, q.decisions.map((d) => d.id));
      const r = score(toScoringItem(q), value);
      // Revealing solution after finalization/conversion is exposure for future attempts.
      await learning.exposure.recordExposure({ profileId: profile.id, kind: 'item-solution', refId: q.id, refRevision: q.revision, familyId: q.familyRef.id, attemptId: attempt.id, origin: 'check-review' });
      setData({ attempt, q, answer: value, outcomes: r.decisionOutcomes });
      requestAnimationFrame(() => { headingRef.current?.focus(); });
    })();
  }, [learning, profile.id, attemptId, index, navigate]);
  if (!data) return <Page title={NEUTRAL_TITLE}><p className="muted">Wczytujemy odpowiedź…</p></Page>;
  const { q, answer, outcomes, attempt } = data;
  const ruleId = decidingRuleId(q);
  const rule = ruleId ? findRule(content.packages, ruleId) : null;
  return (
    <Page title="CPRE · Przegląd" focused sideSummary="Warunki tej odpowiedzi" side={<><h2>Warunki tej odpowiedzi</h2><p>Odpowiedź oddana w {attempt.initialMode === 'check' ? 'Sprawdzeniu' : 'Nauce'}; przegląd nie tworzy nowej próby ani nie przepisuje wyniku.</p></>}>
      <div className="rowhead"><span className="tag">{attempt.lifecycle === 'converted' ? 'Nauka' : 'Przegląd'}</span><span className="micro muted">Pytanie {String(index + 1)} · {q.format}</span></div>
      <h1 ref={headingRef} tabIndex={-1}>Twoja odpowiedź.</h1>
      <Markdown className="md" text={q.stemMarkdown} />
      {rule ? <section className="feedback"><p className="eyebrow">Zasada rozstrzygająca</p><Markdown className="md" text={rule.statementMarkdown} /></section> : null}
      <ChoiceControls
        prompt={toPrompt(q)}
        value={answer}
        onChange={() => undefined}
        locked
        mode="learning"
        idPrefix="r"
        announce={announce}
        renderAfter={(id) => {
          const rat = rationaleFor(q, id);
          const o = outcomes[id] as Parameters<typeof outcomeText>[2];
          return (
            <details className="rationale" open={isErrorOutcome(o)}>
              <summary>Wyjaśnienie {q.format === 'K' ? 'wiersza' : 'odpowiedzi'} {String(q.decisions.findIndex((d) => d.id === id) + 1)}</summary>
              <p className="answer">{outcomeText(q, id, o)}</p>
              {rat ? <Markdown className="md" text={rat.bodyMarkdown} /> : null}
            </details>
          );
        }}
      />
      <div className="actions"><button type="button" className="small" onClick={() => { navigate({ name: 'test-result', attemptId }); }}>Wróć do wyniku sprawdzenia</button></div>
    </Page>
  );
}
