import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import PracticeAssessmentQuiz from '@/components/PracticeAssessmentQuiz';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ClipboardCheck, Target, Lightbulb } from 'lucide-react';

export default function PracticeAssessment() {
  usePageTitle('Practice Assessment Quiz');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Practice Assessment' }]} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
              <ClipboardCheck className="h-8 w-8 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Practice Assessment Quiz
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover which peptides and protocols are best suited for your practice focus and patient population.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <Target className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="font-semibold mb-2">Personalized Results</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Get tailored peptide recommendations based on your practice specialty.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <ClipboardCheck className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-semibold mb-2">5 Quick Questions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Complete the assessment in under 2 minutes.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <Lightbulb className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Receive protocol suggestions from our clinical database.</p>
            </div>
          </div>

          <PracticeAssessmentQuiz />
        </div>
      </main>
      
      <BackToTop />
    </div>
  );
}
