
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <footer className="py-20 bg-white border-t border-[#F5F5F5]">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="space-y-8">
                        <div className="flex items-baseline gap-0">
                            <span className="text-xl font-[800] tracking-tighter text-[#333333]">PEAKE</span>
                            <span className="text-xl font-[800] tracking-tighter text-[#1E5F74]">MANAGEMENT</span>
                        </div>

                        <div className="flex gap-12">
                            {/* Socials Removed */}
                        </div>
                    </div>

                    <div className="text-right space-y-4">
                        <div className="flex flex-wrap gap-6 justify-end text-[10px] font-[500] uppercase tracking-[0.2em] text-[#333333]/60">
                            <Link to="/about" className="hover:text-[#1E5F74] transition-colors" aria-label="Learn about Peake Management">About</Link>
                            <Link to="/faq" className="hover:text-[#1E5F74] transition-colors" aria-label="Frequently asked questions">FAQ</Link>
                            <Link to="/blog" className="hover:text-[#1E5F74] transition-colors" aria-label="Read our business insights">Insights</Link>
                            <Link to="/privacy" className="hover:text-[#1E5F74] transition-colors" aria-label="Privacy Policy">Privacy Policy</Link>
                            <Link to="/cookies" className="hover:text-[#1E5F74] transition-colors" aria-label="Cookie Policy">Cookies</Link>
                            <Link to="/terms" className="hover:text-[#1E5F74] transition-colors" aria-label="Terms of Service">Terms of Service</Link>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-[500] text-[#333333]/30">
                                © 2026 Peake Management Ltd. All rights reserved.
                            </p>
                            <p className="text-[10px] font-[500] text-[#333333]/30">
                                Company Number: 15574401 | Registered in Bude, Cornwall, England, UK
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
