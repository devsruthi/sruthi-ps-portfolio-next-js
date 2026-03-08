"use client";

import { useCallback, useRef, useTransition } from "react";
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
  const [isPending, startTransition] = useTransition();
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
    debounce((value: string) => {
      startTransition(() => applySearch(value));
    }, SEARCH_DEBOUNCE_MS)
  ).current;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedApply(e.target.value);
    },
    [debouncedApply]
  );

  return (
    <div className="mb-4 flex items-center gap-2 w-full max-w-md">
      <div className="relative flex flex-1 min-w-0">
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
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 pr-10 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        {isPending && (
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
            aria-hidden
          >
            <svg
              className="size-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Searching"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
