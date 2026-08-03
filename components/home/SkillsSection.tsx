import { TechIcon } from "@/components/home/TechIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SECTION_IDS, SKILLS, TECH_SKILLS } from "@/lib/constants";
import type { SkillItemRow } from "@/lib/types/db";

export type SkillsSectionProps = {
  title?: string;
  description?: string;
  items?: SkillItemRow[];
};

export function SkillsSection({
  title = SKILLS.description,
  description = SKILLS.summary,
}: SkillsSectionProps) {
  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-8 md:py-28"
    >
      <ScrollReveal variant="up" className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          My <span className="text-[#00d8ff]">{"{skills}"}</span>
        </h2>
        <p className="mt-2 text-sm text-white/40">{title}</p>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-white/55">
            {description}
          </p>
        ) : null}
      </ScrollReveal>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_SKILLS.map((skill, index) => (
          <ScrollReveal
            key={skill.name}
            variant="up"
            delay={index * 90}
            className="group flex gap-4"
          >
            <div className="shrink-0 transition duration-300 group-hover:scale-110">
              <TechIcon icon={skill.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{skill.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/45">
                {skill.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
