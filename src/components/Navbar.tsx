import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageCircle, Menu, X, ShoppingBag, ShieldCheck } from 'lucide-react';
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, generateWhatsAppLink } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Safety & Quality', href: '#safety' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppEnquiry = () => {
    const message = `Hello Kallimatha Fireworks! 🎆\n\nI would like to enquire about your fireworks collection and receive the festive price list.`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080b]/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="flex items-center space-x-3 group text-left cursor-pointer"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[2px] shadow-gold-sm group-hover:shadow-gold-md transition-shadow">
                <div className="w-full h-full rounded-full bg-[#07080b] flex items-center justify-center overflow-hidden">
                  <Sparkles className="w-5 h-5 text-gold-300 animate-pulse-slow" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl md:text-2xl font-black tracking-widest gold-text-gradient uppercase">
                  Kallimatha
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-gold-300/80 uppercase">
                    Fireworks
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  <span className="text-[9px] text-zinc-400 font-medium hidden sm:inline">
                    Est. Sivakasi Heritage
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs uppercase tracking-widest font-semibold text-zinc-300 hover:text-gold-300 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Enquiry Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full bg-black/60 border border-gold-500/30 text-gold-300 hover:text-white hover:border-gold-400 transition-all group"
                title="View WhatsApp Enquiry List"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-black animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Direct WhatsApp Call/Chat Button */}
              <button
                onClick={directWhatsAppEnquiry}
                type="button"
                className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full gold-btn text-xs font-bold uppercase tracking-wider text-black shadow-gold-sm hover:shadow-gold-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-black/50 border border-gold-500/30 text-gold-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0b0f]/98 border-b border-gold-500/30 px-6 py-6 mt-3 backdrop-blur-xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-semibold tracking-wider uppercase text-zinc-200 hover:text-gold-300 py-2 border-b border-zinc-800/60 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-gold-400">›</span>
                </a>
              ))}

              <div className="pt-3 flex flex-col space-y-3">
                <button
                  onClick={directWhatsAppEnquiry}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black shadow-gold-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp: {WHATSAPP_DISPLAY}</span>
                </button>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-zinc-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>100% Genuine Sivakasi Certified Green Crackers</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

