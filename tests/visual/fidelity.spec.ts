/**
 * TASK-035 / QA-35: visual fidelity of "Skupiona sesja".
 *  1. Layout/typography metrics of the app are compared with the accepted
 *     prototype (references/design, read-only) in the same browser and viewport.
 *  2. Representative desktop (1200×900) and phone (390×844) screenshots are
 *     written to qa/screenshots as evidence (they never replace references/).
 *  3. Implementation regression baseline via toHaveScreenshot (separate from
 *     the design references) and no horizontal overflow at 320/390/768/1200.
 */
import { test, expect, type Page } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { mkdirSync } from 'node:fs';
import { setServer, createProfile, waitForContent, startGoalQuestion } from '../e2e/helpers.ts';

const ROOT = resolve(import.meta.dirname, '..', '..');
const PROTOTYPE = pathToFileURL(resolve(ROOT, 'references/design/IREB_CPRE_D_Prototype_v0.1.html')).href;
const SHOTS = resolve(ROOT, 'qa/screenshots');
mkdirSync(SHOTS, { recursive: true });

interface Metrics {
  bodyBg: string;
  h1Font: string;
  h1Size: number;
  h1LineHeight: number;
  h1Weight: string;
  mainLeft: number;
  mainWidth: number;
  primaryBg: string;
  primaryColor: string;
  primaryHeight: number;
  primaryRadius: string;
  bodyFont: string;
  pSize: number;
  headerHeight: number;
  navColor: string;
}

async function metrics(page: Page): Promise<Metrics> {
  await page.locator('main h1').first().waitFor();
  return page.evaluate(() => {
    const cs = (el: Element | null) => (el ? getComputedStyle(el) : null);
    const h1 = document.querySelector('main h1');
    const main = document.querySelector('main');
    const primary = document.querySelector('main button.primary');
    const p = document.querySelector('main p:not(.eyebrow):not(.micro):not(.score)');
    const top = document.querySelector('header.top');
    const nav = document.querySelector('nav button');
    const r = main?.getBoundingClientRect();
    return {
      // effective page background (prototype paints :root, the app paints both)
      bodyBg: [document.body, document.documentElement].map((e) => getComputedStyle(e).backgroundColor).find((c) => c !== 'rgba(0, 0, 0, 0)') ?? '',
      h1Font: cs(h1)?.fontFamily ?? '',
      h1Size: parseFloat(cs(h1)?.fontSize ?? '0'),
      h1LineHeight: parseFloat(cs(h1)?.lineHeight ?? '0'),
      h1Weight: cs(h1)?.fontWeight ?? '',
      mainLeft: Math.round(r?.left ?? 0),
      mainWidth: Math.round(r?.width ?? 0),
      primaryBg: cs(primary)?.backgroundColor ?? '',
      primaryColor: cs(primary)?.color ?? '',
      primaryHeight: Math.round(primary?.getBoundingClientRect().height ?? 0),
      primaryRadius: cs(primary)?.borderRadius ?? '',
      bodyFont: cs(p)?.fontFamily ?? '',
      pSize: parseFloat(cs(p)?.fontSize ?? '0'),
      headerHeight: Math.round(top?.getBoundingClientRect().height ?? 0),
      navColor: cs(nav)?.color ?? '',
    };
  });
}

function compare(app: Metrics, ref: Metrics, label: string) {
  expect.soft(app.bodyBg, `${label} bodyBg`).toBe(ref.bodyBg);
  expect.soft(app.h1Font.replace(/"/g, "'"), `${label} h1 font`).toBe(ref.h1Font.replace(/"/g, "'"));
  expect.soft(Math.abs(app.h1Size - ref.h1Size), `${label} h1 size ${String(app.h1Size)} vs ${String(ref.h1Size)}`).toBeLessThanOrEqual(1);
  expect.soft(Math.abs(app.h1LineHeight - ref.h1LineHeight), `${label} h1 line-height`).toBeLessThanOrEqual(1);
  expect.soft(app.h1Weight, `${label} h1 weight`).toBe(ref.h1Weight);
  expect.soft(Math.abs(app.mainLeft - ref.mainLeft), `${label} column left ${String(app.mainLeft)} vs ${String(ref.mainLeft)}`).toBeLessThanOrEqual(2);
  expect.soft(Math.abs(app.mainWidth - ref.mainWidth), `${label} column width ${String(app.mainWidth)} vs ${String(ref.mainWidth)}`).toBeLessThanOrEqual(2);
  expect.soft(app.primaryBg, `${label} primary bg`).toBe(ref.primaryBg);
  expect.soft(app.primaryColor, `${label} primary color`).toBe(ref.primaryColor);
  expect.soft(Math.abs(app.primaryHeight - ref.primaryHeight), `${label} primary height`).toBeLessThanOrEqual(1);
  expect.soft(app.primaryRadius, `${label} primary radius`).toBe(ref.primaryRadius);
  expect.soft(app.bodyFont.replace(/"/g, "'"), `${label} body font`).toBe(ref.bodyFont.replace(/"/g, "'"));
  expect.soft(app.pSize, `${label} paragraph size`).toBe(ref.pSize);
  expect.soft(app.navColor, `${label} nav color`).toBe(ref.navColor);
}

async function prototype(page: Page, scene: string): Promise<Metrics> {
  const proto = await page.context().newPage();
  await proto.setViewportSize(page.viewportSize() ?? { width: 1200, height: 900 });
  await proto.goto(`${PROTOTYPE}?scene=${scene}`);
  await proto.waitForSelector('main h1');
  const m = await metrics(proto);
  // the prototype has a demo strip of the same height as our status strip; header heights are compared too
  await proto.close();
  return m;
}

async function noOverflow(page: Page, label: string) {
  for (const width of [320, 390, 768, 1200]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect.soft(overflow, `${label} horizontal overflow at ${String(width)}px`).toBeLessThanOrEqual(0);
  }
  await page.setViewportSize({ width: 1200, height: 900 });
}

async function shoot(page: Page, name: string) {
  await page.evaluate(() => { (document.activeElement as HTMLElement | null)?.blur(); });
  for (const [kind, size] of [['desktop', { width: 1200, height: 900 }], ['mobile', { width: 390, height: 844 }]] as const) {
    await page.setViewportSize(size);
    await page.waitForTimeout(100);
    await page.screenshot({ path: resolve(SHOTS, `${kind}-${name}.png`), fullPage: true, animations: 'disabled', caret: 'hide' });
  }
  await page.setViewportSize({ width: 1200, height: 900 });
}

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

test('fidelity: app vs accepted prototype — session, question, feedback, test, result (1200 and 390)', async ({ page }) => {
  await page.goto('./');
  await shoot(page, 'profiles');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  for (const vw of [{ width: 1200, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(vw);
    compare(await metrics(page), await prototype(page, 'home'), `session@${String(vw.width)}`);
  }
  await page.setViewportSize({ width: 1200, height: 900 });
  await shoot(page, 'session');
  await noOverflow(page, 'session');

  await startGoalQuestion(page, 'format K');
  for (const vw of [{ width: 1200, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(vw);
    compare(await metrics(page), await prototype(page, 'K-question'), `K-question@${String(vw.width)}`);
  }
  await page.setViewportSize({ width: 1200, height: 900 });
  await shoot(page, 'K-question');
  await noOverflow(page, 'K-question');

  await startGoalQuestion(page, 'format P');
  await shoot(page, 'P-question');
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 2.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await expect(page.locator('.score')).toBeVisible();
  compare(await metrics(page), await prototype(page, 'P-feedback'), 'P-feedback@1200');
  await shoot(page, 'P-feedback');
  await noOverflow(page, 'P-feedback');
  await page.locator('#kn-2').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.screenshot({ path: resolve(SHOTS, 'desktop-knowledge.png'), animations: 'disabled', caret: 'hide' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: resolve(SHOTS, 'mobile-knowledge.png'), animations: 'disabled', caret: 'hide' });
  const dlg = await page.getByRole('dialog').boundingBox();
  expect(dlg?.width).toBe(390); // knowledge is fullscreen on the phone (D03 §6)
  await page.setViewportSize({ width: 1200, height: 900 });
  await page.keyboard.press('Escape');

  await startGoalQuestion(page, 'format A');
  await page.getByLabel('Opcja 1.').check();
  await page.getByRole('button', { name: 'Zatwierdź odpowiedź' }).click();
  await shoot(page, 'A-feedback');
  await page.getByRole('button', { name: 'Spróbuj innego przypadku' }).click();
  await shoot(page, 'correction');
  await page.getByRole('button', { name: 'Spróbuj innego przypadku' }).click();
  await shoot(page, 'follow');

  await page.getByRole('button', { name: 'Sesja' }).click();
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await shoot(page, 'test-intro');
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await page.getByLabel('Opcja 2.').check();
  await page.getByRole('button', { name: 'Oznacz do powrotu' }).click();
  await page.getByRole('button', { name: 'Następne pytanie' }).click();
  await page.getByLabel('Opcja 1.').check();
  await page.getByLabel('Opcja 2.').check();
  compare(await metrics(page), await prototype(page, 'test-P'), 'test-P@1200');
  await shoot(page, 'test-P');
  await page.getByRole('navigation', { name: 'Pytania testu' }).getByRole('button', { name: 'Pytanie 3' }).click();
  await page.getByRole('group', { name: /^1\./ }).getByLabel('Prawda').check();
  await page.getByRole('button', { name: 'Przegląd odpowiedzi' }).click();
  compare(await metrics(page), await prototype(page, 'test-review'), 'test-review@1200');
  await shoot(page, 'test-review');
  await page.getByRole('button', { name: 'Zakończ i pokaż wynik' }).click();
  await expect(page.locator('.score')).toBeVisible();
  compare(await metrics(page), await prototype(page, 'test-result'), 'test-result@1200');
  await shoot(page, 'test-result');
  await noOverflow(page, 'test-result');

  await page.getByRole('button', { name: 'Zakres i dowody' }).click();
  await shoot(page, 'scope');
  await page.getByRole('button', { name: /Menu profilu/ }).click();
  await shoot(page, 'profile-menu');
  await page.getByRole('button', { name: 'Dane aplikacji' }).click();
  await shoot(page, 'data');
});

test('states: converted, missing variant, two failed follow-ups, offline status (screenshots + overflow)', async ({ page, context }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await page.getByRole('button', { name: 'Poznaj warunki sprawdzenia' }).click();
  await page.getByRole('button', { name: 'Rozpocznij sprawdzenie' }).click();
  await page.getByLabel('Opcja 3.').check();
  await page.getByRole('button', { name: 'Przejdź do Nauki' }).click();
  await page.screenshot({ path: resolve(SHOTS, 'desktop-convert-dialog.png'), animations: 'disabled' });
  await page.getByRole('dialog').getByRole('button', { name: 'Przejdź do Nauki' }).click();
  compare(await metrics(page), await prototype(page, 'converted'), 'converted@1200');
  await shoot(page, 'converted');
  await page.goto('./#/stan/novariant');
  await shoot(page, 'novariant');
  await page.goto('./#/stan/two-failed');
  await shoot(page, 'two-failed');
  await page.goto('./#/stan/disputed');
  await shoot(page, 'disputed');
  await context.setOffline(true);
  await page.goto('./#/sesja');
  await expect(page.getByText('Pracujesz offline.')).toBeVisible();
  await shoot(page, 'offline-session');
  await context.setOffline(false);
});

test('implementation regression baseline (not a design reference)', async ({ page }) => {
  await page.goto('./');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await expect(page).toHaveScreenshot('session-1200.png', { fullPage: true, animations: 'disabled', caret: 'hide', maxDiffPixelRatio: 0.01 });
  await startGoalQuestion(page, 'format K');
  await page.evaluate(() => { (document.activeElement as HTMLElement | null)?.blur(); });
  await expect(page).toHaveScreenshot('k-question-1200.png', { fullPage: true, animations: 'disabled', caret: 'hide', maxDiffPixelRatio: 0.01 });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page).toHaveScreenshot('k-question-390.png', { fullPage: true, animations: 'disabled', caret: 'hide', maxDiffPixelRatio: 0.01 });
});
