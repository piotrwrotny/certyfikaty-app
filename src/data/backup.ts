/**
 * Single-profile export/import (docs/03, schemas/profile-backup.schema.json).
 * SHA-256 is computed over the exact UTF-8 bytes of the decoded payloadJson
 * string; never over a re-serialized object. Import creates a NEW local
 * profileId, never merges or overwrites, and keeps original IDs in provenance.
 */
import type { CpreDb, ProfileRecord } from './db.ts';
import { learnerStores, requireProfileId } from './db.ts';
import { foldName } from './profiles.ts';

export const BACKUP_SCHEMA_VERSION = '1.0.0';
export const BACKUP_MAX_BYTES = 64 * 1024 * 1024;

export interface BackupEnvelope {
  schemaVersion: '1.0.0';
  exportedAt: string;
  appVersion: string;
  payloadJson: string;
  payloadSha256: string;
}

interface BackupPayload {
  profile: { id: string; name: string; createdAt: string; preferences: Record<string, unknown> };
  records: Record<string, { id?: string; profileId: string;[k: string]: unknown }[]>;
  snapshots: { id: string; revision: string; payload: Record<string, unknown> }[];
  historyCompleteness: 'complete-local' | 'imported-unverified' | 'partial';
  sourceDeviceLabel?: string;
}

const RECORD_KEYS = ['attempts', 'answers', 'evaluations', 'exposures', 'contacts', 'navigationContexts', 'evidence', 'plans', 'issues'] as const;
const STORE_BY_KEY: Record<(typeof RECORD_KEYS)[number], (typeof learnerStores)[number]> = {
  attempts: 'attempts',
  answers: 'answers',
  evaluations: 'evaluations',
  exposures: 'exposures',
  contacts: 'contacts',
  navigationContexts: 'navigationContexts',
  evidence: 'evidence',
  plans: 'plans',
  issues: 'issues',
};

async function sha256HexOfString(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export class BackupError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = 'BackupError';
  }
}

export async function exportProfile(db: CpreDb, profileId: string, appVersion: string): Promise<BackupEnvelope> {
  requireProfileId(profileId);
  const profile = await db.profiles.get(profileId);
  if (!profile) throw new BackupError('Profil nie istnieje', 'NO_PROFILE');

  const records: BackupPayload['records'] = {};
  for (const key of RECORD_KEYS) {
    const rows = await db.table(STORE_BY_KEY[key]).where('profileId').equals(profileId).toArray() as { profileId: string;[k: string]: unknown }[];
    records[key] = rows.map((row) => ({ id: backupRowId(key, row), ...row }));
  }
  // Only snapshots referenced by this profile's attempts (not the unused corpus).
  const attempts = records['attempts'] ?? [];
  const snapshotKeys = new Set<string>();
  for (const a of attempts) {
    const pinned = (a as { pinnedItems?: { snapshotKey: string }[] }).pinnedItems ?? [];
    for (const p of pinned) snapshotKeys.add(p.snapshotKey);
  }
  const snapshots: BackupPayload['snapshots'] = [];
  for (const key of snapshotKeys) {
    const snap = await db.snapshots.get(key);
    if (snap) snapshots.push({ id: snap.itemId, revision: snap.revision, payload: snap.payload });
  }

  const payload: BackupPayload = {
    profile: { id: profile.id, name: profile.name, createdAt: profile.createdAt, preferences: profile.preferences },
    records,
    snapshots,
    historyCompleteness: 'complete-local',
    sourceDeviceLabel: `Eksport lokalny ${new Date().toISOString()}`,
  };
  const payloadJson = JSON.stringify(payload, null, 2);
  return {
    schemaVersion: BACKUP_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    appVersion,
    payloadJson,
    payloadSha256: await sha256HexOfString(payloadJson),
  };
}

function backupRowId(key: string, row: Record<string, unknown>): string {
  if (typeof row['id'] === 'string') return row['id'];
  if (key === 'answers') return `${String(row['attemptId'])}/${String(row['itemInstanceId'])}`;
  return crypto.randomUUID();
}

export interface ImportPreview {
  name: string;
  attemptCount: number;
  answerCount: number;
  historyCompleteness: BackupPayload['historyCompleteness'];
}

export interface ParsedBackup {
  envelope: BackupEnvelope;
  payload: BackupPayload;
  preview: ImportPreview;
}

/** Verify digest FIRST over exact bytes of payloadJson, then parse and validate shape. */
export async function parseBackup(text: string): Promise<ParsedBackup> {
  if (new TextEncoder().encode(text).byteLength > BACKUP_MAX_BYTES) throw new BackupError('Plik kopii jest zbyt duży', 'TOO_LARGE');
  let envelope: unknown;
  try {
    envelope = JSON.parse(text);
  } catch {
    throw new BackupError('Plik nie jest poprawnym JSON', 'BAD_JSON');
  }
  if (typeof envelope !== 'object' || envelope === null) throw new BackupError('Nieprawidłowa struktura kopii', 'BAD_ENVELOPE');
  const e = envelope as Record<string, unknown>;
  if (e['schemaVersion'] !== BACKUP_SCHEMA_VERSION) throw new BackupError('Nieobsługiwana wersja formatu kopii', 'BAD_VERSION');
  if (typeof e['payloadJson'] !== 'string' || typeof e['payloadSha256'] !== 'string' || typeof e['exportedAt'] !== 'string' || typeof e['appVersion'] !== 'string') {
    throw new BackupError('Nieprawidłowa struktura kopii', 'BAD_ENVELOPE');
  }
  const digest = await sha256HexOfString(e['payloadJson']);
  if (digest !== e['payloadSha256']) throw new BackupError('Suma kontrolna kopii nie zgadza się', 'DIGEST_MISMATCH');
  let payload: unknown;
  try {
    payload = JSON.parse(e['payloadJson']);
  } catch {
    throw new BackupError('Zawartość kopii nie jest poprawnym JSON', 'BAD_PAYLOAD_JSON');
  }
  const p = payload as Partial<BackupPayload>;
  if (!p.profile || typeof p.profile.id !== 'string' || typeof p.profile.name !== 'string') throw new BackupError('Kopia nie zawiera profilu', 'BAD_PROFILE');
  if (!p.records || typeof p.records !== 'object') throw new BackupError('Kopia nie zawiera rekordów', 'BAD_RECORDS');
  if (!Array.isArray(p.snapshots)) throw new BackupError('Kopia nie zawiera snapshotów', 'BAD_SNAPSHOTS');
  if (!['complete-local', 'imported-unverified', 'partial'].includes(p.historyCompleteness as string)) throw new BackupError('Brak statusu kompletności historii', 'BAD_COMPLETENESS');
  const sourceId = p.profile.id;
  for (const key of RECORD_KEYS) {
    const rows = (p.records as Record<string, unknown>)[key];
    if (!Array.isArray(rows)) throw new BackupError(`Kopia nie zawiera kolekcji ${key}`, 'BAD_RECORDS');
    for (const row of rows) {
      if (typeof row !== 'object' || row === null || (row as Record<string, unknown>)['profileId'] !== sourceId) {
        throw new BackupError('Rekord kopii nie należy do eksportowanego profilu', 'FOREIGN_RECORD');
      }
    }
  }
  const full = p as BackupPayload;
  return {
    envelope: e as unknown as BackupEnvelope,
    payload: full,
    preview: {
      name: full.profile.name,
      attemptCount: full.records['attempts']?.length ?? 0,
      answerCount: full.records['answers']?.length ?? 0,
      historyCompleteness: full.historyCompleteness,
    },
  };
}

/**
 * Import creates a NEW profile with a new profileId; original IDs stay in
 * provenance. Internal references are remapped consistently. A failed import
 * writes nothing (single transaction).
 */
export async function importProfile(db: CpreDb, parsed: ParsedBackup, newName: string): Promise<ProfileRecord> {
  const payload = parsed.payload;
  const newProfileId = crypto.randomUUID();
  const nfc = newName.normalize('NFC').trim();
  const record: ProfileRecord = {
    id: newProfileId,
    name: nfc,
    normalizedName: foldName(nfc),
    createdAt: new Date().toISOString(),
    preferences: {
      ...payload.profile.preferences,
      importProvenance: {
        originalProfileId: payload.profile.id,
        originalName: payload.profile.name,
        exportedAt: parsed.envelope.exportedAt,
        appVersion: parsed.envelope.appVersion,
        historyCompleteness: payload.historyCompleteness === 'complete-local' ? 'imported-unverified' : payload.historyCompleteness,
        sourceDeviceLabel: payload.sourceDeviceLabel ?? null,
      },
    },
  };
  await db.transaction('rw', [db.profiles, db.snapshots, ...learnerStores.map((s) => db.table(s))], async () => {
    const clash = await db.profiles.where('normalizedName').equals(record.normalizedName).first();
    if (clash) throw new BackupError('Profil o tej nazwie już istnieje', 'NAME_CONFLICT');
    await db.profiles.add(record);
    for (const key of RECORD_KEYS) {
      const store = db.table(STORE_BY_KEY[key]);
      for (const row of payload.records[key] ?? []) {
        const { id: _backupRowId, ...rest } = row;
        const remapped: Record<string, unknown> = { ...rest, profileId: newProfileId };
        if (key !== 'answers' && typeof row['id'] === 'string') remapped['id'] = row['id'];
        await store.put(remapped);
      }
    }
    // Snapshots are shared immutable content; put (idempotent) without overwriting different payloads.
    for (const snap of payload.snapshots) {
      const key = `${snap.id}@${snap.revision}`;
      const existing = await db.snapshots.get(key);
      if (!existing) {
        await db.snapshots.add({ key, itemId: snap.id, revision: snap.revision, payload: snap.payload, storedAt: new Date().toISOString() });
      }
    }
  });
  return record;
}
