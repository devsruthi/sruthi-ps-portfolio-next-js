import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { getHero, getAbout, getSkills, getExpertise } from "@/lib/services/portfolio-content";
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
