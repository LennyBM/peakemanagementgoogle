
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { SchemaMarkup } from '../components/SchemaMarkup';

// This is where the magic happens - glob import of all MDX files
const articles = import.meta.glob('../content/articles/*.mdx', { eager: true });

interface ArticleModule {
    frontmatter: {
        title: string;
        description: string;
        publishDate: string;
        author: string;
        category: string;
        image?: string;
    };
}

const BlogIndex = () => {
    // Sort articles by date
    const posts = Object.entries(articles).map(([path, module]) => {
        const slug = path.split('/').pop()?.replace('.mdx', '') || '';
        const { frontmatter } = module as ArticleModule;
        return {
            slug,
            ...frontmatter
        };
    }).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <Helmet>
                <title>Marketing Insights | Peake Management</title>
                <meta name="description" content="Actionable strategies, automation tips, and marketing research for UK holiday park and resort operators." />
            </Helmet>
            <SchemaMarkup type="breadcrumb" />

            <div className="container mx-auto px-8 max-w-[1440px]">
                {/* Header */}
                <div className="mb-24 space-y-8">
                    <span className="text-[11px] font-[800] uppercase tracking-[0.6em] text-[#1E5F74]">The Knowledge Base</span>
                    <h1 className="text-6xl md:text-8xl font-[800] text-[#333333] tracking-tighter">
                        INSIGHTS<span className="text-[#F39A31]">.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-end border-b border-[#F5F5F5] pb-12 transition-all">
                        <p className="text-xl text-[#333333]/60 max-w-2xl font-[500]">
                            Actionable strategies for hospitality and tourism leaders. No fluff, just results.
                        </p>

                        {/* Search / Filter (Visual only for v1) */}
                        <div className="flex items-center gap-4 bg-[#F9F9F9] px-4 py-3 rounded-full border border-[#E5E5E5] w-full md:w-auto">
                            <Search size={18} className="text-[#333333]/30" />
                            <input type="text" placeholder="Search articles..." className="bg-transparent outline-none text-sm font-[500] text-[#333333] placeholder-[#333333]/30 w-full" />
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer flex flex-col gap-6">
                            <div className="aspect-[4/3] bg-[#F5F5F5] rounded-[20px] overflow-hidden relative">
                                <img
                                    src={post.image?.replace(/\.(jpg|png)$/, '.webp') || '/assets/hero-poster.webp'}
                                    alt={post.title}
                                    width="800"
                                    height="600"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-[800] uppercase tracking-widest text-[#1E5F74]">
                                    {post.category}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-[500] uppercase tracking-widest text-[#333333]/40">
                                        {new Date(post.publishDate).toLocaleDateString()}
                                    </span>
                                    <ArrowUpRight className="text-[#F39A31] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" size={20} />
                                </div>
                                <h3 className="text-2xl font-[800] text-[#333333] tracking-tight group-hover:text-[#1E5F74] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-[#333333]/60 font-[500] line-clamp-2 leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="py-20 text-center text-[#333333]/40 font-[500]">
                        No articles found. Coming soon.
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogIndex;
