import React from 'react';

import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 north-arrow-bg opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-elevation-subtle px-4 py-2 rounded-full">
                <Icon name="TrendingUp" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Your Career Catalyst</span>
              </div>
              
              <h1 className="text-brand-hero">
                Take Your Next
                <span className="text-brand-primary block">Step North</span>
              </h1>
              
              <p className="text-brand-subheading max-w-lg">
                Transform your career with personalized job matching, expert guidance, and comprehensive development tools. Join thousands of professionals who've elevated their careers with NorthStep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-elevation hover:shadow-elevation"
                iconName="UserPlus"
                iconPosition="left"
              >
                Create Your Profile
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                iconName="Search"
                iconPosition="left"
              >
                Browse Opportunities
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Placement Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$15K</div>
                <div className="text-sm text-muted-foreground">Avg. Salary Increase</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 card-premium">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-elevation rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Profile Completion</span>
                    <span className="text-sm font-medium text-success">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-elevation h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm">5 New Job Matches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MessageCircle" size={16} className="text-primary" />
                    <span className="text-sm">3 Recruiter Messages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-secondary" />
                    <span className="text-sm">Interview Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;