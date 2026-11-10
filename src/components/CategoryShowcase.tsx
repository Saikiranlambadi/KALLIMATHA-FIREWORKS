import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, X, ShieldCheck } from 'lucide-react';
import { PRODUCTS, generateWhatsAppLink, generateProductEnquiryLink, WHATSAPP_DISPLAY } from '../data/products';
import { Product } from '../types';

export interface CategoryCardData {
  id: string;
  name: string;
  tagline: string;
  bgGradient: string;
  badge?: string;
  description: string;
  enquiryText: string;
}

export const CATEGORIES_DATA: CategoryCardData[] = [
  {
    id: 'sparklers',
    name: 'SPARKLERS',
    tagline: 'Imperial Handheld Gold & Colour Sparklers',
    bgGradient: 'from-[#220a54] via-[#1a0d38] to-[#0d011c]',
    badge: 'Popular',
    description: 'Electric sparklers, 50cm royal gold wands, and crackling silver sparklers.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your SPARKLERS collection. Please share the price list and available varieties.',
  },
  {
    id: 'flower-pot',
    name: 'FLOWER POT',
    tagline: 'Towering Golden Anar & Colour Fountains',
    bgGradient: 'from-[#b74d17] via-[#d1590d] to-[#3b1601]',
    badge: 'Bestseller',
    description: 'Jumbo golden fountains, multi-colour royal anars, and crackling silver rain pots.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your FLOWER POT (Anar) collection. Please share pricing and catalogue.',
  },
  {
    id: 'ground-chakkar',
    name: 'GROUND CHAKKAR',
    tagline: 'Spinning Wheels of Golden Fire',
    bgGradient: 'from-[#33255d] via-[#1b133d] to-[#090714]',
    badge: 'Classic',
    description: 'Chakravarthy giant wheels, whistling dynamo chakkars, and red-green dual rings.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your GROUND CHAKKAR (Zamin Chakkar) collection. Please share the price list.',
  },
  {
    id: 'kids-special',
    name: 'KIDS SPECIAL',
    tagline: 'Low-Noise, Ultra-Safe Family Delights',
    bgGradient: 'from-[#5a196e] via-[#3d0c5d] to-[#1d042e]',
    badge: 'Child Safe',
    description: 'Cold-spark wands, magic pencils, peacock fountains, and gentle celebratory wonders.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your KIDS SPECIAL safe fireworks collection. Please share the details.',
  },
  {
    id: 'kids-gun',
    name: 'KIDS GUN',
    tagline: 'Celebration Toy Cap Guns & Rolls',
    bgGradient: 'from-[#e5aa20] via-[#d48c12] to-[#4d2204]',
    badge: 'Trending',
    description: 'Metal die-cast cap pistols, golden revolvers, and high-quality festive roll caps.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about KIDS GUNS and Roll Caps. Please share available models and prices.',
  },
  {
    id: 'rocket',
    name: 'ROCKET',
    tagline: 'High-Altitude Ascending Sky Salutes',
    bgGradient: 'from-[#3f0b48] via-[#2c0d3c] to-[#140818]',
    badge: 'High Altitude',
    description: 'Royal golden comets, 7-colour sky jets, whistling peacocks, and tricolour rockets.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your ROCKET collection. Please share the price list and varieties.',
  },
  {
    id: 'multiple-sky-shots',
    name: 'MULTIPLE SKY SHOTS',
    tagline: 'Grand Synchronized Aerial Repeating Cakes',
    bgGradient: 'from-[#2a150d] via-[#45210b] to-[#120b04]',
    badge: 'Grand Finale',
    description: '240-shot grand emperor show, 120-shot night symphony, and rapid fan cakes.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about MULTIPLE SKY SHOTS (Repeaters & Aerial Cakes). Please share the catalogue and prices.',
  },
  {
    id: 'sky-shots',
    name: 'SKY SHOTS',
    tagline: 'Titanium Single Shells & Brocade Bursts',
    bgGradient: 'from-[#471b0d] via-[#331104] to-[#0f0906]',
    badge: 'Aesthetic',
    description: 'Golden palm brocades, weeping willows, titanium salutes, and pastel sky pearls.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your SKY SHOTS collection. Please share the price list.',
  },
  {
    id: 'crackers-bom',
    name: 'CRACKERS BOM',
    tagline: 'Traditional Festive Sound Salutes',
    bgGradient: 'from-[#d95d1a] via-[#b93f0d] to-[#420a0c]',
    badge: 'Loud Salute',
    description: 'Hydro bombs, deluxe green sound cylinders, king cobra bombs, and festive salutes.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your CRACKERS BOM / Sound Crackers collection. Please share the price list.',
  },
  {
    id: 'lar',
    name: 'LAR',
    tagline: 'Traditional Red Garland String Crackers',
    bgGradient: 'from-[#1d245f] via-[#131d57] to-[#090d1d]',
    badge: 'Festive Classic',
    description: '1000-wala, 2000-wala, and 5000-wala traditional red string garland crackers.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your LAR (Garland / Wala Crackers) collection. Please share pricing and availability.',
  },
];

const CATEGORY_IMAGES: Record<string, string> = {
  sparklers: '/images/sparklers.png',
  'flower-pot': '/images/flower-pot.png',
  'ground-chakkar': '/images/ground-chakkar.png',
  'kids-special': '/images/kids-special.png',
  'kids-gun': '/images/kids-gun.png',
  rocket: '/images/rocket.png',
  'multiple-sky-shots': '/images/multiple-sky-shots.png',
  'sky-shots': '/images/sky-shots.png',
  'crackers-bom': '/images/crackers-bom.png',
  lar: '/images/lar.png',
};

function renderCategoryArtwork(categoryId: string) {
  const imageSrc = CATEGORY_IMAGES[categoryId] || '/images/sparklers.png';

  return (
    <div className="relative w-[75%] max-w-[250px] aspect-square rounded-full overflow-hidden border border-gold-400/30 bg-black/20 shadow-[0_0_30px_rgba(250,204,21,0.18)]">
      <img
        src={imageSrc}
        alt={categoryId}
        className="h-full w-full object-cover scale-110 opacity-90"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/images/sparklers.png';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/55" />
    </div>
  );
}

export const CategoryShowcase: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<CategoryCardData | null>(null);

  const handleDirectWhatsApp = (cat: CategoryCardData) => {
    window.open(generateWhatsAppLink(cat.enquiryText), '_blank');
  };

  const productsToShow = openCategory
    ? PRODUCTS.filter((p) => p.category === openCategory.id)
    : [];

  return (
    <section id="categories" className="relative bg-[#020305] py-8 px-4 sm:px-6 lg:px-8 z-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setOpenCategory(cat)}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-[#d4a937]/35 bg-gradient-to-br ${cat.bgGradient} shadow-[0_0_26px_rgba(212,175,55,0.12)] transition-all duration-300 hover:scale-[1.01] cursor-pointer min-h-[280px] sm:min-h-[330px]`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />

              <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-[#d4a937]/30 bg-black/70 px-3 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] text-[#f3d47b] shadow-lg shadow-black/30">
                    {cat.badge || cat.name}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDirectWhatsApp(cat);
                    }}
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a937]/30 bg-[#111111]/80 text-[#f3d47b] shadow-lg shadow-black/30 transition hover:bg-[#1b1b1b]"
                    aria-label={`Enquire about ${cat.name}`}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-1 items-center justify-center py-5">
                  {renderCategoryArtwork(cat.id)}
                </div>

                <div className="flex items-end justify-between gap-3 pb-1">
                  <h3 className="max-w-[14ch] text-[1.1rem] sm:text-[1.5rem] font-black uppercase leading-[0.95] tracking-tight text-white">
                    {cat.name}
                  </h3>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a937]/30 bg-black/60 text-[#f3d47b] shadow-lg shadow-black/30">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpenCategory(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-[1.75rem] border border-gold-500/40 bg-[#0b0d14] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between border-b border-gold-500/30 bg-gradient-to-r ${openCategory.bgGradient} px-5 py-4 sm:px-7`}>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-gold-300">
                  {openCategory.badge || 'Collection'}
                </div>
                <h3 className="font-serif text-2xl font-black text-white sm:text-3xl">
                  {openCategory.name}
                </h3>
              </div>

              <button
                onClick={() => setOpenCategory(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 bg-black/60 text-gold-300 transition hover:text-white"
                aria-label="Close products"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto bg-[#07080c] p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {productsToShow.map((product: Product) => (
                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-b from-[#141624] via-[#0e1019] to-[#07080c]"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-black/60">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1019] via-transparent to-black/20" />

                      {product.badge && (
                        <div className="absolute left-2.5 top-2.5">
                          <span className="rounded-full bg-gradient-to-r from-gold-400 to-amber-600 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-black">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h4 className="min-h-[2.8rem] font-serif text-sm font-bold text-white sm:text-base">
                        {product.name}
                      </h4>

                      <div className="my-3 flex items-baseline gap-2">
                        <span className="font-serif text-xl font-black text-gold-300">₹{product.price}</span>
                        {product.mrp && product.mrp > product.price && (
                          <span className="text-xs text-zinc-500 line-through">₹{product.mrp}</span>
                        )}
                      </div>

                      <button
                        onClick={() => window.open(generateProductEnquiryLink(product), '_blank')}
                        type="button"
                        className="w-full rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black transition hover:brightness-110"
                      >
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-gold-500/20 bg-[#090b10] px-5 py-4 text-xs text-zinc-400 sm:flex-row">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>100% Genuine Sivakasi Certified Green Crackers • Zero Barium</span>
              </div>

              <a
                href={`https://wa.me/918465014657`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gold-300"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
