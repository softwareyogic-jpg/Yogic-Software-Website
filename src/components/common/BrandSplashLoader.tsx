import React, { useState, useEffect } from 'react';

interface BrandSplashLoaderProps {
  onComplete?: () => void;
  durationMs?: number;
}

export const BrandSplashLoader: React.FC<BrandSplashLoaderProps> = ({
  onComplete,
  durationMs = 1500,
}) => {
  const [phase, setPhase] = useState<'visible' | 'unveiling' | 'finished'>('visible');

  useEffect(() => {
    // Hold logo cleanly, then unveil
    const timer = setTimeout(() => {
      setPhase('unveiling');
      const finishTimer = setTimeout(() => {
        setPhase('finished');
        if (onComplete) onComplete();
      }, 600);
      return () => clearTimeout(finishTimer);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  if (phase === 'finished') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-midnight transition-all duration-700 pointer-events-none select-none ${
        phase === 'unveiling'
          ? 'opacity-0 scale-125'
          : 'opacity-100 scale-100'
      }`}
      aria-label="Loading Yogic Software"
    >
      {/* Soft ambient back glow matching brand royal-blue and sunrise-orange */}
      <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-royal-blue/25 via-transparent to-sunrise-orange/20 blur-3xl animate-pulse pointer-events-none" />

      {/* Pure, borderless, clean brand crescent emblem */}
      <div className="relative z-10 w-32 sm:w-40 md:w-48 h-auto flex items-center justify-center">
        <img
          src="/assets/yogic_emblem.png"
          alt="Yogic Software"
          className="w-full h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(249,125,7,0.35)] animate-pulse"
        />
      </div>
    </div>
  );
};
