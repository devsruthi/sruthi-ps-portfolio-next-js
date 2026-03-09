import { getExpertise } from "@/lib/services/portfolio-content";
import { ExpertiseSectionForm } from "./ExpertiseSectionForm";

export const dynamic = "force-dynamic";

export default async function ExpertiseSectionPage() {
  const expertise = await getExpertise();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-white">
        Expertise Section
      </h1>
      <p className="mb-4 text-sm text-zinc-400">
        List of expertise items (e.g. Redux, Git). Each item is shown as a card on the portfolio. Add or remove rows below.
      </p>
      <ExpertiseSectionForm defaultItems={expertise?.items ?? []} />
    </div>
  );
}
