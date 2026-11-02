/**
 * Pure release planning used by build-release.ts (content:build / content:release):
 * which packages enter a channel, which are excluded and why, which exclusions must
 * refuse a strict learner release, and the cumulative withdrawal list for the manifest.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { ValidateFunction } from 'ajv';
import { validatePackageSemantics, validateLearnerGate } from '../../src/content/validate.ts';
import type { ContentPackage, Withdrawal } from '../../src/content/types.ts';
import { formatAjvErrors, schemaValid } from './lib.ts';

export type Channel = 'review' | 'learner';

export interface Exclusion {
  readonly id: string;
  readonly reasons: readonly string[];
  /**
   * The package was meant for learners (approved, permitted or with allowed uses) or is
   * broken (schema/semantics). Such exclusions refuse a strict learner release. A package
   * that is plainly still in review is skipped without refusing the release.
   */
  readonly blocking: boolean;
}

export interface ChannelPlan {
  readonly included: readonly ContentPackage[];
  readonly excluded: readonly Exclusion[];
}

export function readPackages(dir: string): ContentPackage[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.json')).sort()
    .map((f) => JSON.parse(readFileSync(resolve(dir, f), 'utf-8')) as ContentPackage);
}

const meantForLearners = (p: ContentPackage) =>
  p.status.review === 'approved' || p.status.publication === 'permitted' || p.status.allowedUses.length > 0;

export function planChannel(packages: readonly ContentPackage[], ch: Channel, contentPackageSchema: ValidateFunction): ChannelPlan {
  const included: ContentPackage[] = [];
  const excluded: Exclusion[] = [];
  const publicationChannel = ch === 'review' ? 'internal-review' : 'internal-lan';
  const seen = new Set<string>();
  for (const pkg of packages) {
    if (seen.has(pkg.packageId)) {
      excluded.push({ id: pkg.packageId, reasons: ['DUPLICATE_PACKAGE_ID'], blocking: true });
      continue;
    }
    seen.add(pkg.packageId);
    if (!schemaValid(contentPackageSchema, pkg)) {
      excluded.push({ id: pkg.packageId, reasons: [`schema: ${formatAjvErrors(contentPackageSchema)}`], blocking: true });
      continue;
    }
    const semantic = validatePackageSemantics(pkg);
    if (!semantic.ok) {
      excluded.push({ id: pkg.packageId, reasons: semantic.issues.map((i) => i.code), blocking: true });
      continue;
    }
    const gate = validateLearnerGate(pkg, { channel: ch, publicationChannel });
    if (!gate.ok) {
      excluded.push({ id: pkg.packageId, reasons: gate.issues.map((i) => i.code), blocking: meantForLearners(pkg) });
      continue;
    }
    // review channel also requires rights to cover internal-review
    if (ch === 'review' && !pkg.rights.channels.includes('internal-review')) {
      excluded.push({ id: pkg.packageId, reasons: ['RIGHTS_CHANNEL'], blocking: false });
      continue;
    }
    included.push(pkg);
  }
  return { included, excluded };
}

export interface WithdrawalCollection {
  readonly withdrawals: readonly Withdrawal[];
  readonly problems: readonly string[];
}

/** Cumulative withdrawals from content/withdrawals/*.json; a decisionId may appear once. */
export function collectWithdrawals(dir: string): WithdrawalCollection {
  const withdrawals: Withdrawal[] = [];
  const problems: string[] = [];
  if (!existsSync(dir)) return { withdrawals, problems };
  const byId = new Map<string, string>();
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.json')).sort()) {
    const list = JSON.parse(readFileSync(resolve(dir, f), 'utf-8')) as unknown;
    if (!Array.isArray(list)) {
      problems.push(`${f}: oczekiwano listy wycofań`);
      continue;
    }
    for (const w of list as Withdrawal[]) {
      const prev = byId.get(w.decisionId);
      if (prev) {
        problems.push(`${f}: wycofanie ${w.decisionId} występuje już w ${prev}`);
        continue;
      }
      byId.set(w.decisionId, f);
      withdrawals.push(w);
    }
  }
  return { withdrawals, problems };
}
