import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Mail, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_BASE_URL, generateWhatsAppLink } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Diwali Festive Order',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    const formattedMessage = `Hello Kallimatha Fireworks team! 🎆

*New Celebration Enquiry:*
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone || 'Provided via WhatsApp'}
🎉 *Occasion:* ${formData.eventType}
📍 *Delivery City / Region:* ${formData.location || 'Not specified'}
💬 *Requirements:* ${formData.message || 'Looking for catalogue and best price quote'}

Kindly share the full product price list and booking details. Thank you!`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(generateWhatsAppLink(formattedMessage), '_blank');
      setSubmitted(false);
    }, 600);
  };

  const directWhatsAppChat = () => {
    const msg = `Hello Kallimatha Fireworks! 🎆\n\nI would like to enquire about your fireworks catalogue and current booking availability.`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-black/50 mb-3 shadow-gold-sm">
            <MessageCircle className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
              Get In Touch
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Connect with <span className="gold-text-gradient font-display">Kallimatha Fireworks</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Have questions about product availability, wedding displays, or bulk festive orders? Reach out directly via WhatsApp for lightning-fast quotes and catalogue sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12131b] via-[#0c0d14] to-[#07080b] border border-gold-500/30 shadow-gold-sm">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Direct Festive Hotline
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Our pyrotechnic specialists are on standby to assist you with customized recommendations for your celebrations.
              </p>

              {/* Phone / WhatsApp Box */}
              <div className="p-4 rounded-xl bg-black/60 border border-gold-500/30 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">
                      Official WhatsApp & Calls
                    </span>
                    <a
                      href={WHATSAPP_BASE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-gold-300 hover:text-white transition-colors"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>

                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full gold-btn text-[11px] font-bold text-black uppercase tracking-wider"
                >
                  Chat
                </a>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 text-zinc-300">
                  <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Operating Hours</strong>
                    <span>Monday - Sunday: 8:00 AM - 10:00 PM IST (Active festive support)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-zinc-300">
                  <Sparkles className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Speciality Orders</strong>
                    <span>Wedding Fireworks Displays, Diwali Wholesale, Temple Festivals, Corporate Events</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Production & Heritage Base</strong>
                    <span>Sivakasi Pyrotechnic Manufacturing Hub, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Button */}
              <button
                onClick={directWhatsAppChat}
                type="button"
                className="w-full mt-6 py-3.5 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-sm hover:shadow-gold-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Open Instant WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Quick Enquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0d14]/90 border border-gold-500/30 backdrop-blur-md shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Send Fast Celebration Enquiry
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in your details to immediately generate an official WhatsApp enquiry with our order desk.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gold-500/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gold-500/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Celebration Occasion
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gold-500/20 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Diwali Festive Order">Diwali Festive Order</option>
                      <option value="Grand Wedding Fireworks">Grand Wedding Fireworks</option>
                      <option value="Temple / Public Festival">Temple / Public Festival</option>
                      <option value="Birthday & Anniversary">Birthday & Anniversary</option>
                      <option value="Corporate Event Celebration">Corporate Event Celebration</option>
                      <option value="Wholesale Distributorship Enquiry">Wholesale Distributorship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      City / Delivery Region
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai, Bangalore, Hyderabad..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gold-500/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Enquiry Details / Items Needed
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what fireworks you need or request the complete festive price list..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gold-500/20 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl gold-btn text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center space-x-2 shadow-gold-md hover:shadow-gold-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitted ? 'Opening WhatsApp...' : 'Submit Enquiry to WhatsApp Desk'}</span>
                </button>

                <p className="text-[11px] text-center text-zinc-500">
                  ⚡ Fast response guaranteed within minutes during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

