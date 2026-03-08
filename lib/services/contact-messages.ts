import { getSupabaseServerClient } from "@/lib/db/supabase-server";
import { TABLES } from "@/lib/constants";
import type { ContactMessageInsert } from "@/lib/types/db";

/**
 * Persists a contact form submission to Supabase.
 * Server-only: call from Server Actions or Route Handlers only.
 */
export async function saveContactMessage(
  payload: ContactMessageInsert
): Promise<void> {
  const supabase = getSupabaseServerClient();
  const row: ContactMessageInsert = {
    name: payload.name,
    email: payload.email,
    message: payload.message,
  };
  const { error } = await supabase
    .from(TABLES.CONTACT_MESSAGES)
    .insert(row);

  if (error) {
    console.error("Supabase contact_messages insert failed:", error);
    throw error;
  }
}
