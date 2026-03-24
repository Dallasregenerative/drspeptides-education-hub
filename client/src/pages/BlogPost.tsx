import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import { ArrowLeft, ExternalLink, Microscope, Twitter, Linkedin, Facebook, Mail, Link2, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/Navigation";
import { Streamdown } from 'streamdown';

const blogPostMapping: Record<string, { file: string; title: string; description?: string }> = {
  "getting-started": { file: "blog_post_1.md", title: "How to Start a Peptide Therapy Practice in 2026", description: "A comprehensive guide for healthcare providers looking to integrate peptide therapy into their practice." },
  "choosing-supplier": { file: "blog_post_2.md", title: "Choosing a Peptide Supplier: A Provider\'s Checklist", description: "Essential criteria for selecting a reliable peptide supplier for your medical practice." },
  "bpc157-tb500": { file: "blog_post_3.md", title: "BPC-157 vs. TB-500: A Clinical Comparison", description: "An in-depth comparison of two popular healing peptides for clinical applications." },
  "glp1-therapy": { file: "blog_post_4.md", title: "Semaglutide and Tirzepatide: A Provider\'s Guide to GLP-1 Therapy", description: "Comprehensive guide to GLP-1 receptor agonists for weight management." },
  "quality-standards": { file: "blog_post_5.md", title: "Peptide Quality Standards: What Healthcare Providers Need to Know", description: "Understanding quality standards and certifications for medical-grade peptides." },
  "storage-handling": { file: "blog_post_6.md", title: "Peptide Storage and Handling: A Provider\'s Guide to Maintaining Potency", description: "Best practices for storing and handling peptides to maintain efficacy." },
  "practice-roi": { file: "blog_post_7.md", title: "Peptide Therapy ROI: Building a Profitable and Sustainable Practice", description: "Financial considerations and ROI analysis for peptide therapy practices." },
  "thymosin-alpha-1": { file: "blog_post_14.md", title: "Thymosin Alpha-1: Evidence-Based Immune Modulation", description: "Clinical applications of Thymosin Alpha-1 for immune system support." },
  "pt-141": { file: "blog_post_9.md", title: "PT-141 (Bremelanotide): Clinical Applications in Sexual Wellness", description: "Understanding PT-141 for sexual health applications in clinical practice." },
  "semax": { file: "blog_post_10.md", title: "Semax: Neuroprotection and Cognitive Enhancement", description: "Evidence-based review of Semax for cognitive and neuroprotective benefits." },
  "tesamorelin": { file: "blog_post_11.md", title: "Tesamorelin: FDA-Approved Therapy for Visceral Adiposity", description: "Clinical guide to Tesamorelin for reducing visceral fat." },
  "melanotan-ii": { file: "blog_post_12.md", title: "Melanotan II: Photoprotection and Aesthetic Applications", description: "Understanding Melanotan II for tanning and aesthetic purposes." },
  "ipamorelin": { file: "blog_post_13.md", title: "Ipamorelin: The Selective Growth Hormone Secretagogue", description: "Comprehensive guide to Ipamorelin for growth hormone optimization." },
  "ghk-cu": { file: "blog_post_15.md", title: "GHK-Cu: The Copper Peptide Revolutionizing Regenerative Medicine", description: "Exploring GHK-Cu applications in wound healing and skin rejuvenation." },
  "implementing-peptide-therapy": { file: "blog_post_6.md", title: "Implementing Peptide Therapy: A Step-by-Step Clinical Guide", description: "Practical implementation guide for peptide therapy in clinical settings." },
  "peptideprotocols-ai": { file: "blog_post_16.md", title: "PeptideProtocols.ai: AI-Powered Protocol Design for Healthcare Providers", description: "How AI is transforming peptide protocol design for practitioners." },
  "founder-story": { file: "blog_founder_story.md", title: "From Inventor to Innovator: The Visionary Behind Pepedhub.com", description: "Discover the journey of Austin Crowder, a serial entrepreneur, inventor, and educator who created the comprehensive peptide education platform." },
  "training-practitioners": { file: "blog_training_practitioners.md", title: "The Architect of Modern Peptide Education: Training the Next Generation", description: "How Austin Crowder is training hundreds of regenerative medicine practitioners at TheDRC.life." },
  "dr-peptide-ai": { file: "blog_dr_peptide_ai.md", title: "Meet Dr. Peptide: The AI-Powered Future of Practitioner Training", description: "Introducing Dr. Peptide and PeptideProtocols.ai - the revolutionary AI platform for peptide therapy." },
  "neuro-series-formulas": { file: "blog_neuro_series_formulas.md", title: "The Mind of the Machine: How Dr. Peptide and Expert Formulators Created the Neuro Series", description: "Discover how Dr. Peptide, the world\'s first clinical assistance tool for peptides, worked with doctors, pharmacists, and formulators to design the revolutionary Neuro Series." },
  "regen-metabolic-formulas": { file: "blog_regen_metabolic_formulas.md", title: "The Body Electric: How Dr. Peptide and Expert Formulators Created the Regenerative and Metabolic Series", description: "How a team of doctors, pharmacists, and formulators used Dr. Peptide to create intelligent formulas targeting healing, recovery, and energy production." },
  "ai-formula-design": { file: "blog_ai_formula_design.md", title: "The Ghost in the Machine: How Dr. Peptide is Revolutionizing Formula Design", description: "An inside look at how Dr. Peptide, the world\'s first clinical assistance tool for peptides, collaborates with human experts to create groundbreaking formulas." },
  "peptide-therapy-weight-loss": { file: "blog_peptide_weight_loss.md", title: "Peptide Therapy for Weight Loss: A Clinician\'s Guide to the Metabolic Revolution", description: "Comprehensive guide to using Semaglutide, Tirzepatide, and AOD-9604 for weight management." },
  "anti-aging-peptides": { file: "blog_anti_aging_peptides.md", title: "The Science of Longevity: A Clinician\'s Guide to Anti-Aging Peptides", description: "Explore Epithalon, MOTS-c, GHK-Cu, and Sermorelin for targeting the hallmarks of aging." },
  "peptides-muscle-growth": { file: "blog_peptides_muscle_growth.md", title: "Building the Body: A Clinician\'s Guide to Peptides for Muscle Growth and Performance", description: "Clinical overview of CJC-1295/Ipamorelin, Tesamorelin, MK-677, and IGF-1 LR3 for muscle growth." },
  "peptides-injury-recovery": { file: "blog_peptides_injury_recovery.md", title: "The Healing Code: A Clinician\'s Guide to Peptides for Injury Recovery", description: "How BPC-157, TB-500, and GHK-Cu accelerate healing of muscle, tendon, ligament, and bone injuries." },
  "peptides-cognitive-enhancement": { file: "blog_peptides_cognitive.md", title: "The Limitless Mind: A Clinician\'s Guide to Peptides for Cognitive Enhancement", description: "Explore Semax, Selank, Dihexa, and Cerebrolysin for brain health and cognitive performance." },
  "peptides-immune-support": { file: "blog_peptides_immune.md", title: "The Resilient Body: A Clinician\'s Guide to Peptides for Immune Support", description: "How Thymosin Alpha-1, LL-37, and BPC-157 modulate and optimize immune function." },
  "peptides-sexual-health": { file: "blog_peptides_sexual_health.md", title: "The Spark of Life: A Clinician\'s Guide to Peptides for Sexual Health", description: "Clinical guide to PT-141, Melanotan II, and Kisspeptin-10 for treating sexual dysfunction." },
  "peptides-sleep-optimization": { file: "blog_peptides_sleep.md", title: "The Restorative Power of Sleep: A Clinician\'s Guide to Peptides for Sleep Optimization", description: "How DSIP, Epithalon, and CJC-1295/Ipamorelin restore natural sleep architecture." },
  "future-peptide-therapy": { file: "blog_future_peptide_therapy.md", title: "The Next Wave: A Clinician\'s Guide to the Future of Peptide Therapy", description: "Explore oral peptides, multi-receptor agonists, and the role of AI in peptide discovery." },
  "peptide-practice-business": { file: "blog_peptide_practice_business.md", title: "The Peptide Practice: A Clinician\'s Guide to the Business of Peptide Therapy", description: "Legal considerations, sourcing, pricing strategies, and marketing for peptide therapy practices." },
  // NEW SEO-Targeted Blog Posts - February 2026
  "reconstitution-guide": { file: "blog_reconstitution_guide.md", title: "The Comprehensive Guide to Peptide Reconstitution: A Healthcare Provider\'s Reference", description: "Step-by-step protocols for reconstituting lyophilized peptides, dosage calculations, and storage requirements." },
  "503a-vs-503b": { file: "blog_503a_vs_503b.md", title: "503A vs 503B Compounding Pharmacies: What Peptide Therapy Providers Need to Know in 2026", description: "Understanding the critical differences between 503A and 503B compounding pharmacies for peptide sourcing." },
  "fda-peptide-regulations-2026": { file: "blog_fda_peptide_regulations_2026.md", title: "FDA Peptide Regulations in 2026: What Healthcare Providers Must Know", description: "Comprehensive overview of the current FDA regulatory framework for peptide therapy." },
  "peptides-gut-health": { file: "blog_peptides_gut_health.md", title: "Peptides for Gut Health: A Clinician\'s Guide to Healing the Gastrointestinal System", description: "How BPC-157, KPV, and Larazotide target mucosal healing and gut restoration." },
  // Formula Blog Posts - Dr.Peptide Designed Formulas
  "n-259-sleep-science": { file: "N-259-Blog-1.md", title: "The Science of Superior Sleep: Deconstructing the N-259 Protocol", description: "How Apigenin, Magnesium Glycinate, L-Theanine, and physiological melatonin work synergistically for optimal sleep architecture." },
  "n-259-beyond-melatonin": { file: "N-259-Blog-2.md", title: "Beyond Melatonin: Why Your Sleep Protocol is Missing 3 Key Ingredients", description: "Understanding the multi-pathway approach to sleep: GABA support, neuromuscular relaxation, and alpha-wave promotion." },
  "n-69-neuroscience-desire": { file: "N-69-Blog-1.md", title: "The Neuroscience of Desire: How N-69 Reboots the Brain-Body Connection for Ultimate Intimacy", description: "A deep dive into the 5-pathway approach of NALT, Kisspeptin, PT-141, Oxytocin, and VIP for sexual wellness." },
  "n-69-brain-libido": { file: "N-69-Blog-2.md", title: "Is Your Brain the Reason You\'re Not in the Mood? The Truth About Modern Libido", description: "How stress, dopamine depletion, and hormonal imbalances affect desire, and the science of restoring it." },
  "n-111-holy-trinity": { file: "N-111-Blog-1.md", title: "The Holy Trinity of Nootropics: Why N-111 is a Game-Changer for Brain Health", description: "How J147, Dihexa, and Noopept work together for neurogenesis, memory enhancement, and neuroprotection." },
  "n-111-neurogenesis": { file: "N-111-Blog-2.md", title: "Are You Building a Better Brain, or Just Renting It? The Difference Between Nootropics and Neurogenesis", description: "Why true cognitive enhancement requires growing new neurons and synapses, not just temporary stimulation." },
  "n-5550-brain-body": { file: "N-5550-Blog-1.md", title: "The Ultimate Brain-Body Upgrade: How N-5550 Tackles Cognition and Metabolism Simultaneously", description: "Dihexa, Tesofensine, and Methylene Blue for addressing brain fog and metabolic dysfunction together." },
  "n-5550-brain-fat": { file: "N-5550-Blog-2.md", title: "The Brain-Fat Connection: Why Your Weight Loss Stall is All in Your Head", description: "How dopamine depletion and brain chemistry affect appetite, metabolism, and weight loss resistance." },
  "n-2331-cognitive-stack": { file: "N-2331-Blog-1.md", title: "The Ultimate Cognitive Enhancement Stack: Deconstructing the 4 Pillars of N-2331", description: "How Dihexa, Selank, Semax, and NAD+ work synergistically for comprehensive brain optimization." },
  "n-2331-anxiety-cognition": { file: "N-2331-Blog-2.md", title: "The Anxiety-Cognition Connection: Why You Can\'t Be Smart and Stressed at the Same Time", description: "How chronic stress impairs cognitive function and the science of restoring mental clarity." },
  "rg-5555-healing-cascade": { file: "RG-5555-Blog-1.md", title: "The 4-Step Cascade of Superior Healing: Deconstructing RG-5555", description: "How BPC-157, TB-500, KPV, and Larazotide work together for comprehensive injury recovery." },
  "rg-5555-gut-healing": { file: "RG-5555-Blog-2.md", title: "Is Your Gut Sabotaging Your Injury Recovery? The Leaky Gut-Inflammation Connection", description: "How gut permeability affects systemic inflammation and the role of Larazotide in healing." },
  "m-51-push-pull": { file: "M-51-Blog-1.md", title: "The Push-Pull Effect: How M-51 Burns Fat from Two Directions", description: "How 5-Amino-1MQ and SLU-PP-332 work synergistically to inhibit fat storage and activate fat burning." },
  "m-51-nnmt": { file: "M-51-Blog-2.md", title: "The Hidden Enzyme That\'s Keeping You Fat: Understanding NNMT", description: "How NNMT inhibition with 5-Amino-1MQ can unlock stubborn fat loss and improve metabolic health." },
  "m-2531-cellular-engines": { file: "M-2531-Blog-1.md", title: "The Signal and the Fuel: How M-2531 Rejuvenates Your Cellular Engines", description: "How MOTS-c, NAD+, and mitochondrial support compounds restore cellular energy production." },
  "m-2531-exercise-paradox": { file: "M-2531-Blog-2.md", title: "The Exercise Paradox: Are You Working Out But Still Feeling Old?", description: "Why exercise alone isn\'t enough and how mitochondrial peptides can restore youthful energy." },
  "w-1175-exercise-pill": { file: "W-1175-Blog-1.md", title: "The \'Exercise in a Pill\' Phenomenon: Deconstructing the W-1175 Protocol", description: "How SLU-PP-332 and Orforglipron combine exercise mimetics with GLP-1 for metabolic optimization." },
  "malpractice-carrier-peptide-practice": { file: "malpractice-carrier-peptide-practice.md", title: "Why Your Malpractice Carrier Needs to Know About Your Peptide Practice", description: "A risk management guide on malpractice coverage, carrier communication, and protective documentation for peptide practitioners." },
  "peptide-therapy-billing-coding": { file: "PeptideTherapyBillingAndCodingACliniciansGuidetoReimbursement.md", title: "Peptide Therapy Billing & Coding: A Clinician's Guide to Reimbursement", description: "A comprehensive guide for healthcare providers on navigating the complexities of billing and coding for peptide therapy to ensure proper reimbursement." },
  "integrating-peptide-therapy-practice": { file: "IntegratingPeptideTherapyintoYourPracticeAStepbyStepImplementationGuide.md", title: "Integrating Peptide Therapy into Your Practice: A Step-by-Step Implementation Guide", description: "A practical, step-by-step guide for clinicians on how to successfully integrate peptide therapy into their existing practice, from legal and logistical considerations to patient marketing." },
  "semaglutide-bpc157-case-study": { file: "AdvancedCaseStudyCombiningSemaglutideandBPC157forOptimizedWeightLossandGutHealth.md", title: "Advanced Case Study: Combining Semaglutide and BPC-157 for Optimized Weight Loss and Gut Health", description: "An in-depth clinical case study exploring the synergistic effects of combining Semaglutide and BPC-157 for enhanced weight loss outcomes and improved gastrointestinal health." },
  // Retatrutide Phase 3 - March 2026
  "retatrutide-phase-3-results": { file: "blog_retatrutide_phase3.md", title: "Retatrutide Phase 3 Results: Is This the Last GLP-1 Drug We Will Ever Need?", description: "Analysis of retatrutide Phase 3 TRANSCEND-T2D-1 data showing 28.7% weight loss, triple receptor mechanism, lean mass concerns, and the new dysesthesia safety signal." }
};

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const post = slug ? blogPostMapping[slug] : undefined;

  useEffect(() => {
    if (post) {
      fetch(`/${post.file}`)
        .then((response) => response.text())
        .then((text) => setContent(text));
    }
  }, [post]);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const shareUrl = `https://pepedhub.com/blog/${slug}`;
  const shareTitle = post.title;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight ananda-bologna-font-family-regular ananda-bologna-font-family-regular-bold ananda-bologna-font-family-regular-italic ananda-bologna-font-family-regular-light ananda-bologna-font-family-regular-medium ananda-bologna-font-family-regular-thin ananda-bologna-font-family-regular-extralight ananda-bologna-font-family-regular-semibold ananda-bologna-font-family-regular-extrabold ananda-bologna-font-family-regular-black">{post.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{post.description}</p>

          {/* Share and Print Buttons */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-slate-500">Share:</span>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-8 w-8"><Twitter className="h-4 w-4" /></Button>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-8 w-8"><Linkedin className="h-4 w-4" /></Button>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-8 w-8"><Facebook className="h-4 w-4" /></Button>
              </a>
              <a href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}>
                <Button variant="outline" size="icon" className="h-8 w-8"><Mail className="h-4 w-4" /></Button>
              </a>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => navigator.clipboard.writeText(shareUrl)}><Link2 className="h-4 w-4" /></Button>
            </div>
            <PrintButton />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mx-auto ananda-bologna-font-family-regular ananda-bologna-font-family-regular-bold ananda-bologna-font-family-regular-italic ananda-bologna-font-family-regular-light ananda-bologna-font-family-regular-medium ananda-bologna-font-family-regular-thin ananda-bologna-font-family-regular-extralight ananda-bologna-font-family-regular-semibold ananda-bologna-font-family-regular-extrabold ananda-bologna-font-family-regular-black">
            <Streamdown>{content}</Streamdown>
          </article>

          {/* Final CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white shadow-lg">
            <div className="flex items-center mb-4">
              <Microscope className="h-10 w-10 mr-4 text-teal-200" />
              <h3 className="text-2xl font-bold">Ready to Implement Peptide Therapy?</h3>
            </div>
            <p className="text-lg text-teal-100 mb-6">Dr. Peptide AI generates personalized protocols using 16 specialized AI agents trained on 2,800+ clinical studies. Get evidence-based, clinically-relevant peptide protocols in seconds.</p>
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2026 PepEdHub.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
