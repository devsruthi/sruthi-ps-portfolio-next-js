"use client";

import Image from "next/image";
import Link from "next/link";
import { ResumeDownloadButton } from "@/components/home/ResumeDownloadButton";
import { ASSET_PATHS, HERO, SECTION_IDS } from "@/lib/constants";

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
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={SECTION_IDS.HOME} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,216,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,216,255,0.035)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-[#00d8ff]/12 blur-3xl animate-glow" />
        <div className="absolute -right-16 bottom-0 size-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-[1180px] items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-8 md:py-20">
        {/* Intro */}
        <div className="relative z-10 min-w-0">
          <p className="animate-hero-text font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Hi, I&apos;m {name}
          </p>

          <h1 className="animate-hero-text-1 font-display mt-3 max-w-xl text-[clamp(1.85rem,4.5vw,2.75rem)] leading-[1.15] font-bold tracking-tight text-white">
            <span className="block">Master&apos;s Student</span>
            <span className="mt-1 block whitespace-nowrap text-[#00d8ff]">
              &amp; Software Engineer
            </span>
          </h1>

          <p className="animate-hero-text-2 mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            {intro}
          </p>

          {/* Availability — under intro, before CTAs */}
          <div className="animate-hero-text-3 mt-6">
            <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-[#f5b942]/30 bg-gradient-to-r from-[#f5b942]/12 to-transparent px-4 py-2.5 shadow-[0_0_24px_rgba(245,185,66,0.08)]">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5b942] opacity-55" />
                <span className="relative size-2.5 rounded-full bg-[#f5b942]" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#f5b942]/80 uppercase">
                  Now available
                </p>
                <p className="truncate text-sm font-medium text-[#f5b942]">
                  Working Student &amp; Internship roles
                </p>
              </div>
            </div>
          </div>

          <div className="animate-hero-text-4 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`#${SECTION_IDS.PROJECTS}`}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(SECTION_IDS.PROJECTS);
              }}
              className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-full bg-[#00d8ff] px-8 py-2.5 text-[15px] font-semibold text-[#0a0b10] shadow-[0_0_32px_rgba(0,216,255,0.35)] transition hover:brightness-110"
            >
              See my projects
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <ResumeDownloadButton variant="link" label="Download CV" />
            <Link
              href={`#${SECTION_IDS.CONTACT}`}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(SECTION_IDS.CONTACT);
              }}
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center text-[15px] font-medium text-white/65 transition hover:text-white"
            >
              Contact me
            </Link>
          </div>

          <p className="animate-hero-text-5 mt-8 font-mono text-xs tracking-wide text-white/35 sm:text-sm">
            <span className="text-[#00d8ff]/70">const</span> stack = [
            {stack.slice(0, 4).join(", ")}, …]
          </p>
        </div>

        {/* Orbit visual — after intro text */}
        <div
          className="animate-hero-visual relative mx-auto hidden aspect-square w-full max-w-[520px] md:block"
          aria-hidden
        >
          <div className="absolute inset-[18%] rounded-full bg-[#00d8ff]/12 blur-3xl animate-glow" />

          {/* Keep only 3 light orbits */}
          <div className="absolute inset-[10%] rounded-full border border-[#00d8ff]/20" />
          <div className="animate-orbit-slow absolute inset-[4%] -rotate-[10deg] rounded-[50%] border border-dashed border-[#00d8ff]/40" />
          <div className="absolute inset-[18%] rotate-[8deg] rounded-[50%] border border-white/15" />

          <span className="absolute top-[16%] right-[18%] size-2.5 rounded-full bg-[#00d8ff] shadow-[0_0_14px_rgba(0,216,255,1)]" />
          <span className="absolute bottom-[20%] left-[16%] size-2 rounded-full bg-[#f5b942] shadow-[0_0_12px_rgba(245,185,66,0.95)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative size-60 overflow-hidden rounded-full border border-white/25 bg-black shadow-[0_0_60px_rgba(0,216,255,0.28)] lg:size-64">
              <Image
                src={ASSET_PATHS.ABOUT_PORTRAIT}
                alt=""
                width={512}
                height={512}
                className="h-full w-full scale-110 object-cover object-[center_14%]"
                priority
              />
            </div>
          </div>

          <div className="animate-float absolute top-4 right-0 z-10 rounded-2xl border border-white/10 bg-[#12141c]/92 px-4 py-3 shadow-lg backdrop-blur-md">
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
            className="absolute bottom-12 left-0 z-10 rounded-2xl border border-white/10 bg-[#12141c]/92 px-4 py-3 shadow-lg backdrop-blur-md"
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
            className="absolute right-2 bottom-2 z-10 rounded-full border border-[#00d8ff]/30 bg-[#00d8ff]/10 px-3.5 py-1.5 backdrop-blur-md"
            style={{ animation: "float-soft 7s ease-in-out 0.5s infinite" }}
          >
            <p className="font-display text-sm font-semibold text-[#00d8ff]">
              Potsdam, DE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
