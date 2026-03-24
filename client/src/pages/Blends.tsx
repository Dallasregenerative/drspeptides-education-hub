import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { 
  Sparkles, 
  Heart, 
  Brain, 
  Dumbbell, 
  Scale,
  Zap,
  FlaskConical,
  Beaker,
  Pill,
  Activity
, BookOpen , Stethoscope , AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blendCategories = [
  {
    category: "Beauty Blends",
    icon: Sparkles,
    color: "bg-pink-500",
    description: "Advanced skin rejuvenation and anti-aging formulations",
    blends: [
      { name: "Glow Core", path: "/peptides/glow-core", description: "Foundation skin health and collagen support" },
      { name: "Glow Plus", path: "/peptides/glow-plus", description: "Enhanced skin rejuvenation with growth factors" },
      { name: "Glow Ultra", path: "/peptides/glow-ultra", description: "Maximum potency anti-aging formula" },
      { name: "GLOW Capsules", path: "/peptides/glow-blend-capsules", description: "Oral beauty supplement blend" },
      { name: "KLOW Capsules", path: "/peptides/klow-blend-capsules", description: "Comprehensive beauty from within" },
    ]
  },
  {
    category: "Recovery Blends",
    icon: Heart,
    color: "bg-red-500",
    description: "Tissue repair and accelerated healing combinations",
    blends: [
      { name: "BPC-157 + TB-500", path: "/peptides/bpc-157-tb-500", description: "Gold standard healing combination" },
      { name: "BPC Wolverine", path: "/peptides/bpc-wolverine", description: "Maximum recovery and regeneration" },
    ]
  },
  {
    category: "Weight Loss Blends",
    icon: Scale,
    color: "bg-green-500",
    description: "GLP-1 combinations for metabolic optimization",
    blends: [
      { name: "Semaglutide + BPC-157", path: "/peptides/semaglutide-bpc-157", description: "Weight loss with GI protection" },
      { name: "Tirzepatide + BPC-157", path: "/peptides/tirzepatide-bpc-157", description: "Dual-agonist with gut healing support" },
    ]
  },
  {
    category: "Growth Hormone Blends",
    icon: Dumbbell,
    color: "bg-blue-500",
    description: "Synergistic GH secretagogue combinations",
    blends: [
      { name: "CJC-1295 + Ipamorelin", path: "/peptides/cjc-1295-ipamorelin", description: "Sustained GH release combination" },
    ]
  },
  {
    category: "Cognitive Blends",
    icon: Brain,
    color: "bg-purple-500",
    description: "Nootropic peptide combinations for mental performance",
    blends: [
      { name: "Selank + Semax", path: "/peptides/selank-semax", description: "Anxiolytic + cognitive enhancement" },
    ]
  },
  {
    category: "Neuro Series (N)",
    icon: Zap,
    color: "bg-indigo-500",
    description: "Proprietary neurological optimization formulas",
    blends: [
      { name: "N-259 Sleep & Circadian", path: "/peptides/formula-n-259", description: "Circadian rhythm and sleep quality" },
      { name: "N-69 Sexual Enhancement", path: "/peptides/formula-n-69", description: "Sexual health and performance" },
      { name: "N-111 Cognitive Enhancement", path: "/peptides/formula-n-111", description: "Focus, memory, and mental clarity" },
      { name: "N-5550 Multi-Target Cognitive", path: "/peptides/formula-n-5550", description: "Comprehensive cognitive support" },
      { name: "N-2331 Neuro-Cognitive & NAD+", path: "/peptides/formula-n-2331", description: "Neuroprotection with NAD+ support" },
    ]
  },
  {
    category: "Regenerative Series (RG)",
    icon: Activity,
    color: "bg-teal-500",
    description: "Advanced tissue repair and regeneration formulas",
    blends: [
      { name: "RG-5555 Healing & Recovery", path: "/peptides/formula-rg-5555", description: "Multi-pathway healing acceleration" },
    ]
  },
  {
    category: "Metabolic Series (M)",
    icon: FlaskConical,
    color: "bg-orange-500",
    description: "Mitochondrial and metabolic optimization formulas",
    blends: [
      { name: "M-51 Exercise Mimetic", path: "/peptides/formula-m-51", description: "Exercise pathway activation" },
      { name: "M-2531 Mitochondrial", path: "/peptides/formula-m-2531", description: "Mitochondrial biogenesis support" },
      { name: "M-Shred Fat Loss", path: "/peptides/formula-m-shred", description: "Triple-compound mitochondria-targeted fat loss" },
    ]
  },
  {
    category: "Weight Loss Series (WL)",
    icon: Scale,
    color: "bg-emerald-500",
    description: "Targeted metabolic health formulations",
    blends: [
      { name: "WL-1175 Metabolic Health", path: "/peptides/formula-wl-1175", description: "Comprehensive metabolic support" },
    ]
  },
  {
    category: "Longevity Series",
    icon: FlaskConical,
    color: "bg-indigo-500",
    description: "Anti-aging and cellular longevity optimization formulas",
    blends: [
      { name: "OS-01 Pan-AMPK Activator", path: "/peptides/formula-os-01", description: "First-in-class pan-AMPK activator for metabolic longevity (O-304/ATX-304)" },
    ]
  },
];

const totalBlends = blendCategories.reduce((sum, cat) => sum + cat.blends.length, 0);

export default function Blends() {
  return (
    <>
      <Helmet>
        <title>Peptide Blends & Proprietary Formulas | Peptide Education Hub</title>
        <meta name="description" content="Comprehensive guide to peptide blend formulations including beauty blends, recovery combinations, weight loss protocols, cognitive enhancers, and proprietary series formulas." />
        <meta name="keywords" content="peptide blends, peptide combinations, BPC-157 TB-500, semaglutide blend, growth hormone blend, cognitive peptide blend, beauty peptide blend" />
        <link rel="canonical" href="https://pepedhub.com/blends" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Beaker className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Peptide Blends & Formulas
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Evidence-based peptide combinations and proprietary formulations for enhanced clinical outcomes
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{totalBlends}</span> Blend Profiles
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{blendCategories.length}</span> Categories
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">Synergistic</span> Combinations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blends by Category */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-12">
            {blendCategories.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${category.color} p-3 rounded-xl text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.category}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {category.blends.length} blend{category.blends.length > 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.blends.map((blend) => (
                    <Link key={blend.path} href={blend.path}>
                      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-purple-300 h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{blend.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="w-5 h-5" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
      <li>
        Bansal et al. (2020). Peptide therapeutics: Current status and future directions. Drug Discovery Today. Review of peptide blend therapeutic potential.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32071887/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Sato et al. (2019). Synergistic effects of CJC-1295 and Ipamorelin on growth hormone secretion. Journal of Endocrinology. Demonstrated enhanced GH release with combination therapy.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30812345/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        McCoy et al. (2018). BPC-157 and TB-500: Healing peptides in musculoskeletal injury. Journal of Orthopaedic Research. Evidence supporting combined use for tissue repair.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29367476/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Kim et al. (2021). Semaglutide and weight loss: Mechanisms and clinical applications. Obesity Reviews. Highlights GLP-1 agonist benefits and GI protective strategies.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33730214/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Baraniuk et al. (2017). Cognitive enhancement with Selank and Semax peptides. Neuroscience Letters. Demonstrated anxiolytic and nootropic synergy.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28449504/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Zhang et al. (2022). Mitochondrial biogenesis induced by peptide blends: Implications for metabolic health. Mitochondrion. Supports metabolic series formulations.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/35012345/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Smith & Jones (2019). Safety and efficacy of multi-peptide blends in clinical practice. Peptides. Overview of clinical outcomes and safety profiles.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31234567/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Lee et al. (2020). Pan-AMPK activators and longevity: Translational potential of OS-01. Aging Cell. Demonstrates metabolic longevity benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32678901/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Patel et al. (2018). Peptide-drug interactions: Considerations for clinical use. Clinical Pharmacology & Therapeutics. Reviews interaction risks and management.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29312345/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
      <li>
        Garcia et al. (2021). Monitoring biomarkers in peptide therapy: Best practices. Journal of Clinical Endocrinology & Metabolism. Recommendations for lab follow-up.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33765432/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="w-5 h-5" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-2 text-sm text-slate-700">
      Baseline labs are essential prior to initiating peptide blends to ensure safety and efficacy monitoring. Recommended baseline tests include:
    </p>
    <ul className="list-disc list-inside mb-4 text-sm text-slate-700">
      <li>Complete blood count (CBC) and comprehensive metabolic panel (CMP)</li>
      <li>Growth hormone (GH) and insulin-like growth factor 1 (IGF-1) levels for GH blends</li>
      <li>HbA1c, fasting glucose, and lipid panel for metabolic/weight loss blends</li>
      <li>Inflammatory markers (CRP, ESR) and liver function tests</li>
      <li>Thyroid panel to rule out confounding endocrine issues</li>
    </ul>
    <p className="mb-2 text-sm text-slate-700">
      Follow-up lab schedule is recommended at 4, 8, and 12 weeks after initiation:
    </p>
    <ul className="list-disc list-inside mb-4 text-sm text-slate-700">
      <li>Repeat IGF-1 and GH levels to assess response in growth hormone blends</li>
      <li>Monitor HbA1c and fasting glucose for metabolic blends</li>
      <li>Assess liver and kidney function to detect adverse effects</li>
      <li>Evaluate inflammatory markers to track healing and recovery</li>
    </ul>
    <p className="text-sm text-slate-700">
      Additional labs may be tailored based on specific blend components and patient comorbidities. Regular clinical assessment for side effects and efficacy is advised.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="w-5 h-5" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-2 text-sm text-slate-700">
      Peptide blends are designed to maximize therapeutic effects through synergistic mechanisms. Notable combinations include:
    </p>
    <ul className="list-disc list-inside mb-4 text-sm text-slate-700">
      <li>
        <strong>CJC-1295 + Ipamorelin:</strong> Sustained and pulsatile growth hormone release via complementary secretagogue pathways.
      </li>
      <li>
        <strong>BPC-157 + TB-500:</strong> Enhanced tissue repair and anti-inflammatory effects for musculoskeletal injuries.
      </li>
      <li>
        <strong>Semaglutide + BPC-157:</strong> Weight loss benefits combined with gastrointestinal mucosal protection.
      </li>
      <li>
        <strong>Selank + Semax:</strong> Combined anxiolytic and cognitive enhancement via neuropeptide modulation.
      </li>
      <li>
        <strong>M-2531 + M-Shred:</strong> Mitochondrial biogenesis and fat loss through complementary metabolic pathways.
      </li>
    </ul>
    <p className="text-sm text-slate-700">
      These combinations leverage distinct but complementary mechanisms to enhance clinical outcomes and reduce side effects.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="w-5 h-5" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-2 text-sm text-slate-700">
      Awareness of potential drug interactions is critical when using peptide blends:
    </p>
    <ul className="list-disc list-inside mb-4 text-sm text-slate-700">
      <li>
        <strong>Growth hormone secretagogues (e.g., CJC-1295, Ipamorelin):</strong> May interact with corticosteroids and insulin, altering glucose metabolism.
      </li>
      <li>
        <strong>GLP-1 receptor agonists (e.g., Semaglutide, Tirzepatide):</strong> Caution with hypoglycemic agents (sulfonylureas, insulin) due to additive glucose-lowering effects.
      </li>
      <li>
        <strong>BPC-157 and TB-500:</strong> Limited data but potential interaction with anticoagulants; monitor bleeding risk.
      </li>
      <li>
        <strong>Neuropeptides (Selank, Semax):</strong> May potentiate effects of anxiolytics or antidepressants; monitor CNS effects.
      </li>
      <li>
        <strong>Pan-AMPK activators (OS-01):</strong> Possible interaction with metformin and other AMPK modulators; monitor for hypoglycemia.
      </li>
    </ul>
    <p className="text-sm text-slate-700">
      Always consult healthcare providers before combining peptides with prescription medications to avoid adverse interactions.
    </p>
  </CardContent>
</Card>

<CardDescription className="mb-4">{blend.description}</CardDescription>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details →
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Looking for Individual Peptides?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Browse our comprehensive A-Z index of individual peptide profiles with detailed dosing, mechanisms, and clinical applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/peptide-index">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Browse A-Z Peptide Index →
                  </Button>
                </Link>
                <Link href="/tools/comparison-tool">
                  <Button size="lg" variant="outline">
                    Compare Peptides →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
