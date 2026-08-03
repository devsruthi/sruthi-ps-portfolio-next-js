"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SECTION_IDS, SITE, SOCIAL } from "@/lib/constants";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

/** Site name from CMS (basic details). Falls back to SITE.name if not provided. */
export function Header({
  siteName,
  designation,
}: {
  siteName?: string;
  designation?: string;
}) {
  const name = siteName ?? SITE.name;
  const role = designation ?? SITE.title;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0a0b10]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "border-white/5 bg-[#0a0b10]/80"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-5 transition-all duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link
          href={`#${SECTION_IDS.HOME}`}
          onClick={(e) => scrollToSection(e, `#${SECTION_IDS.HOME}`)}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#00d8ff]/40 bg-[#00d8ff]/10 font-display text-sm font-bold text-[#00d8ff] transition group-hover:bg-[#00d8ff]/20">
            {name.charAt(0)}
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-semibold text-white md:text-base">
              {name}
            </span>
            <span className="hidden truncate text-xs text-white/45 sm:block">
              {role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="rounded-full px-3.5 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-white/60 transition hover:bg-white/5 hover:text-[#00d8ff] sm:inline-flex"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <Link
            href={`#${SECTION_IDS.CONTACT}`}
            onClick={(e) => scrollToSection(e, `#${SECTION_IDS.CONTACT}`)}
            className="rounded-full border border-[#00d8ff]/50 px-4 py-2 text-sm font-medium text-[#00d8ff] transition hover:bg-[#00d8ff]/10"
          >
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
}
