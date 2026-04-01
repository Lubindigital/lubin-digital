import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark">
      {/* Start Your Journey CTA */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1140px] mx-auto px-6 py-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-light leading-tight tracking-tight mb-6">
            Don&apos;t Let Customers{" "}
            <span className="accent-text gradient-underline">Pass You By</span>
          </h2>
          <p className="text-text-sec-light text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
            Every day without a website is a day you&apos;re invisible to potential
            customers searching online. Get your free quote today.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-block gradient-bg text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 hover:shadow-[0_4px_20px_rgba(8,117,233,0.3)] transition-all"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1140px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; 2026 Lubin Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
