/**
 * Read access to the active content release (selectors). Active attempts keep
 * their pinned snapshots; new activities use the active compatible release.
 * Review-only packages are rejected by the learner gate at staging time; the
 * selectors additionally refuse to serve items from withdrawn revisions.
 */
import type { CpreDb, SnapshotRecord } from '@/data/db.ts';
import type { ContentPackage, Question, Knowledge, Remediation, Rule, Criterion, TestForm, OpenActivity, Withdrawal } from './types.ts';

export interface ActiveContent {
  releaseId: string;
  packages: readonly ContentPackage[];
}

export class ContentStore {
  constructor(private readonly db: CpreDb) {}

  async getActiveContent(): Promise<ActiveContent | null> {
    const pointer = await this.db.appState.get('activeContentReleaseId');
    if (typeof pointer?.value !== 'string') return null;
    const release = await this.db.contentReleases.get(pointer.value);
    if (!release || release.state !== 'active') return null;
    const packages: ContentPackage[] = [];
    for (const entry of release.manifest.packages) {
      const stored = await this.db.contentPackages.get(`${entry.packageId}@${entry.revision}`);
      if (!stored) return null; // pointer must never reference missing packages
      packages.push(stored.payload);
    }
    return { releaseId: release.releaseId, packages };
  }

  async getWithdrawals(): Promise<Withdrawal[]> {
    const rows = await this.db.withdrawals.toArray();
    return rows.map((r) => r.withdrawal);
  }

  async isWithdrawn(itemId: string, revision: string): Promise<Withdrawal | null> {
    const rows = await this.db.withdrawals.toArray();
    return rows.find((r) => r.withdrawal.itemRef.id === itemId && r.withdrawal.itemRef.revision === revision)?.withdrawal ?? null;
  }

  /** Store an immutable snapshot of a question for attempt pinning. */
  async pinSnapshot(question: Question): Promise<SnapshotRecord> {
    const key = `${question.id}@${question.revision}`;
    const existing = await this.db.snapshots.get(key);
    if (existing) return existing;
    const record: SnapshotRecord = {
      key,
      itemId: question.id,
      revision: question.revision,
      payload: structuredClone(question) as unknown as Record<string, unknown>,
      storedAt: new Date().toISOString(),
    };
    await this.db.snapshots.add(record);
    return record;
  }

  async getSnapshot(key: string): Promise<Question | null> {
    const snap = await this.db.snapshots.get(key);
    return snap ? (snap.payload as unknown as Question) : null;
  }
}

// ---------- Pure selectors over package payloads ----------

export function findQuestion(packages: readonly ContentPackage[], itemId: string): { pkg: ContentPackage; question: Question } | null {
  for (const pkg of packages) {
    const question = pkg.questions.find((q) => q.id === itemId);
    if (question) return { pkg, question };
  }
  return null;
}

export function findKnowledge(packages: readonly ContentPackage[], id: string): Knowledge | null {
  for (const pkg of packages) {
    const k = pkg.knowledge.find((n) => n.id === id);
    if (k) return k;
  }
  return null;
}

export function findRule(packages: readonly ContentPackage[], id: string): Rule | null {
  for (const pkg of packages) {
    const r = pkg.rules.find((x) => x.id === id);
    if (r) return r;
  }
  return null;
}

export function findRemediationForScope(packages: readonly ContentPackage[], criterionId: string, aspectId?: string): Remediation | null {
  for (const pkg of packages) {
    const rem = pkg.remediations.find((r) => r.scope.criterionId === criterionId && (aspectId === undefined || r.scope.aspectId === undefined || r.scope.aspectId === aspectId));
    if (rem) return rem;
  }
  return null;
}

export function listCriteria(packages: readonly ContentPackage[]): Criterion[] {
  return packages.flatMap((p) => [...p.criteria]);
}

export function listKnowledge(packages: readonly ContentPackage[]): Knowledge[] {
  return packages.flatMap((p) => [...p.knowledge]);
}

export function listOpenActivities(packages: readonly ContentPackage[]): OpenActivity[] {
  return packages.flatMap((p) => [...p.openActivities]);
}

/**
 * Forms eligible for a topic test: the form itself must be approved and
 * permitted for topic-test use. Having 32 questions never creates a form
 * (docs/01); no automatic D01–08 fallback.
 */
export function eligibleForms(packages: readonly ContentPackage[]): { pkg: ContentPackage; form: TestForm }[] {
  const out: { pkg: ContentPackage; form: TestForm }[] = [];
  for (const pkg of packages) {
    for (const form of pkg.forms) {
      if (form.status.review === 'approved' && form.status.publication === 'permitted' && form.status.allowedUses.includes('topic-test')) {
        out.push({ pkg, form });
      }
    }
  }
  return out;
}

export function familyIdOf(packages: readonly ContentPackage[], itemId: string): string | undefined {
  return findQuestion(packages, itemId)?.question.familyRef.id;
}
