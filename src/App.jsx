import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import GlowCursor from './components/GlowCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import DiagnosticSection from './components/DiagnosticSection';
import SystemsSection from './components/SystemsSection';
import DisciplinesSection from './components/DisciplinesSection';
import VerticalsSection from './components/VerticalsSection';
import ApproachSection from './components/ApproachSection';
import WhySaturnSection from './components/WhySaturnSection';
import OutcomesSection from './components/OutcomesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const marqueeItems1 = [
  "GROWTH ARCHITECTURE",
  "DIGITAL PRESENCE",
  "BUSINESS AUTOMATION",
  "AI SYSTEMS",
  "PIPELINE VELOCITY",
  "CUSTOM SOFTWARE",
];

const marqueeItems2 = [
  "CLARITY OVER NOISE",
  "SYSTEMS OVER TRENDS",
  "OUTCOMES OVER BUZZWORDS",
  "CRAFT THAT LASTS",
  "SATURN GROWTH SYSTEMS",
];

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-saturn-bg text-saturn-cream font-sans relative overflow-x-hidden selection:bg-saturn-green selection:text-black">
        {/* React Bits Glow Cursor */}
        <GlowCursor />

        {/* Fixed Navbar with Glassmorphism and Mobile Drawer */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="w-full overflow-x-hidden">
          <HeroSection />
          <MarqueeStrip items={marqueeItems1} />
          <DiagnosticSection />
          <SystemsSection />
          <DisciplinesSection />
          <VerticalsSection />
          <ApproachSection />
          <WhySaturnSection />
          <OutcomesSection />
          <MarqueeStrip items={marqueeItems2} slow />
          <ContactSection />
        </main>

        {/* Studio Footer */}
        <Footer />

        {/* High-visibility Floating WhatsApp Quick Connect */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
