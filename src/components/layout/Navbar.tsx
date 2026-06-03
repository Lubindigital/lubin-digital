"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, CTA_PRIMARY, CTA_SECONDARY } from "@/lib/constants";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-bg rounded-sm";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevOpen = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    } else if (prevOpen.current) {
      hamburgerRef.current?.focus();
    }
    prevOpen.current = menuOpen;
  }, [menuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-bg/90 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className={`block ${focusRing}`}
          onClick={(e) => handleLinkClick(e, "#hero")}
          aria-label="Lubin Digital — home"
        >
          <Image
            src="/lubin-digital-logo-wave.png"
            alt="Lubin Digital"
            width={1375}
            height={600}
            className={`w-auto brightness-0 invert transition-all duration-300 ${
              scrolled ? "h-[26px]" : "h-[30px]"
            }`}
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`link-underline text-sm font-medium text-on-ink-soft transition-colors hover:text-on-ink ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={CTA_SECONDARY.href}
              onClick={(e) => handleLinkClick(e, CTA_SECONDARY.href)}
              className={`rounded-md border border-white/20 px-5 py-2 text-sm font-semibold text-on-ink transition-colors hover:border-white/40 hover:bg-white/5 ${focusRing}`}
            >
              {CTA_SECONDARY.label}
            </a>
            <a
              href={CTA_PRIMARY.href}
              onClick={(e) => handleLinkClick(e, CTA_PRIMARY.href)}
              className={`rounded-md bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong ${focusRing}`}
            >
              {CTA_PRIMARY.label}
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className={`md:hidden relative z-[60] flex flex-col gap-[5px] p-1.5 ${focusRing}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white/90"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white/90"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white/90"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 h-screen w-[280px] bg-ink-bg px-6 pt-20 shadow-xl md:hidden"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block border-b border-white/10 py-3.5 text-base font-medium text-on-ink ${focusRing}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-5">
                  <a
                    href={CTA_SECONDARY.href}
                    onClick={(e) => handleLinkClick(e, CTA_SECONDARY.href)}
                    className={`block rounded-md border border-white/20 px-5 py-3 text-center font-semibold text-on-ink ${focusRing}`}
                  >
                    {CTA_SECONDARY.label}
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href={CTA_PRIMARY.href}
                    onClick={(e) => handleLinkClick(e, CTA_PRIMARY.href)}
                    className={`block rounded-md bg-accent px-5 py-3 text-center font-semibold text-white ${focusRing}`}
                  >
                    {CTA_PRIMARY.label}
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
