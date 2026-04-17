// 'use client'
import React from 'react'
import { Phone, Compass, CheckCircle2 } from 'lucide-react';
import Section from '@/components/layouts/Section';

export const metadata = {
    title: "Contact Us",
    description:
        "Contact our team for inquiries, support, or partnership opportunities.",
    keywords: [
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
const page = () => {
    const helpItems = [
        "Understanding our Services or Solutions",
        "Scheduling a Demo or Consultation",
        "Requesting a Proposal or Quote",
        "Partnering with Us",
        "Career & Talent Inquiries"
    ];
    return (
        <Section className="relative min-h-[65vh] lg:min-h-[80vh] w-full overflow-hidden flex items-center" background='bg-white'>
            {/* Hero background layer (light mode) */}
            <div className="absolute inset-0 z-0">
                <img
                    // src="https://images.pexels.com/photos/7709288/pexels-photo-7709288.jpeg"
                    src="/shutterstock/Contact/contactUsHero.png"
                    alt="Contact hero background"
                    className="w-full h-full object-cover opacity-40"
                />
                {/* <div className="absolute inset-0 bg-linear-to-r from-white via-white/60 to-transparent" /> */}
                <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-white/0" />

            </div>

            <div className='container relative z-10 mx-auto px-6 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                    {/* Left Content */}
                    <div className='text-slate-900'>
                        {/* Badge */}
                 
                        {/* Main Heading */}
                        <h1 className='text-4xl  font-regular mb-6 tracking-tight text-slate-900 leading-tight heading-default'>
                            Let&apos;s Make IT Work <br /> for You
                        </h1>

                        {/* Quote */}
                        <p className='text-xl italic font-serif text-slate-700 mb-8 border-l-4 border-primary pl-6 py-2'>
                            “Every great solution starts with a conversation.”
                        </p>

                        {/* Description */}
                        <p className='content-default text-base leading-relaxed max-w-xl text-slate-600 font-medium'>
                            Whether you&apos;re exploring intelligent automation, looking to optimize your IT infrastructure, or just want to understand what&apos;s possible — our team is ready to help.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className='w-full flex justify-end mt-4'>
                        <div className='bg-primary/30 border-2  border-slate-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] max-w-lg'>

                            {/* Card Header */}
                            <div className='flex items-center gap-4 mb-8'>
                                <div className='size-12 rounded-2xl bg-primary flex items-center justify-center'>
                                    <Compass className='h-6 w-6 text-white' />
                                </div>
                                <h3 className='text-xl  text-slate-900 uppercase tracking-tight'>We&apos;re Here to Help With...</h3>
                            </div>
                            {/* List */}
                            <ul className='space-y-4'>
                                {helpItems.map((item, index) => (
                                    <li key={index} className='flex items-end gap-4 group'>
                                        <div className='mt-1 bg-emerald-50 rounded-full p-1 group-hover:bg-emerald-100 transition-colors'>
                                            <CheckCircle2 className='h-4 w-4 text-emerald-600 shrink-0' />
                                        </div>
                                        <span className='text-slate-600 text-base md:text-lg font-medium leading-tight group-hover:text-slate-900 transition-colors'>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
export default page