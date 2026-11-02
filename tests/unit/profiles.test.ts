import { describe, expect, it } from 'vitest';
import { ProfileRepository, validateProfileName, ProfileNameConflictError, ProfileNameInvalidError } from '@/data/profiles.ts';
import { AttemptRepository } from '@/data/attempts.ts';
import { ExposureService } from '@/data/exposure.ts';
import { MissingProfileError, requireProfileId } from '@/data/db.ts';
import { freshDb, conditions } from './helpers.ts';

describe('profile names (PROF-02)', () => {
  it('accepts Polish characters and trims/NFC-normalizes', () => {
    const v = validateProfileName('  Żaneta  ');
    expect(v.ok).toBe(true);
    expect(v.normalized).toBe('Żaneta');
    expect(validateProfileName('Żaneta').normalized).toBe('Żaneta');
  });
  it('rejects empty, invisible, control and >40 code points', () => {
    expect(validateProfileName('   ').error).toBe('empty');
    expect(validateProfileName('​​').ok).toBe(false);
    expect(validateProfileName('a\u0007b').error).toBe('control-chars');
    expect(validateProfileName('x'.repeat(41)).error).toBe('too-long');
    expect(validateProfileName('ż'.repeat(40)).ok).toBe(true);
  });
});

describe('profile repository (QA-01, QA-02)', () => {
  it('creates stable UUIDs; "Ania"/"ania" conflict; "Żaneta"/"Zaneta" distinct', async () => {
    const db = await freshDb();
    const repo = new ProfileRepository(db);
    const ania = await repo.create('Ania');
    expect(ania.id).toMatch(/^[0-9a-f-]{36}$/);
    await expect(repo.create('ania')).rejects.toBeInstanceOf(ProfileNameConflictError);
    await repo.create('Żaneta');
    await expect(repo.create('Zaneta')).resolves.toBeDefined();
    await expect(repo.create('')).rejects.toBeInstanceOf(ProfileNameInvalidError);
  });

  it('rename keeps ID and all references', async () => {
    const db = await freshDb();
    const profiles = new ProfileRepository(db);
    const attempts = new AttemptRepository(db);
    const ania = await profiles.create('Ania');
    const attempt = await attempts.create({ profileId: ania.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    const renamed = await profiles.rename(ania.id, 'Anna');
    expect(renamed.id).toBe(ania.id);
    expect((await attempts.get(ania.id, attempt.id))?.id).toBe(attempt.id);
  });

  it('isolates progress per profile and deletes only the chosen profile', async () => {
    const db = await freshDb();
    const profiles = new ProfileRepository(db);
    const attempts = new AttemptRepository(db);
    const exposure = new ExposureService(db);
    const ania = await profiles.create('Ania');
    const bartek = await profiles.create('Bartek');
    const a = await attempts.create({ profileId: ania.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    await attempts.saveDraft(ania.id, a, { itemId: 'Q1', revision: 'r1', format: 'A', value: ['a'] });
    await exposure.recordExposure({ profileId: ania.id, kind: 'knowledge', refId: 'N1', refRevision: 'r1', origin: 'help' });

    // Bartek sees nothing of Ania (QA-01)
    expect(await attempts.findActive(bartek.id)).toHaveLength(0);
    expect(await attempts.get(bartek.id, a.id)).toBeUndefined();
    expect(await exposure.listExposures(bartek.id, 'N1')).toHaveLength(0);
    expect(await exposure.assessNovelty(bartek.id, 'Q1', undefined, true)).toBe('new');

    // Content stores untouched by profile delete (QA-02)
    await db.snapshots.add({ key: 'Q1@r1', itemId: 'Q1', revision: 'r1', payload: {}, storedAt: '' });
    await profiles.deleteProfile(bartek.id, 'bartek');
    expect(await profiles.get(bartek.id)).toBeUndefined();
    expect(await profiles.get(ania.id)).toBeDefined();
    expect(await attempts.listAnswers(ania.id, a.id)).toHaveLength(1);
    expect(await db.snapshots.count()).toBe(1);
  });

  it('missing profileId is an error, never "the first profile"', () => {
    expect(() => requireProfileId(null)).toThrow(MissingProfileError);
    expect(() => requireProfileId('')).toThrow(MissingProfileError);
  });
});
