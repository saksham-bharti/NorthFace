import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import IndustryHero from './components/IndustryHero';
import IndustryGrid from './components/IndustryGrid';
import IndustryInsights from './components/IndustryInsights';
import ConsultantShowcase from './components/ConsultantShowcase';
import InteractiveTools from './components/InteractiveTools';
import CallToAction from './components/CallToAction';

const IndustriesWeServe = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - NorthStep Global | Specialized Talent Solutions</title>
        <meta 
          name="description" 
          content="Discover NorthStep's specialized recruitment expertise across technology, healthcare, finance, manufacturing, and more. Industry-specific consultants with proven track records." 
        />
        <meta name="keywords" content="industry recruitment, specialized hiring, technology recruiting, healthcare staffing, financial services talent, manufacturing recruitment" />
        <meta property="og:title" content="Industries We Serve - NorthStep Global" />
        <meta property="og:description" content="Specialized recruitment expertise across key sectors with dedicated consultant teams and industry intelligence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/industries-we-serve" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <IndustryHero />
          <IndustryGrid />
          <IndustryInsights />
          <ConsultantShowcase />
          <InteractiveTools />
          <CallToAction />
        </main>

        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-elevation rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M3 21L12 3L21 21H18L12 9L6 21H3Z" fill="currentColor"/>
                    <path d="M8 21L12 13L16 21H8Z" fill="rgba(255,255,255,0.3)"/>
                  </svg>
                </div>
                <span className="text-lg font-bold">NorthStep Global</span>
              </div>
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} NorthStep Global. All rights reserved. | 
                Transforming careers, building exceptional teams.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndustriesWeServe;