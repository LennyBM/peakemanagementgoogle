
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isDarkPage = location.pathname === '/websites';

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
                        <span className={`text-2xl font-[800] tracking-tighter transition-transform group-hover:-translate-y-1 ${isDarkPage ? 'text-white' : 'text-[#333333]'}`}>PEAKE</span>
                        <span className={`text-2xl font-[800] tracking-tighter transition-transform group-hover:translate-y-1 ${isDarkPage ? 'text-peake-orange' : 'text-[#1E5F74]'}`}>MANAGEMENT</span>
                    </Link>

                    <div className="hidden lg:block">
                        <Link to="/websites" className={`px-6 py-2 rounded-full font-[800] text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(243,154,49,0.5)] ${location.pathname === '/websites' ? 'bg-[#F39A31] text-[#333333]' : 'bg-gradient-to-r from-[#1E5F74] to-[#F39A31] text-white hover:brightness-110 active:scale-95'}`}>
                            Need a Website?
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-12">
                    <Link to="/about" className={`text-[10px] font-[800] uppercase tracking-[0.4em] transition-all ${isDarkPage ? 'text-white/80 hover:text-peake-orange' : 'text-[#333333]/60 hover:text-[#1E5F74]'}`}>About</Link>
                    <Link to="/results" className={`text-[10px] font-[800] uppercase tracking-[0.4em] transition-all ${isDarkPage ? 'text-white/80 hover:text-peake-orange' : 'text-[#333333]/60 hover:text-[#1E5F74]'}`}>Results</Link>
                    <Link to="/services" className={`text-[10px] font-[800] uppercase tracking-[0.4em] transition-all ${isDarkPage ? 'text-white/80 hover:text-peake-orange' : 'text-[#333333]/60 hover:text-[#1E5F74]'}`}>Services</Link>
                    <button onClick={() => scrollToSection('contact')} className={`text-[10px] font-[800] uppercase tracking-[0.4em] transition-all ${isDarkPage ? 'text-white/80 hover:text-peake-orange' : 'text-[#333333]/60 hover:text-[#1E5F74]'}`}>Contact</button>

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
                <Link to="/websites" onClick={() => setIsOpen(false)} className="text-5xl font-[800] text-[#333333] hover:text-[#F39A31] transition-colors tracking-tighter uppercase border-b-4 border-[#F39A31]">Need a Website?</Link>
                <a href="https://wa.me/447375064514" className="flex items-center gap-4 text-3xl font-[800] text-[#25D366] mt-8 uppercase tracking-widest">
                    <Phone size={32} /> WhatsApp
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
