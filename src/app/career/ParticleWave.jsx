"use client";
import React, { useRef, useEffect } from "react";

const ParticleWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let count = 0;

    // Configuration
    const gap = 20; // Space between dots
    const amountX = 50;
    const amountY = 50;
    const particleColor = "#6366f1"; // Indigo-500

    const render = () => {
      // Handle resizing
      if (
        canvas.width !== canvas.clientWidth ||
        canvas.height !== canvas.clientHeight
      ) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Center the grid
      const offsetX = (canvas.width - amountX * gap) / 2;
      const offsetY = (canvas.height - amountY * gap) / 2;

      for (let ix = 0; ix < amountX; ix++) {
        for (let iy = 0; iy < amountY; iy++) {
          const posX = ix * gap + offsetX;
          const posY =
            iy * gap +
            offsetY +
            Math.sin((ix + count) * 0.3) * 20 +
            Math.sin((iy + count) * 0.5) * 20;

          const opacity = (Math.sin((ix + count) * 0.3) + 1) / 2;

          ctx.beginPath();
          ctx.arc(posX, posY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 102, 241, ${opacity * 0.8 + 0.2})`;
          ctx.fill();
        }
      }

      count += 0.05; // Speed of the wave
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-4xl font-bold tracking-tight">
          Next.js Particle Background
        </h2>
      </div>
    </div>
  );
};

export default ParticleWave;
