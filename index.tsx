

import React, { useState, useEffect } from 'react';
import './src/index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SchemaMarkup } from './src/components/SchemaMarkup';
import CookieConsent from './src/components/CookieConsent';
import BackToTop from './src/components/BackToTop';
import {
  X,
  Menu,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  ChevronRight,
  Globe,
  Zap,
  Users,
  MessageSquare,
  MoveDown,
  Monitor,
  Megaphone,
  Cpu,
  BarChart3,
  Star,
  Quote,
  Download
} from 'lucide-react';

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

const LatestInsights = React.lazy(() => import('./src/components/LatestInsights'));
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

// --- SEO COMPONENT ---
interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, image = '/assets/hero-poster.jpg', url = 'https://www.peakemanagement.com' }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </Helmet>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-4 border-b border-[#F5F5F5]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 max-w-[1440px] flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" onClick={handleLogoClick} className="flex items-baseline gap-0 group cursor-pointer" aria-label="Peake Management Home">
            <span className="text-2xl font-[800] tracking-tighter text-[#333333] transition-transform group-hover:-translate-y-1">PEAKE</span>
            <span className="text-2xl font-[800] tracking-tighter text-[#1E5F74] transition-transform group-hover:translate-y-1">MANAGEMENT</span>
          </Link>

          <div className="hidden lg:block">
            <Link to="/websites" className={`px-6 py-2 rounded-full font-[800] text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(243,154,49,0.5)] ${location.pathname === '/websites' ? 'bg-[#F39A31] text-[#333333]' : 'bg-gradient-to-r from-[#1E5F74] to-[#F39A31] text-white'}`}>
              View Websites
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          <Link to="/about" className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/60 hover:text-[#1E5F74] transition-all">About</Link>
          <Link to="/results" className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/60 hover:text-[#1E5F74] transition-all">Results</Link>
          <Link to="/services" className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/60 hover:text-[#1E5F74] transition-all">Services</Link>
          <button onClick={() => scrollToSection('contact')} className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/60 hover:text-[#1E5F74] transition-all">Contact</button>

          <a
            href="https://wa.me/447375064514"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-[800] text-[10px] uppercase tracking-[0.2em] hover:bg-[#128C7E] transition-all shadow-[0_10px_20px_-10px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(37,211,102,0.6)]"
          >
            <Phone size={14} fill="currentColor" />
            <span>WhatsApp</span>
          </a>
        </div>

        <button className="lg:hidden text-[#1E5F74]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-12 transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="text-5xl font-[800] text-[#333333] hover:text-[#F39A31] transition-colors tracking-tighter uppercase">Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-5xl font-[800] text-[#333333] hover:text-[#F39A31] transition-colors tracking-tighter uppercase">About</Link>
        <Link to="/results" onClick={() => setIsOpen(false)} className="text-5xl font-[800] text-[#333333] hover:text-[#F39A31] transition-colors tracking-tighter uppercase">Results</Link>
        <Link to="/websites" onClick={() => setIsOpen(false)} className="text-5xl font-[800] text-[#333333] hover:text-[#F39A31] transition-colors tracking-tighter uppercase border-b-4 border-[#F39A31]">View Websites</Link>
        <a href="https://wa.me/447375064514" className="flex items-center gap-4 text-3xl font-[800] text-[#25D366] mt-8 uppercase tracking-widest">
          <Phone size={32} /> WhatsApp
        </a>
      </div>
    </nav>
  );
};

const Hero = React.lazy(() => import('./src/components/Hero'));
const ClientLogos = React.lazy(() => import('./src/components/ClientLogos'));
const SystemSection = React.lazy(() => import('./src/components/SystemSection'));
const Investment = React.lazy(() => import('./src/components/Investment'));
const LeadMagnet = React.lazy(() => import('./src/components/LeadMagnet'));

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Peake Management | High-Performance Marketing"
        description="We help holiday parks and luxury resorts increase direct bookings through automated marketing systems and high-converting websites."
      />
      <Hero />
      <ClientLogos />
      <SystemSection />
      <LatestInsights />
      <Investment />
      <LeadMagnet />
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <SchemaMarkup />
      <BrowserRouter>
        <div className="font-['Montserrat',sans-serif] bg-white text-[#333333] antialiased">

          <Navbar />

          <main id="main-content">
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
              </Routes>
            </React.Suspense>

            <React.Suspense fallback={<div className="h-40 bg-[#1E5F74]" />}>
              <Contact />
            </React.Suspense>
          </main>
          <React.Suspense fallback={<div className="h-20 bg-white" />}>
            <Footer />
          </React.Suspense>
          <BackToTop />
          <CookieConsent />
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
