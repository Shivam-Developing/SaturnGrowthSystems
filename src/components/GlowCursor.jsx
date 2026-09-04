import React, { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const dotRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    // Only run on desktop with fine mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100, mouseY = -100;
    let auraX = -100, auraY = -100;
    let dotX = -100, dotY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      dotX += (mouseX - dotX) * 0.7;
      dotY += (mouseY - dotY) * 0.7;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }

      auraX += (mouseX - auraX) * 0.18;
      auraY += (mouseY - auraY) * 0.18;
      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraX}px, ${auraY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const interactiveSelectors = 'a, button, input, textarea, select, .glass-card, .service-row, [role="button"]';
    const onMouseOver = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        auraRef.current?.classList.add('hovered');
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        auraRef.current?.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="glow-cursor-container" aria-hidden="true">
      <div ref={auraRef} className="glow-cursor-aura" />
      <div ref={dotRef} className="glow-cursor-dot" />
    </div>
  );
}
