"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactPage() {
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
      form.subject.trim().length >= 3 &&
      form.message.trim().length >= 10 &&
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
    if (form.subject.trim().length < 3) e.subject = "Subject is too short.";
    if (form.message.trim().length < 10)
      e.message = "Please add a bit more detail (min 10 chars).";
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

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
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
        message: "Message received ✅ We’ll get back to you as soon as possible.",
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
                Contact • Reach out • Let’s talk
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Let’s connect.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Have a question, want to partner, or need support? Send us a
                message and we’ll respond as soon as we can.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Send a message
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  View projects
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Partnerships", "Donations", "Volunteering", "General inquiry"].map(
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

            {/* SIDE CARDS */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                title="Email"
                items={["fansofafrica@gmail.com"]}
                hint="Fastest way to reach us"
              />

              <ContactCard
                title="Contact"
                items={[
                  "Fans of Africa, Inc., a US 501(c)3",
                  "Mike Leinneweber — Director of Outreach Services",
                  "Jerry Graeber — Treasurer",
                  "Emmanuel Agyapong — Teaching Staff",
                  "Johnson Antwi — Board Member",
                  "575-937-7101",
                ]}
                hint="Mon–Fri, 9am–5pm"
              />

              <ContactCard
                title="Location"
                items={["5306 26th Street, Lubbock Texas 79407"]}
                hint="Serving communities with local partners"
                wide
              />

              <ContactCard
                title="Socials"
                items={["@fansofafrica"]}
                hint="Follow and share stories"
                wide
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM + SUPPORT */}
      <section id="contact-form" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                      Send us a message
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                      We usually reply within a few days.
                    </p>
                  </div>

                  <div className="hidden sm:block rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                      Tip
                    </p>
                    <p className="mt-1 text-sm text-emerald-900/80">
                      Add your location + best time to reach you.
                    </p>
                  </div>
                </div>

                {done ? (
                  <div
                    className={[
                      "mt-6 rounded-2xl border p-4 text-sm sm:text-base",
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
                    placeholder="e.g. Mike Johnson"
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

                  <Field
                    fieldKey="subject"
                    label="Subject"
                    required
                    value={form.subject}
                    onChange={(v) => update("subject", v)}
                    placeholder="e.g. Partnership / Donation / Volunteering"
                    error={errors.subject}
                    autoComplete="off"
                  />

                  <Field
                    fieldKey="message"
                    label="Message"
                    required
                    value={form.message}
                    onChange={(v) => update("message", v)}
                    placeholder="Tell us what you need…"
                    error={errors.message}
                    textarea
                    autoComplete="off"
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
                    {submitting ? "Sending…" : "Send message"}
                  </button>

                  <p className="text-xs text-neutral-500">
                    By sending, you agree we can contact you back.
                  </p>
                </form>
              </div>
            </div>

            {/* SUPPORT / FAQ */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Quick help
                </p>

                <div className="mt-4 grid gap-4">
                  <MiniCard
                    title="Volunteering"
                    desc="Want to serve on a trip or remotely?"
                    href="/volunteers"
                  />
                  <MiniCard
                    title="Projects"
                    desc="See what we’re building and supporting."
                    href="/projects"
                  />
                  <MiniCard
                    title="About"
                    desc="Learn about our story and partners."
                    href="/about"
                  />
                </div>

                <div className="mt-8 grid gap-4">
                  <Faq
                    q="How soon will you respond?"
                    a="Usually within a few days depending on the team schedule."
                  />
                  <Faq
                    q="Can I partner as an organization?"
                    a="Yes. Send a message with your organization name and what you’d like to do."
                  />
                  <Faq
                    q="Do you accept in-kind donations?"
                    a="Sometimes. Please message us with the items and location so we can confirm."
                  />
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold text-emerald-900">
                  Make it easy for us ✅
                </p>
                <p className="mt-1 text-sm text-emerald-900/80">
                  Include: your location, availability, and the best contact
                  method.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  title,
  items,
  hint,
  wide = false,
}: {
  title: string;
  items: string[];
  hint: string;
  wide?: boolean;
}) {
  const isPhone = (v: string) => /^\+?\d[\d\s().-]{6,}$/.test(v.trim());
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  return (
    <div
      className={[
        "rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm",
        wide ? "sm:col-span-2" : "",
      ].join(" ")}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        {title}
      </div>

      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((v, idx) => {
          const trimmed = v.trim();

          // clickable email
          if (isEmail(trimmed)) {
            return (
              <li key={idx} className="leading-relaxed">
                <a
                  href={`mailto:${trimmed}`}
                  className="font-semibold text-neutral-900 hover:text-emerald-700"
                >
                  {trimmed}
                </a>
              </li>
            );
          }

          // clickable phone
          if (isPhone(trimmed)) {
            const tel = trimmed.replace(/[^\d+]/g, "");
            return (
              <li key={idx} className="leading-relaxed">
                <a
                  href={`tel:${tel}`}
                  className="font-semibold text-neutral-900 hover:text-emerald-700"
                >
                  {trimmed}
                </a>
              </li>
            );
          }

          return (
            <li key={idx} className="leading-relaxed">
              {idx === 0 ? (
                <span className="text-base font-semibold text-neutral-900">
                  {trimmed}
                </span>
              ) : (
                trimmed
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-3 text-sm text-neutral-600">{hint}</div>
    </div>
  );
}

function MiniCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-sm text-neutral-600">{desc}</div>
      <div className="mt-3 text-xs font-semibold text-emerald-700">Open →</div>
    </Link>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
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
  fieldKey: "name" | "email" | "subject" | "message";
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: string;
  textarea?: boolean;
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
}) {
  const id = `field-${fieldKey}`;

  return (
    <div data-field={fieldKey}>
      <label htmlFor={id} className="text-sm font-semibold text-neutral-900">
        {label} {required ? <span className="text-emerald-700">*</span> : null}
      </label>

      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          autoComplete={autoComplete ?? "off"}
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete ?? "off"}
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
