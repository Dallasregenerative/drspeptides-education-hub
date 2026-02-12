import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import ProgressTracker from "@/components/ProgressTracker";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";

export default function ProgressTrackerPage() {
  usePageTitle(
    "Progress Tracker - Patient Progress Monitoring & Analytics",
    {
      description: "Track patient progress with comprehensive analytics, visual charts, and detailed logging for weight, energy, mood, sleep, and side effects during peptide therapy."
    }
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb items={[
          { label: 'Tools', href: '/tools' },
          { label: 'Progress Tracker' }
        ]} />
        
        <div className="mb-8">
<h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Progress Tracker
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Monitor patient progress with professional-grade analytics and visualization tools. Track weight, body composition, 
            energy levels, mood, sleep quality, and side effects throughout peptide therapy protocols.
          </p>
        </div>

        <ProgressTracker />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              📊 Data-Driven Decisions
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Visual analytics help identify trends, optimize protocols, and demonstrate treatment efficacy to patients. 
              Export data for presentations, insurance documentation, or research purposes.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
              ✅ Patient Engagement
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200">
              Patients who track progress are 3x more likely to complete protocols and achieve goals. 
              Visual progress reinforces commitment and motivation throughout treatment.
            </p>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
