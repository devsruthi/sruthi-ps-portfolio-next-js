/**
 * Format ISO date for display in admin.
 * Uses fixed locale and options so server and client render the same string (avoids hydration mismatch).
 */
export function formatMessageDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
