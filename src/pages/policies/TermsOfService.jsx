import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const TermsOfService = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service - NorthStep Global</title>
        <meta 
          name="description" 
          content="NorthStep Global Terms of Service - Review our terms and conditions for executive search, recruitment, and talent acquisition services." 
        />
      </Helmet>
      
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90 pt-16">
        <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-foreground/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using NorthStep Global's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                NorthStep Global provides executive search, recruitment process outsourcing (RPO), and talent acquisition services. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Executive search and senior-level recruitment</li>
                <li>Recruitment process outsourcing</li>
                <li>International talent acquisition</li>
                <li>GCC (Global Capability Center) hiring</li>
                <li>Industry-specific recruitment services</li>
                <li>Consultation and advisory services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">For Candidates</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    <li>Provide accurate and truthful information</li>
                    <li>Maintain confidentiality of client information</li>
                    <li>Notify us of any changes in availability or status</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">For Clients</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    <li>Provide accurate job descriptions and requirements</li>
                    <li>Maintain confidentiality of candidate information</li>
                    <li>Honor agreed-upon terms and payment schedules</li>
                    <li>Comply with all applicable employment laws</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Fees and Payment</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our service fees are based on the specific services provided and are outlined in individual service agreements. Payment terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Fees are typically based on successful placements</li>
                <li>Payment terms are specified in service agreements</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
              <p className="text-foreground/80 leading-relaxed">
                Both parties agree to maintain strict confidentiality regarding all information shared during the recruitment process. This includes candidate information, client requirements, and any proprietary business information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed">
                All content on our website, including text, graphics, logos, and software, is the property of NorthStep Global and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                NorthStep Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Guarantee and Warranty</h2>
              <p className="text-foreground/80 leading-relaxed">
                While we strive to provide the best possible service, we cannot guarantee specific outcomes. Our guarantee policies are outlined in individual service agreements and may vary based on the type of service provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p className="text-foreground/80 leading-relaxed">
                Either party may terminate the service agreement with written notice. Upon termination, all outstanding obligations must be fulfilled, and confidential information must be returned or destroyed as specified in the agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of New York.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifications</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Severability</h2>
              <p className="text-foreground/80 leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Email:</strong> legal@northstep.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> New York, NY
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/homepage" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2">
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
                <li><a href="/industries-we-serve" className="text-background/80 hover:text-primary transition-colors">Industries</a></li>
                <li><a href="/success-stories" className="text-background/80 hover:text-primary transition-colors">Success Stories</a></li>
              </ul>
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
    </>
  );
};

export default TermsOfService;
