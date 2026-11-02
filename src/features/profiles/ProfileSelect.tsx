/**
 * PROF-01/02: "Kto dziś się uczy?" — names and "Dodaj profil". The last used
 * profile is only suggested; no data opens without an explicit choice. No
 * preview of anybody's answers on this screen.
 */
import { useEffect, useRef, useState } from 'react';
import type { ProfileRecord } from '@/data/db.ts';
import { ProfileRepository, ProfileNameConflictError, ProfileNameInvalidError } from '@/data/profiles.ts';
import { Dialog } from '@/ui/Dialog.tsx';
import { LAST_PROFILE_KEY } from '@/app/config.ts';

const NAME_ERRORS: Record<string, string> = {
  empty: 'Podaj nazwę profilu.',
  'too-long': 'Nazwa może mieć najwyżej 40 znaków.',
  'control-chars': 'Nazwa zawiera niedozwolone znaki sterujące.',
  'invisible-only': 'Nazwa nie może składać się z samych niewidocznych znaków.',
};

function readLast(): string | null {
  try { return localStorage.getItem(LAST_PROFILE_KEY); } catch { return null; }
}

export function ProfileSelect({ repo, onSelect, notice }: { repo: ProfileRepository; onSelect: (p: ProfileRecord) => void; notice?: string | null }) {
  const [profiles, setProfiles] = useState<ProfileRecord[] | null>(null);
  const [dialog, setDialog] = useState<null | { mode: 'add' } | { mode: 'rename'; profile: ProfileRecord }>(null);
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const last = readLast();

  const reload = async () => { setProfiles(await repo.list()); };
  useEffect(() => {
    void reload();
    document.title = 'CPRE · Wybór profilu';
    headingRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    try {
      if (dialog?.mode === 'rename') {
        await repo.rename(dialog.profile.id, name);
        setDialog(null);
        await reload();
      } else {
        const created = await repo.create(name);
        setDialog(null);
        onSelect(created);
      }
    } catch (err) {
      if (err instanceof ProfileNameConflictError) setError('Profil o tej nazwie już istnieje na tym urządzeniu.');
      else if (err instanceof ProfileNameInvalidError) setError(NAME_ERRORS[err.reason ?? 'empty'] ?? 'Nieprawidłowa nazwa.');
      else setError('Nie udało się zapisać profilu. Spróbuj ponownie.');
    }
  };

  return (
    <div className="shell">
      <main id="main" className="main profilecard" tabIndex={-1}>
        <p className="eyebrow">Profil na tym urządzeniu</p>
        <h1 ref={headingRef} tabIndex={-1}>Kto dziś się uczy?</h1>
        {notice ? <div className="notice warning" role="status">{notice}</div> : null}
        {profiles === null ? <p className="muted">Wczytujemy profile…</p> : null}
        {profiles && profiles.length > 0 ? (
          <ul className="profilelist" aria-label="Profile">
            {profiles.map((p) => (
              <li key={p.id}>
                <div className="rowhead" style={{ marginBottom: 0 }}>
                  <button type="button" onClick={() => { onSelect(p); }}>
                    <span>{p.name}</span>
                    {p.id === last ? <span className="micro">ostatnio używany</span> : null}
                  </button>
                  <button type="button" className="link micro" aria-label={`Zmień nazwę profilu ${p.name}`} onClick={() => { setName(p.name); setError(null); setDialog({ mode: 'rename', profile: p }); }}>Zmień nazwę</button>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="actions">
          <button type="button" className={profiles && profiles.length > 0 ? '' : 'primary'} onClick={() => { setName(''); setError(null); setDialog({ mode: 'add' }); }}>Dodaj profil</button>
        </div>
        <p className="micro muted" style={{ marginTop: 24 }}>Postęp jest zapisany na tym urządzeniu. Profil rozdziela postęp osób, nie jest kontem ani hasłem.</p>
      </main>
      <Dialog open={dialog !== null} onClose={() => { setDialog(null); }} labelledBy="profile-dialog-title" initialFocus="autofocus">
        <form className="dialogbody" onSubmit={(e) => { e.preventDefault(); void save(); }}>
          <h2 id="profile-dialog-title">{dialog?.mode === 'rename' ? 'Zmień nazwę profilu' : 'Dodaj profil'}</h2>
          <label className="block" htmlFor="profile-name">Nazwa profilu</label>
          <input
            id="profile-name"
            type="text"
            autoFocus
            autoComplete="off"
            value={name}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'profile-name-error' : undefined}
            onChange={(e) => { setName(e.currentTarget.value); setError(null); }}
          />
          {error ? <p id="profile-name-error" className="fielderror" role="alert">{error}</p> : null}
          <div className="actions">
            <button type="submit" className="primary">Zapisz</button>
            <button type="button" onClick={() => { setDialog(null); }}>Anuluj</button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
