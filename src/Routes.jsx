import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import IndustriesWeServe from './pages/industries-we-serve';
import SuccessStoriesPage from './pages/success-stories';
import Homepage from './pages/homepage';
import ExecutiveSearch from './pages/services/ExecutiveSearch';
import SeniorHiring from './pages/services/SeniorHiring';
import International from './pages/services/International';
import RPO from './pages/services/RPO';
import GCCHiring from './pages/services/GCCHiring';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import CookiePolicy from './pages/policies/CookiePolicy';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/industries-we-serve" element={<IndustriesWeServe />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        
        {/* Service Pages */}
        <Route path="/services/ExecutiveSearch" element={<ExecutiveSearch />} />
        <Route path="/services/SeniorHiring" element={<SeniorHiring />} />
        <Route path="/services/International" element={<International />} />
        <Route path="/services/RPO" element={<RPO />} />
        <Route path="/services/GCCHiring" element={<GCCHiring />} />
        
        {/* Policy Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;