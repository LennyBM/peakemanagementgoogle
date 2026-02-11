import crypto from 'crypto';

// Static JSON-LD schemas from index.html
const schemas = [
    // Organization Schema
    '{"@context":"https://schema.org","@type":"Organization","@id":"https://www.peakemanagement.com/#organization","name":"Peake Management Ltd","url":"https://www.peakemanagement.com","logo":{"@type":"ImageObject","url":"https://www.peakemanagement.com/assets/hero-poster.jpg","width":"1200","height":"630"},"description":"High-performance marketing for UK holiday parks and luxury resorts.","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"},"contactPoint":{"@type":"ContactPoint","telephone":"+44-7375-064514","contactType":"Sales"}}',

    // LocalBusiness Schema
    '{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://www.peakemanagement.com/#localbusiness","name":"Peake Management Ltd","image":"https://www.peakemanagement.com/assets/hero-poster.jpg","url":"https://www.peakemanagement.com","telephone":"+44-7375-064514","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"}}',

    // Website Schema
    '{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.peakemanagement.com/#website","url":"https://www.peakemanagement.com","name":"Peake Management","publisher":{"@id":"https://www.peakemanagement.com/#organization"}}'
];

console.log('Calculating SHA-256 hashes for JSON-LD schemas...\n');

const hashes = schemas.map((schema, index) => {
    const hash = crypto.createHash('sha256').update(schema).digest('base64');
    const label = ['Organization', 'LocalBusiness', 'Website'][index];
    console.log(`${label}:`);
    console.log(`  'sha256-${hash}'`);
    return `'sha256-${hash}'`;
});

console.log('\n--- CSP script-src directive ---');
console.log(`script-src 'self' ${hashes.join(' ')} 'sha256-zNhosN/QIYaX7iQpPyV1WniicK3Pd3ScpasptBEAjpys=' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://c.bing.com https://esm.sh;`);
