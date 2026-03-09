"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { updateHeroSection } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-amber-500 disabled:opacity-80"
    >
      {pending ? (
        <>
          <svg
            className="size-4 animate-spin"
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
          Saving…
        </>
      ) : (
        "Save"
      )}
    </button>
  );
}

interface HeroSectionFormProps {
  defaultName: string;
  defaultIntro: string;
}

export function HeroSectionForm({
  defaultName,
  defaultIntro,
}: HeroSectionFormProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(
    async (_: unknown, formData: FormData) => {
      return updateHeroSection(formData);
    },
    null
  );

  useEffect(() => {
    if (state && !state.error) {
      router.refresh();
    }
  }, [state, router]);

  return (
    <form
      key={`${defaultName}-${defaultIntro}`}
      action={formAction}
      className="max-w-xl space-y-4"
    >
      <div>
        <label htmlFor="hero-name" className="mb-1.5 block text-sm font-medium text-zinc-400">
          Name
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          required
          defaultValue={defaultName}
          placeholder="e.g. Sruthi P S"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>
      <div>
        <label htmlFor="hero-intro" className="mb-1.5 block text-sm font-medium text-zinc-400">
          Introduction
        </label>
        <textarea
          id="hero-intro"
          name="intro"
          required
          rows={5}
          defaultValue={defaultIntro}
          placeholder="Short intro for the hero section..."
          className="w-full resize-y rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>
      {state?.error && (
        <p className="text-sm text-red-400" role="alert">
          {state.error}
        </p>
      )}
      {state && !state.error && (
        <p className="text-sm text-green-400">Saved.</p>
      )}
      <SubmitButton />
    </form>
  );
}
