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
  email: "hello@sruthips.com",
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
    { label: "Email", value: "hello@sruthips.com" },
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
      "/images/projects/statekitjs/slide-overview.png",
      "/images/projects/statekitjs/slide-loaders.png",
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
    id: "fudexa",
    title: "Fudexa",
    tagline: "Restaurant Operations Platform",
    description:
      "A full-stack, real-time restaurant operations platform designed to streamline order handling and day-to-day workflows for restaurant owners. Merchants manage incoming orders, kitchen workflows, menus, inventory, and analytics from a centralized dashboard — while customers get a smooth food ordering experience with restaurant discovery, menu browsing, checkout, and real-time order tracking.",
    cardDescription:
      "A real-time restaurant operations platform focused on efficient order handling for merchants, with seamless food ordering for customers.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "Tailwind CSS",
      "Zod",
    ],
    category: "Apps",
    websiteUrl: "https://fudexa.vercel.app/",
    image: "/images/projects/fudexa/fudexa-banner-v2.png",
    cardImage: "/images/projects/fudexa/fudexa-banner-v2.png",
    gallery: [
      "/images/projects/fudexa/fudexa-banner-v2.png",
      "/images/projects/fudexa/landing.png",
      "/images/projects/fudexa/login.png",
    ],
    flowsHeading: "Restaurant & customer flows",
    flowsIntro:
      "Fudexa is merchant-first for real-time restaurant operations, with a complete customer ordering journey alongside it.",
    flows: [
      {
        title: "Restaurant flow",
        subtitle: "Ops & kitchen",
        description:
          "Restaurant owners run the floor from one dashboard — accept live orders, manage menus and inventory, and track performance with analytics.",
        highlights: [
          "Real-time order board (pending → preparing → ready)",
          "Menu & category management with stock and status",
          "Inventory tracking and performance analytics",
          "Role-based restaurant signup and settings",
        ],
        images: [
          "/images/projects/fudexa/signup-restaurant.png",
          "/images/projects/fudexa/merchant-orders.png",
          "/images/projects/fudexa/merchant-menu.png",
          "/images/projects/fudexa/merchant-analytics.png",
        ],
      },
      {
        title: "Customer ordering flow",
        subtitle: "Order & track",
        description:
          "Diners discover nearby kitchens, browse menus, place orders, and track deliveries in real time — with order history and profile management.",
        highlights: [
          "Browse restaurants, search, and filter dishes",
          "View restaurant details and menus",
          "Cart, checkout, and real-time order tracking",
          "Order history and customer account management",
        ],
        images: [
          "/images/projects/fudexa/signup-customer.png",
          "/images/projects/fudexa/customer-home.png",
          "/images/projects/fudexa/customer-restaurant.png",
          "/images/projects/fudexa/customer-orders.png",
        ],
      },
    ],
    features: [
      { title: "🏪 Real-time merchant order management" },
      { title: "👨‍🍳 Live kitchen status updates" },
      { title: "📋 Menu, category & inventory control" },
      { title: "📊 Analytics & performance insights" },
      { title: "⭐ Customer reviews & ratings" },
      { title: "🔐 Auth & role-based access (customer + restaurant)" },
      { title: "🍔 Customer restaurant discovery & ordering" },
      { title: "📦 Real-time order tracking & history" },
      { title: "⚡ Supabase Realtime + PostgreSQL + RLS" },
      { title: "🧩 Zod + React Hook Form + TanStack Query" },
    ],
  },
  {
    id: "orbis",
    title: "Orbis",
    tagline: "AI Language Immersion Simulator",
    description:
      "Orbis is an AI-powered language immersion app that helps you learn by having natural conversations in your target language. Communicate with AI characters, speak or type your responses, and get replies adapted to your CEFR level. Instead of memorizing phrases, Orbis helps you build confidence through real-world communication.",
    cardDescription:
      "AI language immersion app — speak or type in real-life scenes, with Claude replies, voice, and scored evaluations.",
    stack: [
      "Anthropic Claude",
      "Inngest",
      "Next.js",
      "React",
      "Postgres",
      "TypeScript",
      "Tailwind CSS",
      "Auth.js",
      "Zod",
      "Vercel",
    ],
    category: "Apps",
    websiteUrl: "https://orbis-seven-tawny.vercel.app/",
    image: "/images/projects/orbis/orbis-hero.png",
    cardImage: "/images/projects/orbis/orbis-thumb.png",
    gallery: [
      "/images/projects/orbis/orbis-hero.png",
      "/images/projects/orbis/dashboard-wide.png",
      "/images/projects/orbis/missions-wide.png",
      "/images/projects/orbis/mission-chat-wide.png",
    ],
    flowsHeading: "Immersion & AI coaching",
    flowsIntro:
      "Speak or type in a live scene. Claude stays in character — and coaching (checks, scores, reviews) happens around the conversation, not instead of it.",
    flows: [
      {
        title: "Immersion flow",
        subtitle: "Claude · Anthropic",
        description:
          "Voice is an input method, not a separate product: speech-to-text → Claude turn → text-to-speech. Typed messages get a pre-send spelling/grammar check. Completing a session queues evaluation (Inngest, or inline fallback) against the stored transcript.",
        highlights: [
          "Speak or type in the same conversation",
          "Pre-send spelling & grammar check (Claude)",
          "Session evaluation with scores and mistake reviews",
          "Progress, streaks, and spaced reviews on the dashboard",
        ],
        images: [
          "/images/projects/orbis/mission-listening-wide.png",
          "/images/projects/orbis/evaluation-loading.png",
          "/images/projects/orbis/evaluation-wide.png",
        ],
      },
    ],
    features: [
      {
        title: "Anthropic Claude conversation",
        description:
          "Official Anthropic SDK on the server only — characters reply in the target language at your CEFR level.",
      },
      {
        title: "Voice in, speech out",
        description:
          "Speak → speech-to-text → Claude turn → text-to-speech. Type as a fallback. No separate voice API.",
      },
      {
        title: "Pre-send language check",
        description:
          "Typed messages can be checked for spelling and grammar before they go to the character.",
      },
      {
        title: "Mission objectives",
        description:
          "Scenes have required points (greet, order, ask the price). Complete session waits until you actually say them.",
      },
      {
        title: "Scored evaluation",
        description:
          "Inngest (or inline) evaluates the stored conversation — overall score, grammar, vocabulary, naturalness, and reviews.",
      },
      {
        title: "CEFR A1–C1",
        description:
          "German and French worlds with levels from beginner through advanced, kept separate per language.",
      },
      {
        title: "Auth.js + Google",
        description:
          "Optional Google sign-in. A learner id still works without an account.",
      },
      {
        title: "Postgres · Zod · Next.js",
        description:
          "App Router API, Zod validation, Postgres on Vercel — Claude keys never reach the client.",
      },
    ],
  },
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
    image: "/images/projects/novera/novera-banner.png",
    cardImage: "/images/projects/novera/novera-banner.png",
    gallery: [
      "/images/projects/novera/novera-banner.png",
      "/images/projects/novera/hq-home.png",
      "/images/projects/novera/hq-shop.png",
      "/images/projects/novera/hq-dashboard.png",
      "/images/projects/novera/hq-products.png",
      "/images/projects/novera/hq-signup.png",
    ],
    flowsHeading: "Customer & seller flows",
    flowsIntro:
      "Novera supports two complete journeys in one marketplace — shopping for customers and store management for sellers.",
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
          "/images/projects/novera/hq-signup.png",
          "/images/projects/novera/novera-laptop.png",
          "/images/projects/novera/hq-home.png",
          "/images/projects/novera/hq-shop.png",
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
          "/images/projects/novera/hq-seller-signup.png",
          "/images/projects/novera/hq-dashboard.png",
          "/images/projects/novera/hq-products.png",
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
  }
] as const;

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

/** Fallback skill cards derived from CMS percentage skills when needed. */
export const SKILL_CARD_FALLBACK: readonly SkillCard[] = TECH_SKILLS.map(
  ({ name, description }) => ({ name, description }),
);
