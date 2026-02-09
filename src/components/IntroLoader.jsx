"use client";

import { useEffect, useState } from "react";

export default function IntroLoader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // duration of loader

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#010518] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-playfair tracking-wide">
          i-Connectresources
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Engineering digital solutions
        </p>

        {/* Simple loader */}
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/20 mx-auto">
          <div className="h-full w-full bg-white animate-loader" />
        </div>
      </div>
    </div>
  );
}
