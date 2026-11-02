/**
 * Automated accessibility checks (axe, WCAG 2.x A/AA rules) on key states and
 * keyboard-only operation. This helps; it is NOT a WCAG 2.2 AA audit and does
 * not replace a real screen-reader check (docs/07).
 */
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { setServer, createProfile, waitForContent, startGoalQuestion } from './helpers.ts';

async function axe(page: Page, label: string) {
  const res = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  const serious = res.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  expect(serious.map((v) => `${label}: ${v.id} ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
}

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

test('axe: selector, session, A/P/K, feedback, knowledge, test, review, result, scope, data', async ({ page }) => {
  await page.goto('./');
  await axe(page, 'selector');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await axe(page, 'session');
  for (const f of ['format A', 'format P', 'format K']) {
    await startGoalQuestion(page, f);
    await axe(page, `question ${f}`);
  }
  await page.getByRole('group', { name: /^1\./ }).getByLabel('Prawda').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await page.getByRole('button', { name: 'Oddaj obecną odpowiedź' }).click();
  await axe(page, 'feedback K');
  await page.locator('#kn-2').click(); // blank row → rationale open by default
  await axe(page, 'knowledge dialog');
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Sesja' }).click();
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await axe(page, 'test intro');
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await axe(page, 'test question');
  await page.getByRole('navigation', { name: 'Pytania testu' }).getByRole('button', { name: 'Pytanie 3' }).click();
  await page.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  await axe(page, 'test review');
  await page.getByRole('button', { name: 'Zakończ i pokaż wynik' }).click();
  await axe(page, 'test result');
  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await axe(page, 'scope');
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await page.getByRole('button', { name: 'Dane aplikacji' }).click();
  await axe(page, 'data');
});

test('keyboard-only: P answer, submit, open rationale link, Escape restores focus; touch targets ≥ 44 px', async ({ page }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await startGoalQuestion(page, 'format P');
  await page.getByLabel('Opcja 1.').focus();
  await page.keyboard.press('Space');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');
  await expect(page.getByLabel('Opcja 2.')).toBeChecked();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#feedback')).toBeFocused();
  const link = page.locator('#kn-2');
  await link.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  // Tab stays inside the modal dialog
  for (let i = 0; i < 6; i += 1) await page.keyboard.press('Tab');
  expect(await page.evaluate(() => Boolean(document.activeElement?.closest('dialog')))).toBe(true);
  await page.keyboard.press('Escape');
  await expect(link).toBeFocused();
  const small = await page.evaluate(() => [...document.querySelectorAll('button')].filter((b) => {
    const r = b.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.height < 44;
  }).map((b) => b.textContent));
  expect(small).toEqual([]);
});
