import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Megaphone, Cpu, BarChart3, Users, Check, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { SchemaMarkup } from '../components/SchemaMarkup';

const ServicesPage = () => {
    const [selectedTier, setSelectedTier] = useState<'foundation' | 'growth' | 'scale'>('growth');

    const services = [
        {
            icon: Monitor,
            title: "Direct Booking Engineering",
            shortDesc: "Award-winning digital experiences engineered for conversion",
            fullDesc: "Your website becomes your best salesperson. We build fast, beautiful, conversion-optimized sites that turn visitors into guests. No templates, no compromises.",
            features: ["Custom design", "Mobile-first", "SEO optimized", "Fast loading", "Lead capture"]
        },
        {
            icon: Megaphone,
            title: "Owner & Guest Acquisition",
            shortDesc: "Targeted acquisition strategies that flood your booking engine",
            fullDesc: "We don't just drive traffic—we drive qualified guests and owners. Meta ads, Google ads, and organic strategies that fill your calendar with people ready to book.",
            features: ["Meta ads", "Google ads", "Landing pages", "A/B testing", "ROI tracking"]
        },
        {
            icon: Cpu,
            title: "Automated Guest Journeys",
            shortDesc: "Booking systems that run while you sleep",
            fullDesc: "Automated guest communication, CRM integration, and follow-up systems. Your marketing works 24/7, even when your reception desk is closed.",
            features: ["Email automation", "Chatbots", "CRM setup", "Lead nurturing", "Workflow automation"]
        },
        {
            icon: BarChart3,
            title: "Content & Social",
            shortDesc: "Brand building that drives direct bookings",
            fullDesc: "Strategic content that positions you as the obvious choice. Social media that builds community and drives revenue, not just likes.",
            features: ["Content strategy", "Social management", "Brand voice", "Community building", "Influencer partnerships"]
        },
        {
            icon: Users,
            title: "Paid Advertising",
            shortDesc: "Performance campaigns that scale profitably",
            fullDesc: "We manage your ad spend like it's our own money. Every pound is tracked, tested, and optimized for maximum ROI.",
            features: ["Campaign strategy", "Ad creative", "Audience targeting", "Budget optimization", "Performance reporting"]
        }
    ];

    const pricingTiers = [
        {
            id: 'foundation' as const,
            name: "Foundation",
            price: "£1,500",
            description: "Perfect for new parks establishing their direct booking foundation",
            features: [
                "Website design & development",
                "Basic SEO setup",
                "Google Analytics integration",
                "Monthly performance report",
                "Email support"
            ],
            cta: "Get Started"
        },
        {
            id: 'growth' as const,
            name: "Growth",
            price: "£3,000",
            description: "Best for parks ready to dominate their region and maximize occupancy",
            popular: true,
            features: [
                "Everything in Foundation",
                "Paid advertising (Meta & Google)",
                "Email automation setup",
                "Social media management",
                "Weekly strategy calls",
                "Priority support"
            ],
            cta: "Most Popular"
        },
        {
            id: 'scale' as const,
            name: "Scale",
            price: "£5,000+",
            description: "For established park groups maximizing revenue per guest",
            features: [
                "Everything in Growth",
                "Full marketing team access",
                "Advanced automation & AI",
                "Custom integrations",
                "Daily Slack support",
                "Quarterly strategy sessions"
            ],
            cta: "Let's Talk"
        }
    ];

    const process = [
        {
            step: "1",
            title: "Discovery",
            desc: "We audit your current marketing and identify quick wins",
            timeline: "Week 1"
        },
        {
            step: "2",
            title: "Strategy",
            desc: "Build a custom roadmap aligned with your revenue goals",
            timeline: "Week 2-3"
        },
        {
            step: "3",
            title: "Execution",
            desc: "Deploy campaigns, build systems, drive results",
            timeline: "Ongoing"
        },
        {
            step: "4",
            title: "Optimize",
            desc: "Test, iterate, and compound your growth",
            timeline: "Monthly"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#333333]">
            <Helmet>
                <title>Services | Peake Management</title>
                <meta name="description" content="Direct booking engineering and occupancy systems for UK holiday parks and luxury resorts. We combine technical automation with creative strategy." />
            </Helmet>

            <SchemaMarkup
                type="service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Digital Marketing & Growth Systems",
                    "provider": { "@id": "https://www.peakemanagement.com/#organization" },
                    "areaServed": { "@type": "Country", "name": "United Kingdom" },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Peake Management Services",
                        "itemListElement": services.map(s => ({
                            "@type": "Service",
                            "name": s.title,
                            "description": s.fullDesc
                        }))
                    }
                }}
            />
            <SchemaMarkup type="breadcrumb" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1E5F74] to-[#1E5F74]/80 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                            <Zap size={20} className="text-[#F39A31]" />
                            <span className="text-[11px] font-[800] uppercase tracking-[0.3em]">Our Services</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-[800] tracking-tighter leading-[0.9]">
                            DIRECT BOOKING<br />
                            <span className="text-[#F39A31]">& GROWTH SYSTEMS</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-2xl mx-auto font-[500]">
                            No fluff. No vanity metrics. Just occupancy-driving systems built for UK holiday parks and resort operators.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter mb-4">
                            What We <span className="text-[#F39A31]">Do</span>
                        </h2>
                        <p className="text-xl text-[#333333]/70 font-[500]">
                            Full-stack marketing services designed to scale
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-white to-[#F5F5F5] p-8 rounded-[24px] border-2 border-[#E5E5E5] hover:border-[#F39A31] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F39A31]/0 to-[#F39A31]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />

                                <div className="relative space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-[#1E5F74]/10 flex items-center justify-center group-hover:bg-[#F39A31] group-hover:scale-110 transition-all duration-500">
                                        <service.icon size={32} className="text-[#1E5F74] group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-[800] text-[#1E5F74]">{service.title}</h3>
                                        <p className="text-base font-[800] text-[#F39A31]">{service.shortDesc}</p>
                                        <p className="text-sm text-[#333333]/70 leading-relaxed font-[500]">{service.fullDesc}</p>
                                    </div>

                                    <div className="space-y-2">
                                        {service.features.map((feature, featureIdx) => (
                                            <div key={featureIdx} className="flex items-center gap-2">
                                                <Check size={16} className="text-[#F39A31] flex-shrink-0" />
                                                <span className="text-sm font-[500] text-[#333333]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-32 bg-gradient-to-b from-white to-[#F5F5F5]">
                <div className="container mx-auto px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter mb-4">
                            Investment <span className="text-[#F39A31]">Tiers</span>
                        </h2>
                        <p className="text-xl text-[#333333]/70 font-[500]">
                            Flexible engagement options for every stage of growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier) => (
                            <div
                                key={tier.id}
                                className={`relative bg-white p-8 rounded-[24px] border-2 transition-all duration-500 ${tier.popular
                                    ? 'border-[#F39A31] shadow-2xl scale-105'
                                    : 'border-[#E5E5E5] hover:border-[#F39A31] hover:shadow-xl'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F39A31] text-white px-6 py-2 rounded-full text-xs font-[800] uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-[800] text-[#1E5F74]">{tier.name}</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-[800] text-[#333333]">{tier.price}</span>
                                            <span className="text-sm font-[600] text-[#333333]/60">/month</span>
                                        </div>
                                        <p className="text-sm text-[#333333]/70 font-[500]">{tier.description}</p>
                                    </div>

                                    <div className="space-y-3 py-6 border-t border-b border-[#E5E5E5]">
                                        {tier.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <Check size={20} className="text-[#F39A31] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm font-[500] text-[#333333]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="/#contact"
                                        className={`block text-center px-8 py-4 rounded-[8px] font-[800] text-sm uppercase tracking-[0.2em] transition-all ${tier.popular
                                            ? 'bg-[#F39A31] text-white hover:scale-105 hover:shadow-xl'
                                            : 'bg-[#1E5F74] text-white hover:bg-[#F39A31]'
                                            }`}
                                    >
                                        {tier.cta}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-[#333333]/60 font-[500]">
                            All tiers include 3-month minimum commitment. One-off projects available upon request.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter mb-4">
                            How We <span className="text-[#F39A31]">Work</span>
                        </h2>
                        <p className="text-xl text-[#333333]/70 font-[500]">
                            Our proven process for driving results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((step, idx) => (
                            <div key={idx} className="relative">
                                {idx < process.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#F39A31] to-[#F39A31]/20" />
                                )}

                                <div className="relative space-y-4">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1E5F74] to-[#0d3d4d] flex items-center justify-center mx-auto shadow-xl">
                                        <span className="text-4xl font-[800] text-white">{step.step}</span>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <h3 className="text-xl font-[800] text-[#1E5F74]">{step.title}</h3>
                                        <p className="text-sm text-[#333333]/70 font-[500]">{step.desc}</p>
                                        <p className="text-xs font-[800] text-[#F39A31] uppercase tracking-wider">{step.timeline}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Different Section */}
            <section className="min-h-screen flex items-center bg-gradient-to-br from-[#1E5F74] to-[#0d3d4d] text-white">
                <div className="container mx-auto px-8 max-w-[1440px]">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] group">
                            <img
                                src="/assets/cambridge-country-club.webp"
                                alt="Luxury hospitality"
                                width="1200"
                                height="900"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E5F74]/60 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-[800] tracking-tighter leading-[1.1]">
                                We're Not<br />
                                <span className="text-[#F39A31]">Another Agency</span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Target,
                                        text: "We limit our client roster to 12 parks so we can be deeply involved in your strategy"
                                    },
                                    {
                                        icon: TrendingUp,
                                        text: "Every campaign is measured against revenue impact, not vanity metrics like impressions"
                                    },
                                    {
                                        icon: Zap,
                                        text: "We deploy in days, not months. Speed is our competitive advantage"
                                    },
                                    {
                                        icon: Users,
                                        text: "You work directly with the founders, not junior account managers"
                                    }
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-[#F39A31]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F39A31] transition-colors">
                                            <point.icon size={24} className="text-[#F39A31] group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-lg font-[500] text-white/90 leading-relaxed">{point.text}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 bg-[#F39A31] text-[#333333] px-12 py-6 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] transition-all hover:scale-[1.05] hover:shadow-2xl group"
                            >
                                Book Strategy Call
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
