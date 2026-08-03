"use client";

import { useState } from "react";
import { getPresignedResumeUrl } from "@/app/actions/resume";

const DOWNLOAD_FILENAME = "sruthi-resume.pdf";

type ResumeDownloadButtonProps = {
  variant?: "solid" | "link";
  label?: string;
  className?: string;
};

export function ResumeDownloadButton({
  variant = "solid",
  label = "Download CV",
  className = "",
}: ResumeDownloadButtonProps) {
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

  const baseSolid =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#00d8ff] px-7 py-2.5 text-[15px] font-semibold text-[#0a0b10] transition hover:brightness-110 disabled:opacity-70";
  const baseLink =
    "inline-flex min-h-[44px] items-center justify-center text-[15px] font-medium text-[#00d8ff] underline decoration-[#00d8ff]/50 underline-offset-4 transition hover:decoration-[#00d8ff] disabled:opacity-70";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={variant === "solid" ? baseSolid : baseLink}
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
          label
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
