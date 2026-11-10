import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Eye, X, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/products';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterOptions = ['All', 'Sky Shots', 'Fountains', 'Sparklers', 'Chakkars', 'Rockets'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-black/50 mb-3 shadow-gold-sm">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
              Celebration Gallery
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Symphony of <span className="gold-text-gradient font-display">Sky & Sparkle</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Witness the awe and splendour created by Kallimatha Fireworks across festive Diwali nights, grand weddings, and joyous family celebrations.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-4 gap-2 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === opt
                  ? 'bg-gradient-to-r from-gold-400 to-amber-600 text-black shadow-gold-sm font-bold'
                  : 'bg-black/50 border border-gold-500/20 text-zinc-400 hover:text-white'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative h-80 rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400/60 transition-all duration-300 shadow-lg cursor-pointer bg-black/60"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-gold-500/30 text-gold-300">
                  {item.category}
                </span>
              </div>

              {/* View Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-3 rounded-full bg-gold-400 text-black shadow-gold-md transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-[10px] font-semibold tracking-wider text-gold-400 uppercase">
                  {item.location}
                </p>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
                  {item.burstType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0d0e14] border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 border border-gold-500/40 text-gold-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="max-h-[65vh] w-full object-cover filter brightness-95"
                />
              </div>

              <div className="p-6 bg-[#0c0d12]">
                <div className="flex items-center space-x-2 mb-1 text-xs text-gold-400 font-bold uppercase tracking-widest">
                  <span>{activeItem.category}</span>
                  <span>•</span>
                  <span>{activeItem.burstType}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-zinc-300">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

