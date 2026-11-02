/** N11 — local doubt report with item revision and context; never changes the key. */
import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import { Page } from '@/ui/Layout.tsx';

export function ReportView({ attemptId }: { attemptId: string }) {
  const { db, learning, profile, content, navigate, announce, setSaveError } = useApp();
  const [kind, setKind] = useState('Klucz lub uzasadnienie');
  const [text, setText] = useState('');
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const save = async () => {
    const attempt = await learning.attempts.get(profile.id, attemptId);
    const pin = attempt?.pinnedItems[0];
    try {
      await db.issues.add({
        id: crypto.randomUUID(),
        profileId: profile.id,
        itemId: pin?.itemId ?? 'nieznany',
        revision: pin?.revision ?? 'r0',
        attemptId,
        kind,
        comment: text,
        contentReleaseId: attempt?.contentReleaseId ?? content.releaseId ?? '',
        createdAt: new Date().toISOString(),
      });
      announce('Uwaga została zapisana na tym urządzeniu. Klucz nie zmienił się.');
      navigate({ name: 'question', attemptId });
    } catch {
      setSaveError('Nie udało się zapisać uwagi. Spróbuj ponownie.');
    }
  };
  return (
    <Page title="CPRE · Uwaga do materiału">
      <p className="eyebrow">Uwaga do materiału</p>
      <h1 ref={ref} tabIndex={-1}>Co budzi wątpliwość?</h1>
      <p>Do uwagi dołączymy wersję bieżącego zadania i oddaną odpowiedź. Samo zgłoszenie nie zmienia klucza.</p>
      <label className="block" htmlFor="issue-kind">Rodzaj uwagi</label>
      <select id="issue-kind" value={kind} onChange={(e) => { setKind(e.currentTarget.value); }}>
        <option>Klucz lub uzasadnienie</option>
        <option>Niejasne polecenie</option>
        <option>Bariera dostępności</option>
        <option>Inna uwaga</option>
      </select>
      <label className="block" htmlFor="issue">Opis (opcjonalnie)</label>
      <textarea id="issue" value={text} onChange={(e) => { setText(e.currentTarget.value); }} />
      <div className="actions">
        <button type="button" className="primary" onClick={() => { void save(); }}>Zapisz uwagę na tym urządzeniu</button>
        <button type="button" className="link" onClick={() => { navigate({ name: 'question', attemptId }); }}>Wróć do pytania</button>
      </div>
      <p className="micro muted">Uwaga jest zapisana lokalnie i trafia do kopii postępu tego profilu; niczego nie wysyłamy.</p>
    </Page>
  );
}
