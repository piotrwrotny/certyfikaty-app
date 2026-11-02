import { test, expect } from '@playwright/test';
import { setServer, createProfile, selectProfile, waitForContent, startGoalQuestion, waitForSaved } from './helpers.ts';

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

async function switchProfile(page: import('@playwright/test').Page) {
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Zmień profil' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Kto dziś się uczy?' })).toBeVisible();
}

test('QA-01/QA-02: isolated progress, rename keeps data, delete only the chosen profile', async ({ page }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  // Ania answers and opens knowledge
  await startGoalQuestion(page, 'format A');
  await page.getByRole('button', { name: 'Potrzebuję objaśnienia' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Wróć do pytania' }).click();
  await page.getByLabel('Opcja 2.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await expect(page.getByText('Odpowiedź po skorzystaniu z pomocy.')).toBeVisible();

  await switchProfile(page);
  await expect(page.getByText('Opcja 2.')).toHaveCount(0); // no preview of others' answers
  await createProfile(page, 'Bartek');
  await waitForContent(page);
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText('Dowód: jeszcze tego nie sprawdziliśmy.').first()).toBeVisible();
  await expect(page.getByText(/Poznane \/ z pomocą/)).toHaveCount(0);

  // Rename Ania (Polish characters), name collision rejected case-insensitively
  await switchProfile(page);
  await page.getByRole('button', { name: 'Zmień nazwę profilu Ania' }).click();
  await page.getByLabel('Nazwa profilu').fill('bartek');
  await page.getByRole('button', { name: 'Zapisz' }).click();
  await expect(page.getByText('Profil o tej nazwie już istnieje')).toBeVisible();
  await page.getByLabel('Nazwa profilu').fill('Anią Żółć');
  await page.getByRole('button', { name: 'Zapisz' }).click();
  await selectProfile(page, 'Anią Żółć');
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText(/Poznane \/ z pomocą: 1/)).toBeVisible();

  // Delete Bartek only
  await switchProfile(page);
  await selectProfile(page, 'Bartek');
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Dane aplikacji' }).click();
  await page.getByRole('button', { name: 'Usuń profil…' }).click();
  await page.getByLabel('Wpisz nazwę profilu, aby potwierdzić').fill('Bartek');
  await page.getByRole('button', { name: 'Usuń profil', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Kto dziś się uczy?' })).toBeVisible();
  await expect(page.getByRole('button', { name: /^Bartek/ })).toHaveCount(0);
  await selectProfile(page, 'Anią Żółć');
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText(/Poznane \/ z pomocą: 1/)).toBeVisible();
});

test('PROF-01: a fresh tab starts at the selector; refresh restores the same profile and attempt', async ({ page, context }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format P');
  await page.getByLabel('Opcja 1.').check();
  await waitForSaved(page);
  const url = page.url();
  await page.reload();
  await expect(page).toHaveURL(url);
  await expect(page.getByLabel('Opcja 1.')).toBeChecked();
  await expect(page.getByRole('button', { name: /Profil: Ania/ })).toBeVisible();
  const second = await context.newPage();
  await second.goto('./');
  await expect(second.getByRole('heading', { level: 1, name: 'Kto dziś się uczy?' })).toBeVisible();
  await expect(second.getByText('ostatnio używany')).toBeVisible();
});

test('QA-05: two tabs with different profiles do not switch each other', async ({ page, context }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  const tab2 = await context.newPage();
  await tab2.goto('./');
  await createProfile(tab2, 'Bartek');
  await waitForContent(tab2);
  await startGoalQuestion(tab2, 'format A');
  await tab2.getByLabel('Opcja 3.').check();
  await waitForSaved(tab2);
  await page.reload();
  await expect(page.getByRole('button', { name: /Profil: Ania/ })).toBeVisible();
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText(/Wykazane|Poznane/)).toHaveCount(0);
  await tab2.reload();
  await expect(tab2.getByRole('button', { name: /Profil: Bartek/ })).toBeVisible();
  await expect(tab2.getByLabel('Opcja 3.')).toBeChecked();
});

test('QA-04: the same attempt in two tabs — second writer gets a detected conflict, not silent overwrite', async ({ page, context }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format A');
  const url = page.url();
  const tab2 = await context.newPage();
  // same profile in tab 2 (explicit selection), same attempt URL
  await tab2.goto('./');
  await selectProfile(tab2, 'Ania');
  await tab2.goto(url);
  await expect(tab2.getByRole('heading', { level: 1, name: 'Twoja odpowiedź.' })).toBeVisible();
  await page.getByLabel('Opcja 1.').check(); // tab 1 holds the lease
  await tab2.getByLabel('Opcja 4.').check();
  await expect(tab2.getByText(/edytowana w innej karcie|nowszą wersję/)).toBeVisible();
  await tab2.getByRole('button', { name: 'Przejmij edycję w tej karcie' }).click();
  await tab2.getByLabel('Opcja 4.').check();
  await waitForSaved(tab2);
  await page.reload();
  await expect(page.getByLabel('Opcja 4.')).toBeChecked();
});
