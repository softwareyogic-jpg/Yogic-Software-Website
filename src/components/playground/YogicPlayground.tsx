import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Compass } from 'lucide-react';
import { ExploreProgressRail } from './ExploreProgressRail';
import { LockerSimulator } from './LockerSimulator';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { PersonaPicker } from './PersonaPicker';
import { ProtectGame } from './ProtectGame';
import { JourneyFilmStrip } from './JourneyFilmStrip';
import { IndiaWorldMap } from './IndiaWorldMap';
import { VisionMissionFlip } from './VisionMissionFlip';
import { CoreValuesCards } from './CoreValuesCards';
import { WhyChecklist } from './WhyChecklist';
import { ChairmanCommitment } from './ChairmanCommitment';
import { FloatingEmblemParticles } from './FloatingEmblemParticles';

interface YogicPlaygroundProps {
  onSelectProductModal?: (productId: string) => void;
  onContactUs?: () => void;
  onBecomePartner?: () => void;
}

export const YogicPlayground: React.FC<YogicPlaygroundProps> = ({
  onSelectProductModal,
  onContactUs,
  onBecomePartner,
}) => {
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>({
    'act-locker': false,
    'act-beforeafter': false,
    'act-persona': false,
    'act-game': false,
    'act-journey': false,
    'act-map': false,
  });

  const [reduceMotion, setReduceMotion] = useState(false);
  const [isRailVisible, setIsRailVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRailVisible(entry.isIntersecting);
      },
      { threshold: 0.02 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const markComplete = useCallback((id: string) => {
    setCompletedActivities((prev) => ({ ...prev, [id]: true }));
  }, []);

  const scrollToActivity = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleTalkToTeam = () => {
    if (onContactUs) {
      onContactUs();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#071938] via-[#0b285b] via-[#092049] to-[#041026] text-white overflow-hidden py-16 sm:py-24 selection:bg-amber-gold selection:text-midnight"
    >
      {/* JSON-LD Organization for SEO & Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Yogic Software Pvt. Ltd.',
            foundingDate: '2021',
            founder: {
              '@type': 'Person',
              name: 'Subrata Mukherjee',
              jobTitle: 'Founder & Chairman',
            },
            slogan: 'Connecting Spirit with Technology',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kolkata',
              addressRegion: 'West Bengal',
              addressCountry: 'India',
            },
            url: 'https://yogicsoftware.com',
          }),
        }}
      />

      {/* Background Soft Gradients & Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient Top Radiant Glows (Soft Blue & Sunrise Orange) to eliminate dark void */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-br from-blue-600/20 via-indigo-500/15 to-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-blue-500/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-2/3 -right-32 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Dynamic Rising 2nd Logo (Emblem) Floating Particles - In Deep Background */}
        <FloatingEmblemParticles active={!reduceMotion} />
      </div>

      {/* Sticky Mini Exploration Rail on Left */}
      <ExploreProgressRail
        completedActivities={completedActivities}
        onScrollToActivity={scrollToActivity}
        onTalkToTeam={handleTalkToTeam}
        isVisible={isRailVisible}
      />

      {/* Top Controls: Reduce Motion & Activity Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
          <Compass className="w-3.5 h-3.5 text-amber-gold animate-spin-slow" />
          <span>Interactive About Experience · Learn by Doing</span>
        </div>

        <button
          type="button"
          onClick={() => setReduceMotion(!reduceMotion)}
          className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
            reduceMotion
              ? 'border-amber-gold bg-amber-gold/20 text-amber-gold'
              : 'border-white/15 bg-white/5 text-slate-400 hover:text-white'
          }`}
        >
          {reduceMotion ? 'Reduce Motion: ON' : 'Motion: Normal'}
        </button>
      </div>

      {/* Centered Grand Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-[0.25em] uppercase bg-amber-gold/20 text-amber-gold border border-amber-gold/40">
          OUR MISSION
        </span>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight">
          About Yogic Software Pvt. Ltd.
        </h2>

        <p className="mt-3 font-serif italic text-xl sm:text-2xl text-amber-gold/90">
          &ldquo;Connecting Spirit with Technology&rdquo;
        </p>

        <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
          Founded in 2021 and headquartered in Kolkata, Yogic Software Pvt. Ltd. is a technology company building secure, scalable and intelligent digital systems for a fast-changing world. We design and deliver EMI management platforms, finance locker solutions, cybersecurity tools and device protection software that help retailers, businesses and families stay in control, with complete peace of mind.
        </p>
      </div>

      {/* 6 INTERACTIVE ACTIVITIES STACK */}

      {/* Activity 1: Try The Locker */}
      <div id="act-locker" className="relative z-10 border-t border-white/10">
        <LockerSimulator
          onComplete={() => markComplete('act-locker')}
          onExploreShakti={() => onSelectProductModal?.('yogic-astra-shakti')}
        />
      </div>

      {/* Activity 2: With vs Without Yogic */}
      <div id="act-beforeafter" className="relative z-10 border-t border-white/10 bg-blue-950/35 backdrop-blur-sm">
        <BeforeAfterSlider onComplete={() => markComplete('act-beforeafter')} />
      </div>

      {/* Activity 3: Who Are You? (Persona Picker) */}
      <div id="act-persona" className="relative z-10 border-t border-white/10">
        <PersonaPicker
          onComplete={() => markComplete('act-persona')}
          onSelectProductModal={onSelectProductModal}
        />
      </div>

      {/* Activity 4: Protect The Phone (Mini Game) */}
      <div id="act-game" className="relative z-10 border-t border-white/10 bg-blue-950/35 backdrop-blur-sm">
        <ProtectGame
          onComplete={() => markComplete('act-game')}
          onTalkToTeam={handleTalkToTeam}
        />
      </div>

      {/* Activity 5: Our Journey (2021 – 2026) */}
      <div id="act-journey" className="relative z-10 border-t border-white/10">
        <JourneyFilmStrip onComplete={() => markComplete('act-journey')} />
      </div>

      {/* Activity 6: From Kolkata to the World */}
      <div id="act-map" className="relative z-10 border-t border-white/10 bg-blue-950/35 backdrop-blur-sm">
        <IndiaWorldMap onComplete={() => markComplete('act-map')} />
      </div>

      {/* BRAND FOUNDATIONS & LEADERSHIP */}
      <div className="relative z-10 border-t border-white/10 pt-16">
        <VisionMissionFlip />
        <CoreValuesCards />
        <WhyChecklist />
        <ChairmanCommitment
          onContactUs={onContactUs}
          onBecomePartner={onBecomePartner}
        />
      </div>
    </section>
  );
};
