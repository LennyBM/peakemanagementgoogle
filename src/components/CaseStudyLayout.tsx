
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, CreditCard, BarChart3, Globe } from 'lucide-react';

interface CaseStudyLayoutProps {
    meta: {
        title: string;
        client: string;
        industry: string;
        services: string[];
        results: { label: string; value: string }[];
        url: string;
        image: string;
    };
    children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ meta, children }) => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Helmet>
                <title>{meta.title} | Peake Management Case Study</title>
                <meta name="description" content={`Case Study: How Peake Management helped ${meta.client} achieve ${meta.results[0].value} ${meta.results[0].label}.`} />
            </Helmet>

            <div className="container mx-auto px-8 max-w-[1440px]">
                {/* Breadcrumb */}
                <div className="mb-12">
                    <Link to="/websites" className="inline-flex items-center gap-2 text-xs font-[800] uppercase tracking-[0.2em] text-[#1E5F74] hover:text-[#F39A31] transition-colors">
                        <ArrowLeft size={14} /> Back to Work
                    </Link>
                </div>

                {/* Hero */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-end">
                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-4">
                            {meta.services.map(s => (
                                <span key={s} className="px-3 py-1 border border-[#E5E5E5] rounded-full text-[10px] font-[800] uppercase tracking-widest text-[#333333]">{s}</span>
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-[800] text-[#333333] tracking-tighter leading-[0.9]">
                            {meta.title}
                        </h1>
                        <p className="text-xl text-[#333333]/70 font-[500] max-w-lg">
                            Comprehensive digital transformation for {meta.client}, a leader in the {meta.industry} sector.
                        </p>

                        {meta.url && (
                            <a href={meta.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1E5F74] text-white px-8 py-4 rounded-full font-[800] text-xs uppercase tracking-widest hover:bg-[#F39A31] hover:text-[#333333] transition-colors">
                                Visit Live Site <Globe size={16} />
                            </a>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {meta.results.map((res, i) => (
                            <div key={i} className="bg-[#F9F9F9] p-8 rounded-[12px] border-l-4 border-[#F39A31]">
                                <h3 className="text-4xl font-[800] text-[#333333] mb-2">{res.value}</h3>
                                <p className="text-xs font-[800] uppercase tracking-wider text-[#333333]/40">{res.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Image */}
                <div className="rounded-[20px] overflow-hidden bg-[#F5F5F5] aspect-video mb-24 shadow-2xl relative">
                    <img
                        src={meta.image?.replace(/\.(jpg|png)$/, '.webp')}
                        alt={meta.title}
                        width="1200"
                        height="675"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-headings:font-[800] prose-headings:text-[#333333] prose-p:text-[#333333]/80 prose-li:text-[#333333]/80">
                            {children}
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-[#1E5F74] text-white p-8 rounded-[12px]">
                            <h3 className="text-xl font-[800] mb-6">Project Scope</h3>
                            <ul className="space-y-4">
                                {meta.services.map(s => (
                                    <li key={s} className="flex items-center gap-3 text-sm font-[500]">
                                        <CheckCircle2 size={18} className="text-[#F39A31]" />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#F9F9F9] p-8 rounded-[12px] text-center">
                            <h3 className="text-lg font-[800] text-[#333333] mb-4">Ready for similar results?</h3>
                            <Link to="/#contact" className="inline-block bg-[#F39A31] text-[#333333] px-6 py-3 rounded-[4px] font-[800] uppercase tracking-widest text-xs hover:bg-[#333333] hover:text-white transition-colors">
                                Start Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyLayout;
