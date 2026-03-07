import { SectionTitle } from "@/components/ui/SectionTitle";
import { EXPERTISE_LIST, SECTION_IDS, THEME } from "@/lib/constants";

export function ExpertiseSection() {
  return (
    <section
      id={SECTION_IDS.EXPERTISE}
      className="mx-auto my-[65px] w-[60%] text-center max-[1100px]:w-[90%]"
    >
      <SectionTitle label="EXPERTISE" />
      <div className="grid grid-cols-3 gap-5 pb-[200px]">
        {EXPERTISE_LIST.map((item) => (
          <div
            key={item}
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
