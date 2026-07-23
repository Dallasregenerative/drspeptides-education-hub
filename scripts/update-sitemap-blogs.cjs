const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../client/public/sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

const newUrls = `
  <url>
    <loc>https://pepedhub.com/blog/is-peptide-therapy-fda-approved</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pepedhub.com/blog/how-long-does-peptide-therapy-take-to-work</loc>
    <lastmod>2026-07-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pepedhub.com/blog/are-peptides-safe</loc>
    <lastmod>2026-07-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;

sitemap = sitemap.replace('</urlset>', newUrls + '\n</urlset>');
fs.writeFileSync(sitemapPath, sitemap);
console.log('Updated sitemap.xml');
