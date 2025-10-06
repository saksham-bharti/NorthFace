import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onScheduleConsultation }) => {
  return (
    <section className="relative bg-gradient-elevation text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 north-arrow-bg opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Ready to Take Your
                <span className="block text-yellow-300">Next Step North?</span>
              </h1>
              <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed">
                Connect with our expert recruiters for personalized consultation and strategic career guidance.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">24hr</div>
                <div className="text-sm text-orange-100">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-orange-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-orange-100">Successful Placements</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={onScheduleConsultation}
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-50"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} color="#1A1A1A" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Recruiters</h3>
                    <p className="text-orange-100">Industry specialists ready to help</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Icon name="Target" size={24} color="#1A1A1A" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Strategic Matching</h3>
                    <p className="text-orange-100">Personalized career solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} color="#1A1A1A" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fast Response</h3>
                    <p className="text-orange-100">Quick turnaround guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;