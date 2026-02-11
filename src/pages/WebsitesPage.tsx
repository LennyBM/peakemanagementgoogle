
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SchemaMarkup } from '../components/SchemaMarkup';

const SEO = ({ title, description, image = '/assets/hero-poster.jpg', url = 'https://www.peakemanagement.com' }: { title: string, description: string, image?: string, url?: string }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
    </Helmet>
);

const WebsitesPage = () => {
    const projects: { title: string; category: string; img: string; url: string; caseStudy?: string }[] = [
        { title: "Whalesborough", category: "Resort", img: "/assets/whalesborough.webp", url: "https://www.whalesborough.co.uk/" },
        { title: "Cambridge Country Club", category: "Golf & Leisure", img: "/assets/bredon-view.webp", url: "#" },
        { title: "Whitsand Bay", category: "Coastal Park", img: "/assets/whitsand-bay-fort.webp", url: "https://www.whitsandbayfort.co.uk/" },
        { title: "Ladera Retreats", category: "Hospitality", img: "/assets/ladera-retreats.webp", url: "https://ladera.co.uk/" },
        { title: "Bude Barkery", category: "E-Commerce", img: "/assets/bude-barkery.webp", url: "https://www.thebudebarkery.co.uk/" },
        { title: "Atlantic Bays", category: "Travel", img: "/assets/atlantic-bays.webp", url: "https://www.atlanticbaysholidaypark.co.uk/" },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#111] text-white pt-32 pb-20">
            <SEO
                title="View Our Work | High-Converting Holiday Park Websites"
                description="Explore our portfolio of high-performance websites built for holiday parks and luxury resorts."
            />
            <SchemaMarkup type="breadcrumb" />
            <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="text-center space-y-8 mb-24">
                    <div className="inline-block px-4 py-2 border border-[#F39A31] rounded-full">
                        <span className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#F39A31]">Portfolio</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[800] tracking-tighter">
                        HIGH-PERFORMANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5F74] to-[#F39A31]">WEBSITE PORTFOLIO</span>
                    </h1>
                    <div className="inline-block bg-[#1E5F74] px-6 py-4 rounded-[8px] mt-8 animate-pulse">
                        <p className="text-white font-[800] uppercase tracking-widest text-xs md:text-sm">
                            Special Promotion: Websites from £1,500 + VAT <span className="text-[#F39A31] mx-2">|</span> £60/mo Hosting
                        </p>
                    </div>
                    <p className="max-w-2xl mx-auto text-white/50 text-xl font-[500] mt-8">
                        Every website we build is a unique fusion of aesthetic excellence and conversion engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative aspect-[4/3] bg-[#222] rounded-[20px] overflow-hidden border border-white/10 hover:border-[#F39A31] transition-colors duration-500 block"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                width="800"
                                height="600"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />

                            <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                                <span className="text-[#F39A31] text-xs font-[800] tracking-widest uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-3xl font-[800] tracking-tighter mb-4">{project.title}</h3>

                                <div className="flex flex-col gap-2">
                                    <a href={project.url} target={project.url !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="text-white text-[10px] font-[800] uppercase tracking-widest hover:text-[#F39A31] flex items-center gap-2">
                                        Visit Site <ArrowUpRight size={14} />
                                    </a>
                                    {project.caseStudy && (
                                        <Link to={project.caseStudy} className="text-[#F39A31] text-[10px] font-[800] uppercase tracking-widest hover:text-white flex items-center gap-2">
                                            View Case Study <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {project.url === '#' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    <span className="text-white text-sm font-bold uppercase tracking-widest">Coming Soon</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-4xl font-[800] mb-8">Ready to start your project?</h2>
                    <Link to="/#contact" className="inline-block bg-[#F39A31] text-[#333333] px-12 py-5 rounded-full font-[800] text-sm uppercase tracking-[0.3em] hover:bg-white transition-colors">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WebsitesPage;
