import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from './useLenis';
import { OrbitStage } from './OrbitStage';
import { ScrollWriter } from './ScrollWriter';
import { ProgressDots } from './ProgressDots';

gsap.registerPlugin(ScrollTrigger);

interface YogicEcosystemScrollProps {
  onSelectProduct?: (targetId: string) => void;
}

export const YogicEcosystemScroll: React.FC<YogicEcosystemScrollProps> = ({
  onSelectProduct,
}) => {
  // Initialize Lenis buttery smooth scroll
  useLenis(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hoveredAppId, setHoveredAppId] = useState<string | null>(null);

  // Detect mobile & prefers-reduced-motion
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse parallax on desktop
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  }, []);

  // GSAP ScrollTrigger Setup on 500vh track
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) {
      if (prefersReducedMotion) {
        setProgress(1.0);
      }
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion]);

  // Jump to specific stage from progress dots
  const handleSelectStage = useCallback((stageIndex: number) => {
    if (!containerRef.current) return;
    const targetProgresses = [0.05, 0.35, 0.55, 0.72, 0.95];
    const targetP = targetProgresses[stageIndex] ?? 0;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + containerHeight * targetP;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  }, []);

  // Scroll to #products card
  const handleAppClick = useCallback(
    (targetId: string) => {
      if (onSelectProduct) {
        onSelectProduct(targetId);
      }
      const element = document.getElementById(targetId) || document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [onSelectProduct]
  );

  const handleExploreProducts = useCallback(() => {
    const productsSec = document.getElementById('products');
    if (productsSec) {
      productsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBecomePartner = useCallback(() => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section
      id="ecosystem-scroll"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-midnight text-white selection:bg-amber-gold selection:text-midnight"
      style={{ height: prefersReducedMotion ? 'auto' : '500vh' }}
    >
      {/* Visually Hidden Accessible Heading */}
      <h2 className="sr-only">The Yogic Software product ecosystem</h2>

      {/* Smooth Curved Wave Transition from Light Hero */}
      <div className="absolute -top-1 left-0 right-0 h-16 sm:h-24 pointer-events-none z-20 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full text-midnight"
        >
          <path
            d="M0,0 C320,80 720,120 1440,40 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Sticky 100vh Cinematic Viewport Stage */}
      <div
        ref={stickyRef}
        className={`${
          prefersReducedMotion ? 'relative min-h-screen' : 'sticky top-0'
        } h-screen w-full overflow-hidden flex flex-col justify-between`}
      >
        {/* Deep Tech Grid & Drifting Gold Star Dust */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle dotted matrix */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(circle, #EDB90A 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Film Grain Texture Overlay (2-3% opacity) */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Static Drifting Gold Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(24)].map((_, i) => (
              <span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-amber-gold/60 animate-pulse"
                style={{
                  top: `${(i * 19) % 94}%`,
                  left: `${(i * 31) % 96}%`,
                  opacity: 0.2 + (i % 5) * 0.15,
                  animationDuration: `${3 + (i % 4)}s`,
                  animationDelay: `${(i * 0.3) % 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Section Top Header Pill */}
        <header className="relative z-30 pt-4 sm:pt-6 px-6 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sunrise-orange animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-amber-gold font-semibold">
              The Yogic Ecosystem
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>9 Specialized Applications</span>
            <span className="text-white/20">|</span>
            <span>Bank-Grade Control</span>
          </div>
        </header>

        {/* Main Split Stage Layout: Left 58% Orbit / Right 42% USP Panel */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 overflow-hidden">
          {/* LEFT 58%: Orbiting App Constellation (Desktop 7 cols / Mobile top 55vh) */}
          <div className="lg:col-span-7 h-[52vh] sm:h-[58vh] lg:h-full relative flex items-center justify-center">
            <OrbitStage
              progress={progress}
              isMobile={isMobile}
              mouseOffset={mouseOffset}
              hoveredAppId={hoveredAppId}
              onHoverApp={setHoveredAppId}
              onAppClick={handleAppClick}
            />
          </div>

          {/* RIGHT 42%: Scroll-linked Typewriter USP Panel (Desktop 5 cols / Mobile bottom 45vh) */}
          <div className="lg:col-span-5 h-[42vh] sm:h-[40vh] lg:h-full relative flex items-center justify-center">
            <ScrollWriter
              progress={progress}
              onExploreProducts={handleExploreProducts}
              onBecomePartner={handleBecomePartner}
            />
          </div>
        </div>

        {/* Bottom Bar: Live Scroll Bar Indicator */}
        <footer className="relative z-20 pb-3 px-6 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-gold">01</span>
            <div className="w-24 sm:w-36 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sunrise-orange via-amber-gold to-royal-blue transition-all duration-150"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span>05</span>
          </div>

          <span className="text-slate-400 hidden sm:inline">
            Scroll driven cinematic showcase · 60fps GPU pipeline
          </span>
        </footer>

        {/* 5-Step Vertical Progress Indicator on Right Edge (Desktop only) */}
        <ProgressDots
          progress={progress}
          onSelectStage={handleSelectStage}
        />
      </div>
    </section>
  );
};

