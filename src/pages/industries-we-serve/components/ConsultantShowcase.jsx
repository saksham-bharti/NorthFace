import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ConsultantShowcase = () => {
  const consultants = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Technology Practice Lead",
      specialization: "Software Engineering & AI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=compress&cs=tinysrgb&w=400",
      experience: "12 years",
      placements: "450+",
      successRate: "96%",
      industries: ["Technology", "Fintech", "Healthcare IT"],
      certifications: ["SHRM-CP", "Technical Recruiting Certified"],
      testimonial: "Sarah\'s deep understanding of emerging technologies helped us build our entire AI team. Her network is unmatched.",
      clientCompany: "TechFlow Solutions"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Healthcare Practice Director",
      specialization: "Clinical & Life Sciences",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=compress&cs=tinysrgb&w=400",
      experience: "15 years",
      placements: "380+",
      successRate: "94%",
      industries: ["Healthcare", "Pharmaceuticals", "Medical Devices"],
      certifications: ["Healthcare Recruiting Specialist", "AIRS Certified"],
      testimonial: "Michael\'s expertise in clinical research recruitment is exceptional. He understands both the technical and regulatory aspects.",
      clientCompany: "BioMed Innovations"
    },
    {
      id: 3,
      name: "Jennifer Park",
      title: "Financial Services Lead",
      specialization: "Investment Banking & Fintech",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "10 years",
      placements: "320+",
      successRate: "97%",
      industries: ["Investment Banking", "Private Equity", "Fintech"],
      certifications: ["CFA Institute Partner", "Financial Recruiting Expert"],
      testimonial: "Jennifer's knowledge of financial markets and talent landscape is remarkable. She delivered exactly what we needed.",
      clientCompany: "Capital Growth Partners"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Manufacturing Practice Lead",
      specialization: "Engineering & Operations",
      image: "https://images.pixabay.com/photos/2507027/pexels-photo-2507027.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "14 years",
      placements: "290+",
      successRate: "91%",
      industries: ["Manufacturing", "Automotive", "Aerospace"],
      certifications: ["Manufacturing Leadership Council", "Lean Six Sigma"],
      testimonial: "David\'s engineering background gives him unique insight into what we need. His placements consistently exceed expectations.",
      clientCompany: "Precision Manufacturing Corp"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-6">
            Meet Our Industry Experts
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Our specialized consultants combine deep industry knowledge with proven recruitment expertise 
            to deliver exceptional results for both candidates and employers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {consultants?.map((consultant) => (
            <div 
              key={consultant?.id}
              className="bg-card rounded-2xl overflow-hidden card-premium elevation-hover"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image 
                        src={consultant?.image}
                        alt={consultant?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{consultant?.name}</h3>
                    <p className="text-primary font-medium mb-2">{consultant?.title}</p>
                    <p className="text-muted-foreground text-sm mb-3">{consultant?.specialization}</p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{consultant?.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{consultant?.placements} placements</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{consultant?.successRate}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{consultant?.placements}</div>
                    <div className="text-xs text-muted-foreground">Placements</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{consultant?.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Industry Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {consultant?.industries?.map((industry, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {consultant?.certifications?.map((cert, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Quote" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground text-sm italic mb-2">
                        "{consultant?.testimonial}"
                      </p>
                      <p className="text-xs font-medium text-foreground">
                        — {consultant?.clientCompany}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Profile
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-gradient-elevation"
                  >
                    Connect Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Consultants
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultantShowcase;