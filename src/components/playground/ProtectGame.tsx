import React, { useState, useEffect, useRef } from 'react';
import { Shield, Bug, Skull, AlertOctagon, Hand, Trophy, RotateCcw, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThreatItem {
  id: number;
  x: number; // percentage 10 to 90
  y: number; // percentage 0 to 80
  speed: number;
  type: 'bug' | 'hacker' | 'malware' | 'thief';
  label: string;
}

interface ProtectGameProps {
  onComplete?: () => void;
  onTalkToTeam?: () => void;
}

export const ProtectGame: React.FC<ProtectGameProps> = ({ onComplete, onTalkToTeam }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [threats, setThreats] = useState<ThreatItem[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [combo, setCombo] = useState(1);
  const [shake, setShake] = useState(false);
  const nextId = useRef(0);

  // Threat types pool
  const THREAT_TYPES: Array<{ type: ThreatItem['type']; label: string }> = [
    { type: 'bug', label: 'Zero-Day Exploit' },
    { type: 'hacker', label: 'Brute Force' },
    { type: 'malware', label: 'Trojan APK' },
    { type: 'thief', label: 'Device Theft' },
  ];

  const startGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setTimeLeft(25);
    setThreats([]);
    setCombo(1);
    onComplete?.();
  };

  // Timer countdown
  useEffect(() => {
    if (!isPlaying || isGameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameOver(true);
          setIsPlaying(false);
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0A6BDB', '#EDB90A', '#F97D07'],
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, isGameOver]);

  // Spawn and move threats
  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const gameLoop = setInterval(() => {
      setThreats((prev) => {
        // Move existing down
        const updated = prev
          .map((t) => ({ ...t, y: t.y + t.speed }))
          .filter((t) => {
            // Reached shield/phone without click -> miss
            if (t.y >= 75) {
              setShake(true);
              setTimeout(() => setShake(false), 200);
              setCombo(1);
              return false;
            }
            return true;
          });

        // Spawn new threat periodically
        if (Math.random() < 0.45 && updated.length < 5) {
          const typeObj = THREAT_TYPES[Math.floor(Math.random() * THREAT_TYPES.length)];
          updated.push({
            id: nextId.current++,
            x: Math.floor(Math.random() * 70) + 15,
            y: 0,
            speed: Math.random() * 1.5 + 1.2,
            type: typeObj.type,
            label: typeObj.label,
          });
        }
        return updated;
      });
    }, 100);

    return () => clearInterval(gameLoop);
  }, [isPlaying, isGameOver]);

  // Click on a falling threat
  const handleIntercept = (id: number) => {
    setThreats((prev) => prev.filter((t) => t.id !== id));
    setScore((prev) => prev + 10 * combo);
    setCombo((prev) => Math.min(prev + 1, 5));
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Activity Label */}
      <div className="text-center mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
          Activity 04 · Mini-Game
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Protect The Phone
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Tap or click incoming cyber threats and physical thefts before they breach the Yogic security perimeter.
        </p>
      </div>

      {/* Main Game Stage Container */}
      <div
        className={`relative w-full h-[460px] sm:h-[500px] rounded-3xl bg-midnight/90 border-2 border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between p-6 select-none ${
          shake ? 'animate-shake border-red-500' : ''
        }`}
      >
        {/* Game Header HUD */}
        <div className="relative z-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 font-mono text-xs">
              <span className="text-slate-400">Score: </span>
              <span className="text-amber-gold font-bold text-sm">{score}</span>
            </div>
            {combo > 1 && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-sunrise-orange/30 text-sunrise-orange animate-bounce">
                {combo}x Combo!
              </span>
            )}
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 font-mono text-xs">
            <span className="text-slate-400">Time: </span>
            <span className={`font-bold text-sm ${timeLeft <= 5 ? 'text-red-400 animate-ping' : 'text-cyan-300'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Start Game Overlay */}
        {!isPlaying && !isGameOver && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-midnight/90 p-6 text-center backdrop-blur-md">
            <div className="w-20 h-20 rounded-3xl bg-amber-gold/20 border-2 border-amber-gold text-amber-gold flex items-center justify-center shadow-[0_0_40px_rgba(237,185,10,0.4)] mb-5">
              <Shield className="w-10 h-10" />
            </div>
            <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Ready to Defend?
            </h4>
            <p className="mt-2 text-sm text-slate-300 max-w-md">
              Tap falling threats (malware, exploits, thieves) to protect devices using Yogic's multi-layered perimeter.
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-6 px-8 py-3.5 rounded-full text-sm font-heading font-bold text-midnight bg-gradient-to-r from-amber-gold to-sunrise-orange hover:from-sunrise-orange hover:to-amber-gold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              Start 25s Simulation
            </button>
          </div>
        )}

        {/* Game Over Screen */}
        {isGameOver && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-midnight/95 p-6 text-center backdrop-blur-lg animate-fade-in">
            <div className="w-20 h-20 rounded-3xl bg-sunrise-orange/20 border-2 border-sunrise-orange text-sunrise-orange flex items-center justify-center shadow-[0_0_40px_rgba(249,125,7,0.5)] mb-4">
              <Trophy className="w-10 h-10" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-bold">
              Simulation Complete
            </span>
            <h4 className="mt-2 text-2xl sm:text-3xl font-heading font-extrabold text-white">
              You Intercepted {Math.floor(score / 10)} Threat Vectors!
            </h4>
            <p className="mt-2 text-sm text-slate-200 max-w-md font-sans">
              Imagine protecting thousands of devices automatically across 28+ Indian states with Yogic Software.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={startGame}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>

              <button
                type="button"
                onClick={onTalkToTeam}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-midnight bg-gradient-to-r from-amber-gold to-sunrise-orange hover:from-sunrise-orange hover:to-amber-gold shadow-lg flex items-center gap-2"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Falling Threat Items */}
        {threats.map((threat) => (
          <button
            key={threat.id}
            type="button"
            onClick={() => handleIntercept(threat.id)}
            className="absolute z-20 -translate-x-1/2 p-2.5 rounded-2xl bg-red-950/80 border border-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.6)] text-red-200 hover:scale-125 transition-transform flex items-center gap-2 active:scale-90 focus:outline-none"
            style={{
              left: `${threat.x}%`,
              top: `${threat.y}%`,
            }}
          >
            {threat.type === 'bug' && <Bug className="w-5 h-5 text-red-400 animate-spin-slow" />}
            {threat.type === 'hacker' && <Skull className="w-5 h-5 text-sunrise-orange animate-pulse" />}
            {threat.type === 'malware' && <AlertOctagon className="w-5 h-5 text-yellow-400" />}
            {threat.type === 'thief' && <Hand className="w-5 h-5 text-red-400" />}
            <span className="text-[10px] font-mono font-bold whitespace-nowrap hidden sm:inline">
              {threat.label}
            </span>
          </button>
        ))}

        {/* Bottom Protected Phone & Yogic Shield */}
        <div className="relative z-10 flex flex-col items-center mt-auto pb-2">
          {/* Glowing Yogic Shield Dome */}
          <div className="w-48 sm:w-64 h-24 rounded-t-full border-t-2 border-x-2 border-cyan-400/80 bg-cyan-400/10 shadow-[0_-15px_40px_rgba(0,210,255,0.35)] flex flex-col items-center justify-center relative">
            <Shield className="w-8 h-8 text-cyan-300 drop-shadow-[0_0_12px_#00D2FF]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-200 mt-1">
              Yogic Shield 5.0
            </span>
          </div>

          {/* Device Base */}
          <div className="w-36 h-6 rounded-t-2xl bg-slate-900 border-t border-x border-slate-700 flex items-center justify-center">
            <span className="w-12 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
