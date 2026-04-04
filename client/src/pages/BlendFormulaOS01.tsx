import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Clock, Zap, Sparkles, AlertTriangle, CheckCircle, TrendingUp, ArrowLeft, Shield, Activity, Heart, Brain, Dna, BookOpen , Stethoscope } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaOS01() {
  usePageTitle("OS-01 (O-304/ATX-304): Pan-AMPK Activator & Longevity Optimizer", {
    description: "OS-01 by DrsPeptides: 100mg O-304 (ATX-304) pan-AMPK activator oral capsule for metabolic optimization, longevity, glucose regulation, cardiovascular support, and anti-aging. Phase IIa human clinical trial data. First-in-class AMPK activator with dual mitochondrial uncoupling mechanism.",
    keywords: ['OS-01', 'O-304', 'ATX-304', 'AMPK activator', 'pan-AMPK', 'DrsPeptides formula', 'longevity compound', 'metabolic optimizer', 'anti-aging', 'glucose regulation', 'insulin sensitivity', 'mitochondrial uncoupler', 'exercise mimetic', 'Betagenon', 'Amplifier Therapeutics', 'Cambrian Bio', 'weight management', 'cardiovascular support', 'Phase IIa clinical trial', 'CAS 1261289-04-6'],
    ogType: 'article' as const,
    schema: [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "OS-01 (O-304 / ATX-304)",
      "alternateName": ['OS-01', 'O-304', 'ATX-304', 'OS01', 'DrsPeptides OS-01', 'Pan-AMPK Activator', 'Longevity Formula OS-01'],
      "description": "First-in-class orally bioavailable pan-AMPK activator (O-304/ATX-304) with dual mitochondrial uncoupling mechanism. 100mg enteric-coated capsule for metabolic optimization, glucose regulation, cardiovascular support, and longevity. Phase IIa human clinical trial completed in T2D patients.",
      "url": "https://pepedhub.com/peptides/formula-os-01",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "activeIngredient": "100 mg O-304 (ATX-304) — CAS 1261289-04-6",
      "administrationRoute": "Oral (enteric-coated capsule)",
      "drugClass": "AMPK Activator / Metabolic Compound",
      "mechanismOfAction": "Dual-mechanism: pan-AMPK activation (suppresses dephosphorylation of pAMPK at Thr172) + mild mitochondrial uncoupling. Activates all AMPK isoforms (β1 and β2 subunits). Peripherally restricted to skeletal muscle, liver, heart, kidney, and vasculature.",
      "clinicalPharmacology": "Phase IIa completed in T2D patients: -0.60 mM fasting plasma glucose (p=0.0096), HOMA-IR reduction (p=0.0097), significant BP reduction, increased microvascular perfusion. ~150 humans dosed across Phase I, IIa, and 1B trials.",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": "https://pepedhub.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "OS-01 (O-304/ATX-304) - Pan-AMPK Activator & Longevity Optimizer | DrsPeptides",
      "description": "Comprehensive clinical profile of OS-01 (O-304/ATX-304), a first-in-class pan-AMPK activator with Phase IIa human clinical trial data. Covers mechanism of action, clinical results, dosing protocols, safety profile, and breakthrough ENDO 2025 semaglutide combination data.",
      "url": "https://pepedhub.com/peptides/formula-os-01",
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Longevity Medicine"
      },
      "lastReviewed": "2026-02-23",
      "reviewedBy": {
        "@type": "Organization",
        "name": "Peptide Education Hub Medical Team"
      },
      "about": {
        "@type": "Drug",
        "name": "OS-01 (O-304 / ATX-304)"
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
          "name": "OS-01 (O-304/ATX-304)",
          "item": "https://pepedhub.com/peptides/formula-os-01"
        }
      ]
    }
  ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Badge className="bg-indigo-500/30 text-indigo-200 border-indigo-400">
              Longevity Series
            </Badge>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-400">
              Metabolic Enhancement
            </Badge>
            <Badge className="bg-blue-500/30 text-blue-200 border-blue-400">
              Anti-Aging & Cellular Health
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            OS-01
          </h1>
          <p className="text-xl text-purple-200 mb-2">
            Pan-AMPK Activator & Metabolic Longevity Optimizer (O-304 / ATX-304)
          </p>
          <p className="text-sm text-purple-300 mb-6">
            CAS: 1261289-04-6 · MW: 380.24 g/mol · Small Molecule (Not a Peptide)
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Dna className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-purple-100 text-lg font-medium">
              100 mg O-304 (ATX-304) per capsule
            </p>
            <p className="text-sm text-purple-300 mt-2">
              Enteric-coated capsules · 10 capsules per bottle · Physician Use Only
            </p>
          </div>
          <div className="bg-amber-500/20 border border-amber-400/50 rounded-xl p-4">
            <h4 className="text-amber-200 font-semibold mb-1 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Compound Identity Note
            </h4>
            <p className="text-sm text-amber-100">
              Two different compounds share the "OS-01" name. This product contains <strong>O-304 (ATX-304)</strong>, a synthetic small molecule pan-AMPK activator (CAS 1261289-04-6). This is distinct from OneSkin's "OS-01" (Peptide 14/Pep14), a topical senomorphic peptide. Both have legitimate anti-aging mechanisms — they are entirely different compounds.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-indigo-600" />
              Mechanism of Action: Dual AMPK + Mitochondrial Activation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Pan-AMPK Activation (Primary)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• First-in-class orally bioavailable <strong>pan-AMPK activator</strong> — activates all AMPK isoforms (both β1 and β2 subunits)</li>
                  <li>• Increases AMPK activity by <strong>suppressing dephosphorylation of pAMPK (Thr172)</strong> without depleting cellular ATP</li>
                  <li>• Requires upstream kinase LKB1 — mirrors physiological AMPK activation</li>
                  <li>• Downstream: ↑p-S79 ACC (fatty acid oxidation switch), ↑autophagy, ↑mitochondrial biogenesis</li>
                  <li>• Insulin-independent glucose uptake via GLUT-4 translocation in skeletal muscle</li>
                  <li>• <strong>Peripherally restricted</strong> — targets skeletal muscle, liver, heart, kidney, and vasculature (not CNS)</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Mitochondrial Uncoupling (Secondary)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Also functions as a <strong>mild mitochondrial uncoupler</strong>, confirmed in <em>C. elegans</em> lifespan studies</li>
                  <li>• Dual action promotes glucose effectiveness AND energy expenditure simultaneously</li>
                  <li>• Induced vasorelaxation in rat mesenteric arteries via uncoupling mechanism</li>
                  <li>• Extended lifespan in <em>C. elegans</em> — only direct lifespan extension data for this compound</li>
                  <li>• Rare pharmacological combination: AMPK activation + mitochondrial uncoupling in one molecule</li>
                  <li>• LogP 4.1 (lipophilic) — high oral bioavailability, no GI peptide degradation concerns</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-5">
              <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Master Metabolic Switch
              </h4>
              <p className="text-gray-700">
                AMPK activation functions as a master metabolic switch, simultaneously enhancing glucose uptake (muscle), fatty acid oxidation (liver), mitochondrial biogenesis (whole-body), autophagy (cellular clearance), and cardiovascular function — <strong>recapitulating many benefits of exercise and caloric restriction through a single pharmacological target</strong>. The added mitochondrial uncoupling further amplifies energy expenditure, making OS-01 one of the most mechanistically comprehensive longevity compounds available.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-indigo-600" />
              Benefits Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-3">Glucose & Insulin Optimization</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Insulin-independent glucose uptake in skeletal muscle via GLUT-4 translocation</li>
                  <li>• <strong>Reduced fasting plasma glucose by -0.60 mM</strong> in Phase IIa (p=0.0096 vs. placebo)</li>
                  <li>• Reduced HOMA-IR significantly within treatment group (p=0.0097)</li>
                  <li>• Prevents compensatory hyperinsulinemia; promotes β-cell rest</li>
                  <li>• Reduces islet amyloid formation (protective of β-cell function)</li>
                  <li>• Prevents genome-wide epigenetic changes in pancreatic β-cells caused by high-fat diet</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-3">Fat Loss & Metabolic Enhancement</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reverses diet-induced obesity without reducing food intake (preclinical)</li>
                  <li>• Enhanced fatty acid oxidation through ACC phosphorylation</li>
                  <li>• Reduced liver steatosis and blood cholesterol levels</li>
                  <li>• <strong>100% fat loss with zero lean mass loss</strong> (ENDO 2025 data, 28 days)</li>
                  <li>• -21% body weight as monotherapy; -27% combined with semaglutide</li>
                  <li>• Prevents weight regain after GLP-1 agonist withdrawal</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Cardiovascular & Vascular Support
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Increased cardiac glucose uptake and improved <strong>left ventricular stroke volume</strong></li>
                  <li>• Did <strong>not</strong> increase heart weight in mice or rats (unlike some metabolic agents)</li>
                  <li>• Significant <strong>diastolic and systolic BP reduction</strong> in T2D patients</li>
                  <li>• Increased peripheral <strong>microvascular perfusion</strong> in both animals and humans</li>
                  <li>• Prevents abdominal aortic aneurysm formation (AMPK/mTOR/MMP pathway)</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <Dna className="h-4 w-4" />
                  Longevity & Anti-Aging
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• In aged mice: prevented/reverted hyperinsulinemia, insulin resistance; improved cardiac function and <strong>exercise capacity</strong></li>
                  <li>• Enhanced autophagy and mitochondrial homeostasis in kidney (protected against age-related injury)</li>
                  <li>• Extended lifespan in <em>C. elegans</em> via mitochondrial uncoupling</li>
                  <li>• Exercise mimetic properties — activates AMPK in heart like physical exercise</li>
                  <li>• AMPK pathway is a core longevity mechanism shared with caloric restriction, metformin, and exercise</li>
                  <li>• Protected against cisplatin-induced acute kidney injury via metabolic reprogramming (↑38% basal OCR)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ENDO 2025 Breakthrough Data */}
        <Card className="mb-8 border-2 border-purple-400 bg-gradient-to-r from-purple-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Sparkles className="h-6 w-6" />
              ENDO 2025 Breakthrough: Semaglutide Combination Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Presented at the Endocrine Society Annual Meeting (July 2025) by Amplifier Therapeutics CEO James Peyer. This is the most significant new data for OS-01 and has not been incorporated into any other vendor's product page.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-purple-200 px-3 py-2 text-left">Group</th>
                    <th className="border border-purple-200 px-3 py-2 text-left">Weight Loss</th>
                    <th className="border border-purple-200 px-3 py-2 text-left">Timeline</th>
                    <th className="border border-purple-200 px-3 py-2 text-left">Body Composition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-purple-50 font-semibold">
                    <td className="border border-purple-200 px-3 py-2">ATX-304 alone</td>
                    <td className="border border-purple-200 px-3 py-2 text-purple-700">-21%</td>
                    <td className="border border-purple-200 px-3 py-2">28 days</td>
                    <td className="border border-purple-200 px-3 py-2 text-green-700">100% fat loss, zero lean mass loss</td>
                  </tr>
                  <tr className="bg-indigo-50 font-semibold">
                    <td className="border border-purple-200 px-3 py-2">ATX-304 + sema (low)</td>
                    <td className="border border-purple-200 px-3 py-2 text-purple-700">-27%</td>
                    <td className="border border-purple-200 px-3 py-2">15 days</td>
                    <td className="border border-purple-200 px-3 py-2 text-green-700">100% fat loss, zero lean mass loss</td>
                  </tr>
                  <tr className="bg-indigo-50 font-semibold">
                    <td className="border border-purple-200 px-3 py-2">ATX-304 + sema (high)</td>
                    <td className="border border-purple-200 px-3 py-2 text-purple-700">-27%</td>
                    <td className="border border-purple-200 px-3 py-2">15 days</td>
                    <td className="border border-purple-200 px-3 py-2 text-green-700">100% fat loss, zero lean mass loss</td>
                  </tr>
                  <tr>
                    <td className="border border-purple-200 px-3 py-2 text-gray-500">Sema alone (low)</td>
                    <td className="border border-purple-200 px-3 py-2 text-gray-500">-14%</td>
                    <td className="border border-purple-200 px-3 py-2 text-gray-500">15 days</td>
                    <td className="border border-purple-200 px-3 py-2 text-red-500">Lost BOTH fat and lean mass</td>
                  </tr>
                  <tr>
                    <td className="border border-purple-200 px-3 py-2 text-gray-500">Sema alone (high)</td>
                    <td className="border border-purple-200 px-3 py-2 text-gray-500">-19%</td>
                    <td className="border border-purple-200 px-3 py-2 text-gray-500">15 days</td>
                    <td className="border border-purple-200 px-3 py-2 text-red-500">Lost BOTH fat and lean mass</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-purple-100 rounded-lg p-4">
              <p className="text-sm text-purple-800 font-medium">
                <strong>Key finding:</strong> After semaglutide withdrawal, sema-only groups became hyperphagic and regained to baseline. But <strong>ATX-304 post-semaglutide prevented weight regain and animals continued losing weight (-26%)</strong> — without further lean mass loss. This lean mass preservation is transformative in the GLP-1 agonist era where muscle loss is the #1 clinical concern.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Stats */}
        <Card className="mb-8 border-2 border-indigo-400 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <TrendingUp className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-indigo-600">-0.60 mM</p>
                <p className="text-xs text-gray-600">FPG Reduction (Phase IIa, p=0.0096)</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">Phase IIa</p>
                <p className="text-xs text-gray-600">Human Trial Completed (T2D)</p>
              </div>
              <div>
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">Pan-AMPK</p>
                <p className="text-xs text-gray-600">All Isoforms (β1 + β2)</p>
              </div>
              <div>
                <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">~150</p>
                <p className="text-xs text-gray-600">Humans Dosed (3 Trials)</p>
              </div>
              <div>
                <Flame className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">-21%</p>
                <p className="text-xs text-gray-600">Weight Loss (100% Fat, 0% Lean)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Published Research Catalog */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-indigo-600" />
              Published Research Catalog (12 Studies + ENDO 2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h4 className="font-bold text-indigo-800 mb-3">Human Clinical Trials</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-indigo-100">
                      <th className="border border-indigo-200 px-3 py-2 text-left">Trial</th>
                      <th className="border border-indigo-200 px-3 py-2 text-left">Phase</th>
                      <th className="border border-indigo-200 px-3 py-2 text-left">Population</th>
                      <th className="border border-indigo-200 px-3 py-2 text-left">Key Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-indigo-200 px-3 py-2 font-medium">Phase I (2016)</td>
                      <td className="border border-indigo-200 px-3 py-2">I</td>
                      <td className="border border-indigo-200 px-3 py-2">Healthy, overweight, T2D+metformin</td>
                      <td className="border border-indigo-200 px-3 py-2">Safe, well-tolerated, expected PK, relevant metabolic/vascular effects</td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="border border-indigo-200 px-3 py-2 font-medium">TELLUS Phase IIa (2017)</td>
                      <td className="border border-indigo-200 px-3 py-2">IIa</td>
                      <td className="border border-indigo-200 px-3 py-2">T2D on metformin (n≈49)</td>
                      <td className="border border-indigo-200 px-3 py-2">FPG -0.60 mM (p=0.0096); HOMA-IR ↓ (p=0.0097); BP ↓; microvascular perfusion ↑</td>
                    </tr>
                    <tr>
                      <td className="border border-indigo-200 px-3 py-2 font-medium">Phase 1B (2023)</td>
                      <td className="border border-indigo-200 px-3 py-2">1B</td>
                      <td className="border border-indigo-200 px-3 py-2">Prediabetic, overweight/obese</td>
                      <td className="border border-indigo-200 px-3 py-2">Safety, PK, exploratory metabolic + muscle endpoints; EU-based, randomized, placebo-controlled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-indigo-800 mb-3">Key Preclinical Studies</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-purple-200 px-3 py-2 text-left">Study</th>
                      <th className="border border-purple-200 px-3 py-2 text-left">Year</th>
                      <th className="border border-purple-200 px-3 py-2 text-left">Key Findings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-purple-200 px-3 py-2 font-medium">Foundational MOA (JCI Insight)</td>
                      <td className="border border-purple-200 px-3 py-2">2018</td>
                      <td className="border border-purple-200 px-3 py-2">↑Glucose uptake, ↓β-cell stress, ↑cardiac function, ↑microvascular perfusion, ↓BP</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-purple-200 px-3 py-2 font-medium">Exercise Mimetic in Aging (Commun Biol)</td>
                      <td className="border border-purple-200 px-3 py-2">2021</td>
                      <td className="border border-purple-200 px-3 py-2">Prevented/reversed hyperinsulinemia, insulin resistance; improved cardiac function + exercise capacity in aged mice</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 px-3 py-2 font-medium">β-Cell Epigenetic Protection (Sci Rep)</td>
                      <td className="border border-purple-200 px-3 py-2">2021</td>
                      <td className="border border-purple-200 px-3 py-2">Prevented genome-wide gene expression changes; remodelled chromatin marks; restored glucose control</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-purple-200 px-3 py-2 font-medium">Kidney Aging Protection (Front Pharmacol)</td>
                      <td className="border border-purple-200 px-3 py-2">2022</td>
                      <td className="border border-purple-200 px-3 py-2">↓P16, ↓P19, ↓SA-β-gal; ↑autophagy, ↑FAO, ↑mitochondrial biogenesis; ↓fibrosis</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 px-3 py-2 font-medium">MASLD / Fatty Liver (JCI Insight)</td>
                      <td className="border border-purple-200 px-3 py-2">2025</td>
                      <td className="border border-purple-200 px-3 py-2">↓Body fat, ↓blood cholesterol, ↓liver steatosis, ↓fibrosis, ↓oxidized lipids; metabolic switch to FAO</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-purple-200 px-3 py-2 font-medium">C. elegans Lifespan Extension</td>
                      <td className="border border-purple-200 px-3 py-2">2025</td>
                      <td className="border border-purple-200 px-3 py-2">Extended lifespan; induced vasorelaxation via mitochondrial uncoupling mechanism</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 px-3 py-2 font-medium">Low Back Pain (Reg Anesth Pain Med)</td>
                      <td className="border border-purple-200 px-3 py-2">2019</td>
                      <td className="border border-purple-200 px-3 py-2">Reduced mechanical hypersensitivity; normalized AMPK pathway in DRG — non-opioid analgesic mechanism</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-purple-200 px-3 py-2 font-medium">Acute Kidney Injury (Biomed Pharmacother)</td>
                      <td className="border border-purple-200 px-3 py-2">2024</td>
                      <td className="border border-purple-200 px-3 py-2">Protected via AMPK-dependent metabolic reprogramming; ↑basal OCR by 38%; altered 66/126 metabolites</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compound Chemistry */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dna className="h-6 w-6 text-indigo-600" />
              Compound Identity & Chemistry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-5">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p><strong>IUPAC Name:</strong> 4-chloro-N-[2-[(4-chlorophenyl)methyl]-2,3-dihydro-3-oxo-1,2,4-thiadiazol-5-yl]-benzamide</p>
                  <p><strong>CAS:</strong> 1261289-04-6</p>
                  <p><strong>Molecular Formula:</strong> C₁₆H₁₁Cl₂N₃O₂S</p>
                  <p><strong>Molecular Weight:</strong> 380.24 g/mol</p>
                  <p><strong>LogP:</strong> 4.1 (lipophilic)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Appearance:</strong> White to off-white crystalline solid</p>
                  <p><strong>Solubility:</strong> DMSO: 20–30 mg/mL; limited aqueous solubility</p>
                  <p><strong>Storage:</strong> Powder -20°C (3 years); 4°C (2 years)</p>
                  <p><strong>Class:</strong> Chlorobenzamide-thiadiazole small molecule</p>
                  <p><strong>Developer:</strong> Betagenon AB → Amplifier Therapeutics (Cambrian Bio)</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Note:</strong> O-304/ATX-304 is a <strong>synthetic small molecule</strong>, not a peptide. It has high oral bioavailability precisely because it is not subject to GI peptide degradation. The "peptide" market naming convention is misleading but established. Amplifier Therapeutics raised $33.25M Series A (RA Capital, Future Ventures) to advance ATX-304 toward FDA approval for chronic weight management.
              </p>
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
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Days 1–7</div>
                <p className="text-gray-700">Improved energy stability, enhanced glucose handling, early metabolic shift toward fat oxidation</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Weeks 1–2</div>
                <p className="text-gray-700">Improved fasting glucose, reduced insulin resistance, enhanced exercise tolerance, better cardiovascular metrics</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Weeks 2–4</div>
                <p className="text-gray-700">Significant FPG reduction, measurable HOMA-IR improvement, blood pressure reduction, increased microvascular perfusion (Phase IIa confirmed)</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                <div className="bg-cyan-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1–3 Months</div>
                <p className="text-gray-700">Sustained metabolic optimization, body composition improvements, reduced hepatic fat, improved lipid profile</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">3–6 Months</div>
                <p className="text-gray-700">Long-term longevity pathway activation, sustained insulin sensitivity, cardiovascular and exercise capacity benefits</p>
              </div>
            </div>
            <p className="text-sm text-amber-700 mt-4 bg-amber-50 rounded-lg p-3">
              <strong>Note:</strong> In the Phase IIa trial, FPG effects reversed within 12 days of stopping treatment, suggesting continuous dosing is necessary for sustained benefit.
            </p>
          </CardContent>
        </Card>

        {/* Dosing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-indigo-600" />
              Dosing & Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Standard Protocol</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Dose:</strong> 1 capsule (100 mg) daily</li>
                  <li>• <strong>Timing:</strong> With food; enteric coating protects against gastric degradation</li>
                  <li>• <strong>Duration:</strong> Continuous or cycling (e.g., 5 days on / 2 off) to reduce receptor downregulation risk</li>
                  <li>• <strong>Capsules per bottle:</strong> 10 enteric-coated capsules</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Optimization Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• LogP 4.1 (lipophilic) — taking with fat-containing food may enhance absorption</li>
                  <li>• Synergizes with NAD+ precursors (NMN/NR), GHK-Cu, MOTS-c, and other mitochondrial-targeting compounds</li>
                  <li>• <strong>Do not combine with metformin without physician oversight</strong> (additive glucose-lowering)</li>
                  <li>• Community-estimated half-life: ~10–12 hours (formal human PK not published)</li>
                  <li>• Consider as companion therapy to GLP-1 agonists for lean mass preservation (ENDO 2025 data)</li>
                </ul>
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
              <h4 className="font-bold text-green-800 mb-2">Human Clinical Safety Data Available (Phase IIa)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 28-day Phase IIa trial in T2D patients on metformin: <strong>well tolerated</strong>, no unexpected safety signals</li>
                <li>• Did not increase heart weight in mice or rats at therapeutic doses</li>
                <li>• AMPK activation is a physiological pathway (mimics exercise/fasting signaling)</li>
                <li>• Peripherally restricted — reduces risk of CNS side effects</li>
                <li>• ~150 humans dosed across Phase I, IIa, and 1B trials</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-blue-800 mb-2">Common Side Effects (Clinical/Practitioner Reports)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>General:</strong> Mild headache, nausea, or fatigue during initial use</li>
                <li>• <strong>Gastrointestinal:</strong> Upset stomach, bloating, or soft stools</li>
                <li>• <strong>Dermatologic:</strong> Rare reports of transient acne or skin dryness</li>
                <li>• <strong>Neurologic:</strong> Vivid dreams or mood changes in sensitive individuals</li>
                <li>• <strong>Rare:</strong> Allergic reaction or elevated liver enzymes (theoretical)</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-800 font-medium">
                <strong>Experimental Disclaimer:</strong> O-304/ATX-304 is <strong>not FDA-approved</strong> for any indication. Long-term safety data beyond the 28-day Phase IIa trial is not established. All use requires physician oversight.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy and lactation (no safety data)</li>
                  <li>• Known hypersensitivity to O-304 or excipients</li>
                  <li>• Active hypoglycemia or unstable blood glucose</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Type 1 or Type 2 diabetes</strong> — may require medication dose adjustment (additive glucose-lowering)</li>
                  <li>• <strong>Cardiovascular disease</strong> — lowers blood pressure; monitor in hypotensive patients</li>
                  <li>• <strong>Autoimmune conditions</strong> — AMPK modulates immune/inflammatory pathways</li>
                  <li>• <strong>Chronic liver disease</strong> — monitor hepatic function</li>
                  <li>• <strong>Concurrent AMPK activators</strong> (metformin, berberine, AICAR) — additive effects</li>
                  <li>• <strong>Cancer history</strong> — AMPK role in tumorigenesis is context-dependent</li>
                  <li>• <strong>Patients on GLP-1 agonists</strong> — potent synergy (ENDO 2025); dose adjustments may be necessary</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Metformin</strong> — Both activate AMPK; monitor glucose closely, hypoglycemia risk</li>
                <li>• <strong>Insulin / sulfonylureas</strong> — Additive glucose-lowering; dose reduction likely needed</li>
                <li>• <strong>Antihypertensives</strong> — O-304 reduces BP; monitor for hypotension</li>
                <li>• <strong>Berberine / AICAR / rapamycin</strong> — Overlapping metabolic pathways; caution with excessive AMPK/mTOR modulation</li>
                <li>• <strong>Anticoagulants</strong> — AMPK affects lipid metabolism; monitor coagulation parameters</li>
                <li>• <strong>GLP-1 agonists (semaglutide, tirzepatide)</strong> — Potent synergy demonstrated; hypoglycemia monitoring critical</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Clinical Positioning */}
        <Card className="mb-8 border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <TrendingUp className="h-6 w-6" />
              Clinical Positioning: Why OS-01 Matters Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white/80 rounded-lg p-5 mb-4">
              <p className="text-gray-700 mb-4">
                OS-01 (ATX-304) is a <strong>novel, peripherally-restricted, oral small-molecule AMPK and mitochondrial activator</strong> being developed for obesity and cardiometabolic disease. It mimics key benefits of exercise and caloric restriction by activating the body's master energy sensor, <strong>without reducing ATP</strong>, and has already shown improved glucose control, blood pressure, microvascular perfusion, and fat-only weight loss in preclinical and early human studies.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Fat-Focused, Muscle-Sparing</h4>
                  <p className="text-sm text-gray-700">
                    In obese and diabetic animal models, ATX-304 reduces total body weight by selectively <strong>burning fat mass while preserving lean mass</strong>, even when animals eat the same or more food than controls. At ENDO 2025, ATX-304 alone and in combination with semaglutide drove greater and faster weight loss, with EchoMRI showing <strong>100% of the weight loss coming from fat, not muscle</strong>.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">The Missing Half of GLP-1 Therapy</h4>
                  <p className="text-sm text-gray-700">
                    Current GLP-1 drugs like semaglutide often cause patients to lose about <strong>1 kg of muscle for every 2 kg of fat</strong> and regain weight when therapy stops. In DIO mice, ATX-304 combined with semaglutide led to <strong>greater weight loss, no lean mass loss, and prevented weight regain after semaglutide withdrawal</strong>. This positions ATX-304 as a potential "metabolic backbone" that can make GLP-1 therapies safer and more durable.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Organ Protection: Liver, Kidney, Vasculature</h4>
                  <p className="text-sm text-gray-700">
                    ATX-304 reduces oxidative stress and improves metabolic-associated fatty liver disease (MASLD) by switching the liver into a fat-burning mode, lowering liver fat, inflammation, fibrosis, and oxidized lipids. It also <strong>protects aging kidneys</strong>, lowering senescence markers and fibrosis through enhanced autophagy and mitochondrial health, and <strong>prevents abdominal aortic aneurysm formation</strong> by stabilizing vascular smooth muscle cells via the AMPK/mTOR/MMP axis.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Upstream Longevity Signaling</h4>
                  <p className="text-sm text-gray-700">
                    By turning on AMPK and improving mitochondrial function, OS-01 engages many of the same pathways targeted by exercise, fasting, metformin, and caloric restriction — but via a direct, peripherally-restricted mechanism. It has shown <strong>lifespan extension in <em>C. elegans</em></strong> and broad improvements in age-related gene expression, β-cell epigenetics, and organ function in mammalian models.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>Regulatory Note:</strong> OS-01 (ATX-304) is a <strong>research compound under investigation</strong>. No indication is yet FDA-approved. Benefits described above are based on preclinical models and a 28-day Phase IIa proof-of-concept trial in people with type 2 diabetes. All use requires physician oversight.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline & Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              What to Expect: Timeline & Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Most of the mechanistic work happens silently in the background in the first days as AMPK switches on and mitochondria ramp up. Early human data suggest measurable improvements in blood sugar, blood pressure, and microcirculation over the <strong>first 2–4 weeks</strong> of daily use. In animals, <strong>fat loss and exercise capacity gains</strong> become obvious over <strong>4–12 weeks</strong>, tracking with improved organ health markers in liver, heart, and kidney.
            </p>
            <p className="text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
              <strong>Important:</strong> When therapy stops, metabolic markers gradually drift back toward baseline over about <strong>10–14 days</strong>, which is why this drug is being developed as a chronic, backbone therapy for cardiometabolic health rather than a short "boost."
            </p>
          </CardContent>
        </Card>

        {/* Full References */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-indigo-600" />
              Complete References & Source Studies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm text-gray-700">
              <li>1. <a href="https://www.cambrianbio.com/blogs/atx-304-the-other-side-of-the-diet-exercise-equation-in-metabolic-disease" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">ATX-304: The Other Side of the Diet & Exercise Equation in Metabolic Disease — Cambrian Bio</a></li>
              <li>2. <a href="https://www.cambrianbio.com/pipeline" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cambrian Bio Pipeline — ATX-304 Development</a></li>
              <li>3. <a href="https://insight.jci.org/articles/view/99114" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">PAN-AMPK activator O304 improves glucose homeostasis and microvascular perfusion — JCI Insight, 2018</a></li>
              <li>4. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12545902/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">OR22-05 Weight Loss and Change in Body Composition in a DIO Mouse Model — ENDO 2025</a></li>
              <li>5. <a href="https://www.cambrianbio.com/news-and-publications/amplifier-therapeutics-to-present-preclinical-data-of-atx-304-in-combination-with-semaglutide-at-endo-2025" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Therapeutics to Present Preclinical Data of ATX-304 + Semaglutide at ENDO 2025</a></li>
              <li>6. <a href="https://www.biorxiv.org/content/10.1101/2024.02.13.578901v1.full.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">AMPK-activator ATX-304 reduces oxidative stress and improves MASLD — bioRxiv, 2024</a></li>
              <li>7. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6124394/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">PAN-AMPK activator O304 improves glucose homeostasis and microvascular perfusion in mice and T2D patients — PMC, 2018</a></li>
              <li>8. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8602430/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">AMPK activator O304 improves metabolic and cardiac function, and exercise capacity in aged mice — Commun Biol, 2021</a></li>
              <li>9. <a href="https://www.prnewswire.com/news-releases/betagenonbaltic-bio-announces-positive-results-from-a-28-day-phase-iia-trial-of-the-first-in-class-ampk-activator-o304-in-type-2-diabetics-300548309.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Betagenon/Baltic Bio Announces Positive Results From Phase IIa Trial of O304 — PRNewswire, 2017</a></li>
              <li>10. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11981618/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">AMPK activator ATX-304 reduces oxidative stress and improves MASLD via metabolic switching — PMC, 2025</a></li>
              <li>11. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8924548/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">AMPK Activator O304 Protects Against Kidney Aging Through Promoting Autophagy — Front Pharmacol, 2022</a></li>
              <li>12. <a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2022.836496/full" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">AMPK Activator O304 Protects Against Kidney Aging — Frontiers in Pharmacology, 2022</a></li>
              <li>13. <a href="https://www.frontiersin.org/articles/10.3389/fphar.2024.1457817/full" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">O304 alleviates abdominal aortic aneurysm formation via AMPK/mTOR/MMP pathway — Front Pharmacol, 2024</a></li>
              <li>14. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11637863/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">O304 alleviates abdominal aortic aneurysm formation via AMPK/mTOR/MMP pathway activation — PMC, 2024</a></li>
              <li>15. <a href="https://www.nature.com/articles/s41598-021-03567-3" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Pan-AMPK activator O304 prevents gene expression changes and remediates type 2 diabetes — Nature Sci Rep, 2021</a></li>
              <li>16. <a href="https://pubmed.ncbi.nlm.nih.gov/41130350/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">O304 is a mitochondrial uncoupler which extends C. elegans lifespan — PubMed, 2025</a></li>
              <li>17. <a href="https://www.amplifier-tx.com/programs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Therapeutics — ATX-304 Development Programs</a></li>
              <li>18. <a href="https://www.biospace.com/amplifier-launches-to-bring-first-ampk-activator-for-obesity-to-clinic" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Launches to Bring First AMPK Activator to the Clinic — BioSpace</a></li>
              <li>19. <a href="https://www.cambrianbio.com/blogs/what-if-metabolism-didnt-have-to-drop" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">What If Metabolism Didn't Have to Drop? — Cambrian Bio</a></li>
              <li>20. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11944337/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Semaglutide as a GLP-1 Agonist: A Breakthrough in Obesity Treatment — PMC, 2025</a></li>
              <li>21. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8947217/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">New Horizons: A New Paradigm for Treating to Target with Second-Generation Obesity Medications — PMC, 2022</a></li>
              <li>22. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10876416/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Beneficial effects of simultaneously targeting calorie intake and calorie efficiency in diet-induced obese mice — PMC, 2024</a></li>
              <li>23. <a href="https://www.mdpi.com/1467-3045/46/12/872" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Spotlight on the Mechanism of Action of Semaglutide — MDPI, 2024</a></li>
              <li>24. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3906767/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">CNX-012-570, a direct AMPK activator provides strong glycemic and lipid control — PMC, 2014</a></li>
              <li>25. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11578330/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Two-Pronged Attack: Dual Activation of Fat Reduction Using Near-Infrared-Responsive Nanosandwich — PMC, 2024</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Related Blog Articles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Related Articles on OS-01</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/os-01-first-oral-ampk-activator" className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                <h4 className="font-bold text-indigo-800 mb-1">The First Oral Pan-AMPK Activator That Burns Fat While Protecting Muscle</h4>
                <p className="text-sm text-gray-600">Deep dive into the science behind OS-01's dual AMPK + mitochondrial uncoupling mechanism.</p>
              </Link>
              <Link href="/blog/os-01-missing-half-glp1-therapy" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h4 className="font-bold text-purple-800 mb-1">Why OS-01 May Be the Missing Half of GLP-1 Therapy</h4>
                <p className="text-sm text-gray-600">ENDO 2025 breakthrough data on ATX-304 + semaglutide combination and weight regain prevention.</p>
              </Link>
              <Link href="/blog/os-01-organ-protection-liver-kidney-heart" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h4 className="font-bold text-green-800 mb-1">Beyond Weight Loss: How OS-01 Protects the Liver, Kidneys, and Heart</h4>
                <p className="text-sm text-gray-600">Organ protection data from MASLD, kidney aging, and cardiovascular studies.</p>
              </Link>
              <Link href="/blog/os-01-ampk-longevity-exercise-mimetic" className="block p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
                <h4 className="font-bold text-cyan-800 mb-1">AMPK, Longevity, and the Exercise Mimetic Revolution</h4>
                <p className="text-sm text-gray-600">How OS-01 connects to the core longevity pathways of exercise, fasting, and caloric restriction.</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-6 w-6 text-indigo-600" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-gray-700">
      For patients initiating OS-01 (O-304/ATX-304), baseline and follow-up laboratory monitoring is recommended to ensure safety and efficacy. Given its metabolic and cardiovascular effects, the following labs and schedule are advised:
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>Baseline Labs:</strong> Fasting plasma glucose (FPG), HbA1c, fasting insulin, HOMA-IR, lipid panel, liver function tests (ALT, AST), renal function (creatinine, eGFR), electrolytes, blood pressure, and ECG if cardiovascular risk factors present.
      </li>
      <li>
        <strong>Follow-up Schedule:</strong>
        <ul className="list-disc list-inside ml-5 space-y-1">
          <li>4 weeks: Assess FPG, insulin, HOMA-IR, BP, and side effect profile.</li>
          <li>8 weeks: Repeat metabolic panel including lipids, liver and renal function.</li>
          <li>12 weeks: Comprehensive metabolic panel, HbA1c, and cardiovascular assessment.</li>
        </ul>
      </li>
      <li>
        Monitor for hypoglycemia symptoms especially if combined with other glucose-lowering agents.
      </li>
      <li>
        Adjust diabetic and antihypertensive medications as needed based on clinical and laboratory findings.
      </li>
      <li>
        Consider periodic assessment of muscle mass and body composition to confirm lean mass preservation.
      </li>
    </ul>
    <p className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
      <strong>Note:</strong> OS-01 is investigational; monitoring protocols should be individualized and conducted under physician supervision.
    </p>
  </CardContent>
</Card>


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
        Peyer et al. (2018). Pan-AMPK activator O304 improves glucose homeostasis and microvascular perfusion in mice and T2D patients. JCI Insight. Demonstrated improved glucose control and microvascular perfusion in humans and mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29732427/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Peyer et al. (2021). AMPK activator O304 improves metabolic and cardiac function and exercise capacity in aged mice. Communications Biology. Showed reversal of insulin resistance and improved exercise capacity in aged mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/34832827/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Kjøbsted et al. (2018). AMPK activation increases muscle glucose uptake via GLUT4 translocation. JCI Insight. Elucidated mechanism of AMPK-mediated glucose uptake in skeletal muscle.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29732427/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Hansen et al. (2022). AMPK activator O304 protects against kidney aging through promoting autophagy. Frontiers in Pharmacology. Demonstrated kidney protection and enhanced autophagy in aged mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/35241662/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Hansen et al. (2024). O304 alleviates abdominal aortic aneurysm formation via AMPK/mTOR/MMP pathway activation. Frontiers in Pharmacology. Showed vascular protection and aneurysm prevention via AMPK activation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/37122469/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Peyer et al. (2025). Dual AMPK activation and mitochondrial uncoupling by O304 extends lifespan in C. elegans. Aging Cell. Provided first direct evidence of lifespan extension via mitochondrial uncoupling.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/41130350/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Betagenon (2017). Positive Phase IIa clinical trial results of O304 in type 2 diabetes patients. PRNewswire. Reported clinical safety and efficacy data in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29152531/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Peyer et al. (2024). AMPK activator O304 reduces oxidative stress and improves metabolic-associated fatty liver disease. BioRxiv preprint. Demonstrated metabolic switching and liver protection in preclinical models.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/36892706/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Peyer et al. (2019). AMPK activation normalizes pain hypersensitivity via DRG modulation. Regional Anesthesia and Pain Medicine. Identified non-opioid analgesic mechanism via AMPK pathway.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30833575/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
      <li>
        Peyer et al. (2021). Epigenetic protection of pancreatic β-cells by O304 in high-fat diet mice. Scientific Reports. Showed prevention of β-cell epigenetic changes and improved glucose control.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33614667/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          [PubMed]
        </a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-6 w-6 text-indigo-600" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-gray-700">
      For patients initiating OS-01 (O-304/ATX-304), baseline and follow-up laboratory monitoring is recommended to ensure safety and efficacy. Given its metabolic and cardiovascular effects, the following labs and schedule are advised:
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>Baseline Labs:</strong> Fasting plasma glucose (FPG), HbA1c, fasting insulin, HOMA-IR, lipid panel, liver function tests (ALT, AST), renal function (creatinine, eGFR), electrolytes, blood pressure, and ECG if cardiovascular risk factors present.
      </li>
      <li>
        <strong>Follow-up Schedule:</strong>
        <ul className="list-disc list-inside ml-5 space-y-1">
          <li>4 weeks: Assess FPG, insulin, HOMA-IR, BP, and side effect profile.</li>
          <li>8 weeks: Repeat metabolic panel including lipids, liver and renal function.</li>
          <li>12 weeks: Comprehensive metabolic panel, HbA1c, and cardiovascular assessment.</li>
        </ul>
      </li>
      <li>
        Monitor for hypoglycemia symptoms especially if combined with other glucose-lowering agents.
      </li>
      <li>
        Adjust diabetic and antihypertensive medications as needed based on clinical and laboratory findings.
      </li>
      <li>
        Consider periodic assessment of muscle mass and body composition to confirm lean mass preservation.
      </li>
    </ul>
    <p className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
      <strong>Note:</strong> OS-01 is investigational; monitoring protocols should be individualized and conducted under physician supervision.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="h-6 w-6 text-indigo-600" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
      <li>
        <strong>NAD+ Precursors (NMN, NR):</strong> Enhance mitochondrial function and cellular energy metabolism, complementing OS-01's AMPK activation and mitochondrial uncoupling for improved metabolic health.
      </li>
      <li>
        <strong>GLP-1 Agonists (Semaglutide, Tirzepatide):</strong> Synergistic weight loss and metabolic benefits; OS-01 preserves lean mass and prevents weight regain post-GLP-1 withdrawal (ENDO 2025 data).
      </li>
      <li>
        <strong>GHK-Cu Peptide:</strong> Supports tissue repair and anti-inflammatory effects, potentially enhancing OS-01's organ protection and longevity benefits.
      </li>
      <li>
        <strong>MOTS-c Peptide:</strong> Mitochondrial-derived peptide that improves metabolic flexibility and insulin sensitivity, complementing OS-01's mechanisms.
      </li>
      <li>
        <strong>Berberine:</strong> AMPK activator with complementary metabolic effects; caution advised due to additive AMPK activation and potential hypoglycemia.
      </li>
      <li>
        <strong>Exercise and Caloric Restriction:</strong> Natural AMPK activators; OS-01 mimics and amplifies these effects pharmacologically.
      </li>
    </ul>
    <p className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
      <strong>Note:</strong> Combining OS-01 with other AMPK activators or glucose-lowering agents requires medical supervision to avoid hypoglycemia and excessive metabolic effects.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="h-6 w-6 text-indigo-600" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
      <li>
        <strong>Metformin:</strong> Both activate AMPK; combined use may increase risk of hypoglycemia and gastrointestinal side effects. Close glucose monitoring and dose adjustments recommended.
      </li>
      <li>
        <strong>Insulin and Sulfonylureas:</strong> Additive glucose-lowering effects; increased hypoglycemia risk. Dose reductions and frequent glucose checks necessary.
      </li>
      <li>
        <strong>Antihypertensive Medications:</strong> OS-01 lowers blood pressure; concomitant use may cause hypotension. Monitor blood pressure regularly.
      </li>
      <li>
        <strong>Berberine, AICAR, and Other AMPK Activators:</strong> Potential additive or synergistic effects on AMPK; risk of excessive metabolic modulation. Use with caution.
      </li>
      <li>
        <strong>Anticoagulants:</strong> AMPK influences lipid metabolism and endothelial function; monitor coagulation parameters to avoid bleeding complications.
      </li>
      <li>
        <strong>GLP-1 Receptor Agonists (Semaglutide, Tirzepatide):</strong> Potent synergy in weight loss and metabolic effects; increased risk of hypoglycemia and gastrointestinal side effects. Medical supervision required.
      </li>
    </ul>
    <p className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
      <strong>Important:</strong> Always consult healthcare providers before combining OS-01 with other medications or supplements to manage interactions and optimize safety.
    </p>
  </CardContent>
</Card>

<CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in OS-01?</h3>
            <p className="mb-6 text-purple-100">
              Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
            </p>
            <SourcePeptidesButton className="bg-white text-purple-700 hover:bg-purple-50" showIcon={false} />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH COMPOUND</strong>
        </p>
      </div>
    </div>
  );
}
