import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PathwaySelector = () => {
  const [hoveredPath, setHoveredPath] = useState(null);

  const pathways = [
    {
      id: 'candidates',
      title: 'For Ambitious Professionals',
      subtitle: 'Accelerate Your Career Journey',
      description: 'Discover opportunities that align with your ambitions. Get personalized career guidance, access exclusive positions, and connect with industry leaders.',
      icon: 'User',
      route: '/for-candidates',
      color: 'primary',
      features: [
        'Personalized Job Matching',
        'Career Development Tools',
        'Industry Expert Guidance',
        'Salary Negotiation Support'
      ],
      stats: {
        label: 'Average Salary Increase',
        value: '$25,000'
      }
    },
    {
      id: 'employers',
      title: 'For Visionary Companies',
      subtitle: 'Build Exceptional Teams',
      description: 'Partner with us to find top-tier talent that drives your business forward. Access our network of pre-vetted professionals and strategic hiring insights.',
      icon: 'Building2',
      route: '/contact-consultation',
      color: 'secondary',
      features: [
        'Strategic Talent Acquisition',
        'Pre-Vetted Candidate Pipeline',
        'Hiring Process Optimization',
        'Market Intelligence Reports'
      ],
      stats: {
        label: 'Faster Time-to-Hire',
        value: '60% Reduction'
      }
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-brand-headline mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Whether you're seeking your next career breakthrough or building an exceptional team, 
            we provide the strategic partnership you need to achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pathways?.map((pathway) => (
            <div
              key={pathway?.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredPath === pathway?.id ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredPath(pathway?.id)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div className={`
                relative bg-card rounded-2xl p-8 shadow-lg border-2 transition-all duration-300
                ${hoveredPath === pathway?.id 
                  ? `border-${pathway?.color} shadow-2xl` 
                  : 'border-border hover:border-muted-foreground/20'
                }
              `}>
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                    ${pathway?.color === 'primary' ? 'bg-gradient-elevation' : 'bg-secondary'}
                    ${hoveredPath === pathway?.id ? 'scale-110' : 'scale-100'}
                  `}>
                    <Icon 
                      name={pathway?.icon} 
                      size={28} 
                      className="text-white" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pathway?.title}
                    </h3>
                    <p className={`text-sm font-medium ${
                      pathway?.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`}>
                      {pathway?.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pathway?.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {pathway?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`
                        w-5 h-5 rounded-full flex items-center justify-center
                        ${pathway?.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}
                      `}>
                        <Icon 
                          name="Check" 
                          size={12} 
                          className={pathway?.color === 'primary' ? 'text-primary' : 'text-secondary'} 
                        />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className={`
                  p-4 rounded-lg mb-6
                  ${pathway?.color === 'primary' ? 'bg-primary/5' : 'bg-secondary/5'}
                `}>
                  <div className="text-center">
                    <div className={`
                      text-2xl font-bold
                      ${pathway?.color === 'primary' ? 'text-primary' : 'text-secondary'}
                    `}>
                      {pathway?.stats?.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {pathway?.stats?.label}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to={pathway?.route}>
                  <Button
                    variant={pathway?.color === 'primary' ? 'default' : 'outline'}
                    className={`
                      w-full transition-all duration-300
                      ${pathway?.color === 'primary' ?'bg-gradient-elevation hover:shadow-elevation' :'border-secondary text-secondary hover:bg-secondary hover:text-white'
                      }
                      ${hoveredPath === pathway?.id ? 'transform -translate-y-1' : ''}
                    `}
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {pathway?.id === 'candidates' ? 'Explore Opportunities' : 'Get Consultation'}
                  </Button>
                </Link>

                {/* Hover Glow Effect */}
                {hoveredPath === pathway?.id && (
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-20 -z-10
                    ${pathway?.color === 'primary' ? 'bg-primary' : 'bg-secondary'}
                    blur-xl scale-110 transition-all duration-300
                  `}></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaySelector;