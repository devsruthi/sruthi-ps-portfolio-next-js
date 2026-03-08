"use server";

import { redirect } from "next/navigation";
import {
  createSessionToken,
  setSessionCookie,
  clearSessionCookie,
  getSession,
} from "@/lib/auth/session";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function login(formData: FormData): Promise<{ error?: string }> {
  const password = formData.get("password");
  if (typeof password !== "string" || !password.trim()) {
    return { error: "Password is required." };
  }

  if (!ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD is not set");
    return { error: "Admin login is not configured." };
  }

  if (password !== ADMIN_PASSWORD) {
    return { error: "Invalid password." };
  }

  const token = await createSessionToken();
  await setSessionCookie(token);
  redirect("/admin/dashboard");
}

export async function logout(): Promise<void> {
  await clearSessionCookie();
  redirect("/admin");
}

export async function requireSession(): Promise<void> {
  const session = await getSession();
  if (!session?.admin) {
    redirect("/admin");
  }
}
