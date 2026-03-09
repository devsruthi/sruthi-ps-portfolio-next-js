import { Fragment } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ResumeDownloadButton } from "@/components/home/ResumeDownloadButton";
import { LAYOUT, SECTION_IDS, SITE } from "@/lib/constants";
import type { AboutInfoItem } from "@/lib/types/db";

const PROFILE_IMAGE_CLASS =
  "h-auto w-full object-cover transition-transform duration-300 hover:scale-105 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.05))] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.05))]";

export type AboutSectionProps = {
  siteName?: string;
  designation?: string;
  bio?: string;
  fields?: AboutInfoItem[];
  /** S3 profile image URL (presigned). When null, a placeholder is shown. */
  profileImageUrl?: string | null;
};

const DEFAULT_ABOUT = {
  designation: "Software Engineer",
  bio: "",
  fields: [] as AboutInfoItem[],
};

export function AboutSection({
  siteName,
  designation = DEFAULT_ABOUT.designation,
  bio = DEFAULT_ABOUT.bio,
  fields = DEFAULT_ABOUT.fields,
  profileImageUrl = null,
}: AboutSectionProps) {
  const alt = siteName ?? SITE.name;
  const list = fields.filter((f) => f.label.trim() || f.value.trim());

  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="mx-auto my-[65px] w-[60%] text-center max-[1100px]:mb-[-50px] max-[1100px]:w-[90%]"
    >
      <SectionTitle label="ABOUT ME" />
      <div className="flex gap-[60px] max-[1450px]:flex-col max-[1450px]:items-center">
        <div className="relative w-[min(500px,42%)] shrink-0 max-[1450px]:w-full max-[1450px]:max-w-[500px]">
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt={alt}
              width={LAYOUT.PROFILE_IMAGE_WIDTH}
              height={LAYOUT.PROFILE_IMAGE_HEIGHT}
              className={PROFILE_IMAGE_CLASS}
            />
          ) : (
            <div
              className="flex aspect-[500/620] w-full items-center justify-center rounded-lg bg-zinc-800/80 text-zinc-500"
              aria-hidden
            >
              <span className="text-sm">No image</span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start gap-5 text-left">
          <div className="text-[25px]">{designation}</div>
          {bio ? <p className="text-[17px] leading-6 opacity-50">{bio}</p> : null}
          {list.length > 0 ? (
            <div className="grid grid-cols-[1fr_2fr] gap-x-10 gap-y-2 text-[17px]">
              {list.map(({ label, value }, i) => (
                <Fragment key={`${label}-${i}`}>
                  <div className="opacity-70">{label}</div>
                  <div className="flex gap-1 opacity-50">
                    <span>:</span>
                    {value}
                  </div>
                </Fragment>
              ))}
            </div>
          ) : null}
          <ResumeDownloadButton />
        </div>
      </div>
    </section>
  );
}
