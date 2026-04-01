"use client";
import React from "react";

export default function ServiceGrid({ title, heading, subheading, items = [] }) {
  return (
    <div className="mt-10">
      {/* GRID CONTAINER */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0">

        {/* 1. IMAGE PANEL — Right side on desktop */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg md:col-span-7 md:col-start-6 md:row-start-1 z-0 ">
          <div className="px-6 py-8 md:px-8 md:py-10 h-full w-full">
            <div className="flex md:justify-between h-full">

              {/* Spacer */}
              <div className="hidden md:block md:w-[20%] lg:w-[30%]" />

              {/* Text Content */}
              <div className="flex flex-col justify-start md:w-[80%] lg:w-[70%] gap-4">
                {/* Category label */}
                <span className="text-xs font-regular uppercase tracking-wide bg-slate-500/15 border border-slate-500/20 rounded-md px-3 py-1 w-fit">
                  {title}
                </span>

                {/* Main heading */}
                <h2 className="text-xl lg:text-2xl heading-default font-bold text-primary leading-snug tracking-wide mt-2">
                  {heading}
                </h2>

                {/* Subheading */}
                <p className="text-sm md:text-base content-default leading-relaxed md:w-[90%]">
                  {subheading}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONTENT CARD — Left side on desktop, overlapping */}
        <div className="relative z-10 -mt-3 md:mt-0 md:col-span-6 md:col-start-1 md:row-start-1 lg:col-start-1 lg:col-span-7">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-md md:shadow-xl px-4 py-4 md:px-6 md:py-5">
            {items.map((item) => (
              <div
                className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
                key={item.id}
              >
                {/* Icon */}
                <div className="shrink-0 mt-0.5 p-2 rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm md:text-base font-semibold text-primary leading-snug">
                    {item.heading}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    {item.subhead}
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
