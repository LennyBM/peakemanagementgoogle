
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { SchemaMarkup } from '../components/SchemaMarkup';
import WebsiteInquiryForm from '../components/WebsiteInquiryForm';

const SEO = ({ title, description, image = '/assets/hero-poster.webp', url = 'https://www.peakemanagement.com/websites' }: { title: string, description: string, image?: string, url?: string }) => (
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


interface FAQItemProps {
    key?: React.Key;
    question: string;
    answer: string;
    isOpen: boolean;
    toggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggle }: FAQItemProps) => (
    <div className="border border-white/20 rounded-xl overflow-hidden mb-4 transition-all duration-300 hover:border-white/40 bg-white/5 shadow-lg group">
        <button
            onClick={toggle}
            className="w-full flex items-center justify-between p-6 text-left"
            aria-expanded={isOpen}
        >
            <span className="text-lg font-[800] text-white pr-8 group-hover:text-[#F39A31] transition-colors">{question}</span>
            <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ArrowRight className={`w-4 h-4 text-white transition-transform ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
            </div>
        </button>
        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <div className="p-6 pt-0 text-white/80 leading-relaxed font-medium">
                    {answer}
                </div>
            </div>
        </div>
    </div>
);

const WebsitesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        { q: "Why is a 'High-Performance' website better?", a: "Most websites are static brochures. Ours are dynamic sales engines designed to capture attention, build trust, and drive action using psychology-backed layouts and automation." },
        { q: "How long does it take to build?", a: "We typically launch within 2 weeks. Our streamlined process ensures we move fast without compromising quality." },
        { q: "Do I need to write the copy?", a: "No. We handle the copywriting based on your business goals. We just need a 30-minute discovery call to extract your expertise." },
        { q: "What happens after it launches?", a: "We provide ongoing support, hosting, and optimisation to ensure your site continues to perform and generate leads." }
    ];



    return (
        <div className="min-h-screen bg-peake-black text-white pb-20 font-['Montserrat',sans-serif] overflow-x-hidden">
            <SEO
                title="World-Class Conversion Websites | Peake Management"
                description="We build high-performance revenue engines. Specialised conversion design for businesses that demand results. From £1,500."
            />
            <SchemaMarkup type="breadcrumb" />

            {/* 1. Above the Fold = Premium Atmospheric Hero */}
            <div className="relative flex flex-col overflow-hidden bg-[#0D1B1F]">
                {/* Dynamic Glass Orbs */}
                <div className="absolute orb-glow w-[500px] h-[500px] bg-[#1E5F74] -top-48 -left-48 animate-float-slow -z-10 opacity-10 rounded-full blur-[120px]"></div>
                <div className="absolute orb-glow w-[400px] h-[400px] bg-[#F39A31] -bottom-48 -right-48 animate-float-slow -z-10 opacity-10 rounded-full blur-[120px]" style={{ animationDelay: '-5s' }}></div>
                {/* Advanced Background Mesh Gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-peake-teal/10 rounded-full blur-[120px] animate-float-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-peake-orange/5 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '-5s' }} />
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[80px] animate-pulse" />
                </div>

                <div className="container mx-auto px-6 pt-20 pb-24 relative z-10">
                    <div className="max-w-[1200px] mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                            <Zap size={18} className="text-peake-orange" />
                            <span className="text-[11px] font-[800] uppercase tracking-[0.4em] text-white/90">Premium Revenue Engines</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-[900] tracking-tighter leading-[0.85]">
                            WEBSITES THAT CONVERT <br />
                            <span className="text-peake-orange drop-shadow-[0_0_30px_rgba(243,154,49,0.3)]">INTO CUSTOMERS.</span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-[500] leading-relaxed">
                            Most sites are digital brochures. We build 24/7 sales machines <br className="hidden md:block" /> that capture leads and scale your revenue automatically.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">
                            <button
                                onClick={() => document.getElementById('website-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                                className="relative group w-full md:w-auto"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-peake-orange to-peake-teal rounded-full opacity-60 group-hover:opacity-100 blur-md transition duration-500"></div>
                                <div className="relative w-full md:w-auto bg-[#111] text-white px-12 py-6 rounded-full font-[800] text-sm uppercase tracking-widest hover:bg-peake-orange hover:text-peake-black transition-all duration-300 flex items-center justify-center gap-3">
                                    Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>

                            <div className="flex flex-col items-center md:items-start gap-1">
                                <span className="text-white font-[800] text-lg tracking-tight">From £1,500</span>
                                <span className="text-peake-orange text-[10px] font-black uppercase tracking-widest mt-1">Monthly terms available</span>
                                <span className="text-white/60 text-[10px] font-[700] uppercase tracking-widest">2 Week Turnaround</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-reveal opacity-0" style={{ animationDelay: '1.2s' }}>
                    <div className="flex flex-col items-center gap-3 animate-scroll-bounce opacity-30 hover:opacity-100 transition-opacity cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-white font-[700]">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-peake-teal to-transparent group-hover:h-16 transition-all duration-500"></div>
                    </div>
                </div>
            </div>

            {/* 2. Value Proposition = Clear Exchange (Do X -> Get Y) */}
            <div className="bg-peake-black py-40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-peake-teal/30 to-transparent"></div>

                <div className="container mx-auto px-8 max-w-[1440px] relative z-10">
                    <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
                        {/* Outcome 1: Improvement (Revenue) */}
                        <div className="group relative p-10 rounded-[2.5rem] glass-panel transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-peake-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 bg-peake-teal/10 rounded-3xl flex items-center justify-center group-hover:bg-peake-teal transition-all duration-500 border border-white/10 group-hover:scale-110 shadow-2xl">
                                    <TrendingUp className="text-peake-teal group-hover:text-white transition-colors duration-500" size={36} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-[900] tracking-tight text-white leading-tight">Turn Traffic <br />Into Revenue</h3>
                                    <p className="text-white/80 leading-relaxed font-medium text-lg group-hover:text-white/80 transition-colors">
                                        Visitors don't pay the bills—customers do. We engineer user journeys that guide people from "just looking" to <span className="text-peake-orange font-bold uppercase tracking-wider text-[10px] ml-1">Profit</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Outcome 2: Pain Removal (Automation) */}
                        <div className="group relative p-10 rounded-[2.5rem] glass-panel transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden border-peake-orange/20">
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-peake-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-peake-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 bg-peake-orange/10 rounded-3xl flex items-center justify-center group-hover:bg-peake-orange transition-all duration-500 border border-white/10 group-hover:scale-110 shadow-2xl">
                                    <Zap className="text-peake-orange group-hover:text-peake-black transition-colors duration-500" size={36} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-[900] tracking-tight text-white leading-tight">Automate <br />Your Growth</h3>
                                    <p className="text-white/80 leading-relaxed font-medium text-lg group-hover:text-white/80 transition-colors">
                                        Stop chasing leads. Our systems qualify, book, and follow up—so you only talk to <span className="text-peake-orange font-bold uppercase tracking-wider text-[10px] ml-1">Qualified Buyers</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Outcome 3: Clarity (Premium Brand) */}
                        <div className="group relative p-10 rounded-[2.5rem] glass-panel transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-white transition-all duration-500 border border-white/10 group-hover:scale-110 shadow-2xl">
                                    <ShieldCheck className="text-white group-hover:text-peake-black transition-colors duration-500" size={36} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-[900] tracking-tight text-white leading-tight">Dominate <br />Your Market</h3>
                                    <p className="text-white/80 leading-relaxed font-medium text-lg group-hover:text-white/80 transition-colors">
                                        First impressions are everything. We design premium digital experiences that position you as the <span className="text-peake-orange font-bold uppercase tracking-wider text-[10px] ml-1">Market Leader</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Social Proof Marquee (Trusted By) - Unified with Dark Theme */}
            <div className="bg-peake-black/50 py-24 relative overflow-hidden border-y border-white/5">
                <span className="text-[10px] font-[900] uppercase tracking-[0.5em] text-white/80">Peake Management Trusted By</span>
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-12 items-center opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                        {[
                            "Precision Decking Ltd", "Whalesborough", "Atlantic Bays", "Whitsand Bay Fort",
                            "Ladera Retreats", "Pods Broadway", "Bude Barkery", "Stanford Park",
                            "Abbotts Salford", "The Weir", "Broadway Country House", "Bude Skin Clinic"
                        ].map((name, i) => (
                            <span key={i} className="text-2xl font-[900] text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors mx-4 cursor-default">
                                {name}
                            </span>
                        ))}
                        {[
                            "Precision Decking Ltd", "Whalesborough", "Atlantic Bays", "Whitsand Bay Fort",
                            "Ladera Retreats", "Pods Broadway", "Bude Barkery", "Stanford Park",
                            "Abbotts Salford", "The Weir", "Broadway Country House", "Bude Skin Clinic"
                        ].map((name, i) => (
                            <span key={`dup-${i}`} className="text-2xl font-[900] text-white/20 uppercase tracking-tighter hover:text-white/40 transition-colors mx-4 cursor-default">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Proof (Outcomes, not just features) */}
            <div className="container mx-auto px-8 max-w-[1440px] py-40">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2 space-y-12">
                        <div className="inline-block px-5 py-2 glass-panel rounded-full">
                            <span className="text-[10px] font-[900] uppercase tracking-[0.3em] text-peake-orange">Case Study</span>
                        </div>

                        <h2 className="text-6xl md:text-7xl font-[900] tracking-tighter leading-[0.8] text-white">
                            RESULTS YOU CAN <br /><span className="text-gradient">MEASURE.</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start group">
                                <div className="mt-1 bg-green-500/10 p-2 rounded-xl border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-500 rotate-3 group-hover:rotate-0">
                                    <CheckCircle2 size={24} className="text-green-500" strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-[900] text-white">Precision Decking Ltd</h4>
                                    <p className="text-white/80 text-lg mt-3 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                        Transformed from a local service provider to a high-demand national brand with a fully automated lead gen system.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div className="glass-panel p-8 rounded-[2rem] group hover:border-peake-teal/50 transition-all duration-500">
                                    <span className="block text-5xl font-[900] text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">300%</span>
                                    <span className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Inquiries Increase</span>
                                </div>
                                <div className="glass-panel p-8 rounded-[2rem] group hover:border-peake-orange/50 transition-all duration-500">
                                    <span className="block text-5xl font-[900] text-peake-orange tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">#1</span>
                                    <span className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Google Ranking</span>
                                </div>
                            </div>
                        </div>

                        <a href="https://www.precisiondecking.co.uk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-white font-[900] text-xs uppercase tracking-[0.3em] hover:text-peake-orange transition-all duration-500 group">
                            <span>See the live result</span>
                            <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:bg-peake-orange group-hover:text-peake-black transition-all">
                                <ArrowUpRight size={16} strokeWidth={3} />
                            </div>
                        </a>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-peake-teal/20 rounded-[3rem] blur-3xl -rotate-6 animate-pulse"></div>
                        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] group">
                            <img
                                src="/assets/precision-decking.jpeg"
                                alt="Precision Decking High Performance Website"
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-peake-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-10 left-10 glass-panel px-8 py-4 rounded-2xl">
                                <p className="text-white font-[900] text-[10px] uppercase tracking-[0.3em]">Built for Scale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── WEBSITE INQUIRY FORM ── */}
            <div id="website-inquiry" className="bg-[#0D1B1F] py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-peake-orange/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[60%] bg-peake-teal/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-peake-orange/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-8 max-w-[1440px] relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Left — pitch */}
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/15">
                                    <Zap size={14} className="text-peake-orange" />
                                    <span className="text-[10px] font-[900] uppercase tracking-[0.4em] text-white/80">Start Your Project</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-[900] tracking-tighter leading-[0.85] text-white">
                                    READY TO BUILD<br />
                                    <span className="text-peake-orange">SOMETHING GREAT?</span>
                                </h2>
                                <p className="text-white/70 text-lg font-[500] leading-relaxed max-w-md">
                                    Fill in your brief below. We'll review it and come back to you within 24 hours with a tailored proposal — no fluff, no hard sell.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {[
                                    '2-week average launch time',
                                    'Copywriting included — no writing needed',
                                    'Ongoing support & hosting available',
                                    'No long contracts',
                                ].map(text => (
                                    <div key={text} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-peake-orange/10 border border-peake-orange/30 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 size={14} className="text-peake-orange" />
                                        </div>
                                        <span className="text-white/80 font-[600] text-sm">{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="glass-panel rounded-2xl p-6 space-y-2">
                                <p className="text-peake-orange font-[900] text-[10px] uppercase tracking-[0.3em]">From</p>
                                <p className="text-white font-[900] text-4xl tracking-tighter">£1,500</p>
                                <p className="text-white/50 text-xs font-[700] uppercase tracking-widest">Monthly plans available</p>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
                            <WebsiteInquiryForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. FAQ / Strategic Insight */}
            <div className="container mx-auto px-8 max-w-[1440px] py-40">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-5xl md:text-7xl font-[900] tracking-tighter text-white">
                            DEEP <span className="text-gradient">DIVE.</span>
                        </h2>
                        <p className="text-white/60 text-lg font-medium">Clear answers for ambitious founders.</p>
                    </div>

                    <div className="grid gap-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFAQ === index}
                                toggle={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Performance HUD — removed; form section above handles conversion */}
        </div>
    );
}

export default WebsitesPage;
