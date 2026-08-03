"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  SECTION_IDS,
  SOCIAL,
} from "@/lib/constants";
import type { ProjectCategory } from "@/lib/types";

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-8 md:py-28"
    >
      <ScrollReveal variant="up" className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          My <span className="text-[#00d8ff]">{"{dev}"}</span> projects
        </h2>
        <p className="mt-3 text-base text-white/55">
          From Web Apps to Websites &amp; Mobile.
        </p>
      </ScrollReveal>

      <ScrollReveal
        variant="fade"
        delay={80}
        className="mb-12 flex flex-wrap items-center justify-center gap-2"
      >
        <FilterPill
          label="All"
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        {PROJECT_CATEGORIES.map((category) => (
          <FilterPill
            key={category}
            label={category}
            active={active === category}
            onClick={() => setActive(category)}
          />
        ))}
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <ScrollReveal
            key={`${active}-${project.id}`}
            variant="up"
            delay={index * 110}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#12141c]/80 transition duration-300 hover:-translate-y-1 hover:border-[#00d8ff]/30"
          >
            <Link
              href={`/projects/${project.id}`}
              className="relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={project.cardImage ?? project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs tracking-wide text-white/40">
                {project.stack.join(" • ")}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold text-white">
                <Link
                  href={`/projects/${project.id}`}
                  className="transition hover:text-[#00d8ff]"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                {project.cardDescription ?? project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href={`/projects/${project.id}`}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-[#00d8ff]/60 hover:text-[#00d8ff]"
                >
                  View
                </Link>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-[#00d8ff]/60 hover:text-[#00d8ff]"
                  >
                    See on GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-white/40">
          No projects in this category yet.
        </p>
      ) : null}

      <ScrollReveal variant="fade" delay={180} className="mt-10 text-center">
        <a
          href={SOCIAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#00d8ff] underline decoration-[#00d8ff]/40 underline-offset-4 transition hover:decoration-[#00d8ff]"
        >
          See all on GitHub
        </a>
      </ScrollReveal>
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition ${
        active
          ? "bg-[#00d8ff] text-[#0a0b10]"
          : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
