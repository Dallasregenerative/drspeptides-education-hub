import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Microscope } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";

const infographics = [
  {
    title: "BPC-157 Clinical Benefits",
    description: "Comprehensive overview of BPC-157 mechanisms and clinical applications",
    image: "/drspeptides_infographic_bpc157.png",
    downloadName: "BPC-157_Clinical_Guide.png"
  },
  {
    title: "TB-500 Mechanism of Action",
    description: "Visual guide to TB-500's regenerative properties and tissue repair pathways",
    image: "/drspeptides_tb500_mechanism.png",
    downloadName: "TB500_Mechanism.png"
  },
  {
    title: "GLP-1 Weight Management",
    description: "Semaglutide and Tirzepatide comparison for metabolic health",
    image: "/drspeptides_weight_management.png",
    downloadName: "GLP1_Weight_Management.png"
  },
  {
    title: "Peptide Quality Assurance",
    description: "Understanding purity testing, COAs, and quality standards",
    image: "/drspeptides_quality_assurance.png",
    downloadName: "Quality_Assurance_Guide.png"
  },
  {
    title: "Epitalon Longevity Support",
    description: "Anti-aging mechanisms and telomere support",
    image: "/drspeptides_epitalon_longevity.png",
    downloadName: "Epitalon_Longevity.png"
  },
  {
    title: "GHK-Cu Benefits",
    description: "Copper peptide applications for skin, hair, and regeneration",
    image: "/drspeptides_ghk_cu_benefits.png",
    downloadName: "GHK-Cu_Benefits.png"
  },
  {
    title: "CJC-1295 & Ipamorelin",
    description: "Synergistic growth hormone peptides for performance",
    image: "/drspeptides_cjc_ipamorelin.png",
    downloadName: "CJC_Ipamorelin_Guide.png"
  },
  {
    title: "Peptide Category Comparison",
    description: "Quick reference chart for all major peptide categories",
    image: "/drspeptides_comparison_chart.png",
    downloadName: "Peptide_Comparison_Chart.png"
  },
  {
    title: "Storage & Handling Guide",
    description: "Best practices for maintaining peptide potency",
    image: "/drspeptides_storage_guide.png",
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
                PeptideProtocols.ai is a comprehensive platform featuring 87 evidence-based protocols, 64 therapeutic peptides across 14 categories, and Dr. Peptide AI—an expert system that helps healthcare providers understand peptide therapy, interpret lab results, and create personalized treatment protocols.
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
            Dr. Peptide AI generates personalized protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
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
