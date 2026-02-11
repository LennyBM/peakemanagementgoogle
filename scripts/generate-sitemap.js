
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.peakemanagement.com';
const OUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');
const ARTICLES_DIR = path.resolve(__dirname, '../src/content/articles');

// 1. Static Routes
const staticRoutes = [
  '',
  '/about',
  '/websites',
  '/services',
  '/results',
  '/blog',
  '/faq',
  '/privacy',
  '/cookies',
  '/terms'
];

// 2. Get Articles
const getArticles = () => {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.mdx'));
  return files.map(file => {
    const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
    const { data } = matter(content);
    return {
      slug: file.replace('.mdx', ''),
      date: data.publishDate || new Date().toISOString().split('T')[0]
    };
  });
};

const generateSitemap = () => {
  const articles = getArticles();
  const date = new Date().toISOString().split('T')[0];

  const staticXml = staticRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  const articleXml = articles.map(article => `
  <url>
    <loc>${BASE_URL}/blog/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${articleXml}
</urlset>`;

  fs.writeFileSync(OUT_FILE, sitemap);
  console.log(`✅ Sitemap generated at ${OUT_FILE} with ${articles.length} articles.`);
};

generateSitemap();
