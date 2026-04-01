"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, CTA_PRIMARY, CTA_SECONDARY } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.3)] py-0"
          : "bg-dark/80 backdrop-blur-sm py-0"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="block" onClick={(e) => handleLinkClick(e, "#hero")}>
          <Image
            src="/lubin-digital-logo.png"
            alt="Lubin Digital"
            width={500}
            height={500}
            className={`transition-all duration-300 brightness-0 invert ${
              scrolled ? "h-[70px]" : "h-[90px]"
            } w-auto`}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-text-sec-light hover:text-text-light transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 ml-4">
            <a
              href={CTA_SECONDARY.href}
              onClick={(e) => handleLinkClick(e, CTA_SECONDARY.href)}
              className="text-sm font-semibold text-text-light border border-white/20 px-5 py-2 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer"
            >
              {CTA_SECONDARY.label} &rarr;
            </a>
            <a
              href={CTA_PRIMARY.href}
              onClick={(e) => handleLinkClick(e, CTA_PRIMARY.href)}
              className="gradient-bg text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 hover:shadow-[0_4px_15px_rgba(8,117,233,0.3)] transition-all cursor-pointer"
            >
              {CTA_PRIMARY.label}
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white/80"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white/80"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white/80"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-screen bg-dark z-50 shadow-xl pt-20 px-6 md:hidden"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block py-3.5 text-text-light text-base font-medium border-b border-white/10 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-5">
                  <a
                    href={CTA_SECONDARY.href}
                    onClick={(e) => handleLinkClick(e, CTA_SECONDARY.href)}
                    className="block text-text-light text-center py-3 px-5 rounded-lg font-semibold border border-white/20 cursor-pointer"
                  >
                    {CTA_SECONDARY.label} &rarr;
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href={CTA_PRIMARY.href}
                    onClick={(e) => handleLinkClick(e, CTA_PRIMARY.href)}
                    className="block gradient-bg text-white text-center py-3 px-5 rounded-lg font-semibold cursor-pointer"
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
