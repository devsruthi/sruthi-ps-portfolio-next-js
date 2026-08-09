import { Header } from "@/components/layout/Header";
import { HashScroll } from "@/components/layout/HashScroll";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { getHero, getAbout } from "@/lib/services/portfolio-content";
import { getPresignedProfileImageUrl } from "@/lib/s3/profile-image";
import { ABOUT, HERO, SITE, SKILLS } from "@/lib/constants";

export default async function Home() {
  const [heroRow, aboutRow] = await Promise.all([getHero(), getAbout()]);

  // Resume / portfolio constants are the source of truth for employer-facing copy.
  // CMS still supplies name + profile image when available.
  const name = heroRow?.name ?? SITE.name;
  const intro = HERO.intro;
  const designation = ABOUT.designation;
  const bio = ABOUT.bio;
  const aboutFields = [...ABOUT.fields];
  const profileImageUrl = aboutRow?.profile_image_key
    ? await getPresignedProfileImageUrl(aboutRow.profile_image_key)
    : null;

  return (
    <>
      <ScrollProgress />
      <HashScroll />
      <Header siteName={name} designation={designation} />
      <main>
        <Hero
          name={name}
          intro={intro}
          designation={designation}
          stack={HERO.stack}
        />
        <AboutSection
          siteName={name}
          designation={designation}
          bio={bio}
          fields={aboutFields}
          locationLabel="Potsdam, Germany"
          profileImageUrl={profileImageUrl}
        />
        <SkillsSection
          title={SKILLS.description}
          description={SKILLS.summary}
        />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
