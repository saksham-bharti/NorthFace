import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      id: 1,
      value: "94%",
      label: "Placement Success Rate",
      description: "Successful placements within 90 days",
      icon: "Target",
      trend: "+5%",
      color: "text-green-600"
    },
    {
      id: 2,
      value: "35%",
      label: "Average Salary Increase",
      description: "Career advancement through strategic moves",
      icon: "TrendingUp",
      trend: "+8%",
      color: "text-primary"
    },
    {
      id: 3,
      value: "21",
      label: "Average Days to Hire",
      description: "From initial consultation to offer acceptance",
      icon: "Clock",
      trend: "-12%",
      color: "text-blue-600"
    },
    {
      id: 4,
      value: "89%",
      label: "Client Retention Rate",
      description: "Long-term partnerships with employers",
      icon: "Users",
      trend: "+3%",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-headline mb-4">
            Proven Results That Speak Volumes
          </h2>
          <p className="text-brand-subheading max-w-2xl mx-auto">
            Our success is measured by the transformational outcomes we deliver for both candidates and employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-background rounded-xl p-6 card-premium elevation-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-elevation-subtle flex items-center justify-center ${stat?.color}`}>
                  <Icon name={stat?.icon} size={24} />
                </div>
                <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
                  <Icon name="ArrowUp" size={16} />
                  <span>{stat?.trend}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">
                  {stat?.value}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {stat?.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;