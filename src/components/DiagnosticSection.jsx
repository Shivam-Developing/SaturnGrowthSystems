import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';

export default function DiagnosticSection() {
  const { t } = useLanguage();

  const diagnosticCards = [
    { num: t.q1Num, title: t.q1Title, desc: t.q1Desc },
    { num: t.q2Num, title: t.q2Title, desc: t.q2Desc },
    { num: t.q3Num, title: t.q3Title, desc: t.q3Desc },
    { num: t.q4Num, title: t.q4Title, desc: t.q4Desc },
    { num: t.q5Num, title: t.q5Title, desc: t.q5Desc },
  ];

  return (
    <section id="problem" className="py-12 sm:py-16 lg:py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec2Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec2SectionNum}
          </span>
        </div>

        {/* Editorial Narrative & Diagnostic Sculpture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs text-saturn-green uppercase tracking-[0.2em] mb-2.5">
              {t.sec2Pill}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold tracking-tight uppercase text-white leading-tight">
              {t.sec2TitlePart1} <br />
              <ShinyText className="text-2xl sm:text-3xl lg:text-4xl block mt-1 tracking-normal lowercase">
                {t.sec2TitlePart2}
              </ShinyText>
            </h2>

            {/* Fast, Scannable Executive Lead */}
            <p className="font-sans text-sm sm:text-base text-saturn-cream/90 font-normal leading-relaxed mt-4 mb-5">
              {t.sec2Lead}
            </p>

            {/* 2-Step Structured Scannable Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {/* Box 1: Diagnostic Questions */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-saturn-green/30 transition-colors">
                <span className="font-mono text-[10.5px] text-saturn-green font-bold block mb-2.5 tracking-wider uppercase">
                  {t.sec2QTitle}
                </span>
                <ul className="space-y-2 font-sans text-xs text-saturn-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-saturn-green shrink-0 text-xs">→</span>
                    <span>{t.sec2Q1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saturn-green shrink-0 text-xs">→</span>
                    <span>{t.sec2Q2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saturn-green shrink-0 text-xs">→</span>
                    <span>{t.sec2Q3}</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Bespoke Solutions */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-saturn-green/30 transition-colors">
                <span className="font-mono text-[10.5px] text-saturn-cream font-bold block mb-2.5 tracking-wider uppercase">
                  {t.sec2SolTitle}
                </span>
                <ul className="space-y-2 font-sans text-xs text-saturn-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-saturn-green shrink-0 text-xs">✓</span>
                    <span>{t.sec2Sol1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saturn-green shrink-0 text-xs">✓</span>
                    <span>{t.sec2Sol2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saturn-green shrink-0 text-xs">✓</span>
                    <span>{t.sec2Sol3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Diagnostic Sculpture with Stitched Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden glass-card p-1.5 shadow-2xl group">
              <div className="relative aspect-[3/4] max-h-[440px] w-full rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/images/saturn_diagnostic_sculpture.jpg"
                  alt="Saturn Diagnostic Kinetic Sculpture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 border-t border-dashed border-white/10 bg-[#121317]/90 flex items-center justify-between mt-1 rounded-b-xl">
                <div>
                  <p className="font-mono text-[10px] text-saturn-muted uppercase tracking-[0.16em]">
                    {t.diagSculptureTag}
                  </p>
                  <p className="font-syne font-bold text-xs sm:text-sm text-saturn-cream mt-0.5">
                    {t.diagSculptureTitle}
                  </p>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-saturn-green font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-saturn-green animate-ping" /> ACTIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5-Card Diagnostic Leak Rail with Staggered Scroll Animation */}
        <div className="mt-10 sm:mt-12 border-t border-dashed border-white/15 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {diagnosticCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`p-5 rounded-2xl glass-card transition-colors ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <span className="font-mono text-xs text-saturn-green block mb-2 font-bold">
                  {card.num}
                </span>
                <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-saturn-muted leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
