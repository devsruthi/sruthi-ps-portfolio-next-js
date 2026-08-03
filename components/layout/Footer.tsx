import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE, SOCIAL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <ScrollReveal
        variant="fade"
        className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-white/40 md:flex-row md:px-8"
      >
        <p>
          © {year} {SITE.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#00d8ff]"
          >
            GitHub
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#00d8ff]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="transition hover:text-[#00d8ff]"
          >
            Email
          </a>
        </div>
      </ScrollReveal>
    </footer>
  );
}
