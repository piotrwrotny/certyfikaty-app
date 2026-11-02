import { defineConfig, devices } from '@playwright/test';

/**
 * E2E runs against the BUILT app (dist-e2e, base /cpre/) with its service
 * worker, served by tests/e2e/server.ts (test LAN host with failure modes).
 * Tests run serially because they share the server's content/app state.
 */
const PORT = 4300;
export const BASE_URL = `http://localhost:${String(PORT)}/cpre/`;

export default defineConfig({
  testDir: 'tests',
  testMatch: ['e2e/**/*.spec.ts', 'visual/**/*.spec.ts'],
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: [['list'], ['json', { outputFile: 'qa/evidence/playwright-results.json' }]],
  use: {
    baseURL: BASE_URL,
    serviceWorkers: 'allow',
    locale: 'pl-PL',
    trace: 'retain-on-failure',
  },
  webServer: [
    {
      command: `npx tsx tests/e2e/server.ts --port ${String(PORT)}`,
      url: `http://localhost:${String(PORT)}/cpre/`,
      reuseExistingServer: false,
      timeout: 30_000,
    },
    {
      // review build (T21 review-only content, separate database) on its own sub-path
      command: 'npx tsx tests/e2e/server.ts --port 4301 --base /cpre-review/ --dist dist-review --dist-b dist-review',
      url: 'http://localhost:4301/cpre-review/',
      reuseExistingServer: false,
      timeout: 30_000,
    },
  ],
  projects: [
    { name: 'chromium', testDir: 'tests/e2e', testIgnore: ['**/review.spec.ts'], use: { ...devices['Desktop Chrome'], viewport: { width: 1200, height: 900 } } },
    { name: 'firefox', testDir: 'tests/e2e', testMatch: ['**/smoke.spec.ts', '**/profiles.spec.ts', '**/offline.spec.ts', '**/updates.spec.ts'], use: { ...devices['Desktop Firefox'], viewport: { width: 1200, height: 900 } } },
    { name: 'webkit', testDir: 'tests/e2e', testMatch: ['**/smoke.spec.ts', '**/learning.spec.ts', '**/topic-test.spec.ts'], use: { ...devices['Desktop Safari'], viewport: { width: 1200, height: 900 } } },
    { name: 'review', testDir: 'tests/e2e', testMatch: ['**/review.spec.ts'], use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4301/cpre-review/', viewport: { width: 1200, height: 900 } } },
    { name: 'visual', testDir: 'tests/visual', use: { ...devices['Desktop Chrome'], viewport: { width: 1200, height: 900 } } },
  ],
});
