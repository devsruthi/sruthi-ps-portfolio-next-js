"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { updateAboutSection } from "../actions";
import type { AboutInfoItem } from "@/lib/types/db";

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

interface AboutSectionFormProps {
  defaultDesignation: string;
  defaultBio: string;
  defaultFields: AboutInfoItem[];
}

export function AboutSectionForm({
  defaultDesignation,
  defaultBio,
  defaultFields,
}: AboutSectionFormProps) {
  const router = useRouter();
  const [fields, setFields] = useState<AboutInfoItem[]>(
    defaultFields.length > 0 ? defaultFields : [{ label: "", value: "" }]
  );

  const [state, formAction] = useActionState(
    async (_: unknown, formData: FormData) => {
      return updateAboutSection(formData);
    },
    null
  );

  useEffect(() => {
    if (state && !state.error) {
      router.refresh();
    }
  }, [state, router]);

  const addRow = () => setFields((prev) => [...prev, { label: "", value: "" }]);
  const removeRow = (index: number) =>
    setFields((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));
  const updateRow = (index: number, key: "label" | "value", val: string) =>
    setFields((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: val };
      return next;
    });

  const formKey = `${defaultDesignation}-${defaultBio}-${JSON.stringify(defaultFields)}`;

  return (
    <form
      key={formKey}
      action={formAction}
      className="max-w-xl space-y-4"
    >
      <input type="hidden" name="fields_json" value={JSON.stringify(fields)} />

      <div>
        <label htmlFor="about-designation" className="mb-1.5 block text-sm font-medium text-zinc-400">
          Title (designation)
        </label>
        <input
          id="about-designation"
          name="designation"
          type="text"
          required
          defaultValue={defaultDesignation}
          placeholder="e.g. Software Engineer"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div>
        <label htmlFor="about-bio" className="mb-1.5 block text-sm font-medium text-zinc-400">
          Description (bio)
        </label>
        <textarea
          id="about-bio"
          name="bio"
          required
          rows={5}
          defaultValue={defaultBio}
          placeholder="About you..."
          className="w-full resize-y rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-400">
          Info fields (label / value)
        </label>
        <div className="space-y-2">
          {fields.map((row, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={row.label}
                onChange={(e) => updateRow(index, "label", e.target.value)}
                placeholder="Label (e.g. Phone)"
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="text"
                value={row.value}
                onChange={(e) => updateRow(index, "value", e.target.value)}
                placeholder="Value"
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={() => removeRow(index)}
                className="rounded p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                aria-label="Remove row"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addRow}
          className="mt-2 text-sm text-amber-400 hover:text-amber-300"
        >
          + Add row
        </button>
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
