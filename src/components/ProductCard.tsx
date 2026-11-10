import React from 'react';
import { MessageCircle, Eye, Plus, Check, Sparkles, Volume2, Shield } from 'lucide-react';
import { Product } from '../types';
import { generateProductEnquiryLink } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  isInCart: boolean;
  onToggleCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  isInCart,
  onToggleCart,
}) => {
  const handleOrderWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateProductEnquiryLink(product), '_blank');
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCart(product);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative rounded-2xl bg-gradient-to-b from-[#12141c]/90 via-[#0d0e14]/95 to-[#07080b] border border-gold-500/20 hover:border-gold-400/60 transition-all duration-300 hover:shadow-gold-md flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top Banner & Badge */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-black/20 to-black/40" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-gold-400 to-amber-600 text-black shadow-gold-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-gold-500/30 text-gold-300">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-gold-400 text-xs font-bold text-gold-300 flex items-center space-x-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            <span>View Full Details</span>
          </span>
        </div>

        {/* Smoke emission / Green cracker tag */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-zinc-300 font-medium">
          <span className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>Green Cracker</span>
          </span>
          <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 text-gold-300">
            {product.piecesPerBox}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors line-clamp-2 min-h-[3.25rem]">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline space-x-2.5 my-3">
            <span className="font-serif text-2xl font-black text-gold-300">
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

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-gold-500/10">
          <button
            onClick={handleOrderWhatsApp}
            type="button"
            className="w-full py-2.5 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-sm hover:shadow-gold-md cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Order on WhatsApp</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCartClick}
              type="button"
              className={`flex-1 py-1.5 px-3 rounded-lg border text-[11px] font-semibold tracking-wide flex items-center justify-center space-x-1.5 transition-colors cursor-pointer ${
                isInCart
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                  : 'bg-black/50 border-gold-500/20 hover:border-gold-400/50 text-zinc-300 hover:text-white'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>In Enquiry List</span>
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3 text-gold-400" />
                  <span>Add to Multi-List</span>
                </>
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              type="button"
              className="py-1.5 px-3 rounded-lg bg-black/50 border border-gold-500/20 hover:border-gold-400 text-gold-300 text-[11px] font-semibold transition-colors cursor-pointer"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

