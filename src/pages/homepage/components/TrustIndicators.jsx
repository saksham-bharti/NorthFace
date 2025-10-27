import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const metrics = [
    {
      icon: 'TrendingUp',
      value: '95%',
      label: 'Placement Success Rate',
      description: 'Industry-leading success in matching candidates with ideal roles'
    },
    {
      icon: 'Handshake',
      value: '60%',
      label: 'Faster Time-to-Hire',
      description: 'Reduced cycle time with calibrated intake and SLAs'
    },
    {
      icon: 'Clock',
      value: '14 Days',
      label: 'Average Time-to-Hire',
      description: 'Faster placements through strategic matching processes'
    },
    {
      icon: 'Users',
      value: '2,500+',
      label: 'Successful Placements',
      description: 'Leaders and specialists hired across functions since 2020'
    },
    {
      icon: 'Building2',
      value: '500+',
      label: 'Partner Companies',
      description: 'Trusted by leading organizations across industries'
    },
    {
      icon: 'Award',
      value: '98%',
      label: 'Client Retention Rate',
      description: 'Long-term partnerships built on consistent results'
    }
  ];

  const clientLogos = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Technology'
    },
    {
      name: 'Global Finance Group',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center',
      industry: 'Finance'
    },
    {
      name: 'Healthcare Innovations',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop&crop=center',
      industry: 'Healthcare'
    },
    {
      name: 'Manufacturing Excellence',
      logo: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=120&h=60&fit=crop&crop=center',
      industry: 'Manufacturing'
    },
    {
      name: 'Retail Dynamics',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=120&h=60&fit=crop&crop=center',
      industry: 'Retail'
    },
    {
      name: 'Energy Solutions',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center',
      industry: 'Energy'
    }
  ];

  const testimonials = [
    {
      quote: "NorthStep transformed our hiring process. We found exceptional talent 60% faster than traditional methods.",
      author: "Sarah Chen",
      role: "VP of Talent Acquisition",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "The personalized approach helped me land my dream role with a 40% salary increase. Truly life-changing.",
      author: "Michael Rodriguez",
      role: "Senior Software Engineer",
      company: "Global Finance Group",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      quote: "Their industry expertise and strategic guidance made all the difference in our executive search.",
      author: "Jennifer Park",
      role: "Chief Human Resources Officer",
      company: "Healthcare Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials?.length]);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-brand-headline mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Built for hiring teams. Predictable pipelines, measurable SLAs, and proven delivery.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics?.map((metric, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-elevation rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={metric?.icon} size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric?.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {metric?.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric?.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...clientLogos, ...clientLogos]?.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-muted-foreground text-center">
                        {client?.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-muted-foreground">
                      {client?.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustIndicators;