
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        const shouldLoadVideo = () => {
            const isDesktop = window.innerWidth >= 1024;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            return isDesktop && !prefersReducedMotion;
        };

        if (shouldLoadVideo()) {
            const loadVideo = () => setVideoSrc('/assets/hero-video.mp4');

            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(() => setTimeout(loadVideo, 100));
            } else {
                setTimeout(loadVideo, 200);
            }
        }
    }, []);

    return (
        <section id="hero" className="relative min-h-screen bg-white flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[5] bg-grid-teal" />
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-poster.webp"
                    alt="Peake Management - High-performance marketing for UK holiday parks and luxury resorts"
                    width="1920"
                    height="1080"
                    className="absolute inset-0 w-full h-full object-cover scale-125 translate-x-12 z-[1] hero-media-filter"
                />
                <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover scale-125 translate-x-12 z-[2] opacity-0 transition-opacity duration-700 hero-media-filter"
                    onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
                >
                    {videoSrc && <source src={videoSrc} type="video/mp4" />}
                </video>
                <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] z-[3]" />
            </div>

            <div className="container mx-auto px-4 sm:px-8 max-w-[1440px] relative z-10">
                <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="lg:col-span-8 space-y-6 md:space-y-12">
                        <div className="space-y-3 md:space-y-4 animate-reveal">
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="h-[1px] w-8 md:w-12 bg-[#F39A31]" />
                                <span className="text-[9px] md:text-[11px] font-[800] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white bg-black/40 backdrop-blur-md px-2 py-1">Specialist Growth Agency for UK Leisure</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[800] text-white leading-[0.9] md:leading-[0.85] tracking-tighter drop-shadow-xl break-words">
                                UK HOLIDAY PARK <br />
                                <span className="text-[#F39A31] relative inline-block">
                                    MARKETING.
                                    <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-4 bg-white/10 -z-10" />
                                </span><br />
                                DRIVE DIRECT BOOKINGS.
                            </h1>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end">
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-xl text-white/90 leading-relaxed font-[500] border-l-4 border-[#F39A31] pl-8 max-w-md bg-black/30 backdrop-blur-sm p-4 rounded-r-lg">
                                    Hyper-targeted guest acquisition and AI-powered booking systems for UK holiday parks, luxury resorts, and high-end operators.
                                </p>
                                <p className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#F39A31] ml-8">
                                    // Proven systems for the UK's most ambitious leisure operators.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[#F39A31] text-[#333333] w-full sm:w-fit lg:w-full px-8 py-6 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] transition-all hover:scale-[1.05] hover:shadow-2xl flex items-center justify-center gap-4 group"
                                >
                                    Book Strategy Call <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                                </button>
                                <Link
                                    to="/results"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-full sm:w-fit lg:w-full px-8 py-6 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-[#333333] flex items-center justify-center gap-4 group"
                                >
                                    See Case Studies <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
