import React, { useEffect, useRef } from 'react';

export const VideoFallbackCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Drifting gold/blue particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? '#EDB90A' : '#0A6BDB',
    }));

    let t = 0;

    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Base with Soft Radial Glow
      const bgGrad = ctx.createRadialGradient(
        width * 0.65,
        height * 0.45,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0c2d61');
      bgGrad.addColorStop(0.4, '#0B2A5B');
      bgGrad.addColorStop(0.75, '#071633');
      bgGrad.addColorStop(1, '#040d1f');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Flowing Blue Ribbon (Logo Left Crescent motif)
      ctx.save();
      ctx.beginPath();
      const blueWaveOffset = Math.sin(t) * 40;
      ctx.moveTo(width * 0.35 + blueWaveOffset, -50);
      ctx.bezierCurveTo(
        width * 0.5 + Math.cos(t * 0.7) * 60,
        height * 0.35,
        width * 0.25 + Math.sin(t * 0.5) * 50,
        height * 0.65,
        width * 0.45,
        height + 50
      );
      ctx.lineWidth = 90;
      ctx.strokeStyle = 'rgba(10, 107, 219, 0.22)';
      ctx.shadowColor = '#0A6BDB';
      ctx.shadowBlur = 50;
      ctx.stroke();
      ctx.restore();

      // Flowing Sunrise Orange Ribbon (Logo Right Crescent motif)
      ctx.save();
      ctx.beginPath();
      const orangeWaveOffset = Math.cos(t * 0.9) * 40;
      ctx.moveTo(width * 0.65 + orangeWaveOffset, -50);
      ctx.bezierCurveTo(
        width * 0.48 + Math.sin(t * 0.6) * 50,
        height * 0.3,
        width * 0.72 + Math.cos(t * 0.8) * 60,
        height * 0.7,
        width * 0.55,
        height + 50
      );
      ctx.lineWidth = 75;
      ctx.strokeStyle = 'rgba(249, 125, 7, 0.2)';
      ctx.shadowColor = '#F97D07';
      ctx.shadowBlur = 45;
      ctx.stroke();
      ctx.restore();

      // Sun-Ray Sweep from top-right
      ctx.save();
      const rayGrad = ctx.createLinearGradient(
        width * 0.7 + Math.sin(t * 0.5) * 80,
        0,
        width * 0.3,
        height
      );
      rayGrad.addColorStop(0, 'rgba(237, 185, 10, 0.12)');
      rayGrad.addColorStop(0.5, 'rgba(249, 125, 7, 0.05)');
      rayGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = rayGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Drifting Gold Dust / Stars
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (0.8 + 0.2 * Math.sin(t * 3 + p.x));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

