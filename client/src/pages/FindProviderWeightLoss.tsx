import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Award, CheckCircle, ArrowRight, Scale, Zap, Brain, Shield, ChevronRight, Phone, Globe, Facebook, Linkedin, Instagram } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { PROVIDERS_DATA } from "@/data/providersData";

const WEIGHT_PEPTIDES = [
  { name: "Semaglutide", desc: "GLP-1 receptor agonist. FDA-approved for chronic weight management. Up to 15% body weight reduction in clinical trials.", dose: "0.25–2.4 mg weekly SC" },
  { name: "Tirzepatide", desc: "Dual GLP-1/GIP agonist. Superior to semaglutide in head-to-head trials. Up to 22% body weight reduction.", dose: "2.5–15 mg weekly SC" },
  { name: "AOD-9604", desc: "HGH fragment targeting fat metabolism without growth effects. Particularly effective for stubborn abdominal fat.", dose: "300 mcg daily SC" },
  { name: "Formula M-51", desc: "Oral exercise mimetic combining 5-Amino-1MQ and SLU-PP-332. Activates AMPK and PPARδ pathways for metabolic reset.", dose: "1-2 caps daily oral" },
  { name: "MOTS-c", desc: "Mitochondrial-derived peptide that improves insulin sensitivity and acts as an exercise mimetic.", dose: "10 mg 2-3x weekly SC" },
];

export default function FindProviderWeightLoss() {
  usePageTitle(
    "Find a Peptide Doctor for Weight Loss Near Me | Semaglutide, Tirzepatide & More",
    {
      description: "Find a verified peptide therapy practitioner offering medical weight loss programs near you. Browse doctors prescribing Semaglutide, Tirzepatide, AOD-9604, and personalized peptide protocols for sustainable weight loss.",
      suffix: ""
    }
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What peptides are used for weight loss?", "acceptedAnswer": { "@type": "Answer", "text": "The most effective peptides for weight loss include Semaglutide (Ozempic/Wegovy), Tirzepatide (Mounjaro/Zepbound), AOD-9604, and MOTS-c. A qualified practitioner will determine the best protocol based on your labs, genetics, and health history." } },
      { "@type": "Question", "name": "How much weight can I lose with peptide therapy?", "acceptedAnswer": { "@type": "Answer", "text": "Clinical trials show 15-22% body weight reduction with GLP-1 peptides like Semaglutide and Tirzepatide over 68 weeks. Results vary based on the peptides used, diet, exercise, and individual metabolism." } },
      { "@type": "Question", "name": "Is a prescription required for weight loss peptides?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Semaglutide, Tirzepatide, and other prescription peptides require a licensed medical professional to prescribe them. All practitioners in our directory are licensed healthcare providers." } },
    ]
  };

  // Filter providers who treat weight-related conditions
  const weightProviders = PROVIDERS_DATA.filter(p => {
    const text = (p.conditions_treated + ' ' + p.specialty_category + ' ' + p.patient_description).toLowerCase();
    return text.includes('weight') || text.includes('metabolic') || text.includes('obesity') || 
           text.includes('glp') || text.includes('semaglutide') || text.includes('functional');
  }).slice(0, 12);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <Navigation />

        <div className="container mx-auto px-4 py-3 text-sm text-slate-500">
          <Link href="/">Home</Link> / <Link href="/find-a-provider" className="hover:text-teal-600">Find a Provider</Link> / <span className="text-slate-700">Weight Loss</span>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-5">
              <Scale className="h-4 w-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">Medical Weight Loss Peptides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find a Peptide Doctor for Weight Loss Near Me
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Connect with a verified practitioner who prescribes Semaglutide, Tirzepatide, and personalized peptide protocols for sustainable, medically supervised weight loss.
            </p>
            <Link href="/find-a-provider">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8">
                <MapPin className="mr-2 h-5 w-5" />
                Find a Provider Near Me
              </Button>
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Peptides for weight loss */}
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Peptides Used for Medical Weight Loss
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {WEIGHT_PEPTIDES.map((p, i) => (
              <Card key={i} className="border-teal-100 dark:border-teal-900 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-teal-700 dark:text-teal-400">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{p.desc}</p>
                  <Badge variant="secondary" className="text-xs">{p.dose}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Provider listing */}
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Practitioners Offering Weight Loss Peptide Therapy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {weightProviders.map(provider => (
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

          {/* FAQ */}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
            Frequently Asked Questions — Peptide Therapy for Weight Loss
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What is the best peptide for weight loss?", a: "Semaglutide and Tirzepatide are the most clinically proven peptides for weight loss, with FDA approval and trials showing 15-22% body weight reduction. For patients who don't respond to GLP-1 agonists, AOD-9604 and MOTS-c are excellent alternatives that target fat metabolism through different pathways." },
              { q: "How do I find a Semaglutide or Tirzepatide doctor near me?", a: "Use the Peptide Education Hub directory to find a verified practitioner in your area. All listed providers are licensed medical professionals who can prescribe GLP-1 peptides and create personalized weight loss protocols based on your labs and health history." },
              { q: "How long does it take to lose weight with peptide therapy?", a: "Most patients see measurable weight loss within 4-8 weeks of starting a peptide protocol. Optimal results with GLP-1 peptides like Semaglutide are typically seen at 16-68 weeks. Your practitioner will monitor your progress and adjust the protocol as needed." },
              { q: "Are weight loss peptides covered by insurance?", a: "FDA-approved medications like Wegovy (Semaglutide) and Zepbound (Tirzepatide) may be covered by some insurance plans for obesity treatment. Compounded versions and other peptides are typically not covered. Your practitioner can discuss options during your consultation." },
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
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Your Weight Loss Journey?</h2>
            <p className="text-teal-100 mb-6">Find a verified practitioner near you and get a personalized peptide protocol today.</p>
            <Link href="/find-a-provider">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8">
                <MapPin className="mr-2 h-5 w-5" />Find a Provider Near Me
              </Button>
            </Link>
          </div>
        </section>

        <BackToTop />
      </div>
    </>
  );
}
