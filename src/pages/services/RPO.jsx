import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const RPO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Settings" size={16} />
                Recruitment Process Outsourcing
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Your Recruitment Operations
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Partner with us to outsource your entire recruitment process and gain access to 
                scalable, technology-driven talent acquisition solutions that deliver superior 
                results while reducing costs and time-to-hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Get RPO Quote
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors">
                  View RPO Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RPO Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Complete Recruitment Process Outsourcing
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our RPO solutions provide end-to-end recruitment services, from job posting 
                  and candidate sourcing to onboarding. We become an extension of your HR team, 
                  delivering consistent, high-quality results while you focus on core business operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Scalable Operations</h3>
                      <p className="text-muted-foreground">Flexible solutions that scale with your hiring needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Advanced Technology</h3>
                      <p className="text-muted-foreground">Cutting-edge ATS and recruitment tools for optimal efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dedicated Teams</h3>
                      <p className="text-muted-foreground">Specialized recruiters focused on your industry and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Cost Optimization</h3>
                      <p className="text-muted-foreground">Reduced recruitment costs while improving quality and speed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">RPO Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">60%</div>
                    <div className="text-sm text-muted-foreground">Faster Time-to-Hire</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Quality Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Recruitment Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RPO Models */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Flexible RPO Engagement Models
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the RPO model that best fits your organization's needs, from project-based 
                solutions to complete recruitment transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Project RPO</h3>
                <p className="text-muted-foreground mb-4">
                  Short-term recruitment support for specific projects or peak hiring periods.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 3-12 month engagements</li>
                  <li>• Specific role requirements</li>
                  <li>• Rapid deployment</li>
                  <li>• Cost-effective solution</li>
                </ul>
                <div className="mt-4 text-sm font-medium text-primary">Best for: Seasonal hiring, expansion projects</div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hybrid RPO</h3>
                <p className="text-muted-foreground mb-4">
                  Combination of in-house and outsourced recruitment for specific functions or roles.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 12-24 month contracts</li>
                  <li>• Selective outsourcing</li>
                  <li>• Shared responsibility</li>
                  <li>• Gradual transition</li>
                </ul>
                <div className="mt-4 text-sm font-medium text-primary">Best for: Partial transformation, specific departments</div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Full RPO</h3>
                <p className="text-muted-foreground mb-4">
                  Complete outsourcing of recruitment function with dedicated team and technology.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 2+ year partnerships</li>
                  <li>• End-to-end process</li>
                  <li>• Dedicated team</li>
                  <li>• Technology integration</li>
                </ul>
                <div className="mt-4 text-sm font-medium text-primary">Best for: Complete transformation, large organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* RPO Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive RPO Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our RPO solutions cover every aspect of the recruitment process, ensuring 
                seamless integration with your existing HR systems and processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Talent Sourcing</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Multi-channel sourcing strategies</li>
                  <li>• Passive candidate engagement</li>
                  <li>• Database management</li>
                  <li>• Social media recruitment</li>
                  <li>• Employee referral programs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Filter" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Screening & Assessment</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Resume screening</li>
                  <li>• Phone/video interviews</li>
                  <li>• Skills assessments</li>
                  <li>• Background checks</li>
                  <li>• Reference verification</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Interview Coordination</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Interview scheduling</li>
                  <li>• Panel coordination</li>
                  <li>• Candidate communication</li>
                  <li>• Feedback collection</li>
                  <li>• Decision facilitation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Job Posting & Marketing</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Job board management</li>
                  <li>• Career site optimization</li>
                  <li>• Employer branding</li>
                  <li>• Social media campaigns</li>
                  <li>• Content marketing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Analytics & Reporting</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Recruitment metrics</li>
                  <li>• Performance dashboards</li>
                  <li>• Cost analysis</li>
                  <li>• Quality tracking</li>
                  <li>• ROI measurement</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="UserCheck" size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Onboarding Support</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Offer management</li>
                  <li>• Pre-boarding coordination</li>
                  <li>• Documentation support</li>
                  <li>• First-day facilitation</li>
                  <li>• Integration tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Advanced Recruitment Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leverage cutting-edge technology and tools to streamline your recruitment 
                process and improve candidate experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Database" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Applicant Tracking System</h3>
                <p className="text-muted-foreground">
                  Advanced ATS with AI-powered matching and automated workflows.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI & Automation</h3>
                <p className="text-muted-foreground">
                  Intelligent screening, chatbot interactions, and automated scheduling.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Platform</h3>
                <p className="text-muted-foreground">
                  Real-time dashboards and predictive analytics for data-driven decisions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Mobile Solutions</h3>
                <p className="text-muted-foreground">
                  Mobile-optimized applications and candidate engagement tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with us to revolutionize your talent acquisition process. Our RPO solutions 
              deliver measurable results while reducing costs and improving candidate experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get RPO Quote
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

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
                  <a href="/services/ExecutiveSearch" className="text-background/80 hover:text-primary transition-colors">Executive Search</a>
                  <a href="/services/SeniorHiring" className="text-background/80 hover:text-primary transition-colors">Senior & Mid Level Hiring</a>
                  <a href="/services/International" className="text-background/80 hover:text-primary transition-colors">International Hiring</a>
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

export default RPO;
