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
  defaultTitle:
    "Sruthi PS | Software Engineer — Internship & Working Student",
  titleTemplate: "%s | Sruthi PS",
  description:
    "Sruthi P S — Master's student in Computer Science at GISMA (Potsdam) and Software Engineer with 6+ years of experience. Seeking Working Student (Werkstudent) or Internship opportunities in Germany.",
  keywords: [
    "Sruthi PS",
    "Sruthi P S",
    "software engineer internship Germany",
    "Werkstudent software engineer",
    "working student React",
    "React developer Potsdam",
    "Next.js developer",
    "TypeScript developer",
    "GISMA Computer Science",
    "portfolio",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_DE",
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
