import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  MapPin,
  Bell,
  Smartphone,
  Camera,
  CreditCard,
  Check,
  ArrowRight,
  Wifi,
  Battery,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LockerSimulatorProps {
  onComplete?: () => void;
  onExploreShakti?: () => void;
}

export const LockerSimulator: React.FC<LockerSimulatorProps> = ({
  onComplete,
  onExploreShakti,
}) => {
  const [isLocked, setIsLocked] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showEmiAlert, setShowEmiAlert] = useState(false);
  const [simLocked, setSimLocked] = useState(false);
  const [cameraLocked, setCameraLocked] = useState(false);
  const [autoDebit, setAutoDebit] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
    if (!hasInteracted) {
      setHasInteracted(true);
      onComplete?.();
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#F97D07', '#EDB90A', '#0A6BDB'],
      });
    }
  };

  const handleToggleLock = () => {
    setIsLocked(!isLocked);
    triggerToast(!isLocked ? '🔒 Remote Command Sent: Device Locked Instantly' : '🔓 Remote Command Sent: Device Unlocked & Restored');
  };

  const handleToggleLocation = () => {
    setShowLocation(!showLocation);
    triggerToast(showLocation ? 'GPS Telemetry Minimized' : '📍 Live GPS Pin Located: VIP Rd, Kolkata (Accuracy: 5m)');
  };

  const handleSendEmiAlert = () => {
    setShowEmiAlert(true);
    triggerToast('🔔 Automated Push Alert Pushed to Retail Customer Device');
    setTimeout(() => setShowEmiAlert(false), 5000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Activity Label */}
      <div className="text-center mb-10">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-gold/20 text-amber-gold border border-amber-gold/30">
          Activity 01 · Interactive Simulator
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Try The Finance Locker
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Take control of an active EMI device in real time. Tap the buttons below to test remote lock, GPS tracking, and automated alert telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT: Phone Simulator Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[620px] rounded-[48px] bg-slate-950 p-3.5 border-4 border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_8px_rgba(255,255,255,0.2)]">
            {/* Dynamic Island / Speaker */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-end px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
            </div>

            {/* Inner Screen Display */}
            <div
              className={`relative w-full h-full rounded-[38px] overflow-hidden flex flex-col justify-between p-5 transition-all duration-500 ${
                isLocked
                  ? 'bg-gradient-to-b from-red-950/95 via-slate-950 to-midnight'
                  : 'bg-gradient-to-b from-midnight via-brand-navy to-deep-navy'
              }`}
            >
              {/* Phone Status Header */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-2 z-20">
                <span>09:41 AM</span>
                <div className="flex items-center gap-2">
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>

              {/* Push Notification Banner (Drops in when triggered) */}
              {showEmiAlert && (
                <div className="mt-4 p-3 rounded-2xl bg-white/95 text-slate-900 shadow-2xl border border-amber-gold/80 animate-bounce-subtle z-30">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-sunrise-orange text-white flex items-center justify-center flex-shrink-0">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-600">
                        <span className="font-bold text-sunrise-orange uppercase">EMI Notice</span>
                        <span>Now</span>
                      </div>
                      <p className="text-xs font-heading font-extrabold text-slate-900 mt-0.5">
                        EMI of ₹12,450 due in 2 days
                      </p>
                      <p className="text-[10px] text-slate-600 mt-0.5">
                        Tap here to pay online via UPI or Auto Debit.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Phone State Display */}
              <div className="flex flex-col items-center justify-center text-center my-auto z-10 py-4">
                {isLocked ? (
                  <div className="flex flex-col items-center animate-shake">
                    <div className="w-20 h-20 rounded-3xl bg-red-500/20 border-2 border-red-500 text-red-400 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.5)] mb-4">
                      <Lock className="w-10 h-10" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/40">
                      DEVICE LOCKED
                    </span>
                    <h4 className="mt-3 text-lg font-heading font-extrabold text-white">
                      Payment Overdue
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-[200px]">
                      Access restricted by Retailer Dashboard under Yogic Astra Shakti.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center animate-fade-in">
                    <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)] mb-4">
                      <Unlock className="w-10 h-10" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      ACTIVE &amp; SECURE
                    </span>
                    <h4 className="mt-3 text-lg font-heading font-extrabold text-white">
                      Yogic Astra Shakti Pro
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-[210px]">
                      Zero-Touch Autonomous Lock Armed &amp; Monitored.
                    </p>
                  </div>
                )}

                {/* Live GPS Telemetry Mini Map Overlay */}
                {showLocation && (
                  <div className="mt-4 w-full p-2.5 rounded-2xl bg-midnight/90 border border-cyan-400/50 text-left animate-slide-up">
                    <div className="flex items-center gap-1.5 text-cyan-300 text-[10px] font-mono font-bold mb-1">
                      <MapPin className="w-3 h-3 text-cyan-400 animate-pulse" />
                      <span>LIVE GPS PIN · KOLKATA</span>
                    </div>
                    <p className="text-[10px] text-slate-300 font-mono">
                      Lat: 22.6326° N, Lng: 88.4342° E
                    </p>
                    <div className="mt-1.5 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-3/4 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer Chips */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>SIM: {simLocked ? 'LOCKED' : 'MONITORED'}</span>
                <span>DEBIT: {autoDebit ? 'ACTIVE' : 'OFF'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Tappable Dashboard Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-midnight/80 border border-white/15 backdrop-blur-xl shadow-2xl">
            <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white mb-2">
              Retailer Command Console
            </h4>
            <p className="text-sm text-slate-300 mb-6">
              Simulate actions executed by 1000+ mobile store owners across India:
            </p>

            {/* 6 Control Action Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Button 1: Lock / Unlock */}
              <button
                type="button"
                onClick={handleToggleLock}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-95 ${
                  isLocked
                    ? 'bg-red-500/20 border-red-400 text-white shadow-lg shadow-red-500/20'
                    : 'bg-white/5 border-white/15 hover:border-amber-gold hover:bg-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  {isLocked ? <Lock className="w-5 h-5 text-red-400" /> : <Unlock className="w-5 h-5 text-emerald-400" />}
                  <span className="text-[10px] font-mono uppercase text-amber-gold">
                    {isLocked ? 'Tap Unlock' : 'Tap Lock'}
                  </span>
                </div>
                <span className="block text-xs font-heading font-bold text-white">
                  {isLocked ? 'Unlock Device' : 'Remote Lock'}
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  {isLocked ? 'Restore access' : 'Lock immediately'}
                </span>
              </button>

              {/* Button 2: Track Location */}
              <button
                type="button"
                onClick={handleToggleLocation}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-95 ${
                  showLocation
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 border-white/15 hover:border-cyan-400 hover:bg-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-[10px] font-mono uppercase text-cyan-300">
                    {showLocation ? 'Hide' : 'Track'}
                  </span>
                </div>
                <span className="block text-xs font-heading font-bold text-white">
                  Track Location
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  GPS coordinate telemetry
                </span>
              </button>

              {/* Button 3: Send EMI Alert */}
              <button
                type="button"
                onClick={handleSendEmiAlert}
                className="p-3.5 rounded-2xl border border-white/15 bg-white/5 hover:border-amber-gold hover:bg-white/10 text-slate-200 text-left transition-all duration-200 active:scale-95"
              >
                <div className="flex items-center justify-between mb-2">
                  <Bell className="w-5 h-5 text-amber-gold" />
                  <span className="text-[10px] font-mono uppercase text-amber-gold">Push</span>
                </div>
                <span className="block text-xs font-heading font-bold text-white">
                  Send EMI Alert
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Push notification notice
                </span>
              </button>

              {/* Button 4: SIM Lock */}
              <button
                type="button"
                onClick={() => {
                  setSimLocked(!simLocked);
                  triggerToast(!simLocked ? '🔒 SIM Slot Locked: Device triggers alarm if swapped' : 'SIM Guard Armed in Monitor Mode');
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-95 ${
                  simLocked
                    ? 'bg-sunrise-orange/20 border-sunrise-orange text-white'
                    : 'bg-white/5 border-white/15 hover:border-white/30 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Smartphone className="w-5 h-5 text-sunrise-orange" />
                  <span className="text-[10px] font-mono text-slate-400">
                    {simLocked ? 'ON' : 'OFF'}
                  </span>
                </div>
                <span className="block text-xs font-heading font-bold text-white">
                  SIM Lock
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Detect unauthorized SIM
                </span>
              </button>

              {/* Button 5: Camera Lock */}
              <button
                type="button"
                onClick={() => {
                  setCameraLocked(!cameraLocked);
                  triggerToast(!cameraLocked ? '📸 Camera Module Disabled Remotely' : 'Camera Module Enabled');
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-95 ${
                  cameraLocked
                    ? 'bg-purple-500/20 border-purple-400 text-white'
                    : 'bg-white/5 border-white/15 hover:border-white/30 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Camera className="w-5 h-5 text-purple-400" />
                  <span className="text-[10px] font-mono text-slate-400">
                    {cameraLocked ? 'ON' : 'OFF'}
                  </span>
                </div>
                <span className="block text-xs font-heading font-bold text-white">
                  Camera Lock
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Privacy restriction
                </span>
              </button>

              {/* Button 6: Auto Debit */}
              <button
                type="button"
                onClick={() => {
                  setAutoDebit(!autoDebit);
                  triggerToast(!autoDebit ? '💳 Auto Debit Mandate Synced with Bank Gateway' : 'Auto Debit Paused');
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-95 ${
                  autoDebit
                    ? 'bg-emerald-500/20 border-emerald-400 text-white'
                    : 'bg-white/5 border-white/15 hover:border-white/30 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-mono text-slate-400">
                    {autoDebit ? 'ACTIVE' : 'OFF'}
                  </span>
                </div>
                <span className="block text-xs font-heading font-bold text-white">
                  Auto Debit
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  Automated repayment
                </span>
              </button>
            </div>

            {/* Live Feedback Toast Banner */}
            {toastMessage && (
              <div className="mt-5 p-3 rounded-xl bg-midnight border border-amber-gold/60 text-xs font-mono text-amber-gold flex items-center gap-2 animate-fade-in shadow-xl">
                <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>{toastMessage}</span>
              </div>
            )}

            {/* Side Auto-Write Caption & CTA */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                <strong className="text-white">This is Yogic Astra Shakti.</strong> Total control over every EMI device, from your dashboard.
              </p>

              <button
                type="button"
                onClick={onExploreShakti}
                className="flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold text-midnight bg-gradient-to-r from-amber-gold to-sunrise-orange hover:from-sunrise-orange hover:to-amber-gold transition-all duration-200 shadow-md flex items-center gap-2 group active:scale-95"
              >
                <span>Explore Astra Shakti</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
