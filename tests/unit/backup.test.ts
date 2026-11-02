import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { exportProfile, parseBackup, importProfile, BackupError } from '@/data/backup.ts';
import { ProfileRepository } from '@/data/profiles.ts';
import { AttemptRepository } from '@/data/attempts.ts';
import { ExposureService } from '@/data/exposure.ts';
import { freshDb, conditions } from './helpers.ts';

describe('profile backup (QA-30)', () => {
  it('validates the handoff example envelope digest over exact payloadJson bytes', async () => {
    const text = readFileSync(resolve(__dirname, '..', '..', 'examples/profile-backup.example.json'), 'utf-8');
    const parsed = await parseBackup(text);
    expect(parsed.preview.name).toBe('Syntetyczny profil kontrolny');
  });

  it('exports only one profile; corrupted import writes nothing; valid import creates a new profile without merge', async () => {
    const db = await freshDb();
    const profiles = new ProfileRepository(db);
    const attempts = new AttemptRepository(db);
    const exposures = new ExposureService(db);
    const ania = await profiles.create('Ania');
    const bartek = await profiles.create('Bartek');
    const a = await attempts.create({ profileId: ania.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    await attempts.saveDraft(ania.id, a, { itemId: 'Q', revision: 'r1', format: 'A', value: ['a'] });
    await exposures.recordExposure({ profileId: ania.id, kind: 'item-stem', refId: 'Q', refRevision: 'r1', origin: 'learning' });
    await attempts.create({ profileId: bartek.id, kind: 'learning-item', mode: 'learning', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });

    const envelope = await exportProfile(db, ania.id, '0.1.0');
    const text = JSON.stringify(envelope);
    expect(text).not.toContain(bartek.id);

    // corrupted: tamper payload without fixing digest
    const corrupted = JSON.stringify({ ...envelope, payloadJson: envelope.payloadJson.replace('Ania', 'Anka') });
    await expect(parseBackup(corrupted)).rejects.toMatchObject({ code: 'DIGEST_MISMATCH' });
    const before = await db.profiles.count();

    const parsed = await parseBackup(text);
    await expect(importProfile(db, parsed, 'Ania')).rejects.toBeInstanceOf(BackupError); // name conflict, nothing written
    expect(await db.profiles.count()).toBe(before);

    const imported = await importProfile(db, parsed, 'Ania (kopia)');
    expect(imported.id).not.toBe(ania.id);
    expect(await attempts.listAnswers(imported.id, a.id)).toHaveLength(1);
    expect(await exposures.listExposures(imported.id, 'Q')).toHaveLength(1);
    // original profile untouched (no merge)
    expect(await attempts.listAnswers(ania.id, a.id)).toHaveLength(1);
    const prov = imported.preferences['importProvenance'] as { originalProfileId: string; historyCompleteness: string };
    expect(prov.originalProfileId).toBe(ania.id);
    expect(prov.historyCompleteness).toBe('imported-unverified');

    // repeated import creates another separate profile
    const again = await importProfile(db, parsed, 'Ania (kopia 2)');
    expect(again.id).not.toBe(imported.id);
  });

  it('a converted check stays converted after export/import (QA-16)', async () => {
    const db = await freshDb();
    const profiles = new ProfileRepository(db);
    const attempts = new AttemptRepository(db);
    const p = await profiles.create('Ania');
    let a = await attempts.create({ profileId: p.id, kind: 'topic-test', mode: 'check', contentReleaseId: 'r', pinnedItems: [], itemOrder: [], conditions: conditions() });
    a = await attempts.convertToLearning(p.id, a);
    const parsed = await parseBackup(JSON.stringify(await exportProfile(db, p.id, '0.1.0')));
    const imported = await importProfile(db, parsed, 'Ania 2');
    const copy = await attempts.get(imported.id, a.id);
    expect(copy?.lifecycle).toBe('converted');
    expect(copy?.initialMode).toBe('check');
    expect(copy?.currentMode).toBe('learning');
  });

  it('rejects a backup with a record belonging to another profile', async () => {
    const payload = {
      profile: { id: '00000000-0000-4000-8000-000000000001', name: 'X', createdAt: '2026-11-02T00:00:00Z', preferences: {} },
      records: { attempts: [{ id: 'a', profileId: '00000000-0000-4000-8000-000000000002' }], answers: [], evaluations: [], exposures: [], contacts: [], navigationContexts: [], evidence: [], plans: [], issues: [] },
      snapshots: [],
      historyCompleteness: 'complete-local',
    };
    const payloadJson = JSON.stringify(payload);
    const digest = [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(payloadJson)))].map((b) => b.toString(16).padStart(2, '0')).join('');
    const env = JSON.stringify({ schemaVersion: '1.0.0', exportedAt: '2026-11-02T00:00:00Z', appVersion: '0.1.0', payloadJson, payloadSha256: digest });
    await expect(parseBackup(env)).rejects.toMatchObject({ code: 'FOREIGN_RECORD' });
  });
});
