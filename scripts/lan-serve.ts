/**
 * Operator helper: build the app for the LAN sub-path, serve it over HTTPS with
 * Caddy and print the address to open on devices. Start it when content needs
 * updating, stop it with Ctrl+C. Not a production deployment tool (docs/09).
 *
 *   npm run lan:serve
 *   npm run lan:serve -- --host 192.168.1.50      # IP instead of alfabet.local
 *   npm run lan:serve -- --port 8443 --no-build
 *   npm run lan:serve -- --print-config           # print the Caddyfile and exit
 *   npm run lan:serve -- --ca-port 8081           # certificate download on another HTTP port
 *   npm run lan:serve -- --no-ca-download         # do not serve /ca.crt
 */
import { spawn, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { networkInterfaces } from 'node:os';
import { resolve } from 'node:path';
import { caDirOf, rootFingerprint } from './lan/ca.ts';
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
const caPort = normalizePort(Number(option('--ca-port', '80')));
const rootCert = caddyRootCertPath();

/** True when this process could bind the port now (free and permitted), so Caddy will not fail on it. */
function canListen(p: number): Promise<boolean> {
  return new Promise((done) => {
    const probe = createServer();
    probe.once('error', () => { done(false); });
    probe.listen(p, () => { probe.close(() => { done(true); }); });
  });
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

// Pobranie certyfikatu po HTTP działa tylko, gdy port jest wolny i dozwolony; inaczej Caddy nie wystartowałby w ogóle.
const printOnly = flag('--print-config');
const caDownload = !flag('--no-ca-download') && (printOnly || await canListen(caPort));
if (!flag('--no-ca-download') && !caDownload) {
  console.log(`Pobranie certyfikatu z serwera wyłączone: port ${String(caPort)} jest zajęty albo wymaga uprawnień (Linux: sudo setcap cap_net_bind_service=+ep "$(command -v caddy)"). Użyj --ca-port <n> albo --no-ca-download.\n`);
}
const caddyfile = buildCaddyfile({ host, port, base, distDir: DIST, ...(caDownload ? { caDownload: { dir: caDirOf(rootCert), port: caPort } } : {}) });

if (printOnly) {
  console.log(caddyfile);
  process.exit(0);
}

if (spawnSync('caddy', ['version'], { stdio: 'ignore' }).status !== 0) {
  const hint = process.platform === 'win32' ? 'winget install CaddyServer.Caddy (potem otwórz nowy terminal)'
    : process.platform === 'darwin' ? 'brew install caddy' : 'sudo pacman -S caddy (Arch) lub menedżer pakietów dystrybucji';
  fail(`Nie znaleziono Caddy w PATH. Zainstaluj: ${hint}.`);
}

// Wolny i dozwolony port HTTPS: sprawdzamy sami, żeby zamiast błędu Caddy podać konkretne wyjście.
if (!(await canListen(port))) {
  const linuxHint = process.platform === 'linux'
    ? ` Na Linuksie port poniżej 1024 wymaga uprawnienia: sudo setcap cap_net_bind_service=+ep "$(command -v caddy)" (aktualizacja pakietu caddy je kasuje).`
    : '';
  fail(`Nie można nasłuchiwać na porcie ${String(port)}: jest zajęty (np. poprzedni lan:serve nadal działa) albo wymaga uprawnień.${linuxHint} Inny port zmienia origin PWA (--port).`);
}

if (!flag('--no-build')) {
  console.log(`> npm run build (VITE_BASE=${base})`);
  const build = spawnSync('npm', ['run', 'build'], { cwd: ROOT, stdio: 'inherit', shell: true, env: { ...process.env, VITE_BASE: base } });
  if (build.status !== 0) fail('Build nie powiódł się; serwer nie został uruchomiony.');
}
if (!existsSync(resolve(DIST, 'index.html'))) fail('Brak dist/index.html. Uruchom bez --no-build.');

writeFileSync(caddyfilePath, caddyfile, 'utf-8');

const url = appUrl(host, port, base);
const ips = lanAddresses();
console.log(`
Aplikacja:  ${url}
Host:       ${host}${host.endsWith('.local') ? '  (nazwa mDNS; komputer musi ją ogłaszać, a telefon rozwiązywać)' : ''}
IP komputera: ${ips.length > 0 ? ips.join(', ') : '(nie wykryto)'}  — IP z DHCP może się zmienić; origin PWA to host, więc nie podawaj uczniom IP, jeśli używasz nazwy.
Zatrzymanie: Ctrl+C. Zmiana hosta/portu = nowy origin = nowa instalacja PWA bez dotychczasowych profili.
`);
if (caDownload) {
  const portPart = caPort === 80 ? '' : `:${String(caPort)}`;
  console.log(`Certyfikat na urządzenie (zwykłe HTTP): http://${host}${portPart}/ca.crt${ips[0] === undefined ? '' : `  albo  http://${ips[0]}${portPart}/ca.crt`}\n`);
}

const copiedCert = resolve(OUT_DIR, 'caddy-root.crt');
let attempts = 0;
const certTimer = setInterval(() => {
  attempts += 1;
  if (existsSync(rootCert)) {
    clearInterval(certTimer);
    copyFileSync(rootCert, copiedCert);
    console.log(`Certyfikat główny (plik do ręcznego przekazania): ${copiedCert}`);
    console.log(`Odcisk SHA-256: ${rootFingerprint(readFileSync(rootCert))}\nPorównaj go z odciskiem pokazanym przy instalacji na urządzeniu (certyfikat idzie po zwykłym HTTP).`);
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
