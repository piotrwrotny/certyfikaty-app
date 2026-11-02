import { useCallback, useMemo, useRef } from 'react';
import type { AttemptRecord } from '@/data/db.ts';

/** Page-level write state, exposed as body[data-save-state] ("saving" | "saved" | "error"). */
let pendingWrites = 0;
function markSaveState(state: 'saving' | 'saved' | 'error'): void {
  if (typeof document !== 'undefined') document.body.dataset['saveState'] = state;
}

/**
 * Serializes this tab's writes to one attempt. Each write starts from the
 * newest attempt version returned by the previous write, so quick consecutive
 * changes never conflict with each other. Conflicts with OTHER tabs are still
 * detected by the repository's version compare-and-swap.
 */
export function useSerializedWrites() {
  const latest = useRef<AttemptRecord | null>(null);
  const chain = useRef<Promise<void>>(Promise.resolve());
  const setLatest = useCallback((a: AttemptRecord | null) => { latest.current = a; }, []);
  const getLatest = useCallback(() => latest.current, []);
  const run = useCallback(<T,>(op: (a: AttemptRecord) => Promise<T>, pick: (r: T) => AttemptRecord): Promise<T> => {
    pendingWrites += 1;
    markSaveState('saving');
    const p = chain.current.then(async () => {
      const a = latest.current;
      if (!a) throw new Error('Brak wczytanej próby');
      const r = await op(a);
      latest.current = pick(r);
      return r;
    });
    chain.current = p.then(() => undefined, () => undefined);
    p.then(
      () => { pendingWrites -= 1; if (pendingWrites === 0) markSaveState('saved'); },
      () => { pendingWrites -= 1; markSaveState('error'); },
    );
    return p;
  }, []);
  // stable identity: callers use this object as an effect/callback dependency
  return useMemo(() => ({ run, setLatest, getLatest }), [run, setLatest, getLatest]);
}
