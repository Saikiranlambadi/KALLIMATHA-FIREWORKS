import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Award, Zap, Flame } from 'lucide-react';
import { WHATSAPP_DISPLAY, generateWhatsAppLink } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
  onIgniteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onIgniteClick }) => {
  const handleWhatsAppEnquiry = () => {
    const msg = `Hello Kallimatha Fireworks! 🎆\n\nI would like to enquire about your luxury fireworks collection and receive your complete festive catalogue & pricing.`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const handlePriceListRequest = () => {
    const msg = `Hello Kallimatha Fireworks! 🎆\n\nPlease share the official 2026 festive price list & special booking offers.`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cinematic Ambient Glow Lights (Hardware Accelerated without heavy blur) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top Regal Crest Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-black/60 backdrop-blur-md mb-6 shadow-gold-sm"
        >
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-200">
            Premium Festive Pyrotechnics & Celebrations
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          <span className="text-[11px] text-zinc-400 font-medium hidden sm:inline">
            Direct from Sivakasi
          </span>
        </motion.div>

        {/* Brand Name Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-4"
        >
          <span className="block text-white drop-shadow-lg">
            KALLIMATHA
          </span>
          <span className="block gold-text-gradient gold-text-glow font-display mt-1">
            FIREWORKS
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative inline-block mb-6"
        >
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-gold-200 font-light tracking-wide">
            "Light Up Your Celebrations!"
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3"></div>
        </motion.div>

        {/* Descriptive Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed mb-8"
        >
          Elevate every wedding, Diwali, temple festival, and royal milestone with India's finest sky bursts. Handcrafted with precision pyrotechnics, radiant colours, and certified green cracker safety standards.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={onExploreClick}
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-btn text-sm font-bold uppercase tracking-wider text-black shadow-gold-md hover:shadow-gold-lg flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleWhatsAppEnquiry}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/70 border border-gold-400/50 hover:border-gold-300 text-gold-300 hover:text-white backdrop-blur-md text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:bg-gold-500/10 cursor-pointer shadow-gold-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Order on WhatsApp</span>
          </button>

          <button
            onClick={onIgniteClick}
            type="button"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600/30 to-amber-600/30 border border-red-500/40 text-amber-200 hover:text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Ignite interactive fireworks now!"
          >
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Ignite Fireworks</span>
          </button>
        </motion.div>

        {/* Feature Badges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-gold-500/15"
        >
          <div className="p-3 rounded-xl bg-black/40 border border-gold-500/10 backdrop-blur-sm flex flex-col items-center text-center">
            <Award className="w-5 h-5 text-gold-400 mb-1" />
            <h4 className="text-xs font-bold text-white tracking-wide">100% Genuine Sivakasi</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5">Direct Pyrotechnic Heritage</p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-gold-500/10 backdrop-blur-sm flex flex-col items-center text-center">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
            <h4 className="text-xs font-bold text-white tracking-wide">Green Crackers Certified</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5">CSIR-NEERI & PESO Approved</p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-gold-500/10 backdrop-blur-sm flex flex-col items-center text-center">
            <Zap className="w-5 h-5 text-gold-300 mb-1" />
            <h4 className="text-xs font-bold text-white tracking-wide">Brilliant Color Fidelity</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5">Barium-Free Pure Sparks</p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-gold-500/10 backdrop-blur-sm flex flex-col items-center text-center">
            <MessageCircle className="w-5 h-5 text-amber-400 mb-1" />
            <h4 className="text-xs font-bold text-white tracking-wide">Instant WhatsApp Booking</h4>
            <p className="text-[11px] text-zinc-400 mt-0.5">Quick Quote: {WHATSAPP_DISPLAY}</p>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-500 text-[10px] tracking-widest uppercase pointer-events-none">
        <span>Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-gold-500/40 flex items-start justify-center p-1 mt-1">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

