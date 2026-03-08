"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "@/lib/utils";

const SEARCH_DEBOUNCE_MS = 300;

interface SearchBarProps {
  defaultValue: string;
  searchParams: Record<string, string>;
  searchPlaceholder?: string;
}

export function SearchBar({
  defaultValue,
  searchParams,
  searchPlaceholder = "Search name, email, message…",
}: SearchBarProps) {
  const router = useRouter();
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;

  const applySearch = useCallback((value: string) => {
    const params = new URLSearchParams(searchParamsRef.current);
    params.set("page", "1");
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      params.delete("q");
    } else {
      params.set("q", trimmed);
    }
    const query = params.toString();
    router.push(query ? `/admin/dashboard?${query}` : "/admin/dashboard");
  }, [router]);

  const debouncedApply = useRef(
    debounce((value: string) => applySearch(value), SEARCH_DEBOUNCE_MS)
  ).current;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedApply(e.target.value);
    },
    [debouncedApply]
  );

  return (
    <div className="mb-4">
      <label htmlFor="messages-search" className="sr-only">
        Search messages
      </label>
      <input
        id="messages-search"
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={searchPlaceholder}
        onChange={handleChange}
        autoComplete="off"
        className="w-full max-w-md rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
      />
    </div>
  );
}
