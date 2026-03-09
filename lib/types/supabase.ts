import type {
  AboutRow,
  AboutUpdate,
  ContactMessageInsert,
  ExpertiseRow,
  ExpertiseUpdate,
  HeroRow,
  HeroUpdate,
  SkillsRow,
  SkillsUpdate,
} from "./db";

/** Row returned from contact_messages (with generated columns). */
export type ContactMessageRow = ContactMessageInsert & {
  id: string;
  created_at: string;
};

/**
 * Minimal Supabase Database type. Extend when adding tables.
 */
export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: ContactMessageRow;
        Insert: ContactMessageInsert;
        Update: Partial<ContactMessageInsert>;
      };
      hero: {
        Row: HeroRow;
        Insert: HeroUpdate;
        Update: Partial<HeroUpdate>;
      };
      about: {
        Row: AboutRow;
        Insert: AboutUpdate & { profile_image_key?: string | null };
        Update: Partial<AboutUpdate> & { profile_image_key?: string | null };
      };
      skills: {
        Row: SkillsRow;
        Insert: SkillsUpdate;
        Update: Partial<SkillsUpdate>;
      };
      expertise: {
        Row: ExpertiseRow;
        Insert: ExpertiseUpdate;
        Update: Partial<ExpertiseUpdate>;
      };
    };
  };
}
