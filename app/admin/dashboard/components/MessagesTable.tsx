"use client";

import { useState } from "react";
import type { ContactMessageRow } from "@/lib/types/supabase";
import { formatMessageDate } from "../utils/format";
import { MessageDetailModal } from "./MessageDetailModal";
import { SortableDateHeader } from "./SortableDateHeader";

interface MessagesTableProps {
  messages: ContactMessageRow[];
  sortOrder: "asc" | "desc";
  searchParams: Record<string, string>;
}

export function MessagesTable({
  messages,
  sortOrder,
  searchParams,
}: MessagesTableProps) {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessageRow | null>(null);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-800/50">
              <SortableDateHeader sortOrder={sortOrder} searchParams={searchParams} />
              <th className="px-3 py-2.5 font-medium text-zinc-400 sm:px-4 sm:py-3">Name</th>
              <th className="px-3 py-2.5 font-medium text-zinc-400 sm:px-4 sm:py-3">Email</th>
              <th className="px-3 py-2.5 font-medium text-zinc-400 sm:px-4 sm:py-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((row) => (
              <tr
                key={row.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedMessage(row)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedMessage(row);
                  }
                }}
                className="cursor-pointer border-b border-zinc-800/80 transition hover:bg-zinc-800/30 focus:bg-zinc-800/30 focus:outline-none"
              >
                <td className="whitespace-nowrap px-3 py-2.5 text-zinc-500 sm:px-4 sm:py-3">
                  {formatMessageDate(row.created_at)}
                </td>
                <td className="px-3 py-2.5 text-white sm:px-4 sm:py-3">{row.name}</td>
                <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                  <a
                    href={`mailto:${row.email}`}
                    className="text-amber-400 hover:underline break-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {row.email}
                  </a>
                </td>
                <td className="max-w-[200px] sm:max-w-md px-3 py-2.5 text-zinc-300 sm:px-4 sm:py-3">
                  <span className="line-clamp-2">{row.message}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MessageDetailModal
        message={selectedMessage}
        onClose={() => setSelectedMessage(null)}
      />
    </>
  );
}
