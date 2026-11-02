import { test, expect } from '@playwright/test';
import { setServer, createProfile, waitForContent } from './helpers.ts';

test.beforeEach(async ({ request }) => { await setServer(request, { content: 'A', app: 'a' }); });

test('smoke: built app under /cpre/ with manifest, SW and learner content (QA-36)', async ({ page, request }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1, name: 'Kto dziś się uczy?' })).toBeVisible();
  // web app manifest: scope/start_url consistent with base
  const manifest = await (await request.get('http://localhost:4300/cpre/manifest.webmanifest')).json() as { scope: string; start_url: string; lang: string; icons: { purpose?: string }[] };
  expect(manifest.scope).toBe('/cpre/');
  expect(manifest.start_url).toBe('/cpre/');
  expect(manifest.lang).toBe('pl');
  expect(manifest.icons.some((i) => i.purpose === 'maskable')).toBe(true);
  // a missing JSON is a real 404, not SPA HTML
  const missing = await request.get('http://localhost:4300/cpre/content/releases/none.json');
  expect(missing.status()).toBe(404);
  expect(missing.headers()['content-type']).toContain('application/json');
  await createProfile(page, 'Ania');
  await waitForContent(page);
  await expect(page.getByText('Demonstracja techniczna · syntetyczne fixtures')).toBeVisible();
  // no remote fonts/CDN: every request stays on our origin
  const external = await page.evaluate(() => performance.getEntriesByType('resource').map((e) => e.name).filter((u) => !u.startsWith(location.origin)));
  expect(external).toEqual([]);
  // learner build contains no review content
  const review = await request.get('http://localhost:4300/cpre/content/review/manifest.json');
  expect(review.status()).toBe(404);
});
