import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - NorthStep Global</title>
        <meta 
          name="description" 
          content="NorthStep Global Privacy Policy - Learn how we collect, use, and protect your personal information in our recruitment and executive search services." 
        />
      </Helmet>
      
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90 pt-16">
        <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                NorthStep Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our executive search and recruitment services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Personal Information</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We may collect personal information including but not limited to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                    <li>Name, email address, and phone number</li>
                    <li>Professional background and work experience</li>
                    <li>Educational qualifications and certifications</li>
                    <li>Resume, CV, and portfolio information</li>
                    <li>Salary expectations and career preferences</li>
                    <li>References and recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Technical Information</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We automatically collect certain technical information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Providing executive search and recruitment services</li>
                <li>Matching candidates with suitable job opportunities</li>
                <li>Communicating with clients and candidates</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional activities (with consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>With potential employers (with your consent)</li>
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our cookie practices, please refer to our Cookie Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
              <p className="text-foreground/80 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children under 16.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-foreground/80">
                  <strong>Email:</strong> privacy@northstep.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> New York, NY
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

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
    </>
  );
};

export default PrivacyPolicy;
