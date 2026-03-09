"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadResume } from "../actions";

const PDF_ACCEPT = "application/pdf,.pdf";

interface ResumeUploaderProps {
  /** Presigned URL for the current resume PDF, or null if none. */
  currentResumeUrl: string | null;
}

export function ResumeUploader({ currentResumeUrl }: ResumeUploaderProps) {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const isPdf = (file: File) => {
    const type = (file.type || "").toLowerCase();
    const name = (file.name || "").toLowerCase();
    return type === "application/pdf" || name.endsWith(".pdf");
  };

  const handleFile = (file: File | undefined) => {
    setError(null);
    if (!file) {
      setSelectedFile(null);
      return;
    }
    if (!isPdf(file)) {
      setError("Only PDF files are allowed.");
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => setDragActive(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile, selectedFile.name);
      const result = await uploadResume(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setSelectedFile(null);
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setError(null);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <label className="block text-sm font-medium text-zinc-400">
          Resume (PDF)
        </label>
        {currentResumeUrl ? (
          <a
            href={currentResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-amber-400 hover:text-amber-300"
          >
            View / download current
          </a>
        ) : (
          <span className="text-xs text-zinc-500">No resume uploaded yet</span>
        )}
      </div>
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`
          rounded-xl border-2 border-dashed transition
          ${dragActive ? "border-amber-500/70 bg-zinc-800/80" : "border-zinc-600 bg-zinc-800/50"}
        `}
      >
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 px-8 py-8">
          <svg
            className="h-12 w-12 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium text-zinc-300">
            {selectedFile
              ? selectedFile.name
              : "Drop a PDF or click to choose"}
          </span>
          <span className="text-xs text-zinc-500">PDF only</span>
          <input
            type="file"
            accept={PDF_ACCEPT}
            className="hidden"
            onChange={onInputChange}
            disabled={uploading}
          />
        </label>
        {selectedFile && (
          <div className="flex items-center justify-between gap-4 border-t border-zinc-700 px-6 py-3">
            <p className="truncate text-sm text-zinc-400" title={selectedFile.name}>
              {selectedFile.name}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={handleClear}
                disabled={uploading}
                className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 disabled:opacity-50"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleUpload}
                disabled={uploading}
                className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500 disabled:opacity-50"
              >
                {uploading ? "Uploading…" : "Upload"}
              </button>
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      <p className="text-xs text-zinc-500">
        Replaces the resume PDF used by the &quot;My Resume&quot; download button on the site.
      </p>
    </div>
  );
}
