/**
 * Stage 2 of the authoring format (docs/13 §8): cross-file checks (lint), conversion
 * into a content-package, comparison with the previous revision and the Markdown report.
 * Pure functions: no writes. The CLI (authoring-cli.ts) owns the file system effects.
 *
 * Never invents content: missing keys, rationales, rules, relations or decisions are
 * errors or explicit defaults documented in docs/13 (status pending, rights unresolved).
 */
import { existsSync, readFileSync } from 'node:fs';
import { basename, relative, resolve, sep } from 'node:path';
import { createHash } from 'node:crypto';
import type {
  ContactScope, ContentPackage, Criterion, ItemRef, Knowledge, KnowledgeKind, OpenActivity, PackageStatus,
  Question, Relationship, Remediation, Rights, Rule, Source, TestForm,
} from '../../src/content/types.ts';
import { formatInstruction } from '../../src/content/instruction.ts';
import { validatePackageSemantics, validatePackageStructure, combine } from '../../src/content/validate.ts';
import { AUTHORING_FORMAT, loadAuthoringValidators, readTopicDir, splitSections, validateTopicDir, type AuthoringFile, type AuthoringValidators } from './authoring.ts';
import { ROOT, loadValidators, formatAjvErrors, schemaValid } from './lib.ts';

// ---------------------------------------------------------------- authoring types (schema-validated)

interface AScope { criterion: string; aspect?: string }
interface ATopic {
  format: string; id: string; revision: string; purpose?: 'content' | 'review-fixture';
  title: string; shortTitle: string; language: 'pl'; authoring: 'draft' | 'complete';
  educationProfile: { syllabusVersion: string; glossaryVersion: string; regulationsVersion: string };
  order?: string[]; limitations?: string[];
  provenance?: { path: string; documentVersion: string; storedFileVersion?: string }[];
  criteria: { id: string; revision: string; description: string; labelBeforeAnswer?: string; eo?: { id: string; level: 'L1' | 'L2' | 'L3' }[]; aspects?: { id: string; labelAfterAnswer: string }[] }[];
  families?: { id: string; revision: string; description: string }[];
}
interface ARule { id: string; revision: string; statement: string; sources: { source: string; location: string }[] }
interface AOption { id: string; text: string; correct?: boolean; truth?: boolean; rationale: string; rules: string[]; see?: string; scopes?: AScope[]; sourceAnchor?: string }
interface AQuestion {
  id: string; revision: string; format: 'A' | 'P' | 'K'; role: Question['role']; weight: 1 | 2 | 3; k?: number;
  scope: AScope; secondaryScopes?: { criterion: string; aspect?: string; role: 'secondary' | 'helper'; options?: string[] }[];
  family: string; sourceAnchor?: string; stem: string; options: AOption[];
}
interface AKnowledge { id: string; revision: string; kind: KnowledgeKind; title: string; scope: AScope[]; rules: string[]; prerequisiteCondition?: string; skippable?: boolean; sourceAnchor?: string }
interface ACorrection { id: string; revision: string; scope: AScope; followUps: string[]; see?: string[]; sourceAnchor?: string }
interface AOpen { id: string; revision: string; scope: AScope[]; evaluation: OpenActivity['evaluationMethod']; sourceAnchor?: string }
export type RelationType = 'explains' | 'distinguishes' | 'illustrates' | 'counterexample-of' | 'required-for' | 'variant-of';
interface ARelation { id?: string; revision?: string; type: RelationType; from: string; to: string; meaning: string; condition?: string; provenance?: string }
interface AForm { id: string; revision: string; title: string; scopes: AScope[]; items: string[]; dictionaryAllowed: boolean }
interface ADecision {
  id: string; decidedAt: string; decidedBy: string; ref: string; revision: string;
  review: PackageStatus['review']; publication: PackageStatus['publication']; allowedUses: PackageStatus['allowedUses'];
  rights: { status: Rights['status']; channels: Rights['channels'] };
  families?: { id: string; review: 'pending' | 'approved' }[];
  relations?: string[];
  novelty?: { question: string; review: Question['noveltyReview'] }[];
  forms?: { id: string; review: PackageStatus['review']; publication: PackageStatus['publication']; allowedUses: 'topic-test'[]; eligibilityPolicyRef: string }[];
}

interface Located<T> { readonly file: string; readonly data: T; readonly body?: string }

export interface TopicModel {
  readonly dir: string;
  /** Directory relative to the repository root, with forward slashes. */
  readonly relDir: string;
  readonly files: readonly AuthoringFile[];
  readonly topic: Located<ATopic>;
  readonly sources: readonly Located<Source>[];
  readonly rules: readonly Located<ARule>[];
  readonly questions: readonly Located<AQuestion>[];
  readonly knowledge: readonly Located<AKnowledge>[];
  readonly corrections: readonly Located<ACorrection>[];
  readonly open: readonly Located<AOpen>[];
  readonly relations: readonly Located<ARelation>[];
  readonly forms: readonly Located<AForm>[];
  readonly decisions: readonly Located<ADecision>[];
}

// ---------------------------------------------------------------- issues

export type Severity = 'error' | 'warning';
export interface LintIssue { readonly severity: Severity; readonly file: string; readonly field?: string; readonly message: string }

class Issues {
  readonly list: LintIssue[] = [];
  error(file: string, field: string | undefined, message: string): void { this.list.push({ severity: 'error', file, ...(field ? { field } : {}), message }); }
  warn(file: string, field: string | undefined, message: string): void { this.list.push({ severity: 'warning', file, ...(field ? { field } : {}), message }); }
}

export const hasErrors = (issues: readonly LintIssue[]): boolean => issues.some((i) => i.severity === 'error');

// ---------------------------------------------------------------- constants

export const RELATION_CODES: Record<RelationType, string> = {
  explains: 'R10', distinguishes: 'R11', illustrates: 'R12', 'counterexample-of': 'R13', 'required-for': 'R14', 'variant-of': 'R21',
};
const DEFAULT_CONDITION = 'Ujawnienie dopuszczone przez granicę feedbacku';
const CONDITION_REQUIRED: readonly RelationType[] = ['required-for', 'variant-of'];
const DEFAULT_PROVENANCE = 'Interpretacja autora';
type EndKind = 'criterion' | 'aspect' | 'rule' | 'question' | 'source' | 'family' | 'correction' | 'open' | 'form' | `knowledge:${KnowledgeKind}`;
const RELATION_ENDS: Record<RelationType, { from: readonly EndKind[]; to: readonly EndKind[] }> = {
  explains: { from: ['knowledge:note', 'knowledge:prerequisite', 'knowledge:example', 'knowledge:worked-example', 'knowledge:counterexample', 'knowledge:comparison'], to: ['rule'] },
  distinguishes: { from: ['knowledge:comparison'], to: ['rule'] },
  illustrates: { from: ['knowledge:example', 'knowledge:worked-example'], to: ['rule'] },
  'counterexample-of': { from: ['knowledge:counterexample'], to: ['rule'] },
  'required-for': { from: ['knowledge:prerequisite'], to: ['criterion', 'aspect', 'question'] },
  'variant-of': { from: ['question'], to: ['question'] },
};
const KIND_LABEL: Record<string, string> = {
  criterion: 'kryterium', aspect: 'zakres', rule: 'reguła', question: 'pytanie', source: 'źródło', family: 'rodzina',
  correction: 'korekta', open: 'aktywność otwarta', form: 'forma testu',
  'knowledge:note': 'nota', 'knowledge:prerequisite': 'podstawa', 'knowledge:example': 'przykład', 'knowledge:worked-example': 'scenariusz',
  'knowledge:counterexample': 'kontrprzykład', 'knowledge:comparison': 'porównanie',
};
/** HTML tag or unfilled template placeholder such as <Treść pytania>. */
const TAG_RE = /<\/?[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż!][^>\n]*>/;
const LINK_RE = /\]\(([^)\s]+)\)/g;

// ---------------------------------------------------------------- model

function posix(p: string): string { return p.split(sep).join('/'); }

export function buildModel(topicDir: string, files: readonly AuthoringFile[]): TopicModel | null {
  const pick = <T>(kind: AuthoringFile['kind']): Located<T>[] =>
    files.filter((f) => f.kind === kind).map((f) => ({ file: f.relPath, data: f.data as T, ...(f.body !== undefined ? { body: f.body } : {}) }));
  const topicFile = files.find((f) => f.kind === 'topic');
  if (!topicFile) return null;
  const flat = <T>(kind: AuthoringFile['kind'], key: string): Located<T>[] =>
    files.filter((f) => f.kind === kind).flatMap((f) => ((f.data as Record<string, T[]>)[key] ?? []).map((data) => ({ file: f.relPath, data })));
  return {
    dir: topicDir,
    relDir: posix(relative(ROOT, topicDir)),
    files,
    topic: { file: topicFile.relPath, data: topicFile.data as ATopic },
    sources: flat<Source>('sources', 'sources'),
    rules: flat<ARule>('rules', 'rules'),
    questions: pick<AQuestion>('question'),
    knowledge: [...pick<AKnowledge>('lesson'), ...pick<AKnowledge>('example')],
    corrections: pick<ACorrection>('correction'),
    open: pick<AOpen>('open'),
    relations: flat<ARelation>('relations', 'relations'),
    forms: flat<AForm>('forms', 'forms'),
    decisions: flat<ADecision>('decisions', 'decisions'),
  };
}

interface RegEntry { kind: EndKind; file: string; revision: string; criterion?: string }

function registry(m: TopicModel, issues: Issues): Map<string, RegEntry> {
  const reg = new Map<string, RegEntry>();
  const add = (id: string, e: RegEntry, field: string) => {
    const prev = reg.get(id);
    if (prev) issues.error(e.file, field, `Identyfikator ${id} jest już użyty w ${prev.file} (${KIND_LABEL[prev.kind] ?? prev.kind}).`);
    else reg.set(id, e);
  };
  m.topic.data.criteria.forEach((c, i) => {
    add(c.id, { kind: 'criterion', file: m.topic.file, revision: c.revision }, `criteria[${String(i)}].id`);
    (c.aspects ?? []).forEach((a, j) => { add(a.id, { kind: 'aspect', file: m.topic.file, revision: c.revision, criterion: c.id }, `criteria[${String(i)}].aspects[${String(j)}].id`); });
  });
  (m.topic.data.families ?? []).forEach((f, i) => { add(f.id, { kind: 'family', file: m.topic.file, revision: f.revision }, `families[${String(i)}].id`); });
  m.sources.forEach((s, i) => { add(s.data.id, { kind: 'source', file: s.file, revision: 'r1' }, `sources[${String(i)}].id`); });
  m.rules.forEach((r, i) => { add(r.data.id, { kind: 'rule', file: r.file, revision: r.data.revision }, `rules[${String(i)}].id`); });
  for (const q of m.questions) add(q.data.id, { kind: 'question', file: q.file, revision: q.data.revision }, 'id');
  for (const k of m.knowledge) add(k.data.id, { kind: `knowledge:${k.data.kind}`, file: k.file, revision: k.data.revision }, 'id');
  for (const c of m.corrections) add(c.data.id, { kind: 'correction', file: c.file, revision: c.data.revision }, 'id');
  for (const o of m.open) add(o.data.id, { kind: 'open', file: o.file, revision: o.data.revision }, 'id');
  m.forms.forEach((f, i) => { add(f.data.id, { kind: 'form', file: f.file, revision: f.data.revision }, `forms[${String(i)}].id`); });
  return reg;
}

/** Same rule the app uses today (noteForRule): first note with the rule, else any knowledge with it. */
export function derivedKnowledgeForRule(knowledge: readonly { id: string; kind: KnowledgeKind; rules: readonly string[] }[], ruleId: string): string | null {
  return knowledge.find((k) => k.kind === 'note' && k.rules.includes(ruleId))?.id
    ?? knowledge.find((k) => k.rules.includes(ruleId))?.id
    ?? null;
}

// ---------------------------------------------------------------- lint

export interface LintOptions {
  /** Template mode: placeholders and missing provenance files are allowed. */
  readonly templates?: boolean;
  /** Require the directory name to equal the topic id (content/authoring topics). */
  readonly expectDirName?: boolean;
  /** Previously converted package with the same packageId (revision immutability). */
  readonly previous?: ContentPackage | null;
  /** Other packages already in the corpus (cross-topic ID collisions). */
  readonly otherPackages?: readonly ContentPackage[];
}

export interface LintResult { readonly issues: LintIssue[]; readonly model: TopicModel | null }

export function lintTopic(topicDir: string, opts: LintOptions = {}, validators: AuthoringValidators = loadAuthoringValidators()): LintResult {
  const issues = new Issues();
  for (const i of validateTopicDir(topicDir, validators)) issues.error(i.file, undefined, i.message);
  if (issues.list.length > 0) {
    issues.list.push({ severity: 'error', file: '(temat)', message: 'Najpierw popraw błędy schematu; kontrole odwołań zostały pominięte.' });
    return { issues: issues.list, model: null };
  }
  const { files } = readTopicDir(topicDir);
  const m = buildModel(topicDir, files);
  if (!m) return { issues: [{ severity: 'error', file: 'topic.yaml', message: 'Brak pliku topic.yaml.' }], model: null };
  crossCheck(m, opts, issues);
  return { issues: issues.list, model: m };
}

function crossCheck(m: TopicModel, opts: LintOptions, issues: Issues): void {
  const t = m.topic.data;
  const kinds = new Set(m.files.map((f) => f.kind));
  for (const required of ['sources', 'rules'] as const) {
    if (!kinds.has(required)) issues.error(`${required}.yaml`, undefined, `Brak pliku ${required}.yaml.`);
  }
  if (opts.expectDirName && basename(m.dir) !== t.id) issues.error(m.topic.file, 'id', `Identyfikator tematu ${t.id} różni się od nazwy katalogu ${basename(m.dir)}.`);

  // file name = object id
  const perFile = [...m.questions, ...m.knowledge, ...m.corrections, ...m.open] as Located<{ id: string }>[];
  for (const f of perFile) {
    const name = basename(f.file).replace(/\.(ya?ml|md)$/, '');
    if (name !== f.data.id) issues.error(f.file, 'id', `Nazwa pliku ${name} różni się od identyfikatora ${f.data.id}.`);
  }

  const reg = registry(m, issues);
  const expect = (file: string, field: string, id: string, allowed: readonly EndKind[], what: string): RegEntry | undefined => {
    const e = reg.get(id);
    if (!e) { issues.error(file, field, `Nieznany identyfikator ${id} (${what}).`); return undefined; }
    if (!allowed.includes(e.kind)) {
      issues.error(file, field, `${id} to ${KIND_LABEL[e.kind] ?? e.kind}, a oczekiwano: ${allowed.map((k) => KIND_LABEL[k] ?? k).join(', ')}.`);
      return undefined;
    }
    return e;
  };
  const checkScope = (file: string, field: string, s: AScope) => {
    if (!expect(file, `${field}.criterion`, s.criterion, ['criterion'], 'kryterium')) return;
    if (s.aspect !== undefined) {
      const a = expect(file, `${field}.aspect`, s.aspect, ['aspect'], 'zakres');
      if (a && a.criterion !== s.criterion) issues.error(file, `${field}.aspect`, `Zakres ${s.aspect} należy do ${a.criterion ?? '?'}, nie do ${s.criterion}.`);
    }
  };
  const knowledgeKinds: EndKind[] = ['knowledge:note', 'knowledge:prerequisite', 'knowledge:example', 'knowledge:worked-example', 'knowledge:counterexample', 'knowledge:comparison'];

  // topic
  (t.order ?? []).forEach((id, i) => { expect(m.topic.file, `order[${String(i)}]`, id, ['criterion'], 'kolejność kryteriów'); });
  t.criteria.forEach((c, i) => {
    const before = c.labelBeforeAnswer?.toLocaleLowerCase('pl');
    for (const a of c.aspects ?? []) {
      if (before && before.includes(a.labelAfterAnswer.toLocaleLowerCase('pl'))) {
        issues.error(m.topic.file, `criteria[${String(i)}].labelBeforeAnswer`, `Etykieta przed odpowiedzią zawiera nazwę zakresu „${a.labelAfterAnswer}”, która może być odpowiedzią.`);
      }
    }
  });
  if (!opts.templates) {
    (t.provenance ?? []).forEach((p, i) => {
      if (!existsSync(resolve(ROOT, p.path))) issues.error(m.topic.file, `provenance[${String(i)}].path`, `Plik ${p.path} nie istnieje.`);
    });
  }

  // rules
  const usedSources = new Set<string>();
  m.rules.forEach((r, i) => r.data.sources.forEach((s, j) => {
    usedSources.add(s.source);
    expect(r.file, `rules[${String(i)}].sources[${String(j)}].source`, s.source, ['source'], 'źródło');
  }));
  m.sources.forEach((s, i) => { if (!usedSources.has(s.data.id)) issues.warn(s.file, `sources[${String(i)}]`, `Źródło ${s.data.id} nie jest używane przez żadną regułę.`); });

  // knowledge
  const usedRules = new Set<string>();
  for (const k of m.knowledge) {
    k.data.scope.forEach((s, i) => { checkScope(k.file, `scope[${String(i)}]`, s); });
    k.data.rules.forEach((r, i) => { usedRules.add(r); expect(k.file, `rules[${String(i)}]`, r, ['rule'], 'reguła'); });
  }
  const knowledgeForDerivation = m.knowledge.map((k) => ({ id: k.data.id, kind: k.data.kind, rules: k.data.rules }));

  // questions
  const families = new Set((t.families ?? []).map((f) => f.id));
  for (const q of m.questions) {
    const d = q.data;
    checkScope(q.file, 'scope', d.scope);
    if (!families.has(d.family)) expect(q.file, 'family', d.family, ['family'], 'rodzina z topic.yaml');
    const optionIds = new Set<string>();
    d.options.forEach((o, i) => {
      const f = `options[${String(i)}]`;
      if (optionIds.has(o.id)) issues.error(q.file, `${f}.id`, `Powtórzony identyfikator opcji ${o.id}.`);
      optionIds.add(o.id);
      o.rules.forEach((r, j) => { usedRules.add(r); expect(q.file, `${f}.rules[${String(j)}]`, r, ['rule'], 'reguła'); });
      (o.scopes ?? []).forEach((s, j) => { checkScope(q.file, `${f}.scopes[${String(j)}]`, s); });
      if (o.see !== undefined && expect(q.file, `${f}.see`, o.see, knowledgeKinds, 'lekcja albo przykład')) {
        const derived = o.rules[0] ? derivedKnowledgeForRule(knowledgeForDerivation, o.rules[0]) : null;
        if (derived !== o.see) {
          issues.error(q.file, `${f}.see`, `Aplikacja pokaże dziś ${derived ?? 'samą regułę'} (pierwsza reguła ${o.rules[0] ?? '?'}), a nie ${o.see}. Zmień pierwszą regułę albo usuń see do czasu etapu 3.`);
        }
      }
    });
    if (d.format === 'P') {
      const correct = d.options.filter((o) => o.correct === true).length;
      if (correct !== d.k) issues.error(q.file, 'k', `Pytanie P ma k=${String(d.k)}, ale ${String(correct)} opcji z correct: true.`);
      if ((d.k ?? 0) >= d.options.length) issues.error(q.file, 'k', 'Pytanie P musi mieć więcej opcji niż k.');
    }
    (d.secondaryScopes ?? []).forEach((s, i) => {
      checkScope(q.file, `secondaryScopes[${String(i)}]`, { criterion: s.criterion, ...(s.aspect ? { aspect: s.aspect } : {}) });
      (s.options ?? []).forEach((oid, j) => { if (!optionIds.has(oid)) issues.error(q.file, `secondaryScopes[${String(i)}].options[${String(j)}]`, `Nieznana opcja ${oid}.`); });
    });
  }

  // corrections
  const followUpUsed = new Set<string>();
  const correctedScopes = new Set<string>();
  const scopeKey = (s: AScope) => `${s.criterion}/${s.aspect ?? ''}`;
  for (const c of m.corrections) {
    checkScope(c.file, 'scope', c.data.scope);
    correctedScopes.add(scopeKey(c.data.scope));
    c.data.followUps.forEach((id, i) => {
      followUpUsed.add(id);
      if (!expect(c.file, `followUps[${String(i)}]`, id, ['question'], 'pytanie kontrolne')) return;
      const q = m.questions.find((x) => x.data.id === id);
      const role = i === 0 ? 'follow-up-1' : 'follow-up-2';
      if (q && q.data.role !== role) issues.error(c.file, `followUps[${String(i)}]`, `${id} ma rolę ${q.data.role}, a na tej pozycji wymagana jest ${role}.`);
      if (q && scopeKey(q.data.scope) !== scopeKey(c.data.scope)) issues.error(c.file, `followUps[${String(i)}]`, `${id} mierzy ${scopeKey(q.data.scope)}, a korekta dotyczy ${scopeKey(c.data.scope)}.`);
    });
    (c.data.see ?? []).forEach((id, i) => { expect(c.file, `see[${String(i)}]`, id, knowledgeKinds, 'lekcja albo przykład'); });
  }
  for (const q of m.questions) {
    if ((q.data.role === 'follow-up-1' || q.data.role === 'follow-up-2') && !followUpUsed.has(q.data.id)) {
      issues.warn(q.file, 'role', `Pytanie kontrolne ${q.data.id} nie jest wskazane w żadnej korekcie, więc się nie pojawi.`);
    }
    if (q.data.role === 'base' && !correctedScopes.has(scopeKey(q.data.scope))) {
      issues.warn(q.file, 'scope', `Brak korekty dla zakresu ${scopeKey(q.data.scope)}: po błędzie nie będzie korekty ani kontroli.`);
    }
  }

  // open activities
  for (const o of m.open) o.data.scope.forEach((s, i) => { checkScope(o.file, `scope[${String(i)}]`, s); });

  // relations
  const relIds = new Set<string>();
  m.relations.forEach((r, i) => {
    const f = `relations[${String(i)}]`;
    const ends = RELATION_ENDS[r.data.type];
    expect(r.file, `${f}.from`, r.data.from, ends.from, `początek relacji ${r.data.type}`);
    expect(r.file, `${f}.to`, r.data.to, ends.to, `koniec relacji ${r.data.type}`);
    if (CONDITION_REQUIRED.includes(r.data.type) && r.data.condition === undefined) issues.error(r.file, `${f}.condition`, `Relacja ${r.data.type} wymaga jawnego warunku.`);
    if (r.data.type === 'variant-of' && r.data.from === r.data.to) issues.error(r.file, f, 'Pytanie nie może być wariantem samego siebie.');
    const id = relationId(r.data);
    if (relIds.has(id)) issues.error(r.file, `${f}.id`, `Powtórzony identyfikator relacji ${id}.`);
    relIds.add(id);
  });

  // forms
  m.forms.forEach((fm, i) => {
    fm.data.scopes.forEach((s, j) => { checkScope(fm.file, `forms[${String(i)}].scopes[${String(j)}]`, s); });
    fm.data.items.forEach((id, j) => { expect(fm.file, `forms[${String(i)}].items[${String(j)}]`, id, ['question'], 'pytanie'); });
  });

  // decisions
  const current = m.decisions.filter((d) => d.data.revision === t.revision);
  m.decisions.forEach((d, i) => {
    const f = `decisions[${String(i)}]`;
    if (d.data.revision !== t.revision) issues.warn(d.file, `${f}.revision`, `Decyzja ${d.data.id} dotyczy rewizji ${d.data.revision}, a temat ma ${t.revision}; nie działa.`);
    (d.data.families ?? []).forEach((x, j) => { expect(d.file, `${f}.families[${String(j)}].id`, x.id, ['family'], 'rodzina'); });
    (d.data.novelty ?? []).forEach((x, j) => { expect(d.file, `${f}.novelty[${String(j)}].question`, x.question, ['question'], 'pytanie'); });
    (d.data.forms ?? []).forEach((x, j) => { expect(d.file, `${f}.forms[${String(j)}].id`, x.id, ['form'], 'forma testu'); });
    (d.data.relations ?? []).forEach((x, j) => { if (!relIds.has(x) && !generatedR19Ids(m).includes(x)) issues.error(d.file, `${f}.relations[${String(j)}]`, `Nieznana relacja ${x}.`); });
  });
  if (current.length === 0) {
    issues.warn('review/decisions.yaml', undefined, `Brak decyzji dla rewizji ${t.revision}: status do review, prawa nieustalone. Paczka nie trafi do żadnego kanału, także recenzenckiego.`);
  }

  // unused rules
  m.rules.forEach((r, i) => { if (!usedRules.has(r.data.id)) issues.warn(r.file, `rules[${String(i)}]`, `Reguła ${r.data.id} nie jest używana przez żadne uzasadnienie, lekcję ani przykład.`); });

  // displayed text: no HTML, no unfilled placeholders, http(s) links only
  if (!opts.templates) for (const [file, field, text] of displayedTexts(m)) checkText(issues, file, field, text);

  // cross-topic collisions
  for (const other of opts.otherPackages ?? []) {
    if (other.packageId === t.id) continue;
    const ids = new Set(packageIds(other));
    for (const [id, e] of reg) if (ids.has(id)) issues.error(e.file, undefined, `Identyfikator ${id} istnieje już w paczce ${other.packageId}.`);
  }

  // immutability against the previous conversion
  if (opts.previous) {
    const next = convertModel(m);
    const diff = comparePackages(opts.previous, next);
    const strict = opts.previous.status.authoring === 'complete' || Boolean(opts.previous.status.decisionRef);
    for (const c of diff.changedWithoutRevision) {
      const msg = `${c} zmienił treść bez nowej rewizji względem ${opts.previous.packageId} ${opts.previous.revision}.`;
      if (strict) issues.error('(porównanie)', undefined, `${msg} Poprzednia rewizja była kompletna albo miała decyzję, więc zwiększ revision obiektu.`);
      else issues.warn('(porównanie)', undefined, `${msg} Dozwolone, bo poprzednia rewizja była szkicem bez decyzji.`);
    }
    if (strict && opts.previous.revision === t.revision && diff.changedWithoutRevision.length + diff.changedWithRevision.length + diff.added.length + diff.removed.length > 0) {
      issues.error(m.topic.file, 'revision', `Paczka ${t.id} ${t.revision} była kompletna albo miała decyzję i zmieniła się. Zwiększ revision w topic.yaml.`);
    }
  }
}

function checkText(issues: Issues, file: string, field: string, text: string): void {
  if (TAG_RE.test(text)) issues.error(file, field, 'Tekst zawiera znacznik HTML albo niewypełniony wzór <…>.');
  for (const match of text.matchAll(LINK_RE)) {
    const url = match[1] ?? '';
    if (!/^https?:\/\//.test(url)) issues.error(file, field, `Link ${url} nie jest adresem http(s).`);
  }
}

function displayedTexts(m: TopicModel): [string, string, string][] {
  const out: [string, string, string][] = [];
  const t = m.topic.data;
  out.push([m.topic.file, 'title', t.title], [m.topic.file, 'shortTitle', t.shortTitle]);
  t.criteria.forEach((c, i) => {
    out.push([m.topic.file, `criteria[${String(i)}].description`, c.description]);
    if (c.labelBeforeAnswer) out.push([m.topic.file, `criteria[${String(i)}].labelBeforeAnswer`, c.labelBeforeAnswer]);
    (c.aspects ?? []).forEach((a, j) => out.push([m.topic.file, `criteria[${String(i)}].aspects[${String(j)}].labelAfterAnswer`, a.labelAfterAnswer]));
  });
  m.sources.forEach((s, i) => out.push([s.file, `sources[${String(i)}].attribution`, s.data.attribution], [s.file, `sources[${String(i)}].title`, s.data.title]));
  m.rules.forEach((r, i) => out.push([r.file, `rules[${String(i)}].statement`, r.data.statement]));
  for (const q of m.questions) {
    out.push([q.file, 'stem', q.data.stem]);
    q.data.options.forEach((o, i) => out.push([q.file, `options[${String(i)}].text`, o.text], [q.file, `options[${String(i)}].rationale`, o.rationale]));
  }
  for (const k of m.knowledge) out.push([k.file, 'title', k.data.title], [k.file, '(treść)', k.body ?? '']);
  for (const c of m.corrections) out.push([c.file, '(treść)', c.body ?? '']);
  for (const o of m.open) out.push([o.file, '(treść)', o.body ?? '']);
  m.forms.forEach((f, i) => out.push([f.file, `forms[${String(i)}].title`, f.data.title]));
  return out;
}

function packageIds(p: ContentPackage): string[] {
  return [
    ...p.criteria.flatMap((c) => [c.id, ...c.aspects.map((a) => a.id)]), ...p.sources.map((s) => s.id), ...p.rules.map((r) => r.id),
    ...p.knowledge.map((k) => k.id), ...p.questions.map((q) => q.id), ...p.openActivities.map((o) => o.id),
    ...p.remediations.map((r) => r.id), ...p.families.map((f) => f.id), ...p.forms.map((f) => f.id),
  ];
}

// ---------------------------------------------------------------- conversion

export function relationId(r: ARelation): string {
  return r.id ?? `REL-${r.from}-${r.type}-${r.to}`;
}
function generatedR19Ids(m: TopicModel): string[] {
  return m.corrections.flatMap((c) => c.data.followUps.map((q) => `REL-${q}-checks-after-${c.data.id}`));
}
const contact = (s: AScope): ContactScope => (s.aspect !== undefined ? { criterionId: s.criterion, aspectId: s.aspect } : { criterionId: s.criterion });

function sha256File(absPath: string): string {
  return createHash('sha256').update(readFileSync(absPath)).digest('hex');
}

/** Latest decision for the topic revision (by decidedAt, then file order). */
export function currentDecision(m: TopicModel): ADecision | null {
  const list = m.decisions.map((d, i) => ({ d: d.data, i })).filter((x) => x.d.revision === m.topic.data.revision);
  list.sort((a, b) => (a.d.decidedAt === b.d.decidedAt ? a.i - b.i : a.d.decidedAt < b.d.decidedAt ? -1 : 1));
  return list.at(-1)?.d ?? null;
}

export function convertModel(m: TopicModel): ContentPackage {
  const t = m.topic.data;
  const decision = currentDecision(m);
  const revisionOf = new Map<string, string>();
  t.criteria.forEach((c) => { revisionOf.set(c.id, c.revision); (c.aspects ?? []).forEach((a) => revisionOf.set(a.id, c.revision)); });
  (t.families ?? []).forEach((f) => revisionOf.set(f.id, f.revision));
  for (const x of [...m.rules, ...m.questions, ...m.knowledge, ...m.corrections, ...m.open, ...m.forms] as Located<{ id: string; revision: string }>[]) revisionOf.set(x.data.id, x.data.revision);
  const ref = (id: string): ItemRef => ({ id, revision: revisionOf.get(id) ?? 'r1' });

  const status: PackageStatus = decision
    ? { authoring: t.authoring, review: decision.review, publication: decision.publication, allowedUses: decision.allowedUses, empirical: 'none', decisionRef: decision.id }
    : { authoring: t.authoring, review: 'pending', publication: 'review-only', allowedUses: [], empirical: 'none' };
  const rights: Rights = decision
    ? { status: decision.rights.status, channels: decision.rights.channels, decisionRef: decision.id }
    : { status: 'unresolved', channels: [] };

  const provenance = [
    ...(t.provenance ?? []).map((p) => {
      const abs = resolve(ROOT, p.path);
      return { path: p.path, sha256: existsSync(abs) ? sha256File(abs) : '0'.repeat(64), documentVersion: p.documentVersion, storedFileVersion: p.storedFileVersion ?? 'brak danych' };
    }),
    ...m.files.map((f) => ({ path: `${m.relDir}/${f.relPath}`, sha256: sha256File(resolve(m.dir, f.relPath)), documentVersion: t.revision, storedFileVersion: AUTHORING_FORMAT })),
  ];

  const criteria: Criterion[] = t.criteria.map((c) => ({
    id: c.id, revision: c.revision, description: c.description,
    eoRefs: c.eo ?? [],
    aspects: (c.aspects ?? []).map((a) => ({ id: a.id, label: a.labelAfterAnswer })),
  }));
  const rules: Rule[] = m.rules.map((r) => ({
    id: r.data.id, revision: r.data.revision, statementMarkdown: r.data.statement,
    sourceRefs: r.data.sources.map((s) => ({ sourceId: s.source, location: s.location })),
  }));
  const knowledge: Knowledge[] = m.knowledge.map((k) => ({
    id: k.data.id, revision: k.data.revision, kind: k.data.kind, title: k.data.title, bodyMarkdown: k.body ?? '',
    ruleIds: k.data.rules, contactScopes: k.data.scope.map(contact),
    sourceAnchor: k.data.sourceAnchor ?? `${m.relDir}/${k.file}`,
    ...(k.data.prerequisiteCondition !== undefined ? { prerequisiteCondition: k.data.prerequisiteCondition } : {}),
    ...(k.data.skippable !== undefined ? { skippable: k.data.skippable } : {}),
  }));
  const novelty = new Map((decision?.novelty ?? []).map((n) => [n.question, n.review]));
  const questions: Question[] = m.questions.map((q) => {
    const d = q.data;
    const anchor = d.sourceAnchor ?? `${m.relDir}/${q.file}`;
    const allIds = d.options.map((o) => o.id);
    return {
      id: d.id, revision: d.revision, format: d.format, role: d.role, weight: d.weight,
      ...(d.format === 'P' ? { k: d.k } : {}),
      ...(d.format === 'K' ? { m: d.options.length } : {}),
      stemMarkdown: d.stem,
      instruction: formatInstruction({ format: d.format, ...(d.k !== undefined ? { k: d.k } : {}) }),
      decisions: d.options.map((o) => ({ id: o.id, textMarkdown: o.text })),
      answerKey: d.format === 'K'
        ? { truthByDecisionId: Object.fromEntries(d.options.map((o) => [o.id, o.truth === true])) }
        : { selectedIds: d.options.filter((o) => o.correct === true).map((o) => o.id) },
      rationales: d.options.map((o) => {
        const id = `RAT-${d.id}-${o.id}`;
        return { id, decisionId: o.id, bodyMarkdown: o.rationale, ruleIds: o.rules, contactScopes: (o.scopes ?? [d.scope]).map(contact), sourceAnchor: o.sourceAnchor ?? `${anchor}, ${id}` };
      }),
      criterionMappings: [
        { ...contact(d.scope), role: 'primary' as const, decisionIds: allIds },
        ...(d.secondaryScopes ?? []).map((s) => ({ ...contact({ criterion: s.criterion, ...(s.aspect ? { aspect: s.aspect } : {}) }), role: s.role, decisionIds: s.options ?? allIds })),
      ],
      familyRef: ref(d.family),
      noveltyReview: novelty.get(d.id) ?? 'pending',
      sourceAnchor: anchor,
    };
  });
  const openActivities: OpenActivity[] = m.open.map((o) => {
    const s = splitSections(o.body ?? '');
    return {
      id: o.data.id, revision: o.data.revision, promptMarkdown: s.get('Polecenie') ?? '', rubricMarkdown: s.get('Rubryka') ?? '',
      scope: o.data.scope.map(contact), evaluationMethod: o.data.evaluation, sourceAnchor: o.data.sourceAnchor ?? `${m.relDir}/${o.file}`,
    };
  });
  const remediations: Remediation[] = m.corrections.map((c) => {
    const s = splitSections(c.body ?? '');
    return {
      id: c.data.id, revision: c.data.revision, scope: contact(c.data.scope), bodyMarkdown: s.get('') ?? '',
      knowledgeRefs: (c.data.see ?? []).map(ref), followUpRefs: c.data.followUps.map(ref),
      alternativeHelpMarkdown: s.get('Inna pomoc') ?? '', exitAfterFailedFollowUps: 2,
    };
  });
  const familyReview = new Map((decision?.families ?? []).map((f) => [f.id, f.review]));
  const approvedRelations = new Set(decision?.relations ?? []);
  const relationships: Relationship[] = [
    ...m.relations.map((r) => {
      const id = relationId(r.data);
      return {
        id, revision: r.data.revision ?? 'r1', type: RELATION_CODES[r.data.type], from: ref(r.data.from), to: ref(r.data.to),
        condition: r.data.condition ?? DEFAULT_CONDITION, meaning: r.data.meaning, provenance: r.data.provenance ?? DEFAULT_PROVENANCE,
        review: approvedRelations.has(id) ? 'approved' as const : 'pending' as const,
      };
    }),
    ...m.corrections.flatMap((c) => c.data.followUps.map((qid, i) => {
      const id = `REL-${qid}-checks-after-${c.data.id}`;
      return {
        id, revision: c.data.revision, type: 'R19', from: ref(qid), to: ref(c.data.id),
        condition: 'Po nieudanej odpowiedzi i korekcie tego zakresu',
        meaning: `Kontrola ${i === 0 ? 'F' : 'G'} sprawdza rozróżnienie, którego dotyczyła korekta ${c.data.id}.`,
        provenance: `Lista followUps w ${m.relDir}/${c.file}`,
        review: approvedRelations.has(id) ? 'approved' as const : 'pending' as const,
      };
    })),
  ];
  const formDecisions = new Map((decision?.forms ?? []).map((f) => [f.id, f]));
  const forms: TestForm[] = m.forms.map((f) => {
    const fd = formDecisions.get(f.data.id);
    return {
      id: f.data.id, revision: f.data.revision, title: f.data.title,
      status: fd && decision
        ? { authoring: t.authoring, review: fd.review, publication: fd.publication, allowedUses: fd.allowedUses, empirical: 'none', decisionRef: decision.id }
        : { authoring: t.authoring, review: 'pending', publication: 'review-only', allowedUses: [], empirical: 'none' },
      scopes: f.data.scopes.map(contact), itemRefs: f.data.items.map(ref), timed: false, dictionaryAllowed: f.data.dictionaryAllowed,
      eligibilityPolicyRef: fd?.eligibilityPolicyRef ?? 'brak decyzji', reviewDecisionRef: fd && decision ? decision.id : 'brak decyzji',
    };
  });

  return {
    schemaVersion: '1.0.0',
    packageId: t.id,
    revision: t.revision,
    title: t.title,
    language: 'pl',
    purpose: t.purpose ?? 'content',
    runtimeCompleteness: t.authoring === 'complete' ? 'complete' : 'partial',
    limitations: t.limitations ?? [],
    status,
    provenance,
    educationProfile: t.educationProfile,
    criteria,
    sources: m.sources.map((s) => s.data),
    rules,
    knowledge,
    questions,
    openActivities,
    remediations,
    families: (t.families ?? []).map((f) => ({ id: f.id, revision: f.revision, review: familyReview.get(f.id) ?? 'pending', description: f.description })),
    forms,
    relationships,
    rights,
  };
}

/** Schema and semantic validation of the converted package (same checks as content:validate). */
export function validateConverted(pkg: ContentPackage): LintIssue[] {
  const out: LintIssue[] = [];
  const v = loadValidators();
  if (!schemaValid(v.contentPackage, pkg)) out.push({ severity: 'error', file: '(paczka)', message: `Schemat content-package: ${formatAjvErrors(v.contentPackage)}` });
  const sem = combine(validatePackageStructure(pkg), validatePackageSemantics(pkg));
  for (const i of sem.issues) out.push({ severity: 'error', file: '(paczka)', field: i.path, message: `${i.code}: ${i.message}` });
  return out;
}

// ---------------------------------------------------------------- comparison

export interface PackageDiff {
  readonly added: string[];
  readonly removed: string[];
  readonly changedWithRevision: string[];
  readonly changedWithoutRevision: string[];
}

/** Fields set by review decisions, not by authoring; excluded from the content comparison. */
function contentOnly(collection: string, x: Record<string, unknown>): Record<string, unknown> {
  const { noveltyReview: _n, review: _r, status: _s, eligibilityPolicyRef: _e, reviewDecisionRef: _d, ...rest } = x;
  if (collection === 'questions' || collection === 'families' || collection === 'relationships' || collection === 'forms') return rest;
  return x;
}

export function comparePackages(prev: ContentPackage, next: ContentPackage): PackageDiff {
  const diff: PackageDiff = { added: [], removed: [], changedWithRevision: [], changedWithoutRevision: [] };
  const collections = ['criteria', 'rules', 'knowledge', 'questions', 'openActivities', 'remediations', 'families', 'forms', 'relationships', 'sources'] as const;
  for (const col of collections) {
    const a = new Map((prev[col] as readonly { id: string; revision?: string }[]).map((x) => [x.id, x]));
    const b = new Map((next[col] as readonly { id: string; revision?: string }[]).map((x) => [x.id, x]));
    for (const [id, nx] of b) {
      const px = a.get(id);
      if (!px) { diff.added.push(id); continue; }
      const same = JSON.stringify(contentOnly(col, px)) === JSON.stringify(contentOnly(col, nx));
      if (same) continue;
      if (px.revision !== undefined && px.revision === nx.revision) diff.changedWithoutRevision.push(id);
      else if (px.revision === undefined) diff.changedWithoutRevision.push(id);
      else diff.changedWithRevision.push(id);
    }
    for (const id of a.keys()) if (!b.has(id)) diff.removed.push(id);
  }
  return diff;
}

// ---------------------------------------------------------------- report

export function renderReport(args: {
  model: TopicModel; pkg: ContentPackage; issues: readonly LintIssue[]; previous: ContentPackage | null;
  outputPath: string; outputSha256: string; date: string; reviewChannel: boolean; learnerGate: string[];
}): string {
  const { model: m, pkg, issues, previous } = args;
  const decision = currentDecision(m);
  const count = <T>(xs: readonly T[], f: (x: T) => string) => xs.reduce<Record<string, number>>((acc, x) => { const k = f(x); acc[k] = (acc[k] ?? 0) + 1; return acc; }, {});
  const fmt = (r: Record<string, number>) => Object.entries(r).map(([k, v]) => `${k}: ${String(v)}`).join(', ') || '0';
  const lines: string[] = [];
  lines.push(`# Raport konwersji ${pkg.packageId} ${pkg.revision}`, '');
  lines.push(`Data: ${args.date}. Wejście: \`${m.relDir}/\` (${AUTHORING_FORMAT}). Wyjście: \`${args.outputPath}\`, SHA-256 \`${args.outputSha256}\`.`, '');
  lines.push('## Status', '');
  if (decision) lines.push(`Statusy pochodzą z decyzji ${decision.id} z ${decision.decidedAt} (${decision.decidedBy}; zapis: ${decision.ref}).`);
  else lines.push('Brak decyzji dla tej rewizji. Status: do review, publikacja review-only, bez dopuszczonych użyć, prawa nieustalone.');
  lines.push('', '| Oś | Wartość |', '|---|---|');
  lines.push(`| Kompletność autorska | ${pkg.status.authoring} |`, `| Review | ${pkg.status.review} |`, `| Publikacja | ${pkg.status.publication} |`);
  lines.push(`| Dopuszczone użycia | ${pkg.status.allowedUses.join(', ') || 'brak'} |`, `| Prawa | ${pkg.rights.status}; kanały: ${pkg.rights.channels.join(', ') || 'brak'} |`);
  lines.push(`| Kanał recenzencki | ${args.reviewChannel ? 'tak' : 'nie, prawa nie obejmują internal-review'} |`);
  lines.push(`| Kanał ucznia | ${args.learnerGate.length === 0 ? 'tak' : `nie: ${args.learnerGate.join(', ')}`} |`, '');
  lines.push('## Liczby', '', '| Obiekt | Liczba |', '|---|---|');
  lines.push(`| Kryteria / zakresy | ${String(pkg.criteria.length)} / ${String(pkg.criteria.reduce((n, c) => n + c.aspects.length, 0))} |`);
  lines.push(`| Pytania według formatu | ${fmt(count(pkg.questions, (q) => q.format))} |`);
  lines.push(`| Pytania według roli | ${fmt(count(pkg.questions, (q) => q.role))} |`);
  lines.push(`| Opcje i uzasadnienia | ${String(pkg.questions.reduce((n, q) => n + q.decisions.length, 0))} / ${String(pkg.questions.reduce((n, q) => n + q.rationales.length, 0))} |`);
  lines.push(`| Suma wag | ${String(pkg.questions.reduce((n, q) => n + q.weight, 0))} |`);
  lines.push(`| Lekcje i przykłady według rodzaju | ${fmt(count(pkg.knowledge, (k) => k.kind))} |`);
  lines.push(`| Korekty / aktywności otwarte | ${String(pkg.remediations.length)} / ${String(pkg.openActivities.length)} |`);
  lines.push(`| Reguły / źródła / rodziny / formy | ${String(pkg.rules.length)} / ${String(pkg.sources.length)} / ${String(pkg.families.length)} / ${String(pkg.forms.length)} |`);
  lines.push(`| Relacje według kodu | ${fmt(count(pkg.relationships, (r) => r.type))} |`, '');
  const errs = issues.filter((i) => i.severity === 'error');
  const warns = issues.filter((i) => i.severity === 'warning');
  const issueLine = (i: LintIssue) => `- \`${i.file}\`${i.field ? ` \`${i.field}\`` : ''}: ${i.message}`;
  lines.push(`## Błędy (${String(errs.length)})`, '', ...(errs.length ? errs.map(issueLine) : ['Brak.']), '');
  lines.push(`## Ostrzeżenia (${String(warns.length)})`, '', ...(warns.length ? warns.map(issueLine) : ['Brak.']), '');
  lines.push('## Różnice względem poprzedniej konwersji', '');
  if (!previous) lines.push('Pierwsza konwersja tego tematu.');
  else {
    const d = comparePackages(previous, pkg);
    lines.push(`Poprzednio: ${previous.packageId} ${previous.revision}.`, '');
    lines.push(`- Nowe: ${d.added.join(', ') || 'brak'}`);
    lines.push(`- Usunięte: ${d.removed.join(', ') || 'brak'}. Usunięcie nie wycofuje materiału z urządzeń; wycofanie idzie przez manifest wydania.`);
    lines.push(`- Zmienione z nową rewizją: ${d.changedWithRevision.join(', ') || 'brak'}`);
    lines.push(`- Zmienione bez nowej rewizji: ${d.changedWithoutRevision.join(', ') || 'brak'}`);
  }
  lines.push('', 'Raport opisuje techniczną konwersję. Nie jest recenzją merytoryczną ani dopuszczeniem treści.', '');
  return lines.join('\n');
}
