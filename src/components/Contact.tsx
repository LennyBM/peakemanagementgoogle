
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [industry, setIndustry] = useState("");
    const [contactMethod, setContactMethod] = useState("email");
    const [submitted, setSubmitted] = useState(false);

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const getSubmitText = () => {
        switch (contactMethod) {
            case 'phone': return 'Request Callback';
            case 'whatsapp': return 'Request WhatsApp Message';
            default: return 'Request Info via Email';
        }
    };

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
        <section id="contact" className="py-40 bg-[#1E5F74] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            <div className="container mx-auto px-8 max-w-[1440px] relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-5 text-white space-y-12">
                        <SectionHeader label="Connect" title="Start The Journey" light />
                        <div className="space-y-6">
                            <p className="text-2xl text-white/90 leading-relaxed font-[700]">
                                Ready to increase direct bookings without increasing headcount?
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed font-[500]">
                                We'll audit your booking funnel, identify quick wins, and show you exactly how we'd increase revenue per pitch and occupancy.
                            </p>

                            <div className="grid grid-cols-1 gap-4 pt-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="text-sm font-[600] text-white/90 mb-2">Representative Results:</div>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#F39A31] flex-shrink-0 mt-0.5" />
                                            <span>Luxury resort: 29% YOY growth, £1.4m in sales supported</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-[#F39A31] flex-shrink-0 mt-0.5" />
                                            <span>Golf club: Successful hotel launch and sustained booking demand</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                                <CheckCircle2 size={20} className="text-[#F39A31] flex-shrink-0 mt-0.5" />
                                <p className="text-sm font-[600] text-white/80">
                                    <span className="text-white font-[700]">Flexible engagement options.</span> We offer 3-month minimum retainers for ongoing support, or one-off projects for specific needs.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8 pt-8">
                            <a href="https://wa.me/447375064514" className="flex items-center gap-8 group cursor-pointer text-white hover:text-[#F39A31] transition-colors" aria-label="Call us">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F39A31] group-hover:border-[#F39A31] group-hover:text-[#333333] transition-all"><Phone size={24} /></div>
                                <span className="text-2xl lg:text-3xl font-[800] tracking-tighter transition-all group-hover:translate-x-4">07375 064514</span>
                            </a>
                            <div className="flex items-center gap-8 group cursor-pointer text-white hover:text-[#F39A31] transition-colors" aria-label="Email us">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F39A31] group-hover:border-[#F39A31] group-hover:text-[#333333] transition-all"><Mail size={24} /></div>
                                <span className="text-2xl lg:text-3xl font-[800] tracking-tighter transition-all group-hover:translate-x-4">leonard@peakemanagement.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white p-8 lg:p-16 rounded-[12px] shadow-2xl border border-[#F39A31]/10">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20 animate-revel">
                                <div className="w-24 h-24 bg-[#1E5F74] rounded-full flex items-center justify-center text-white mb-4">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-4xl font-[800] text-[#333333]">Message Received.</h3>
                                <p className="text-[#333333]/60 text-lg max-w-sm">
                                    Thank you for contacting Peake Management. We will review your query and respond via your preferred method shortly.
                                </p>
                                <button onClick={() => setSubmitted(false)} className="text-[#1E5F74] font-[700] uppercase tracking-widest text-sm hover:underline">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit} className="space-y-12">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="services" value={selectedServices.join(', ')} />
                                <input type="hidden" name="contactMethod" value={contactMethod} />

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4 group">
                                        <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333] group-focus-within:text-[#1E5F74] transition-colors">Your Name *</label>
                                        <input type="text" name="name" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[6px] py-4 px-6 outline-none focus:border-[#F39A31] focus:bg-white font-[600] text-lg text-[#333333] transition-all" placeholder="Enter Full Name" required />
                                    </div>
                                    <div className="space-y-4 group">
                                        <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333] group-focus-within:text-[#1E5F74] transition-colors">Email Address *</label>
                                        <input type="email" name="email" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[6px] py-4 px-6 outline-none focus:border-[#F39A31] focus:bg-white font-[600] text-lg text-[#333333] transition-all" placeholder="Enter Email" required />
                                    </div>
                                </div>

                                <div className="space-y-4 group">
                                    <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333] group-focus-within:text-[#1E5F74] transition-colors">Industry Sector</label>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <select
                                                name="industry"
                                                value={industry}
                                                onChange={(e) => setIndustry(e.target.value)}
                                                className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[6px] py-4 px-6 outline-none focus:border-[#F39A31] focus:bg-white font-[600] text-lg text-[#333333] appearance-none cursor-pointer transition-all"
                                            >
                                                <option value="" disabled>Select Your Industry</option>
                                                <option>Holiday Parks & Resorts</option>
                                                <option>Hospitality & Hotels</option>
                                                <option>Construction & Trade</option>
                                                <option>E-Commerce & Retail</option>
                                                <option>Real Estate</option>
                                                <option>Health & Wellness</option>
                                                <option>Professional Services</option>
                                                <option>SaaS & Technology</option>
                                                <option>Automotive</option>
                                                <option>Education</option>
                                                <option>Non-Profit</option>
                                                <option>Other</option>
                                            </select>
                                            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#333333]/30" />
                                        </div>
                                        {industry === 'Other' && (
                                            <input
                                                type="text"
                                                name="industry_other"
                                                className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[6px] py-4 px-6 outline-none focus:border-[#F39A31] focus:bg-white font-[600] text-lg text-[#333333] transition-all animate-reveal"
                                                placeholder="Please specify your industry..."
                                                required
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333]">How can we help? (Select Multiple)</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Web Design', 'Lead Gen', 'AI Automation', 'Social Media', 'Paid Ads', 'SEO', 'Branding'].map((service) => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`px-6 py-3 rounded-full text-sm font-[700] border-2 transition-all duration-300 ${selectedServices.includes(service) ? 'bg-[#1E5F74] border-[#1E5F74] text-white' : 'bg-transparent border-[#E5E5E5] text-[#333333]/60 hover:border-[#F39A31] hover:text-[#F39A31]'}`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>

                                    {selectedServices.length > 0 && (
                                        <div className="animate-reveal pt-4 space-y-4 group">
                                            <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333] group-focus-within:text-[#1E5F74] transition-colors">Estimated Monthly Budget</label>
                                            <div className="relative">
                                                <select name="budget" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[6px] py-4 px-6 outline-none focus:border-[#F39A31] focus:bg-white font-[600] text-lg text-[#333333] appearance-none cursor-pointer transition-all">
                                                    <option value="" disabled>Select Budget Range</option>
                                                    <option>&lt; £1,000</option>
                                                    <option>£1,000 - £3,000</option>
                                                    <option>£3,000 - £5,000</option>
                                                    <option>£5,000+</option>
                                                </select>
                                                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#333333]/30" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4 group">
                                    <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333] group-focus-within:text-[#1E5F74] transition-colors">Tell us about your query</label>
                                    <textarea name="message" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[6px] py-4 px-6 outline-none focus:border-[#F39A31] focus:bg-white font-[500] text-lg text-[#333333] transition-all min-h-[120px] resize-none" placeholder="How can we help you grow?" />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#333333]">Preferred Contact Method</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { id: 'email', label: 'Email', icon: Mail },
                                            { id: 'phone', label: 'Phone Call', icon: Phone },
                                            { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare }
                                        ].map(({ id, label, icon: Icon }) => (
                                            <button
                                                key={id}
                                                type="button"
                                                onClick={() => setContactMethod(id)}
                                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-[8px] border-2 transition-all ${contactMethod === id ? 'border-[#F39A31] bg-[#F39A31]/10 text-[#333333]' : 'border-[#E5E5E5] text-[#333333]/40 hover:border-[#1E5F74] hover:text-[#1E5F74]'}`}
                                            >
                                                <Icon size={20} />
                                                <span className="text-xs font-[700] uppercase tracking-wider">{label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="gdpr_consent"
                                            required
                                            className="w-5 h-5 mt-1 rounded border-[#E5E5E5] text-[#1E5F74] focus:ring-[#1E5F74] cursor-pointer"
                                        />
                                        <span className="text-sm text-[#333333]/60 font-[500] leading-relaxed">
                                            I consent to the collection and use of my personal data for marketing purposes. We value your privacy and will never sell your information. <Link to="/privacy" className="text-[#1E5F74] underline hover:text-[#F39A31] transition-colors">Privacy Policy</Link>
                                        </span>
                                    </label>
                                </div>

                                <button type="submit" className="w-full bg-[#F39A31] text-[#333333] py-5 rounded-[8px] font-[800] text-[14px] uppercase tracking-[0.3em] hover:bg-[#333333] hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
                                    {getSubmitText()} <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
