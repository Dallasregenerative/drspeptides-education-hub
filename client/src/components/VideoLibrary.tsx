import { useState } from 'react';
import { Play, Clock, BookOpen, Syringe, FlaskConical, GraduationCap, Filter, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  youtubeId: string;
  source: string;
}

const videos: Video[] = [
  // Reconstitution Videos
  { id: "1", title: "How To Reconstitute And Inject Peptides", description: "Our healthcare team demonstrates the proper method of reconstitution and subcutaneous injection of peptides. Essential viewing for practitioners and patients.", duration: "10:32", category: "reconstitution", youtubeId: "tcEWjyQfDLc", source: "Healthcare Professional" },
  { id: "2", title: "How to Reconstitute BPC-157", description: "Learn how to reconstitute BPC-157 in this detailed how-to video. BPC-157 has numerous benefits including tissue healing and recovery support.", duration: "5:47", category: "reconstitution", youtubeId: "59L1fuCcnmY", source: "Anti-Aging Northwest" },
  { id: "3", title: "Peptide Reconstitution and Storage Best Practices", description: "Complete guide to peptide reconstitution and storage. Learn the correct techniques to maintain peptide potency and effectiveness.", duration: "12:18", category: "reconstitution", youtubeId: "AjFMzYIxm98", source: "Quinn Stillson MD" },
  { id: "4", title: "Most People Store Peptides WRONG", description: "Learn the correct way to store your peptides. This comprehensive guide covers common mistakes and proper storage techniques.", duration: "8:45", category: "reconstitution", youtubeId: "IImNBBTolXY", source: "Peptide Expert" },
  
  // Injection Technique Videos
  { id: "5", title: "Semaglutide Injection Tutorial", description: "Complete walkthrough for receiving, preparing, and administering your Semaglutide injection safely and effectively.", duration: "6:23", category: "injection", youtubeId: "FypBtpZXNao", source: "Medical Professional" },
  { id: "6", title: "How to Inject Semaglutide/Tirzepatide (GLP-1)", description: "Detailed how-to video for injecting your Semaglutide or Tirzepatide GLP-1 medications. Step-by-step instructions for safe administration.", duration: "8:15", category: "injection", youtubeId: "dSO_761NbzQ", source: "Healthcare Provider" },
  { id: "7", title: "Subcutaneous Injection Technique", description: "A comprehensive step-by-step instructional video on how to give a subcutaneous injection properly and safely.", duration: "4:52", category: "injection", youtubeId: "LNXOFKjTPJc", source: "Roswell Park" },
  { id: "8", title: "Peptide Self-Injection Guide", description: "Quick and easy instructional video for self-administering subcutaneous peptide injections at home.", duration: "3:45", category: "injection", youtubeId: "Gbhmvow00os", source: "Concierge MD" },
  { id: "9", title: "Peptide Safe Injection Techniques", description: "Learn how to safely administer a peptide injection with proper technique and sterile practices.", duration: "7:30", category: "injection", youtubeId: "jrLV99dJi14", source: "Medical Professional" },
  
  // Education Videos
  { id: "10", title: "BPC-157 Mixing, Dosages & Best Practices", description: "Everything you need to know about BPC-157 including proper mixing, dosages, and application best practices for optimal results.", duration: "15:42", category: "education", youtubeId: "I8WOHeoL1Wg", source: "Peptide Education" },
  { id: "11", title: "CJC-1295 & Ipamorelin Explained", description: "The strongest peptide combination for building muscle. Learn about CJC-1295 and Ipamorelin protocols and benefits.", duration: "18:30", category: "education", youtubeId: "QKTUTsSjIyg", source: "Thomas DeLauer" },
  { id: "12", title: "How to Inject Ipamorelin/CJC-1295", description: "Educational video on proper injection technique for Ipamorelin and CJC-1295 peptide therapy.", duration: "4:15", category: "education", youtubeId: "eztFXtswLS0", source: "Dr. Marc Adajar" },
  { id: "13", title: "CJC-1295 + Ipamorelin: How It Works", description: "Comprehensive overview of how CJC-1295 and Ipamorelin work together, their benefits, and personal experience insights.", duration: "12:45", category: "education", youtubeId: "Xz7hyDwn2J4", source: "Health Educator" },
  { id: "14", title: "How to Use a Peptide Calculator", description: "Step-by-step guide on using a peptide calculator for accurate dosage reconstitution and measurement.", duration: "9:20", category: "education", youtubeId: "alfhb6EvbYM", source: "Peptide Guide" },
  { id: "15", title: "Complete Peptide Storage & Handling Guide", description: "Everything you need to know about handling and storing your peptides from start to finish for beginners.", duration: "11:30", category: "education", youtubeId: "9Vjbq3qjaFw", source: "Peptide Expert" },
];

const categories = [
  { id: "all", label: "All Videos", icon: BookOpen, count: videos.length },
  { id: "reconstitution", label: "Reconstitution", icon: FlaskConical, count: videos.filter(v => v.category === "reconstitution").length },
  { id: "injection", label: "Injection Techniques", icon: Syringe, count: videos.filter(v => v.category === "injection").length },
  { id: "education", label: "Education", icon: GraduationCap, count: videos.filter(v => v.category === "education").length },
];

export default function VideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
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
              <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">{cat.count}</span>
            </Button>
          );
        })}
      </div>

      {/* Video Modal with YouTube Embed */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-xl font-bold truncate pr-4">{selectedVideo.title}</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedVideo(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              {/* YouTube Embed */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{selectedVideo.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {selectedVideo.duration}
                </span>
                <span className="capitalize bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  {selectedVideo.category}
                </span>
                <span className="text-teal-600">
                  Source: {selectedVideo.source}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card 
            key={video.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" 
            onClick={() => setSelectedVideo(video)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={getYouTubeThumbnail(video.youtubeId)} 
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-teal-600 rounded-full p-4">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <div className="absolute top-2 left-2">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
                  YouTube
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                {video.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded capitalize">
                  {video.category}
                </span>
                <span className="text-xs text-slate-500">
                  {video.source}
                </span>
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

      {/* Disclaimer */}
      <div className="text-center text-sm text-slate-500 mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <p>
          These educational videos are sourced from healthcare professionals and medical educators on YouTube. 
          Always consult with a qualified healthcare provider before starting any peptide therapy.
        </p>
      </div>
    </div>
  );
}
