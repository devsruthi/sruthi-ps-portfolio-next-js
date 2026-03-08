/** Result of the contact form server action. */
export type ContactResult =
  | { success: true }
  | { success: false; error: string };
