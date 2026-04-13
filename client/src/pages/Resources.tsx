import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Microscope, Building2, Megaphone, Dna, Star, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";

const infographics = [
  {
    title: "BPC-157 Clinical Benefits",
    description: "Comprehensive overview of BPC-157 mechanisms and clinical applications",
    image: "/drspeptides_infographic_bpc157.webp",
    downloadName: "BPC-157_Clinical_Guide.png"
  },
  {
    title: "TB-500 Mechanism of Action",
    description: "Visual guide to TB-500's regenerative properties and tissue repair pathways",
    image: "/drspeptides_tb500_mechanism.webp",
    downloadName: "TB500_Mechanism.png"
  },
  {
    title: "GLP-1 Weight Management",
    description: "Semaglutide and Tirzepatide comparison for metabolic health",
    image: "/drspeptides_weight_management.webp",
    downloadName: "GLP1_Weight_Management.png"
  },
  {
    title: "Peptide Quality Assurance",
    description: "Understanding purity testing, COAs, and quality standards",
    image: "/drspeptides_quality_assurance.webp",
    downloadName: "Quality_Assurance_Guide.png"
  },
  {
    title: "Epitalon Longevity Support",
    description: "Anti-aging mechanisms and telomere support",
    image: "/drspeptides_epitalon_longevity.webp",
    downloadName: "Epitalon_Longevity.png"
  },
  {
    title: "GHK-Cu Benefits",
    description: "Copper peptide applications for skin, hair, and regeneration",
    image: "/drspeptides_ghk_cu_benefits.webp",
    downloadName: "GHK-Cu_Benefits.png"
  },
  {
    title: "CJC-1295 & Ipamorelin",
    description: "Synergistic growth hormone peptides for performance",
    image: "/drspeptides_cjc_ipamorelin.webp",
    downloadName: "CJC_Ipamorelin_Guide.png"
  },
  {
    title: "Peptide Category Comparison",
    description: "Quick reference chart for all major peptide categories",
    image: "/drspeptides_comparison_chart.webp",
    downloadName: "Peptide_Comparison_Chart.png"
  },
  {
    title: "Storage & Handling Guide",
    description: "Best practices for maintaining peptide potency",
    image: "/drspeptides_storage_guide.webp",
    downloadName: "Storage_Handling_Guide.png"
  }
];

export default function Resources() {
  usePageTitle("Resources - Peptide Therapy Guides & Tools");
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Clinical Resources</h2>
          <p className="text-xl text-teal-50 max-w-2xl">
            Downloadable infographics, visual guides, and reference materials for healthcare providers.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographics.map((resource, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={resource.image} download={resource.downloadName}>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* External Resources */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Recommended Resources</h3>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-teal-500 hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">PeptideProtocols.ai</CardTitle>
                  <CardDescription className="text-base">
                    Clinical-Grade Peptide Therapy Protocols & AI-Powered Expert Guidance
                  </CardDescription>
                </div>
                <Microscope className="h-12 w-12 text-teal-600" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                PeptideProtocols.ai is a comprehensive platform featuring evidence-based protocols, therapeutic peptides across multiple categories, and Dr. Peptide AI — the world's first self-evolving clinical AI agent for peptide therapy. It integrates genetic analysis, lab data, predictive analytics, PubMed-cited evidence, and collective practitioner intelligence to generate precision protocols.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">87</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Clinical Protocols</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">64</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Therapeutic Peptides</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">AI Expert Support</div>
                </div>
              </div>
              <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                  Access PeptideProtocols.ai
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practice Partners & Resources */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Practice Partners & Resources</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Vetted partners and service providers to help peptide practitioners streamline operations, grow their practice, and deliver precision medicine.
          </p>
        </div>
        <div className="max-w-5xl mx-auto space-y-8">

          {/* BoomRx — Pharmacy Partner (TOP) */}
          <Card className="border-2 border-emerald-500 hover:shadow-2xl transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <Star className="w-3 h-3 mr-1 fill-emerald-500 text-emerald-500" />
                Recommended Pharmacy Partner
              </span>
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-1">BoomRx</CardTitle>
                  <CardDescription className="text-base">
                    Prescription Fulfillment Platform &mdash; "The Only Pharmacy Portal Your Medical Practice Will Ever Need"
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                BoomRx streamlines prescription fulfillment for medical clinics, med spas, and telehealth companies through a single pharmacy portal. Access hundreds of 503A formulary products — including peptides, TRT, BHRT, weight loss, and dermatology — with 50-state shipping, competitive pricing (20% less on average), and cold-chain logistics at a flat $30 fee.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Full 503A formulary from one dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">50-state shipping &amp; $30 flat cold chain</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Best industry pricing — 20% less on avg.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">EMR &amp; API integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">90-, 180-, &amp; 365-day BUDs available</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">New peptide skincare line (GHK-Cu)</span>
                </div>
              </div>
              <a href="https://boomrx.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
                  Visit BoomRx
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Help My Medical Practice — Practice Growth Partner */}
          <Card className="border-2 border-blue-400 hover:shadow-2xl transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">
                <Megaphone className="w-3 h-3 mr-1" />
                Practice Growth Partner
              </span>
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Megaphone className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-1">Help My Medical Practice</CardTitle>
                  <CardDescription className="text-base">
                    Medical Marketing &amp; Practice Development &mdash; "Marketing That Heals Your Practice"
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Medical marketing and practice development company specializing in helping regenerative medicine, anti-aging, functional medicine, and integrative medicine practices grow. From SEO and patient acquisition to AI-driven chatbots that reduce no-shows, Help My Medical Practice offers a full suite of services designed specifically for healthcare providers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Medical practice SEO &amp; Google visibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Patient acquisition &amp; lead generation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">AI-driven chatbot implementation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Revenue cycle management</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Social media &amp; reputation management</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Free Practice Performance Assessment&trade;</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Contact: Quintin L. Gunn Sr., CSO &bull; info@helpmymdpractice.com &bull; (407) 702-4408
              </p>
              <a href="https://www.helpmymdpractice.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Visit Help My Medical Practice
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* MaxGen Labs — Genetics Partner */}
          <Card className="border-2 border-purple-400 hover:shadow-2xl transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300">
                <Dna className="w-3 h-3 mr-1" />
                Genetics Partner
              </span>
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <Dna className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-1">MaxGen Labs</CardTitle>
                  <CardDescription className="text-base">
                    Genetic Testing Provider &mdash; Created by Practicing Physicians
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                MaxGen Labs provides saliva-based genetic testing created by practicing physicians, delivering actionable genomic insights that directly inform peptide therapy decisions. Their reports cover MTHFR, COMT, and MAO gene variants — critical data for understanding peptide metabolism and optimizing treatment protocols. Pairs directly with Dr. Peptide's Genetic Analysis pillar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <div className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-1">MaxFunction</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Most popular test — detoxification to brain health, drug metabolism, and more</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <div className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-1">The Works!</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Most comprehensive — combines MaxFunction, MaxFood, and MaxFitness</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <div className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-1">MaxFood</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Immunological food sensitivities via finger-prick blood test</div>
                </div>
              </div>
              <a href="https://maxgenlabs.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                  Visit MaxGen Labs
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Usage Guidelines</h3>
          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These educational materials are provided free of charge for healthcare providers to use in their practice. You may:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-6">
              <li>Download and print for patient education</li>
              <li>Share with colleagues and staff</li>
              <li>Display in your clinic or office</li>
              <li>Include in patient education packets</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Please note: These materials are for educational purposes only and should not replace professional medical advice. Always consult with qualified healthcare professionals before implementing peptide therapy protocols.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Need Medical-Grade Peptides?</h3>
          <p className="text-xl mb-8 text-teal-50">
            Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build precision protocols — every recommendation PubMed-cited.
          </p>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
