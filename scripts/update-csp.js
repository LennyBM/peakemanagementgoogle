import crypto from 'crypto';
import fs from 'fs';

const h = (s) => `'sha256-${crypto.createHash('sha256').update(s).digest('base64')}'`;

// --- STATIC SCHEMAS ---
const org = '{"@context":"https://schema.org","@type":"Organization","@id":"https://www.peakemanagement.com/#organization","name":"Peake Management Ltd","url":"https://www.peakemanagement.com","logo":{"@type":"ImageObject","url":"https://www.peakemanagement.com/assets/hero-poster.jpg","width":"1200","height":"630"},"description":"High-performance marketing for UK holiday parks and luxury resorts.","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"},"contactPoint":{"@type":"ContactPoint","telephone":"+44-7375-064514","contactType":"Sales"}}';
const local = '{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://www.peakemanagement.com/#localbusiness","name":"Peake Management Ltd","image":"https://www.peakemanagement.com/assets/hero-poster.jpg","url":"https://www.peakemanagement.com","telephone":"+44-7375-064514","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"}}';
const web = '{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.peakemanagement.com/#website","url":"https://www.peakemanagement.com","name":"Peake Management","publisher":{"@id":"https://www.peakemanagement.com/#organization"}}';
const importmap = '{"imports":{"react":"https://esm.sh/react@19.0.0","react-dom/client":"https://esm.sh/react-dom@19.0.0/client","lucide-react":"https://esm.sh/lucide-react@0.460.0","react/":"https://esm.sh/react@^19.2.4/","react-dom/":"https://esm.sh/react-dom@^19.2.4/"}}';

// --- DATA FOR DYNAMIC SCHEMAS ---
const faqs = [
    { q: "Do I need to sign a long-term contract?", a: "No. We work month-to-month because we believe in earning your business through results, not locking you in. You can pause or cancel anytime with 30 days' notice." },
    { q: "What's the typical timeline to see results?", a: "Most clients see initial improvements within 30-60 days (better website performance, lead flow starting). Significant revenue impact typically shows in 90-120 days as campaigns optimize and compound. We're building systems, not running one-off promotions." },
    { q: "How much should I budget for marketing?", a: "We recommend 5-10% of revenue for established parks, 10-15% for growth-focused resorts. This includes our fees plus ad spend. We'll provide a custom recommendation based on your goals and current revenue." },
    { q: "What's included in your packages?", a: "Our Foundation tier (£1,500/mo) includes website design, basic SEO, and monthly support. Growth tier (£3,000/mo) adds paid ads, social media, and email automation. Scale tier (£5,000+/mo) includes everything plus a dedicated strategist and custom reporting. All packages are customizable." },
    { q: "Do you only work with holiday parks and resorts?", a: "While holiday parks, luxury resorts, and high-end attractions are our specialty, we work with any operator that values direct bookings, guest lifetime value, and higher occupancy. If you're tired of OTA fees and want to own your guest relationships, we can help." },
    { q: "Can I just hire you for one specific thing (like a website)?", a: "Yes, but we recommend our full-service approach for best results. A beautiful website without traffic is a waste. Traffic without conversion optimization leaves money on the table. We're most effective when we control the entire customer journey." },
    { q: "How hands-on do I need to be?", a: "Minimal. We handle strategy, execution, and optimization. You'll have a weekly 15-minute check-in call and approve major campaigns. Most clients spend 1-2 hours per month on marketing after onboarding." },
    { q: "Do you work with our existing tools (CRM, booking system, etc.)?", a: "Yes. We integrate with most major platforms (Stripe, Mailchimp, HubSpot, Zapier, etc.). If you have a custom system, we'll build the integration or find a workaround." },
    { q: "What if I'm not happy with the results?", a: "We'll have an honest conversation. If it's a strategy issue, we'll pivot. If it's a fit issue, we'll part ways professionally (no hard feelings, no penalties). Our goal is results, not retention at all costs." },
    { q: "Will I own my website and content?", a: "100%. You own everything we create—website code, content, ad accounts, social profiles, email lists. If we part ways, you keep it all. No hostage situations." },
    { q: "What happens to my existing website?", a: "We can redesign it, migrate it, or build fresh. If you love your current site, we'll optimize it. If it's holding you back, we'll rebuild it. Either way, we'll ensure zero downtime and preserve your SEO." },
    { q: "Do you handle GDPR compliance and legal stuff?", a: "We implement the technical requirements (cookie banners, privacy policies, data handling). You're responsible for legal review and compliance. We'll guide you, but we're not lawyers." },
    { q: "Can you guarantee specific results?", a: "No one can ethically guarantee specific numbers. What we can guarantee: strategic thinking, rapid execution, transparent reporting, and relentless optimization. Our case studies show what's possible (29% average occupancy lift, £1.4m in direct bookings), but your results depend on your market, offer, and execution." },
    { q: "How do you measure success?", a: "Revenue first. Then bookings, cost per acquisition, customer lifetime value, and direct booking percentage. We don't care about vanity metrics (likes, impressions). If it doesn't impact your bottom line, we don't track it." },
    { q: "What if my business is seasonal?", a: "Perfect. We'll build booking funnels that maximize peak summer weeks and nurture leads during the off-season. Many of our park and resort clients are seasonal—we know how to handle the feast-or-famine cycle." }
];

const services = [
    { title: "Direct Booking Engineering", fullDesc: "Your website becomes your best salesperson. We build fast, beautiful, conversion-optimized sites that turn visitors into guests. No templates, no compromises." },
    { title: "Owner & Guest Acquisition", fullDesc: "We don't just drive traffic—we drive qualified guests and owners. Meta ads, Google ads, and organic strategies that fill your calendar with people ready to book." },
    { title: "Automated Guest Journeys", fullDesc: "Automated guest communication, CRM integration, and follow-up systems. Your marketing works 24/7, even when your reception desk is closed." },
    { title: "Content & Social", fullDesc: "Strategic content that positions you as the obvious choice. Social media that builds community and drives revenue, not just likes." },
    { title: "Paid Advertising", fullDesc: "We manage your ad spend like it's our own money. Every pound is tracked, tested, and optimized for maximum ROI." }
];

const articles = [
    { title: "AI Agents vs. Chatbots: The New Standard", description: "Dumb chatbots annoy guests. Intelligent AI Agents sell to them. Understand the difference before you invest.", publishDate: "2026-02-01", author: "Leonard Peake", slug: "ai-in-hospitality" },
    { title: "Automating the Guest Journey: From Enquiry to Review", description: "Stop manually replying to emails. Learn how to set up an automated communication flow that saves 10 hours a week.", publishDate: "2026-02-05", author: "Leonard Peake", slug: "automating-guest-journey" },
    { title: "The Death of OTAs? Why Direct is Winning", description: "Market trends show a shift in consumer behavior. Guests are tired of OTA fees and hidden costs. Here's how to capitalize.", publishDate: "2025-12-15", author: "Leonard Peake", slug: "death-of-otas" },
    { title: "Direct Bookings vs. OTAs: The 2026 Math", description: "Are you paying 15% commission on bookings you could have tried for free? We break down the real cost of reliance on Booking.com.", publishDate: "2026-01-10", author: "Rebecca Peake", slug: "direct-booking-math" },
    { title: "Why 90% of Holiday Park Websites Fail", description: "Most holiday park websites are digital brochures, not sales machines. Discover the 3 conversion killers costing you bookings.", publishDate: "2026-01-20", author: "Leonard Peake", slug: "why-websites-fail" }
];

// --- GENERATE SCHEMAS ---
const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
});

const serviceSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing & Growth Systems",
    "provider": { "@id": "https://www.peakemanagement.com/#organization" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Peake Management Services",
        "itemListElement": services.map(s => ({
            "@type": "Service",
            "name": s.title,
            "description": s.fullDesc
        }))
    }
});

const genBreadcrumb = (paths) => JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.peakemanagement.com", "name": "Home" } },
        ...paths.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 2,
            "item": {
                "@id": `https://www.peakemanagement.com/${paths.slice(0, i + 1).join('/')}`,
                "name": p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, ' ')
            }
        }))
    ]
});

const breadcrumbs = [
    genBreadcrumb(['about']),
    genBreadcrumb(['services']),
    genBreadcrumb(['results']),
    genBreadcrumb(['websites']),
    genBreadcrumb(['blog']),
    genBreadcrumb(['faq']),
    ...articles.map(a => genBreadcrumb(['blog', a.slug]))
];

const articleSchemas = articles.map(a => JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": a.title,
    "description": a.description,
    "datePublished": a.publishDate,
    "author": { "@type": "Person", "name": a.author },
    "publisher": { "@id": "https://www.peakemanagement.com/#organization" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.peakemanagement.com/blog/${a.slug}` }
}));

// --- CALCULATE ALL HASHES ---
const hashes = [
    h(org), h(local), h(web), h(importmap),
    h(faqSchema),
    h(serviceSchema),
    ...breadcrumbs.map(h),
    ...articleSchemas.map(h)
];

// Deduplicate hashes
const uniqueHashes = [...new Set(hashes)];

const cspLine = `default-src 'self'; script-src 'self' ${uniqueHashes.join(' ')} https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://c.bing.com https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://c.bing.com; connect-src 'self' https://www.google-analytics.com https://*.clarity.ms https://c.bing.com; frame-src 'self'; report-uri /.netlify/functions/csp-report; report-to csp-endpoint`;

const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');
const updatedToml = netlifyToml.replace(/Content-Security-Policy-Report-Only = ".*"/, `Content-Security-Policy-Report-Only = "${cspLine}"`);

fs.writeFileSync('netlify.toml', updatedToml);
console.log('Successfully updated netlify.toml with all schema hashes!');
console.log(`Total hashes added: ${uniqueHashes.length}`);
uniqueHashes.forEach(h => console.log(`  ${h}`));
