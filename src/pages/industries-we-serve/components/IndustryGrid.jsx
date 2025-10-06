import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const IndustryGrid = () => {
  const industries = [
    {
      id: 1,
      name: "Technology & Software",
      icon: "Code",
      description: "From startups to enterprise, we connect top tech talent with innovative companies driving digital transformation.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        placements: "2,500+",
        avgSalary: "$125K",
        timeToHire: "18 days"
      },
      specializations: ["Software Engineering", "DevOps", "Data Science", "Cybersecurity", "Product Management"],
      consultants: 45,
      successRate: "94%"
    },
    {
      id: 2,
      name: "Healthcare & Life Sciences",
      icon: "Heart",
      description: "Connecting healthcare professionals with leading medical institutions and life sciences organizations.",
      image: "https://images.pixabay.com/photos/2559/medical-563427_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        placements: "1,800+",
        avgSalary: "$98K",
        timeToHire: "22 days"
      },
      specializations: ["Clinical Research", "Medical Devices", "Pharmaceuticals", "Healthcare IT", "Nursing"],
      consultants: 32,
      successRate: "91%"
    },
    {
      id: 3,
      name: "Financial Services",
      icon: "TrendingUp",
      description: "Placing finance professionals in banking, investment, fintech, and insurance organizations worldwide.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=800",
      stats: {
        placements: "2,200+",
        avgSalary: "$135K",
        timeToHire: "16 days"
      },
      specializations: ["Investment Banking", "Risk Management", "Fintech", "Compliance", "Wealth Management"],
      consultants: 38,
      successRate: "96%"
    },
    {
      id: 4,
      name: "Manufacturing & Engineering",
      icon: "Settings",
      description: "Supporting manufacturing excellence through strategic placement of engineering and operations talent.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        placements: "1,600+",
        avgSalary: "$89K",
        timeToHire: "25 days"
      },
      specializations: ["Mechanical Engineering", "Process Improvement", "Quality Assurance", "Supply Chain", "Automation"],
      consultants: 28,
      successRate: "89%"
    },
    {
      id: 5,
      name: "Marketing & Sales",
      icon: "Megaphone",
      description: "Building high-performing sales and marketing teams that drive revenue growth and brand success.",
      image: "https://images.pixabay.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        placements: "1,900+",
        avgSalary: "$92K",
        timeToHire: "20 days"
      },
      specializations: ["Digital Marketing", "Sales Leadership", "Brand Management", "Growth Marketing", "Customer Success"],
      consultants: 35,
      successRate: "93%"
    },
    {
      id: 6,
      name: "Energy & Utilities",
      icon: "Zap",
      description: "Powering the future with renewable energy and traditional utility sector talent placement expertise.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=compress&cs=tinysrgb&w=800",
      stats: {
        placements: "1,200+",
        avgSalary: "$105K",
        timeToHire: "28 days"
      },
      specializations: ["Renewable Energy", "Power Generation", "Grid Management", "Environmental Engineering", "Project Management"],
      consultants: 22,
      successRate: "87%"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-6">
            Our Industry Expertise
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Deep sector knowledge combined with proven recruitment methodologies 
            delivers exceptional results across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries?.map((industry) => (
            <div 
              key={industry?.id}
              className="bg-card rounded-2xl overflow-hidden card-premium elevation-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={industry?.image}
                  alt={industry?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={industry?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{industry?.name}</h3>
                      <div className="flex items-center space-x-4 text-white/80 text-sm">
                        <span>{industry?.consultants} Consultants</span>
                        <span>{industry?.successRate} Success Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry?.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{industry?.stats?.placements}</div>
                    <div className="text-xs text-muted-foreground">Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{industry?.stats?.avgSalary}</div>
                    <div className="text-xs text-muted-foreground">Avg Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{industry?.stats?.timeToHire}</div>
                    <div className="text-xs text-muted-foreground">Time to Hire</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry?.specializations?.map((spec, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Opportunities
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:bg-primary/10"
                  >
                    Meet Our Team
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;