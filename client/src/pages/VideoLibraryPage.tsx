import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import VideoLibrary from '@/components/VideoLibrary';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Video, GraduationCap, Clock } from 'lucide-react';

export default function VideoLibraryPage() {
  usePageTitle('Video Library');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/resources' }, { label: 'Video Library' }]} />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
              <Video className="h-8 w-8 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Video Education Library</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Comprehensive video tutorials on peptide reconstitution, injection techniques, and clinical protocols.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <Video className="h-8 w-8 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12+</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Educational Videos</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2+ Hours</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Content</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <GraduationCap className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Categories</p>
            </div>
          </div>
          <VideoLibrary />
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
