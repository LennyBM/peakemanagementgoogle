import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Target, Zap, Users, Linkedin, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { SchemaMarkup } from '../components/SchemaMarkup';

const AboutPage = () => {
    const [hoveredMember, setHoveredMember] = useState<number | null>(null);

    const team = [
        {
            name: "Rebecca Peake",
            role: "Founder & Creative",
            image: "/assets/rebecca-profile.webp",
            bio: "Specializing in brand voice and social growth. Becca ensures your holiday park has a personality that guests fall in love with. She's the creative force behind campaigns that don't just perform—they resonate.",
            linkedin: "https://www.linkedin.com/in/rebecca-peake-119448147/",
            expertise: ["Brand Strategy", "Social Media", "Content Creation", "Community Building"]
        },
        {
            name: "Leonard B M",
            role: "Founder & Technical",
            image: "/assets/leonard-profile.webp",
            bio: "The systems architect behind our automation. Leonard builds the technical infrastructure that turns marketing into a predictable, scalable revenue engine. If it can be automated, he's already done it.",
            linkedin: "https://www.linkedin.com/in/leonardbm/",
            expertise: ["Marketing Automation", "Web Development", "AI Integration", "Analytics"]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#333333]">
            <Helmet>
                <title>About Us | Peake Management</title>
                <meta name="description" content="Meet the specialists driving occupancy for UK holiday parks and luxury resorts. We combine technical automation with creative strategy." />
            </Helmet>

            <SchemaMarkup type="breadcrumb" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1E5F74] to-[#1E5F74]/80 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                            <Users size={20} className="text-[#F39A31]" />
                            <span className="text-[11px] font-[800] uppercase tracking-[0.3em]">Specialists in UK Leisure Growth</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-[800] tracking-tighter leading-[0.9]">
                            UK LEISURE &<br />
                            <span className="text-[#F39A31]">HOSPITALITY GROWTH</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-2xl mx-auto font-[500]">
                            We're not a generic agency. We're the specialist team that turns your holiday park website into a direct booking engine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section - Split Screen */}
            <section className="min-h-screen flex items-center bg-white">
                <div className="container mx-auto px-8 max-w-[1440px]">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[24px] group">
                            <img
                                src="/assets/whalesborough-featured.webp"
                                alt="Luxury hospitality"
                                width="800"
                                height="1200"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E5F74]/80 via-[#1E5F74]/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-5xl md:text-6xl font-[800] tracking-tighter leading-[1.1]">
                                    The "Old Way"<br />
                                    is <span className="text-[#F39A31]">Broken</span>
                                </h2>

                                <p className="text-xl text-[#333333]/70 leading-relaxed font-[500]">
                                    For decades, park and resort marketing meant printing brochures and hoping for the best. Then came the OTAs, taking 15% of every booking for the privilege of listing on their site.
                                </p>

                                <p className="text-2xl font-[800] text-[#1E5F74]">
                                    We built Peake Management to change that.
                                </p>

                                <p className="text-lg text-[#333333]/70 leading-relaxed font-[500]">
                                    Your website should be your best salesperson. It shouldn't just look good—it should fill your calendar, automate your customer communications, and let you sleep at night knowing your revenue is secure.
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="space-y-4">
                                {[
                                    "No more dependency on third-party booking platforms",
                                    "Direct bookings mean higher profit margins",
                                    "Full control over your customer relationships",
                                    "Marketing that compounds over time, not one-off campaigns"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-[#F39A31]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F39A31] transition-colors">
                                            <ArrowRight size={16} className="text-[#F39A31] group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-base font-[500] text-[#333333] leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Showcase - Animated Counters */}
            <section className="py-32 bg-gradient-to-br from-[#1E5F74] to-[#0d3d4d] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '50px 50px' }} />

                <div className="container mx-auto px-8 max-w-[1200px] relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter mb-4">
                            Results That <span className="text-[#F39A31]">Speak</span>
                        </h2>
                        <p className="text-xl text-white/70 font-[500]">
                            We measure success in occupancy and total booking value, not vanity metrics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Stat 1 */}
                        <div className="text-center space-y-4">
                            <div className="text-7xl md:text-8xl font-[800] bg-gradient-to-r from-[#F39A31] to-[#ff8800] bg-clip-text text-transparent">
                                <AnimatedCounter end={29} suffix="%" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-[700] uppercase tracking-[0.3em] text-white/60">Average Occupancy Lift</div>
                                <p className="text-sm text-white/50 font-[500]">Average across our client portfolio</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center space-y-4">
                            <div className="text-7xl md:text-8xl font-[800] bg-gradient-to-r from-[#F39A31] to-[#ff8800] bg-clip-text text-transparent">
                                £<AnimatedCounter end={1.4} decimals={1} suffix="m" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-[700] uppercase tracking-[0.3em] text-white/60">Direct Bookings Generated</div>
                                <p className="text-sm text-white/50 font-[500]">For a single luxury resort client</p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center space-y-4">
                            <div className="text-7xl md:text-8xl font-[800] bg-gradient-to-r from-[#F39A31] to-[#ff8800] bg-clip-text text-transparent">
                                <AnimatedCounter end={100} suffix="%" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-[700] uppercase tracking-[0.3em] text-white/60">Client Retention</div>
                                <p className="text-sm text-white/50 font-[500]">Because results speak louder than contracts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter mb-4">
                            How We <span className="text-[#F39A31]">Operate</span>
                        </h2>
                        <p className="text-xl text-[#333333]/70 font-[500]">
                            Our core principles that drive everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Profit First",
                                desc: "We don't care about 'likes'. We care about bookings, revenue per customer, and net profit. Every campaign is measured against one question: Did it make you money?"
                            },
                            {
                                icon: Zap,
                                title: "Speed Matters",
                                desc: "In the age of AI, speed is currency. We deploy campaigns in days, not months. While competitors are still in 'discovery calls', we're already testing and iterating."
                            },
                            {
                                icon: Users,
                                title: "Partners, Not Vendors",
                                desc: "We limit our client roster to ensure we can be deeply involved in your strategy. You're not a ticket number—you're a partner we're invested in."
                            }
                        ].map((value, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-white to-[#F5F5F5] p-8 rounded-[24px] border-2 border-[#E5E5E5] hover:border-[#F39A31] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F39A31]/0 to-[#F39A31]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />

                                <div className="relative space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-[#1E5F74]/10 flex items-center justify-center group-hover:bg-[#F39A31] transition-colors duration-500">
                                        <value.icon size={32} className="text-[#1E5F74] group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-2xl font-[800] text-[#1E5F74]">{value.title}</h3>
                                    <p className="text-base text-[#333333]/70 leading-relaxed font-[500]">{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Showcase Layout */}
            <section className="py-32 bg-gradient-to-b from-white to-[#F5F5F5]">
                <div className="container mx-auto px-8 max-w-[1200px]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter mb-4">
                            The <span className="text-[#F39A31]">Strategists</span>
                        </h2>
                        <p className="text-xl text-[#333333]/70 font-[500]">
                            Meet the team behind your growth
                        </p>
                    </div>

                    <div className="space-y-24">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image */}
                                <div
                                    className={`relative aspect-[4/5] overflow-hidden rounded-[24px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                                    onMouseEnter={() => setHoveredMember(idx)}
                                    onMouseLeave={() => setHoveredMember(null)}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        width="400"
                                        height="400"
                                        className={`w-full h-full object-cover transition-all duration-700 ${hoveredMember === idx ? 'scale-105' : 'scale-100 grayscale'}`}
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-[#1E5F74]/20 transition-opacity duration-700 ${hoveredMember === idx ? 'opacity-0' : 'opacity-100'}`} />
                                </div>

                                {/* Content */}
                                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="space-y-2">
                                        <h3 className="text-4xl md:text-5xl font-[800] tracking-tighter text-[#1E5F74]">
                                            {member.name}
                                        </h3>
                                        <p className="text-xl font-[800] text-[#F39A31]">{member.role}</p>
                                    </div>

                                    <p className="text-lg text-[#333333]/70 leading-relaxed font-[500]">
                                        {member.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        {member.expertise.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className="px-4 py-2 bg-[#1E5F74]/10 text-[#1E5F74] rounded-full text-sm font-[800] hover:bg-[#F39A31] hover:text-white transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* LinkedIn */}
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-[#1E5F74] hover:text-[#F39A31] transition-colors group"
                                    >
                                        <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                                        <span className="font-[700]">Connect on LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-[#1E5F74] to-[#0d3d4d] text-white">
                <div className="container mx-auto px-8 max-w-[800px] text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter">
                        Ready to Work Together?
                    </h2>
                    <p className="text-xl text-white/80 font-[500]">
                        Let's build a marketing system that actually drives revenue.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block bg-[#F39A31] text-[#333333] px-12 py-6 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] transition-all hover:scale-[1.05] hover:shadow-2xl"
                    >
                        Start The Conversation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
