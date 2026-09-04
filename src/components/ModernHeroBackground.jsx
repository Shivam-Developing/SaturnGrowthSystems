import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ModernHeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Deep Space Obsidian Base */}
      <div className="absolute inset-0 bg-[#0a0a0c]" />

      {/* 2. Interactive Spotlight that tracks cursor with vivid luminescence */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-80"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x || '50%'}px ${mousePos.y || '30%'}px, rgba(0, 223, 97, 0.14), transparent 60%)`,
        }}
      />

      {/* 3. Luminous Floating Glow Orbs (High-Definition Color Presence) */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.92, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-28 left-1/4 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-[#00df61]/28 via-[#00df61]/12 to-transparent blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -55, 45, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.15, 0.88, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-16 right-1/4 w-[640px] h-[640px] rounded-full bg-gradient-to-bl from-[#00b4d8]/22 via-[#0077b6]/8 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, 35, -45, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#E5A93C]/14 via-[#00df61]/8 to-transparent blur-[110px]"
      />

      {/* 4. Vivid Cybernetic Matrix Grid with Radial Vignette Mask */}
      <div
        className="absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 45%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 45%, transparent 85%)',
        }}
      />

      {/* 5. Luminous Vertical Telemetry Beams & Pulse Dots */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute right-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />
        <div className="absolute left-[32%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute right-[32%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent" />
      </div>

      {/* 6. Soft Vignette Fade into Divider */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
    </div>
  );
}
