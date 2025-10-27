import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const CookiePolicy = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookie Policy - NorthStep Global</title>
        <meta 
          name="description" 
          content="NorthStep Global Cookie Policy - Learn about how we use cookies and similar technologies on our website to enhance your experience." 
        />
      </Helmet>
      
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90 pt-16">
        <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-foreground/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                NorthStep Global uses cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>User preference storage</li>
                <li>Marketing and advertising</li>
                <li>Security and fraud prevention</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Essential Cookies</h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      <strong>Examples:</strong> Session cookies, security tokens, user authentication cookies
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Analytics Cookies</h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Preference Cookies</h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    These cookies remember your choices and preferences to provide a more personalized experience.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      <strong>Examples:</strong> Language preferences, theme settings, location preferences
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Marketing Cookies</h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      <strong>Examples:</strong> Social media tracking, advertising networks, remarketing pixels
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For targeted advertising and marketing</li>
                <li><strong>Customer Support Tools:</strong> For live chat and support functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie Duration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Session Cookies</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while browsing our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Persistent Cookies</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    These cookies remain on your device for a set period or until you delete them. They remember your preferences and settings for future visits.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Browser Settings</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete existing cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Cookie Consent</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you choose to disable cookies, some features of our website may not function properly. This may include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80">
                <li>Inability to save your preferences</li>
                <li>Reduced website functionality</li>
                <li>Less personalized content</li>
                <li>Potential issues with form submissions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
      <Footer />
    </>
  );
};

export default CookiePolicy;
