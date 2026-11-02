/** QA-33: untrusted Markdown never executes HTML/JS; unsafe links become plain text. */
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Markdown } from '@/ui/Markdown.tsx';

describe('safe Markdown renderer', () => {
  it('escapes raw HTML and script', () => {
    const html = renderToStaticMarkup(<Markdown text={'<script>alert(1)</script> **ok** <img src=x onerror=alert(1)>'} />);
    expect(html).not.toContain('<script');
    expect(html).not.toContain('<img');
    expect(html).toContain('&lt;script&gt;');
    expect(html).toContain('<strong>ok</strong>');
  });

  it('renders only http(s) links, with noopener; javascript:/data: become text', () => {
    const html = renderToStaticMarkup(<Markdown text={'[a](https://example.org/x) [b](javascript:alert(1)) [c](data:text/html,x)'} />);
    expect(html).toContain('href="https://example.org/x"');
    expect(html).toContain('rel="noopener noreferrer external"');
    expect(html).not.toContain('javascript:');
    expect(html).not.toContain('href="data:');
  });

  it('renders pipe tables and lists from T21-like content inside a scrollable region', () => {
    const html = renderToStaticMarkup(<Markdown text={'| A | B |\n|---|---|\n| 1 | 2 |\n\n- x\n- y\n\n1. p\n2. q'} />);
    expect(html).toContain('<table>');
    expect(html).toContain('<th scope="col">A</th>');
    expect(html).toContain('<ul><li>x</li><li>y</li></ul>');
    expect(html).toContain('<ol class="steps">');
    expect(html).toContain('class="tablewrap"');
  });

  it('handles very long words without throwing', () => {
    const long = 'x'.repeat(5000);
    expect(() => renderToStaticMarkup(<Markdown text={long} />)).not.toThrow();
  });
});
