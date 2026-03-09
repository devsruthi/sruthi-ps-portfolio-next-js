"use server";

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const RESUME_OBJECT_KEY = "sruthi-resume.pdf";
const PRESIGN_EXPIRES_IN = 60; // seconds

export type GetPresignedResumeUrlResult =
  | { ok: true; url: string }
  | { ok: false; error: string };

export async function getPresignedResumeUrl(): Promise<GetPresignedResumeUrlResult> {
  const bucket = process.env.S3_BUCKET_NAME;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION ?? "us-east-1";

  if (!bucket?.trim()) {
    return { ok: false, error: "S3 bucket is not configured." };
  }
  if (!accessKeyId?.trim() || !secretAccessKey?.trim()) {
    return { ok: false, error: "S3 credentials are not configured." };
  }

  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: RESUME_OBJECT_KEY,
    ResponseContentDisposition: 'attachment; filename="sruthi-resume.pdf"',
  });

  try {
    const url = await getSignedUrl(client, command, { expiresIn: PRESIGN_EXPIRES_IN });
    return { ok: true, url };
  } catch (err) {
    console.error("Presigned resume URL failed:", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Failed to generate download link.",
    };
  }
}
