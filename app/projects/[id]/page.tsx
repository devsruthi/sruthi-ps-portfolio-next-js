import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ABOUT,
  getProjectById,
  PROJECTS,
  SITE,
} from "@/lib/constants";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <>
      <Header siteName={SITE.name} designation={ABOUT.designation} />
      <main className="mx-auto w-full max-w-[900px] px-5 py-12 md:px-8 md:py-20">
        <ScrollReveal variant="fade">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-[#00d8ff]"
          >
            ← Back to projects
          </Link>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={60} className="mt-8">
          <p className="text-xs tracking-[0.2em] text-[#00d8ff]/90 uppercase">
            Project
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal
          variant="up"
          delay={120}
          className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </ScrollReveal>

        <ScrollReveal variant="up" delay={180} className="mt-10">
          <h2 className="font-display text-lg font-semibold text-white">
            Skills used
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#00d8ff]/30 bg-[#00d8ff]/10 px-3.5 py-1.5 text-sm text-[#00d8ff]"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={240} className="mt-10">
          <h2 className="font-display text-lg font-semibold text-white">
            Description
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/65">
            {project.description}
          </p>
        </ScrollReveal>

        {project.websiteUrl ? (
          <ScrollReveal variant="up" delay={300} className="mt-10">
            <h2 className="font-display text-lg font-semibold text-white">
              Website
            </h2>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-base text-[#00d8ff] underline decoration-[#00d8ff]/40 underline-offset-4 transition hover:decoration-[#00d8ff]"
            >
              {project.websiteUrl}
            </a>
          </ScrollReveal>
        ) : null}

        <ScrollReveal variant="fade" delay={360} className="mt-12 flex flex-wrap gap-3">
          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#00d8ff] px-6 py-2.5 text-sm font-semibold text-[#0a0b10] transition hover:brightness-110"
            >
              Visit website
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition hover:border-[#00d8ff]/60 hover:text-[#00d8ff]"
            >
              See on GitHub
            </a>
          ) : null}
          <Link
            href="/#projects"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Back to portfolio
          </Link>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
