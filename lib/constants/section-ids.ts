/** Section IDs used for anchor links and section elements. Single source of truth. */
export const SECTION_IDS = {
  ABOUT: "about_me",
  SKILLS: "skills",
  EXPERTISE: "expertise",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
