import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SaturnLogo from './SaturnLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = (target) => {
    setLang(target);
  };

  const navLinks = [
    { href: "#problem", label: t.navProblem },
    { href: "#disciplines", label: t.navDisciplines },
    { href: "#systems", label: t.navSystems },
    { href: "#verticals", label: t.navVerticals },
    { href: "#approach", label: t.navApproach },
    { href: "#outcomes", label: t.navOutcomes },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 sm:h-22 bg-[#060608] sm:bg-[#060608]/95 backdrop-blur-2xl border-b border-dashed border-white/15 transition-all shadow-xl">
      <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Bespoke Saturn Logo & Brand */}
        <div className="flex items-center">
          <a href="#" className="group flex items-center pr-2" aria-label="Saturn Growth Systems Home">
            <SaturnLogo />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11.5px] font-mono tracking-[0.16em] uppercase text-saturn-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-saturn-green transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher & Consultation CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center p-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md font-mono text-xs">
            <button
              onClick={() => toggleLang('en')}
              className={`px-3 py-1 rounded-full font-bold transition-all text-[11px] sm:text-xs ${
                lang === 'en'
                  ? 'bg-saturn-green text-black shadow-sm'
                  : 'text-saturn-muted hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLang('hi')}
              className={`px-3 py-1 rounded-full font-bold transition-all text-[11px] sm:text-xs ${
                lang === 'hi'
                  ? 'bg-saturn-green text-black shadow-sm'
                  : 'text-saturn-muted hover:text-white'
              }`}
            >
              हिंग्लिश
            </button>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex btn-embroidered-primary items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs uppercase tracking-wider"
          >
            <span>{t.bookConsultation}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white hover:text-saturn-green hover:border-saturn-green/40 transition-all focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-saturn-green" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dimmed backdrop overlay when drawer is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 sm:top-22 bg-black/85 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Down Drawer with Opaque Background & Option Cards */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 sm:top-22 bg-[#08080b] border-b border-dashed border-saturn-green/30 px-5 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider mb-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-saturn-green/10 hover:border-saturn-green/50 text-saturn-cream hover:text-saturn-green transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-saturn-green font-bold opacity-75">
                    0{idx + 1}
                  </span>
                  <span className="font-semibold text-white group-hover:text-saturn-green">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-saturn-muted group-hover:text-saturn-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </nav>

          {/* Consultation Button & Direct WhatsApp in Mobile Drawer */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-embroidered-primary w-full py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{t.bookConsultation}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={t.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>WhatsApp: +91 79826 68530</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
