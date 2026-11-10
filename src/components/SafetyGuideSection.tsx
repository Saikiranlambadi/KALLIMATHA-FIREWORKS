import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Droplets, Eye, HelpCircle } from 'lucide-react';

export const SafetyGuideSection: React.FC = () => {
  const dos = [
    'Always ignite fireworks under attentive adult supervision.',
    'Keep a bucket of clean water or sand ready near the launch zone.',
    'Light fireworks at arm’s length using an incense stick (agarbatti) or safety sparkler.',
    'Always launch in an open outdoor area free from overhead electric wires, trees, or dry foliage.',
    'Wear well-fitted cotton clothing and protective footwear while bursting crackers.',
    'Maintain the recommended standoff safety perimeter printed on every box.',
  ];

  const donts = [
    'Never relight or bend over a firework that did not ignite or went out.',
    'Never carry loose fireworks in your pockets or store near heat sources.',
    'Do not ignite fireworks inside glass bottles, tin cans, or enclosed metallic vessels.',
    'Never aim rockets or handheld repeaters towards people, balconies, or animals.',
    'Avoid wearing loose synthetic, silk, or flowing flammable fabrics.',
    'Do not let children under 10 handle high-altitude aerial shots or fast spinners unassisted.',
  ];

  return (
    <section id="safety" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-black/50 mb-3 shadow-gold-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
              Safety & Certification
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Safe Celebrations, <span className="gold-text-gradient font-display">Endless Joy</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            At Kallimatha Fireworks, safety is paramount. Follow these master safety guidelines to ensure every festival remains a source of pure happiness for your family and community.
          </p>
        </div>

        {/* Dos and Don'ts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* DOs Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0f16] border border-emerald-500/30 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Celebration DOs
                </h3>
                <p className="text-xs text-emerald-400 font-medium">Recommended Pyrotechnic Best Practices</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {dos.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DONTs Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#140c0f] border border-red-500/30 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Celebration DON'Ts
                </h3>
                <p className="text-xs text-red-400 font-medium">Critical Safety Precautions</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {donts.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Green Cracker Transparency Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0c0d12] via-[#151722] to-[#0c0d12] border border-gold-500/30 shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-1">
                CSIR-NEERI QR Code Green Verification
              </h4>
              <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
                Every genuine Kallimatha Fireworks box features the authentic CSIR-NEERI Green Cracker QR logo. Scan with your smartphone to verify chemical compliance, zero barium certification, and reduced PM2.5/PM10 emission test reports.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 text-center">
            <div className="px-4 py-2 rounded-xl bg-black/60 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider">
              100% Genuine & Licensed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

