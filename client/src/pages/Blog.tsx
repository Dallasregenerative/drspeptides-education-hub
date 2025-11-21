import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink, Microscope } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: "getting-started",
    title: "How to Start a Peptide Therapy Practice in 2025",
    description: "A comprehensive guide for healthcare providers looking to integrate peptide therapy into their practice, covering legal considerations, supplier selection, and patient protocols.",
    slug: "getting-started",
    readTime: "12 min read",
    category: "Practice Management"
  },
  {
    id: "choosing-supplier",
    title: "Choosing a Peptide Supplier: A Provider's Checklist",
    description: "Critical factors to evaluate when selecting a peptide supplier, including quality standards, regulatory compliance, and red flags to avoid.",
    slug: "choosing-supplier",
    readTime: "10 min read",
    category: "Quality & Safety"
  },
  {
    id: "bpc157-tb500",
    title: "BPC-157 vs. TB-500: A Clinical Comparison",
    description: "An in-depth analysis of two powerful regenerative peptides, their mechanisms of action, clinical applications, and when to use each for optimal patient outcomes.",
    slug: "bpc157-tb500",
    readTime: "15 min read",
    category: "Clinical Applications"
  },
  {
    id: "glp1-therapy",
    title: "Semaglutide and Tirzepatide: A Provider's Guide to GLP-1 Therapy",
    description: "Clinical overview of GLP-1 receptor agonists for weight management, including mechanisms, efficacy data, dosing protocols, and side effect management.",
    slug: "glp1-therapy",
    readTime: "14 min read",
    category: "Weight Management"
  },
  {
    id: "quality-standards",
    title: "Peptide Quality Standards: What Healthcare Providers Need to Know",
    description: "Understanding purity, potency, identity verification, and safety testing requirements for medical-grade peptides.",
    slug: "quality-standards",
    readTime: "11 min read",
    category: "Quality & Safety"
  },
  {
    id: "storage-handling",
    title: "Peptide Storage and Handling: A Provider's Guide to Maintaining Potency",
    description: "Best practices for storing lyophilized and reconstituted peptides, proper handling techniques, and maintaining the cold chain.",
    slug: "storage-handling",
    readTime: "10 min read",
    category: "Practice Management"
  },
  {
    id: "practice-roi",
    title: "Peptide Therapy ROI: Building a Profitable and Sustainable Practice",
    description: "Financial considerations, pricing strategies, cost management, and calculating return on investment for peptide therapy service lines.",
    slug: "practice-roi",
    readTime: "13 min read",
    category: "Business & ROI"
  }
];

export default function Blog() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Educational Blog</h2>
          <p className="text-xl text-teal-50 max-w-2xl">
            Evidence-based articles and clinical guides for healthcare providers practicing peptide therapy.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <div className="text-sm text-teal-600 font-semibold mb-2">{post.category}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 text-teal-600">
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Source Quality Peptides?
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            DrsPeptides.com provides USA-manufactured, medical-grade peptides with third-party testing and comprehensive provider support.
          </p>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

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
