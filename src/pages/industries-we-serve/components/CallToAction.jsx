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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 north-arrow-bg opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-6">
            Ready to Transform Your Hiring Strategy?
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto leading-relaxed">
            Partner with NorthStep's industry experts to access top talent, 
            reduce time-to-hire, and build exceptional teams that drive business success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{benefit?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat?.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat?.label}</div>
            </div>
          ))}
        </div>

        

        {/* Contact Information */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-background rounded-2xl px-8 py-4 card-premium">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={18} className="text-primary" />
              <span className="text-foreground text-sm">1-800-NORTHSTEP</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={18} className="text-primary" />
              <span className="text-foreground text-sm">hello@northstep.com</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} className="text-primary" />
              <span className="text-foreground text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex items-center justify-center space-x-8 opacity-80">
            <div className="text-muted-foreground text-sm font-medium">Fortune 500 Companies</div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-muted-foreground text-sm font-medium">SHRM Certified</div>
            <div className="w-px h-4 bg-border"></div>
            <div className="text-muted-foreground text-sm font-medium">ISO 9001 Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;