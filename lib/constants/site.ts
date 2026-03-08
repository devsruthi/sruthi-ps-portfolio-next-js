/**
 * Canonical site URL (no trailing slash). Used for sitemap, canonical, Open Graph, etc.
 * Set via NEXT_PUBLIC_SITE_URL or default for sruthips.com.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sruthips.com";

/** Default OG/Twitter image path (absolute URL). Add public/images/og.png (1200x630) for best results. */
export const DEFAULT_OG_IMAGE = "/images/og.png";

/** SEO metadata shared across the site. */
export const SEO = {
  defaultTitle: "Sruthi PS | Software Engineer & React Developer",
  titleTemplate: "%s | Sruthi PS",
  description:
    "Sruthi P S — Software Engineer and web & mobile developer. React, React Native, TypeScript. Portfolio, skills, and contact. Based in Kerala, India.",
  keywords: [
    "Sruthi PS",
    "Sruthi P S",
    "Sruthi web developer",
    "Sruthi React developer",
    "Sruthi React Native developer",
    "software engineer",
    "web developer",
    "mobile app developer",
    "React developer",
    "TypeScript developer",
    "Kerala developer",
    "portfolio",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
    siteName: "Sruthi PS Portfolio",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
} as const;
