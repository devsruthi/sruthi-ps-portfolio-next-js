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
  designation = ABOUT.designation,
  bio = ABOUT.bio,
  fields = [],
  locationLabel = "Potsdam, Germany",
}: AboutSectionProps) {
  const alt = siteName ?? SITE.name;
  const imageSrc = ASSET_PATHS.ABOUT_PORTRAIT;
  const email =
    fields.find((f) => /email/i.test(f.label))?.value ?? SOCIAL.email;
  const phone = fields.find((f) => /phone/i.test(f.label))?.value;

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
                {alt}
              </h2>
              <p className="mt-2 text-lg text-white/55">
                Master&apos;s Student{" "}
                <span className="text-[#f5b942]">·</span> Software Engineer
              </p>
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
              <div className="rounded-2xl border border-[#f5b942]/25 bg-[#f5b942]/[0.07] px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#f5b942] uppercase">
                  Looking for
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {ABOUT.lookingFor}
                </p>
              </div>
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
                {phone ? (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="rounded-full border border-white/15 px-4 py-2 text-white/75 transition hover:border-[#00d8ff]/50 hover:text-[#00d8ff]"
                  >
                    Call
                  </a>
                ) : null}
              </div>
              <p className="mt-5 text-xs text-white/35">
                Based in {locationLabel} · {designation} · English · German A2
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal
            variant="right"
            delay={120}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,216,255,0.22),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(245,185,66,0.16),transparent_50%)] blur-2xl"
              aria-hidden
            />

            <div className="relative">
              <div className="absolute -top-3 -right-3 hidden h-24 w-24 rounded-tr-3xl border-t border-r border-[#00d8ff]/40 md:block" aria-hidden />
              <div className="absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-bl-3xl border-b border-l border-[#f5b942]/35 md:block" aria-hidden />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12141c] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={imageSrc}
                  alt={`${alt} — portrait`}
                  width={1024}
                  height={1536}
                  className="aspect-[4/5] h-auto w-full object-cover object-[center_20%]"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a0b10] via-[#0a0b10]/40 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-semibold text-white">
                    {alt}
                  </p>
                  <p className="mt-0.5 text-sm text-white/65">
                    M.Eng. CS · GISMA · Potsdam
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
