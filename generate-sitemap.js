import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://pepedhub.com';

// All routes from the application
const routes = [
  '/',
  '/blog',
  '/research',
  '/training',
  '/faq',
  '/case-studies',
  '/resources',
  '/practice-toolkit',
  '/supplier-directory',
  '/patient-education',
  '/regulatory-guidance',
  '/insurance-billing',
  '/safety-standards',
  '/safety-compliance',
  '/safety-management',
  
  // Peptides
  '/peptides/bpc-157',
  '/peptides/tb-500',
  '/peptides/semaglutide',
  '/peptides/tirzepatide',
  '/peptides/cjc-1295',
  '/peptides/ipamorelin',
  '/peptides/semax',
  '/peptides/selank',
  '/peptides/ghk-cu',
  '/peptides/thymosin-alpha-1',
  '/peptides/epithalon',
  '/peptides/nad',
  '/peptides/mots-c',
  '/peptides/humanin',
  '/peptides/ss-31',
  '/peptides/dihexa',
  '/peptides/dsip',
  '/peptides/melanotan-1',
  '/peptides/melanotan-2',
  '/peptides/pt-141',
  '/peptides/oxytocin',
  '/peptides/kisspeptin-10',
  '/peptides/sermorelin',
  '/peptides/tesamorelin',
  '/peptides/ghrp-2',
  '/peptides/ghrp-6',
  '/peptides/ibutamoren',
  '/peptides/igf-1-lr3',
  '/peptides/mgf',
  '/peptides/pinealon',
  '/peptides/aod-9604',
  '/peptides/5-amino-1mq',
  '/peptides/retatrutide',
  '/peptides/cagrilintide',
  '/peptides/glutathione',
  '/peptides/kpv',
  '/peptides/ll-37',
  '/peptides/slupp-332',
  '/peptides/glp-1',
  '/peptides/bpc-157-capsules',
  '/peptides/ghk-cu-serum',
  '/peptides/nad-nasal-spray',
  
  // Blends
  '/blends/bpc-157-tb-500',
  '/blends/cjc-1295-ipamorelin',
  '/blends/selank-semax',
  '/blends/semaglutide-bpc-157',
  '/blends/tirzepatide-bpc-157',
  '/blends/bpc-wolverine',
  '/blends/formula-m51',
  '/blends/formula-n5550',
  '/blends/formula-rg5555',
  '/blends/glow-capsules',
  '/blends/glow-core',
  '/blends/glow-plus',
  '/blends/glow-ultra',
  '/blends/klow-capsules',
  
  // Tools
  '/tools/reconstitution-calculator',
  '/tools/dosage-calculator',
  '/tools/interaction-checker',
  '/tools/comparison-tool',
  '/tools/protocol-builder',
  '/tools/biomarker-tracker',
  '/tools/progress-tracker',
  '/tools/patient-handouts',
  
  // Protocols
  '/protocols/weight-loss',
  '/protocols/injury-healing',
  '/protocols/cognitive',
  '/protocols/longevity',
  '/protocols/metabolism',
  
  // Educational
  '/what-are-peptides',
  '/are-peptides-safe',
  '/peptides-vs-steroids',
  '/how-to-inject-peptides',
  '/how-to-reconstitute-peptides',
  '/administration-guide',
  '/stacking-guide',
  
  // AI Agent
  '/ai-agent',
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, 'client', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully at client/public/sitemap.xml');
console.log(`📊 Total URLs: ${routes.length}`);
