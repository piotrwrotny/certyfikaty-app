/**
 * Contextual knowledge (S04, FR-012–014): one dialog, a content stack with a
 * fixed source anchor. "Wstecz" pops one step; "Wróć do pytania"/Escape closes
 * the whole branch and the caller restores answer, result, reveals, scroll and
 * focus. At most three related links are offered (design hypothesis F06).
 */
import type { ContentPackage, Knowledge, Rule } from '@/content/types.ts';
import { findKnowledge, findRule } from '@/content/store.ts';
import { Dialog } from '@/ui/Dialog.tsx';
import { Markdown } from '@/ui/Markdown.tsx';

export type KnowledgeEntry =
  | { kind: 'knowledge'; id: string }
  | { kind: 'rule'; id: string }
  | { kind: 'sources'; ruleIds: readonly string[] };

export function relatedFor(packages: readonly ContentPackage[], k: Knowledge): Knowledge[] {
  const all = packages.flatMap((p) => p.knowledge);
  const rules = new Set(k.ruleIds);
  const scopes = k.contactScopes.map((s) => `${s.criterionId}/${s.aspectId ?? ''}`);
  const comparisons = all.filter((x) => x.id !== k.id && x.kind === 'comparison' && x.ruleIds.some((r) => rules.has(r)));
  const prereq = all.filter((x) => x.id !== k.id && x.kind === 'prerequisite' && x.contactScopes.some((s) => scopes.includes(`${s.criterionId}/${s.aspectId ?? ''}`)));
  const notes = k.kind !== 'note' ? all.filter((x) => x.kind === 'note' && x.ruleIds.some((r) => rules.has(r))) : [];
  return [...comparisons, ...prereq, ...notes].slice(0, 3);
}

/** Note that explains a rule (R10: note → rule). */
export function noteForRule(packages: readonly ContentPackage[], ruleId: string): Knowledge | null {
  for (const p of packages) {
    const n = p.knowledge.find((k) => k.kind === 'note' && k.ruleIds.includes(ruleId));
    if (n) return n;
  }
  for (const p of packages) {
    const n = p.knowledge.find((k) => k.ruleIds.includes(ruleId));
    if (n) return n;
  }
  return null;
}

function kindLabel(k: Knowledge): string {
  switch (k.kind) {
    case 'comparison': return 'Porównanie';
    case 'prerequisite': return 'Potrzebna podstawa';
    case 'worked-example': return 'Przepracowany przykład';
    case 'example': return 'Przykład';
    case 'counterexample': return 'Kontrprzykład';
    case 'note': return 'Wyjaśnienie';
  }
}

export function KnowledgeDialog({ open, stack, packages, onPush, onBack, onClose, returnFocusTo }: {
  open: boolean;
  stack: KnowledgeEntry[];
  packages: readonly ContentPackage[];
  onPush: (e: KnowledgeEntry) => void;
  onBack: () => void;
  onClose: () => void;
  /** Explicit return anchor: Safari does not focus buttons on click, so activeElement is unreliable. */
  returnFocusTo?: () => HTMLElement | null;
}) {
  const top = stack[stack.length - 1];
  let body: React.ReactNode = null;
  if (top?.kind === 'knowledge') {
    const k = findKnowledge(packages, top.id);
    if (!k) {
      body = (
        <>
          <h2 id="kdialog-title">Materiał jest teraz niedostępny.</h2>
          <p>Twoja odpowiedź jest zachowana. Możesz wrócić do pytania.</p>
        </>
      );
    } else {
      const related = relatedFor(packages, k);
      body = (
        <>
          <p className="eyebrow">{kindLabel(k)} · otwarte w kontekście pytania</p>
          <h2 id="kdialog-title">{k.title}</h2>
          {k.kind === 'prerequisite' && k.prerequisiteCondition ? (
            <div className="notice"><p>{k.prerequisiteCondition}</p></div>
          ) : null}
          <Markdown className="md" text={k.bodyMarkdown} />
          {k.kind === 'prerequisite' && k.skippable !== false ? (
            <p><button type="button" className="link" onClick={onBack}>Pomiń podstawę</button></p>
          ) : null}
          <div className="line">
            {related.map((r) => (
              <button key={r.id} type="button" className="link" onClick={() => { onPush({ kind: 'knowledge', id: r.id }); }}>
                {r.kind === 'prerequisite' ? 'Odśwież potrzebną podstawę' : r.kind === 'comparison' ? `Porównaj: ${r.title}` : r.title}
              </button>
            ))}
            {k.ruleIds.length > 0 ? (
              <button type="button" className="link" onClick={() => { onPush({ kind: 'sources', ruleIds: k.ruleIds }); }}>Zobacz podstawę objaśnienia</button>
            ) : null}
          </div>
          <p className="micro muted">Własne objaśnienie projektu, nie oficjalna polska definicja IREB.</p>
        </>
      );
    }
  } else if (top?.kind === 'rule') {
    const r = findRule(packages, top.id);
    const note = r ? noteForRule(packages, r.id) : null;
    body = r ? (
      <>
        <p className="eyebrow">Zasada rozstrzygająca</p>
        <h2 id="kdialog-title">Zasada</h2>
        <Markdown className="md" text={r.statementMarkdown} />
        <div className="line">
          {note ? <button type="button" className="link" onClick={() => { onPush({ kind: 'knowledge', id: note.id }); }}>{note.title}</button> : null}
          <button type="button" className="link" onClick={() => { onPush({ kind: 'sources', ruleIds: [r.id] }); }}>Zobacz podstawę objaśnienia</button>
        </div>
      </>
    ) : (
      <>
        <h2 id="kdialog-title">Nie mamy sprawdzonego objaśnienia tego związku.</h2>
        <p>Lokalne uzasadnienie przy odpowiedzi pozostaje dostępne.</p>
      </>
    );
  } else if (top?.kind === 'sources') {
    const rules = top.ruleIds.map((id) => findRule(packages, id)).filter((r): r is Rule => r !== null);
    const sources = packages.flatMap((p) => p.sources);
    body = (
      <>
        <p className="eyebrow">Podstawa objaśnienia</p>
        <h2 id="kdialog-title">Źródła</h2>
        <ul className="factlist">
          {rules.flatMap((r) => r.sourceRefs.map((ref, i) => {
            const s = sources.find((x) => x.id === ref.sourceId);
            return (
              <li key={`${r.id}-${String(i)}`}>
                {s ? <>{s.title} ({s.version}) — {ref.location}</> : <>{ref.sourceId} — {ref.location}</>}
              </li>
            );
          }))}
        </ul>
        <p className="micro muted">Linki źródłowe mogą wymagać internetu; materiał i zadanie działają offline.</p>
      </>
    );
  }

  return (
    <Dialog open={open} onClose={onClose} labelledBy="kdialog-title" {...(returnFocusTo ? { returnFocusTo } : {})}>
      <div className="dialoghead">
        {stack.length > 1 ? (
          <button type="button" className="small" onClick={onBack}>Wstecz</button>
        ) : (
          <span className="micro muted">Wiedza w kontekście</span>
        )}
        <button type="button" className="small" onClick={onClose}>Wróć do pytania</button>
      </div>
      <div className="dialogbody">{body}</div>
    </Dialog>
  );
}
