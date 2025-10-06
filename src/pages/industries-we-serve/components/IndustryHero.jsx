import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const IndustryHero = () => {
  return (
    <section className="relative bg-gradient-elevation text-white overflow-hidden">
      <div className="absolute inset-0 north-arrow-bg opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Icon name="Building2" size={20} className="text-yellow-300" />
            <span className="text-sm font-medium">Industry Expertise</span>
          </div>
          
          <h1 className="text-brand-hero text-white mb-6">
            Industries We Serve
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Specialized recruitment expertise across key sectors with deep industry knowledge, 
            proven track records, and dedicated consultant teams for each vertical.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact-consultation">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-50"
              >
                Schedule Consultation
              </Button>
            </Link>
            <div className="flex items-center space-x-2 text-white/80">
              <Icon name="Users" size={20} />
              <span className="text-sm">500+ Industry Specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;