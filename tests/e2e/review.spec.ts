/**
 * Review build (explicit technical/review mode, separate DB) with the full T21
 * import. T21 stays "pending review"; this checks rendering of real content,
 * not its acceptance (G2/G3 remain open).
 */
import { test, expect } from '@playwright/test';
import { createProfile } from './helpers.ts';

test.beforeEach(async ({ page }) => {
  await page.goto('./');
  await createProfile(page, 'Recenzent');
  await expect(page.getByRole('button', { name: 'Spróbuj pytania' })).toBeVisible({ timeout: 20_000 });
});

test('review mode banner; question-first entry never names the criterion before the answer (INTRO-T21, B-DEC-14)', async ({ page }) => {
  await expect(page.getByText('Tryb recenzencki · treści do odrębnego review, niezatwierdzone')).toBeVisible();
  await expect(page.locator('main')).not.toContainText('Adekwatne');
  await page.getByRole('button', { name: 'Spróbuj pytania' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Twoja odpowiedź.' })).toBeVisible();
  await expect(page.locator('.rowhead')).toContainText('T21 — Jakość pojedynczego wymagania');
  await expect(page.locator('.rowhead')).not.toContainText('Adekwatne');
  await expect(page.getByText('Które kryterium jakości pojedynczego wymagania odnosi się do zgodności z rzeczywistymi')).toBeVisible();
  await page.getByLabel('Adekwatność.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await expect(page.locator('.score')).toHaveText(/1 \/ 1/);
  await expect(page.locator('.rowhead')).toContainText('Adekwatne / adequate'); // named only after the answer
  // feedback shows the deciding rule from the package (no generated text)
  await expect(page.locator('#feedback')).toContainText('Adekwatność dotyczy rzeczywistych, uzgodnionych potrzeb');
});

test('T21 goals: 3 criteria, 8 notes, 4 open activities; long knowledge with tables reflows at 320 px (QA-33)', async ({ page }) => {
  await page.getByRole('button', { name: 'Wybierz inny cel' }).first().click();
  // review release = T21 (3 criteria) + TECH01 technical fixture (3 criteria) + open activities
  const t21Sections = page.locator('section.topic').filter({ hasText: 'T21 — Jakość pojedynczego wymagania' });
  await expect(t21Sections).toHaveCount(3);
  await expect(page.getByRole('button', { name: /^Polecenie otwarte/ })).toHaveCount(4);
  await page.getByText('Zacznij od wprowadzenia').first().click();
  await page.getByRole('button', { name: 'Kompletne / complete, pojedyncze wymaganie' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Kompletne / complete, pojedyncze wymaganie' })).toBeVisible();
  await page.getByText('Rozwiń warunki i przykłady').click();
  await page.setViewportSize({ width: 320, height: 800 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
  // comparison with a table inside the knowledge dialog
  await page.setViewportSize({ width: 1200, height: 900 });
  await page.getByRole('button', { name: 'Przejdź do pytania' }).click();
  const firstOption = page.locator('.option input').first();
  await firstOption.check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await page.locator('[id^="kn-"]').first().click();
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: /Porównaj:/ }).first().click();
  await expect(dialog.locator('table')).toBeVisible();
  await page.setViewportSize({ width: 320, height: 800 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
  expect((await dialog.boundingBox())?.width).toBe(320);
});

test('no approved T21 form: only the explicit technical form is offered, no automatic D01–08 fallback (TASK-023)', async ({ page }) => {
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await expect(page.getByText('Techniczna forma testu (demonstracja)')).toBeVisible();
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  const html = await page.content();
  expect(html).not.toMatch(/T21-D0|adequacy of a requirement|necessity of a requirement/);
  await expect(page.getByText('Pytanie 1 z 3')).toBeVisible();
});

test('open retrieval O01: prompt before rubric, explicit self-assessment without CPRE points (FR-006)', async ({ page }) => {
  await page.getByRole('button', { name: 'Wybierz inny cel' }).first().click();
  await page.getByRole('button', { name: 'Polecenie otwarte 1' }).click();
  await expect(page.getByText('RUB-T21-O01')).toHaveCount(0); // rubric hidden before the answer
  await page.getByLabel('Twoja odpowiedź').fill('Adekwatne, niezbędne, jednoznaczne, kompletne, zrozumiałe, weryfikowalne.');
  await page.getByRole('button', { name: 'Zapisz i porównaj z rubryką' }).click();
  await expect(page.getByText(/RUB-T21-O01/)).toBeVisible();
  await page.getByLabel('Spełnia część elementów').check();
  await page.getByRole('button', { name: 'Zapisz samoocenę' }).click();
  await expect(page.getByRole('button', { name: 'Zapisano samoocenę' })).toBeDisabled();
  await expect(page.getByText('Samoocena pozostaje samooceną')).toBeVisible();
});
