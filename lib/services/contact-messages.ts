import { getSupabaseServerClient } from "@/lib/db/supabase-server";
import { TABLES } from "@/lib/constants";
import type { ContactMessageInsert } from "@/lib/types/db";
import type { ContactMessageRow } from "@/lib/types/supabase";
import type { GetContactMessagesParams, GetContactMessagesResult } from "@/lib/types/admin";

/**
 * Escape value for use inside Supabase/PostgREST ilike pattern.
 * We use * as wildcard (PostgREST alias for %) to avoid URL-encoding issues.
 * Escape literal * and \ and " so the pattern is safe inside double quotes.
 */
function escapeIlikePattern(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\*/g, "\\*")
    .replace(/"/g, '\\"');
}

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

/**
 * Paginated, sortable, searchable list for admin. Server-only.
 */
export async function getContactMessagesPage(
  params: GetContactMessagesParams
): Promise<GetContactMessagesResult> {
  const { page, pageSize, sortOrder, search } = params;
  const supabase = getSupabaseServerClient();
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const trimmed = search.trim();
  let query = supabase
    .from(TABLES.CONTACT_MESSAGES)
    .select("id, name, email, message, created_at", { count: "exact" });

  if (trimmed.length > 0) {
    const term = escapeIlikePattern(trimmed);
    // PostgREST: * = wildcard alias for %; double-quote pattern so spaces/special chars work
    const pattern = `"*${term}*"`;
    query = query.or(
      `name.ilike.${pattern},email.ilike.${pattern},message.ilike.${pattern}`
    );
  }

  query = query
    .order("created_at", { ascending: sortOrder === "asc" })
    .range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("Supabase contact_messages select failed:", error);
    throw error;
  }

  return {
    messages: (data ?? []) as ContactMessageRow[],
    total: count ?? 0,
  };
}

/**
 * Lists all contact form submissions for admin. Server-only.
 */
export async function getContactMessages(): Promise<ContactMessageRow[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from(TABLES.CONTACT_MESSAGES)
    .select("id, name, email, message, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase contact_messages select failed:", error);
    throw error;
  }
  return (data ?? []) as ContactMessageRow[];
}
