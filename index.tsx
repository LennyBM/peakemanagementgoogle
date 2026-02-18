
import React from 'react';
import './src/index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SchemaMarkup } from './src/components/SchemaMarkup';
import CookieConsent from './src/components/CookieConsent';
import BackToTop from './src/components/BackToTop';
import Navbar from './src/components/Navbar';
import ErrorBoundary from './src/components/ErrorBoundary';

const HomePage = React.lazy(() => import('./src/pages/HomePage'));
const BlogIndex = React.lazy(() => import('./src/pages/BlogIndex'));
const ArticlePage = React.lazy(() => import('./src/pages/ArticlePage'));
const CaseStudyPage = React.lazy(() => import('./src/pages/CaseStudyPage'));
const ServicesPage = React.lazy(() => import('./src/pages/ServicesPage'));
const CaseStudiesIndex = React.lazy(() => import('./src/pages/CaseStudiesIndex'));
const WebsitesPage = React.lazy(() => import('./src/pages/WebsitesPage'));
const AboutPage = React.lazy(() => import('./src/pages/AboutPage'));
const PrivacyPolicy = React.lazy(() => import('./src/pages/legal/PrivacyPolicy'));
const CookiePolicy = React.lazy(() => import('./src/pages/legal/CookiePolicy'));
const TermsOfService = React.lazy(() => import('./src/pages/legal/TermsOfService'));
const FAQPage = React.lazy(() => import('./src/pages/FAQPage'));
const NotFoundPage = React.lazy(() => import('./src/pages/NotFoundPage'));

const Contact = React.lazy(() => import('./src/components/Contact'));
const Footer = React.lazy(() => import('./src/components/Footer'));

// Simple Loading Spinner
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1E5F74]"></div>
  </div>
);

/**
 * PEAKE MANAGEMENT | HIGH-PERFORMANCE TOURISM MARKETING
 * Brand Guidelines: #1E5F74 (Teal), #F39A31 (Orange), #FFFFFF (Base)
 */

// Hide the generic Contact section on pages that have their own form
const ContactSection = () => {
  const { pathname } = useLocation();
  if (pathname === '/websites') return null;
  return (
    <React.Suspense fallback={<div className="h-40 bg-[#1E5F74]" />}>
      <Contact />
    </React.Suspense>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="font-['Montserrat',sans-serif] bg-white text-[#333333] antialiased">

          <Navbar />

          <main id="main-content">
            <ErrorBoundary>
              <React.Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/websites" element={<WebsitesPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/results" element={<CaseStudiesIndex />} />
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:slug" element={<ArticlePage />} />
                  <Route path="/work/:slug" element={<CaseStudyPage />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/cookies" element={<CookiePolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </React.Suspense>
            </ErrorBoundary>

            <ContactSection />
          </main>

          <React.Suspense fallback={<div className="h-20 bg-white" />}>
            <Footer />
          </React.Suspense>
          <BackToTop />
          <CookieConsent />
          <SchemaMarkup type="organization" />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
