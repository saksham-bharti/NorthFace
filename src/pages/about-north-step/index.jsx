import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import MethodologySection from './components/MethodologySection';
import TeamSection from './components/TeamSection';
import CTASection from './components/CTASection';

const AboutNorthStep = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About NorthStep - Strategic Talent Partnership | NorthStep Global</title>
        <meta 
          name="description" 
          content="Learn about NorthStep's mission to transform recruitment through strategic partnerships. Meet our expert team and discover our proven methodology for career advancement and organizational success." 
        />
        <meta name="keywords" content="about northstep, recruitment company, talent acquisition, strategic partnerships, team expertise, company values" />
        <meta property="og:title" content="About NorthStep - Strategic Talent Partnership" />
        <meta property="og:description" content="Discover NorthStep's story, values, and expert team dedicated to creating transformational hiring outcomes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-north-step" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <MethodologySection />
        <TeamSection />
        <CTASection />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-elevation rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 21L12 3L21 21H18L12 9L6 21H3Z" fill="currentColor"/>
                  <path d="M8 21L12 13L16 21H8Z" fill="rgba(255,255,255,0.3)"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">NorthStep</h3>
                <p className="text-sm text-white/70 -mt-1">Global</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Strategic talent partnerships that elevate careers and transform organizations.
            </p>
            <p className="text-sm text-white/50">
              © {new Date()?.getFullYear()} NorthStep Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutNorthStep;