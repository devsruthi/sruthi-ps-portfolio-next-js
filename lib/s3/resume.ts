import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getS3Client } from "./client";

export const RESUME_OBJECT_KEY = "sruthi-resume.pdf";
const CONTENT_TYPE = "application/pdf";

export async function uploadResumeToS3(
  body: Buffer | Uint8Array
): Promise<{ error?: string }> {
  const bucket = process.env.S3_BUCKET_NAME?.trim();
  if (!bucket) return { error: "S3_BUCKET_NAME is not set." };

  const client = getS3Client();
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: RESUME_OBJECT_KEY,
        Body: body,
        ContentType: CONTENT_TYPE,
      })
    );
    return {};
  } catch (err) {
    console.error("S3 resume upload failed:", err);
    return {
      error: err instanceof Error ? err.message : "Upload failed.",
    };
  }
}
