import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';

/**
 * Native modal <dialog>: background is inert, Tab stays inside, Escape acts
 * like the explicit "return" action, focus goes to the heading (or the safe
 * default button) on open and back to the invoking element on close (APG).
 */
/**
 * Safari does not move focus to a button on click, so document.activeElement is
 * <body> when a dialog opens from a mouse click. Track the last activated
 * control to restore focus to the invoking element on close.
 */
let lastActivated: HTMLElement | null = null;
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const t = e.target instanceof Element ? e.target.closest<HTMLElement>('button, a, summary, [role="button"]') : null;
    if (t) lastActivated = t;
  }, true);
}

export function Dialog({ open, onClose, labelledBy, children, initialFocus = 'heading', returnFocusTo }: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  initialFocus?: 'heading' | 'first-button' | 'autofocus';
  returnFocusTo?: () => HTMLElement | null;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const returnRef = useRef(returnFocusTo);
  useLayoutEffect(() => {
    onCloseRef.current = onClose;
    returnRef.current = returnFocusTo;
  });

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      // Safari focuses <body> or the nearest tabindex ancestor (e.g. <main>) on click, not the button.
      const el = document.activeElement;
      const active = el instanceof HTMLElement && el.matches('button, a[href], input, select, textarea, summary, [role="button"]') ? el : null;
      opener.current = active ?? lastActivated;
      d.showModal();
      d.scrollTop = 0;
      const target = initialFocus === 'autofocus' ? d.querySelector<HTMLElement>('[autofocus], input, textarea') : initialFocus === 'heading' ? d.querySelector<HTMLElement>(`#${CSS.escape(labelledBy)}`) : d.querySelector<HTMLElement>('button');
      if (target) {
        if (initialFocus === 'heading') target.tabIndex = -1;
        target.focus();
      }
    } else if (!open && d.open) {
      d.close();
      const back = returnRef.current?.() ?? opener.current;
      // WebKit restores focus to the pre-dialog element (often <body>) after close; focus after that.
      if (back) requestAnimationFrame(() => { if (document.contains(back)) back.focus({ preventScroll: true }); });
    }
  }, [open, initialFocus, labelledBy]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onCloseRef.current();
    };
    d.addEventListener('cancel', onCancel);
    return () => { d.removeEventListener('cancel', onCancel); };
  }, []);

  return (
    <dialog ref={ref} aria-labelledby={labelledBy}>
      {open ? children : null}
    </dialog>
  );
}

export function ConfirmDialog({ open, title, body, confirmLabel, cancelLabel = 'Wróć bez zmiany', onConfirm, onCancel, id }: {
  open: boolean;
  title: string;
  body: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  id: string;
}) {
  return (
    <Dialog open={open} onClose={onCancel} labelledBy={`${id}-title`} initialFocus="first-button">
      <div className="dialogbody">
        <h2 id={`${id}-title`}>{title}</h2>
        {typeof body === 'string' ? <p>{body}</p> : body}
        <div className="actions">
          <button type="button" onClick={onCancel}>{cancelLabel}</button>
          <button type="button" className="primary" onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </Dialog>
  );
}
