import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, HeartHandshake, Flame, CheckCircle2, Factory } from 'lucide-react';
import { WHATSAPP_DISPLAY, generateWhatsAppLink } from '../data/products';

export const AboutSection: React.FC = () => {
  const handleTalkToUs = () => {
    const msg = `Hello Kallimatha Fireworks! 🎆\n\nI would like to know more about your company, bulk distribution, and festive partnerships.`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: 'Sivakasi Heritage',
      description: 'Generations of master pyrotechnic knowledge blending ancient fireworks alchemy with modern precision formulation.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Green Cracker Certified',
      description: 'Formulated in compliance with CSIR-NEERI and PESO guidelines to ensure 30-35% lower emissions and barium-free color stars.',
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-400" />,
      title: 'Vibrant Chromatic Purity',
      description: 'Pure metallic salts yield vivid chromatic saturation—deep rubies, emerald greens, and shimmering 24K gold brocades.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold-300" />,
      title: 'Customer Centric Trust',
      description: 'Transparent guidance, safe packaging, direct WhatsApp support (+91 8465014657), and nationwide festive fulfillment.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-gradient-to-b from-transparent via-[#08090d]/80 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-black/50 mb-4 shadow-gold-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
                About Kallimatha Fireworks
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Igniting the Night with <br />
              <span className="gold-text-gradient font-display">Royal Splendour</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
              At <strong className="text-gold-200">Kallimatha Fireworks</strong>, we believe every celebration deserves an unforgettable spectacle. From grand Indian weddings and auspicious Diwali nights to temple jubilees and New Year triumphs, our fireworks represent the pinnacle of pyrotechnic craftsmanship.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Rooted in the timeless pyrotechnic heartland of Sivakasi, we combine age-old recipes of color harmony with the latest safety science. Our formulations eliminate hazardous barium salts, ensuring reduced particulate emissions while amplifying color brilliance and burn longevity.
            </p>

            {/* Quality Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Strict PESO & CSIR-NEERI Green Cracker Compliant',
                'Zero Hazardous Barium & Lead Formulations',
                'Extended Safety Standoff Visco Fuses',
                'Moisture-Sealed High Caliber Packaging',
                'Rigorous Batch Altitude & Timing Testing',
                'Direct Wholesale & Retail WhatsApp Assistance',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gold-500/20 mb-8">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-black/40 border border-gold-500/15 hover:border-gold-500/40 transition-colors"
                >
                  <div className="mb-2">{pillar.icon}</div>
                  <h4 className="text-sm font-bold text-white mb-1 tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleTalkToUs}
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-full gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-sm hover:shadow-gold-md cursor-pointer"
              >
                <span>Connect with Our Specialists</span>
                <span className="text-black font-extrabold">›</span>
              </button>

              <span className="text-xs text-zinc-400">
                Direct hotline & orders: <strong className="text-gold-300">{WHATSAPP_DISPLAY}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

