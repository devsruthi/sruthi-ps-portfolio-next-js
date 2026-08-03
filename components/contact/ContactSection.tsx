"use client";

import { useActionState, useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  CONTACT_FORM_CLASSES,
  CONTACT_FORM_LABELS,
  CONTACT_LIMITS,
  CONTACT_PLACEHOLDERS,
  SECTION_IDS,
  SOCIAL,
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
      className="mx-auto w-full max-w-[1120px] px-5 py-20 md:px-8 md:py-28"
    >
      <ScrollReveal variant="up" className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let&apos;s <span className="text-[#00d8ff]">[work]</span> together
        </h2>
        <p className="mt-3 text-base text-white/55">
          Open to Working Student (Werkstudent) or Software Engineering
          Internship opportunities in Germany. Fluent English · German A2.
        </p>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={120} className="mx-auto mt-12 max-w-md">
        {showSuccess && state?.success && (
          <p
            className="mb-4 rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-300"
            role="status"
          >
            {CONTACT_FORM_LABELS.success}
          </p>
        )}
        {state && !state.success && state.error && (
          <p
            className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
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
            <label
              htmlFor="contact-message"
              className={CONTACT_FORM_CLASSES.label}
            >
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
          >
            {isPending
              ? CONTACT_FORM_LABELS.sending
              : CONTACT_FORM_LABELS.submit}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/40">
          Or reach me at{" "}
          <a
            href={`mailto:${SOCIAL.email}`}
            className="text-[#00d8ff] hover:underline"
          >
            {SOCIAL.email}
          </a>
        </p>
      </ScrollReveal>
    </section>
  );
}
