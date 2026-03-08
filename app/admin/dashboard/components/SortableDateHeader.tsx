"use client";

import Link from "next/link";

type SortOrder = "asc" | "desc";

interface SortableDateHeaderProps {
  sortOrder: SortOrder;
  searchParams: Record<string, string>;
}

export function SortableDateHeader({ sortOrder, searchParams }: SortableDateHeaderProps) {
  const nextOrder: SortOrder = sortOrder === "asc" ? "desc" : "asc";
  const params = new URLSearchParams(searchParams);
  params.set("sort", nextOrder);
  params.set("page", "1");
  const href = `/admin/dashboard?${params.toString()}`;

  return (
    <th className="px-4 py-3 font-medium text-zinc-400">
      <Link
        href={href}
        className="inline-flex items-center gap-1 transition hover:text-white"
      >
        Date
        <span className="inline-flex flex-col">
          <SortArrow direction="up" active={sortOrder === "asc"} />
          <SortArrow direction="down" active={sortOrder === "desc"} />
        </span>
      </Link>
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
