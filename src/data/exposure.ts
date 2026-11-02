/**
 * Exposure, contacts, the two intervals and evidence qualification (docs/06).
 * Novelty is assessed from history BEFORE the current presentation, then the
 * exposure is recorded. New IDs/translations/revisions of the same family do
 * not reset familiarity; incomplete history stays uncertain, never "new".
 */
import type { CpreDb, ContactRecord, ExposureRecord, EvidenceRecord } from './db.ts';
import { requireProfileId } from './db.ts';

export type Novelty = 'new' | 'known' | 'uncertain';

export interface IntervalsResult {
  sinceIndependentAttemptMs: number | null;
  sinceRelevantContactMs: number | null;
  independentAttemptAt: string | null;
  relevantContactAt: string | null;
}

export class ExposureService {
  constructor(private readonly db: CpreDb) {}

  /**
   * Novelty of an item for a person BEFORE showing it: known if the item or
   * its family was exposed; uncertain when history is marked incomplete.
   */
  async assessNovelty(profileId: string, itemId: string, familyId: string | undefined, historyComplete: boolean): Promise<Novelty> {
    requireProfileId(profileId);
    const byItem = await this.db.exposures.where('[profileId+refId]').equals([profileId, itemId]).count();
    if (byItem > 0) return 'known';
    if (familyId) {
      const byFamily = await this.db.exposures.where('[profileId+familyId]').equals([profileId, familyId]).count();
      if (byFamily > 0) return 'known';
    }
    return historyComplete ? 'new' : 'uncertain';
  }

  /** Both intervals per criterion/aspect, from history strictly before `before`. */
  async intervals(profileId: string, criterionId: string, aspectId: string | undefined, before: Date): Promise<IntervalsResult> {
    requireProfileId(profileId);
    const contacts = await this.db.contacts.where('[profileId+criterionId]').equals([profileId, criterionId]).toArray();
    const cutoff = before.getTime();
    let lastAttempt: number | null = null;
    let lastContact: number | null = null;
    for (const c of contacts) {
      if (aspectId !== undefined && c.aspectId !== undefined && c.aspectId !== aspectId) continue;
      const t = Date.parse(c.at);
      if (!Number.isFinite(t) || t >= cutoff) continue;
      if (c.kind === 'independent-attempt') lastAttempt = lastAttempt === null ? t : Math.max(lastAttempt, t);
      else lastContact = lastContact === null ? t : Math.max(lastContact, t);
    }
    return {
      sinceIndependentAttemptMs: lastAttempt === null ? null : cutoff - lastAttempt,
      sinceRelevantContactMs: lastContact === null ? null : cutoff - lastContact,
      independentAttemptAt: lastAttempt === null ? null : new Date(lastAttempt).toISOString(),
      relevantContactAt: lastContact === null ? null : new Date(lastContact).toISOString(),
    };
  }

  async recordExposure(input: Omit<ExposureRecord, 'id' | 'revealedAt'> & { revealedAt?: string }): Promise<ExposureRecord> {
    requireProfileId(input.profileId);
    const record: ExposureRecord = { ...input, id: crypto.randomUUID(), revealedAt: input.revealedAt ?? new Date().toISOString() };
    await this.db.exposures.add(record);
    return record;
  }

  async recordContact(input: Omit<ContactRecord, 'id' | 'at'> & { at?: string }): Promise<ContactRecord> {
    requireProfileId(input.profileId);
    const record: ContactRecord = { ...input, id: crypto.randomUUID(), at: input.at ?? new Date().toISOString() };
    await this.db.contacts.add(record);
    return record;
  }

  async listExposures(profileId: string, refId: string): Promise<ExposureRecord[]> {
    requireProfileId(profileId);
    return this.db.exposures.where('[profileId+refId]').equals([profileId, refId]).toArray();
  }
}

export interface EvidenceQualificationInput {
  profileId: string;
  criterionId: string;
  aspectId?: string;
  attemptId: string;
  evaluationId: string;
  fullyCorrect: boolean;
  helpBeforeSubmit: boolean;
  itemNovelty: Novelty;
  newContextApproved: boolean;
  intervals: IntervalsResult;
  /** Pilot policy: >= 24h since last relevant contact for the deferred label. */
  deferredThresholdMs?: number;
}

/**
 * Qualify one observation into one of the five categories (no ladder, no
 * mastery, no propagation). Returns null for an incorrect answer: errors add a
 * recheck flag elsewhere, never negative "evidence of ignorance".
 */
export function qualifyEvidence(input: EvidenceQualificationInput): Omit<EvidenceRecord, 'id' | 'recordedAt'> | null {
  if (!input.fullyCorrect) return null;
  const limitations: string[] = [];
  const conditions: string[] = [];
  let category: EvidenceRecord['category'];
  if (input.helpBeforeSubmit) {
    category = 'poznane-z-pomoca';
    conditions.push('pomoc przed odpowiedzią');
  } else {
    const threshold = input.deferredThresholdMs ?? 24 * 3600 * 1000;
    const contactGap = input.intervals.sinceRelevantContactMs;
    const deferred = contactGap !== null && contactGap >= threshold;
    if (deferred) {
      category = 'utrzymane-po-przerwie';
      conditions.push(`odstęp od istotnego kontaktu: ${String(Math.round(contactGap / 3600000))} h`);
      limitations.push('próg odroczenia ≥24 h jest parametrem pilota, nie normą IREB');
    } else if (input.newContextApproved && input.itemNovelty === 'new') {
      category = 'wykazane-w-nowym-kontekscie';
    } else {
      category = 'wykazane-samodzielnie';
      if (contactGap !== null && contactGap < (input.deferredThresholdMs ?? 24 * 3600 * 1000)) {
        limitations.push('świeże wykonanie po niedawnym kontakcie; nie dowodzi retencji');
      }
    }
    if (input.itemNovelty === 'known') {
      conditions.push('znane zadanie lub bliski wariant');
      limitations.push('znajomość zadania ogranicza wniosek o transferze');
    }
    if (input.itemNovelty === 'uncertain') {
      limitations.push('historia niepełna; nowość niepotwierdzona');
    }
  }
  if (input.intervals.sinceIndependentAttemptMs === null) {
    limitations.push('brak wcześniejszej samodzielnej próby w historii');
  }
  const base = {
    profileId: input.profileId,
    criterionId: input.criterionId,
    category,
    sourceAttemptId: input.attemptId,
    sourceEvaluationId: input.evaluationId,
    conditions,
    limitations,
  };
  return input.aspectId !== undefined ? { ...base, aspectId: input.aspectId } : base;
}
