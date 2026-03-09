import { getHero } from "@/lib/services/portfolio-content";
import { HeroSectionForm } from "./HeroSectionForm";

export const dynamic = "force-dynamic";

export default async function HeroSectionPage() {
  const hero = await getHero();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-white">
        Hero Section
      </h1>
      <p className="mb-4 text-sm text-zinc-400">
        Name and introduction for the hero section and across the portfolio.
      </p>
      <HeroSectionForm
        defaultName={hero?.name ?? ""}
        defaultIntro={hero?.intro ?? ""}
      />
    </div>
  );
}
