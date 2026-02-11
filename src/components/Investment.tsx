
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Investment = () => {
    return (
        <section id="investment" className="py-40 bg-[#F5F5F5]">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
                    <div>
                        <SectionHeader label="Pricing" title="Occupancy Models" />
                        <p className="text-xl text-[#333333] font-[500] leading-relaxed mt-6 border-l-4 border-[#F39A31] pl-6">
                            We don't just do standard packages. We build <span className="text-[#1E5F74]">custom booking systems</span> for holiday parks and resort operators.
                        </p>
                    </div>
                    <p className="text-2xl text-[#333333]/50 font-[500] leading-relaxed pb-6 text-right">
                        "Proven systems for maximum seasonal occupancy."
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        { name: "Starter", price: "500", features: ["Essential Web Presence", "Basic SEO Setup", "Monthly Support"] },
                        { name: "Growth", price: "1,250", features: ["Performance Marketing", "Content Engine", "CRM Integration"], featured: true },
                        { name: "Scale", price: "2,500", features: ["Full AI Automation", "Omnichannel Ads", "Dedicated Strategist"] }
                    ].map((tier, i) => (
                        <div key={i} className={`p-16 rounded-[12px] flex flex-col transition-all duration-500 ${tier.featured ? 'bg-[#1E5F74] text-white shadow-[0_40px_80px_-20px_rgba(30,95,116,0.4)] scale-105 z-10' : 'bg-white border border-[#F5F5F5] shadow-sm'}`}>
                            <h4 className={`text-[10px] font-[800] uppercase tracking-[0.4em] mb-12 ${tier.featured ? 'text-[#F39A31]' : 'text-[#1E5F74]'}`}>{tier.name}</h4>
                            <div className="mb-12">
                                <span className="text-xl font-[500] mr-2 opacity-40">£</span>
                                <span className="text-7xl font-[800] tracking-tighter">{tier.price}</span>
                                <span className="text-[10px] font-[800] uppercase tracking-widest opacity-40 block mt-2">Per Month From</span>
                            </div>
                            <ul className="space-y-6 mb-16 flex-grow">
                                {tier.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-4 text-sm font-[500]">
                                        <CheckCircle2 size={18} className={tier.featured ? 'text-[#F39A31]' : 'text-[#1E5F74]'} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-6 rounded-[8px] font-[800] text-[12px] uppercase tracking-[0.4em] transition-all hover:scale-[1.02] ${tier.featured ? 'bg-[#F39A31] text-[#333333]' : 'bg-[#1E5F74] text-white'}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Investment;
