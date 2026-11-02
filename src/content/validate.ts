/**
 * Structural + semantic validation of content packages and manifests
 * (schemas/README "Reguły poza JSON Schema"). Used by both the build scripts
 * (alongside Ajv JSON Schema validation) and by the runtime updater before a
 * release is activated. Schema validity alone never implies approval.
 */
import type {
  ContentPackage,
  ContentManifest,
  Question,
  ManifestChannel,
  AllowedUse,
  PublicationChannel,
} from './types.ts';

export interface ValidationIssue {
  readonly code: string;
  readonly path: string;
  readonly message: string;
}

export interface ValidationResult {
  readonly ok: boolean;
  readonly issues: readonly ValidationIssue[];
}

const ID_RE = /^[A-Za-z0-9][A-Za-z0-9._:-]*$/;
const REV_RE = /^r[0-9]+(?:-[A-Za-z0-9._-]+)?$/;
const SHA_RE = /^[a-f0-9]{64}$/;

function issue(code: string, path: string, message: string): ValidationIssue {
  return { code, path, message };
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Minimal structural guard so semantic checks can assume shape. */
export function validatePackageStructure(data: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];
  if (!isRecord(data)) return { ok: false, issues: [issue('NOT_OBJECT', '$', 'Package must be a JSON object')] };
  const required = [
    'schemaVersion', 'packageId', 'revision', 'title', 'language', 'purpose', 'runtimeCompleteness',
    'limitations', 'status', 'provenance', 'educationProfile', 'criteria', 'sources', 'rules',
    'knowledge', 'questions', 'openActivities', 'remediations', 'families', 'forms', 'relationships', 'rights',
  ];
  for (const key of required) if (!(key in data)) issues.push(issue('MISSING_FIELD', `$.${key}`, `Missing required field ${key}`));
  if (data['schemaVersion'] !== '1.0.0') issues.push(issue('SCHEMA_VERSION', '$.schemaVersion', 'Unsupported schemaVersion'));
  if (typeof data['packageId'] !== 'string' || !ID_RE.test(data['packageId'])) issues.push(issue('BAD_ID', '$.packageId', 'Invalid packageId'));
  if (typeof data['revision'] !== 'string' || !REV_RE.test(data['revision'])) issues.push(issue('BAD_REVISION', '$.revision', 'Invalid revision'));
  if (data['language'] !== 'pl') issues.push(issue('BAD_LANGUAGE', '$.language', 'language must be "pl"'));
  return { ok: issues.length === 0, issues };
}

function validateQuestion(q: Question, ruleIds: ReadonlySet<string>, criterionIds: ReadonlySet<string>, aspectByCriterion: ReadonlyMap<string, ReadonlySet<string>>, familyIds: ReadonlySet<string>, issues: ValidationIssue[]): void {
  const path = `$.questions[${q.id}]`;
  const decisionIds = new Set(q.decisions.map((d) => d.id));
  if (decisionIds.size !== q.decisions.length) issues.push(issue('DUPLICATE_DECISION', path, 'Duplicate decision IDs'));
  if (![1, 2, 3].includes(q.weight)) issues.push(issue('BAD_WEIGHT', path, 'Weight must be 1, 2 or 3'));

  // Format-specific key rules (never derive format from the ID prefix).
  if (q.format === 'A') {
    if (!('selectedIds' in q.answerKey) || q.answerKey.selectedIds.length !== 1) issues.push(issue('A_KEY_COUNT', path, 'A must have exactly one correct choice'));
    if (q.decisions.length < 4 || q.decisions.length > 5) issues.push(issue('A_DECISION_COUNT', path, 'A must have 4–5 options'));
    if (q.k !== undefined || q.m !== undefined) issues.push(issue('A_EXTRA_PARAM', path, 'A must not define k or m'));
  } else if (q.format === 'P') {
    if (q.k === undefined || q.k < 2) issues.push(issue('P_MISSING_K', path, 'P requires explicit k >= 2'));
    if (!('selectedIds' in q.answerKey)) issues.push(issue('P_KEY_TYPE', path, 'P key must list selectedIds'));
    else if (q.k !== undefined && q.answerKey.selectedIds.length !== q.k) issues.push(issue('P_KEY_COUNT_MISMATCH', path, 'P key count differs from k'));
    if (q.k !== undefined && q.k > q.decisions.length) issues.push(issue('P_K_TOO_LARGE', path, 'k exceeds option count'));
    if (q.m !== undefined) issues.push(issue('P_EXTRA_PARAM', path, 'P must not define m'));
  } else {
    if (q.m === undefined || q.m < 1) issues.push(issue('K_MISSING_M', path, 'K requires explicit m'));
    if (!('truthByDecisionId' in q.answerKey)) issues.push(issue('K_KEY_TYPE', path, 'K key must map rows to booleans'));
    else {
      const rows = Object.keys(q.answerKey.truthByDecisionId);
      if (q.m !== undefined && (rows.length !== q.m || q.decisions.length !== q.m)) issues.push(issue('K_KEY_ROW_MISMATCH', path, 'K m disagrees with rows'));
      for (const row of rows) if (!decisionIds.has(row)) issues.push(issue('K_KEY_UNKNOWN_ROW', path, `Key row ${row} is not a decision`));
    }
    if (q.k !== undefined) issues.push(issue('K_EXTRA_PARAM', path, 'K must not define k'));
  }
  if ('selectedIds' in q.answerKey) {
    for (const id of q.answerKey.selectedIds) {
      if (!decisionIds.has(id)) issues.push(issue('KEY_UNKNOWN_DECISION', path, `Key references unknown decision ${id}`));
    }
  }

  // Exactly one rationale per decision, each with existing rules.
  const ratByDecision = new Map<string, number>();
  for (const rat of q.rationales) {
    ratByDecision.set(rat.decisionId, (ratByDecision.get(rat.decisionId) ?? 0) + 1);
    if (!decisionIds.has(rat.decisionId)) issues.push(issue('RAT_UNKNOWN_DECISION', path, `Rationale ${rat.id} targets unknown decision`));
    if (rat.ruleIds.length === 0) issues.push(issue('RAT_NO_RULE', path, `Rationale ${rat.id} has no rule`));
    for (const ruleId of rat.ruleIds) if (!ruleIds.has(ruleId)) issues.push(issue('MISSING_RULE_REF', path, `Rationale ${rat.id} references unknown rule ${ruleId}`));
    for (const scope of rat.contactScopes) {
      if (!criterionIds.has(scope.criterionId)) issues.push(issue('RAT_UNKNOWN_CRITERION', path, `Rationale ${rat.id} unknown criterion ${scope.criterionId}`));
      else if (scope.aspectId !== undefined && !(aspectByCriterion.get(scope.criterionId)?.has(scope.aspectId) ?? false)) {
        issues.push(issue('RAT_UNKNOWN_ASPECT', path, `Rationale ${rat.id} unknown aspect ${scope.aspectId}`));
      }
    }
  }
  for (const d of q.decisions) {
    const count = ratByDecision.get(d.id) ?? 0;
    if (count === 0) issues.push(issue('INCOMPLETE_RATIONALES', path, `Decision ${d.id} has no rationale`));
    if (count > 1) issues.push(issue('DUPLICATE_RATIONALE', path, `Decision ${d.id} has ${String(count)} rationales`));
  }

  if (q.criterionMappings.length === 0) issues.push(issue('NO_CRITERION_MAPPING', path, 'Question has no criterion mapping'));
  for (const cm of q.criterionMappings) {
    if (!criterionIds.has(cm.criterionId)) issues.push(issue('MAPPING_UNKNOWN_CRITERION', path, `Mapping to unknown criterion ${cm.criterionId}`));
    else if (cm.aspectId !== undefined && !(aspectByCriterion.get(cm.criterionId)?.has(cm.aspectId) ?? false)) {
      issues.push(issue('MAPPING_UNKNOWN_ASPECT', path, `Mapping to unknown aspect ${cm.aspectId}`));
    }
    for (const id of cm.decisionIds) if (!decisionIds.has(id)) issues.push(issue('MAPPING_UNKNOWN_DECISION', path, `Mapping references unknown decision ${id}`));
  }
  if (!familyIds.has(q.familyRef.id)) issues.push(issue('UNKNOWN_FAMILY', path, `familyRef ${q.familyRef.id} not declared`));
}

/** Full-package semantic validation (QKP completeness, references, uses). */
export function validatePackageSemantics(pkg: ContentPackage): ValidationResult {
  const issues: ValidationIssue[] = [];

  const criterionIds = new Set<string>();
  const aspectByCriterion = new Map<string, Set<string>>();
  for (const c of pkg.criteria) {
    if (criterionIds.has(c.id)) issues.push(issue('DUPLICATE_ID', `$.criteria[${c.id}]`, 'Duplicate criterion ID'));
    criterionIds.add(c.id);
    aspectByCriterion.set(c.id, new Set(c.aspects.map((a) => a.id)));
  }
  const sourceIds = new Set<string>();
  for (const s of pkg.sources) {
    if (sourceIds.has(s.id)) issues.push(issue('DUPLICATE_ID', `$.sources[${s.id}]`, 'Duplicate source ID'));
    sourceIds.add(s.id);
  }
  const ruleIds = new Set<string>();
  for (const r of pkg.rules) {
    if (ruleIds.has(r.id)) issues.push(issue('DUPLICATE_ID', `$.rules[${r.id}]`, 'Duplicate rule ID'));
    ruleIds.add(r.id);
    if (r.sourceRefs.length === 0) issues.push(issue('RULE_NO_SOURCE', `$.rules[${r.id}]`, 'Rule has no source'));
    for (const ref of r.sourceRefs) if (!sourceIds.has(ref.sourceId)) issues.push(issue('MISSING_SOURCE_REF', `$.rules[${r.id}]`, `Unknown source ${ref.sourceId}`));
  }
  const familyIds = new Set(pkg.families.map((f) => f.id));
  const knowledgeIds = new Set<string>();
  for (const n of pkg.knowledge) {
    if (knowledgeIds.has(n.id)) issues.push(issue('DUPLICATE_ID', `$.knowledge[${n.id}]`, 'Duplicate knowledge ID'));
    knowledgeIds.add(n.id);
    for (const ruleId of n.ruleIds) if (!ruleIds.has(ruleId)) issues.push(issue('MISSING_RULE_REF', `$.knowledge[${n.id}]`, `Unknown rule ${ruleId}`));
    for (const scope of n.contactScopes) if (!criterionIds.has(scope.criterionId)) issues.push(issue('UNKNOWN_CRITERION', `$.knowledge[${n.id}]`, `Unknown criterion ${scope.criterionId}`));
  }

  const questionKeys = new Set<string>();
  for (const q of pkg.questions) {
    const key = `${q.id}@${q.revision}`;
    if (questionKeys.has(key)) issues.push(issue('DUPLICATE_ID', `$.questions[${q.id}]`, 'Duplicate question ID+revision'));
    questionKeys.add(key);
    if (!ID_RE.test(q.id) || !REV_RE.test(q.revision)) issues.push(issue('BAD_ID', `$.questions[${q.id}]`, 'Invalid question ID or revision'));
    validateQuestion(q, ruleIds, criterionIds, aspectByCriterion, familyIds, issues);
  }

  const questionIds = new Set(pkg.questions.map((q) => q.id));
  for (const o of pkg.openActivities) {
    if (o.scope.length === 0) issues.push(issue('OPEN_NO_SCOPE', `$.openActivities[${o.id}]`, 'Open activity has no scope'));
  }
  for (const rem of pkg.remediations) {
    if (!criterionIds.has(rem.scope.criterionId)) issues.push(issue('REM_UNKNOWN_CRITERION', `$.remediations[${rem.id}]`, `Unknown criterion ${rem.scope.criterionId}`));
    if (rem.followUpRefs.length === 0) issues.push(issue('REM_NO_FOLLOWUP', `$.remediations[${rem.id}]`, 'Remediation has no follow-up'));
    for (const ref of rem.followUpRefs) if (!questionIds.has(ref.id)) issues.push(issue('REM_UNKNOWN_FOLLOWUP', `$.remediations[${rem.id}]`, `Unknown follow-up ${ref.id}`));
    for (const ref of rem.knowledgeRefs) if (!knowledgeIds.has(ref.id)) issues.push(issue('REM_UNKNOWN_KNOWLEDGE', `$.remediations[${rem.id}]`, `Unknown knowledge ${ref.id}`));
  }
  for (const form of pkg.forms) {
    for (const ref of form.itemRefs) if (!questionIds.has(ref.id)) issues.push(issue('FORM_UNKNOWN_ITEM', `$.forms[${form.id}]`, `Unknown item ${ref.id}`));
    for (const scope of form.scopes) if (!criterionIds.has(scope.criterionId)) issues.push(issue('FORM_UNKNOWN_CRITERION', `$.forms[${form.id}]`, `Unknown criterion ${scope.criterionId}`));
  }
  const localIds = new Set([...criterionIds, ...sourceIds, ...ruleIds, ...knowledgeIds, ...questionIds, ...familyIds, ...pkg.openActivities.map((o) => o.id), ...pkg.remediations.map((r) => r.id), ...pkg.forms.map((f) => f.id)]);
  for (const rel of pkg.relationships) {
    if (!/^R(?:0[1-9]|1[0-9]|2[0-6])$/.test(rel.type)) issues.push(issue('BAD_RELATION_TYPE', `$.relationships[${rel.id}]`, `Invalid type ${rel.type}`));
    // Relation ends may point at external profiles (e.g. EO@syllabus); only check local shape.
    if (!rel.from.id || !rel.to.id) issues.push(issue('BAD_RELATION_END', `$.relationships[${rel.id}]`, 'Relation end missing'));
    void localIds;
  }

  return { ok: issues.length === 0, issues };
}

export interface LearnerGateOptions {
  readonly channel: ManifestChannel;
  readonly publicationChannel: PublicationChannel;
  readonly intendedUses?: readonly AllowedUse[];
}

/**
 * Learner-channel gate (schemas/README rule 4): the learner channel rejects
 * review fixtures, partial runtime completeness, review-only/withdrawn
 * publication, missing approved review/decisionRef, missing rights for the
 * channel, and packages without the intended use.
 */
export function validateLearnerGate(pkg: ContentPackage, opts: LearnerGateOptions): ValidationResult {
  const issues: ValidationIssue[] = [];
  if (opts.channel !== 'learner') return { ok: true, issues };
  const path = `$.packages[${pkg.packageId}]`;
  if (pkg.purpose === 'review-fixture') issues.push(issue('LEARNER_REVIEW_FIXTURE', path, 'Review fixture cannot enter learner channel'));
  if (pkg.runtimeCompleteness !== 'complete') issues.push(issue('LEARNER_PARTIAL', path, 'runtimeCompleteness must be complete'));
  if (pkg.status.review !== 'approved') issues.push(issue('LEARNER_REVIEW_PENDING', path, 'Review not approved'));
  if (pkg.status.publication !== 'permitted') issues.push(issue('LEARNER_NOT_PERMITTED', path, `Publication status is ${pkg.status.publication}`));
  if (!pkg.status.decisionRef) issues.push(issue('LEARNER_NO_DECISION', path, 'Missing review decisionRef'));
  if (pkg.status.allowedUses.length === 0) issues.push(issue('LEARNER_NO_USES', path, 'No allowed uses'));
  for (const use of opts.intendedUses ?? []) {
    if (!pkg.status.allowedUses.includes(use)) issues.push(issue('LEARNER_USE_NOT_ALLOWED', path, `Use ${use} not allowed`));
  }
  if (pkg.rights.status !== 'permitted') issues.push(issue('LEARNER_RIGHTS', path, `Rights status is ${pkg.rights.status}`));
  if (!pkg.rights.channels.includes(opts.publicationChannel)) issues.push(issue('LEARNER_RIGHTS_CHANNEL', path, `Rights do not cover channel ${opts.publicationChannel}`));
  if (!pkg.rights.decisionRef) issues.push(issue('LEARNER_NO_RIGHTS_DECISION', path, 'Missing rights decisionRef'));
  return { ok: issues.length === 0, issues };
}

export function validateManifestStructure(data: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];
  if (!isRecord(data)) return { ok: false, issues: [issue('NOT_OBJECT', '$', 'Manifest must be a JSON object')] };
  const m = data;
  if (m['schemaVersion'] !== '1.0.0') issues.push(issue('SCHEMA_VERSION', '$.schemaVersion', 'Unsupported schemaVersion'));
  if (typeof m['releaseId'] !== 'string' || !ID_RE.test(m['releaseId'])) issues.push(issue('BAD_ID', '$.releaseId', 'Invalid releaseId'));
  if (typeof m['releaseSequence'] !== 'number' || !Number.isInteger(m['releaseSequence']) || m['releaseSequence'] < 1) issues.push(issue('BAD_SEQUENCE', '$.releaseSequence', 'releaseSequence must be a positive integer'));
  if (m['channel'] !== 'review' && m['channel'] !== 'learner') issues.push(issue('BAD_CHANNEL', '$.channel', 'Invalid channel'));
  const compat = m['compatibility'];
  if (!isRecord(compat) || typeof compat['contentSchemaVersion'] !== 'string' || typeof compat['minAppVersion'] !== 'string' || typeof compat['maxAppMajor'] !== 'number') {
    issues.push(issue('BAD_COMPAT', '$.compatibility', 'Invalid compatibility block'));
  }
  if (!Array.isArray(m['packages'])) issues.push(issue('BAD_PACKAGES', '$.packages', 'packages must be an array'));
  else {
    for (const [i, p] of (m['packages'] as unknown[]).entries()) {
      if (!isRecord(p)) { issues.push(issue('BAD_PACKAGE', `$.packages[${String(i)}]`, 'Entry must be an object')); continue; }
      if (typeof p['url'] !== 'string' || p['url'].length === 0) issues.push(issue('BAD_URL', `$.packages[${String(i)}]`, 'Missing url'));
      if (typeof p['sha256'] !== 'string' || !SHA_RE.test(p['sha256'])) issues.push(issue('BAD_SHA', `$.packages[${String(i)}]`, 'Invalid sha256'));
      if (typeof p['bytes'] !== 'number' || !Number.isInteger(p['bytes']) || p['bytes'] < 1) issues.push(issue('BAD_BYTES', `$.packages[${String(i)}]`, 'Invalid bytes'));
      if (typeof p['revision'] !== 'string' || !REV_RE.test(p['revision'])) issues.push(issue('BAD_REVISION', `$.packages[${String(i)}]`, 'Invalid revision'));
    }
  }
  if (!Array.isArray(m['withdrawals'])) issues.push(issue('BAD_WITHDRAWALS', '$.withdrawals', 'withdrawals must be an array'));
  if (typeof m['releaseNote'] !== 'string' || m['releaseNote'].length === 0) issues.push(issue('BAD_NOTE', '$.releaseNote', 'Missing releaseNote'));
  const channels = ['internal-review', 'internal-lan', 'public-noncommercial', 'public-commercial'];
  if (typeof m['publicationChannel'] !== 'string' || !channels.includes(m['publicationChannel'])) issues.push(issue('BAD_PUBCHANNEL', '$.publicationChannel', 'Invalid publicationChannel'));
  return { ok: issues.length === 0, issues };
}

/**
 * Manifest URL safety (schemas/README): relative to the manifest, same-origin,
 * within the configured content root, no `..` escapes, no absolute URLs to
 * other origins, no non-HTTPS/localhost protocols.
 */
export function validatePackageUrl(url: string): ValidationIssue | null {
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url) || url.startsWith('//')) {
    return issue('URL_ABSOLUTE', '$.packages.url', `Package URL must be relative to the manifest: ${url}`);
  }
  if (url.startsWith('/')) return issue('URL_ROOTED', '$.packages.url', `Package URL must not be root-absolute: ${url}`);
  const segments = url.split('/');
  let depth = 0;
  for (const seg of segments) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') {
      depth -= 1;
      if (depth < 0) return issue('URL_ESCAPES_ROOT', '$.packages.url', `Package URL escapes content root: ${url}`);
    } else depth += 1;
  }
  return null;
}

export function validateManifestSemantics(manifest: ContentManifest): ValidationResult {
  const issues: ValidationIssue[] = [];
  const seen = new Set<string>();
  for (const p of manifest.packages) {
    const key = `${p.packageId}@${p.revision}`;
    if (seen.has(key)) issues.push(issue('DUPLICATE_PACKAGE', `$.packages[${key}]`, 'Duplicate package entry'));
    seen.add(key);
    const urlIssue = validatePackageUrl(p.url);
    if (urlIssue) issues.push(urlIssue);
  }
  for (const w of manifest.withdrawals) {
    if (!ID_RE.test(w.decisionId) || !ID_RE.test(w.itemRef.id) || !REV_RE.test(w.itemRef.revision)) {
      issues.push(issue('BAD_WITHDRAWAL', `$.withdrawals[${w.decisionId}]`, 'Invalid withdrawal reference'));
    }
  }
  return { ok: issues.length === 0, issues };
}

export function combine(...results: ValidationResult[]): ValidationResult {
  const issues = results.flatMap((r) => r.issues);
  return { ok: issues.length === 0, issues };
}
