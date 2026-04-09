"use client";
import React from "react";

export default function ServiceGrid({ id, title, heading, subheading,head2, items = [] }) {
  return (
    <div id={id} className="mt-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-blue-50 via-slate-90 to-white px-6 py-8 md:px-8 md:py-10">
            <div className="flex flex-col gap-4 max-w-2xl">
              {/* Category label */}
              <span className="text-xs font-regular uppercase tracking-wide bg-slate-800/10 border border-slate-100/10 rounded-md px-3 py-1 w-fit">
                {title}
              </span>

              {/* Main heading */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-bold leading-snug tracking-wide">
                {heading} 
              </h2>

              {/* Subheading */}
              <p className="text-sm md:text-base content-default leading-relaxed">
                {subheading}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-8 md:px-8 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  key={item.id}
                >
                  {/* Icon */}
                  {/* <div className="shrink-0 p-3 rounded-lg bg-primary/10"> */}
                    <item.icon className="h-6 w-6 text-black" />
                  {/* </div> */}

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-semibold text-primary leading-snug">
                      {item.heading}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.subhead}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}