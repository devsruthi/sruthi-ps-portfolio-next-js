import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getS3Client } from "./client";

export const PROFILE_IMAGE_S3_KEY = "about/profile.jpg";
const PRESIGN_GET_EXPIRES_IN = 86400 * 7; // 7 days

export async function uploadProfileImageToS3(
  body: Buffer | Uint8Array,
  contentType: string
): Promise<{ error?: string }> {
  const bucket = process.env.S3_BUCKET_NAME?.trim();
  if (!bucket) return { error: "S3_BUCKET_NAME is not set." };

  const client = getS3Client();
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: PROFILE_IMAGE_S3_KEY,
        Body: body,
        ContentType: contentType,
      })
    );
    return {};
  } catch (err) {
    console.error("S3 profile image upload failed:", err);
    return {
      error: err instanceof Error ? err.message : "Upload failed.",
    };
  }
}

export async function getPresignedProfileImageUrl(key: string): Promise<string | null> {
  const bucket = process.env.S3_BUCKET_NAME?.trim();
  if (!bucket) return null;
  try {
    const client = getS3Client();
    const url = await getSignedUrl(
      client,
      new GetObjectCommand({ Bucket: bucket, Key: key }),
      { expiresIn: PRESIGN_GET_EXPIRES_IN }
    );
    return url;
  } catch {
    return null;
  }
}
