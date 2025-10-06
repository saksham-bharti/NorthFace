import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-elevation text-white overflow-hidden">
      <div className="absolute inset-0 north-arrow-bg opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M3 21L12 3L21 21H18L12 9L6 21H3Z" fill="currentColor"/>
                <path d="M8 21L12 13L16 21H8Z" fill="rgba(255,255,255,0.3)"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-brand-hero mb-6 animate-fade-in">
            Your Strategic Partner in 
            <span className="block text-secondary"> Talent Transformation</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            We don't just fill positions – we create career trajectories and organizational success stories that define industries. Every placement is a strategic partnership that elevates both talent and business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <Icon name="TrendingUp" size={24} className="text-secondary" />
                <div className="text-left">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={24} className="text-secondary" />
                <div className="text-left">
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm text-white/80">Placements</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <Icon name="Building2" size={24} className="text-secondary" />
                <div className="text-left">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;