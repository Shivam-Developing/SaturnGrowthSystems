import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SaturnLogo from './SaturnLogo';

export default function Footer() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone1, setCopiedPhone1] = useState(false);
  const [copiedPhone2, setCopiedPhone2] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saturngrowthsystems@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone1 = () => {
    navigator.clipboard.writeText('+917982668530');
    setCopiedPhone1(true);
    setTimeout(() => setCopiedPhone1(false), 2000);
  };

  const handleCopyPhone2 = () => {
    navigator.clipboard.writeText('+918744003727');
    setCopiedPhone2(true);
    setTimeout(() => setCopiedPhone2(false), 2000);
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-dashed border-white/15 pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-saturn-green/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Top Tier: Brand Identity & Quick Navigation */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-dashed border-white/10">
          <div className="space-y-3 max-w-md">
            <a href="#" className="inline-block">
              <SaturnLogo />
            </a>
            <p className="font-mono text-xs sm:text-sm text-saturn-muted leading-relaxed">
              {t.footerMotto}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saturn-green/10 border border-saturn-green/30 font-mono text-[11px] text-saturn-green">
              <span className="w-2 h-2 rounded-full bg-saturn-green animate-pulse" />
              <span>COMMUNICATION DESK ACTIVE // OPEN FOR CLIENTS</span>
            </div>
          </div>

          {/* Nav Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs tracking-widest uppercase text-saturn-muted">
            <a href="#problem" className="hover:text-saturn-green transition-colors">{t.navProblem}</a>
            <a href="#disciplines" className="hover:text-saturn-green transition-colors">{t.navDisciplines}</a>
            <a href="#systems" className="hover:text-saturn-green transition-colors">{t.navSystems}</a>
            <a href="#verticals" className="hover:text-saturn-green transition-colors">{t.navVerticals}</a>
            <a href="#approach" className="hover:text-saturn-green transition-colors">{t.navApproach}</a>
            <a href="#outcomes" className="hover:text-saturn-green transition-colors">{t.navOutcomes}</a>
            <a href="#contact" className="hover:text-saturn-green transition-colors">{t.navContact}</a>
          </nav>
        </div>

        {/* Middle Tier: Dedicated High-Visibility Direct Contact Cards */}
        <div>
          <div className="mb-4">
            <p className="font-mono text-xs text-saturn-green tracking-[0.2em] uppercase font-bold">
              [ DIRECT COORDINATES // INSTANT CHANNELS ]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Official Email */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-dashed border-white/15 hover:border-saturn-green/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-saturn-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-saturn-green" />
                    OFFICIAL INBOX
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 hover:bg-saturn-green hover:text-black text-saturn-cream transition-all"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <a
                  href="mailto:saturngrowthsystems@gmail.com"
                  className="block font-mono text-sm sm:text-base font-bold text-white hover:text-saturn-green transition-colors break-all"
                >
                  saturngrowthsystems@gmail.com
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-saturn-dim">
                <span>Response time: &lt; 2 hrs</span>
                <a
                  href="mailto:saturngrowthsystems@gmail.com"
                  className="text-saturn-green inline-flex items-center gap-0.5 hover:underline"
                >
                  Write Email <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Primary WhatsApp & Mobile */}
            <div className="p-5 rounded-2xl bg-saturn-green/[0.04] border border-dashed border-saturn-green/40 hover:border-saturn-green transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-saturn-green/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-[#25D366] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping inline-block" />
                    PRIMARY WHATSAPP & CALL
                  </span>
                  <button
                    onClick={handleCopyPhone1}
                    className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#25D366]/20 hover:bg-[#25D366] hover:text-black text-[#25D366] transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedPhone1 ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone1 ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <a
                  href="tel:+917982668530"
                  className="block font-mono text-lg sm:text-xl font-extrabold text-white hover:text-[#25D366] transition-colors whitespace-nowrap tracking-wide"
                >
                  +91 79826 68530
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-saturn-green/20 flex items-center gap-2">
                <a
                  href={t.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-black font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(37,211,102,0.35)]"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+917982668530"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Card 3: Alternate Line */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-dashed border-white/15 hover:border-saturn-green/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-saturn-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-saturn-green" />
                    ALTERNATE HOTLINE
                  </span>
                  <button
                    onClick={handleCopyPhone2}
                    className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 hover:bg-saturn-green hover:text-black text-saturn-cream transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedPhone2 ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone2 ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <a
                  href="tel:+918744003727"
                  className="block font-mono text-lg sm:text-xl font-bold text-white hover:text-saturn-green transition-colors whitespace-nowrap tracking-wide"
                >
                  +91 87440 03727
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                <a
                  href="tel:+918744003727"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={t.whatsappAlternateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] text-saturn-muted font-mono text-xs transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Brand Anchor */}
        <div className="pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-saturn-muted text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span>© 2026 SATURN GROWTH SYSTEMS.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-saturn-dim">ALL RIGHTS RESERVED.</span>
          </div>
          <div className="text-saturn-green font-bold tracking-widest text-[11px]">
            {t.footerScale}
          </div>
        </div>
      </div>
    </footer>
  );
}
