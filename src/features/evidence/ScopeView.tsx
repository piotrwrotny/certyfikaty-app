/**
 * S05 Zakres i dowody (FR-004, FR-022–024, FR-038): material scope, facts of
 * observations with conditions, and limitations — kept separate. Five evidence
 * descriptions without a ladder, mastery %, pass forecast or propagation.
 */
import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/app/AppContext.tsx';
import type { EvidenceRecord, ContactRecord, PlanRecord } from '@/data/db.ts';
import { listGoals, type Goal } from '@/services/planner.ts';
import { Page } from '@/ui/Layout.tsx';
import { formatMs } from '@/features/learning/helpers.ts';

const CATEGORY_LABEL: Record<EvidenceRecord['category'], string> = {
  'brak-danych': 'Brak wystarczających danych',
  'poznane-z-pomoca': 'Poznane / z pomocą',
  'wykazane-samodzielnie': 'Wykazane samodzielnie',
  'wykazane-w-nowym-kontekscie': 'Wykazane w nowym kontekście',
  'utrzymane-po-przerwie': 'Utrzymane po przerwie',
};

export function ScopeView() {
  const { db, profile, content } = useApp();
  const [data, setData] = useState<{ evidence: EvidenceRecord[]; contacts: ContactRecord[]; plans: PlanRecord[]; incomplete: boolean; limited: Set<string> } | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    void (async () => {
      const evidence = await db.evidence.where('profileId').equals(profile.id).toArray();
      const contacts = await db.contacts.where('profileId').equals(profile.id).toArray();
      const plans = await db.plans.where('profileId').equals(profile.id).toArray();
      const prov = profile.preferences['importProvenance'] as { historyCompleteness?: string } | undefined;
      // UPD-05 / FR-035: results from a withdrawn or disputed revision stay in history but are not used as evidence.
      const withdrawn = new Set((await db.withdrawals.toArray()).map((w) => `${w.withdrawal.itemRef.id}@${w.withdrawal.itemRef.revision}`));
      const limited = new Set<string>();
      for (const e of evidence) {
        const ev = await db.evaluations.get(e.sourceEvaluationId);
        if (ev && withdrawn.has(ev.itemInstanceId)) limited.add(e.id);
      }
      setData({ evidence, contacts, plans, incomplete: Boolean(prov), limited });
      headingRef.current?.focus();
    })();
  }, [db, profile]);

  const goals = listGoals(content.packages);
  const matches = (g: Goal, c: { criterionId: string; aspectId?: string }) => c.criterionId === g.criterionId && (g.aspectId === undefined || c.aspectId === undefined || c.aspectId === g.aspectId);
  const [now] = useState(() => Date.now());

  return (
    <Page
      title="CPRE · Zakres i dowody"
      side={<><h2>Jak czytać dowody?</h2><p>Osobno: poznanie materiału, pomoc, samodzielna próba, inny kontekst i rzeczywisty odstęp. Nie tworzą obowiązkowej drabiny.</p><p className="micro">Pojedynczy sukces dotyczy sprawdzonego kryterium, a nie wszystkich powiązanych celów.</p></>}
    >
      <p className="eyebrow">Zakres i dowody</p>
      <h1 ref={headingRef} tabIndex={-1}>Co już sprawdziliśmy?</h1>
      {content.packages.length === 0 ? (
        <>
          <p className="lead">Na tym urządzeniu nie ma jeszcze dopuszczonych materiałów.</p>
          <p>Brak materiału nie oznacza, że nie znasz danego zagadnienia. To ograniczenie korpusu, nie wynik osoby.</p>
        </>
      ) : (
        <p className="lead">Zakres materiału, Twoje obserwacje i potrzeba kontroli są pokazane osobno.</p>
      )}
      {data?.incomplete ? <div className="notice"><p>Historia tego profilu pochodzi z importu. Nowość lub odstęp nie są potwierdzone; wyniki wykonania są zachowane.</p></div> : null}
      {goals.map((g) => {
        const allEv = (data?.evidence ?? []).filter((e) => matches(g, e));
        const ev = allEv.filter((e) => !data?.limited.has(e.id));
        const limitedEv = allEv.filter((e) => data?.limited.has(e.id));
        const cs = (data?.contacts ?? []).filter((c) => matches(g, c));
        const lastAttempt = cs.filter((c) => c.kind === 'independent-attempt').map((c) => Date.parse(c.at)).sort((a, b) => b - a)[0];
        const lastContact = cs.filter((c) => c.kind === 'relevant-contact').map((c) => Date.parse(c.at)).sort((a, b) => b - a)[0];
        const recheck = (data?.plans ?? []).some((p) => p.kind === 'recheck-flag' && p.criterionId === g.criterionId && (p.payload['aspectId'] ?? null) === (g.aspectId ?? null));
        const counts = new Map<string, number>();
        for (const e of ev) counts.set(e.category, (counts.get(e.category) ?? 0) + 1);
        const isOpen = open === g.key;
        return (
          <section className="topic" key={g.key}>
            <h2>{g.label}</h2>
            <p className="micro">Materiał: {g.note ? 'objaśnienie' : 'bez objaśnienia'}{g.baseItem ? ', zadanie do próby' : ', brak zadania'}{g.delayedItems.length > 0 ? ', zadanie do późniejszej kontroli' : ''}.</p>
            <p className="muted">
              Dowód: {ev.length === 0 ? (cs.some((c) => c.kind === 'relevant-contact') ? 'materiał poznany; potrzebna samodzielna próba.' : 'jeszcze tego nie sprawdziliśmy.') : [...counts.entries()].map(([k, n]) => `${CATEGORY_LABEL[k as EvidenceRecord['category']]}: ${String(n)}`).join('; ')}
              {recheck ? ' · Sprawdź ponownie.' : ''}
            </p>
            {limitedEv.length > 0 ? <p className="micro">Wyniki z wycofanej lub spornej wersji materiału: {String(limitedEv.length)}. Zachowujemy je w historii, ale nie używamy jako dowodu.</p> : null}
            <button type="button" className="small" aria-expanded={isOpen} onClick={() => { setOpen(isOpen ? null : g.key); }}>{isOpen ? 'Zwiń podstawę opisu' : 'Zobacz podstawę opisu'}</button>
            {isOpen ? (
              <ul className="factlist">
                <li>Kryterium: {g.criterionDescription}</li>
                <li>Od poprzedniej samodzielnej próby: {lastAttempt ? formatMs(now - lastAttempt) : 'brak danych'}.</li>
                <li>Od ostatniego istotnego kontaktu z tym zakresem: {lastContact ? formatMs(now - lastContact) : 'brak danych'}.</li>
                {ev.map((e) => (
                  <li key={e.id}>{CATEGORY_LABEL[e.category]} · {new Date(e.recordedAt).toLocaleString('pl-PL')}{e.conditions.length ? ` · ${e.conditions.join(', ')}` : ''}{e.limitations.length ? ` · ograniczenia: ${e.limitations.join('; ')}` : ''}</li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}
      <p className="footertext">Zakres jest częściowy. Nie oceniamy gotowości do całego Foundation Level i nie obliczamy procentu opanowania.</p>
    </Page>
  );
}
