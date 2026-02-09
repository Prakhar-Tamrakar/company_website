'use client';
import React from 'react'
export default function ServiceGrid(
    {
        title,
        heading,
        subheading,
        items= []
    }
) {
  return (<div className='mt-10'>
      {/* GRID LAYOUT */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center">
        {/* 1. IMAGE (Now on the Right Side) 
           - Mobile: Full width
           - Desktop: Spans cols 5-12 (The right side of the grid)
        */}
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg md:col-span-7 md:col-start-1 md:row-start-1 z-0">
        <div className=' px-3 py-4 bg-[radial-gradient(200%_200%_at_55%_-20%,rgba(1,1,1,1),rgb(10,21,61)_45%,rgba(1,5,24,1)_100%)] h-full w-full md:px-5 md:py-7'>
                   <div className="flex md:justify-between">

             <div className='flex flex-col text-white md:w-[80%] lg:w-[72%]'>
                    <span className=' text-xs mb-2 py-1 md:text-sm bg-gray-700 rounded-sm p-2 text-white w-fit'>{title}</span>
                    <p className= 'w-full tracking-normal text-md md:text-2xl lg:text-3xl text-white md:mt-8 md:tracking-wide'>{heading}
                    </p>
                    <p className='w-full tracking-tight mt-2 pb-2 md:w-[90%] text-white text-xs md:mt-4 md:tracking-wide'>{subheading}
                    </p>
                </div>
                 <div className="md:w-[20%] lg:w-[28%]"></div>
                </div>
        </div>
        </div>
        {/* 2. CONTENT CARD (Now on the Left Side)
           - Mobile: Stacks below image with -mt-12 overlap
           - Desktop: Spans cols 1-6 (The left side).
           - Overlap: Because Card ends at col 6 and Image starts at col 5, they overlap in the middle.
        */}
        <div className="relative z-10 -mt-3 md:mt-0 md:mx-0 md:col-span-7 md:col-start-6 lg:col-start-6 md:row-start-1 lg:col-span-8">
          <div className="bg-white py-2 shadow-sm lg:p-3 rounded-2xl md:rounded-3xl  md:shadow-xl ">
            {/* Tag */}
            {items.map((item)=>(
                <div className='flex mb-1 lg:mb-2' key={item.id}>
                    <div className='flex items-center justify-center p-3'> {<item.icon className='h-4 w-4 md:h-5 md:w-5 text-primary'/>} </div>
            {/* Description */}
            <div>
              <p className='text-sm text-primary lg:text-[100%]'>{item.heading}</p>
            <p className="text-xs traacking-tighter  sm:text-md lg:text-[85%] sm:leading-relaxed">{item.subhead}</p>
            </div>
            </div>
            ))}
          </div>
        </div>

      </div>
      </div>
  );
}