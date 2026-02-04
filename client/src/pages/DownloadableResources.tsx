import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Download, FileText, ClipboardList, Users, BookOpen, Shield, Syringe, FlaskConical, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: any;
  format: string;
  size: string;
  filename: string;
}

const resources: Resource[] = [
  { 
    id: 1, 
    title: "Peptide Protocol Template", 
    description: "Comprehensive protocol template for documenting peptide therapy including patient info, dosing, administration, and monitoring schedules.", 
    category: "Templates", 
    icon: ClipboardList, 
    format: "PDF", 
    size: "2.4 KB",
    filename: "peptide-protocol-template.pdf"
  },
  { 
    id: 2, 
    title: "Patient Consent Form", 
    description: "Complete informed consent form covering treatment information, potential benefits, risks, and patient acknowledgment sections.", 
    category: "Forms", 
    icon: FileText, 
    format: "PDF", 
    size: "2.2 KB",
    filename: "patient-consent-form.pdf"
  },
  { 
    id: 3, 
    title: "Dosage Quick Reference", 
    description: "Quick reference table with dosages for 12 common peptides including BPC-157, Semaglutide, CJC-1295, and more.", 
    category: "Guides", 
    icon: BookOpen, 
    format: "PDF", 
    size: "2.9 KB",
    filename: "dosage-quick-reference.pdf"
  },
  { 
    id: 4, 
    title: "Patient Education Handout", 
    description: "Take-home guide explaining peptide therapy, what to expect during treatment, storage instructions, and when to contact providers.", 
    category: "Patient Materials", 
    icon: Users, 
    format: "PDF", 
    size: "2.6 KB",
    filename: "patient-education-handout.pdf"
  },
  { 
    id: 5, 
    title: "Pre-Treatment Safety Checklist", 
    description: "Comprehensive safety checklist covering patient assessment, laboratory work, patient education, and documentation requirements.", 
    category: "Checklists", 
    icon: Shield, 
    format: "PDF", 
    size: "2.5 KB",
    filename: "safety-checklist.pdf"
  },
  { 
    id: 6, 
    title: "Reconstitution Guide", 
    description: "Step-by-step instructions for reconstituting lyophilized peptides including materials needed, dosage calculations, and storage tips.", 
    category: "Guides", 
    icon: FlaskConical, 
    format: "PDF", 
    size: "2.8 KB",
    filename: "reconstitution-guide.pdf"
  },
  { 
    id: 7, 
    title: "Progress Tracking Sheet", 
    description: "12-week progress tracking template with weekly logs for weight, energy, sleep, mood, side effects, and measurement tracking.", 
    category: "Templates", 
    icon: ClipboardList, 
    format: "PDF", 
    size: "2.9 KB",
    filename: "progress-tracking-sheet.pdf"
  },
  { 
    id: 8, 
    title: "Injection Site Reference Guide", 
    description: "Detailed guide to subcutaneous injection sites including abdomen, thigh, upper arm, and lower back with rotation schedule.", 
    category: "Patient Materials", 
    icon: Syringe, 
    format: "PDF", 
    size: "2.4 KB",
    filename: "injection-site-guide.pdf"
  },
];

const categories = ["All", "Templates", "Forms", "Guides", "Patient Materials", "Checklists"];

export default function DownloadableResources() {
  usePageTitle('Downloadable Resources | Peptide Education Hub');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [downloadedFiles, setDownloadedFiles] = useState<Set<number>>(new Set());

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  const handleDownload = (resource: Resource) => {
    // Create download link
    const link = document.createElement('a');
    link.href = `/downloads/${resource.filename}`;
    link.download = resource.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mark as downloaded
    setDownloadedFiles(prev => new Set([...prev, resource.id]));
  };

  const handleDownloadAll = () => {
    resources.forEach((resource, index) => {
      setTimeout(() => {
        handleDownload(resource);
      }, index * 500); // Stagger downloads
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Resources', href: '/resources' }, { label: 'Downloads' }]} />
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
              <Download className="h-8 w-8 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Downloadable Resources</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
              Free PDF templates, guides, and patient materials for your peptide therapy practice.
            </p>
            <Button onClick={handleDownloadAll} className="bg-teal-600 hover:bg-teal-700">
              <Download className="h-4 w-4 mr-2" />
              Download All Resources
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-teal-600 hover:bg-teal-700" : ""}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({resources.filter(r => r.category === category).length})
                  </span>
                )}
              </Button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
              const isDownloaded = downloadedFiles.has(resource.id);
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow relative">
                  {isDownloaded && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                        <Icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {resource.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg mt-3">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        {resource.format} • {resource.size}
                      </span>
                      <Button 
                        size="sm" 
                        onClick={() => handleDownload(resource)} 
                        className={isDownloaded ? "bg-green-600 hover:bg-green-700" : "bg-teal-600 hover:bg-teal-700"}
                      >
                        {isDownloaded ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" /> Downloaded
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" /> Download
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Usage Note */}
          <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              How to Use These Resources
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              These templates and guides are provided for educational purposes and can be customized for your practice. 
              Print them directly or edit them to match your clinic's branding and specific protocols. 
              Always ensure compliance with your local regulations and professional guidelines.
            </p>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
