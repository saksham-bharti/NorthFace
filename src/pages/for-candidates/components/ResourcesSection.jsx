import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ResourcesSection = () => {
  const [activeCategory, setActiveCategory] = useState('guides');

  const categories = [
    { id: 'guides', name: 'Career Guides', icon: 'BookOpen' },
    { id: 'templates', name: 'Templates', icon: 'FileText' },
    { id: 'webinars', name: 'Webinars', icon: 'Video' },
    { id: 'tools', name: 'Tools', icon: 'Settings' }
  ];

  const resources = {
    guides: [
      {
        id: 1,
        title: "The Complete Guide to Career Transitions",
        description: "Step-by-step roadmap for successfully changing careers, including skill assessment and networking strategies.",
        downloadCount: "12.5K",
        readTime: "15 min read",
        category: "Career Change",
        featured: true
      },
      {
        id: 2,
        title: "Salary Negotiation Mastery",
        description: "Proven techniques to negotiate better compensation packages and advance your earning potential.",
        downloadCount: "8.2K",
        readTime: "12 min read",
        category: "Compensation"
      },
      {
        id: 3,
        title: "Remote Work Success Strategies",
        description: "Essential tips for thriving in remote and hybrid work environments while maintaining productivity.",
        downloadCount: "15.7K",
        readTime: "10 min read",
        category: "Remote Work"
      }
    ],
    templates: [
      {
        id: 1,
        title: "ATS-Optimized Resume Templates",
        description: "Professional resume templates designed to pass Applicant Tracking Systems and impress recruiters.",
        downloadCount: "25.3K",
        format: "PDF, DOCX",
        category: "Resume",
        featured: true
      },
      {
        id: 2,
        title: "Cover Letter Templates",
        description: "Customizable cover letter templates for various industries and career levels.",
        downloadCount: "18.9K",
        format: "DOCX",
        category: "Cover Letter"
      },
      {
        id: 3,
        title: "LinkedIn Profile Optimization Kit",
        description: "Complete templates and checklists to create a compelling LinkedIn profile that attracts recruiters.",
        downloadCount: "22.1K",
        format: "PDF",
        category: "LinkedIn"
      }
    ],
    webinars: [
      {
        id: 1,
        title: "Mastering Virtual Interviews",
        description: "Live session covering best practices for video interviews, technical setup, and common pitfalls to avoid.",
        attendees: "2.1K",
        duration: "60 min",
        date: "Nov 15, 2024",
        featured: true
      },
      {
        id: 2,
        title: "Building Your Personal Brand",
        description: "Learn how to develop and showcase your professional brand across digital platforms.",
        attendees: "1.8K",
        duration: "45 min",
        date: "Nov 22, 2024"
      },
      {
        id: 3,
        title: "Tech Industry Career Paths",
        description: "Explore different career trajectories in technology and how to position yourself for growth.",
        attendees: "3.2K",
        duration: "75 min",
        date: "Dec 5, 2024"
      }
    ],
    tools: [
      {
        id: 1,
        title: "Career Assessment Tool",
        description: "Comprehensive assessment to identify your strengths, interests, and ideal career paths.",
        users: "45K+",
        type: "Interactive",
        category: "Assessment",
        featured: true
      },
      {
        id: 2,
        title: "Salary Comparison Calculator",
        description: "Compare salaries across different roles, locations, and experience levels with real market data.",
        users: "32K+",
        type: "Calculator",
        category: "Salary"
      },
      {
        id: 3,
        title: "Interview Question Generator",
        description: "Practice with industry-specific interview questions tailored to your role and experience level.",
        users: "28K+",
        type: "Practice Tool",
        category: "Interview Prep"
      }
    ]
  };

  const currentResources = resources?.[activeCategory] || [];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-brand-headline">
            Career Development <span className="text-brand-primary">Resources</span>
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Access our comprehensive library of career resources, templates, and tools designed to accelerate your professional growth.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 elevation-hover ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-background text-foreground hover:bg-card'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {currentResources?.map((resource) => (
            <div
              key={resource?.id}
              className={`bg-background rounded-xl p-6 card-premium elevation-hover ${
                resource?.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="space-y-4">
                {resource?.featured && (
                  <div className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="Star" size={12} />
                    <span>Featured</span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-foreground">{resource?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {resource?.description}
                </p>

                {/* Resource Metadata */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {resource?.downloadCount && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={14} />
                      <span>{resource?.downloadCount} downloads</span>
                    </div>
                  )}
                  {resource?.readTime && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{resource?.readTime}</span>
                    </div>
                  )}
                  {resource?.format && (
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={14} />
                      <span>{resource?.format}</span>
                    </div>
                  )}
                  {resource?.attendees && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{resource?.attendees} attendees</span>
                    </div>
                  )}
                  {resource?.duration && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Play" size={14} />
                      <span>{resource?.duration}</span>
                    </div>
                  )}
                  {resource?.users && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{resource?.users} users</span>
                    </div>
                  )}
                  {resource?.type && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Zap" size={14} />
                      <span>{resource?.type}</span>
                    </div>
                  )}
                </div>

                {resource?.category && (
                  <div className="inline-block">
                    <span className="px-3 py-1 bg-muted text-foreground text-xs rounded-full">
                      {resource?.category}
                    </span>
                  </div>
                )}

                {resource?.date && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Calendar" size={14} className="text-primary" />
                    <span className="text-primary font-medium">{resource?.date}</span>
                  </div>
                )}

                <div className="pt-4">
                  <Button 
                    variant="default" 
                    fullWidth
                    className="bg-gradient-elevation hover:shadow-elevation"
                    iconName={
                      activeCategory === 'guides' ? 'BookOpen' :
                      activeCategory === 'templates' ? 'Download' :
                      activeCategory === 'webinars'? 'Calendar' : 'ExternalLink'
                    }
                    iconPosition="left"
                  >
                    {activeCategory === 'guides' ? 'Read Guide' :
                     activeCategory === 'templates' ? 'Download Template' :
                     activeCategory === 'webinars'? 'Register Now' : 'Use Tool'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-elevation-subtle rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <Icon name="Mail" size={48} className="text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">
              Stay Updated with Career Insights
            </h3>
            <p className="text-muted-foreground">
              Get weekly career tips, industry insights, and exclusive resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                variant="default"
                className="bg-gradient-elevation hover:shadow-elevation"
                iconName="Send"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime. 25,000+ professionals already subscribed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;