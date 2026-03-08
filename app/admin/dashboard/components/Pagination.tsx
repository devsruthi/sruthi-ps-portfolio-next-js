"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string>;
}

function buildPageUrl(searchParams: Record<string, string>, page: number): string {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(page));
  return `/admin/dashboard?${params.toString()}`;
}

export function Pagination({
  currentPage,
  totalPages,
  searchParams,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const linkClass =
    "inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-700 hover:text-white disabled:pointer-events-none disabled:opacity-50";

  return (
    <nav
      className="mt-4 flex flex-wrap items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {prevPage ? (
        <Link href={buildPageUrl(searchParams, prevPage)} className={linkClass}>
          Previous
        </Link>
      ) : (
        <span className={linkClass}>Previous</span>
      )}

      <span className="px-2 text-sm text-zinc-500">
        Page {currentPage} of {totalPages}
      </span>

      {nextPage ? (
        <Link href={buildPageUrl(searchParams, nextPage)} className={linkClass}>
          Next
        </Link>
      ) : (
        <span className={linkClass}>Next</span>
      )}
    </nav>
  );
}
