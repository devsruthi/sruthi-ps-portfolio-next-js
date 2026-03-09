"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { updateExpertiseSection } from "../actions";

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

interface ExpertiseSectionFormProps {
  defaultItems: string[];
}

export function ExpertiseSectionForm({ defaultItems }: ExpertiseSectionFormProps) {
  const router = useRouter();
  const [items, setItems] = useState<string[]>(
    defaultItems.length > 0 ? defaultItems : [""]
  );

  const [state, formAction] = useActionState(
    async (_: unknown, formData: FormData) => {
      return updateExpertiseSection(formData);
    },
    null
  );

  useEffect(() => {
    if (state && !state.error) {
      router.refresh();
    }
  }, [state, router]);

  const addRow = () => setItems((prev) => [...prev, ""]);
  const removeRow = (index: number) =>
    setItems((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));
  const updateRow = (index: number, value: string) =>
    setItems((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });

  const formKey = JSON.stringify(defaultItems);

  return (
    <form key={formKey} action={formAction} className="max-w-xl space-y-4">
      <input type="hidden" name="items_json" value={JSON.stringify(items)} />

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-400">
          Expertise items
        </label>
        <div className="space-y-2">
          {items.map((value, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="text"
                value={value}
                onChange={(e) => updateRow(index, e.target.value)}
                placeholder="e.g. Redux, Git, AWS"
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={() => removeRow(index)}
                className="rounded p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white shrink-0"
                aria-label="Remove item"
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
          + Add item
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
