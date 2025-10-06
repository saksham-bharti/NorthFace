import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CareerToolsSection = () => {
  const [activeTab, setActiveTab] = useState('assessment');

  const tools = [
    {
      id: 'assessment',
      name: 'Career Assessment',
      icon: 'Target',
      description: 'Discover your strengths and ideal career path',
      features: ['Personality Analysis', 'Skills Evaluation', 'Career Matching', 'Growth Recommendations']
    },
    {
      id: 'salary',
      name: 'Salary Calculator',
      icon: 'DollarSign',
      description: 'Get accurate salary insights for your role',
      features: ['Market Analysis', 'Location Comparison', 'Experience Factors', 'Negotiation Tips']
    },
    {
      id: 'interview',
      name: 'Interview Simulator',
      icon: 'Video',
      description: 'Practice with AI-powered interview sessions',
      features: ['Video Practice', 'Question Bank', 'Performance Analytics', 'Feedback Reports']
    },
    {
      id: 'resume',
      name: 'Resume Optimizer',
      icon: 'FileText',
      description: 'AI-powered resume enhancement and ATS optimization',
      features: ['ATS Optimization', 'Keyword Analysis', 'Format Suggestions', 'Industry Templates']
    }
  ];

  const activeTool = tools?.find(tool => tool?.id === activeTab);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-brand-headline">
            Career Development <span className="text-brand-primary">Tools</span>
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Accelerate your career growth with our comprehensive suite of professional development tools designed to give you a competitive edge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Navigation */}
          <div className="space-y-4">
            {tools?.map((tool) => (
              <button
                key={tool?.id}
                onClick={() => setActiveTab(tool?.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 elevation-hover ${
                  activeTab === tool?.id
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'bg-background hover:bg-card'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeTab === tool?.id
                      ? 'bg-white/20' :'bg-primary/10'
                  }`}>
                    <Icon 
                      name={tool?.icon} 
                      size={24} 
                      className={activeTab === tool?.id ? 'text-white' : 'text-primary'} 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{tool?.name}</h3>
                    <p className={`text-sm ${
                      activeTab === tool?.id ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {tool?.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Tool Content */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-2xl p-8 card-premium animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-elevation rounded-xl flex items-center justify-center">
                    <Icon name={activeTool?.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{activeTool?.name}</h3>
                    <p className="text-muted-foreground">{activeTool?.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {activeTool?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-success" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Mock Tool Interface */}
                <div className="bg-muted rounded-xl p-6 space-y-4">
                  {activeTab === 'assessment' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Assessment Progress</span>
                        <span className="text-primary">7/10 Questions</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-3">
                        <div className="bg-gradient-elevation h-3 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "What type of work environment energizes you most?"
                      </p>
                    </div>
                  )}

                  {activeTab === 'salary' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-background rounded-lg">
                          <div className="text-2xl font-bold text-primary">$95,000</div>
                          <div className="text-sm text-muted-foreground">Market Average</div>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <div className="text-2xl font-bold text-success">$110,000</div>
                          <div className="text-sm text-muted-foreground">Your Potential</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'interview' && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                          <Icon name="Play" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Behavioral Interview Practice</h4>
                          <p className="text-sm text-muted-foreground">15 minutes • Intermediate Level</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'resume' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">ATS Compatibility Score</span>
                        <span className="text-success font-bold">87%</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name="AlertCircle" size={16} className="text-warning" />
                          <span className="text-sm">Add 3 more relevant keywords</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-sm">Format optimized for ATS</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Button 
                  variant="default" 
                  className="w-full bg-gradient-elevation hover:shadow-elevation"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Start {activeTool?.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerToolsSection;