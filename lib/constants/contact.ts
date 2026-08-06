/** Field length limits for contact form (validation and input maxLength). */
export const CONTACT_LIMITS = {
  NAME_MAX_LENGTH: 120,
  EMAIL_MAX_LENGTH: 254,
  MESSAGE_MAX_LENGTH: 5000,
} as const;

/** Form labels and button/success copy. */
export const CONTACT_FORM_LABELS = {
  name: "Your Name",
  email: "Your Email",
  message: "Your message",
  submit: "Send Message",
  sending: "Sending…",
  success: "Thanks! Your message was sent.",
} as const;

/** Placeholders for contact inputs. */
export const CONTACT_PLACEHOLDERS = {
  name: "Your Name",
  email: "Your Email",
  message: "Your message",
} as const;

/** Tailwind class names for contact form UI. */
export const CONTACT_FORM_CLASSES = {
  input:
    "w-full rounded-xl border border-white/10 bg-[#12141c] px-5 py-3.5 text-white placeholder-white/35 transition focus:border-[#00d8ff] focus:outline-none focus:ring-1 focus:ring-[#00d8ff]/40",
  label: "sr-only",
  textarea: "resize-y min-h-[140px]",
  submitButton:
    "w-full cursor-pointer rounded-full bg-[#00d8ff] px-8 py-3.5 text-[15px] font-semibold text-[#0a0b10] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60",
} as const;

/** Validation error messages returned to the user. */
export const CONTACT_VALIDATION_ERRORS = {
  NAME_REQUIRED: "Name is required.",
  EMAIL_REQUIRED: "Email is required.",
  EMAIL_INVALID: "Please enter a valid email address.",
  MESSAGE_REQUIRED: "Message is required.",
} as const;

/** Configuration/backend error messages. */
export const CONTACT_CONFIG_ERRORS = {
  NOT_CONFIGURED: "Contact form is not configured. Please try again later.",
  NOT_CONFIGURED_DEV:
    "Contact form not configured. Add AWS_SES_KEY and AWS_SES_SECRET to .env.local in the project root, then restart the dev server (npm run dev).",
  SEND_FAILED: "Failed to send message. Please try again or email directly.",
} as const;

/** Console log message when AWS credentials are missing. */
export const CONTACT_LOG_MISSING_CREDENTIALS =
  "Missing AWS credentials. Set AWS_SES_KEY + AWS_SES_SECRET (or AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY) in .env.local and restart the dev server.";
