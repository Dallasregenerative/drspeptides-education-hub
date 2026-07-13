import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Award, ChevronRight, Star } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { PROVIDERS_DATA } from "@/data/providersData";

const ANTIAGING_PEPTIDES = [
  { name: "Epithalon (Epitalon)", desc: "Telomerase activator that lengthens telomeres, regulates melatonin, and has demonstrated lifespan extension in multiple studies.", dose: "5-10 mg daily SC x10 days" },
  { name: "GHK-Cu", desc: "Copper peptide that activates over 4,000 genes involved in skin regeneration, wound healing, and anti-inflammatory pathways.", dose: "200 mcg SC 2-3x weekly" },
  { name: "MOTS-c", desc: "Mitochondrial-derived peptide that improves metabolic health, insulin sensitivity, and acts as an exercise mimetic.", dose: "10 mg SC 2-3x weekly" },
  { name: "Humanin", desc: "Cytoprotective peptide that protects against neurodegeneration, improves insulin sensitivity, and reduces cardiovascular risk.", dose: "2-4 mg SC 2-3x weekly" },
  { name: "NAD+ / NMN", desc: "Essential coenzyme that declines with age. IV or oral supplementation restores cellular energy, DNA repair, and sirtuin activation.", dose: "500mg-1g oral or IV" },
  { name: "BPC-157", desc: "Systemic healing peptide with powerful anti-inflammatory and regenerative properties. Protects organs and accelerates tissue repair.", dose: "250-500 mcg SC or oral daily" },
];

export default function FindProviderAntiAging() {
  usePageTitle(
    "Find an Anti-Aging Peptide Doctor Near Me | Longevity & Regenerative Medicine",
    {
      description: "Find a verified anti-aging and longevity peptide practitioner near you. Browse doctors offering Epithalon, GHK-Cu, NAD+, BPC-157, and personalized longevity protocols backed by clinical evidence.",
      suffix: ""
    }
  );

  const antiAgingProviders = PROVIDERS_DATA.filter(p => {
    const text = (p.conditions_treated + ' ' + p.specialty_category + ' ' + p.patient_description).toLowerCase();
    return text.includes('anti-aging') || text.includes('longevity') || text.includes('regenerative') ||
           text.includes('aging') || text.includes('functional') || text.includes('integrative');
  }).slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-3 text-sm text-slate-500">
        <Link href="/">Home</Link> / <Link href="/find-a-provider" className="hover:text-teal-600">Find a Provider</Link> / <span className="text-slate-700">Anti-Aging & Longevity</span>
      </div>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-5">
            <Star className="h-4 w-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Anti-Aging & Longevity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find an Anti-Aging & Longevity Peptide Doctor Near Me
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Connect with a verified practitioner offering science-backed longevity protocols — from telomere support and NAD+ restoration to cellular regeneration and inflammation reduction.
          </p>
          <Link href="/find-a-provider">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8">
              <MapPin className="mr-2 h-5 w-5" />Find a Provider Near Me
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Top Anti-Aging & Longevity Peptides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {ANTIAGING_PEPTIDES.map((p, i) => (
            <Card key={i} className="border-teal-100 dark:border-teal-900 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2"><CardTitle className="text-base text-teal-700 dark:text-teal-400">{p.name}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{p.desc}</p>
                <Badge variant="secondary" className="text-xs">{p.dose}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Anti-Aging & Longevity Practitioners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {antiAgingProviders.map(provider => (
            <Link key={provider.slug} href={provider.url_path}>
              <Card className="h-full hover:shadow-xl transition-all cursor-pointer border-slate-200 hover:border-teal-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base group-hover:text-teal-600 transition-colors leading-tight">{provider.name}</CardTitle>
                      {provider.practice && provider.practice !== provider.name && (
                        <p className="text-xs text-slate-500 mt-0.5">{provider.practice}</p>
                      )}
                    </div>
                    <Badge className="bg-teal-100 text-teal-800 border border-teal-200 text-xs shrink-0">
                      <Award className="h-3 w-3 mr-1" />Verified
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {(provider.city !== "Not found" || provider.state !== "Not found") && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5 text-teal-500" />
                      {[provider.city !== "Not found" ? provider.city : null, provider.state !== "Not found" ? provider.state : null].filter(Boolean).join(", ")}
                    </div>
                  )}
                  <Badge variant="secondary" className="text-xs">{provider.specialty_category}</Badge>
                  <div className="flex items-center text-teal-600 text-xs font-medium">
                    View Profile <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">FAQs — Anti-Aging Peptide Therapy</h2>
        <div className="space-y-4 mb-10">
          {[
            { q: "What is the best peptide for anti-aging?", a: "The most evidence-backed anti-aging peptides include Epithalon (telomere lengthening), GHK-Cu (skin and tissue regeneration), MOTS-c (metabolic health), and NAD+ (cellular energy and DNA repair). A longevity practitioner will design a protocol based on your biomarkers and goals." },
            { q: "At what age should I start anti-aging peptide therapy?", a: "Many practitioners recommend starting longevity protocols in your 30s or 40s as a preventive strategy, though patients in their 50s, 60s, and beyond see significant benefits. The earlier you start, the more you can preserve and optimize." },
            { q: "How is anti-aging peptide therapy different from regular skincare?", a: "Unlike topical skincare, anti-aging peptides work systemically — addressing the root biological mechanisms of aging at the cellular level. They target telomere length, mitochondrial function, inflammation, and hormonal decline rather than just surface appearance." },
            { q: "Can BPC-157 help with anti-aging?", a: "Yes. BPC-157 has powerful systemic anti-inflammatory and regenerative properties that support anti-aging goals. It protects organs, accelerates tissue repair, and reduces chronic inflammation — a key driver of accelerated aging." },
          ].map((faq, i) => (
            <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-700 to-teal-600 py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Start Your Longevity Protocol Today</h2>
          <p className="text-teal-100 mb-6">Find a verified anti-aging practitioner near you.</p>
          <Link href="/find-a-provider">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8">
              <MapPin className="mr-2 h-5 w-5" />Find a Provider Near Me
            </Button>
          </Link>
        </div>
      </section>
      <BackToTop />
    </div>
  );
}
