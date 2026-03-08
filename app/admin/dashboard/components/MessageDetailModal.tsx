"use client";

import { useEffect } from "react";
import type { ContactMessageRow } from "@/lib/types/supabase";
import { formatMessageDate } from "../utils/format";

interface MessageDetailModalProps {
  message: ContactMessageRow | null;
  onClose: () => void;
}

export function MessageDetailModal({ message, onClose }: MessageDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (message) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-detail-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-zinc-700 bg-zinc-900 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h2 id="message-detail-title" className="text-lg font-semibold text-white">
            Message details
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 px-5 py-4 text-sm">
          <div>
            <span className="text-zinc-500">Date</span>
            <p className="mt-0.5 text-white">{formatMessageDate(message.created_at)}</p>
          </div>
          <div>
            <span className="text-zinc-500">Name</span>
            <p className="mt-0.5 text-white">{message.name}</p>
          </div>
          <div>
            <span className="text-zinc-500">Email</span>
            <p className="mt-0.5">
              <a href={`mailto:${message.email}`} className="text-amber-400 hover:underline">
                {message.email}
              </a>
            </p>
          </div>
          <div>
            <span className="text-zinc-500">Message</span>
            <p className="mt-0.5 whitespace-pre-wrap text-zinc-300">{message.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
