import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectGallerySlider } from "@/components/projects/ProjectGallerySlider";
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

  const gallery = project.gallery?.length
    ? project.gallery
    : [project.image];
  const hasFlows = Boolean(project.flows?.length);

  return (
    <>
      <Header siteName={SITE.name} designation={ABOUT.designation} />
      <main className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,_rgba(0,216,255,0.14),_transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-[1100px] px-5 py-12 md:px-8 md:py-20">
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
            <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
            {project.tagline ? (
              <p className="mt-3 text-lg font-medium text-[#00d8ff]/90 md:text-xl">
                {project.tagline}
              </p>
            ) : null}
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#00d8ff]/30 bg-[#00d8ff]/10 px-3.5 py-1.5 text-sm text-[#00d8ff]"
                >
                  {skill}
                </span>
              ))}
            </div>
            {project.websiteUrl ? (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#00d8ff] px-5 py-2 text-sm font-semibold text-[#0a0b10] transition hover:brightness-110"
              >
                Visit website →
              </a>
            ) : null}
          </ScrollReveal>

          <ScrollReveal variant="up" delay={120} className="mt-10">
            <ProjectGallerySlider title={project.title} images={gallery} />
          </ScrollReveal>

          {hasFlows ? (
            <section className="mt-16 space-y-16">
              <ScrollReveal variant="up">
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Customer &amp; seller flows
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/45">
                  Novera supports two complete journeys in one marketplace —
                  shopping for customers and store management for sellers.
                </p>
              </ScrollReveal>

              {project.flows!.map((flow, flowIndex) => (
                <ScrollReveal
                  key={flow.title}
                  variant={flowIndex % 2 === 0 ? "left" : "right"}
                  delay={80}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 md:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#00d8ff]/35 bg-[#00d8ff]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#00d8ff] uppercase">
                      {flow.subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#f5b942]">
                      {flow.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
                    {flow.description}
                  </p>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {flow.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-xl border border-white/8 bg-[#0a0b10]/50 px-3.5 py-3 text-sm text-white/70"
                      >
                        <span
                          className="mt-1.5 size-2 shrink-0 rounded-[2px] bg-[#00d8ff]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <ProjectGallerySlider
                      title={`${project.title} ${flow.title}`}
                      images={flow.images}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </section>
          ) : null}

          {project.features?.length ? (
            <ScrollReveal variant="up" delay={180} className="mt-14">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Key Features
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <article
                    key={feature.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#00d8ff]/30 hover:bg-[#00d8ff]/5"
                  >
                    <h3 className="text-[15px] font-medium leading-relaxed text-white">
                      {feature.title}
                    </h3>
                    {feature.description ? (
                      <p className="text-sm leading-relaxed text-white/55">
                        {feature.description}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </ScrollReveal>
          ) : null}

          <ScrollReveal variant="fade" delay={280} className="mt-12">
            <Link
              href="/#projects"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Back to portfolio
            </Link>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
