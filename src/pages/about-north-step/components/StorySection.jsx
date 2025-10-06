import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "NorthStep was founded with a vision to transform recruitment from transactional to transformational.",
      icon: "Rocket"
    },
    {
      year: "2019",
      title: "First 100 Placements",
      description: "Achieved our first major milestone with 100 successful strategic placements across technology and finance sectors.",
      icon: "Target"
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Named \'Recruitment Partner of the Year\' by the National Talent Acquisition Association.",
      icon: "Award"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded our reach to serve Fortune 500 companies with specialized industry verticals.",
      icon: "Globe"
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description: "Launched AI-powered matching technology and comprehensive career development platform.",
      icon: "Zap"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Brand Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-brand-headline mb-6">
              The NorthStep Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                NorthStep was born from a simple yet powerful realization: the best career moves and hiring decisions aren't just about matching skills to requirements – they're about understanding potential, ambition, and strategic fit.
              </p>
              <p>
                Our founders, seasoned recruitment professionals with decades of combined experience, witnessed too many talented individuals stuck in roles that didn't challenge them, and too many companies struggling to find candidates who could truly drive their vision forward.
              </p>
              <p>
                We created NorthStep to bridge this gap – to be the strategic partner that understands both sides of the equation and creates transformational outcomes that benefit everyone involved.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-elevation-subtle rounded-xl border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Compass" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our North Star</h3>
                  <p className="text-muted-foreground">
                    Every placement should be a strategic advancement – a decisive step north that elevates careers and transforms organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-elevation rounded-2xl transform rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="NorthStep team collaboration"
                className="relative rounded-2xl w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-brand-headline mb-4">Our Journey</h2>
            <p className="text-brand-subheading max-w-2xl mx-auto">
              From startup vision to industry leader – key milestones that shaped our growth
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones?.map((milestone, index) => (
                <div key={milestone?.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-card rounded-xl p-6 shadow-sm border border-border elevation-hover">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-elevation rounded-lg flex items-center justify-center">
                          <Icon name={milestone?.icon} size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{milestone?.year}</div>
                          <h3 className="text-xl font-semibold text-foreground">{milestone?.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{milestone?.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;