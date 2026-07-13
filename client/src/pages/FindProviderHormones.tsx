import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Award, ChevronRight, Activity, Zap } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { PROVIDERS_DATA } from "@/data/providersData";

const HORMONE_PEPTIDES = [
  { name: "CJC-1295 / Ipamorelin", desc: "Gold standard GH optimization stack. Stimulates pulsatile GH release, improving testosterone levels, body composition, and sleep quality.", dose: "100-300 mcg nightly SC" },
  { name: "Sermorelin", desc: "GHRH analog that restores natural GH pulsatility. Ideal for age-related GH decline (somatopause).", dose: "200-500 mcg nightly SC" },
  { name: "Kisspeptin-10", desc: "Directly stimulates LH and FSH release, boosting natural testosterone production in men and women.", dose: "0.3-1 mcg/kg SC" },
  { name: "PT-141 (Bremelanotide)", desc: "FDA-approved for hypoactive sexual desire disorder. Works centrally to enhance libido in both men and women.", dose: "1.75 mg SC as needed" },
  { name: "DHEA / Pregnenolone", desc: "Precursor hormones that support testosterone, estrogen, and cortisol balance. Often combined with peptide protocols.", dose: "25-100 mg oral daily" },
];

export default function FindProviderHormones() {
  usePageTitle(
    "Find a Hormone Optimization & Testosterone Peptide Doctor Near Me",
    {
      description: "Find a verified practitioner offering peptide-based hormone optimization, testosterone support, and anti-aging protocols near you. Browse doctors prescribing CJC-1295, Sermorelin, Kisspeptin, and personalized hormone protocols.",
      suffix: ""
    }
  );

  const hormoneProviders = PROVIDERS_DATA.filter(p => {
    const text = (p.conditions_treated + ' ' + p.specialty_category + ' ' + p.patient_description).toLowerCase();
    return text.includes('hormone') || text.includes('testosterone') || text.includes('hrt') ||
           text.includes('anti-aging') || text.includes('longevity') || text.includes('functional') ||
           text.includes('integrative') || text.includes('regenerative');
  }).slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-3 text-sm text-slate-500">
        <Link href="/">Home</Link> / <Link href="/find-a-provider" className="hover:text-teal-600">Find a Provider</Link> / <span className="text-slate-700">Hormone Optimization</span>
      </div>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-5">
            <Activity className="h-4 w-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Hormone Optimization</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find a Hormone Optimization & Testosterone Peptide Doctor Near Me
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Connect with a verified practitioner who uses peptides and personalized protocols to optimize your hormones, boost testosterone, and restore vitality.
          </p>
          <Link href="/find-a-provider">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8">
              <MapPin className="mr-2 h-5 w-5" />Find a Provider Near Me
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Peptides for Hormone Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {HORMONE_PEPTIDES.map((p, i) => (
            <Card key={i} className="border-teal-100 dark:border-teal-900 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2"><CardTitle className="text-base text-teal-700 dark:text-teal-400">{p.name}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{p.desc}</p>
                <Badge variant="secondary" className="text-xs">{p.dose}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Hormone Optimization Practitioners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {hormoneProviders.map(provider => (
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

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">FAQs — Hormone Optimization with Peptides</h2>
        <div className="space-y-4 mb-10">
          {[
            { q: "Can peptides increase testosterone naturally?", a: "Yes. Peptides like CJC-1295/Ipamorelin, Sermorelin, and Kisspeptin-10 stimulate your body's own hormone production pathways rather than replacing hormones externally. This approach preserves natural pulsatility and avoids the suppression associated with exogenous testosterone." },
            { q: "What are the signs of low testosterone that peptides can help?", a: "Common signs include fatigue, low libido, difficulty building muscle, increased body fat (especially abdominal), poor sleep, brain fog, and mood changes. A practitioner will confirm low testosterone through a lab panel before recommending a peptide protocol." },
            { q: "How do peptides compare to TRT (testosterone replacement therapy)?", a: "Peptides that stimulate natural GH and testosterone production (like CJC-1295/Ipamorelin) preserve testicular function and fertility, unlike exogenous testosterone which suppresses natural production. Many practitioners use peptides as a first-line approach or in combination with TRT." },
            { q: "How long does it take for peptides to improve testosterone levels?", a: "Most patients see improvements in energy, sleep, and body composition within 4-8 weeks. Lab values typically improve within 90 days of consistent protocol adherence." },
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Optimize Your Hormones?</h2>
          <p className="text-teal-100 mb-6">Find a verified practitioner near you and get a personalized hormone optimization protocol.</p>
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
