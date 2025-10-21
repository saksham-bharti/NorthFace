import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import IndustryHero from './components/IndustryHero';
import IndustryGrid from './components/IndustryGrid';
import IndustryInsights from './components/IndustryInsights';
import ConsultantShowcase from './components/ConsultantShowcase';
import InteractiveTools from './components/InteractiveTools';
import CallToAction from './components/CallToAction';
import Icon from '../../components/AppIcon';


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

        {/* Footer */}
        <footer className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-6 gap-8 mb-8">
              {/* Brand */}
              <div className="lg:col-span-3">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 gradient-elevation rounded-lg flex items-center justify-center">
                    <img 
                      src="/assets/images/Logo.png" 
                      alt="NorthStep" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">NorthStep</h3>
                    <p className="text-sm text-background/70">Global</p>
                  </div>
                </div>
                <p className="text-background/80 mb-6 max-w-md">
                  Strategic talent partnerships that transform careers and organizations. 
                  Your next step north starts here.
                </p>
                <div className="flex space-x-4">
                  <Icon name="Linkedin" size={20} className="text-background/60 hover:text-background cursor-pointer" />
                  <Icon name="Twitter" size={20} className="text-background/60 hover:text-background cursor-pointer" />
                  <Icon name="Facebook" size={20} className="text-background/60 hover:text-background cursor-pointer" />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/homepage" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/success-stories" className="text-background/80 hover:text-primary transition-colors">Success Stories</a></li>
                </ul>
              </div>
              {/* Services - horizontal stack */}
              <div>
                <h5 className="text-sm font-semibold mb-2">Services</h5>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <a href="/services/ExecutiveSearch" className="text-background/80 hover:text-primary transition-colors">Executive Search</a>
                  <a href="/services/SeniorHiring" className="text-background/80 hover:text-primary transition-colors">Senior & Mid Level Hiring</a>
                  <a href="/services/International" className="text-background/80 hover:text-primary transition-colors">International Hiring</a>
                  <a href="/services/RPO" className="text-background/80 hover:text-primary transition-colors">RPO Solutions</a>
                  <a href="/services/GCCHiring" className="text-background/80 hover:text-primary transition-colors">GCC Hiring</a>
                </div>
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
                © {new Date()?.getFullYear()} NorthStep Global. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 lg:mt-0">
                <a href="/privacy-policy" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
                <a href="/cookie-policy" className="text-background/60 hover:text-primary text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndustriesWeServe;