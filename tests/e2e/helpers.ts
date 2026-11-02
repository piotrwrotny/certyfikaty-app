import { expect, type APIRequestContext, type Page } from '@playwright/test';

export type ContentMode = 'A' | 'B' | 'withdraw' | 'bad-digest' | 'truncated' | 'bad-schema' | 'portal' | 'down' | 'hang' | 'incompatible' | 'rollback';

/** Waits until this tab's pending answer writes are committed (body[data-save-state=saved]). */
export async function waitForSaved(page: Page): Promise<void> {
  await expect(page.locator('body')).toHaveAttribute('data-save-state', 'saved');
}

export async function setServer(request: APIRequestContext, state: { content?: ContentMode; app?: 'a' | 'b' }): Promise<void> {
  const res = await request.post('http://localhost:4300/__test/state', { data: state });
  expect(res.ok()).toBe(true);
}

export async function openApp(page: Page, hash = ''): Promise<void> {
  await page.goto(`./${hash}`);
}

export async function createProfile(page: Page, name: string): Promise<void> {
  await page.getByRole('button', { name: 'Dodaj profil' }).click();
  await page.getByLabel('Nazwa profilu').fill(name);
  await page.getByRole('button', { name: 'Zapisz', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Główna' })).toBeVisible();
}

export async function selectProfile(page: Page, name: string): Promise<void> {
  await page.getByRole('list', { name: 'Profile' }).getByRole('button', { name: new RegExp(`^${name}`) }).click();
  await expect(page.getByRole('navigation', { name: 'Główna' })).toBeVisible();
}

/** Waits until the learner release is active (the session shows a goal). */
export async function waitForContent(page: Page): Promise<void> {
  await expect(page.getByRole('button', { name: 'Spróbuj pytania' }).or(page.getByRole('button', { name: 'Zacznij od wprowadzenia' })).first()).toBeVisible({ timeout: 20_000 });
}

export async function waitForServiceWorker(page: Page): Promise<void> {
  await page.waitForFunction(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return Boolean(reg?.active);
  }, null, { timeout: 30_000 });
}

export async function startFirstQuestion(page: Page): Promise<void> {
  await page.getByRole('button', { name: 'Spróbuj pytania' }).first().click();
  await expect(page.getByRole('heading', { level: 1, name: 'Twoja odpowiedź.' })).toBeVisible();
}

export async function goToGoals(page: Page): Promise<void> {
  await page.getByRole('button', { name: 'Wybierz inny cel' }).first().click();
  await expect(page.getByRole('heading', { level: 1, name: 'Czego chcesz spróbować?' })).toBeVisible();
}

/** Starts the question of a goal by its criterion heading (TECH01: "Format A" | "Format P" | "Format K"). */
export async function startGoalQuestion(page: Page, label: string): Promise<void> {
  await page.getByRole('button', { name: 'Sesja' }).click();
  await goToGoals(page);
  const heading = label.replace(/^format/, 'Format');
  const section = page.locator('section.topic').filter({ has: page.getByRole('heading', { name: heading, exact: true }) });
  await section.getByRole('button', { name: 'Zacznij od pytania' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Twoja odpowiedź.' })).toBeVisible();
}

/** Throws in the page if an IndexedDB write happens while the flag is on (QA-29 write failure injection). */
export async function installWriteFailureSwitch(page: Page): Promise<void> {
  await page.addInitScript(() => {
    const w = window as unknown as { __failWrites?: boolean };
    const wrap = (name: 'put' | 'add') => {
      const orig = Reflect.get(IDBObjectStore.prototype, name) as (this: IDBObjectStore, ...a: unknown[]) => IDBRequest;
      Reflect.set(IDBObjectStore.prototype, name, function (this: IDBObjectStore, ...args: unknown[]) {
        if (w.__failWrites && this.name !== 'appState' && this.name !== 'contentReleases' && this.name !== 'contentPackages') {
          throw new DOMException('Injected write failure', 'QuotaExceededError');
        }
        return orig.apply(this, args);
      });
    };
    wrap('put');
    wrap('add');
  });
}

export async function setWriteFailure(page: Page, on: boolean): Promise<void> {
  await page.evaluate((v) => { (window as unknown as { __failWrites?: boolean }).__failWrites = v; }, on);
}
