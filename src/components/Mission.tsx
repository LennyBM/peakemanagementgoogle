import React from 'react';
import SectionHeader from './SectionHeader';
import { Target, Heart, Zap } from 'lucide-react';

const Mission = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8 text-[#F39A31]" />,
            title: "Performance First",
            description: "We don't just build websites; we engineer high-performance booking engines that drive measurable revenue growth."
        },
        {
            icon: <Heart className="w-8 h-8 text-[#F39A31]" />,
            title: "Guest-Centric",
            description: "We believe every digital interaction should enhance the guest experience, building trust before they even arrive."
        },
        {
            icon: <Zap className="w-8 h-8 text-[#F39A31]" />,
            title: "Innovation Driven",
            description: "Staying ahead of the curve with cutting-edge technology and strategies to keep our clients competitive."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-[#F5F5F5]">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <SectionHeader label="Our Purpose" title="Mission & Values" />

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#F39A31]/20">
                            <div className="bg-[#1E5F74]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1E5F74] mb-4">{value.title}</h3>
                            <p className="text-[#333333]/70 leading-relaxed font-medium">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;
