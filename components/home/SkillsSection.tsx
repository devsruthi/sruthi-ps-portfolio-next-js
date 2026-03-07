import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTION_IDS, SKILLS, THEME } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="mx-auto my-[65px] w-[60%] text-center max-[1100px]:w-[90%]"
    >
      <SectionTitle label="SKILLS" />
      <div className="flex w-full gap-20 max-[1450px]:flex-col">
        <div className="flex-1">
          <p className="text-left text-[28px]">{SKILLS.description}</p>
          <p className="mt-4 text-justify leading-7 opacity-50">
            {SKILLS.placeholder}
          </p>
        </div>
        <div
          className="flex flex-1 flex-col gap-10 rounded border-4 p-[65px] transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: "black",
            borderColor: THEME.COLORS.CARD_BORDER,
            boxShadow: `2px 10px 20px 5px ${THEME.COLORS.SHADOW}`,
          }}
        >
          {SKILLS.items.map(({ name, percentage }) => (
            <div
              key={name}
              className="flex flex-col gap-1 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between text-[18px]">
                <span className="text-white">{name}</span>
                <span style={{ color: THEME.COLORS.ACCENT }}>{percentage}%</span>
              </div>
              <div
                className="flex h-[5px] items-center overflow-hidden rounded-sm"
                style={{ backgroundColor: THEME.COLORS.CARD_BG }}
              >
                <div
                  className="h-[6px] rounded-sm"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: THEME.COLORS.ACCENT,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
