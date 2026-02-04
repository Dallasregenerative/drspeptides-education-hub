import { Link } from 'wouter';
import { ArrowRight, BookOpen, Beaker, Calculator, FileText } from 'lucide-react';

/**
 * Related Content Component for Internal Linking
 * Improves SEO by creating strong internal link structure
 */

interface RelatedLink {
  title: string;
  path: string;
  description: string;
  type: 'peptide' | 'tool' | 'article' | 'guide';
}

// Related peptides for each peptide page
export const relatedPeptideLinks: Record<string, RelatedLink[]> = {
  'bpc-157': [
    { title: 'TB-500', path: '/peptides/tb-500', description: 'Synergistic healing peptide often combined with BPC-157', type: 'peptide' },
    { title: 'GHK-Cu', path: '/peptides/ghk-cu', description: 'Copper peptide for tissue regeneration', type: 'peptide' },
    { title: 'BPC-157 + TB-500 Blend', path: '/blends/bpc-157-tb-500', description: 'Pre-mixed healing combination', type: 'peptide' },
    { title: 'Dosage Calculator', path: '/tools/dosage-calculator', description: 'Calculate your BPC-157 dosage', type: 'tool' },
  ],
  'semaglutide': [
    { title: 'Tirzepatide', path: '/peptides/tirzepatide', description: 'Dual GLP-1/GIP agonist comparison', type: 'peptide' },
    { title: 'Retatrutide', path: '/peptides/retatrutide', description: 'Triple agonist for weight loss', type: 'peptide' },
    { title: 'AOD-9604', path: '/peptides/aod-9604', description: 'Fat loss peptide alternative', type: 'peptide' },
    { title: 'Cost Calculator', path: '/tools/cost-calculator', description: 'Compare semaglutide costs', type: 'tool' },
  ],
  'tirzepatide': [
    { title: 'Semaglutide', path: '/peptides/semaglutide', description: 'GLP-1 agonist comparison', type: 'peptide' },
    { title: 'Retatrutide', path: '/peptides/retatrutide', description: 'Triple agonist for weight loss', type: 'peptide' },
    { title: 'Weight Loss Protocol', path: '/protocols/weight-loss', description: 'Complete weight loss protocols', type: 'guide' },
  ],
  'cjc-1295': [
    { title: 'Ipamorelin', path: '/peptides/ipamorelin', description: 'Often combined with CJC-1295', type: 'peptide' },
    { title: 'CJC-1295 + Ipamorelin Blend', path: '/blends/cjc-1295-ipamorelin', description: 'Pre-mixed GH secretagogue', type: 'peptide' },
    { title: 'Sermorelin', path: '/peptides/sermorelin', description: 'Alternative GHRH analog', type: 'peptide' },
  ],
  'ipamorelin': [
    { title: 'CJC-1295', path: '/peptides/cjc-1295', description: 'Often combined with Ipamorelin', type: 'peptide' },
    { title: 'GHRP-2', path: '/peptides/ghrp-2', description: 'Alternative growth hormone secretagogue', type: 'peptide' },
    { title: 'GHRP-6', path: '/peptides/ghrp-6', description: 'Stronger GHRP with appetite effects', type: 'peptide' },
  ],
  'semax': [
    { title: 'Selank', path: '/peptides/selank', description: 'Anxiolytic peptide often combined with Semax', type: 'peptide' },
    { title: 'Semax + Selank Blend', path: '/blends/selank-semax', description: 'Cognitive enhancement combination', type: 'peptide' },
    { title: 'Dihexa', path: '/peptides/dihexa', description: 'Potent nootropic peptide', type: 'peptide' },
  ],
  'selank': [
    { title: 'Semax', path: '/peptides/semax', description: 'Cognitive peptide often combined with Selank', type: 'peptide' },
    { title: 'DSIP', path: '/peptides/dsip', description: 'Sleep and stress peptide', type: 'peptide' },
    { title: 'Cognitive Protocol', path: '/protocols/cognitive', description: 'Complete cognitive enhancement protocols', type: 'guide' },
  ],
  'epithalon': [
    { title: 'NAD+', path: '/peptides/nad', description: 'Cellular energy and longevity', type: 'peptide' },
    { title: 'MOTS-c', path: '/peptides/mots-c', description: 'Mitochondrial peptide', type: 'peptide' },
    { title: 'Longevity Protocol', path: '/protocols/longevity', description: 'Anti-aging peptide protocols', type: 'guide' },
  ],
  'thymosin-alpha-1': [
    { title: 'LL-37', path: '/peptides/ll-37', description: 'Antimicrobial peptide', type: 'peptide' },
    { title: 'Glutathione', path: '/peptides/glutathione', description: 'Master antioxidant', type: 'peptide' },
    { title: 'KPV', path: '/peptides/kpv', description: 'Anti-inflammatory peptide', type: 'peptide' },
  ],
  'pt-141': [
    { title: 'Melanotan II', path: '/peptides/melanotan-2', description: 'Related melanocortin peptide', type: 'peptide' },
    { title: 'Oxytocin', path: '/peptides/oxytocin', description: 'Bonding and intimacy peptide', type: 'peptide' },
    { title: 'Kisspeptin-10', path: '/peptides/kisspeptin-10', description: 'Hormone regulation peptide', type: 'peptide' },
  ],
};

// Get icon based on content type
function getTypeIcon(type: RelatedLink['type']) {
  switch (type) {
    case 'peptide': return Beaker;
    case 'tool': return Calculator;
    case 'article': return FileText;
    case 'guide': return BookOpen;
    default: return ArrowRight;
  }
}

// Related Content Section Component
export function RelatedContentSection({ 
  peptideSlug, 
  title = "Related Content" 
}: { 
  peptideSlug: string;
  title?: string;
}) {
  const links = relatedPeptideLinks[peptideSlug] || [];
  
  if (links.length === 0) return null;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 my-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-blue-600" />
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link, index) => {
          const Icon = getTypeIcon(link.type);
          return (
            <Link key={index} href={link.path}>
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      {link.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Quick Links Footer for all pages
export function QuickLinksFooter() {
  const quickLinks = [
    { title: 'Peptide Dosage Calculator', path: '/tools/dosage-calculator' },
    { title: 'Reconstitution Calculator', path: '/tools/reconstitution-calculator' },
    { title: 'Drug Interaction Checker', path: '/tools/interaction-checker' },
    { title: 'Compare Peptides', path: '/tools/comparison-tool' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Research Studies', path: '/research' },
  ];

  return (
    <div className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
        <div className="flex flex-wrap gap-4">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <span className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Breadcrumb Navigation Component
export function Breadcrumbs({ 
  items 
}: { 
  items: Array<{ label: string; path?: string }> 
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/">
            <span className="hover:text-blue-600">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>/</span>
            {item.path ? (
              <Link href={item.path}>
                <span className="hover:text-blue-600">{item.label}</span>
              </Link>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Popular Peptides Section for Homepage
export function PopularPeptides() {
  const popular = [
    { name: 'BPC-157', path: '/peptides/bpc-157', category: 'Healing' },
    { name: 'Semaglutide', path: '/peptides/semaglutide', category: 'Weight Loss' },
    { name: 'Tirzepatide', path: '/peptides/tirzepatide', category: 'Weight Loss' },
    { name: 'TB-500', path: '/peptides/tb-500', category: 'Healing' },
    { name: 'CJC-1295', path: '/peptides/cjc-1295', category: 'Growth Hormone' },
    { name: 'Ipamorelin', path: '/peptides/ipamorelin', category: 'Growth Hormone' },
    { name: 'Semax', path: '/peptides/semax', category: 'Cognitive' },
    { name: 'Epithalon', path: '/peptides/epithalon', category: 'Longevity' },
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Peptides</h3>
      <div className="flex flex-wrap gap-2">
        {popular.map((peptide, index) => (
          <Link key={index} href={peptide.path}>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">
              {peptide.name}
              <span className="ml-2 text-xs text-blue-600">({peptide.category})</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default {
  RelatedContentSection,
  QuickLinksFooter,
  Breadcrumbs,
  PopularPeptides,
  relatedPeptideLinks
};
