/**
 * Test-only static LAN host (NOT a production server; docs/09). Serves a built
 * app under a sub-path (default /cpre/), with production-like headers, real 404
 * for missing JSON, and controllable content/app states for e2e failure tests:
 *
 *   POST /__test/state  { content?: Mode, app?: 'a' | 'b' }
 *
 * Content modes:
 *   A          dist content (learner-0001, TECH01@r1)
 *   B          learner-0002: TECH01@r2 with a changed first stem
 *   withdraw   learner-0003: B + withdrawal (key-disputed) of TECH-A1@r1 and TECH-P1@r1
 *   bad-digest learner-0009: package bytes differ from manifest SHA-256
 *   truncated  learner-0009: connection cut mid-package
 *   bad-schema learner-0009: package fails schema/semantics
 *   portal     manifest URL answers 200 text/html (captive portal)
 *   down       manifest URL answers 503
 *   hang       manifest URL never answers (client 8 s timeout)
 *   incompatible learner-0009 requiring app 9.0.0
 *   rollback   learner-0010: TECH01@r1 again with a higher sequence
 */
import { createServer, type ServerResponse } from 'node:http';
import { createHash } from 'node:crypto';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, extname, normalize, sep } from 'node:path';

const args = process.argv.slice(2);
const arg = (n: string, d: string) => { const i = args.indexOf(n); return i >= 0 ? (args[i + 1] ?? d) : d; };
const ROOT = resolve(import.meta.dirname, '..', '..');
const PORT = Number(arg('--port', '4300'));
const BASE = arg('--base', '/cpre/');
const DIST_A = resolve(ROOT, arg('--dist', 'dist-e2e'));
const DIST_B = resolve(ROOT, arg('--dist-b', 'dist-e2e-b'));

type Mode = 'A' | 'B' | 'withdraw' | 'bad-digest' | 'truncated' | 'bad-schema' | 'portal' | 'down' | 'hang' | 'incompatible' | 'rollback';
let mode: Mode = 'A';
let app: 'a' | 'b' = 'a';
const requests: string[] = [];

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml',
};

const sha = (b: Buffer) => createHash('sha256').update(b).digest('hex');

interface Pkg { packageId: string; revision: string; questions: { id: string; revision: string; stemMarkdown: string }[]; [k: string]: unknown }
const tech = JSON.parse(readFileSync(resolve(ROOT, 'content/normalized/TECH01.r1.json'), 'utf-8')) as Pkg;

function pkgBytes(p: Pkg): Buffer { return Buffer.from(`${JSON.stringify(p, null, 2)}\n`, 'utf-8'); }

function techR2(): Pkg {
  return { ...tech, revision: 'r2', questions: tech.questions.map((q, i) => (i === 0 ? { ...q, revision: 'r2', stemMarkdown: `${q.stemMarkdown} (rewizja r2)` } : q)), forms: (tech['forms'] as { itemRefs: { id: string; revision: string }[] }[]).map((f) => ({ ...f, itemRefs: f.itemRefs.map((r) => (r.id === tech.questions[0]?.id ? { ...r, revision: 'r2' } : r)) })) };
}

interface Release { manifest: Record<string, unknown>; files: Map<string, Buffer>; }

function release(seq: number, pkgs: { pkg: Pkg; bytes?: Buffer; shaOverride?: string }[], extra: Record<string, unknown> = {}): Release {
  const releaseId = `learner-${String(seq).padStart(4, '0')}`;
  const files = new Map<string, Buffer>();
  const entries = pkgs.map(({ pkg, bytes, shaOverride }) => {
    const real = pkgBytes(pkg);
    const url = `releases/${releaseId}/packages/${pkg.packageId}.${pkg.revision}.json`;
    files.set(url, bytes ?? real);
    return { packageId: pkg.packageId, revision: pkg.revision, url, bytes: real.byteLength, sha256: shaOverride ?? sha(real) };
  });
  return {
    manifest: {
      schemaVersion: '1.0.0', releaseId, releaseSequence: seq, channel: 'learner', createdAt: '2026-11-02T00:00:00Z',
      compatibility: { contentSchemaVersion: '1.0.0', minAppVersion: '0.1.0', maxAppMajor: 0 },
      packages: entries, withdrawals: [], releaseNote: `test release ${releaseId}`, publicationChannel: 'internal-lan', ...extra,
    },
    files,
  };
}

function currentRelease(): Release | null {
  switch (mode) {
    case 'B': return release(2, [{ pkg: techR2() }]);
    case 'withdraw': return release(3, [{ pkg: techR2() }], { withdrawals: [
      { decisionId: 'WD-TEST-1', itemRef: { id: 'TECH-P1', revision: 'r1' }, status: 'key-disputed', reasonCode: 'E2E', decidedAt: '2026-11-02T00:00:00Z', decisionRef: 'test-decision' },
      { decisionId: 'WD-TEST-2', itemRef: { id: 'TECH-A1', revision: 'r1' }, status: 'withdrawn', reasonCode: 'E2E', decidedAt: '2026-11-02T00:00:00Z', decisionRef: 'test-decision' },
    ] });
    case 'bad-digest': {
      const b = techR2();
      const real = pkgBytes(b);
      const tampered = Buffer.from(real);
      tampered[10] = tampered[10] === 0x41 ? 0x42 : 0x41;
      return release(9, [{ pkg: { ...b, revision: 'r9' }, bytes: tampered }]);
    }
    case 'truncated': return release(9, [{ pkg: { ...techR2(), revision: 'r9' } }]);
    case 'bad-schema': {
      const broken = { ...techR2(), revision: 'r9', questions: tech.questions.map((q) => ({ ...q, rationales: [] })) } as Pkg;
      return release(9, [{ pkg: broken }]);
    }
    case 'incompatible': return release(9, [{ pkg: { ...techR2(), revision: 'r9' } }], { compatibility: { contentSchemaVersion: '1.0.0', minAppVersion: '9.0.0', maxAppMajor: 9 } });
    case 'rollback': return release(10, [{ pkg: tech }]);
    case 'A': case 'portal': case 'down': case 'hang': return null;
  }
}

function send(res: ServerResponse, status: number, body: Buffer | string, type: string, cache: string): void {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': cache, 'X-Content-Type-Options': 'nosniff' });
  res.end(body);
}

function safeJoin(root: string, rel: string): string | null {
  const p = normalize(resolve(root, rel));
  return p.startsWith(root + sep) || p === root ? p : null;
}

const server = createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${String(PORT)}`);
  requests.push(url.pathname);
  if (url.pathname === '/__test/state' && req.method === 'POST') {
    let body = '';
    req.on('data', (c: Buffer) => { body += c.toString(); });
    req.on('end', () => {
      const s = JSON.parse(body || '{}') as { content?: Mode; app?: 'a' | 'b' };
      if (s.content) mode = s.content;
      if (s.app) app = s.app;
      send(res, 200, JSON.stringify({ mode, app }), MIME['.json'] ?? '', 'no-store');
    });
    return;
  }
  if (url.pathname === '/__test/requests') {
    send(res, 200, JSON.stringify(requests.splice(0)), MIME['.json'] ?? '', 'no-store');
    return;
  }
  if (!url.pathname.startsWith(BASE)) {
    send(res, 404, 'Not found', 'text/plain', 'no-store');
    return;
  }
  const rel = decodeURIComponent(url.pathname.slice(BASE.length));
  const dist = app === 'b' ? DIST_B : DIST_A;

  // ---- content (same origin, own LAN host) ----
  if (rel.startsWith('content/')) {
    const sub = rel.slice('content/'.length);
    if (sub === 'manifest.json') {
      if (mode === 'portal') { send(res, 200, '<!doctype html><title>Zaloguj się</title><p>Portal logowania</p>', MIME['.html'] ?? '', 'no-store'); return; }
      if (mode === 'down') { send(res, 503, 'Service unavailable', 'text/plain', 'no-store'); return; }
      if (mode === 'hang') { setTimeout(() => { res.destroy(); }, 20_000); return; }
      const r = currentRelease();
      if (r) { send(res, 200, JSON.stringify(r.manifest, null, 2), MIME['.json'] ?? '', 'no-store'); return; }
    } else {
      const r = currentRelease();
      const buf = r?.files.get(sub);
      if (buf) {
        if (mode === 'truncated') {
          res.writeHead(200, { 'Content-Type': MIME['.json'] ?? '', 'Content-Length': String(buf.byteLength) });
          res.write(buf.subarray(0, Math.floor(buf.byteLength / 2)));
          setTimeout(() => { res.destroy(); }, 50);
          return;
        }
        send(res, 200, buf, MIME['.json'] ?? '', 'public, max-age=31536000, immutable');
        return;
      }
    }
    const file = safeJoin(resolve(DIST_A, 'content'), sub);
    if (file && existsSync(file) && statSync(file).isFile()) {
      send(res, 200, readFileSync(file), MIME[extname(file)] ?? 'application/octet-stream', sub === 'manifest.json' ? 'no-store' : 'public, max-age=31536000, immutable');
      return;
    }
    send(res, 404, JSON.stringify({ error: 'not found' }), MIME['.json'] ?? '', 'no-store'); // real 404, never SPA HTML
    return;
  }

  // ---- app shell ----
  const target = rel === '' ? 'index.html' : rel;
  const file = safeJoin(dist, target);
  if (file && existsSync(file) && statSync(file).isFile()) {
    const ext = extname(file);
    const cache = target === 'index.html' || target === 'sw.js' || ext === '.webmanifest' ? 'no-cache' : target.startsWith('assets/') ? 'public, max-age=31536000, immutable' : 'no-cache';
    send(res, 200, readFileSync(file), MIME[ext] ?? 'application/octet-stream', cache);
    return;
  }
  if (extname(target) === '' && (req.headers.accept ?? '').includes('text/html')) {
    send(res, 200, readFileSync(resolve(dist, 'index.html')), MIME['.html'] ?? '', 'no-cache');
    return;
  }
  send(res, 404, 'Not found', 'text/plain', 'no-store');
});

server.listen(PORT, () => {
  console.log(`test LAN host on http://localhost:${String(PORT)}${BASE} (dist=${DIST_A})`);
});
