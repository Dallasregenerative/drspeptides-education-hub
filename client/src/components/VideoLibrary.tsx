import { useState } from 'react';
import { Play, Clock, BookOpen, Syringe, FlaskConical, GraduationCap, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  { id: "1", title: "Peptide Reconstitution Basics", description: "Learn the fundamentals of properly reconstituting lyophilized peptides with bacteriostatic water.", duration: "8:45", category: "reconstitution", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "2", title: "Subcutaneous Injection Technique", description: "Step-by-step guide to proper subcutaneous injection technique for peptide administration.", duration: "6:30", category: "injection", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "3", title: "BPC-157 Protocol Overview", description: "Comprehensive overview of BPC-157 dosing, timing, and clinical applications.", duration: "12:15", category: "education", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "4", title: "Calculating Peptide Dosages", description: "How to accurately calculate peptide dosages based on concentration and patient weight.", duration: "10:00", category: "education", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "5", title: "Proper Peptide Storage", description: "Best practices for storing reconstituted and lyophilized peptides.", duration: "5:20", category: "reconstitution", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "6", title: "Intramuscular Injection Guide", description: "When and how to administer peptides via intramuscular injection.", duration: "7:45", category: "injection", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "7", title: "GLP-1 Agonist Protocols", description: "Clinical protocols for Semaglutide and Tirzepatide administration.", duration: "15:30", category: "education", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "8", title: "Sterile Technique Essentials", description: "Maintaining sterility during peptide preparation and administration.", duration: "9:00", category: "reconstitution", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "9", title: "Growth Hormone Secretagogues", description: "Understanding CJC-1295, Ipamorelin, and combination protocols.", duration: "14:20", category: "education", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "10", title: "Patient Education Materials", description: "How to educate patients on self-administration of peptides.", duration: "11:00", category: "education", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "11", title: "Insulin Syringe Selection", description: "Choosing the right syringe and needle gauge for peptide injections.", duration: "4:30", category: "injection", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
  { id: "12", title: "Reconstitution Troubleshooting", description: "Common reconstitution problems and how to avoid them.", duration: "7:15", category: "reconstitution", thumbnail: "/api/placeholder/320/180", videoUrl: "#" },
];

const categories = [
  { id: "all", label: "All Videos", icon: BookOpen },
  { id: "reconstitution", label: "Reconstitution", icon: FlaskConical },
  { id: "injection", label: "Injection Techniques", icon: Syringe },
  { id: "education", label: "Education", icon: GraduationCap },
];

export default function VideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(selectedCategory === cat.id && "bg-teal-600 hover:bg-teal-700")}
            >
              <Icon className="h-4 w-4 mr-2" />
              {cat.label}
            </Button>
          );
        })}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-4xl w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video Player Placeholder</p>
                <p className="text-sm text-slate-400">{selectedVideo.title}</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">{selectedVideo.description}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {selectedVideo.duration}</span>
              <span className="capitalize">{selectedVideo.category}</span>
            </div>
            <Button variant="outline" className="mt-4" onClick={() => setSelectedVideo(null)}>Close</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setSelectedVideo(video)}>
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-4 group-hover:bg-teal-600 group-hover:scale-110 transition-all">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 group-hover:text-teal-600 transition-colors">{video.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{video.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded capitalize">{video.category}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600 dark:text-slate-400">No videos found in this category.</p>
        </div>
      )}
    </div>
  );
}
