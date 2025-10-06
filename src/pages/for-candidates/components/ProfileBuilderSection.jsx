import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProfileBuilderSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Basic Information",
      description: "Personal details and contact information",
      icon: "User",
      completed: true
    },
    {
      id: 2,
      title: "Professional Experience",
      description: "Work history and achievements",
      icon: "Briefcase",
      completed: true
    },
    {
      id: 3,
      title: "Skills & Expertise",
      description: "Technical and soft skills assessment",
      icon: "Award",
      completed: false
    },
    {
      id: 4,
      title: "Career Preferences",
      description: "Job preferences and career goals",
      icon: "Target",
      completed: false
    },
    {
      id: 5,
      title: "Portfolio & Documents",
      description: "Resume, portfolio, and certifications",
      icon: "FileText",
      completed: false
    }
  ];

  const profileData = {
    completionRate: 75,
    profileViews: 234,
    recruiterInterest: 18,
    skillsAssessed: 12,
    totalSkills: 16
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-brand-headline">
            Build Your Professional <span className="text-brand-primary">Profile</span>
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Create a comprehensive profile that showcases your expertise and attracts the right opportunities. Our guided process makes it simple and effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-2xl p-6 card-premium sticky top-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - profileData?.completionRate / 100)}`}
                        className="text-primary transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{profileData?.completionRate}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">Profile Complete</h3>
                  <p className="text-sm text-muted-foreground">Almost there! Complete your profile to unlock all features.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Eye" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Profile Views</span>
                    </div>
                    <span className="font-semibold text-foreground">{profileData?.profileViews}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Recruiter Interest</span>
                    </div>
                    <span className="font-semibold text-primary">{profileData?.recruiterInterest}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Skills Verified</span>
                    </div>
                    <span className="font-semibold text-foreground">{profileData?.skillsAssessed}/{profileData?.totalSkills}</span>
                  </div>
                </div>

                <Button 
                  variant="default" 
                  fullWidth
                  className="bg-gradient-elevation hover:shadow-elevation"
                  iconName="Upload"
                  iconPosition="left"
                >
                  Upload Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Builder Steps */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {steps?.map((step, index) => (
                <div
                  key={step?.id}
                  className={`bg-background rounded-xl p-6 transition-all duration-300 elevation-hover cursor-pointer ${
                    currentStep === step?.id ? 'ring-2 ring-primary shadow-brand' : ''
                  }`}
                  onClick={() => setCurrentStep(step?.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      step?.completed 
                        ? 'bg-success text-white' 
                        : currentStep === step?.id
                        ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                    }`}>
                      {step?.completed ? (
                        <Icon name="Check" size={24} />
                      ) : (
                        <Icon name={step?.icon} size={24} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-foreground">{step?.title}</h3>
                        {step?.completed && (
                          <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                            Complete
                          </span>
                        )}
                        {currentStep === step?.id && !step?.completed && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{step?.description}</p>
                    </div>
                    
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      className={`text-muted-foreground transition-transform ${
                        currentStep === step?.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>

                  {/* Expanded Content */}
                  {currentStep === step?.id && (
                    <div className="mt-6 pt-6 border-t border-border animate-slide-up">
                      {step?.id === 1 && (
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">First Name</label>
                              <div className="p-3 bg-muted rounded-lg text-sm text-foreground">John</div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Last Name</label>
                              <div className="p-3 bg-muted rounded-lg text-sm text-foreground">Smith</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Professional Title</label>
                            <div className="p-3 bg-muted rounded-lg text-sm text-foreground">Senior Software Engineer</div>
                          </div>
                        </div>
                      )}

                      {step?.id === 2 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-foreground">Work Experience</h4>
                            <Button variant="outline" size="sm" iconName="Plus">
                              Add Experience
                            </Button>
                          </div>
                          <div className="space-y-3">
                            <div className="p-4 bg-muted rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="font-medium text-foreground">Senior Software Engineer</h5>
                                  <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                                </div>
                                <Button variant="ghost" size="sm" iconName="Edit" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {step?.id === 3 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-foreground">Skills Assessment</h4>
                            <Button variant="outline" size="sm" iconName="Plus">
                              Add Skill
                            </Button>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {['JavaScript', 'React', 'Node.js', 'Python']?.map((skill, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <span className="text-sm font-medium text-foreground">{skill}</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 h-2 bg-background rounded-full">
                                    <div 
                                      className="h-2 bg-gradient-elevation rounded-full" 
                                      style={{width: `${80 + index * 5}%`}}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-muted-foreground">Expert</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-end mt-6">
                        <Button 
                          variant="default"
                          className="bg-gradient-elevation"
                          iconName="ArrowRight"
                          iconPosition="right"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBuilderSection;