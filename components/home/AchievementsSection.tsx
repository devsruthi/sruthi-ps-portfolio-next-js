"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AchievementCertificateModal } from "@/components/home/AchievementCertificateModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ACHIEVEMENTS, SECTION_IDS } from "@/lib/constants";
import type { Achievement } from "@/lib/types";

function kindStyles(kind: Achievement["kind"]) {
  switch (kind) {
    case "open-source":
      return {
        badge: "border-[#00d8ff]/40 bg-[#00d8ff]/10 text-[#00d8ff]",
        glow: "from-[#00d8ff]/20 via-transparent to-[#818cf8]/10",
        ring: "hover:border-[#00d8ff]/45",
      };
    case "award":
      return {
        badge: "border-[#f5b942]/40 bg-[#f5b942]/10 text-[#f5b942]",
        glow: "from-[#f5b942]/18 via-transparent to-[#ff6a2b]/08",
        ring: "hover:border-[#f5b942]/40",
      };
    default:
      return {
        badge: "border-white/20 bg-white/5 text-white/70",
        glow: "from-white/10 via-transparent to-[#00d8ff]/08",
        ring: "hover:border-white/25",
      };
  }
}

function kindLabel(kind: Achievement["kind"]) {
  switch (kind) {
    case "open-source":
      return "Open source";
    case "award":
      return "Award";
    default:
      return "Recognition";
  }
}

function FeaturedAchievement({ item }: { item: Achievement }) {
  const styles = kindStyles(item.kind);

  return (
    <ScrollReveal variant="fade">
      <article className="rounded-3xl bg-[#12141c] p-5 shadow-[0_0_0_1px_rgba(0,216,255,0.3),0_18px_40px_rgba(0,0,0,0.28)] md:p-6">
        <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_210px]">
          <div>
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase ${styles.badge}`}
            >
              {kindLabel(item.kind)}
            </span>

            <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-[#00d8ff]/90">
              {item.org}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-[15px]">
              {item.description}
            </p>

            {item.href ? (
              <Link
                href={item.href}
                className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#00d8ff] px-5 py-2 text-sm font-semibold text-[#0a0b10] transition hover:brightness-110"
              >
                {item.hrefLabel ?? "Learn more →"}
              </Link>
            ) : null}
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#0f1118] px-4 py-4 shadow-[0_0_0_1px_rgba(0,216,255,0.28)]">
            <div className="relative size-16">
              <Image
                src="/images/achievements/statekitjs-mark.png"
                alt="StateKitJS logo"
                fill
                className="object-contain"
                sizes="64px"
                quality={100}
                unoptimized
              />
            </div>
            <p className="font-display mt-2 text-base font-bold text-white">
              StateKitJS
            </p>
            <p className="mt-0.5 text-[11px] tracking-wide text-white/45">
              React UI State Library
            </p>
            <div className="mt-2.5 flex justify-center gap-1.5">
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                npm
              </span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                Docs
              </span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function AwardCard({
  item,
  index,
  onOpen,
}: {
  item: Achievement;
  index: number;
  onOpen: (item: Achievement) => void;
}) {
  const styles = kindStyles(item.kind);

  return (
    <ScrollReveal
      variant="up"
      delay={index * 90}
      className={`group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#161922] to-[#0f1118] transition duration-300 hover:-translate-y-1 ${styles.ring}`}
    >
      {item.image ? (
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="relative block w-full cursor-pointer overflow-hidden border-b border-white/5 bg-white text-left"
          aria-label={`View ${item.title} certificate`}
        >
          <div className="relative aspect-[16/12]">
            <Image
              src={item.image}
              alt={`${item.title} certificate`}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 360px"
              quality={95}
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
        </button>
      ) : null}

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${styles.badge}`}
          >
            {kindLabel(item.kind)}
          </span>
          {item.highlight ? (
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-white/50">
              {item.highlight}
            </span>
          ) : null}
        </div>

        <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-white">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#f5b942]/85">{item.org}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
          {item.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function AchievementsSection() {
  const featured = ACHIEVEMENTS.find((item) => item.kind === "open-source");
  const awards = ACHIEVEMENTS.filter((item) => item.kind !== "open-source");
  const [active, setActive] = useState<Achievement | null>(null);

  return (
    <section
      id={SECTION_IDS.ACHIEVEMENTS}
      className="relative mx-auto w-full max-w-[1200px] px-5 py-20 md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 max-w-3xl rounded-full bg-[#f5b942]/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-10 top-40 mx-auto h-56 max-w-xl rounded-full bg-[#00d8ff]/8 blur-3xl"
        aria-hidden
      />

      <ScrollReveal variant="up" className="relative mb-12 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f5b942]/90 uppercase">
          Recognition
        </p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Awards &amp; <span className="text-[#00d8ff]">{"{achievements}"}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/55 md:text-lg">
          Corporate recognitions, customer appreciation, and open-source work —
          milestones that reflect delivery, collaboration, and craft.
        </p>
      </ScrollReveal>

      <div className="relative space-y-8">
        {featured ? <FeaturedAchievement item={featured} /> : null}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((item, index) => (
            <AwardCard
              key={item.id}
              item={item}
              index={index}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <AchievementCertificateModal
        open={Boolean(active?.image)}
        title={active?.title ?? "Certificate"}
        image={active?.image ?? ""}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
