"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

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
          ? "bg-white/98 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-1.5"
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="block" onClick={(e) => handleLinkClick(e, "#hero")}>
          <Image
            src="/lubin-digital-logo.png"
            alt="Lubin Digital"
            width={500}
            height={500}
            className={`transition-all duration-300 ${
              scrolled ? "h-[60px]" : "h-[80px]"
            } w-auto`}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-500 hover:text-navy transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="gradient-bg text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(46,127,232,0.25)] transition-all cursor-pointer"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-slate-700"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-slate-700"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-slate-700"
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
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-screen bg-white z-50 shadow-xl pt-20 px-6 md:hidden"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block py-3.5 text-slate-700 text-base font-medium border-b border-slate-100 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="block gradient-bg text-white text-center py-3.5 px-5 rounded-lg font-semibold cursor-pointer"
                  >
                    Get a Quote
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
