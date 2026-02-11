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
  "dr-peptide-ai": { file: "blog_dr_peptide_ai.md", title: "Meet Dr. Peptide: The AI-Powered Future of Practitioner Training", description: "Introducing Dr. Peptide and PeptideProtocols.ai - the revolutionary AI platform for peptide therapy." },
  "neuro-series-formulas": { file: "blog_neuro_series_formulas.md", title: "The Mind of the Machine: How Dr. Peptide and Expert Formulators Created the Neuro Series", description: "Discover how Dr. Peptide, the world's first clinical assistance tool for peptides, worked with doctors, pharmacists, and formulators to design the revolutionary Neuro Series." },
  "regen-metabolic-formulas": { file: "blog_regen_metabolic_formulas.md", title: "The Body Electric: How Dr. Peptide and Expert Formulators Created the Regenerative and Metabolic Series", description: "How a team of doctors, pharmacists, and formulators used Dr. Peptide to create intelligent formulas targeting healing, recovery, and energy production." },
  "ai-formula-design": { file: "blog_ai_formula_design.md", title: "The Ghost in the Machine: How Dr. Peptide is Revolutionizing Formula Design", description: "An inside look at how Dr. Peptide, the world's first clinical assistance tool for peptides, collaborates with human experts to create groundbreaking formulas." },
  "peptide-therapy-weight-loss": { file: "blog_peptide_weight_loss.md", title: "Peptide Therapy for Weight Loss: A Clinician's Guide to the Metabolic Revolution", description: "Comprehensive guide to using Semaglutide, Tirzepatide, and AOD-9604 for weight management." },
  "anti-aging-peptides": { file: "blog_anti_aging_peptides.md", title: "The Science of Longevity: A Clinician's Guide to Anti-Aging Peptides", description: "Explore Epithalon, MOTS-c, GHK-Cu, and Sermorelin for targeting the hallmarks of aging." },
  "peptides-muscle-growth": { file: "blog_peptides_muscle_growth.md", title: "Building the Body: A Clinician's Guide to Peptides for Muscle Growth and Performance", description: "Clinical overview of CJC-1295/Ipamorelin, Tesamorelin, MK-677, and IGF-1 LR3 for muscle growth." },
  "peptides-injury-recovery": { file: "blog_peptides_injury_recovery.md", title: "The Healing Code: A Clinician's Guide to Peptides for Injury Recovery", description: "How BPC-157, TB-500, and GHK-Cu accelerate healing of muscle, tendon, ligament, and bone injuries." },
  "peptides-cognitive-enhancement": { file: "blog_peptides_cognitive.md", title: "The Limitless Mind: A Clinician's Guide to Peptides for Cognitive Enhancement", description: "Explore Semax, Selank, Dihexa, and Cerebrolysin for brain health and cognitive performance." },
  "peptides-immune-support": { file: "blog_peptides_immune.md", title: "The Resilient Body: A Clinician's Guide to Peptides for Immune Support", description: "How Thymosin Alpha-1, LL-37, and BPC-157 modulate and optimize immune function." },
  "peptides-sexual-health": { file: "blog_peptides_sexual_health.md", title: "The Spark of Life: A Clinician's Guide to Peptides for Sexual Health", description: "Clinical guide to PT-141, Melanotan II, and Kisspeptin-10 for treating sexual dysfunction." },
  "peptides-sleep-optimization": { file: "blog_peptides_sleep.md", title: "The Restorative Power of Sleep: A Clinician's Guide to Peptides for Sleep Optimization", description: "How DSIP, Epithalon, and CJC-1295/Ipamorelin restore natural sleep architecture." },
  "future-peptide-therapy": { file: "blog_future_peptide_therapy.md", title: "The Next Wave: A Clinician's Guide to the Future of Peptide Therapy", description: "Explore oral peptides, multi-receptor agonists, and the role of AI in peptide discovery." },
  "peptide-practice-business": { file: "blog_peptide_practice_business.md", title: "The Peptide Practice: A Clinician's Guide to the Business of Peptide Therapy", description: "Legal considerations, sourcing, pricing strategies, and marketing for peptide therapy practices." },
  // NEW SEO-Targeted Blog Posts - February 2026
  "reconstitution-guide": { file: "blog_reconstitution_guide.md", title: "The Complete Guide to Peptide Reconstitution: A Healthcare Provider's Reference", description: "Step-by-step protocols for reconstituting lyophilized peptides, dosage calculations, and storage requirements." },
  "503a-vs-503b": { file: "blog_503a_vs_503b.md", title: "503A vs 503B Compounding Pharmacies: What Peptide Therapy Providers Need to Know in 2026", description: "Understanding the critical differences between 503A and 503B compounding pharmacies for peptide sourcing." },
  "fda-peptide-regulations-2026": { file: "blog_fda_peptide_regulations_2026.md", title: "FDA Peptide Regulations in 2026: What Healthcare Providers Must Know", description: "Comprehensive overview of the current FDA regulatory framework for peptide therapy." },
  "peptides-gut-health": { file: "blog_peptides_gut_health.md", title: "Peptides for Gut Health: A Clinician's Guide to Healing the Gastrointestinal System", description: "How BPC-157, KPV, and Larazotide target mucosal healing and gut restoration." },
  // Formula Blog Posts - Dr.Peptide Designed Formulas
  "n-259-sleep-science": { file: "N-259-Blog-1.md", title: "The Science of Superior Sleep: Deconstructing the N-259 Protocol", description: "How Apigenin, Magnesium Glycinate, L-Theanine, and physiological melatonin work synergistically for optimal sleep architecture." },
  "n-259-beyond-melatonin": { file: "N-259-Blog-2.md", title: "Beyond Melatonin: Why Your Sleep Protocol is Missing 3 Key Ingredients", description: "Understanding the multi-pathway approach to sleep: GABA support, neuromuscular relaxation, and alpha-wave promotion." },
  "n-69-neuroscience-desire": { file: "N-69-Blog-1.md", title: "The Neuroscience of Desire: How N-69 Reboots the Brain-Body Connection for Ultimate Intimacy", description: "A deep dive into the 5-pathway approach of NALT, Kisspeptin, PT-141, Oxytocin, and VIP for sexual wellness." },
  "n-69-brain-libido": { file: "N-69-Blog-2.md", title: "Is Your Brain the Reason You're Not in the Mood? The Truth About Modern Libido", description: "How stress, dopamine depletion, and hormonal imbalances affect desire, and the science of restoring it." },
  "n-111-holy-trinity": { file: "N-111-Blog-1.md", title: "The Holy Trinity of Nootropics: Why N-111 is a Game-Changer for Brain Health", description: "How J147, Dihexa, and Noopept work together for neurogenesis, memory enhancement, and neuroprotection." },
  "n-111-neurogenesis": { file: "N-111-Blog-2.md", title: "Are You Building a Better Brain, or Just Renting It? The Difference Between Nootropics and Neurogenesis", description: "Why true cognitive enhancement requires growing new neurons and synapses, not just temporary stimulation." },
  "n-5550-brain-body": { file: "N-5550-Blog-1.md", title: "The Ultimate Brain-Body Upgrade: How N-5550 Tackles Cognition and Metabolism Simultaneously", description: "Dihexa, Tesofensine, and Methylene Blue for addressing brain fog and metabolic dysfunction together." },
  "n-5550-brain-fat": { file: "N-5550-Blog-2.md", title: "The Brain-Fat Connection: Why Your Weight Loss Stall is All in Your Head", description: "How dopamine depletion and brain chemistry affect appetite, metabolism, and weight loss resistance." },
  "n-2331-cognitive-stack": { file: "N-2331-Blog-1.md", title: "The Ultimate Cognitive Enhancement Stack: Deconstructing the 4 Pillars of N-2331", description: "How Dihexa, Selank, Semax, and NAD+ work synergistically for comprehensive brain optimization." },
  "n-2331-anxiety-cognition": { file: "N-2331-Blog-2.md", title: "The Anxiety-Cognition Connection: Why You Can't Be Smart and Stressed at the Same Time", description: "How chronic stress impairs cognitive function and the science of restoring mental clarity." },
  "rg-5555-healing-cascade": { file: "RG-5555-Blog-1.md", title: "The 4-Step Cascade of Superior Healing: Deconstructing RG-5555", description: "How BPC-157, TB-500, KPV, and Larazotide work together for comprehensive injury recovery." },
  "rg-5555-gut-healing": { file: "RG-5555-Blog-2.md", title: "Is Your Gut Sabotaging Your Injury Recovery? The Leaky Gut-Inflammation Connection", description: "How gut permeability affects systemic inflammation and the role of Larazotide in healing." },
  "m-51-push-pull": { file: "M-51-Blog-1.md", title: "The Push-Pull Effect: How M-51 Burns Fat from Two Directions", description: "How 5-Amino-1MQ and SLU-PP-332 work synergistically to inhibit fat storage and activate fat burning." },
  "m-51-nnmt": { file: "M-51-Blog-2.md", title: "The Hidden Enzyme That's Keeping You Fat: Understanding NNMT", description: "How NNMT inhibition with 5-Amino-1MQ can unlock stubborn fat loss and improve metabolic health." },
  "m-2531-cellular-engines": { file: "M-2531-Blog-1.md", title: "The Signal and the Fuel: How M-2531 Rejuvenates Your Cellular Engines", description: "How MOTS-c, NAD+, and mitochondrial support compounds restore cellular energy production." },
  "m-2531-exercise-paradox": { file: "M-2531-Blog-2.md", title: "The Exercise Paradox: Are You Working Out But Still Feeling Old?", description: "Why exercise alone isn't enough and how mitochondrial peptides can restore youthful energy." },
  "w-1175-exercise-pill": { file: "W-1175-Blog-1.md", title: "The 'Exercise in a Pill' Phenomenon: Deconstructing the W-1175 Protocol", description: "How SLU-PP-332 and Orforglipron combine exercise mimetics with GLP-1 for metabolic optimization." },
  "w-1175-oral-glp1": { file: "W-1175-Blog-2.md", title: "The End of Injections? Why Oral GLP-1s are the Future of Weight Loss", description: "How Orforglipron and other oral GLP-1 agonists are revolutionizing weight management therapy." }
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
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
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
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
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
