
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const NotFoundPage = () => (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-8">
        <Helmet>
            <title>404 — Page Not Found | Peake Management</title>
            <meta name="description" content="The page you're looking for doesn't exist." />
        </Helmet>

        <div className="max-w-lg space-y-8">
            <div className="space-y-2">
                <span className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#1E5F74]">404 Error</span>
                <h1 className="text-8xl font-[900] tracking-tighter text-[#333333] leading-none">
                    LOST?
                </h1>
                <p className="text-xl text-[#333333]/60 font-[500] leading-relaxed">
                    This page doesn't exist. Let's get you back on track.
                </p>
            </div>

            <Link
                to="/"
                className="inline-flex items-center gap-3 bg-[#1E5F74] text-white px-10 py-5 rounded-full font-[800] text-[12px] uppercase tracking-[0.2em] hover:bg-[#F39A31] hover:text-[#333333] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
                Back to Home
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    </div>
);

export default NotFoundPage;
