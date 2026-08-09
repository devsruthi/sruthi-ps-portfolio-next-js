/** Section IDs used for anchor links and section elements. Single source of truth. */
export const SECTION_IDS = {
  HOME: "home",
  ABOUT: "about_me",
  SKILLS: "skills",
  PROJECTS: "projects",
  ACHIEVEMENTS: "achievements",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
