import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
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
            </div>
          </div>
        </section>
        {/* GCC Hiring Overview (text-focused) */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">GCC Hiring</h2>
            <p className="text-sm uppercase tracking-wide text-primary mb-6">Unlocking Talent in the Arabian Gulf</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Gulf Cooperation Council (GCC) region represents a dynamic and rapidly evolving economic powerhouse, offering immense
              opportunities alongside distinct talent acquisition challenges. At Northstep Global, we possess specialized expertise in
              navigating the unique cultural, regulatory, and market nuances of hiring across the UAE, Saudi Arabia, Qatar, Bahrain,
              Oman, and Kuwait. We are your trusted partner in identifying, attracting, and securing top-tier talent who not only possess
              the requisite skills but also seamlessly integrate into the vibrant business ecosystems and diverse workforces of the GCC.
              Our approach ensures you build robust, localized, and globally competitive teams essential for success in this thriving region.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Our Specialized Approach to GCC Talent Acquisition</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">Our deep understanding of the GCC market allows for a highly
              effective and culturally sensitive recruitment process:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Localized Market Intelligence</h4>
                <p className="text-muted-foreground">Unparalleled insights into GCC talent availability, salary benchmarks, and
                specific industry trends across sectors and nationalities within the region.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Cultural & Regulatory Acumen</h4>
                <p className="text-muted-foreground">Proficiency managing local labor laws, visa regulations, and cultural
                considerations to ensure a compliant, smooth hiring journey for clients and candidates.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Extensive Regional Network</h4>
                <p className="text-muted-foreground">A robust network across the GCC reaching passive and active candidates, including
                expatriate talent and highly skilled local professionals (GCC nationals).</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <h4 className="font-semibold text-foreground mb-2">Efficient Cross-Border Logistics</h4>
                <p className="text-muted-foreground">Streamlined interview scheduling across time zones, coordinated offer management,
                and essential relocation support tailored for the GCC context.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Where We Add Value in the GCC Market</h3>
            <div className="rounded-lg border border-border p-6 bg-muted/30">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">Strategic Market Entry & Expansion:</span> Sourcing critical leadership
                and functional teams for new operations or significant expansions within the GCC.</li>
                <li><span className="font-medium text-foreground">Specialized Sector Expertise:</span> Talent solutions for key growth
                sectors such as Finance, Technology, Energy, Construction, Healthcare, and Hospitality.</li>
                <li><span className="font-medium text-foreground">Local National Talent Development:</span> Supporting "Nationalization"
                initiatives by identifying and integrating highly capable GCC national talent.</li>
                <li><span className="font-medium text-foreground">Executive & Mid-Level Appointments:</span> From C-suite leaders driving
                regional strategy to skilled mid-level managers executing operations.</li>
                <li><span className="font-medium text-foreground">Volume Hiring for Projects:</span> Efficiently scaling teams for large-scale
                projects or new facility establishments within tight deadlines.</li>
              </ul>
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
      </main>
      <Footer />
    </div>
  );
};

export default GCCHiring;
