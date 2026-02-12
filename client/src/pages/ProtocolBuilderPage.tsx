import { ArrowLeft } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import ProtocolBuilderTool from "@/components/ProtocolBuilderTool";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";

export default function ProtocolBuilderPage() {
  usePageTitle(
    "Protocol Builder - Evidence-Based Peptide Treatment Protocols",
    {
      description: "Build comprehensive peptide therapy protocols with evidence-based templates for weight loss, injury recovery, longevity, cognitive enhancement, and performance optimization."
    }
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb items={[
          { label: 'Tools', href: '/tools' },
          { label: 'Protocol Builder' }
        ]} />
        
        <div className="mb-8">
          <Link href="/tools">
            <a className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </a>
          </Link>
          
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Protocol Builder
          </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Protocol Builder Page - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Create comprehensive, evidence-based peptide therapy protocols using our professionally designed templates. 
            Each protocol includes detailed regimens, monitoring parameters, lab work requirements, and patient-specific customization.
          </p>
        </div>

        <ProtocolBuilderTool />

        <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Why Use Protocol Builder?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">⏱️ Save Time</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Pre-built templates save 30+ minutes per patient. Focus on patient care, not paperwork.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">📋 Evidence-Based</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                All protocols based on current research and clinical best practices. References included.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🎯 Customizable</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Easily modify protocols for individual patient needs, goals, and medical history.
              </p>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
