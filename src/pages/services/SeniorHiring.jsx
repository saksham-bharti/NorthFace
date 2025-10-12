import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const SeniorHiring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Users" size={16} />
                Senior & Mid Level Hiring
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Strategic Talent Acquisition for Leadership Roles
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We specialize in identifying and placing senior and mid-level professionals who bring 
                strategic value, leadership capabilities, and industry expertise to drive your 
                organization's growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Hiring Process
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Comprehensive Senior & Mid-Level Recruitment
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our systematic approach combines market intelligence, behavioral assessment, 
                  and cultural fit analysis to identify professionals who not only meet your 
                  technical requirements but also align with your organizational values and vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Strategic Role Mapping</h3>
                      <p className="text-muted-foreground">Deep understanding of role requirements and organizational context</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Talent Pipeline Development</h3>
                      <p className="text-muted-foreground">Building relationships with passive candidates and industry leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Cultural Assessment</h3>
                      <p className="text-muted-foreground">Ensuring alignment with company culture and leadership style</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30</div>
                    <div className="text-sm text-muted-foreground">Days Avg. Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Senior Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Categories */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Senior & Mid-Level Positions We Fill
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From department heads to senior managers, we specialize in placing professionals 
                who drive operational excellence and strategic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Senior Management</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• General Managers</li>
                  <li>• Regional Directors</li>
                  <li>• Business Unit Heads</li>
                  <li>• Operations Directors</li>
                  <li>• Strategy Directors</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sales & Marketing</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Sales Directors</li>
                  <li>• Marketing Managers</li>
                  <li>• Business Development Heads</li>
                  <li>• Channel Partners</li>
                  <li>• Brand Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technology & IT</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• IT Directors</li>
                  <li>• Engineering Managers</li>
                  <li>• Product Managers</li>
                  <li>• Solutions Architects</li>
                  <li>• DevOps Leads</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Finance & Accounting</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Finance Managers</li>
                  <li>• Accounting Directors</li>
                  <li>• Treasury Managers</li>
                  <li>• Financial Controllers</li>
                  <li>• Audit Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Human Resources</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• HR Directors</li>
                  <li>• Talent Acquisition Heads</li>
                  <li>• Learning & Development Managers</li>
                  <li>• Compensation Managers</li>
                  <li>• Employee Relations Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Operations & Supply Chain</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Operations Managers</li>
                  <li>• Supply Chain Directors</li>
                  <li>• Procurement Managers</li>
                  <li>• Quality Assurance Heads</li>
                  <li>• Logistics Managers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Systematic Hiring Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures quality placements and long-term success 
                for both candidates and organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Requirement Analysis</h3>
                <p className="text-muted-foreground">
                  Deep dive into role requirements, team dynamics, and organizational culture 
                  to create a comprehensive candidate profile.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Talent Sourcing</h3>
                <p className="text-muted-foreground">
                  Multi-channel approach including database search, networking, referrals, 
                  and passive candidate engagement.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Assessment & Screening</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation including technical skills, behavioral assessment, 
                  and cultural fit analysis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Placement & Support</h3>
                <p className="text-muted-foreground">
                  Facilitating smooth onboarding and providing ongoing support to ensure 
                  successful integration and retention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our extensive industry expertise enables us to understand sector-specific 
                requirements and find the right talent for your business needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 
                'Retail & E-commerce', 'Consulting', 'Energy & Utilities', 'Real Estate',
                'Education', 'Media & Entertainment', 'Automotive', 'Pharmaceuticals'
              ].map((industry) => (
                <div key={industry} className="bg-white p-6 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow">
                  <div className="text-sm font-medium text-foreground">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Build Your Leadership Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with us to find senior and mid-level professionals who will drive your 
              organization's success. Our systematic approach ensures the right cultural and 
              strategic fit for long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Hiring Process
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-elevation rounded-lg flex items-center justify-center">
                  <img 
                    src="/assets/images/HomeLogo.png" 
                    alt="NorthStep" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="text-lg font-bold">NorthStep</span>
              </div>
              <p className="text-sm text-background/70">
                Building strong leadership teams through strategic talent acquisition.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Executive Search</li>
                <li>Senior & Mid Level Hiring</li>
                <li>International Hiring</li>
                <li>RPO Solutions</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Industries</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Technology</li>
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>About Us</li>
                <li>Contact</li>
                <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; {new Date().getFullYear()} NorthStep Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SeniorHiring;
