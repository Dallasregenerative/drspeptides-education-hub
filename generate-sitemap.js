import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://pepedhub.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define all routes with their priorities and change frequencies
const routes = [
  // Homepage - highest priority
  { path: '/', priority: '1.0', changefreq: 'daily' },
  
  // Main navigation pages - high priority
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/research', priority: '0.9', changefreq: 'weekly' },
  { path: '/training', priority: '0.9', changefreq: 'weekly' },
  { path: '/faq', priority: '0.8', changefreq: 'weekly' },
  { path: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources', priority: '0.8', changefreq: 'weekly' },
  { path: '/video-library', priority: '0.8', changefreq: 'weekly' },
  { path: '/downloads', priority: '0.8', changefreq: 'weekly' },
  
  // Educational content - high priority for SEO
  { path: '/what-are-peptides', priority: '0.9', changefreq: 'monthly' },
  { path: '/are-peptides-safe', priority: '0.9', changefreq: 'monthly' },
  { path: '/peptides-vs-steroids', priority: '0.8', changefreq: 'monthly' },
  { path: '/how-to-inject-peptides', priority: '0.9', changefreq: 'monthly' },
  { path: '/how-to-reconstitute-peptides', priority: '0.9', changefreq: 'monthly' },
  { path: '/administration-guide', priority: '0.8', changefreq: 'monthly' },
  { path: '/stacking-guide', priority: '0.8', changefreq: 'monthly' },
  
  // Tools - high priority
  { path: '/tools/reconstitution-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/tools/dosage-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/tools/interaction-checker', priority: '0.9', changefreq: 'weekly' },
  { path: '/tools/comparison-tool', priority: '0.9', changefreq: 'weekly' },
  { path: '/tools/protocol-builder', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/biomarker-tracker', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/progress-tracker', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/patient-handouts', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/practice-assessment', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/cost-calculator', priority: '0.8', changefreq: 'monthly' },
  
  // Linkable Assets - HIGH PRIORITY for backlinks
  { path: '/statistics', priority: '0.95', changefreq: 'monthly' },
  { path: '/embed', priority: '0.85', changefreq: 'monthly' },
  { path: '/guides/ultimate-peptide-therapy-guide', priority: '0.95', changefreq: 'monthly' },
  { path: '/infographics', priority: '0.85', changefreq: 'monthly' },
  { path: '/ai-faq', priority: '0.95', changefreq: 'weekly' },
  { path: '/glossary', priority: '0.90', changefreq: 'monthly' },
  
  // Protocols - high priority
  { path: '/protocols/weight-loss', priority: '0.8', changefreq: 'monthly' },
  { path: '/protocols/injury-healing', priority: '0.8', changefreq: 'monthly' },
  { path: '/protocols/cognitive', priority: '0.8', changefreq: 'monthly' },
  { path: '/protocols/longevity', priority: '0.8', changefreq: 'monthly' },
  { path: '/protocols/metabolism', priority: '0.8', changefreq: 'monthly' },
  
  // Individual Peptides - HIGH PRIORITY for SEO (these are key landing pages)
  // Weight Loss Peptides
  { path: '/peptides/semaglutide', priority: '0.95', changefreq: 'weekly' },
  { path: '/peptides/tirzepatide', priority: '0.95', changefreq: 'weekly' },
  { path: '/peptides/retatrutide', priority: '0.9', changefreq: 'weekly' },
  { path: '/peptides/aod-9604', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/5-amino-1mq', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/cagrilintide', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/glp-1', priority: '0.85', changefreq: 'monthly' },
  
  // Regenerative/Healing Peptides
  { path: '/peptides/bpc-157', priority: '0.95', changefreq: 'weekly' },
  { path: '/peptides/tb-500', priority: '0.9', changefreq: 'weekly' },
  { path: '/peptides/ghk-cu', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/ll-37', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/kpv', priority: '0.8', changefreq: 'monthly' },
  
  // Growth Hormone Peptides
  { path: '/peptides/cjc-1295', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/ipamorelin', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/sermorelin', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/tesamorelin', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/ghrp-2', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/ghrp-6', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/ibutamoren', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/igf-1-lr3', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/mgf', priority: '0.75', changefreq: 'monthly' },
  
  // Cognitive/Nootropic Peptides
  { path: '/peptides/semax', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/selank', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/dihexa', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/pinealon', priority: '0.75', changefreq: 'monthly' },
  { path: '/peptides/dsip', priority: '0.75', changefreq: 'monthly' },
  
  // Longevity Peptides
  { path: '/peptides/epithalon', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/nad', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/mots-c', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/humanin', priority: '0.75', changefreq: 'monthly' },
  { path: '/peptides/ss-31', priority: '0.75', changefreq: 'monthly' },
  
  // Immune Peptides
  { path: '/peptides/thymosin-alpha-1', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/glutathione', priority: '0.8', changefreq: 'monthly' },
  
  // Sexual Health Peptides
  { path: '/peptides/pt-141', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/melanotan-1', priority: '0.75', changefreq: 'monthly' },
  { path: '/peptides/melanotan-2', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/oxytocin', priority: '0.75', changefreq: 'monthly' },
  { path: '/peptides/kisspeptin-10', priority: '0.75', changefreq: 'monthly' },
  
  // Other Peptides
  { path: '/peptides/slupp-332', priority: '0.7', changefreq: 'monthly' },
  { path: '/peptides/bpc-157-capsules', priority: '0.8', changefreq: 'monthly' },
  { path: '/peptides/ghk-cu-serum', priority: '0.75', changefreq: 'monthly' },
  { path: '/peptides/nad-nasal-spray', priority: '0.75', changefreq: 'monthly' },
  
  // Peptide Blends - Important for SEO
  { path: '/blends/bpc-157-tb-500', priority: '0.85', changefreq: 'monthly' },
  { path: '/blends/cjc-1295-ipamorelin', priority: '0.85', changefreq: 'monthly' },
  { path: '/blends/selank-semax', priority: '0.8', changefreq: 'monthly' },
  { path: '/blends/semaglutide-bpc-157', priority: '0.8', changefreq: 'monthly' },
  { path: '/blends/tirzepatide-bpc-157', priority: '0.8', changefreq: 'monthly' },
  { path: '/blends/bpc-wolverine', priority: '0.75', changefreq: 'monthly' },
  // Formula Series - High priority proprietary blends
  { path: '/peptides/formula-n-259', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-n-69', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-n-111', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-n-5550', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-n-2331', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-rg-5555', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-m-51', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-m-2531', priority: '0.85', changefreq: 'monthly' },
  { path: '/peptides/formula-wl-1175', priority: '0.85', changefreq: 'monthly' },
  { path: '/blends/glow-capsules', priority: '0.7', changefreq: 'monthly' },
  { path: '/blends/glow-core', priority: '0.7', changefreq: 'monthly' },
  { path: '/blends/glow-plus', priority: '0.7', changefreq: 'monthly' },
  { path: '/blends/glow-ultra', priority: '0.7', changefreq: 'monthly' },
  { path: '/blends/klow-capsules', priority: '0.7', changefreq: 'monthly' },
  
  // Informational/Legal pages
  { path: '/practice-toolkit', priority: '0.7', changefreq: 'monthly' },
  { path: '/supplier-directory', priority: '0.7', changefreq: 'monthly' },
  { path: '/patient-education', priority: '0.7', changefreq: 'monthly' },
  { path: '/regulatory-guidance', priority: '0.7', changefreq: 'monthly' },
  { path: '/insurance-billing', priority: '0.6', changefreq: 'monthly' },
  { path: '/safety-standards', priority: '0.7', changefreq: 'monthly' },
  { path: '/safety-compliance', priority: '0.6', changefreq: 'monthly' },
  { path: '/safety-management', priority: '0.6', changefreq: 'monthly' },
  
  // AI Agent
  { path: '/ai-agent', priority: '0.8', changefreq: 'weekly' },
  
  // Blog posts
  { path: '/blog/how-to-start-peptide-therapy-practice', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/choosing-peptide-supplier', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/bpc-157-vs-tb-500', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/semaglutide-tirzepatide-guide', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/peptide-quality-standards', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/peptide-storage-handling', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/peptide-therapy-roi', priority: '0.75', changefreq: 'monthly' },
  { path: '/blog/thymosin-alpha-1-immune', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/pt-141-sexual-wellness', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/semax-cognitive-enhancement', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/tesamorelin-visceral-fat', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/melanotan-ii-photoprotection', priority: '0.75', changefreq: 'monthly' },
  { path: '/blog/ipamorelin-growth-hormone', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/ghk-cu-regenerative-medicine', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/implementing-peptide-therapy', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/peptideprotocols-ai', priority: '0.75', changefreq: 'monthly' },
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `# Peptide Education Hub - robots.txt
# https://pepedhub.com

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Block admin/private areas (if any)
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# Allow important resources
Allow: /drspeptides_*.png
Allow: /downloads/*.pdf

# Primary keywords for SEO:
# - Peptide therapy education
# - BPC-157 guide
# - Semaglutide dosing
# - Tirzepatide protocols
# - Peptide reconstitution
# - Healthcare provider peptide education
`;
};

// Write files
const publicDir = path.join(__dirname, 'client', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemap = generateSitemap();
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully at client/public/sitemap.xml');
console.log(`📊 Total URLs: ${routes.length}`);

const robotsTxt = generateRobotsTxt();
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('✅ robots.txt generated successfully at client/public/robots.txt');
