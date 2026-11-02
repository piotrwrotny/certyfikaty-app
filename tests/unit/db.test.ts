/**
 * TASK-004 / QA-29: database versioning. v1 is the first schema, so there is no
 * older learner database to migrate yet; these tests pin the guarantees that a
 * future migration must keep: data survives reopen, a newer database is refused
 * without deletion, and a versionchange from another tab closes our connection
 * gracefully instead of blocking or resetting.
 */
import { describe, expect, it } from 'vitest';
import { openDb, NewerDatabaseError, DB_VERSION, learnerStores } from '@/data/db.ts';
import { ProfileRepository } from '@/data/profiles.ts';

function rawOpen(name: string, version?: number): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = version === undefined ? indexedDB.open(name) : indexedDB.open(name, version);
    req.onsuccess = () => { resolve(req.result); };
    req.onerror = () => { reject(req.error ?? new Error('open failed')); };
  });
}

describe('IndexedDB versions (TASK-004)', () => {
  it('every learner store is indexed by profileId; data survives reopen', async () => {
    const name = `db-${crypto.randomUUID()}`;
    const db = await openDb(name);
    for (const s of learnerStores) {
      const idx = db.table(s).schema.indexes.map((i) => i.name).concat(db.table(s).schema.primKey.name);
      expect(idx.some((n) => n.includes('profileId')), s).toBe(true);
    }
    await new ProfileRepository(db).create('Ania');
    db.close();
    const again = await openDb(name);
    expect(await again.profiles.count()).toBe(1);
    again.close();
  });

  it('a database upgraded by a newer app is refused, never deleted', async () => {
    const name = `db-${crypto.randomUUID()}`;
    const db = await openDb(name);
    await new ProfileRepository(db).create('Ania');
    db.close();
    const raw = await rawOpen(name, DB_VERSION * 10 + 50); // simulated newer app
    raw.close();
    await expect(openDb(name)).rejects.toBeInstanceOf(NewerDatabaseError);
    const check = await rawOpen(name);
    const count = await new Promise<number>((resolve) => {
      const req = check.transaction('profiles').objectStore('profiles').count();
      req.onsuccess = () => { resolve(req.result); };
    });
    check.close();
    expect(count).toBe(1);
  });

  it('versionchange from another tab closes our connection and notifies; no reset', async () => {
    const name = `db-${crypto.randomUUID()}`;
    let notified = false;
    const db = await openDb(name, () => { notified = true; });
    await new ProfileRepository(db).create('Ania');
    const upgraded = await rawOpen(name, DB_VERSION * 10 + 1);
    expect(notified).toBe(true);
    expect(db.isOpen()).toBe(false);
    const req = upgraded.transaction('profiles').objectStore('profiles').count();
    const count = await new Promise<number>((resolve) => { req.onsuccess = () => { resolve(req.result); }; });
    upgraded.close();
    expect(count).toBe(1);
  });
});
