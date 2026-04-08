import React from 'react';
import Getintouch from '@/constants/constgetintouch';
import Section from '@/components/layouts/Section';
import { clsx } from 'clsx'; // Optional, but makes reading classes easier
import Heading from '@/components/Heading';
export default function GetinTouch() {
    return (
        <Section className='w-full bg-white overflow-hidden py-12'>
            <div className="container mx-auto px-4 text-center">

                {/* Header Section */}
                <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
                  <Heading
                  headline="Our Offices"
                  subheadline='Choose how you’d like to reach us — connecting with us is easy.'
                  maxWidth='max-w-[700]'
              
                />
                </div>
                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                    {Getintouch.map((item, index) => {
                        // Check if this is the "Follow Us" card (assuming it is the 3rd one, id: 3)
                        const isFollowUsCard = item.id === 3;
                        const isUs = item.id === 1;
                        const isIndia = item.id === 2
                        return (
                            <div
                                key={item.id || index}
                                className=" group w-full max-w-sm bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                            >
                                {/* Content Wrapper */}
                                <div className=" flex flex-col px-6 py-8 h-full">
                                    
                                    {/* Heading */}
                                    <div className="card-heading flex items-center gap-1   font-semibold text-xl mb-3 text-left">
                                        {/* Render Head Icon */}
                                        <span className="text-blue-900">
                                            {<item.headIcon/>}
                                        </span>
                                        <h3 className='card-heading-title mt-1'>{item.heading}</h3>
                                        <span className='card-heading-underline'></span>
                                    </div>

                                    {/* Description */}
                                    {/* FIX 1: Removed 'flex-grow'. Now text sits naturally at the top. */}
                                    <p className=" card-subtitle text-left mb-6 mt-2 transition-colors duration-300 group-hover:text-white">
                                        {item.subHeading}
                                    </p>

                                    {/* Footer Info / Buttons */}
                                   <div className="w-full mt-1 space-y-3">
                                    {item.details.map((item, index) => (
                                        <div 
                                            key={index} 
                                            className={clsx(
                                                "flex items-center gap-3 text-[16px] transition-colors",
                                                        isFollowUsCard 
                                                            ? "w-full border border-gray-300 rounded-lg px-4 py-2.5 hover:bg-gray-50 cursor-pointer font-medium text-gray-700"
                                                            : "text-gray-600 font-normal py-1"
                                            )}
                                        >
                                            {/* Render the specific icon for this line */}
                                            <item.icon className={clsx("h-6 w-6 shrink-0", isFollowUsCard ? "text-gray-800" : "text-blue-800")} />
                                            
                                               {item.reflink?<span>
                                                <a 
                                                href={item.reflink} 
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                  {item.text} 
                                                  </a></span>:<span>{item.text}</span>} 
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}