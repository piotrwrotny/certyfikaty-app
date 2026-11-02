import { describe, expect, it } from 'vitest';
import { add, compare, equals, fraction, fractionLabel, sum, toDecimalString, toPercentString } from '@/domain/fraction.ts';

describe('fraction (QA-09)', () => {
  it('2/3 + 2/3 + 2/3 equals exactly 2', () => {
    const total = sum([fraction(2, 3), fraction(2, 3), fraction(2, 3)]);
    expect(total).toEqual(fraction(2, 1));
    expect(equals(total, fraction(2))).toBe(true);
  });

  it('never changes a comparison through rounding', () => {
    const a = sum([fraction(2, 3), fraction(2, 3), fraction(2, 3)]);
    expect(compare(a, fraction(2))).toBe(0);
    expect(compare(fraction(199, 100), fraction(2))).toBe(-1);
  });

  it('reduces and normalizes sign', () => {
    expect(fraction(4, 6)).toEqual(fraction(2, 3));
    expect(fraction(1, -2)).toEqual(fraction(-1, 2));
  });

  it('rejects unsafe integers and zero denominators', () => {
    expect(() => fraction(1, 0)).toThrow(RangeError);
    expect(() => fraction(Number.MAX_SAFE_INTEGER + 1)).toThrow(RangeError);
  });

  it('adds exactly', () => {
    expect(add(fraction(1, 2), fraction(1, 3))).toEqual(fraction(5, 6));
  });

  it('formats for display without mutating exact value', () => {
    expect(toDecimalString(fraction(3, 2))).toBe('1,5');
    expect(fractionLabel(fraction(4, 3))).toBe('4/3');
    expect(toPercentString(fraction(5, 2), fraction(5))).toBe('50%');
  });
});
