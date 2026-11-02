import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { openDb, type CpreDb, type ProfileRecord, type AttemptRecord } from '@/data/db.ts';
import { ProfileRepository } from '@/data/profiles.ts';
import { LearningService } from '@/services/learning.ts';
import { ContentUpdater, createFetchIO } from '@/updates/updater.ts';
import { useContentUpdates } from '@/updates/useContentUpdates.ts';
import { AppContext, type AppCtx, type ActiveContentState } from './AppContext.tsx';
import { DB_NAME, MANIFEST_URL, TAB_PROFILE_KEY, LAST_PROFILE_KEY } from './config.ts';
import { useHashRoute, type Route } from './router.ts';
import { getActiveAttemptId, setActiveAttemptId } from './activeAttempt.ts';
import { Header, StatusStrip } from './Shell.tsx';
import { ProfileSelect } from '@/features/profiles/ProfileSelect.tsx';
import { SessionView } from '@/features/session/SessionView.tsx';
import { GoalsView } from '@/features/session/GoalsView.tsx';
import { LessonView } from '@/features/session/LessonView.tsx';
import { StateView } from '@/features/session/StateView.tsx';
import { ReportView } from '@/features/session/ReportView.tsx';
import { QuestionView } from '@/features/learning/QuestionView.tsx';
import { RemediationView } from '@/features/learning/RemediationView.tsx';
import { OpenActivityView } from '@/features/learning/OpenActivityView.tsx';
import { ScopeView } from '@/features/evidence/ScopeView.tsx';
import { DataView } from '@/features/appdata/DataView.tsx';
import { TestIntroView, TestQuestionView, TestReviewView, TestResultView, TestItemReviewView, CONVERT_TITLE, CONVERT_BODY } from '@/features/topic-test/TestViews.tsx';
import { ConfirmDialog } from '@/ui/Dialog.tsx';

function ssGet(k: string): string | null { try { return sessionStorage.getItem(k); } catch { return null; } }
function ssSet(k: string, v: string | null): void { try { if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch { /* ignore */ } }
function lsSet(k: string, v: string): void { try { localStorage.setItem(k, v); } catch { /* ignore */ } }

export function App() {
  const [db, setDb] = useState<CpreDb | null>(null);
  const [dbError, setDbError] = useState<string | null>(null);
  useEffect(() => {
    openDb(DB_NAME, () => {
      setDbError('Inna karta otworzyła nowszą wersję aplikacji. Zamknij tę kartę lub odśwież ją po zapisaniu pracy w drugiej.');
    }).then(setDb).catch((err: unknown) => {
      const name = err instanceof Error ? err.name : '';
      setDbError(name === 'VersionError' || name === 'NewerDatabaseError'
        ? 'Dane na tym urządzeniu pochodzą z nowszej wersji aplikacji. Nie usuwamy ich. Zaktualizuj aplikację.'
        : 'Nie udało się otworzyć danych na tym urządzeniu. Zapisane dane nie zostały usunięte. Zamknij inne karty aplikacji i spróbuj ponownie.');
    });
  }, []);
  if (dbError) {
    return (
      <div className="shell"><main id="main" className="main">
        <p className="eyebrow">Dane aplikacji</p>
        <h1 tabIndex={-1}>Nie możemy teraz otworzyć danych.</h1>
        <div className="notice error" role="alert"><p>{dbError}</p></div>
        <div className="actions"><button type="button" className="primary" onClick={() => { window.location.reload(); }}>Spróbuj ponownie</button></div>
      </main></div>
    );
  }
  if (!db) return <div className="shell"><main id="main" className="main"><p className="muted">Wczytujemy aplikację…</p></main></div>;
  return <AppWithDb db={db} />;
}

function AppWithDb({ db }: { db: CpreDb }) {
  const profiles = useMemo(() => new ProfileRepository(db), [db]);
  const learning = useMemo(() => new LearningService(db), [db]);
  const updater = useMemo(() => new ContentUpdater(db, createFetchIO(), MANIFEST_URL), [db]);
  const [profile, setProfile] = useState<ProfileRecord | null>(null);
  const [profileLoaded, setProfileLoaded] = useState(() => ssGet(TAB_PROFILE_KEY) === null);
  const [selectorNotice, setSelectorNotice] = useState<string | null>(null);
  const [content, setContent] = useState<ActiveContentState>({ releaseId: null, packages: [], loaded: false, technicalFixture: false });
  const [route, navigate] = useHashRoute();
  const [online, setOnline] = useState(navigator.onLine);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [liveMsg, setLiveMsg] = useState('');
  const [guard, setGuard] = useState<null | { target: Route; attempt: AttemptRecord }>(null);

  const loadContent = useCallback(async () => {
    const active = await learning.content.getActiveContent();
    setContent({
      releaseId: active?.releaseId ?? null,
      packages: active?.packages ?? [],
      loaded: true,
      technicalFixture: (active?.packages ?? []).some((p) => p.packageId.startsWith('TECH')),
    });
  }, [learning]);

  useEffect(() => { void loadContent(); }, [loadContent]);
  const updates = useContentUpdates(updater, () => { void loadContent(); });

  useEffect(() => {
    let ch: BroadcastChannel | null = null;
    try {
      ch = new BroadcastChannel('ireb-cpre-updates');
      ch.onmessage = () => { void loadContent(); };
    } catch { /* unsupported */ }
    const on = () => { setOnline(true); };
    const off = () => { setOnline(false); };
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => { ch?.close(); window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, [loadContent]);

  // Restore this tab's profile after refresh; a new tab/PWA instance starts at the selector.
  useEffect(() => {
    const id = ssGet(TAB_PROFILE_KEY);
    if (!id) return;
    void profiles.get(id).then((p) => { setProfile(p ?? null); setProfileLoaded(true); });
  }, [profiles]);

  const selectProfile = useCallback((p: ProfileRecord) => {
    ssSet(TAB_PROFILE_KEY, p.id);
    lsSet(LAST_PROFILE_KEY, p.id);
    setSelectorNotice(null);
    setProfile(p);
    navigate({ name: 'session' }, { replace: true });
    requestAnimationFrame(() => { document.querySelector<HTMLElement>('main h1')?.focus(); });
  }, [navigate]);

  /** Save current state; pause an active check; never switch on a failed save (PROF-04). */
  const pauseOrSuspendCurrent = useCallback(async (p: ProfileRecord): Promise<void> => {
    const attempts = await learning.attempts.listByProfile(p.id);
    for (const a of attempts) {
      if (a.kind === 'topic-test' && a.lifecycle === 'active') await learning.attempts.pause(p.id, a);
    }
    const current = getActiveAttemptId();
    if (current) {
      const a = await learning.attempts.get(p.id, current);
      if (a && a.kind !== 'topic-test' && a.lifecycle === 'active') {
        // Drafts are already saved on every decision; remember the place (also an unfinished review).
        await learning.setPlan(p.id, 'suspended-learning', { attemptId: a.id, kind: 'question', label: 'Przerwana nauka' });
        await learning.attempts.releaseLease(p.id, a);
      }
    }
  }, [learning]);

  const switchProfile = useCallback(async () => {
    if (!profile) return;
    try {
      await pauseOrSuspendCurrent(profile);
    } catch {
      setSaveError('Nie udało się zapisać bieżącego stanu. Profil nie został zmieniony. Spróbuj ponownie.');
      throw new Error('switch-failed');
    }
    ssSet(TAB_PROFILE_KEY, null);
    setActiveAttemptId(null);
    setProfile(null);
    setSaveError(null);
    navigate({ name: 'session' }, { replace: true });
  }, [profile, pauseOrSuspendCurrent, navigate]);

  const refreshProfile = useCallback(async () => {
    if (!profile) return;
    const p = await profiles.get(profile.id);
    if (p) setProfile(p);
    else { ssSet(TAB_PROFILE_KEY, null); setProfile(null); }
  }, [profile, profiles]);

  // ---- App (code) update: prompt only, never auto-reload (UPD-04) ----
  const { needRefresh: [needRefresh, setNeedRefresh], updateServiceWorker } = useRegisterSW({ immediate: true });
  // The plugin also signals a first install observed from another tab ("external").
  // Only a waiting worker next to an active one is a real application update.
  const [realUpdate, setRealUpdate] = useState(false);
  useEffect(() => {
    if (!needRefresh || !('serviceWorker' in navigator)) { setRealUpdate(false); return; }
    void navigator.serviceWorker.getRegistration().then((r) => { setRealUpdate(Boolean(r?.waiting && r.active)); });
  }, [needRefresh]);
  const saveAndReload = useCallback(async () => {
    try {
      if (profile) await pauseOrSuspendCurrent(profile);
    } catch {
      setSaveError('Nie udało się zapisać bieżącego stanu. Aktualizacja wstrzymana; spróbuj ponownie.');
      return;
    }
    // Reload only after state is saved and the waiting worker has activated. A page that was
    // never controlled (first visit) gets no 'controlling' event, so we watch the worker itself.
    const reg = await navigator.serviceWorker.getRegistration();
    const waiting = reg?.waiting ?? null;
    let reloaded = false;
    const reload = () => { if (!reloaded) { reloaded = true; window.location.reload(); } };
    if (waiting) {
      waiting.addEventListener('statechange', () => { if (waiting.state === 'activated') reload(); });
      navigator.serviceWorker.addEventListener('controllerchange', reload);
      await updateServiceWorker(true);
    } else {
      reload();
    }
  }, [profile, pauseOrSuspendCurrent, updateServiceWorker]);

  // ---- Guard: an active/paused check blocks help-bearing areas until explicit conversion ----
  const guardedNavigate = useCallback((target: Route, opts?: { replace?: boolean }) => {
    if (!profile) { navigate(target, opts); return; }
    const safe = ['session', 'test', 'test-review', 'test-result', 'test-item', 'test-intro', 'data'];
    if (safe.includes(target.name)) {
      if (target.name === 'session' && (route.name === 'test' || route.name === 'test-review')) {
        const id = route.attemptId;
        void learning.attempts.get(profile.id, id).then(async (a) => {
          if (a?.lifecycle === 'active') await learning.attempts.pause(profile.id, a);
          navigate(target, opts);
        });
        return;
      }
      navigate(target, opts);
      return;
    }
    void learning.attempts.listByProfile(profile.id).then((list) => {
      const active = list.find((a) => a.kind === 'topic-test' && (a.lifecycle === 'active' || a.lifecycle === 'paused'));
      if (active) setGuard({ target, attempt: active });
      else navigate(target, opts);
    });
  }, [profile, route, navigate, learning]);

  const announce = useCallback((msg: string) => {
    setLiveMsg('');
    requestAnimationFrame(() => { setLiveMsg(msg); });
  }, []);
  const registerActiveAttempt = useCallback((id: string | null) => { setActiveAttemptId(id); }, []);

  const ctx: AppCtx | null = useMemo(() => profile ? {
    db, learning, profiles, profile, content, updates,
    navigate: guardedNavigate, announce, switchProfile, refreshProfile,
    saveError, setSaveError, registerActiveAttempt,
  } : null, [db, learning, profiles, profile, content, updates, guardedNavigate, announce, switchProfile, refreshProfile, saveError, registerActiveAttempt]);

  const strip = (
    <StatusStrip
      online={online}
      update={updates.status}
      technicalFixture={content.technicalFixture}
      needRefresh={needRefresh && realUpdate}
      onSaveAndReload={() => { void saveAndReload(); }}
      onLater={() => { setNeedRefresh(false); }}
      saveError={saveError}
      onRetryCheck={() => { void updates.checkNow(); }}
    />
  );

  if (!profileLoaded) return null;
  if (!profile || !ctx) {
    return (
      <>
        <a className="skip" href="#main">Przejdź do treści</a>
        {strip}
        <header className="top"><div className="brand">CPRE <span>/ pracownia nauki</span></div></header>
        <ProfileSelect repo={profiles} onSelect={selectProfile} notice={selectorNotice} />
        <p className="screenonly" role="status" aria-live="polite">{liveMsg}</p>
      </>
    );
  }

  return (
    <AppContext.Provider value={ctx}>
      <a className="skip" href="#main">Przejdź do treści</a>
      {strip}
      <Header
        route={route}
        profileName={profile.name}
        onNav={(r) => { guardedNavigate(r); }}
        onSwitchProfile={() => { void switchProfile().catch(() => undefined); }}
        onBackup={() => { guardedNavigate({ name: 'data' }); requestAnimationFrame(() => { document.getElementById('kopia')?.scrollIntoView(); }); }}
        onData={() => { guardedNavigate({ name: 'data' }); }}
      />
      <RouteView route={route} />
      <p className="screenonly" role="status" aria-live="polite">{liveMsg}</p>
      <ConfirmDialog
        id="guard-convert"
        open={guard !== null}
        title={CONVERT_TITLE}
        body={CONVERT_BODY}
        confirmLabel="Przejdź do Nauki"
        onCancel={() => { setGuard(null); }}
        onConfirm={() => {
          const g = guard;
          if (!g) return;
          setGuard(null);
          void learning.attempts.convertToLearning(profile.id, g.attempt).then(() => { navigate(g.target); });
        }}
      />
    </AppContext.Provider>
  );
}

function RouteView({ route }: { route: Route }) {
  switch (route.name) {
    case 'session': return <SessionView />;
    case 'goals': return <GoalsView />;
    case 'lesson': return <LessonView goalKey={route.goalKey} />;
    case 'question': return <QuestionView key={route.attemptId} attemptId={route.attemptId} />;
    case 'remediation': return <RemediationView key={route.attemptId} attemptId={route.attemptId} />;
    case 'open': return <OpenActivityView activityId={route.activityId} />;
    case 'scope': return <ScopeView />;
    case 'test-intro': return <TestIntroView />;
    case 'test': return <TestQuestionView key={route.attemptId} attemptId={route.attemptId} index={route.index} />;
    case 'test-review': return <TestReviewView attemptId={route.attemptId} />;
    case 'test-result': return <TestResultView attemptId={route.attemptId} />;
    case 'test-item': return <TestItemReviewView key={`${route.attemptId}-${String(route.index)}`} attemptId={route.attemptId} index={route.index} />;
    case 'data': return <DataView />;
    case 'report': return <ReportView attemptId={route.attemptId} />;
    case 'state': return <StateView kind={route.kind} />;
  }
}
