import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ClientShowcase from './components/ClientShowcase';
import Icon from '../../components/AppIcon';

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Success Stories - NorthStep Global | Transformational Career Outcomes</title>
        <meta name="description" content="Discover compelling case studies of successful placements, career transformations, and company growth. See how NorthStep delivers measurable results for candidates and employers." />
        <meta name="keywords" content="success stories, career transformation, recruitment success, placement outcomes, salary increases, hiring results" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-elevation-subtle">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="Trophy" size={16} className="mr-2" />
              Proven Track Record of Success
            </div>
            
            <h1 className="text-brand-hero mb-6">
              Success Stories That
              <span className="text-primary"> Transform Careers</span>
            </h1>
            
            <p className="text-brand-subheading max-w-4xl mx-auto mb-12">
              Real outcomes, real impact. Discover how we've helped hundreds of professionals advance their careers and companies build exceptional teams through strategic talent partnerships.
            </p>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Avg Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">21</div>
                <div className="text-sm text-muted-foreground">Days to Hire</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Showcase Component */}
      <ClientShowcase />
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;