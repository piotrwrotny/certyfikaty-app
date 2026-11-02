import { test, expect, type Page } from '@playwright/test';
import { setServer, createProfile, waitForContent, waitForSaved } from './helpers.ts';

/** Text that exists only in TECH01 solution data (rationales/rules). Must never be in an active check. */
const SOLUTION_SNIPPETS = ['Ta opcja jest oznaczona jako poprawna', 'Opcja należy do klucza demonstracji', 'każdy wiersz oceniany jest niezależnie', 'Format A: dokładnie jeden poprawny wybór', 'Jak liczone są formaty'];

async function startTest(page: Page) {
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Wynik zobaczysz na końcu.' })).toBeVisible();
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await expect(page.getByText('Pytanie 1 z 3')).toBeVisible();
}

async function assertNoLeak(page: Page) {
  const html = await page.content();
  for (const s of SOLUTION_SNIPPETS) expect(html, `leak: ${s}`).not.toContain(s);
  expect(await page.locator('.rationale, .feedback, .score').count()).toBe(0);
  const a11y = await page.locator('body').ariaSnapshot();
  expect(a11y).not.toMatch(/Wyjaśnienie|Zobacz:|pkt ·|Wybrana poprawna|Pominięta poprawna/);
  expect(await page.title()).toBe('CPRE · Sprawdzenie');
  expect(page.url()).not.toMatch(/REG|KRY|ZAK|N-TECH/);
}

test.beforeEach(async ({ request, page }) => {
  await setServer(request, { content: 'A', app: 'a' });
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
});

test('QA-14/QA-15: prompt-only during the check; flags, blank K, P excess; neutral review; idempotent finalize; result 5 pkt scale', async ({ page }) => {
  await startTest(page);
  await assertNoLeak(page);
  // Q1 (A): answer then flag
  await page.getByLabel('Opcja 2.').check();
  await page.getByRole('button', { name: 'Oznacz do powrotu' }).click();
  await expect(page.getByRole('button', { name: 'Oznaczone do powrotu', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Następne pytanie' }).click();
  // Q2 (P): excess, neutral counter only
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 3.').check();
  await page.getByLabel('Opcja 5.').check();
  await expect(page.getByText('Zaznaczono 3 z 2 wymaganych.')).toBeVisible();
  await expect(page.getByText('Nadmiar zaznaczeń da 0 pkt')).toHaveCount(0); // no consequence hint while answering
  await assertNoLeak(page);
  await page.getByRole('button', { name: 'Następne pytanie' }).click();
  // Q3 (K): one blank row
  await page.getByRole('group', { name: /^1\./ }).getByLabel('Prawda').check();
  await page.getByRole('group', { name: /^3\./ }).getByLabel('Prawda').check();
  await assertNoLeak(page);
  await page.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  await expect(page.getByText('Brakujące decyzje: 1. Pytania P z nadmiarem zaznaczeń: 1.')).toBeVisible();
  await expect(page.getByText('oznaczone do powrotu')).toBeVisible();
  await assertNoLeak(page);
  // still editable before finalization: fix P excess
  await page.getByRole('button', { name: 'Otwórz pytanie 2' }).click();
  await page.getByLabel('Opcja 5.').uncheck();
  await page.getByRole('navigation', { name: 'Pytania testu' }).getByRole('button', { name: 'Pytanie 3' }).click();
  await page.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  await expect(page.getByText('Brakujące decyzje: 1. Pytania P z nadmiarem zaznaczeń: 0.')).toBeVisible();
  // double finalize
  const finalize = page.getByRole('button', { name: 'Zakończ i pokaż wynik' });
  await finalize.dblclick(); // double activation must not create a second result
  await expect(page.getByRole('heading', { level: 1, name: 'Zobacz wynik i następny krok.' })).toBeVisible();
  // A 1 + P 2 + K 2 rows of 3 → 4/3 ; total 1+2+4/3 = 13/3 = 4,33 / 5
  await expect(page.locator('.score')).toContainText('4,33 / 5');
  await expect(page.locator('.score')).toContainText('86,7% punktów');
  await expect(page.locator('.resultrow')).toHaveCount(3);
  await page.getByRole('button', { name: 'Otwórz odpowiedź i wyjaśnienia' }).nth(2).click();
  await expect(page.getByText(/Brak odpowiedzi\. Poprawna ocena: Fałsz\./)).toBeVisible();
  await page.getByRole('button', { name: 'Wróć do wyniku sprawdzenia' }).click();
  await page.reload();
  await expect(page.locator('.score')).toContainText('4,33 / 5'); // no new attempt/result on reload
});

test('QA-16: conversion — cancel reveals nothing; confirm is permanent across refresh', async ({ page }) => {
  await startTest(page);
  await page.getByLabel('Opcja 1.').check();
  await page.getByRole('button', { name: 'Przejdź do Nauki' }).click();
  const dlg = page.getByRole('dialog', { name: 'Przejść ze Sprawdzenia do Nauki?' });
  await expect(dlg).toBeVisible();
  await expect(dlg.getByRole('button', { name: 'Wróć bez zmiany' })).toBeFocused(); // safe default
  await dlg.getByRole('button', { name: 'Wróć bez zmiany' }).click();
  await assertNoLeak(page);
  await expect(page.getByLabel('Opcja 1.')).toBeChecked();
  // navigation to "Zakres i dowody" during a check also requires conversion
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByRole('dialog', { name: 'Przejść ze Sprawdzenia do Nauki?' })).toBeVisible();
  await page.getByRole('button', { name: 'Wróć bez zmiany' }).click();
  await assertNoLeak(page);
  await page.getByRole('button', { name: 'Przejdź do Nauki' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Przejdź do Nauki' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Próba przeszła do Nauki.' })).toBeVisible();
  const url = page.url();
  await page.reload();
  await expect(page).toHaveURL(url);
  await expect(page.getByRole('heading', { level: 1, name: 'Próba przeszła do Nauki.' })).toBeVisible();
  // the converted attempt can never be resumed as an independent check
  await page.goto(url.replace(/wynik$/, '0'));
  await expect(page.getByRole('heading', { level: 1, name: 'Próba przeszła do Nauki.' })).toBeVisible();
});

test('FR-027: pause and resume the same check with a recorded break; Sesja shows a neutral resume card', async ({ page }) => {
  await startTest(page);
  await page.getByLabel('Opcja 3.').check();
  await waitForSaved(page);
  const url = page.url();
  await page.getByRole('button', { name: 'Zapisz miejsce i wyjdź' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Wróć do rozpoczętej próby.' })).toBeVisible();
  await assertNoLeak(page);
  await page.getByRole('button', { name: 'Wznów sprawdzenie' }).click();
  await expect(page).toHaveURL(url);
  await expect(page.getByLabel('Opcja 3.')).toBeChecked();
  await page.getByRole('navigation', { name: 'Pytania testu' }).getByRole('button', { name: 'Pytanie 3' }).click();
  await page.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  await page.getByRole('button', { name: 'Zakończ i pokaż wynik' }).click();
  await expect(page.getByText('1 zapisana przerwa')).toBeVisible();
});
