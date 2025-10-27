import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientShowcase = () => {
  

  const clients = [
    {
      id: 1,
      name: "TechFlow Dynamics",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
      industry: "Technology",
      size: "500-1000",
      placements: 23,
      partnership: "3 years",
      description: "Leading software development company specializing in enterprise solutions",
      successMetrics: {
        hires: "23 successful placements",
        retention: "96% retention rate",
        timeToHire: "Average 18 days"
      }
    },
    {
      id: 2,
      name: "GrowthScale Ventures",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop",
      industry: "Finance",
      size: "100-500",
      placements: 15,
      partnership: "2 years",
      description: "FinTech startup revolutionizing digital banking solutions",
      successMetrics: {
        hires: "15 key positions filled",
        retention: "94% retention rate",
        timeToHire: "Average 21 days"
      }
    },
    {
      id: 3,
      name: "HealthTech Solutions",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop",
      industry: "Healthcare",
      size: "200-500",
      placements: 18,
      partnership: "4 years",
      description: "Healthcare technology company improving patient care through innovation",
      successMetrics: {
        hires: "18 healthcare professionals",
        retention: "98% retention rate",
        timeToHire: "Average 25 days"
      }
    },
    {
      id: 4,
      name: "InnovateTech Solutions",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop",
      industry: "Technology",
      size: "1000+",
      placements: 45,
      partnership: "5 years",
      description: "Global technology leader in cloud computing and AI solutions",
      successMetrics: {
        hires: "45 technical roles",
        retention: "97% retention rate",
        timeToHire: "Average 16 days"
      }
    },
    {
      id: 5,
      name: "Legacy Manufacturing Corp",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop",
      industry: "Manufacturing",
      size: "2000+",
      placements: 32,
      partnership: "6 years",
      description: "Traditional manufacturing company undergoing digital transformation",
      successMetrics: {
        hires: "32 leadership positions",
        retention: "95% retention rate",
        timeToHire: "Average 28 days"
      }
    },
    {
      id: 6,
      name: "DataScale Solutions",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
      industry: "Technology",
      size: "300-500",
      placements: 27,
      partnership: "3 years",
      description: "Data analytics and business intelligence platform provider",
      successMetrics: {
        hires: "27 data professionals",
        retention: "93% retention rate",
        timeToHire: "Average 19 days"
      }
    },
    {
      id: 7,
      name: "Strategic Consulting Group",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop",
      industry: "Consulting",
      size: "100-200",
      placements: 12,
      partnership: "2 years",
      description: "Management consulting firm serving Fortune 500 companies",
      successMetrics: {
        hires: "12 senior consultants",
        retention: "100% retention rate",
        timeToHire: "Average 22 days"
      }
    },
    {
      id: 8,
      name: "RetailTech Innovations",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
      industry: "Retail",
      size: "500-1000",
      placements: 21,
      partnership: "4 years",
      description: "E-commerce technology platform for modern retail experiences",
      successMetrics: {
        hires: "21 retail tech experts",
        retention: "92% retention rate",
        timeToHire: "Average 20 days"
      }
    }
  ];

  

  const totalPlacements = clients?.reduce((sum, client) => sum + client?.placements, 0);
  const averageRetention = Math.round(clients?.reduce((sum, client) => {
    const retention = parseInt(client?.successMetrics?.retention);
    return sum + retention;
  }, 0) / clients?.length);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-hero mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto mb-8">
            We've built lasting partnerships with companies across industries, helping them build exceptional teams and achieve their growth objectives.
          </p>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalPlacements}+</div>
              <div className="text-sm text-muted-foreground">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{averageRetention}%</div>
              <div className="text-sm text-muted-foreground">Average Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
          </div>
        </div>

        

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients?.map((client) => (
            <div
              key={client?.id}
              className="bg-card rounded-xl p-6 card-premium elevation-hover"
            >
              {/* Client Header */}
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={client?.logo}
                  alt={`${client?.name} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{client?.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{client?.industry}</span>
                    <span>•</span>
                    <span>{client?.size}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {client?.description}
              </p>

              {/* Partnership Info */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center space-x-1 text-primary">
                  <Icon name="Users" size={16} />
                  <span className="font-medium">{client?.placements} placements</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>{client?.partnership} partnership</span>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="space-y-2 pt-4 border-t border-border">
                {Object.entries(client?.successMetrics)?.map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground capitalize">
                      {key?.replace(/([A-Z])/g, ' $1')?.trim()}:
                    </span>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ClientShowcase;