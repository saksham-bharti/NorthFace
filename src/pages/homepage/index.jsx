import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PathwaySelector from './components/PathwaySelector';
import TrustIndicators from './components/TrustIndicators';
import IndustryShowcase from './components/IndustryShowcase';
import SuccessStories from './components/SuccessStories';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>NorthStep Recruiting - Strategic Talent Partnership | Your Next Step North</title>
        <meta 
          name="description" 
          content="Transform your career or build exceptional teams with NorthStep Recruiting. Strategic talent acquisition connecting ambitious professionals with visionary companies. 95% success rate, $25K average salary increase." 
        />
        <meta 
          name="keywords" 
          content="recruitment, talent acquisition, career advancement, hiring, job placement, strategic recruiting, professional development" 
        />
        <meta property="og:title" content="NorthStep Recruiting - Your Next Step North" />
        <meta 
          property="og:description" 
          content="Where exceptional talent meets visionary companies. Strategic recruitment partnerships that transform careers and organizations." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section - First impression with dual pathways */}
          <HeroSection />
          
          {/* Pathway Selector - Clear separation for candidates vs employers */}
          <PathwaySelector />
          
          {/* Trust Indicators - Social proof and metrics */}
          <TrustIndicators />
          
          {/* Industry Showcase - Specialized expertise */}
          <IndustryShowcase />
          
          {/* Success Stories - Real transformations */}
          <SuccessStories />
          
          {/* CTA Section - Multiple engagement options */}
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-elevation rounded-lg flex items-center justify-center">
                    <img 
                      src="/assets/images/DarkLogo.png" 
                      alt="Description" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">NorthStep</h3>
                    <p className="text-sm text-background/70">Recruiting</p>
                  </div>
                </div>
                <p className="text-background/80 text-sm leading-relaxed max-w-md">
                  Strategic talent partnerships that transform careers and organizations. 
                  Your next step north starts here.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/for-candidates" className="text-background/80 hover:text-primary transition-colors">For Candidates</a></li>
                  <li><a href="/industries-we-serve" className="text-background/80 hover:text-primary transition-colors">Industries</a></li>
                  <li><a href="/success-stories" className="text-background/80 hover:text-primary transition-colors">Success Stories</a></li>
                  <li><a href="/about-north-step" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li>+1 (555) 123-4567</li>
                  <li>hello@northstep.com</li>
                  <li>New York, NY</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-background/20 pt-8 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm text-background/60">
                © {new Date()?.getFullYear()} NorthStep Recruiting. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 lg:mt-0">
                <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;