import { CpreDb } from '@/data/db.ts';
import type { AttemptConditions } from '@/data/db.ts';

let counter = 0;

/** Fresh isolated IndexedDB (fake-indexeddb) per test. */
export async function freshDb(): Promise<CpreDb> {
  counter += 1;
  const db = new CpreDb(`test-db-${String(counter)}-${crypto.randomUUID()}`);
  await db.open();
  return db;
}

export function conditions(overrides: Partial<AttemptConditions> = {}): AttemptConditions {
  return {
    helpBeforeSubmit: false,
    knownDeclared: false,
    dictionaryAllowed: false,
    dictionaryUsed: false,
    noveltyAtStart: 'new',
    intervalsAtStart: {},
    ...overrides,
  };
}
