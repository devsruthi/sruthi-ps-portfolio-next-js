import { getContactMessagesPage } from "@/lib/services/contact-messages";
import { ADMIN_MESSAGES } from "@/lib/constants";
import { MessagesView } from "./components/MessagesView";

export const dynamic = "force-dynamic";

type SortOrder = "asc" | "desc";

function parseSearchParams(searchParams: Record<string, string | string[] | undefined>) {
  const pageRaw = searchParams.page;
  const page = Math.max(
    1,
    parseInt(Array.isArray(pageRaw) ? pageRaw[0] ?? "1" : pageRaw ?? "1", 10) || 1
  );
  const sortRaw = searchParams.sort;
  const sortOrder: SortOrder =
    sortRaw === "asc" || sortRaw === "desc"
      ? (Array.isArray(sortRaw) ? sortRaw[0] : sortRaw) as SortOrder
      : ADMIN_MESSAGES.SORT_DESC;
  const searchRaw = searchParams.q;
  const search = Array.isArray(searchRaw) ? searchRaw[0] ?? "" : searchRaw ?? "";
  return { page, sortOrder, search };
}

function toRecord(
  searchParams: Record<string, string | string[] | undefined>
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(searchParams)) {
    out[k] = Array.isArray(v) ? v[0] ?? "" : v ?? "";
  }
  return out;
}

export default async function ContactMessagesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolved = await searchParams;
  const { page, sortOrder, search } = parseSearchParams(resolved);
  const pageSize = ADMIN_MESSAGES.PAGE_SIZE;

  const { messages, total } = await getContactMessagesPage({
    page,
    pageSize,
    sortOrder,
    search,
  });

  const searchParamsRecord = toRecord(resolved);
  searchParamsRecord.page = String(page);
  searchParamsRecord.sort = sortOrder;
  searchParamsRecord.q = search;

  return (
    <MessagesView
      messages={messages}
      total={total}
      page={page}
      pageSize={pageSize}
      sortOrder={sortOrder}
      search={search}
      searchParams={searchParamsRecord}
    />
  );
}
