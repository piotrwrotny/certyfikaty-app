/**
 * Dane aplikacji + Kopia postępu (PWA-03/04, PROF-05/06, TASK-032): local
 * versions, offline readiness, storage estimate and persist result (refusal
 * never blocks), manual update check, single-profile export/import, delete.
 */
import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import { APP_VERSION_STRING, APP_BUILD_TAG, CONTENT_CHANNEL } from '@/app/config.ts';
import { exportProfile, parseBackup, importProfile, BackupError, type ParsedBackup } from '@/data/backup.ts';
import { validateProfileName, ProfileBusyError } from '@/data/profiles.ts';
import { Page } from '@/ui/Layout.tsx';
import { ConfirmDialog } from '@/ui/Dialog.tsx';
import type { ContentReleaseRecord } from '@/data/db.ts';

export function useOfflineReady(): boolean {
  const { content } = useApp();
  const [sw, setSw] = useState(false);
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    let alive = true;
    void navigator.serviceWorker.getRegistration().then((r) => { if (alive && r?.active) setSw(true); });
    void navigator.serviceWorker.ready.then((r) => { if (alive) setSw(Boolean(r.active)); });
    return () => { alive = false; };
  }, []);
  return sw && content.loaded && content.releaseId !== null;
}

export function DataView() {
  const { db, learning, profile, content, updates, switchProfile, profiles, navigate, announce } = useApp();
  const [estimate, setEstimate] = useState<{ usage?: number; quota?: number } | null>(null);
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [release, setRelease] = useState<ContentReleaseRecord | null>(null);
  const [importState, setImportState] = useState<{ parsed?: ParsedBackup; name: string; error?: string; done?: string }>({ name: '' });
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteName, setDeleteName] = useState('');
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const offlineReady = useOfflineReady();
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    ref.current?.focus();
    void navigator.storage?.estimate?.().then((e) => { setEstimate({ ...(e.usage !== undefined ? { usage: e.usage } : {}), ...(e.quota !== undefined ? { quota: e.quota } : {}) }); });
    void navigator.storage?.persisted?.().then(setPersisted);
  }, []);
  useEffect(() => {
    if (content.releaseId) void db.contentReleases.get(content.releaseId).then((r) => { setRelease(r ?? null); });
  }, [db, content.releaseId]);

  const mb = (n?: number) => (n === undefined ? '—' : `${(n / 1024 / 1024).toLocaleString('pl-PL', { maximumFractionDigits: 1 })} MB`);

  const doExport = async () => {
    const envelope = await exportProfile(db, profile.id, APP_VERSION_STRING);
    const blob = new Blob([JSON.stringify(envelope, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cpre-kopia-${new Date().toISOString().slice(0, 10)}.profile-backup.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => { URL.revokeObjectURL(url); }, 1000);
    announce('Przygotowano kopię postępu tego profilu.');
  };

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    try {
      const parsed = await parseBackup(await file.text());
      setImportState({ parsed, name: `${parsed.preview.name} (kopia)` });
    } catch (err) {
      setImportState({ name: '', error: err instanceof BackupError ? err.message : 'Nie udało się odczytać pliku kopii.' });
    }
  };

  const doImport = async () => {
    if (!importState.parsed) return;
    const v = validateProfileName(importState.name);
    if (!v.ok) { setImportState({ ...importState, error: 'Podaj nazwę profilu (1–40 znaków).' }); return; }
    try {
      const rec = await importProfile(db, importState.parsed, v.normalized);
      setImportState({ name: '', done: `Utworzono nowy profil „${rec.name}”. Historia: zaimportowana, niezweryfikowana.` });
    } catch (err) {
      setImportState({ ...importState, error: err instanceof BackupError ? err.message : 'Import nie powiódł się. Nic nie zostało zapisane.' });
    }
  };

  const doDelete = async () => {
    try {
      await profiles.deleteProfile(profile.id, deleteName, learning.attempts.ownWriterId);
      setDeleteOpen(false);
      await switchProfile();
    } catch (err) {
      setDeleteError(err instanceof ProfileBusyError ? 'Profil jest używany w innej karcie. Zamknij ją i spróbuj ponownie.' : 'Nie usunięto profilu. Wpisz dokładnie jego nazwę.');
    }
  };

  const statusText = (() => {
    switch (updates.status.kind) {
      case 'checking': return 'Sprawdzamy nowe materiały…';
      case 'downloading': return 'Pobieramy nowe materiały…';
      case 'activated': return 'Nowe materiały są dostępne dla kolejnych zadań.';
      case 'up-to-date': return 'Masz aktualne materiały.';
      case 'unreachable': return 'Nie udało się sprawdzić nowych materiałów. Korzystasz z zapisanej wersji.';
      case 'needs-app-update': return 'Nowe materiały wymagają aktualizacji aplikacji. Korzystasz z zapisanej wersji.';
      case 'invalid': return 'Pobrane wydanie nie przeszło weryfikacji. Korzystasz z zapisanej wersji.';
      case 'idle': return '—';
    }
  })();

  return (
    <Page title="CPRE · Dane aplikacji" side={<><h2>Gdzie są Twoje dane?</h2><p>Postęp jest zapisany tylko w tej przeglądarce na tym urządzeniu. Tryb prywatny lub usunięcie danych witryny może go usunąć. Zmiana adresu aplikacji wymaga eksportu i importu kopii.</p><p className="micro">Nazwany profil rozdziela postęp osób, ale nie jest zabezpieczeniem hasłem.</p></>}>
      <p className="eyebrow">Profil: {profile.name}</p>
      <h1 ref={ref} tabIndex={-1}>Dane aplikacji</h1>
      <dl className="kv">
        <dt>Wersja aplikacji</dt><dd data-testid="app-build">{APP_VERSION_STRING} (build {APP_BUILD_TAG}){CONTENT_CHANNEL === 'review' ? ' · tryb recenzencki' : ''}</dd>
        <dt>Wydanie materiałów</dt><dd>{release ? `${release.releaseId} (sekwencja ${String(release.releaseSequence)}, aktywne od ${release.activatedAt ? new Date(release.activatedAt).toLocaleString('pl-PL') : '—'})` : 'brak pobranych materiałów'}</dd>
        <dt>Pakiety</dt><dd>{content.packages.length === 0 ? 'brak' : content.packages.map((p) => `${p.packageId}@${p.revision}`).join(', ')}</dd>
        <dt>Gotowe offline</dt><dd>{offlineReady ? 'Tak — aplikacja i materiały są zapisane na tym urządzeniu.' : 'Jeszcze nie — aplikacja lub materiały nie są w pełni zapisane.'}</dd>
        <dt>Miejsce w przeglądarce</dt><dd>{estimate ? `${mb(estimate.usage)} z ${mb(estimate.quota)}` : 'niedostępne'}</dd>
        <dt>Trwałe przechowywanie</dt><dd>{persisted === null ? 'nieobsługiwane' : persisted ? 'przyznane' : 'nieprzyznane — aplikacja działa normalnie; rób kopię postępu'}</dd>
        <dt>Stan aktualizacji</dt><dd aria-live="polite">{statusText}</dd>
      </dl>
      <div className="actions">
        <button type="button" onClick={() => { void updates.checkNow(); }}>Sprawdź aktualizacje</button>
        {persisted === false ? <button type="button" className="link" onClick={() => { void navigator.storage.persist().then(setPersisted); }}>Poproś o trwałe przechowywanie</button> : null}
      </div>

      <div className="line" id="kopia">
        <h2>Kopia postępu</h2>
        <p>Eksport obejmuje tylko profil „{profile.name}”: próby, odpowiedzi, oceny, ekspozycję i potrzebne wersje pytań. Import zawsze tworzy nowy profil; niczego nie scala ani nie nadpisuje.</p>
        <div className="actions"><button type="button" onClick={() => { void doExport(); }}>Pobierz kopię tego profilu</button></div>
        <label className="block" htmlFor="import-file">Odtwórz profil z pliku kopii</label>
        <input id="import-file" type="file" accept="application/json,.json" onChange={(e) => { void onFile(e.currentTarget.files?.[0]); }} />
        {importState.parsed ? (
          <div className="notice">
            <p>Kopia profilu „{importState.parsed.preview.name}”: {String(importState.parsed.preview.attemptCount)} prób, {String(importState.parsed.preview.answerCount)} odpowiedzi.</p>
            <label className="block" htmlFor="import-name">Nazwa nowego profilu</label>
            <input id="import-name" type="text" value={importState.name} onChange={(e) => { setImportState({ ...importState, name: e.currentTarget.value }); }} />
            <div className="actions"><button type="button" className="primary" onClick={() => { void doImport(); }}>Utwórz profil z kopii</button></div>
          </div>
        ) : null}
        {importState.error ? <p className="fielderror" role="alert">{importState.error}</p> : null}
        {importState.done ? <p role="status">{importState.done}</p> : null}
      </div>

      <div className="line">
        <h2>Usuń ten profil</h2>
        <p>Usunięcie dotyczy wyłącznie postępu profilu „{profile.name}”. Materiały i inne profile pozostają. Najpierw możesz pobrać kopię.</p>
        <button type="button" className="small" onClick={() => { setDeleteOpen(true); }}>Usuń profil…</button>
      </div>
      <div className="actions"><button type="button" className="link" onClick={() => { navigate({ name: 'session' }); }}>Wróć do sesji</button></div>

      <ConfirmDialog
        id="delete-profile"
        open={deleteOpen}
        title={`Usunąć profil „${profile.name}”?`}
        body={
          <>
            <p>Tej operacji nie można cofnąć. Usuniemy odpowiedzi, próby, ekspozycję i dowody tylko tego profilu.</p>
            <label className="block" htmlFor="delete-confirm">Wpisz nazwę profilu, aby potwierdzić</label>
            <input id="delete-confirm" type="text" value={deleteName} onChange={(e) => { setDeleteName(e.currentTarget.value); }} />
            {deleteError ? <p className="fielderror" role="alert">{deleteError}</p> : null}
          </>
        }
        cancelLabel="Anuluj"
        confirmLabel="Usuń profil"
        onConfirm={() => { void doDelete(); }}
        onCancel={() => { setDeleteOpen(false); setDeleteError(null); }}
      />
    </Page>
  );
}
