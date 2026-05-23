import Image from "next/image";
import Link from "next/link";

/**
 * Minimal top bar for pages outside the homepage (e.g. case studies).
 * The main Navbar relies on same-page smooth-scroll anchors, so off-homepage
 * routes use this instead — every link points back to the homepage with a hash.
 */
export function CaseStudyNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="block py-2" aria-label="Lubin Digital — home">
          <Image
            src="/lubin-digital-logo.png"
            alt="Lubin Digital"
            width={500}
            height={500}
            className="h-[64px] w-auto brightness-0 invert"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/#portfolio"
            className="hidden sm:inline-block text-sm font-medium text-text-sec-light hover:text-text-light transition-colors"
          >
            &larr; Back to Work
          </Link>
          <Link
            href="/#contact"
            className="gradient-bg text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 hover:shadow-[0_4px_15px_rgba(8,117,233,0.3)] transition-all"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
