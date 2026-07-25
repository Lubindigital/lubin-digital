import Image from "next/image";
import Link from "next/link";

/**
 * Minimal top bar for pages outside the homepage (e.g. case studies).
 * The main Navbar relies on same-page smooth-scroll anchors, so off-homepage
 * routes use this instead — every link points back to the homepage with a hash.
 * Matches the light editorial system: warm canvas bar, hairline, one teal CTA.
 */
export function CaseStudyNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/85 py-3 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="block" aria-label="Lubin Digital, home">
          <Image
            src="/lubin-digital-logo-wave.png"
            alt="Lubin Digital"
            width={1375}
            height={600}
            className="h-[26px] w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/#portfolio"
            className="link-underline hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:inline-block"
          >
            &larr; Back to work
          </Link>
          <Link
            href="/#contact"
            className="rounded-md bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
