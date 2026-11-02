import { afterEach, describe, expect, it } from 'vitest';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { CA_FILES, exportCa, importCa, rootFingerprint } from '../../scripts/lan/ca.ts';
import { buildCaddyfile } from '../../scripts/lan/caddyfile.ts';

const FIXTURES = resolve(import.meta.dirname, '..', 'fixtures', 'lan-ca');
const temps: string[] = [];
afterEach(() => { for (const d of temps.splice(0)) rmSync(d, { recursive: true, force: true }); });
const tempDir = () => { const d = mkdtempSync(join(tmpdir(), 'cpre-ca-')); temps.push(d); return d; };

function caDirWithFixtures(): string {
  const d = tempDir();
  for (const f of CA_FILES) copyFileSync(join(FIXTURES, f), join(d, f));
  return d;
}

describe('LAN CA backup', () => {
  it('exports and imports the same CA byte for byte, with a stable fingerprint', () => {
    const src = caDirWithFixtures();
    const bundle = join(tempDir(), 'backup.json');
    const fp = exportCa(src, bundle);
    expect(fp).toBe(rootFingerprint(readFileSync(join(src, 'root.crt'))));
    expect(fp).toMatch(/^([0-9A-F]{2}:){31}[0-9A-F]{2}$/);

    const dest = join(tempDir(), 'pki', 'authorities', 'local');
    const r = importCa(bundle, dest, { force: false });
    expect(r).toEqual({ fingerprint: fp, replaced: false });
    for (const f of CA_FILES) expect(readFileSync(join(dest, f))).toEqual(readFileSync(join(src, f)));
  });

  it('is idempotent for the same CA and refuses to replace a different one without --force', () => {
    const bundle = join(tempDir(), 'backup.json');
    exportCa(caDirWithFixtures(), bundle);

    const same = caDirWithFixtures();
    expect(importCa(bundle, same, { force: false }).replaced).toBe(false);

    // Another CA already in place: devices trust it, so silently replacing it would break them.
    const other = tempDir();
    writeFileSync(join(other, 'root.crt'), readFileSync(join(FIXTURES, 'intermediate.crt')));
    expect(() => importCa(bundle, other, { force: false })).toThrow(/--force/);
    expect(importCa(bundle, other, { force: true }).replaced).toBe(true);
    expect(readFileSync(join(other, 'root.crt'))).toEqual(readFileSync(join(FIXTURES, 'root.crt')));
  });

  it('refuses to export an incomplete or mismatched CA', () => {
    const missing = tempDir();
    mkdirSync(missing, { recursive: true });
    expect(() => exportCa(missing, join(tempDir(), 'b.json'))).toThrow(/Brak plików CA/);

    const mismatched = caDirWithFixtures();
    copyFileSync(join(FIXTURES, 'intermediate.key'), join(mismatched, 'root.key'));
    expect(() => exportCa(mismatched, join(tempDir(), 'b.json'))).toThrow(/nie pasuje/);
  });

  it('rejects foreign, tampered or damaged bundles before writing anything', () => {
    const dir = tempDir();
    const notBundle = join(tempDir(), 'x.json');
    writeFileSync(notBundle, JSON.stringify({ hello: 'world' }));
    expect(() => importCa(notBundle, dir, { force: false })).toThrow(/nie jest kopia CA/);

    const good = join(tempDir(), 'good.json');
    exportCa(caDirWithFixtures(), good);
    const tampered = JSON.parse(readFileSync(good, 'utf-8')) as { rootSha256: string };
    tampered.rootSha256 = tampered.rootSha256.replace(/^../, 'FF').replace(/:..$/, ':00');
    const bad = join(tempDir(), 'bad.json');
    writeFileSync(bad, JSON.stringify(tampered));
    expect(() => importCa(bad, dir, { force: false })).toThrow(/Odcisk/);
    expect(() => readFileSync(join(dir, 'root.crt'))).toThrow();
  });
});

describe('LAN Caddyfile: certificate download', () => {
  const opts = { host: 'alfabet.local', port: 443, base: '/cpre/', distDir: 'C:\\work\\dist', caDownload: { dir: 'C:\\Users\\u\\AppData\\Roaming\\Caddy\\pki\\authorities\\local', port: 80 } };

  it('serves only /ca.crt over plain HTTP and redirects everything else to the HTTPS origin', () => {
    const c = buildCaddyfile(opts);
    expect(c).toContain('http://:80 {');
    expect(c).toContain('root * "C:/Users/u/AppData/Roaming/Caddy/pki/authorities/local"');
    expect(c).toContain('rewrite * /root.crt');
    expect(c).toContain('header Content-Type "application/x-x509-ca-cert"');
    expect(c).toContain('redir https://alfabet.local{uri} 302');
    expect(buildCaddyfile({ ...opts, port: 8443, caDownload: { ...opts.caDownload, port: 8081 } })).toContain('redir https://alfabet.local:8443{uri} 302');
  });

  it('is absent unless requested and never leaks the private key path', () => {
    const { caDownload: _unused, ...without } = opts;
    expect(buildCaddyfile(without)).not.toContain('http://:');
    expect(buildCaddyfile(opts)).not.toContain('root.key');
  });

  it('rejects a CA directory that could break out of the Caddyfile', () => {
    expect(() => buildCaddyfile({ ...opts, caDownload: { dir: 'C:\\x"y', port: 80 } })).toThrow();
    expect(() => buildCaddyfile({ ...opts, caDownload: { dir: 'C:\\ca', port: 0 } })).toThrow();
  });
});
