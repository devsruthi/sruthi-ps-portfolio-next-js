/**
 * Returns a debounced function that delays invoking `fn` until after `waitMs` have
 * elapsed since the last time it was invoked.
 * Reusable for input handlers, resize, etc.
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  waitMs: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId !== null) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn.apply(this, args);
    }, waitMs);
  };
}
