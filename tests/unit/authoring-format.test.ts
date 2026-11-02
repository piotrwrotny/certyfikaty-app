import { describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import {
  kindForPath, loadAuthoringValidators, parseFrontMatter, readTopicDir, splitSections, validateTopicDir,
  type AuthoringFile,
} from '../../scripts/content/authoring.ts';
import { ROOT } from '../../scripts/content/lib.ts';
import type { ContentPackage, Knowledge, Question } from '../../src/content/types.ts';

const TEMPLATES = resolve(ROOT, 'content/authoring/_templates');
const EXAMPLE = resolve(ROOT, 'examples/authoring/T21-mini');
const T21 = JSON.parse(readFileSync(resolve(ROOT, 'content/normalized/T21.r1-full1.json'), 'utf-8')) as ContentPackage;
const v = loadAuthoringValidators();

type Obj = Record<string, unknown>;
const asObj = (x: unknown): Obj => x as Obj;
const byId = <T extends { id: string }>(arr: readonly T[], id: string): T => {
  const x = arr.find((o) => o.id === id);
  if (!x) throw new Error(`missing ${id}`);
  return x;
};
const scopeOf = (s: { criterionId: string; aspectId?: string }) => (s.aspectId ? { criterion: s.criterionId, aspect: s.aspectId } : { criterion: s.criterionId });

describe('authoring format: paths and parsing', () => {
  it('maps every documented location to its kind and rejects others', () => {
    expect(kindForPath('topic.yaml')).toBe('topic');
    expect(kindForPath('review/decisions.yaml')).toBe('decisions');
    expect(kindForPath('review/withdrawals.yaml')).toBe('withdrawals');
    expect(kindForPath('questions/T22-B01.yaml')).toBe('question');
    expect(kindForPath('lessons/N-T22-01.md')).toBe('lesson');
    expect(kindForPath('examples/CMP-T22-01.md')).toBe('example');
    expect(kindForPath('corrections/REM-T22-01.md')).toBe('correction');
    expect(kindForPath('open/T22-O01.md')).toBe('open');
    expect(kindForPath('questions/T22-B01.yml')).toBeNull();
    expect(kindForPath('notes/x.md')).toBeNull();
  });

  it('parses front matter with CRLF and splits level-2 sections', () => {
    const fm = parseFrontMatter('---\r\nid: X\r\n---\r\n\r\nKorekta.\r\n\r\n## Inna pomoc\r\n\r\nPomoc.\r\n');
    expect(fm.data).toEqual({ id: 'X' });
    const s = splitSections(fm.body);
    expect(s.get('')).toBe('Korekta.');
    expect(s.get('Inna pomoc')).toBe('Pomoc.');
    expect(() => parseFrontMatter('Brak nagłówka')).toThrow(/nagłówka YAML/);
  });
});

describe('authoring format: templates and example are valid', () => {
  it('templates pass every schema and section rule', () => {
    expect(validateTopicDir(TEMPLATES, v)).toEqual([]);
  });

  it('T21-mini example passes every schema and section rule', () => {
    expect(validateTopicDir(EXAMPLE, v)).toEqual([]);
  });

  it('templates cover every file kind', () => {
    const kinds = new Set(readTopicDir(TEMPLATES).files.map((f) => f.kind));
    expect([...kinds].sort()).toEqual(['correction', 'decisions', 'example', 'forms', 'lesson', 'open', 'question', 'relations', 'rules', 'sources', 'topic', 'withdrawals']);
  });

  it('the decisions template approves nothing', () => {
    const d = readTopicDir(TEMPLATES).files.find((f) => f.kind === 'decisions');
    const first = (asObj(d?.data)['decisions'] as Obj[])[0] ?? {};
    expect(first['review']).toBe('pending');
    expect(first['publication']).toBe('review-only');
    expect(first['allowedUses']).toEqual([]);
    expect(asObj(first['rights'])['status']).toBe('unresolved');
  });

  it('the example has no decisions file and stays a review fixture', () => {
    const files = readTopicDir(EXAMPLE).files;
    expect(files.some((f) => f.kind === 'decisions')).toBe(false);
    expect(asObj(files.find((f) => f.kind === 'topic')?.data)['purpose']).toBe('review-fixture');
  });
});

describe('authoring format: T21-mini matches the normalized T21 package field by field', () => {
  const files = readTopicDir(EXAMPLE).files;
  const of = (kind: AuthoringFile['kind']) => files.filter((f) => f.kind === kind);

  it('questions: stem, options, key, rationales, rules, role, weight, k, scope, family', () => {
    const qs = of('question');
    expect(qs.map((f) => asObj(f.data)['id']).sort()).toEqual(['T21-B01', 'T21-F01', 'T21-G01']);
    for (const f of qs) {
      const a = asObj(f.data);
      const q: Question = byId(T21.questions, a['id'] as string);
      expect(a['format']).toBe(q.format);
      expect(a['role']).toBe(q.role);
      expect(a['weight']).toBe(q.weight);
      expect(a['k']).toBe(q.k);
      expect(a['stem']).toBe(q.stemMarkdown);
      expect(a['family']).toBe(q.familyRef.id);
      expect(a['sourceAnchor']).toBe(q.sourceAnchor);
      const primary = q.criterionMappings.find((m) => m.role === 'primary');
      expect(a['scope']).toEqual(primary ? scopeOf(primary) : undefined);
      const options = a['options'] as Obj[];
      expect(options.map((o) => o['id'])).toEqual(q.decisions.map((d) => d.id));
      for (const o of options) {
        const id = o['id'] as string;
        expect(o['text']).toBe(byId(q.decisions, id).textMarkdown);
        const rat = q.rationales.find((r) => r.decisionId === id);
        expect(o['rationale']).toBe(rat?.bodyMarkdown);
        expect(o['rules']).toEqual(rat?.ruleIds);
        if ('selectedIds' in q.answerKey) expect(o['correct']).toBe(q.answerKey.selectedIds.includes(id));
        else expect(o['truth']).toBe(q.answerKey.truthByDecisionId[id]);
      }
    }
  });

  it('lessons and examples: kind, title, body, rules, scopes, prerequisite fields', () => {
    for (const f of [...of('lesson'), ...of('example')]) {
      const a = asObj(f.data);
      const k: Knowledge = byId(T21.knowledge, a['id'] as string);
      expect(a['kind']).toBe(k.kind);
      expect(a['title']).toBe(k.title);
      expect(f.body).toBe(k.bodyMarkdown.trim());
      expect(a['rules']).toEqual(k.ruleIds);
      expect(a['scope']).toEqual(k.contactScopes.map(scopeOf));
      expect(a['prerequisiteCondition']).toBe(k.prerequisiteCondition);
      expect(a['skippable']).toBe(k.skippable);
    }
  });

  it('correction: body, other help and ordered follow-ups', () => {
    const f = of('correction')[0];
    const rem = byId(T21.remediations, 'REM-T21-01');
    const s = splitSections(f?.body ?? '');
    expect(s.get('')).toBe(rem.bodyMarkdown);
    expect(s.get('Inna pomoc')).toBe(rem.alternativeHelpMarkdown);
    expect(asObj(f?.data)['followUps']).toEqual(rem.followUpRefs.map((r) => r.id));
    expect(asObj(f?.data)['scope']).toEqual(scopeOf(rem.scope));
  });

  it('rules, sources, relations and criteria', () => {
    const rules = asObj(of('rules')[0]?.data)['rules'] as Obj[];
    for (const r of rules) {
      const t = byId(T21.rules, r['id'] as string);
      expect(r['statement']).toBe(t.statementMarkdown);
      expect(r['sources']).toEqual(t.sourceRefs.map((s) => ({ source: s.sourceId, location: s.location })));
    }
    const sources = asObj(of('sources')[0]?.data)['sources'] as Obj[];
    for (const s of sources) expect(s).toEqual(byId(T21.sources, s['id'] as string));
    const codes: Record<string, string> = { explains: 'R10', distinguishes: 'R11', 'required-for': 'R14' };
    const rels = asObj(of('relations')[0]?.data)['relations'] as Obj[];
    for (const r of rels) {
      const t = byId(T21.relationships, r['id'] as string);
      expect(codes[r['type'] as string]).toBe(t.type);
      expect([r['from'], r['to'], r['meaning'], r['condition'], r['provenance']]).toEqual([t.from.id, t.to.id, t.meaning, t.condition, t.provenance]);
    }
    const topic = asObj(of('topic')[0]?.data);
    for (const c of topic['criteria'] as Obj[]) {
      const t = byId(T21.criteria, c['id'] as string);
      expect(c['description']).toBe(t.description);
      for (const a of c['aspects'] as Obj[]) expect(a['labelAfterAnswer']).toBe(byId(t.aspects, a['id'] as string).label);
    }
  });
});

describe('authoring format: invalid input is rejected', () => {
  const base = {
    id: 'T22-B01', revision: 'r1', format: 'A', role: 'base', weight: 1,
    scope: { criterion: 'KRY-T22-01' }, family: 'FAM-T22-01', stem: 'Pytanie?',
    options: [
      { id: 'a', text: 'A', correct: true, rationale: 'Bo tak.', rules: ['REG-1'] },
      { id: 'b', text: 'B', correct: false, rationale: 'Bo nie.', rules: ['REG-1'] },
    ],
  };
  const opts = base.options;

  it('accepts the minimal valid A question', () => {
    expect(v.question(base)).toBe(true);
  });

  it.each([
    ['A with two correct options', { ...base, options: opts.map((o) => ({ ...o, correct: true })) }],
    ['A with no correct option', { ...base, options: opts.map((o) => ({ ...o, correct: false })) }],
    ['A with k', { ...base, k: 1 }],
    ['P without k', { ...base, format: 'P' }],
    ['K row with correct instead of truth', { ...base, format: 'K' }],
    ['option without rationale', { ...base, options: [{ id: 'a', text: 'A', correct: true, rules: ['REG-1'] }, opts[1]] }],
    ['option without rules', { ...base, options: [{ ...opts[0], rules: [] }, opts[1]] }],
    ['unknown field', { ...base, instruction: 'Wybierz jedną.' }],
    ['weight 4', { ...base, weight: 4 }],
    ['invalid id', { ...base, id: '-B01' }],
    ['single option', { ...base, options: [opts[0]] }],
  ])('question: %s', (_name, q) => {
    expect(v.question(q)).toBe(false);
  });

  it('accepts a K question with truth on every row', () => {
    const k = { ...base, format: 'K', weight: 2, options: opts.map((o, i) => ({ id: String(i + 1), text: o.text, truth: i === 0, rationale: o.rationale, rules: o.rules })) };
    expect(v.question(k)).toBe(true);
  });

  it('rejects prerequisite fields on a note and a prerequisite without its condition', () => {
    const note = { id: 'N-1', revision: 'r1', kind: 'note', title: 'T', scope: [{ criterion: 'K' }], rules: [] };
    expect(v.lesson(note)).toBe(true);
    expect(v.lesson({ ...note, skippable: true })).toBe(false);
    expect(v.lesson({ ...note, kind: 'prerequisite' })).toBe(false);
    expect(v.lesson({ ...note, kind: 'prerequisite', prerequisiteCondition: 'Gdy …' })).toBe(true);
  });

  it('rejects relation types outside the increment and more than two follow-ups', () => {
    expect(v.relations({ relations: [{ type: 'may-indicate', from: 'A', to: 'B', meaning: 'M' }] })).toBe(false);
    expect(v.relations({ relations: [{ type: 'explains', from: 'A', to: 'B' }] })).toBe(false);
    expect(v.correction({ id: 'R', revision: 'r1', scope: { criterion: 'K' }, followUps: ['F', 'G', 'H'] })).toBe(false);
  });

  it('requires a real URI for a source: http(s) or urn, no spaces, never empty', () => {
    const src = { id: 'S', title: 'T', version: '1', url: 'https://hub.ireb.org/x.pdf', location: 's.1', attribution: 'A', usageNote: 'U' };
    expect(v.sources({ sources: [src] })).toBe(true);
    expect(v.sources({ sources: [{ ...src, url: 'urn:isbn:9783864907012' }] })).toBe(true);
    for (const url of ['', 'https://hub.ireb.org/a b.pdf', 'ftp://x/y', 'https://x.org/<adres>']) {
      expect(v.sources({ sources: [{ ...src, url }] }), url).toBe(false);
    }
  });

  it('rejects a decision without person, reference or date', () => {
    const d = { id: 'DEC-1', decidedAt: '2026-11-02', decidedBy: 'Osoba', ref: 'Protokół', revision: 'r1', review: 'approved', publication: 'permitted', allowedUses: ['learning'], rights: { status: 'permitted', channels: ['internal-lan'] } };
    expect(v.decisions({ decisions: [d] })).toBe(true);
    for (const key of ['decidedBy', 'ref', 'decidedAt'] as const) {
      const rest: Record<string, unknown> = { ...d };
      delete rest[key];
      expect(v.decisions({ decisions: [rest] })).toBe(false);
    }
    expect(v.decisions({ decisions: [{ ...d, decidedAt: '2.11.2026' }] })).toBe(false);
  });

  it('reports missing sections, unreadable YAML and files in unknown places', () => {
    const dir = mkdtempSync(join(tmpdir(), 'authoring-'));
    try {
      writeFileSync(join(dir, 'topic.yaml'), readFileSync(join(TEMPLATES, 'topic.yaml')));
      mkdirSync(join(dir, 'corrections'));
      writeFileSync(join(dir, 'corrections', 'R.md'), '---\nid: R\nrevision: r1\nscope:\n  criterion: K\nfollowUps: [F]\n---\n\nKorekta bez innej pomocy.\n');
      mkdirSync(join(dir, 'open'));
      writeFileSync(join(dir, 'open', 'O.md'), '---\nid: O\nrevision: r1\nscope:\n  - criterion: K\nevaluation: self-assessment\n---\n\n## Polecenie\n\nOdtwórz.\n');
      mkdirSync(join(dir, 'lessons'));
      writeFileSync(join(dir, 'lessons', 'N.md'), '---\nid: N\ntitle: Podstawa: zła\n---\n\nTekst.\n');
      writeFileSync(join(dir, 'notes.md'), 'x');
      const issues = validateTopicDir(dir, v);
      expect(issues).toContainEqual({ file: 'corrections/R.md', message: 'Brak niepustej sekcji „## Inna pomoc”.' });
      expect(issues).toContainEqual({ file: 'open/O.md', message: 'Brak niepustej sekcji „## Rubryka”.' });
      expect(issues.some((i) => i.file === 'lessons/N.md' && i.message.startsWith('Nie można odczytać pliku'))).toBe(true);
      expect(issues.some((i) => i.file === 'notes.md' && i.message.startsWith('Nieznane miejsce pliku'))).toBe(true);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
