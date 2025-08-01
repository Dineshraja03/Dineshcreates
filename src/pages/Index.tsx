
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import PricingSection from '../components/PricingSection';
import DomainPricingCard from '../components/DomainPricingCard';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  // Update document title and meta tags for SEO
  useEffect(() => {
    document.title = "Dinesh Raja - Freelance Web Developer & Designer | Professional Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dinesh Raja is a freelance web developer and designer specializing in modern, responsive websites, portfolio sites, and business websites. Expert in React, JavaScript, and modern web technologies.');
    }

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dinesh Raja - Freelance Web Developer & Designer",
      "description": "Professional freelance web developer and designer portfolio showcasing modern, responsive websites and digital experiences.",
      "url": window.location.href,
      "mainEntity": {
        "@type": "Person",
        "name": "Dinesh Raja",
        "jobTitle": "Freelance Web Developer & Designer",
        "url": "https://dineshraja.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('WebPage')) {
          script.remove();
        }
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Main content with semantic HTML for better SEO */}
      <header>
        <Navbar />
      </header>
      
      <main>
        <HeroSection />
        
        <section id="about" aria-label="About Section">
          <AboutSection />
        </section>
        
        <section id="services" aria-label="Services Section">
          <ServicesSection />
        </section>
        
        <section id="portfolio" aria-label="Portfolio Section">
          <PortfolioSection />
        </section>
        
        <section id="pricing" aria-label="Pricing Section">
          <PricingSection />
        </section>
        
        <DomainPricingCard />
        
        <section id="testimonials" aria-label="Testimonials Section">
          <TestimonialsSection />
        </section>
        
        <CTASection />
        
        <section id="contact" aria-label="Contact Section">
          <ContactSection />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
