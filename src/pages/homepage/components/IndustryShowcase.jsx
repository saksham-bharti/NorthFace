import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IndustryShowcase = () => {
  const industries = [
    {
      id: 'technology',
      name: 'Technology',
      icon: 'Laptop',
      description: 'From startups to enterprise, we connect tech talent with innovative companies driving digital transformation.',
      specializations: ['Software Engineering', 'Data Science', 'DevOps', 'Product Management'],
      stats: {
        placements: '850+',
        avgIncrease: '$28K',
        topRole: 'Senior Full Stack Developer'
      },
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: 'TrendingUp',
      description: 'Strategic placements in banking, investment, and fintech companies seeking analytical and leadership talent.',
      specializations: ['Investment Banking', 'Risk Management', 'Financial Analysis', 'Compliance'],
      stats: {
        placements: '620+',
        avgIncrease: '$35K',
        topRole: 'Senior Financial Analyst'
      },
      color: 'secondary',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'Heart',
      description: 'Connecting healthcare professionals with organizations focused on improving patient outcomes and medical innovation.',
      specializations: ['Clinical Research', 'Healthcare IT', 'Medical Device', 'Pharmaceuticals'],
      stats: {
        placements: '420+',
        avgIncrease: '$22K',
        topRole: 'Clinical Research Manager'
      },
      color: 'success',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'Settings',
      description: 'Industrial and manufacturing expertise connecting skilled professionals with companies driving operational excellence.',
      specializations: ['Operations Management', 'Quality Assurance', 'Supply Chain', 'Engineering'],
      stats: {
        placements: '380+',
        avgIncrease: '$18K',
        topRole: 'Operations Director'
      },
      color: 'accent',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary',
        gradient: 'bg-gradient-elevation'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary',
        gradient: 'bg-secondary'
      },
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success',
        gradient: 'bg-success'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent',
        gradient: 'bg-accent'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-elevation-subtle px-4 py-2 rounded-full mb-6">
            <Icon name="Building2" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Industry Expertise</span>
          </div>
          
          <h2 className="text-brand-headline mb-4">
            Specialized Recruitment Across Key Industries
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Our deep industry knowledge and extensive networks enable us to deliver exceptional results 
            across diverse sectors. We understand the unique challenges and opportunities in each field.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {industries?.map((industry, index) => {
            const colors = getColorClasses(industry?.color);
            
            return (
              <div
                key={industry?.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500 elevation-hover"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <Icon name={industry?.icon} size={48} className="text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">{industry?.name} Industry</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 ${colors?.gradient} rounded-xl flex items-center justify-center`}>
                      <Icon name={industry?.icon} size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {industry?.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry?.description}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry?.specializations?.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className={`px-3 py-1 ${colors?.bg} ${colors?.text} text-xs rounded-full font-medium`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className={`p-4 ${colors?.bg} rounded-lg`}>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className={`text-lg font-bold ${colors?.text}`}>
                          {industry?.stats?.placements}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Placements
                        </div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${colors?.text}`}>
                          {industry?.stats?.avgIncrease}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Avg Increase
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          Top Role
                        </div>
                        <div className={`text-xs font-medium ${colors?.text}`}>
                          {industry?.stats?.topRole}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground">
              We work across many more sectors and are always expanding our expertise. 
              Let's discuss how we can support your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/industries-we-serve">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="Building2"
                  iconPosition="left"
                >
                  View All Industries
                </Button>
              </Link>
              <Link to="/contact-consultation">
                <Button 
                  variant="default" 
                  className="bg-gradient-elevation hover:shadow-elevation"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Discuss Your Needs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;