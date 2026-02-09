// 'use client'
import React from 'react'
import { Phone, Compass, CheckCircle2 } from 'lucide-react';
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
const page = () => {
  const helpItems = [
        "Understanding our Services or Solutions",
        "Scheduling a Demo or Consultation",
        "Requesting a Proposal or Quote",
        "Partnering with Us",
        "Career & Talent Inquiries"
    ];
    return (
        <Section className="relative h-full w-full bg-slate-950 overflow-hidden" background='bg-center flex items-center'>
            <div className='container mx-auto px-6  py-10'>
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
        </Section>
    );
}

export default page
