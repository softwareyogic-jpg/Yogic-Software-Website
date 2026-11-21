import React from 'react';

interface SunRayGlowProps {
  className?: string;
  size?: number | string;
  intensity?: number;
}

export const SunRayGlow: React.FC<SunRayGlowProps> = ({
  className = '',
  size = 600,
  intensity = 0.15
}) => {
  return (
    <div
      className={`absolute pointer-events-none select-none rounded-full flex items-center justify-center -z-10 ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(237, 185, 10, ${intensity * 1.5}) 0%, rgba(249, 125, 7, ${intensity}) 40%, rgba(10, 107, 219, ${intensity * 0.4}) 70%, transparent 85%)`,
        filter: 'blur(30px)'
      }}
      aria-hidden="true"
    >
      {/* Subtle geometric sun rays */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full opacity-30 animate-spin-slow"
      >
        <circle cx="100" cy="100" r="28" fill="none" stroke="#EDB90A" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#F97D07" strokeWidth="0.5" strokeDasharray="4 6" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + 90 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke="#EDB90A"
            strokeWidth="0.75"
            strokeOpacity="0.35"
          />
        ))}
      </svg>
    </div>
  );
};

