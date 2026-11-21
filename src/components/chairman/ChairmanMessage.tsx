import React from 'react';
import { Quote, ArrowRight, Award, ShieldCheck, TrendingUp, ExternalLink, HeartHandshake } from 'lucide-react';
import { SunRayGlow } from '../common/SunRayGlow';
import { CrescentDecor } from '../common/CrescentDecor';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
  </svg>
);

export const ChairmanMessage: React.FC = () => {
  const leadershipPillars = [
    {
      icon: HeartHandshake,
      title: 'Vedic Tech Philosophy',
      description: 'Blending technology with simplicity — rooted in ancient Vedic wisdom.',
      badge: 'Core Ethos'
    },
    {
      icon: TrendingUp,
      title: 'Organic Growth',
      description: 'Relentless ground feedback loop to make Yogic better every single day.',
      badge: 'Market Driven'
    },
    {
      icon: ShieldCheck,
      title: 'Nationwide Trust',
      description: 'Guiding 10000+ retail partners across 28+ Indian states with integrity.',
      badge: 'Pan-India Scale'
    }
  ];

  const linkedInUrl = "https://www.linkedin.com/in/subrata-mukherjee-8b1a311b/";

  return (
    <section
      id="management"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#FBF9F4] via-white to-[#F5F8FC] text-ink overflow-hidden border-y border-amber-gold/25"
    >
      {/* Background Ambient Sun Radiance & Crescent Motifs */}
      <SunRayGlow className="top-1/3 left-1/4 -translate-y-1/2" size={800} intensity={0.2} />
      <CrescentDecor
        className="absolute -top-12 -right-12 rotate-45"
        variant="dual"
        size={320}
        opacity={0.12}
      />
      <CrescentDecor
        className="absolute -bottom-16 -left-16 rotate-180"
        variant="blue"
        size={280}
        opacity={0.1}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-amber-gold/40 text-deep-navy text-xs font-bold uppercase tracking-wider mb-3.5">
            <Award className="w-4 h-4 text-amber-gold" />
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy">
              Our Management
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-deep-navy tracking-tight leading-tight">
            Visionary Stewardship Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunrise-orange to-amber-gold">Organic Innovation</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Under the executive guidance of Mr. Subrata Mukherjee, Yogic Software blends deep tech security with human-centric simplicity.
          </p>
        </div>

        {/* Main Executive Showcase Card */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white/95 backdrop-blur-xl border border-amber-gold/30 shadow-xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Clean Unobstructed Photo of Mr. Subrata Mukherjee */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              
              {/* Clickable Photo Card */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Mr. Subrata Mukherjee's LinkedIn profile"
                className="group relative block w-full max-w-[340px] rounded-3xl p-2.5 bg-gradient-to-b from-white to-slate-50 border-2 border-amber-gold/40 shadow-xl hover:shadow-2xl hover:border-amber-gold transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
              >
                {/* Photo Container - Clean, No Overlays Covering Him */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-sm">
                  <img
                    src="/assets/subrata_mukherjee.jpg"
                    alt="Mr. Subrata Mukherjee - Founder & Chairman"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  {/* Subtle Hover Action Pill (Only on Hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-bold text-white">
                    <LinkedInIcon className="w-4 h-4 fill-white" />
                    <span>Tap to view LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-amber-gold" />
                  </div>
                </div>
              </a>

              {/* Single Clean Line under Photo: Founder & Chairman: Mr. Subrata Mukherjee */}
              <div className="mt-4 flex flex-col items-center">
                <p className="font-heading font-extrabold text-base sm:text-lg text-deep-navy whitespace-nowrap tracking-tight">
                  <span className="text-sunrise-orange">Founder &amp; Chairman:</span> Mr. Subrata Mukherjee
                </p>

                {/* Clean Branded LinkedIn Pill directly under */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#0077B5] hover:bg-[#005E93] transition-all shadow-sm hover:shadow group"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Column: Editorial Message & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Message Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-gold/15 text-deep-navy border border-amber-gold/30 text-xs font-bold mb-5">
                <Quote className="w-3.5 h-3.5 text-sunrise-orange" />
                <span className="font-heading font-bold uppercase tracking-wider text-[11px] text-brand-navy">Chairman's Official Address</span>
              </div>

              {/* Exact Unedited Quotation in Modern Executive Corporate Typography */}
              <blockquote className="relative">
                <span aria-hidden="true" className="absolute -top-7 -left-5 text-7xl font-serif text-amber-gold/25 select-none pointer-events-none">&ldquo;</span>
                <p className="relative z-10 text-base sm:text-lg lg:text-xl text-slate-800 font-normal leading-relaxed sm:leading-[1.8] tracking-tight">
                  &ldquo;It brings an immense pleasure to welcome everyone at <strong className="font-heading font-extrabold text-brand-navy">YOGIC SOFTWARE PVT. LTD.</strong> We aspire to be the most beloved Brand in the Industry and to achieve the same we have dedicated team members who relentlessly work in the market to gather feedback against the product so that it can be improvised and catered in a better way. We as a company believe in organic growth and would like to evolve continuously to make YOGIC SOFTWARE PVT. LTD. a better working place than yesterday. We do believe in our TAG LINE, <span className="font-bold text-sunrise-orange bg-sunrise-orange/10 px-2 py-0.5 rounded-md mx-1 border border-sunrise-orange/20 inline-block">&lsquo;Connecting Spirit with Technology&rsquo;</span> as the evolution of Technology were first inscribed in VEDAS and thus, YOGIC intends to blend Technology with Simplicity.&rdquo;
                </p>
              </blockquote>

              {/* Sign-off & Actions Bar */}
              <div className="mt-8 pt-6 border-t border-amber-gold/30 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-500 font-bold">
                    With gratitude,
                  </span>
                  <span className="block font-heading font-black text-xl text-deep-navy mt-1">
                    Mr. Subrata Mukherjee
                  </span>
                  <span className="block text-xs font-semibold text-slate-600 mt-0.5">
                    Founder &amp; Chairman, Yogic Software Pvt. Ltd.
                  </span>
                </div>

                {/* Contact Action Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all duration-300 shadow-md hover:shadow-glow-sunrise active:scale-95 group"
                >
                  <span>Get in Touch with Management</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

            </div>

          </div>

          {/* SaaS Leadership Pillars Micro-Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-5">
            {leadershipPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 sm:p-5 rounded-2xl bg-cloud/70 hover:bg-white border border-slate-200/80 hover:border-amber-gold/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-gold/15 text-deep-navy border border-amber-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-tr group-hover:from-sunrise-orange group-hover:to-amber-gold group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-extrabold text-sm text-deep-navy group-hover:text-royal-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-white text-sunrise-orange border border-sunrise-orange/30">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
