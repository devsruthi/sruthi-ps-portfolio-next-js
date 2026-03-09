import NextTopLoader from "nextjs-toploader";
import { AdminDashboardShell } from "./components/AdminDashboardShell";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader
        color="#fbbf24"
        showSpinner={false}
        height={3}
        crawlSpeed={200}
        shadow={false}
      />
      <AdminDashboardShell>{children}</AdminDashboardShell>
    </>
  );
}
