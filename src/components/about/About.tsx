import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CrescentDecor } from '../common/CrescentDecor';
import { ShieldCheck, Cpu, Users, Layers, HeartHandshake, ArrowRight, BookOpen } from 'lucide-react';

interface AboutProps {
  onOpenFullAbout?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenFullAbout }) => {
  const valueCards = [
    {
      icon: ShieldCheck,
      title: 'Security & Trust',
      // VERIFY: Bank-grade encryption protocol claims
      description: 'Privacy and data protection are built into everything we create for your digital safety.',
      accent: 'border-royal-blue/30 text-royal-blue bg-royal-blue/10',
    },
    {
      icon: Cpu,
      title: 'Innovation',
      description: 'We use AI and automation to predict risks, reduce manual effort and improve results.',
      accent: 'border-sunrise-orange/30 text-sunrise-orange bg-sunrise-orange/10',
    },
    {
      icon: Users,
      title: 'Customer-First Approach',
      description: 'Our partners’ success is our success. We measure ourselves by the tangible value we deliver.',
      accent: 'border-amber-gold/30 text-amber-gold bg-amber-gold/10',
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Our cloud-native systems are designed to grow with your business and handle high transaction volumes securely.',
      accent: 'border-brand-navy/30 text-brand-navy bg-brand-navy/10',
    },
    {
      icon: HeartHandshake,
      title: 'Simplicity',
      description: 'Powerful technology should never be complicated. We make advanced solutions easy for everyone to use.',
      accent: 'border-emerald-500/30 text-emerald-600 bg-emerald-50',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-cloud text-ink overflow-hidden"
    >
      {/* Background Decorative Crescents from Logo */}
      <CrescentDecor
        className="absolute -top-16 -right-16"
        variant="dual"
        size={320}
        opacity={0.12}
      />
      <CrescentDecor
        className="absolute -bottom-20 -left-20 rotate-180"
        variant="blue"
        size={280}
        opacity={0.1}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Our Mission & Philosophy"
          title="About Yogic Software Pvt. Ltd."
          subtitle="Founded in 2021 in Kolkata, Yogic Software connects spirit with technology through secure EMI platforms, smart finance lockers, advanced cybersecurity tools, and family protection solutions."
        />

        {/* Five Core Value Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-amber-gold/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Corner Subtle Number */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-6 text-xl font-heading font-black text-slate-200 group-hover:text-amber-gold/30 transition-colors select-none"
                >
                  0{idx + 1}
                </span>

                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${card.accent}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-base text-deep-navy group-hover:text-royal-blue transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-royal-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Core Standard</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button to Open Full Dedicated About Page / Screen */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={onOpenFullAbout}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-royal-blue to-deep-navy hover:from-deep-navy hover:to-royal-blue shadow-lg hover:shadow-xl hover:shadow-royal-blue/20 transition-all duration-300 group active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
          >
            <BookOpen className="w-4 h-4 text-amber-gold" />
            <span>Read Full Company Story &amp; Philosophy</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
