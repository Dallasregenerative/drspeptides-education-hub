import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Download, FileText, ClipboardList, Users, BookOpen, Shield, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const resources = [
  { id: 1, title: "Peptide Protocol Template", description: "Customizable protocol template for patient documentation.", category: "Templates", icon: ClipboardList, format: "PDF", size: "245 KB" },
  { id: 2, title: "Patient Consent Form", description: "Comprehensive consent form for peptide therapy.", category: "Forms", icon: FileText, format: "PDF", size: "128 KB" },
  { id: 3, title: "Dosage Quick Reference", description: "Quick reference guide for common peptide dosages.", category: "Guides", icon: BookOpen, format: "PDF", size: "512 KB" },
  { id: 4, title: "Patient Education Handout", description: "Take-home guide for patients on peptide therapy.", category: "Patient Materials", icon: Users, format: "PDF", size: "320 KB" },
  { id: 5, title: "Safety Checklist", description: "Pre-treatment safety checklist for practitioners.", category: "Checklists", icon: Shield, format: "PDF", size: "98 KB" },
  { id: 6, title: "Reconstitution Guide", description: "Step-by-step reconstitution instructions with images.", category: "Guides", icon: BookOpen, format: "PDF", size: "1.2 MB" },
  { id: 7, title: "Progress Tracking Sheet", description: "Patient progress tracking template.", category: "Templates", icon: ClipboardList, format: "PDF", size: "156 KB" },
  { id: 8, title: "Injection Site Diagram", description: "Printable injection site reference diagram.", category: "Patient Materials", icon: Printer, format: "PDF", size: "890 KB" },
];

const categories = ["All", "Templates", "Forms", "Guides", "Patient Materials", "Checklists"];

export default function DownloadableResources() {
  usePageTitle('Downloadable Resources | Peptide Education Hub');

  const handleDownload = (title: string) => {
    alert(`Download started: ${title}\n\nNote: In production, this would download the actual PDF file.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/resources' }, { label: 'Downloads' }]} />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
              <Download className="h-8 w-8 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Downloadable Resources</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Free PDF templates, guides, and patient materials for your practice.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                        <Icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{resource.category}</span>
                    </div>
                    <CardTitle className="text-lg mt-3">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{resource.format} • {resource.size}</span>
                      <Button size="sm" onClick={() => handleDownload(resource.title)} className="bg-teal-600 hover:bg-teal-700">
                        <Download className="h-4 w-4 mr-2" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
