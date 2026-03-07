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
      <div className="flex w-[60%] max-w-4xl items-center justify-between gap-2 opacity-70 max-[1100px]:w-[95%] max-[1100px]:gap-1">
        <div className="shrink-0 text-[30px] max-[1100px]:text-[15px] max-[480px]:text-[12px]">
          <span
            className="text-[41px] max-[1100px]:text-[20px] max-[480px]:text-[16px]"
            style={{ color: THEME.COLORS.ACCENT }}
          >
            {SITE.initial}
          </span>
          {SITE.name.slice(1)}
        </div>
        <nav className="flex shrink-0 items-center justify-end gap-2 text-[16px] max-[1100px]:flex-nowrap max-[1100px]:gap-1 max-[1100px]:text-[11px] max-[480px]:gap-0.5 max-[480px]:text-[9px]">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="whitespace-nowrap rounded px-5 py-2.5 text-white transition-transform duration-300 hover:scale-110 focus-visible:scale-110 max-[1100px]:px-2 max-[1100px]:py-1.5 max-[480px]:px-1.5 max-[480px]:py-1"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
