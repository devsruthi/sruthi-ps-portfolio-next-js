"use client";

import Image from "next/image";
import { useEffect } from "react";

type AchievementCertificateModalProps = {
  open: boolean;
  title: string;
  image: string;
  onClose: () => void;
};

export function AchievementCertificateModal({
  open,
  title,
  image,
  onClose,
}: AchievementCertificateModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#0a0b10]/96 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="mx-auto flex w-full max-w-[1100px] shrink-0 items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
        >
          ← Back
        </button>
        <p className="truncate text-sm text-white/45 md:text-base">{title}</p>
      </div>

      <div
        className="flex flex-1 items-start justify-center overflow-auto px-5 pb-12 pt-4 md:px-8 md:pb-16 md:pt-6"
        onClick={onClose}
      >
        <div
          className="w-full max-w-[860px] rounded-2xl border border-white/10 bg-white px-5 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:px-10 md:py-16"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={image}
            alt={title}
            width={1200}
            height={1600}
            className="mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
