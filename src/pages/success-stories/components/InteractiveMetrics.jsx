import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const InteractiveMetrics = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedOutcome, setSelectedOutcome] = useState('all');

  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const roleOptions = [
    { value: 'all', label: 'All Roles' },
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-7 years)' },
    { value: 'senior', label: 'Senior Level (8-15 years)' },
    { value: 'executive', label: 'Executive (15+ years)' }
  ];

  const outcomeOptions = [
    { value: 'all', label: 'All Outcomes' },
    { value: 'salary', label: 'Salary Increase' },
    { value: 'promotion', label: 'Career Advancement' },
    { value: 'transition', label: 'Career Transition' },
    { value: 'leadership', label: 'Leadership Role' }
  ];

  // Mock data that changes based on filters
  const getFilteredMetrics = () => {
    const baseMetrics = {
      placementRate: 94,
      avgSalaryIncrease: 35,
      avgTimeToHire: 21,
      candidateSatisfaction: 96,
      employerSatisfaction: 93,
      retentionRate: 89
    };

    // Simulate filter effects
    let adjustedMetrics = { ...baseMetrics };
    
    if (selectedIndustry === 'technology') {
      adjustedMetrics.avgSalaryIncrease = 42;
      adjustedMetrics.avgTimeToHire = 18;
    } else if (selectedIndustry === 'finance') {
      adjustedMetrics.avgSalaryIncrease = 38;
      adjustedMetrics.avgTimeToHire = 25;
    }

    if (selectedRole === 'executive') {
      adjustedMetrics.avgSalaryIncrease = 28;
      adjustedMetrics.avgTimeToHire = 35;
      adjustedMetrics.retentionRate = 95;
    } else if (selectedRole === 'entry') {
      adjustedMetrics.avgSalaryIncrease = 45;
      adjustedMetrics.avgTimeToHire = 15;
    }

    return adjustedMetrics;
  };

  const metrics = getFilteredMetrics();

  const metricCards = [
    {
      id: 1,
      title: "Placement Success Rate",
      value: `${metrics?.placementRate}%`,
      description: "Candidates successfully placed within 90 days",
      icon: "Target",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      title: "Average Salary Increase",
      value: `${metrics?.avgSalaryIncrease}%`,
      description: "Career advancement through strategic moves",
      icon: "TrendingUp",
      color: "text-primary",
      bgColor: "bg-orange-50"
    },
    {
      id: 3,
      title: "Average Time to Hire",
      value: `${metrics?.avgTimeToHire} days`,
      description: "From consultation to offer acceptance",
      icon: "Clock",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      title: "Candidate Satisfaction",
      value: `${metrics?.candidateSatisfaction}%`,
      description: "Would recommend NorthStep to others",
      icon: "Heart",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      id: 5,
      title: "Employer Satisfaction",
      value: `${metrics?.employerSatisfaction}%`,
      description: "Satisfied with quality of candidates",
      icon: "Building2",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      title: "12-Month Retention",
      value: `${metrics?.retentionRate}%`,
      description: "Candidates still with employer after 1 year",
      icon: "Users",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const successBreakdown = [
    {
      category: "Career Advancement",
      percentage: 45,
      count: 234,
      description: "Promotions and role upgrades"
    },
    {
      category: "Salary Increases",
      percentage: 38,
      count: 198,
      description: "Significant compensation improvements"
    },
    {
      category: "Industry Transitions",
      percentage: 22,
      count: 115,
      description: "Successful career pivots"
    },
    {
      category: "Leadership Roles",
      percentage: 18,
      count: 94,
      description: "Management and executive positions"
    },
    {
      category: "Remote Opportunities",
      percentage: 31,
      count: 162,
      description: "Flexible work arrangements"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-hero mb-6">
            Interactive Success Metrics
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Explore our success data filtered by industry, role level, and outcome type to see how we deliver results across different scenarios.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-background rounded-xl p-6 mb-12 card-premium">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
            <Icon name="Filter" size={20} className="mr-2 text-primary" />
            Filter Success Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Select
              label="Industry"
              options={industryOptions}
              value={selectedIndustry}
              onChange={setSelectedIndustry}
            />
            
            <Select
              label="Role Level"
              options={roleOptions}
              value={selectedRole}
              onChange={setSelectedRole}
            />
            
            <Select
              label="Outcome Type"
              options={outcomeOptions}
              value={selectedOutcome}
              onChange={setSelectedOutcome}
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metricCards?.map((metric) => (
            <div
              key={metric?.id}
              className="bg-background rounded-xl p-6 card-premium elevation-hover animate-fade-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${metric?.bgColor} flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={24} className={metric?.color} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">
                    {metric?.value}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  {metric?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Breakdown */}
        <div className="bg-background rounded-xl p-8 card-premium">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Success Story Breakdown
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chart Visualization */}
            <div className="space-y-6">
              {successBreakdown?.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{item?.category}</span>
                    <span className="text-sm text-muted-foreground">{item?.count} cases</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-elevation h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item?.percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item?.description}</span>
                    <span className="font-medium text-primary">{item?.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insights */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">Key Insights</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={16} className="text-green-600" />
                    <span className="font-medium text-foreground">Career Growth Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    45% of our placements result in career advancement, with candidates moving to higher-level positions within their field.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="DollarSign" size={16} className="text-primary" />
                    <span className="font-medium text-foreground">Compensation Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    38% of candidates see significant salary increases, with an average boost of {metrics?.avgSalaryIncrease}% above their previous role.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="RotateCcw" size={16} className="text-blue-600" />
                    <span className="font-medium text-foreground">Career Transitions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    22% of our success stories involve helping professionals transition to new industries or career paths.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Home" size={16} className="text-purple-600" />
                    <span className="font-medium text-foreground">Remote Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    31% of placements include remote or hybrid work options, reflecting modern workplace preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the {metrics?.placementRate}% of candidates who successfully advance their careers with NorthStep's strategic approach to talent placement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center space-x-2">
              <Icon name="UserPlus" size={20} />
              <span>Start Your Journey</span>
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center space-x-2">
              <Icon name="BarChart3" size={20} />
              <span>View Full Report</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMetrics;