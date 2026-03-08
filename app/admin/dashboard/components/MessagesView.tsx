"use client";

import type { ContactMessageRow } from "@/lib/types/supabase";
import { SearchBar } from "./SearchBar";
import { MessagesTable } from "./MessagesTable";
import { Pagination } from "./Pagination";

interface MessagesViewProps {
  messages: ContactMessageRow[];
  total: number;
  page: number;
  pageSize: number;
  sortOrder: "asc" | "desc";
  search: string;
  searchParams: Record<string, string>;
}

export function MessagesView({
  messages,
  total,
  page,
  pageSize,
  sortOrder,
  search,
  searchParams,
}: MessagesViewProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="min-w-0">
      <h1 className="mb-4 text-xl font-semibold text-white sm:mb-6 sm:text-2xl">
        Contact Messages
      </h1>
      <SearchBar
        defaultValue={search}
        searchParams={searchParams}
      />
      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 sm:rounded-xl">
        {messages.length === 0 ? (
          <p className="p-8 text-center text-zinc-500">
            {search.trim()
              ? "No messages match your search."
              : "No contact messages yet."}
          </p>
        ) : (
          <MessagesTable
            messages={messages}
            sortOrder={sortOrder}
            searchParams={searchParams}
          />
        )}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        searchParams={searchParams}
      />
    </div>
  );
}
