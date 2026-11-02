import { describe, expect, it } from 'vitest';
import { ExposureService, qualifyEvidence } from '@/data/exposure.ts';
import { ProfileRepository } from '@/data/profiles.ts';
import { freshDb } from './helpers.ts';

const DAY = 24 * 3600 * 1000;

describe('two intervals per criterion (QA-17)', () => {
  it('7 days after independent attempt and 1 minute after reading the right ZAK: both recorded, no retention label', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const svc = new ExposureService(db);
    const now = new Date('2026-11-10T12:00:00Z');
    await svc.recordContact({ profileId: p.id, criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-06', kind: 'independent-attempt', sourceKind: 'attempt', sourceId: 'x', at: new Date(now.getTime() - 7 * DAY).toISOString() });
    await svc.recordContact({ profileId: p.id, criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-06', kind: 'relevant-contact', sourceKind: 'knowledge', sourceId: 'N-T21-06', at: new Date(now.getTime() - 60_000).toISOString() });
    // contact with another ZAK does not reset ZAK06
    await svc.recordContact({ profileId: p.id, criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-02', kind: 'relevant-contact', sourceKind: 'knowledge', sourceId: 'N-T21-02', at: new Date(now.getTime() - 10_000).toISOString() });
    const iv = await svc.intervals(p.id, 'KRY-T21-01', 'ZAK-T21-06', now);
    expect(iv.sinceIndependentAttemptMs).toBe(7 * DAY);
    expect(iv.sinceRelevantContactMs).toBe(60_000);
    const ev = qualifyEvidence({ profileId: p.id, criterionId: 'KRY-T21-01', aspectId: 'ZAK-T21-06', attemptId: 'a', evaluationId: 'e', fullyCorrect: true, helpBeforeSubmit: false, itemNovelty: 'new', newContextApproved: false, intervals: iv });
    expect(ev?.category).toBe('wykazane-samodzielnie');
    expect(ev?.limitations.join(' ')).toMatch(/nie dowodzi retencji/);
  });

  it('contacts after the attempt start do not reset the interval of that attempt', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const svc = new ExposureService(db);
    const start = new Date('2026-11-10T12:00:00Z');
    await svc.recordContact({ profileId: p.id, criterionId: 'K', kind: 'relevant-contact', sourceKind: 'knowledge', sourceId: 'n', at: new Date(start.getTime() + 1000).toISOString() });
    const iv = await svc.intervals(p.id, 'K', undefined, start);
    expect(iv.sinceRelevantContactMs).toBeNull();
  });

  it('missing history means no data, never a generated date', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const iv = await new ExposureService(db).intervals(p.id, 'K', undefined, new Date());
    expect(iv.independentAttemptAt).toBeNull();
    expect(iv.relevantContactAt).toBeNull();
  });
});

describe('novelty and family (QA-18)', () => {
  it('new ID of the same family is known, incomplete history is uncertain', async () => {
    const db = await freshDb();
    const p = await new ProfileRepository(db).create('Ania');
    const svc = new ExposureService(db);
    await svc.recordExposure({ profileId: p.id, kind: 'item-stem', refId: 'T21-B01', refRevision: 'r1', familyId: 'FAM-T21-01', origin: 'learning' });
    expect(await svc.assessNovelty(p.id, 'T21-B01', 'FAM-T21-01', true)).toBe('known');
    expect(await svc.assessNovelty(p.id, 'T21-B01-EN', 'FAM-T21-01', true)).toBe('known');
    expect(await svc.assessNovelty(p.id, 'T21-B02', 'FAM-T21-02', false)).toBe('uncertain');
    expect(await svc.assessNovelty(p.id, 'T21-B02', 'FAM-T21-02', true)).toBe('new');
  });

  it('evidence: help → poznane/z pomocą; ≥24h contact gap → utrzymane po przerwie; error → no evidence record', () => {
    const base = { profileId: 'p', criterionId: 'K', attemptId: 'a', evaluationId: 'e', itemNovelty: 'new' as const, newContextApproved: false };
    expect(qualifyEvidence({ ...base, fullyCorrect: true, helpBeforeSubmit: true, intervals: { sinceIndependentAttemptMs: null, sinceRelevantContactMs: null, independentAttemptAt: null, relevantContactAt: null } })?.category).toBe('poznane-z-pomoca');
    expect(qualifyEvidence({ ...base, fullyCorrect: true, helpBeforeSubmit: false, intervals: { sinceIndependentAttemptMs: 3 * DAY, sinceRelevantContactMs: 2 * DAY, independentAttemptAt: 'x', relevantContactAt: 'y' } })?.category).toBe('utrzymane-po-przerwie');
    expect(qualifyEvidence({ ...base, fullyCorrect: false, helpBeforeSubmit: false, intervals: { sinceIndependentAttemptMs: null, sinceRelevantContactMs: null, independentAttemptAt: null, relevantContactAt: null } })).toBeNull();
  });
});
