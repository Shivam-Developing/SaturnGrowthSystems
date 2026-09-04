import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ModernHeroBackground from './ModernHeroBackground';
import ShinyText from './ShinyText';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  // Parallax scroll effect for telemetry console
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const consoleY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const consoleScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 border-b border-white/10 overflow-hidden"
    >
      {/* Modern Dynamic Cybernetic Matrix & Ambient Light Background */}
      <ModernHeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Centered Grand Hero Headline: Syne Display + Instrument Serif Accent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h1 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.04] tracking-[-0.03em] uppercase text-white">
              <span className="block">{t.heroH1Part1}</span>
              <span className="block mt-2 sm:mt-3">
                <ShinyText className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.2] lowercase">
                  {t.heroH1Part2}
                </ShinyText>
              </span>
            </h1>
          </motion.div>

          {/* Centered Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 max-w-2xl mx-auto"
          >
            <p className="font-sans text-sm sm:text-base md:text-lg text-saturn-cream/80 font-normal leading-relaxed">
              {t.heroSub}
            </p>

            {/* Centered Dual Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <a
                href="#contact"
                className="btn-embroidered-primary inline-flex items-center gap-2.5 px-7 sm:px-9 py-4 rounded-full text-xs uppercase tracking-wider glow-green"
              >
                <span>{t.heroCtaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-embroidered-glass inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full text-xs uppercase tracking-wider"
              >
                <span>{t.heroCtaSecondary}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Expansive Showcase Image in Glass Container with Parallax Scroll Depth */}
        <motion.div
          style={{ y: consoleY, scale: consoleScale }}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 rounded-2xl overflow-hidden glass-card p-1.5 shadow-2xl group max-w-6xl mx-auto"
        >
          <div className="relative aspect-[16/10] sm:aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/saturn_telemetry_hero.jpg"
              alt="Saturn Growth Systems Telemetry Console"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-dashed border-white/20">
                <span className="w-2 h-2 rounded-full bg-saturn-green animate-ping" />
                <span className="text-saturn-cream uppercase tracking-wider text-[10px] sm:text-xs">
                  {t.heroConsoleBadge}
                </span>
              </div>
              <span className="text-saturn-muted hidden sm:inline-block tracking-widest uppercase text-[10px] sm:text-xs">
                {t.heroConsoleDiscipline}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
