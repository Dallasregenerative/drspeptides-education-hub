import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Shield, Sparkles, AlertTriangle, CheckCircle, Activity, ArrowLeft, BookOpen , Stethoscope } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaM2531() {
  usePageTitle("Formula M-2531: Metabolic Optimization", {
    description: "Advanced mitochondrial optimization formula with TUDCA, 5-Amino-1MQ, NAC, and PQQ for comprehensive cellular energy and metabolic support. A proprietary DrsPeptides compound.",
    keywords: ['Formula M-2531', 'M-2531', 'M2531', 'DrsPeptides formula', 'proprietary peptide blend', 'mitochondrial optimization', 'metabolic formula', 'TUDCA', '5-Amino-1MQ', 'NAC', 'PQQ'],
    ogType: 'article' as const,
    schema: [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Formula M-2531",
      "alternateName": ['M-2531', 'M2531', 'Formula M2531', 'DrsPeptides M-2531', 'Metabolic Optimization Formula'],
      "description": "Advanced mitochondrial optimization formula with TUDCA, 5-Amino-1MQ, NAC, and PQQ for comprehensive cellular energy and metabolic support. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-m-2531",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "activeIngredient": "250 mg TUDCA + 50 mg 5-Amino-1MQ + 300 mg NAC + 10 mg PQQ",
      "administrationRoute": "Varies by formulation",
      "drugClass": "Peptide Therapy Compound",
      "mechanismOfAction": "Metabolic Optimization",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": "https://pepedhub.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Formula M-2531 - Metabolic Optimization | DrsPeptides Proprietary Formula",
      "description": "Advanced mitochondrial optimization formula with TUDCA, 5-Amino-1MQ, NAC, and PQQ for comprehensive cellular energy and metabolic support. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-m-2531",
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Metabolic Health"
      },
      "lastReviewed": "2026-02-14",
      "reviewedBy": {
        "@type": "Organization",
        "name": "Peptide Education Hub Medical Team"
      },
      "about": {
        "@type": "Drug",
        "name": "Formula M-2531"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pepedhub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blends & Formulas",
          "item": "https://pepedhub.com/blends"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formula M-2531",
          "item": "https://pepedhub.com/peptides/formula-m-2531"
        }
      ]
    }
  ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-emerald-500/30 text-emerald-200 border-emerald-400">
              Metabolic Series & Cellular Health
            </Badge>
            <Badge className="bg-cyan-500/30 text-cyan-200 border-cyan-400">
              Four-Pathway Synergy
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula M-2531
          </h1>
          <p className="text-xl text-emerald-200 mb-6">
            Advanced Metabolic Series & Metabolic Optimization Blend
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-emerald-100">
              250 mg TUDCA + 50 mg 5-Amino-1MQ + 300 mg NAC + 10 mg PQQ
            </p>
            <p className="text-sm text-emerald-300 mt-2">
              Enteric-coated capsules for optimal intestinal absorption and bioavailability
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-emerald-600" />
              Mechanism of Action: Four-Pathway Metabolic Synergy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-lg p-5">
                <h4 className="font-bold text-emerald-800 mb-3">TUDCA (Chemical Chaperone & Hepatoprotection)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Prevents ER protein misfolding; stabilizes mitochondrial membranes</li>
                  <li>• Increases bile flow 250% for enhanced fat absorption/detoxification</li>
                  <li>• Activates GATA3 for hepatocyte regeneration</li>
                  <li>• Improves insulin sensitivity 30% (comparable to metformin)</li>
                  <li>• Phase III: slowed ALS progression by 18 weeks over 1 year</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-3">5-Amino-1MQ (NNMT Inhibitor & NAD+ Preservation)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Inhibits NNMT → preserves NAD+ → activates SIRT1/PGC-1α axis</li>
                  <li>• Drives mitochondrial biogenesis</li>
                  <li>• Shifts fat storage to fat oxidation</li>
                  <li>• 10-fold increase in fat loss with caloric restriction</li>
                  <li>• Reduces visceral adiposity 30-40%</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-lg p-5">
                <h4 className="font-bold text-cyan-800 mb-3">NAC (Glutathione Precursor & Antioxidant)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Primary intracellular antioxidant via glutathione repletion</li>
                  <li>• Inhibits NF-κB → reduces TNF-α, IL-1β, IL-6</li>
                  <li>• Crosses BBB for neuroprotection</li>
                  <li>• Synergizes with TUDCA for superior hepatoprotection</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-blue-800 mb-3">PQQ (Metabolic Series Biogenesis & CREB Activation)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Activates CREB/PGC-1α → 10-20% mitochondrial content increase</li>
                  <li>• Enhances NAD+-dependent SIRT1 activity</li>
                  <li>• FDA GRAS; cognitive enhancement within 45-60 min</li>
                  <li>• Reduces CRP, IL-6, TMAO</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-5">
              <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                NAD+ preservation (5-Amino-1MQ) + mitochondrial biogenesis (PQQ) + oxidative protection (TUDCA + NAC) = self-reinforcing metabolic optimization superior to monotherapy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-bold text-emerald-800 mb-3">Metabolic Optimization</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 25% fat oxidation increase</li>
                  <li>• 30% insulin sensitivity gain</li>
                  <li>• Visceral fat preferential loss</li>
                  <li>• Lean mass preservation</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <h4 className="font-bold text-teal-800 mb-3">Metabolic Series Function</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 10-20% mitochondrial density</li>
                  <li>• Multi-layer antioxidant protection</li>
                  <li>• Calcium homeostasis preservation</li>
                  <li>• Rapid energy restoration</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-800 mb-3">Hepatic Support</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 45% liver adiposity reduction</li>
                  <li>• Normalized AST/ALT/GGT</li>
                  <li>• 250% bile flow increase</li>
                  <li>• Enhanced Phase II detox</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-3">Neuroprotection</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• TUDCA slowed ALS 18 weeks</li>
                  <li>• Neural stem cell proliferation</li>
                  <li>• PQQ cognitive clarity 45-60 min</li>
                  <li>• BBB-penetrant protection (NAC)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Stats */}
        <Card className="mb-8 border-2 border-emerald-400 bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-emerald-600">25%</p>
                <p className="text-sm text-gray-600">Fat Oxidation Increase</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">30%</p>
                <p className="text-sm text-gray-600">Insulin Sensitivity Gain</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-600">250%</p>
                <p className="text-sm text-gray-600">Bile Flow Increase</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">10-20%</p>
                <p className="text-sm text-gray-600">Metabolic Series Density</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Patient Expectations & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                <div className="bg-emerald-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">45-60 min</div>
                <p className="text-gray-700">PQQ cognitive enhancement begins - improved mental clarity and focus</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                <div className="bg-teal-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Week 1-2</div>
                <p className="text-gray-700">Improved energy levels, better digestion, enhanced liver function markers</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                <div className="bg-cyan-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Weeks 2-4</div>
                <p className="text-gray-700">Measurable metabolic improvements, fat oxidation increase, insulin sensitivity gains</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Months</div>
                <p className="text-gray-700">Full mitochondrial biogenesis benefits, optimized liver function, sustained metabolic health</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety */}
        <Card className="mb-8 border-amber-200">
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-6 w-6" />
              Safety Profile & Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Excellent Safety Profile
              </h4>
              <p className="text-sm text-gray-700">All components have established safety data. TUDCA Phase III completed. PQQ has FDA GRAS status. NAC has decades of clinical use.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy/lactation</li>
                  <li>• Known hypersensitivity to any component</li>
                  <li>• Complete biliary obstruction</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Gallbladder disease</li>
                  <li>• Severe hepatic impairment</li>
                  <li>• Concurrent diabetes medications</li>
                  <li>• Anticoagulant therapy</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Diabetes medications (may require dose reduction due to improved insulin sensitivity)</li>
                <li>• NAD+ supplements (reduce doses by 50% to avoid excessive elevation)</li>
                <li>• Nitroglycerin (NAC may enhance effects)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-indigo-600" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
      <li>
        Elia et al. (2016). Tauroursodeoxycholic acid (TUDCA) in the treatment of liver diseases. 
        World Journal of Gastroenterology. Demonstrated TUDCA's hepatoprotective effects and bile flow enhancement. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/27182117/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Neelakantan et al. (2019). Nicotinamide N-methyltransferase inhibition improves metabolic health in obesity. 
        Nature Communications. Showed 5-Amino-1MQ inhibits NNMT, preserving NAD+ and improving fat oxidation. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/31142822/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Samuni et al. (2013). The chemistry and biological activities of N-acetylcysteine. 
        Biochimica et Biophysica Acta. Reviewed NAC as a glutathione precursor and antioxidant with neuroprotective properties. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/23200753/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Chowanadisai et al. (2010). Pyrroloquinoline quinone stimulates mitochondrial biogenesis through cAMP response element-binding protein phosphorylation and increased PGC-1α expression. 
        Journal of Biological Chemistry. Demonstrated PQQ's role in mitochondrial biogenesis via CREB/PGC-1α activation. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/20018833/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Elia et al. (2020). Tauroursodeoxycholic acid slows ALS progression: Phase III clinical trial results. 
        Neurology. Reported TUDCA delayed ALS progression by 18 weeks over one year. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/31963075/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Cantó et al. (2015). NAD+ metabolism and the control of energy homeostasis: a balancing act between mitochondria and the nucleus. 
        Cell Metabolism. Discussed NAD+ preservation's role in metabolic health and mitochondrial function. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/25651106/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Zhang et al. (2017). N-acetylcysteine protects against neurodegeneration and improves cognitive function in Alzheimer's disease models. 
        Neurobiology of Aging. Showed NAC's neuroprotective effects crossing the blood-brain barrier. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/28215746/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Rucker et al. (2009). Safety assessment of pyrroloquinoline quinone disodium salt as a dietary supplement. 
        Food and Chemical Toxicology. Confirmed PQQ's GRAS status and safety profile. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/19525058/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Kraus et al. (2014). Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity. 
        Nature Communications. Validated NNMT inhibition as a therapeutic target for metabolic disorders. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/25277230/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Reddy et al. (2018). Tauroursodeoxycholic acid protects against ER stress-induced apoptosis in neurodegenerative diseases. 
        Journal of Neurochemistry. Highlighted TUDCA's neuroprotective mechanisms. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/29367394/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-6 w-6 text-red-600" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-gray-700 text-sm">
      Baseline and follow-up lab testing is recommended to monitor metabolic and hepatic response, as well as safety parameters.
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li><strong>Baseline Labs:</strong> Comprehensive metabolic panel (CMP), liver function tests (AST, ALT, GGT), fasting insulin and glucose, HbA1c, lipid panel, inflammatory markers (CRP, IL-6), NAD+/NADH ratio if available.</li>
      <li><strong>Follow-up Schedule:</strong> Repeat labs at 4 weeks, 8 weeks, and 12 weeks to assess improvements and detect any adverse effects.</li>
      <li><strong>Specific Biomarkers:</strong> Monitor liver enzymes for hepatoprotection, insulin sensitivity markers for metabolic effects, inflammatory cytokines for antioxidant impact, and mitochondrial function markers if accessible.</li>
      <li><strong>Additional Considerations:</strong> For patients on concurrent diabetes or anticoagulant therapy, more frequent monitoring may be warranted.</li>
    </ul>
  </CardContent>
</Card>


<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="h-6 w-6 text-purple-600" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>NMN or NR (NAD+ Precursors):</strong> Complement 5-Amino-1MQ by further boosting NAD+ pools, enhancing mitochondrial biogenesis and metabolic function. Caution advised to avoid excessive NAD+ elevation.
      </li>
      <li>
        <strong>Alpha-Lipoic Acid (ALA):</strong> Works synergistically with NAC and PQQ as a potent antioxidant and mitochondrial cofactor, improving redox status and energy metabolism.
      </li>
      <li>
        <strong>Berberine:</strong> Enhances insulin sensitivity and metabolic regulation, complementing TUDCA’s hepatoprotective and insulin-sensitizing effects.
      </li>
      <li>
        <strong>Coenzyme Q10 (CoQ10):</strong> Supports mitochondrial electron transport chain function, synergizing with PQQ-driven mitochondrial biogenesis for improved cellular energy.
      </li>
      <li>
        <strong>Resveratrol:</strong> Activates SIRT1 and AMPK pathways, amplifying NAD+ preservation and mitochondrial benefits initiated by 5-Amino-1MQ and PQQ.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="h-6 w-6 text-red-600" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>Diabetes Medications (e.g., Metformin, Sulfonylureas):</strong> Formula M-2531 may potentiate hypoglycemic effects due to improved insulin sensitivity; dose adjustments and close glucose monitoring recommended.
      </li>
      <li>
        <strong>Anticoagulants (e.g., Warfarin, DOACs):</strong> NAC may alter coagulation parameters and increase bleeding risk; monitor INR/PT and bleeding signs closely.
      </li>
      <li>
        <strong>Nitroglycerin and Nitrates:</strong> NAC can potentiate vasodilatory effects, possibly causing hypotension; caution advised.
      </li>
      <li>
        <strong>NAD+ Precursors (e.g., Nicotinamide Riboside):</strong> Concurrent use with 5-Amino-1MQ may lead to excessive NAD+ levels; dose reduction recommended.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> TUDCA may modulate immune responses; interactions not well studied, use caution.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula M-2531?</h3>
            <p className="mb-6 text-teal-100">
            Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
            </p>
            <SourcePeptidesButton className="bg-white text-teal-700 hover:bg-teal-50" showIcon={false} />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
