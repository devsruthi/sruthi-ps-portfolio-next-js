import type { SectionTitleProps } from "@/lib/types";
import { THEME } from "@/lib/constants";

const SECTION_TITLE_CLASSES = {
  wrapper:
    "relative flex min-h-[100px] w-full flex-col items-center justify-center pb-10",
  overlay: "text-[75px] leading-none opacity-[0.04]",
  label: "m-0 text-[22px]",
  divider: "flex h-[3px] w-[150px] items-center overflow-hidden rounded-xl bg-white/40",
  highlight: "h-[3px] w-1/2",
} as const;

export function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className={SECTION_TITLE_CLASSES.wrapper}>
      <h2 className={SECTION_TITLE_CLASSES.overlay}>{label}</h2>
      <div className="absolute top-[18px] flex flex-col items-center gap-2">
        <h6 className={SECTION_TITLE_CLASSES.label} style={{ color: THEME.COLORS.ACCENT }}>
          {label}
        </h6>
        <div className={SECTION_TITLE_CLASSES.divider}>
          <div className={SECTION_TITLE_CLASSES.highlight} style={{ backgroundColor: THEME.COLORS.ACCENT }} />
        </div>
      </div>
    </div>
  );
}
