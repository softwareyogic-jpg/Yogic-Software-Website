import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: number; // percentage across width (4% to 94%)
  top: number;  // base vertical position down section (1% to 98%)
  size: number; // px (28px to 42px)
  duration: number; // seconds for upward journey (8s to 14s)
  delay: number; // stagger so they are already mid-flight
  swayDuration: number;
  swayDistance: number;
  opacity: number;
  glowColor: string;
}

interface FloatingEmblemParticlesProps {
  active?: boolean;
}

export const FloatingEmblemParticles: React.FC<FloatingEmblemParticlesProps> = ({ active = true }) => {
  const particles: Particle[] = useMemo(() => {
    const items: Particle[] = [];
    const count = 56;
    const glowColors = [
      'rgba(249, 125, 7, 0.4)',  // sunrise orange
      'rgba(56, 189, 248, 0.45)', // electric sky cyan
      'rgba(237, 185, 10, 0.4)',  // amber gold
      'rgba(129, 140, 248, 0.45)', // indigo light
    ];

    for (let i = 0; i < count; i++) {
      const left = ((i * 11.3) % 92) + 4; // 4% to 96%
      const top = ((i * 1.75) % 97) + 1.5; // distributed down the height
      const size = 30 + (i % 4) * 4; // 30px, 34px, 38px, 42px
      const duration = 8 + (i % 5) * 1.4; // 8s to ~14s
      const delay = -((i * 1.5) % 14); // pre-started at different points in flight
      const swayDuration = 2.8 + (i % 4) * 0.8;
      const swayDistance = 16 + (i % 3) * 10; // 16px to 36px
      const opacity = 0.65 + (i % 3) * 0.12; // 0.65 to 0.89 crisp & clearly visible

      items.push({
        id: i,
        left,
        top,
        size,
        duration,
        delay,
        swayDuration,
        swayDistance,
        opacity,
        glowColor: glowColors[i % glowColors.length],
      });
    }
    return items;
  }, []);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <style>{`
        @keyframes yogicOrbAscend {
          0% {
            transform: translateY(140px) scale(0.85);
            opacity: 0;
          }
          15% {
            opacity: var(--orb-max-op, 0.75);
          }
          85% {
            opacity: var(--orb-max-op, 0.75);
          }
          100% {
            transform: translateY(-460px) scale(1.08);
            opacity: 0;
          }
        }

        @keyframes yogicOrbSway {
          0%, 100% {
            transform: translateX(0px) rotate(-6deg);
          }
          50% {
            transform: translateX(var(--orb-sway-dist, 20px)) rotate(8deg);
          }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `yogicOrbAscend ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            ['--orb-max-op' as string]: p.opacity,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: `yogicOrbSway ${p.swayDuration}s ease-in-out infinite alternate`,
              ['--orb-sway-dist' as string]: `${p.swayDistance}px`,
            }}
          >
            {/* Luminous Glass Orb with Frosted Light Backdrop so Blue & Orange crescents pop with electric clarity */}
            <div
              className="w-full h-full rounded-full flex items-center justify-center p-1.5 backdrop-blur-md transition-transform"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 65%, rgba(56, 189, 248, 0.16) 100%)',
                border: '1.2px solid rgba(255, 255, 255, 0.35)',
                boxShadow: `0 0 16px ${p.glowColor}, inset 0 0 10px rgba(255, 255, 255, 0.25)`,
              }}
            >
              <img
                src="/assets/yogic_emblem.png"
                alt=""
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(1.25) contrast(1.15) drop-shadow(0 0 6px rgba(56, 189, 248, 0.8)) drop-shadow(0 0 6px rgba(249, 125, 7, 0.7))',
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
