"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, FORMSPREE_ACTION } from "@/lib/constants";
import { FadeUp } from "@/components/motion/FadeUp";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const action = form.getAttribute("action");
    if (action?.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      alert(
        "Form is ready! To activate, sign up at formspree.io and replace YOUR_FORM_ID in constants.ts."
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] gradient-text mb-3.5">
              Let&apos;s Talk
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-9">
              Tell us about your business and what you&apos;re looking for.
              We&apos;ll get back to you with a free, no-obligation quote —
              usually within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: CONTACT.phone,
                  href: CONTACT.phoneHref,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: `${CONTACT.location}`,
                  sub: CONTACT.locationSub,
                },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-gradient-to-br from-teal/10 to-blue/10 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                      <item.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                        {item.label}
                      </strong>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-navy font-semibold hover:text-teal transition-colors cursor-pointer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <>
                          <span className="text-slate-600 text-sm leading-relaxed">
                            {item.value}
                            {item.sub && (
                              <>
                                <br />
                                {item.sub}
                              </>
                            )}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-10 lg:p-9"
          >
            <h3 className="text-xl font-bold text-navy mb-7">
              Get Your Free Quote
            </h3>
            <form
              action={FORMSPREE_ACTION}
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-600 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-xs font-semibold text-slate-600 mb-1.5"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    placeholder="Your business"
                    className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-600 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-slate-600 mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(530) 213-3189"
                    className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold text-slate-600 mb-1.5"
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="new-website">New Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="seo">SEO Services</option>
                  <option value="maintenance">Hosting &amp; Maintenance</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-600 mb-1.5"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What does your business do? Do you have a current website? What are you looking to achieve?"
                  className="w-full px-3.5 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all resize-y min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-white py-3.5 rounded-lg text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(46,127,232,0.3)] transition-all cursor-pointer"
              >
                Send Request
              </button>
              <p className="text-center text-xs text-slate-400 mt-3.5">
                No spam, no pressure. We&apos;ll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
