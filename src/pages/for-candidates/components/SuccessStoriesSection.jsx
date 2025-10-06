import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      previousRole: "Junior Developer",
      currentRole: "Senior Software Engineer",
      company: "Google",
      salaryIncrease: "$45K",
      timeframe: "6 months",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: `I was stuck in a junior role for 3 years with limited growth opportunities. NorthStep's career assessment revealed my true potential and matched me with roles that aligned with my skills. The interview preparation was game-changing - I felt confident and prepared for every conversation.`,
      highlights: [
        "300% salary increase",
        "Promoted to team lead within 1 year",
        "Relocated to dream city",
        "Work-life balance improved"
      ],
      skills: ["React", "Python", "AWS", "Leadership"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      previousRole: "Marketing Coordinator",
      currentRole: "Product Marketing Manager",
      company: "Stripe",
      salaryIncrease: "$35K",
      timeframe: "4 months",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: `After 5 years in traditional marketing, I wanted to transition to product marketing but didn't know where to start. NorthStep's career tools helped me identify transferable skills and connected me with a recruiter who specialized in product roles. The personalized guidance made all the difference.`,
      highlights: [
        "Successful career pivot",
        "40% salary increase",
        "Remote work opportunity",
        "Equity package included"
      ],
      skills: ["Product Strategy", "Analytics", "Go-to-Market", "Data Analysis"]
    },
    {
      id: 3,
      name: "Emily Johnson",
      previousRole: "Freelance Designer",
      currentRole: "Senior UX Designer",
      company: "Airbnb",
      salaryIncrease: "$55K",
      timeframe: "3 months",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: `Freelancing was great for flexibility but terrible for financial stability. I wanted to join a product team but wasn't sure how to position my freelance experience. NorthStep helped me create a compelling narrative and connected me with companies that valued my diverse client experience.`,
      highlights: [
        "Stable full-time position",
        "Comprehensive benefits",
        "Creative freedom maintained",
        "Mentorship opportunities"
      ],
      skills: ["Figma", "User Research", "Design Systems", "Prototyping"]
    }
  ];

  const currentStory = successStories?.[activeStory];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-brand-headline">
            Career Transformation <span className="text-brand-primary">Stories</span>
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Real professionals, real results. See how NorthStep has helped thousands of candidates take their next step north in their careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Story Navigation */}
          <div className="space-y-4">
            {successStories?.map((story, index) => (
              <button
                key={story?.id}
                onClick={() => setActiveStory(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 elevation-hover ${
                  activeStory === index
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'bg-card hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={story?.avatar}
                    alt={story?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{story?.name}</h3>
                    <p className={`text-sm ${
                      activeStory === index ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {story?.previousRole} → {story?.currentRole}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Icon 
                        name="TrendingUp" 
                        size={14} 
                        className={activeStory === index ? 'text-white/60' : 'text-success'} 
                      />
                      <span className={`text-xs ${
                        activeStory === index ? 'text-white/80' : 'text-success'
                      }`}>
                        +{story?.salaryIncrease}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Story Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 card-premium animate-scale-in">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={currentStory?.avatar}
                    alt={currentStory?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{currentStory?.name}</h3>
                    <p className="text-muted-foreground">
                      {currentStory?.previousRole} at Previous Company
                    </p>
                    <p className="text-primary font-medium">
                      Now {currentStory?.currentRole} at {currentStory?.company}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">{currentStory?.salaryIncrease}</div>
                    <div className="text-sm text-muted-foreground">Salary Increase</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{currentStory?.timeframe}</div>
                    <div className="text-sm text-muted-foreground">Time to Placement</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">{currentStory?.company}</div>
                    <div className="text-sm text-muted-foreground">Dream Company</div>
                  </div>
                </div>

                {/* Story */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Success Story</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "{currentStory?.story}"
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentStory?.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStory?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-elevation-subtle rounded-2xl p-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground">
              Join thousands of professionals who have transformed their careers with NorthStep. Your next opportunity is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-elevation hover:shadow-elevation"
                iconName="UserPlus"
                iconPosition="left"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View More Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;