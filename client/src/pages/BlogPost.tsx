import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import { ArrowLeft, ExternalLink, Microscope, Twitter, Linkedin, Facebook, Mail, Link2, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { Streamdown } from 'streamdown';

const blogPostMapping: Record<string, { file: string; title: string; description?: string }> = {
  "getting-started": { file: "blog_post_1.md", title: "How to Start a Peptide Therapy Practice in 2025", description: "A comprehensive guide for healthcare providers looking to integrate peptide therapy into their practice." },
  "choosing-supplier": { file: "blog_post_2.md", title: "Choosing a Peptide Supplier: A Provider's Checklist", description: "Essential criteria for selecting a reliable peptide supplier for your medical practice." },
  "bpc157-tb500": { file: "blog_post_3.md", title: "BPC-157 vs. TB-500: A Clinical Comparison", description: "An in-depth comparison of two popular healing peptides for clinical applications." },
  "glp1-therapy": { file: "blog_post_4.md", title: "Semaglutide and Tirzepatide: A Provider's Guide to GLP-1 Therapy", description: "Complete guide to GLP-1 receptor agonists for weight management." },
  "quality-standards": { file: "blog_post_5.md", title: "Peptide Quality Standards: What Healthcare Providers Need to Know", description: "Understanding quality standards and certifications for medical-grade peptides." },
  "storage-handling": { file: "blog_post_6.md", title: "Peptide Storage and Handling: A Provider's Guide to Maintaining Potency", description: "Best practices for storing and handling peptides to maintain efficacy." },
  "practice-roi": { file: "blog_post_7.md", title: "Peptide Therapy ROI: Building a Profitable and Sustainable Practice", description: "Financial considerations and ROI analysis for peptide therapy practices." },
  "thymosin-alpha-1": { file: "blog_post_14.md", title: "Thymosin Alpha-1: Evidence-Based Immune Modulation", description: "Clinical applications of Thymosin Alpha-1 for immune system support." },
  "pt-141": { file: "blog_post_9.md", title: "PT-141 (Bremelanotide): Clinical Applications in Sexual Wellness", description: "Understanding PT-141 for sexual health applications in clinical practice." },
  "semax": { file: "blog_post_10.md", title: "Semax: Neuroprotection and Cognitive Enhancement", description: "Evidence-based review of Semax for cognitive and neuroprotective benefits." },
  "tesamorelin": { file: "blog_post_11.md", title: "Tesamorelin: FDA-Approved Therapy for Visceral Adiposity", description: "Clinical guide to Tesamorelin for reducing visceral fat." },
  "melanotan-ii": { file: "blog_post_12.md", title: "Melanotan II: Photoprotection and Aesthetic Applications", description: "Understanding Melanotan II for tanning and aesthetic purposes." },
  "ipamorelin": { file: "blog_post_13.md", title: "Ipamorelin: The Selective Growth Hormone Secretagogue", description: "Complete guide to Ipamorelin for growth hormone optimization." },
  "ghk-cu": { file: "blog_post_15.md", title: "GHK-Cu: The Copper Peptide Revolutionizing Regenerative Medicine", description: "Exploring GHK-Cu applications in wound healing and skin rejuvenation." },
  "implementing-peptide-therapy": { file: "blog_post_6.md", title: "Implementing Peptide Therapy: A Step-by-Step Clinical Guide", description: "Practical implementation guide for peptide therapy in clinical settings." },
  "peptideprotocols-ai": { file: "blog_post_16.md", title: "PeptideProtocols.ai: AI-Powered Protocol Design for Healthcare Providers", description: "How AI is transforming peptide protocol design for practitioners." },
  "founder-story": { file: "blog_founder_story.md", title: "From Inventor to Innovator: The Visionary Behind Pepedhub.com", description: "Discover the journey of Austin Crowder, a serial entrepreneur, inventor, and educator who created the comprehensive peptide education platform." },
  "training-practitioners": { file: "blog_training_practitioners.md", title: "The Architect of Modern Peptide Education: Training the Next Generation", description: "How Austin Crowder is training hundreds of regenerative medicine practitioners at TheDRC.life." },
  "dr-peptide-ai": { file: "blog_dr_peptide_ai.md", title: "Meet Dr. Peptide: The AI-Powered Future of Practitioner Training", description: "Introducing Dr. Peptide and PeptideProtocols.ai - the revolutionary AI platform for peptide therapy." }
};

// Social Share Component inline for blog posts
function SocialShareButtons({ title, description }: { title: string; description?: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Share this article:</span>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => openShare('twitter')} 
          className="hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 gap-2"
        >
          <Twitter className="h-4 w-4" />
          <span className="hidden sm:inline">Twitter</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => openShare('linkedin')} 
          className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 gap-2"
        >
          <Linkedin className="h-4 w-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => openShare('facebook')} 
          className="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 gap-2"
        >
          <Facebook className="h-4 w-4" />
          <span className="hidden sm:inline">Facebook</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => openShare('email')} 
          className="hover:bg-slate-100 hover:text-slate-700 gap-2"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Email</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={copyToClipboard} 
          className={`gap-2 transition-colors ${copied ? 'bg-green-50 text-green-600 border-green-300' : ''}`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
        </Button>
      </div>
    </div>
  );
}

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
          // Failed to load blog post - silently fail in production
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
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
            
          <div className="mt-4 mb-6">
            <PrintButton title="Blog Post - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
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
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <Link href="/blog">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          {/* Social Share - Top */}
          <SocialShareButtons title={postInfo.title} description={postInfo.description} />
        </div>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400">Loading article...</p>
          </div>
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-teal-600 prose-strong:text-slate-900 dark:prose-strong:text-white">
            <Streamdown>{content}</Streamdown>
          </div>
        )}

        {/* Social Share - Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Found this article helpful?</h4>
            <SocialShareButtons title={postInfo.title} description={postInfo.description} />
          </div>
        </div>

        {/* CTA at bottom of article */}
        <div className="mt-12 p-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl text-white text-center">
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
            <p>&copy; 2026 Peptide Education Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
