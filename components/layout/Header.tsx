"use client";

import Link from "next/link";
import { NAV_ITEMS, SITE, THEME } from "@/lib/constants";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  return (
    <header className="flex justify-center px-3 py-3">
      <div className="flex w-[60%] max-w-4xl items-center justify-between opacity-70 max-[1100px]:w-[95%]">
        <div className="text-[30px] max-[1100px]:text-[15px]">
          <span
            className="text-[41px] max-[1100px]:text-[20px]"
            style={{ color: THEME.COLORS.ACCENT }}
          >
            {SITE.initial}
          </span>
          {SITE.name.slice(1)}
        </div>
        <nav className="flex items-center gap-2 text-[16px] max-[1100px]:text-[11px]">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="inline-block rounded px-5 py-2.5 text-white transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
