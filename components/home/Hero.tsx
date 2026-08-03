import Link from "next/link";
import { ResumeDownloadButton } from "@/components/home/ResumeDownloadButton";
import { HERO, SECTION_IDS } from "@/lib/constants";

export type HeroProps = {
  name: string;
  intro: string;
  designation?: string;
  stack?: readonly string[];
};

export function Hero({
  name,
  intro,
  designation = HERO.title,
  stack = HERO.stack,
}: HeroProps) {
  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-[1120px] flex-col justify-center px-5 py-16 md:px-8 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-10 top-24 size-72 rounded-full bg-[#00d8ff]/10 blur-3xl animate-glow md:size-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-20 left-0 size-56 rounded-full bg-indigo-500/10 blur-3xl md:size-72"
        aria-hidden
      />

      <p className="animate-fade-up mb-4 text-sm font-medium tracking-[0.2em] text-[#00d8ff]/90 uppercase">
        {name}
      </p>

      <div className="animate-fade-up mb-5">
        <span className="inline-flex items-center rounded-full border border-[#00d8ff]/35 bg-[#00d8ff]/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#00d8ff]">
          Open to Working Student &amp; Internship roles
        </span>
      </div>

      <h1 className="animate-fade-up-delay-1 font-display max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
        {designation}
      </h1>

      <p className="animate-fade-up-delay-2 mt-3 text-sm text-white/45 sm:text-base">
        Master&apos;s Student · Computer Science · Potsdam, Germany
      </p>

      <p className="animate-fade-up-delay-2 mt-5 font-mono text-sm text-white/55 sm:text-base">
        {"{ "}
        {stack.join(", ")}
        {" ... }"}
      </p>

      <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
        {intro}
      </p>

      <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-5">
        <Link
          href={`#${SECTION_IDS.PROJECTS}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#00d8ff] px-7 py-2.5 text-[15px] font-semibold text-[#0a0b10] transition hover:brightness-110"
        >
          See my projects
        </Link>
        <ResumeDownloadButton variant="link" label="Download CV" />
        <Link
          href={`#${SECTION_IDS.CONTACT}`}
          className="inline-flex min-h-[44px] items-center justify-center text-[15px] font-medium text-white/70 transition hover:text-white"
        >
          Contact me →
        </Link>
      </div>

      <div
        className="animate-float pointer-events-none mt-16 hidden opacity-40 md:block"
        aria-hidden
      >
        <svg
          viewBox="0 0 420 120"
          className="h-auto w-full max-w-md text-white/30"
          fill="none"
        >
          <rect
            x="20"
            y="30"
            width="280"
            height="70"
            rx="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect x="40" y="48" width="28" height="18" rx="3" fill="currentColor" opacity="0.5" />
          <rect x="78" y="48" width="28" height="18" rx="3" fill="currentColor" opacity="0.35" />
          <rect x="116" y="48" width="28" height="18" rx="3" fill="currentColor" opacity="0.5" />
          <rect x="154" y="48" width="80" height="18" rx="3" fill="currentColor" opacity="0.25" />
          <rect x="40" y="74" width="200" height="14" rx="3" fill="currentColor" opacity="0.2" />
          <ellipse
            cx="360"
            cy="70"
            rx="36"
            ry="28"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse cx="360" cy="70" rx="14" ry="12" fill="currentColor" opacity="0.35" />
        </svg>
      </div>
    </section>
  );
}
