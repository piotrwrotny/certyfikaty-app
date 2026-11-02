/**
 * The attempt currently shown in this tab (one app instance per page). Used by
 * profile switch and "Zapisz i odśwież" to pause/suspend before leaving.
 * Kept outside React state on purpose: it never drives rendering.
 */
let current: string | null = null;

export function setActiveAttemptId(id: string | null): void {
  current = id;
}

export function getActiveAttemptId(): string | null {
  return current;
}
