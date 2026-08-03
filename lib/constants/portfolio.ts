import type {
  About,
  EducationItem,
  Hero,
  Project,
  ProjectCategory,
  SkillCard,
  Skills,
  Site,
  SocialLinks,
  TechSkill,
} from "@/lib/types";

export const SITE: Site = {
  name: "Sruthi P S",
  initial: "S",
  title: "Software Engineer",
};

export const SOCIAL: SocialLinks = {
  github: "https://github.com/devsruthi",
  linkedin: "https://www.linkedin.com/in/dev-sruthi-ps/",
  email: "sruthi.ps.contact@gmail.com",
};

export const HERO: Hero = {
  title: "Software Engineer",
  name: "Sruthi P S",
  intro:
    "Master's student in Computer Science at GISMA University of Applied Sciences, Potsdam, and Software Engineer with 6+ years of professional experience building scalable web and mobile applications. Currently seeking a Working Student (Werkstudent) or Internship opportunity in Germany.",
  stack: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
  ],
};

export const ABOUT: About = {
  designation: "Software Engineer",
  tagline: "Software Engineer · Master's Student with 6+ Years of Experience",
  bio: "I'm a Master's student in Computer Science at GISMA University of Applied Sciences, Potsdam, Germany, with 6+ years of professional experience building scalable web and mobile applications. I enjoy developing modern, user-friendly applications using React.js, Next.js, TypeScript, and React Native, with a strong focus on performance, maintainability, and clean code. I'm currently seeking a Working Student (Werkstudent) or Internship opportunity where I can contribute my industry experience while continuing to grow as a software engineer.",
  lookingFor:
    "I'm currently seeking Working Student (Werkstudent) or Software Engineering Internship opportunities in Germany. Available to work part-time during the academic semester and full-time during semester breaks. Fluent in English and currently learning German (A2).",
  fields: [
    { label: "Phone", value: "+49 15511048943" },
    { label: "Email", value: "sruthips395@gmail.com" },
    {
      label: "Education",
      value: "M.Eng. Computer Science — GISMA University (2026 – Present)",
    },
    {
      label: "Previous degree",
      value: "B.Tech. Computer Science & Engineering (2013 – 2017)",
    },
    { label: "Language", value: "English (Fluent), German (A2)" },
    {
      label: "Location",
      value: "Drewitzer Str. 42, 14478 Potsdam, Germany",
    },
  ],
};

export const EDUCATION: readonly EducationItem[] = [
  {
    degree: "Master of Engineering (M.Eng.) in Computer Science",
    school: "GISMA University of Applied Sciences, Potsdam, Germany",
    period: "2026 – Present",
  },
  {
    degree: "Bachelor of Technology (B.Tech.) in Computer Science & Engineering",
    school: "Sree Buddha College of Engineering, Kerala, India",
    period: "2013 – 2017",
  },
] as const;

export const SKILLS: Skills = {
  description: "Technical skills for modern web & mobile engineering",
  summary:
    "Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3. Frameworks: React.js, Next.js, React Native, Redux, Redux Toolkit, RTK Query, Material UI, Tailwind CSS. Tools: Git, GitHub, Vite, Webpack, Fastlane, Cloud Foundry, Sitecore, Kibana. Testing: Jest. Other: REST APIs, Agile Development.",
  items: [
    { name: "React", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "SASS", percentage: 80 },
  ],
};

/** Skills grid order: React → Next.js → JS → TS → HTML → CSS → SASS */
export const TECH_SKILLS: readonly TechSkill[] = [
  {
    name: "React",
    description: "Component-driven UI for scalable web applications",
    icon: "react",
  },
  {
    name: "Next.js",
    description: "Production-ready React framework for modern web apps",
    icon: "next",
  },
  {
    name: "JavaScript",
    description: "ES6+ for interactive application logic",
    icon: "js",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript for safer, maintainable codebases",
    icon: "ts",
  },
  {
    name: "HTML",
    description: "Semantic markup for accessible, structured pages",
    icon: "html",
  },
  {
    name: "CSS",
    description: "Responsive layouts and polished visual design",
    icon: "css",
  },
  {
    name: "SASS",
    description: "Maintainable styles with variables, mixins & nesting",
    icon: "sass",
  },
] as const;

export const EXPERTISE_LIST: readonly string[] = [
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "RTK Query",
  "Material UI",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "SASS",
  "Jest",
  "Git",
  "GitHub",
  "Fastlane",
  "REST APIs",
  "Agile",
];

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  "Apps",
  "Websites",
  "Mobile",
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: "kerala-library",
    title: "Digital Library",
    description:
      "A digital platform to modernize Kerala libraries, enabling book cataloging, member registration, and due amount tracking. Developed with React for the frontend and Node.js for the backend, with an optimized serverless Lambda architecture to reduce AWS costs while maintaining performance.",
    cardDescription:
      "A platform to digitize Kerala libraries, streamlining book, member, and due amount management, as most libraries in Kerala still rely on physical records.",
    stack: ["React", "TypeScript", "MongoDB", "Node.js", "AWS"],
    category: "Apps",
    image: "/images/projects/kerala-library-dashboard.png",
    cardImage: "/images/projects/kerala-library-laptop.png",
    websiteUrl: "https://www.keralalibrary.in/",
    githubUrl: "https://github.com/devsruthi",
  },
  {
    id: "nova-commerce",
    title: "Nova Commerce",
    description:
      "A Next.js storefront with product discovery and responsive checkout — focused on conversion-friendly UI and reusable components.",
    stack: ["Next.js", "React", "JavaScript", "SASS"],
    category: "Websites",
    image: "/images/projects/project-2.jpg",
    websiteUrl: "https://github.com/devsruthi",
    githubUrl: "https://github.com/devsruthi",
  },
  {
    id: "campus-hub",
    title: "Campus Hub",
    description:
      "A student-facing web app for schedules and announcements — semantic HTML, accessible UI, and mobile-first CSS.",
    stack: ["React", "HTML", "CSS", "TypeScript"],
    category: "Websites",
    image: "/images/projects/project-3.jpg",
    websiteUrl: "https://github.com/devsruthi",
    githubUrl: "https://github.com/devsruthi",
  },
  {
    id: "folio-studio",
    title: "Folio Studio",
    description:
      "A personal portfolio builder with theming and section layouts — demonstrating Next.js pages, clean styling, and deployable product work.",
    stack: ["Next.js", "React", "SASS", "TypeScript"],
    category: "Apps",
    image: "/images/projects/project-4.jpg",
    websiteUrl: "https://github.com/devsruthi",
    githubUrl: "https://github.com/devsruthi",
  },
] as const;

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

/** Fallback skill cards derived from CMS percentage skills when needed. */
export const SKILL_CARD_FALLBACK: readonly SkillCard[] = TECH_SKILLS.map(
  ({ name, description }) => ({ name, description }),
);
