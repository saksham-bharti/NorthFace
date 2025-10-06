import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const featuredStories = [
    {
      id: 1,
      type: "Career Transformation",
      title: "From Mid-Level Developer to Tech Lead",
      candidate: {
        name: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        previousRole: "Senior Software Developer",
        currentRole: "Technical Lead",
        company: "InnovateTech Solutions"
      },
      metrics: {
        salaryIncrease: "42%",
        timeToHire: "18 days",
        careerLevel: "+2 levels"
      },
      challenge: `Sarah was a talented developer stuck in a mid-level position with limited growth opportunities. Despite her technical skills, she struggled to transition into leadership roles and felt undervalued in her current organization.`,
      solution: `Our team identified Sarah's leadership potential and connected her with InnovateTech Solutions, who were specifically looking for technical leaders. We provided interview coaching focused on demonstrating leadership capabilities and negotiated a package that reflected her true value.`,
      outcome: `Sarah successfully transitioned to a Technical Lead role with a 42% salary increase and now manages a team of 8 developers. She's been promoted twice since joining and is on track for a Director position.`,
      testimonial: `"NorthStep didn't just find me a job - they helped me discover my leadership potential and connected me with a company that truly values growth. The coaching and support throughout the process was exceptional."`,
      timeline: [
        { phase: "Initial Consultation", duration: "Day 1", description: "Career assessment and goal setting" },
        { phase: "Profile Optimization", duration: "Days 2-5", description: "Resume enhancement and LinkedIn optimization" },
        { phase: "Company Matching", duration: "Days 6-10", description: "Identified 3 perfect-fit opportunities" },
        { phase: "Interview Process", duration: "Days 11-15", description: "Coaching and interview coordination" },
        { phase: "Offer Negotiation", duration: "Days 16-18", description: "Secured optimal compensation package" }
      ]
    },
    {
      id: 2,
      type: "Strategic Hiring",
      title: "Building a World-Class Engineering Team",
      company: {
        name: "GrowthScale Ventures",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
        industry: "FinTech Startup",
        size: "50-100 employees"
      },
      challenge: `GrowthScale Ventures needed to rapidly scale their engineering team from 5 to 25 developers within 6 months to meet aggressive product deadlines. They struggled to attract senior talent and compete with larger tech companies.`,
      solution: `We developed a comprehensive talent acquisition strategy, including employer branding, competitive compensation benchmarking, and a streamlined interview process. Our team leveraged industry connections to identify passive candidates.`,
      outcome: `Successfully placed 18 engineers within 5 months, including 3 senior architects and 2 team leads. The new hires contributed to a 300% increase in development velocity and successful product launch.`,
      metrics: {
        hires: "18 engineers",
        timeframe: "5 months",
        retention: "94%",
        productivity: "+300%"
      },
      testimonial: `"NorthStep transformed our hiring process and helped us build an exceptional engineering team. Their understanding of our culture and technical needs was remarkable."`,
      contact: "Jennifer Martinez, CTO"
    },
    {
      id: 3,
      type: "Executive Placement",
      title: "C-Suite Leadership for Digital Transformation",
      candidate: {
        name: "Michael Rodriguez",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        previousRole: "VP of Technology",
        currentRole: "Chief Technology Officer",
        company: "Legacy Manufacturing Corp"
      },
      challenge: `A traditional manufacturing company needed a visionary CTO to lead their digital transformation initiative. They required someone who could bridge the gap between legacy systems and modern technology while managing a $50M technology budget.`,
      solution: `We identified Michael, who had successfully led similar transformations at two previous companies. Our team facilitated extensive cultural fit interviews and negotiated a comprehensive executive package including equity and performance bonuses.`,
      outcome: `Michael successfully implemented a 3-year digital transformation roadmap, resulting in 40% operational efficiency gains and $25M in cost savings. The company's technology infrastructure is now industry-leading.`,
      metrics: {
        budgetManaged: "$50M",
        efficiencyGain: "40%",
        costSavings: "$25M",
        timeToImpact: "6 months"
      }
    }
  ];

  const currentStory = featuredStories?.[activeStory];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-hero mb-6">
            Transformational Success Stories
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Real outcomes, real impact. Discover how we've helped professionals advance their careers and companies build exceptional teams.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featuredStories?.map((story, index) => (
            <button
              key={story?.id}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {story?.type}
            </button>
          ))}
        </div>

        {/* Featured Story Content */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 card-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Story Details */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Icon name="Star" size={16} className="mr-2" />
                  {currentStory?.type}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {currentStory?.title}
                </h3>
              </div>

              {/* Candidate/Company Info */}
              {currentStory?.candidate && (
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <Image
                    src={currentStory?.candidate?.image}
                    alt={currentStory?.candidate?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{currentStory?.candidate?.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {currentStory?.candidate?.previousRole} → {currentStory?.candidate?.currentRole}
                    </p>
                    <p className="text-sm font-medium text-primary">{currentStory?.candidate?.company}</p>
                  </div>
                </div>
              )}

              {currentStory?.company && (
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <Image
                    src={currentStory?.company?.logo}
                    alt={currentStory?.company?.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{currentStory?.company?.name}</h4>
                    <p className="text-sm text-muted-foreground">{currentStory?.company?.industry}</p>
                    <p className="text-sm font-medium text-primary">{currentStory?.company?.size}</p>
                  </div>
                </div>
              )}

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentStory?.metrics)?.map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-gradient-elevation-subtle rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              {currentStory?.testimonial && (
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                  <p className="text-foreground italic mb-2">"{currentStory?.testimonial}"</p>
                  {currentStory?.contact && (
                    <cite className="text-sm text-muted-foreground">— {currentStory?.contact}</cite>
                  )}
                </blockquote>
              )}
            </div>

            {/* Story Process */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="AlertCircle" size={20} className="mr-2 text-red-500" />
                  The Challenge
                </h4>
                <p className="text-muted-foreground leading-relaxed">{currentStory?.challenge}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Lightbulb" size={20} className="mr-2 text-yellow-500" />
                  Our Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed">{currentStory?.solution}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Trophy" size={20} className="mr-2 text-green-500" />
                  The Outcome
                </h4>
                <p className="text-muted-foreground leading-relaxed">{currentStory?.outcome}</p>
              </div>

              {/* Timeline */}
              {currentStory?.timeline && (
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Clock" size={20} className="mr-2 text-blue-500" />
                    Process Timeline
                  </h4>
                  <div className="space-y-4">
                    {currentStory?.timeline?.map((phase, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{phase?.phase}</div>
                          <div className="text-sm text-primary font-medium">{phase?.duration}</div>
                          <div className="text-sm text-muted-foreground">{phase?.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            className="bg-gradient-elevation hover:shadow-elevation"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;