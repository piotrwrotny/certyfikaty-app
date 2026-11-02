/**
 * Nauka: one item A/P/K (L1–L3), confirm on blanks/excess (L4), layered
 * feedback with every rationale (L5), contextual knowledge with return
 * (S04), follow-up results (L8/L9). The original answer and evaluation are
 * immutable after submit; return/refresh never creates a new attempt.
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import type { AttemptRecord, EvaluationRecord } from '@/data/db.ts';
import { WriteConflictError, LeaseHeldError, AlreadySubmittedError } from '@/data/attempts.ts';
import type { Question } from '@/content/types.ts';
import { toPrompt } from '@/content/projections.ts';
import { completeness, emptyAnswer, type AnyAnswer, type DecisionOutcome } from '@/domain/scoring.ts';
import { fractionFromJson, toDecimalString, equals } from '@/domain/fraction.ts';
import { Page } from '@/ui/Layout.tsx';
import { ConfirmDialog } from '@/ui/Dialog.tsx';
import { Markdown } from '@/ui/Markdown.tsx';
import { ChoiceControls } from './ChoiceControls.tsx';
import { useSerializedWrites } from './useSerializedWrites.ts';
import { FormatTutorial } from './FormatTutorial.tsx';
import { KnowledgeDialog, noteForRule, type KnowledgeEntry } from '@/features/knowledge/KnowledgeDialog.tsx';
import { decidingRuleId, rationaleFor, isErrorOutcome, outcomeText, goalLabelFor, topicLabelFor, formatMs } from './helpers.ts';
import { findKnowledge, findRule } from '@/content/store.ts';
import { primaryScope } from '@/services/learning.ts';

interface Loaded {
  attempt: AttemptRecord;
  question: Question;
  value: AnyAnswer;
  evaluation: EvaluationRecord | null;
  withdrawn: 'withdrawn' | 'key-disputed' | null;
}

export function QuestionView({ attemptId }: { attemptId: string }) {
  const app = useApp();
  const { learning, profile, content, navigate, announce, setSaveError } = app;
  const profileId = profile.id; // captured: async continuations never write to another profile
  const [state, setState] = useState<Loaded | null>(null);
  const [missing, setMissing] = useState(false);
  const [confirm, setConfirm] = useState<null | { missing: number; excess: boolean }>(null);
  const [kStack, setKStack] = useState<KnowledgeEntry[]>([]);
  const [opened, setOpened] = useState<Record<string, boolean>>({});
  const [conflict, setConflict] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const anchorRef = useRef<string | null>(null);
  const feedbackRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stateRef = useRef<Loaded | null>(null);
  useLayoutEffect(() => { stateRef.current = state; });
  const writes = useSerializedWrites();

  const load = useCallback(async () => {
    const attempt = await learning.attempts.get(profileId, attemptId);
    if (!attempt || (attempt.kind !== 'learning-item' && attempt.kind !== 'follow-up')) {
      setMissing(true);
      return;
    }
    const question = await learning.pinnedQuestion(attempt);
    if (!question) {
      setMissing(true);
      return;
    }
    const answers = await learning.attempts.listAnswers(profileId, attempt.id);
    const evals = await learning.attempts.listEvaluations(profileId, attempt.id);
    const w = await learning.content.isWithdrawn(question.id, question.revision);
    const nav = await learning.loadNavigation(profileId, attempt.id);
    const answer = answers[0];
    writes.setLatest(attempt);
    setState({
      attempt,
      question,
      value: answer?.value ?? emptyAnswer(question.format, question.decisions.map((d) => d.id)),
      evaluation: evals.find((e) => !e.correctionOf) ?? null,
      withdrawn: w ? w.status : null,
    });
    if (nav) {
      const o: Record<string, boolean> = {};
      for (const r of nav.reveals) o[r] = true;
      for (const r of nav.openSections) o[r] = false;
      setOpened(o);
      requestAnimationFrame(() => {
        window.scrollTo(0, nav.scrollY);
        const target = nav.focusTarget ? document.getElementById(nav.focusTarget) : null;
        (target ?? headingRef.current)?.focus({ preventScroll: true });
      });
    } else {
      requestAnimationFrame(() => { headingRef.current?.focus(); });
    }
  }, [learning, profileId, attemptId, writes]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    app.registerActiveAttempt(attemptId);
    return () => { app.registerActiveAttempt(null); };
  }, [app, attemptId]);

  const submitted = Boolean(state?.evaluation);
  const prompt = useMemo(() => (state ? toPrompt(state.question) : null), [state]);

  const handleWriteError = useCallback(async (err: unknown) => {
    if (err instanceof LeaseHeldError) {
      setConflict('Ta próba jest edytowana w innej karcie. Możesz przejąć edycję w tej karcie.');
    } else if (err instanceof WriteConflictError) {
      setConflict('Inna karta zapisała nowszą wersję tej próby. Wczytaliśmy aktualny zapis.');
      await load();
    } else if (err instanceof AlreadySubmittedError) {
      await load();
    } else {
      setSaveError('Nie udało się zapisać odpowiedzi. Spróbuj ponownie.');
    }
  }, [load, setSaveError]);

  const onChange = useCallback(async (next: AnyAnswer) => {
    const s = stateRef.current;
    if (!s || submitted) return;
    setState({ ...s, value: next }); // keep in memory even if the write fails
    try {
      const res = await writes.run((a) => learning.saveDraft(profileId, a, s.question, next), (r) => r.attempt);
      setState((cur) => (cur ? { ...cur, attempt: res.attempt } : cur));
      setSaveError(null);
    } catch (err) {
      await handleWriteError(err);
    }
  }, [learning, profileId, submitted, handleWriteError, setSaveError, writes]);

  const doSubmit = useCallback(async () => {
    const s = stateRef.current;
    if (!s || submitting) return;
    setSubmitting(true);
    setConfirm(null);
    try {
      const res = await writes.run((a) => learning.submit(profileId, a, s.question, s.value), (r) => r.attempt);
      let attempt = res.attempt;
      if (attempt.kind === 'follow-up') {
        const full = equals(res.result.points, res.result.maxPoints);
        const before = attempt.failedFollowUps ?? 0;
        attempt = await writes.run((a) => learning.attempts.setFailedFollowUps(profileId, a, before + (full ? 0 : 1)), (r) => r);
      }
      setState({ ...s, attempt, evaluation: res.evaluation });
      setSaveError(null);
      // default-open rationales of wrong/omitted decisions and record their exposure
      const o: Record<string, boolean> = {};
      for (const [id, outcome] of Object.entries(res.evaluation.decisionOutcomes)) {
        if (isErrorOutcome(outcome)) o[id] = true;
      }
      if (s.question.format === 'K') {
        for (const d of s.question.decisions) if (isErrorOutcome(res.evaluation.decisionOutcomes[d.id])) o[d.id] = true;
      }
      setOpened(o);
      for (const id of Object.keys(o)) {
        const rat = rationaleFor(s.question, id);
        if (rat) await learning.revealRationale(profileId, attempt, s.question, rat);
      }
      requestAnimationFrame(() => { feedbackRef.current?.focus(); });
    } catch (err) {
      await handleWriteError(err);
    } finally {
      setSubmitting(false);
    }
  }, [learning, profileId, submitting, handleWriteError, setSaveError, writes]);

  const onSubmitClick = () => {
    if (!state) return;
    const c = completeness({ format: state.question.format, ...(state.question.k !== undefined ? { k: state.question.k } : {}), decisionIds: state.question.decisions.map((d) => d.id) }, state.value);
    const missingCount = state.question.format === 'K' ? c.blankRows : c.selectedCount === 0 ? 1 : 0;
    if (missingCount > 0 || c.excess) {
      setConfirm({ missing: missingCount, excess: c.excess });
      return;
    }
    void doSubmit();
  };

  const saveNav = useCallback(async (focusTarget: string | null, stack: KnowledgeEntry[]) => {
    const s = stateRef.current;
    if (!s) return;
    await learning.saveNavigation({
      profileId,
      attemptId: s.attempt.id,
      itemInstanceId: `${s.question.id}@${s.question.revision}`,
      revision: s.question.revision,
      reveals: Object.entries(opened).filter(([, v]) => v).map(([k]) => k),
      openSections: Object.entries(opened).filter(([, v]) => !v).map(([k]) => k),
      scrollY: window.scrollY,
      ...(focusTarget ? { focusTarget } : {}),
      ...(focusTarget ? { anchorDecisionId: focusTarget } : {}),
      branchStack: stack.map((e) => ({ kind: e.kind, refId: e.kind === 'sources' ? e.ruleIds.join(',') : e.id, revision: 'r1' })),
    });
  }, [learning, profileId, opened]);

  const openKnowledge = useCallback(async (entry: KnowledgeEntry, anchorId: string, asHelp: boolean) => {
    const s = stateRef.current;
    if (!s) return;
    anchorRef.current = anchorId;
    let attempt = s.attempt;
    if (asHelp && !s.evaluation) {
      try {
        attempt = await writes.run((a) => learning.markHelpBeforeSubmit(profileId, a), (r) => r); // persisted BEFORE reveal
        setState((cur) => (cur ? { ...cur, attempt } : cur));
      } catch (err) {
        await handleWriteError(err);
        return;
      }
    }
    if (entry.kind === 'knowledge') {
      const k = findKnowledge(content.packages, entry.id);
      if (k) await learning.openKnowledge(profileId, k, attempt.id, asHelp && !s.evaluation ? 'help' : 'knowledge');
    }
    await saveNav(anchorId, [entry]);
    setKStack([entry]);
  }, [learning, profileId, content.packages, saveNav, handleWriteError, writes]);

  const closeKnowledge = () => {
    setKStack([]);
    void saveNav(anchorRef.current, []);
  };

  const toggleRationale = async (decisionId: string, open: boolean) => {
    setOpened((o) => ({ ...o, [decisionId]: open }));
    const s = stateRef.current;
    if (open && s) {
      const rat = rationaleFor(s.question, decisionId);
      if (rat) await learning.revealRationale(profileId, s.attempt, s.question, rat);
    }
  };

  const pauseAndExit = async () => {
    const s = stateRef.current;
    if (!s) return;
    await saveNav(document.activeElement?.id ?? null, kStack);
    await learning.setPlan(profileId, 'suspended-learning', { attemptId: s.attempt.id, kind: 'question', label: s.evaluation ? goalLabelFor(content.packages, s.question) : topicLabelFor(content.packages, s.question) });
    navigate({ name: 'session' });
  };

  if (missing) {
    return (
      <Page title="CPRE · Nauka">
        <p className="eyebrow">Dostępność materiału</p>
        <h1>Materiał jest teraz niedostępny.</h1>
        <p className="lead">Twoja odpowiedź jest zachowana. Możesz wrócić do sesji.</p>
        <div className="actions"><button type="button" className="primary" onClick={() => { navigate({ name: 'session' }); }}>Wróć do sesji</button></div>
      </Page>
    );
  }
  if (!state || !prompt) return <Page title="CPRE · Nauka"><p className="muted">Wczytujemy zapisane miejsce…</p></Page>;

  const { question: q, attempt, evaluation } = state;
  const isFollowUp = attempt.kind === 'follow-up';
  const points = evaluation ? fractionFromJson(evaluation.points) : null;
  const max = evaluation ? fractionFromJson(evaluation.maxPoints) : null;
  const ruleId = decidingRuleId(q);
  const rule = ruleId ? findRule(content.packages, ruleId) : null;
  const scope = primaryScope(q);
  const ivKey = `${scope.criterionId}${scope.aspectId ? `/${scope.aspectId}` : ''}`;
  const iv = attempt.conditions.intervalsAtStart[ivKey];
  const failed = attempt.failedFollowUps ?? 0;
  const fullyCorrect = points && max ? equals(points, max) : false;
  const goalNote = scope ? content.packages.flatMap((p) => p.knowledge).find((k) => k.kind === 'note' && k.contactScopes.some((c) => c.criterionId === scope.criterionId && (c.aspectId === undefined || c.aspectId === scope.aspectId))) : undefined;

  const renderRationale = (decisionId: string) => {
    if (!evaluation) return null;
    const rat = rationaleFor(q, decisionId);
    const outcome: DecisionOutcome | undefined = evaluation.decisionOutcomes[decisionId];
    const isOpen = opened[decisionId] ?? isErrorOutcome(outcome);
    const linkRule = rat?.ruleIds[0];
    const note = linkRule ? noteForRule(content.packages, linkRule) : null;
    const linkId = `kn-${decisionId}`;
    return (
      <details className="rationale" open={isOpen} onToggle={(e) => { const o = e.currentTarget.open; if (o !== isOpen) void toggleRationale(decisionId, o); }}>
        <summary>Wyjaśnienie {q.format === 'K' ? 'wiersza' : 'odpowiedzi'} {String(q.decisions.findIndex((d) => d.id === decisionId) + 1)}</summary>
        <p className="answer">{outcomeText(q, decisionId, outcome)}</p>
        {rat ? <Markdown className="md" text={rat.bodyMarkdown} /> : <p>Brak uzasadnienia tej decyzji — materiał niedopuszczony.</p>}
        {note ? (
          <button type="button" id={linkId} className="link" onClick={() => { void openKnowledge({ kind: 'knowledge', id: note.id }, linkId, false); }}>
            Zobacz: {note.title}
          </button>
        ) : linkRule ? (
          <button type="button" id={linkId} className="link" onClick={() => { void openKnowledge({ kind: 'rule', id: linkRule }, linkId, false); }}>Zobacz zasadę</button>
        ) : null}
      </details>
    );
  };

  return (
    <Page
      title={`CPRE · Nauka`}
      focused
      sideSummary="Warunki tej próby"
      side={
        <>
          <h2>Warunki tej próby</h2>
          <p>Punktacja pokazuje zachowanie formatu. Wynik odpowiedzi oddzielamy od znajomości zadania, nowego kontekstu i retencji.</p>
          <ul className="factlist">
            <li>{attempt.conditions.helpBeforeSubmit ? 'Otwarto pomoc przed odpowiedzią.' : 'Brak zarejestrowanej pomocy przed odpowiedzią.'}</li>
            <li>{attempt.conditions.knownDeclared ? 'Zadanie lub bliski wariant zadeklarowano jako znane.' : attempt.conditions.noveltyAtStart === 'known' ? 'Zadanie lub jego rodzina były już pokazane w tym profilu.' : attempt.conditions.noveltyAtStart === 'new' ? 'Zadanie nowe w historii tego profilu; nowość rodziny niepotwierdzona recenzją.' : 'Nowość zadania i rodziny: niepotwierdzona.'}</li>
            <li>Od poprzedniej samodzielnej próby: {formatMs(iv?.sinceIndependentAttemptMs ?? null)}.</li>
            <li>Od ostatniego istotnego kontaktu z tym zakresem: {formatMs(iv?.sinceRelevantContactMs ?? null)}.</li>
          </ul>
        </>
      }
    >
      <div className="rowhead">
        <span className="tag">Nauka</span>
        <span className="micro muted">{evaluation ? goalLabelFor(content.packages, q) : topicLabelFor(content.packages, q)} · {q.format}</span>
      </div>
      {isFollowUp ? <p className="eyebrow">Nauka · kontrola po korekcie</p> : null}
      <h1 ref={headingRef} tabIndex={-1} id="q-heading">{isFollowUp ? 'Sprawdź inną sytuację.' : 'Twoja odpowiedź.'}</h1>
      <Markdown className="md" text={q.stemMarkdown} />
      {state.withdrawn && !evaluation ? (
        <div className="notice warning" role="status">
          <strong>{state.withdrawn === 'withdrawn' ? 'Materiał został wycofany.' : 'Klucz wymaga sprawdzenia.'}</strong>
          <p>Zapisana odpowiedź pozostaje w historii. Nie uruchamiamy tej wersji jako nowej oceny. Wybierz inny cel.</p>
        </div>
      ) : null}
      {conflict ? (
        <div className="notice warning" role="alert">
          <p>{conflict}</p>
          <button type="button" className="small" onClick={() => {
            void (async () => {
              const s = stateRef.current;
              if (!s) return;
              const taken = await learning.attempts.takeOver(profileId, (await learning.attempts.get(profileId, s.attempt.id)) ?? s.attempt);
              writes.setLatest(taken);
              setState({ ...s, attempt: taken });
              setConflict(null);
            })();
          }}>Przejmij edycję w tej karcie</button>
        </div>
      ) : null}

      {evaluation && points && max ? (
        <section className="feedback" id="feedback" tabIndex={-1} ref={feedbackRef} aria-labelledby="feedback-label">
          <p className="eyebrow" id="feedback-label">Wynik tej odpowiedzi</p>
          <p className="score">{toDecimalString(points)} / {toDecimalString(max)} <small>pkt</small></p>
          {evaluation.reason === 'excess' ? (
            <div className="notice warning">Nadmiar zaznaczeń: wymagane {String(q.k ?? 1)}. To zeruje punktację pytania; nie dowodzi braku całej wiedzy.</div>
          ) : null}
          {rule ? <Markdown className="md" text={rule.statementMarkdown} /> : null}
          <p className="micro muted">
            {attempt.conditions.helpBeforeSubmit ? 'Odpowiedź po skorzystaniu z pomocy. Punkty pozostają zgodne z kluczem.' : 'Wynik odpowiedzi oddzielamy od znajomości zadania, nowego kontekstu i retencji.'}
          </p>
          {isFollowUp ? (
            <div className="notice">To wykonanie bezpośrednio po korekcie. Nie potwierdza retencji; nowość rodziny nie została zatwierdzona.</div>
          ) : null}
          {isFollowUp && !fullyCorrect && failed >= 2 ? (
            <div className="notice warning" role="status">
              <p><strong>Dwie kolejne próby po korekcie nie zakończyły się pełną poprawnością.</strong> Wybierz inną pomoc lub przerwę; możesz wrócić później. Nie uruchamiamy automatycznie trzeciej podobnej kontroli.</p>
            </div>
          ) : null}
          <div className="actions">
            {isFollowUp && !fullyCorrect && failed >= 2 ? (
              <button type="button" className="primary" onClick={() => { navigate({ name: 'state', kind: 'two-failed' }); }}>Zmień sposób pracy</button>
            ) : isFollowUp && !fullyCorrect ? (
              <button type="button" className="primary" onClick={() => { navigate({ name: 'remediation', attemptId: attempt.id }); }}>Zobacz inne wyjaśnienie</button>
            ) : !isFollowUp ? (
              <button type="button" className="primary" onClick={() => { navigate({ name: 'remediation', attemptId: attempt.id }); }}>Spróbuj innego przypadku</button>
            ) : null}
            {isFollowUp && attempt.sourceAttemptId ? (
              <button type="button" className={fullyCorrect ? 'primary' : 'link'} onClick={() => { navigate({ name: 'question', attemptId: attempt.sourceAttemptId ?? '' }); }}>Wróć do pierwotnego pytania</button>
            ) : null}
            <button type="button" className="link" onClick={() => { void learning.clearPlan(profileId, 'suspended-learning').then(() => { navigate({ name: 'session' }); }); }}>Kontynuuj sesję</button>
          </div>
          <p className="micro muted">Wszystkie uzasadnienia są dostępne przy odpowiedziach. Nie musisz rozwijać każdego z nich.</p>
        </section>
      ) : null}

      <ChoiceControls
        prompt={prompt}
        value={state.value}
        onChange={(v) => { void onChange(v); }}
        locked={submitted || Boolean(state.withdrawn)}
        mode="learning"
        idPrefix="q"
        announce={announce}
        {...(evaluation ? { renderAfter: renderRationale } : {})}
      />

      {!submitted ? (
        <>
          <p className="micro"><button type="button" className="link" onClick={() => { setTutorialOpen(true); }}>Pokaż przykład punktacji</button></p>
          <div className="known">
            <label>
              <input type="checkbox" id="known" checked={attempt.conditions.knownDeclared} onChange={(e) => {
                const v = e.currentTarget.checked;
                void writes.run((a) => learning.declareKnown(profileId, a, v), (r) => r).then((a) => { setState((s) => (s ? { ...s, attempt: a } : s)); }).catch(handleWriteError);
              }} />
              Znam już to pytanie lub bliski wariant
            </label>
          </div>
          <div className="actions">
            <button type="button" className="primary" onClick={onSubmitClick} disabled={submitting || Boolean(state.withdrawn)}>
              {submitting ? 'Zapisywanie…' : 'Zatwierdź odpowiedź'}
            </button>
            <button type="button" className="link" onClick={() => { void onChange(emptyAnswer(q.format, q.decisions.map((d) => d.id))); headingRef.current?.focus(); }}>Wyczyść odpowiedź</button>
          </div>
          {goalNote ? (
            <div className="line">
              <button type="button" className="link" id="help-open" onClick={() => { void openKnowledge({ kind: 'knowledge', id: goalNote.id }, 'help-open', true); }}>Potrzebuję objaśnienia</button>
              <p className="micro muted">Pomoc jest dozwolona. Jej otwarcie zostanie odnotowane przy tej próbie.</p>
            </div>
          ) : null}
        </>
      ) : null}

      <div className="line">
        <button type="button" className="link" onClick={() => { void pauseAndExit(); }}>Zapisz miejsce i wyjdź</button>
        <button type="button" className="link" onClick={() => { navigate({ name: 'report', attemptId: attempt.id }); }}>Zgłoś wątpliwość</button>
      </div>

      {/* kept mounted so the dialog can return focus on close */}
      <FormatTutorial format={q.format} open={tutorialOpen} onClose={() => { setTutorialOpen(false); }} announce={announce} />
      <ConfirmDialog
        id="confirm-submit"
        open={confirm !== null}
        title="Oddać odpowiedź z brakami?"
        body={
          <p>
            Możesz poprawić odpowiedź albo świadomie ją oddać.{' '}
            {confirm?.excess ? 'Nadmiar zaznaczeń oznacza 0 pkt za całe pytanie.' : null}
            {confirm && confirm.missing > 0 ? ` Brakujące decyzje: ${String(confirm.missing)}. Puste decyzje otrzymają 0 pkt w swoim zakresie.` : null}
          </p>
        }
        confirmLabel="Oddaj obecną odpowiedź"
        onConfirm={() => { void doSubmit(); }}
        onCancel={() => { setConfirm(null); }}
      />
      <KnowledgeDialog
        open={kStack.length > 0}
        stack={kStack}
        packages={content.packages}
        onPush={(e) => {
          const next = [...kStack, e];
          setKStack(next);
          if (e.kind === 'knowledge') {
            const k = findKnowledge(content.packages, e.id);
            if (k) void learning.openKnowledge(profileId, k, attempt.id, !evaluation ? 'help' : 'knowledge');
          }
          void saveNav(anchorRef.current, next);
        }}
        onBack={() => {
          const next = kStack.slice(0, -1);
          if (next.length === 0) closeKnowledge();
          else {
            setKStack(next);
            void saveNav(anchorRef.current, next);
          }
        }}
        onClose={closeKnowledge}
        returnFocusTo={() => (anchorRef.current ? document.getElementById(anchorRef.current) : null)}
      />
    </Page>
  );
}
