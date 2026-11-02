/**
 * Named local profiles (docs/01 PROF-01..06, docs/03). The profile ID is a
 * stable random UUID; the name is never a data key. Uniqueness uses NFC + trim
 * + locale-independent case fold.
 */
import type { CpreDb, ProfileRecord } from './db.ts';
import { learnerStores } from './db.ts';

export interface NameValidation {
  ok: boolean;
  normalized: string;
  error?: 'empty' | 'too-long' | 'control-chars' | 'invisible-only';
}

/** NFC, trim, 1–40 code points, no control chars, not only invisible characters. */
export function validateProfileName(raw: string): NameValidation {
  const nfc = raw.normalize('NFC').trim();
  if (nfc.length === 0) return { ok: false, normalized: '', error: 'empty' };
  const codePoints = [...nfc];
  if (codePoints.length > 40) return { ok: false, normalized: nfc, error: 'too-long' };
  if (/[\p{Cc}\p{Cf}]/u.test(nfc)) return { ok: false, normalized: nfc, error: 'control-chars' };
  // Reject text consisting only of invisible/space characters.
  if (/^[\p{Z}\p{M}]*$/u.test(nfc)) return { ok: false, normalized: nfc, error: 'invisible-only' };
  return { ok: true, normalized: nfc };
}

/** Locale-independent case fold for uniqueness: "Ania"/"ania" collide, "Żaneta"≠"Zaneta". */
export function foldName(nfcName: string): string {
  return nfcName.toLowerCase();
}

export class ProfileNameConflictError extends Error {
  constructor() {
    super('Profil o tej nazwie już istnieje');
    this.name = 'ProfileNameConflictError';
  }
}
export class ProfileNameInvalidError extends Error {
  constructor(public readonly reason: NameValidation['error']) {
    super('Nieprawidłowa nazwa profilu');
    this.name = 'ProfileNameInvalidError';
  }
}
export class ProfileBusyError extends Error {
  constructor() {
    super('Profil jest używany w innej karcie');
    this.name = 'ProfileBusyError';
  }
}

export class ProfileRepository {
  constructor(private readonly db: CpreDb) {}

  async list(): Promise<ProfileRecord[]> {
    const all = await this.db.profiles.toArray();
    return all.sort((a, b) => a.name.localeCompare(b.name, 'pl'));
  }

  async get(id: string): Promise<ProfileRecord | undefined> {
    return this.db.profiles.get(id);
  }

  /** Create inside a transaction so the uniqueness check cannot race (docs/03). */
  async create(rawName: string): Promise<ProfileRecord> {
    const v = validateProfileName(rawName);
    if (!v.ok) throw new ProfileNameInvalidError(v.error);
    const record: ProfileRecord = {
      id: crypto.randomUUID(),
      name: v.normalized,
      normalizedName: foldName(v.normalized),
      createdAt: new Date().toISOString(),
      preferences: {},
    };
    await this.db.transaction('rw', this.db.profiles, async () => {
      const clash = await this.db.profiles.where('normalizedName').equals(record.normalizedName).first();
      if (clash) throw new ProfileNameConflictError();
      await this.db.profiles.add(record);
    });
    return record;
  }

  /** Rename keeps the ID and all references; validates collision transactionally. */
  async rename(id: string, rawName: string): Promise<ProfileRecord> {
    const v = validateProfileName(rawName);
    if (!v.ok) throw new ProfileNameInvalidError(v.error);
    const folded = foldName(v.normalized);
    return this.db.transaction('rw', this.db.profiles, async () => {
      const existing = await this.db.profiles.get(id);
      if (!existing) throw new Error('Profil nie istnieje');
      const clash = await this.db.profiles.where('normalizedName').equals(folded).first();
      if (clash && clash.id !== id) throw new ProfileNameConflictError();
      const updated: ProfileRecord = { ...existing, name: v.normalized, normalizedName: folded };
      await this.db.profiles.put(updated);
      return updated;
    });
  }

  /**
   * Deletes ONLY this profile's learner records; content stores are untouched.
   * Refuses while another tab holds an active lease on this profile's attempt.
   */
  async deleteProfile(id: string, confirmName: string, ownWriterId?: string): Promise<void> {
    const profile = await this.db.profiles.get(id);
    if (!profile) throw new Error('Profil nie istnieje');
    if (foldName(confirmName.normalize('NFC').trim()) !== profile.normalizedName) {
      throw new Error('Potwierdzenie nazwy nie zgadza się');
    }
    const now = Date.now();
    const active = await this.db.attempts.where('profileId').equals(id).toArray();
    const foreignLease = active.find((a) => a.leaseOwner !== undefined && a.leaseOwner !== ownWriterId && (a.leaseUntil ?? 0) > now);
    if (foreignLease) throw new ProfileBusyError();
    await this.db.transaction('rw', [this.db.profiles, ...learnerStores.map((s) => this.db.table(s))], async () => {
      for (const store of learnerStores) {
        await this.db.table(store).where('profileId').equals(id).delete();
      }
      await this.db.profiles.delete(id);
    });
  }
}
