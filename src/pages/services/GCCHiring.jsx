import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const GCCHiring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Building2" size={16} />
                GCC Hiring
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Global Capability Centers Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Specialized recruitment for Global Capability Centers (GCCs) and Global In-house Centers (GICs). 
                We understand the unique requirements of setting up and scaling offshore delivery centers 
                with world-class talent across technology, finance, and business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start GCC Hiring
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors">
                  View GCC Success Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* GCC Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Specialized GCC Recruitment Expertise
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our deep understanding of GCC operations and requirements enables us to identify 
                  and place talent that drives operational excellence, innovation, and cost optimization 
                  for global organizations establishing or expanding their offshore capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">GCC-Specific Expertise</h3>
                      <p className="text-muted-foreground">Deep understanding of offshore center requirements and challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Scale & Speed</h3>
                      <p className="text-muted-foreground">Rapid scaling capabilities for large-volume hiring requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Cultural Alignment</h3>
                      <p className="text-muted-foreground">Ensuring seamless integration with global teams and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Compliance & Governance</h3>
                      <p className="text-muted-foreground">Expertise in regulatory requirements and governance frameworks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">GCC Hiring Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">GCCs Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                    <div className="text-sm text-muted-foreground">GCC Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25</div>
                    <div className="text-sm text-muted-foreground">Days Avg. Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <div className="text-sm text-muted-foreground">Retention Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GCC Functions */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                GCC Functions We Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive recruitment support across all major GCC functions, from technology 
                development to business process operations and shared services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technology & Engineering</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Software Development</li>
                  <li>• Cloud & Infrastructure</li>
                  <li>• Data & Analytics</li>
                  <li>• DevOps & SRE</li>
                  <li>• Cybersecurity</li>
                  <li>• AI/ML Engineering</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Finance & Accounting</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Financial Planning & Analysis</li>
                  <li>• Accounting & Reporting</li>
                  <li>• Treasury Operations</li>
                  <li>• Tax Compliance</li>
                  <li>• Internal Audit</li>
                  <li>• Risk Management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Human Resources</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Talent Acquisition</li>
                  <li>• Learning & Development</li>
                  <li>• Compensation & Benefits</li>
                  <li>• HR Operations</li>
                  <li>• Employee Relations</li>
                  <li>• HR Analytics</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingBag" size={24} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Business Operations</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Customer Support</li>
                  <li>• Sales Operations</li>
                  <li>• Marketing Operations</li>
                  <li>• Supply Chain</li>
                  <li>• Procurement</li>
                  <li>• Quality Assurance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" size={24} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Analytics & Insights</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Business Intelligence</li>
                  <li>• Data Science</li>
                  <li>• Market Research</li>
                  <li>• Performance Analytics</li>
                  <li>• Reporting & Dashboards</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compliance & Legal</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Regulatory Compliance</li>
                  <li>• Legal Operations</li>
                  <li>• Corporate Governance</li>
                  <li>• Data Privacy</li>
                  <li>• SOX Compliance</li>
                  <li>• Risk Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GCC Locations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Major GCC Locations We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our extensive network covers all major GCC hubs, providing local expertise 
                and understanding of regional talent markets and regulatory environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Bangalore</h3>
                <p className="text-muted-foreground mb-4">
                  India's Silicon Valley
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 500+ GCCs</div>
                  <div>• Technology Hub</div>
                  <div>• R&D Centers</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Hyderabad</h3>
                <p className="text-muted-foreground mb-4">
                  Emerging Tech Hub
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 200+ GCCs</div>
                  <div>• Pharma & Biotech</div>
                  <div>• Financial Services</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pune</h3>
                <p className="text-muted-foreground mb-4">
                  Manufacturing & IT
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 150+ GCCs</div>
                  <div>• Automotive</div>
                  <div>• Engineering Services</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Chennai</h3>
                <p className="text-muted-foreground mb-4">
                  Financial Services Hub
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 100+ GCCs</div>
                  <div>• Banking & Finance</div>
                  <div>• Healthcare IT</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Gurgaon</h3>
                <p className="text-muted-foreground mb-4">
                  Business Services
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 80+ GCCs</div>
                  <div>• Shared Services</div>
                  <div>• Consulting</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Mumbai</h3>
                <p className="text-muted-foreground mb-4">
                  Financial Capital
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 60+ GCCs</div>
                  <div>• Investment Banking</div>
                  <div>• Insurance</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Kolkata</h3>
                <p className="text-muted-foreground mb-4">
                  Emerging Hub
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 40+ GCCs</div>
                  <div>• Cost Advantage</div>
                  <div>• Talent Pool</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Kochi</h3>
                <p className="text-muted-foreground mb-4">
                  IT & Services
                </p>
                <div className="text-sm text-muted-foreground">
                  <div>• 30+ GCCs</div>
                  <div>• Software Development</div>
                  <div>• Digital Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GCC Setup Process */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                GCC Setup & Scaling Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach supports organizations at every stage of their 
                GCC journey, from initial setup to full-scale operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Strategy & Planning</h3>
                <p className="text-muted-foreground">
                  Defining GCC objectives, location selection, and organizational structure 
                  to align with business goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Leadership Hiring</h3>
                <p className="text-muted-foreground">
                  Recruiting senior leadership team including Center Head, Function Heads, 
                  and key management positions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Team Building</h3>
                <p className="text-muted-foreground">
                  Scaling operations with mid-level managers, specialists, and operational 
                  staff across all functions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Optimization</h3>
                <p className="text-muted-foreground">
                  Continuous improvement through performance optimization, process refinement, 
                  and strategic expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOT Model & Build-Operate-Transfer */}
        <section className="py-20 bg-muted/30 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Build-Operate-Transfer (BOT) for GCCs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Stand up, stabilize, and transition your GCC with predictable timelines.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ n: '1', t: 'Build', d: 'Location strategy, leadership hiring, and core pod setup.' }, { n: '2', t: 'Operate', d: 'Scalable hiring engine, playbooks, and KPI governance.' }, { n: '3', t: 'Optimize', d: 'Cost, quality, and productivity improvements with benchmarks.' }, { n: '4', t: 'Transfer', d: 'Knowledge handover and steady-state transition to your team.' }].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{s.n}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{s.t}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ i: 'DollarSign', h: 'Cost Advantage', d: 'Arbitrage without compromising capability maturity.' }, { i: 'Cpu', h: 'Capability Depth', d: 'Tech, finance, ops, and analytics under one roof.' }, { i: 'Shield', h: 'Compliance Ready', d: 'Policies, SOC, ISO pathways and secure operations.' }, { i: 'Globe', h: 'Scale Fast', d: 'Multi-city ramp with proven campus and lateral channels.' }].map((b, k) => (
                <div key={k} className="bg-white p-8 rounded-lg border border-border card-premium elevation-hover animate-slide-up">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={b.i} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{b.h}</h3>
                  <p className="text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted/30 animate-fade-in">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">GCC Hiring FAQs</h2>
              <p className="text-xl text-muted-foreground">Clarity on setup, scale, and compliance.</p>
            </div>
            <div className="space-y-4">
              {[{ q: 'Do you help with the first 20 leadership hires?', a: 'Yes. We prioritize leadership and function heads to create a strong spine.' }, { q: 'Can you support multi-city GCCs?', a: 'Yes. We calibrate local talent pools and cost dynamics across hubs.' }, { q: 'What about compliance and IT policies?', a: 'We align with your InfoSec and HR teams and provide templates and partners.' }].map((f, i) => (
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
              Ready to Build Your GCC?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with us to establish or scale your Global Capability Center with 
              world-class talent. Our specialized expertise ensures successful GCC operations 
              from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start GCC Hiring
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
                  <a href="/services/International" className="text-background/80 hover:text-primary transition-colors">International Hiring</a>
                  <a href="/services/RPO" className="text-background/80 hover:text-primary transition-colors">RPO Solutions</a>
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

export default GCCHiring;
