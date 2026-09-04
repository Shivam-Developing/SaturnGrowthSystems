import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ShinyText from './ShinyText';
import { ArrowUpRight, Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contact: '',
    bizdesc: '',
    problem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setSubmitting(false);
        setSubmitted(true);
      });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4 mb-8 sm:mb-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-muted uppercase">
            {t.sec10Tag}
          </span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-saturn-green font-bold">
            {t.sec10Badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Strategic Pitch & Direct Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-extrabold uppercase tracking-tight text-white leading-tight">
                {t.sec10TitlePart1} <br />
                <ShinyText className="text-2xl sm:text-3xl lg:text-4xl block mt-0.5 lowercase font-serif italic font-normal">
                  {t.sec10TitlePart2}
                </ShinyText>
              </h2>
              <p className="text-xs sm:text-sm text-saturn-muted mt-3 leading-relaxed font-normal">
                {t.sec10Sub}
              </p>

              {/* Core Motto Box */}
              <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl glass-card">
                <span className="font-mono text-[10px] text-saturn-green font-bold block mb-1.5 tracking-[0.16em]">
                  SATURN GROWTH SYSTEMS
                </span>
                <p className="font-syne text-xs sm:text-sm font-bold text-saturn-cream leading-snug">
                  {t.mottoP1}<br />
                  {t.mottoP2}<br />
                  {t.mottoP3}
                </p>
              </div>
            </div>

            {/* Direct Studio Contact Coordinates */}
            <div className="space-y-2.5 pt-1">
              {/* Direct WhatsApp Primary */}
              <a
                href={t.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card flex items-center justify-between group hover:border-saturn-green/40 transition-all cursor-pointer block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-saturn-green/15 flex items-center justify-center text-saturn-green shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-[10px] text-saturn-muted uppercase tracking-[0.16em]">
                        WHATSAPP DIRECT // PRIMARY
                      </p>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-saturn-green text-black font-bold">
                        FAST REPLY
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-saturn-green transition-colors mt-0.5">
                      +91 79826 68530
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-saturn-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Alternate Direct Phone */}
              <div className="p-4 rounded-xl glass-card flex items-center justify-between group hover:border-white/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-saturn-muted uppercase tracking-[0.16em]">
                      HOTLINE // ALTERNATE
                    </p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a
                        href="tel:+918744003727"
                        className="text-xs sm:text-sm font-bold text-white hover:text-saturn-green transition-colors"
                      >
                        +91 87440 03727
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href={t.whatsappAlternateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-saturn-green hover:underline"
                >
                  WhatsApp →
                </a>
              </div>

              {/* Official Email */}
              <div className="p-4 rounded-xl glass-card flex items-center justify-between group hover:border-white/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-saturn-muted uppercase tracking-[0.16em]">
                      {t.inquiryDeskTitle}
                    </p>
                    <a
                      href="mailto:saturngrowthsystems@gmail.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-saturn-green transition-colors mt-0.5 block truncate"
                    >
                      saturngrowthsystems@gmail.com
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:saturngrowthsystems@gmail.com"
                  className="text-saturn-green p-1 group-hover:scale-125 transition-transform shrink-0"
                  aria-label="Email Saturn Growth Systems"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Free Audit Badge */}
              <div className="p-4 rounded-xl glass-card flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] text-saturn-muted uppercase tracking-[0.16em]">
                    {t.auditTitle}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    {t.auditDesc}
                  </p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-saturn-green/15 text-saturn-green font-mono text-[10px] border border-dashed border-saturn-green/40">
                  {t.auditBadge}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Netlify-Ready Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-8 rounded-2xl glass-card shadow-2xl relative">
              <form
                name="contact"
                method="POST"
                netlify="true"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* Hidden Netlify Form Identity Inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-saturn-muted mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.phName}
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-saturn-dim focus:outline-none focus:border-saturn-green focus:ring-1 focus:ring-saturn-green font-sans text-xs sm:text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-saturn-muted mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@apex.com"
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-saturn-dim focus:outline-none focus:border-saturn-green focus:ring-1 focus:ring-saturn-green font-sans text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-saturn-muted mb-1.5">
                      {t.lblComp}
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.phComp}
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-saturn-dim focus:outline-none focus:border-saturn-green focus:ring-1 focus:ring-saturn-green font-sans text-xs sm:text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-saturn-muted mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="+91 79826 68530"
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-saturn-dim focus:outline-none focus:border-saturn-green focus:ring-1 focus:ring-saturn-green font-sans text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-saturn-muted mb-1.5">
                    {t.lblBizdesc}
                  </label>
                  <input
                    type="text"
                    name="bizdesc"
                    required
                    value={formData.bizdesc}
                    onChange={handleChange}
                    placeholder={t.phBizdesc}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-saturn-dim focus:outline-none focus:border-saturn-green focus:ring-1 focus:ring-saturn-green font-sans text-xs sm:text-sm transition-all"
                  />
                </div>

                {/* Problem field: NOT mandatory (no required attribute) */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-saturn-muted mb-1.5">
                    {t.lblProblem}
                  </label>
                  <textarea
                    name="problem"
                    rows="3"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder={t.phProblem}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-saturn-dim focus:outline-none focus:border-saturn-green focus:ring-1 focus:ring-saturn-green font-sans text-xs sm:text-sm transition-all resize-none"
                  />
                </div>

                {!submitted ? (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-embroidered-primary w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {submitting ? "Analyzing Systems Blueprint..." : t.btnSend}
                    </span>
                  </button>
                ) : (
                  <div className="p-5 rounded-2xl bg-black/90 border border-dashed border-saturn-green text-center animate-in fade-in">
                    <span className="text-saturn-green font-mono text-xs uppercase tracking-widest block mb-1">
                      {t.formSuccessTitle}
                    </span>
                    <p className="text-xs text-white">
                      {t.formSuccessMsg}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
