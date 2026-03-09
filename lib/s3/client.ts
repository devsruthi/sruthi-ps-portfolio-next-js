import { S3Client } from "@aws-sdk/client-s3";

let cachedClient: S3Client | null = null;

export function getS3Client(): S3Client {
  if (cachedClient) return cachedClient;
  const region = process.env.AWS_REGION ?? "us-east-1";
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  if (!accessKeyId?.trim() || !secretAccessKey?.trim()) {
    throw new Error("S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY are required.");
  }
  cachedClient = new S3Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });
  return cachedClient;
}
