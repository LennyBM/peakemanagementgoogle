import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
    title: string;
    date: string;
    description: string;
    children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, description, children }) => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-white">
            <Helmet>
                <title>{title} | Peake Management</title>
                <meta name="description" content={description} />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="container mx-auto px-8 max-w-3xl">
                <Link to="/" className="inline-flex items-center gap-2 text-[#333333]/60 hover:text-[#1E5F74] transition-colors mb-12 text-sm font-[600] uppercase tracking-widest">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <div className="border-b border-[#E5E5E5] pb-12 mb-12">
                    <h1 className="text-4xl md:text-5xl font-[800] text-[#333333] mb-6 tracking-tight">{title}</h1>
                    <p className="text-sm font-[600] text-[#333333]/40 uppercase tracking-widest">
                        Last Updated: <span className="text-[#1E5F74]">{date}</span>
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-[#333333]/80 font-[500] prose-headings:font-[800] prose-headings:text-[#333333] prose-a:text-[#1E5F74] prose-strong:text-[#333333]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
