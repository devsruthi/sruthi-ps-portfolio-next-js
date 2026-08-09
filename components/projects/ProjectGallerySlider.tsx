"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGallerySliderProps = {
  title: string;
  images: readonly string[];
};

export function ProjectGallerySlider({
  title,
  images,
}: ProjectGallerySliderProps) {
  const slides = images.length ? images : [];
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const goTo = (next: number) => {
    const len = slides.length;
    setIndex(((next % len) + len) % len);
  };

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#12141c] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-white/[0.02]">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              i === index
                ? "translate-x-0 opacity-100"
                : i < index
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 1600px"
              quality={100}
              priority={i === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="flex flex-wrap items-center gap-2">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-[#00d8ff]"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">
              {index + 1} / {slides.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
