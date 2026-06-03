"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { CONTACT, FORMSPREE_ACTION } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-3 text-sm text-on-ink transition-colors duration-200 placeholder:text-on-ink-soft/60 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-bg";

const labelBase = "mb-1.5 block text-sm font-medium text-on-ink";

function RequiredMark() {
  return (
    <span className="text-accent" aria-hidden="true">
      {" *"}
    </span>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ink-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ── Left: invitation + real contact methods ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="eyebrow gradient-text mb-5">Get in touch</p>
            <h2 className="font-display text-4xl leading-[1.05] text-on-ink md:text-5xl">
              Tell me what you&apos;re trying to build.
            </h2>
            <p className="mt-5 max-w-[42ch] text-lg leading-[1.65] text-on-ink-soft">
              Send a few sentences about the project and I&apos;ll write back
              within a day with honest thoughts on how I&apos;d approach it
              &mdash; no sales call required.
            </p>

            <div className="mt-10 border-t border-hairline-on-ink pt-8">
              <dl className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <dt className="flex items-center gap-2">
                    <Mail
                      className="h-4 w-4 shrink-0 self-center text-on-ink-soft"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="eyebrow text-on-ink-soft/70">Email</span>
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="link-underline font-medium text-on-ink"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline gap-3">
                  <dt className="flex items-center gap-2">
                    <Phone
                      className="h-4 w-4 shrink-0 self-center text-on-ink-soft"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="eyebrow text-on-ink-soft/70">Phone</span>
                  </dt>
                  <dd>
                    <a
                      href={CONTACT.phoneHref}
                      className="link-underline tnum font-medium text-on-ink"
                    >
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* ── Right: the form ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="rounded-xl border border-hairline-on-ink bg-ink-bg-2 p-7 md:p-10"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelBase}>
                    Name
                    <RequiredMark />
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelBase}>
                    Email
                    <RequiredMark />
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="business" className={labelBase}>
                    Business{" "}
                    <span className="text-on-ink-soft/60">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    autoComplete="organization"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="service" className={labelBase}>
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className={`${inputBase} appearance-none bg-[length:0.7rem] bg-[right_0.9rem_center] bg-no-repeat pr-9 [background-image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23aab0c0%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]`}
                  >
                    <option value="">Not sure yet</option>
                    <option value="new-website">A new website</option>
                    <option value="ai-system">An AI system or automation</option>
                    <option value="ecommerce">An online store</option>
                    <option value="add-ai">Add AI to an existing site</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={labelBase}>
                  A bit about the project
                  <RequiredMark />
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What does your business do, where does it stand today, and what would make this a win?"
                  className={`${inputBase} min-h-[120px] resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-bg-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>

              <p
                aria-live="polite"
                className="mt-4 min-h-[1.25rem] text-center text-sm"
              >
                {status === "success" && (
                  <span className="text-on-ink-soft">
                    Thanks &mdash; your message is in. I&apos;ll be in touch
                    within a day.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-on-ink-soft">
                    Something went wrong sending that. Please email me directly
                    at{" "}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="link-underline font-medium text-on-ink"
                    >
                      {CONTACT.email}
                    </a>
                    .
                  </span>
                )}
                {(status === "idle" || status === "submitting") && (
                  <span className="text-on-ink-soft/70">
                    No spam, no pressure. A real reply within 24 hours.
                  </span>
                )}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
