/**
 * Exact rational arithmetic for scoring (docs/06). Numerators and denominators are
 * safe integers; results are always reduced with a positive denominator.
 */
export interface Fraction {
  readonly numerator: number;
  readonly denominator: number;
}

function assertSafe(n: number, label: string): void {
  if (!Number.isSafeInteger(n)) {
    throw new RangeError(`Fraction ${label} is not a safe integer: ${String(n)}`);
  }
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x;
}

export function fraction(numerator: number, denominator = 1): Fraction {
  assertSafe(numerator, 'numerator');
  assertSafe(denominator, 'denominator');
  if (denominator === 0) throw new RangeError('Fraction denominator cannot be 0');
  const sign = denominator < 0 ? -1 : 1;
  const g = gcd(numerator, denominator) || 1;
  return { numerator: (sign * numerator) / g, denominator: (sign * denominator) / g };
}

export const ZERO: Fraction = fraction(0, 1);

export function add(a: Fraction, b: Fraction): Fraction {
  return fraction(a.numerator * b.denominator + b.numerator * a.denominator, a.denominator * b.denominator);
}

export function multiply(a: Fraction, b: Fraction): Fraction {
  return fraction(a.numerator * b.numerator, a.denominator * b.denominator);
}

export function sum(values: Iterable<Fraction>): Fraction {
  let acc = ZERO;
  for (const v of values) acc = add(acc, v);
  return acc;
}

export function compare(a: Fraction, b: Fraction): -1 | 0 | 1 {
  const left = a.numerator * b.denominator;
  const right = b.numerator * a.denominator;
  assertSafe(left, 'compare');
  assertSafe(right, 'compare');
  return left < right ? -1 : left > right ? 1 : 0;
}

export function equals(a: Fraction, b: Fraction): boolean {
  return compare(a, b) === 0;
}

export function isZero(a: Fraction): boolean {
  return a.numerator === 0;
}

/** Presentation only. The exact value is never replaced by this rounding. */
export function toDecimalString(a: Fraction, maxFractionDigits = 2, locale = 'pl-PL'): string {
  if (a.denominator === 1) return String(a.numerator);
  const value = a.numerator / a.denominator;
  return value.toLocaleString(locale, { maximumFractionDigits: maxFractionDigits });
}

/** Percent of points, rounded only for display; comparisons must use the exact fractions. */
export function toPercentString(part: Fraction, whole: Fraction, locale = 'pl-PL'): string {
  if (whole.numerator <= 0) return '—';
  const value = (part.numerator * whole.denominator * 100) / (part.denominator * whole.numerator);
  return `${value.toLocaleString(locale, { maximumFractionDigits: 1 })}%`;
}

export function fractionLabel(a: Fraction): string {
  return a.denominator === 1 ? String(a.numerator) : `${String(a.numerator)}/${String(a.denominator)}`;
}

export function fractionFromJson(v: { numerator: number; denominator: number }): Fraction {
  return fraction(v.numerator, v.denominator);
}
