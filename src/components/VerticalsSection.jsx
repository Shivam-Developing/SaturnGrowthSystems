import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';

export default function VerticalsSection() {
  const { t } = useLanguage();

  const verticals = [
    {
      num: t.v1Num,
      title: t.v1Title,
      desc: t.v1Desc,
      tags: [t.v1Tag1, t.v1Tag2],
      span: "",
    },
    {
      num: t.v2Num,
      title: t.v2Title,
      desc: t.v2Desc,
      tags: [t.v2Tag1, t.v2Tag2],
      span: "",
    },
    {
      num: t.v3Num,
      title: t.v3Title,
      desc: t.v3Desc,
      tags: [t.v3Tag1, t.v3Tag2],
      span: "",
    },
    {
      num: t.v4Num,
      title: t.v4Title,
      desc: t.v4Desc,
      tags: [t.v4Tag1, t.v4Tag2],
      span: "",
    },
    {
      num: t.v5Num,
      title: t.v5Title,
      desc: t.v5Desc,
      tags: [t.v5Tag1, t.v5Tag2, t.v5Tag3],
      span: "sm:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section id="verticals" className="py-12 sm:py-16 lg:py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec5Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec5Badge}
          </span>
        </div>

        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white leading-tight">
            {t.sec5TitlePart1} <br />
            <ShinyText className="text-2xl sm:text-3xl lg:text-4xl lowercase">
              {t.sec5TitlePart2}
            </ShinyText>
          </h2>
          <p className="text-xs sm:text-sm text-saturn-muted mt-2 max-w-xl font-normal leading-relaxed">
            {t.sec5Sub}
          </p>
        </div>

        {/* 5 Vertical Cards with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {verticals.map((vert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-5 sm:p-6 rounded-2xl glass-card group hover:translate-y-[-3px] transition-all flex flex-col justify-between ${vert.span}`}
            >
              <div>
                <div className="font-mono text-[10px] text-saturn-green uppercase mb-2 tracking-[0.16em] font-bold">
                  {vert.num}
                </div>
                <h3 className="text-base sm:text-lg font-syne font-bold uppercase text-white mb-1.5">
                  {vert.title}
                </h3>
                <p className="text-xs text-saturn-muted mb-4 leading-relaxed font-normal">
                  {vert.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {vert.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full bg-white/[0.04] font-mono text-[10px] text-saturn-cream border border-dashed border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl glass-card text-center">
          <p className="font-mono text-xs text-saturn-cream/90">
            {t.vertNote} <span className="text-saturn-green font-bold">{t.vertNoteBold}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
