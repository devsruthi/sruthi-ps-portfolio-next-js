import { Fragment } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ResumeDownloadButton } from "@/components/home/ResumeDownloadButton";
import { ASSET_PATHS, LAYOUT, SECTION_IDS, SITE } from "@/lib/constants";
import type { AboutInfoItem } from "@/lib/types/db";

const PROFILE_IMAGE_CLASS =
  "h-auto w-full transition-transform duration-300 hover:scale-105 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.05))] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.05))]";

export type AboutSectionProps = {
  siteName?: string;
  designation?: string;
  bio?: string;
  fields?: AboutInfoItem[];
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
          <Image
            src={ASSET_PATHS.PROFILE_IMAGE}
            alt={alt}
            width={LAYOUT.PROFILE_IMAGE_WIDTH}
            height={LAYOUT.PROFILE_IMAGE_HEIGHT}
            className={PROFILE_IMAGE_CLASS}
          />
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
