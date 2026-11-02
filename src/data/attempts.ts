/**
 * Attempt lifecycle, drafts, submits and the single-writer lease (docs/03,
 * docs/06). Submit/finalize are single transactions guarded by versionCounter
 * compare-and-swap; a second tab's stale write is a detected conflict, never
 * silent last-write-wins (QA-04).
 */
import type { AnyAnswer, ItemFormat, ScoreResult } from '@/domain/scoring.ts';
import type { AttemptKind, AttemptMode, AttemptRecord, AnswerRecord, CpreDb, EvaluationRecord, PinnedItem, AttemptConditions } from './db.ts';
import { requireProfileId } from './db.ts';

export const SCORING_VERSION = 'SCORE-1.0.0';
export const LEASE_MS = 30_000;

export class WriteConflictError extends Error {
  constructor(message = 'Inna karta zapisała nowszą wersję tej próby') {
    super(message);
    this.name = 'WriteConflictError';
  }
}
export class LeaseHeldError extends Error {
  constructor() {
    super('Inna karta edytuje tę próbę');
    this.name = 'LeaseHeldError';
  }
}
export class AlreadySubmittedError extends Error {
  constructor() {
    super('Odpowiedź została już oddana i nie może być nadpisana');
    this.name = 'AlreadySubmittedError';
  }
}

export interface NewAttemptInput {
  profileId: string;
  kind: AttemptKind;
  mode: AttemptMode;
  contentReleaseId: string;
  pinnedItems: PinnedItem[];
  itemOrder: string[];
  conditions: AttemptConditions;
  formRef?: { id: string; revision: string };
  sourceAttemptId?: string;
  remediationId?: string;
}

export function itemInstanceId(itemId: string, revision: string): string {
  return `${itemId}@${revision}`;
}

export class AttemptRepository {
  constructor(
    private readonly db: CpreDb,
    /** Identifies this tab as a lease owner. */
    private readonly writerId: string = crypto.randomUUID(),
  ) {}

  get ownWriterId(): string {
    return this.writerId;
  }

  async get(profileId: string, attemptId: string): Promise<AttemptRecord | undefined> {
    requireProfileId(profileId);
    const attempt = await this.db.attempts.get(attemptId);
    return attempt && attempt.profileId === profileId ? attempt : undefined;
  }

  async create(input: NewAttemptInput): Promise<AttemptRecord> {
    requireProfileId(input.profileId);
    const now = new Date().toISOString();
    const record: AttemptRecord = {
      id: crypto.randomUUID(),
      profileId: input.profileId,
      kind: input.kind,
      lifecycle: 'active',
      initialMode: input.mode,
      currentMode: input.mode,
      contentReleaseId: input.contentReleaseId,
      pinnedItems: input.pinnedItems,
      itemOrder: input.itemOrder,
      conditions: input.conditions,
      createdAt: now,
      updatedAt: now,
      breaks: [],
      versionCounter: 1,
      leaseOwner: this.writerId,
      leaseUntil: Date.now() + LEASE_MS,
      ...(input.formRef ? { formRef: input.formRef } : {}),
      ...(input.sourceAttemptId ? { sourceAttemptId: input.sourceAttemptId } : {}),
      ...(input.remediationId ? { remediationId: input.remediationId } : {}),
    };
    await this.db.attempts.add(record);
    return record;
  }

  /**
   * Atomic attempt mutation with version CAS + lease. `expectedVersion` must
   * match the stored record or WriteConflictError is thrown.
   */
  private async mutate(
    profileId: string,
    attemptId: string,
    expectedVersion: number,
    change: (a: AttemptRecord) => AttemptRecord,
    opts: { takeover?: boolean; releaseLease?: boolean } = {},
  ): Promise<AttemptRecord> {
    requireProfileId(profileId);
    return this.db.transaction('rw', this.db.attempts, async () => {
      const current = await this.db.attempts.get(attemptId);
      if (!current || current.profileId !== profileId) throw new WriteConflictError('Próba nie istnieje w tym profilu');
      if (current.versionCounter !== expectedVersion) throw new WriteConflictError();
      const now = Date.now();
      const leaseForeign = current.leaseOwner !== undefined && current.leaseOwner !== this.writerId && (current.leaseUntil ?? 0) > now;
      if (leaseForeign && !opts.takeover) throw new LeaseHeldError();
      const changed = change(current);
      const next: AttemptRecord = {
        ...changed,
        versionCounter: current.versionCounter + 1,
        updatedAt: new Date().toISOString(),
        leaseOwner: this.writerId,
        leaseUntil: opts.releaseLease ? 0 : now + LEASE_MS,
      };
      if (opts.releaseLease) delete next.leaseOwner;
      await this.db.attempts.put(next);
      return next;
    });
  }

  async renewLease(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => a);
  }

  /** Release this tab's lease (profile switch, page hide) without changing lifecycle. */
  async releaseLease(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => a, { releaseLease: true });
  }

  /** Persist a change of attempt conditions (e.g. help before submit) BEFORE the help is revealed. */
  async setConditions(profileId: string, attempt: AttemptRecord, patch: Partial<AttemptRecord['conditions']>): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => ({ ...a, conditions: { ...a.conditions, ...patch } }), { takeover: true });
  }

  async setFailedFollowUps(profileId: string, attempt: AttemptRecord, failed: number): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => ({ ...a, failedFollowUps: failed }), { takeover: true });
  }

  /** Mark a learning attempt as abandoned without deleting anything (e.g. neutral exit on withdrawal). */
  async abandon(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => ({
      ...a,
      lifecycle: a.lifecycle === 'active' || a.lifecycle === 'paused' || a.lifecycle === 'suspended-withdrawal' ? 'abandoned' : a.lifecycle,
    }), { takeover: true, releaseLease: true });
  }

  async listByProfile(profileId: string): Promise<AttemptRecord[]> {
    requireProfileId(profileId);
    return this.db.attempts.where('profileId').equals(profileId).toArray();
  }

  /** Explicit takeover after a lost lease (user-confirmed). */
  async takeOver(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => a, { takeover: true });
  }

  async saveDraft(profileId: string, attempt: AttemptRecord, params: {
    itemId: string;
    revision: string;
    format: ItemFormat;
    value: AnyAnswer;
    flagged?: boolean;
  }): Promise<{ attempt: AttemptRecord; answer: AnswerRecord }> {
    requireProfileId(profileId);
    const instance = itemInstanceId(params.itemId, params.revision);
    return this.db.transaction('rw', [this.db.attempts, this.db.answers], async () => {
      const current = await this.db.attempts.get(attempt.id);
      if (!current || current.profileId !== profileId) throw new WriteConflictError('Próba nie istnieje w tym profilu');
      if (current.versionCounter !== attempt.versionCounter) throw new WriteConflictError();
      if (current.lifecycle === 'finalized') throw new AlreadySubmittedError();
      const existing = await this.db.answers.get([profileId, attempt.id, instance]);
      if (existing?.state === 'submitted' && current.currentMode === 'learning') throw new AlreadySubmittedError();
      const answer: AnswerRecord = {
        profileId,
        attemptId: attempt.id,
        itemInstanceId: instance,
        itemId: params.itemId,
        revision: params.revision,
        format: params.format,
        value: params.value,
        state: existing?.state === 'submitted' ? 'submitted' : 'draft',
        flagged: params.flagged ?? existing?.flagged ?? false,
        responseVersion: (existing?.responseVersion ?? 0) + 1,
        updatedAt: new Date().toISOString(),
        ...(existing?.submittedAt ? { submittedAt: existing.submittedAt } : {}),
      };
      // Submitted answers are immutable in learning mode; in check mode drafts stay editable until finalization.
      if (existing?.state === 'submitted' && current.currentMode === 'check') {
        throw new AlreadySubmittedError();
      }
      await this.db.answers.put(answer);
      const nextAttempt: AttemptRecord = { ...current, versionCounter: current.versionCounter + 1, updatedAt: answer.updatedAt, leaseOwner: this.writerId, leaseUntil: Date.now() + LEASE_MS };
      await this.db.attempts.put(nextAttempt);
      return { attempt: nextAttempt, answer };
    });
  }

  /**
   * Learning-mode submit of a single item: idempotent commit of answer +
   * evaluation in one transaction. Re-running with the same instance returns
   * the stored evaluation without creating a new one.
   */
  async submitItem(profileId: string, attempt: AttemptRecord, params: {
    itemId: string;
    revision: string;
    format: ItemFormat;
    value: AnyAnswer;
    scoreResult: ScoreResult;
  }): Promise<{ attempt: AttemptRecord; answer: AnswerRecord; evaluation: EvaluationRecord }> {
    requireProfileId(profileId);
    const instance = itemInstanceId(params.itemId, params.revision);
    return this.db.transaction('rw', [this.db.attempts, this.db.answers, this.db.evaluations], async () => {
      const current = await this.db.attempts.get(attempt.id);
      if (!current || current.profileId !== profileId) throw new WriteConflictError('Próba nie istnieje w tym profilu');
      if (current.versionCounter !== attempt.versionCounter) throw new WriteConflictError();
      const existing = await this.db.answers.get([profileId, attempt.id, instance]);
      if (existing?.state === 'submitted') {
        const evaluation = await this.db.evaluations.where('[profileId+attemptId]').equals([profileId, attempt.id]).filter((e) => e.itemInstanceId === instance && !e.correctionOf).first();
        if (evaluation) return { attempt: current, answer: existing, evaluation };
      }
      const now = new Date().toISOString();
      const answer: AnswerRecord = {
        profileId,
        attemptId: attempt.id,
        itemInstanceId: instance,
        itemId: params.itemId,
        revision: params.revision,
        format: params.format,
        value: params.value,
        state: 'submitted',
        flagged: existing?.flagged ?? false,
        responseVersion: (existing?.responseVersion ?? 0) + 1,
        updatedAt: now,
        submittedAt: now,
      };
      const evaluation: EvaluationRecord = {
        id: crypto.randomUUID(),
        profileId,
        attemptId: attempt.id,
        itemInstanceId: instance,
        scoringVersion: SCORING_VERSION,
        points: { numerator: params.scoreResult.points.numerator, denominator: params.scoreResult.points.denominator },
        maxPoints: { numerator: params.scoreResult.maxPoints.numerator, denominator: params.scoreResult.maxPoints.denominator },
        reason: params.scoreResult.reason,
        decisionOutcomes: { ...params.scoreResult.decisionOutcomes },
        sourceRevision: params.revision,
        assessedAt: now,
        evaluationMethod: 'key',
      };
      await this.db.answers.put(answer);
      await this.db.evaluations.add(evaluation);
      const nextAttempt: AttemptRecord = { ...current, versionCounter: current.versionCounter + 1, updatedAt: now, leaseOwner: this.writerId, leaseUntil: Date.now() + LEASE_MS };
      await this.db.attempts.put(nextAttempt);
      return { attempt: nextAttempt, answer, evaluation };
    });
  }

  /**
   * Finalize a whole check-mode form idempotently: submitted answers are
   * closed and evaluated in one commit. Double finalize returns existing
   * evaluations without new attempts or changed results (QA-15).
   */
  async finalize(profileId: string, attempt: AttemptRecord, evaluate: (answer: AnswerRecord) => ScoreResult): Promise<{ attempt: AttemptRecord; evaluations: EvaluationRecord[] }> {
    requireProfileId(profileId);
    return this.db.transaction('rw', [this.db.attempts, this.db.answers, this.db.evaluations], async () => {
      const current = await this.db.attempts.get(attempt.id);
      if (!current || current.profileId !== profileId) throw new WriteConflictError('Próba nie istnieje w tym profilu');
      if (current.lifecycle === 'finalized') {
        const existing = await this.db.evaluations.where('[profileId+attemptId]').equals([profileId, attempt.id]).toArray();
        return { attempt: current, evaluations: existing };
      }
      if (current.versionCounter !== attempt.versionCounter) throw new WriteConflictError();
      const now = new Date().toISOString();
      const answers = await this.db.answers.where('[profileId+attemptId]').equals([profileId, attempt.id]).toArray();
      const evaluations: EvaluationRecord[] = [];
      for (const a of answers) {
        const closed: AnswerRecord = { ...a, state: 'submitted', submittedAt: now, updatedAt: now };
        await this.db.answers.put(closed);
        const result = evaluate(closed);
        const evaluation: EvaluationRecord = {
          id: crypto.randomUUID(),
          profileId,
          attemptId: attempt.id,
          itemInstanceId: a.itemInstanceId,
          scoringVersion: SCORING_VERSION,
          points: { numerator: result.points.numerator, denominator: result.points.denominator },
          maxPoints: { numerator: result.maxPoints.numerator, denominator: result.maxPoints.denominator },
          reason: result.reason,
          decisionOutcomes: { ...result.decisionOutcomes },
          sourceRevision: a.revision,
          assessedAt: now,
          evaluationMethod: 'key',
        };
        await this.db.evaluations.add(evaluation);
        evaluations.push(evaluation);
      }
      const nextAttempt: AttemptRecord = {
        ...current,
        lifecycle: 'finalized',
        finalizedAt: now,
        versionCounter: current.versionCounter + 1,
        updatedAt: now,
        leaseOwner: this.writerId,
        leaseUntil: Date.now() + LEASE_MS,
      };
      await this.db.attempts.put(nextAttempt);
      return { attempt: nextAttempt, evaluations };
    });
  }

  /** Pause a check attempt (profile switch, exit, app update); same attempt resumes later. */
  async pause(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => {
      if (a.lifecycle !== 'active') return a;
      return { ...a, lifecycle: 'paused', breaks: [...a.breaks, { from: new Date().toISOString() }] };
    }, { releaseLease: true });
  }

  async resume(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => {
      if (a.lifecycle !== 'paused') return a;
      const breaks = [...a.breaks];
      const last = breaks[breaks.length - 1];
      if (last && !last.to) breaks[breaks.length - 1] = { ...last, to: new Date().toISOString() };
      return { ...a, lifecycle: 'active', breaks };
    }, { takeover: true });
  }

  /**
   * Irreversible conversion of a whole check attempt to learning. Submitted
   * answers and their original conditions are kept; the attempt can never
   * regain independent-check status (docs/06, QA-16).
   */
  async convertToLearning(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => {
      if (a.currentMode !== 'check' || a.lifecycle === 'finalized') return a;
      return { ...a, currentMode: 'learning', lifecycle: 'converted', convertedAt: new Date().toISOString() };
    }, { takeover: true });
  }

  /** Neutral suspension when a critical withdrawal hits an active check (QA-28). */
  async suspendForWithdrawal(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    return this.mutate(profileId, attempt.id, attempt.versionCounter, (a) => ({ ...a, lifecycle: 'suspended-withdrawal' }), { takeover: true });
  }

  async listAnswers(profileId: string, attemptId: string): Promise<AnswerRecord[]> {
    requireProfileId(profileId);
    return this.db.answers.where('[profileId+attemptId]').equals([profileId, attemptId]).toArray();
  }

  async listEvaluations(profileId: string, attemptId: string): Promise<EvaluationRecord[]> {
    requireProfileId(profileId);
    return this.db.evaluations.where('[profileId+attemptId]').equals([profileId, attemptId]).toArray();
  }

  async findActive(profileId: string): Promise<AttemptRecord[]> {
    requireProfileId(profileId);
    const states: AttemptRecord['lifecycle'][] = ['active', 'paused'];
    const out: AttemptRecord[] = [];
    for (const s of states) {
      out.push(...(await this.db.attempts.where('[profileId+lifecycle]').equals([profileId, s]).toArray()));
    }
    return out;
  }
}
