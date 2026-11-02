import { test, expect, type Page } from '@playwright/test';
import { setServer, createProfile, waitForContent, startGoalQuestion, waitForSaved } from './helpers.ts';

test.beforeEach(async ({ request, page }) => {
  await setServer(request, { content: 'A', app: 'a' });
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
});

async function submit(page: Page) {
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
}

test('QA-06/A: radio + clear, blank submit needs confirmation, feedback 0/1 with omitted correct rationale', async ({ page }) => {
  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 3.').check();
  await expect(page.getByLabel('Opcja 1.')).not.toBeChecked(); // radio: one choice only
  await page.getByRole('button', { name: 'Wyczyść odpowiedź' }).click();
  await expect(page.getByLabel('Opcja 3.')).not.toBeChecked();
  await submit(page);
  const dlg = page.getByRole('dialog', { name: 'Oddać odpowiedź z brakami?' });
  await expect(dlg).toBeVisible();
  await dlg.getByRole('button', { name: 'Wróć bez zmiany' }).click();
  await expect(page.locator('#feedback')).toHaveCount(0); // cancel reveals nothing
  await submit(page);
  await page.getByRole('button', { name: 'Oddaj obecną odpowiedź' }).click();
  await expect(page.locator('.score')).toHaveText(/0 \/ 1/);
  await expect(page.locator('#feedback')).toBeFocused();
  await expect(page.getByText('Pominięta poprawna odpowiedź.')).toBeVisible();
});

test('QA-07/P: no hard cap, n/k counter, excess gives 0; one correct gives w/2', async ({ page }) => {
  await startGoalQuestion(page, 'format P');
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 2.').check();
  await page.getByLabel('Opcja 3.').check();
  await expect(page.getByText('Zaznaczono 3 z 2 wymaganych.')).toBeVisible();
  await expect(page.getByText('Nadmiar zaznaczeń da 0 pkt za całe pytanie.')).toBeVisible();
  await page.getByLabel('Opcja 2.').uncheck();
  await page.getByLabel('Opcja 3.').uncheck();
  await submit(page);
  await expect(page.locator('.score')).toHaveText(/1 \/ 2/);
  // wrong/omitted rationales are open; the selected-correct one is available on demand
  await expect(page.getByText('Pominięta poprawna odpowiedź.')).toBeVisible();
  await page.getByText('Wyjaśnienie odpowiedzi 1').click();
  await expect(page.getByText('Wybrana poprawna odpowiedź.')).toBeVisible();
  // the original answer is immutable after feedback
  await expect(page.getByLabel('Opcja 1.')).toBeDisabled();
});

test('QA-08/K: null rows, per-row clear, blank never shown as Fałsz; 2 of 3 rows = 4/3', async ({ page }) => {
  await startGoalQuestion(page, 'format K');
  await expect(page.getByText('Brak odpowiedzi.')).toHaveCount(3);
  const row1 = page.getByRole('group', { name: /^1\./ });
  const row2 = page.getByRole('group', { name: /^2\./ });
  const row3 = page.getByRole('group', { name: /^3\./ });
  await row1.getByLabel('Prawda').check();
  await row2.getByLabel('Prawda').check();
  await row2.getByRole('button', { name: 'Wyczyść wiersz 2' }).focus();
  await page.keyboard.press('Enter'); // keyboard clear
  await expect(row2.getByText('Brak odpowiedzi.')).toBeVisible();
  await row3.getByLabel('Prawda').check();
  await submit(page);
  await page.getByRole('button', { name: 'Oddaj obecną odpowiedź' }).click();
  await expect(page.locator('.score')).toHaveText(/1,33 \/ 2/);
  await expect(page.getByText(/Brak odpowiedzi\. Poprawna ocena: Fałsz\./)).toBeVisible();
});

test('QA-12/QA-34: option → knowledge → comparison → back; return restores answer, result and focus; refresh keeps the attempt', async ({ page }) => {
  await startGoalQuestion(page, 'format P');
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 2.').check();
  await submit(page);
  await expect(page.locator('.score')).toHaveText(/1 \/ 2/);
  const url = page.url();
  const link = page.locator('#kn-2');
  await link.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading', { level: 2, name: 'Jak liczone są formaty A, P i K' })).toBeFocused();
  await dialog.getByRole('button', { name: /Porównaj:/ }).click();
  await expect(dialog.getByRole('heading', { level: 2, name: 'Niedobór a nadmiar w formacie P' })).toBeVisible();
  await dialog.getByRole('button', { name: 'Wstecz' }).click();
  await expect(dialog.getByRole('heading', { level: 2, name: 'Jak liczone są formaty A, P i K' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(link).toBeFocused();
  await expect(page.locator('.score')).toHaveText(/1 \/ 2/);
  await page.reload();
  await expect(page).toHaveURL(url);
  await expect(page.locator('.score')).toHaveText(/1 \/ 2/);
  await expect(page.getByLabel('Opcja 2.')).toBeChecked();
  await expect(page.locator('#kn-2')).toBeFocused();
});

test('QA-13/FR-016: B → correction → F fails → other help → G fails → change of support, no automatic third check', async ({ page }) => {
  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 1.').check();
  await submit(page);
  await page.getByRole('button', { name: 'Spróbuj innego przypadku' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Popraw jedno rozróżnienie.' })).toBeVisible();
  await page.getByRole('button', { name: 'Spróbuj innego przypadku' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Sprawdź inną sytuację.' })).toBeVisible();
  await page.getByLabel('Opcja 1.').check(); // F wrong
  await submit(page);
  await expect(page.getByText('Nie potwierdza retencji')).toBeVisible();
  await page.getByRole('button', { name: 'Zobacz inne wyjaśnienie' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Spróbujmy inaczej.' })).toBeVisible();
  await page.getByRole('button', { name: 'Druga kontrola' }).click();
  await page.getByLabel('Opcja 1.').check(); // G wrong
  await submit(page);
  await expect(page.getByText('Dwie kolejne próby po korekcie nie zakończyły się pełną poprawnością.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Druga kontrola' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Zmień sposób pracy' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Zmieńmy sposób wyjaśnienia albo wróćmy później.' })).toBeVisible();
  // the original B attempt is unchanged
  await page.goBack();
  await page.getByRole('button', { name: 'Wróć do pierwotnego pytania' }).click();
  await expect(page.locator('.score')).toHaveText(/0 \/ 1/);
});

test('FR-032: "Zapisz miejsce i wyjdź" — session offers resume of the same attempt', async ({ page }) => {
  await startGoalQuestion(page, 'format K');
  const url = page.url();
  await page.getByRole('group', { name: /^1\./ }).getByLabel('Fałsz').check();
  await waitForSaved(page);
  await page.getByRole('button', { name: 'Zapisz miejsce i wyjdź' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Wróć do zapisanego miejsca.' })).toBeVisible();
  await page.getByRole('button', { name: 'Wznów zapisane miejsce' }).click();
  await expect(page).toHaveURL(url);
  await expect(page.getByRole('group', { name: /^1\./ }).getByLabel('Fałsz')).toBeChecked();
});

test('FR-029: neutral format tutorial — skippable, D04 example 2/3 for K with a blank row, no evidence recorded', async ({ page }) => {
  await startGoalQuestion(page, 'format K');
  await page.getByRole('button', { name: 'Pokaż przykład punktacji' }).click();
  const dlg = page.getByRole('dialog');
  await expect(dlg.getByRole('heading', { name: 'Jak liczymy format K?' })).toBeFocused();
  await dlg.getByRole('group', { name: /^1./ }).getByLabel('Prawda').check();
  await dlg.getByRole('group', { name: /^3./ }).getByLabel('Prawda').check();
  await dlg.getByRole('button', { name: 'Pokaż wynik przykładu' }).click();
  await expect(dlg.getByText('0,67 / 1 pkt')).toBeVisible();
  await dlg.getByRole('button', { name: 'Wróć do pytania' }).click();
  await expect(page.getByRole('button', { name: 'Pokaż przykład punktacji' })).toBeFocused();
  await expect(page.getByText('Brak odpowiedzi.')).toHaveCount(3); // the real question is untouched
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText(/Wykazane|Poznane/)).toHaveCount(0);
});

test('QA-33: safe markdown — no raw HTML execution, no horizontal scroll at 320 px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await startGoalQuestion(page, 'format K');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
  const scripts = await page.locator('main script, main iframe').count();
  expect(scripts).toBe(0);
});
