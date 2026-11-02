/**
 * content:lint / content:convert for the authoring format (docs/13).
 *
 *   tsx scripts/content/authoring-cli.ts lint [katalog tematu …]
 *   tsx scripts/content/authoring-cli.ts convert [katalog tematu …] [--replace-import]
 *
 * Without directories: every topic in content/authoring except names starting with _ or .
 * Exit code: 0 = no errors (warnings allowed), 1 = errors, 2 = wrong usage.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { parse as parseYaml } from 'yaml';
import type { ContentPackage, Withdrawal } from '../../src/content/types.ts';
import { validateLearnerGate } from '../../src/content/validate.ts';
import { AUTHORING_FORMAT, loadAuthoringValidators } from './authoring.ts';
import { convertModel, convertWithdrawals, hasErrors, lintTopic, renderReport, validateConverted, type LintIssue } from './authoring-convert.ts';
import { ROOT, stableJson } from './lib.ts';

const AUTHORING_DIR = resolve(ROOT, 'content/authoring');
const NORMALIZED_DIR = resolve(ROOT, 'content/normalized');
const WITHDRAWALS_DIR = resolve(ROOT, 'content/withdrawals');

const [command, ...rest] = process.argv.slice(2);
const replaceImport = rest.includes('--replace-import');
const dirsArg = rest.filter((a) => !a.startsWith('--'));
if (command !== 'lint' && command !== 'convert') {
  console.error('Użycie: authoring-cli.ts lint|convert [katalog tematu …] [--replace-import]');
  process.exit(2);
}

function topicDirs(): string[] {
  if (dirsArg.length > 0) return dirsArg.map((d) => resolve(process.cwd(), d));
  if (!existsSync(AUTHORING_DIR)) return [];
  return readdirSync(AUTHORING_DIR)
    .filter((n) => !n.startsWith('_') && !n.startsWith('.'))
    .map((n) => resolve(AUTHORING_DIR, n))
    .filter((p) => statSync(p).isDirectory())
    .sort();
}

interface NormalizedFile { readonly file: string; readonly pkg: ContentPackage }
function corpus(): NormalizedFile[] {
  if (!existsSync(NORMALIZED_DIR)) return [];
  return readdirSync(NORMALIZED_DIR).filter((f) => f.endsWith('.json')).sort()
    .map((file) => ({ file, pkg: JSON.parse(readFileSync(resolve(NORMALIZED_DIR, file), 'utf-8')) as ContentPackage }));
}

function withdrawalFiles(): Map<string, Withdrawal[]> {
  const out = new Map<string, Withdrawal[]>();
  if (!existsSync(WITHDRAWALS_DIR)) return out;
  for (const f of readdirSync(WITHDRAWALS_DIR).filter((n) => n.endsWith('.json'))) {
    out.set(f.replace(/\.json$/, ''), JSON.parse(readFileSync(resolve(WITHDRAWALS_DIR, f), 'utf-8')) as Withdrawal[]);
  }
  return out;
}

function topicIdOf(dir: string): string | null {
  const p = resolve(dir, 'topic.yaml');
  if (!existsSync(p)) return null;
  try {
    const data = parseYaml(readFileSync(p, 'utf-8')) as { id?: unknown } | null;
    return typeof data?.id === 'string' ? data.id : null;
  } catch {
    return null;
  }
}

const fromAuthoring = (pkg: ContentPackage) => pkg.provenance.some((p) => p.storedFileVersion === AUTHORING_FORMAT);
const rel = (abs: string) => relative(ROOT, abs).split(sep).join('/');

function print(dir: string, label: string, issues: readonly LintIssue[]): void {
  const errors = issues.filter((i) => i.severity === 'error').length;
  const warnings = issues.length - errors;
  console.log(`\n${label} (${rel(dir)}): ${String(errors)} błędów, ${String(warnings)} ostrzeżeń`);
  for (const i of issues) {
    console.log(`  ${i.severity === 'error' ? 'BŁĄD ' : 'UWAGA'} ${i.file}${i.field ? `  ${i.field}` : ''}: ${i.message}`);
  }
}

const dirs = topicDirs();
if (dirs.length === 0) {
  console.log('Brak tematów w content/authoring. Wzory są w content/authoring/_templates.');
  process.exit(0);
}

const validators = loadAuthoringValidators();
const all = corpus();
const allWithdrawals = withdrawalFiles();
let failed = false;

for (const dir of dirs) {
  const id = topicIdOf(dir);
  const previousFile = id ? all.find((n) => n.pkg.packageId === id) ?? null : null;
  const others = all.filter((n) => n.pkg.packageId !== id).map((n) => n.pkg);
  const underAuthoring = rel(dir).startsWith('content/authoring/');
  const issues: LintIssue[] = [];
  if (previousFile && !fromAuthoring(previousFile.pkg) && !replaceImport) {
    issues.push({
      severity: 'error', file: 'topic.yaml', field: 'id',
      message: `content/normalized/${previousFile.file} ma ten sam packageId, ale nie pochodzi z formatu autorskiego. Użyj innego id albo uruchom convert z --replace-import.`,
    });
  }
  const previous = previousFile && fromAuthoring(previousFile.pkg) ? previousFile.pkg : null;
  const previousWithdrawals = id ? allWithdrawals.get(id) ?? [] : [];
  const otherWithdrawalIds = [...allWithdrawals].filter(([k]) => k !== id).flatMap(([, ws]) => ws.map((w) => w.decisionId));
  const lint = lintTopic(dir, { expectDirName: underAuthoring, previous, otherPackages: others, previousWithdrawals, otherWithdrawalIds }, validators);
  issues.push(...lint.issues);
  const label = `${id ?? '?'} ${lint.model?.topic.data.revision ?? ''}`.trim();

  if (command === 'lint' || hasErrors(issues) || !lint.model) {
    print(dir, label, issues);
    if (hasErrors(issues)) failed = true;
    continue;
  }

  const pkg = convertModel(lint.model);
  issues.push(...validateConverted(pkg));
  if (hasErrors(issues)) {
    print(dir, label, issues);
    failed = true;
    continue;
  }

  const fileName = `${pkg.packageId}.${pkg.revision}.json`;
  const json = stableJson(pkg);
  writeFileSync(resolve(NORMALIZED_DIR, fileName), json, 'utf-8');
  const removed: string[] = [];
  for (const n of all) {
    if (n.pkg.packageId === pkg.packageId && n.file !== fileName) {
      rmSync(resolve(NORMALIZED_DIR, n.file));
      removed.push(n.file);
    }
  }
  const learnerGate = validateLearnerGate(pkg, { channel: 'learner', publicationChannel: 'internal-lan' }).issues.map((i) => i.code);
  const report = renderReport({
    model: lint.model, pkg, issues, previous,
    outputPath: `content/normalized/${fileName}`,
    outputSha256: createHash('sha256').update(json).digest('hex'),
    date: new Date().toISOString().slice(0, 10),
    reviewChannel: pkg.rights.channels.includes('internal-review'),
    learnerGate,
  });
  const reportPath = resolve(NORMALIZED_DIR, `${pkg.packageId}-AUTHORING_REPORT.md`);
  writeFileSync(reportPath, report, 'utf-8');
  const withdrawals = convertWithdrawals(lint.model);
  const withdrawalsPath = resolve(WITHDRAWALS_DIR, `${pkg.packageId}.json`);
  if (withdrawals.length > 0) {
    mkdirSync(WITHDRAWALS_DIR, { recursive: true });
    writeFileSync(withdrawalsPath, stableJson(withdrawals), 'utf-8');
  }
  print(dir, label, issues);
  console.log(`  Zapisano content/normalized/${fileName} i ${rel(reportPath)}.`);
  if (withdrawals.length > 0) console.log(`  Zapisano ${rel(withdrawalsPath)} (${String(withdrawals.length)} wycofań).`);
  if (removed.length > 0) console.log(`  Usunięto poprzednie rewizje: ${removed.join(', ')}.`);
  console.log(`  Kanał recenzencki: ${pkg.rights.channels.includes('internal-review') ? 'tak' : 'nie'}. Kanał ucznia: ${learnerGate.length === 0 ? 'tak' : `nie (${learnerGate.join(', ')})`}.`);
}

process.exit(failed ? 1 : 0);
