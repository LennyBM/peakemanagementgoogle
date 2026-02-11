
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Import articles to get metadata (Eager load for homepage speed)
const articles = import.meta.glob('../content/articles/*.mdx', { eager: true });

interface ArticleModule {
    frontmatter: {
        title: string;
        description: string;
        publishDate: string;
        category: string;
        image?: string;
    };
}

const LatestInsights = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            const postPromises = Object.entries(articles).map(async ([path, loader]) => {
                const module = await (loader as () => Promise<ArticleModule>)();
                const slug = path.split('/').pop()?.replace('.mdx', '') || '';
                return { slug, ...module.frontmatter };
            });

            const resolvedPosts = await Promise.all(postPromises);
            setPosts(resolvedPosts
                .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
                .slice(0, 3));
        };

        loadPosts();
    }, []);

    return (
        <section className="py-32 bg-white border-t border-[#F5F5F5]">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <span className="text-[10px] font-[800] uppercase tracking-[0.6em] text-[#1E5F74]">// READ</span>
                        <h2 className="text-5xl md:text-6xl font-[800] text-[#333333] tracking-tighter">
                            LATEST INSIGHTS<span className="text-[#F39A31]">.</span>
                        </h2>
                    </div>

                    <Link to="/blog" className="hidden md:flex items-center gap-2 text-xs font-[800] uppercase tracking-[0.2em] text-[#333333] hover:text-[#F39A31] transition-colors group">
                        View All Articles <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer block">
                            <div className="aspect-[16/10] bg-[#F5F5F5] rounded-[12px] overflow-hidden relative mb-6">
                                <img
                                    src={post.image?.replace(/\.(jpg|png)$/, '.webp') || '/assets/hero-poster.webp'}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-[800] uppercase tracking-widest text-[#1E5F74]">
                                    {post.category}
                                </div>
                            </div>

                            <h3 className="text-xl font-[800] text-[#333333] tracking-tight group-hover:text-[#1E5F74] transition-colors mb-3 leading-tight">
                                {post.title}
                            </h3>
                            <span className="text-[10px] font-[800] uppercase tracking-widest text-[#333333]/40">
                                Read Article
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-[800] uppercase tracking-[0.2em] text-[#333333]">
                        View All Articles <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestInsights;
