import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ForCandidatesPage from './pages/for-candidates';
import IndustriesWeServe from './pages/industries-we-serve';
import ContactConsultation from './pages/contact-consultation';
import SuccessStoriesPage from './pages/success-stories';
import AboutNorthStep from './pages/about-north-step';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/for-candidates" element={<ForCandidatesPage />} />
        <Route path="/industries-we-serve" element={<IndustriesWeServe />} />
        <Route path="/contact-consultation" element={<ContactConsultation />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/about-north-step" element={<AboutNorthStep />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;