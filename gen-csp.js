import crypto from 'crypto';
import fs from 'fs';

const org = '{"@context":"https://schema.org","@type":"Organization","@id":"https://www.peakemanagement.com/#organization","name":"Peake Management Ltd","url":"https://www.peakemanagement.com","logo":{"@type":"ImageObject","url":"https://www.peakemanagement.com/assets/hero-poster.jpg","width":"1200","height":"630"},"description":"High-performance marketing for UK holiday parks and luxury resorts.","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"},"contactPoint":{"@type":"ContactPoint","telephone":"+44-7375-064514","contactType":"Sales"}}';
const local = '{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://www.peakemanagement.com/#localbusiness","name":"Peake Management Ltd","image":"https://www.peakemanagement.com/assets/hero-poster.jpg","url":"https://www.peakemanagement.com","telephone":"+44-7375-064514","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"}}';
const web = '{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.peakemanagement.com/#website","url":"https://www.peakemanagement.com","name":"Peake Management","publisher":{"@id":"https://www.peakemanagement.com/#organization"}}';
const importmap = '{"imports":{"react":"https://esm.sh/react@19.0.0","react-dom/client":"https://esm.sh/react-dom@19.0.0/client","lucide-react":"https://esm.sh/lucide-react@0.460.0","react/":"https://esm.sh/react@^19.2.4/","react-dom/":"https://esm.sh/react-dom@^19.2.4/"}}';
const analyticsTag = "<script src=\"/js/analytics.js\"></script>"; // No, this is an external script tag, it doesn't need a hash in script-src if loaded from 'self'.

const h = (s) => `'sha256-${crypto.createHash('sha256').update(s).digest('base64')}'`;

const hashes = [h(org), h(local), h(web), h(importmap)];

const csp = `default-src 'self'; script-src 'self' ${hashes.join(' ')} https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://c.bing.com https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://c.bing.com; connect-src 'self' https://www.google-analytics.com https://*.clarity.ms https://c.bing.com; frame-src 'self'; report-uri /.netlify/functions/csp-report; report-to csp-endpoint`;

console.log(csp);
fs.writeFileSync('new-csp.txt', csp);
