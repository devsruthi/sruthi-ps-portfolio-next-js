export interface Site {
  readonly name: string;
  readonly initial: string;
  readonly title: string;
}

export interface SocialLinks {
  readonly github: string;
  readonly linkedin: string;
  readonly email: string;
}

export interface Hero {
  readonly title: string;
  readonly name: string;
  readonly intro: string;
  readonly stack: readonly string[];
}

export interface AboutField {
  readonly label: string;
  readonly value: string;
}

export interface About {
  readonly designation: string;
  readonly tagline: string;
  readonly bio: string;
  readonly lookingFor: string;
  readonly fields: readonly AboutField[];
}

export interface EducationItem {
  readonly degree: string;
  readonly school: string;
  readonly period: string;
}

export interface CareerHighlight {
  readonly title: string;
  readonly description: string;
}

export interface SkillItem {
  readonly name: string;
  readonly percentage: number;
}

export interface Skills {
  readonly description: string;
  readonly summary: string;
  readonly items: readonly SkillItem[];
}

export interface TechSkill {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
}

export interface SkillCard {
  readonly name: string;
  readonly description: string;
}

export type ExpertiseList = readonly string[];

export type ProjectCategory = "Apps" | "Websites" | "Mobile";

export interface ProjectFeature {
  readonly title: string;
  readonly description?: string;
}

export interface ProjectGoal {
  readonly title?: string;
  readonly problem: string;
  readonly resolved: string;
  /** Optional code example shown under the problem. */
  readonly problemCode?: string;
  /** Optional code example shown under what it resolved. */
  readonly resolvedCode?: string;
  /** Optional comparison / diagram image under the goal section. */
  readonly image?: string;
}

export interface ProjectFlow {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly images: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  /** Short blurb shown on the portfolio projects grid card. */
  readonly cardDescription?: string;
  /** Optional tagline under the project title on the detail page. */
  readonly tagline?: string;
  readonly stack: readonly string[];
  readonly category: ProjectCategory;
  /** Primary image on the project detail page. */
  readonly image: string;
  /** Optional gallery images shown on the project detail page. */
  readonly gallery?: readonly string[];
  /** Optional override image for the projects grid card. */
  readonly cardImage?: string;
  /** Feature highlights for the project detail page. */
  readonly features?: readonly ProjectFeature[];
  /** Goal / problem / what it resolved — shown before key features. */
  readonly goal?: ProjectGoal;
  /** Customer / seller (or similar) flow sections. */
  readonly flows?: readonly ProjectFlow[];
  /** Optional heading above the dual-flow sections. */
  readonly flowsHeading?: string;
  /** Optional intro copy under the flows heading. */
  readonly flowsIntro?: string;
  /** Public website / demo URL shown on the project detail page. */
  readonly websiteUrl?: string;
  /** Optional npm package page. */
  readonly npmUrl?: string;
  readonly githubUrl?: string;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}
