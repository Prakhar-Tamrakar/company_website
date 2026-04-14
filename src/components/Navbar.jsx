"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import logo from "../../public/navbar/logo.png";
import navLinks from "../constants/constants";

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef([]);
  const underlineRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  /* ---------------- Body scroll lock ---------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  /* ---------------- Close on ESC / resize ---------------- */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ---------------- Active underline ---------------- */
  useEffect(() => {
    const activeIndex = navLinks.findIndex((l) => l.url === pathname);
    const activeEl = navRef.current[activeIndex];
    if (activeEl && underlineRef.current) {
      setUnderlineStyle({
        width: activeEl.offsetWidth,
        left: activeEl.offsetLeft,
      });
    } else {
      setUnderlineStyle({ width: 0, left: 0 });
    }
  }, [pathname]);

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="mx-auto flex h-18 w-full max-w-[1440px] items-center justify-between px-5 md:px-10">
          {/* Logo */}
          <Link href="/#index" className="flex items-center gap-3 shrink-0">
            <Image src={logo} alt="Logo" width={36} height={36} />
            <span className="text-lg md:text-2xl font-light tracking-tight text-primary">
              i-Connectresources
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="relative hidden xl:block">
            <ul className="flex gap-8 text-[13px] font-bold uppercase tracking-[0.15em]">
              {navLinks.map((link, i) => (
                <Link
                  key={link.id}
                  href={link.url}
                  ref={(el) => (navRef.current[i] = el)}
                  className={`transition-colors duration-300 ${
                    pathname === link.url
                      ? "text-primary"
                      : "text-slate-500 hover:text-primary"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
            {/* Animated underline */}
            <span
              ref={underlineRef}
              style={{ width: underlineStyle.width, left: underlineStyle.left }}
              className="absolute -bottom-2 h-0.5 rounded-full bg-primary transition-all duration-500"
            />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-white transition-all hover:opacity-90 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            id="hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="xl:hidden relative z-[70] flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-md"
          >
            <span
              className={`block h-0.5 w-6 rounded bg-slate-800 transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded bg-slate-800 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-slate-800 transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ===== BACKDROP (click anywhere to close) ===== */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ===== SLIDING RIGHT SIDEBAR ===== */}
      <aside
        id="mobile-menu"
        aria-label="Navigation sidebar"
        className={`fixed top-0 right-0 z-[60] h-full w-[78vw] max-w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-100">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <Image src={logo} alt="Logo" width={28} height={28} />
            <span className="text-sm font-light text-primary tracking-tight">
              i-Connectresources
            </span>
          </Link>
          {/* Close button */}
          <button
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                {/* Active dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all ${
                    isActive ? "bg-primary" : "bg-slate-300"
                  }`}
                />
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="px-5 py-6 border-t border-slate-100">
          <Link
            href="/contact#form"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-3.5 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest transition-all hover:opacity-90 active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}
