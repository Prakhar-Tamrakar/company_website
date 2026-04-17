"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Cpu, ShieldCheck, LayoutGrid, Activity, ExternalLink } from 'lucide-react';
import ModernCapsuleCTA from '@/components/ModernCapsuleCTA';

const ModernITAHero = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  
  // Refs for GSAP targeting
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const cardRef = useRef(null);

  const capabilities = [
    { title: "AI-Driven Automation", desc: "Reduced manual effort.", icon: <Cpu /> },
    { title: "Security & Compliance", desc: "Regulated growth.", icon: <ShieldCheck /> },
    { title: "Digital Transformation", desc: "Modernize legacy IT.", icon: <LayoutGrid /> },
    { title: "Proactive Services", desc: "24/7 monitoring.", icon: <Activity /> }
  ];

  // Logic for the cycling capability cards
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out, change content, fade in
      gsap.to(cardRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        onComplete: () => {
          setActiveCapability((prev) => (prev + 1) % capabilities.length);
          gsap.to(cardRef.current, { opacity: 1, y: 0, duration: 0.4 });
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Particle setup
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const p = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    }));
    setParticles(p);
  }, []);

  // Entrance & Background Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(headlineRef.current, 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
      .fromTo(subheadlineRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"
      )
      .fromTo(ctaRef.current, 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5 }, "-=0.4"
      )
      .fromTo(imageRef.current, 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2 }, "-=1"
      )
      .fromTo(statsRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }, "-=0.5"
      );

      // Animate particles
      gsap.to(".particle", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 5 }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [particles]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] lg:min-h-screen bg-[#FDFDFF] overflow-hidden flex flex-col justify-center">
      
      {/* --- Mobile simple background --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-20 z-0 lg:hidden" />

      {/* --- Desktop Dark Right Split with Illustrations --- */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-[#0a0f1c] z-0 hidden lg:block overflow-hidden -skew-x-6 origin-bottom-right shadow-2xl">
        {/* Unskew the contents so the illustrations aren't distorted */}
        <div className="absolute inset-0 w-full h-full skew-x-6 translate-x-[5%]">
          
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Abstract Tech Illustration SVG */}
          <svg className="absolute -left-[10%] top-0 w-[120%] h-full opacity-30 pointer-events-none" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <path d="M0 200 C 250 50 750 350 1000 200" stroke="#818cf8" strokeWidth="2" fill="none" strokeDasharray="5 10"/>
            <path d="M0 500 C 350 300 650 700 1000 500" stroke="#818cf8" strokeWidth="1.5" fill="none" />
            <path d="M0 800 C 250 650 750 950 1000 800" stroke="#818cf8" strokeWidth="4" fill="none" opacity="0.3"/>
            
            {/* Geometric orbital rings */}
            <circle cx="750" cy="500" r="300" stroke="#818cf8" strokeWidth="1" fill="none" strokeDasharray="2 8" />
            <circle cx="750" cy="500" r="200" stroke="#4f46e5" strokeWidth="2" fill="none" opacity="0.6"/>
            <circle cx="750" cy="500" r="100" stroke="#6366f1" strokeWidth="1" fill="none" />
            
            <rect x="700" y="450" width="100" height="100" stroke="#818cf8" fill="none" strokeWidth="2" transform="rotate(45 750 500)" opacity="0.7"/>
            <path d="M 750 150 L 750 850" stroke="#818cf8" strokeWidth="1" opacity="0.4" strokeDasharray="10 10" />
            <path d="M 400 500 L 1100 500" stroke="#818cf8" strokeWidth="1" opacity="0.4" strokeDasharray="10 10" />
          </svg>
          
          {/* Glowing Atmospheric Orbs */}
          <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-indigo-600/30 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-[10%] right-[30%] w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        </div>
      </div>
      
      {/* Particles Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <div 
            key={p.id}
            className="particle absolute rounded-full bg-slate-400/30 blur-[1px] lg:bg-white/10"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 pr-0 lg:pr-10">
            <div className="overflow-hidden mb-3">
              <p className="text-blue-600 font-medium tracking-widest uppercase text-[11px]">
                Intelligence Augmented
              </p>
            </div>
            
            <h1 ref={headlineRef} className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Transform IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Intelligently.
              </span>
            </h1>

            <p ref={subheadlineRef} className="text-base text-slate-500 max-w-lg mb-10 leading-relaxed font-light">
              Turning IT into a future-ready, intelligent digital engine. 
              AI-driven automation that modernizes systems and workflows.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <ModernCapsuleCTA 
                href="/contact#form" 
                text="Schedule a Consultation" 
              />
            </div>

            {/* Trust Metrics */}
            <div ref={statsRef} className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 max-w-lg">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">20+</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Years Exp</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">90+</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Professionals</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">10+</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Global Clients</p>
              </div>
            </div>
          </div>

          {/* Image & Animated Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div ref={imageRef} className="rounded-[2rem] overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Professional" 
                className="w-full h-[500px] object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
              />
            </div>

            {/* GSAP Managed Capability Card */}
            <div 
              ref={cardRef}
              className="absolute -bottom-5 -left-4 md:-left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3 [&>svg]:w-5 [&>svg]:h-5">
                {capabilities[activeCapability].icon}
              </div>
              <h4 className="text-base font-semibold text-slate-800 leading-tight">
                {capabilities[activeCapability].title}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 font-light">
                {capabilities[activeCapability].desc}
              </p>
              
              <div className="mt-4 flex gap-1.5">
                {capabilities.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i === activeCapability ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-200'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernITAHero;