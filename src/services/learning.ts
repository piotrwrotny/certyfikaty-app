/**
 * Learning/Check orchestration over the repositories. React views call these
 * services; scoring and evidence rules stay in src/domain and src/data.
 * Every call takes an explicit profileId captured at the call site; async
 * continuations never write to a different (newly selected) profile.
 */
import type { CpreDb, AttemptRecord, AnswerRecord, EvaluationRecord, NavigationContextRecord, PlanRecord } from '@/data/db.ts';
import { requireProfileId } from '@/data/db.ts';
import { AttemptRepository, itemInstanceId } from '@/data/attempts.ts';
import { ExposureService, qualifyEvidence, type Novelty } from '@/data/exposure.ts';
import { ContentStore, findQuestion, eligibleForms, findRemediationForScope } from '@/content/store.ts';
import type { ContentPackage, Question, Rationale, Knowledge, Remediation, TestForm, OpenActivity } from '@/content/types.ts';
import { score, type AnyAnswer, type ScoreResult, type ScoringItem } from '@/domain/scoring.ts';
import { equals, fractionFromJson, sum, type Fraction } from '@/domain/fraction.ts';

export class ItemUnavailableError extends Error {
  constructor(public readonly reason: 'missing' | 'withdrawn' | 'key-disputed') {
    super(reason === 'missing' ? 'Tego materiału jeszcze nie ma.' : 'Ten materiał nie jest dostępny do tej próby.');
    this.name = 'ItemUnavailableError';
  }
}

export function toScoringItem(q: Question): ScoringItem {
  if (q.format === 'A') return { format: 'A', weight: q.weight, answerKey: { selectedIds: 'selectedIds' in q.answerKey ? q.answerKey.selectedIds : [] } };
  if (q.format === 'P') return { format: 'P', weight: q.weight, k: q.k ?? 0, answerKey: { selectedIds: 'selectedIds' in q.answerKey ? q.answerKey.selectedIds : [] } };
  return { format: 'K', weight: q.weight, m: q.m ?? q.decisions.length, answerKey: { truthByDecisionId: 'truthByDecisionId' in q.answerKey ? q.answerKey.truthByDecisionId : {} } };
}

export function primaryScope(q: Question): { criterionId: string; aspectId?: string } {
  const m = q.criterionMappings.find((x) => x.role === 'primary') ?? q.criterionMappings[0];
  if (!m) return { criterionId: 'unknown' };
  return m.aspectId !== undefined ? { criterionId: m.criterionId, aspectId: m.aspectId } : { criterionId: m.criterionId };
}

export interface ProfileHistoryInfo {
  historyComplete: boolean;
}

export class LearningService {
  readonly attempts: AttemptRepository;
  readonly exposure: ExposureService;
  readonly content: ContentStore;

  constructor(private readonly db: CpreDb, writerId?: string) {
    this.attempts = new AttemptRepository(db, writerId);
    this.exposure = new ExposureService(db);
    this.content = new ContentStore(db);
  }

  async historyComplete(profileId: string): Promise<boolean> {
    const profile = await this.db.profiles.get(requireProfileId(profileId));
    const prov = profile?.preferences['importProvenance'] as { historyCompleteness?: string } | undefined;
    return !prov || prov.historyCompleteness === 'complete-local';
  }

  /**
   * Start a learning item (base/follow-up/delayed/practice). Novelty and both
   * intervals are fixed from history BEFORE the first presentation; then the
   * stem exposure is recorded.
   */
  async startItem(profileId: string, packages: readonly ContentPackage[], releaseId: string, itemId: string, opts: { kind?: AttemptRecord['kind']; sourceAttemptId?: string; remediationId?: string; failedFollowUps?: number } = {}): Promise<AttemptRecord> {
    requireProfileId(profileId);
    const found = findQuestion(packages, itemId);
    if (!found) throw new ItemUnavailableError('missing');
    const q = found.question;
    const withdrawn = await this.content.isWithdrawn(q.id, q.revision);
    if (withdrawn) throw new ItemUnavailableError(withdrawn.status);
    const complete = await this.historyComplete(profileId);
    const novelty: Novelty = await this.exposure.assessNovelty(profileId, q.id, q.familyRef.id, complete);
    const scope = primaryScope(q);
    const now = new Date();
    const iv = await this.exposure.intervals(profileId, scope.criterionId, scope.aspectId, now);
    const snap = await this.content.pinSnapshot(q);
    const attempt = await this.attempts.create({
      profileId,
      kind: opts.kind ?? 'learning-item',
      mode: 'learning',
      contentReleaseId: releaseId,
      pinnedItems: [{ itemId: q.id, revision: q.revision, snapshotKey: snap.key }],
      itemOrder: [itemInstanceId(q.id, q.revision)],
      conditions: {
        helpBeforeSubmit: false,
        knownDeclared: false,
        dictionaryAllowed: false,
        dictionaryUsed: false,
        noveltyAtStart: novelty === 'uncertain' ? 'unconfirmed' : novelty,
        intervalsAtStart: { [`${scope.criterionId}${scope.aspectId ? `/${scope.aspectId}` : ''}`]: { sinceIndependentAttemptMs: iv.sinceIndependentAttemptMs, sinceRelevantContactMs: iv.sinceRelevantContactMs } },
      },
      ...(opts.sourceAttemptId ? { sourceAttemptId: opts.sourceAttemptId } : {}),
      ...(opts.remediationId ? { remediationId: opts.remediationId } : {}),
    });
    let result = attempt;
    if (opts.failedFollowUps !== undefined) result = await this.attempts.setFailedFollowUps(profileId, attempt, opts.failedFollowUps);
    await this.exposure.recordExposure({ profileId, kind: 'item-stem', refId: q.id, refRevision: q.revision, familyId: q.familyRef.id, attemptId: attempt.id, origin: 'learning', criterionId: scope.criterionId, ...(scope.aspectId ? { aspectId: scope.aspectId } : {}) });
    return result;
  }

  /** The pinned question snapshot of an attempt (never the newer release). */
  async pinnedQuestion(attempt: AttemptRecord, index = 0): Promise<Question | null> {
    const pin = attempt.pinnedItems[index];
    if (!pin) return null;
    return this.content.getSnapshot(pin.snapshotKey);
  }

  async pinnedQuestions(attempt: AttemptRecord): Promise<Question[]> {
    const out: Question[] = [];
    for (const pin of attempt.pinnedItems) {
      const q = await this.content.getSnapshot(pin.snapshotKey);
      if (q) out.push(q);
    }
    return out;
  }

  /** Record that help was requested before submit — persisted BEFORE help is shown. */
  async markHelpBeforeSubmit(profileId: string, attempt: AttemptRecord): Promise<AttemptRecord> {
    if (attempt.conditions.helpBeforeSubmit) return attempt;
    return this.attempts.setConditions(profileId, attempt, { helpBeforeSubmit: true });
  }

  async declareKnown(profileId: string, attempt: AttemptRecord, known: boolean): Promise<AttemptRecord> {
    return this.attempts.setConditions(profileId, attempt, { knownDeclared: known });
  }

  async saveDraft(profileId: string, attempt: AttemptRecord, q: Question, value: AnyAnswer, flagged?: boolean): Promise<{ attempt: AttemptRecord; answer: AnswerRecord }> {
    return this.attempts.saveDraft(profileId, attempt, { itemId: q.id, revision: q.revision, format: q.format, value, ...(flagged !== undefined ? { flagged } : {}) });
  }

  /** Learning submit: commit, then record solution exposure, contacts and evidence facts. */
  async submit(profileId: string, attempt: AttemptRecord, q: Question, value: AnyAnswer): Promise<{ attempt: AttemptRecord; evaluation: EvaluationRecord; result: ScoreResult }> {
    const result = score(toScoringItem(q), value);
    const committed = await this.attempts.submitItem(profileId, attempt, { itemId: q.id, revision: q.revision, format: q.format, value, scoreResult: result });
    await this.afterEvaluation(profileId, committed.attempt, q, committed.evaluation);
    return { attempt: committed.attempt, evaluation: committed.evaluation, result };
  }

  private async afterEvaluation(profileId: string, attempt: AttemptRecord, q: Question, evaluation: EvaluationRecord): Promise<void> {
    const scope = primaryScope(q);
    const scopePart = scope.aspectId ? { aspectId: scope.aspectId } : {};
    // Avoid duplicate side-effects for idempotent re-submits.
    const already = await this.db.contacts.where('[profileId+criterionId]').equals([profileId, scope.criterionId]).filter((c) => c.sourceId === evaluation.id).count();
    if (already > 0) return;
    await this.exposure.recordExposure({ profileId, kind: 'item-solution', refId: q.id, refRevision: q.revision, familyId: q.familyRef.id, attemptId: attempt.id, origin: attempt.initialMode === 'check' ? 'check-review' : 'feedback', criterionId: scope.criterionId, ...scopePart });
    if (!attempt.conditions.helpBeforeSubmit && attempt.initialMode === attempt.currentMode) {
      await this.exposure.recordContact({ profileId, criterionId: scope.criterionId, ...scopePart, kind: 'independent-attempt', sourceKind: 'attempt', sourceId: evaluation.id, at: attempt.createdAt });
    }
    const max = fractionFromJson(evaluation.maxPoints);
    const fullyCorrect = equals(fractionFromJson(evaluation.points), max);
    const ivKey = `${scope.criterionId}${scope.aspectId ? `/${scope.aspectId}` : ''}`;
    const iv = attempt.conditions.intervalsAtStart[ivKey] ?? { sinceIndependentAttemptMs: null, sinceRelevantContactMs: null };
    const novelty: Novelty = attempt.conditions.knownDeclared ? 'known' : attempt.conditions.noveltyAtStart === 'unconfirmed' ? 'uncertain' : attempt.conditions.noveltyAtStart;
    const qualified = qualifyEvidence({
      profileId, criterionId: scope.criterionId, ...scopePart,
      attemptId: attempt.id, evaluationId: evaluation.id, fullyCorrect,
      helpBeforeSubmit: attempt.conditions.helpBeforeSubmit || attempt.currentMode !== attempt.initialMode,
      itemNovelty: novelty,
      // "Nowy kontekst" needs a reviewed independent variant AND an earlier independent
      // attempt in this scope; a first base attempt is never a new context (FR-017).
      newContextApproved: q.noveltyReview === 'independent' && q.role !== 'base' && q.role !== 'practice' && iv.sinceIndependentAttemptMs !== null,
      intervals: { ...iv, independentAttemptAt: null, relevantContactAt: null },
    });
    if (qualified) {
      await this.db.evidence.add({ ...qualified, id: crypto.randomUUID(), recordedAt: new Date().toISOString() });
    } else {
      // Error/partial: only a recheck flag on this criterion scope; no negative evidence, no propagation.
      await this.db.plans.put({ id: `recheck:${profileId}:${scope.criterionId}:${scope.aspectId ?? ''}`, profileId, kind: 'recheck-flag', criterionId: scope.criterionId, payload: { aspectId: scope.aspectId ?? null, sourceAttemptId: attempt.id }, updatedAt: new Date().toISOString() });
    }
  }

  /** Revealing one rationale logs a contact for exactly that RAT's scope. */
  async revealRationale(profileId: string, attempt: AttemptRecord, q: Question, rationale: Rationale): Promise<void> {
    requireProfileId(profileId);
    const existing = await this.db.exposures.where('[profileId+refId]').equals([profileId, rationale.id]).filter((e) => e.attemptId === attempt.id).count();
    if (existing > 0) return;
    await this.exposure.recordExposure({ profileId, kind: 'rationale', refId: rationale.id, refRevision: q.revision, familyId: q.familyRef.id, attemptId: attempt.id, origin: 'feedback' });
    for (const s of rationale.contactScopes) {
      await this.exposure.recordContact({ profileId, criterionId: s.criterionId, ...(s.aspectId ? { aspectId: s.aspectId } : {}), kind: 'relevant-contact', sourceKind: 'rationale', sourceId: rationale.id });
    }
  }

  async openKnowledge(profileId: string, knowledge: Knowledge, attemptId?: string, origin: 'help' | 'knowledge' = 'knowledge'): Promise<void> {
    requireProfileId(profileId);
    await this.exposure.recordExposure({ profileId, kind: 'knowledge', refId: knowledge.id, refRevision: knowledge.revision, origin, ...(attemptId ? { attemptId } : {}) });
    for (const s of knowledge.contactScopes) {
      await this.exposure.recordContact({ profileId, criterionId: s.criterionId, ...(s.aspectId ? { aspectId: s.aspectId } : {}), kind: 'relevant-contact', sourceKind: 'knowledge', sourceId: knowledge.id });
    }
  }

  async openRemediation(profileId: string, rem: Remediation, attemptId: string): Promise<void> {
    await this.exposure.recordExposure({ profileId, kind: 'remediation', refId: rem.id, refRevision: rem.revision, origin: 'help', attemptId });
    await this.exposure.recordContact({ profileId, criterionId: rem.scope.criterionId, ...(rem.scope.aspectId ? { aspectId: rem.scope.aspectId } : {}), kind: 'relevant-contact', sourceKind: 'remediation', sourceId: rem.id });
  }

  findRemediation(packages: readonly ContentPackage[], q: Question): Remediation | null {
    const scope = primaryScope(q);
    return findRemediationForScope(packages, scope.criterionId, scope.aspectId);
  }

  // ---------- Navigation context (return to the same anchor) ----------
  async saveNavigation(ctx: Omit<NavigationContextRecord, 'id' | 'updatedAt'>): Promise<void> {
    requireProfileId(ctx.profileId);
    await this.db.navigationContexts.put({ ...ctx, id: `${ctx.profileId}:${ctx.attemptId}`, updatedAt: new Date().toISOString() });
  }

  async loadNavigation(profileId: string, attemptId: string): Promise<NavigationContextRecord | undefined> {
    requireProfileId(profileId);
    return this.db.navigationContexts.get(`${profileId}:${attemptId}`);
  }

  // ---------- Plans (suspended learning, goals) ----------
  async setPlan(profileId: string, kind: PlanRecord['kind'], payload: Record<string, unknown>, id?: string): Promise<void> {
    requireProfileId(profileId);
    await this.db.plans.put({ id: id ?? `${kind}:${profileId}`, profileId, kind, payload, updatedAt: new Date().toISOString() });
  }

  async getPlan(profileId: string, kind: PlanRecord['kind'], id?: string): Promise<PlanRecord | undefined> {
    requireProfileId(profileId);
    const rec = await this.db.plans.get(id ?? `${kind}:${profileId}`);
    return rec && rec.profileId === profileId ? rec : undefined;
  }

  async clearPlan(profileId: string, kind: PlanRecord['kind'], id?: string): Promise<void> {
    requireProfileId(profileId);
    await this.db.plans.delete(id ?? `${kind}:${profileId}`);
  }

  // ---------- Topic test ----------
  async startTopicTest(profileId: string, packages: readonly ContentPackage[], releaseId: string, form: TestForm, dictionaryAllowed: boolean): Promise<AttemptRecord> {
    requireProfileId(profileId);
    const pinned: AttemptRecord['pinnedItems'] = [];
    const complete = await this.historyComplete(profileId);
    let anyKnown = false;
    let anyUncertain = false;
    for (const ref of form.itemRefs) {
      const found = findQuestion(packages, ref.id);
      if (!found || found.question.revision !== ref.revision) throw new ItemUnavailableError('missing');
      const w = await this.content.isWithdrawn(ref.id, ref.revision);
      if (w) throw new ItemUnavailableError(w.status);
      // Eligibility/novelty is assessed BEFORE exposure.
      const nov = await this.exposure.assessNovelty(profileId, ref.id, found.question.familyRef.id, complete);
      if (nov === 'known') anyKnown = true;
      if (nov === 'uncertain') anyUncertain = true;
      const snap = await this.content.pinSnapshot(found.question);
      pinned.push({ itemId: ref.id, revision: ref.revision, snapshotKey: snap.key });
    }
    const attempt = await this.attempts.create({
      profileId,
      kind: 'topic-test',
      mode: 'check',
      contentReleaseId: releaseId,
      pinnedItems: pinned,
      itemOrder: pinned.map((p) => itemInstanceId(p.itemId, p.revision)),
      formRef: { id: form.id, revision: form.revision },
      conditions: {
        helpBeforeSubmit: false,
        knownDeclared: false,
        dictionaryAllowed,
        dictionaryUsed: false,
        noveltyAtStart: anyKnown ? 'known' : anyUncertain ? 'unconfirmed' : 'new',
        intervalsAtStart: {},
      },
    });
    for (const p of pinned) {
      const q = findQuestion(packages, p.itemId)?.question;
      await this.exposure.recordExposure({ profileId, kind: 'item-stem', refId: p.itemId, refRevision: p.revision, ...(q ? { familyId: q.familyRef.id } : {}), attemptId: attempt.id, origin: 'learning' });
    }
    return attempt;
  }

  /** Finalize the whole form; feedback/rationale only become available afterwards. */
  async finalizeTest(profileId: string, attempt: AttemptRecord): Promise<{ attempt: AttemptRecord; evaluations: EvaluationRecord[] }> {
    const questions = await this.pinnedQuestions(attempt);
    const byInstance = new Map(questions.map((q) => [itemInstanceId(q.id, q.revision), q]));
    // Unanswered items still get an (empty) answer record so every item has a result.
    let current = attempt;
    const answers = await this.attempts.listAnswers(profileId, attempt.id);
    const answered = new Set(answers.map((a) => a.itemInstanceId));
    for (const q of questions) {
      const inst = itemInstanceId(q.id, q.revision);
      if (!answered.has(inst)) {
        const empty: AnyAnswer = q.format === 'K' ? Object.fromEntries(q.decisions.map((d) => [d.id, null])) : [];
        current = (await this.attempts.saveDraft(profileId, current, { itemId: q.id, revision: q.revision, format: q.format, value: empty })).attempt;
      }
    }
    const res = await this.attempts.finalize(profileId, current, (ans) => {
      const q = byInstance.get(ans.itemInstanceId);
      if (!q) throw new Error(`Brak przypiętej rewizji ${ans.itemInstanceId}`);
      return score(toScoringItem(q), ans.value);
    });
    for (const ev of res.evaluations) {
      const q = byInstance.get(ev.itemInstanceId);
      if (q) await this.afterEvaluation(profileId, res.attempt, q, ev);
    }
    return res;
  }

  eligibleForms(packages: readonly ContentPackage[]): { pkg: ContentPackage; form: TestForm }[] {
    return eligibleForms(packages);
  }

  // ---------- Open activities (rubric + explicit self-assessment) ----------
  async submitOpen(profileId: string, releaseId: string, activity: OpenActivity, text: string): Promise<AttemptRecord> {
    requireProfileId(profileId);
    let attempt = await this.attempts.create({
      profileId, kind: 'open-activity', mode: 'learning', contentReleaseId: releaseId,
      pinnedItems: [], itemOrder: [itemInstanceId(activity.id, activity.revision)],
      conditions: { helpBeforeSubmit: false, knownDeclared: false, dictionaryAllowed: false, dictionaryUsed: false, noveltyAtStart: 'unconfirmed', intervalsAtStart: {} },
    });
    const now = new Date().toISOString();
    await this.db.answers.put({ profileId, attemptId: attempt.id, itemInstanceId: itemInstanceId(activity.id, activity.revision), itemId: activity.id, revision: activity.revision, format: 'A', value: [text], state: 'submitted', flagged: false, responseVersion: 1, updatedAt: now, submittedAt: now });
    attempt = await this.attempts.renewLease(profileId, attempt);
    await this.exposure.recordExposure({ profileId, kind: 'open-model-answer', refId: activity.id, refRevision: activity.revision, attemptId: attempt.id, origin: 'feedback' });
    for (const s of activity.scope) {
      await this.exposure.recordContact({ profileId, criterionId: s.criterionId, ...(s.aspectId ? { aspectId: s.aspectId } : {}), kind: 'relevant-contact', sourceKind: 'attempt', sourceId: activity.id });
    }
    return attempt;
  }

  /** Self-assessment is stored as rubric-self; it never becomes CPRE points or independent measurement. */
  async recordSelfAssessment(profileId: string, attempt: AttemptRecord, activity: OpenActivity, metElements: number, totalElements: number): Promise<EvaluationRecord> {
    const evaluation: EvaluationRecord = {
      id: crypto.randomUUID(), profileId, attemptId: attempt.id,
      itemInstanceId: itemInstanceId(activity.id, activity.revision),
      scoringVersion: 'RUBRIC-SELF-1',
      points: { numerator: metElements, denominator: 1 },
      maxPoints: { numerator: Math.max(totalElements, 1), denominator: 1 },
      reason: 'per-row', decisionOutcomes: {}, sourceRevision: activity.revision,
      assessedAt: new Date().toISOString(), evaluationMethod: 'rubric-self',
    };
    await this.db.evaluations.add(evaluation);
    return evaluation;
  }
}

/** Exact sum of original (non-correction) evaluations. */
export function sumPoints(evaluations: readonly EvaluationRecord[]): { points: Fraction; max: Fraction } {
  const originals = evaluations.filter((e) => !e.correctionOf);
  return {
    points: sum(originals.map((e) => fractionFromJson(e.points))),
    max: sum(originals.map((e) => fractionFromJson(e.maxPoints))),
  };
}
