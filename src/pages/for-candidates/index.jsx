import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CareerToolsSection from './components/CareerToolsSection';
import JobMatchingSection from './components/JobMatchingSection';
import ProfileBuilderSection from './components/ProfileBuilderSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import ResourcesSection from './components/ResourcesSection';

const ForCandidatesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CareerToolsSection />
        <JobMatchingSection />
        <ProfileBuilderSection />
        <SuccessStoriesSection />
        <ResourcesSection />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-elevation rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M3 21L12 3L21 21H18L12 9L6 21H3Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-lg font-bold">NorthStep</span>
              </div>
              <p className="text-sm text-background/70">
                Transforming careers through strategic talent partnerships and intelligent matching.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">For Candidates</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Job Search</li>
                <li>Career Assessment</li>
                <li>Resume Builder</li>
                <li>Interview Prep</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Career Guides</li>
                <li>Salary Calculator</li>
                <li>Industry Insights</li>
                <li>Success Stories</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; {new Date()?.getFullYear()} NorthStep Recruiting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForCandidatesPage;