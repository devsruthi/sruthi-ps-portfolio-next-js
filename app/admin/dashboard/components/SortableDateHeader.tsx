"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

type SortOrder = "asc" | "desc";

interface SortableDateHeaderProps {
  sortOrder: SortOrder;
  searchParams: Record<string, string>;
}

export function SortableDateHeader({ sortOrder, searchParams }: SortableDateHeaderProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const nextOrder: SortOrder = sortOrder === "asc" ? "desc" : "asc";
  const params = new URLSearchParams(searchParams);
  params.set("sort", nextOrder);
  params.set("page", "1");
  const href = `/admin/dashboard?${params.toString()}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => router.push(href));
  };

  return (
    <th className="px-4 py-3 font-medium text-zinc-400">
      <a
        href={href}
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 transition hover:text-white"
      >
        Date
        <span className="inline-flex flex-col">
          <SortArrow direction="up" active={sortOrder === "asc"} />
          <SortArrow direction="down" active={sortOrder === "desc"} />
        </span>
        {isPending && (
          <span className="text-zinc-500" aria-hidden>
            <svg
              className="size-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Updating sort"
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
      </a>
    </th>
  );
}

function SortArrow({
  direction,
  active,
}: {
  direction: "up" | "down";
  active: boolean;
}) {
  const d = direction === "up" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7";
  return (
    <svg
      className={`h-3 w-3 -my-0.5 ${active ? "text-amber-400" : "text-zinc-600"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );
}
