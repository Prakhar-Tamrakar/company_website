// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";
// import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";
// import backgroundImage01 from "../../../public/Home/HomeBg01.jpg";
// import backgroundImage02 from "../../../public/Home/HomeBg02.jpg";
// import backgroundImage03 from "../../../public/Home/HomeBg03.jpg";

// const Hero = () => {
//   const [index, setIndex] = useState(0);
//   const [curtainIndex, setCurtainIndex] = useState(1);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const containerRef = useRef(null);
//   const baseRef = useRef(null);
//   const curtainRef = useRef(null);
//   const contentTextRef = useRef(null);

//   // Expanded slides to match your content items
//   // Note: Using 3 images repeatedly for 6 content items
//   const slides = [
//     { src: backgroundImage01, title: "AI-Driven Automation", desc: "AI-driven efficiency, reduced manual effort." },
//     { src: backgroundImage02, title: "Security & Compliance", desc: "Built for regulated industries and growth-focused businesses." },
//     { src: backgroundImage03, title: "Digital Transformation", desc: "Modernize legacy IT systems with intelligent workflows." },
//     { src: backgroundImage01, title: "Proactive Managed Services", desc: "24/7 monitoring, predictable SLAs, continuous optimization." },
//     { src: backgroundImage02, title: "Operational Resilience", desc: "Reduce downtime, accelerate decision-making, scale with confidence." },
//     { src: backgroundImage03, title: "Platform Expertise", desc: "ServiceNow, Microsoft 365, UiPath, Atlassian Jira & Other leading platforms." },
//   ];

//   /* ---------- Initial Entrance ---------- */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(".reveal-inner", { y: "105%" });
//       const tl = gsap.timeline({ delay: 0.1 });

//       tl.to(".hero-line-1 .reveal-inner, .hero-line-2 .reveal-inner", {
//         y: "0%",
//         duration: 1,
//         stagger: 0.2,
//         ease: "expo.out",
//       })
//       .to(".dynamic-content .reveal-inner", {
//         y: "0%",
//         duration: 0.9,
//         stagger: 0.1,
//         ease: "expo.out",
//       }, "-=0.5")
//       .fromTo(".hero-cta", 
//         { y: 16, opacity: 0 }, 
//         { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" }, 
//         "-=0.5"
//       );
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   /* ---------- Background & Content Cycle ---------- */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const transition = () => {
//         if (isAnimating) return;
//         setIsAnimating(true);

//         const nextIndex = (index + 1) % slides.length;

//         // 1. Animate Out current dynamic text
//         gsap.to(".dynamic-content .reveal-inner", {
//           y: "-105%",
//           duration: 0.5,
//           ease: "power2.in",
//           onComplete: () => {
//             setIndex(nextIndex); // Update index to change text & image
//             // 2. Animate In new dynamic text
//             gsap.fromTo(".dynamic-content .reveal-inner", 
//               { y: "105%" }, 
//               { y: "0%", duration: 0.8, ease: "expo.out", stagger: 0.1 }
//             );
//           }
//         });

//         // 3. Background Curtain Animation
//         gsap.set(curtainRef.current, { yPercent: 100, display: "block" });
//         gsap.to(curtainRef.current, {
//           yPercent: 0,
//           duration: 1.2,
//           ease: "power3.inOut",
//           onComplete: () => {
//             gsap.set(baseRef.current, { scale: 1 });
//             gsap.to(curtainRef.current, {
//               opacity: 0,
//               duration: 0.35,
//               onComplete: () => {
//                 gsap.set(curtainRef.current, {
//                   yPercent: 100,
//                   opacity: 1,
//                   display: "none",
//                 });
//                 setCurtainIndex((nextIndex + 1) % slides.length);
//                 setIsAnimating(false);
//               },
//             });
//           },
//         });
//       };

//       const interval = setInterval(transition, 4000); // Increased slightly for text readability
//       return () => clearInterval(interval);
//     }, containerRef);

//     return () => ctx.revert();
//   }, [index, isAnimating]);

//   return (
//     <div ref={containerRef} className="relative min-h-[70vh] md:h-screen w-full overflow-hidden bg-white flex flex-col justify-center">
      
//       {/* ---------- Background Layers ---------- */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div ref={baseRef} className="absolute inset-0">
//           <Image src={slides[index].src} alt="bg" fill priority className="object-cover" />
//         </div>
//         <div ref={curtainRef} className="absolute inset-0 hidden" style={{ zIndex: 1 }}>
//           <Image src={slides[curtainIndex].src} alt="bg-next" fill priority className="object-cover" />
//         </div>
//         <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-white/20 z-10" />
//         <div className="absolute inset-0 bg-white/40 z-10" />
//       </div>

//       {/* ---------- Main Content ---------- */}
//       <main className="container relative z-30 flex flex-col px-6 sm:px-12 md:px-24 lg:px-40 pb-16 md:pb-0 md:h-full">
//         <div className="flex flex-col justify-end md:justify-center flex-1 mt-32 md:mt-0">
          
//           <h1 className="heading-default text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left font-regular text-slate-900 sm:leading-tight mb-6">
//             <span className="hero-line-1 block overflow-hidden pb-1">
//               <span className="reveal-inner block">Transform IT</span>
//             </span>
//             <span className="hero-line-2 block overflow-hidden pb-1">
//               <span className="reveal-inner block">Intelligently</span>
//             </span>
//           </h1>

//           {/* Dynamic Content Syncing with Slides */}
//           <div className="dynamic-content mb-8 sm:mb-12 max-w-2xl">
//             <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 overflow-hidden">
//               <span className="reveal-inner block text-sky-600">
//                 {slides[index].title}
//               </span>
//             </h2>
//             <p className="text-base sm:text-xl text-left leading-relaxed text-slate-700 overflow-hidden">
//               <span className="reveal-inner block">
//                 {slides[index].desc}
//               </span>
//             </p>
//           </div>

//           <div className="w-fit hero-cta opacity-0">
//             <ModernCapsuleCTA href="/contact" text="Schedule a Consultation" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Hero;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";
// import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";
// import backgroundImage01 from "../../../public/Home/HomeBg01.jpg";
// import backgroundImage02 from "../../../public/Home/HomeBg02.jpg";
// import backgroundImage03 from "../../../public/Home/HomeBg03.jpg";

// const Hero = () => {
//   const [index, setIndex] = useState(0);
//   const [curtainIndex, setCurtainIndex] = useState(1);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const containerRef = useRef(null);
//   const baseRef = useRef(null);
//   const curtainRef = useRef(null);

//   const slides = [
//     { src: backgroundImage01, alt: "Hero Background 1" },
//     { src: backgroundImage02, alt: "Hero Background 2" },
//     { src: backgroundImage03, alt: "Hero Background 3" },
//   ];

//   // The new content array synced with the 3 images (looping through the 6 items)
//   const slideFeatures = [
//     { title: "AI-Driven Automation", desc: "AI-driven efficiency, reduced manual effort." },
//     { title: "Security & Compliance", desc: "Built for regulated industries and growth-focused businesses." },
//     { title: "Digital Transformation", desc: "Modernize legacy IT systems with intelligent workflows." },
//     { title: "Proactive Managed Services", desc: "24/7 monitoring, predictable SLAs, continuous optimization." },
//     { title: "Operational Resilience", desc: "Reduce downtime, accelerate decision-making, scale with confidence." },
//     { title: "Platform Expertise", desc: "ServiceNow, Microsoft 365, UiPath, Atlassian Jira & others." },
//   ];

//   /* ---------- Initial Entrance ---------- */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(".reveal-inner", { y: "105%" });
//       gsap.set(".right-content-box", { opacity: 0, x: 30 });

//       const tl = gsap.timeline({ delay: 0.1 });

//       tl.to(".hero-line-1 .reveal-inner, .hero-line-2 .reveal-inner", {
//         y: "0%",
//         duration: 1,
//         stagger: 0.2,
//         ease: "expo.out",
//       })
//       .to(".hero-sub-text", { opacity: 1, duration: 0.8 }, "-=0.5")
//       .to(".right-content-box", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.7")
//       .fromTo(".hero-cta", 
//         { y: 16, opacity: 0 }, 
//         { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" }, 
//         "-=0.5"
//       );
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   /* ---------- Background & Right-Side Content Cycle ---------- */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const transition = () => {
//         if (isAnimating) return;
//         setIsAnimating(true);

//         const nextIndex = (index + 1) % slideFeatures.length;
//         const nextImgIndex = (index + 1) % slides.length;

//         // 1. Animate Right-Side Content Out
//         gsap.to(".feature-text", {
//           opacity: 0,
//           y: -20,
//           duration: 0.5,
//           onComplete: () => {
//             setIndex(nextIndex);
//             // 2. Animate Right-Side Content In
//             gsap.fromTo(".feature-text", 
//               { opacity: 0, y: 20 }, 
//               { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
//             );
//           }
//         });

//         // 3. Background Transition Logic
//         gsap.set(curtainRef.current, { yPercent: 100, display: "block" });
//         gsap.to(curtainRef.current, {
//           yPercent: 0,
//           duration: 1.2,
//           ease: "power3.inOut",
//           onComplete: () => {
//             gsap.set(baseRef.current, { scale: 1 });
//             gsap.to(curtainRef.current, {
//               opacity: 0,
//               duration: 0.35,
//               onComplete: () => {
//                 gsap.set(curtainRef.current, {
//                   yPercent: 100,
//                   opacity: 1,
//                   display: "none",
//                 });
//                 setCurtainIndex((nextImgIndex + 1) % slides.length);
//                 setIsAnimating(false);
//               },
//             });
//           },
//         });
//       };

//       const interval = setInterval(transition, 4000);
//       return () => clearInterval(interval);
//     }, containerRef);
//     return () => ctx.revert();
//   }, [index, isAnimating]);

//   return (
//     <div id="index" ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white flex items-center">
      
//       {/* ---------- Background Layers ---------- */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div ref={baseRef} className="absolute inset-0">
//           <Image src={slides[index % slides.length].src} alt="bg" fill priority className="object-cover" />
//         </div>
//         <div ref={curtainRef} className="absolute inset-0 hidden" style={{ zIndex: 1 }}>
//           <Image src={slides[curtainIndex].src} alt="bg-curtain" fill priority className="object-cover" />
//         </div>
//         <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/10 z-10" />
//         <div className="absolute inset-0 bg-white/30 z-10" />
//       </div>

//       {/* ---------- Main Content Grid ---------- */}
//       <main className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-12 md:px-24 lg:px-40 w-full">
        
//         {/* Left Side: Original UI (Unchanged) */}
//         <div className="flex flex-col justify-center">
//           <h1 className="heading-default text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-left font-regular text-slate-900 leading-tight mb-6">
//             <span className="hero-line-1 block overflow-hidden pb-1">
//               <span className="reveal-inner block">Transform IT</span>
//             </span>
//             <span className="hero-line-2 block overflow-hidden pb-1">
//               <span className="reveal-inner block">Intelligently</span>
//             </span>
//           </h1>

//           <div className="hero-sub-text opacity-0 text-base sm:text-xl text-left leading-relaxed mb-8 max-w-lg text-slate-700">
//             <p>Turning IT into a future-ready, intelligent digital engine.</p>
//             <p>AI-driven automation and managed IT operations that modernize systems.</p>
//           </div>

//           <div className="w-fit hero-cta opacity-0">
//             <ModernCapsuleCTA href="/contact" text="Schedule a Consultation" />
//           </div>
//         </div>

//         {/* Right Side: New Content (Synced with transition) */}
//         <div className="right-content-box flex flex-col justify-center md:items-end text-right">
//           <div className="feature-text max-w-sm border-r-4 border-primary pr-6 py-4">
//             <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
//               Our Capabilities
//             </h3>
//             <h2 className="text-2xl md:text-3xl font-semibold heading-default mb-3">
//               {slideFeatures[index].title}
//             </h2>
//             <p className="text-slate-700 text-lg leading-snug">
//               {slideFeatures[index].desc}
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Hero;


"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";

// Backgrounds
import backgroundImage01 from "../../../public/Home/HomeBg01.jpg";
import backgroundImage02 from "../../../public/Home/HomeBg02.jpg";
import backgroundImage03 from "../../../public/Home/HomeBg03.jpg";

// Partner Logos
import microsoftLogo from "../../../public/logos/MicrosoftLogo.png";
import appianLogo from "../../../public/logos/appianLogo.png";
import servicenowLogo from "../../../public/logos/ServiceNowLogo.png";
import gluwareLogo from "../../../public/logos/gluwareLogo.png";
import uipathLogo from "../../../public/logos/UiPath-Logo.png";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [curtainIndex, setCurtainIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const baseRef = useRef(null);
  const curtainRef = useRef(null);

  const slides = [
    { src: backgroundImage01, alt: "Hero Background 1" },
    { src: backgroundImage02, alt: "Hero Background 2" },
    { src: backgroundImage03, alt: "Hero Background 3" },
  ];

  const slideFeatures = [
    { title: "AI-Driven Automation", desc: "AI-driven efficiency, reduced manual effort." },
    { title: "Security & Compliance", desc: "Built for regulated industries and growth-focused businesses." },
    { title: "Digital Transformation", desc: "Modernize legacy IT systems with intelligent workflows." },
    { title: "Proactive Managed Services", desc: "24/7 monitoring, predictable SLAs, continuous optimization." },
    { title: "Operational Resilience", desc: "Reduce downtime, accelerate decision-making, scale with confidence." },
    { title: "Platform Expertise", desc: "ServiceNow, Microsoft 365, UiPath, Atlassian Jira & others." },
  ];

  const partners = [
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ServiceNow", logo: servicenowLogo },
    { name: "UiPath", logo: uipathLogo },
    { name: "Gluware", logo: gluwareLogo },
    { name: "Appian", logo: appianLogo },
    // duplicates for seamless loop
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ServiceNow", logo: servicenowLogo },
    { name: "UiPath", logo: uipathLogo },
    { name: "Gluware", logo: gluwareLogo },
    { name: "Appian", logo: appianLogo },
  ];

  /* ---------- Entrance Animations ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-inner", { y: "105%" });
      gsap.set(".hero-sub-text, .partners-marquee, .right-content-box", { opacity: 0, y: 20 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(".hero-line-1 .reveal-inner, .hero-line-2 .reveal-inner", {
        y: "0%",
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
      })
      .to(".hero-sub-text", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .to(".partners-marquee", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4")
      .to(".right-content-box", { opacity: 1, y: 0, duration: 1 }, "-=0.8");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Background & Dynamic Content Cycle ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const transition = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextIndex = (index + 1) % slideFeatures.length;
        const nextImgIndex = (index + 1) % slides.length;

        // Text Transition (Right Side)
        gsap.to(".feature-text", {
          opacity: 0,
          y: -15,
          duration: 0.5,
          onComplete: () => {
            setIndex(nextIndex);
            gsap.fromTo(".feature-text", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 });
          }
        });

        // Background Curtain
        gsap.set(curtainRef.current, { yPercent: 100, display: "block" });
        gsap.to(curtainRef.current, {
          yPercent: 0,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(baseRef.current, { scale: 1 });
            gsap.to(curtainRef.current, {
              opacity: 0,
              duration: 0.35,
              onComplete: () => {
                gsap.set(curtainRef.current, { yPercent: 100, opacity: 1, display: "none" });
                setCurtainIndex((nextImgIndex + 1) % slides.length);
                setIsAnimating(false);
              },
            });
          },
        });
      };

      const interval = setInterval(transition, 4000);
      return () => clearInterval(interval);
    }, containerRef);
    return () => ctx.revert();
  }, [index, isAnimating]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-white flex items-center">
      
      {/* ---------- Background Layers ---------- */}
      <div className="absolute inset-0 z-0">
        <div ref={baseRef} className="absolute inset-0">
          <Image src={slides[index % slides.length].src} alt="bg" fill priority className="object-cover" />
        </div>
        <div ref={curtainRef} className="absolute inset-0 hidden" style={{ zIndex: 1 }}>
          <Image src={slides[curtainIndex].src} alt="bg-next" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/10 z-10" />
        <div className="absolute inset-0 bg-white/30 z-10" />
      </div>

      {/* ---------- Main Content Grid ---------- */}
      <main className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-12 md:px-24 lg:px-40 w-full items-center">
        
        {/* Left Side Container */}
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-left font-regular heading-default leading-tight mb-6">
            <span className="hero-line-1 block overflow-hidden pb-1">
              <span className="reveal-inner block">Transform IT</span>
            </span>
            <span className="hero-line-2 block overflow-hidden pb-1">
              <span className="reveal-inner block">Intelligently</span>
            </span>
          </h1>

          <div className="hero-sub-text text-base sm:text-xl text-left leading-relaxed mb-8 max-w-lg text-slate-500">
            <p>Turning IT into a future-ready, intelligent digital engine.</p>
            <p>AI-driven automation that modernizes systems and workflows.</p>
          </div>

          <div className="w-fit hero-cta mb-12">
            <ModernCapsuleCTA href="/contact" text="Schedule a Consultation" />
          </div>

          {/* --- PARTNERS INFINITE SCROLL (Integrated Below Left Content) --- */}
          <div className="partners-marquee w-full max-w-lg relative overflow-hidden group">
            {/* Fade overlays */}
            {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-white/90 to-transparent z-10" /> */}
            {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-white/90 to-transparent z-10" /> */}

            <div className="flex w-max animate-marquee gap-10 items-center">
              {partners.map((partner, i) => (
                <div key={i} className="shrink-0 opacity-60 hover:opacity-100 transition duration-300">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    height={35} 
                    className=" hover:grayscale-0 object-contain h-8 w-auto" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Slide Content */}
        <div className="right-content-box hidden md:flex flex-col items-end  text-right">
          <div className="feature-text max-w-sm border-r-4 border-primary pr-6 py-2">
            {/* <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Capabilities</h3> */}
            <h2 className="text-2xl lg:text-3xl font-semibold heading-default mb-2 leading-tight">
              {slideFeatures[index].title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {slideFeatures[index].desc}
            </p>
          </div>
        </div>
      </main>

      {/* Tailwind Animation Config (Add to tailwind.config.ts) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Hero;