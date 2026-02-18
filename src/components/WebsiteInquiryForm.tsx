
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Building2, Globe, Target, DollarSign, Calendar, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

type Step = 1 | 2 | 3;

const GOALS = [
    'Generate more leads',
    'Increase direct bookings',
    'Replace an outdated site',
    'Launch a new business',
    'Improve conversion rate',
    'Build brand authority',
];

const INDUSTRIES = [
    'Holiday Parks & Resorts',
    'Hospitality & Hotels',
    'Construction & Trade',
    'E-Commerce & Retail',
    'Real Estate',
    'Health & Wellness',
    'Professional Services',
    'SaaS & Technology',
    'Other',
];

const BUDGETS = [
    { label: '£1,500 – £3,000', value: '£1,500 – £3,000' },
    { label: '£3,000 – £5,000', value: '£3,000 – £5,000' },
    { label: '£5,000 – £10,000', value: '£5,000 – £10,000' },
    { label: '£10,000+', value: '£10,000+' },
];

const TIMELINES = [
    'ASAP (within 2 weeks)',
    '1 month',
    '2–3 months',
    'Flexible',
];

const PAYMENT_OPTIONS = [
    { label: 'One-Off Payment', sub: 'Pay in full upfront' },
    { label: 'Monthly Plan', sub: 'Spread the cost' },
    { label: 'Not Sure Yet', sub: "Let's discuss" },
];

interface FormData {
    name: string;
    email: string;
    businessName: string;
    phone: string;
    website: string;
    industry: string;
    goal: string;
    painPoint: string;
    budget: string;
    timeline: string;
    paymentPreference: string;
    gdpr: boolean;
}

const WebsiteInquiryForm = () => {
    const [step, setStep] = useState<Step>(1);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        businessName: '',
        phone: '',
        website: '',
        industry: '',
        goal: '',
        painPoint: '',
        budget: '',
        timeline: '',
        paymentPreference: '',
        gdpr: false,
    });

    const set = (field: keyof FormData, value: string | boolean) =>
        setForm(prev => ({ ...prev, [field]: value }));

    const canProceedStep1 = form.name.trim() && form.email.trim() && form.businessName.trim();
    const canProceedStep2 = form.industry && form.goal && form.painPoint.trim();
    const canSubmit = form.budget && form.timeline && form.paymentPreference && form.gdpr;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        const params = new URLSearchParams();
        params.append('form-name', 'website-strategy-session');
        params.append('bot-field', '');
        (Object.entries(form) as [keyof FormData, string | boolean][]).forEach(([k, v]) =>
            params.append(k, String(v))
        );

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        })
            .then(() => setSubmitted(true))
            .catch(() =>
                setSubmitError('Something went wrong. Please email us directly at leonard@peakemanagement.com')
            );
    };

    const inputClass =
        'w-full bg-white/5 border border-white/15 rounded-xl py-4 px-5 text-white placeholder-white/30 font-[500] text-base outline-none focus:border-peake-orange focus:bg-white/10 transition-all duration-300';

    const chipClass = (active: boolean) =>
        `cursor-pointer px-5 py-3 rounded-full text-[11px] font-[800] uppercase tracking-[0.15em] border transition-all duration-300 ${active
            ? 'bg-peake-orange border-peake-orange text-peake-black'
            : 'border-white/20 text-white/70 hover:border-peake-orange/60 hover:text-white'
        }`;

    const StepDot = ({ n }: { n: number }) => (
        <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-[900] transition-all duration-500 ${step > n
                ? 'bg-peake-orange text-peake-black'
                : step === n
                    ? 'bg-white text-peake-black ring-4 ring-white/20'
                    : 'bg-white/10 text-white/40'
                }`}
        >
            {step > n ? <CheckCircle2 size={16} /> : n}
        </div>
    );

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center text-center space-y-8 py-20 px-8">
                <div className="w-24 h-24 rounded-full bg-peake-orange/20 border border-peake-orange/40 flex items-center justify-center">
                    <CheckCircle2 size={48} className="text-peake-orange" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-4xl font-[900] tracking-tighter text-white">You're In.</h3>
                    <p className="text-white/70 text-lg max-w-sm font-[500] leading-relaxed">
                        We've received your project brief. Expect a response within 24 hours.
                    </p>
                </div>
                <button
                    onClick={() => { setSubmitted(false); setStep(1); setForm({ name: '', email: '', businessName: '', phone: '', website: '', industry: '', goal: '', painPoint: '', budget: '', timeline: '', paymentPreference: '', gdpr: false }); }}
                    className="text-white/50 font-[700] uppercase tracking-widest text-xs hover:text-peake-orange transition-colors"
                >
                    Submit another enquiry
                </button>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-10">
                <StepDot n={1} />
                <div className={`flex-1 h-[2px] transition-all duration-700 ${step > 1 ? 'bg-peake-orange' : 'bg-white/10'}`} />
                <StepDot n={2} />
                <div className={`flex-1 h-[2px] transition-all duration-700 ${step > 2 ? 'bg-peake-orange' : 'bg-white/10'}`} />
                <StepDot n={3} />
            </div>

            <form name="website-strategy-session" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="website-strategy-session" />
                <input type="hidden" name="bot-field" />

                {/* ── STEP 1: About You ── */}
                {step === 1 && (
                    <div className="space-y-6 animate-reveal">
                        <div className="space-y-1 mb-8">
                            <div className="flex items-center gap-2 text-peake-orange mb-2">
                                <Building2 size={16} />
                                <span className="text-[10px] font-[900] uppercase tracking-[0.3em]">Step 1 of 3</span>
                            </div>
                            <h3 className="text-2xl font-[900] tracking-tight text-white">Tell us about yourself</h3>
                            <p className="text-white/50 text-sm font-[500]">Basic contact details so we can follow up.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Your Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={e => set('name', e.target.value)}
                                    className={inputClass}
                                    placeholder="Full name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={e => set('email', e.target.value)}
                                    className={inputClass}
                                    placeholder="you@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Business Name *</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={form.businessName}
                                    onChange={e => set('businessName', e.target.value)}
                                    className={inputClass}
                                    placeholder="Your company"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Phone (optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={e => set('phone', e.target.value)}
                                    className={inputClass}
                                    placeholder="+44 7xxx xxxxxx"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">
                                <Globe size={12} className="inline mr-1" />
                                Current Website (optional)
                            </label>
                            <input
                                type="url"
                                name="website"
                                value={form.website}
                                onChange={e => set('website', e.target.value)}
                                className={inputClass}
                                placeholder="https://yoursite.com"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={!canProceedStep1}
                            className="w-full mt-4 bg-peake-orange text-peake-black py-5 rounded-full font-[900] text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                        >
                            Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {/* ── STEP 2: Your Project ── */}
                {step === 2 && (
                    <div className="space-y-8 animate-reveal">
                        <div className="space-y-1 mb-8">
                            <div className="flex items-center gap-2 text-peake-orange mb-2">
                                <Target size={16} />
                                <span className="text-[10px] font-[900] uppercase tracking-[0.3em]">Step 2 of 3</span>
                            </div>
                            <h3 className="text-2xl font-[900] tracking-tight text-white">About your project</h3>
                            <p className="text-white/50 text-sm font-[500]">Help us understand what you need.</p>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Industry *</label>
                            <div className="flex flex-wrap gap-3">
                                {INDUSTRIES.map(ind => (
                                    <button
                                        key={ind}
                                        type="button"
                                        onClick={() => set('industry', ind)}
                                        className={chipClass(form.industry === ind)}
                                    >
                                        {ind}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">Primary Goal *</label>
                            <div className="flex flex-wrap gap-3">
                                {GOALS.map(g => (
                                    <button
                                        key={g}
                                        type="button"
                                        onClick={() => set('goal', g)}
                                        className={chipClass(form.goal === g)}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">
                                What's your biggest challenge right now? *
                            </label>
                            <textarea
                                name="painPoint"
                                value={form.painPoint}
                                onChange={e => set('painPoint', e.target.value)}
                                className={`${inputClass} min-h-[110px] resize-none`}
                                placeholder="e.g. Our current site gets traffic but converts no one..."
                                required
                            />
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="px-8 py-5 rounded-full border border-white/20 text-white/60 font-[800] text-[11px] uppercase tracking-[0.2em] hover:border-white/40 hover:text-white transition-all"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep(3)}
                                disabled={!canProceedStep2}
                                className="flex-1 bg-peake-orange text-peake-black py-5 rounded-full font-[900] text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                            >
                                Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}

                {/* ── STEP 3: Budget & Preferences ── */}
                {step === 3 && (
                    <div className="space-y-8 animate-reveal">
                        <div className="space-y-1 mb-8">
                            <div className="flex items-center gap-2 text-peake-orange mb-2">
                                <DollarSign size={16} />
                                <span className="text-[10px] font-[900] uppercase tracking-[0.3em]">Step 3 of 3</span>
                            </div>
                            <h3 className="text-2xl font-[900] tracking-tight text-white">Budget & timeline</h3>
                            <p className="text-white/50 text-sm font-[500]">No commitment — just helps us tailor the proposal.</p>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">
                                <DollarSign size={12} className="inline mr-1" />
                                Investment Range *
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {BUDGETS.map(b => (
                                    <button
                                        key={b.value}
                                        type="button"
                                        onClick={() => set('budget', b.value)}
                                        className={`py-4 px-5 rounded-xl border text-left transition-all duration-300 ${form.budget === b.value
                                            ? 'border-peake-orange bg-peake-orange/10 text-white'
                                            : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                                            }`}
                                    >
                                        <span className="block font-[800] text-sm">{b.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">
                                <Calendar size={12} className="inline mr-1" />
                                Timeline *
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {TIMELINES.map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => set('timeline', t)}
                                        className={chipClass(form.timeline === t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-[800] uppercase tracking-[0.2em] text-white/60">
                                <CreditCard size={12} className="inline mr-1" />
                                Payment Preference *
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {PAYMENT_OPTIONS.map(p => (
                                    <button
                                        key={p.label}
                                        type="button"
                                        onClick={() => set('paymentPreference', p.label)}
                                        className={`py-4 px-4 rounded-xl border text-center transition-all duration-300 ${form.paymentPreference === p.label
                                            ? 'border-peake-orange bg-peake-orange/10 text-white'
                                            : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                                            }`}
                                    >
                                        <span className="block font-[800] text-xs">{p.label}</span>
                                        <span className="block text-[10px] text-white/40 mt-1">{p.sub}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* GDPR */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                name="gdpr"
                                checked={form.gdpr}
                                onChange={e => set('gdpr', e.target.checked)}
                                className="w-5 h-5 mt-0.5 rounded border-white/20 bg-white/5 text-peake-orange focus:ring-peake-orange cursor-pointer flex-shrink-0"
                                required
                            />
                            <span className="text-sm text-white/50 font-[500] leading-relaxed">
                                I consent to Peake Management storing my data to respond to this enquiry. We never sell your data.{' '}
                                <Link to="/privacy" className="text-peake-orange hover:text-white transition-colors underline">
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>

                        {submitError && (
                            <div role="alert" className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-[600]">
                                {submitError}
                            </div>
                        )}

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="px-8 py-5 rounded-full border border-white/20 text-white/60 font-[800] text-[11px] uppercase tracking-[0.2em] hover:border-white/40 hover:text-white transition-all"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={!canSubmit}
                                className="flex-1 relative group bg-peake-orange text-peake-black py-5 rounded-full font-[900] text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                <Zap size={16} />
                                Send My Brief <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default WebsiteInquiryForm;
