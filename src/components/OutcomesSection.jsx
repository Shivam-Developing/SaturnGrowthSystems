import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';

export default function OutcomesSection() {
  const { t } = useLanguage();

  const metrics = [
    { num: "01", title: t.out1Title, sub: t.out1Sub },
    { num: "02", title: t.out2Title, sub: t.out2Sub },
    { num: "03", title: t.out3Title, sub: t.out3Sub },
    { num: "04", title: t.out4Title, sub: t.out4Sub },
    { num: "05", title: t.out5Title, sub: t.out5Sub },
    { num: "06", title: t.out6Title, sub: t.out6Sub },
  ];

  return (
    <section id="outcomes" className="py-12 sm:py-16 lg:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec8Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec8Badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white mb-8 sm:mb-10 max-w-3xl leading-tight">
          {t.sec8TitlePart1} <br />
          <ShinyText className="text-2xl sm:text-3xl lg:text-4xl block mt-0.5 lowercase">
            {t.sec8TitlePart2}
          </ShinyText>
        </h2>

        {/* 6 Outcome Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl glass-card hover:translate-y-[-3px] transition-all flex flex-col justify-between min-h-36 group"
            >
              <div className="font-mono text-[10px] text-saturn-muted tracking-[0.16em]">
                METRIC // {m.num}
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-syne font-extrabold text-white tracking-tight uppercase group-hover:text-saturn-green transition-colors leading-tight">
                {m.title}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-saturn-dim">
                {m.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
