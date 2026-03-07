export interface Site {
  readonly name: string;
  readonly initial: string;
}

export interface Hero {
  readonly title: string;
  readonly name: string;
  readonly intro: string;
}

export interface AboutField {
  readonly label: string;
  readonly value: string;
}

export interface About {
  readonly designation: string;
  readonly bio: string;
  readonly resumeUrl: string;
  readonly fields: readonly AboutField[];
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

export type ExpertiseList = readonly string[];
