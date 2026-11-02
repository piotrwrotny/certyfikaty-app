/**
 * Local CA of the LAN host: one CA, moved between computers (docs/09).
 *
 *   npm run lan:ca -- show                       # path and SHA-256 of the root certificate
 *   npm run lan:ca -- export [caddy-ca-backup.json]
 *   npm run lan:ca -- import <file> [--force]    # before the first lan:serve on a new computer
 *   npm run lan:ca -- trust                      # trust the CA on THIS computer (system + Chromium)
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { caDirOf, exportCa, importCa, rootFingerprint } from './lan/ca.ts';
import { caddyRootCertPath } from './lan/caddyfile.ts';

const [command, ...rest] = process.argv.slice(2);
const positional = rest.filter((a) => !a.startsWith('--'));
const dir = caDirOf(caddyRootCertPath());

function fail(message: string): never {
  console.error(`BŁĄD: ${message}`);
  process.exit(1);
}

function run(cmd: string, cmdArgs: string[]): boolean {
  return spawnSync(cmd, cmdArgs, { stdio: 'inherit' }).status === 0;
}

/** Zaufanie CA na tym komputerze, żeby jego własna przeglądarka otwierała aplikację bez ostrzeżenia. */
function trustHere(rootCrt: string): void {
  if (!existsSync(rootCrt)) fail(`Brak ${rootCrt}. Uruchom raz npm run lan:serve albo zaimportuj kopię CA.`);
  if (process.platform === 'win32') {
    if (!run('certutil', ['-user', '-addstore', 'Root', rootCrt])) fail('certutil nie dodał certyfikatu.');
    console.log('Dodano do zaufanych (bieżący użytkownik). Uruchom ponownie przeglądarkę.');
    return;
  }
  if (process.platform !== 'linux') fail('Ten krok jest obsługiwany na Linuksie i Windows.');

  // 1) Magazyn systemowy (curl, narzędzia CLI): p11-kit.
  const system = run('sudo', ['trust', 'anchor', '--store', rootCrt]);
  console.log(system ? 'System: dodano.' : 'System: NIE dodano (sudo trust anchor nie powiodło się).');

  // 2) Chromium/Chrome/Brave na Linuksie czytają bazę NSS, nie magazyn systemowy.
  const nssDir = join(homedir(), '.pki', 'nssdb');
  const db = `sql:${nssDir}`;
  const probe = spawnSync('certutil', ['-H'], { stdio: 'ignore' });
  if (probe.error !== undefined) {
    console.log('Chromium: pominięto — brak certutil (sudo pacman -S nss), potem uruchom ten krok ponownie.');
  } else {
    if (!existsSync(join(nssDir, 'cert9.db'))) {
      mkdirSync(nssDir, { recursive: true });
      run('certutil', ['-d', db, '-N', '--empty-password']); // baza bez hasła; istniejącej nie ruszamy
    }
    spawnSync('certutil', ['-d', db, '-D', '-n', 'Caddy Local CA'], { stdio: 'ignore' }); // wymiana poprzedniego wpisu
    const nss = run('certutil', ['-d', db, '-A', '-t', 'C,,', '-n', 'Caddy Local CA', '-i', rootCrt]);
    console.log(nss ? 'Chromium: dodano.' : 'Chromium: NIE dodano.');
  }
  console.log('Firefox ma własny magazyn: Ustawienia → Prywatność i bezpieczeństwo → Certyfikaty → Urzędy → Importuj.\nZamknij całkowicie przeglądarkę i uruchom ją ponownie.');
}

try {
  if (command === 'show') {
    const root = caddyRootCertPath();
    if (!existsSync(root)) fail(`Brak CA w ${dir}. Uruchom raz npm run lan:serve albo zaimportuj kopię.`);
    console.log(`CA:       ${dir}\nOdcisk:   ${rootFingerprint(readFileSync(root))}`);
  } else if (command === 'export') {
    const out = resolve(positional[0] ?? 'caddy-ca-backup.json');
    const fp = exportCa(dir, out);
    console.log(`Zapisano: ${out}\nOdcisk:   ${fp}\nPlik zawiera KLUCZE PRYWATNE CA: przenieś go ręcznie (USB, scp), nie wysyłaj mailem i nie commituj.`);
  } else if (command === 'import') {
    const file = positional[0];
    if (file === undefined) fail('Podaj plik: npm run lan:ca -- import <plik> [--force]');
    const r = importCa(resolve(file), dir, { force: rest.includes('--force') });
    console.log(`${r.replaced ? 'Zastąpiono CA' : 'CA gotowe'} w ${dir}\nOdcisk:   ${r.fingerprint}`);
  } else if (command === 'trust') {
    trustHere(caddyRootCertPath());
  } else {
    fail('Użycie: npm run lan:ca -- show | export [plik] | import <plik> [--force] | trust');
  }
} catch (e) {
  fail(e instanceof Error ? e.message : String(e));
}
