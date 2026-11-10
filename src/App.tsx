import React, { useState } from 'react';
import { FireworksCanvas } from './components/FireworksCanvas';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { SafetyGuideSection } from './components/SafetyGuideSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [triggerBurst, setTriggerBurst] = useState<{ x: number; y: number; timestamp: number } | null>(null);

  // Trigger burst from Hero button or Gallery interactive pad
  const handleIgniteFireworks = () => {
    const x = window.innerWidth * (0.3 + Math.random() * 0.4);
    const y = window.innerHeight * (0.2 + Math.random() * 0.3);
    setTriggerBurst({ x, y, timestamp: Date.now() });
  };

  const handleGalleryEffect = (_effectName: string) => {
    const x = window.innerWidth * (0.2 + Math.random() * 0.6);
    const y = window.innerHeight * (0.15 + Math.random() * 0.3);
    setTriggerBurst({ x, y, timestamp: Date.now() });
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-[#e8e4dc] selection:bg-[#d4af37] selection:text-black">
      {/* HTML Canvas Realistic Fireworks Background */}
      <FireworksCanvas
        interactive={true}
        density="normal"
        triggerBurst={triggerBurst}
      />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <main>
          {/* 1. Home / Hero */}
          <Hero
            onExploreClick={scrollToCategories}
            onIgniteClick={handleIgniteFireworks}
          />

          {/* 2. Category Showcase Grid (10 Signature Visual Categories) */}
          <CategoryShowcase />

          {/* 3. About Us Section */}
          <AboutSection />

          {/* 4. Fireworks Gallery Section */}
          <GallerySection
            onTriggerFireworkEffect={handleGalleryEffect}
          />

          {/* Safety & Compliance Section */}
          <SafetyGuideSection />

          {/* 5. Contact Us Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

export default App;

