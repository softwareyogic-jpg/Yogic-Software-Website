import React from 'react';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  MapPin,
  Star,
  Activity,
  Zap,
} from 'lucide-react';
import { SunRayGlow } from '../common/SunRayGlow';

export const FintechVisual3D: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center py-6 sm:py-12 select-none">
      {/* Radiant Sun Ray Glow in Background */}
      <SunRayGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={620} intensity={0.25} />

      {/* Large Ambient Watermark of Official Crescent Emblem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] opacity-15 pointer-events-none blur-[1px]">
        <img
          src="/assets/yogic_emblem.png"
          alt="Yogic Crescent Silhouette"
          className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(10,107,219,0.3)] animate-pulse"
        />
      </div>

      {/* =========================================================================
          CENTRAL 3D SMARTPHONE CONTAINER
          ========================================================================= */}
      <div className="relative z-20 w-64 sm:w-72 md:w-80 h-[480px] sm:h-[530px] rounded-[42px] sm:rounded-[46px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-800 via-deep-navy to-[#051124] shadow-2xl border-4 border-slate-700/70 shadow-royal-blue/30 transform hover:scale-[1.01] transition-transform duration-500">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/90 rounded-full flex items-center justify-between px-3 z-30 border border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[9px] font-mono text-emerald-400 font-bold">ARMED</span>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-royal-blue" />
          </div>
        </div>

        {/* Device Screen Canvas */}
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b from-[#06142E] via-[#0B254E] to-[#040C1D] p-4 sm:p-5 flex flex-col justify-between text-white border border-slate-800">
          {/* Top Status Strip */}
          <div className="pt-4 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span className="font-bold text-white tracking-wider">YOGIC OS 5.0</span>
            <div className="flex items-center gap-1 text-amber-gold">
              <Zap className="w-3 h-3 fill-amber-gold" />
              <span>ZERO TOUCH</span>
            </div>
          </div>

          {/* Core Locker Dashboard */}
          <div className="my-auto flex flex-col items-center text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold text-amber-gold mb-3 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-gold" />
              <span>Yogic Astra Shakti Pro</span>
            </div>

            {/* Central Holographic Shield with Sunburst */}
            <div className="relative my-2 group cursor-pointer">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-royal-blue via-sunrise-orange to-amber-gold opacity-40 blur-lg animate-pulse" />
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-royal-blue via-brand-navy to-deep-navy p-1 shadow-glow-blue border border-amber-gold/50 flex items-center justify-center">
                <div className="w-full h-full rounded-[22px] bg-[#071938] flex flex-col items-center justify-center p-2">
                  <Lock className="w-9 h-9 text-amber-gold drop-shadow-[0_0_12px_rgba(237,185,10,0.8)]" />
                  <span className="text-[9px] font-mono font-bold text-emerald-400 mt-1">LOCKED</span>
                </div>
              </div>
            </div>

            <div className="font-heading font-black text-sm sm:text-base tracking-tight text-white mt-1">
              Autonomous Finance Shield
            </div>
            <p className="text-[11px] text-slate-300">Bank-Grade EMI Telemetry</p>

            {/* Micro Live Metrics Card */}
            <div className="mt-4 w-full p-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] text-slate-300 mb-1.5 pb-1.5 border-b border-white/10">
                <span className="text-slate-400">EMI Scheduled</span>
                <span className="font-mono font-bold text-amber-gold">₹12,450</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>SIM Lock: Active</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>Auto Debit: Sync</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Footer inside Screen */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <Activity className="w-3 h-3 text-royal-blue" />
              <span>Offline 7-Day Guard</span>
            </span>
            <span className="text-amber-gold font-mono font-semibold">28+ States</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FLOATING INTERACTIVE APP ECOSYSTEM CARDS
          ========================================================================= */}

      {/* 1. TOP-LEFT: Yogic Astra Shakti Flagship Card */}
      <div className="absolute -left-2 sm:-left-8 top-6 sm:top-12 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-royal-blue/20 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
          <img
            src="/assets/yogic_astra_logo.png"
            alt="Yogic Astra Shakti"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-wider text-royal-blue flex items-center gap-1">
            <span>Flagship Suite</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="font-heading font-extrabold text-xs text-deep-navy">
            Yogic Astra Shakti
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            SIM Remove Lock &bull; Auto Debit
          </div>
        </div>
      </div>

      {/* 2. TOP-RIGHT: Astra Glamour Gold Vault Card */}
      <div className="absolute -right-2 sm:-right-8 top-12 sm:top-20 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-amber-gold/30 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50/80 p-1 border border-amber-gold/30 shadow-sm flex items-center justify-center flex-shrink-0">
          <img
            src="/assets/astra_glamour_logo.png"
            alt="Astra Glamour"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-wider text-amber-700">
            Gold Safe Locker
          </div>
          <div className="font-heading font-extrabold text-xs text-deep-navy">
            Astra Glamour
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            Google Authenticated &bull; 7-Day Lock
          </div>
        </div>
      </div>

      {/* 3. BOTTOM-LEFT: Secure EMI & GPS Card */}
      <div className="absolute -left-3 sm:-left-6 bottom-14 sm:bottom-20 z-30 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-royal-blue/20 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
          <img
            src="/assets/secure_emi_logo.png"
            alt="Secure EMI"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1">
            <MapPin className="w-2.5 h-2.5" />
            <span>Live Control</span>
          </div>
          <div className="font-heading font-extrabold text-xs text-deep-navy">
            Secure EMI Locker
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            Lock/Unlock &bull; Location Track
          </div>
        </div>
      </div>

      {/* 4. BOTTOM-RIGHT: Side Executive & Retail Trust Photo Badge */}
      <div className="absolute -right-3 sm:-right-8 bottom-6 sm:bottom-10 z-30 p-2.5 sm:px-3.5 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-200 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
        {/* Subrata Mukherjee Portrait Avatar */}
        <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-gold to-royal-blue shadow-md flex-shrink-0">
          <img
            src="/assets/subrata_mukherjee.jpg"
            alt="Subrata Mukherjee - Founder & Chairman"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-[10px] font-black text-amber-gold">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-600 font-mono ml-0.5">5.0</span>
          </div>
          <div className="font-heading font-extrabold text-xs text-deep-navy">
            Trusted by 1000+ Retailers
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            Across 28+ Indian States &bull; Est. 2021
          </div>
        </div>
      </div>
    </div>
  );
};
