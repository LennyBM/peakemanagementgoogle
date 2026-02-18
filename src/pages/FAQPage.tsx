import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SchemaMarkup } from '../components/SchemaMarkup';

const FAQPage = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const faqs = [
        {
            category: "Getting Started",
            questions: [
                {
                    q: "Do I need to sign a long-term contract?",
                    a: "No. We work month-to-month because we believe in earning your business through results, not locking you in. You can pause or cancel anytime with 30 days' notice."
                },
                {
                    q: "What's the typical timeline to see results?",
                    a: "Most clients see initial improvements within 30-60 days (better website performance, lead flow starting). Significant revenue impact typically shows in 90-120 days as campaigns optimise and compound. We're building systems, not running one-off promotions."
                },
                {
                    q: "How much should I budget for marketing?",
                    a: "We recommend 5-10% of revenue for established parks, 10-15% for growth-focused resorts. This includes our fees plus ad spend. We'll provide a custom recommendation based on your goals and current revenue."
                }
            ]
        },
        {
            category: "Services & Pricing",
            questions: [
                {
                    q: "What's included in your packages?",
                    a: "We offer tiered engagement models tailored to your park's growth stage. Foundation focus on your digital presence, Growth drives active guest acquisition, and Scale provides comprehensive multi-channel dominance. All packages are customizable to your specific revenue goals."
                },
                {
                    q: "Do you only work with holiday parks and resorts?",
                    a: "While holiday parks, luxury resorts, and high-end attractions are our specialty, we work with any operator that values direct bookings, guest lifetime value, and higher occupancy. If you're tired of OTA fees and want to own your guest relationships, we can help."
                },
                {
                    q: "Can I just hire you for one specific thing (like a website)?",
                    a: "Yes, but we recommend our full-service approach for best results. A beautiful website without traffic is a waste. Traffic without conversion optimisation leaves money on the table. We're most effective when we control the entire customer journey."
                }
            ]
        },
        {
            category: "Working Together",
            questions: [
                {
                    q: "How hands-on do I need to be?",
                    a: "Minimal. We handle strategy, execution, and optimisation. You'll have a weekly 15-minute check-in call and approve major campaigns. Most clients spend 1-2 hours per month on marketing after onboarding."
                },
                {
                    q: "Do you work with our existing tools (CRM, booking system, etc.)?",
                    a: "Yes. We integrate with most major platforms (Stripe, Mailchimp, HubSpot, Zapier, etc.). If you have a custom system, we'll build the integration or find a workaround."
                },
                {
                    q: "What if I'm not happy with the results?",
                    a: "We'll have an honest conversation. If it's a strategy issue, we'll pivot. If it's a fit issue, we'll part ways professionally (no hard feelings, no penalties). Our goal is results, not retention at all costs."
                }
            ]
        },
        {
            category: "Technical Questions",
            questions: [
                {
                    q: "Will I own my website and content?",
                    a: "100%. You own everything we create—website code, content, ad accounts, social profiles, email lists. If we part ways, you keep it all. No hostage situations."
                },
                {
                    q: "What happens to my existing website?",
                    a: "We can redesign it, migrate it, or build fresh. If you love your current site, we'll optimise it. If it's holding you back, we'll rebuild it. Either way, we'll ensure zero downtime and preserve your SEO."
                },
                {
                    q: "Do you handle GDPR compliance and legal stuff?",
                    a: "We implement the technical requirements (cookie banners, privacy policies, data handling). You're responsible for legal review and compliance. We'll guide you, but we're not lawyers."
                }
            ]
        },
        {
            category: "Results & Expectations",
            questions: [
                {
                    q: "Can you guarantee specific results?",
                    a: "No one can ethically guarantee specific numbers. What we can guarantee: strategic thinking, rapid execution, transparent reporting, and relentless optimisation. Our case studies show what's possible (29% average occupancy lift, £1.4m in direct bookings), but your results depend on your market, offer, and execution."
                },
                {
                    q: "How do you measure success?",
                    a: "Revenue first. Then bookings, cost per acquisition, customer lifetime value, and direct booking percentage. We don't care about vanity metrics (likes, impressions). If it doesn't impact your bottom line, we don't track it."
                },
                {
                    q: "What if my business is seasonal?",
                    a: "Perfect. We'll build booking funnels that maximize peak summer weeks and nurture leads during the off-season. Many of our park and resort clients are seasonal—we know how to handle the feast-or-famine cycle."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#333333]">
            <Helmet>
                <title>FAQ | Peake Management</title>
                <meta name="description" content="Common questions for holiday park and resort operators. Learn about our direct booking systems, pricing, and guest acquisition process." />
            </Helmet>

            <SchemaMarkup
                type="faq"
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.flatMap(cat => cat.questions).map(faq => ({
                        "@type": "Question",
                        "name": faq.q,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.a
                        }
                    }))
                }}
            />
            <SchemaMarkup type="breadcrumb" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1E5F74] to-[#1E5F74]/80 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                            <HelpCircle size={20} className="text-[#F39A31]" />
                            <span className="text-[11px] font-[800] uppercase tracking-[0.3em]">Frequently Asked Questions</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-[800] tracking-tighter leading-[0.9]">
                            HOLIDAY PARK<br />
                            <span className="text-[#F39A31]">MARKETING FAQ</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-2xl mx-auto font-[500]">
                            Honest answers to the questions we get asked most. Can't find what you're looking for? <a href="/#contact" className="text-[#F39A31] font-[700] hover:underline">Ask us directly</a>.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-8 max-w-[1000px]">
                    {faqs.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-16 last:mb-0">
                            <h2 className="text-3xl font-[800] text-[#1E5F74] mb-8 pb-4 border-b-2 border-[#F39A31]/20">
                                {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.questions.map((faq, questionIndex) => {
                                    const globalIndex = categoryIndex * 100 + questionIndex;
                                    const isExpanded = expandedIndex === globalIndex;

                                    return (
                                        <div
                                            key={questionIndex}
                                            className="bg-white border-2 border-[#E5E5E5] rounded-[12px] overflow-hidden hover:border-[#1E5F74] transition-all duration-300"
                                        >
                                            <button
                                                onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                                                className="w-full flex items-center justify-between gap-6 p-6 text-left group"
                                            >
                                                <h3 className="text-lg font-[800] text-[#333333] group-hover:text-[#1E5F74] transition-colors">
                                                    {faq.q}
                                                </h3>
                                                <ChevronDown
                                                    size={24}
                                                    className={`flex-shrink-0 text-[#F39A31] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="px-6 pb-6 border-t border-[#E5E5E5] pt-6">
                                                    <p className="text-base text-[#333333]/80 font-[500] leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#1E5F74] to-[#1E5F74]/80 text-white">
                <div className="container mx-auto px-8 max-w-[800px] text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl text-white/80 font-[500]">
                        Book a free 30-minute strategy call. We'll answer your questions and show you exactly how we'd grow your business.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block bg-[#F39A31] text-[#333333] px-12 py-6 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] transition-all hover:scale-[1.05] hover:shadow-2xl"
                    >
                        Book Strategy Call
                    </a>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
