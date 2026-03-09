import { getSkills } from "@/lib/services/portfolio-content";
import { SkillsSectionForm } from "./SkillsSectionForm";

export const dynamic = "force-dynamic";

export default async function SkillsSectionPage() {
  const skills = await getSkills();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-white">
        Skills Section
      </h1>
      <p className="mb-4 text-sm text-zinc-400">
        Title, description, and skill items with score (0–100). The score drives the progress bar on the portfolio.
      </p>
      <SkillsSectionForm
        defaultTitle={skills?.title ?? ""}
        defaultDescription={skills?.description ?? ""}
        defaultItems={skills?.items ?? []}
      />
    </div>
  );
}
