import type { ContactMessageInsert } from "./db";

/** Row returned from contact_messages (with generated columns). */
export type ContactMessageRow = ContactMessageInsert & {
  id: string;
  created_at: string;
};

/**
 * Minimal Supabase Database type for contact_messages table.
 * Extend this if you add more tables or columns.
 */
export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: ContactMessageRow;
        Insert: ContactMessageInsert;
        Update: Partial<ContactMessageInsert>;
      };
    };
  };
}
