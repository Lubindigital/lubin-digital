import Image from "next/image";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink-bg text-on-ink">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + positioning */}
          <div className="max-w-[320px]">
            <Image
              src="/lubin-digital-logo-wave.png"
              alt="Lubin Digital"
              width={1375}
              height={600}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-sm leading-[1.7] text-on-ink-soft">
              An independent studio building premium websites and the custom AI
              systems that run behind them. One partner, design to deployment.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow text-on-ink-soft/70 mb-4">Explore</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-on-ink/85 transition-colors hover:text-on-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="link-underline text-sm text-on-ink/85 transition-colors hover:text-on-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-on-ink-soft/70 mb-4">Get in touch</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline text-sm text-on-ink/85 transition-colors hover:text-on-ink"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="link-underline text-sm text-on-ink/85 transition-colors hover:text-on-ink tnum"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-sm text-on-ink-soft">{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-hairline-on-ink pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-on-ink-soft">
            <span className="tnum">&copy; 2026</span> Lubin Digital. All rights
            reserved.
          </p>
          <p className="text-xs text-on-ink-soft">
            Designed &amp; built in-house with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
