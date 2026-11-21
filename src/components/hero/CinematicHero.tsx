import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { VideoFallbackCanvas } from './VideoFallbackCanvas';
import { StoryReelModal } from './StoryReelModal';
import { FloatingProductCards } from './FloatingProductCards';
import { CustomCursor } from './CustomCursor';

interface CinematicHeroProps {
  onExploreSolutions?: () => void;
  onSelectProduct?: (productId: string) => void;
}

const LIVE_TICKERS = [
  'Bank-Grade Encryption',
  'Zero-Touch Provisioning',
  '24/7 AI-Powered Support',
];

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onExploreSolutions,
  onSelectProduct,
}) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeTickerIndex, setActiveTickerIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Cycle live tickers every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTickerIndex((prev) => (prev + 1) % LIVE_TICKERS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Mouse Parallax for desktop
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  }, []);

  // Scroll down scale transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / windowHeight));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Words for word-by-word kinetic headline
  const headlineWords = [
    { text: 'Powering', style: 'text-white' },
    { text: 'Secure', style: 'text-white' },
    {
      text: 'Finance',
      style:
        'bg-gradient-to-r from-cyan-400 to-royal-blue bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(10,107,219,0.8)] font-black',
    },
    { text: '&', style: 'text-white/80' },
    {
      text: 'Digital',
      style:
        'bg-gradient-to-r from-sunrise-orange via-amber-gold to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(249,125,7,0.8)] font-black',
    },
    {
      text: 'Protection',
      style:
        'bg-gradient-to-r from-amber-gold via-sunrise-orange to-amber-gold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(237,185,10,0.8)] font-black',
    },
  ];

  const handleScrollExplore = () => {
    const ecosystem = document.getElementById('ecosystem-scroll');
    if (ecosystem) {
      ecosystem.scrollIntoView({ behavior: 'smooth' });
    } else if (onExploreSolutions) {
      onExploreSolutions();
    }
  };

  // Card shrink transform on scroll
  const heroScale = 1 - scrollProgress * 0.12; // 1.0 down to 0.88
  const heroRadius = scrollProgress * 42; // 0px up to 42px
  const heroOpacity = 1 - scrollProgress * 0.4;

  return (
    <>
      <CustomCursor />

      <section
        id="hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen w-full bg-midnight text-white overflow-hidden flex flex-col justify-between selection:bg-amber-gold selection:text-midnight transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${heroScale})`,
          borderRadius: `${heroRadius}px`,
          opacity: heroOpacity,
          transformOrigin: 'center bottom',
        }}
      >
        {/* Background Layer: WebGL/Canvas Procedural Video Motion */}
        <VideoFallbackCanvas />

        {/* Deep Navy to Transparent Left-Heavy Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(7, 22, 51, 0.95) 0%, rgba(7, 22, 51, 0.8) 45%, rgba(7, 22, 51, 0.25) 100%), linear-gradient(to top, rgba(7, 22, 51, 0.95) 0%, transparent 40%)',
          }}
        />

        {/* Subtle Film Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Soft Ambient Sun-Ray Sweep Glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-royal-blue/25 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-sunrise-orange/15 blur-[140px] pointer-events-none" />

        {/* Spacer for sticky Navbar */}
        <div className="h-24 sm:h-28" />

        {/* Main Content Hero Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
          {/* Left Column: Kinetic Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Trust Badge with Pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-amber-gold/40 backdrop-blur-xl shadow-lg w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-sunrise-orange animate-ping" />
              <span className="text-xs sm:text-sm font-sans font-semibold text-amber-gold tracking-wide">
                Since 2021 · Trusted by Retailers Across India
              </span>
            </div>

            {/* Kinetic Word-by-Word H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] flex flex-wrap gap-x-3 gap-y-2">
              {headlineWords.map((word, idx) => (
                <span key={idx} className="overflow-hidden inline-block">
                  <span
                    className={`inline-block animate-slide-up ${word.style}`}
                    style={{
                      animationDelay: `${idx * 0.08}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    {word.text}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-body leading-relaxed font-normal">
              Yogic Software Pvt. Ltd. delivers intelligent EMI management, finance
              lockers, and advanced cybersecurity solutions designed for retailers,
              enterprises, and families.
            </p>

            {/* Interactive Call-to-Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Solution Button */}
              <button
                type="button"
                onClick={onExploreSolutions || handleScrollExplore}
                className="group relative px-8 py-4 rounded-full text-sm sm:text-base font-heading font-bold text-slate-950 bg-gradient-to-r from-amber-gold via-sunrise-orange to-amber-gold hover:from-sunrise-orange hover:to-amber-gold shadow-xl hover:shadow-2xl hover:shadow-sunrise-orange/40 transition-all duration-300 active:scale-95 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>

              {/* Glowing StoryReel Play Button */}
              <button
                type="button"
                onClick={() => setIsStoryModalOpen(true)}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold"
                aria-label="Watch Yogic Software Cinema Story"
              >
                <div className="w-9 h-9 rounded-full bg-sunrise-orange group-hover:bg-amber-gold flex items-center justify-center text-midnight transition-transform group-hover:scale-110 shadow-lg shadow-sunrise-orange/40">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="text-xs sm:text-sm font-heading font-bold text-white group-hover:text-amber-gold transition-colors">
                  Watch Our Story
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Floating Glass Product Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <FloatingProductCards
              mouseOffset={mouseOffset}
              onSelectProduct={onSelectProduct}
            />
          </div>
        </div>

        {/* Bottom Bar: Live Tickers, Scroll Indicator, Stats */}
        <div className="relative z-20 pb-6 pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Bottom Left: Cycling Live Tickers */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold text-white">Live Status:</span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-amber-gold transition-all duration-300">
              {LIVE_TICKERS[activeTickerIndex]}
            </span>
          </div>

          {/* Center: Scroll to Explore Indicator */}
          <button
            type="button"
            onClick={handleScrollExplore}
            className="group flex flex-col items-center text-slate-400 hover:text-amber-gold transition-colors text-[11px] font-mono tracking-widest uppercase"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 mt-0.5 animate-bounce text-amber-gold" />
          </button>

          {/* Bottom Right: Count-Up Stat Chips */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
            <div className="px-3 py-1 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm text-slate-200">
              <span className="text-amber-gold font-bold">1000+</span> Retail Partners
            </div>
            <div className="px-3 py-1 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm text-slate-200">
              <span className="text-sunrise-orange font-bold">28+</span> States
            </div>
            <div className="px-3 py-1 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm text-slate-200">
              <span className="text-cyan-400 font-bold">Est. 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Glass StoryReel Cinema Modal */}
      <StoryReelModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </>
  );
};
