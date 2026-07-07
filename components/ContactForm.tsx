"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  submitContact,
  type ContactFormState,
  type FieldErrorCode,
} from "@/app/actions";
import { useI18n } from "@/lib/i18n";
import { IconCheck } from "@/components/icons";
import type { Dict } from "@/lib/i18n/dictionaries";

const INITIAL_STATE: ContactFormState = { status: "idle", fieldErrors: {} };

function SubmitButton({ t }: { t: Dict }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? t.form.sending : t.form.submit}
    </button>
  );
}

function fieldMessage(t: Dict, code: FieldErrorCode | undefined, field: "name" | "email" | "message"): string | undefined {
  if (!code) return undefined;
  if (field === "name") return t.form.errNameRequired;
  if (field === "message") return t.form.errMessageRequired;
  return code === "invalid" ? t.form.errEmailInvalid : t.form.errEmailRequired;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-rose-600 dark:text-rose-400">{message}</p>;
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-brand-500";

export default function ContactForm() {
  const { t } = useI18n();
  const [state, formAction] = useFormState(submitContact, INITIAL_STATE);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">{t.form.successTitle}</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">{t.form.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {t.form.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.form.namePlaceholder}
            aria-invalid={Boolean(state.fieldErrors.name)}
            className={inputClass}
          />
          <FieldError message={fieldMessage(t, state.fieldErrors.name, "name")} />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {t.form.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.form.emailPlaceholder}
            aria-invalid={Boolean(state.fieldErrors.email)}
            className={inputClass}
          />
          <FieldError message={fieldMessage(t, state.fieldErrors.email, "email")} />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {t.form.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder={t.form.messagePlaceholder}
            aria-invalid={Boolean(state.fieldErrors.message)}
            className={`${inputClass} resize-y`}
          />
          <FieldError message={fieldMessage(t, state.fieldErrors.message, "message")} />
        </div>

        {state.status === "error" && (
          <p
            className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-300"
            role="alert"
          >
            {t.form.errorSummary}
          </p>
        )}

        <SubmitButton t={t} />
      </div>
    </form>
  );
}
