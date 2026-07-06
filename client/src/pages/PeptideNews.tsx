import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Newspaper, Calendar, TrendingUp, AlertTriangle, Scale, FlaskConical, Building2 } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";

const newsItems = [
  {
    id: 1,
    title: "FDA PCAC Vote July 23-24: 7 Peptides Under Review for Reclassification",
    summary: "The FDA's Pharmacy Compounding Advisory Committee will vote July 23-24, 2026 on reclassifying 7 peptides from Category 2 (banned) to Category 1 (legal to compound): BPC-157, TB-500, KPV, MOTS-c, Emideltide (DSIP), Epitalon, and Semax. This follows RFK Jr.'s February 2026 announcement that 14 of 19 previously banned peptides would be reclassified.",
    source: "FDA Federal Register",
    date: "June 26, 2026",
    url: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
    category: "Regulatory",
    icon: Scale,
    color: "red"
  },
  {
    id: 2,
    title: "Peptide Therapeutics Market Hits $140.9B, Projected to Reach $294.6B by 2033",
    summary: "The global peptide therapeutics market was valued at $140.9 billion in 2025 and is projected to grow to $294.6 billion by 2033 at a CAGR of 8.7%. The U.S. market alone is expected to grow from $21.24B to $34.98B by 2035.",
    source: "Grand View Research",
    date: "June 23, 2026",
    url: "https://www.grandviewresearch.com/industry-analysis/peptide-therapeutics-market",
    category: "Industry",
    icon: TrendingUp,
    color: "green"
  },
  {
    id: 3,
    title: "48% of Physicians Report Patients Using Non-FDA-Approved Peptides",
    summary: "Nearly half (48%) of physicians in Sermo's latest Barometer reported patients disclosing use of non-FDA-approved peptides in the past 12 months, highlighting the growing mainstream adoption of peptide therapy and the need for practitioner education.",
    source: "Sermo Barometer Report",
    date: "June 4, 2026",
    url: "https://www.sermo.com/barometer-reports/the-peptide-frontier-what-500-physicians-are-seeing-before-regulators-act/",
    category: "Clinical",
    icon: Building2,
    color: "blue"
  },
  {
    id: 4,
    title: "Cyclic Peptides Are Having a Moment in Pharmaceutical Development",
    summary: "US pharmaceutical companies dominate corporate patenting on cyclic peptides, with significant growth in 2020-2026. Cyclic peptides represent a new frontier in drug development with improved stability and bioavailability over linear peptides.",
    source: "Chemical & Engineering News",
    date: "June 22, 2026",
    url: "https://cen.acs.org/business/cyclic-peptides-pharmaceutical-drugs/104/web/2026/06",
    category: "Research",
    icon: FlaskConical,
    color: "purple"
  },
  {
    id: 5,
    title: "Legal Risks for Practitioners Prescribing Peptides: What You Need to Know",
    summary: "Law firm Burr & Forman explores the evolving regulatory landscape and litigation risks associated with prescribing peptide therapies, including malpractice concerns. Essential reading for practitioners navigating compliance in the current environment.",
    source: "Burr & Forman LLP",
    date: "June 23, 2026",
    url: "https://www.burr.com/newsroom/articles/potential-legal-risks-associated-with-peptides",
    category: "Legal",
    icon: AlertTriangle,
    color: "amber"
  },
  {
    id: 6,
    title: "Eli Lilly Grants Compassionate Use Access to Retatrutide",
    summary: "Eli Lilly granted extraordinary 'compassionate use' access to retatrutide (triple agonist GLP-1/GIP/glucagon) for a 79-year-old patient, raising questions about access pathways for next-generation peptide drugs still in clinical trials.",
    source: "STAT News",
    date: "June 23, 2026",
    url: "https://www.statnews.com/2026/06/23/eli-lilly-unusual-weight-loss-drug-trial-compassionate-use-retatrutide-trump/",
    category: "Clinical",
    icon: Building2,
    color: "blue"
  },
  {
    id: 7,
    title: "Bloomberg: 'The Billion-Dollar Peptides Gold Rush'",
    summary: "Bloomberg Businessweek covers the global trade in peptides as a major market trend, highlighting the explosive growth, regulatory challenges, and the intersection of compounding pharmacies with Big Pharma in the peptide industry.",
    source: "Bloomberg Businessweek",
    date: "June 24, 2026",
    url: "https://www.youtube.com/watch?v=9gKfyOizy3s",
    category: "Industry",
    icon: TrendingUp,
    color: "green"
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  red: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" }
};

export default function PeptideNews() {
  usePageTitle("Peptide Industry News - Latest Updates");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white/80 hover:text-white mb-4">
              &larr; Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Newspaper className="w-10 h-10 text-teal-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Peptide Industry News</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Stay informed with the latest regulatory updates, market trends, clinical developments, and industry news shaping peptide therapy practice.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            <Calendar className="w-4 h-4 inline mr-1" />
            Last updated: July 6, 2026
          </p>
        </div>
      </section>

      {/* Breaking News Banner */}
      <section className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <span className="bg-white text-red-600 px-2 py-0.5 rounded text-xs font-bold uppercase">Breaking</span>
            <p className="text-sm font-medium">
              FDA PCAC Vote on 7 Peptides scheduled for July 23-24, 2026 — BPC-157, TB-500, KPV, MOTS-c, DSIP, Epitalon, and Semax under review for reclassification
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {newsItems.map((item) => {
            const colors = colorClasses[item.color] || colorClasses.blue;
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className={`hover:shadow-lg transition-shadow border-l-4 ${colors.border}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-5 h-5 ${colors.text}`} />
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                        {item.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg mt-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Source: {item.source}</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="text-xs">
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
            Get AI-powered peptide protocol recommendations based on the latest research and regulatory changes.
          </p>
          <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100">
              Try Dr. Peptide AI <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            <strong>Disclaimer:</strong> News items are curated for educational purposes. Links to external sources do not constitute endorsement. 
            Always verify regulatory information through official FDA channels. Last updated July 6, 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
