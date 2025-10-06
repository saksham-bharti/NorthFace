import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const benefits = [
    {
      icon: "Target",
      title: "Industry-Specific Expertise",
      description: "Deep knowledge of your sector\'s unique challenges and opportunities"
    },
    {
      icon: "Users",
      title: "Specialized Consultant Teams",
      description: "Dedicated recruiters with proven track records in your industry"
    },
    {
      icon: "TrendingUp",
      title: "Market Intelligence",
      description: "Real-time insights on hiring trends, salary benchmarks, and talent availability"
    },
    {
      icon: "Award",
      title: "Proven Success Metrics",
      description: "Consistently high placement rates and client satisfaction scores"
    }
  ];

  const stats = [
    { value: "500+", label: "Industry Specialists" },
    { value: "15,000+", label: "Successful Placements" },
    { value: "94%", label: "Average Success Rate" },
    { value: "18", label: "Average Days to Hire" }
  ];

  return (
    <section className="py-20 bg-gradient-elevation text-white relative overflow-hidden">
      <div className="absolute inset-0 north-arrow-bg opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Hiring Strategy?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Partner with NorthStep's industry experts to access top talent, 
            reduce time-to-hire, and build exceptional teams that drive business success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={28} className="text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit?.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">
                {stat?.value}
              </div>
              <div className="text-white/80 text-sm">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link to="/contact-consultation">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 px-8"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Schedule Free Consultation
            </Button>
          </Link>
          
          <Link to="/for-candidates">
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 px-8"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Explore Opportunities
            </Button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={18} className="text-yellow-300" />
              <span className="text-white/90 text-sm">1-800-NORTHSTEP</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={18} className="text-yellow-300" />
              <span className="text-white/90 text-sm">hello@northstep.com</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} className="text-yellow-300" />
              <span className="text-white/90 text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-white/40 text-sm font-medium">Fortune 500 Companies</div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-white/40 text-sm font-medium">SHRM Certified</div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-white/40 text-sm font-medium">ISO 9001 Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;