import { afterEach, describe, expect, it } from 'vitest';
import { cpSync, mkdtempSync, readFileSync, renameSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { loadAuthoringValidators } from '../../scripts/content/authoring.ts';
import {
  comparePackages, convertModel, convertWithdrawals, hasErrors, lintTopic, renderReport, validateConverted, type LintIssue, type LintOptions,
} from '../../scripts/content/authoring-convert.ts';
import { ROOT, loadValidators } from '../../scripts/content/lib.ts';
import { formatInstruction } from '../../src/content/instruction.ts';
import { validateLearnerGate } from '../../src/content/validate.ts';
import type { ContentPackage } from '../../src/content/types.ts';

const TEMPLATES = resolve(ROOT, 'content/authoring/_templates');
const EXAMPLE = resolve(ROOT, 'examples/authoring/T21-mini');
const T21 = JSON.parse(readFileSync(resolve(ROOT, 'content/normalized/T21.r1-full1.json'), 'utf-8')) as ContentPackage;
const validators = loadAuthoringValidators();

const temps: string[] = [];
afterEach(() => { for (const d of temps.splice(0)) rmSync(d, { recursive: true, force: true }); });

/** Copy of the templates in a temporary topic directory. */
function topicCopy(): string {
  const dir = mkdtempSync(join(tmpdir(), 'cpre-topic-'));
  temps.push(dir);
  cpSync(TEMPLATES, dir, { recursive: true });
  return dir;
}
function edit(dir: string, file: string, from: string, to: string): void {
  const p = join(dir, file);
  const text = readFileSync(p, 'utf-8');
  if (!text.includes(from)) throw new Error(`${file}: brak tekstu ${from}`);
  writeFileSync(p, text.replace(from, to), 'utf-8');
}
function lint(dir: string, opts: LintOptions = { templates: true }) {
  return lintTopic(dir, opts, validators);
}
const errorsOf = (issues: readonly LintIssue[]) => issues.filter((i) => i.severity === 'error');
const convertDir = (dir: string, opts: LintOptions = { templates: true }) => {
  const r = lint(dir, opts);
  expect(errorsOf(r.issues)).toEqual([]);
  if (!r.model) throw new Error('no model');
  return convertModel(r.model);
};

describe('stage 2: templates and the T21-mini example', () => {
  it('templates pass the full cross-check without errors or warnings (template mode)', () => {
    expect(lint(TEMPLATES).issues).toEqual([]);
  });

  it('outside template mode, unfilled placeholders are errors', () => {
    const issues = errorsOf(lint(TEMPLATES, {}).issues);
    expect(issues.some((i) => i.file === 'questions/TXX-B01.yaml' && i.field === 'stem' && /niewypełniony wzór/.test(i.message))).toBe(true);
    expect(issues.some((i) => i.field === 'provenance[0].path')).toBe(true);
  });

  it('T21-mini passes lint; the only warning is the missing decision', () => {
    const r = lint(EXAMPLE, {});
    expect(errorsOf(r.issues)).toEqual([]);
    expect(r.issues.map((i) => i.file)).toEqual(['review/decisions.yaml']);
  });

  it('T21-mini converts into a valid package equal to the corresponding T21 objects', () => {
    const pkg = convertDir(EXAMPLE, {});
    expect(validateConverted(pkg)).toEqual([]);
    const same = <T extends { id: string }>(mine: readonly T[], theirs: readonly T[], strip: (x: T) => unknown = (x) => x) => {
      expect(mine.length).toBeGreaterThan(0);
      for (const x of mine) {
        const t = theirs.find((y) => y.id === x.id);
        expect(t, x.id).toBeDefined();
        if (t) expect(strip(x), x.id).toEqual(strip(t));
      }
    };
    same(pkg.sources, T21.sources);
    same(pkg.rules, T21.rules);
    same(pkg.knowledge, T21.knowledge);
    same(pkg.remediations, T21.remediations);
    same(pkg.families, T21.families);
    // instruction is derived from the format (docs/13 §4.3); T21 carries the source wording
    same(pkg.questions, T21.questions, ({ instruction: _i, ...rest }) => rest);
    for (const q of pkg.questions) expect(q.instruction).toBe(formatInstruction(q));
    // criteria: the example keeps a subset of aspects
    for (const c of pkg.criteria) {
      const t = T21.criteria.find((x) => x.id === c.id);
      expect(t).toBeDefined();
      expect([c.revision, c.description, c.eoRefs]).toEqual([t?.revision, t?.description, t?.eoRefs]);
      for (const a of c.aspects) expect(t?.aspects).toContainEqual(a);
    }
    // relationships from relations.yaml equal T21; R19 is generated from followUps
    for (const r of pkg.relationships) {
      const t = T21.relationships.find((x) => x.id === r.id);
      if (t) expect(r).toEqual(t);
      else expect(r.type).toBe('R19');
    }
    expect(pkg.relationships.filter((r) => r.type === 'R19').map((r) => r.id)).toEqual([
      'REL-T21-F01-checks-after-REM-T21-01', 'REL-T21-G01-checks-after-REM-T21-01',
    ]);
  });

  it('without decisions: pending, review-only, no uses, rights unresolved with no channel', () => {
    const pkg = convertDir(EXAMPLE, {});
    expect(pkg.status).toEqual({ authoring: 'draft', review: 'pending', publication: 'review-only', allowedUses: [], empirical: 'none' });
    expect(pkg.rights).toEqual({ status: 'unresolved', channels: [] });
    expect(pkg.runtimeCompleteness).toBe('partial');
    expect(pkg.purpose).toBe('review-fixture');
    expect(pkg.provenance.filter((p) => p.storedFileVersion === 'cpre-authoring/1.0')).toHaveLength(12);
    expect(pkg.provenance.slice(0, 2).map((p) => p.sha256)).toEqual(T21.provenance.map((p) => p.sha256));
  });
});

describe('stage 2: conversion details', () => {
  it('derives instruction, m, rationale ids, anchors, ordered follow-ups and the answer key', () => {
    const pkg = convertDir(topicCopy());
    const k = pkg.questions.find((q) => q.id === 'TXX-F01');
    expect(k?.m).toBe(3);
    expect(k?.k).toBeUndefined();
    expect(k?.answerKey).toEqual({ truthByDecisionId: { 1: true, 2: false, 3: true } });
    const p = pkg.questions.find((q) => q.id === 'TXX-G01');
    expect(p?.answerKey).toEqual({ selectedIds: ['a', 'b'] });
    expect(p?.instruction).toBe('Wybierz 2 odpowiedzi.');
    const a = pkg.questions.find((q) => q.id === 'TXX-B01');
    expect(a?.rationales.map((r) => r.id)).toEqual(['RAT-TXX-B01-a', 'RAT-TXX-B01-b', 'RAT-TXX-B01-c', 'RAT-TXX-B01-d']);
    expect(a?.rationales[0]?.sourceAnchor).toMatch(/questions\/TXX-B01\.yaml, RAT-TXX-B01-a$/);
    expect(a?.criterionMappings).toEqual([{ criterionId: 'KRY-TXX-01', aspectId: 'ZAK-TXX-01', role: 'primary', decisionIds: ['a', 'b', 'c', 'd'] }]);
    const rem = pkg.remediations[0];
    expect(rem?.followUpRefs).toEqual([{ id: 'TXX-F01', revision: 'r1' }, { id: 'TXX-G01', revision: 'r1' }]);
    expect(rem?.knowledgeRefs).toEqual([{ id: 'TXX-N01', revision: 'r1' }]);
    expect(rem?.exitAfterFailedFollowUps).toBe(2);
    expect(pkg.openActivities[0]?.rubricMarkdown).toContain('Element oceny 1');
    expect(pkg.relationships.map((r) => r.type)).toEqual(['R10', 'R11', 'R14', 'R19', 'R19']);
    expect(pkg.criteria[0]?.aspects).toEqual([{ id: 'ZAK-TXX-01', label: '<Nazwa zakresu pokazywana po odpowiedzi>' }]);
  });

  it('applies the latest decision for the current revision only', () => {
    const dir = topicCopy();
    edit(dir, 'topic.yaml', 'authoring: draft', 'authoring: complete');
    edit(dir, 'review/decisions.yaml', 'review: pending ', 'review: approved ');
    edit(dir, 'review/decisions.yaml', 'publication: review-only ', 'publication: permitted ');
    edit(dir, 'review/decisions.yaml', 'allowedUses: []', 'allowedUses: [learning, practice, remediation, delayed]');
    edit(dir, 'review/decisions.yaml', 'status: unresolved', 'status: permitted');
    edit(dir, 'review/decisions.yaml', 'channels: [internal-review]', 'channels: [internal-review, internal-lan]');
    edit(dir, 'topic.yaml', 'id: TXX ', 'id: TXX\npurpose: content ');
    const pkg = convertDir(dir);
    expect(pkg.status).toEqual({ authoring: 'complete', review: 'approved', publication: 'permitted', allowedUses: ['learning', 'practice', 'remediation', 'delayed'], empirical: 'none', decisionRef: 'DEC-TXX-0001' });
    expect(validateLearnerGate(pkg, { channel: 'learner', publicationChannel: 'internal-lan' }).issues).toEqual([]);
    // the same decision for another revision does nothing
    edit(dir, 'review/decisions.yaml', 'revision: r1', 'revision: r0');
    const r = lint(dir);
    expect(r.issues.some((i) => i.severity === 'warning' && /dotyczy rewizji r0/.test(i.message))).toBe(true);
    const pending = convertDir(dir);
    expect(pending.status.review).toBe('pending');
    expect(pending.rights.channels).toEqual([]);
  });

  it('the report states statuses, counts, issues and that it is not a review', () => {
    const r = lint(EXAMPLE, {});
    if (!r.model) throw new Error('no model');
    const pkg = convertModel(r.model);
    const text = renderReport({ model: r.model, pkg, issues: r.issues, previous: null, outputPath: 'x.json', outputSha256: 'abc', date: '2026-11-02', reviewChannel: false, learnerGate: ['LEARNER_REVIEW_PENDING'] });
    expect(text).toContain('Brak decyzji dla tej rewizji');
    expect(text).toContain('| Pytania według formatu | A: 1, K: 1, P: 1 |');
    expect(text).toContain('| Kanał recenzencki | nie, prawa nie obejmują internal-review |');
    expect(text).toContain('## Ostrzeżenia (1)');
    expect(text).toContain('Nie jest recenzją merytoryczną ani dopuszczeniem treści.');
  });
});

describe('stage 2: cross-file errors point at the file and field', () => {
  const expectError = (dir: string, file: string, field: string | undefined, pattern: RegExp, opts?: LintOptions) => {
    const issues = errorsOf(lint(dir, opts).issues);
    expect(issues, JSON.stringify(issues, null, 1)).toContainEqual(expect.objectContaining({ file, ...(field ? { field } : {}), message: expect.stringMatching(pattern) as unknown }));
  };

  it('unknown rule in an option', () => {
    const dir = topicCopy();
    edit(dir, 'questions/TXX-B01.yaml', 'rules: [REG-TXX-01]', 'rules: [REG-TXX-99]');
    expectError(dir, 'questions/TXX-B01.yaml', 'options[0].rules[0]', /Nieznany identyfikator REG-TXX-99/);
  });

  it('aspect that does not exist', () => {
    const dir = topicCopy();
    edit(dir, 'questions/TXX-B01.yaml', 'aspect: ZAK-TXX-01', 'aspect: ZAK-TXX-09');
    expectError(dir, 'questions/TXX-B01.yaml', 'scope.aspect', /ZAK-TXX-09/);
  });

  it('P with k different from the number of correct options', () => {
    const dir = topicCopy();
    edit(dir, 'questions/TXX-G01.yaml', 'k: 2', 'k: 3');
    expectError(dir, 'questions/TXX-G01.yaml', 'k', /k=3, ale 2 opcji/);
  });

  it('A with three options and P with k=1 break the authoring standard', () => {
    const dir = topicCopy();
    const text = readFileSync(join(dir, 'questions/TXX-B01.yaml'), 'utf-8');
    writeFileSync(join(dir, 'questions/TXX-B01.yaml'), text.slice(0, text.indexOf('  - id: d')), 'utf-8');
    edit(dir, 'questions/TXX-G01.yaml', 'k: 2', 'k: 1');
    edit(dir, 'questions/TXX-G01.yaml', 'text: <Stwierdzenie b>\n    correct: true', 'text: <Stwierdzenie b>\n    correct: false');
    expectError(dir, 'questions/TXX-B01.yaml', 'options', /musi mieć 4 albo 5 opcji, a ma 3/);
    expectError(dir, 'questions/TXX-G01.yaml', 'k', /k co najmniej 2/);
  });

  it('follow-ups in the wrong order', () => {
    const dir = topicCopy();
    edit(dir, 'corrections/TXX-REM01.md', 'followUps: [TXX-F01, TXX-G01]', 'followUps: [TXX-G01, TXX-F01]');
    expectError(dir, 'corrections/TXX-REM01.md', 'followUps[0]', /wymagana jest follow-up-1/);
  });

  it('see that the app would not show', () => {
    const dir = topicCopy();
    edit(dir, 'questions/TXX-B01.yaml', 'see: TXX-N01', 'see: TXX-CMP01');
    expectError(dir, 'questions/TXX-B01.yaml', 'options[1].see', /Aplikacja pokaże dziś TXX-N01/);
  });

  it('label before answer that reveals the scope name', () => {
    const dir = topicCopy();
    edit(dir, 'topic.yaml', 'labelBeforeAnswer: <Neutralna etykieta bez nazwy zakresu>', 'labelBeforeAnswer: "Ocena: <Nazwa zakresu pokazywana po odpowiedzi>"');
    expectError(dir, 'topic.yaml', 'criteria[0].labelBeforeAnswer', /zawiera nazwę zakresu/);
  });

  it('relation between kinds the type does not allow, and required-for without condition', () => {
    const dir = topicCopy();
    edit(dir, 'relations.yaml', 'from: TXX-CMP01', 'from: TXX-N01');
    edit(dir, 'relations.yaml', '    condition: <Kiedy podstawa jest potrzebna>\n', '');
    expectError(dir, 'relations.yaml', 'relations[1].from', /to nota, a oczekiwano: porównanie/);
    expectError(dir, 'relations.yaml', 'relations[2].condition', /wymaga jawnego warunku/);
  });

  it('file name different from the id, and duplicate ids', () => {
    const dir = topicCopy();
    renameSync(join(dir, 'questions/TXX-B01.yaml'), join(dir, 'questions/TXX-B99.yaml'));
    edit(dir, 'rules.yaml', 'id: REG-TXX-01', 'id: KRY-TXX-01');
    expectError(dir, 'questions/TXX-B99.yaml', 'id', /Nazwa pliku TXX-B99/);
    expectError(dir, 'rules.yaml', 'rules[0].id', /KRY-TXX-01 jest już użyty w topic.yaml/);
  });

  it('non-http link in displayed text', () => {
    const dir = topicCopy();
    edit(dir, 'rules.yaml', 'statement: <Jedno zdanie reguły, widoczne w oknie wiedzy>', 'statement: Zobacz [plik](file:///c/x)');
    const issues = errorsOf(lint(dir, {}).issues);
    expect(issues).toContainEqual(expect.objectContaining({ file: 'rules.yaml', field: 'rules[0].statement', message: 'Link file:///c/x nie jest adresem http(s).' }));
  });

  it('the example.org address from the template is an error outside template mode', () => {
    const issues = errorsOf(lint(TEMPLATES, {}).issues);
    expect(issues).toContainEqual(expect.objectContaining({ file: 'sources.yaml', field: 'sources[0].url', message: 'Adres źródła to przykład ze wzoru. Podaj prawdziwy adres albo identyfikator urn:.' }));
  });

  it('ids that already exist in another package', () => {
    const dir = topicCopy();
    const other = { ...T21, packageId: 'OTHER', rules: [{ ...T21.rules[0], id: 'REG-TXX-01' }] } as ContentPackage;
    expectError(dir, 'rules.yaml', undefined, /REG-TXX-01 istnieje już w paczce OTHER/, { templates: true, otherPackages: [other] });
  });

  it('missing required files and schema errors stop the cross-check', () => {
    const dir = topicCopy();
    unlinkSync(join(dir, 'sources.yaml'));
    edit(dir, 'rules.yaml', 'source: SRC-TXX-SEN', 'source: SRC-TXX-SEN\n        page: 3');
    const r = lint(dir);
    expect(r.model).toBeNull();
    expect(r.issues.at(-1)?.message).toMatch(/Najpierw popraw błędy schematu/);
  });
});

describe('stage 2: published revisions are immutable', () => {
  it('a changed question without a new revision is an error after a complete or decided revision', () => {
    const dir = topicCopy();
    const before = convertDir(dir);
    const previous: ContentPackage = { ...before, status: { ...before.status, authoring: 'complete' } };
    edit(dir, 'questions/TXX-B01.yaml', 'text: <Treść opcji a>', 'text: <Nowa treść opcji a>');
    const issues = lint(dir, { templates: true, previous }).issues;
    expect(issues).toContainEqual(expect.objectContaining({ severity: 'error', message: expect.stringMatching(/^TXX-B01 zmienił treść bez nowej rewizji/) as unknown }));
    expect(issues).toContainEqual(expect.objectContaining({ severity: 'error', field: 'revision', message: expect.stringMatching(/Zwiększ revision w topic.yaml/) as unknown }));
    // the same change after a draft without decision is only a warning
    const draft: ContentPackage = { ...before, status: { ...before.status, decisionRef: undefined as unknown as string } };
    delete (draft.status as { decisionRef?: string }).decisionRef;
    const draftIssues = lint(dir, { templates: true, previous: draft }).issues;
    expect(hasErrors(draftIssues)).toBe(false);
    expect(draftIssues.some((i) => i.severity === 'warning' && /szkicem bez decyzji/.test(i.message))).toBe(true);
  });

  it('a new object revision and a new topic revision are accepted and reported', () => {
    const dir = topicCopy();
    const before = convertDir(dir);
    const previous: ContentPackage = { ...before, status: { ...before.status, authoring: 'complete' } };
    edit(dir, 'questions/TXX-B01.yaml', 'text: <Treść opcji a>', 'text: <Nowa treść opcji a>');
    edit(dir, 'questions/TXX-B01.yaml', 'revision: r1', 'revision: r2');
    edit(dir, 'topic.yaml', 'revision: r1 ', 'revision: r2 ');
    edit(dir, 'review/decisions.yaml', 'revision: r1', 'revision: r2');
    // the form points at TXX-B01@r2 now, so its composition changed too
    expect(errorsOf(lint(dir, { templates: true, previous }).issues)).toContainEqual(expect.objectContaining({ message: expect.stringMatching(/^FORM-TXX-01 zmienił treść bez nowej rewizji/) as unknown }));
    edit(dir, 'forms.yaml', 'revision: r1', 'revision: r2');
    const r = lint(dir, { templates: true, previous });
    expect(errorsOf(r.issues)).toEqual([]);
    if (!r.model) throw new Error('no model');
    const diff = comparePackages(previous, convertModel(r.model));
    expect(diff.changedWithRevision).toContain('TXX-B01');
    expect(diff.changedWithoutRevision).not.toContain('TXX-B01');
  });

  it('review decisions do not count as content changes', () => {
    const dir = topicCopy();
    const before = convertDir(dir);
    edit(dir, 'review/decisions.yaml', 'review: pending ', 'review: approved ');
    edit(dir, 'review/decisions.yaml', '    rights:', '    families:\n      - id: FAM-TXX-01\n        review: approved\n    novelty:\n      - question: TXX-B01\n        review: independent\n    rights:');
    const after = convertDir(dir);
    expect(after.families[0]?.review).toBe('approved');
    expect(after.questions.find((q) => q.id === 'TXX-B01')?.noveltyReview).toBe('independent');
    const diff = comparePackages(before, after);
    expect([...diff.changedWithRevision, ...diff.changedWithoutRevision]).toEqual([]);
  });
});

describe('withdrawals and key disputes', () => {
  const entry = (id: string, question: string, extra = '') => `  - id: ${id}
    question: ${question}
    revision: r1
    status: key-disputed
    reasonCode: KEY-ERROR
    decidedAt: 2026-11-02
    decidedBy: "Recenzent A, właściciel treści"
    ref: "Protokół review 2026-11-02"
${extra}`;
  const withWithdrawals = (...entries: string[]) => {
    const dir = topicCopy();
    edit(dir, 'review/withdrawals.yaml', 'withdrawals: []', `withdrawals:
${entries.join('')}`);
    return dir;
  };

  it('converts into manifest entries that pass the manifest schema', () => {
    const dir = withWithdrawals(entry('WD-TXX-0001', 'TXX-B01'));
    const r = lint(dir);
    expect(errorsOf(r.issues)).toEqual([]);
    if (!r.model) throw new Error('no model');
    const ws = convertWithdrawals(r.model);
    expect(ws).toEqual([{ decisionId: 'WD-TXX-0001', itemRef: { id: 'TXX-B01', revision: 'r1' }, status: 'key-disputed', reasonCode: 'KEY-ERROR', decidedAt: '2026-11-02T00:00:00Z', decisionRef: 'Recenzent A, właściciel treści; Protokół review 2026-11-02' }]);
    const manifest = JSON.parse(readFileSync(resolve(ROOT, 'examples/learner-empty-manifest.json'), 'utf-8')) as Record<string, unknown>;
    expect(loadValidators().contentManifest({ ...manifest, withdrawals: ws })).toBe(true);
    const text = renderReport({ model: r.model, pkg: convertModel(r.model), issues: r.issues, previous: null, outputPath: 'x', outputSha256: 'y', date: '2026-11-02', reviewChannel: true, learnerGate: [] });
    expect(text).toContain('## Wycofania (1)');
    expect(text).toContain('`WD-TXX-0001`: TXX-B01@r1, key-disputed, KEY-ERROR, 2026-11-02');
  });

  it('only questions can be withdrawn; an unknown question is a warning; ids are unique', () => {
    const dir = withWithdrawals(entry('WD-1', 'TXX-N01'), entry('WD-2', 'TXX-B77'), entry('WD-2', 'TXX-B01'));
    const issues = lint(dir, { templates: true, otherWithdrawalIds: ['WD-1'] }).issues;
    expect(issues).toContainEqual(expect.objectContaining({ severity: 'error', field: 'withdrawals[0].question', message: 'TXX-N01 to nota; aplikacja wycofuje tylko pytania.' }));
    expect(issues).toContainEqual(expect.objectContaining({ severity: 'warning', field: 'withdrawals[1].question' }));
    expect(issues).toContainEqual(expect.objectContaining({ severity: 'error', field: 'withdrawals[2].id', message: 'Powtórzony identyfikator wycofania WD-2.' }));
    expect(issues).toContainEqual(expect.objectContaining({ severity: 'error', field: 'withdrawals[0].id', message: 'Identyfikator wycofania WD-1 jest już użyty w innym temacie.' }));
  });

  it('a released withdrawal can be neither removed nor changed', () => {
    const dir = withWithdrawals(entry('WD-TXX-0001', 'TXX-B01'));
    const r = lint(dir);
    if (!r.model) throw new Error('no model');
    const released = convertWithdrawals(r.model);
    edit(dir, 'review/withdrawals.yaml', 'status: key-disputed', 'status: withdrawn');
    expect(errorsOf(lint(dir, { templates: true, previousWithdrawals: released }).issues)).toContainEqual(expect.objectContaining({ message: expect.stringMatching(/Wycofanie WD-TXX-0001 zmieniło treść/) as unknown }));
    const removed = topicCopy();
    expect(errorsOf(lint(removed, { templates: true, previousWithdrawals: released }).issues)).toContainEqual(expect.objectContaining({ message: expect.stringMatching(/Wycofanie WD-TXX-0001 zniknęło/) as unknown }));
  });

  it('rejects a withdrawal without a person or with a datetime instead of a date', () => {
    const v = loadAuthoringValidators();
    const ok = { id: 'WD-1', question: 'Q', revision: 'r1', status: 'withdrawn', reasonCode: 'KEY-ERROR', decidedAt: '2026-11-02', decidedBy: 'Osoba', ref: 'Protokół' };
    expect(v.withdrawals({ withdrawals: [ok] })).toBe(true);
    const { decidedBy: _d, ...noPerson } = ok;
    expect(v.withdrawals({ withdrawals: [noPerson] })).toBe(false);
    expect(v.withdrawals({ withdrawals: [{ ...ok, decidedAt: '2026-11-02T10:00:00Z' }] })).toBe(false);
    expect(v.withdrawals({ withdrawals: [{ ...ok, status: 'retired' }] })).toBe(false);
  });
});
