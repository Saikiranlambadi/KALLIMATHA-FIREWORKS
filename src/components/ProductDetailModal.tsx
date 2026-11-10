import React from 'react';
import { X, MessageCircle, ShieldCheck, Clock, Eye, Sparkles, AlertTriangle, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { generateProductEnquiryLink, WHATSAPP_DISPLAY } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isInCart: boolean;
  onToggleCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isInCart,
  onToggleCart,
}) => {
  if (!product) return null;

  const handleOrderWhatsApp = () => {
    window.open(generateProductEnquiryLink(product), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#0c0d12] border border-gold-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 border border-gold-500/30 text-gold-300 hover:text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual */}
        <div className="md:w-1/2 relative bg-black/50 min-h-[250px] md:min-h-full flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center filter brightness-95"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0c0d12]" />

          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-amber-600 text-black shadow-gold-sm">
                {product.badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 text-xs text-gold-300/90 bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-gold-500/20">
            <span>✨ Authentic Pyrotechnics • CSIR-NEERI Green Crackers Compliant</span>
          </div>
        </div>

        {/* Product Details Content */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400">
                {product.category.toUpperCase().replace('-', ' ')}
              </span>
              <span className="text-zinc-500 text-xs">•</span>
              <span className="text-xs text-zinc-400 font-medium">
                {product.piecesPerBox}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline space-x-3 my-4">
              <span className="font-serif text-3xl font-black text-gold-300">
                ₹{product.price}
              </span>
              {product.mrp && product.mrp > product.price && (
                <span className="text-sm text-zinc-500 line-through font-medium">
                  ₹{product.mrp}
                </span>
              )}
              {product.mrp && product.mrp > product.price && (
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Features list */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-2 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Product Highlights</span>
              </h4>
              <ul className="space-y-1.5">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start space-x-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2 border-t border-gold-500/20">
            <button
              onClick={handleOrderWhatsApp}
              type="button"
              className="w-full py-3 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black shadow-gold-sm flex items-center justify-center space-x-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Enquire & Order on WhatsApp</span>
            </button>

            <button
              onClick={() => onToggleCart(product)}
              type="button"
              className={`w-full py-2.5 rounded-xl border text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-colors cursor-pointer ${
                isInCart
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                  : 'bg-black/60 border-zinc-700 hover:border-gold-400 text-zinc-300 hover:text-white'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Added to WhatsApp Enquiry List</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-gold-400" />
                  <span>Add to Multi-Product Enquiry</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-zinc-400 pt-1">
              Live support & price quotations available directly via WhatsApp (+91 8465014657)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

