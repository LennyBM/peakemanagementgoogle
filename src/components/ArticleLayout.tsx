
import React from 'react';
import { SchemaMarkup } from './SchemaMarkup';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter } from 'lucide-react';

interface ArticleLayoutProps {
    meta: {
        title: string;
        description: string;
        publishDate: string;
        author: string;
        category: string;
        readTime?: string;
        image?: string;
    };
    children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ meta, children }) => {
    const url = `https://www.peakemanagement.com/blog/${meta.title.toLowerCase().replace(/ /g, '-')}`;
    const image = meta.image?.replace(/\.(jpg|png)$/, '.webp') || '/assets/hero-poster.webp';

    // JSON-LD for Search Engines
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}/#blogposting`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "headline": meta.title,
        "description": meta.description,
        "image": [image],
        "datePublished": meta.publishDate,
        "dateModified": meta.publishDate,
        "author": [{
            "@type": "Person",
            "name": meta.author,
            "url": "https://www.peakemanagement.com/about"
        }],
        "publisher": { "@id": "https://www.peakemanagement.com/#organization" }
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Helmet>
                <title>{meta.title} | Peake Management</title>
                <meta name="description" content={meta.description} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={image} />
                <meta property="article:published_time" content={meta.publishDate} />
                <meta property="article:author" content={meta.author} />
            </Helmet>

            <SchemaMarkup type="blog" data={structuredData} />
            <SchemaMarkup type="breadcrumb" />

            {/* Progress Bar (Optional, can add later) */}

            <article className="container mx-auto px-8 max-w-5xl">
                {/* Breadcrumb / Back */}
                <div className="mb-12">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-[800] uppercase tracking-[0.2em] text-[#1E5F74] hover:text-[#F39A31] transition-colors">
                        <ArrowLeft size={14} /> Back to Insights
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-16 space-y-8 text-center max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4">
                        <span className="bg-[#F39A31]/10 text-[#F39A31] px-3 py-1 rounded-full text-[10px] font-[800] uppercase tracking-widest">
                            {meta.category}
                        </span>
                        <span className="text-[#333333]/40 text-[10px] font-[500] uppercase tracking-widest flex items-center gap-2">
                            <Clock size={12} /> {meta.readTime || '5 min read'}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-[800] text-[#333333] tracking-tighter leading-[1.1]">
                        {meta.title}
                    </h1>

                    <div className="flex items-center justify-center gap-8 border-t border-[#F5F5F5] pt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#E5E5E5] rounded-full overflow-hidden">
                                {/* Placeholder Avatar */}
                                <div className="w-full h-full bg-[#333] flex items-center justify-center text-white/20 text-xs">IMG</div>
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-[800] text-[#333333] uppercase tracking-wider">{meta.author}</p>
                                <p className="text-[10px] font-[500] text-[#333333]/40 uppercase tracking-wider">
                                    {new Date(meta.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-20 rounded-[20px] overflow-hidden aspect-[21/9] bg-[#F5F5F5] relative group">
                    <img
                        src={image}
                        alt={meta.title}
                        width="1200"
                        height="514"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-headings:font-[800] prose-headings:tracking-tight prose-headings:text-[#333333] prose-p:text-[#333333]/80 prose-p:font-[500] prose-p:leading-relaxed prose-a:text-[#1E5F74] prose-a:font-[800] hover:prose-a:text-[#F39A31] transition-all prose-img:rounded-[12px] prose-blockquote:border-l-4 prose-blockquote:border-[#F39A31] prose-blockquote:bg-[#F9F9F9] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-li:text-[#333333]/80 prose-strong:text-[#333333]">
                            {children}
                        </div>

                        {/* Author Bio Box */}
                        <div className="mt-20 bg-[#F9F9F9] p-8 rounded-[12px] flex items-start gap-6 border-l-4 border-[#1E5F74]">
                            <div className="w-16 h-16 bg-[#333] rounded-full flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-[800] text-[#333333] mb-2">About {meta.author}</h4>
                                <p className="text-sm text-[#333333]/70 font-[500] leading-relaxed">
                                    Founder at Peake Management.Specialising in high-performance automation systems for the hospitality industry. Helping owners get their time back.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* Share */}
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white border border-[#F5F5F5] p-6 rounded-[12px] shadow-sm">
                                <h4 className="text-xs font-[800] uppercase tracking-[0.2em] text-[#1E5F74] mb-6">Share this article</h4>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all">
                                        <Twitter size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#333333]/10 text-[#333333] flex items-center justify-center hover:bg-[#F39A31] hover:text-white transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-[#1E5F74] p-8 rounded-[12px] text-white text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#F39A31] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <h4 className="text-xl font-[800] mb-4">Need help implementing this?</h4>
                                    <p className="text-sm font-[500] opacity-80 mb-6">We build these systems for you. Book a free strategy call today.</p>
                                    <Link to="/#contact" className="inline-block bg-white text-[#1E5F74] px-6 py-3 rounded-full text-xs font-[800] uppercase tracking-widest hover:scale-105 transition-transform">
                                        Book Call
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
        </div>
    );
};

export default ArticleLayout;
