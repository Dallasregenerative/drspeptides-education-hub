import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";
import BiomarkerTracker from "@/components/BiomarkerTracker";

export default function BiomarkerTrackerPage() {
  usePageTitle(
    "Biomarker Tracker - Monitor Lab Results | DrsPeptides Education Hub",
    {
      description: "Track and visualize patient biomarkers and lab results over time. Monitor hormone levels, metabolic markers, and treatment outcomes with comprehensive charts and analytics."
    }
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <section className="container mx-auto px-4 py-12">
        <BiomarkerTracker />
      </section>
    </div>
  );
}
