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
    <header className="fixed top-0 inset-x-0 z-50 h-20 sm:h-22 bg-[#0a0a0c]/90 backdrop-blur-2xl border-b border-dashed border-white/10 transition-all">
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
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md font-mono text-xs">
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
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-saturn-cream hover:text-saturn-green transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Glass Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-[#0a0a0c]/98 backdrop-blur-2xl border-b border-dashed border-white/15 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-saturn-muted mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-saturn-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-embroidered-primary w-full py-3 px-6 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>{t.bookConsultation}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
