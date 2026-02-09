'use client';
import React from 'react'
import Section from "@/components/layouts/Section";
export default function ServiceGrid(
    {
        title,
      heading,
         subheading,
        items= []
    }
) {
  return (
    <div className='mt-10'>
      {/* GRID CONTAINER 
        - Mobile: 1 column (Stacking)
        - Desktop: 12 columns (Overlapping)
      */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center">
        
        {/* 1. IMAGE AREA 
          - Mobile: Simple block 
          - Desktop: Spans cols 6-12, Row 1 (Right Side)
        */}
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg md:col-span-7 md:col-start-6 md:row-start-1 z-0 ">
         <div className='px-3 py-4 bg-[radial-gradient(200%_200%_at_55%_-20%,rgba(1,1,1,1),rgb(10,21,61)_45%,rgba(1,5,24,1)_100%)] h-full w-full md:px-5 md:py-7'>
            <div className="flex md:justify-between">
             <div className=" md:w-[20%] lg:w-[30%]"></div>
             <div className='flex flex-col text-white md:w-[80%] lg:w-[70%]'>
                    <span className=' text-xs py-1 mb-2  md:text-sm bg-gray-700 rounded-sm p-2 text-white w-fit'>{title}</span>
                    <p className= 'w-full tracking-normal text-md md:text-2xl lg:text-3xl  w-full  text-white md:mt-8 md:tracking-wide'>{heading}
                    </p>
                    <p className='w-full tracking-tight md:w-[75%]  md:w-[90%] mt-2 pb-2 text-white text-xs md:mt-4 md:tracking-wide'>{subheading}
                    </p>
                </div>
                </div>
        </div>
        </div>
        {/* 2. CONTENT CARD 
          - Mobile: Pushes up (-mt-12) to overlap image slightly
          - Desktop: Spans cols 1-6, Row 1 (Left Side). 
            Because it shares 'row-start-1' with the image, it overlaps it.
        */}
        <div className="relative z-10 -mt-3 md:mt-0 md:mx-0 md:col-span-6 md:col-start-1 md:row-start-1 lg:col-start-1 lg:col-span-7">
          <div className="bg-white py-2 shadow-sm lg:p-2 rounded-2xl md:rounded-3xl  md:shadow-xl"> 
            {items.map((item)=>(
                <div className='flex mb-1 lg:mb-2' key={item.id}>
                    <div className='flex items-center justify-center  p-3'> {<item.icon className='h-4 w-4 md:h-5 md:w-5 text-primary'/>} </div>
            {/* Description */}
            <div>
               <p className='text-sm text-primary lg:text-[100%]'>{item.heading}</p>   
            <p className="text-xs traacking-tighter sm:text-sm lg:text-[85%]  sm:leading-relaxed">{item.subhead}
            </p>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
}