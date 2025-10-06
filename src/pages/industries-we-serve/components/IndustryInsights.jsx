import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IndustryInsights = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const tabs = [
    { id: 'trends', label: 'Market Trends', icon: 'TrendingUp' },
    { id: 'salaries', label: 'Salary Benchmarks', icon: 'DollarSign' },
    { id: 'skills', label: 'In-Demand Skills', icon: 'Target' }
  ];

  const trendsData = [
    {
      industry: "Technology",
      trend: "AI/ML Specialization Surge",
      impact: "+45% demand for AI engineers",
      timeframe: "Q4 2024",
      description: "Companies are rapidly expanding AI capabilities, creating unprecedented demand for machine learning engineers and AI specialists."
    },
    {
      industry: "Healthcare",
      trend: "Telehealth Integration",
      impact: "+32% remote healthcare roles",
      timeframe: "2024 YTD",
      description: "Digital health transformation continues to drive demand for healthcare IT professionals and remote care specialists."
    },
    {
      industry: "Finance",
      trend: "Fintech Innovation",
      impact: "+28% blockchain positions",
      timeframe: "Q3-Q4 2024",
      description: "Traditional financial institutions are investing heavily in blockchain and cryptocurrency expertise."
    }
  ];

  const salaryData = [
    {
      role: "Senior Software Engineer",
      industry: "Technology",
      range: "$140K - $180K",
      growth: "+12%",
      location: "National Average"
    },
    {
      role: "Clinical Research Manager",
      industry: "Healthcare",
      range: "$95K - $125K",
      growth: "+8%",
      location: "National Average"
    },
    {
      role: "Investment Analyst",
      industry: "Finance",
      range: "$85K - $115K",
      growth: "+15%",
      location: "National Average"
    },
    {
      role: "Manufacturing Engineer",
      industry: "Manufacturing",
      range: "$75K - $105K",
      growth: "+6%",
      location: "National Average"
    }
  ];

  const skillsData = [
    {
      skill: "Artificial Intelligence",
      demand: "Very High",
      growth: "+67%",
      industries: ["Technology", "Healthcare", "Finance"],
      avgSalaryBoost: "+25%"
    },
    {
      skill: "Cloud Architecture",
      demand: "High",
      growth: "+43%",
      industries: ["Technology", "Manufacturing", "Healthcare"],
      avgSalaryBoost: "+18%"
    },
    {
      skill: "Data Analytics",
      demand: "High",
      growth: "+38%",
      industries: ["Finance", "Marketing", "Healthcare"],
      avgSalaryBoost: "+22%"
    },
    {
      skill: "Cybersecurity",
      demand: "Very High",
      growth: "+52%",
      industries: ["Technology", "Finance", "Healthcare"],
      avgSalaryBoost: "+30%"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'trends':
        return (
          <div className="space-y-6">
            {trendsData?.map((trend, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {trend?.industry}
                      </span>
                      <span className="text-sm text-muted-foreground">{trend?.timeframe}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{trend?.trend}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{trend?.impact}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{trend?.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'salaries':
        return (
          <div className="space-y-4">
            {salaryData?.map((salary, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{salary?.role}</h3>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <span>{salary?.industry}</span>
                      <span>•</span>
                      <span>{salary?.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{salary?.range}</div>
                    <div className="text-sm text-success font-medium">{salary?.growth} YoY</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-6">
            {skillsData?.map((skill, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{skill?.skill}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        skill?.demand === 'Very High' ?'bg-error/10 text-error' :'bg-warning/10 text-warning'
                      }`}>
                        {skill?.demand} Demand
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {skill?.industries?.map((industry, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{skill?.growth}</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                    <div className="text-sm font-medium text-success mt-1">{skill?.avgSalaryBoost} Salary Boost</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-headline mb-6">
            Industry Intelligence Hub
          </h2>
          <p className="text-brand-subheading max-w-3xl mx-auto">
            Stay ahead with real-time market insights, salary benchmarks, and hiring trends 
            across all major industries.
          </p>
        </div>

        <div className="bg-background rounded-2xl card-premium overflow-hidden">
          <div className="border-b border-border">
            <div className="flex flex-col sm:flex-row">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-3 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white border-b-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {renderContent()}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-background rounded-xl p-6 card-premium">
            <Icon name="Download" size={24} className="text-primary" />
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Industry Report 2024</h3>
              <p className="text-sm text-muted-foreground">Complete hiring trends and salary analysis</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;