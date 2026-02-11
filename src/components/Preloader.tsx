
import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [visible, setVisible] = useState(true);
    const [splitting, setSplitting] = useState(false);

    useEffect(() => {
        // 1. Initial Pulse (0-1.2s)

        // 2. Split Animation (1.2s)
        const splitTimer = setTimeout(() => {
            setSplitting(true);
        }, 1200);

        // 3. Remove from DOM (2s)
        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => {
            clearTimeout(splitTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${splitting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative">
                {/* Pulse Ring */}
                <div className="absolute inset-0 bg-[#F39A31]/20 rounded-full animate-ping" />

                <div className={`flex items-baseline gap-0 transition-transform duration-700 ${splitting ? 'scale-150' : 'scale-100'}`}>
                    <span className={`text-4xl md:text-6xl font-[800] tracking-tighter text-[#333333] transition-transform duration-700 ${splitting ? '-translate-x-12 opacity-0' : 'translate-x-0'}`}>
                        PEAKE
                    </span>
                    <span className={`text-4xl md:text-6xl font-[700] tracking-tighter text-[#1E5F74] transition-transform duration-700 ${splitting ? 'translate-x-12 opacity-0' : 'translate-x-0'}`}>
                        MANAGEMENT
                    </span>
                </div>

                {/* Loading Bar */}
                <div className={`absolute -bottom-8 left-0 w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden transition-opacity duration-300 ${splitting ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="h-full bg-[#F39A31] w-full animate-loading-bar origin-left" />
                </div>
            </div>

            <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        .animate-loading-bar {
          animation: loading 1.5s cubic-bezier(0.2, 0, 0, 1) forwards;
        }
      `}</style>
        </div>
    );
};

export default Preloader;
