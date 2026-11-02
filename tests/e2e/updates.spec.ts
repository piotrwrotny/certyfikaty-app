import { test, expect, type Page, type BrowserContext } from '@playwright/test';
import { setServer, createProfile, selectProfile, waitForContent, startGoalQuestion, type ContentMode } from './helpers.ts';

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

async function openData(page: Page) {
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Dane aplikacji' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Dane aplikacji' })).toBeVisible();
}

/** A second tab of the same profile that triggers a manual check (does not disturb tab 1's task). */
async function checkFromSecondTab(context: BrowserContext, request: import('@playwright/test').APIRequestContext, mode: ContentMode): Promise<Page> {
  await setServer(request, { content: mode });
  const tab = await context.newPage();
  await tab.goto('./');
  await selectProfile(tab, 'Ania');
  await openData(tab);
  await tab.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
  return tab;
}

test('QA-22: captive portal (HTML 200) and host down do not activate anything; saved content keeps working', async ({ page }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await openData(page);
  for (const mode of ['portal', 'down'] as const) {
    await page.request.post('http://localhost:4300/__test/state', { data: { content: mode } });
    await page.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
    await expect(page.getByText('Nie udało się sprawdzić nowych materiałów. Korzystasz z zapisanej wersji.').first()).toBeVisible();
    await expect(page.getByText(/learner-0001/)).toBeVisible();
  }
  await startGoalQuestion(page, 'format A');
});

test('QA-22: LAN returns without an online event — the periodic check of a visible app finds the release', async ({ page, request }) => {
  await page.clock.install();
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await setServer(request, { content: 'B' });
  await page.clock.runFor(5 * 60_000 + 1_000);
  await expect(page.getByText('Nowe materiały są dostępne dla kolejnych zadań.')).toBeVisible({ timeout: 20_000 });
});

for (const mode of ['bad-digest', 'truncated', 'bad-schema'] as const) {
  test(`QA-23: ${mode} release is rejected as a whole; previous release and progress stay`, async ({ page }) => {
    await page.goto('./');
    await createProfile(page, 'Ania');
    await waitForContent(page);
    await startGoalQuestion(page, 'format A');
    await page.getByLabel('Opcja 2.').check();
    await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
    await openData(page);
    await page.request.post('http://localhost:4300/__test/state', { data: { content: mode } });
    await page.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
    await expect(page.getByText(/nie przeszło weryfikacji|Nie udało się sprawdzić/).first()).toBeVisible();
    await expect(page.getByText(/learner-0001/)).toBeVisible();
    await expect(page.getByText('TECH01@r1', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Zakres i dowody' }).click();
    await expect(page.getByText(/Wykazane samodzielnie: 1/)).toBeVisible();
  });
}

test('QA-25: new release during an answer keeps the pinned revision; new activities use the new release', async ({ page, context, request }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 1.').check();
  const tab2 = await checkFromSecondTab(context, request, 'B');
  await expect(tab2.getByText(/learner-0002/)).toBeVisible();
  // tab 1: same stem (r1), answer kept, submit works
  await expect(page.getByText('(rewizja r2)')).toHaveCount(0);
  await expect(page.getByLabel('Opcja 1.')).toBeChecked();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await expect(page.locator('.score')).toHaveText(/0 \/ 1/);
  await page.reload();
  await expect(page.getByText('(rewizja r2)')).toHaveCount(0); // refresh does not upgrade a started attempt
  // a new activity uses the new release
  await startGoalQuestion(page, 'format A');
  await expect(page.getByText('(rewizja r2)')).toBeVisible();
});

test('QA-26: incompatible release needs an app update; rollback with a higher sequence keeps progress', async ({ page }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format P');
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 3.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await openData(page);
  const set = (m: ContentMode) => page.request.post('http://localhost:4300/__test/state', { data: { content: m } });
  await set('incompatible');
  await page.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
  await expect(page.getByText(/wymagają aktualizacji aplikacji/).first()).toBeVisible();
  await expect(page.getByText(/learner-0001/)).toBeVisible();
  await set('B');
  await page.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
  await expect(page.getByText(/learner-0002/)).toBeVisible();
  await set('rollback');
  await page.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
  await expect(page.getByText(/learner-0010/)).toBeVisible();
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText(/Wykazane samodzielnie: 1/)).toBeVisible();
});

test('QA-28: withdrawal/disputed key suspends an active check neutrally; history kept; new uses blocked', async ({ page, context, request }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  // an earlier correct learning answer on TECH-A1@r1 (later withdrawn)
  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 2.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await page.getByRole('button', { name: 'Sesja' }).click();
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await page.getByLabel('Opcja 2.').check();
  const tab2 = await checkFromSecondTab(context, request, 'withdraw');
  await expect(tab2.getByText(/learner-0003/)).toBeVisible();
  await tab2.close();
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'Ta próba wymaga aktualizacji materiału.' })).toBeVisible();
  await expect(page.getByText('Zachowaliśmy odpowiedzi.')).toBeVisible();
  const html = await page.content();
  expect(html).not.toContain('oznaczona jako poprawna');
  expect(html).not.toMatch(/TECH-A1|TECH-P1|key-disputed|withdrawn/);
  await page.getByRole('button', { name: 'Zakończ bez wyniku' }).click();
  // new use of the disputed P revision is blocked
  await page.getByRole('button', { name: 'Wybierz inny cel' }).first().click();
  const p = page.locator('section.topic').filter({ has: page.getByRole('heading', { name: 'Format P', exact: true }) });
  await p.getByRole('button', { name: 'Zacznij od pytania' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Klucz wymaga sprawdzenia.' })).toBeVisible();
  // the old answer and score stay in history but are not used as evidence
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await expect(page.getByText('Wyniki z wycofanej lub spornej wersji materiału: 1.')).toBeVisible();
});
