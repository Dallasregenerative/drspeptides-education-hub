import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Award, Phone, Globe, Facebook, Linkedin, Instagram, ChevronRight, CheckCircle, Star, Calendar } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function CityPageRockwallTX() {
  usePageTitle(
    "Peptide Therapy in Rockwall, TX | Find a Practitioner | Peptide Education Hub",
    {
      description: "Find verified peptide therapy practitioners in Rockwall, Texas. Browse 2 local providers offering personalized peptide protocols for weight loss, hormone optimization, anti-aging, and more.",
      suffix: ""
    }
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Peptide Therapy Practitioners in Rockwall, Texas",
    "description": "Verified peptide therapy practitioners in Rockwall, Texas offering personalized protocols",
    "numberOfItems": 2,
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Dr. Miklos Major II DNP NP-BC","url":"https://pepedhub.com/find-a-provider/tx/rockwall/dr-miklos-major-ii-dnp-np-bc"},{"@type":"ListItem","position":2,"name":"Dr. Miklos Major II","url":"https://pepedhub.com/find-a-provider/tx/rockwall/dr-miklos-major-ii"}
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <Navigation />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-3 text-sm text-slate-500">
          <Link href="/">Home</Link> / <Link href="/find-a-provider" className="hover:text-teal-600">Find a Provider</Link> / <span className="text-slate-700">Rockwall, TX</span>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-5">
              <MapPin className="h-4 w-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">Rockwall, Texas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Peptide Therapy in Rockwall, Texas
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Find 2 verified peptide therapy practitioners in Rockwall. Each provider uses AI-powered, personalized protocols backed by clinical evidence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center"><div className="text-3xl font-bold text-teal-400">2</div><div className="text-slate-400 text-sm">Local Practitioners</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-teal-400">AI</div><div className="text-slate-400 text-sm">Personalized Protocols</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-teal-400">2,800+</div><div className="text-slate-400 text-sm">Studies Analyzed</div></div>
            </div>
          </div>
        </section>

        {/* What is Peptide Therapy — SEO content block */}
        <section className="container mx-auto px-4 py-10 max-w-4xl">
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 rounded-2xl p-6 mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              What is Peptide Therapy in Rockwall, Texas?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Peptide therapy in Rockwall involves working with a qualified medical practitioner to design a personalized protocol using short-chain amino acid sequences that signal your body to perform specific healing and optimization functions. Local Rockwall practitioners use advanced lab analysis and AI-powered tools to create protocols tailored to your unique biology.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Common goals for patients seeking peptide therapy in Rockwall, Texas include weight loss, hormone optimization, anti-aging, injury recovery, improved sleep, and cognitive enhancement. All practitioners listed here are verified contributing members of the Peptide Education Hub network.
            </p>
          </div>

          {/* Provider Grid */}
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Peptide Therapy Practitioners in Rockwall, TX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            
              <Link key="dr-miklos-major-ii-dnp-np-bc" href="/find-a-provider/tx/rockwall/dr-miklos-major-ii-dnp-np-bc">
                <Card className="h-full hover:shadow-xl transition-all duration-200 cursor-pointer border-slate-200 hover:border-teal-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors leading-tight">
                          Dr. Miklos Major II DNP NP-BC
                        </CardTitle>
                        <p className="text-sm text-slate-500 mt-0.5">Apex Integrative Medicine, PLLC</p>
                      </div>
                      <Badge className="bg-teal-100 text-teal-800 border border-teal-200 text-xs shrink-0">
                        <Award className="h-3 w-3 mr-1" />Contributing
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2.5">
                    <Badge variant="secondary" className="text-xs">Functional Medicine</Badge>
                    <div className="flex flex-wrap gap-1.5"><Badge key="0" variant="secondary" className="text-xs">Fatigue</Badge> <Badge key="1" variant="secondary" className="text-xs">Mood swings</Badge> <Badge key="2" variant="secondary" className="text-xs">Low libido</Badge></div>
                    <div className="flex flex-col gap-1.5 pt-1">
                      <a href="tel:(469) 224-9969" className="text-teal-600 text-sm hover:underline flex items-center gap-1"><Phone className="h-3.5 w-3.5" />(469) 224-9969</a>
                      <a href="https://apex-integrativemed.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 text-sm hover:underline flex items-center gap-1"><Globe className="h-3.5 w-3.5" />Visit Website</a>
                    </div>
                    <div className="flex gap-2 pt-1"><a href="https://www.linkedin.com/in/miklos-major-ii-sc-d-dnp-np-bc-6627283a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs flex items-center gap-1"><Linkedin className="h-3 w-3" />LinkedIn</a></div>
                    <div className="flex items-center text-teal-600 text-xs font-medium pt-1">
                      View Full Profile <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link key="dr-miklos-major-ii" href="/find-a-provider/tx/rockwall/dr-miklos-major-ii">
                <Card className="h-full hover:shadow-xl transition-all duration-200 cursor-pointer border-slate-200 hover:border-teal-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors leading-tight">
                          Dr. Miklos Major II
                        </CardTitle>
                        <p className="text-sm text-slate-500 mt-0.5">Apex Integrative Medicine, PLLC</p>
                      </div>
                      <Badge className="bg-teal-100 text-teal-800 border border-teal-200 text-xs shrink-0">
                        <Award className="h-3 w-3 mr-1" />Contributing
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2.5">
                    <Badge variant="secondary" className="text-xs">Functional Medicine</Badge>
                    <div className="flex flex-wrap gap-1.5"><Badge key="0" variant="secondary" className="text-xs">Fatigue</Badge> <Badge key="1" variant="secondary" className="text-xs">Hormonal imbalances</Badge> <Badge key="2" variant="secondary" className="text-xs">Weight management struggles</Badge></div>
                    <div className="flex flex-col gap-1.5 pt-1">
                      <a href="tel:(469) 224-9969" className="text-teal-600 text-sm hover:underline flex items-center gap-1"><Phone className="h-3.5 w-3.5" />(469) 224-9969</a>
                      <a href="https://apex-integrativemed.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 text-sm hover:underline flex items-center gap-1"><Globe className="h-3.5 w-3.5" />Visit Website</a>
                    </div>
                    <div className="flex gap-2 pt-1"><a href="https://www.linkedin.com/in/miklos-major-ii-311b53149" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs flex items-center gap-1"><Linkedin className="h-3 w-3" />LinkedIn</a></div>
                    <div className="flex items-center text-teal-600 text-xs font-medium pt-1">
                      View Full Profile <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
          </div>

          {/* Conditions treated in city */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Conditions Treated by Peptide Practitioners in Rockwall
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Low Testosterone & Hormone Imbalance",
                "Weight Loss & Metabolic Syndrome",
                "Chronic Fatigue & Low Energy",
                "Joint Pain & Injury Recovery",
                "Anti-Aging & Longevity",
                "Poor Sleep & Insomnia",
                "Brain Fog & Cognitive Decline",
                "Inflammation & Autoimmune",
                "Sexual Dysfunction",
              ].map((condition, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="h-4 w-4 text-teal-500 shrink-0" />
                  {condition}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
              Frequently Asked Questions — Peptide Therapy in Rockwall, Texas
            </h2>
            <div className="space-y-4">
              {[
                { q: `How do I find a peptide therapy doctor in Rockwall, Texas?`, a: `The Peptide Education Hub directory lists 2 verified peptide therapy practitioners in Rockwall. Each provider is a contributing member of our network, meaning they use AI-powered, evidence-based protocols personalized to each patient's labs and genetics.` },
                { q: `What does peptide therapy cost in Rockwall?`, a: `Peptide therapy costs in Rockwall, Texas typically range from $200–$600 per month depending on the specific peptides prescribed and the complexity of your protocol. Many patients find the investment worthwhile given the broad health benefits. Contact a local practitioner for a personalized quote.` },
                { q: `Is peptide therapy legal in Texas?`, a: `Yes. Peptide therapy prescribed by a licensed medical professional is legal in Texas. All practitioners listed here are licensed healthcare providers who prescribe peptides within the scope of their practice. Peptides must be obtained from FDA-registered compounding pharmacies.` },
                { q: `What peptides are most popular in Rockwall?`, a: `The most commonly prescribed peptides by practitioners in Rockwall include BPC-157 (tissue repair), Semaglutide and Tirzepatide (weight loss), CJC-1295/Ipamorelin (growth hormone optimization), and GHK-Cu (anti-aging). Your practitioner will recommend specific peptides based on your lab results and health goals.` },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-teal-700 to-teal-600 py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Peptide Therapy in Rockwall?</h2>
            <p className="text-teal-100 mb-6">Browse our verified practitioners and book a consultation today.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/find-a-provider">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8">
                  <MapPin className="mr-2 h-5 w-5" />Browse All Practitioners
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <BackToTop />
      </div>
    </>
  );
}
