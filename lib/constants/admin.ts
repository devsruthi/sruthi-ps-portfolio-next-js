/** Admin contact messages list. */
export const ADMIN_MESSAGES = {
  PAGE_SIZE: 10,
  SORT_ASC: "asc" as const,
  SORT_DESC: "desc" as const,
} as const;

export type MessagesSortOrder = (typeof ADMIN_MESSAGES)[keyof Pick<
  typeof ADMIN_MESSAGES,
  "SORT_ASC" | "SORT_DESC"
>];
