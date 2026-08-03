import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ABOUT,
  ASSET_PATHS,
  EDUCATION,
  LAYOUT,
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

export function AboutSection({
  siteName,
  designation = ABOUT.designation,
  bio = ABOUT.bio,
  fields = [],
  locationLabel = "Potsdam, Germany",
  profileImageUrl = null,
}: AboutSectionProps) {
  const alt = siteName ?? SITE.name;
  const imageSrc = profileImageUrl || ASSET_PATHS.PORTRAIT_DUMMY;
  const isRemote = Boolean(profileImageUrl);
  const email =
    fields.find((f) => /email/i.test(f.label))?.value ?? SOCIAL.email;
  const phone = fields.find((f) => /phone/i.test(f.label))?.value;

  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <ScrollReveal variant="up">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Problem solver{" "}
              <span className="text-[#00d8ff]">{"<coder>"}</span>
            </h2>
            <p className="mt-3 text-base font-medium text-white/70">
              {ABOUT.tagline}
            </p>
          </ScrollReveal>

          {bio ? (
            <ScrollReveal variant="up" delay={80}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
                {bio}
              </p>
            </ScrollReveal>
          ) : null}

          <ScrollReveal variant="up" delay={140} className="mt-10">
            <h3 className="font-display text-lg font-semibold text-white">
              Education
            </h3>
            <ul className="mt-4 space-y-5">
              {EDUCATION.map((item) => (
                <li key={item.degree} className="flex gap-4">
                  <span
                    className="mt-1.5 size-2.5 shrink-0 rounded-[2px] bg-[#00d8ff]"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-white">{item.degree}</p>
                    <p className="mt-1 text-sm text-white/55">{item.school}</p>
                    <p className="mt-0.5 text-xs text-[#00d8ff]/80">
                      {item.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={200} className="mt-10">
            <h3 className="font-display text-lg font-semibold text-white">
              Looking For
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
              {ABOUT.lookingFor}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={320}>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
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
              Based in {locationLabel} · {designation} · Fluent English · German
              A2
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="right"
          delay={160}
          className="relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-[#00d8ff]/10 blur-2xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#12141c]">
            {isRemote ? (
              // eslint-disable-next-line @next/next/no-img-element -- S3 presigned URLs vary by host
              <img
                src={imageSrc}
                alt={alt}
                width={LAYOUT.PROFILE_IMAGE_WIDTH}
                height={LAYOUT.PROFILE_IMAGE_HEIGHT}
                className="h-auto w-full object-cover object-top"
              />
            ) : (
              <Image
                src={ASSET_PATHS.PORTRAIT_DUMMY}
                alt={`${alt} — portrait`}
                width={LAYOUT.PROFILE_IMAGE_WIDTH}
                height={LAYOUT.PROFILE_IMAGE_HEIGHT}
                className="h-auto w-full object-cover object-top"
                priority
              />
            )}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0b10] to-transparent"
              aria-hidden
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
