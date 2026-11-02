/**
 * Operator helper: build the app for the LAN sub-path, serve it over HTTPS with
 * Caddy and print the address to open on devices. Start it when content needs
 * updating, stop it with Ctrl+C. Not a production deployment tool (docs/09).
 *
 *   npm run lan:serve
 *   npm run lan:serve -- --host 192.168.1.50      # IP instead of alfabet.local
 *   npm run lan:serve -- --port 8443 --no-build
 *   npm run lan:serve -- --print-config           # print the Caddyfile and exit
 *   npm run lan:serve -- --tailscale              # own devices: HTTP on 127.0.0.1:8080 behind `tailscale serve`
 */
import { spawn, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { networkInterfaces } from 'node:os';
import { resolve } from 'node:path';
import { appUrl, buildCaddyfile, caddyRootCertPath, normalizeHost, normalizePort } from './lan/caddyfile.ts';

const ROOT = resolve(import.meta.dirname, '..');
const OUT_DIR = resolve(ROOT, 'release-out', 'lan');
const DIST = resolve(ROOT, 'dist');

const args = process.argv.slice(2);
const flag = (n: string) => args.includes(n);
const option = (n: string, d: string) => { const i = args.indexOf(n); return i >= 0 ? (args[i + 1] ?? d) : d; };

// Stały host aplikacji (origin PWA), niezależny od komputera, na którym działa serwer.
// Komputer musi go ogłaszać (mDNS) albo router/DNS musi go wskazywać (docs/09).
const DEFAULT_HOST = 'alfabet.local';
const host = normalizeHost(option('--host', DEFAULT_HOST));
const port = normalizePort(Number(option('--port', '443')));
const base = option('--base', '/cpre/');
// Tryb Tailscale: Caddy tylko podaje pliki po HTTP na 127.0.0.1, a HTTPS z prawdziwym certyfikatem
// wystawia `tailscale serve` — urządzenia nie instalują żadnego certyfikatu CA (docs/09).
const tailscale = flag('--tailscale');
const localPort = normalizePort(Number(option('--local-port', '8080')));

/** Nazwa DNS tego komputera w sieci Tailscale (np. alfabet.tailnet.ts.net), jeśli da się ją odczytać. */
function tailscaleDnsName(): string | null {
  const r = spawnSync('tailscale', ['status', '--json'], { encoding: 'utf-8' });
  if (r.status !== 0) return null;
  try {
    const self = (JSON.parse(r.stdout) as { Self?: { DNSName?: unknown } }).Self;
    return typeof self?.DNSName === 'string' && self.DNSName !== '' ? self.DNSName.replace(/\.$/, '') : null;
  } catch {
    return null;
  }
}

function lanAddresses(): string[] {
  return Object.values(networkInterfaces()).flat()
    .filter((i): i is NonNullable<typeof i> => i !== undefined && i.family === 'IPv4' && !i.internal)
    .map((i) => i.address);
}

function fail(message: string): never {
  console.error(`\nBŁĄD: ${message}`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
const caddyfilePath = resolve(OUT_DIR, 'Caddyfile');
const caddyfile = buildCaddyfile({ host, port, base, distDir: DIST, ...(tailscale ? { loopbackPort: localPort } : {}) });

if (flag('--print-config')) {
  console.log(caddyfile);
  process.exit(0);
}

if (spawnSync('caddy', ['version'], { stdio: 'ignore' }).status !== 0) {
  const hint = process.platform === 'win32' ? 'winget install CaddyServer.Caddy (potem otwórz nowy terminal)'
    : process.platform === 'darwin' ? 'brew install caddy' : 'sudo pacman -S caddy (Arch) lub menedżer pakietów dystrybucji';
  fail(`Nie znaleziono Caddy w PATH. Zainstaluj: ${hint}.`);
}

if (!flag('--no-build')) {
  console.log(`> npm run build (VITE_BASE=${base})`);
  const build = spawnSync('npm', ['run', 'build'], { cwd: ROOT, stdio: 'inherit', shell: true, env: { ...process.env, VITE_BASE: base } });
  if (build.status !== 0) fail('Build nie powiódł się; serwer nie został uruchomiony.');
}
if (!existsSync(resolve(DIST, 'index.html'))) fail('Brak dist/index.html. Uruchom bez --no-build.');

writeFileSync(caddyfilePath, caddyfile, 'utf-8');

if (tailscale) {
  const dns = tailscaleDnsName();
  console.log(`
Caddy podaje aplikację po HTTP tylko na 127.0.0.1:${String(localPort)} (niewidoczne w sieci).
HTTPS wystawia Tailscale. Jednorazowo (zostaje po restarcie):
  tailscale serve --bg --https=443 http://127.0.0.1:${String(localPort)}
Aplikacja:  https://${dns ?? '<nazwa>.<tailnet>.ts.net'}${base.replace(/\/?$/, '/')}${dns === null ? '   (nie odczytano nazwy: uruchom Tailscale i zaloguj się)' : ''}
Urządzenia: Tailscale na każdym, to samo konto; nic więcej nie instalujesz. Zatrzymanie: Ctrl+C.
Zmiana nazwy komputera lub tailnetu = nowy origin = nowa instalacja PWA bez dotychczasowych profili.
`);
} else {
  const url = appUrl(host, port, base);
  const ips = lanAddresses();
  console.log(`
Aplikacja:  ${url}
Host:       ${host}${host.endsWith('.local') ? '  (nazwa mDNS; komputer musi ją ogłaszać, a telefon rozwiązywać)' : ''}
IP komputera: ${ips.length > 0 ? ips.join(', ') : '(nie wykryto)'}  — IP z DHCP może się zmienić; origin PWA to host, więc nie podawaj uczniom IP, jeśli używasz nazwy.
Zatrzymanie: Ctrl+C. Zmiana hosta/portu = nowy origin = nowa instalacja PWA bez dotychczasowych profili.
`);
}

const rootCert = caddyRootCertPath();
const copiedCert = resolve(OUT_DIR, 'caddy-root.crt');
let attempts = 0;
// W trybie Tailscale własne CA nie jest używane, więc nie ma czego kopiować.
const certTimer = tailscale ? undefined : setInterval(() => {
  attempts += 1;
  if (existsSync(rootCert)) {
    clearInterval(certTimer);
    copyFileSync(rootCert, copiedCert);
    console.log(`Certyfikat główny do zainstalowania na telefonach: ${copiedCert}`);
  } else if (attempts >= 60) {
    clearInterval(certTimer);
    console.log(`Nie znaleziono certyfikatu głównego Caddy w: ${rootCert}`);
  }
}, 1000);

const caddy = spawn('caddy', ['run', '--config', caddyfilePath, '--adapter', 'caddyfile'], { stdio: 'inherit' });
const stop = () => { caddy.kill(); };
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
caddy.on('exit', (code) => {
  clearInterval(certTimer);
  process.exit(code ?? 0);
});
