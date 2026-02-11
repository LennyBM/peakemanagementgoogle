
import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadMagnet = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const myForm = e.currentTarget;
        const formData = new FormData(myForm);
        const searchParams = new URLSearchParams();
        for (const pair of formData) {
            searchParams.append(pair[0], pair[1] as string);
        }

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: searchParams.toString(),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error));
    };

    return (
        <section className="bg-[#1E5F74] py-8 border-b-2 border-[#F39A31]/20">
            <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-[#F39A31] rounded-full flex items-center justify-center text-[#333333]">
                            <Download size={24} />
                        </div>
                        <div className="text-white">
                            <h3 className="text-lg font-[800] uppercase tracking-wider">Not ready to hire yet?</h3>
                            <p className="text-white/60 text-sm font-[500]">Get our free guide: "5 Automation Secrets to Double Bookings in 2026"</p>
                        </div>
                    </div>

                    {submitted ? (
                        <div className="flex items-center gap-4 text-[#F39A31] font-[800] animate-reveal">
                            <CheckCircle2 /> <span>Check your inbox! Guide sent.</span>
                        </div>
                    ) : (
                        <form name="lead-magnet" method="post" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full md:w-auto gap-4 items-start md:items-center">
                            <div className="flex flex-col gap-3 w-full md:w-auto">
                                <div className="flex gap-2 w-full md:w-auto">
                                    <input type="hidden" name="form-name" value="lead-magnet" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        required
                                        className="bg-white/10 border border-white/20 rounded-[4px] px-4 py-3 outline-none text-white placeholder-white/40 font-[500] w-full md:w-80 focus:border-[#F39A31] transition-colors"
                                    />
                                    <button type="submit" className="bg-[#F39A31] text-[#333333] px-6 py-3 rounded-[4px] font-[800] uppercase tracking-widest text-xs hover:bg-white transition-colors whitespace-nowrap">
                                        Get Guide
                                    </button>
                                </div>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="gdpr_consent"
                                        required
                                        className="w-4 h-4 rounded border-white/20 bg-white/10 text-[#F39A31] focus:ring-[#F39A31] cursor-pointer"
                                    />
                                    <span className="text-[10px] text-white/50 font-[500]">
                                        I consent to the use of my data for marketing purposes. <Link to="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</Link>
                                    </span>
                                </label>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
