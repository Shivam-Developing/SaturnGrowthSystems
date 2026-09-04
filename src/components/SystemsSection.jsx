import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';
import { ArrowUpRight } from 'lucide-react';

export default function SystemsSection() {
  const { t } = useLanguage();

  const systems = [
    {
      span: "lg:col-span-7",
      img: "/images/saturn_enterprise_telemetry.jpg",
      alt: "Enterprise Revenue Telemetry",
      tag: t.sys1Tag,
      title: t.sys1Title,
      desc: t.sys1Desc,
    },
    {
      span: "lg:col-span-5",
      img: "/images/saturn_server_backbone.jpg",
      alt: "Saturn Core Node Proprietary Business Backbone",
      tag: t.sys2Tag,
      title: t.sys2Title,
      desc: t.sys2Desc,
    },
    {
      span: "lg:col-span-5",
      img: "/images/saturn_lead_console.jpg",
      alt: "Autonomous Lead Routing Console",
      tag: t.sys3Tag,
      title: t.sys3Title,
      desc: t.sys3Desc,
    },
    {
      span: "lg:col-span-7",
      img: "/images/saturn_decision_engine.jpg",
      alt: "Executive Growth Architecture & Decision Engine",
      tag: t.sys4Tag,
      title: t.sys4Title,
      desc: t.sys4Desc,
    },
  ];

  return (
    <section id="systems" className="py-12 sm:py-16 lg:py-20 bg-[#090a0d] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3 border-b border-dashed border-white/15 pb-4">
          <div>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
              {t.sec3Tag}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              {t.sec3TitlePart1}{' '}
              <ShinyText className="text-2xl sm:text-3xl lg:text-4xl lowercase">
                {t.sec3TitlePart2}
              </ShinyText>
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-saturn-muted tracking-[0.2em] uppercase">
            {t.sec3Archive}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {systems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.span} group cursor-pointer`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl glass-card p-1.5 shadow-xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-dashed border-white/20 font-mono text-[10px] tracking-wider text-saturn-cream uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-syne font-bold uppercase tracking-tight text-white group-hover:text-saturn-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-saturn-muted mt-1 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-saturn-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-3 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
