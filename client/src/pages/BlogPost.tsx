import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Microscope } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { Streamdown } from 'streamdown';

const blogPostMapping: Record<string, { file: string; title: string }> = {
  "getting-started": { file: "blog_post_1.md", title: "How to Start a Peptide Therapy Practice in 2025" },
  "choosing-supplier": { file: "blog_post_2.md", title: "Choosing a Peptide Supplier: A Provider's Checklist" },
  "bpc157-tb500": { file: "blog_post_3.md", title: "BPC-157 vs. TB-500: A Clinical Comparison" },
  "glp1-therapy": { file: "blog_post_4.md", title: "Semaglutide and Tirzepatide: A Provider's Guide to GLP-1 Therapy" },
  "quality-standards": { file: "blog_post_5.md", title: "Peptide Quality Standards: What Healthcare Providers Need to Know" },
  "storage-handling": { file: "blog_post_6.md", title: "Peptide Storage and Handling: A Provider's Guide to Maintaining Potency" },
  "practice-roi": { file: "blog_post_7.md", title: "Peptide Therapy ROI: Building a Profitable and Sustainable Practice" }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const postInfo = blogPostMapping[slug];

  useEffect(() => {
    if (postInfo) {
      fetch(`/${postInfo.file}`)
        .then(res => res.text())
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to load blog post:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [slug, postInfo]);

  if (!postInfo) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Microscope className="h-8 w-8 text-teal-600" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Therapy Hub</h1>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h2>
          <Link href="/blog">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Therapy Hub</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">Home</Link>
            <Link href="/blog" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">Blog</Link>
            <Link href="/resources" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">Resources</Link>
          </nav>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400">Loading article...</p>
          </div>
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-teal-600 prose-strong:text-slate-900 dark:prose-strong:text-white">
            <Streamdown>{content}</Streamdown>
          </div>
        )}

        {/* CTA at bottom of article */}
        <div className="mt-16 p-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Source Medical-Grade Peptides?</h3>
          <p className="text-lg mb-6 text-teal-50">
            DrsPeptides.com provides USA-manufactured, cGMP-certified peptides with comprehensive provider support.
          </p>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About This Resource</h4>
              <p className="text-slate-400">
                An educational hub providing evidence-based information on peptide therapy for healthcare practitioners.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="hover:text-teal-400 transition-colors">Resources</Link></li>
                <li><a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">DrsPeptides.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
              <p className="text-slate-400 text-sm">
                This content is for educational purposes only and is not medical advice. Consult with qualified healthcare professionals before implementing peptide therapy.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Peptide Therapy Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
