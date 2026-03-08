"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function AdminLoginForm() {
  const [state, formAction] = useActionState(
    async (_: unknown, formData: FormData) => {
      return login(formData);
    },
    null
  );

  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
      <h1 className="mb-6 text-center text-xl font-semibold text-white">
        Admin Login
      </h1>
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="admin-password"
            className="mb-1.5 block text-sm font-medium text-zinc-400"
          >
            Password
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Enter password"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
        {state?.error && (
          <p className="text-sm text-red-400" role="alert">
            {state.error}
          </p>
        )}
        <button
          type="submit"
          className="rounded-lg bg-amber-600 px-4 py-3 font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
