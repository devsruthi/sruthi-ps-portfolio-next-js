import { getAbout } from "@/lib/services/portfolio-content";
import { AboutSectionForm } from "./AboutSectionForm";

export const dynamic = "force-dynamic";

export default async function AboutSectionPage() {
  const about = await getAbout();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-white">
        About Section
      </h1>
      <p className="mb-4 text-sm text-zinc-400">
        Title, description, and key-value info (e.g. Phone, Email) for the About me block.
      </p>
      <AboutSectionForm
        defaultDesignation={about?.designation ?? ""}
        defaultBio={about?.bio ?? ""}
        defaultFields={about?.fields ?? []}
      />
    </div>
  );
}
