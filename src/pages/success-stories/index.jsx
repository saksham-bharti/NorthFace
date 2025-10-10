import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import StatsOverview from './components/StatsOverview';
import FeaturedStories from './components/FeaturedStories';
import VideoTestimonials from './components/VideoTestimonials';
import ClientShowcase from './components/ClientShowcase';
import InteractiveMetrics from './components/InteractiveMetrics';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

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
      {/* Stats Overview Component */}
      <StatsOverview />
      {/* Featured Stories Component */}
      <FeaturedStories />
      {/* Interactive Metrics Component */}
      <InteractiveMetrics />
      {/* Video Testimonials Component */}
      <VideoTestimonials />
      {/* Client Showcase Component */}
      <ClientShowcase />
      {/* Success Story Submission CTA */}
      <section className="py-20 bg-gradient-elevation text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Share Your Success Story
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have you experienced career transformation through NorthStep? We'd love to feature your journey and inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              iconName="Video"
              iconPosition="left"
            >
              Submit Video Testimonial
            </Button>
            <Button 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              iconName="FileText"
              iconPosition="left"
            >
              Share Written Story
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-elevation rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M3 21L12 3L21 21H18L12 9L6 21H3Z" fill="currentColor"/>
                    <path d="M8 21L12 13L16 21H8Z" fill="rgba(255,255,255,0.3)"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">NorthStep</h3>
                  <p className="text-sm opacity-80">Global</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Transforming careers and building exceptional teams through strategic talent partnerships. Your next step north starts here.
              </p>
              <div className="flex space-x-4">
                <Icon name="Linkedin" size={20} className="text-background/60 hover:text-background cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-background/60 hover:text-background cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-background/60 hover:text-background cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/for-candidates" className="hover:text-background">For Candidates</a></li>
                <li><a href="/industries-we-serve" className="hover:text-background">Industries</a></li>
                <li><a href="/about-north-step" className="hover:text-background">About Us</a></li>
                <li><a href="/contact-consultation" className="hover:text-background">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@northstep.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; {new Date()?.getFullYear()} NorthStep Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStoriesPage;