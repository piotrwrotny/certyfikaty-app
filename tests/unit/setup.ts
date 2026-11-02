import 'fake-indexeddb/auto';
import { webcrypto } from 'node:crypto';

if (!('crypto' in globalThis) || !globalThis.crypto.subtle) {
  Object.defineProperty(globalThis, 'crypto', { value: webcrypto, configurable: true });
}
