import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Page frame: one central column (main) + optional side context, exactly as
 * the "Skupiona sesja" prototype. In focused learning views the side context
 * collapses under the work area into a <details> (D-QA-03).
 */
export function Page({ children, side, focused = false, sideSummary, title }: {
  children: ReactNode;
  side?: ReactNode;
  focused?: boolean;
  sideSummary?: string;
  title: string;
}) {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    document.body.classList.toggle('focused', focused);
    return () => { document.body.classList.remove('focused'); };
  }, [focused]);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="shell">
      <main id="main" className="main" tabIndex={-1} ref={mainRef}>
        {children}
      </main>
      {side ? (
        <aside className="side" aria-label="Kontekst aktywności">
          {focused ? (
            <details>
              <summary>{sideSummary ?? 'Warunki i ograniczenia'}</summary>
              {side}
            </details>
          ) : side}
        </aside>
      ) : null}
    </div>
  );
}

export function Side({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h2>{title}</h2>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </>
  );
}

/** Moves focus to the page heading after navigation (WCAG 2.4.3). */
export function useFocusOnMount(ref: React.RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const el = ref.current;
    if (el) el.focus({ preventScroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
