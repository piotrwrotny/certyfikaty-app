/**
 * Generates simple app icons (no new branding): accent square with a paper
 * inner mark, as plain PNG (zlib, no image dependency) + SVG. Deterministic.
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT } from './content/lib.ts';

const ACCENT = [0x18, 0x5a, 0x50];
const PAPER = [0xfa, 0xf9, 0xf6];

function crc32(buf: Uint8Array): number {
  let c = ~0;
  for (const b of buf) {
    c ^= b;
    for (let k = 0; k < 8; k += 1) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  out.set(new TextEncoder().encode(type), 4);
  out.set(data, 8);
  view.setUint32(8 + data.length, crc32(out.subarray(4, 8 + data.length)));
  return out;
}

function png(size: number, maskable: boolean): Uint8Array {
  const raw = new Uint8Array(size * (size * 3 + 1));
  const inset = maskable ? 0.3 : 0.24;
  const stroke = Math.max(2, Math.round(size * 0.07));
  const lo = Math.round(size * inset);
  const hi = size - lo;
  for (let y = 0; y < size; y += 1) {
    raw[y * (size * 3 + 1)] = 0;
    for (let x = 0; x < size; x += 1) {
      // a "C"-like open square mark in paper colour on the accent background
      const inRing = x >= lo && x < hi && y >= lo && y < hi && !(x >= lo + stroke && x < hi - stroke && y >= lo + stroke && y < hi - stroke);
      const gap = x >= hi - stroke && y >= lo + stroke * 2 && y < hi - stroke * 2;
      const c = inRing && !gap ? PAPER : ACCENT;
      const o = y * (size * 3 + 1) + 1 + x * 3;
      raw[o] = c[0] ?? 0;
      raw[o + 1] = c[1] ?? 0;
      raw[o + 2] = c[2] ?? 0;
    }
  }
  const ihdr = new Uint8Array(13);
  const v = new DataView(ihdr.buffer);
  v.setUint32(0, size);
  v.setUint32(4, size);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const sig = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
  const parts = [sig, chunk('IHDR', ihdr), chunk('IDAT', new Uint8Array(deflateSync(raw))), chunk('IEND', new Uint8Array())];
  const total = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const p of parts) { out.set(p, off); off += p.length; }
  return out;
}

const dir = resolve(ROOT, 'public/icons');
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, 'icon-192.png'), png(192, false));
writeFileSync(resolve(dir, 'icon-512.png'), png(512, false));
writeFileSync(resolve(dir, 'icon-maskable-512.png'), png(512, true));
writeFileSync(resolve(dir, 'icon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#185a50"/><path d="M47 15H15v34h32" fill="none" stroke="#faf9f6" stroke-width="5"/></svg>\n`);
console.log('icons written to public/icons');
