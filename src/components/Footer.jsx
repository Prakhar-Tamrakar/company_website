"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, ChevronRight, Send } from "lucide-react";

import logoWithName from "../../public/Footer/Logo with Name.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f7] text-slate-600 border-t border-gray-200">
      {/* ---------------- MAIN FOOTER ---------------- */}
      <div className="container max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6 lg:space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src={logoWithName}
                alt="i-Connectresources Logo"
                width={180}
                height={40}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="content-default text-base sm:text-base leading-relaxed max-w-sm lg:max-w-xs">
              Delivering innovative IT solutions and ServiceNow expertise to
              drive business growth in the digital era.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink
                href="https://www.linkedin.com/company/i-connectresources-inc"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">
                Company
              </h4>
              <ul className="space-y-3.5">
                <FooterLink label="Home" href="/" />
                <FooterLink label="About Us" href="/about" />
                <FooterLink label="Services" href="/services" />
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">
                Resources
              </h4>
              <ul className="space-y-3.5">
                <FooterLink label="Case Studies" href="/case-study" />
                <FooterLink label="Resources" href="/resources" />
                <FooterLink label="Careers" href="/career" />
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-5">
              <ContactBlock
                icon={<MapPin size={18} />}
                title="Princeton, USA"
                text="103 Carnegie Center, Suite #300, NJ-08540"
              />
              <ContactBlock
                icon={<MapPin size={18} />}
                title="Bhilai, India"
                text="STPI Nehru Nagar (East), Chhattisgarh-490020"
              />
              <ContactBlock
                icon={<Mail size={18} />}
                title="General Inquiry"
                text="info@i-connectresources.com"
                isEmail
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm content-default">
          <p className="text-center md:text-left">
            © 2026 i-Connectresources Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FooterLink({ label, href }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center content-default hover:text-primary transition-colors duration-200"
      >
        <ChevronRight
          size={14}
          className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 transition-all duration-300"
        />
        {label}
      </Link>
    </li>
  );
}

function ContactBlock({ icon, title, text, isEmail }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="p-2.5 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          {title}
        </p>
        {isEmail ? (
          <a
            href={`mailto:${text}`}
            className="text-sm text-slate-600 hover:text-primary transition-colors font-medium break-all sm:break-normal"
          >
            {text}
          </a>
        ) : (
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

function SocialLink({ icon, href, label }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-200"
      aria-label={label}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 hover:border-primary/20 hover:bg-primary/5">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}