import { escapeHtml } from "./string";

export interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Builds plain text and HTML bodies for the contact form email.
 * Escapes user content to prevent XSS when rendered as HTML.
 */
export function buildContactEmailBodies(payload: ContactEmailPayload): {
  subject: string;
  text: string;
  html: string;
} {
  const { name, email, message } = payload;
  const subject = `Portfolio contact from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const html = [
    "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>",
    "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>",
    "<p><strong>Message:</strong></p><p>" + escapeHtml(message).replace(/\n/g, "<br>") + "</p>",
  ].join("");
  return { subject, text, html };
}
