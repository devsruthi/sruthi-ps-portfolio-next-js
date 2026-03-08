/**
 * Validates that a string looks like an email and is within length.
 */
export function validateEmail(value: string, maxLength: number): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > maxLength) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

/**
 * Trims and truncates a string to maxLen. Use for sanitizing form inputs.
 */
export function sanitizeString(value: string, maxLen: number): string {
  return value.trim().slice(0, maxLen);
}
