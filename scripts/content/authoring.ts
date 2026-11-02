/**
 * Authoring format cpre-authoring/1.0 (docs/13_AUTHORING_FORMAT.md): file discovery,
 * front-matter parsing and JSON Schema validation. Cross-reference checks and the
 * conversion into content-package belong to the converter (stage 2), not here.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import type { ErrorObject, ValidateFunction } from 'ajv';
import { parse as parseYaml } from 'yaml';
import { ROOT } from './lib.ts';

export const AUTHORING_FORMAT = 'cpre-authoring/1.0';
export const AUTHORING_SCHEMA_DIR = resolve(ROOT, 'schemas', 'authoring');

export type AuthoringKind =
  | 'topic' | 'sources' | 'rules' | 'relations' | 'forms' | 'decisions' | 'withdrawals'
  | 'question' | 'lesson' | 'example' | 'correction' | 'open';

const SCHEMA_FILES: Record<AuthoringKind, string> = {
  topic: 'topic.schema.json',
  sources: 'sources.schema.json',
  rules: 'rules.schema.json',
  relations: 'relations.schema.json',
  forms: 'forms.schema.json',
  decisions: 'decisions.schema.json',
  withdrawals: 'withdrawals.schema.json',
  question: 'question.schema.json',
  lesson: 'lesson.schema.json',
  example: 'example.schema.json',
  correction: 'correction.schema.json',
  open: 'open.schema.json',
};

/** Markdown sections required in the body, per kind. */
export const REQUIRED_SECTIONS: Partial<Record<AuthoringKind, readonly string[]>> = {
  correction: ['Inna pomoc'],
  open: ['Polecenie', 'Rubryka'],
};

export type AuthoringValidators = Record<AuthoringKind, ValidateFunction>;

export function loadAuthoringValidators(): AuthoringValidators {
  const AjvCtor = (Ajv2020 as unknown as { default?: typeof Ajv2020 }).default ?? Ajv2020;
  const formats = (addFormats as unknown as { default?: typeof addFormats }).default ?? addFormats;
  const ajv = new AjvCtor({ allErrors: true, strict: true, strictRequired: false });
  formats(ajv);
  const read = (f: string): object => JSON.parse(readFileSync(join(AUTHORING_SCHEMA_DIR, f), 'utf-8')) as object;
  ajv.addSchema(read('common.schema.json'), 'common.schema.json');
  const out = {} as AuthoringValidators;
  for (const [kind, file] of Object.entries(SCHEMA_FILES) as [AuthoringKind, string][]) {
    out[kind] = ajv.compile(read(file));
  }
  return out;
}

/** Kind of a file from its path relative to the topic directory; null = not an authoring file. */
export function kindForPath(relPath: string): AuthoringKind | null {
  const p = relPath.split(sep).join('/');
  if (p === 'topic.yaml') return 'topic';
  if (p === 'sources.yaml') return 'sources';
  if (p === 'rules.yaml') return 'rules';
  if (p === 'relations.yaml') return 'relations';
  if (p === 'forms.yaml') return 'forms';
  if (p === 'review/decisions.yaml') return 'decisions';
  if (p === 'review/withdrawals.yaml') return 'withdrawals';
  if (/^questions\/[^/]+\.yaml$/.test(p)) return 'question';
  if (/^lessons\/[^/]+\.md$/.test(p)) return 'lesson';
  if (/^examples\/[^/]+\.md$/.test(p)) return 'example';
  if (/^corrections\/[^/]+\.md$/.test(p)) return 'correction';
  if (/^open\/[^/]+\.md$/.test(p)) return 'open';
  return null;
}

export interface FrontMatter {
  readonly data: unknown;
  readonly body: string;
}

/** Splits `---\n<yaml>\n---\n<markdown>`. A file without front matter is an error. */
export function parseFrontMatter(text: string): FrontMatter {
  const noBom = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  const normalized = noBom.split('\r\n').join('\n');
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(normalized);
  if (!m) throw new Error('Brak nagłówka YAML między liniami --- na początku pliku.');
  return { data: parseYaml(m[1] ?? '') as unknown, body: (m[2] ?? '').trim() };
}

/** Level-2 sections of a Markdown body: text before the first `## ` is under the key ''. */
export function splitSections(body: string): Map<string, string> {
  const out = new Map<string, string>();
  let current = '';
  let buf: string[] = [];
  for (const line of body.split('\n')) {
    const h = /^## (.+?)\s*$/.exec(line);
    if (h) {
      out.set(current, buf.join('\n').trim());
      current = h[1] ?? '';
      buf = [];
    } else {
      buf.push(line);
    }
  }
  out.set(current, buf.join('\n').trim());
  return out;
}

export interface AuthoringFile {
  readonly relPath: string;
  readonly kind: AuthoringKind;
  readonly data: unknown;
  /** Markdown body for .md kinds; undefined for YAML kinds. */
  readonly body?: string;
}

export interface AuthoringIssue {
  readonly file: string;
  readonly message: string;
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) out.push(...walk(abs));
    else out.push(abs);
  }
  return out.sort();
}

export function readTopicDir(topicDir: string): { files: AuthoringFile[]; issues: AuthoringIssue[] } {
  const files: AuthoringFile[] = [];
  const issues: AuthoringIssue[] = [];
  for (const abs of walk(topicDir)) {
    const relPath = relative(topicDir, abs).split(sep).join('/');
    if (relPath.endsWith('README.md')) continue;
    const kind = kindForPath(relPath);
    if (!kind) {
      issues.push({ file: relPath, message: 'Nieznane miejsce pliku. Sprawdź strukturę katalogu w docs/13.' });
      continue;
    }
    const text = readFileSync(abs, 'utf-8');
    try {
      if (relPath.endsWith('.md')) {
        const fm = parseFrontMatter(text);
        files.push({ relPath, kind, data: fm.data, body: fm.body });
      } else {
        files.push({ relPath, kind, data: parseYaml(text) as unknown });
      }
    } catch (e) {
      issues.push({ file: relPath, message: `Nie można odczytać pliku: ${e instanceof Error ? e.message : String(e)}` });
    }
  }
  return { files, issues };
}

function formatError(e: ErrorObject): string {
  const where = e.instancePath === '' ? '(cały plik)' : e.instancePath;
  return `${where}: ${e.message ?? 'błąd schematu'}`;
}

/** Schema validation plus required Markdown sections. No cross-file checks. */
export function validateTopicDir(topicDir: string, validators = loadAuthoringValidators()): AuthoringIssue[] {
  const { files, issues } = readTopicDir(topicDir);
  const out = [...issues];
  if (!files.some((f) => f.kind === 'topic')) out.push({ file: 'topic.yaml', message: 'Brak pliku topic.yaml.' });
  for (const f of files) {
    const validate = validators[f.kind];
    if (!validate(f.data)) {
      for (const e of validate.errors ?? []) out.push({ file: f.relPath, message: formatError(e) });
    }
    if (f.body !== undefined) {
      const sections = splitSections(f.body);
      if ((sections.get('') ?? '') === '' && f.kind !== 'open') {
        out.push({ file: f.relPath, message: 'Brak treści pod nagłówkiem.' });
      }
      for (const name of REQUIRED_SECTIONS[f.kind] ?? []) {
        if (!(sections.get(name) ?? '')) out.push({ file: f.relPath, message: `Brak niepustej sekcji „## ${name}”.` });
      }
    }
  }
  return out;
}
