import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedPeptide {
  name: string;
  description: string;
  url: string;
  reason: string;
}

interface RelatedPeptidesProps {
  peptides: RelatedPeptide[];
  title?: string;
}

export default function RelatedPeptides({ peptides, title = "Related Peptides" }: RelatedPeptidesProps) {
  if (peptides.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peptides.map((peptide) => (
          <Link key={peptide.url} href={peptide.url}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{peptide.name}</span>
                  <ArrowRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription>{peptide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-medium text-teal-600 dark:text-teal-400">Why related:</span> {peptide.reason}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Helper function to get related peptides based on category
export function getRelatedPeptides(currentPeptide: string, category: string): RelatedPeptide[] {
  const relatedMap: Record<string, RelatedPeptide[]> = {
    'bpc-157': [
      { name: "TB-500", description: "Thymosin Beta-4 for tissue repair", url: "/peptides/tb-500", reason: "Often stacked together for enhanced healing" },
      { name: "BPC-157 + TB-500", description: "Synergistic healing blend", url: "/peptides/bpc-157-tb-500", reason: "Pre-combined blend for convenience" },
      { name: "GHK-Cu", description: "Copper peptide for wound healing", url: "/peptides/ghk-cu", reason: "Complementary healing mechanism" },
    ],
    'tb-500': [
      { name: "BPC-157", description: "Body Protection Compound for injury healing", url: "/peptides/bpc-157", reason: "Synergistic healing effects" },
      { name: "Wolverine Blend", description: "Advanced recovery blend", url: "/peptides/wolverine", reason: "Contains TB-500 with other healing peptides" },
      { name: "MGF", description: "Mechano Growth Factor for muscle repair", url: "/peptides/mgf", reason: "Complementary for muscle recovery" },
    ],
    'semaglutide': [
      { name: "Tirzepatide", description: "Dual GIP/GLP-1 agonist", url: "/peptides/tirzepatide", reason: "Next-generation GLP-1 alternative" },
      { name: "Retatrutide", description: "Triple agonist for weight loss", url: "/peptides/retatrutide", reason: "Advanced metabolic optimization" },
      { name: "Semaglutide + BPC-157", description: "Weight loss with gut protection", url: "/peptides/semaglutide-bpc-157", reason: "Reduces GI side effects" },
    ],
    'tirzepatide': [
      { name: "Semaglutide", description: "GLP-1 agonist for weight management", url: "/peptides/semaglutide", reason: "Similar mechanism, different profile" },
      { name: "Retatrutide", description: "Triple agonist", url: "/peptides/retatrutide", reason: "Next evolution in GLP-1 therapy" },
      { name: "Tirzepatide + BPC-157", description: "Weight loss with gut support", url: "/peptides/tirzepatide-bpc-157", reason: "Enhanced tolerability" },
    ],
    'cjc-1295': [
      { name: "Ipamorelin", description: "Growth hormone secretagogue", url: "/peptides/ipamorelin", reason: "Commonly stacked for GH optimization" },
      { name: "CJC-1295 + Ipamorelin", description: "GH optimization blend", url: "/peptides/cjc-1295-ipamorelin-blend", reason: "Pre-combined for convenience" },
      { name: "Tesamorelin", description: "GHRH analog", url: "/peptides/tesamorelin", reason: "Alternative GHRH approach" },
    ],
    'semax': [
      { name: "Selank", description: "Anxiolytic peptide", url: "/peptides/selank", reason: "Complementary cognitive effects" },
      { name: "Selank + Semax", description: "Cognitive enhancement blend", url: "/peptides/selank-semax", reason: "Synergistic nootropic effects" },
      { name: "Dihexa", description: "Potent cognitive enhancer", url: "/peptides/dihexa", reason: "Alternative nootropic mechanism" },
    ],
  };

  return relatedMap[currentPeptide] || [];
}
