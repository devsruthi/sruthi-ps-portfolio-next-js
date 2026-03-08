"use server";

import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import type { ContactResult } from "@/lib/types";
import {
  CONTACT_CONFIG_ERRORS,
  CONTACT_LIMITS,
  CONTACT_LOG_MISSING_CREDENTIALS,
  CONTACT_VALIDATION_ERRORS,
} from "@/lib/constants";
import {
  buildContactEmailBodies,
  sanitizeString,
  validateEmail,
} from "@/lib/utils";

export async function sendContactForm(
  _prev: unknown,
  formData: FormData
): Promise<ContactResult> {
  const name = sanitizeString(
    String(formData.get("name") ?? ""),
    CONTACT_LIMITS.NAME_MAX_LENGTH
  );
  const email = sanitizeString(
    String(formData.get("email") ?? ""),
    CONTACT_LIMITS.EMAIL_MAX_LENGTH
  );
  const message = sanitizeString(
    String(formData.get("message") ?? ""),
    CONTACT_LIMITS.MESSAGE_MAX_LENGTH
  );

  if (!name) return { success: false, error: CONTACT_VALIDATION_ERRORS.NAME_REQUIRED };
  if (!email) return { success: false, error: CONTACT_VALIDATION_ERRORS.EMAIL_REQUIRED };
  if (!validateEmail(email, CONTACT_LIMITS.EMAIL_MAX_LENGTH)) {
    return { success: false, error: CONTACT_VALIDATION_ERRORS.EMAIL_INVALID };
  }
  if (!message) return { success: false, error: CONTACT_VALIDATION_ERRORS.MESSAGE_REQUIRED };

  const key = process.env.AWS_SES_KEY ?? process.env.AWS_ACCESS_KEY_ID;
  const secret = process.env.AWS_SES_SECRET ?? process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION ?? "us-east-1";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!key || !secret) {
    const isDev = process.env.NODE_ENV === "development";
    console.error(CONTACT_LOG_MISSING_CREDENTIALS);
    return {
      success: false,
      error: isDev
        ? CONTACT_CONFIG_ERRORS.NOT_CONFIGURED_DEV
        : CONTACT_CONFIG_ERRORS.NOT_CONFIGURED,
    };
  }
  if (!fromEmail || !toEmail) {
    console.error("Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL");
    return { success: false, error: CONTACT_CONFIG_ERRORS.NOT_CONFIGURED };
  }

  const client = new SESClient({
    region,
    credentials: { accessKeyId: key, secretAccessKey: secret },
  });

  const { subject, text, html } = buildContactEmailBodies({ name, email, message });

  try {
    await client.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: text, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
        ReplyToAddresses: [email],
      })
    );
    return { success: true };
  } catch (err) {
    console.error("SES send failed:", err);
    return { success: false, error: CONTACT_CONFIG_ERRORS.SEND_FAILED };
  }
}
