
import React, { useState, useEffect } from 'react';
import { Cookie, Shield, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
    interface Window {
        peakeInitTracking: (force?: boolean) => void;
    }
}

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = document.cookie.split('; ').find(row => row.startsWith('peake-consent='));
        if (!consent) {
            // Delay visibility for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (accepted: boolean) => {
        const expiry = new Date();
        expiry.setFullYear(expiry.getFullYear() + 1);
        document.cookie = `peake-consent=${accepted}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax; Secure`;

        if (accepted && window.peakeInitTracking) {
            window.peakeInitTracking(true);
        }

        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[200] max-w-md animate-reveal">
            <div className="bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#1E5F74]/10 p-8 relative overflow-hidden group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E5F74]/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-start gap-4 mb-6 relative">
                    <div className="w-12 h-12 bg-[#1E5F74] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#1E5F74]/20">
                        <Cookie size={24} />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-xl font-[800] text-[#333333] tracking-tight">Cookie Preferences</h4>
                        <p className="text-[10px] font-[800] uppercase tracking-[0.2em] text-[#1E5F74]">GDPR Compliance</p>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-2 -right-2 p-2 text-[#333333]/30 hover:text-[#333333] transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4 mb-8 relative">
                    <p className="text-sm text-[#333333]/60 font-[500] leading-relaxed">
                        We use cookies to enhance your experience, analyse site traffic, and support our marketing efforts. your data is handled with care.
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-[700] text-[#1E5F74]">
                        <Shield size={14} />
                        <span>View our <Link to="/privacy" className="underline hover:text-[#F39A31] transition-colors">Privacy Policy</Link></span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 relative">
                    <button
                        onClick={() => handleConsent(false)}
                        className="px-6 py-4 rounded-[12px] border-2 border-[#E5E5E5] text-[#333333]/60 font-[800] text-[10px] uppercase tracking-[0.2em] hover:border-[#1E5F74] hover:text-[#1E5F74] transition-all"
                    >
                        Decline
                    </button>
                    <button
                        onClick={() => handleConsent(true)}
                        className="px-6 py-4 rounded-[12px] bg-[#1E5F74] text-white font-[800] text-[10px] uppercase tracking-[0.2em] hover:bg-[#F39A31] hover:text-[#333333] transition-all shadow-lg shadow-[#1E5F74]/20 hover:shadow-[#F39A31]/20 group"
                    >
                        Accept All <ArrowRight className="inline-block ml-1 group-hover:translate-x-1 transition-transform" size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
