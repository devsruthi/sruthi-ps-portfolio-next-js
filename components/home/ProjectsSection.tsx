import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROJECTS, SECTION_IDS } from "@/lib/constants";
import type { Project } from "@/lib/types";

export function ProjectsSection() {
  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="relative mx-auto w-full max-w-[1200px] px-5 py-20 md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-3xl rounded-full bg-[#00d8ff]/10 blur-3xl"
        aria-hidden
      />

      <ScrollReveal variant="up" className="relative mb-12 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          My <span className="text-[#00d8ff]">{"{dev}"}</span> projects
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
          From Web Apps to Websites &amp; Mobile — selected work built with
          clean UI and real product flows.
        </p>
      </ScrollReveal>

      <div className="relative grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const titleParts = project.title.split(" - ");
  const mainTitle = titleParts[0] ?? project.title;
  const titleRest = titleParts.slice(1).join(" - ");
  const stackPreview = project.stack.slice(0, 4);

  return (
    <ScrollReveal
      variant="up"
      delay={index * 100}
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-[#161922] to-[#0f1118] shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-[#00d8ff]/40 hover:shadow-[0_24px_60px_rgba(0,216,255,0.12)]"
    >
      <Link
        href={`/projects/${project.id}`}
        className="relative block overflow-hidden border-b border-white/5 bg-[#0a0b10] p-3 md:p-4"
      >
        <div className="mb-2.5 flex items-center gap-1.5 px-1">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
          <span className="ml-2 truncate text-[11px] text-white/30">
            {mainTitle.toLowerCase().replace(/\s+/g, "")}.app
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#12141c] ring-1 ring-white/10">
          <Image
            src={project.cardImage ?? project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 560px"
            quality={100}
            priority={index < 2}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1118]/50 via-transparent to-transparent opacity-80"
            aria-hidden
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap gap-2">
          {stackPreview.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/55"
            >
              {skill}
            </span>
          ))}
          {project.stack.length > stackPreview.length ? (
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/40">
              +{project.stack.length - stackPreview.length}
            </span>
          ) : null}
        </div>

        <h3 className="font-display mt-4">
          <Link
            href={`/projects/${project.id}`}
            className="block transition group-hover:text-[#00d8ff]"
          >
            <span className="block text-3xl font-bold tracking-tight text-white md:text-4xl">
              {mainTitle}
            </span>
            {titleRest || project.tagline ? (
              <span className="mt-1.5 block text-base font-medium tracking-wide text-[#00d8ff]/90 md:text-lg">
                {titleRest || project.tagline}
              </span>
            ) : null}
          </Link>
        </h3>

        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/55">
          {project.cardDescription ?? project.description}
        </p>

        <div className="mt-6">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#00d8ff] px-5 py-2 text-sm font-semibold text-[#0a0b10] transition hover:brightness-110"
          >
            View project →
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
