import React, { useState, useRef } from 'react';
import { Sun, Calendar, TrendingUp, Layers, MapPin, Globe, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface JourneyFilmStripProps {
  onComplete?: () => void;
}

const TIMELINE_FRAMES = [
  {
    year: '2021',
    tag: 'FOUNDATION',
    title: 'Yogic Software is Founded in Kolkata',
    description:
      'Subrata Mukherjee establishes Yogic Software Pvt. Ltd. with a vision to connect spirit with technology and build disciplined digital systems.',
    icon: Calendar,
    color: '#F97D07',
  },
  {
    year: '2022',
    tag: 'MARKET TRACTION',
    title: 'First Finance Locker Solution Reaches Retailers',
    // [VERIFY: exact date of initial Astra Shakti pilot rollout]
    description:
      'Retailers in eastern India adopt Yogic Astra Core to eliminate EMI device loss, proving 100% remote lock certainty.',
    icon: TrendingUp,
    color: '#EDB90A',
  },
  {
    year: '2023',
    tag: 'RAPID EXPANSION',
    title: 'Ecosystem Grows to 9 Specialized Products',
    description:
      'Expanding beyond EMI into family digital protection (Y Gen Care, Kids Care) and cybersecurity tools (Y Commander, Mobi Protect).',
    icon: Layers,
    color: '#0A6BDB',
  },
  {
    year: '2024',
    tag: 'NATIONWIDE SCALE',
    title: '10000+ Retail Partners Across 28+ Indian States',
    description:
      'Establishing on-ground sales and support teams in Tier-1, Tier-2, and Tier-3 cities with 24/7 AI-powered assistance.',
    icon: MapPin,
    color: '#10B981',
  },
  {
    year: '2025',
    tag: 'INTERNATIONAL REACH',
    title: 'Global Footprint Across 9 Countries',
    description:
      'Expanding into Bangladesh, Mexico, Ecuador, Spain, UAE, Uganda, the Philippines and Venezuela.',
    icon: Globe,
    color: '#00D2FF',
  },
  {
    year: '2026',
    tag: 'FIVE YEARS OF TRUST',
    title: 'Five Years of Trust. Still Building.',
    description:
      '5 years of proven excellence since 2021. Blending advanced AI security with timeless simplicity every single day.',
    icon: Award,
    color: '#EDB90A',
  },
];

export const JourneyFilmStrip: React.FC<JourneyFilmStripProps> = ({ onComplete }) => {
  const [activeFrame, setActiveFrame] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeFrame < TIMELINE_FRAMES.length - 1) {
      setActiveFrame((prev) => prev + 1);
      onComplete?.();
    }
  };

  const handlePrev = () => {
    if (activeFrame > 0) {
      setActiveFrame((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Activity Label */}
      <div className="text-center mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-gold/20 text-amber-gold border border-amber-gold/30">
          Activity 05 · Scroll-Scrubbed Story
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Our Journey (2021 – 2026)
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Explore our five-year evolution from a focused idea in Kolkata to an international technology ecosystem.
        </p>
      </div>

      {/* Progress Track with Traveling Sun Icon */}
      <div className="relative mb-8 max-w-4xl mx-auto px-4">
        <div className="h-1.5 w-full bg-white/10 rounded-full relative overflow-visible">
          {/* Active Fill Line */}
          <div
            className="h-full bg-gradient-to-r from-sunrise-orange via-amber-gold to-yellow-300 rounded-full transition-all duration-300"
            style={{
              width: `${(activeFrame / (TIMELINE_FRAMES.length - 1)) * 100}%`,
            }}
          />

          {/* Traveling Sun Indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 z-10"
            style={{
              left: `${(activeFrame / (TIMELINE_FRAMES.length - 1)) * 100}%`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-amber-gold text-midnight flex items-center justify-center shadow-[0_0_15px_#EDB90A] animate-spin-slow">
              <Sun className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Film Strip Frame Container with Gold Perforated Borders */}
      <div
        ref={scrollRef}
        className="relative rounded-3xl bg-midnight/90 border-2 border-amber-gold/40 shadow-2xl p-6 sm:p-10 backdrop-blur-xl overflow-hidden"
      >
        {/* Top Perforations Bar */}
        <div className="flex items-center justify-between border-b border-amber-gold/30 pb-3 mb-6">
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-3 h-2 rounded bg-amber-gold/30 border border-amber-gold/50" />
            ))}
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-amber-gold font-bold">
            ARCHIVE REEL // 2021-2026
          </span>
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-3 h-2 rounded bg-amber-gold/30 border border-amber-gold/50" />
            ))}
          </div>
        </div>

        {/* Current Active Timeline Frame Content */}
        {(() => {
          const frame = TIMELINE_FRAMES[activeFrame];
          const Icon = frame.icon;
          return (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[220px]">
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg"
                  style={{ backgroundColor: `${frame.color}25`, color: frame.color }}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-4xl font-heading font-black text-white">{frame.year}</span>
                <span className="mt-1 text-xs font-mono font-bold tracking-widest uppercase text-amber-gold">
                  {frame.tag}
                </span>
              </div>

              <div className="md:col-span-8 flex flex-col justify-center">
                <span className="text-xs font-mono text-slate-400">
                  Milestone Frame 0{activeFrame + 1} of 0{TIMELINE_FRAMES.length}
                </span>
                <h4 className="mt-1 text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  {frame.title}
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {frame.description}
                </p>

                {/* Frame Step Navigation Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeFrame === 0}
                    className="px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={activeFrame === TIMELINE_FRAMES.length - 1}
                    className="px-5 py-2 rounded-full text-xs font-bold text-midnight bg-amber-gold hover:bg-sunrise-orange disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>Next Milestone</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Bottom Perforations Bar */}
        <div className="flex items-center justify-between border-t border-amber-gold/30 pt-3 mt-6">
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-3 h-2 rounded bg-amber-gold/30 border border-amber-gold/50" />
            ))}
          </div>
          <span className="text-[10px] font-mono tracking-widest text-slate-400">
            CONNECTING SPIRIT WITH TECHNOLOGY
          </span>
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-3 h-2 rounded bg-amber-gold/30 border border-amber-gold/50" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
