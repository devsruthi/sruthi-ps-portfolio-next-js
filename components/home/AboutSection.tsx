import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ABOUT,
  ASSET_PATHS,
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
  /** Kept for API compatibility; about section uses the curated AI portrait. */
  profileImageUrl?: string | null;
};

export function AboutSection({
  siteName,
  bio = ABOUT.bio,
  fields = [],
}: AboutSectionProps) {
  const alt = siteName ?? SITE.name;
  const imageSrc = ASSET_PATHS.ABOUT_PORTRAIT;
  const email =
    fields.find((f) => /email/i.test(f.label))?.value ?? SOCIAL.email;

  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
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

          <ScrollReveal
            variant="right"
            delay={120}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,216,255,0.3),transparent_60%),radial-gradient(circle_at_70%_75%,rgba(245,185,66,0.16),transparent_55%)] blur-3xl animate-glow"
              aria-hidden
            />

            <div className="group relative mx-auto flex w-full max-w-[380px] flex-col items-center">
              <div className="relative aspect-[4/5] w-full">
                {/* Back plate — soft diamond tilt */}
                <div
                  className="pointer-events-none absolute inset-[10%] rotate-6 rounded-[40%] border border-[#f5b942]/25 bg-[#f5b942]/5"
                  aria-hidden
                />

                {/* Orbit rings */}
                <div
                  className="animate-orbit pointer-events-none absolute inset-[-6%] rounded-full border border-dashed border-[#00d8ff]/30"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-[2%] rounded-full border border-white/10"
                  aria-hidden
                />
                <div
                  className="animate-border-shimmer pointer-events-none absolute inset-[6%] rounded-full bg-[conic-gradient(from_120deg,rgba(0,216,255,0.55),transparent_40%,rgba(245,185,66,0.45),transparent_75%,rgba(0,216,255,0.55))] opacity-70 blur-[0.5px]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                    maskImage:
                      "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                  }}
                  aria-hidden
                />

                {/* Organic portrait shape */}
                <div
                  className="absolute inset-[9%] overflow-hidden bg-[#12141c] shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-[#00d8ff]/35 transition duration-500 group-hover:ring-[#00d8ff]/60 group-hover:shadow-[0_35px_90px_rgba(0,216,255,0.18)]"
                  style={{
                    borderRadius: "58% 42% 48% 52% / 48% 42% 58% 52%",
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={`${alt} — portrait`}
                    width={1024}
                    height={1536}
                    className="animate-portrait-ken h-full w-full object-cover object-[center_15%] transition duration-700 group-hover:scale-110"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0b10]/70 via-transparent to-white/5"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>

                {/* Accent dots on orbit */}
                <span
                  className="animate-float absolute top-[12%] right-[8%] size-2.5 rounded-full bg-[#00d8ff] shadow-[0_0_12px_rgba(0,216,255,0.8)]"
                  aria-hidden
                />
                <span
                  className="absolute bottom-[18%] left-[6%] size-2 rounded-full bg-[#f5b942] shadow-[0_0_10px_rgba(245,185,66,0.7)]"
                  style={{ animation: "float-soft 7s ease-in-out 0.6s infinite" }}
                  aria-hidden
                />
              </div>

              <p className="font-display mt-6 text-center text-xl font-semibold text-white">
                {alt}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
