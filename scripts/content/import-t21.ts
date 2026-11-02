/**
 * T21 import (docs/05, TASK-010): maps the existing Content + QA pair to the
 * content-package contract. It transcribes existing semantics only — no new
 * keys, rationales, relations or approvals are generated. Statuses stay
 * "pending review / review-only / no allowed uses".
 *
 * Usage: tsx scripts/content/import-t21.ts
 * Output: content/normalized/T21.r1-full1.json + content/normalized/T21-IMPORT_REPORT.md
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, readBytes, readText, readJson, sha256HexOfBytes, stableJson, loadValidators, formatAjvErrors, schemaValid } from './lib.ts';
import { validatePackageSemantics, validatePackageStructure, combine } from '../../src/content/validate.ts';
import type {
  ContentPackage, Question, Rationale, Knowledge, OpenActivity, Remediation, Family, Criterion, Relationship, Rule, Source,
} from '../../src/content/types.ts';

const CONTENT_PATH = 'references/content/T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md';
const QA_PATH = 'references/content/T21_IREB_CPRE_Single_Requirement_Quality_QA_and_Handoff_v0.1.md';
const EXPECTED_CONTENT_SHA = '365e60dda5f9a47697c7f3170c938d821187c7658b38f7e8eb894f5621ccf965';
const EXPECTED_QA_SHA = 'ba95c577e0e251d23d227ec6289d96dfbdce501df24c384dc95e0b1883e6c57f';

interface Inventory {
  questions: {
    id: string; revision: string; format: 'A' | 'P' | 'K'; role: string; weight: number;
    answerKey: { selectedIds?: string[]; truthByDecisionId?: Record<string, boolean> };
    decisionCount: number; rationaleCount: number;
  }[];
}

interface Fixture {
  sources: Source[];
  rules: Rule[];
}

const problems: string[] = [];
function problem(msg: string): void {
  problems.push(msg);
}

// ---------- provenance ----------
const contentBytes = readBytes(CONTENT_PATH);
const qaBytes = readBytes(QA_PATH);
const contentSha = sha256HexOfBytes(contentBytes);
const qaSha = sha256HexOfBytes(qaBytes);
if (contentSha !== EXPECTED_CONTENT_SHA) problem(`Content SHA mismatch: ${contentSha}`);
if (qaSha !== EXPECTED_QA_SHA) problem(`QA SHA mismatch: ${qaSha}`);
const content = readText(CONTENT_PATH);

// ---------- sources & rules (normalized identically in the review fixture; REG-T21-TYPE added from Content §2.2 CL-T21-09) ----------
const fixture = readJson<Fixture>('examples/t21/t21-review-fixture.json');
const sources: Source[] = fixture.sources;
const rules: Rule[] = [
  ...fixture.rules,
  {
    id: 'REG-T21-TYPE',
    revision: 'r1',
    statementMarkdown: 'Typ quality requirement i jakość dowolnego wymagania to dwie osie opisu',
    sourceRefs: [
      { sourceId: 'SRC-T21-GEN', location: 'quality requirement s.23, requirement s.24, quality criteria s.23' },
      { sourceId: 'SRC-T21-GPL', location: 's.33–34' },
      { sourceId: 'SRC-T21-SEN', location: '§1.1 i §3.8' },
      { sourceId: 'SRC-T21-SPL', location: '§1.1 i §3.8' },
    ],
  },
];

// ---------- criteria ----------
const ZAK_LABELS: Record<string, string> = {
  'ZAK-T21-01': 'adequate', 'ZAK-T21-02': 'necessary', 'ZAK-T21-03': 'unambiguous',
  'ZAK-T21-04': 'complete', 'ZAK-T21-05': 'understandable', 'ZAK-T21-06': 'verifiable',
  'ZAK-T21-07': 'szczególna para: adekwatność i zrozumiałość', 'ZAK-T21-08': 'zalecana lista i wartość',
};
const criteria: Criterion[] = [
  {
    id: 'KRY-T21-01', revision: 'r1',
    description: 'Rozpoznaje sześć nazw kryteriów jakości pojedynczego wymagania i odtwarza ich znaczenia.',
    eoRefs: [{ id: 'EO3.8.1', level: 'L1' }],
    aspects: ['01', '02', '03', '04', '05', '06'].map((n) => ({ id: `ZAK-T21-${n}`, label: ZAK_LABELS[`ZAK-T21-${n}`] ?? '' })),
  },
  {
    id: 'KRY-T21-02', revision: 'r1',
    description: 'Rozpoznaje dwie najważniejsze cechy (adekwatność i zrozumiałość) oraz ich znaczenie wobec pozostałych.',
    eoRefs: [{ id: 'EO3.8.1', level: 'L1' }],
    aspects: [{ id: 'ZAK-T21-07', label: ZAK_LABELS['ZAK-T21-07'] ?? '' }],
  },
  {
    id: 'KRY-T21-03', revision: 'r1',
    description: 'Pamięta zalecany charakter listy i kontekst wartości (stopień spełnienia względem wartości wymagania).',
    eoRefs: [{ id: 'EO3.8.1', level: 'L1' }],
    aspects: [{ id: 'ZAK-T21-08', label: ZAK_LABELS['ZAK-T21-08'] ?? '' }],
  },
  {
    id: 'AUX-T21-03', revision: 'r1',
    description: 'Pomocnicze L2 bez oficjalnego EO: rozdziela oś typu oczekiwania od jakości zapisu oraz jednostki oceny kompletności.',
    eoRefs: [], aspects: [],
  },
  {
    id: 'AUX-T21-04', revision: 'r1',
    description: 'Pomocnicze L2 bez oficjalnego EO: odróżnia zgodność z potrzebą od możliwości sprawdzenia na jawnych danych.',
    eoRefs: [], aspects: [],
  },
];
const CRITERION_BY_ZAK: Record<string, string> = {
  'ZAK-T21-01': 'KRY-T21-01', 'ZAK-T21-02': 'KRY-T21-01', 'ZAK-T21-03': 'KRY-T21-01',
  'ZAK-T21-04': 'KRY-T21-01', 'ZAK-T21-05': 'KRY-T21-01', 'ZAK-T21-06': 'KRY-T21-01',
  'ZAK-T21-07': 'KRY-T21-02', 'ZAK-T21-08': 'KRY-T21-03',
};

// ---------- question parser (§7) ----------
interface ParsedItem {
  question: Question;
}

function parseRoleToken(token: string): Question['role'] {
  switch (token) {
    case 'base': return 'base';
    case 'follow_up_1': return 'follow-up-1';
    case 'follow_up_2': return 'follow-up-2';
    case 'delayed_candidate': return 'delayed-candidate';
    default: throw new Error(`Unknown role token: ${token}`);
  }
}

function parseItems(md: string): ParsedItem[] {
  const items: ParsedItem[] = [];
  const blockRe = /^#### (T21-[BFGD]0[1-8])\/r1$/gm;
  const headers: { id: string; start: number }[] = [];
  for (let m = blockRe.exec(md); m; m = blockRe.exec(md)) headers.push({ id: m[1] ?? '', start: m.index });
  for (let i = 0; i < headers.length; i += 1) {
    const header = headers[i];
    if (!header) continue;
    const end = i + 1 < headers.length ? headers[i + 1]?.start ?? md.length : md.indexOf('## 8.', header.start);
    const block = md.slice(header.start, end === -1 ? md.length : end);
    try {
      items.push({ question: parseItemBlock(header.id, block) });
    } catch (err) {
      problem(`Item ${header.id}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  return items;
}

function parseItemBlock(id: string, block: string): Question {
  const mLine = /\*\*\[M\]\*\* (.+)$/m.exec(block)?.[1];
  if (!mLine) throw new Error('missing [M] line');
  const fmt = /^([APK]),/.exec(mLine)?.[1] as 'A' | 'P' | 'K' | undefined;
  if (!fmt) throw new Error('missing format');
  const weight = Number(/w=(\d)/.exec(mLine)?.[1]);
  const k = /k=(\d+)/.exec(mLine)?.[1];
  const m = /m=(\d+)/.exec(mLine)?.[1];
  const roleToken = /;\s*(base|follow_up_1|follow_up_2|delayed_candidate);/.exec(mLine)?.[1];
  if (!roleToken) throw new Error('missing role');
  const primary = /primary (KRY-T21-\d\d|AUX-T21-\d\d)/.exec(mLine)?.[1];
  const secondary = /secondary (KRY-T21-\d\d)/.exec(mLine)?.[1];
  const zak = /(ZAK-T21-\d\d)/.exec(mLine)?.[1];
  const family = /(FAM-T21-\d\d)\/r1/.exec(mLine)?.[1];
  if (!primary || !zak || !family) throw new Error('missing primary/ZAK/family');

  const qMatch = /\*\*\[Q\]\*\* ([\s\S]*?)\n\n([^\n|]+)\n\n\|/m.exec(block);
  if (!qMatch) throw new Error('missing [Q] stem/instruction');
  const stem = (qMatch[1] ?? '').trim();
  const instruction = (qMatch[2] ?? '').trim();

  // decisions
  const decisions: { id: string; textMarkdown: string }[] = [];
  if (fmt === 'K') {
    const rowRe = /^\| (\d) \| (.+?) \| Prawda \/ Fałsz \|$/gm;
    for (let r = rowRe.exec(block); r; r = rowRe.exec(block)) decisions.push({ id: r[1] ?? '', textMarkdown: (r[2] ?? '').trim() });
  } else {
    const rowRe = /^\| ([a-e]) \| (.+?) \|$/gm;
    for (let r = rowRe.exec(block); r; r = rowRe.exec(block)) decisions.push({ id: r[1] ?? '', textMarkdown: (r[2] ?? '').trim() });
  }
  if (decisions.length === 0) throw new Error('no decisions parsed');

  // key
  const keyLine = /\*\*\[R\] Klucz:\*\* ([^.*]+)\./.exec(block)?.[1];
  if (!keyLine) throw new Error('missing key');
  let answerKey: Question['answerKey'];
  if (fmt === 'K') {
    const truth: Record<string, boolean> = {};
    for (const part of keyLine.split(',')) {
      const mm = /(\d):\s*(Prawda|Fałsz)/.exec(part.trim());
      if (!mm) throw new Error(`bad K key part: ${part}`);
      truth[mm[1] ?? ''] = mm[2] === 'Prawda';
    }
    answerKey = { truthByDecisionId: truth };
  } else {
    answerKey = { selectedIds: keyLine.split(',').map((s) => s.trim()).filter(Boolean) };
  }

  // rationales
  const rationales: Rationale[] = [];
  const ratRe = /^\| (RAT-T21-[BFGD]0[1-8]-(?:[a-e]|\d)) \| (.+?) \| (.+?) \|$/gm;
  for (let r = ratRe.exec(block); r; r = ratRe.exec(block)) {
    const ratId = r[1] ?? '';
    const body = (r[2] ?? '').trim();
    const regCol = r[3] ?? '';
    const decisionId = ratId.slice(ratId.lastIndexOf('-') + 1);
    const ruleIds = [...regCol.matchAll(/REG-T21-(?:\d\d|TYPE)/g)].map((x) => x[0]);
    if (ruleIds.length === 0) throw new Error(`rationale ${ratId} has no rules`);
    rationales.push({
      id: ratId,
      decisionId,
      bodyMarkdown: body,
      ruleIds: [...new Set(ruleIds)],
      contactScopes: [{ criterionId: CRITERION_BY_ZAK[zak] ?? primary, aspectId: zak }],
      sourceAnchor: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §7 ${id}/r1, ${ratId}`,
    });
  }

  const mappings: Question['criterionMappings'] = [
    { criterionId: primary, aspectId: zak, role: 'primary', decisionIds: decisions.map((d) => d.id) },
    // Secondary (KRY-T21-02, value condition only) has no own ZAK aspect here;
    // the same decisions are never counted as two independent observations.
    ...(secondary ? [{ criterionId: secondary, role: 'secondary' as const, decisionIds: decisions.map((d) => d.id) }] : []),
  ];

  return {
    id,
    revision: 'r1',
    format: fmt,
    role: parseRoleToken(roleToken),
    weight: weight as 1 | 2 | 3,
    ...(fmt === 'P' && k ? { k: Number(k) } : {}),
    ...(fmt === 'K' && m ? { m: Number(m) } : {}),
    stemMarkdown: stem,
    instruction,
    decisions,
    answerKey,
    rationales,
    criterionMappings: mappings,
    familyRef: { id: family, revision: 'r1' },
    noveltyReview: 'pending',
    sourceAnchor: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §7 ${id}/r1`,
  };
}

// ---------- knowledge parser (§3–5) ----------
function sectionBetween(md: string, startRe: RegExp, endRe: RegExp): string {
  const start = startRe.exec(md);
  if (!start) return '';
  const rest = md.slice(start.index + start[0].length);
  const end = endRe.exec(rest);
  return (end ? rest.slice(0, end.index) : rest).trim();
}

function parseKnowledge(md: string): Knowledge[] {
  const out: Knowledge[] = [];
  // INTRO
  const intro = sectionBetween(md, /### 3\.1\. INTRO-T21 \[N\]\n/, /\n### 3\.2\./);
  if (intro) {
    out.push({
      id: 'INTRO-T21', revision: 'r1', kind: 'note', title: 'Wejście do tematu T21',
      bodyMarkdown: intro, ruleIds: [], contactScopes: [],
      sourceAnchor: 'T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §3.1 INTRO-T21',
    });
  } else problem('INTRO-T21 not parsed');
  // TERM table
  const term = sectionBetween(md, /### 3\.2\. TERM-T21 — etykiety, znaczenia i aliasy\n/, /\n### 3\.3\./);
  if (term) {
    out.push({
      id: 'TERM-T21', revision: 'r1', kind: 'note', title: 'Terminologia PL/EN tematu T21',
      bodyMarkdown: term, ruleIds: [], contactScopes: [],
      sourceAnchor: 'T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §3.2 TERM-T21',
    });
  } else problem('TERM-T21 not parsed');
  // PRE
  const pre = sectionBetween(md, /### 3\.3\. PRE-T21 — potrzebna podstawa bez bramki kursu\n/, /\n## 4\./);
  if (pre) {
    out.push({
      id: 'PRE-T21', revision: 'r1', kind: 'prerequisite', title: 'Potrzebna podstawa: wymaganie i interesariusz',
      bodyMarkdown: pre, ruleIds: ['REG-T21-01'],
      contactScopes: [{ criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-01' }],
      sourceAnchor: 'T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §3.3 PRE-T21',
      prerequisiteCondition: 'Tylko gdy niezrozumiałe są pojęcia potrzeby (wymaganie) i interesariusza; znana podstawa jest pomijalna. R14 bez review nie wymusza niczego.',
      skippable: true,
    });
  } else problem('PRE-T21 not parsed');
  // N-T21-01..08
  const noteTitles: string[] = [];
  const noteRe = /### (N-T21-0[1-8]) — (.+)\n/g;
  const noteHeaders: { id: string; title: string; start: number; len: number }[] = [];
  for (let m = noteRe.exec(md); m; m = noteRe.exec(md)) noteHeaders.push({ id: m[1] ?? '', title: (m[2] ?? '').trim(), start: m.index, len: m[0].length });
  for (let i = 0; i < noteHeaders.length; i += 1) {
    const h = noteHeaders[i];
    if (!h) continue;
    const next = noteHeaders[i + 1]?.start ?? md.indexOf('## 5.', h.start);
    const body = md.slice(h.start + h.len, next === -1 ? undefined : next).trim();
    const n = Number(h.id.slice(-1));
    const zak = `ZAK-T21-0${String(n)}`;
    out.push({
      id: h.id, revision: 'r1', kind: 'note', title: h.title,
      bodyMarkdown: body,
      ruleIds: [`REG-T21-0${String(n)}`],
      contactScopes: [{ criterionId: CRITERION_BY_ZAK[zak] ?? 'KRY-T21-01', aspectId: zak }],
      sourceAnchor: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §4 ${h.id}`,
    });
    noteTitles.push(h.id);
  }
  if (noteTitles.length !== 8) problem(`Expected 8 notes, parsed ${String(noteTitles.length)}`);
  // CMP-T21-01..03
  const cmpMeta: Record<string, { rules: string[]; scopes: { criterionId: string; aspectId?: string }[] }> = {
    'CMP-T21-01': { rules: ['REG-T21-TYPE'], scopes: [{ criterionId: 'KRY-T21-01' }] },
    'CMP-T21-02': { rules: ['REG-T21-04'], scopes: [{ criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-04' }] },
    'CMP-T21-03': { rules: ['REG-T21-01', 'REG-T21-06', 'REG-T21-07'], scopes: [{ criterionId: 'KRY-T21-02', aspectId: 'ZAK-T21-07' }, { criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-01' }, { criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-06' }] },
  };
  const cmpRe = /### (CMP-T21-0[1-3]) — (.+?) \[N\]\n/g;
  const cmpHeaders: { id: string; title: string; start: number; len: number }[] = [];
  for (let m = cmpRe.exec(md); m; m = cmpRe.exec(md)) cmpHeaders.push({ id: m[1] ?? '', title: (m[2] ?? '').trim(), start: m.index, len: m[0].length });
  for (let i = 0; i < cmpHeaders.length; i += 1) {
    const h = cmpHeaders[i];
    if (!h) continue;
    const nextStart = /### (?:CMP|WS)-T21/g;
    nextStart.lastIndex = h.start + h.len;
    const nm = nextStart.exec(md);
    const body = md.slice(h.start + h.len, nm ? nm.index : md.indexOf('## 6.', h.start)).trim();
    const meta = cmpMeta[h.id] ?? { rules: [], scopes: [] };
    out.push({
      id: h.id, revision: 'r1', kind: 'comparison', title: h.title,
      bodyMarkdown: body, ruleIds: meta.rules, contactScopes: meta.scopes,
      sourceAnchor: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §5 ${h.id}`,
    });
  }
  if (cmpHeaders.length !== 3) problem(`Expected 3 comparisons, parsed ${String(cmpHeaders.length)}`);
  // WS-T21-01..02
  const wsMeta: Record<string, { rules: string[]; scopes: { criterionId: string; aspectId?: string }[] }> = {
    'WS-T21-01': { rules: ['REG-T21-01', 'REG-T21-06', 'REG-T21-07'], scopes: [{ criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-01' }, { criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-06' }, { criterionId: 'KRY-T21-02', aspectId: 'ZAK-T21-07' }] },
    'WS-T21-02': { rules: ['REG-T21-04'], scopes: [{ criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-04' }] },
  };
  const wsRe = /### (WS-T21-0[1-2]) — (.+?) \[N\]\n/g;
  const wsHeaders: { id: string; title: string; start: number; len: number }[] = [];
  for (let m = wsRe.exec(md); m; m = wsRe.exec(md)) wsHeaders.push({ id: m[1] ?? '', title: (m[2] ?? '').trim(), start: m.index, len: m[0].length });
  for (let i = 0; i < wsHeaders.length; i += 1) {
    const h = wsHeaders[i];
    if (!h) continue;
    const nextStart = /### WS-T21|## 6\./g;
    nextStart.lastIndex = h.start + h.len;
    const nm = nextStart.exec(md);
    const body = md.slice(h.start + h.len, nm ? nm.index : undefined).trim();
    const meta = wsMeta[h.id] ?? { rules: [], scopes: [] };
    out.push({
      id: h.id, revision: 'r1', kind: 'worked-example', title: h.title,
      bodyMarkdown: body, ruleIds: meta.rules, contactScopes: meta.scopes,
      sourceAnchor: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §5 ${h.id}`,
    });
  }
  if (wsHeaders.length !== 2) problem(`Expected 2 worked scenarios, parsed ${String(wsHeaders.length)}`);
  return out;
}

// ---------- open activities (§6) ----------
function parseOpenActivities(md: string): OpenActivity[] {
  const meta: Record<string, { scope: { criterionId: string; aspectId?: string }[] }> = {
    'T21-O01': { scope: ['01', '02', '03', '04', '05', '06'].map((n) => ({ criterionId: 'KRY-T21-01', aspectId: `ZAK-T21-${n}` })) },
    'T21-O02': { scope: [{ criterionId: 'KRY-T21-02', aspectId: 'ZAK-T21-07' }, { criterionId: 'KRY-T21-03', aspectId: 'ZAK-T21-08' }] },
    'T21-O03': { scope: [{ criterionId: 'AUX-T21-03' }] },
    'T21-O04': { scope: [{ criterionId: 'AUX-T21-04' }] },
  };
  const out: OpenActivity[] = [];
  const re = /### (T21-O0[1-4])\/r1 — (.+)\n/g;
  const headers: { id: string; title: string; start: number; len: number }[] = [];
  for (let m = re.exec(md); m; m = re.exec(md)) headers.push({ id: m[1] ?? '', title: (m[2] ?? '').trim(), start: m.index, len: m[0].length });
  for (let i = 0; i < headers.length; i += 1) {
    const h = headers[i];
    if (!h) continue;
    const next = headers[i + 1]?.start ?? md.indexOf('## 7.', h.start);
    const block = md.slice(h.start + h.len, next === -1 ? undefined : next);
    const prompt = /\*\*\[Q\]\*\* ([\s\S]*?)\n\n\*\*\[R\]/.exec(block)?.[1]?.trim();
    const rubric = /\*\*\[R\] ((?:Rubryka )?RUB-T21[\s\S]*?)(?:\n\n\*\*Metoda|$)/.exec(block)?.[1]?.trim();
    if (!prompt || !rubric) {
      problem(`Open activity ${h.id}: prompt/rubric not parsed`);
      continue;
    }
    out.push({
      id: h.id, revision: 'r1',
      promptMarkdown: prompt,
      rubricMarkdown: rubric,
      scope: meta[h.id]?.scope ?? [],
      evaluationMethod: 'self-assessment',
      sourceAnchor: `T21_IREB_CPRE_Single_Requirement_Quality_Content_v0.1.md §6 ${h.id}/r1`,
    });
  }
  if (out.length !== 4) problem(`Expected 4 open activities, parsed ${String(out.length)}`);
  return out;
}

// ---------- remediations (§8.1) ----------
function parseRemediations(md: string): Remediation[] {
  const out: Remediation[] = [];
  const rowRe = /^\| (REM-T21-0[1-8]) \/ ZAK0([1-8]) \| ([\s\S]*?) \| (T21-F0[1-8]) \| ([\s\S]*?) \|$/gm;
  for (let m = rowRe.exec(md); m; m = rowRe.exec(md)) {
    const id = m[1] ?? '';
    const n = m[2] ?? '';
    const body = (m[3] ?? '').trim();
    const f = m[4] ?? '';
    const alt = (m[5] ?? '').trim();
    const g = /Następnie (T21-G0[1-8])/.exec(alt)?.[1];
    const zak = `ZAK-T21-0${n}`;
    const knowledgeRefs = [...new Set([...body.matchAll(/(N-T21-0[1-8]|CMP-T21-0[1-3])/g)].map((x) => x[0]))];
    out.push({
      id, revision: 'r1',
      scope: { criterionId: CRITERION_BY_ZAK[zak] ?? 'KRY-T21-01', aspectId: zak },
      bodyMarkdown: body,
      knowledgeRefs: knowledgeRefs.map((kid) => ({ id: kid, revision: 'r1' })),
      followUpRefs: [{ id: f, revision: 'r1' }, ...(g ? [{ id: g, revision: 'r1' }] : [])],
      alternativeHelpMarkdown: alt,
      exitAfterFailedFollowUps: 2,
    });
  }
  if (out.length !== 8) problem(`Expected 8 remediations, parsed ${String(out.length)}`);
  return out;
}

// ---------- families & relationships ----------
const families: Family[] = [
  ...['01', '02', '03', '04', '05', '06', '07', '08'].map((n) => ({
    id: `FAM-T21-${n}`, revision: 'r1', review: 'pending' as const,
    description: `Wspólna rodzina B/F/G/D ścieżki ZAK-T21-${n}; brak zatwierdzonej niezależności.`,
  })),
  { id: 'FAM-T21-LEX-ALL', revision: 'r1', review: 'pending', description: 'Grupowanie O01; krzyżuje sześć rodzin znaczeniowych.' },
  { id: 'FAM-T21-PRIORITY-VALUE', revision: 'r1', review: 'pending', description: 'Grupowanie O02; bliskie FAM-T21-07/08.' },
  { id: 'FAM-T21-COMPARISONS', revision: 'r1', review: 'pending', description: 'Grupowanie O03; bliskie CMP01/02.' },
  { id: 'FAM-T21-NEED-VS-CHECK', revision: 'r1', review: 'pending', description: 'Grupowanie O04; bliskie WS01/CMP03.' },
];

function buildRelationships(): Relationship[] {
  const rels: Relationship[] = [];
  for (const n of ['01', '02', '03', '04', '05', '06', '07', '08']) {
    rels.push({
      id: `REL-T21-10-${n}`, revision: 'r1', type: 'R10',
      from: { id: `N-T21-${n}`, revision: 'r1' }, to: { id: `REG-T21-${n}`, revision: 'r1' },
      condition: 'Ujawnienie dopuszczone przez granicę feedbacku',
      meaning: 'Nota rozwija znaczenie i granice właściwej reguły; cel: celowany powrót do wiedzy.',
      provenance: 'INTERPRETATION autora wg Content §8.3', review: 'pending',
    });
  }
  const cmpTargets: Record<string, string> = { '01': 'REG-T21-TYPE', '02': 'REG-T21-04', '03': 'REG-T21-07' };
  for (const [n, target] of Object.entries(cmpTargets)) {
    rels.push({
      id: `REL-T21-11-${n}`, revision: 'r1', type: 'R11',
      from: { id: `CMP-T21-${n}`, revision: 'r1' }, to: { id: target, revision: 'r1' },
      condition: 'Ujawnienie dopuszczone przez granicę feedbacku',
      meaning: 'Comparison rozdziela dwa sensy po wspólnej osi.',
      provenance: 'INTERPRETATION autora wg Content §8.3', review: 'pending',
    });
  }
  rels.push({
    id: 'REL-T21-14', revision: 'r1', type: 'R14',
    from: { id: 'PRE-T21', revision: 'r1' }, to: { id: 'KRY-T21-01', revision: 'r1' },
    condition: 'Tylko gdy niezrozumiałe są pojęcia potrzeby i interesariusza; podstawa pomijalna',
    meaning: 'Podstawa requirement/stakeholder jest potrzebna do odczytania sensu adequacy; bez review nie wymusza niczego.',
    provenance: 'Propozycja dydaktyczna wg Content §3.3', review: 'pending',
  });
  return rels;
}

// ---------- compose, cross-check, validate, write ----------
const items = parseItems(content);
const knowledge = parseKnowledge(content);
const openActivities = parseOpenActivities(content);
const remediations = parseRemediations(content);

const inventory = readJson<Inventory>('examples/t21/t21-item-inventory.json');
const parsedById = new Map(items.map((i) => [i.question.id, i.question]));
let rationaleTotal = 0;
let weightTotal = 0;
for (const inv of inventory.questions) {
  const got = parsedById.get(inv.id);
  if (!got) {
    problem(`Inventory item ${inv.id} missing from parse`);
    continue;
  }
  if (got.format !== inv.format) problem(`${inv.id}: format ${got.format} != ${inv.format}`);
  if (got.weight !== inv.weight) problem(`${inv.id}: weight ${String(got.weight)} != ${String(inv.weight)}`);
  if (got.decisions.length !== inv.decisionCount) problem(`${inv.id}: decisions ${String(got.decisions.length)} != ${String(inv.decisionCount)}`);
  if (got.rationales.length !== inv.rationaleCount) problem(`${inv.id}: rationales ${String(got.rationales.length)} != ${String(inv.rationaleCount)}`);
  if (JSON.stringify(got.answerKey) !== JSON.stringify(inv.answerKey)) problem(`${inv.id}: answer key mismatch`);
  rationaleTotal += got.rationales.length;
  weightTotal += got.weight;
}
if (items.length !== 32) problem(`Expected 32 items, parsed ${String(items.length)}`);
if (rationaleTotal !== 128) problem(`Expected 128 rationales, got ${String(rationaleTotal)}`);
if (weightTotal !== 47) problem(`Expected weight sum 47, got ${String(weightTotal)}`);

const pkg: ContentPackage = {
  schemaVersion: '1.0.0',
  packageId: 'T21',
  revision: 'r1-full1',
  title: 'T21 — Jakość pojedynczego wymagania (pełny import autorski)',
  language: 'pl',
  purpose: 'content',
  runtimeCompleteness: 'complete',
  limitations: [
    'Pełny import autorskiego T21 v0.1: 32 itemy /128 rationale, 4 otwarte aktywności, 8 not, 3 comparisons, 2 worked scenarios, 8 korekt.',
    'Całość oczekuje odrębnego review (QG-09, C-AC-12); publikacja review-only, zero dopuszczonych użyć uczniowskich.',
    'Rodziny są propozycją autora; zero potwierdzonych niezależnych rodzin i zero chronionej rezerwy dla czytelnika źródeł.',
    'Żadna forma U-TOPIC nie została dopuszczona; forms jest puste zgodnie ze źródłem.',
    'Relacje w pakiecie obejmują instancje potrzebne funkcjom przyrostu (R10/R11/R14); pozostałe instancje rejestru §8.3 pozostają w źródle.',
  ],
  status: {
    authoring: 'complete',
    review: 'pending',
    publication: 'review-only',
    allowedUses: [],
    empirical: 'none',
  },
  provenance: [
    { path: CONTENT_PATH, sha256: contentSha, documentVersion: 'v0.1', storedFileVersion: '2' },
    { path: QA_PATH, sha256: qaSha, documentVersion: 'v0.1', storedFileVersion: '2' },
  ],
  educationProfile: { syllabusVersion: '3.3.0', glossaryVersion: '2.2.0', regulationsVersion: '5.6.2' },
  criteria,
  sources,
  rules,
  knowledge,
  questions: items.map((i) => i.question),
  openActivities,
  remediations,
  families,
  forms: [],
  relationships: buildRelationships(),
  rights: { status: 'review-only', channels: ['internal-review'] },
};

const validators = loadValidators();
if (!schemaValid(validators.contentPackage, pkg)) problem(`JSON Schema: ${formatAjvErrors(validators.contentPackage)}`);
const semantic = combine(validatePackageStructure(pkg), validatePackageSemantics(pkg));
for (const i of semantic.issues) problem(`Semantic ${i.code} at ${i.path}: ${i.message}`);

const outDir = resolve(ROOT, 'content/normalized');
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, 'T21.r1-full1.json');
const json = stableJson(pkg);

const report = `# Raport importu T21 → kontrakt v1.0.0

Data importu: ${new Date().toISOString()}
Wejścia: oba pełne pliki źródłowe przeczytane w całości przed mapowaniem.

| Wejście | SHA-256 | Zgodny z provenance |
|---|---|---|
| ${CONTENT_PATH} | ${contentSha} | ${contentSha === EXPECTED_CONTENT_SHA ? 'tak' : 'NIE'} |
| ${QA_PATH} | ${qaSha} | ${qaSha === EXPECTED_QA_SHA ? 'tak' : 'NIE'} |

## Liczniki wejście → wyjście

| Obiekt | Źródło (QA §2) | Zmapowano |
|---|---:|---:|
| Zamknięte itemy | 32 | ${String(items.length)} |
| Rationale | 128 | ${String(rationaleTotal)} |
| Suma maksymalnych wag | 47 | ${String(weightTotal)} |
| Otwarte aktywności + rubryki | 4 | ${String(openActivities.length)} |
| Noty N | 8 | ${String(knowledge.filter((k) => /^N-T21/.test(k.id)).length)} |
| Comparisons | 3 | ${String(knowledge.filter((k) => k.kind === 'comparison').length)} |
| Worked scenarios | 2 | ${String(knowledge.filter((k) => k.kind === 'worked-example').length)} |
| Korekty REM | 8 | ${String(remediations.length)} |
| Rodziny (nazwy robocze) | 12 | ${String(families.length)} |
| Reguły REG | 8 + REG-T21-TYPE | ${String(rules.length)} |
| Źródła | 6 | ${String(sources.length)} |
| Relacje zmapowane do funkcji (R10/R11/R14) | — | ${String(buildRelationships().length)} |

## Delty i zachowane statusy

- Rewizja pakietu: r1-full1 (nowa normalizacja; źródłowa rewizja dokumentów v0.1, plik 2). Próbka r1-import1 pozostaje nietknięta w examples/.
- Status review: **pending** — zachowano; import nie nadaje zatwierdzenia (QG-09, C-AC-12 otwarte).
- publication: review-only; allowedUses: []; rights: review-only / internal-review. Kanał learner odrzuca ten pakiet.
- forms: 0 — brak dopuszczonej formy U-TOPIC; nie wygenerowano automatycznego wyboru D01–08.
- Rejestr 538 relacji §8.3 nie został przepisany 1:1: funkcje przyrostu używają R08/R09 (w rationale), R18/R19 (w remediations), R10/R11/R14 (jawne instancje). Brakujące ID względem źródła: pozostałe instancje rejestru — pozostają w źródle do przyszłej integracji.
- Nie wygenerowano kluczy, rationale, rodzin, sond ani zgód. Brak wycofanych rewizji.

## Problemy importu

${problems.length === 0 ? 'Brak.' : problems.map((p) => `- ${p}`).join('\n')}

Wynik: ${problems.length === 0 ? 'OK' : 'BŁĘDY — pakiet niezapisany'}
`;

writeFileSync(resolve(outDir, 'T21-IMPORT_REPORT.md'), report, 'utf-8');
if (problems.length > 0) {
  console.error(report);
  process.exit(1);
}
writeFileSync(outPath, json, 'utf-8');
console.log(`OK: ${outPath} (${String(json.length)} bytes), report in content/normalized/T21-IMPORT_REPORT.md`);
