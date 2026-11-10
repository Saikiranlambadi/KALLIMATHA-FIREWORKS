import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { generateCartEnquiryLink, WHATSAPP_DISPLAY } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: Product; quantity: number }[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSendWhatsAppOrder = () => {
    window.open(generateCartEnquiryLink(items), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0b0c12] border-l border-gold-500/30 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-gold-500/20 bg-gradient-to-r from-[#141620] to-[#0b0c12] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Festive Enquiry List
                </h3>
                <p className="text-xs text-gold-300 font-medium">
                  {totalItemCount} {totalItemCount === 1 ? 'box' : 'boxes'} selected for quote
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="Close Enquiry List"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items list */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <Sparkles className="w-12 h-12 text-gold-400/40 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  Your Enquiry List is Empty
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto mb-6">
                  Browse our fireworks collection and add products to request a combined festive price quote on WhatsApp.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full gold-btn text-xs font-bold uppercase tracking-wider text-black"
                >
                  Browse Fireworks
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-xl bg-black/60 border border-gold-500/20 flex items-center space-x-3 hover:border-gold-500/40 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gold-500/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-white truncate">
                      {product.name}
                    </h5>
                    <p className="text-[10px] text-gold-400 font-medium truncate">
                      {product.piecesPerBox}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white min-w-[20px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-gold-500/20 bg-[#0a0b10] space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Total Items:</span>
                <span className="font-bold text-white">{totalItemCount} Boxes</span>
              </div>

              <div className="text-[11px] text-gold-300/80 bg-gold-400/5 p-2.5 rounded-lg border border-gold-500/20">
                ✨ Submitting will generate a complete WhatsApp enquiry with your selected items sent directly to our sales team for prompt quotation.
              </div>

              <button
                onClick={handleSendWhatsAppOrder}
                type="button"
                className="w-full py-3.5 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-md hover:shadow-gold-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Send Order Quote via WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                type="button"
                className="w-full py-2 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Clear Enquiry List
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

