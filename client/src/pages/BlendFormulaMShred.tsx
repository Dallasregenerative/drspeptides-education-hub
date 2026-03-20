import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Clock, Zap, Sparkles, AlertTriangle, CheckCircle, TrendingUp, ArrowLeft, Shield, Activity, Brain, BookOpen } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaMShred() {
  usePageTitle("Formula M-Shred: Advanced Metabolic Fat Loss", {
    description: "Formula M-Shred by DrsPeptides: triple-compound oral capsule with BAM-15 (10mg), SLU-PP-332 (15mg), and C15 Pentadecanoic Acid (150mg) for mitochondria-targeted fat loss, metabolic enhancement, and body composition optimization.",
    keywords: ['Formula M-Shred', 'M-Shred', 'MShred', 'DrsPeptides formula', 'proprietary peptide blend', 'BAM-15', 'SLU-PP-332', 'C15', 'Pentadecanoic Acid', 'mitochondrial uncoupler', 'fat loss formula', 'metabolic enhancement', 'exercise mimetic', 'body composition'],
    ogType: 'article' as const,
    schema: [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Formula M-Shred",
      "alternateName": ['M-Shred', 'MShred', 'Formula MShred', 'DrsPeptides M-Shred', 'Metabolic Fat Loss Formula'],
      "description": "Advanced triple-compound oral capsule combining BAM-15 mitochondrial uncoupler, SLU-PP-332 exercise mimetic, and C15 Pentadecanoic Acid for comprehensive mitochondria-targeted fat loss and metabolic optimization.",
      "url": "https://pepedhub.com/peptides/formula-m-shred",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "activeIngredient": "10 mg BAM-15 + 15 mg SLU-PP-332 + 150 mg C15 (Pentadecanoic Acid)",
      "administrationRoute": "Oral (enteric-coated capsule)",
      "drugClass": "Metabolic Compound",
      "mechanismOfAction": "Triple-pathway: mitochondrial uncoupling (BAM-15), ERR receptor agonism/exercise mimetic (SLU-PP-332), PPAR/AMPK activation (C15)",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": "https://pepedhub.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Formula M-Shred - Advanced Metabolic Fat Loss | DrsPeptides Proprietary Formula",
      "description": "Advanced triple-compound oral capsule combining BAM-15 mitochondrial uncoupler, SLU-PP-332 exercise mimetic, and C15 Pentadecanoic Acid for comprehensive mitochondria-targeted fat loss and metabolic optimization.",
      "url": "https://pepedhub.com/peptides/formula-m-shred",
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Metabolic Health"
      },
      "lastReviewed": "2026-02-23",
      "reviewedBy": {
        "@type": "Organization",
        "name": "Peptide Education Hub Medical Team"
      },
      "about": {
        "@type": "Drug",
        "name": "Formula M-Shred"
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
          "name": "Formula M-Shred",
          "item": "https://pepedhub.com/peptides/formula-m-shred"
        }
      ]
    }
  ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-500/30 text-red-200 border-red-400">
              Metabolic Series
            </Badge>
            <Badge className="bg-orange-500/30 text-orange-200 border-orange-400">
              Fat Loss & Body Composition
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula M-Shred
          </h1>
          <p className="text-xl text-orange-200 mb-6">
            Advanced Metabolic Series Fat Loss Formula (BAM-15 / SLU-PP-332 / C15)
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Flame className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-orange-100 text-lg font-medium">
              10 mg BAM-15 + 15 mg SLU-PP-332 + 150 mg C15 (Pentadecanoic Acid)
            </p>
            <p className="text-sm text-orange-300 mt-2">
              Enteric-coated capsules for optimal absorption and gastric protection
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-orange-600" />
              Mechanism of Action: Triple-Pathway Metabolic System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-5">
                <h4 className="font-bold text-red-800 mb-3">BAM-15 (Mitochondrial Uncoupler)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Dissipates proton gradient across inner mitochondrial membrane</li>
                  <li>• Forces compensatory fat oxidation to maintain cellular energy</li>
                  <li>• Activates AMPK and PGC-1α, promoting mitochondrial biogenesis</li>
                  <li>• Selectively depolarizes mitochondria <strong>without affecting plasma membrane potential</strong> (superior safety vs. DNP)</li>
                  <li>• <strong>54% increase in liver respiration rate</strong> within 1 hour</li>
                  <li>• Oral bioavailability: 67%; half-life: 1.7 hours</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-5">
                <h4 className="font-bold text-orange-800 mb-3">SLU-PP-332 (ERR Receptor Agonist)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Activates estrogen-related receptors (ERRα/β/γ) with ~4-fold ERRα selectivity</li>
                  <li>• Triggers acute aerobic exercise gene expression programs in skeletal muscle</li>
                  <li>• Increases type IIa oxidative muscle fibers and mitochondrial content</li>
                  <li>• Enhances exercise endurance; effects are ERRα-dependent</li>
                  <li>• "Exercise in a pill" — mimics aerobic exercise metabolic effects</li>
                  <li>• Muscle tissue concentration ~0.8 µM at 2 hours post-dose</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-5">
                <h4 className="font-bold text-amber-800 mb-3">C15 / Pentadecanoic Acid (Metabolic Protector)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Dual partial PPARα/δ agonist + AMPK activator + HDAC-6 inhibitor</li>
                  <li>• Dose-dependent reduction of mitochondrial ROS</li>
                  <li>• Shares 24 cell-based activities with rapamycin across 10 human cell systems</li>
                  <li>• Anti-inflammatory: lowers MCP-1, TNFα, IL-6, IL-10, IL-17A/F</li>
                  <li>• Repairs mitochondrial function; improves red blood cell membrane stability</li>
                  <li>• <strong>FDA GRAS status</strong>; non-cytotoxic at all concentrations tested</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-red-100 to-amber-100 rounded-lg p-5">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                BAM-15 increases energy demand through mitochondrial uncoupling + SLU-PP-332 builds oxidative capacity through exercise-mimetic gene programs + C15 provides metabolic protection via PPAR/AMPK activation and anti-inflammatory support = <strong>a coordinated fat-loss system</strong> that burns more energy, builds better mitochondria, and shields cells from oxidative damage — exceeding single-agent approaches.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-orange-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-3">Fat Loss & Body Composition</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Increased energy expenditure independent of activity or food intake</li>
                  <li>• Preferential fat oxidation (elevated plasma NEFA without ketosis)</li>
                  <li>• Reversed diet-induced obesity in preclinical models</li>
                  <li>• Lean mass preservation throughout treatment</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-3">Metabolic Enhancement</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reversal of diet-induced insulin resistance</li>
                  <li>• Enhanced fatty acid oxidation and metabolic flexibility</li>
                  <li>• 30% insulin sensitivity improvement (C15 via AMPK/AKT pathways)</li>
                  <li>• Reduced hepatic glucose output</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-3">Mitochondrial Optimization</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Mitochondrial biogenesis via AMPK→PGC-1α axis (BAM-15) and ERR programs (SLU-PP-332)</li>
                  <li>• Increased mitochondrial density visible on electron micrographs</li>
                  <li>• Enhanced mitochondrial quality control (PINK1-ubiquitin, LC3II activation)</li>
                  <li>• C15 reduces mitochondrial ROS dose-dependently</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-bold text-yellow-800 mb-3">Anti-Inflammatory & Protective</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Multi-pathway inflammation reduction (C15: 36 biomarkers across 10 cell systems)</li>
                  <li>• Decreased hepatic fat, inflammatory lipids, and oxidative stress</li>
                  <li>• Macrophage M1→M2 polarization shift (BAM-15)</li>
                  <li>• Anti-fibrotic and hepatoprotective effects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Stats */}
        <Card className="mb-8 border-2 border-orange-400 bg-gradient-to-r from-red-50 to-amber-50">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Flame className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-red-600">54%</p>
                <p className="text-sm text-gray-600">Liver Respiration Increase</p>
              </div>
              <div>
                <Activity className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-orange-600">67%</p>
                <p className="text-sm text-gray-600">Oral Bioavailability (BAM-15)</p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-amber-600">30%</p>
                <p className="text-sm text-gray-600">Insulin Sensitivity Improvement</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600">GRAS</p>
                <p className="text-sm text-gray-600">FDA Status (C15)</p>
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
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                <div className="bg-red-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-6 Hours</div>
                <p className="text-gray-700">Metabolic shift toward fat oxidation, stable energy, mild thermogenic sensation, improved mental clarity</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="bg-orange-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Days</div>
                <p className="text-gray-700">Sustained energy expenditure increase, reduced carbohydrate cravings, enhanced exercise performance</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="bg-amber-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-2 Weeks</div>
                <p className="text-gray-700">Measurable increase in resting metabolic rate, improved exercise recovery, early fat loss signals</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                <div className="bg-yellow-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-4 Weeks</div>
                <p className="text-gray-700">Visible body composition changes, improved metabolic markers (fasting glucose, insulin), reduced hepatic fat</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Months</div>
                <p className="text-gray-700">Significant fat mass reduction with lean mass preservation, optimized insulin sensitivity, sustained metabolic benefits</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dosing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-orange-600" />
              Dosing & Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-lg p-5">
                <h4 className="font-bold text-orange-800 mb-3">Standard Protocol</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Dose:</strong> 1 capsule daily (10 mg BAM-15 / 15 mg SLU-PP-332 / 150 mg C15)</li>
                  <li>• <strong>Timing:</strong> Morning with food (enteric coating protects against gastric degradation)</li>
                  <li>• <strong>Duration:</strong> Cycle-based; consult prescribing physician</li>
                  <li>• <strong>Capsules per bottle:</strong> 10 enteric-coated capsules</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-5">
                <h4 className="font-bold text-amber-800 mb-3">Optimization Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• BAM-15 half-life is 1.7 hours — some protocols split dosing to 2× daily for sustained uncoupling</li>
                  <li>• Adequate hydration is important due to increased metabolic rate</li>
                  <li>• Pair with moderate exercise for synergistic ERR-mediated adaptations</li>
                  <li>• Avoid concurrent use with other thermogenic or stimulant compounds</li>
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
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-blue-800 mb-2">Preclinical Safety Data (No Human Trials)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>BAM-15:</strong> No adverse effects on body temperature, food intake, ALT, AST, GLDH, or creatine kinase in 5-week mouse studies</li>
                <li>• <strong>SLU-PP-332:</strong> No overt toxicity at 50 mg/kg b.i.d. for 10 days; normal CBC, electrolytes, creatine kinase</li>
                <li>• <strong>C15:</strong> FDA GRAS status; non-cytotoxic at all tested concentrations; safe in 14-day rat toxicology</li>
              </ul>
              <p className="text-sm text-blue-700 mt-2 font-medium">
                Important: BAM-15 and SLU-PP-332 remain preclinical research compounds with no completed human clinical trials. C15 is the only component with established human safety data. All use requires physician oversight.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-purple-800 mb-2">⚠️ WADA Notice</h4>
              <p className="text-sm text-gray-700">
                BAM-15 was added to the <strong>2026 WADA Prohibited List</strong> under S4.4.1 (AMPK activators/metabolic modulators). Athletes and military personnel subject to drug testing should not use this formula.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy and lactation</li>
                  <li>• Known hypersensitivity to any component</li>
                  <li>• Active cancer or recent cancer history</li>
                  <li>• Concurrent use of DNP or other mitochondrial uncouplers</li>
                  <li>• Athletes/military subject to WADA or DoD drug testing</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cardiovascular disease (BAM-15 has vasodilatory/AMPK effects; monitor BP)</li>
                  <li>• Diabetes (may require medication dose adjustments)</li>
                  <li>• Thyroid disorders (mitochondrial uncoupling may affect metabolic rate)</li>
                  <li>• Liver disease (BAM-15 primarily localizes in liver; monitor hepatic function)</li>
                  <li>• Hormone-sensitive conditions (ERR receptor activation)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Diabetes medications (monitor blood sugar closely, adjust doses due to improved insulin sensitivity)</li>
                <li>• Other thermogenic compounds or DNP (do not combine — additive uncoupling risk)</li>
                <li>• Stimulants/caffeine (use cautiously due to additive metabolic effects)</li>
                <li>• Anticoagulants (C15 may have mild platelet effects; monitor INR)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Complete References & Source Studies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-red-600" />
              Complete References & Source Studies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold text-red-800 mb-3">BAM-15 (Mitochondrial Uncoupler) Studies</h4>
            <ol className="space-y-2 text-sm text-gray-700 mb-6">
              <li>1. <a href="https://www.nature.com/articles/s41467-020-16298-2" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Mitochondrial uncoupler BAM15 reverses diet-induced obesity and insulin resistance — Nature Communications, 2020</a></li>
              <li>2. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7338798/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">BAM15-mediated mitochondrial uncoupling protects against obesity and hepatic steatosis — PMC, 2020</a></li>
              <li>3. <a href="https://pubmed.ncbi.nlm.nih.gov/35304976/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Mitochondrial uncoupling attenuates sarcopenic obesity by enhancing skeletal muscle mitophagy and quality control — PubMed, 2022</a></li>
              <li>4. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10600450/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">BAM15 as a mitochondrial uncoupler: a promising therapeutic agent for obesity — PMC Review, 2023</a></li>
              <li>5. <a href="https://www.biorxiv.org/content/10.1101/2025.10.30.685477v1.full-text" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Mitochondrial uncoupler BAM15 improves skeletal muscle function in sarcopenia — bioRxiv, 2025</a></li>
              <li>6. <a href="https://www.mdpi.com/2218-1989/12/11/1129" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">BAM15 relieves neurodegeneration in aged C. elegans and extends lifespan — MDPI Metabolites, 2022</a></li>
              <li>7. <a href="https://news.vt.edu/articles/2020/05/FralinLifeSci-Webster-Santos-Nature-Comms-Obesity.html" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Virginia Tech drug researcher develops 'fat burning' molecule — Virginia Tech News, 2020</a></li>
              <li>8. <a href="https://www.pbrc.edu/news/media/2022/BAM15-and-sarcopenic%20obesity.aspx" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">BAM15 helped geriatric mice with obesity add muscle, strength and energy while losing fat — PBRC, 2022</a></li>
              <li>9. <a href="https://portlandpress.com/clinsci/article/138/4/173/234024/Beneficial-effects-of-simultaneously-targeting" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Beneficial effects of simultaneously targeting calorie intake and calorie efficiency: BAM15 + semaglutide — Clinical Science, 2024</a></li>
            </ol>

            <h4 className="font-bold text-orange-800 mb-3">SLU-PP-332 (Exercise Mimetic / ERR Agonist) Studies</h4>
            <ol start={10} className="space-y-2 text-sm text-gray-700 mb-6">
              <li>10. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10801787/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">A Synthetic ERR Agonist Alleviates Metabolic Syndrome — JPET / PMC, 2024</a></li>
              <li>11. <a href="https://pubs.acs.org/doi/10.1021/acschembio.2c00720" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Synthetic ERRα/β/γ Agonist Induces an ERRα-Dependent Acute Aerobic Exercise Response — ACS Chemical Biology, 2023</a></li>
              <li>12. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11584170/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Synthetic ERRα/β/γ agonist induces ERRα-dependent acute aerobic exercise response and enhances exercise capacity — PMC, 2023</a></li>
              <li>13. <a href="https://www.biorxiv.org/content/10.1101/2022.10.05.510974v1.full-text" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">A Synthetic ERRα Agonist Induces an Acute Aerobic Exercise Response — bioRxiv, 2022</a></li>
              <li>14. <a href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1616693/full" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Targeting ERRs to counteract age-related muscle atrophy — Frontiers in Physiology, 2025</a></li>
              <li>15. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12277287/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Targeting ERRs to counteract age-related muscle atrophy and metabolic dysfunction — PMC, 2025</a></li>
              <li>16. <a href="https://www.ahajournals.org/doi/abs/10.1161/CIRCULATIONAHA.123.066542" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Novel pan-ERR agonists ameliorate heart failure through enhancing cardiac fatty acid metabolism — Circulation, 2024</a></li>
              <li>17. <a href="https://jpet.aspetjournals.org/article/S0022-3565(25)40300-0/abstract" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">An orally active ERR agonist, SLU-PP-915, enhances aerobic exercise capacity — JPET, 2025</a></li>
              <li>18. <a href="https://news.ufl.edu/2023/09/exercise-mimicking-drug/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Exercise-mimicking drug sheds weight, boosts muscle activity — University of Florida News, 2023</a></li>
              <li>19. <a href="https://pubmed.ncbi.nlm.nih.gov/37739806/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">A Synthetic ERR Agonist Alleviates Metabolic Syndrome — PubMed, 2024</a></li>
            </ol>

            <h4 className="font-bold text-amber-800 mb-3">C15 / Pentadecanoic Acid (Metabolic Protector) Studies</h4>
            <ol start={20} className="space-y-2 text-sm text-gray-700">
              <li>20. <a href="https://www.nature.com/articles/s41598-020-64960-y" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Efficacy of dietary odd-chain saturated fatty acid pentadecanoic acid parallels broad associated health benefits in humans — Nature Scientific Reports, 2020</a></li>
              <li>21. <a href="https://www.mdpi.com/2072-6643/15/21/4607" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Pentadecanoic Acid (C15:0), an Essential Fatty Acid, Shares Clinically Relevant Cell-Based Activities — MDPI Nutrients, 2023</a></li>
              <li>22. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9135213/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Broader and safer clinically-relevant activities of pentadecanoic acid compared to omega-3 — PLoS One / PMC, 2022</a></li>
              <li>23. <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0268778" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Evaluation of an emerging essential fatty acid across twelve primary human cell-based disease systems — PLoS One, 2022</a></li>
              <li>24. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12754079/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Pentadecanoic acid (C15:0) and cardiovascular disease — PMC, 2025</a></li>
              <li>25. <a href="https://www.sciencedirect.com/science/article/pii/S0022316624004115" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Pentadecanoic Acid Supplementation in Young Adults with Overweight and Obesity — ScienceDirect, 2024</a></li>
              <li>26. <a href="https://www.wjgnet.com/1949-8454/full/v16/i4/111258.htm" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Molecular and cellular mechanisms of pentadecanoic acid — World Journal of Biological Chemistry, 2025</a></li>
              <li>27. <a href="https://www.fooddive.com/news/seraphina-therapeutics-fatty-acid-powder-gains-gras-status/602238/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Seraphina Therapeutics' fatty acid powder gains FDA GRAS status — Food Dive, 2021</a></li>
              <li>28. <a href="https://www.mdpi.com/2218-1989/14/7/355" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Ferroptosis and accelerated aging as newly identified C15:0 deficiency syndrome — MDPI Metabolites, 2024</a></li>
              <li>29. <a href="https://www.wjgnet.com/1949-8462/full/v17/i12/110861" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Pentadecanoic acid (C15:0) and cardiovascular disease: A narrative review — World Journal of Cardiology, 2025</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Related Blog Articles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Related Articles on M-Shred</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/m-shred-triple-pathway-fat-loss" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <h4 className="font-bold text-red-800 mb-1">How BAM-15, SLU-PP-332, and C15 Create a Triple-Pathway Fat Loss System</h4>
                <p className="text-sm text-gray-600">Deep dive into the synergy of M-Shred's three active compounds.</p>
              </Link>
              <Link href="/blog/bam15-mitochondrial-uncoupler-science" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <h4 className="font-bold text-orange-800 mb-1">BAM-15: The Mitochondrial Uncoupler That Burns Fat Without the Danger of DNP</h4>
                <p className="text-sm text-gray-600">How BAM-15 safely increases energy expenditure through targeted mitochondrial uncoupling.</p>
              </Link>
              <Link href="/blog/slu-pp-332-exercise-mimetic-pill" className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                <h4 className="font-bold text-amber-800 mb-1">SLU-PP-332: The Exercise Mimetic Pill That Mimics Marathon Training</h4>
                <p className="text-sm text-gray-600">The science behind the ERR agonist that makes your body think it's exercising.</p>
              </Link>
              <Link href="/blog/c15-pentadecanoic-acid-essential-fatty-acid" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h4 className="font-bold text-yellow-800 mb-1">C15: The Newly Discovered Essential Fatty Acid Rewriting Metabolic Medicine</h4>
                <p className="text-sm text-gray-600">Why pentadecanoic acid may be the first new essential fatty acid discovered in 90 years.</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula M-Shred?</h3>
            <p className="mb-6 text-orange-100">
              Dr. Peptide AI generates personalized protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
            </p>
            <SourcePeptidesButton className="bg-white text-orange-700 hover:bg-orange-50" showIcon={false} />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
