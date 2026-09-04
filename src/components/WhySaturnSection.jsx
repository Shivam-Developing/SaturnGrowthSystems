import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';

export default function WhySaturnSection() {
  const { t } = useLanguage();

  const reasons = [
    { num: "01", title: t.ws1Title, desc: t.ws1Desc },
    { num: "02", title: t.ws2Title, desc: t.ws2Desc },
    { num: "03", title: t.ws3Title, desc: t.ws3Desc },
    { num: "04", title: t.ws4Title, desc: t.ws4Desc },
    { num: "05", title: t.ws5Title, desc: t.ws5Desc },
    { num: "06", title: t.ws6Title, desc: t.ws6Desc },
  ];

  return (
    <section id="why-saturn" className="py-12 sm:py-16 lg:py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec7Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec7Badge}
          </span>
        </div>

        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white leading-tight">
            {t.sec7TitlePart1}{' '}
            <ShinyText className="text-2xl sm:text-3xl lg:text-4xl lowercase">
              {t.sec7TitlePart2}
            </ShinyText>
          </h2>
          <p className="text-xs sm:text-sm text-saturn-muted mt-2 max-w-xl font-normal leading-relaxed">
            {t.sec7Sub}
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl glass-card hover:translate-y-[-3px] transition-all"
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/[0.04] border border-dashed border-white/20 flex items-center justify-center font-mono text-saturn-green font-bold text-xs mb-3.5 sm:mb-4">
                {item.num}
              </div>
              <h3 className="text-sm sm:text-base font-syne font-bold uppercase text-white mb-1.5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-saturn-muted leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
