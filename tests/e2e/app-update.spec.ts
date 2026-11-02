import { test, expect, type Page } from '@playwright/test';
import { setServer, createProfile, waitForContent, waitForServiceWorker, startGoalQuestion, waitForSaved } from './helpers.ts';

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

async function triggerSwUpdate(page: Page) {
  await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    await reg?.update();
  });
  await expect(page.getByText('Dostępna jest aktualizacja aplikacji.')).toBeVisible({ timeout: 30_000 });
}

test('QA-27: new SW waits; "Później" keeps the running version without reload', async ({ page, request }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await waitForServiceWorker(page);
  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 3.').check();
  await page.evaluate(() => { (window as unknown as { __marker: number }).__marker = 42; });
  await setServer(request, { app: 'b' });
  await triggerSwUpdate(page);
  await page.getByRole('button', { name: 'Później' }).click();
  await expect(page.getByText('Dostępna jest aktualizacja aplikacji.')).toHaveCount(0);
  expect(await page.evaluate(() => (window as unknown as { __marker?: number }).__marker)).toBe(42); // no reload
  await expect(page.getByLabel('Opcja 3.')).toBeChecked();
});

test('QA-27: "Zapisz i odśwież" pauses the active check, reloads into the new version, same profile and attempt', async ({ page, request }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await waitForServiceWorker(page);
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await page.getByLabel('Opcja 2.').check();
  await waitForSaved(page);
  const url = page.url();
  await setServer(request, { app: 'b' });
  await triggerSwUpdate(page);
  await Promise.all([page.waitForEvent('load'), page.getByRole('button', { name: 'Zapisz i odśwież' }).click()]);
  await expect(page).toHaveURL(url);
  await expect(page.getByRole('button', { name: /Profil: Ania/ })).toBeVisible();
  await expect(page.getByLabel('Opcja 2.')).toBeChecked();
  await page.getByRole('navigation', { name: 'Pytania testu' }).getByRole('button', { name: 'Pytanie 3' }).click();
  await page.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  await page.getByRole('button', { name: 'Zakończ i pokaż wynik' }).click();
  await expect(page.getByText('1 zapisana przerwa')).toBeVisible(); // the update was recorded as a break of the SAME attempt
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Dane aplikacji' }).click();
  await expect(page.getByTestId('app-build')).toContainText('build e2e-b');
});
