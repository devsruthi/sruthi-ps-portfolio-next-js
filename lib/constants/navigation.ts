import type { NavItem } from "@/lib/types";
import { SECTION_IDS } from "./section-ids";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "ABOUT ME", href: `#${SECTION_IDS.ABOUT}` },
  { label: "SKILLS", href: `#${SECTION_IDS.SKILLS}` },
  { label: "EXPERTISE", href: `#${SECTION_IDS.EXPERTISE}` },
  { label: "CONTACT", href: `#${SECTION_IDS.CONTACT}` },
] as const;
