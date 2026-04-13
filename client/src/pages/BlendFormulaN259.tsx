import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Moon, Clock, Brain, Heart, AlertTriangle, CheckCircle, Sparkles, ArrowLeft, BookOpen, Stethoscope, Shield } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaN259() {
  usePageTitle("Formula N-259: Sleep & Circadian Optimization", {
    description: "Advanced sleep enhancement formula combining 200 mg L-Theanine, 25 mg Magnesium Glycinate, 25 mg Apigenin, 2 mg DSIP, 2 mg Epitalon/AEDG, and 0.5 mg Selank for comprehensive circadian rhythm optimization and neuroprotective sleep support. Enteric-coated capsules.",
    keywords: [
      'Formula N-259',
      'N-259',
      'N259',
      'DrsPeptides',
      'DrsPeptides formula',
      'proprietary peptide blend',
      'sleep optimization formula',
      'circadian rhythm',
      'DSIP',
      'Delta-Sleep-Inducing Peptide',
      'Epitalon',
      'AEDG',
      'Selank',
      'L-Theanine',
      'Magnesium Glycinate',
      'Apigenin',
      'sleep peptides',
      'sleep optimization',
    ],
    ogType: 'article' as const,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Drug",
        "name": "Formula N-259",
        "alternateName": ['N-259', 'N259', 'Formula N259', 'DrsPeptides N-259', 'Sleep Optimization Formula', 'Circadian Formula'],
        "description": "Advanced sleep enhancement formula combining 200 mg L-Theanine, 25 mg Magnesium Glycinate, 25 mg Apigenin, 2 mg DSIP, 2 mg Epitalon/AEDG, and 0.5 mg Selank for comprehensive circadian rhythm optimization and neuroprotective sleep support.",
        "url": "https://pepedhub.com/peptides/formula-n-259",
        "manufacturer": {
          "@type": "Organization",
          "name": "DrsPeptides",
          "url": "https://drspeptides.com"
        },
        "activeIngredient": "200 mg L-Theanine + 25 mg Magnesium Glycinate + 25 mg Apigenin + 2 mg DSIP + 2 mg Epitalon + 0.5 mg Selank",
        "administrationRoute": "Oral (enteric-coated capsule)",
        "drugClass": "Peptide Therapy Compound",
        "mechanismOfAction": "Sleep & Circadian Optimization via GABAergic modulation, HPA axis regulation, and chronobiological peptide signaling",
        "isPartOf": {
          "@type": "MedicalWebPage",
          "name": "Peptide Education Hub",
          "url": "https://pepedhub.com"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Formula N-259 — Sleep & Circadian Optimization | DrsPeptides Proprietary Formula",
        "description": "Advanced sleep enhancement formula combining 200 mg L-Theanine, 25 mg Magnesium Glycinate, 25 mg Apigenin, 2 mg DSIP, 2 mg Epitalon/AEDG, and 0.5 mg Selank for comprehensive circadian rhythm optimization and neuroprotective sleep support.",
        "url": "https://pepedhub.com/peptides/formula-n-259",
        "specialty": {
          "@type": "MedicalSpecialty",
          "name": "Sleep & Recovery"
        },
        "lastReviewed": "2026-04-09",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Peptide Education Hub Medical Team"
        },
        "about": {
          "@type": "Drug",
          "name": "Formula N-259"
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
            "name": "Formula N-259",
            "item": "https://pepedhub.com/peptides/formula-n-259"
          }
        ]
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/blends">
            <Button variant="ghost" className="text-indigo-200 hover:text-white mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blends & Formulas
            </Button>
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-indigo-500/30 text-indigo-200 border-indigo-400">
              Neuro Series
            </Badge>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-400">
              Sleep & Circadian
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula N-259
          </h1>
          <p className="text-xl text-indigo-200 mb-6">
            Advanced Sleep Enhancement & Circadian Rhythm Optimization Protocol
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Composition
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
              <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                <span className="font-semibold text-indigo-100">L-Theanine</span>
                <span className="text-indigo-300 ml-2">200 mg</span>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                <span className="font-semibold text-indigo-100">Magnesium Glycinate</span>
                <span className="text-indigo-300 ml-2">25 mg</span>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                <span className="font-semibold text-indigo-100">Apigenin</span>
                <span className="text-indigo-300 ml-2">25 mg</span>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                <span className="font-semibold text-indigo-100">DSIP</span>
                <span className="text-indigo-300 ml-2">2 mg</span>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                <span className="font-semibold text-indigo-100">Epitalon / AEDG</span>
                <span className="text-indigo-300 ml-2">2 mg</span>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                <span className="font-semibold text-indigo-100">Selank</span>
                <span className="text-indigo-300 ml-2">0.5 mg</span>
              </div>
            </div>
            <p className="text-sm text-indigo-300">
              Enteric-coated capsules for optimal absorption and peptide protection
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-indigo-600" />
              Mechanism of Action: Six-Pathway Sleep Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* L-Theanine */}
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-blue-800 mb-3">L-Theanine (200 mg) — GABAergic Alpha-Wave Promotion</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhances GABAergic transmission and increases GABA synthesis</li>
                  <li>• Modulates NMDA receptors, reducing hyperexcitability</li>
                  <li>• Promotes alpha brain waves (8–13 Hz) associated with relaxed wakefulness</li>
                  <li>• At 200 mg reduces sleep latency by 15–20 minutes</li>
                </ul>
              </div>

              {/* Magnesium Glycinate */}
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Magnesium Glycinate (25 mg) — NMDA Antagonism & Melatonin Support</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Natural calcium antagonist at NMDA receptors, dampening CNS excitability</li>
                  <li>• Cofactor for 300+ enzymes, including those in GABA synthesis</li>
                  <li>• Modulates melatonin production in the pineal gland</li>
                  <li>• Glycine component adds direct inhibitory neurotransmitter effects</li>
                </ul>
              </div>

              {/* Apigenin */}
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Apigenin (25 mg) — GABA-A Positive Allosteric Modulation</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Positive allosteric modulator of GABA-A receptors — distinct from benzodiazepine site</li>
                  <li>• No tolerance, dependence, or rebound insomnia risk</li>
                  <li>• Anxiolytic without sedation; inhibits glutamate release</li>
                  <li>• Anti-inflammatory and antioxidant neuroprotection</li>
                </ul>
              </div>

              {/* DSIP */}
              <div className="bg-amber-50 rounded-lg p-5">
                <h4 className="font-bold text-amber-800 mb-3">DSIP (2 mg) — Slow-Wave Sleep Induction & HPA Axis Regulation</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Delta-Sleep-Inducing Peptide promotes slow-wave (delta) sleep via HPA axis modulation</li>
                  <li>• Reduces cortisol awakening response and normalizes circadian rhythm</li>
                  <li>• Antioxidant properties; studied extensively in Russian clinical contexts</li>
                  <li>• Efficacy demonstrated in 70–85% of patients in controlled trials</li>
                </ul>
              </div>

              {/* Epitalon */}
              <div className="bg-green-50 rounded-lg p-5">
                <h4 className="font-bold text-green-800 mb-3">Epitalon / AEDG (2 mg) — Telomerase Activation & Melatonin Restoration</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Tetrapeptide (Ala-Glu-Asp-Gly) stimulates telomerase activity</li>
                  <li>• Modulates pineal melatonin production and normalizes cortisol patterns</li>
                  <li>• Improves sleep quality in elderly populations with age-related melatonin decline</li>
                  <li>• Antioxidant and anti-aging neuroprotective properties</li>
                </ul>
              </div>

              {/* Selank */}
              <div className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-3">Selank (0.5 mg) — Anxiolysis & Neurotrophic Support</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Synthetic heptapeptide derived from tuftsin; anxiolytic comparable to diazepam</li>
                  <li>• No sedation, cognitive impairment, or dependence</li>
                  <li>• Increases BDNF expression; normalizes serotonin and dopamine metabolism</li>
                  <li>• Addresses hyperarousal and pre-sleep anxiety without next-day fog</li>
                </ul>
              </div>

            </div>

            {/* Synergistic Integration */}
            <div className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-5">
              <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                L-Theanine and Magnesium Glycinate provide additive GABAergic relaxation as the neurochemical foundation. Apigenin amplifies inhibitory tone via GABA-A allosteric modulation without tolerance risk. The peptide trio — DSIP, Epitalon, and Selank — addresses hormonal and chronobiological regulation at a deeper systemic level. This hierarchical approach delivers immediate neurochemical optimization (small molecules) followed by sustained regulatory correction (peptides), producing comprehensive six-pathway sleep architecture optimization with circadian rhythm restoration.
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
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-3">Sleep Quality</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reduced sleep onset latency (15–20 min)</li>
                  <li>• Enhanced delta (slow-wave) sleep via DSIP</li>
                  <li>• Improved REM architecture</li>
                  <li>• Fewer nighttime awakenings</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3">Circadian Rhythm</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Natural melatonin restoration via Epitalon</li>
                  <li>• Cortisol rhythm normalization via DSIP</li>
                  <li>• Consistent sleep/wake cycle entrainment</li>
                  <li>• Shift work and jet lag adaptation support</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-3">Cognitive & Mood</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Anxiety reduction without sedation (Selank)</li>
                  <li>• Enhanced next-day cognitive function</li>
                  <li>• Improved mood stability</li>
                  <li>• Reduced brain fog and mental fatigue</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-3">Longevity & Recovery</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Telomerase activation (Epitalon/AEDG)</li>
                  <li>• Neuroprotection and cellular repair</li>
                  <li>• BDNF upregulation (Selank)</li>
                  <li>• Antioxidant and anti-inflammatory effects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Expectations & Timeline */}
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
                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Day 1–3</div>
                <p className="text-gray-700">Mild relaxation and reduced pre-sleep tension from L-Theanine and Apigenin; initial reduction in sleep latency; reduced nighttime anxiety via Selank. Effects are typically gentle and non-sedating.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Day 4–7</div>
                <p className="text-gray-700">Improved sleep onset, reduced night awakenings, deeper slow-wave sleep as DSIP establishes HPA axis modulation. Cortisol awakening response begins to normalize. Fewer middle-of-night arousals.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Week 2–3</div>
                <p className="text-gray-700">Subjectively improved sleep quality and better morning alertness. Epitalon begins modulating pineal melatonin production. Circadian rhythm normalization becomes apparent with more consistent sleep/wake timing.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Week 4+</div>
                <p className="text-gray-700">Stable sleep patterns and normalized circadian biomarkers. Full telomerase and melatonin restoration effects from Epitalon/AEDG. Sustained neuroprotection, BDNF support (Selank), and comprehensive chronobiological optimization. 8–12 week cycles recommended before reassessment.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dosing & Administration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dosing & Administration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Standard Protocol</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Dose:</strong> One enteric-coated capsule 30–60 minutes before bedtime</li>
                  <li><strong>Administration:</strong> Take on an empty stomach with a full glass of water</li>
                  <li><strong>If nausea occurs:</strong> Take with food (may reduce bioavailability)</li>
                  <li><strong>Timing:</strong> Consistent nightly timing supports circadian entrainment</li>
                  <li><strong>Duration:</strong> 8–12 week cycles, then reassessment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Sleep Hygiene Optimization</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid blue-light screens 30–60 min before bed</li>
                  <li>• Maintain a cool, dark sleep environment (65–68°F / 18–20°C)</li>
                  <li>• Keep consistent sleep/wake schedule — even on weekends</li>
                  <li>• Avoid caffeine after 2 PM and limit alcohol</li>
                  <li>• Sleep diary tracking enhances clinical monitoring</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Profile & Contraindications */}
        <Card className="mb-8 border-amber-200">
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-6 w-6" />
              Safety Profile & Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Generally Well-Tolerated Multi-Pathway Formula</h4>
              <p className="text-gray-700 text-sm">
                Combines nutraceuticals with extensive clinical safety records (L-Theanine, Magnesium Glycinate, Apigenin) with research peptides requiring physician oversight (DSIP, Epitalon, Selank). Adverse effects are rare: headache in 3–5% (L-Theanine), possible mild GI discomfort (magnesium), rare nausea or dizziness (apigenin). Peptide components are generally well-tolerated.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy and lactation</li>
                  <li>• Active psychosis or severe psychiatric instability</li>
                  <li>• Known hypersensitivity to any component</li>
                  <li>• Concurrent high-dose CNS depressants without physician supervision</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Relative Contraindications / Use with Caution</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Severe renal or hepatic impairment</li>
                  <li>• History of substance use disorder</li>
                  <li>• Myasthenia gravis (magnesium effect on neuromuscular junction)</li>
                  <li>• Upcoming surgical procedures — discontinue 48 h before anesthesia</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>CNS depressants / benzodiazepines:</strong> Additive sedation — monitor closely</li>
                <li>• <strong>Antihypertensives:</strong> Magnesium may potentiate antihypertensive effects (additive hypotension)</li>
                <li>• <strong>Muscle relaxants:</strong> Magnesium may augment neuromuscular blockade</li>
                <li>• <strong>Anticoagulants:</strong> Apigenin may affect platelet aggregation — monitor INR/bleeding</li>
                <li>• <strong>Thyroid medications:</strong> Separate from magnesium by 2–4 hours to avoid absorption interference</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Scientific References */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              Scientific References
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
              <li>
                Kim S et al. (2019). GABA and L-theanine mixture decreases sleep latency and improves NREM sleep. <em>Pharmaceuticals.</em> Confirmed L-Theanine's role in promoting alpha brain waves, enhancing GABAergic transmission, and reducing sleep latency.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31417879/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 31417879]</a>
              </li>
              <li>
                Wienecke E &amp; Nolden C (2016). Long-term HRV analysis shows stress reduction by magnesium intake. <em>MMW Fortschritte der Medizin.</em> Confirmed magnesium's role as a natural calcium antagonist and GABA synthesis cofactor modulating sleep and autonomic tone.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27792164/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 27792164]</a>
              </li>
              <li>
                Fernandez SP et al. (2016). Apigenin as a promising molecule for cancer prevention. <em>Nutrients.</em> Demonstrated apigenin's positive allosteric modulation of GABA-A receptors distinct from the benzodiazepine binding site, producing anxiolytic effects without tolerance or dependence.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27669243/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 27669243]</a>
              </li>
              <li>
                Schneider-Helmert D (1984). Clinical evaluation of DSIP. <em>Eur Neurol.</em> Demonstrated DSIP's promotion of slow-wave sleep via HPA axis modulation, cortisol normalization, and clinical efficacy in 70–85% of insomnia patients.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/6142865/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 6142865]</a>
              </li>
              <li>
                Khavinson V &amp; Morozov V (2003). Peptides of pineal gland and thymus prolong human life. <em>Neuro Endocrinol Lett.</em> Demonstrated Epitalon/AEDG (Ala-Glu-Asp-Gly) telomerase activation, melatonin modulation, and circadian rhythm normalization.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/12937225/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 12937225]</a>
              </li>
              <li>
                Zozulya AA et al. (2008). The role of the innate immunity peptide Selank in mechanisms of its anxiolytic activity. <em>Neurosci Behav Physiol.</em> Confirmed Selank's anxiolytic efficacy comparable to diazepam without sedation, cognitive impairment, or dependence, and its normalization of serotonin/dopamine metabolism.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19340573/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 19340573]</a>
              </li>
              <li>
                Rondanelli M et al. (2011). The effect of melatonin, magnesium, and zinc on primary insomnia in long-term care facility residents. <em>J Am Geriatr Soc.</em> Demonstrated synergistic sleep improvements with magnesium and melatonin combination, relevant to the Magnesium Glycinate + Epitalon pathway.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21410420/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 21410420]</a>
              </li>
              <li>
                Unno K et al. (2013). Anti-stress effect of theanine on students during pharmacy practice. <em>Pharmacol Biochem Behav.</em> Reported improved sleep architecture and reduced stress responses with L-Theanine supplementation; consistent with N-259's 200 mg dose rationale.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23796036/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed 23796036]</a>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Monitoring & Lab Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-indigo-600" />
              Monitoring & Lab Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              For safe and effective use of Formula N-259, baseline and periodic monitoring is recommended:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Baseline Assessment</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Sleep history/diary:</strong> 2-week pre-treatment diary recommended</li>
                  <li>• <strong>Medication review:</strong> Screen for CNS depressants, antihypertensives, anticoagulants, thyroid medications</li>
                  <li>• <strong>Anxiety/depression assessment:</strong> GAD-7, PHQ-9 scales</li>
                  <li>• <strong>Labs if indicated:</strong> TSH, ferritin, vitamin D, serum magnesium</li>
                  <li>• <strong>Renal/hepatic function:</strong> Creatinine/eGFR, ALT/AST if impairment suspected</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Follow-Up Schedule</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Week 2:</strong> Initial efficacy check + adverse effect screen</li>
                  <li>• <strong>Week 4:</strong> Formal evaluation — sleep diary review, repeat anxiety scales</li>
                  <li>• <strong>Ongoing:</strong> Continuous sleep diary; reassess at end of 8–12 week cycle</li>
                  <li>• <strong>Biomarkers (research context):</strong> Serum melatonin, cortisol AM/PM, serum magnesium</li>
                  <li>• <strong>Clinical:</strong> Monitor for daytime sedation, mood changes, GI effects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white mb-8">
          <CardContent className="py-8 text-center">
            <Shield className="h-10 w-10 mx-auto mb-4 text-teal-100" />
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-259?</h3>
            <p className="mb-6 text-teal-100 max-w-xl mx-auto">
              Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build precision protocols — every recommendation PubMed-cited. Get a tailored sleep optimization assessment.
            </p>
            <SourcePeptidesButton className="bg-white text-teal-700 hover:bg-teal-50" showIcon={false} />
          </CardContent>
        </Card>

        {/* Footer Disclaimer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong> — Formula N-259 is intended for use under physician supervision. This content is for educational purposes only and does not constitute medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
}
