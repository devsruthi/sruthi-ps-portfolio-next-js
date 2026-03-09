import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import {
  ABOUT,
  DEFAULT_OG_IMAGE,
  SEO,
  SITE,
  SITE_URL,
} from "@/lib/constants";
import { getHero, getAbout } from "@/lib/services/portfolio-content";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const ogImageUrl = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const hero = await getHero();
  const siteName = hero?.name ?? SITE.name;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO.defaultTitle,
      template: SEO.titleTemplate,
    },
    description: SEO.description,
    keywords: [...SEO.keywords],
    authors: [{ name: siteName, url: SITE_URL }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: SEO.openGraph.type,
      locale: SEO.openGraph.locale,
      url: SITE_URL,
      siteName: SEO.openGraph.siteName,
      title: SEO.defaultTitle,
      description: SEO.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} - Portfolio`,
        },
      ],
    },
    twitter: {
      card: SEO.twitter.card,
      title: SEO.defaultTitle,
      description: SEO.description,
      images: [ogImageUrl],
    },
    robots: SEO.robots,
    alternates: {
      canonical: SITE_URL,
    },
    category: "technology",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hero, about] = await Promise.all([getHero(), getAbout()]);
  const siteName = hero?.name ?? SITE.name;
  const jobTitle = about?.designation ?? ABOUT.designation;
  const email = about?.fields?.find((f) => f.label === "Email")?.value ?? ABOUT.fields.find((f) => f.label === "Email")?.value;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${siteName} Portfolio`,
        description: SEO.description,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: siteName,
        url: SITE_URL,
        jobTitle,
        description: SEO.description,
        email,
        knowsAbout: ["React", "React Native", "TypeScript", "Web Development", "Mobile Development"],
        sameAs: [],
      },
    ],
  };

  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans text-[aliceblue] antialiased">
        {children}
      </body>
    </html>
  );
}
