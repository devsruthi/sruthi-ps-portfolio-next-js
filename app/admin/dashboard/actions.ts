"use server";

import { revalidatePath } from "next/cache";
import {
  updateHero,
  updateAbout,
  updateSkills,
  updateExpertise,
  updateAboutProfileImageKey,
} from "@/lib/services/portfolio-content";
import { uploadProfileImageToS3, PROFILE_IMAGE_S3_KEY } from "@/lib/s3/profile-image";
import { uploadResumeToS3 } from "@/lib/s3/resume";
import type { AboutInfoItem, SkillItemRow } from "@/lib/types/db";

export async function updateHeroSection(formData: FormData): Promise<{ error?: string }> {
  const name = String(formData.get("name") ?? "").trim();
  const intro = String(formData.get("intro") ?? "").trim();
  const result = await updateHero({ name, intro });
  if (!result.error) {
    revalidatePath("/");
    revalidatePath("/admin/dashboard/hero");
  }
  return result;
}

export async function updateAboutSection(formData: FormData): Promise<{ error?: string }> {
  const designation = String(formData.get("designation") ?? "").trim();
  const bio = String(formData.get("bio") ?? "").trim();
  let fields: AboutInfoItem[] = [];
  try {
    const raw = formData.get("fields_json");
    if (typeof raw === "string" && raw) {
      const parsed = JSON.parse(raw) as unknown;
      fields = Array.isArray(parsed)
        ? parsed.map((p) => ({
            label: String((p as { label?: string }).label ?? "").trim(),
            value: String((p as { value?: string }).value ?? "").trim(),
          }))
        : [];
    }
  } catch {
    fields = [];
  }
  const result = await updateAbout({ designation, bio, fields });
  if (!result.error) {
    revalidatePath("/");
    revalidatePath("/admin/dashboard/about");
  }
  return result;
}

export async function updateSkillsSection(formData: FormData): Promise<{ error?: string }> {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  let items: SkillItemRow[] = [];
  try {
    const raw = formData.get("items_json");
    if (typeof raw === "string" && raw) {
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) {
        items = parsed.map((p) => {
          const name = String((p as { name?: string }).name ?? "").trim();
          let percentage = Number((p as { percentage?: number }).percentage);
          if (Number.isNaN(percentage)) percentage = 0;
          percentage = Math.max(0, Math.min(100, Math.round(percentage)));
          return { name, percentage };
        });
      }
    }
  } catch {
    items = [];
  }
  const result = await updateSkills({ title, description, items });
  if (!result.error) {
    revalidatePath("/");
    revalidatePath("/admin/dashboard/skills");
  }
  return result;
}

export async function updateExpertiseSection(formData: FormData): Promise<{ error?: string }> {
  let items: string[] = [];
  try {
    const raw = formData.get("items_json");
    if (typeof raw === "string" && raw) {
      const parsed = JSON.parse(raw) as unknown;
      items = Array.isArray(parsed)
        ? parsed.map((p) => String(p ?? "").trim()).filter(Boolean)
        : [];
    }
  } catch {
    items = [];
  }
  const result = await updateExpertise({ items });
  if (!result.error) {
    revalidatePath("/");
    revalidatePath("/admin/dashboard/expertise");
  }
  return result;
}

export async function uploadProfileImage(formData: FormData): Promise<{ error?: string }> {
  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return { error: "No image file provided." };
  }
  const contentType = file.type || "image/jpeg";
  if (!contentType.startsWith("image/")) {
    return { error: "File must be an image." };
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadResult = await uploadProfileImageToS3(buffer, contentType);
  if (uploadResult.error) return uploadResult;
  const updateResult = await updateAboutProfileImageKey(PROFILE_IMAGE_S3_KEY);
  if (updateResult.error) return updateResult;
  revalidatePath("/");
  revalidatePath("/admin/dashboard/about");
  return {};
}

const PDF_MIME = "application/pdf";

export async function uploadResume(formData: FormData): Promise<{ error?: string }> {
  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return { error: "No file provided." };
  }
  const type = (file.type || "").toLowerCase();
  const name = (file.name || "").toLowerCase();
  if (type !== PDF_MIME && !name.endsWith(".pdf")) {
    return { error: "Only PDF files are allowed." };
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadResult = await uploadResumeToS3(buffer);
  if (uploadResult.error) return uploadResult;
  revalidatePath("/");
  revalidatePath("/admin/dashboard/about");
  return {};
}
