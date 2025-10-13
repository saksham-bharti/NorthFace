import React from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";

const ExecutiveSearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Search" size={16} />
                Executive Search
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Discover Hidden Executive Talent
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                An innovative approach to finding key individuals who are not
                visible in the marketplace and not actively looking for career
                changes. We uncover exceptional leaders who drive
                transformational growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Executive Search
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Executive Search Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic, data-driven approach that ensures engagement with
                the right talent and delivers superior results for your
                organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Strategic Mapping
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive market analysis and talent mapping to identify
                  potential candidates across industries and geographies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Passive Sourcing
                </h3>
                <p className="text-muted-foreground">
                  Advanced techniques to identify and engage with
                  high-performing executives who aren't actively job searching.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Rigorous Assessment
                </h3>
                <p className="text-muted-foreground">
                  Multi-layered evaluation process including behavioral
                  assessments, cultural fit analysis, and reference checks.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Seamless Integration
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive onboarding support to ensure successful
                  integration and long-term retention of placed executives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Executive Search Across Industries
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our sectoral expertise spans across key industries, enabling us
                to find the perfect executive match for your specific business
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Technology & IT
                </h3>
                <p className="text-muted-foreground mb-4">
                  CTOs, VPs of Engineering, and technology leaders driving
                  digital transformation.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chief Technology Officers</li>
                  <li>• VP of Engineering</li>
                  <li>• Head of Product</li>
                  <li>• Chief Information Officer</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Financial Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Banking, insurance, and fintech executives with deep industry
                  expertise.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chief Financial Officers</li>
                  <li>• Head of Risk Management</li>
                  <li>• VP of Operations</li>
                  <li>• Chief Investment Officer</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Factory" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Manufacturing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Operations leaders and manufacturing executives driving
                  operational excellence.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chief Operating Officer</li>
                  <li>• VP of Manufacturing</li>
                  <li>• Head of Supply Chain</li>
                  <li>• Chief Quality Officer</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Healthcare
                </h3>
                <p className="text-muted-foreground mb-4">
                  Healthcare executives with clinical and business expertise.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chief Medical Officer</li>
                  <li>• VP of Clinical Operations</li>
                  <li>• Head of Regulatory Affairs</li>
                  <li>• Chief Nursing Officer</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingBag" size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Retail & E-commerce
                </h3>
                <p className="text-muted-foreground mb-4">
                  Consumer-focused leaders driving growth in retail and digital
                  commerce.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chief Marketing Officer</li>
                  <li>• VP of E-commerce</li>
                  <li>• Head of Merchandising</li>
                  <li>• Chief Customer Officer</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Global Expansion
                </h3>
                <p className="text-muted-foreground mb-4">
                  International executives for global market entry and
                  expansion.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regional Managing Directors</li>
                  <li>• Country Managers</li>
                  <li>• Head of International</li>
                  <li>• Chief Global Officer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Proven Executive Search Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our evidence-based approach delivers measurable results for
                organizations seeking transformational leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  95%
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  Success Rate
                </div>
                <p className="text-muted-foreground">
                  Executive placements that exceed expectations
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  18
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  Months
                </div>
                <p className="text-muted-foreground">
                  Average tenure of placed executives
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  Executives
                </div>
                <p className="text-muted-foreground">
                  Successfully placed in leadership roles
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  45
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  Days
                </div>
                <p className="text-muted-foreground">
                  Average time to placement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Find Your Next Executive Leader?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with us to discover exceptional executives who will drive
              your organization's success and growth. Our systematic approach
              ensures the right cultural and strategic fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Executive Search
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-6 gap-8 mb-8">
              {/* Brand */}
              <div className="lg:col-span-3">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-elevation rounded-lg flex items-center justify-center">
                    <img 
                      src="/assets/images/Logo.png" 
                      alt="NorthStep" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">NorthStep</h3>
                    <p className="text-sm text-background/70">Global</p>
                  </div>
                </div>
                <p className="text-background/80 mb-6 max-w-md">
                  Strategic talent partnerships that transform careers and organizations. 
                  Your next step north starts here.
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
                <ul className="space-y-2 text-sm">
                  <li><a href="/homepage" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/industries-we-serve" className="text-background/80 hover:text-primary transition-colors">Industries</a></li> 
                </ul>
              </div>
              {/* Services - horizontal stack */}
              <div>
                <h5 className="text-sm font-semibold mb-2">Services</h5>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <a href="/services/SeniorHiring" className="text-background/80 hover:text-primary transition-colors">Senior & Mid Level Hiring</a>
                  <a href="/services/International" className="text-background/80 hover:text-primary transition-colors">International Hiring</a>
                  <a href="/services/RPO" className="text-background/80 hover:text-primary transition-colors">RPO Solutions</a>
                  <a href="/services/GCCHiring" className="text-background/80 hover:text-primary transition-colors">GCC Hiring</a>
                </div>
              </div>
              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li>+1 (555) 123-4567</li>
                  <li>hello@northstep.com</li>
                  <li>New York, NY</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-background/20 pt-8 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm text-background/60">
                © {new Date()?.getFullYear()} NorthStep Global. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 lg:mt-0">
                <a href="/privacy-policy" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
                <a href="/cookie-policy" className="text-background/60 hover:text-primary text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default ExecutiveSearch;
