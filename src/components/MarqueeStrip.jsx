import React from 'react';

export default function MarqueeStrip({ items, slow = false }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#08090b] border-y border-dashed border-white/10 overflow-hidden py-3.5 select-none">
      <div className={`flex whitespace-nowrap ${slow ? 'animate-marquee-slow' : 'animate-marquee'} items-center text-xs font-mono tracking-[0.2em] text-saturn-cream uppercase`}>
        {repeated.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-6 text-saturn-cream/90">{item}</span>
            <span className="text-saturn-green text-[10px]">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
