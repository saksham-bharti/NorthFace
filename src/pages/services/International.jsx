import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const International = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Globe" size={16} />
                International Hiring
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Global Talent Acquisition Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expand your talent pool across borders with our comprehensive international hiring 
                services. We help organizations access global talent while navigating complex 
                immigration, compliance, and cultural integration challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Global Search
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors">
                  View Global Success Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Global Reach, Local Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our international network spans across continents, providing local market 
                knowledge while maintaining global standards of excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">North America</h3>
                <p className="text-muted-foreground mb-4">
                  United States, Canada, Mexico
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• Silicon Valley Tech Hub</div>
                  <div>• Financial Services Centers</div>
                  <div>• Healthcare Innovation</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Europe</h3>
                <p className="text-muted-foreground mb-4">
                  UK, Germany, France, Netherlands
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• London Financial District</div>
                  <div>• European Tech Centers</div>
                  <div>• Manufacturing Excellence</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Asia Pacific</h3>
                <p className="text-muted-foreground mb-4">
                  India, Singapore, Australia, Japan
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• Bangalore Tech Hub</div>
                  <div>• Singapore Financial Center</div>
                  <div>• Sydney Business District</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Middle East & Africa</h3>
                <p className="text-muted-foreground mb-4">
                  UAE, Saudi Arabia, South Africa
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• Dubai Business Hub</div>
                  <div>• Riyadh Financial Center</div>
                  <div>• Cape Town Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Comprehensive International Hiring Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our international hiring services cover the entire spectrum of global talent 
                  acquisition, from initial sourcing to successful integration, ensuring compliance 
                  with local regulations and cultural alignment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Global Talent Sourcing</h3>
                      <p className="text-muted-foreground">Access to talent pools across multiple countries and regions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Immigration & Compliance</h3>
                      <p className="text-muted-foreground">Expert guidance on work permits, visas, and legal requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Cultural Integration</h3>
                      <p className="text-muted-foreground">Support for cultural adaptation and team integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Relocation Support</h3>
                      <p className="text-muted-foreground">Comprehensive assistance with relocation and settlement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Global Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">International Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">90%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Specialized International Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions for different types of international hiring needs, 
                ensuring successful outcomes for both employers and candidates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Expatriate Hiring</h3>
                <p className="text-muted-foreground mb-4">
                  Senior executives and specialists for international assignments and global expansion.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• C-Suite Executives</li>
                  <li>• Regional Directors</li>
                  <li>• Technical Specialists</li>
                  <li>• Project Managers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Student Visa to Work</h3>
                <p className="text-muted-foreground mb-4">
                  Transitioning international students to full-time employment with proper work authorization.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• OPT/CPT Transitions</li>
                  <li>• H-1B Sponsorship</li>
                  <li>• Graduate Programs</li>
                  <li>• Internship to Full-time</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Remote Global Teams</h3>
                <p className="text-muted-foreground mb-4">
                  Building distributed teams with international talent working remotely.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Remote Developers</li>
                  <li>• Virtual Assistants</li>
                  <li>• Digital Marketing</li>
                  <li>• Customer Support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compliance & Legal</h3>
                <p className="text-muted-foreground mb-4">
                  Ensuring full compliance with international employment laws and regulations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Work Permit Processing</li>
                  <li>• Tax Compliance</li>
                  <li>• Labor Law Adherence</li>
                  <li>• Documentation Support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Relocation Services</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive support for international candidates and their families.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Housing Assistance</li>
                  <li>• School Enrollment</li>
                  <li>• Banking Setup</li>
                  <li>• Cultural Orientation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Expansion</h3>
                <p className="text-muted-foreground mb-4">
                  Building local teams for new market entry and international expansion.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Country Managers</li>
                  <li>• Local Sales Teams</li>
                  <li>• Regional Operations</li>
                  <li>• Market Entry Specialists</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                International Hiring Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our systematic approach ensures successful international placements while 
                managing all complexities of cross-border hiring.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Sourcing</h3>
                <p className="text-muted-foreground">
                  Leveraging our international network to identify and engage with qualified 
                  candidates across target markets.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Compliance Check</h3>
                <p className="text-muted-foreground">
                  Verifying work authorization, visa requirements, and ensuring compliance 
                  with local employment laws.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Cultural Assessment</h3>
                <p className="text-muted-foreground">
                  Evaluating cultural fit, communication skills, and adaptability to ensure 
                  successful integration.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Integration Support</h3>
                <p className="text-muted-foreground">
                  Providing ongoing support for relocation, cultural adaptation, and 
                  successful onboarding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Mobility */}
        <section className="py-20 bg-muted/30 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Compliance, Immigration & Mobility</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We navigate complex cross-border rules so your teams can focus on impact.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ icon: 'FileText', title: 'Work Permits', desc: 'End-to-end guidance for permits, visas, and extensions.' }, { icon: 'Shield', title: 'Legal & Tax', desc: 'Local employment law and basic tax compliance guidance.' }, { icon: 'Plane', title: 'Relocation', desc: 'Housing, schools, banking, and settlement support.' }, { icon: 'Languages', title: 'Cultural Readiness', desc: 'Cross-cultural onboarding for leaders and teams.' }].map((c, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border card-premium elevation-hover animate-slide-up">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><Icon name={c.icon} size={24} className="text-primary" /></div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Spotlight */}
        <section className="py-20 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Case Study: APAC Expansion</h2>
                <p className="text-lg text-muted-foreground mb-4">Built country teams in SG, AU, and IN for a SaaS major in 12 weeks.</p>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>• 17 offers across 3 markets</li>
                  <li>• 29 days average time-to-offer</li>
                  <li>• 96% offer acceptance</li>
                </ul>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Read Full Story</button>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl animate-scale-in">
                <h3 className="text-2xl font-bold text-foreground mb-6">Expansion Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center"><div className="text-3xl font-bold text-primary mb-2">3</div><div className="text-sm text-muted-foreground">Countries</div></div>
                  <div className="text-center"><div className="text-3xl font-bold text-primary mb-2">12</div><div className="text-sm text-muted-foreground">Weeks</div></div>
                  <div className="text-center"><div className="text-3xl font-bold text-primary mb-2">96%</div><div className="text-sm text-muted-foreground">Acceptance</div></div>
                  <div className="text-center"><div className="text-3xl font-bold text-primary mb-2">29</div><div className="text-sm text-muted-foreground">Days TTO</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted/30 animate-fade-in">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">International Hiring FAQs</h2>
              <p className="text-xl text-muted-foreground">Key clarity for HR and relocating candidates.</p>
            </div>
            <div className="space-y-4">
              {[{ q: 'Do you sponsor or file visas?', a: 'We coordinate with your immigration counsel and support documentation and timelines.' }, { q: 'How do you manage cross-border compliance?', a: 'We align with local partners and legal updates, advising HR on employment norms.' }, { q: 'Can you build remote-first teams?', a: 'Yes. We source across time zones and set expectations for overlap and tooling.' }].map((f, i) => (
                <details key={i} className="bg-white border border-border rounded-lg p-6 group">
                  <summary className="cursor-pointer text-lg font-semibold text-foreground flex items-center justify-between">{f.q}<span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span></summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Access Global Talent?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Expand your talent pool internationally with our comprehensive global hiring 
              solutions. We handle the complexity so you can focus on building your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Global Search
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Consultation
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

export default International;
