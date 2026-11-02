import { test, expect } from '@playwright/test';
import { setServer, createProfile, selectProfile, waitForContent, waitForServiceWorker, startGoalQuestion } from './helpers.ts';

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

test('QA-20: after "Gotowe offline", closing and reopening offline keeps selector, learning, answers and finalization', async ({ page, context }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await waitForServiceWorker(page);
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Dane aplikacji' }).click();
  await expect(page.getByText('Tak — aplikacja i materiały są zapisane na tym urządzeniu.')).toBeVisible();

  await context.setOffline(true);
  await page.close();
  const reopened = await context.newPage(); // new instance starts at the selector
  await reopened.goto('./');
  await expect(reopened.getByRole('heading', { level: 1, name: 'Kto dziś się uczy?' })).toBeVisible();
  await selectProfile(reopened, 'Ania');
  await expect(reopened.getByText('Pracujesz offline. Postęp zapisujemy na tym urządzeniu.')).toBeVisible();
  await startGoalQuestion(reopened, 'format A');
  await reopened.getByLabel('Opcja 2.').check();
  await reopened.getByRole('button', { name: 'Potrzebuję objaśnienia' }).click();
  await expect(reopened.getByRole('dialog').getByRole('heading', { level: 2 })).toBeVisible();
  await reopened.keyboard.press('Escape');
  await reopened.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await expect(reopened.locator('.score')).toHaveText(/1 \/ 1/);
  // topic test fully offline
  await reopened.getByRole('button', { name: 'Sesja' }).click();
  await reopened.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await reopened.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await reopened.getByRole('navigation', { name: 'Pytania testu' }).getByRole('button', { name: 'Pytanie 3' }).click();
  await reopened.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  await reopened.getByRole('button', { name: 'Zakończ i pokaż wynik' }).click();
  await expect(reopened.getByRole('heading', { level: 1, name: 'Zobacz wynik i następny krok.' })).toBeVisible();
  // deep link offline under /cpre/
  await reopened.goto('./#/zakres');
  await expect(reopened.getByRole('heading', { level: 1, name: 'Co już sprawdziliśmy?' })).toBeVisible();
  await context.setOffline(false);
});

test('QA-21: first start without reachable content shows an honest "no materials" state; retry after host returns', async ({ page, request }) => {
  await setServer(request, { content: 'down' });
  await page.goto('./');
  await createProfile(page, 'Ania');
  await expect(page.getByRole('heading', { level: 1, name: 'Materiały są przygotowywane.' })).toBeVisible();
  await expect(page.getByText('Nie udało się sprawdzić nowych materiałów.')).toBeVisible();
  await page.getByRole('button', { name: 'Sprawdź dane aplikacji' }).click();
  await expect(page.getByText('Jeszcze nie — aplikacja lub materiały nie są w pełni zapisane.')).toBeVisible();
  await expect(page.getByText('brak pobranych materiałów')).toBeVisible();
  await setServer(request, { content: 'A' });
  await page.getByRole('button', { name: 'Sprawdź aktualizacje' }).click();
  await expect(page.getByText('Nowe materiały są dostępne dla kolejnych zadań.').first()).toBeVisible();
  await expect(page.getByText(/learner-0001/)).toBeVisible();
});
