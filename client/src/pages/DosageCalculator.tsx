import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import PrintButton from "@/components/PrintButton";
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
          <Link href="/tools">
            <a className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </a>
          </Link>
          
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Advanced Dosage Calculator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Professional-grade multi-peptide dosage calculator with weight-based dosing, automated schedule generation, 
            and patient handout creation. Select a peptide preset or enter custom values to get started.
          </p>
          <div className="mt-4">
            <PrintButton title="Dosage Calculator Results" subtitle="Peptide Education Hub" />
          </div>
        </div>

        {/* Enhanced Calculator Component */}
        <EnhancedDosageCalculator />

        {/* Related Tools */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link href="/tools/reconstitution-calculator">
            <a className="block p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Reconstitution Calculator</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Calculate water volumes and injection amounts with visual syringe guide</p>
            </a>
          </Link>
          <Link href="/tools/enhanced-dosing-calculator">
            <a className="block p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Weight-Based Dosing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Quick weight-based dosing with cycle cost estimation</p>
            </a>
          </Link>
          <Link href="/tools/cost-calculator">
            <a className="block p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Cost Calculator</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Compare peptide therapy costs across different protocols</p>
            </a>
          </Link>
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

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Educational Tool Only:</strong> This calculator is for educational purposes only. Always verify calculations and follow proper medical protocols. 
            Consult manufacturer guidelines for specific peptides. Educational resource supporting DrsPeptides.com
          </p>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}
