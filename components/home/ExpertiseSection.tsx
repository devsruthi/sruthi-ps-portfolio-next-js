import { SectionTitle } from "@/components/ui/SectionTitle";
import { EXPERTISE_LIST, SECTION_IDS, THEME } from "@/lib/constants";

export type ExpertiseSectionProps = {
  /** List of expertise labels (e.g. Redux, Git). Shown as cards. */
  items?: string[];
};

export function ExpertiseSection({
  items = [...EXPERTISE_LIST],
}: ExpertiseSectionProps) {
  const list = items.filter((s) => s.trim());

  return (
    <section
      id={SECTION_IDS.EXPERTISE}
      className="mx-auto my-[65px] w-[60%] text-center max-[1100px]:w-[90%]"
    >
      <SectionTitle label="EXPERTISE" />
      <div className="grid grid-cols-3 gap-5 pb-12">
        {list.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center justify-center rounded-lg px-5 py-5 text-[18px] transition-all duration-500 hover:scale-110 hover:bg-[#ffa500] hover:text-[#080707]"
            style={{ backgroundColor: THEME.COLORS.CARD_BG }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
