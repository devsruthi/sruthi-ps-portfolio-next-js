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
  stack = HERO.stack,
}: HeroProps) {
  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,216,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,216,255,0.035)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-[#00d8ff]/12 blur-3xl animate-glow" />
        <div className="absolute -right-16 bottom-0 size-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[12%] top-[18%] size-40 rounded-full bg-[#00d8ff]/8 blur-2xl animate-float" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-[1120px] items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-8 md:py-20">
        {/* Copy */}
        <div className="relative z-10">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#f5b942]/40 bg-[#f5b942]/10 px-4 py-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5b942] opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#f5b942]" />
            </span>
            <span className="text-sm font-medium tracking-wide text-[#f5b942] sm:text-[15px]">
              Open to Working Student &amp; Internship roles
            </span>
          </div>

          <p className="animate-fade-up font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {name}
          </p>

          <h1 className="animate-fade-up-delay-1 font-display mt-3 max-w-xl text-[clamp(1.85rem,4.5vw,2.75rem)] leading-[1.15] font-bold tracking-tight text-white">
            <span className="block">Master&apos;s Student</span>
            <span className="mt-1 block whitespace-nowrap text-[#00d8ff]">
              &amp; Software Engineer
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            {intro}
          </p>

          <p className="animate-fade-up-delay-2 mt-4 text-sm text-white/40">
            Computer Science · Potsdam · 6+ years building products
          </p>

          <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`#${SECTION_IDS.PROJECTS}`}
              className="group inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#00d8ff] px-8 py-2.5 text-[15px] font-semibold text-[#0a0b10] shadow-[0_0_32px_rgba(0,216,255,0.35)] transition hover:brightness-110"
            >
              See my projects
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <ResumeDownloadButton variant="link" label="Download CV" />
            <Link
              href={`#${SECTION_IDS.CONTACT}`}
              className="inline-flex min-h-[44px] items-center justify-center text-[15px] font-medium text-white/65 transition hover:text-white"
            >
              Contact me
            </Link>
          </div>

          <p className="animate-fade-up-delay-3 mt-8 font-mono text-xs tracking-wide text-white/35 sm:text-sm">
            <span className="text-[#00d8ff]/70">const</span> stack = [
            {stack.slice(0, 4).join(", ")}, …]
          </p>
        </div>

        {/* Visual composition */}
        <div
          className="animate-fade-up-delay-2 relative mx-auto hidden h-[420px] w-full max-w-[420px] md:block"
          aria-hidden
        >
          {/* Orbit rings */}
          <div className="absolute inset-[8%] rounded-full border border-[#00d8ff]/15" />
          <div className="absolute inset-[18%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-[#00d8ff]/25" />
          <div className="absolute inset-[30%] rounded-full border border-white/10 bg-[#00d8ff]/[0.03]" />

          {/* Core monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-36 items-center justify-center rounded-full border border-[#00d8ff]/40 bg-[#0a0b10]/80 shadow-[0_0_60px_rgba(0,216,255,0.25)] backdrop-blur-sm">
              <span className="font-display text-6xl font-bold text-white">
                {name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Floating identity markers */}
          <div className="animate-float absolute top-8 right-2 rounded-2xl border border-white/10 bg-[#12141c]/90 px-4 py-3 backdrop-blur-md">
            <p className="text-[10px] tracking-wider text-[#00d8ff] uppercase">
              Currently
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold text-white">
              Master&apos;s Student
            </p>
            <p className="text-xs text-white/45">
              M.Eng. Computer Science · GISMA
            </p>
          </div>

          <div
            className="absolute bottom-16 left-0 rounded-2xl border border-white/10 bg-[#12141c]/90 px-4 py-3 backdrop-blur-md"
            style={{ animation: "float-soft 6s ease-in-out 1s infinite" }}
          >
            <p className="text-[10px] tracking-wider text-[#00d8ff] uppercase">
              Experience
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold text-white">
              Software Engineer
            </p>
            <p className="text-xs text-white/45">6+ years · Web &amp; Mobile</p>
          </div>

          <div
            className="absolute right-4 bottom-6 rounded-2xl border border-[#00d8ff]/25 bg-[#00d8ff]/10 px-3.5 py-2 backdrop-blur-md"
            style={{ animation: "float-soft 7s ease-in-out 0.5s infinite" }}
          >
            <p className="font-display text-sm font-semibold text-[#00d8ff]">
              Potsdam, DE
            </p>
          </div>

          {/* Soft accent dots */}
          <span className="absolute top-[42%] left-[6%] size-2 rounded-full bg-[#00d8ff]/70" />
          <span className="absolute top-[22%] left-[28%] size-1.5 rounded-full bg-white/40" />
          <span className="absolute right-[18%] bottom-[38%] size-1.5 rounded-full bg-[#00d8ff]/50" />
        </div>
      </div>
    </section>
  );
}
