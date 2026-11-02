/** S07 negative/limit states with distinct wording (LUKA-01/05/10/12, N14). */
import { useEffect, useRef } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import { Page } from '@/ui/Layout.tsx';

const TEXTS = {
  missing: ['Tego materiału jeszcze nie ma.', 'Brakuje przygotowanej treści dla wybranego rozróżnienia. To ograniczenie materiału, a nie ocena Twojej wiedzy.', 'Wybierz dostępny cel', 'goals'],
  novariant: ['Brakuje nowego zadania do tej kontroli.', 'Możesz wrócić do znanego przykładu dla utrwalenia. Nie potwierdzi on nowego kontekstu ani odroczonego transferu.', 'Wróć do sesji', 'session'],
  withdrawn: ['Materiał został wycofany.', 'Zapisana odpowiedź i dawna ocena pozostają w historii. Nie uruchamiamy tej wersji jako nowej próby. Kontynuuj na innym dostępnym materiale.', 'Wybierz inny cel', 'goals'],
  disputed: ['Klucz wymaga sprawdzenia.', 'Istnieje nierozstrzygnięty spór o tę wersję. Wstrzymujemy nowe użycie i mocne wnioski. Dawna ocena jest zachowana z informacją, że wymaga przeglądu.', 'Wróć do sesji', 'session'],
  'two-failed': ['Zmieńmy sposób wyjaśnienia albo wróćmy później.', 'Dwie kolejne próby po korekcie nie zakończyły się pełną poprawnością. Wybierz inną pomoc lub przerwę; możesz wrócić później. To nie jest diagnoza przyczyny.', 'Wybierz inny cel lub materiał', 'goals'],
} as const;

export function StateView({ kind }: { kind: keyof typeof TEXTS }) {
  const { navigate } = useApp();
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { ref.current?.focus(); }, [kind]);
  const [title, body, label, target] = TEXTS[kind];
  return (
    <Page title="CPRE · Sesja" side={<><h2>Co zostaje zachowane?</h2><p>Historia odpowiedzi i ujawnień. Brak treści lub wariantu nie tworzy negatywnego dowodu o uczniu.</p></>}>
      <p className="eyebrow">Dostępność materiału</p>
      <h1 ref={ref} tabIndex={-1}>{title}</h1>
      <p className="lead">{body}</p>
      <div className="actions">
        <button type="button" className="primary" onClick={() => { navigate({ name: target }); }}>{label}</button>
        {kind === 'two-failed' ? <button type="button" className="link" onClick={() => { navigate({ name: 'session' }); }}>Zrób przerwę</button> : null}
      </div>
    </Page>
  );
}
