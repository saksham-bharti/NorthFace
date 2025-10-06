import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const JobMatchingSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');

  const experienceOptions = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior Level (6-10 years)' },
    { value: 'executive', label: 'Executive (10+ years)' }
  ];

  const salaryOptions = [
    { value: '50-75', label: '$50K - $75K' },
    { value: '75-100', label: '$75K - $100K' },
    { value: '100-150', label: '$100K - $150K' },
    { value: '150+', label: '$150K+' }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      remote: true,
      posted: "2 days ago",
      match: 95,
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateCorp",
      location: "New York, NY",
      salary: "$110K - $140K",
      type: "Full-time",
      remote: false,
      posted: "1 day ago",
      match: 88,
      skills: ["Product Strategy", "Analytics", "Agile", "Leadership"],
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio Pro",
      location: "Austin, TX",
      salary: "$85K - $110K",
      type: "Full-time",
      remote: true,
      posted: "3 days ago",
      match: 82,
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=64&h=64&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-brand-headline">
            AI-Powered <span className="text-brand-primary">Job Matching</span>
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Our intelligent matching algorithm connects you with opportunities that align with your skills, experience, and career goals.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-card rounded-2xl p-8 card-premium mb-12">
          <div className="grid lg:grid-cols-4 gap-4 mb-6">
            <Input
              type="search"
              placeholder="Job title, skills, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="lg:col-span-1"
            />
            
            <Input
              type="text"
              placeholder="Location or Remote"
              value={location}
              onChange={(e) => setLocation(e?.target?.value)}
            />
            
            <Select
              placeholder="Experience Level"
              options={experienceOptions}
              value={experience}
              onChange={setExperience}
            />
            
            <Select
              placeholder="Salary Range"
              options={salaryOptions}
              value={salary}
              onChange={setSalary}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-elevation hover:shadow-elevation"
              iconName="Search"
              iconPosition="left"
            >
              Find Matching Jobs
            </Button>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Briefcase" size={16} />
                <span>2,847 active jobs</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={16} />
                <span>156 new this week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Top Matches for You
            </h3>
            <Button variant="outline" size="sm">
              View All Jobs
            </Button>
          </div>

          <div className="grid gap-6">
            {featuredJobs?.map((job) => (
              <div key={job?.id} className="bg-card rounded-xl p-6 card-premium elevation-hover">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job?.logo}
                      alt={`${job?.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-lg font-semibold text-foreground">{job?.title}</h4>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job?.match >= 90 ? 'bg-success/10 text-success' :
                          job?.match >= 80 ? 'bg-primary/10 text-primary': 'bg-secondary/10 text-secondary'
                        }`}>
                          {job?.match}% Match
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{job?.company}</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{job?.location}</span>
                        </div>
                        {job?.remote && (
                          <div className="flex items-center space-x-1">
                            <Icon name="Wifi" size={14} />
                            <span>Remote</span>
                          </div>
                        )}
                        <span>{job?.posted}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="font-medium text-primary">{job?.salary}</span>
                        <span className="text-muted-foreground">{job?.type}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job?.skills?.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted text-foreground text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm">
                      Save Job
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-gradient-elevation"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Alerts */}
        <div className="mt-16 bg-gradient-elevation-subtle rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <Icon name="Bell" size={48} className="text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">
              Never Miss Your Perfect Job
            </h3>
            <p className="text-muted-foreground">
              Set up personalized job alerts and get notified when opportunities matching your criteria become available.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-elevation hover:shadow-elevation"
              iconName="Plus"
              iconPosition="left"
            >
              Create Job Alert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatchingSection;