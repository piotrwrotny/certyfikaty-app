import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import type { ValidateFunction } from 'ajv';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

export function sha256HexOfBytes(bytes: Uint8Array): string {
  return createHash('sha256').update(bytes).digest('hex');
}

export function readBytes(relPath: string): Uint8Array {
  return new Uint8Array(readFileSync(resolve(ROOT, relPath)));
}

export function readText(relPath: string): string {
  return readFileSync(resolve(ROOT, relPath), 'utf-8');
}

export function readJson<T>(relPath: string): T {
  return JSON.parse(readText(relPath)) as T;
}

export interface SchemaValidators {
  contentPackage: ValidateFunction;
  contentManifest: ValidateFunction;
  profileBackup: ValidateFunction;
}

export function loadValidators(): SchemaValidators {
  // strict:false — the baseline schemas use `required` inside `not` (valid Draft 2020-12,
  // flagged only by Ajv's strict heuristics). Schemas are read-only baseline.
  // CJS/ESM interop: the default export may arrive wrapped under .default
  const AjvCtor = (Ajv2020 as unknown as { default?: typeof Ajv2020 }).default ?? Ajv2020;
  const formats = (addFormats as unknown as { default?: typeof addFormats }).default ?? addFormats;
  const ajv = new AjvCtor({ allErrors: true, strict: false });
  formats(ajv);
  const pkgSchema = readJson<Record<string, unknown>>('schemas/content-package.schema.json');
  const manifestSchema = readJson<Record<string, unknown>>('schemas/content-manifest.schema.json');
  const backupSchema = readJson<Record<string, unknown>>('schemas/profile-backup.schema.json');
  return {
    contentPackage: ajv.compile(pkgSchema),
    contentManifest: ajv.compile(manifestSchema),
    profileBackup: ajv.compile(backupSchema),
  };
}

export function formatAjvErrors(validate: ValidateFunction): string {
  return (validate.errors ?? []).map((e) => `${e.instancePath || '$'} ${e.message ?? ''}`).join('; ');
}

/** Deterministic JSON: stable key order (insertion), 2-space indent, LF, trailing newline. */
export function stableJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

/** Boolean wrapper: Ajv validators are type guards, which would narrow typed inputs to never. */
export function schemaValid(validate: ValidateFunction, data: unknown): boolean {
  return validate(data);
}
