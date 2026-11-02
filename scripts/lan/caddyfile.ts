/**
 * Caddyfile for the operator's LAN host (docs/09): static app shell under a
 * sub-path, internal HTTPS, production-like cache rules, real 404 for missing
 * files (never SPA HTML with 200 for JSON/assets). Pure string building, so it
 * is unit-tested without Caddy installed.
 */
import { homedir } from 'node:os';
import { join } from 'node:path';

export interface CaddyfileOptions {
  /** DNS name or IPv4 address the devices will open; part of the PWA origin. */
  host: string;
  port: number;
  /** Sub-path the app was built for (VITE_BASE), e.g. "/cpre/". */
  base: string;
  /** Absolute path of the built app (dist). */
  distDir: string;
}

const HOST_RE = /^[a-z0-9]([a-z0-9._-]*[a-z0-9])?$/;

export function normalizeHost(host: string): string {
  const h = host.trim().toLowerCase();
  if (!HOST_RE.test(h)) throw new Error(`Niepoprawny host: "${host}" (dozwolone litery, cyfry, '.', '-', '_').`);
  return h;
}

export function normalizePort(port: number): number {
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error(`Niepoprawny port: ${String(port)}.`);
  return port;
}

/** "/cpre/" → "/cpre" (no trailing slash, leading slash required, not just "/"). */
export function basePrefix(base: string): string {
  const p = `/${base.trim().replace(/^\/+|\/+$/g, '')}`;
  if (p === '/' || !/^\/[A-Za-z0-9._~/-]+$/.test(p)) throw new Error(`Niepoprawna ścieżka bazowa: "${base}" (np. /cpre/).`);
  return p;
}

export function siteAddress(host: string, port: number): string {
  return port === 443 ? host : `${host}:${String(port)}`;
}

export function appUrl(host: string, port: number, base: string): string {
  return `https://${siteAddress(host, port)}${basePrefix(base)}/`;
}

/** Where Caddy keeps its local CA; the root certificate is what devices must trust. */
export function caddyRootCertPath(env: NodeJS.ProcessEnv = process.env, platform: NodeJS.Platform = process.platform): string {
  const sub = join('pki', 'authorities', 'local', 'root.crt');
  if (platform === 'win32') return join(env['APPDATA'] ?? join(homedir(), 'AppData', 'Roaming'), 'Caddy', sub);
  if (platform === 'darwin') return join(homedir(), 'Library', 'Application Support', 'Caddy', sub);
  return join(env['XDG_DATA_HOME'] ?? join(homedir(), '.local', 'share'), 'caddy', sub);
}

export function buildCaddyfile(o: CaddyfileOptions): string {
  const host = normalizeHost(o.host);
  const port = normalizePort(o.port);
  const prefix = basePrefix(o.base);
  // Forward slashes work for Caddy on Windows and avoid escape issues.
  const root = o.distDir.replace(/\\/g, '/');
  if (/["{}\r\n]/.test(root)) throw new Error(`Niedozwolone znaki w ścieżce dist: ${o.distDir}`);
  return `# Generowane przez npm run lan:serve — nie edytuj, nie commituj.
{
	admin off
	auto_https disable_redirects
}

${siteAddress(host, port)} {
	tls internal
	encode zstd gzip
	header X-Content-Type-Options nosniff

	redir / ${prefix}/
	redir ${prefix} ${prefix}/

	handle_path ${prefix}/* {
		root * "${root}"

		# Fallback na app shell tylko dla tras nawigacji (bez rozszerzenia, Accept: text/html).
		# Brakujący plik z rozszerzeniem (np. JSON paczki) dostaje prawdziwe 404.
		@shell {
			not path_regexp \\.[A-Za-z0-9]+$
			header Accept *text/html*
		}
		rewrite @shell /index.html

		@immutable path /assets/* /content/releases/*
		header @immutable Cache-Control "public, max-age=31536000, immutable"

		@nostore path /content/manifest.json
		header @nostore Cache-Control "no-store"

		@revalidate not path /assets/* /content/releases/* /content/manifest.json
		header @revalidate Cache-Control "no-cache"

		@webmanifest path *.webmanifest
		header @webmanifest Content-Type "application/manifest+json"

		file_server
	}

	# Poza zakresem aplikacji: prawdziwe 404.
	handle {
		respond "Not found" 404
	}

	# Błąd (np. brakujący plik paczki) nigdy nie dziedziczy długiego cache z reguły immutable.
	handle_errors {
		header Cache-Control "no-store"
		respond "{err.status_code} {err.status_text}" {err.status_code}
	}
}
`;
}
