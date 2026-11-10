import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowUpRight, X, ShieldCheck } from 'lucide-react';
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
    bgGradient: 'from-[#3b1259] via-[#240a3e] to-[#120422]',
    badge: 'Popular',
    description: 'Electric sparklers, 50cm royal gold wands, and crackling silver sparklers.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your SPARKLERS collection. Please share the price list and available varieties.',
  },
  {
    id: 'flower-pot',
    name: 'FLOWER POT',
    tagline: 'Towering Golden Anar & Colour Fountains',
    bgGradient: 'from-[#9a3412] via-[#ea580c] to-[#451a03]',
    badge: 'Bestseller',
    description: 'Jumbo golden fountains, multi-colour royal anars, and crackling silver rain pots.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your FLOWER POT (Anar) collection. Please share pricing and catalogue.',
  },
  {
    id: 'ground-chakkar',
    name: 'GROUND CHAKKAR',
    tagline: 'Spinning Wheels of Golden Fire',
    bgGradient: 'from-[#580b2b] via-[#3b071d] to-[#1a020d]',
    badge: 'Classic',
    description: 'Chakravarthy giant wheels, whistling dynamo chakkars, and red-green dual rings.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your GROUND CHAKKAR (Zamin Chakkar) collection. Please share the price list.',
  },
  {
    id: 'kids-special',
    name: 'KIDS SPECIAL',
    tagline: 'Low-Noise, Ultra-Safe Family Delights',
    bgGradient: 'from-[#4c1d95] via-[#3b0764] to-[#1e0538]',
    badge: 'Child Safe',
    description: 'Cold-spark wands, magic pencils, peacock fountains, and gentle celebratory wonders.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your KIDS SPECIAL safe fireworks collection. Please share the details.',
  },
  {
    id: 'kids-gun',
    name: 'KIDS GUN',
    tagline: 'Celebration Toy Cap Guns & Rolls',
    bgGradient: 'from-[#ca8a04] via-[#eab308] to-[#713f12]',
    badge: 'Trending',
    description: 'Metal die-cast cap pistols, golden revolvers, and high-quality festive roll caps.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about KIDS GUNS and Roll Caps. Please share available models and prices.',
  },
  {
    id: 'rocket',
    name: 'ROCKET',
    tagline: 'High-Altitude Ascending Sky Salutes',
    bgGradient: 'from-[#3b1259] via-[#240a3e] to-[#120422]',
    badge: 'High Altitude',
    description: 'Royal golden comets, 7-colour sky jets, whistling peacocks, and tricolour rockets.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your ROCKET collection. Please share the price list and varieties.',
  },
  {
    id: 'multiple-sky-shots',
    name: 'MULTIPLE SKY SHOTS',
    tagline: 'Grand Synchronized Aerial Repeating Cakes',
    bgGradient: 'from-[#1c1917] via-[#09090b] to-[#000000]',
    badge: 'Grand Finale',
    description: '240-shot grand emperor show, 120-shot night symphony, and rapid fan cakes.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about MULTIPLE SKY SHOTS (Repeaters & Aerial Cakes). Please share the catalogue and prices.',
  },
  {
    id: 'sky-shots',
    name: 'SKY SHOTS',
    tagline: 'Titanium Single Shells & Brocade Bursts',
    bgGradient: 'from-[#292524] via-[#1c1917] to-[#0c0a09]',
    badge: 'Aesthetic',
    description: 'Golden palm brocades, weeping willows, titanium salutes, and pastel sky pearls.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your SKY SHOTS collection. Please share the price list.',
  },
  {
    id: 'crackers-bom',
    name: 'CRACKERS BOM',
    tagline: 'Traditional Festive Sound Salutes',
    bgGradient: 'from-[#991b1b] via-[#c2410c] to-[#450a0a]',
    badge: 'Loud Salute',
    description: 'Hydro bombs, deluxe green sound cylinders, king cobra bombs, and festive salutes.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your CRACKERS BOM / Sound Crackers collection. Please share the price list.',
  },
  {
    id: 'lar',
    name: 'LAR',
    tagline: 'Traditional Red Garland String Crackers',
    bgGradient: 'from-[#1e1b4b] via-[#0f172a] to-[#030712]',
    badge: 'Festive Classic',
    description: '1000-wala, 2000-wala, and 5000-wala traditional red string garland crackers.',
    enquiryText: 'Hello Kallimatha Fireworks! 🎆 I would like to enquire about your LAR (Garland / Wala Crackers) collection. Please share pricing and availability.',
  },
];

export const CategoryShowcase: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<CategoryCardData | null>(null);

  const handleCardClick = (cat: CategoryCardData) => {
    // Instantly opens the category products window
    setOpenCategory(cat);
  };

  const handleDirectWhatsApp = (cat: CategoryCardData, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateWhatsAppLink(cat.enquiryText), '_blank');
  };

  // Products belonging to the currently open category
  const productsToShow = openCategory
    ? PRODUCTS.filter((p) => p.category === openCategory.id)
    : [];

  return (
    <section id="categories" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-black/50 mb-3 shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
              Celebration Categories
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Explore by <span className="gold-text-gradient font-display">Fireworks Category</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Click on any category card below to open and view all products with instant WhatsApp ordering.
          </p>
        </div>

        {/* 10 Category Cards Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat)}
              className={`group relative rounded-3xl overflow-hidden border border-gold-500/20 hover:border-gold-400/80 transition-all duration-300 cursor-pointer bg-gradient-to-br ${cat.bgGradient} flex flex-col justify-between aspect-[4/4.2] sm:aspect-[4/4.1] shadow-2xl hover:scale-[1.02] hover:shadow-gold-md`}
            >
              {/* Top Bar with Badge */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <div>
                  {cat.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md border border-gold-500/30 text-gold-300">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => handleDirectWhatsApp(cat, e)}
                  className="p-2 rounded-full bg-black/60 border border-gold-500/30 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                </button>
              </div>

              {/* Center Vector/Visual Illustration Area */}
              <div className="relative flex-1 flex items-center justify-center p-4">
                {renderCategoryArtwork(cat.id)}
              </div>

              {/* Bottom Label Area */}
              <div className="relative z-10 p-5 pt-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-black text-white tracking-wider uppercase group-hover:text-gold-200 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-zinc-300 line-clamp-1 mt-0.5">
                    {cat.tagline}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:bg-gold-400 group-hover:text-black transition-all flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP WINDOW: Opens immediately when any category card is clicked */}
      {openCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setOpenCategory(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] rounded-3xl bg-[#0b0d14] border-2 border-gold-400/60 shadow-2xl flex flex-col overflow-hidden animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-5 sm:p-7 bg-gradient-to-r ${openCategory.bgGradient} border-b border-gold-500/30 flex items-center justify-between flex-shrink-0`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-black/50 border border-gold-400/40 p-1 flex items-center justify-center flex-shrink-0">
                  {renderCategoryArtwork(openCategory.id)}
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-[11px] text-gold-300 font-bold uppercase tracking-widest mb-0.5">
                    <span>{openCategory.badge || 'Kallimatha Collection'}</span>
                    <span>•</span>
                    <span className="text-white">{productsToShow.length} Products Available</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-white">
                    {openCategory.name}
                  </h3>
                  <p className="text-xs text-zinc-300 hidden sm:block">
                    {openCategory.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => window.open(generateWhatsAppLink(openCategory.enquiryText), '_blank')}
                  className="hidden md:inline-flex px-4 py-2 rounded-full gold-btn text-xs font-bold uppercase tracking-wider text-black items-center space-x-1.5 shadow-gold-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Enquire All on WhatsApp</span>
                </button>

                <button
                  onClick={() => setOpenCategory(null)}
                  className="p-2.5 rounded-full bg-black/70 border border-gold-500/40 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body: Products Grid */}
            <div className="p-5 sm:p-8 overflow-y-auto flex-1 bg-[#07080c]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {productsToShow.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => window.open(generateProductEnquiryLink(product), '_blank')}
                    className="group rounded-2xl bg-gradient-to-b from-[#141624] via-[#0e1019] to-[#07080c] border border-gold-500/25 hover:border-gold-400/80 transition-all duration-300 hover:shadow-gold-md flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {/* Product Image */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black/60">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1019] via-transparent to-black/30" />

                      {product.badge && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-gold-400 to-amber-600 text-black shadow">
                            {product.badge}
                          </span>
                        </div>
                      )}

                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/80 backdrop-blur-md border border-gold-500/30 text-gold-300">
                          {product.piecesPerBox}
                        </span>
                      </div>
                    </div>

                    {/* Product Info - Firework Name and Price Only */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-gold-200 transition-colors line-clamp-2 min-h-[2.5rem]">
                          {product.name}
                        </h4>

                        {/* Price */}
                        <div className="flex items-baseline space-x-2 my-3">
                          <span className="font-serif text-xl sm:text-2xl font-black text-gold-300">
                            ₹{product.price}
                          </span>
                          {product.mrp && product.mrp > product.price && (
                            <span className="text-xs text-zinc-500 line-through font-medium">
                              ₹{product.mrp}
                            </span>
                          )}
                          {product.mrp && product.mrp > product.price && (
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded ml-auto">
                              {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                            </span>
                          )}
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(generateProductEnquiryLink(product), '_blank');
                        }}
                        type="button"
                        className="w-full py-2.5 rounded-xl gold-btn text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-1.5 shadow-gold-sm hover:shadow-gold-md cursor-pointer transition-transform hover:scale-[1.02]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-black" />
                        <span>Order on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#090b10] border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine Sivakasi Certified Green Crackers • Zero Barium</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-[11px] text-zinc-400 hidden sm:inline">WhatsApp Order Hotline:</span>
                <a
                  href={`https://wa.me/918465014657`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gold-300 hover:text-white"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CATEGORY_IMAGES: Record<string, string> = {
  sparklers: '/images/sparklers.jpg',
  'flower-pot': '/images/flower-pot.jpg',
  'ground-chakkar': '/images/ground-chakkar.jpg',
  'kids-special': '/images/kids-special.jpg',
  'kids-gun': '/images/kids-gun.jpg',
  rocket: '/images/rocket.jpg',
  'multiple-sky-shots': '/images/multiple-sky-shots.jpg',
  'sky-shots': '/images/sky-shots.jpg',
  'crackers-bom': '/images/crackers-bom.jpg',
  lar: '/images/lar.jpg',
};

function renderCategoryArtwork(categoryId: string) {
  const imageSrc = CATEGORY_IMAGES[categoryId];

  if (!imageSrc) {
    return null;
  }

  return (
    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-gold-400/30 bg-black/20 shadow-[0_0_30px_rgba(250,204,21,0.18)]">
      <img
        src={imageSrc}
        alt={categoryId}
        className="h-full w-full object-cover scale-110 opacity-85"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/images/sparklers.jpg';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
    </div>
  );
}
