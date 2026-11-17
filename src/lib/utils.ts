/**
 * Simple class name concatenator
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format date or year
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
