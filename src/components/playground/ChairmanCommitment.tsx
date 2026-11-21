import React from 'react';
import { ArrowRight, Heart, Users, Sparkles, ExternalLink } from 'lucide-react';
import { SocialLinks } from '../common/SocialLinks';

interface ChairmanCommitmentProps {
  onContactUs?: () => void;
  onBecomePartner?: () => void;
}

export const ChairmanCommitment: React.FC<ChairmanCommitmentProps> = ({
  onContactUs,
  onBecomePartner,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] bg-gradient-to-br from-midnight via-slate-900 to-midnight border-2 border-amber-gold/40 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
        {/* Ambient Top Radiant Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sunrise-orange/20 via-amber-gold/15 to-transparent blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Team Photo Container (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-amber-gold via-sunrise-orange to-royal-blue shadow-[0_0_40px_rgba(249,125,7,0.3)] group">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] bg-slate-950">
                <img
                  src="/assets/yogic_team_family.jpg"
                  alt="The Yogic Software Family"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating pill over photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-midnight/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white">
                  <span className="flex items-center gap-1.5 text-amber-gold font-bold">
                    <Users className="w-3.5 h-3.5" />
                    <span>The Yogic Family</span>
                  </span>
                  <span className="text-slate-300">United in Purpose</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400 text-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-gold" />
              <span>Kolkata Head Office · Ground Operations · Engineering</span>
            </div>
          </div>

          {/* Emotional & Professional Culture Narrative (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sunrise-orange/15 border border-sunrise-orange/30 text-sunrise-orange text-xs font-mono font-bold uppercase tracking-wider mb-3 w-fit">
              <Heart className="w-3.5 h-3.5 fill-sunrise-orange text-sunrise-orange" />
              <span>Our People, Our Strength</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight">
              We Are Not Just A Company — <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-gold via-sunrise-orange to-sun-yellow">
                We Are A Family.
              </span>
            </h3>

            <blockquote className="mt-4 font-serif italic text-lg sm:text-xl text-amber-gold/95 leading-snug border-l-2 border-amber-gold/60 pl-4">
              &ldquo;We grow together, we build together. Only Yogic makes this possible.&rdquo;
            </blockquote>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Behind every line of code, every secured retailer, and every protected device across 28+ states is a team bound by unwavering loyalty, brotherhood, and collective pride. We celebrate every small victory together, stand shoulder-to-shoulder through every challenge, and treat every single partner and customer as an extension of our own home.
            </p>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Technology gives us the tools, but it is our shared heart, humbleness, and deep commitment that truly sets Yogic Software apart.
            </p>

            {/* Value Chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
              <div className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                🌱 Organic Growth
              </div>
              <div className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                🤝 Unbreakable Trust
              </div>
              <div className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                ❤️ One Family, One Mission
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBecomePartner}
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-midnight bg-gradient-to-r from-amber-gold to-sunrise-orange hover:from-sunrise-orange hover:to-amber-gold transition-all duration-300 shadow-xl flex items-center gap-2 group active:scale-95"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onContactUs}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center gap-2 group active:scale-95"
              >
                <span>Connect With Our Team</span>
                <Heart className="w-4 h-4 text-amber-gold" />
              </button>
            </div>

            {/* Official Social Channels */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Follow &amp; Connect With The Yogic Family:</span>
              </div>
              <SocialLinks layout="inline-pills" />
            </div>

            {/* Corporate Subsidiary Card with Official RedCat Logo */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/[0.04] p-4 rounded-2xl border border-red-500/30 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="bg-white p-2 rounded-xl border border-red-100 shadow-sm flex-shrink-0">
                  <img
                    src="/assets/redcat_logo.png"
                    alt="RedCat Technologies Product Pvt. Ltd."
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-amber-gold font-bold">
                    A Subsidiary of Yogic Software Pvt. Ltd.
                  </span>
                  <span className="text-xs sm:text-sm font-heading font-extrabold text-white block">
                    RedCat Technologies Product Pvt. Ltd.
                  </span>
                  <span className="text-[11px] text-slate-300 font-mono block">
                    https://www.rtppl.in/
                  </span>
                </div>
              </div>

              <a
                href="https://www.rtppl.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 transition-all group shadow-md flex-shrink-0"
              >
                <span>Visit rtppl.in</span>
                <ExternalLink className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
