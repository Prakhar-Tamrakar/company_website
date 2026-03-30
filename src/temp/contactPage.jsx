'use client'
import { Phone, Compass, CheckCircle2 } from 'lucide-react';
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Section from '@/components/layouts/Section';
export const metadata = {
  title: "Contact Us",
  description:
    "Contact our team for inquiries, support, or partnership opportunities.",
 keywords:[
    'Schedule a demo',
	'IT consultation',
	'Request a proposal',
	'Automation consulting',
	'Partner program',
    'Technology alliances',
    'Technology partners',
	'Staffing partners',
	'Delivery partners',
	'Reseller partners',
 ]
}
const page = ( heroBgImage = "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") => {
  const helpItems = [
        "Understanding our Services or Solutions",
        "Scheduling a Demo or Consultation",
        "Requesting a Proposal or Quote",
        "Partnering with Us",
        "Career & Talent Inquiries"
    ];
    const bgImageRef = useRef(null);
     const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.4 },
      });

      // Background fade and slight scale down for a "settling" feel
      tl.fromTo(
        bgImageRef.current,
        { opacity: 0 },   
        { opacity: 1, duration: 2 },
      );

    }, container);

    return () => ctx.revert();
  }, []);
    return (
        <section ref={container}
      className="relative min-h-[65vh] lg:min-h-[80vh] flex items-center justify-center bg-white overflow-hidden px-6 py-20">
               {/* 🖼️ BACKGROUND LAYER */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 opacity-0">
        <img
          src={heroBgImage}
          alt="Centered Background"
          className="w-full h-full object-cover"
        />

        {/* CENTER-FOCUSED SCRIM: Lightest in the center for text clarity */}
        <div className="absolute inset-0 bg-white" />
      </div>

            <div className='container relative z-10 w-full max-w-7xl mx-auto  pt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    
                    {/* Left Content */}
                    <div className='text-white'>
                        {/* Badge */}
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-sm font-medium mb-6'>
                            <Phone className='h-4 w-4' /> 
                            <span>Contact Us</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className='text-xl md:text-xl font-semibold mb-6 tracking-normal'>
                            Let&apos;s Make IT Work for You
                        </h1>

                        {/* Quote */}
                        <p className='text-xl md:text-xl italic font-light text-white/90 mb-6'>
                            “Every great solution starts with a conversation.”
                        </p>

                        {/* Description */}
                        <p className='text-gray-400 text-lg leading-relaxed max-w-xl'>
                            Whether you&apos;re exploring intelligent automation, looking to optimize your IT infrastructure, or just want to understand what&apos;s possible — our team is ready to help.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className='w-full grid justify-end mt-4'>
                        <div className='bg-[#131C35] border border-blue-900/30 rounded-xl p-8 md:p-10 shadow-2xl'>
                            
                            {/* Card Header */}
                            <div className='flex items-center gap-3 mb-4 text-gray-200'>
                                <Compass className='h-6 w-6 text-gray-400' />
                                <h3 className='text-lg font-regular'>We&apos;re Here to Help With...</h3>
                            </div>
                            {/* List */}
                            <ul className='space-y-3'>
                                {helpItems.map((item, index) => (
                                    <li key={index} className='flex items-start gap-4'>
                                        <CheckCircle2 className='h-5 w-5 text-emerald-500 shrink-0 mt-0.5' />
                                        <span className='text-gray-300 text-base md:text-base font-light'>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default page