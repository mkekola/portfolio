import { describe, expect, it } from 'vitest';
import { scrollProgress } from './reading-progress';

describe('scrollProgress', () => {
  it('is 0 at the top of the page', () => {
    expect(scrollProgress(0, 3000, 900)).toBe(0);
  });

  it('is 100 at the very bottom', () => {
    expect(scrollProgress(2100, 3000, 900)).toBe(100);
  });

  it('is 50 halfway down', () => {
    expect(scrollProgress(1050, 3000, 900)).toBe(50);
  });

  it('returns 0 when the page is not scrollable', () => {
    expect(scrollProgress(0, 600, 900)).toBe(0);
  });

  it('returns 0 instead of dividing by zero when content exactly fills the viewport', () => {
    expect(scrollProgress(0, 900, 900)).toBe(0);
  });

  it('clamps overscroll, which browsers report on rubber-band scrolling', () => {
    expect(scrollProgress(5000, 3000, 900)).toBe(100);
    expect(scrollProgress(-50, 3000, 900)).toBe(0);
  });
});
