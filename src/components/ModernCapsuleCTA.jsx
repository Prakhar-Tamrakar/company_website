// "use client";
// import React, { useRef } from 'react';
// import Link from 'next/link';

// const ModernCapsuleCTA = ({ href , text  }) => {
//   const btnRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!btnRef.current) return;

//     const rect = btnRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // Direct DOM manipulation of CSS variables for buttery smooth 60fps tracking
//     btnRef.current.style.setProperty('--x', `${x}px`);
//     btnRef.current.style.setProperty('--y', `${y}px`);
//   };

//   return (
//     <Link
//       href={href}
//       ref={btnRef}
//       onMouseMove={handleMouseMove}
//       className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs text-white bg-[#12488e] border border-white/10 overflow-hidden  transition-all duration-300 ease-out shadow-black/45 shadow-sm  " >
//       {/* 1. The Interaction Glow (Spotlight) */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         style={{
//           background: `radial-gradient(100px circle at var(--x) var(--y), rgba(59, 130, 246, 0.8), transparent 80%)`,
//         }}
//       />

//       {/* 2. Top Edge Shine (The "Glass" look) */}
//       <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

//       {/* 3. The Content */}
//       <span className="relative z-10 flex items-center gap-3">
//         {text}
//         <svg 
//           className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//         </svg>
//       </span>

//       {/* 4. Subtle Bottom Inner Glow */}
//       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//     </Link>
//   );
// };

// export default ModernCapsuleCTA;

"use client";
import React, { useRef } from "react";
import Link from "next/link";

const THEMES = {
  dark: {
    button:
      "text-white bg-[#12488e] border-white/10 shadow-black/45",
    glow: "rgba(59, 130, 246, 0.8)",
    bottomGlow: "from-blue-900/10",
    topShine: "via-white/30",
  },
  light: {
    button:
      "text-slate-900 bg-white border-slate-200 shadow-black/10",
    glow: "rgba(59, 130, 246, 0.35)",
    bottomGlow: "from-blue-500/10",
    topShine: "via-slate-300/60",
  },
};

const ModernCapsuleCTA = ({ href, text, theme = "dark" }) => {
  const btnRef = useRef(null);
  const currentTheme = THEMES[theme] || THEMES.dark;

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    btnRef.current.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );
    btnRef.current.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <Link
      href={href}
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className={`
        group relative inline-flex items-center justify-center
        px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs
        border overflow-hidden transition-all duration-300 ease-out shadow-sm
        ${currentTheme.button}
      `}
    >
      {/* Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            100px circle at var(--x) var(--y),
            ${currentTheme.glow},
            transparent 80%
          )`,
        }}
      />  
      {/* Top Glass Shine */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${currentTheme.topShine} to-transparent`}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {text}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>

      {/* Bottom Inner Glow */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t ${currentTheme.bottomGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
      />
    </Link>
  );
};

export default ModernCapsuleCTA;
