import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTION_IDS, SKILLS, THEME } from "@/lib/constants";
import type { SkillItemRow } from "@/lib/types/db";

export type SkillsSectionProps = {
  /** Section heading (e.g. "Technical skills I use..."). */
  title?: string;
  /** Paragraph below the heading. */
  description?: string;
  /** Skill name + percentage (0–100) for the progress bars. */
  items?: SkillItemRow[];
};

export function SkillsSection({
  title = SKILLS.description,
  description = SKILLS.summary,
  items = [...SKILLS.items],
}: SkillsSectionProps) {
  const list = items.filter((i) => i.name.trim());
  const percentage = (n: number) => Math.max(0, Math.min(100, Number(n) || 0));

  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="mx-auto my-[65px] w-[60%] text-center max-[1100px]:w-[90%]"
    >
      <SectionTitle label="SKILLS" />
      <div className="flex w-full gap-20 max-[1450px]:flex-col">
        <div className="flex-1">
          {title ? (
            <p className="text-left text-[28px]">{title}</p>
          ) : null}
          {description ? (
            <p className="mt-4 text-justify leading-7 opacity-50">{description}</p>
          ) : null}
        </div>
        <div
          className="flex flex-1 flex-col gap-10 rounded border-4 p-[65px] transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: "black",
            borderColor: THEME.COLORS.CARD_BORDER,
            boxShadow: `2px 10px 20px 5px ${THEME.COLORS.SHADOW}`,
          }}
        >
          {list.map(({ name, percentage: pct }, index) => {
            const p = percentage(pct);
            return (
              <div
                key={`${name}-${index}`}
                className="flex flex-col gap-1 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between text-[18px]">
                  <span className="text-white">{name}</span>
                  <span style={{ color: THEME.COLORS.ACCENT }}>{p}%</span>
                </div>
                <div
                  className="flex h-[5px] items-center overflow-hidden rounded-sm"
                  style={{ backgroundColor: THEME.COLORS.CARD_BG }}
                >
                  <div
                    className="h-[6px] rounded-sm transition-[width] duration-300"
                    style={{
                      width: `${p}%`,
                      backgroundColor: THEME.COLORS.ACCENT,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
