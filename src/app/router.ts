import { useEffect, useState, useCallback } from 'react';

/**
 * Hash routes work under any base path (e.g. /cpre/) and offline deep links:
 * the SW always serves the same app shell. Route segments never carry
 * solution hints (no rule/criterion names in the URL during a check).
 */
export type Route =
  | { name: 'session' }
  | { name: 'goals' }
  | { name: 'lesson'; goalKey: string }
  | { name: 'question'; attemptId: string }
  | { name: 'remediation'; attemptId: string }
  | { name: 'open'; activityId: string }
  | { name: 'scope' }
  | { name: 'test-intro' }
  | { name: 'test'; attemptId: string; index: number }
  | { name: 'test-review'; attemptId: string }
  | { name: 'test-result'; attemptId: string }
  | { name: 'test-item'; attemptId: string; index: number }
  | { name: 'data' }
  | { name: 'report'; attemptId: string }
  | { name: 'state'; kind: 'missing' | 'novariant' | 'withdrawn' | 'disputed' | 'two-failed' };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  const [a, b, c, d] = parts;
  switch (a) {
    case undefined:
    case '':
    case 'sesja':
      return { name: 'session' };
    case 'cele':
      return { name: 'goals' };
    case 'material':
      return b ? { name: 'lesson', goalKey: [b, c].filter(Boolean).join('/') } : { name: 'goals' };
    case 'pytanie':
      return b ? { name: 'question', attemptId: b } : { name: 'session' };
    case 'korekta':
      return b ? { name: 'remediation', attemptId: b } : { name: 'session' };
    case 'otwarte':
      return b ? { name: 'open', activityId: b } : { name: 'goals' };
    case 'zakres':
      return { name: 'scope' };
    case 'dane':
      return { name: 'data' };
    case 'zgloszenie':
      return b ? { name: 'report', attemptId: b } : { name: 'session' };
    case 'stan': {
      const kinds = ['missing', 'novariant', 'withdrawn', 'disputed', 'two-failed'] as const;
      const kind = kinds.find((k) => k === b) ?? 'missing';
      return { name: 'state', kind };
    }
    case 'sprawdzenie':
      if (b === 'warunki' || !b) return { name: 'test-intro' };
      if (c === 'przeglad') return { name: 'test-review', attemptId: b };
      if (c === 'wynik') return { name: 'test-result', attemptId: b };
      if (c === 'wyjasnienie') return { name: 'test-item', attemptId: b, index: Number(d ?? 0) || 0 };
      return { name: 'test', attemptId: b, index: Number(c ?? 0) || 0 };
    default:
      return { name: 'session' };
  }
}

export function routeToHash(route: Route): string {
  switch (route.name) {
    case 'session': return '#/sesja';
    case 'goals': return '#/cele';
    case 'lesson': return `#/material/${route.goalKey.split('/').map(encodeURIComponent).join('/')}`;
    case 'question': return `#/pytanie/${encodeURIComponent(route.attemptId)}`;
    case 'remediation': return `#/korekta/${encodeURIComponent(route.attemptId)}`;
    case 'open': return `#/otwarte/${encodeURIComponent(route.activityId)}`;
    case 'scope': return '#/zakres';
    case 'test-intro': return '#/sprawdzenie/warunki';
    case 'test': return `#/sprawdzenie/${encodeURIComponent(route.attemptId)}/${String(route.index)}`;
    case 'test-review': return `#/sprawdzenie/${encodeURIComponent(route.attemptId)}/przeglad`;
    case 'test-result': return `#/sprawdzenie/${encodeURIComponent(route.attemptId)}/wynik`;
    case 'test-item': return `#/sprawdzenie/${encodeURIComponent(route.attemptId)}/wyjasnienie/${String(route.index)}`;
    case 'data': return '#/dane';
    case 'report': return `#/zgloszenie/${encodeURIComponent(route.attemptId)}`;
    case 'state': return `#/stan/${route.kind}`;
  }
}

export function useHashRoute(): [Route, (r: Route, opts?: { replace?: boolean }) => void] {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onHash = () => { setRoute(parseHash(window.location.hash)); };
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('hashchange', onHash); };
  }, []);
  const navigate = useCallback((r: Route, opts: { replace?: boolean } = {}) => {
    const hash = routeToHash(r);
    if (opts.replace) window.history.replaceState(null, '', hash);
    else if (window.location.hash !== hash) window.history.pushState(null, '', hash);
    setRoute(r);
  }, []);
  return [route, navigate];
}
