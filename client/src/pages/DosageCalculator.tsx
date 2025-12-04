import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import EnhancedDosageCalculator from "@/components/EnhancedDosageCalculator";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";

export default function DosageCalculator() {
  usePageTitle(
    "Advanced Dosage Calculator - Multi-Peptide Reconstitution Tool",
    {
      description: "Professional-grade peptide dosage calculator with multi-peptide support, weight-based dosing, schedule generation, and PDF export for healthcare providers."
    }
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Header */}
        <div className="mb-8">
          <Link href="/tools/practice-toolkit">
            <a className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Practice Toolkit
            </a>
          </Link>
          
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Advanced Dosage Calculator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Professional-grade multi-peptide dosage calculator with weight-based dosing, automated schedule generation, 
            and patient handout creation. Designed for healthcare providers managing complex peptide protocols.
          </p>
        </div>

        {/* Enhanced Calculator Component */}
        <EnhancedDosageCalculator />

        {/* Professional Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              💡 Pro Tips
            </h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>• Always verify calculations before patient administration</li>
              <li>• Use weight-based dosing for GLP-1 agonists and growth hormone peptides</li>
              <li>• Generate PDF handouts for patient education and compliance</li>
              <li>• Consider patient-specific factors (age, comorbidities, goals)</li>
              <li>• Start with lower doses for peptide-naive patients</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">
              ⚠️ Safety Reminders
            </h3>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>• Verify peptide purity and source before reconstitution</li>
              <li>• Use sterile technique for all reconstitution procedures</li>
              <li>• Store reconstituted peptides at proper temperature (2-8°C)</li>
              <li>• Check for particulates or discoloration before use</li>
              <li>• Document all calculations in patient medical records</li>
            </ul>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-8 bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Quick Reference Guide
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Common Reconstitution Volumes</h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>• 1.0 mL (concentrated)</li>
                <li>• 2.0 mL (standard)</li>
                <li>• 3.0 mL (dilute)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Insulin Syringe Conversions</h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>• 10 units = 0.1 mL</li>
                <li>• 25 units = 0.25 mL</li>
                <li>• 50 units = 0.5 mL</li>
                <li>• 100 units = 1.0 mL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Storage Guidelines</h4>
              <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                <li>• Lyophilized: Room temp or fridge</li>
                <li>• Reconstituted: 2-8°C (fridge)</li>
                <li>• Typical shelf life: 28-30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Professional dosage calculator for healthcare providers. For educational and clinical use only. 
            Always verify calculations and follow proper medical protocols.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Educational resource supporting DrsPeptides.com
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
