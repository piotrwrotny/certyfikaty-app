/**
 * IndexedDB model (docs/03). One database with separated object stores:
 * shared content stores (immutable payloads + release index) and learner
 * stores where every record carries an explicit profileId. The demo/review
 * fixture mode uses a differently named database and never auto-starts in the
 * learner build.
 */
import Dexie, { type EntityTable, type Transaction } from 'dexie';
import type { ContentManifest, ContentPackage, Withdrawal, Revision } from '@/content/types.ts';
import type { AnyAnswer, DecisionOutcome, ItemFormat, ScoreReason } from '@/domain/scoring.ts';

export const LEARNER_DB_NAME = 'ireb-cpre';
export const DEMO_DB_NAME = 'ireb-cpre-demo';
export const DB_VERSION = 1;

// ---------- Record types ----------

export interface ProfileRecord {
  id: string; // stable random UUID; never the name
  name: string;
  normalizedName: string; // NFC + trim + locale-independent case fold, for uniqueness
  createdAt: string;
  preferences: Record<string, unknown>;
}

export type AttemptKind = 'learning-item' | 'follow-up' | 'open-activity' | 'topic-test';
export type AttemptLifecycle = 'active' | 'paused' | 'finalized' | 'converted' | 'abandoned' | 'suspended-withdrawal';
export type AttemptMode = 'learning' | 'check';

export interface AttemptBreak {
  from: string;
  to?: string;
}

export interface PinnedItem {
  itemId: string;
  revision: Revision;
  snapshotKey: string; // key into snapshots store
}

export interface AttemptConditions {
  helpBeforeSubmit: boolean;
  knownDeclared: boolean;
  dictionaryAllowed: boolean;
  dictionaryUsed: boolean;
  noveltyAtStart: 'new' | 'known' | 'unconfirmed';
  intervalsAtStart: Record<string, { sinceIndependentAttemptMs: number | null; sinceRelevantContactMs: number | null }>;
}

export interface AttemptRecord {
  id: string;
  profileId: string;
  kind: AttemptKind;
  lifecycle: AttemptLifecycle;
  initialMode: AttemptMode; // immutable
  currentMode: AttemptMode; // changes only by irreversible conversion
  formRef?: { id: string; revision: Revision };
  sourceAttemptId?: string; // for follow-ups: the attempt they follow
  remediationId?: string;
  failedFollowUps?: number;
  contentReleaseId: string;
  pinnedItems: PinnedItem[];
  itemOrder: string[]; // itemInstanceIds in presentation order
  conditions: AttemptConditions;
  createdAt: string;
  updatedAt: string;
  finalizedAt?: string;
  convertedAt?: string;
  breaks: AttemptBreak[];
  versionCounter: number; // optimistic concurrency / lease
  leaseOwner?: string;
  leaseUntil?: number;
}

export interface AnswerRecord {
  profileId: string;
  attemptId: string;
  itemInstanceId: string; // `${itemId}@${revision}` within the attempt
  itemId: string;
  revision: Revision;
  format: ItemFormat;
  value: AnyAnswer;
  state: 'draft' | 'submitted';
  flagged: boolean;
  responseVersion: number;
  updatedAt: string;
  submittedAt?: string;
}

export interface EvaluationRecord {
  id: string;
  profileId: string;
  attemptId: string;
  itemInstanceId: string;
  scoringVersion: string;
  points: { numerator: number; denominator: number };
  maxPoints: { numerator: number; denominator: number };
  reason: ScoreReason;
  decisionOutcomes: Record<string, DecisionOutcome>;
  sourceRevision: Revision;
  assessedAt: string;
  evaluationMethod: 'key' | 'rubric-self' | 'rubric-reviewer';
  /** Original evaluations are never overwritten; corrections are separate records. */
  correctionOf?: string;
  correctionReason?: string;
}

export type ExposureKind =
  | 'item-stem'
  | 'item-solution'
  | 'rationale'
  | 'knowledge'
  | 'rule'
  | 'remediation'
  | 'open-model-answer'
  | 'intro';

export interface ExposureRecord {
  id: string;
  profileId: string;
  kind: ExposureKind;
  refId: string;
  refRevision: Revision;
  familyId?: string;
  attemptId?: string;
  criterionId?: string;
  aspectId?: string;
  origin: 'learning' | 'check-review' | 'help' | 'feedback' | 'knowledge' | 'import';
  revealedAt: string;
}

export interface ContactRecord {
  id: string;
  profileId: string;
  criterionId: string;
  aspectId?: string;
  kind: 'independent-attempt' | 'relevant-contact';
  sourceKind: 'attempt' | 'knowledge' | 'rationale' | 'remediation' | 'declared-external';
  sourceId: string;
  at: string;
}

export interface NavigationContextRecord {
  id: string;
  profileId: string;
  attemptId: string;
  itemInstanceId: string;
  revision: Revision;
  anchorDecisionId?: string;
  reveals: string[];
  openSections: string[];
  scrollY: number;
  focusTarget?: string;
  branchStack: { kind: string; refId: string; revision: Revision }[];
  updatedAt: string;
}

export interface EvidenceRecord {
  id: string;
  profileId: string;
  criterionId: string;
  aspectId?: string;
  category: 'brak-danych' | 'poznane-z-pomoca' | 'wykazane-samodzielnie' | 'wykazane-w-nowym-kontekscie' | 'utrzymane-po-przerwie';
  sourceAttemptId: string;
  sourceEvaluationId: string;
  conditions: string[];
  limitations: string[];
  recordedAt: string;
}

export interface PlanRecord {
  id: string;
  profileId: string;
  kind: 'goal' | 'suspended-learning' | 'recheck-flag';
  criterionId?: string;
  payload: Record<string, unknown>;
  updatedAt: string;
}

export interface IssueRecord {
  id: string;
  profileId: string;
  itemId: string;
  revision: Revision;
  attemptId?: string;
  kind: string;
  comment: string;
  contentReleaseId: string;
  createdAt: string;
}

export type ReleaseState = 'staging' | 'ready' | 'active' | 'superseded' | 'rejected';

export interface ContentReleaseRecord {
  releaseId: string;
  releaseSequence: number;
  channel: 'review' | 'learner';
  manifest: ContentManifest;
  manifestSha256: string;
  state: ReleaseState;
  validationComplete: boolean;
  stagedAt: string;
  activatedAt?: string;
}

export interface ContentPackageRecord {
  key: string; // `${packageId}@${revision}`
  packageId: string;
  revision: Revision;
  sha256: string;
  bytes: number;
  payload: ContentPackage;
  storedAt: string;
}

export interface SnapshotRecord {
  key: string; // `${itemId}@${revision}`
  itemId: string;
  revision: Revision;
  payload: Record<string, unknown>;
  storedAt: string;
}

export interface WithdrawalRecord {
  decisionId: string;
  withdrawal: Withdrawal;
  sourceReleaseId: string;
  receivedAt: string;
}

export interface AppStateRecord {
  key: string;
  value: unknown;
}

// ---------- Database ----------

export class CpreDb extends Dexie {
  profiles!: EntityTable<ProfileRecord, 'id'>;
  attempts!: EntityTable<AttemptRecord, 'id'>;
  answers!: Dexie.Table<AnswerRecord, [string, string, string]>;
  evaluations!: EntityTable<EvaluationRecord, 'id'>;
  exposures!: EntityTable<ExposureRecord, 'id'>;
  contacts!: EntityTable<ContactRecord, 'id'>;
  navigationContexts!: EntityTable<NavigationContextRecord, 'id'>;
  evidence!: EntityTable<EvidenceRecord, 'id'>;
  plans!: EntityTable<PlanRecord, 'id'>;
  issues!: EntityTable<IssueRecord, 'id'>;
  contentReleases!: EntityTable<ContentReleaseRecord, 'releaseId'>;
  contentPackages!: EntityTable<ContentPackageRecord, 'key'>;
  snapshots!: EntityTable<SnapshotRecord, 'key'>;
  withdrawals!: EntityTable<WithdrawalRecord, 'decisionId'>;
  appState!: EntityTable<AppStateRecord, 'key'>;

  constructor(name: string) {
    super(name);
    this.version(DB_VERSION).stores({
      profiles: 'id, normalizedName',
      attempts: 'id, profileId, [profileId+lifecycle], [profileId+kind]',
      answers: '[profileId+attemptId+itemInstanceId], [profileId+attemptId]',
      evaluations: 'id, [profileId+attemptId], [profileId+itemInstanceId]',
      exposures: 'id, [profileId+refId], [profileId+familyId], [profileId+criterionId], profileId',
      contacts: 'id, [profileId+criterionId], profileId',
      navigationContexts: 'id, [profileId+attemptId]',
      evidence: 'id, [profileId+criterionId], profileId',
      plans: 'id, [profileId+kind], profileId',
      issues: 'id, profileId',
      contentReleases: 'releaseId, releaseSequence, state',
      contentPackages: 'key, packageId',
      snapshots: 'key',
      withdrawals: 'decisionId',
      appState: 'key',
    });
  }
}

const LEARNER_STORES = [
  'attempts', 'answers', 'evaluations', 'exposures', 'contacts',
  'navigationContexts', 'evidence', 'plans', 'issues',
] as const;

export type LearnerStoreName = (typeof LEARNER_STORES)[number];
export const learnerStores: readonly LearnerStoreName[] = LEARNER_STORES;

export class MissingProfileError extends Error {
  constructor() {
    super('Operacja aktywności wymaga jawnego profileId');
    this.name = 'MissingProfileError';
  }
}

export function requireProfileId(profileId: string | null | undefined): string {
  if (typeof profileId !== 'string' || profileId.length === 0) throw new MissingProfileError();
  return profileId;
}

export interface DbOpenResult {
  db: CpreDb;
  blocked: boolean;
}

/**
 * Opens the database. `versionchange` from another tab closes this connection
 * gracefully; `blocked` lets the UI explain that another tab holds an old
 * version. The database is never deleted as a recovery step.
 */
export class NewerDatabaseError extends Error {
  constructor() {
    super('Database was created by a newer app version');
    this.name = 'NewerDatabaseError';
  }
}

export async function openDb(name = LEARNER_DB_NAME, onVersionChange?: () => void): Promise<CpreDb> {
  const db = new CpreDb(name);
  db.on('versionchange', () => {
    db.close();
    onVersionChange?.();
  });
  await db.open();
  // Dexie may open a database upgraded by a newer app; refuse to write into an unknown schema.
  if (db.backendDB().version > DB_VERSION * 10) {
    db.close();
    throw new NewerDatabaseError();
  }
  return db;
}

export type Tx = Transaction;
