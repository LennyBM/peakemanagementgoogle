
import React from 'react';

const SectionHeader = ({ label, title, light = false }: { label: string, title: string, light?: boolean }) => (
    <div className="mb-24 space-y-6">
        <div className="flex items-center gap-4">
            <span className={`text-[10px] font-[800] uppercase tracking-[0.6em] ${light ? 'text-white/40' : 'text-[#1E5F74]'}`}>// {label}</span>
        </div>
        <h2 className={`text-6xl md:text-8xl font-[800] tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-[#333333]'}`}>
            {title}<span className="text-[#F39A31]">.</span>
        </h2>
    </div>
);

export default SectionHeader;
