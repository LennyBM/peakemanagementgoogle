
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
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
  MoveDown
} from 'lucide-react';

/**
 * PEAKE MANAGEMENT | ELITE ARCHITECTURE
 * Brand Guidelines: #1E5F74 (Teal), #F39A31 (Orange), #FFFFFF (Base)
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-4 border-b border-[#F5F5F5]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 max-w-[1440px] flex justify-between items-center">
        <div className="flex items-baseline gap-0 group cursor-pointer">
          <span className="text-2xl font-[800] tracking-tighter text-[#333333] transition-transform group-hover:-translate-y-1">PEAKE</span>
          <span className="text-2xl font-[700] tracking-tighter text-[#1E5F74] transition-transform group-hover:translate-y-1">MANAGEMENT</span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {['System', 'Niches', 'Investment'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/60 hover:text-[#1E5F74] transition-all">
              {item}
            </a>
          ))}
          <button className="relative overflow-hidden bg-[#F39A31] text-[#333333] px-8 py-4 rounded-[8px] font-[700] text-[12px] uppercase tracking-[0.2em] group transition-all hover:shadow-[0_20px_40px_-15px_rgba(243,154,49,0.4)]">
            <span className="relative z-10">Start The Ascent</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        <button className="lg:hidden text-[#1E5F74]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Modern Overlay Menu */}
      <div className={`fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-12 transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
         {['System', 'Niches', 'Investment', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-5xl font-[800] text-[#333333] hover:text-[#F39A31] transition-colors tracking-tighter uppercase">{item}</a>
         ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Precision Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E5F74 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-8 max-w-[1440px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4 animate-reveal">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#1E5F74]" />
                <span className="text-[11px] font-[800] uppercase tracking-[0.6em] text-[#1E5F74]">The Growth Architects</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-[800] text-[#333333] leading-[0.85] tracking-tighter">
                ELEVATING <br />
                <span className="text-[#1E5F74] relative">
                  TOURISM
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#F39A31]/10 -z-10" />
                </span><br />
                & GROWTH.
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-end">
               <p className="text-xl text-[#333333]/80 leading-relaxed font-[500] border-l-4 border-[#F39A31] pl-8 max-w-md">
                 We combine advertising, social media, and automation into high-performance systems that <span className="text-[#1E5F74] font-[700]">increase revenue</span> without increasing headcount.
               </p>
               <div className="flex flex-col gap-6">
                 <button className="bg-[#F39A31] text-[#333333] w-fit px-12 py-6 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] transition-all hover:scale-[1.05] hover:shadow-2xl flex items-center gap-4 group">
                    Secure Strategy Call <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <div className="flex items-center gap-4 text-[#333333]/40 text-[10px] font-[800] uppercase tracking-widest">
                   <MoveDown className="animate-bounce" size={16} />
                   <span>Specialisms Below</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative mt-20 lg:mt-0">
            <div className="relative aspect-[3/4] rounded-[12px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,95,116,0.3)] animate-float">
               <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Hospitality" />
               <div className="absolute inset-0 bg-[#1E5F74]/10 mix-blend-multiply" />
            </div>
            {/* Architectural Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-[#F39A31] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-[#1E5F74] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ label, title, light = false }) => (
  <div className="mb-24 space-y-6">
    <div className="flex items-center gap-4">
      <span className={`text-[10px] font-[800] uppercase tracking-[0.6em] ${light ? 'text-white/40' : 'text-[#1E5F74]'}`}>// {label}</span>
    </div>
    <h2 className={`text-6xl md:text-8xl font-[800] tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-[#333333]'}`}>
      {title}<span className="text-[#F39A31]">.</span>
    </h2>
  </div>
);

const SystemSection = () => {
  const steps = [
    { id: "01", icon: <Globe />, title: "Digital Hubs", desc: "High-conversion architecture engineered for direct bookings." },
    { id: "02", icon: <Zap />, title: "Precision PPC", desc: "Technical acquisition targeting high-intent tourists." },
    { id: "03", icon: <Users />, title: "Authority Engine", desc: "Founder-led positioning to dominate local markets." },
    { id: "04", icon: <MessageSquare />, title: "Closing Systems", desc: "Automated enquiry handling that converts lead to revenue." }
  ];

  return (
    <section id="system" className="py-40 bg-white">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <SectionHeader label="Growth Architecture" title="Complete Systems" />
        
        <div className="grid lg:grid-cols-4 gap-0 border-t border-l border-[#F5F5F5]">
          {steps.map((step, i) => (
            <div key={i} className="p-16 border-r border-b border-[#F5F5F5] group hover:bg-[#1E5F74] transition-all duration-500 relative overflow-hidden">
              <span className="text-8xl font-[800] text-[#F5F5F5] absolute -bottom-4 -right-4 group-hover:text-white/5 transition-colors">{step.id}</span>
              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-[8px] flex items-center justify-center text-[#1E5F74] group-hover:bg-[#F39A31] group-hover:text-[#333333] transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-[800] text-[#333333] group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-[#333333]/60 font-[500] leading-relaxed group-hover:text-white/70 transition-colors">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Niches = () => {
  const categories = [
    { title: "Holiday Parks", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000" },
    { title: "Country Clubs", img: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&q=80&w=1000" },
    { title: "Elite Trade", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <section id="niches" className="py-40 bg-[#F5F5F5]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <SectionHeader label="Specialisms" title="Market Mastery" />
        <div className="grid lg:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="group relative h-[600px] overflow-hidden rounded-[12px] shadow-2xl">
              <img src={cat.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={cat.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E5F74] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-[800] text-white tracking-tighter uppercase">{cat.title}</h3>
                <button className="flex items-center gap-3 text-white font-[700] text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Results <ArrowUpRight size={14} className="text-[#F39A31]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Investment = () => {
  return (
    <section id="investment" className="py-40 bg-white">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <SectionHeader label="Pricing" title="Growth Models" />
            <p className="text-2xl text-[#333333]/50 font-[500] leading-relaxed pb-6">
              "We provide complete systems, not just tasks. Choose your altitude."
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { name: "Ascent", price: "1,250", features: ["Conversion Hub", "Local Search Dominance"] },
            { name: "Summit", price: "2,850", features: ["Full Ad Systems", "Content Engine", "Sales Automation"], featured: true },
            { name: "Apex", price: "5,000", features: ["Enterprise Systems", "Dedicated Growth Officer"] }
          ].map((tier, i) => (
            <div key={i} className={`p-16 rounded-[12px] flex flex-col transition-all duration-500 ${tier.featured ? 'bg-[#1E5F74] text-white shadow-[0_40px_80px_-20px_rgba(30,95,116,0.4)] scale-105 z-10' : 'bg-white border border-[#F5F5F5] shadow-sm'}`}>
              <h4 className={`text-[10px] font-[800] uppercase tracking-[0.4em] mb-12 ${tier.featured ? 'text-[#F39A31]' : 'text-[#1E5F74]'}`}>{tier.name} System</h4>
              <div className="mb-12">
                <span className="text-xl font-[700] mr-2 opacity-40">£</span>
                <span className="text-7xl font-[800] tracking-tighter">{tier.price}</span>
                <span className="text-[10px] font-[800] uppercase tracking-widest opacity-40 block mt-2">Per Month Investment</span>
              </div>
              <ul className="space-y-6 mb-16 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-4 text-sm font-[600]">
                    <CheckCircle2 size={18} className={tier.featured ? 'text-[#F39A31]' : 'text-[#1E5F74]'} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-6 rounded-[8px] font-[800] text-[12px] uppercase tracking-[0.4em] transition-all hover:scale-[1.02] ${tier.featured ? 'bg-[#F39A31] text-[#333333]' : 'bg-[#1E5F74] text-white'}`}>
                Apply For System
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-[#1E5F74] relative overflow-hidden">
       {/* Background Noise Effect */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
       
       <div className="container mx-auto px-8 max-w-[1440px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="text-white space-y-12">
              <SectionHeader label="Connect" title="Start The Journey" light />
              <p className="text-2xl text-white/70 leading-relaxed font-[500] max-w-md">
                Ready to transform your inconsistent growth into a complete, revenue-generating system?
              </p>
              <div className="space-y-8 pt-8">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F39A31] group-hover:border-[#F39A31] transition-all"><Phone size={24}/></div>
                  <span className="text-3xl font-[800] tracking-tighter transition-all group-hover:translate-x-4">+44 (0) 20 7946 0000</span>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F39A31] group-hover:border-[#F39A31] transition-all"><Mail size={24}/></div>
                  <span className="text-3xl font-[800] tracking-tighter transition-all group-hover:translate-x-4">ascent@peake.agency</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 rounded-[12px] shadow-3xl">
              <form className="space-y-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/40">Your Name</label>
                    <input type="text" className="w-full border-b-2 border-[#F5F5F5] py-4 outline-none focus:border-[#F39A31] font-[600] text-xl transition-all" placeholder="Enter Full Name" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/40">Email Address</label>
                    <input type="email" className="w-full border-b-2 border-[#F5F5F5] py-4 outline-none focus:border-[#F39A31] font-[600] text-xl transition-all" placeholder="Enter Email" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/40">Growth Sector</label>
                    <select className="w-full border-b-2 border-[#F5F5F5] py-4 outline-none focus:border-[#F39A31] font-[600] text-xl bg-white">
                      <option>Holiday Parks</option>
                      <option>Country Clubs</option>
                      <option>Trade Contractor</option>
                      <option>Other Premium</option>
                    </select>
                 </div>
                 <button className="w-full bg-[#1A1F2E] text-white py-6 rounded-[8px] font-[800] text-[12px] uppercase tracking-[0.4em] hover:bg-[#F39A31] hover:text-[#333333] transition-all shadow-xl">
                    Generate My Strategy Call
                 </button>
              </form>
            </div>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-[#F5F5F5]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex items-baseline gap-0">
            <span className="text-xl font-[800] tracking-tighter text-[#333333]">PEAKE</span>
            <span className="text-xl font-[700] tracking-tighter text-[#1E5F74]">MANAGEMENT</span>
          </div>

          <div className="flex gap-12">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-[#333333]/30 hover:text-[#1E5F74] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#333333]/20 italic">
            © 2026 Peake Management Ltd. UK-Wide Growth Architecture.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-['Montserrat',sans-serif] bg-white text-[#333333] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        html { scroll-behavior: smooth; }

        @keyframes reveal {
          from { clip-path: inset(100% 0 0 0); transform: translateY(30px); }
          to { clip-path: inset(0 0 0 0); transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-reveal {
          animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        ::selection {
          background: #F39A31;
          color: white;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #1E5F74; border-radius: 4px; }
      `}</style>
      <Navbar />
      <Hero />
      <SystemSection />
      <Niches />
      <Investment />
      <Contact />
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
