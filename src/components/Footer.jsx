// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Mail,
//   MapPin,
//   Facebook,
//   Linkedin,
//   Twitter,
//   ArrowRight,
// } from "lucide-react";

// import logo from "../../public/navbar/logo.png";
// import logoWithName from "../../public/Footer/Logo with Name.png"

// export default function Footer() {
//   return (
//     <div className="relative w-full z-20 bg-white">
//       {/* ---------------- NEWSLETTER SECTION ---------------- */}
//       <div className="w-full flex justify-center px-6">
//         <div className="max-w-[950px] w-full bg-white rounded-t-2xl shadow-xl border border-gray-200 py-10 px-6 text-center relative mt-6">
//           <h2 className=" md:text-2xl font-regular text-gray-900">
//             Subscribe to our Newsletter
//           </h2>

//           <p className="mt-2 text-gray-600">
//             Sign up today and get a free sample.
//           </p>

//           <div className="mt-6 flex justify-center gap-3 flex-wrap">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="border border-gray-300 bg-transparent px-4 py-3 rounded-full min-w-[280px] sm:min-w-[350px] outline-none text-gray-700 placeholder:text-gray-400 focus:border-blue-500 transition"
//             />

//             <button className="bg-primary px-6 py-3 text-white rounded-full font-medium hover:bg-blue-700 transition">
//               Get Started
//             </button>
//           </div>

//           <p className="text-xs text-gray-500 mt-3">
//             Our experts are ready to help!
//           </p>
//         </div>
//       </div>

//       {/* ---------------- MAIN FOOTER ---------------- */}
//       <footer className="w-full relative bg-slate-950 text-white overflow-hidden">
//         {/* Background Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.08] pointer-events-none"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
//             backgroundSize: "35px 35px",
//           }}
//         />

//         {/* Watermark */}
//         <Image
//           src="/footerlogo.png"
//           alt="Footer Background"
//           width={500}
//           height={500}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] object-contain pointer-events-none select-none z-0"
//         />

//         <div className="relative z-10 container mx-auto px-6 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//             {/* BRAND */}
//             <div className="lg:col-span-2 space-y-6">
//               <Link href="/" className="flex items-center gap-2">
//                 <Image src={logoWithName} alt="Logo" width={200} height={200} />

//               </Link>

//               <p className="text-slate-400 text-base max-w-sm">
//                 Delivering innovative IT solutions and ServiceNow expertise to
//                 drive business growth in the digital era.
//               </p>

//               <div className="flex gap-4">
//                 <SocialIcon
//                   href="https://www.linkedin.com/company/i-connectresources-inc/posts/?feedView=all"
//                   icon={<Linkedin size={18} />}
//                 />

//               </div>
//             </div>

//             {/* COMPANY */}
//             <FooterColumn
//               title="Company"
//               links={[
//                 { label: "Home", href: "/" },
//                 { label: "About Us", href: "/about" },
//                 { label: "Services", href: "/services" },
//               ]}
//             />

//             {/* RESOURCES */}
//             <FooterColumn
//               title="Resources"
//               links={[
//                 { label: "Case Studies", href: "/case-studies" },
//                 { label: "Career", href: "/career" },
//                 { label: "Resources", href: "/resources" },
//               ]}
//             />

//             {/* CONTACT */}
//             <div className="space-y-6">
//               <HeadingWithLine title="Contact Us" />
//               <ul className="space-y-6 text-slate-400 text-sm">
//                 <FooterInfo
//                   icon={<MapPin size={20} className="text-primary mt-1" />}
//                   text={
//                     <a
//                       href="https://maps.google.com/?q=103+Carnegie+Center+Suite+300+Princeton+NJ+08540"
//                       target="_blank"
//                       className="hover:text-blue-400 transition"
//                     >
//                       103 Carnegie Center, Suite #300 Princeton NJ-08540, USA
//                     </a>
//                   }
//                 />
//                 <FooterInfo
//                   icon={<MapPin size={20} className="text-primary mt-1" />}
//                   text={
//                     <a
//                       href="https://maps.google.com/?q=STPI+Nehru+Nagar+East+Bhilai+Chhattisgarh+490020"
//                       target="_blank"
//                       className="hover:text-blue-400 transition"
//                     >
//                       STPI Nehru Nagar (East), Bhilai-490020, Chhattisgarh
//                     </a>
//                   }
//                 />
//                 <FooterInfo
//                   icon={<Mail size={20} className="text-primary" />}
//                   text={
//                     <a
//                       href="mailto:info@i-connectresources.com"
//                       className="hover:text-blue-400 transition"
//                     >
//                       info@i-connectresources.com
//                     </a>
//                   }
//                 />
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-slate-800" />

//         {/* Bottom Bar */}
//         <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
//           <p>© 2025 i-Connectresources Inc. All rights reserved.</p>

//           <Link href="/privacy" className="hover:text-white transition">
//             Privacy Policy
//           </Link>
//         </div>
//       </footer>
//     </div>
//   );
// }

// /* ---------------- REUSABLE COMPONENTS ---------------- */

// function FooterColumn({ title, links }) {
//   return (
//     <div className="space-y-6">
//       <HeadingWithLine title={title} />
//       <ul className="space-y-3">
//         {links.map((link, i) => (
//           <FooterLink key={i} {...link} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function HeadingWithLine({ title }) {
//   return (
//     <div>
//       <h4 className="text-lg font-semibold text-white">{title}</h4>
//       <div className="w-12 h-0.5 bg-primary mt-1" />
//     </div>
//   );
// }

// function FooterLink({ label, href }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className="flex items-center gap-2 group text-slate-400 hover:text-blue-400 transition"
//       >
//         <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-primary">
//           <ArrowRight size={12} />
//         </span>
//         {label}
//       </Link>
//     </li>
//   );
// }

// function FooterInfo({ icon, text }) {
//   return (
//     <li className="flex gap-3 items-start">
//       {icon}
//       <span>{text}</span>
//     </li>
//   );
// }

// function SocialIcon({ icon, href }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
//     >
//       {icon}
//     </a>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, ChevronRight, Send } from "lucide-react";

import logoWithName from "../../public/Footer/Logo with Name.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f7] pt-20   ">
     

      {/* ---------------- MAIN FOOTER ---------------- */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="block">
              <Image
                src={logoWithName}
                alt="i-Connectresources Logo"
                width={180}
                height={40}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
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

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <FooterLink label="Home" href="/" />
              <FooterLink label="About Us" href="/about" />
              <FooterLink label="Services" href="/services" />
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <FooterLink label="Case Studies" href="/case-study" />
              {/* <FooterLink label="Privacy Policy" href="/privacy" /> */}
              {/* <FooterLink label="Terms of Use" href="/terms" /> */}
              <FooterLink label="Resources" href="/resources" />
              <FooterLink label="Careers" href="/career" />
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-6">
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
        <div className="mt-20 pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 i-Connectresources Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm ">
            <Link href="/privacy">Privacy Policy</Link>
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
        className="group flex items-center text-slate-500 hover:text-primary transition-colors duration-200"
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
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter mb-0.5">
          {title}
        </p>
        {isEmail ? (
          <a
            href={`mailto:${text}`}
            className="text-sm text-slate-600 hover:text-primary transition-colors font-medium"
          >
            {text}
          </a>
        ) : (
          <p className="text-sm text-slate-600 leading-snug font-medium">
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
