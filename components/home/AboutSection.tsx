import { Fragment } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ResumeDownloadButton } from "@/components/home/ResumeDownloadButton";
import { ABOUT, ASSET_PATHS, LAYOUT, SECTION_IDS } from "@/lib/constants";

const PROFILE_IMAGE_CLASS =
  "h-auto w-full transition-transform duration-300 hover:scale-105 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.05))] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.05))]";

export function AboutSection() {
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
            alt="Sruthi PS"
            width={LAYOUT.PROFILE_IMAGE_WIDTH}
            height={LAYOUT.PROFILE_IMAGE_HEIGHT}
            className={PROFILE_IMAGE_CLASS}
          />
        </div>
        <div className="flex flex-col items-start gap-5 text-left">
          <div className="text-[25px]">{ABOUT.designation}</div>
          <p className="text-[17px] leading-6 opacity-50">{ABOUT.bio}</p>
          <div className="grid grid-cols-[1fr_2fr] gap-x-10 gap-y-2 text-[17px]">
            {ABOUT.fields.map(({ label, value }) => (
              <Fragment key={label}>
                <div className="opacity-70">{label}</div>
                <div className="flex gap-1 opacity-50">
                  <span>:</span>
                  {value}
                </div>
              </Fragment>
            ))}
          </div>
          <ResumeDownloadButton />
        </div>
      </div>
    </section>
  );
}
