import React from 'react';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { AboutSection } from './components/AboutSection';
import { SafetyGuideSection } from './components/SafetyGuideSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FireworksCanvas } from './components/FireworksCanvas';

export function App() {
  const scrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-[#e8e4dc] selection:bg-[#d4af37] selection:text-black">
      <FireworksCanvas interactive={false} density="subtle" />

      {/* Main Content Layout */}
      <div className="relative z-10">
        <main>
          {/* 1. Home / Hero */}
          <Hero
            onExploreClick={scrollToCategories}
          />

          {/* 2. Category Showcase Grid (10 Signature Visual Categories) */}
          <CategoryShowcase />

          {/* 3. About Us Section */}
          <AboutSection />

          {/* Safety & Compliance Section */}
          <SafetyGuideSection />

          {/* 5. Contact Us Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

