import { EXPERTISE_LIST, THEME } from "@/lib/constants";

export type ExpertiseSectionProps = {
  /** List of expertise labels (e.g. Redux, Git). Shown as cards. */
  items?: string[];
};

export function ExpertiseSection({
  items = [...EXPERTISE_LIST],
}: ExpertiseSectionProps) {
  const list = items.filter((s) => s.trim());

  return (
    <section className="mx-auto w-full max-w-[1120px] px-5 py-20 text-center md:px-8">
      <h2 className="font-display mb-10 text-3xl font-bold text-white">
        Expertise
      </h2>
      <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 md:grid-cols-4">
        {list.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center justify-center rounded-xl px-5 py-5 text-[16px] transition-all duration-300 hover:scale-105 hover:bg-[#00d8ff] hover:text-[#0a0b10]"
            style={{ backgroundColor: THEME.COLORS.SURFACE }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
