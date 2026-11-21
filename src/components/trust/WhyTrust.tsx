import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldAlert, Zap, MapPin, Headphones, PhoneCall } from 'lucide-react';

export const WhyTrust: React.FC = () => {
  // VERIFY: Financial institution equivalent standards & 99% satisfaction rate
  const trustCards = [
    {
      icon: ShieldAlert,
      title: 'Enterprise-grade Security',
      description: 'We implement the same security standards used by global financial institutions to ensure total protection.',
      accent: 'border-royal-blue/40 text-royal-blue bg-royal-blue/15'
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Reduce manual errors and save hundreds of hours with our AI-powered automated workflows.',
      accent: 'border-sunrise-orange/40 text-sunrise-orange bg-sunrise-orange/15'
    },
    {
      icon: MapPin,
      title: 'Nationwide Retail Support',
      description: 'Comprehensive on-ground support for our partners across all Indian states and territories.',
      accent: 'border-amber-gold/40 text-amber-gold bg-amber-gold/15'
    },
    {
      icon: Headphones,
      title: 'Dedicated Customer Service',
      description: '24/7 technical assistance ensures your business operations never stop for a moment.',
      accent: 'border-emerald-400/40 text-emerald-400 bg-emerald-400/15'
    }
  ];

  return (
    <section
      id="why-trust"
      className="relative py-24 md:py-32 bg-midnight text-white overflow-hidden"
    >
      {/* Background Mesh Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-royal-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-sunrise-orange/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Trust Factor"
          title="Why Businesses Trust Yogic Software"
          subtitle="Delivering reliable device command infrastructure and airtight risk controls for India's retail economy."
          theme="dark"
        />

        {/* 4 Glass Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-gold/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-transform group-hover:scale-110 ${card.accent}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-amber-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-amber-gold">VERIFIED</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-deep-navy to-brand-navy border border-amber-gold/25 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 w-full lg:w-auto text-center sm:text-left">
            <div>
              <span className="block font-heading font-black text-3xl sm:text-4xl text-amber-gold">1000+</span>
              <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Retail Partners</span>
            </div>
            <div>
              <span className="block font-heading font-black text-3xl sm:text-4xl text-amber-gold">99%</span>
              <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Client Satisfaction</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-heading font-black text-3xl sm:text-4xl text-amber-gold">28+</span>
              <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Indian States</span>
            </div>
          </div>

          {/* Click to Call Action in Strip */}
          <a
            href="tel:+917596055177"
            className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange text-deep-navy font-extrabold text-sm shadow-lg hover:shadow-glow-sunrise transition-all group"
          >
            <PhoneCall className="w-5 h-5 text-deep-navy group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] text-deep-navy/80 uppercase font-black">Direct Dispatch</span>
              <span className="block leading-none">24/7 Expert &amp; AI Support</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

