import React from 'react';

export default function SaturnLogo({ className = '', iconOnly = false, iconSize = "w-9 h-9" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Saturn Emblem */}
      <div className={`relative ${iconSize} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(0,223,97,0.35)] transition-transform duration-500 hover:rotate-12"
        >
          <defs>
            {/* Core Sphere Gradient */}
            <radialGradient id="saturnCore" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#00df61" />
              <stop offset="85%" stopColor="#065f2c" />
              <stop offset="100%" stopColor="#032612" />
            </radialGradient>

            {/* Outer Orbital Ring Gradient */}
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9bffc1" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00df61" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#043819" stopOpacity="0.1" />
            </linearGradient>

            {/* Inner Ring Glow */}
            <linearGradient id="ringGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00df61" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Back half of orbital ring */}
          <ellipse
            cx="24"
            cy="24"
            rx="21"
            ry="7.5"
            transform="rotate(-26 24 24)"
            stroke="url(#ringGrad)"
            strokeWidth="1.8"
            strokeDasharray="4 2"
            opacity="0.5"
          />

          {/* Core Sphere */}
          <circle
            cx="24"
            cy="24"
            r="11.5"
            fill="url(#saturnCore)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.8"
          />

          {/* Front half of orbital ring */}
          <path
            d="M 5.8 28.5 A 21 7.5 -26 0 0 42.2 19.5"
            stroke="url(#ringGlow)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Satellite / Growth Node Indicator */}
          <circle cx="39.5" cy="18" r="2" fill="#ffffff" className="animate-pulse" />
          <circle cx="39.5" cy="18" r="3.5" stroke="#00df61" strokeWidth="0.8" opacity="0.7" />
        </svg>
      </div>

      {/* Brand Wordmark & Discipline Subline */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-syne font-extrabold text-base sm:text-lg tracking-[0.18em] text-white uppercase group-hover:text-saturn-green transition-colors">
              SATURN
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.24em] text-saturn-green font-bold uppercase mt-0.5">
            GROWTH SYSTEMS
          </span>
        </div>
      )}
    </div>
  );
}
