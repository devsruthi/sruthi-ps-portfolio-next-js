import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ABOUT,
  EDUCATION,
  SECTION_IDS,
  SITE,
  SOCIAL,
} from "@/lib/constants";
import type { AboutInfoItem } from "@/lib/types/db";

export type AboutSectionProps = {
  siteName?: string;
  designation?: string;
  bio?: string;
  fields?: AboutInfoItem[];
  locationLabel?: string;
  profileImageUrl?: string | null;
};

const FOCUS_CARDS = [
  {
    title: "Clean UI",
    detail: "Clear layouts & polish",
    accent: "cyan" as const,
  },
  {
    title: "Performance",
    detail: "Fast, lean interfaces",
    accent: "cyan" as const,
  },
  {
    title: "Type-safe",
    detail: "Reliable TypeScript",
    accent: "amber" as const,
  },
] as const;

export function AboutSection({
  siteName,
  bio = ABOUT.bio,
  fields = [],
}: AboutSectionProps) {
  const alt = siteName ?? SITE.name;
  const email =
    fields.find((f) => /email/i.test(f.label))?.value ?? SOCIAL.email;

  return (
    <section id={SECTION_IDS.ABOUT} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/4 -left-20 size-72 rounded-full bg-[#00d8ff]/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-80 rounded-full bg-[#f5b942]/6 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1120px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <ScrollReveal variant="up">
              <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#00d8ff] uppercase">
                About me
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-[2.5rem] md:leading-tight">
                How I work
              </h2>
            </ScrollReveal>

            {bio ? (
              <ScrollReveal variant="up" delay={80}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-[17px]">
                  {bio}
                </p>
              </ScrollReveal>
            ) : null}

            <ScrollReveal variant="up" delay={140} className="mt-10">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-white">
                  Education
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
              </div>
              <ol className="relative mt-6 space-y-0 border-l border-white/10 pl-6">
                {EDUCATION.map((item, index) => (
                  <li key={item.degree} className="relative pb-8 last:pb-0">
                    <span
                      className={`absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2 ${
                        index === 0
                          ? "border-[#00d8ff] bg-[#00d8ff]"
                          : "border-white/30 bg-[#0a0b10]"
                      }`}
                      aria-hidden
                    />
                    <p className="text-xs font-medium tracking-wide text-[#00d8ff]">
                      {item.period}
                    </p>
                    <p className="mt-1 font-medium text-white">{item.degree}</p>
                    <p className="mt-1 text-sm text-white/50">{item.school}</p>
                  </li>
                ))}
              </ol>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={200} className="mt-2">
              <p className="text-sm text-white/45">{ABOUT.lookingFor}</p>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={280}>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-white/75 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
                >
                  GitHub
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-white/75 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${email}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-white/75 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
                >
                  Email
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Creative craft panel — no photo (already in hero) */}
          <ScrollReveal
            variant="right"
            delay={120}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12141c]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,216,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,216,255,0.04)_1px,transparent_1px)] bg-size-[22px_22px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -top-10 right-0 size-40 rounded-full bg-[#00d8ff]/15 blur-3xl animate-glow"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 -left-8 size-32 rounded-full bg-[#f5b942]/10 blur-3xl"
                aria-hidden
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#00d8ff] uppercase">
                      Craft system
                    </p>
                    <p className="font-display mt-1 text-xl font-semibold text-white">
                      How I approach product work
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00d8ff]/30 bg-[#00d8ff]/10 px-2.5 py-1 text-[11px] font-medium text-[#00d8ff]">
                    <span className="size-1.5 rounded-full bg-[#00d8ff]" />
                    Active
                  </span>
                </div>

                {/* Hub */}
                <div className="relative mx-auto mt-8 aspect-square w-[78%] max-w-[260px]">
                  <div
                    className="absolute inset-[10%] rounded-full border border-[#00d8ff]/20"
                    aria-hidden
                  />
                  <div
                    className="animate-orbit-slow absolute inset-0 -rotate-[10deg] rounded-[50%] border border-dashed border-[#00d8ff]/35"
                    aria-hidden
                  />
                  <span
                    className="absolute top-[10%] right-[14%] size-2.5 rounded-full bg-[#00d8ff] shadow-[0_0_14px_rgba(0,216,255,1)]"
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-[14%] left-[12%] size-2 rounded-full bg-[#f5b942] shadow-[0_0_12px_rgba(245,185,66,0.9)]"
                    aria-hidden
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex size-36 flex-col items-center justify-center overflow-hidden rounded-full border border-white/15 bg-[#0a0b10]/95 shadow-[0_0_45px_rgba(0,216,255,0.25)] lg:size-40">
                      <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,216,255,0.2),transparent_55%)]"
                        aria-hidden
                      />
                      <span className="font-display text-5xl font-bold text-white">
                        {alt.charAt(0)}
                      </span>
                      <p className="mt-1.5 font-mono text-[10px] tracking-wide text-[#00d8ff]">
                        {"{ build · ship }"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Focus cards with details */}
                <div className="mt-8 grid gap-3">
                  {FOCUS_CARDS.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-xl border px-3.5 py-3 ${
                        item.accent === "amber"
                          ? "border-[#f5b942]/25 bg-[#f5b942]/[0.07]"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p
                          className={`font-display text-sm font-semibold ${
                            item.accent === "amber"
                              ? "text-[#f5b942]"
                              : "text-white"
                          }`}
                        >
                          {item.title}
                        </p>
                        <span
                          className={`size-1.5 rounded-full ${
                            item.accent === "amber"
                              ? "bg-[#f5b942]"
                              : "bg-[#00d8ff]"
                          }`}
                          aria-hidden
                        />
                      </div>
                      <p className="mt-0.5 text-xs text-white/50">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 font-mono text-[11px] leading-relaxed text-white/35">
                  <span className="text-[#00d8ff]/80">focus</span>
                  {` = ["UX clarity", "maintainable code", "ship fast"]`}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
