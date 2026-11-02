/**
 * Safe Markdown subset (docs/05, QA-33): paragraphs, bullet/numbered lists,
 * **bold**, *italic*, simple pipe tables and http(s) links. Raw HTML is never
 * interpreted: everything is rendered as React text nodes. javascript:/data:
 * and other schemes are rendered as plain text.
 */
import { Fragment, type ReactNode } from 'react';

const SAFE_URL = /^https?:\/\/[^\s<>"']+$/i;

function renderInline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  // tokens: [label](url), **bold**, *italic*
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let i = 0;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyBase}-${String(i++)}`;
    if (m[1] !== undefined && m[2] !== undefined) {
      const url = m[2];
      if (SAFE_URL.test(url)) {
        out.push(
          <a key={key} href={url} target="_blank" rel="noopener noreferrer external">
            {m[1]}
          </a>,
        );
      } else {
        out.push(<Fragment key={key}>{m[1]}</Fragment>);
      }
    } else if (m[3] !== undefined) {
      out.push(<strong key={key}>{renderInline(m[3], key)}</strong>);
    } else if (m[4] !== undefined) {
      out.push(<em key={key}>{m[4]}</em>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function splitRow(line: string): string[] {
  return line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

export function Markdown({ text, className }: { text: string; className?: string }) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i] ?? '';
    if (line.trim() === '') {
      i += 1;
      continue;
    }
    // table
    if (line.trim().startsWith('|') && (lines[i + 1] ?? '').trim().match(/^\|?\s*:?-{2,}/)) {
      const header = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && (lines[i] ?? '').trim().startsWith('|')) {
        rows.push(splitRow(lines[i] ?? ''));
        i += 1;
      }
      const k = key++;
      blocks.push(
        <div className="tablewrap" key={k} tabIndex={0} role="region" aria-label="Tabela">
          <table>
            <thead>
              <tr>{header.map((h, j) => <th key={j} scope="col">{renderInline(h, `t${String(k)}h${String(j)}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci}>{renderInline(c, `t${String(k)}r${String(ri)}c${String(ci)}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    // lists
    const bullet = /^\s*[-*] (.*)$/;
    const numbered = /^\s*\d+\. (.*)$/;
    if (bullet.test(line) || numbered.test(line)) {
      const ordered = numbered.test(line);
      const re = ordered ? numbered : bullet;
      const items: string[] = [];
      while (i < lines.length && re.test(lines[i] ?? '')) {
        items.push((re.exec(lines[i] ?? '')?.[1]) ?? '');
        i += 1;
      }
      const k = key++;
      const children = items.map((it, j) => <li key={j}>{renderInline(it, `l${String(k)}-${String(j)}`)}</li>);
      blocks.push(ordered ? <ol key={k} className="steps">{children}</ol> : <ul key={k}>{children}</ul>);
      continue;
    }
    // paragraph (until blank line)
    const para: string[] = [];
    while (i < lines.length && (lines[i] ?? '').trim() !== '' && !(lines[i] ?? '').trim().startsWith('|') && !bullet.test(lines[i] ?? '') && !numbered.test(lines[i] ?? '')) {
      para.push((lines[i] ?? '').trim());
      i += 1;
    }
    const k = key++;
    blocks.push(<p key={k}>{renderInline(para.join(' '), `p${String(k)}`)}</p>);
  }
  return <div className={className}>{blocks}</div>;
}

/** Inline-only rendering (for option texts and stems inside labels). */
export function InlineMarkdown({ text }: { text: string }) {
  return <>{renderInline(text.replace(/\s+/g, ' ').trim(), 'i')}</>;
}
