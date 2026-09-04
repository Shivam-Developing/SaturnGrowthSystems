import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';

export default function ApproachSection() {
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t.st1Title, desc: t.st1Desc, phase: t.st1Phase },
    { num: "02", title: t.st2Title, desc: t.st2Desc, phase: t.st2Phase },
    { num: "03", title: t.st3Title, desc: t.st3Desc, phase: t.st3Phase },
    { num: "04", title: t.st4Title, desc: t.st4Desc, phase: t.st4Phase },
    { num: "05", title: t.st5Title, desc: t.st5Desc, phase: t.st5Phase },
  ];

  return (
    <section id="approach" className="py-12 sm:py-16 lg:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec6Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec6Badge}
          </span>
        </div>

        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white leading-tight">
            {t.sec6TitlePart1}{' '}
            <ShinyText className="text-2xl sm:text-3xl lg:text-4xl lowercase">
              {t.sec6TitlePart2}
            </ShinyText>
          </h2>
        </div>

        {/* 5-Step Grid with Progress Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-5 sm:p-6 rounded-2xl glass-card flex flex-col justify-between hover:translate-y-[-3px] transition-all ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="font-syne font-extrabold text-xl text-saturn-green mb-3">
                  {step.num}
                </div>
                <h3 className="text-sm sm:text-base font-syne font-bold uppercase text-white mb-1.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-saturn-muted leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-dashed border-white/15 font-mono text-[10px] text-saturn-muted uppercase tracking-[0.16em]">
                {step.phase}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
