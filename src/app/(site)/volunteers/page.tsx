"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  note: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  note: "",
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isPhoneValid(value: string) {
  return /^\+?\d{7,15}$/.test(value.trim());
}

// keep only digits + (but + only allowed at first char)
function sanitizePhone(value: string) {
  const cleaned = value.replace(/[^\d+]/g, "");
  const startsPlus = cleaned.startsWith("+");
  const digitsOnly = cleaned.replace(/\+/g, "");
  return startsPlus ? `+${digitsOnly}` : digitsOnly;
}

export default function VolunteersPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isEmailValid(form.email) &&
      isPhoneValid(form.phone) &&
      isPhoneValid(form.whatsapp) &&
      !submitting
    );
  }, [form, submitting]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
    setDone(null);
  }

  function validateAll(): FieldErrors {
    const e: FieldErrors = {};

    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!isEmailValid(form.email)) e.email = "Please enter a valid email.";

    if (!isPhoneValid(form.phone)) {
      e.phone = "Phone must be numbers only (optional +).";
    }

    if (!isPhoneValid(form.whatsapp)) {
      e.whatsapp = "WhatsApp must be numbers only (optional +).";
    }

    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();

    const e = validateAll();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      const firstKey = Object.keys(e)[0] as keyof FormState;
      const el = document.querySelector(`[data-field="${firstKey}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          whatsapp: form.whatsapp.trim(),
          note: form.note.trim(),
        }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data?.ok) {
        setDone({
          ok: false,
          message:
            data?.message ||
            "Something went wrong. Please try again in a moment.",
        });
        return;
      }

      setDone({
        ok: true,
        message:
          "Thanks! Your volunteer request has been submitted. We’ll reach out soon.",
      });

      setForm(INITIAL);
      setErrors({});
    } catch {
      setDone({
        ok: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Volunteer • Serve • Impact
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Become a volunteer and help us build lasting impact.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Fans of Africa partners with local communities to support
                education and empower families. Your time, skills, and support
                can change lives.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#volunteer-form"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Apply to volunteer
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  See projects
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Education support", "Outreach", "Mentorship", "Giving"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Side card */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                What volunteering looks like
              </p>

              <ul className="mt-4 space-y-3 text-sm text-neutral-700 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  Clear roles: on-ground support, teaching support, admin help,
                  fundraising, content.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  Flexible commitment: one-time, short-term, or ongoing.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  Transparent updates: you’ll know what your help achieved.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">Tip:</p>
                <p className="mt-1 text-sm text-emerald-900/80">
                  If you have a specific skill (teaching, design, media,
                  logistics), mention it in the note field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY + WAYS */}
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Ways you can help
              </h2>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                Choose something that matches your time and strengths.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              <InfoCard
                title="Community Outreach"
                desc="Support programs for families and youth through practical service."
              />
              <InfoCard
                title="Education Support"
                desc="Assist learning programs, reading support, mentorship, and supplies."
              />
              <InfoCard
                title="Admin & Operations"
                desc="Help organize volunteers, communications, and reporting."
              />
              <InfoCard
                title="Media & Fundraising"
                desc="Create content, tell stories, and help us raise resources."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="volunteer-form" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Volunteer Application Form
            </h2>
            <p className="mt-2 text-sm text-neutral-600 sm:text-base">
              Fill this form and we’ll reach out.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            {done ? (
              <div
                className={[
                  "rounded-2xl border p-4 text-sm sm:text-base",
                  done.ok
                    ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "border-amber-200 bg-amber-50 text-amber-900",
                ].join(" ")}
                role="status"
                aria-live="polite"
              >
                {done.message}
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="mt-6 grid gap-5">
              <Field
                fieldKey="name"
                label="Full name"
                required
                value={form.name}
                onChange={(v) => update("name", v)}
                placeholder="e.g. David Kwesi Sam"
                error={errors.name}
                autoComplete="name"
              />

              <Field
                fieldKey="email"
                label="Email"
                required
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder="e.g. you@example.com"
                error={errors.email}
                autoComplete="email"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  fieldKey="phone"
                  label="Contact number"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(v) => update("phone", sanitizePhone(v))}
                  placeholder="e.g. +233XXXXXXXXX"
                  error={errors.phone}
                  inputMode="tel"
                  autoComplete="tel"
                />

                <Field
                  fieldKey="whatsapp"
                  label="WhatsApp number"
                  required
                  type="tel"
                  value={form.whatsapp}
                  onChange={(v) => update("whatsapp", sanitizePhone(v))}
                  placeholder="e.g. +233XXXXXXXXX"
                  error={errors.whatsapp}
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>

              <Field
                fieldKey="note"
                label="Note (optional)"
                value={form.note}
                onChange={(v) => update("note", v)}
                placeholder="Tell us how you’d like to help (skills, availability, location)…"
                textarea
              />

              <button
                type="submit"
                disabled={!canSubmit}
                className={[
                  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition",
                  canSubmit
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "cursor-not-allowed bg-neutral-200 text-neutral-500",
                ].join(" ")}
              >
                {submitting ? "Submitting…" : "Submit application"}
              </button>

              <p className="text-xs text-neutral-500">
                By submitting, you agree to be contacted about volunteering.
              </p>
            </form>
          </div>

          {/* FAQ */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <Faq
                q="How soon will you respond?"
                a="Usually within a few days, depending on the team schedule."
              />
              <Faq
                q="Can I volunteer remotely?"
                a="Yes — media, admin, fundraising, and planning can be remote."
              />
              <Faq
                q="Do I need experience?"
                a="Not always. Just be willing to learn and show up consistently."
              />
              <Faq
                q="What should I write in the note?"
                a="Your skills, availability (days/times), and what area you want to support."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-2 text-sm text-neutral-600">{desc}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-neutral-900">{q}</div>
      <div className="mt-2 text-sm text-neutral-600">{a}</div>
    </div>
  );
}

function Field({
  fieldKey,
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  type = "text",
  textarea = false,
  inputMode,
  autoComplete,
}: {
  fieldKey: "name" | "email" | "phone" | "whatsapp" | "note";
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  textarea?: boolean;
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
}) {
  const id = `vol-${fieldKey}`;

  return (
    <div data-field={fieldKey}>
      <label htmlFor={id} className="text-sm font-semibold text-neutral-900">
        {label} {required ? <span className="text-emerald-700">*</span> : null}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={fieldKey}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={[
            "mt-2 w-full rounded-xl border bg-white p-3 text-sm text-neutral-900 shadow-sm outline-none transition",
            error
              ? "border-amber-400 focus:border-amber-500"
              : "border-neutral-200 focus:border-emerald-400",
          ].join(" ")}
        />
      ) : (
        <input
          id={id}
          name={fieldKey}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          inputMode={inputMode}
          {...(autoComplete ? { autoComplete } : {})}
          className={[
            "mt-2 w-full rounded-xl border bg-white p-3 text-sm text-neutral-900 shadow-sm outline-none transition",
            error
              ? "border-amber-400 focus:border-amber-500"
              : "border-neutral-200 focus:border-emerald-400",
          ].join(" ")}
        />
      )}

      {error ? <p className="mt-2 text-xs text-amber-700">{error}</p> : null}
    </div>
  );
}
