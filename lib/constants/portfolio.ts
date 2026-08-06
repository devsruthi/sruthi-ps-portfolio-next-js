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
  title: "Master's Student",
  name: "Sruthi P S",
  intro:
    "I build web and mobile products with clean UI and solid engineering — currently pursuing an M.Eng. in Computer Science in Potsdam.",
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
  tagline: "Master's Student · Software Engineer · 6+ Years of Experience",
  bio: "I care about performance, maintainability, and thoughtful UI. Day to day I work with React, Next.js, TypeScript, and React Native — turning product ideas into reliable apps people enjoy using.",
  lookingFor:
    "English fluent · German A2",
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
    id: "novera",
    title: "Novera - Dual marketplace platform",
    tagline: "Dual marketplace platform",
    description:
      "Built a dual-role marketplace where customers browse curated products from independent stores while merchants manage inventory, products, orders, and storefronts through secure role-based dashboards.",
    cardDescription:
      "Dual-role marketplace — customers shop curated products, merchants manage inventory, orders, and storefronts.",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Tailwind CSS",
    ],
    category: "Apps",
    websiteUrl: "https://novera-commerce-platform.vercel.app/",
    image: "/images/projects/novera/novera-laptop.png",
    cardImage: "/images/projects/novera/novera-laptop.png",
    gallery: [
      "/images/projects/novera/novera-laptop.png",
      "/images/projects/novera/hq-home.png",
      "/images/projects/novera/hq-shop.png",
      "/images/projects/novera/hq-dashboard.png",
      "/images/projects/novera/hq-products.png",
      "/images/projects/novera/hq-signup.png",
    ],
    flows: [
      {
        title: "Customer flow",
        subtitle: "Shop & discover",
        description:
          "Customers join Novera to browse curated fashion, explore collections, and complete a smooth shopping journey from discovery to order tracking.",
        highlights: [
          "Browse home and curated product collections",
          "Shop with filters, categories, wishlist, and cart",
          "Track orders and manage a signed-in shopping profile",
          "Create a customer account to start shopping quickly",
        ],
        images: [
          "/images/projects/novera/novera-laptop.png",
          "/images/projects/novera/hq-home.png",
          "/images/projects/novera/hq-shop.png",
          "/images/projects/novera/hq-signup.png",
        ],
      },
      {
        title: "Seller flow",
        subtitle: "Sell & manage",
        description:
          "Shop owners use a dedicated dashboard to run their store — from inventory and product management to sales performance and category organization.",
        highlights: [
          "Overview dashboard with inventory and sales insights",
          "Manage products, pricing, stock, and status",
          "Organize shoppable categories for the storefront",
          "Create a seller account to open and grow a shop",
        ],
        images: [
          "/images/projects/novera/hq-dashboard.png",
          "/images/projects/novera/hq-products.png",
          "/images/projects/novera/hq-seller-signup.png",
        ],
      },
    ],
    features: [
      { title: "🛒 Multi-Vendor Marketplace" },
      { title: "🔐 Authentication & Role-Based Access Control" },
      { title: "🛡️ Supabase Row Level Security" },
      { title: "📦 Product & Inventory Management" },
      { title: "❤️ Wishlist & Shopping Cart" },
      { title: "📑 Order Management" },
      { title: "🏪 Merchant Dashboard" },
      { title: "📱 Fully Responsive Design" },
      { title: "⚡ Optimized Performance" },
      { title: "🔍 Search & Product Filtering" },
    ],
  },
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
    id: "statekitjs",
    title: "StateKitJS",
    tagline: "React UI State Component Library · 2026",
    description:
      "Developed StateKitJS, an open-source React component library that simplifies handling common application states such as loading, empty, and error screens. The library provides customizable UI state components and a collection of modern animated loaders and spinners, enabling developers to build consistent, accessible, and visually polished interfaces with minimal effort. It includes responsive components, theme customization, comprehensive documentation, live demos, and an optimized developer experience for modern React applications.",
    cardDescription:
      "A modern React library for beautiful loading, empty, and error states — fully customizable components, themes, and seamless integration.",
    stack: ["React", "TypeScript", "CSS3", "Vite", "npm", "GitHub"],
    category: "Apps",
    image: "/images/projects/statekitjs/logo.png",
    cardImage: "/images/projects/statekitjs/laptop.png",
    gallery: [
      "/images/projects/statekitjs/logo.png",
      "/images/projects/statekitjs/hq-demo.png",
      "/images/projects/statekitjs/hq-loaders.png",
    ],
    websiteUrl: "https://statekitjs-playground.vercel.app/",
    npmUrl: "https://www.npmjs.com/package/@statekitjs/react",
    goal: {
      title: "Goal / Why we use this?",
      problem:
        "Nested conditionals and one-off state components everywhere — loading, error, and empty checks make components hard to read, scatter logic across the app, and hurt maintainability.",
      resolved:
        "One declarative State component with a clear priority order: loading → error → empty → children. Cleaner, consistent, and easier to maintain.",
      problemCode: `if (loading) return <Spinner />;

if (error) return <ErrorView onRetry={refetch} />;

if (!users.length) return <EmptyState />;

return <UsersTable users={users} />;`,
      resolvedCode: `import { State } from '@statekitjs/react';

<State
  loading={loading}
  error={error}
  empty={users.length === 0}
  onRetry={refetch}
>
  <UsersTable users={users} />
</State>`,
    },
    features: [
      {
        title: "Loading, Empty & Error states",
        description:
          "Ready-made UI states that keep screens consistent across your app.",
      },
      {
        title: "15+ animated loaders",
        description:
          "Modern spinners and progress visuals you can swap with one prop.",
      },
      {
        title: "Fully customizable",
        description:
          "Colors, sizes, themes, layouts, and animations — not just loaders.",
      },
      {
        title: "Lightweight & fast",
        description:
          "Performance-focused package with no heavy UI framework dependency.",
      },
      {
        title: "React & TypeScript",
        description:
          "Typed APIs and DX built for modern React applications.",
      },
      {
        title: "Accessible & responsive",
        description:
          "Works cleanly across devices with accessible defaults.",
      },
      {
        title: "Minutes to integrate",
        description:
          "Drop in StateKit components and replace boilerplate state UI fast.",
      },
      {
        title: "Docs & live demos",
        description:
          "Interactive playground and documentation for every component.",
      },
    ],
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
