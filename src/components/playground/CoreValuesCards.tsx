import React from 'react';
import { ShieldCheck, Cpu, Users, Layers, HeartHandshake } from 'lucide-react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Security & Trust',
    description: 'Privacy and data protection are built into everything we create.',
    accent: 'border-royal-blue/50 text-cyan-300 bg-royal-blue/15',
    num: '01',
  },
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'We use AI and automation to predict risks, reduce manual effort and improve results.',
    accent: 'border-sunrise-orange/50 text-sunrise-orange bg-sunrise-orange/15',
    num: '02',
  },
  {
    icon: Users,
    title: 'Customer-First Approach',
    description: 'Our partners’ success is our success. We measure ourselves by the value we deliver.',
    accent: 'border-amber-gold/50 text-amber-gold bg-amber-gold/15',
    num: '03',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Our cloud-native systems are designed to grow with your business and handle high transaction volumes securely.',
    accent: 'border-brand-navy/60 text-indigo-300 bg-brand-navy/30',
    num: '04',
  },
  {
    icon: HeartHandshake,
    title: 'Simplicity',
    description: 'Powerful technology should never be complicated. We make advanced solutions easy for everyone to use.',
    accent: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/15',
    num: '05',
  },
];

export const CoreValuesCards: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-gold/20 text-amber-gold border border-amber-gold/30">
          Our Guiding Tenets
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          The Five Core Values
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Built into our software engineering, client operations, and long-term vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {VALUES.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.num}
              className="group relative p-6 rounded-3xl bg-midnight/80 border border-white/15 hover:border-amber-gold/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <span className="absolute top-4 right-5 text-lg font-mono font-black text-white/20 group-hover:text-amber-gold/40 transition-colors">
                {v.num}
              </span>

              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${v.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-gold transition-colors">
                  {v.title}
                </h4>

                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-sans">
                  {v.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-[10px] font-mono text-slate-400 group-hover:text-amber-gold transition-colors">
                <span>Standard Invariant</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

