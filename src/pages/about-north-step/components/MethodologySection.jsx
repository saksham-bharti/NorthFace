import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const methodology = [
    {
      phase: "Discovery",
      title: "Strategic Assessment",
      description: "We begin every partnership with deep discovery – understanding your business objectives, culture, growth plans, and the specific impact you need from this role.",
      details: [
        "Comprehensive stakeholder interviews",
        "Cultural assessment and mapping",
        "Role impact analysis and success metrics",
        "Market positioning and competitive landscape review"
      ],
      icon: "Search",
      color: "bg-blue-500"
    },
    {
      phase: "Strategy",
      title: "Talent Strategy Development",
      description: "Based on our discovery, we develop a customized talent acquisition strategy that aligns with your business goals and attracts the right candidates.",
      details: [
        "Ideal candidate profile creation",
        "Sourcing strategy and channel optimization",
        "Employer brand positioning",
        "Timeline and milestone planning"
      ],
      icon: "Target",
      color: "bg-primary"
    },
    {
      phase: "Sourcing",
      title: "Proactive Candidate Identification",
      description: "We leverage our extensive network, advanced sourcing techniques, and market intelligence to identify and engage top-tier candidates who match your strategic needs.",
      details: [
        "Multi-channel candidate sourcing",
        "Passive candidate engagement",
        "Network referral activation",
        "Market intelligence gathering"
      ],
      icon: "Users",
      color: "bg-green-500"
    },
    {
      phase: "Evaluation",
      title: "Comprehensive Assessment",
      description: "Our rigorous evaluation process goes beyond skills matching to assess strategic fit, cultural alignment, and long-term potential for mutual success.",
      details: [
        "Technical and behavioral interviews",
        "Cultural fit assessment",
        "Reference and background verification",
        "Growth potential evaluation"
      ],
      icon: "CheckCircle",
      color: "bg-purple-500"
    },
    {
      phase: "Partnership",
      title: "Strategic Placement & Integration",
      description: "We facilitate the entire placement process and provide ongoing support to ensure successful integration and long-term success for both parties.",
      details: [
        "Offer negotiation and acceptance",
        "Onboarding support and guidance",
        "90-day integration check-ins",
        "Long-term relationship management"
      ],
      icon: "Handshake",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-4">The NorthStep Methodology</h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Our proven 5-phase approach ensures every placement is a strategic success that drives lasting value for both candidates and companies.
          </p>
        </div>

        {/* Interactive Methodology Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Step Navigation */}
          <div className="space-y-4">
            {methodology?.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-elevation-subtle border-primary shadow-sm'
                    : 'bg-card border-border hover:border-primary/50'
                } rounded-xl p-6 border`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${step?.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={step?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {step?.phase}
                      </span>
                      <span className="text-sm text-muted-foreground">Phase {index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step?.title}</h3>
                  </div>
                  <Icon 
                    name={activeStep === index ? "ChevronDown" : "ChevronRight"} 
                    size={20} 
                    className="text-muted-foreground" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${methodology?.[activeStep]?.color} rounded-xl flex items-center justify-center`}>
                  <Icon name={methodology?.[activeStep]?.icon} size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-2 inline-block">
                    {methodology?.[activeStep]?.phase}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{methodology?.[activeStep]?.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {methodology?.[activeStep]?.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-4">Key Activities:</h4>
                {methodology?.[activeStep]?.details?.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Benefits */}
        <div className="mt-20 bg-gradient-elevation-subtle rounded-2xl p-8 lg:p-12 border border-primary/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Our Methodology Works</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach delivers measurable results that benefit everyone involved
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">40% Faster</h4>
              <p className="text-sm text-muted-foreground">Average time-to-hire compared to traditional methods</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">95% Success</h4>
              <p className="text-sm text-muted-foreground">Placement success rate with 12-month retention</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">98% Satisfaction</h4>
              <p className="text-sm text-muted-foreground">Client satisfaction score across all placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;