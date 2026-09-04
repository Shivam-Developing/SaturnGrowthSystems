import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';
import { Plus, X } from 'lucide-react';

export default function DisciplinesSection() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(null);

  const services = [
    {
      num: "01",
      title: t.srv1Title,
      pill: t.srv1Pill,
      desc: t.srv1Desc,
      tags: ["Sub-second TTFB", "Conversion Architecture", "Next.js Edge"],
    },
    {
      num: "02",
      title: t.srv2Title,
      pill: t.srv2Pill,
      desc: t.srv2Desc,
      tags: ["Targeted Meta Ads", "High Intent Leads", "Direct ROI Tracking"],
    },
    {
      num: "03",
      title: t.srv3Title,
      pill: t.srv3Pill,
      desc: t.srv3Desc,
      tags: ["Short-form Video", "Executive Narrative", "Community Growth"],
    },
    {
      num: "04",
      title: t.srv4Title,
      pill: t.srv4Pill,
      desc: t.srv4Desc,
      tags: ["WhatsApp API", "CRM Auto-Sync", "24/7 Lead Capture"],
    },
    {
      num: "05",
      title: t.srv5Title,
      pill: t.srv5Pill,
      desc: t.srv5Desc,
      tags: ["AI Telephony", "Calendar Auto-Book", "Smart Routing"],
    },
    {
      num: "06",
      title: t.srv6Title,
      pill: t.srv6Pill,
      desc: t.srv6Desc,
      tags: ["No Per-Seat Cost", "Tailor-Made UI", "Full IP Ownership"],
    },
    {
      num: "07",
      title: t.srv7Title,
      pill: t.srv7Pill,
      desc: t.srv7Desc,
      tags: ["Automated Billing", "Pipeline Triggering", "Zero Human Error"],
    },
    {
      num: "08",
      title: t.srv8Title,
      pill: t.srv8Pill,
      desc: t.srv8Desc,
      tags: ["Document Parsing", "Smart Routing", "Predictive Dashboards"],
    },
    {
      num: "09",
      title: t.srv9Title,
      pill: t.srv9Pill,
      desc: t.srv9Desc,
      tags: ["Systems Audit", "Fractional CTO", "Scale Blueprint"],
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="disciplines" className="py-12 sm:py-16 lg:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec4Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec4Badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white mb-8 sm:mb-10 leading-tight">
          {t.sec4TitlePart1}{' '}
          <ShinyText className="text-2xl sm:text-3xl lg:text-4xl lowercase">
            {t.sec4TitlePart2}
          </ShinyText>
        </h2>

        {/* 9 Services Accordion */}
        <div className="divide-y divide-white/10 border-y border-dashed border-white/15">
          {services.map((srv, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="service-row group py-5 sm:py-6 cursor-pointer transition-all"
                onClick={() => toggleAccordion(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-8 min-w-0">
                    <span className="font-mono text-xs sm:text-sm text-saturn-muted group-hover:text-saturn-green transition-colors shrink-0">
                      {srv.num}
                    </span>
                    <h3 className="text-sm sm:text-base lg:text-lg font-syne font-bold uppercase tracking-tight text-saturn-cream group-hover:text-saturn-green transition-colors truncate">
                      {srv.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:inline-block font-mono text-[11px] text-saturn-muted uppercase tracking-wider">
                      {srv.pill}
                    </span>
                    <div className="text-saturn-green transition-transform duration-300">
                      {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-8 sm:pl-16 pr-2 sm:pr-4 grid grid-cols-1 md:grid-cols-12 gap-4 text-saturn-muted text-xs sm:text-sm leading-relaxed">
                        <p className="md:col-span-8 font-normal">{srv.desc}</p>
                        <div className="md:col-span-4 flex flex-wrap gap-2 items-start">
                          {srv.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-dashed border-white/20 font-mono text-[10px] sm:text-[11px] text-saturn-cream"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Signature Commitment Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 lg:p-10 rounded-2xl glass-card relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8"
        >
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] sm:text-xs text-saturn-green uppercase tracking-[0.2em] mb-2">
              {t.bannerTag}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-syne font-extrabold text-white tracking-tight uppercase leading-snug">
              {t.bannerQuotePart1} <br />
              <ShinyText className="text-lg sm:text-xl lg:text-2xl block mt-0.5 tracking-normal lowercase">
                {t.bannerQuotePart2}
              </ShinyText>
            </h3>
            <p className="text-xs sm:text-sm text-saturn-muted mt-2.5 font-normal leading-relaxed">
              {t.bannerDesc}
            </p>
          </div>
          <a
            href="#contact"
            className="btn-embroidered-primary shrink-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-wider"
          >
            <span>{t.bannerBtn}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
