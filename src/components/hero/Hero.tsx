import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { FintechVisual3D } from './FintechVisual3D';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white via-cloud to-[#EBF3FE] overflow-hidden"
    >
      {/* Background Subtle Grid & Gradient Atmosphere */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Confident Typography & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white shadow-sm border border-amber-gold/30 text-deep-navy mb-6 group cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sunrise-orange" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-navy">
                Since 2021 &middot; Trusted by Retailers Across World
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-gold" />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-deep-navy tracking-tight leading-[1.12] max-w-2xl">
              Powering Secure Finance <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-brand-navy">&amp;</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunrise-orange to-amber-gold">Digital Protection</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Yogic Software Pvt. Ltd. delivers intelligent EMI management, finance lockers, and advanced cybersecurity solutions designed for retailers, enterprises, and families.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all duration-300 shadow-lg hover:shadow-glow-sunrise active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise-orange"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-royal-blue bg-white hover:bg-slate-50 border-2 border-royal-blue/30 hover:border-royal-blue transition-all duration-300 shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
              >
                <PhoneCall className="w-4 h-4 text-royal-blue" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Bank-Grade Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-blue" />
                <span>Zero-Touch Provisioning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange" />
                <span>24/7 AI-Powered Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Isometric FinTech Ecosystem */}
          <div className="lg:col-span-5 flex justify-center">
            <FintechVisual3D />
          </div>

        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-xs text-slate-400 font-medium animate-bounce">
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-royal-blue" />
      </div>
    </section>
  );
};

