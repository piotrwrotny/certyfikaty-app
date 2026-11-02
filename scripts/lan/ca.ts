/**
 * Portable backup of Caddy's local CA (docs/09). The same CA on every server keeps
 * devices that already trust it working after the server moves to another computer.
 * The bundle contains PRIVATE KEYS: never commit it, move it by hand (USB, scp).
 */
import { X509Certificate, createPrivateKey } from 'node:crypto';
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export const CA_FILES = ['root.crt', 'root.key', 'intermediate.crt', 'intermediate.key'] as const;
const FORMAT = 'caddy-local-ca/1';

export interface CaBundle {
  format: typeof FORMAT;
  createdAt: string;
  /** SHA-256 of the root certificate, colon-separated, as shown by device certificate viewers. */
  rootSha256: string;
  files: Record<(typeof CA_FILES)[number], string>;
}

export function rootFingerprint(rootCrtPem: string | Buffer): string {
  return new X509Certificate(rootCrtPem).fingerprint256;
}

/** Throws unless the key belongs to the certificate. */
function assertPair(cert: Buffer, key: Buffer, name: string): void {
  if (!new X509Certificate(cert).checkPrivateKey(createPrivateKey(key))) throw new Error(`${name}: klucz prywatny nie pasuje do certyfikatu.`);
}

export function exportCa(dir: string, outFile: string, now: Date = new Date()): string {
  const missing = CA_FILES.filter((f) => !existsSync(join(dir, f)));
  if (missing.length > 0) {
    throw new Error(`Brak plików CA w ${dir}: ${missing.join(', ')}. Uruchom raz npm run lan:serve, żeby Caddy je utworzył.`);
  }
  const read = (f: (typeof CA_FILES)[number]) => readFileSync(join(dir, f));
  assertPair(read('root.crt'), read('root.key'), 'root');
  assertPair(read('intermediate.crt'), read('intermediate.key'), 'intermediate');
  const bundle: CaBundle = {
    format: FORMAT,
    createdAt: now.toISOString(),
    rootSha256: rootFingerprint(read('root.crt')),
    files: {
      'root.crt': read('root.crt').toString('base64'),
      'root.key': read('root.key').toString('base64'),
      'intermediate.crt': read('intermediate.crt').toString('base64'),
      'intermediate.key': read('intermediate.key').toString('base64'),
    },
  };
  writeFileSync(outFile, `${JSON.stringify(bundle, null, 2)}\n`, { encoding: 'utf-8', mode: 0o600 });
  return bundle.rootSha256;
}

function parseBundle(text: string): CaBundle {
  const raw = JSON.parse(text) as Partial<CaBundle> | null;
  if (raw === null || typeof raw !== 'object' || raw.format !== FORMAT || typeof raw.rootSha256 !== 'string' || typeof raw.files !== 'object' || raw.files === null) {
    throw new Error('To nie jest kopia CA z npm run lan:ca export.');
  }
  for (const f of CA_FILES) {
    if (typeof raw.files[f] !== 'string' || raw.files[f] === '') throw new Error(`Kopia CA nie zawiera pliku ${f}.`);
  }
  return raw as CaBundle;
}

/**
 * Writes the CA into Caddy's directory. Refuses to replace a different existing CA unless `force`
 * (replacing it makes every device that trusts the old one distrust this server).
 */
export function importCa(bundleFile: string, dir: string, opts: { force: boolean }): { fingerprint: string; replaced: boolean } {
  const bundle = parseBundle(readFileSync(bundleFile, 'utf-8'));
  const buf = (f: (typeof CA_FILES)[number]) => Buffer.from(bundle.files[f], 'base64');
  const fingerprint = rootFingerprint(buf('root.crt'));
  if (fingerprint !== bundle.rootSha256) throw new Error('Odcisk certyfikatu głównego nie zgadza się z zapisanym w kopii (plik uszkodzony?).');
  assertPair(buf('root.crt'), buf('root.key'), 'root');
  assertPair(buf('intermediate.crt'), buf('intermediate.key'), 'intermediate');

  const existingRoot = join(dir, 'root.crt');
  let replaced = false;
  if (existsSync(existingRoot)) {
    if (rootFingerprint(readFileSync(existingRoot)) === fingerprint) return { fingerprint, replaced: false };
    if (!opts.force) {
      throw new Error(`W ${dir} jest już inne CA (urządzenia ufają jemu). Nadpisz tylko świadomie: dodaj --force.`);
    }
    replaced = true;
  }
  mkdirSync(dir, { recursive: true });
  for (const f of CA_FILES) {
    const target = join(dir, f);
    writeFileSync(target, buf(f), { mode: f.endsWith('.key') ? 0o600 : 0o644 });
    if (process.platform !== 'win32') chmodSync(target, f.endsWith('.key') ? 0o600 : 0o644);
  }
  return { fingerprint, replaced };
}

/** Directory of Caddy's local CA, derived from the root certificate path. */
export const caDirOf = (rootCertPath: string): string => dirname(rootCertPath);
