import React, { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let animId;
    let time = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawAurora = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.008;

      // Color ribbons: Emerald green, deep pine, amber gold, and midnight cyan
      const layers = [
        { color1: 'rgba(0, 223, 97, 0.26)', color2: 'rgba(5, 46, 22, 0.0)', speed: 1.0, freq: 0.0018, yOffset: height * 0.35, amp: 85 },
        { color1: 'rgba(0, 205, 88, 0.20)', color2: 'rgba(10, 10, 12, 0.0)', speed: 1.3, freq: 0.0022, yOffset: height * 0.45, amp: 105 },
        { color1: 'rgba(229, 169, 60, 0.14)', color2: 'rgba(10, 10, 12, 0.0)', speed: 0.8, freq: 0.0015, yOffset: height * 0.25, amp: 65 },
        { color1: 'rgba(0, 223, 97, 0.16)', color2: 'rgba(0, 83, 31, 0.0)', speed: 1.1, freq: 0.0025, yOffset: height * 0.55, amp: 95 }
      ];

      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 16) {
          const wave1 = Math.sin(x * layer.freq + time * layer.speed);
          const wave2 = Math.cos(x * layer.freq * 0.6 - time * layer.speed * 0.8);
          const wave3 = Math.sin(x * 0.0008 + time * 0.5);
          const y = layer.yOffset + (wave1 * 0.6 + wave2 * 0.3 + wave3 * 0.3) * layer.amp;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, layer.yOffset - layer.amp, 0, height);
        grad.addColorStop(0, layer.color1);
        grad.addColorStop(1, layer.color2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(drawAurora);
    };

    animId = requestAnimationFrame(drawAurora);

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(drawAurora);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c] pointer-events-none" />
    </div>
  );
}
