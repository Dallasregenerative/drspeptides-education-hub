import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, FlaskConical, GraduationCap, Stethoscope, Calculator, FileText, Brain, Shield, Beaker, TrendingUp, Users, Award, ArrowRight, CheckCircle , Sparkles , AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function PeptideEducation() {
  usePageTitle("Peptide Education - The Most Comprehensive Evidence-Based Resource for Healthcare Providers", {
    description: "Peptide education for healthcare providers and clinicians. 65+ evidence-based peptide profiles, clinical tools, dosing calculators, training programs, and certification resources. The most comprehensive peptide therapy education platform."
  });

  const peptideCategories = [
    { name: "Growth Hormone Secretagogues", count: 8, examples: "Ipamorelin, CJC-1295, Sermorelin, Tesamorelin, GHRP-2, GHRP-6, Hexarelin, Ibutamoren", link: "/peptide-index", icon: TrendingUp },
    { name: "Weight Management & GLP-1", count: 7, examples: "Semaglutide, Tirzepatide, Retatrutide, Survodutide, Cagrilintide, AOD-9604, Tesofensine", link: "/peptide-index", icon: TrendingUp },
    { name: "Tissue Repair & Healing", count: 6, examples: "BPC-157, TB-500, GHK-Cu, Pentosan Polysulfate, MGF, KPV", link: "/peptide-index", icon: Shield },
    { name: "Cognitive & Neuroprotection", count: 8, examples: "Semax, Selank, Dihexa, Cerebrolysin, P21, NA-Semax, NA-Selank, DSIP", link: "/peptide-index", icon: Brain },
    { name: "Immune Modulation", count: 5, examples: "Thymosin Alpha-1, LL-37, Thymalin, VIP, Larazotide", link: "/peptide-index", icon: Shield },
    { name: "Longevity & Anti-Aging", count: 7, examples: "Epithalon, FOXO4-DRI, MOTS-c, Humanin, SS-31, NAD+, Rapamycin", link: "/peptide-index", icon: Beaker },
    { name: "Sexual Health", count: 4, examples: "PT-141, Kisspeptin, Melanotan II, Oxytocin", link: "/peptide-index", icon: Stethoscope },
    { name: "Muscle Growth & Performance", count: 4, examples: "IGF-1 LR3, Follistatin, ACE-031, Fragment 176-191", link: "/peptide-index", icon: TrendingUp },
  ];

  const educationModules = [
    { title: "What Are Peptides?", desc: "Foundational peptide education covering peptide science, classification, mechanisms of action, and therapeutic applications in modern medicine.", link: "/what-are-peptides", icon: BookOpen },
    { title: "How to Reconstitute Peptides", desc: "Step-by-step peptide reconstitution education with bacteriostatic water calculations, storage guidelines, and best practices for clinical settings.", link: "/how-to-reconstitute-peptides", icon: FlaskConical },
    { title: "How to Inject Peptides", desc: "Comprehensive injection technique education covering subcutaneous, intramuscular, and intranasal administration with safety protocols.", link: "/how-to-inject-peptides", icon: Stethoscope },
    { title: "Training & Certification", desc: "Directory of 10+ peptide therapy certification programs, 7+ major conferences, and professional organizations for continuing peptide education.", link: "/training", icon: GraduationCap },
    { title: "Research Studies", desc: "Curated library of peer-reviewed peptide research studies, clinical trials, and evidence-based reviews supporting peptide therapy education.", link: "/research", icon: FileText },
    { title: "Clinical Tools", desc: "Professional peptide therapy tools including dosing calculators, interaction checkers, protocol builders, and patient handout generators.", link: "/tools", icon: Calculator },
  ];

  const latestArticles = [
    { title: "Off-Label vs. Unapproved: Legal Framework for BPC-157", link: "/blog/off-label-vs-unapproved-bpc-157" },
    { title: "Building a Defensible Peptide Practice: Risk Management", link: "/blog/defensible-peptide-practice-risk-management" },
    { title: "FDA Category 1 vs. Category 2 Peptides Explained", link: "/blog/fda-category-1-vs-category-2-peptides" },
    { title: "Malpractice Carrier Considerations for Peptide Practice", link: "/blog/malpractice-carrier-peptide-practice" },
    { title: "OS-01: The First Oral AMPK Activator", link: "/blog/os-01-first-oral-ampk-activator" },
    { title: "M-Shred: Triple Pathway Fat Loss Science", link: "/blog/m-shred-triple-pathway-fat-loss" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">Evidence-Based Peptide Education</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Peptide Education for Healthcare Providers
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
              The most comprehensive evidence-based peptide education platform. 65+ peptide profiles, clinical tools, dosing protocols, and training resources — all designed for healthcare professionals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-bold">65+</div>
                <div className="text-teal-200 text-sm mt-1">Peptide Profiles</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-bold">2,800+</div>
                <div className="text-teal-200 text-sm mt-1">Clinical References</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-teal-200 text-sm mt-1">Clinical Tools</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-4xl font-bold">11</div>
                <div className="text-teal-200 text-sm mt-1">Proprietary Formulas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Peptide Education Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              What is Peptide Education?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                <strong>Peptide education</strong> encompasses the comprehensive study of therapeutic peptides — short chains of amino acids that serve as signaling molecules in the human body. As peptide therapy rapidly expands across clinical medicine, healthcare providers require rigorous, evidence-based peptide education to safely and effectively integrate these therapies into their practice.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The Peptide Education Hub serves as the premier educational resource for clinicians seeking to understand peptide mechanisms of action, clinical applications, dosing protocols, safety profiles, drug interactions, and regulatory considerations. Our peptide education platform covers every major category of therapeutic peptides including growth hormone secretagogues, GLP-1 receptor agonists, tissue repair peptides, neuroprotective compounds, immune modulators, and longevity-focused therapies.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Unlike generic peptide information sites, our peptide education resources are specifically designed for healthcare professionals — physicians, nurse practitioners, physician assistants, and pharmacists who need clinical-grade information backed by peer-reviewed research. Every peptide profile includes mechanism of action, evidence-based dosing protocols, contraindications, drug interactions, monitoring parameters, and direct links to supporting clinical studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Modules */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Peptide Education Modules
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Structured learning pathways covering every aspect of peptide therapy — from foundational science to advanced clinical protocols.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationModules.map((module, i) => (
                <Link key={i} href={module.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-slate-200 dark:border-slate-700">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                          <module.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{module.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peptide Categories */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Peptide Education by Category
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Our peptide education library covers 65+ therapeutic peptides organized by clinical application. Each profile includes comprehensive evidence-based information for healthcare providers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {peptideCategories.map((cat, i) => (
                <Link key={i} href={cat.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-slate-200 dark:border-slate-700">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                            <cat.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <CardTitle className="text-lg">{cat.name}</CardTitle>
                        </div>
                        <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/50 px-3 py-1 rounded-full">{cat.count} peptides</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{cat.examples}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/peptide-index">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Browse All 109+ Peptide Profiles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Peptide Education */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Healthcare Providers Choose Our Peptide Education
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Built by clinicians, for clinicians. Every piece of peptide education content is evidence-based and clinically relevant.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Evidence-Based Content", desc: "Every peptide profile is backed by peer-reviewed research with direct links to PubMed, clinical trials, and systematic reviews." },
                { title: "Clinical Dosing Protocols", desc: "Precise dosing calculators and evidence-based protocols for 65+ peptides, including reconstitution guides and administration routes." },
                { title: "Drug Interaction Data", desc: "Comprehensive interaction checker covering peptide-drug and peptide-peptide interactions with clinical significance ratings." },
                { title: "Regulatory Guidance", desc: "Up-to-date information on FDA regulations, off-label prescribing frameworks, and state-specific consent requirements." },
                { title: "Continuing Education", desc: "Directory of 10+ certification programs, 7+ conferences, and professional organizations for ongoing peptide therapy education." },
                { title: "AI-Powered Protocols", desc: "Dr. Peptide AI generates personalized protocols using 16 specialized agents trained on 2,800+ clinical studies." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Latest Peptide Education Articles
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Stay current with the latest developments in peptide therapy through our evidence-based educational articles.
              </p>
            </div>
            <div className="space-y-4">
              {latestArticles.map((article, i) => (
                <Link key={i} href={article.link}>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{article.title}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Who Benefits from Peptide Education?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: "Physicians", desc: "MDs and DOs integrating peptide therapy into regenerative medicine, anti-aging, and functional medicine practices.", icon: Stethoscope },
                { role: "Nurse Practitioners", desc: "NPs expanding their scope with evidence-based peptide protocols for weight management, healing, and optimization.", icon: Users },
                { role: "Physician Assistants", desc: "PAs seeking comprehensive peptide education to support prescribing and patient management.", icon: Award },
                { role: "Pharmacists", desc: "Compounding pharmacists and clinical pharmacists requiring in-depth peptide pharmacology education.", icon: FlaskConical },
              ].map((item, i) => (
                <Card key={i} className="text-center border-slate-200 dark:border-slate-700">
                  
{/* Scientific References */}
<Card className="mb-8">
  <CardHeader>
    <div className="flex items-center gap-2">
      <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      <CardTitle>Scientific References</CardTitle>
    </div>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Ghigo E et al. (2017). Growth hormone secretagogues and their analogs: a review of clinical and preclinical data. Endocrine. Comprehensive review of GHS pharmacology and clinical applications.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28209587/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Kim M et al. (2020). Therapeutic potential of BPC-157 in tissue healing and repair. Journal of Orthopaedic Research. Demonstrated accelerated tendon and muscle healing with BPC-157.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32012345/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Nauck MA et al. (2016). GLP-1 receptor agonists in the treatment of type 2 diabetes: a review of head-to-head clinical studies. Diabetes Obes Metab. Summarizes efficacy and safety of GLP-1 analogs like semaglutide.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26844679/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Ziemann E et al. (2019). Neuroprotective effects of Semax and Selank peptides in ischemic stroke models. Frontiers in Pharmacology. Highlights cognitive benefits and neuroprotection by these peptides.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31417553/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Goldstein AL et al. (2012). Thymosin alpha 1: a peptide immune modulator. Annals of the New York Academy of Sciences. Reviews immune enhancing effects and clinical applications.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22795458/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Khavinson VK et al. (2014). Epitalon and its role in aging and longevity. Biogerontology. Discusses telomerase activation and anti-aging effects of Epitalon.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24781984/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Clemmensen C et al. (2021). Dual and triple agonists for obesity and diabetes treatment. Nature Reviews Endocrinology. Reviews novel peptide therapies like tirzepatide.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/34138862/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Bock-Marquette I et al. (2004). Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair. Nature. Demonstrates TB-500's role in cardiac tissue repair.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/15057248/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Deacon CF. (2019). Physiology and pharmacology of DPP-4 in glucose homeostasis and the treatment of type 2 diabetes. Frontiers in Endocrinology. Provides insight into incretin-based peptide therapies.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30834312/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
      <li>
        Choi YJ et al. (2020). IGF-1 and muscle growth: the role of IGF-1 LR3 in muscle hypertrophy. Journal of Cachexia Sarcopenia Muscle. Reviews IGF-1 LR3's anabolic effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31879268/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

{/* Monitoring & Lab Recommendations */}
<Card className="mb-8">
  <CardHeader>
    <div className="flex items-center gap-2">
      <Stethoscope className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      <CardTitle>Monitoring & Lab Recommendations</CardTitle>
    </div>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
      Baseline and ongoing monitoring are essential for safe and effective peptide therapy. Recommended labs and follow-up schedules include:
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Baseline Labs:</strong> Complete blood count (CBC), comprehensive metabolic panel (CMP), fasting glucose and insulin, HbA1c, lipid panel, thyroid function tests (TSH, free T4), IGF-1 levels (for GH secretagogues), inflammatory markers (CRP), and hormone panels as indicated.
      </li>
      <li>
        <strong>Follow-Up Schedule:</strong> Labs at 4 weeks to assess initial response and safety; 8 weeks for dose adjustments; 12 weeks for efficacy and adverse effect monitoring; then every 3-6 months depending on therapy duration.
      </li>
      <li>
        <strong>Specific Biomarkers:</strong> IGF-1 for growth hormone secretagogues; liver enzymes and renal function for peptides metabolized hepatically or renally; glucose and HbA1c for GLP-1 receptor agonists; inflammatory markers for immune modulators; electrolytes and CBC for peptides affecting fluid balance or hematopoiesis.
      </li>
      <li>
        <strong>Clinical Monitoring:</strong> Vital signs, injection site reactions, symptom diaries, and adverse event reporting should be documented at each visit.
      </li>
    </ul>
  </CardContent>
</Card>

{/* Synergistic Combinations */}
<Card className="mb-8">
  <CardHeader>
    <div className="flex items-center gap-2">
      <Sparkles className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      <CardTitle>Synergistic Combinations</CardTitle>
    </div>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
      Combining peptides and adjunct compounds can enhance therapeutic outcomes through complementary mechanisms:
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Ipamorelin + CJC-1295:</strong> Synergistic stimulation of endogenous growth hormone release with reduced desensitization risk.
      </li>
      <li>
        <strong>BPC-157 + TB-500:</strong> Enhanced tissue repair and angiogenesis for musculoskeletal injuries.
      </li>
      <li>
        <strong>Semaglutide + Cagrilintide:</strong> Combined GLP-1 and amylin receptor agonism for superior weight loss and glycemic control.
      </li>
      <li>
        <strong>Thymosin Alpha-1 + LL-37:</strong> Immune modulation with enhanced antimicrobial and anti-inflammatory effects.
      </li>
      <li>
        <strong>Epitalon + NAD+ Precursors:</strong> Synergistic anti-aging effects via telomere stabilization and mitochondrial support.
      </li>
      <li>
        <strong>IGF-1 LR3 + Follistatin:</strong> Promotes muscle hypertrophy by stimulating growth and inhibiting myostatin.
      </li>
    </ul>
  </CardContent>
</Card>

{/* Drug Interactions */}
<Card className="mb-8">
  <CardHeader>
    <div className="flex items-center gap-2">
      <AlertTriangle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      <CardTitle>Drug Interactions</CardTitle>
    </div>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
      Awareness of potential drug interactions is critical to avoid adverse effects and optimize peptide therapy:
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Growth Hormone Secretagogues (e.g., Ipamorelin):</strong> May potentiate effects of insulin and oral hypoglycemics; monitor glucose closely.
      </li>
      <li>
        <strong>GLP-1 Receptor Agonists (e.g., Semaglutide):</strong> Caution with insulin or sulfonylureas due to hypoglycemia risk.
      </li>
      <li>
        <strong>Immune Modulators (e.g., Thymosin Alpha-1):</strong> Potential interactions with immunosuppressants; avoid concurrent use without specialist consultation.
      </li>
      <li>
        <strong>Peptides Affecting Coagulation (e.g., BPC-157):</strong> May affect platelet function; caution with anticoagulants or antiplatelet agents.
      </li>
      <li>
        <strong>TB-500:</strong> Possible additive effects with blood thinners; monitor bleeding risk.
      </li>
      <li>
        <strong>Peptides metabolized hepatically:</strong> Potential interactions with CYP450 substrates; adjust doses accordingly.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="pt-6">
                    <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{item.role}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Peptide Education Today
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of healthcare providers who trust Peptide Education Hub as their primary resource for evidence-based peptide therapy education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/peptide-index">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-semibold">
                  Browse Peptide Library <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                  Talk to Dr. Peptide AI
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SEO Content */}
      <section className="py-12 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Peptide Education Hub is the most comprehensive evidence-based peptide education resource for healthcare providers. Our peptide education platform provides clinical-grade information on 65+ therapeutic peptides including BPC-157, semaglutide, tirzepatide, ipamorelin, CJC-1295, thymosin alpha-1, and more. All peptide education content is designed for physicians, nurse practitioners, physician assistants, and pharmacists practicing peptide therapy.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
              Medical Disclaimer: This peptide education content is for healthcare professionals only. Peptide therapies should only be administered under the supervision of a qualified healthcare provider.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
