import { ArrowLeft } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import PatientHandoutGenerator from "@/components/PatientHandoutGenerator";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";

export default function PatientHandoutsPage() {
  usePageTitle(
    "Patient Handout Generator - Customizable Education Materials",
    {
      description: "Generate professional patient education handouts for peptide therapy with customizable templates, practice branding, and print-ready PDF export."
    }
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Patient Handouts' }]} />
        
        <div className="mb-8">
<h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Patient Handout Generator
          </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Patient Handouts Page - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Create professional patient education materials in seconds. Choose from evidence-based templates, 
            customize with your practice branding, and generate print-ready PDFs for patient education and compliance.
          </p>
        </div>

        <PatientHandoutGenerator />

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Benefits of Patient Education Handouts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-2">Better Compliance</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Patients with written instructions are 60% more likely to follow protocols correctly.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-semibold mb-2">Save Time</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Reduce repetitive explanations. Generate handouts in under 2 minutes.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-semibold mb-2">Professional Image</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Branded materials enhance practice credibility and patient trust.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Demonstrates informed consent and patient education for legal protection.
              </p>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
