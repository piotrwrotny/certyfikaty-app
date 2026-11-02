/**
 * Header (brand, "Sesja" / "Zakres i dowody", profile menu) and the discreet
 * status strip (offline, content/app updates, save errors). Same composition
 * as the prototype; the profile menu is auxiliary, not a third learning area.
 */
import { useEffect, useRef, useState } from 'react';
import type { Route } from './router.ts';
import { CONTENT_CHANNEL } from './config.ts';
import type { UpdateStatus } from '@/updates/useContentUpdates.ts';

export function Header({ route, profileName, onNav, onSwitchProfile, onBackup, onData }: {
  route: Route;
  profileName: string;
  onNav: (r: Route) => void;
  onSwitchProfile: () => void;
  onBackup: () => void;
  onData: () => void;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
    };
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node) && e.target !== btnRef.current) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    menuRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [open]);
  const choose = (fn: () => void) => () => { setOpen(false); fn(); };
  return (
    <header className="top">
      <div className="brand">CPRE <span>/ pracownia nauki</span></div>
      <div className="topright">
        <nav className="mainnav" aria-label="Główna">
          <button type="button" aria-current={route.name === 'session' ? 'page' : undefined} onClick={() => { onNav({ name: 'session' }); }}>Sesja</button>
          <button type="button" aria-current={route.name === 'scope' ? 'page' : undefined} onClick={() => { onNav({ name: 'scope' }); }}>Zakres i dowody</button>
        </nav>
        <div className="profilemenu">
          <button type="button" ref={btnRef} aria-haspopup="true" aria-expanded={open} aria-label={`Profil: ${profileName}. Menu profilu`} onClick={() => { setOpen((o) => !o); }}>{profileName}</button>
          {open ? (
            <div className="menu" ref={menuRef} role="group" aria-label="Menu profilu">
              <button type="button" onClick={choose(onSwitchProfile)}>Zmień profil</button>
              <button type="button" onClick={choose(onBackup)}>Kopia postępu</button>
              <button type="button" onClick={choose(onData)}>Dane aplikacji</button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function StatusStrip({ online, update, technicalFixture, needRefresh, onSaveAndReload, onLater, saveError, onRetryCheck }: {
  online: boolean;
  update: UpdateStatus;
  technicalFixture: boolean;
  needRefresh: boolean;
  onSaveAndReload: () => void;
  onLater: () => void;
  saveError: string | null;
  onRetryCheck: () => void;
}) {
  const parts: React.ReactNode[] = [];
  if (saveError) parts.push(<span key="save" role="alert" className="statusline"><strong>{saveError}</strong></span>);
  if (needRefresh) {
    parts.push(
      <span key="app" className="statusline">
        Dostępna jest aktualizacja aplikacji.
        <button type="button" className="link" onClick={onSaveAndReload}>Zapisz i odśwież</button>
        <button type="button" className="link" onClick={onLater}>Później</button>
      </span>,
    );
  }
  if (!online) parts.push(<span key="off">Pracujesz offline. Postęp zapisujemy na tym urządzeniu.</span>);
  else if (update.kind === 'downloading') parts.push(<span key="dl">Pobieramy nowe materiały…</span>);
  else if (update.kind === 'activated') parts.push(<span key="new">Nowe materiały są dostępne dla kolejnych zadań.</span>);
  else if (update.kind === 'unreachable') {
    parts.push(
      <span key="un" className="statusline">
        Nie udało się sprawdzić nowych materiałów. Korzystasz z zapisanej wersji.
        <button type="button" className="link" onClick={onRetryCheck}>Spróbuj ponownie</button>
      </span>,
    );
  } else if (update.kind === 'needs-app-update') parts.push(<span key="na">Nowe materiały wymagają aktualizacji aplikacji. Korzystasz z zapisanej wersji.</span>);
  else if (update.kind === 'invalid') parts.push(<span key="inv">Nowe wydanie materiałów nie przeszło weryfikacji. Korzystasz z zapisanej wersji.</span>);
  const prefix = CONTENT_CHANNEL === 'review'
    ? 'Tryb recenzencki · treści do odrębnego review, niezatwierdzone · osobna baza danych'
    : technicalFixture
      ? 'Demonstracja techniczna · syntetyczne fixtures, nie treści IREB'
      : 'Postęp jest zapisany na tym urządzeniu';
  return (
    <div className="demo" role="status" aria-live="polite">
      <p>
        <span>{prefix}</span>
        {parts.map((p, i) => <span key={i}> · {p}</span>)}
      </p>
    </div>
  );
}
