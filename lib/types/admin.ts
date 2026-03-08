import type { ContactMessageRow } from "./supabase";

export interface GetContactMessagesParams {
  page: number;
  pageSize: number;
  sortOrder: "asc" | "desc";
  search: string;
}

export interface GetContactMessagesResult {
  messages: ContactMessageRow[];
  total: number;
}
