import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 text-white/50">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_1fr] gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <Image
              src="/lubin-digital-logo.png"
              alt="Lubin Digital"
              width={500}
              height={500}
              className="h-[60px] w-auto brightness-0 invert opacity-85"
            />
            <p className="mt-4 text-sm leading-relaxed">
              Professional websites for local businesses. Built with care in
              Hawaii, delivered nationwide.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[2px] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Web Design", "SEO", "Hosting & Maintenance", "Redesigns"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-sm hover:text-teal transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[2px] mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#why" },
                { label: "Process", href: "#process" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-teal transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[2px] mb-5">
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-teal transition-colors cursor-pointer"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-teal transition-colors cursor-pointer"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>Hawaii &middot; Nationwide</p>
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-xs">
          <p>&copy; 2026 Lubin Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
