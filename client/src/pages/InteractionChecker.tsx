import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import AdvancedInteractionChecker from "@/components/AdvancedInteractionChecker";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";

export default function InteractionChecker() {
  usePageTitle({
    title: "Advanced Interaction Checker - Peptide Drug Interaction Database",
    description: "Comprehensive peptide interaction checker with drug-drug interactions, contraindications, and clinical decision support for healthcare providers."
  });
  
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
            Advanced Interaction Checker
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Clinical-grade interaction database for peptide therapy. Check peptide-peptide interactions, 
            peptide-drug interactions, contraindications, and identify synergistic combinations for optimal patient outcomes.
          </p>
        </div>

        {/* Advanced Interaction Checker Component */}
        <AdvancedInteractionChecker />

        {/* Clinical Guidelines */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
              🚫 Major Interactions
            </h3>
            <p className="text-sm text-red-800 dark:text-red-200 mb-3">
              Require immediate clinical intervention or contraindicate use
            </p>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>• Semaglutide + Insulin (hypoglycemia risk)</li>
              <li>• GH peptides + Active cancer</li>
              <li>• GLP-1s + MTC/MEN 2 history</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">
              ⚠️ Moderate Interactions
            </h3>
            <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
              Require monitoring and possible dose adjustments
            </p>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>• BPC-157 + NSAIDs (reduced effectiveness)</li>
              <li>• CJC-1295 + Insulin (insulin resistance)</li>
              <li>• TB-500 + Anticoagulants (bleeding risk)</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
              ✅ Synergistic Combinations
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200 mb-3">
              Commonly stacked for enhanced therapeutic effects
            </p>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>• BPC-157 + TB-500 (tissue repair)</li>
              <li>• CJC-1295 + Ipamorelin (GH optimization)</li>
              <li>• Semax + Selank (cognitive enhancement)</li>
            </ul>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-8 bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Clinical Best Practices
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Before Prescribing</h4>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li>✓ Complete medication reconciliation</li>
                <li>✓ Review medical history for contraindications</li>
                <li>✓ Check for drug-drug interactions</li>
                <li>✓ Assess patient-specific risk factors</li>
                <li>✓ Document interaction screening in EMR</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Ongoing Monitoring</h4>
              <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <li>✓ Monitor for adverse effects at each visit</li>
                <li>✓ Adjust doses based on patient response</li>
                <li>✓ Re-screen when adding new medications</li>
                <li>✓ Educate patients on warning signs</li>
                <li>✓ Maintain detailed clinical documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-4">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>Clinical Decision Support Tool:</strong> This interaction checker is designed to support, not replace, 
            clinical judgment. Always consider individual patient factors, consult primary literature, and follow 
            institutional protocols. Report any adverse events to appropriate regulatory authorities.
          </p>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Professional interaction checker for healthcare providers. For educational and clinical use only.
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
