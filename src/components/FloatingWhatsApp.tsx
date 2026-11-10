import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, PhoneCall } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_BASE_URL, generateWhatsAppLink } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: '🎆 Request 2026 Price List', text: 'Hello Kallimatha Fireworks! Please share your official 2026 price list and brochure.' },
    { label: '💍 Wedding Fireworks Display', text: 'Hello! I would like to enquire about grand aerial fireworks for an upcoming wedding ceremony.' },
    { label: '📦 Diwali Bulk Booking Discount', text: 'Hello Kallimatha Fireworks! I would like to book a bulk festive order for Diwali. Please share your wholesale offers.' },
    { label: '✨ Ask a Product Specialist', text: 'Hello! I need assistance choosing the best fireworks assortment for my celebration.' },
  ];

  const handleSend = (text: string) => {
    window.open(generateWhatsAppLink(text), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini Chat Drawer Popover */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl bg-[#0c0e14] border border-gold-500/40 shadow-2xl overflow-hidden animate-fadeIn backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#171a22] to-[#0d0e14] border-b border-gold-500/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-black rounded-full"></span>
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white">
                  Kallimatha Fireworks
                </h4>
                <p className="text-[10px] text-gold-300 font-medium">
                  {WHATSAPP_DISPLAY} • Online Now
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#07080b]/90 space-y-3">
            <div className="p-3 rounded-2xl bg-[#141722] border border-white/5 text-xs text-zinc-300 shadow-sm leading-relaxed">
              <p className="font-semibold text-gold-300 mb-1">
                Welcome to Kallimatha Fireworks! 🎆
              </p>
              <p>
                How can we illuminate your celebration today? Choose a quick enquiry option below or chat directly with our Sivakasi order desk.
              </p>
            </div>

            {/* Quick choices */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block px-1">
                Quick Enquiries:
              </span>
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-black/60 hover:bg-gold-500/15 border border-gold-500/20 hover:border-gold-400/60 text-xs text-zinc-200 hover:text-gold-200 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate">{item.label}</span>
                  <span className="text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Direct CTA */}
          <div className="p-3 bg-[#0d0e14] border-t border-gold-500/20">
            <button
              onClick={() => handleSend('Hello Kallimatha Fireworks! I would like to chat with a representative.')}
              className="w-full py-2.5 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Start Direct WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Tooltip on desktop */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none hidden sm:block whitespace-nowrap">
            <div className="px-3 py-1.5 rounded-lg bg-black/90 border border-gold-500/40 text-gold-200 text-xs font-semibold shadow-gold-sm">
              Chat on WhatsApp: {WHATSAPP_DISPLAY}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Open WhatsApp conversation"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 whatsapp-pulse cursor-pointer border-2 border-gold-400/80"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          )}

          {/* Shimmer sparkle */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-400 text-black flex items-center justify-center text-[10px] font-black shadow border border-black animate-pulse">
            ✨
          </span>
        </button>
      </div>
    </div>
  );
};

