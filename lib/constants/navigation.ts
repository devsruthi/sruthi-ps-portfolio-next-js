import type { NavItem } from "@/lib/types";
import { SECTION_IDS } from "./section-ids";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: `#${SECTION_IDS.HOME}` },
  { label: "About me", href: `#${SECTION_IDS.ABOUT}` },
  { label: "Projects", href: `#${SECTION_IDS.PROJECTS}` },
  { label: "Skills", href: `#${SECTION_IDS.SKILLS}` },
] as const;
