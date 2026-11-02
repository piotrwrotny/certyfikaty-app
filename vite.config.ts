import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'node:url';
import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const channel = process.env.VITE_CONTENT_CHANNEL === 'review' ? 'review' : 'learner';

/**
 * Copies ONLY the selected channel's generated release into dist/content.
 * Review content never lands in a learner build by wildcard (docs/04, docs/09).
 */
function copyContentChannel(): Plugin {
  return {
    name: 'cpre-copy-content-channel',
    apply: 'build',
    closeBundle() {
      const src = resolve(process.cwd(), 'release-out/content', channel);
      const outDir = resolve(process.cwd(), process.env.VITE_OUT_DIR ?? 'dist');
      const dest = resolve(outDir, 'content');
      rmSync(dest, { recursive: true, force: true });
      if (existsSync(src)) cpSync(src, dest, { recursive: true });
    },
  };
}

// Base URL is configured per deployment (e.g. "/cpre/"); see docs/09 and RUNBOOK.
const base = process.env.VITE_BASE ?? '/';
const normalizedBase = base.endsWith('/') ? base : `${base}/`;

export default defineConfig({
  base: normalizedBase,
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version ?? '0.1.0'),
    __APP_BUILD__: JSON.stringify(process.env.VITE_BUILD_TAG ?? 'local'),
  },
  build: { target: 'es2022', sourcemap: false, reportCompressedSize: true, outDir: process.env.VITE_OUT_DIR ?? 'dist' },
  plugins: [
    react(),
    copyContentChannel(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: null,
      includeAssets: ['icons/icon.svg'],
      manifest: {
        name: 'IREB CPRE — pracownia nauki',
        short_name: 'CPRE',
        description: 'Skupiona sesja nauki do IREB CPRE Foundation Level. Nazwane profile lokalne, praca offline.',
        lang: 'pl',
        start_url: normalizedBase,
        scope: normalizedBase,
        display: 'standalone',
        background_color: '#faf9f6',
        theme_color: '#185a50',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // App shell only. Content releases live in IndexedDB; the manifest is always fetched no-store.
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        globIgnores: ['content/**'],
        navigateFallback: `${normalizedBase}index.html`,
        navigateFallbackDenylist: [/\/content\//, /\/__test\//],
        runtimeCaching: [],
        cleanupOutdatedCaches: true,
        clientsClaim: false,
        skipWaiting: false,
      },
      devOptions: { enabled: false },
    }),
  ],
  server: { port: 5173 },
  preview: { port: 4173 },
});
