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
  const [mounted, setMounted] = useState(false);

  const isContactPage = pathname === "/contact";

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- Underline Logic ---------------- */
  useEffect(() => {
    if (isContactPage) {
      setUnderlineStyle({ width: 0, left: 0 });
      return;
    }

    const activeIndex = navLinks.findIndex(link => link.url === pathname);
    const activeEl = navRef.current[activeIndex];

    if (activeEl && underlineRef.current) {
      setUnderlineStyle({
        width: activeEl.offsetWidth - 10,
        left: activeEl.offsetLeft + 5,
      });
    } else {
      setUnderlineStyle({ width: 0, left: 0 });
    }
  }, [pathname, isContactPage]);

  return (
    <div className="fixed top-4 left-0 z-50 w-full px-4 flex justify-center">
      <nav className="relative w-full max-w-7xl flex items-center justify-between px-6 py-2 rounded-full border border-white/20 bg-white backdrop-blur-xl shadow-md transition-all duration-300">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={42} height={42} className="shrink-0" />
          <h1 className="text-lg md:text-xl font-bold tracking-tight text-primary">
            i-Connectresources
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="relative hidden lg:block">
          <ul className="flex gap-7 py-2 text-[0.95rem] font-semibold">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.url}
                ref={el => (navRef.current[index] = el)}
                className={`transition-colors duration-300 ${
                  pathname === link.url ? "text-primary" : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </ul>

          {/* Underline */}
          <span
            ref={underlineRef}
            style={{ width: underlineStyle.width, left: underlineStyle.left }}
            className="absolute bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300 ease-out"
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="px-7 py-2.5 rounded-full bg-primary text-sm font-bold text-white opacity-95 transition-all hover:opacity-100 active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="lg:hidden flex h-8 w-8 flex-col items-end justify-center gap-1.5"
        >
          <span className={`h-0.5 rounded-full bg-slate-900 transition-all duration-300 ${menuOpen ? "-rotate-45 translate-y-2 w-7" : "w-6"}`} />
          <span className={`h-0.5 rounded-full bg-slate-900 transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
          <span className={`h-0.5 rounded-full bg-slate-900 transition-all duration-300 ${menuOpen ? "rotate-45 -translate-y-2 w-7" : "w-5"}`} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[72px] left-0 w-full rounded-3xl border border-white/20 bg-white backdrop-blur-2xl p-6 shadow-xl flex flex-col gap-4 text-center lg:hidden transition-all duration-300 ease-out ${
            menuOpen
              ? "pointer-events-auto scale-100 translate-y-0 opacity-100"
              : "pointer-events-none scale-95 -translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-bold transition-colors ${
                pathname === link.url ? "text-primary" : "text-slate-800 hover:text-primary"
              }`}
            >
              {link.title}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-primary py-4 font-bold text-white transition-all hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>

      </nav>
    </div>
  );
}
