import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink, Microscope } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";

const blogPosts = [
  {
    id: "getting-started",
    title: "How to Start a Peptide Therapy Practice in 2026",
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
  },
  {
    id: "thymosin-alpha-1",
    title: "Thymosin Alpha-1: Evidence-Based Immune Modulation",
    description: "Comprehensive guide to Thymosin Alpha-1 for immune support, chronic viral infections, cancer adjunct therapy, and vaccine response enhancement.",
    slug: "thymosin-alpha-1",
    readTime: "16 min read",
    category: "Immune Support"
  },
  {
    id: "pt-141",
    title: "PT-141 (Bremelanotide): Clinical Applications in Sexual Wellness",
    description: "Evidence-based guide to PT-141 for treating sexual dysfunction in both men and women, including mechanisms, dosing, and clinical protocols.",
    slug: "pt-141",
    readTime: "14 min read",
    category: "Sexual Health"
  },
  {
    id: "semax",
    title: "Semax: Neuroprotection and Cognitive Enhancement",
    description: "Clinical overview of Semax for cognitive enhancement, neuroprotection, and recovery from neurological conditions.",
    slug: "semax",
    readTime: "13 min read",
    category: "Cognitive Enhancement"
  },
  {
    id: "tesamorelin",
    title: "Tesamorelin: FDA-Approved Therapy for Visceral Adiposity",
    description: "Comprehensive guide to Tesamorelin for reducing visceral fat, improving body composition, and metabolic health optimization.",
    slug: "tesamorelin",
    readTime: "14 min read",
    category: "Metabolic Health"
  },
  {
    id: "melanotan-ii",
    title: "Melanotan II: Photoprotection and Aesthetic Applications",
    description: "Clinical guide to Melanotan II for skin protection, aesthetic tanning, and potential therapeutic applications with safety considerations.",
    slug: "melanotan-ii",
    readTime: "12 min read",
    category: "Dermatology"
  },
  {
    id: "ipamorelin",
    title: "Ipamorelin: The Selective Growth Hormone Secretagogue",
    description: "Evidence-based guide to Ipamorelin for growth hormone optimization, anti-aging, body composition, and recovery enhancement.",
    slug: "ipamorelin",
    readTime: "15 min read",
    category: "Growth Hormone"
  },
  {
    id: "ghk-cu",
    title: "GHK-Cu: The Copper Peptide Revolutionizing Regenerative Medicine",
    description: "Comprehensive guide to GHK-Cu for wound healing, anti-aging, hair restoration, and systemic regenerative applications.",
    slug: "ghk-cu",
    readTime: "16 min read",
    category: "Regenerative Medicine"
  },
  {
    id: "implementing-peptide-therapy",
    title: "Implementing Peptide Therapy: A Step-by-Step Clinical Guide",
    description: "Practical protocols for patient assessment, treatment planning, monitoring, and optimizing outcomes in peptide therapy practice.",
    slug: "implementing-peptide-therapy",
    readTime: "14 min read",
    category: "Clinical Protocols"
  },
  {
    id: "peptideprotocols-ai",
    title: "PeptideProtocols.ai: AI-Powered Protocol Design for Healthcare Providers",
    description: "Discover how PeptideProtocols.ai uses artificial intelligence to generate personalized peptide therapy protocols based on patient goals, medical history, and clinical evidence.",
    slug: "peptideprotocols-ai",
    readTime: "10 min read",
    category: "Technology & Innovation"
  },
  {
    id: "founder-story",
    title: "From Inventor to Innovator: The Visionary Behind Pepedhub.com",
    description: "Discover the journey of Austin Crowder, a serial entrepreneur, inventor, and educator who has dedicated his career to pushing the boundaries of regenerative medicine and created the comprehensive peptide education platform.",
    slug: "founder-story",
    readTime: "8 min read",
    category: "About Us"
  },
  {
    id: "training-practitioners",
    title: "The Architect of Modern Peptide Education: Training the Next Generation",
    description: "How Austin Crowder is training hundreds of regenerative medicine practitioners at TheDRC.life and democratizing peptide education through Pepedhub.com.",
    slug: "training-practitioners",
    readTime: "9 min read",
    category: "About Us"
  },
  {
    id: "dr-peptide-ai",
    title: "Meet Dr. Peptide: The AI-Powered Future of Practitioner Training",
    description: "Introducing Dr. Peptide and PeptideProtocols.ai - the revolutionary AI platform with 16 collaborating agents, 2,800+ studies analyzed, and coverage of 390+ medical conditions.",
    slug: "dr-peptide-ai",
    readTime: "10 min read",
    category: "Technology & Innovation"
  },
  {
    id: "neuro-series-formulas",
    title: "The Mind of the Machine: How Dr. Peptide and Expert Formulators Created the Neuro Series",
    description: "Discover how Dr. Peptide, the world's first clinical assistance tool for peptides, worked with doctors, pharmacists, and formulators to design the revolutionary Neuro Series for cognitive enhancement.",
    slug: "neuro-series-formulas",
    readTime: "11 min read",
    category: "Technology & Innovation"
  },
  {
    id: "regen-metabolic-formulas",
    title: "The Body Electric: How Dr. Peptide and Expert Formulators Created the Regenerative and Metabolic Series",
    description: "How a team of doctors, pharmacists, and formulators used Dr. Peptide to create intelligent formulas targeting healing, recovery, and energy production.",
    slug: "regen-metabolic-formulas",
    readTime: "10 min read",
    category: "Technology & Innovation"
  },
  {
    id: "ai-formula-design",
    title: "The Ghost in the Machine: How Dr. Peptide is Revolutionizing Formula Design",
    description: "An inside look at how Dr. Peptide, the world's first clinical assistance tool for peptides, collaborates with human experts to create groundbreaking formulas.",
    slug: "ai-formula-design",
    readTime: "12 min read",
    category: "Technology & Innovation"
  },
  {
    id: "peptide-therapy-weight-loss",
    title: "Peptide Therapy for Weight Loss: A Clinician's Guide to the Metabolic Revolution",
    description: "Comprehensive guide to using Semaglutide, Tirzepatide, and AOD-9604 for weight management, including mechanisms, clinical evidence, and dosing protocols.",
    slug: "peptide-therapy-weight-loss",
    readTime: "14 min read",
    category: "Weight Management"
  },
  {
    id: "anti-aging-peptides",
    title: "The Science of Longevity: A Clinician's Guide to Anti-Aging Peptides",
    description: "Explore Epithalon, MOTS-c, GHK-Cu, and Sermorelin for targeting the hallmarks of aging and promoting healthspan.",
    slug: "anti-aging-peptides",
    readTime: "13 min read",
    category: "Longevity"
  },
  {
    id: "peptides-muscle-growth",
    title: "Building the Body: A Clinician's Guide to Peptides for Muscle Growth and Performance",
    description: "Clinical overview of CJC-1295/Ipamorelin, Tesamorelin, MK-677, and IGF-1 LR3 for muscle growth, recovery, and performance enhancement.",
    slug: "peptides-muscle-growth",
    readTime: "12 min read",
    category: "Performance"
  },
  {
    id: "peptides-injury-recovery",
    title: "The Healing Code: A Clinician's Guide to Peptides for Injury Recovery",
    description: "How BPC-157, TB-500, and GHK-Cu accelerate healing of muscle, tendon, ligament, and bone injuries.",
    slug: "peptides-injury-recovery",
    readTime: "11 min read",
    category: "Regenerative Medicine"
  },
  {
    id: "peptides-cognitive-enhancement",
    title: "The Limitless Mind: A Clinician's Guide to Peptides for Cognitive Enhancement",
    description: "Explore Semax, Selank, Dihexa, and Cerebrolysin for brain health, neuroprotection, and cognitive performance.",
    slug: "peptides-cognitive-enhancement",
    readTime: "12 min read",
    category: "Cognitive Enhancement"
  },
  {
    id: "peptides-immune-support",
    title: "The Resilient Body: A Clinician's Guide to Peptides for Immune Support",
    description: "How Thymosin Alpha-1, LL-37, and BPC-157 modulate and optimize immune function for enhanced resilience.",
    slug: "peptides-immune-support",
    readTime: "10 min read",
    category: "Immune Support"
  },
  {
    id: "peptides-sexual-health",
    title: "The Spark of Life: A Clinician's Guide to Peptides for Sexual Health",
    description: "Clinical guide to PT-141, Melanotan II, and Kisspeptin-10 for treating sexual dysfunction and enhancing libido.",
    slug: "peptides-sexual-health",
    readTime: "11 min read",
    category: "Sexual Health"
  },
  {
    id: "peptides-sleep-optimization",
    title: "The Restorative Power of Sleep: A Clinician's Guide to Peptides for Sleep Optimization",
    description: "How DSIP, Epithalon, and CJC-1295/Ipamorelin restore natural sleep architecture and promote restorative rest.",
    slug: "peptides-sleep-optimization",
    readTime: "10 min read",
    category: "Sleep & Recovery"
  },
  {
    id: "future-peptide-therapy",
    title: "The Next Wave: A Clinician's Guide to the Future of Peptide Therapy",
    description: "Explore oral peptides, multi-receptor agonists, intranasal delivery, and the role of AI in peptide discovery and personalized medicine.",
    slug: "future-peptide-therapy",
    readTime: "13 min read",
    category: "Technology & Innovation"
  },
  {
    id: "peptide-practice-business",
    title: "The Peptide Practice: A Clinician's Guide to the Business of Peptide Therapy",
    description: "Legal considerations, sourcing, pricing strategies, and marketing for building a profitable peptide therapy practice.",
    slug: "peptide-practice-business",
    readTime: "14 min read",
    category: "Practice Management"
  },
  // NEW SEO-Targeted Blog Posts - February 2026
  {
    id: "reconstitution-guide",
    title: "The Complete Guide to Peptide Reconstitution: A Healthcare Provider's Reference",
    description: "Step-by-step protocols for reconstituting lyophilized peptides, dosage calculations, solvent selection, storage requirements, and common mistakes to avoid.",
    slug: "reconstitution-guide",
    readTime: "15 min read",
    category: "Clinical Protocols"
  },
  {
    id: "503a-vs-503b",
    title: "503A vs 503B Compounding Pharmacies: What Peptide Therapy Providers Need to Know in 2026",
    description: "Understanding the critical differences between 503A and 503B compounding pharmacies for peptide sourcing, quality assurance, and regulatory compliance.",
    slug: "503a-vs-503b",
    readTime: "14 min read",
    category: "Regulatory & Compliance"
  },
  {
    id: "fda-peptide-regulations-2026",
    title: "FDA Peptide Regulations in 2026: What Healthcare Providers Must Know",
    description: "Comprehensive overview of the current FDA regulatory framework for peptide therapy, including bulk drug substance status, compliance requirements, and risk mitigation strategies.",
    slug: "fda-peptide-regulations-2026",
    readTime: "16 min read",
    category: "Regulatory & Compliance"
  },
  {
    id: "peptides-gut-health",
    title: "Peptides for Gut Health: A Clinician's Guide to Healing the Gastrointestinal System",
    description: "How BPC-157, KPV, and Larazotide target mucosal healing, inflammation, and intestinal permeability for comprehensive gut restoration.",
    slug: "peptides-gut-health",
    readTime: "13 min read",
    category: "Gastrointestinal Health"
  },
  // Formula Blog Posts - Dr.Peptide Designed Formulas
  {
    id: "n-259-sleep-science",
    title: "The Science of Superior Sleep: Deconstructing the N-259 Protocol",
    description: "How Apigenin, Magnesium Glycinate, L-Theanine, and physiological melatonin work synergistically for optimal sleep architecture.",
    slug: "n-259-sleep-science",
    readTime: "8 min read",
    category: "Sleep Science"
  },
  {
    id: "n-259-beyond-melatonin",
    title: "Beyond Melatonin: Why Your Sleep Protocol is Missing 3 Key Ingredients",
    description: "Understanding the multi-pathway approach to sleep: GABA support, neuromuscular relaxation, and alpha-wave promotion.",
    slug: "n-259-beyond-melatonin",
    readTime: "7 min read",
    category: "Sleep Science"
  },
  {
    id: "n-69-neuroscience-desire",
    title: "The Neuroscience of Desire: How N-69 Reboots the Brain-Body Connection for Ultimate Intimacy",
    description: "A deep dive into the 5-pathway approach of NALT, Kisspeptin, PT-141, Oxytocin, and VIP for sexual wellness.",
    slug: "n-69-neuroscience-desire",
    readTime: "9 min read",
    category: "Sexual Health"
  },
  {
    id: "n-69-brain-libido",
    title: "Is Your Brain the Reason You're Not in the Mood? The Truth About Modern Libido",
    description: "How stress, dopamine depletion, and hormonal imbalances affect desire, and the science of restoring it.",
    slug: "n-69-brain-libido",
    readTime: "8 min read",
    category: "Sexual Health"
  },
  {
    id: "n-111-holy-trinity",
    title: "The Holy Trinity of Nootropics: Why N-111 is a Game-Changer for Brain Health",
    description: "How J147, Dihexa, and Noopept work together for neurogenesis, memory enhancement, and neuroprotection.",
    slug: "n-111-holy-trinity",
    readTime: "9 min read",
    category: "Cognitive Enhancement"
  },
  {
    id: "n-111-neurogenesis",
    title: "Are You Building a Better Brain, or Just Renting It? The Difference Between Nootropics and Neurogenesis",
    description: "Why true cognitive enhancement requires growing new neurons and synapses, not just temporary stimulation.",
    slug: "n-111-neurogenesis",
    readTime: "8 min read",
    category: "Cognitive Enhancement"
  },
  {
    id: "n-5550-brain-body",
    title: "The Ultimate Brain-Body Upgrade: How N-5550 Tackles Cognition and Metabolism Simultaneously",
    description: "Dihexa, Tesofensine, and Methylene Blue for addressing brain fog and metabolic dysfunction together.",
    slug: "n-5550-brain-body",
    readTime: "9 min read",
    category: "Biohacking"
  },
  {
    id: "n-5550-brain-fat",
    title: "The Brain-Fat Connection: Why Your Weight Loss Stall is All in Your Head",
    description: "How dopamine depletion and brain chemistry affect appetite, metabolism, and weight loss resistance.",
    slug: "n-5550-brain-fat",
    readTime: "8 min read",
    category: "Weight Management"
  },
  {
    id: "n-2331-cognitive-stack",
    title: "The Ultimate Cognitive Enhancement Stack: Deconstructing the 4 Pillars of N-2331",
    description: "How Dihexa, Selank, Semax, and NAD+ work synergistically for comprehensive brain optimization.",
    slug: "n-2331-cognitive-stack",
    readTime: "9 min read",
    category: "Cognitive Enhancement"
  },
  {
    id: "n-2331-anxiety-cognition",
    title: "The Anxiety-Cognition Connection: Why You Can't Be Smart and Stressed at the Same Time",
    description: "How chronic stress impairs cognitive function and the science of restoring mental clarity.",
    slug: "n-2331-anxiety-cognition",
    readTime: "8 min read",
    category: "Brain Health"
  },
  {
    id: "rg-5555-healing-cascade",
    title: "The 4-Step Cascade of Superior Healing: Deconstructing RG-5555",
    description: "How BPC-157, TB-500, KPV, and Larazotide work together for comprehensive injury recovery.",
    slug: "rg-5555-healing-cascade",
    readTime: "8 min read",
    category: "Regenerative Medicine"
  },
  {
    id: "rg-5555-gut-healing",
    title: "Is Your Gut Sabotaging Your Injury Recovery? The Leaky Gut-Inflammation Connection",
    description: "How gut permeability affects systemic inflammation and the role of Larazotide in healing.",
    slug: "rg-5555-gut-healing",
    readTime: "9 min read",
    category: "Gut Health"
  },
  {
    id: "m-51-push-pull",
    title: "The Push-Pull Effect: How M-51 Burns Fat from Two Directions",
    description: "How 5-Amino-1MQ and SLU-PP-332 work synergistically to inhibit fat storage and activate fat burning.",
    slug: "m-51-push-pull",
    readTime: "8 min read",
    category: "Weight Management"
  },
  {
    id: "m-51-nnmt",
    title: "The Hidden Enzyme That's Keeping You Fat: Understanding NNMT",
    description: "How NNMT inhibition with 5-Amino-1MQ can unlock stubborn fat loss and improve metabolic health.",
    slug: "m-51-nnmt",
    readTime: "7 min read",
    category: "Metabolism"
  },
  {
    id: "m-2531-cellular-engines",
    title: "The Signal and the Fuel: How M-2531 Rejuvenates Your Cellular Engines",
    description: "How MOTS-c, NAD+, and mitochondrial support compounds restore cellular energy production.",
    slug: "m-2531-cellular-engines",
    readTime: "9 min read",
    category: "Longevity"
  },
  {
    id: "m-2531-exercise-paradox",
    title: "The Exercise Paradox: Are You Working Out But Still Feeling Old?",
    description: "Why exercise alone isn't enough and how mitochondrial peptides can restore youthful energy.",
    slug: "m-2531-exercise-paradox",
    readTime: "8 min read",
    category: "Fitness"
  },
  {
    id: "w-1175-exercise-pill",
    title: "The 'Exercise in a Pill' Phenomenon: Deconstructing the W-1175 Protocol",
    description: "How SLU-PP-332 and Orforglipron combine exercise mimetics with GLP-1 for metabolic optimization.",
    slug: "w-1175-exercise-pill",
    readTime: "8 min read",
    category: "Weight Management"
  },
  {
    id: "w-1175-oral-glp1",
    title: "The End of Injections? Why Oral GLP-1s are the Future of Weight Loss",
    description: "How Orforglipron and other oral GLP-1 agonists are revolutionizing weight management therapy.",
    slug: "w-1175-oral-glp1",
    readTime: "7 min read",
    category: "Weight Management"
  }
];

export default function Blog() {
  usePageTitle("Blog - Peptide Therapy Insights");
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

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
    </div>
  );
}
