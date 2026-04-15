"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, ChevronRight, Send } from "lucide-react";

import logo from "../../public/navbar/logo.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f7f7f7] text-slate-600 border-t border-gray-200 overflow-hidden">
      {/* ---------------- DECORATIVE ILLUSTRATIONS ---------------- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top-left dot pattern */}
        <div className="absolute -top-12 -left-12 opacity-40">
          <svg width="350" height="350" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern
                id="footer-dots-left"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="3" height="3" className="text-blue-600/20" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#footer-dots-left)" />
          </svg>
        </div>

        {/* Bottom-right organic blob */}
        <div className="absolute -bottom-40 -right-40 opacity-[0.03] transform -rotate-12">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2563eb" d="M45.7,-76.4C58.9,-69.3,69.2,-55.4,78.2,-41.2C87.2,-27,94.9,-12.4,94.3,1.9C93.7,16.2,84.9,30.2,74.5,41.9C64.1,53.6,52.2,63,38.8,70.5C25.4,78,10.6,83.6,-4.8,88.7C-20.2,93.8,-36.2,98.5,-49.2,92C-62.2,85.5,-72.2,67.8,-80.4,50.7C-88.6,33.6,-95.1,17.1,-94.1,1.1C-93.1,-14.9,-84.7,-30.5,-74,-43.3C-63.3,-56,-50.2,-66.1,-36.6,-73.4C-23,-80.7,-8.9,-85.2,6,-91.7C20.9,-98.2,41.8,-106.7,45.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Soft top-right blue glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      {/* ---------------- MAIN FOOTER ---------------- */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 lg:space-y-6">
            <Link href="/" className="inline-block rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-hidden">
              <Image
                src={logo}
                alt="i-Connectresources Logo"
                width={95}
                height={30}
                className="opacity-100 transition-opacity"
              />
            </Link>
            <p className="content-default text-base sm:text-base leading-relaxed max-w-sm lg:max-w-lg">
              Digital Transformation with Intelligent IT Solutions.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink
                href="https://www.linkedin.com/company/i-connectresources-inc"
                icon={<Linkedin size={20} aria-hidden="true" />}
                label="LinkedIn"
              />
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Company */}
            <nav aria-label="Company Links ">
              <h4 className="heading-default font-bold text-sm uppercase tracking-wider mb-6 md:pl-8 pl-0">
                Company
              </h4>
              <ul className="space-y-3.5 md:pl-8 pl-0 ">
                <FooterLink label="Home" href="/" />
                <FooterLink label="About Us" href="/about" />
                <FooterLink label="Services" href="/services" />
              </ul>
            </nav>

            {/* Resources */}
            <nav aria-label="Resource Links">
              <h4 className="heading-default font-bold text-sm uppercase tracking-wider mb-6 md:pl-8 pl-0">
                Resources
              </h4>
              <ul className="space-y-3.5 md:pl-8 pl-0 ">
                <FooterLink label="Case Studies" href="/case-study" />
                <FooterLink label="Products" href="/products" />
                <FooterLink label="Careers" href="/career" />
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="heading-default font-bold text-sm uppercase tracking-wider mb-6 md:pl-8 pl-0">
              Contact
            </h4>
            <div className="space-y-5 md:pl-8 pl-0">
              <ContactBlock
                icon={<MapPin size={18} aria-hidden="true" />}
                title="USA"
                text="103 Carnegie Center, Suite #300, Princeton, NJ-08540"
                href="https://www.google.com/maps/search/?api=1&query=103+Carnegie+Center,+Suite+%23300,+Princeton,+NJ+08540"
              />
              <ContactBlock
                icon={<MapPin size={18} aria-hidden="true" />}
                title="India"
                text="STPI Nehru Nagar (East), Bhilai, Chhattisgarh-490020"
                href="https://www.google.com/maps/search/?api=1&query=STPI+Nehru+Nagar+(East),+Bhilai,+Chhattisgarh+490020"
              />
              <ContactBlock
                icon={<Mail size={18} aria-hidden="true" />}
                title="General Inquiry"
                text="info@i-connectresources.com"
                isEmail
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm content-default">
          <p className="text-center md:text-left">
            © 2026 i-Connectresources Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-primary outline-hidden px-1"
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
        className="group flex items-center content-default hover:text-primary transition-colors duration-200 rounded-md focus-visible:ring-2 focus-visible:ring-primary outline-hidden px-1 -mx-1"
      >
        <ChevronRight
          size={14}
          aria-hidden="true"
          className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 transition-all duration-300"
        />
        {label}
      </Link>
    </li>
  );
}

function ContactBlock({ icon, title, text, isEmail, href }) {
  return (
    <div className="flex items-start gap-4 group">
      <div 
        aria-hidden="true"
        className="p-2.5 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-primary/5 group-hover:text-primary transition-colors"
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
          {title}
        </p>
        {isEmail ? (
          <a
            href={`mailto:${text}`}
            className="text-sm text-slate-600 hover:text-primary transition-colors font-medium break-all sm:break-normal focus-visible:ring-2 focus-visible:ring-primary outline-hidden rounded-sm"
          >
            {text}
          </a>
        ) : href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 hover:text-primary transition-colors font-medium leading-relaxed block focus-visible:ring-2 focus-visible:ring-primary outline-hidden rounded-sm"
          >
            {text}
            <span className="sr-only"> (opens in a new tab)</span>
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
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-200 rounded-full focus-visible:ring-2 focus-visible:ring-primary outline-hidden p-1 -m-1"
      aria-label={`${label} (opens in a new tab)`}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 hover:border-primary/20 hover:bg-primary/5">
        {icon}
      </div>
      <span className="text-sm font-medium" aria-hidden="true">{label}</span>
    </a>
  );
}