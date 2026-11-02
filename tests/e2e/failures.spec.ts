import { test, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { setServer, createProfile, selectProfile, waitForContent, startGoalQuestion, installWriteFailureSwitch, setWriteFailure, waitForSaved } from './helpers.ts';

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

test('QA-29/QA-03: write denied keeps the draft in memory, no false "saved", profile switch blocked', async ({ page }) => {
  await installWriteFailureSwitch(page);
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format P');
  await page.getByLabel('Opcja 1.').check();
  await waitForSaved(page);
  await setWriteFailure(page, true);
  await page.getByLabel('Opcja 3.').check();
  await expect(page.getByText('Nie udało się zapisać odpowiedzi. Spróbuj ponownie.')).toBeVisible();
  await expect(page.getByLabel('Opcja 3.')).toBeChecked(); // kept in memory
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Zmień profil' }).click();
  await expect(page.getByText('Profil nie został zmieniony.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'Twoja odpowiedź.' })).toBeVisible();
  await setWriteFailure(page, false);
  await page.getByLabel('Opcja 3.').uncheck();
  await page.getByLabel('Opcja 3.').check();
  await expect(page.getByText('Nie udało się zapisać odpowiedzi.')).toHaveCount(0);
  await waitForSaved(page);
  await page.reload();
  await expect(page.getByLabel('Opcja 1.')).toBeChecked();
  await expect(page.getByLabel('Opcja 3.')).toBeChecked();
});

test('QA-29: blocked/newer DB version from another tab is reported; data is never deleted', async ({ page, context }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  const other = await context.newPage();
  await other.goto('./');
  // another tab upgrades the database (simulated newer app)
  await other.evaluate(() => new Promise<void>((resolve, reject) => {
    const req = indexedDB.open('ireb-cpre', 99);
    req.onsuccess = () => { req.result.close(); resolve(); };
    req.onerror = () => { reject(new Error(String(req.error))); };
  }));
  await expect(page.getByText('Inna karta otworzyła nowszą wersję aplikacji.')).toBeVisible();
  await page.reload();
  await expect(page.getByText(/z nowszej wersji aplikacji\. Nie usuwamy ich/)).toBeVisible();
  const profiles = await page.evaluate(() => new Promise<number>((resolve) => {
    const req = indexedDB.open('ireb-cpre');
    req.onsuccess = () => {
      const tx = req.result.transaction('profiles', 'readonly');
      const c = tx.objectStore('profiles').count();
      c.onsuccess = () => { resolve(c.result); };
    };
  }));
  expect(profiles).toBe(1);
});

test('QA-30: export one profile; corrupted import writes nothing; valid import creates a new profile without merge', async ({ page }, testInfo) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 2.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Kopia postępu' }).click();
  const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Pobierz kopię tego profilu' }).click()]);
  const file = testInfo.outputPath('ania.profile-backup.json');
  await download.saveAs(file);
  const envelope = JSON.parse(readFileSync(file, 'utf-8')) as { payloadJson: string };
  expect(envelope.payloadJson).toContain('"name": "Ania"');

  const corrupted = testInfo.outputPath('corrupted.json');
  writeFileSync(corrupted, JSON.stringify({ ...envelope, payloadJson: envelope.payloadJson.replace('Ania', 'Anka') }));
  await page.getByLabel('Odtwórz profil z pliku kopii').setInputFiles(corrupted);
  await expect(page.getByText('Suma kontrolna kopii nie zgadza się')).toBeVisible();

  await page.getByLabel('Odtwórz profil z pliku kopii').setInputFiles(file);
  await expect(page.getByText(/Kopia profilu „Ania”: 1 prób/)).toBeVisible();
  await page.getByRole('button', { name: 'Utwórz profil z kopii' }).click();
  await expect(page.getByText('Utworzono nowy profil „Ania (kopia)”')).toBeVisible();
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Zmień profil' }).click();
  await expect(page.getByRole('list', { name: 'Profile' }).getByRole('listitem')).toHaveCount(2);
  await selectProfile(page, 'Ania \\(kopia\\)');
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText('Historia tego profilu pochodzi z importu.')).toBeVisible();
  await expect(page.getByText(/Wykazane samodzielnie: 1/)).toBeVisible();
});
