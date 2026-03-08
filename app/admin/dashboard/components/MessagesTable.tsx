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
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-800/50">
              <SortableDateHeader sortOrder={sortOrder} searchParams={searchParams} />
              <th className="px-4 py-3 font-medium text-zinc-400">Name</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Email</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Message</th>
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
                <td className="whitespace-nowrap px-4 py-3 text-zinc-500">
                  {formatMessageDate(row.created_at)}
                </td>
                <td className="px-4 py-3 text-white">{row.name}</td>
                <td className="px-4 py-3">
                  <a
                    href={`mailto:${row.email}`}
                    className="text-amber-400 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {row.email}
                  </a>
                </td>
                <td className="max-w-md px-4 py-3 text-zinc-300">
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
