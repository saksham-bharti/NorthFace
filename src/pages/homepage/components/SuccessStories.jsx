import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 1,
      type: 'candidate',
      title: 'From Mid-Level to Tech Lead',
      candidate: {
        name: 'Sarah Chen',
        previousRole: 'Senior Software Developer',
        currentRole: 'Technical Lead',
        company: 'InnovateTech Solutions',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
        industry: 'Technology'
      },
      transformation: {
        salaryIncrease: '$32,000',
        timeframe: '3 weeks',
        benefits: ['Remote Work', 'Equity Package', 'Leadership Role', 'Team of 8']
      },
      quote: `NorthStep didn't just find me a job – they helped me discover my leadership potential. The personalized coaching and strategic positioning made all the difference in landing my dream role.`,
      results: [
        { metric: 'Salary Increase', value: '45%' },
        { metric: 'Team Size', value: '8 Engineers' },
        { metric: 'Equity Package', value: '0.5%' },
        { metric: 'Remote Flexibility', value: '100%' }
      ]
    },
    {
      id: 2,
      type: 'employer',title: 'Scaling Engineering Team',
      company: {
        name: 'GrowthCorp Dynamics',industry: 'FinTech',size: '200-500 employees',logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center'
      },
      challenge: 'Needed to hire 12 senior engineers in 6 months to support rapid product expansion',solution: 'Strategic talent pipeline development with pre-vetted candidates and streamlined interview process',
      results: [
        { metric: 'Positions Filled', value: '12/12' },
        { metric: 'Time Reduction', value: '60%' },
        { metric: 'Quality Score', value: '9.2/10' },
        { metric: 'Retention Rate', value: '100%' }
      ],
      quote: `NorthStep transformed our hiring process. They delivered exceptional candidates faster than we thought possible, and every hire has exceeded expectations.`,
      contact: {
        name: 'Michael Rodriguez',role: 'VP of Engineering',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
      }
    },
    {
      id: 3,
      type: 'candidate',title: 'Career Pivot Success',
      candidate: {
        name: 'Jennifer Park',previousRole: 'Marketing Manager',currentRole: 'Product Manager',company: 'Digital Innovations Inc',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',industry: 'Technology'
      },
      transformation: {
        salaryIncrease: '$18,000',timeframe: '5 weeks',
        benefits: ['Career Change', 'Skill Development', 'Growth Path', 'Mentorship']
      },
      quote: `I wanted to transition into product management but didn't know where to start. NorthStep provided the guidance, connections, and confidence I needed to make the leap successfully.`,
      results: [
        { metric: 'Career Change', value: 'Marketing → Product' },
        { metric: 'Salary Increase', value: '28%' },
        { metric: 'Learning Budget', value: '$5,000' },
        { metric: 'Mentorship', value: 'Senior PM' }
      ]
    }
  ];

  const currentStory = stories?.[activeStory];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-elevation-subtle px-4 py-2 rounded-full mb-6">
            <Icon name="Trophy" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Success Stories</span>
          </div>
          
          <h2 className="text-brand-headline mb-4">
            Real Transformations, Measurable Results
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Every placement tells a story of growth, achievement, and strategic career advancement. 
            See how we've helped professionals and companies reach their goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Story Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {stories?.map((story, index) => (
              <button
                key={story?.id}
                onClick={() => setActiveStory(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeStory === index
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-muted-foreground/20 hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    story?.type === 'candidate' ? 'bg-gradient-elevation' : 'bg-secondary'
                  }`}>
                    <Icon 
                      name={story?.type === 'candidate' ? 'User' : 'Building2'} 
                      size={20} 
                      className="text-white" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm mb-1 ${
                      activeStory === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {story?.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {story?.type === 'candidate' 
                        ? `${story?.candidate?.name} • ${story?.candidate?.industry}`
                        : `${story?.company?.name} • ${story?.company?.industry}`
                      }
                    </p>
                  </div>
                  {activeStory === index && (
                    <Icon name="ChevronRight" size={16} className="text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Story Content */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              {currentStory?.type === 'candidate' ? (
                // Candidate Story
                (<div className="space-y-8">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Icon name="User" size={24} className="text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {currentStory?.title}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-primary">
                          {currentStory?.candidate?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {currentStory?.candidate?.previousRole} → {currentStory?.candidate?.currentRole}
                        </p>
                        <p className="text-sm text-secondary font-medium">
                          {currentStory?.candidate?.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Transformation Highlights */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentStory?.results?.map((result, index) => (
                      <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-primary mb-1">
                          {result?.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result?.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="relative">
                    <Icon name="Quote" size={24} className="text-primary mb-4" />
                    <p className="text-lg text-foreground italic leading-relaxed">
                      {currentStory?.quote}
                    </p>
                  </blockquote>
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits Achieved</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStory?.transformation?.benefits?.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-success/10 text-success text-sm rounded-full font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>)
              ) : (
                // Employer Story
                (<div className="space-y-8">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center">
                      <Icon name="Building2" size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {currentStory?.title}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-secondary">
                          {currentStory?.company?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {currentStory?.company?.industry} • {currentStory?.company?.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentStory?.results?.map((result, index) => (
                      <div key={index} className="text-center p-4 bg-secondary/5 rounded-lg">
                        <div className="text-lg font-bold text-secondary mb-1">
                          {result?.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result?.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Challenge & Solution */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="AlertCircle" size={16} className="text-warning mr-2" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {currentStory?.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {currentStory?.solution}
                      </p>
                    </div>
                  </div>
                  {/* Quote */}
                  <blockquote className="relative">
                    <Icon name="Quote" size={24} className="text-secondary mb-4" />
                    <p className="text-lg text-foreground italic leading-relaxed mb-4">
                      {currentStory?.quote}
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary">
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <Icon name="User" size={16} className="text-muted-foreground" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {currentStory?.contact?.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {currentStory?.contact?.role}
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>)
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elevation-subtle rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of professionals and hundreds of companies who have achieved 
              exceptional results through our strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/success-stories">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="Trophy"
                  iconPosition="left"
                >
                  View All Stories
                </Button>
              </Link>
              <Link to="/contact-consultation">
                <Button 
                  variant="default" 
                  className="bg-gradient-elevation hover:shadow-elevation"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;