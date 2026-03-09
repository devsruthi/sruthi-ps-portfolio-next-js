import { getAbout } from "@/lib/services/portfolio-content";
import { getPresignedProfileImageUrl } from "@/lib/s3/profile-image";
import { getPresignedResumeUrl } from "@/app/actions/resume";
import { AboutSectionForm } from "./AboutSectionForm";
import { ProfileImageUploader } from "./ProfileImageUploader";
import { ResumeUploader } from "./ResumeUploader";

export const dynamic = "force-dynamic";

export default async function AboutSectionPage() {
  const about = await getAbout();
  const profileImageUrl = about?.profile_image_key
    ? await getPresignedProfileImageUrl(about.profile_image_key)
    : null;
  const resumeResult = await getPresignedResumeUrl();
  const resumeUrl = resumeResult.ok ? resumeResult.url : null;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-white">
        About Section
      </h1>
      <p className="mb-4 text-sm text-zinc-400">
        Profile image, title, description, and key-value info (e.g. Phone, Email) for the About me block.
      </p>
      <div className="max-w-xl space-y-8">
        <ProfileImageUploader currentImageUrl={profileImageUrl} />
        <ResumeUploader currentResumeUrl={resumeUrl} />
        <AboutSectionForm
          defaultDesignation={about?.designation ?? ""}
          defaultBio={about?.bio ?? ""}
          defaultFields={about?.fields ?? []}
        />
      </div>
    </div>
  );
}
