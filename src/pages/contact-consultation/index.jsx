import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationScheduler from './components/ConsultationScheduler';
import ContactForms from './components/ContactForms';
import OfficeLocations from './components/OfficeLocations';
import LiveChatWidget from './components/LiveChatWidget';

const ContactConsultation = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState(null);

  const handleScheduleConsultation = () => {
    setIsSchedulerOpen(true);
  };

  const handleCloseScheduler = () => {
    setIsSchedulerOpen(false);
  };

  const handleMethodSelect = (method) => {
    setSelectedContactMethod(method);
    
    // Handle different contact methods
    switch (method?.id) {
      case 'consultation':
        setIsSchedulerOpen(true);
        break;
      case 'phone':
        window.open('tel:(555) 123-4567', '_self');
        break;
      case 'email':
        window.open('mailto:contact@northstep.com?subject=Inquiry from Website', '_self');
        break;
      case 'chat':
        // Live chat widget will handle this
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact & Consultation - NorthStep Recruiting</title>
        <meta 
          name="description" 
          content="Connect with NorthStep's expert recruiters. Schedule free consultations, get immediate support, and discover how we can help advance your career or find top talent for your organization." 
        />
        <meta name="keywords" content="recruitment consultation, career advice, hiring solutions, contact recruiter, free consultation, NorthStep contact" />
        <meta property="og:title" content="Contact & Consultation - NorthStep Recruiting" />
        <meta property="og:description" content="Schedule your free consultation with our expert recruiters. Multiple contact options available for immediate support." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://northstep.com/contact-consultation" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <ContactHero onScheduleConsultation={handleScheduleConsultation} />

        {/* Contact Methods */}
        <ContactMethods onMethodSelect={handleMethodSelect} />

        {/* Contact Forms */}
        <ContactForms />

        {/* Office Locations */}
        <OfficeLocations />

        {/* Consultation Scheduler Modal */}
        <ConsultationScheduler 
          isOpen={isSchedulerOpen} 
          onClose={handleCloseScheduler} 
        />

        {/* Live Chat Widget */}
        <LiveChatWidget />

        {/* Footer CTA Section */}
        <section className="py-16 bg-gradient-elevation text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Whether you're seeking your next career opportunity or looking to build an exceptional team, 
              we're here to guide you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScheduleConsultation}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 elevation-hover"
              >
                Schedule Free Consultation
              </button>
              <a
                href="tel:(555) 123-4567"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Call Now: (555) 123-4567
              </a>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-300">24hr</div>
                <div className="text-orange-100">Response Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-orange-100">Successful Placements</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">95%</div>
                <div className="text-orange-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactConsultation;