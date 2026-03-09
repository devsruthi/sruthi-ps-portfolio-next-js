"use client";

import { useState } from "react";
import { getPresignedResumeUrl } from "@/app/actions/resume";
import { THEME } from "@/lib/constants";

const DOWNLOAD_FILENAME = "sruthi-resume.pdf";

export function ResumeDownloadButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setError(null);
    setLoading(true);
    try {
      const result = await getPresignedResumeUrl();
      if (result.ok) {
        const link = document.createElement("a");
        link.href = result.url;
        link.setAttribute("download", DOWNLOAD_FILENAME);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError(result.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-[18px] flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-[25px] px-6 py-2.5 text-[15px] text-black shadow-[1px_1px_2px_white] no-underline transition hover:opacity-90 disabled:opacity-80 disabled:pointer-events-none"
        style={{ backgroundColor: THEME.COLORS.ACCENT }}
      >
        {loading ? (
          <>
            <svg
              className="size-5 shrink-0 animate-spin"
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
            <span>Preparing…</span>
          </>
        ) : (
          "My Resume"
        )}
      </button>
      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
