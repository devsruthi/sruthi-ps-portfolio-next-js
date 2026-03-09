import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { getHero, getAbout, getSkills, getExpertise } from "@/lib/services/portfolio-content";
import { getPresignedProfileImageUrl } from "@/lib/s3/profile-image";
import { ABOUT, EXPERTISE_LIST, HERO, SITE, SKILLS } from "@/lib/constants";

export default async function Home() {
  const [heroRow, aboutRow, skillsRow, expertiseRow] = await Promise.all([
    getHero(),
    getAbout(),
    getSkills(),
    getExpertise(),
  ]);
  const name = heroRow?.name ?? SITE.name;
  const intro = heroRow?.intro ?? HERO.intro;
  const designation = aboutRow?.designation ?? ABOUT.designation;
  const bio = aboutRow?.bio ?? ABOUT.bio;
  const aboutFields = aboutRow?.fields ?? [...ABOUT.fields];
  const profileImageUrl = aboutRow?.profile_image_key
    ? await getPresignedProfileImageUrl(aboutRow.profile_image_key)
    : null;
  const skillsTitle = skillsRow?.title ?? SKILLS.description;
  const skillsDescription = skillsRow?.description ?? SKILLS.summary;
  const skillsItems = skillsRow?.items?.length ? skillsRow.items : [...SKILLS.items];
  const expertiseItems = expertiseRow?.items?.length ? expertiseRow.items : [...EXPERTISE_LIST];

  return (
    <>
      <Header siteName={name} />
      <main className="flex flex-col items-center">
        <Hero name={name} intro={intro} />
        <AboutSection
          siteName={name}
          designation={designation}
          bio={bio}
          fields={aboutFields}
          profileImageUrl={profileImageUrl}
        />
        <SkillsSection
          title={skillsTitle}
          description={skillsDescription}
          items={skillsItems}
        />
        <ExpertiseSection items={expertiseItems} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
