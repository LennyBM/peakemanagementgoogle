import crypto from 'crypto';

const org = '{"@context":"https://schema.org","@type":"Organization","@id":"https://www.peakemanagement.com/#organization","name":"Peake Management Ltd","url":"https://www.peakemanagement.com","logo":{"@type":"ImageObject","url":"https://www.peakemanagement.com/assets/hero-poster.jpg","width":"1200","height":"630"},"description":"High-performance marketing for UK holiday parks and luxury resorts.","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"},"contactPoint":{"@type":"ContactPoint","telephone":"+44-7375-064514","contactType":"Sales"}}';

const local = '{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://www.peakemanagement.com/#localbusiness","name":"Peake Management Ltd","image":"https://www.peakemanagement.com/assets/hero-poster.jpg","url":"https://www.peakemanagement.com","telephone":"+44-7375-064514","address":{"@type":"PostalAddress","addressLocality":"Bude","addressRegion":"Cornwall","addressCountry":"UK"}}';

const web = '{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.peakemanagement.com/#website","url":"https://www.peakemanagement.com","name":"Peake Management","publisher":{"@id":"https://www.peakemanagement.com/#organization"}}';

console.log(crypto.createHash('sha256').update(org).digest('base64'));
console.log(crypto.createHash('sha256').update(local).digest('base64'));
console.log(crypto.createHash('sha256').update(web).digest('base64'));
