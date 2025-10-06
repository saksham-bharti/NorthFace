import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-elevation text-white relative overflow-hidden">
      <div className="absolute inset-0 north-arrow-bg opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Take Your Next Step North?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Whether you're a talented professional seeking your next breakthrough or a visionary company building an exceptional team, we're here to make it happen.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Candidates */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name="User" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Professionals</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Discover opportunities that align with your ambitions and accelerate your career trajectory.
              </p>
              <Link to="/for-candidates">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary w-full"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Explore Opportunities
                </Button>
              </Link>
            </div>

            {/* For Employers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Building2" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Companies</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Partner with us to build exceptional teams that drive your business forward.
              </p>
              <Link to="/contact-consultation">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary w-full"
                  iconName="Calendar"
                  iconPosition="right"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Icon name="Phone" size={24} className="text-secondary" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Icon name="Mail" size={24} className="text-secondary" />
                <span className="text-white/90">hello@northstep.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Icon name="MapPin" size={24} className="text-secondary" />
                <span className="text-white/90">New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;