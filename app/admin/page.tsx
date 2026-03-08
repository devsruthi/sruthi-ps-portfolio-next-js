import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { AdminLoginForm } from "./AdminLoginForm";

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session?.admin) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <AdminLoginForm />
    </div>
  );
}
