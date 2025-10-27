import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
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
            </div>
          </div>
        </section>

        {/* RPO Overview (text-focused for HR) */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Recruitment Process Outsourcing (RPO)</h2>
            <p className="text-sm uppercase tracking-wide text-primary mb-6">Scalable talent, seamless integration</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In today's competitive talent landscape, managing recruitment surges, specialized hiring, or continuous talent acquisition
              can stretch internal resources thin. Northstep Global's Recruitment Process Outsourcing (RPO) offers a strategic solution,
              empowering your organization to scale hiring effectively with a partner fully embedded within your brand, tools, and unique
              ways of working. Our dedicated RPO squads operate as a seamless extension of your HR department, taking complete ownership
              of the recruitment lifecycle—from initial sourcing right through to offer management. We are relentlessly focused on
              continuously improving hiring speed, elevating candidate quality, and enhancing the overall candidate experience. Crucially,
              our flexible RPO model allows us to dynamically adjust capacity to your demand curve, ensuring you stay ahead of growth
              objectives without the burden of bloating your fixed costs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">What We Take Off Your Plate: Comprehensive RPO Solutions</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">Our RPO services are designed to absorb recruitment complexities,
              allowing your internal teams to focus on core strategic HR initiatives:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">End-to-End Talent Acquisition Management</h4>
                <p className="text-muted-foreground">From calibrated intake and robust pipeline building to multi-channel sourcing and
                advanced screening at scale, we manage every step efficiently.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Optimized Interview & Feedback Orchestration</h4>
                <p className="text-muted-foreground">We expertly orchestrate interviews, implement structured feedback loops, and
                ensure clear stakeholder alignment to streamline decision-making.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Brand-Safe Talent Marketing & Reporting</h4>
                <p className="text-muted-foreground">We uphold your employer brand with consistent talent marketing, transparent
                reporting, and strict process SLAs for accountability.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Flexible Capacity for Dynamic Needs</h4>
                <p className="text-muted-foreground">Dedicated support for seasonal peaks, critical projects, and specialized hiring
                initiatives—always maintaining uncompromising quality standards.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Why Our RPO Solutions Drive Success</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">Integrated Specialist Pods & Data-Led Prioritization:</span> We combine
                specialist pods with data-led prioritization and intelligent automation, eliminating inefficiencies and dead time between
                recruitment steps.</li>
                <li><span className="font-medium text-foreground">Reliable Throughput & Reduced Process Leaks:</span> Gain a consistent,
                reliable flow of qualified candidates with significantly fewer process leaks and more high-quality interviews.</li>
                <li><span className="font-medium text-foreground">Enhanced Control & Strategic Focus:</span> You retain full control over
                final hiring decisions while freeing internal teams to focus on strategic HR initiatives and employee development.</li>
                <li><span className="font-medium text-foreground">Superior Candidate Experience:</span> Every candidate receives a
                professional, engaging, and positive experience, enhancing your employer brand.</li>
              </ul>
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
      </main>
      <Footer />
    </div>
  );
};

export default RPO;
