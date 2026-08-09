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
    <ScrollReveal variant="up" className="relative overflow-hidden rounded-[1.75rem]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.glow}`}
        aria-hidden
      />
      <div
        className="absolute -right-16 -top-16 size-56 rounded-full bg-[#00d8ff]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 left-1/3 size-64 rounded-full bg-[#818cf8]/15 blur-3xl"
        aria-hidden
      />

      <div className="relative grid gap-8 border border-[#00d8ff]/25 bg-[#12141c]/80 p-6 backdrop-blur-sm md:grid-cols-[1.15fr_0.85fr] md:p-8 lg:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase ${styles.badge}`}
            >
              {kindLabel(item.kind)}
            </span>
            {item.highlight ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55">
                {item.highlight}
              </span>
            ) : null}
          </div>

          <h3 className="font-display mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-[#00d8ff]/90">{item.org}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {item.description}
          </p>

          {item.href ? (
            <Link
              href={item.href}
              className="mt-6 inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#00d8ff] px-5 py-2 text-sm font-semibold text-[#0a0b10] transition hover:brightness-110"
            >
              {item.hrefLabel ?? "Learn more →"}
            </Link>
          ) : null}
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(0,216,255,0.22),transparent_65%)] blur-xl"
            aria-hidden
          />
          <div className="relative flex aspect-square w-full max-w-[260px] items-center justify-center rounded-[2rem] border border-[#00d8ff]/30 bg-gradient-to-br from-[#161922] to-[#0f1118] shadow-[0_24px_60px_rgba(0,216,255,0.12)]">
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-[#00d8ff]/35 bg-[#00d8ff]/10 font-display text-2xl font-bold text-[#00d8ff]">
                {"{S}"}
              </div>
              <p className="font-display mt-4 text-xl font-bold text-white">
                StateKitJS
              </p>
              <p className="mt-1 text-xs tracking-wide text-white/45">
                React UI State Library
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/50">
                  npm
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/50">
                  Docs
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/50">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
