import React, { useState } from 'react';
import { Eye, Target } from 'lucide-react';

export const VisionMissionFlip: React.FC = () => {
  const [flippedVision, setFlippedVision] = useState(false);
  const [flippedMission, setFlippedMission] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* VISION CARD */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFlippedVision(!flippedVision)}
          onKeyDown={(e) => e.key === 'Enter' && setFlippedVision(!flippedVision)}
          className="group relative min-h-[260px] sm:min-h-[280px] rounded-3xl p-8 bg-gradient-to-br from-midnight via-brand-navy to-midnight border border-amber-gold/40 shadow-2xl transition-all duration-300 hover:border-amber-gold hover:shadow-amber-gold/20 flex flex-col justify-between cursor-pointer select-none"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-gold/20 text-amber-gold flex items-center justify-center border border-amber-gold/40">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-gold font-bold">
                Tap to Flip · Vision
              </span>
            </div>

            <h4 className="text-2xl font-heading font-extrabold text-white">Our Vision</h4>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              To become India’s most trusted and most loved technology brand in secure digital finance and device protection, built on innovation, integrity and long-term relationships.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-amber-gold">
            <span>Guiding Aspiration</span>
            <span>&rarr;</span>
          </div>
        </div>

        {/* MISSION CARD */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFlippedMission(!flippedMission)}
          onKeyDown={(e) => e.key === 'Enter' && setFlippedMission(!flippedMission)}
          className="group relative min-h-[260px] sm:min-h-[280px] rounded-3xl p-8 bg-gradient-to-br from-midnight via-deep-navy to-midnight border border-royal-blue/40 shadow-2xl transition-all duration-300 hover:border-royal-blue hover:shadow-royal-blue/20 flex flex-col justify-between cursor-pointer select-none"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-royal-blue/20 text-cyan-300 flex items-center justify-center border border-royal-blue/40">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold">
                Tap to Flip · Mission
              </span>
            </div>

            <h4 className="text-2xl font-heading font-extrabold text-white">Our Mission</h4>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              To empower retailers, businesses and families with simple, powerful and affordable security technology, backed by dependable support that is always available when needed.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-300">
            <span>Daily Mandate</span>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
