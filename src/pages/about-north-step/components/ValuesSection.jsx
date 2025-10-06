import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: "Compass",
      title: "Strategic Partnership",
      description: "We don't just fill positions – we build long-term relationships that drive mutual success and growth.",
      example: "Our average client partnership spans 3+ years with 85% repeat engagement rate."
    },
    {
      icon: "Heart",
      title: "Human-Centered Approach",
      description: "Every candidate is a person with unique aspirations, and every company has a distinct culture worth preserving.",
      example: "We conduct in-depth cultural fit assessments for every placement to ensure lasting success."
    },
    {
      icon: "TrendingUp",
      title: "Excellence in Execution",
      description: "We set the highest standards for ourselves and deliver results that exceed expectations consistently.",
      example: "95% placement success rate with average time-to-hire reduced by 40% compared to industry standards."
    },
    {
      icon: "Shield",
      title: "Integrity & Transparency",
      description: "Honest communication, ethical practices, and transparent processes build the trust that powers great partnerships.",
      example: "Real-time candidate pipeline visibility and detailed progress reporting for all clients."
    },
    {
      icon: "Lightbulb",
      title: "Innovation Leadership",
      description: "We continuously evolve our methods, tools, and approaches to stay ahead of industry trends.",
      example: "AI-powered matching technology combined with human expertise for optimal placement outcomes."
    },
    {
      icon: "Users",
      title: "Community Impact",
      description: "Great placements create ripple effects – stronger teams, better companies, and thriving professional communities.",
      example: "Our placements have contributed to $50M+ in additional revenue growth for client companies."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-4">Our Core Values</h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            These principles guide every decision we make and every relationship we build. They're not just words on a wall – they're the foundation of how we operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-sm border border-border elevation-hover">
              <div className="w-16 h-16 bg-gradient-elevation rounded-xl flex items-center justify-center mb-6">
                <Icon name={value?.icon} size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">{value?.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{value?.description}</p>
              
              <div className="bg-gradient-elevation-subtle rounded-lg p-4 border border-primary/20">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground font-medium">{value?.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="mt-20 bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Values in Action</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our values translate into real outcomes for candidates and companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">2,500+</div>
              <div className="text-muted-foreground">Successful Placements</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;