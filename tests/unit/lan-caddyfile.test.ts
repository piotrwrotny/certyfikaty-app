import { describe, expect, it } from 'vitest';
import { appUrl, basePrefix, buildCaddyfile, caddyRootCertPath, normalizeHost, normalizePort, siteAddress } from '../../scripts/lan/caddyfile.ts';

const opts = { host: 'PC-01.local', port: 443, base: '/cpre/', distDir: 'C:\\work\\app\\dist' };

describe('LAN Caddyfile', () => {
  it('serves the app under the base path with internal TLS and a normalized root', () => {
    const c = buildCaddyfile(opts);
    expect(c).toContain('pc-01.local {');
    expect(c).toContain('tls internal');
    expect(c).toContain('handle_path /cpre/* {');
    expect(c).toContain('root * "C:/work/app/dist"');
    expect(c).toContain('redir /cpre /cpre/');
    expect(c).toContain('redir / /cpre/');
  });

  it('applies the cache rules of docs/09 with disjoint matchers', () => {
    const c = buildCaddyfile(opts);
    expect(c).toContain('@immutable path /assets/* /content/releases/*');
    expect(c).toContain('header @nostore Cache-Control "no-store"');
    expect(c).toContain('@revalidate not path /assets/* /content/releases/* /content/manifest.json');
  });

  it('never caches errors and answers 404 outside the base path', () => {
    const c = buildCaddyfile(opts);
    expect(c).toMatch(/handle_errors \{\s+header Cache-Control "no-store"/);
    expect(c).toMatch(/handle \{\s+respond "Not found" 404/);
    expect(c).toContain('header @webmanifest Content-Type "application/manifest+json"');
  });

  it('falls back to the shell only for extension-less HTML navigations', () => {
    const c = buildCaddyfile(opts);
    expect(c).toContain('not path_regexp \\.[A-Za-z0-9]+$');
    expect(c).toContain('header Accept *text/html*');
    expect(c).toContain('rewrite @shell /index.html');
  });

  it('puts a non-default port into the site address and the URL', () => {
    expect(siteAddress('pc.local', 8443)).toBe('pc.local:8443');
    expect(appUrl('pc.local', 8443, '/cpre/')).toBe('https://pc.local:8443/cpre/');
    expect(appUrl('192.168.1.50', 443, 'cpre')).toBe('https://192.168.1.50/cpre/');
    expect(buildCaddyfile({ ...opts, port: 8443 })).toContain('pc-01.local:8443 {');
  });

  it('behind a TLS-terminating proxy serves plain HTTP on loopback only, with the same cache rules', () => {
    const c = buildCaddyfile({ ...opts, host: 'ignored', loopbackPort: 8080 });
    expect(c).toContain('auto_https off');
    expect(c).toMatch(/\n:8080 \{\n\tbind 127\.0\.0\.1\n/);
    expect(c).not.toContain('tls internal');
    expect(c).toContain('handle_path /cpre/* {');
    expect(c).toContain('header @nostore Cache-Control "no-store"');
    expect(() => buildCaddyfile({ ...opts, loopbackPort: 0 })).toThrow();
  });

  it('rejects values that could break out of the Caddyfile', () => {
    expect(() => normalizeHost('evil {\n}')).toThrow();
    expect(() => normalizeHost('')).toThrow();
    expect(() => normalizePort(0)).toThrow();
    expect(() => normalizePort(70000)).toThrow();
    expect(() => basePrefix('/')).toThrow();
    expect(() => basePrefix('/a b/')).toThrow();
    expect(() => buildCaddyfile({ ...opts, distDir: 'C:\\x"y' })).toThrow();
  });

  it('locates the Caddy root certificate per platform', () => {
    expect(caddyRootCertPath({ APPDATA: 'C:\\Users\\u\\AppData\\Roaming' }, 'win32')).toMatch(/Caddy[\\/]pki[\\/]authorities[\\/]local[\\/]root\.crt$/);
    expect(caddyRootCertPath({ XDG_DATA_HOME: '/x' }, 'linux').replace(/\\/g, '/')).toBe('/x/caddy/pki/authorities/local/root.crt');
  });
});
