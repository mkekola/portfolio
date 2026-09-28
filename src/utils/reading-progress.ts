/**
 * How far through a scrollable page the reader is, as a percentage.
 *
 * Returns 0 when there is nothing to scroll, which also keeps the division safe
 * on short case studies where the content fits the viewport.
 */
export function scrollProgress(scrollY: number, scrollHeight: number, innerHeight: number): number {
  const max = scrollHeight - innerHeight;
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (scrollY / max) * 100));
}
