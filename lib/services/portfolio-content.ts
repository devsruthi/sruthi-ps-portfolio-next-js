import { cache } from "react";
import { getSupabaseServerClient } from "@/lib/db/supabase-server";
import { TABLES } from "@/lib/constants";
import type {
  AboutRow,
  AboutUpdate,
  ExpertiseRow,
  ExpertiseUpdate,
  HeroRow,
  HeroUpdate,
  SkillItemRow,
  SkillsRow,
  SkillsUpdate,
} from "@/lib/types/db";

/**
 * Hero (basic details) for the portfolio. Cached per request so layout and page
 * can both call getHero() without duplicate queries.
 */
export const getHero = cache(async (): Promise<HeroRow | null> => {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from(TABLES.HERO)
    .select("id, name, intro, created_at, updated_at")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Supabase hero fetch failed:", error);
    return null;
  }
  return data as HeroRow | null;
});

/**
 * Update hero (basic details). Server-only; use from Server Actions.
 */
export async function updateHero(payload: HeroUpdate): Promise<{ error?: string }> {
  const supabase = getSupabaseServerClient();
  const { data: existing } = await supabase
    .from(TABLES.HERO)
    .select("id")
    .limit(1)
    .maybeSingle();

  const name = payload.name?.trim() ?? "";
  const intro = payload.intro?.trim() ?? "";
  if (!name) return { error: "Name is required." };
  if (!intro) return { error: "Introduction is required." };

  if (existing?.id) {
    const { error } = await supabase
      .from(TABLES.HERO)
      .update({ name, intro })
      .eq("id", existing.id);
    if (error) {
      console.error("Supabase hero update failed:", error);
      return { error: error.message };
    }
  } else {
    const { error } = await supabase.from(TABLES.HERO).insert({ name, intro });
    if (error) {
      console.error("Supabase hero insert failed:", error);
      return { error: error.message };
    }
  }
  return {};
}

/**
 * About section for the portfolio. Cached per request.
 */
export const getAbout = cache(async (): Promise<AboutRow | null> => {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from(TABLES.ABOUT)
    .select("id, designation, bio, fields, created_at, updated_at")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Supabase about fetch failed:", error);
    return null;
  }
  if (!data) return null;
  const row = data as AboutRow;
  if (!Array.isArray(row.fields)) row.fields = [];
  return row;
});

/**
 * Update about section. Server-only.
 */
export async function updateAbout(payload: AboutUpdate): Promise<{ error?: string }> {
  const supabase = getSupabaseServerClient();
  const { data: existing } = await supabase
    .from(TABLES.ABOUT)
    .select("id")
    .limit(1)
    .maybeSingle();

  const designation = payload.designation?.trim() ?? "";
  const bio = payload.bio?.trim() ?? "";
  const fields = Array.isArray(payload.fields)
    ? payload.fields.filter((f) => f?.label?.trim() || f?.value?.trim()).map((f) => ({ label: String(f.label).trim(), value: String(f.value).trim() }))
    : [];

  if (!designation) return { error: "Designation (title) is required." };
  if (!bio) return { error: "Bio (description) is required." };

  if (existing?.id) {
    const { error } = await supabase
      .from(TABLES.ABOUT)
      .update({ designation, bio, fields })
      .eq("id", existing.id);
    if (error) {
      console.error("Supabase about update failed:", error);
      return { error: error.message };
    }
  } else {
    const { error } = await supabase.from(TABLES.ABOUT).insert({ designation, bio, fields });
    if (error) {
      console.error("Supabase about insert failed:", error);
      return { error: error.message };
    }
  }
  return {};
}

const SKILLS_PERCENTAGE_MIN = 0;
const SKILLS_PERCENTAGE_MAX = 100;

/**
 * Skills section for the portfolio. Cached per request.
 */
export const getSkills = cache(async (): Promise<SkillsRow | null> => {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from(TABLES.SKILLS)
    .select("id, title, description, items, created_at, updated_at")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Supabase skills fetch failed:", error);
    return null;
  }
  if (!data) return null;
  const row = data as SkillsRow;
  if (!Array.isArray(row.items)) row.items = [];
  return row;
});

/**
 * Update skills section. Server-only. Validates percentage in 0–100.
 */
export async function updateSkills(payload: SkillsUpdate): Promise<{ error?: string }> {
  const supabase = getSupabaseServerClient();
  const { data: existing } = await supabase
    .from(TABLES.SKILLS)
    .select("id")
    .limit(1)
    .maybeSingle();

  const title = payload.title?.trim() ?? "";
  const description = payload.description?.trim() ?? "";
  const rawItems = Array.isArray(payload.items) ? payload.items : [];
  const items: SkillItemRow[] = [];
  for (const item of rawItems) {
    const name = String(item?.name ?? "").trim();
    if (!name) continue;
    let pct = Number(item?.percentage);
    if (Number.isNaN(pct)) pct = 0;
    pct = Math.max(SKILLS_PERCENTAGE_MIN, Math.min(SKILLS_PERCENTAGE_MAX, Math.round(pct)));
    items.push({ name, percentage: pct });
  }

  if (!title) return { error: "Skill title is required." };
  if (!description) return { error: "Skill description is required." };

  if (existing?.id) {
    const { error } = await supabase
      .from(TABLES.SKILLS)
      .update({ title, description, items })
      .eq("id", existing.id);
    if (error) {
      console.error("Supabase skills update failed:", error);
      return { error: error.message };
    }
  } else {
    const { error } = await supabase.from(TABLES.SKILLS).insert({ title, description, items });
    if (error) {
      console.error("Supabase skills insert failed:", error);
      return { error: error.message };
    }
  }
  return {};
}

/**
 * Expertise section for the portfolio. Cached per request.
 */
export const getExpertise = cache(async (): Promise<ExpertiseRow | null> => {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from(TABLES.EXPERTISE)
    .select("id, items, created_at, updated_at")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Supabase expertise fetch failed:", error);
    return null;
  }
  if (!data) return null;
  const row = data as ExpertiseRow;
  if (!Array.isArray(row.items)) row.items = [];
  return row;
});

/**
 * Update expertise section. Server-only.
 */
export async function updateExpertise(payload: ExpertiseUpdate): Promise<{ error?: string }> {
  const supabase = getSupabaseServerClient();
  const { data: existing } = await supabase
    .from(TABLES.EXPERTISE)
    .select("id")
    .limit(1)
    .maybeSingle();

  const items = Array.isArray(payload.items)
    ? payload.items.map((s) => String(s ?? "").trim()).filter(Boolean)
    : [];

  if (existing?.id) {
    const { error } = await supabase
      .from(TABLES.EXPERTISE)
      .update({ items })
      .eq("id", existing.id);
    if (error) {
      console.error("Supabase expertise update failed:", error);
      return { error: error.message };
    }
  } else {
    const { error } = await supabase.from(TABLES.EXPERTISE).insert({ items });
    if (error) {
      console.error("Supabase expertise insert failed:", error);
      return { error: error.message };
    }
  }
  return {};
}
