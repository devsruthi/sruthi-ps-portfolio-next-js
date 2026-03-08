"use client";

import { useActionState, useEffect, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  CONTACT_FORM_CLASSES,
  CONTACT_FORM_LABELS,
  CONTACT_LIMITS,
  CONTACT_PLACEHOLDERS,
  SECTION_IDS,
  THEME,
} from "@/lib/constants";
import { sendContactForm } from "@/app/actions/contact";

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendContactForm, null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      const t = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(t);
    }
  }, [state?.success]);

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="mx-auto mt-12 mb-0 w-[60%] pb-[280px] text-center max-[1100px]:w-[90%]"
    >
      <SectionTitle label="CONTACT" />
      <div className="mx-auto max-w-xl pt-2 text-left">
        {showSuccess && state?.success && (
          <p
            className="mb-4 rounded-lg border border-green-500/50 bg-green-500/10 px-4 py-3 text-green-300"
            role="status"
          >
            {CONTACT_FORM_LABELS.success}
          </p>
        )}
        {state && !state.success && state.error && (
          <p
            className="mb-4 rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-red-300"
            role="alert"
          >
            {state.error}
          </p>
        )}
        <form
          key={state?.success ? "sent" : "form"}
          action={formAction}
          className="flex flex-col gap-4"
        >
          <div>
            <label htmlFor="contact-name" className={CONTACT_FORM_CLASSES.label}>
              {CONTACT_FORM_LABELS.name}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              maxLength={CONTACT_LIMITS.NAME_MAX_LENGTH}
              autoComplete="name"
              placeholder={CONTACT_PLACEHOLDERS.name}
              disabled={isPending}
              className={CONTACT_FORM_CLASSES.input}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={CONTACT_FORM_CLASSES.label}>
              {CONTACT_FORM_LABELS.email}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              maxLength={CONTACT_LIMITS.EMAIL_MAX_LENGTH}
              autoComplete="email"
              placeholder={CONTACT_PLACEHOLDERS.email}
              disabled={isPending}
              className={CONTACT_FORM_CLASSES.input}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className={CONTACT_FORM_CLASSES.label}>
              {CONTACT_FORM_LABELS.message}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={CONTACT_LIMITS.MESSAGE_MAX_LENGTH}
              rows={5}
              placeholder={CONTACT_PLACEHOLDERS.message}
              disabled={isPending}
              className={`${CONTACT_FORM_CLASSES.input} ${CONTACT_FORM_CLASSES.textarea}`}
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={CONTACT_FORM_CLASSES.submitButton}
            style={{ backgroundColor: THEME.COLORS.ACCENT }}
          >
            {isPending ? CONTACT_FORM_LABELS.sending : CONTACT_FORM_LABELS.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
