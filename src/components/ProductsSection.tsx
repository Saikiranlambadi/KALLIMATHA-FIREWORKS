import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, MessageCircle, FileDown, Filter, Layers, Flame } from 'lucide-react';
import { PRODUCTS, WHATSAPP_DISPLAY, generateWhatsAppLink } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductsSectionProps {
  cart: { product: Product; quantity: number }[];
  onToggleCart: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ cart, onToggleCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Products', icon: '✨' },
    { id: 'rockets', label: 'Rockets', icon: '🚀' },
    { id: 'sparklers', label: 'Sparklers', icon: '✨' },
    { id: 'flower-pots', label: 'Flower Pots', icon: '🌋' },
    { id: 'chakkars', label: 'Chakkars', icon: '🌀' },
    { id: 'sky-shots', label: 'Sky Shots', icon: '🎆' },
    { id: 'gift-boxes', label: 'Gift Boxes', icon: '🎁' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleRequestCatalogue = () => {
    const msg = `Hello Kallimatha Fireworks! 🎆\n\nPlease share the official 2026 Festive Fireworks Catalogue & wholesale/retail Price List.`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const isProductInCart = (productId: string) => {
    return cart.some((item) => item.product.id === productId);
  };

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-black/50 mb-3 shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
              The Sovereign Collection
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Curated Festive <span className="gold-text-gradient font-display">Pyrotechnics</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            From awe-inspiring multi-shot repeating cakes and high-altitude rockets to gentle handheld sparklers and family gift boxes. All products crafted with CSIR-NEERI green cracker formulation.
          </p>
        </div>

        {/* WhatsApp Catalogue Banner */}
        <div className="relative mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#17140f] via-[#241c0e] to-[#12131a] border border-gold-500/40 shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-gold-400 text-black">
                Official Price List
              </span>
              <span className="text-xs text-gold-300 font-medium">Diwali & Wedding 2026 Season</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Request Full Festive Catalogue & Wholesale Quotation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">
              Receive verified product availability, bulk celebration discounts, and pan-India festive dispatch schedules directly on your WhatsApp.
            </p>
          </div>

          <button
            onClick={handleRequestCatalogue}
            type="button"
            className="relative z-10 w-full md:w-auto px-6 py-3 rounded-full gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-md hover:shadow-gold-lg flex-shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Request Price List on WhatsApp</span>
          </button>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto pb-2 lg:pb-0 scrollbar-none gap-2">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  type="button"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-400 to-amber-600 text-black shadow-gold-sm'
                      : 'bg-black/60 border border-gold-500/20 text-zinc-300 hover:text-gold-200 hover:border-gold-400/50'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black text-gold-300' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fireworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-black/60 border border-gold-500/25 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
                isInCart={isProductInCart(product.id)}
                onToggleCart={onToggleCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-black/40 border border-gold-500/20 rounded-2xl">
            <Flame className="w-10 h-10 text-gold-400 mx-auto mb-3 opacity-60" />
            <h4 className="font-serif text-lg font-bold text-white mb-1">
              No Fireworks Found
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              We couldn't find any fireworks matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-1.5 rounded-full gold-btn text-xs font-bold text-black"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isInCart={selectedProduct ? isProductInCart(selectedProduct.id) : false}
        onToggleCart={onToggleCart}
      />
    </section>
  );
};

