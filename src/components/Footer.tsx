import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_BASE_URL, generateWhatsAppLink } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Safety & Quality', href: '#safety' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-gold-500/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* Decorative Gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#050608] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold-300" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-black tracking-widest gold-text-gradient uppercase">
                  Kallimatha
                </span>
                <span className="text-[10px] font-bold tracking-[0.28em] text-gold-300 uppercase block">
                  Fireworks
                </span>
              </div>
            </div>

            <p className="font-serif italic text-gold-300/90 text-sm">
              "Light Up Your Celebrations!"
            </p>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              India's premier luxury fireworks brand. Crafted in Sivakasi with certified green pyrotechnic formulation, dazzling colours, and unmatched celebration splendour.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/60 border border-gold-500/40 text-gold-300 hover:text-white text-xs font-semibold hover:border-gold-400 transition-colors shadow-gold-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Hotline: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-gold-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fireworks Categories */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-300">
              Fireworks Categories
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
              <a href="#products" className="hover:text-gold-300">🚀 Aerial Rockets</a>
              <a href="#products" className="hover:text-gold-300">✨ Royal Sparklers</a>
              <a href="#products" className="hover:text-gold-300">🌋 Flower Pots</a>
              <a href="#products" className="hover:text-gold-300">🌀 Ground Chakkars</a>
              <a href="#products" className="hover:text-gold-300">🎆 Grand Sky Shots</a>
              <a href="#products" className="hover:text-gold-300">🎁 Festive Gift Boxes</a>
            </div>

            <div className="pt-4 flex items-center space-x-2 text-[11px] text-zinc-400 bg-black/40 p-3 rounded-xl border border-gold-500/10">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Compliant with CSIR-NEERI Green Crackers & PESO Statutory Guidelines.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">KALLIMATHA FIREWORKS</strong>. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-[11px]">
              Direct WhatsApp Ordering • {WHATSAPP_DISPLAY}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-black/60 border border-gold-500/30 text-gold-300 hover:text-white transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

