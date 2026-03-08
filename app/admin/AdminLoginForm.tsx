"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-3 font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-80 disabled:pointer-events-none"
    >
      {pending ? (
        <>
          <svg
            className="size-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
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
          <span>Signing in…</span>
        </>
      ) : (
        "Sign in"
      )}
    </button>
  );
}

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
        <LoginButton />
      </form>
    </div>
  );
}
