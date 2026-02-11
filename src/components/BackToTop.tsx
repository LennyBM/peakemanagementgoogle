import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-[#1E5F74] hover:bg-[#F39A31] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                    aria-label="Back to top"
                >
                    <ArrowUp
                        size={24}
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </button>
            )}
        </>
    );
};

export default BackToTop;
