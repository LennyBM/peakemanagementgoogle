import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, TrendingUp, Users, Target, Quote } from 'lucide-react';
import { SchemaMarkup } from '../components/SchemaMarkup';

const CaseStudiesIndex = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Whalesborough expanded by default

    const studies = [
        {
            client: "Whalesborough Luxury Resort & Spa",
            subtitle: "Embedded Marketing Team Driving £1.4m Sales",
            industry: "Resort",
            date: "2024 - Present",
            image: "/assets/whalesborough-featured.jpg",
            tags: ["Resort", "Full Management", "PPC"],
            stats: [
                { label: "YOY Growth", value: "29%", icon: TrendingUp },
                { label: "Resort Sales", value: "£1.4m", icon: Target },
                { label: "Hotel Launch", value: "Successful", icon: Users }
            ],
            testimonial: {
                quote: "Rebecca sees us weekly and covers so many bases for us — she's very much one of the team. Nothing is too much.",
                author: "Resort Director",
                role: "Whalesborough Luxury Resort & Spa"
            },
            challenge: "Whalesborough Luxury Resort & Spa is a large, multi-offer destination — holiday cottages, luxury lodges for sale, a café, spa and gym, family farm experiences, events, and now a hotel. Managing marketing across so many moving parts required more than isolated campaigns. The team needed a partner who could give the site consistent attention, respond quickly, coordinate everything end-to-end, and support both bookings and sales across the entire resort.",
            solution: [
                "We act as Whalesborough's embedded marketing team, working closely with the directors and on-site staff week in, week out.",
                "Our role spans the full picture — from driving enquiries and bookings, to launching new offerings and supporting high-value lodge sales. We manage and coordinate:"
            ],
            services: [
                "All resort websites",
                "Meta & Google advertising",
                "Multiple Social Media Accounts",
                "Enquiry handling and lead follow-up",
                "Email setup and ongoing communications",
                "Print materials and on-site promotion",
                "Weekly planning and strategy meetings",
                "Campaigns for events, café promotions, family farm days, and seasonal peaks",
                "Marketing support for luxury lodge sales (including appointments and follow-up)"
            ],
            outcomes: [
                "29% year-on-year growth across the holiday cottage rental fleet.",
                "£1.4 million in sales supported across the wider resort.",
                "Successful launch and promotion of The Arvor Suites hotel.",
                "Consistent booking demand across cafés, events, family farm days, and leisure facilities.",
                "A joined-up marketing system that supports both short-term bookings and long-term asset sales."
            ],
            closing: "We're regularly on site, always available at the end of the phone, and closely integrated with the internal team — ensuring nothing falls through the cracks. Rather than chasing one-off wins, everything is built to compound."
        },
        {
            client: "Cambridge Country Club",
            subtitle: "High-Intent Lead Generation System",
            industry: "Golf & Leisure",
            date: "2024 - Present",
            image: "/assets/cambridge-country-club.jpg",
            tags: ["Golf & Leisure", "Lead Gen", "Sales"],
            stats: [
                { label: "Lodge Enquiries", value: "Qualified", icon: Target },
                { label: "Sales Support", value: "Focused", icon: Users },
                { label: "Demand", value: "Year-Round", icon: TrendingUp }
            ],
            testimonial: {
                quote: "I can rely on Peake Management to get customers in front of me and the team at any time of the year.",
                author: "Lee Lewis",
                role: "Sales Director"
            },
            challenge: "Luxury lodge enquiries were inconsistent, and the sales team needed better-qualified buyers. The club needed a system to deliver high-intent prospects, not just \"tyre-kickers.\"",
            solution: [
                "We implemented a targeted lead generation system focused on quality over quantity."
            ],
            services: [
                "Qualified Lodge Enquiries: High-intent buyers, not browsers.",
                "Sales Team Support: Focused conversations, less wasted time.",
                "Year-Round Demand: Consistent interest beyond peak periods."
            ],
            outcomes: [
                "The sales team now has a consistent pipeline of qualified leads, allowing them to focus on closing sales rather than chasing cold prospects."
            ]
        },
        {
            client: "Whitsand Bay Holiday Park",
            subtitle: "Multi-Channel Lodge Sales Strategy",
            industry: "Coastal Park",
            date: "2024 - Present",
            image: "/assets/whitsand-bay.jpg",
            tags: ["Coastal Park", "Meta Ads", "Open Days"],
            stats: [
                { label: "Enquiry Levels", value: "Increased", icon: TrendingUp },
                { label: "Conversations", value: "Meaningful", icon: Users },
                { label: "Support", value: "Meta Ads", icon: Target }
            ],
            testimonial: {
                quote: "I've recommended Peake Management more than once — they take their responsibility very seriously.",
                author: "Dan Woodhouse",
                role: "Sales Director"
            },
            challenge: "Whitsand Bay Holiday Park, located on the stunning Rame Peninsula, needed to increase interest in their luxury lodges and get more potential buyers in front of the sales team.",
            solution: [
                "We deployed a multi-channel acquisition strategy."
            ],
            services: [
                "Enquiry Levels: Significantly increased interest from target demographics.",
                "Buyer Conversations: Delivered leads that result in more meaningful sales conversations.",
                "Lodge Sales Support: Managed Meta ads and open days to drive footfall."
            ],
            outcomes: [
                "A reliable flow of potential buyers and a strong partnership with the sales director."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#333333]">
            <Helmet>
                <title>Client Success Stories | Peake Management</title>
                <meta name="description" content="See how we help ambitious businesses scale through high-performance marketing systems." />
            </Helmet>
            <SchemaMarkup type="breadcrumb" />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] bg-gradient-to-br from-[#1E5F74] to-[#0D3D4F] flex items-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F39A31 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-8 max-w-[1440px] relative z-10 py-32">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-block px-4 py-2 border border-[#F39A31] rounded-full">
                            <span className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#F39A31]">Proven Results</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-[800] tracking-tighter text-white leading-[0.9]">
                            CLIENT<br />
                            <span className="text-[#F39A31]">SUCCESS STORIES</span>
                        </h1>
                        <p className="text-xl text-white/80 font-[500] max-w-2xl leading-relaxed">
                            Real results for ambitious businesses. See how we transform marketing into measurable revenue and sustainable growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies Accordion */}
            <section className="py-32">
                <div className="container mx-auto px-8 max-w-[1200px] space-y-8">
                    {studies.map((study, i) => {
                        const isExpanded = expandedIndex === i;

                        return (
                            <article key={i} className="border border-[#E5E5E5] rounded-[24px] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow">
                                {/* Header - Always Visible */}
                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                                    className="w-full text-left"
                                >
                                    <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
                                            <img loading="lazy"
                                                src={study.image?.replace(/\.(jpg|png)$/, '.webp')}
                                                alt={study.client}
                                                width="800"
                                                height="600"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                            {/* Tags */}
                                            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                                                {study.tags.map(tag => (
                                                    <span key={tag} className="bg-white/95 backdrop-blur text-[#333333] text-[10px] font-[800] px-3 py-1.5 rounded-full uppercase tracking-wider">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Summary */}
                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter leading-[0.95]">
                                                    {study.client}
                                                </h2>
                                                <p className="text-xl font-[800] text-[#F39A31]">
                                                    {study.subtitle}
                                                </p>
                                            </div>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-3 gap-4">
                                                {study.stats.map((stat, j) => {
                                                    const Icon = stat.icon;
                                                    return (
                                                        <div key={j} className="space-y-1">
                                                            <Icon size={18} className="text-[#1E5F74]" />
                                                            <div className="text-xl font-[800] text-[#333333]">{stat.value}</div>
                                                            <div className="text-[9px] font-[800] uppercase tracking-wider text-[#333333]/50">{stat.label}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Expand Button */}
                                            <div className="flex items-center gap-3 text-[#1E5F74] font-[800] text-sm uppercase tracking-wider pt-4">
                                                <span>{isExpanded ? 'Hide' : 'View'} Full Story</span>
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-8 lg:px-12 pb-12 space-y-12 border-t border-[#E5E5E5] pt-12">
                                        {/* Testimonial */}
                                        <div className="bg-gradient-to-br from-[#1E5F74]/5 to-[#F39A31]/5 rounded-[16px] p-8 relative">
                                            <Quote size={48} className="absolute top-6 left-6 text-[#F39A31]/20" />
                                            <div className="relative z-10 pl-16">
                                                <p className="text-xl font-[500] text-[#333333] italic mb-4 leading-relaxed">
                                                    "{study.testimonial.quote}"
                                                </p>
                                                <p className="text-sm font-[800] text-[#1E5F74]">
                                                    — {study.testimonial.author}
                                                    {study.testimonial.role && <span className="text-[#333333]/60">, {study.testimonial.role}</span>}
                                                </p>
                                            </div>
                                        </div>

                                        {/* The Challenge */}
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-[800] text-[#333333] flex items-center gap-3">
                                                <div className="w-1 h-8 bg-[#F39A31]" />
                                                The Challenge
                                            </h3>
                                            <p className="text-lg text-[#333333]/80 font-[500] leading-relaxed pl-7">
                                                {study.challenge}
                                            </p>
                                        </div>

                                        {/* Our Solution */}
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-[800] text-[#333333] flex items-center gap-3">
                                                <div className="w-1 h-8 bg-[#1E5F74]" />
                                                Our Solution
                                            </h3>
                                            <div className="pl-7 space-y-4">
                                                {study.solution?.map((para, idx) => (
                                                    <p key={idx} className="text-lg text-[#333333]/80 font-[500] leading-relaxed">
                                                        {para}
                                                    </p>
                                                ))}
                                                {study.services && (
                                                    <ul className="grid md:grid-cols-2 gap-3 mt-6">
                                                        {study.services.map((service, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F39A31] mt-2 flex-shrink-0" />
                                                                <span className="text-base font-[500] text-[#333333]/70">{service}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        {/* Outcomes */}
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-[800] text-[#333333] flex items-center gap-3">
                                                <div className="w-1 h-8 bg-[#F39A31]" />
                                                Outcomes
                                            </h3>
                                            <ul className="pl-7 space-y-3">
                                                {study.outcomes?.map((outcome, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-[#1E5F74] mt-2 flex-shrink-0" />
                                                        <span className="text-lg font-[500] text-[#333333]/80">{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Closing Statement */}
                                        {study.closing && (
                                            <div className="border-l-4 border-[#F39A31] pl-6 py-2">
                                                <p className="text-base font-[500] text-[#333333] italic">
                                                    {study.closing}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-[#1E5F74] to-[#0D3D4F] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F39A31 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-8 max-w-[1440px] relative z-10 text-center space-y-8">
                    <h2 className="text-5xl md:text-7xl font-[800] text-white tracking-tighter">
                        Ready to see results like these?
                    </h2>
                    <p className="text-xl text-white/80 font-[500] max-w-2xl mx-auto">
                        Let's build a high-performance marketing system for your business.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block bg-[#F39A31] text-[#333333] px-12 py-6 rounded-full font-[800] text-sm uppercase tracking-[0.3em] hover:bg-white transition-all hover:scale-105"
                    >
                        Get Your Strategy Call
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CaseStudiesIndex;
