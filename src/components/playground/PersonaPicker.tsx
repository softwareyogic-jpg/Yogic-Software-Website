import React, { useState } from 'react';
import { Store, Users, Building2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PersonaPickerProps {
  onSelectProductModal?: (productId: string) => void;
  onComplete?: () => void;
}

interface PersonaProduct {
  id: string;
  name: string;
  benefit: string;
  logo: string;
  badge: string;
  accent: string;
}

const PERSONA_DATA: Record<
  'retailer' | 'parent' | 'business',
  {
    title: string;
    headline: string;
    description: string;
    products: PersonaProduct[];
  }
> = {
  retailer: {
    title: 'Mobile Retailer & FinTech Partner',
    headline: 'Zero-Risk Financing for Multi-Brand Stores',
    description:
      'Eliminate default losses on EMI mobile sales with instant automated lock, Zero-Touch enrollment, and UPI mandates.',
    products: [
      {
        id: 'yogic-astra-shakti',
        name: 'Yogic Astra Shakti',
        benefit: 'Flagship autonomous lock, SIM tracking, and Auto Debit sync.',
        logo: '/assets/logos/astra-shakti.png',
        badge: 'Flagship Suite',
        accent: 'border-sunrise-orange/60 shadow-sunrise-orange/20',
      },
      {
        id: 'yogic-astra-aadi',
        name: 'Yogic Astra Aadi',
        benefit: 'Lightweight offline-capable lock for high-turnover retailers.',
        logo: '/assets/logos/astra-aadi.png',
        badge: 'Essential Locker',
        accent: 'border-amber-gold/60 shadow-amber-gold/20',
      },
      {
        id: 'astra-glamour',
        name: 'Astra Glamour',
        benefit: 'Gold safe protection with Google Authenticated 7-Day Lock.',
        logo: '/assets/logos/astra-glamour.png',
        badge: 'Gold Security',
        accent: 'border-yellow-400/60 shadow-yellow-400/20',
      },
      {
        id: 'secure-emi',
        name: 'Secure EMI Locker',
        benefit: 'Real-time telemetry, location tracking, and SIM guard.',
        logo: '/assets/logos/secure-emi.png',
        badge: 'Zero Default',
        accent: 'border-royal-blue/60 shadow-royal-blue/20',
      },
      {
        id: 'y-destiny',
        name: 'Y Destiny',
        benefit: 'The ultimate dedicated lock solution tailored for Apple iOS devices.',
        logo: '/assets/logos/y-destiny.png',
        badge: 'iOS Dedicated',
        accent: 'border-amber-gold/60 shadow-amber-gold/20',
      },
    ],
  },
  parent: {
    title: 'Parent & Digital Family Guardian',
    headline: 'Protecting the Next Generation Online & Offline',
    description:
      'Give your children safe digital exploration with live GPS fences, SOS alerts, screen control, and web protection.',
    products: [
      {
        id: 'y-gen-care',
        name: 'Y Gen Care',
        benefit: 'Real-time child GPS fences, SOS emergency distress, and screen limits.',
        logo: '/assets/logos/y-gen-care.png',
        badge: 'Family Safety',
        accent: 'border-royal-blue/60 shadow-royal-blue/20',
      },
      {
        id: 'kids-care',
        name: 'Kids Care',
        benefit: 'App/web filtering, healthy screen limits, and instant child messaging.',
        logo: '/assets/logos/kids-care.png',
        badge: 'Next-Gen Care',
        accent: 'border-amber-gold/60 shadow-amber-gold/20',
      },
    ],
  },
  business: {
    title: 'Enterprise, SMB & Device Owner',
    headline: 'Bank-Grade Cyber Defense in Your Pocket',
    description:
      'Shield your organization and personal smartphones from cyber attacks, unauthorized telemetry, and device theft.',
    products: [
      {
        id: 'y-commander',
        name: 'Y Commander',
        benefit: 'Anti-hacking suite, built-in VPN, and encrypted remote data transfer.',
        logo: '/assets/logos/y-commander.png',
        badge: 'Cyber Defense',
        accent: 'border-cyan-400/60 shadow-cyan-400/20',
      },
      {
        id: 'mobi-protect',
        name: 'Mobi Protect',
        benefit: 'Theft recovery, remote wipe, anti-virus scanner, instant intruder selfies, plus 1 Year Free YouTube Premium.',
        logo: '/assets/logos/mobi-protect.png',
        badge: 'Personal Shield',
        accent: 'border-emerald-400/60 shadow-emerald-400/20',
      },
    ],
  },
};

export const PersonaPicker: React.FC<PersonaPickerProps> = ({
  onSelectProductModal,
  onComplete,
}) => {
  const [selectedPersona, setSelectedPersona] = useState<'retailer' | 'parent' | 'business'>('retailer');
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSelect = (persona: 'retailer' | 'parent' | 'business') => {
    setSelectedPersona(persona);
    if (!hasInteracted) {
      setHasInteracted(true);
      onComplete?.();
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.65 },
        colors: ['#0A6BDB', '#EDB90A', '#F97D07'],
      });
    }
  };

  const currentData = PERSONA_DATA[selectedPersona];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Activity Label */}
      <div className="text-center mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-royal-blue/20 text-cyan-300 border border-royal-blue/30">
          Activity 03 · Persona Tailor
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Who Are You?
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Select your role to explore software built specifically to protect your revenue, your family, or your business data.
        </p>
      </div>

      {/* 3 Big Glowing Persona Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {/* Role 1: Retailer */}
        <button
          type="button"
          onClick={() => handleSelect('retailer')}
          className={`p-6 rounded-3xl border text-left transition-all duration-300 relative group overflow-hidden ${
            selectedPersona === 'retailer'
              ? 'bg-midnight/95 border-sunrise-orange shadow-[0_0_35px_rgba(249,125,7,0.35)] scale-[1.02]'
              : 'bg-midnight/70 border-white/15 hover:border-white/30 hover:bg-midnight/90'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              selectedPersona === 'retailer' ? 'bg-sunrise-orange text-midnight' : 'bg-white/10 text-sunrise-orange'
            }`}>
              <Store className="w-6 h-6" />
            </div>
            {selectedPersona === 'retailer' && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-sunrise-orange/20 text-sunrise-orange">
                Active
              </span>
            )}
          </div>
          <h4 className="text-lg font-heading font-extrabold text-white">I Am A Retailer</h4>
          <p className="mt-1 text-xs text-slate-300">
            Selling mobile phones &amp; electronics on EMI; need zero-default certainty.
          </p>
        </button>

        {/* Role 2: Parent */}
        <button
          type="button"
          onClick={() => handleSelect('parent')}
          className={`p-6 rounded-3xl border text-left transition-all duration-300 relative group overflow-hidden ${
            selectedPersona === 'parent'
              ? 'bg-midnight/95 border-royal-blue shadow-[0_0_35px_rgba(10,107,219,0.35)] scale-[1.02]'
              : 'bg-midnight/70 border-white/15 hover:border-white/30 hover:bg-midnight/90'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              selectedPersona === 'parent' ? 'bg-royal-blue text-white' : 'bg-white/10 text-cyan-300'
            }`}>
              <Users className="w-6 h-6" />
            </div>
            {selectedPersona === 'parent' && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-royal-blue/20 text-cyan-300">
                Active
              </span>
            )}
          </div>
          <h4 className="text-lg font-heading font-extrabold text-white">I Am A Parent</h4>
          <p className="mt-1 text-xs text-slate-300">
            Caring for my children's safety, screen habits, and physical whereabouts.
          </p>
        </button>

        {/* Role 3: Business */}
        <button
          type="button"
          onClick={() => handleSelect('business')}
          className={`p-6 rounded-3xl border text-left transition-all duration-300 relative group overflow-hidden ${
            selectedPersona === 'business'
              ? 'bg-midnight/95 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.35)] scale-[1.02]'
              : 'bg-midnight/70 border-white/15 hover:border-white/30 hover:bg-midnight/90'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              selectedPersona === 'business' ? 'bg-emerald-400 text-midnight' : 'bg-white/10 text-emerald-400'
            }`}>
              <Building2 className="w-6 h-6" />
            </div>
            {selectedPersona === 'business' && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300">
                Active
              </span>
            )}
          </div>
          <h4 className="text-lg font-heading font-extrabold text-white">I Am A Business / User</h4>
          <p className="mt-1 text-xs text-slate-300">
            Protecting corporate data, remote laptops/smartphones, and personal privacy.
          </p>
        </button>
      </div>

      {/* Morphing Product Solution Stage */}
      <div className="p-6 sm:p-8 rounded-3xl bg-midnight/80 border border-white/15 backdrop-blur-xl shadow-2xl animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-bold">
              Tailored Ecosystem · {currentData.title}
            </span>
            <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
              {currentData.headline}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            {currentData.description}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentData.products.map((p) => (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectProductModal?.(p.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProductModal?.(p.id);
                }
              }}
              className={`p-5 rounded-2xl bg-white/5 border hover:bg-white/10 transition-all duration-300 flex flex-col justify-between shadow-lg cursor-pointer group hover:scale-[1.02] active:scale-[0.98] ${p.accent}`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 p-1.5 border border-white/20 flex-shrink-0">
                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-white/10 text-amber-gold">
                    {p.badge}
                  </span>
                </div>

                <h5 className="font-heading font-bold text-base text-white group-hover:text-amber-gold transition-colors">{p.name}</h5>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-sans">{p.benefit}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProductModal?.(p.id);
                  }}
                  className="text-xs font-heading font-bold text-amber-gold group-hover:text-sunrise-orange flex items-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
