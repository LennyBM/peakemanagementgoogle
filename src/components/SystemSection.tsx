
import React from 'react';
import { Monitor, Users, Cpu, Megaphone, BarChart3 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SystemSection = () => {
    const steps = [
        { id: "01", icon: <Monitor />, title: "Direct Booking Engineering", desc: "Award-winning digital experiences engineered for conversion." },
        { id: "02", icon: <Users />, title: "Guest Acquisition", desc: "Targeted acquisition strategies that flood your pipeline." },
        { id: "03", icon: <Cpu />, title: "Automated Guest Journeys", desc: "Cutting-edge operational efficiency and automated scaling." },
        { id: "04", icon: <Megaphone />, title: "Brand Trust & Viral Growth", desc: "Hospitality focused content and community management mastery." },
        { id: "05", icon: <BarChart3 />, title: "High-Yield Performance Ads", desc: "High-ROAS campaigns dominating search and social." }
    ];

    return (
        <section id="system" className="py-40 bg-white">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <SectionHeader label="Capabilities" title="Our Expertise" />
                <div className="grid lg:grid-cols-5 gap-0 border-t border-l border-[#F5F5F5]">
                    {steps.map((step, i) => (
                        <div key={i} className="p-12 border-r border-b border-[#F5F5F5] group hover:bg-[#1E5F74] transition-all duration-500 relative overflow-hidden">
                            <span className="text-8xl font-[800] text-[#F5F5F5] absolute -bottom-4 -right-4 group-hover:text-white/5 transition-colors">{step.id}</span>
                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 bg-[#F5F5F5] rounded-[8px] flex items-center justify-center text-[#1E5F74] group-hover:bg-[#F39A31] group-hover:text-[#333333] transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-[800] text-[#333333] group-hover:text-white transition-colors">{step.title}</h3>
                                <p className="text-[#333333]/60 font-[500] text-sm leading-relaxed group-hover:text-white/70 transition-colors">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemSection;
