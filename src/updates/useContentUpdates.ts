/**
 * Triggers for the LAN content check (docs/04 UPD-01): start, foreground,
 * `online`, manual, and every 5 minutes while visible after a successful
 * check; backoff 30 s → 2 min → 10 min → 30 min on failures. navigator.onLine
 * is only a hint; the fetch of our own manifest decides.
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ContentUpdater, VISIBLE_PERIODIC_MS } from './updater.ts';

export type UpdateStatus =
  | { kind: 'idle' }
  | { kind: 'checking' }
  | { kind: 'downloading' }
  | { kind: 'up-to-date'; at: number }
  | { kind: 'activated'; releaseId: string; at: number }
  | { kind: 'unreachable'; at: number }
  | { kind: 'needs-app-update'; at: number }
  | { kind: 'invalid'; at: number; codes: string[] };

export interface ContentUpdatesApi {
  status: UpdateStatus;
  checkNow: () => Promise<void>;
  lastActivatedReleaseId: string | null;
}

export function useContentUpdates(updater: ContentUpdater | null, onActivated: (releaseId: string) => void): ContentUpdatesApi {
  const [status, setStatus] = useState<UpdateStatus>({ kind: 'idle' });
  const [lastActivated, setLastActivated] = useState<string | null>(null);
  const inFlight = useRef<Promise<void> | null>(null);
  const timer = useRef<number | null>(null);
  const onActivatedRef = useRef(onActivated);
  useLayoutEffect(() => { onActivatedRef.current = onActivated; });

  const schedule = useCallback((ms: number, fn: () => void) => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(fn, ms);
  }, []);

  const run = useCallback(async (manual: boolean): Promise<void> => {
    if (!updater) return;
    if (inFlight.current) return inFlight.current; // coalesce events into one request
    if (!manual && !updater.shouldAutoCheck()) return;
    const p = (async () => {
      setStatus({ kind: 'checking' });
      const probe = await updater.probe();
      switch (probe.kind) {
        case 'no-change':
          setStatus({ kind: 'up-to-date', at: Date.now() });
          break;
        case 'new-release': {
          setStatus({ kind: 'downloading' });
          const res = await updater.applyRelease(probe.manifest, probe.manifestSha256);
          if (res.ok) {
            // GC: only inactive, unpinned packages; referenced by any profile's attempts are kept.
            await updater.garbageCollect().catch(() => 0);
            setStatus({ kind: 'activated', releaseId: probe.manifest.releaseId, at: Date.now() });
            setLastActivated(probe.manifest.releaseId);
            onActivatedRef.current(probe.manifest.releaseId);
          } else {
            setStatus({ kind: 'invalid', at: Date.now(), codes: res.issues.map((i) => i.code) });
          }
          break;
        }
        case 'needs-app-update':
          setStatus({ kind: 'needs-app-update', at: Date.now() });
          break;
        case 'unreachable':
          setStatus({ kind: 'unreachable', at: Date.now() });
          break;
        case 'invalid':
          setStatus({ kind: 'invalid', at: Date.now(), codes: probe.issues.map((i) => i.code) });
          break;
      }
    })().finally(() => {
      inFlight.current = null;
    });
    inFlight.current = p;
    await p;
  }, [updater]);

  // schedule follow-up checks: periodic when OK, backoff when failing; only while visible
  useEffect(() => {
    if (!updater) return;
    if (status.kind === 'unreachable' || status.kind === 'invalid') {
      schedule(updater.nextRetryDelay(), () => { if (document.visibilityState === 'visible') void run(true); });
    } else if (status.kind === 'up-to-date' || status.kind === 'activated') {
      schedule(VISIBLE_PERIODIC_MS, () => { if (document.visibilityState === 'visible') void run(true); });
    }
  }, [status, updater, run, schedule]);

  useEffect(() => {
    if (!updater) return;
    void updater.recover().then(() => run(true));
    const onVisible = () => { if (document.visibilityState === 'visible') void run(false); };
    const onOnline = () => { void run(false); };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('online', onOnline);
    window.addEventListener('focus', onVisible);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('online', onOnline);
      window.removeEventListener('focus', onVisible);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [updater, run]);

  return { status, checkNow: () => run(true), lastActivatedReleaseId: lastActivated };
}
