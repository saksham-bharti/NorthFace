import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const InteractiveTools = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [showResults, setShowResults] = useState(false);

  const industryOptions = [
    { value: 'technology', label: 'Technology & Software' },
    { value: 'healthcare', label: 'Healthcare & Life Sciences' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'manufacturing', label: 'Manufacturing & Engineering' },
    { value: 'marketing', label: 'Marketing & Sales' },
    { value: 'energy', label: 'Energy & Utilities' }
  ];

  const roleOptions = [
    { value: 'software-engineer', label: 'Software Engineer' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'clinical-researcher', label: 'Clinical Researcher' },
    { value: 'financial-analyst', label: 'Financial Analyst' },
    { value: 'manufacturing-engineer', label: 'Manufacturing Engineer' }
  ];

  const experienceOptions = [
    { value: '0-2', label: '0-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const locationOptions = [
    { value: 'national', label: 'National Average' },
    { value: 'san-francisco', label: 'San Francisco, CA' },
    { value: 'new-york', label: 'New York, NY' },
    { value: 'austin', label: 'Austin, TX' },
    { value: 'chicago', label: 'Chicago, IL' }
  ];

  const handleCalculate = () => {
    if (selectedIndustry && selectedRole && experience && location) {
      setShowResults(true);
    }
  };

  const getSalaryData = () => {
    // Mock salary calculation based on selections
    const baseSalary = {
      'software-engineer': 95000,
      'data-scientist': 110000,
      'product-manager': 125000,
      'clinical-researcher': 85000,
      'financial-analyst': 75000,
      'manufacturing-engineer': 80000
    };

    const experienceMultiplier = {
      '0-2': 1.0,
      '3-5': 1.3,
      '6-10': 1.6,
      '10+': 2.0
    };

    const locationMultiplier = {
      'national': 1.0,
      'san-francisco': 1.4,
      'new-york': 1.3,
      'austin': 1.1,
      'chicago': 1.05
    };

    const base = baseSalary?.[selectedRole] || 80000;
    const expMultiplier = experienceMultiplier?.[experience] || 1.0;
    const locMultiplier = locationMultiplier?.[location] || 1.0;
    
    const calculatedSalary = Math.round(base * expMultiplier * locMultiplier);
    const minSalary = Math.round(calculatedSalary * 0.85);
    const maxSalary = Math.round(calculatedSalary * 1.15);

    return { minSalary, maxSalary, avgSalary: calculatedSalary };
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Talent Summit 2024",
      date: "2024-11-15",
      time: "2:00 PM EST",
      type: "Virtual Conference",
      industry: "Technology",
      description: "Join industry leaders discussing AI, cloud computing, and the future of tech recruitment."
    },
    {
      id: 2,
      title: "Healthcare Innovation Forum",
      date: "2024-11-22",
      time: "10:00 AM EST",
      type: "In-Person",
      industry: "Healthcare",
      description: "Networking event focused on digital health transformation and clinical research opportunities."
    },
    {
      id: 3,
      title: "Financial Services Career Fair",
      date: "2024-12-05",
      time: "1:00 PM EST",
      type: "Hybrid Event",
      industry: "Finance",
      description: "Connect with top financial institutions and explore career opportunities in fintech and banking."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-headline mb-6">
            Interactive Career Tools
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Explore salary ranges, compare industries, and discover upcoming networking opportunities 
            tailored to your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Salary Calculator */}
          <div className="bg-background rounded-2xl p-8 card-premium">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Calculator" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Salary Calculator</h3>
                <p className="text-muted-foreground text-sm">Get personalized salary insights</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <Select
                label="Industry"
                placeholder="Select your industry"
                options={industryOptions}
                value={selectedIndustry}
                onChange={setSelectedIndustry}
              />

              <Select
                label="Role"
                placeholder="Select your role"
                options={roleOptions}
                value={selectedRole}
                onChange={setSelectedRole}
              />

              <Select
                label="Experience Level"
                placeholder="Select experience"
                options={experienceOptions}
                value={experience}
                onChange={setExperience}
              />

              <Select
                label="Location"
                placeholder="Select location"
                options={locationOptions}
                value={location}
                onChange={setLocation}
              />
            </div>

            <Button 
              variant="default" 
              fullWidth
              onClick={handleCalculate}
              disabled={!selectedIndustry || !selectedRole || !experience || !location}
              className="bg-gradient-elevation mb-6"
            >
              Calculate Salary Range
            </Button>

            {showResults && (
              <div className="bg-muted/50 rounded-lg p-6 animate-fade-in">
                <h4 className="font-semibold text-foreground mb-4">Salary Range Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-muted-foreground">
                      ${getSalaryData()?.minSalary?.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Minimum</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ${getSalaryData()?.avgSalary?.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Average</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-muted-foreground">
                      ${getSalaryData()?.maxSalary?.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Maximum</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary">
                    <Icon name="TrendingUp" size={16} className="inline mr-2" />
                    This role shows +12% growth compared to last year
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Job Alerts Signup */}
          <div className="bg-background rounded-2xl p-8 card-premium">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Bell" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Smart Job Alerts</h3>
                <p className="text-muted-foreground text-sm">Get notified of relevant opportunities</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                required
              />

              <Select
                label="Preferred Industries"
                placeholder="Select industries"
                options={industryOptions}
                multiple
                searchable
              />

              <Select
                label="Experience Level"
                placeholder="Select experience"
                options={experienceOptions}
              />

              <Input
                label="Preferred Locations"
                type="text"
                placeholder="e.g., San Francisco, Remote, New York"
              />
            </div>

            <Button 
              variant="outline" 
              fullWidth
              className="border-secondary text-secondary hover:bg-secondary hover:text-white mb-4"
            >
              Set Up Job Alerts
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Join 15,000+ professionals receiving personalized job alerts
              </p>
            </div>
          </div>
        </div>

        {/* Industry Events Calendar */}
        <div className="mt-12 bg-background rounded-2xl p-8 card-premium">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Calendar" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Upcoming Industry Events</h3>
                <p className="text-muted-foreground text-sm">Network with industry professionals</p>
              </div>
            </div>
            <Button variant="ghost" className="text-primary hover:bg-primary/10">
              View All Events
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents?.map((event) => (
              <div key={event?.id} className="border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {event?.industry}
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    {event?.type}
                  </span>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{event?.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event?.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(event.date)?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{event?.time}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;