import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { ArrowLeft, Activity, Zap, Shield, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function PeptideGlutathione() {
  return (
    <>
    <Helmet>
        <title>Glutathione | DrsPeptides</title>
        <meta name="description" content="Clinical guide to glutathione master antioxidant for detoxification and cellular health. Mechanisms, administration routes, dosing protocols, and evidence-based clinical benefits." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glutathione | DrsPeptides" />
        <meta property="og:description" content="Clinical guide to glutathione master antioxidant for detoxification and cellular health. Mechanisms, administration routes, dosing protocols, and evidence-based clinical benefits." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glutathione | DrsPeptides" />
        <meta name="twitter:description" content="Clinical guide to glutathione master antioxidant for detoxification and cellular health. Mechanisms, administration routes, dosing protocols, and evidence-based clinical benefits." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Glutathione",
          "description": "Clinical guide to glutathione master antioxidant for detoxification and cellular health. Mechanisms, administration routes, dosing protocols, and evidence-based clinical benefits.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2025-12-01",
          "medicalAudience": {
                    "@type": "MedicalAudience",
                    "audienceType": "Physician"
          },
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <Badge className="mb-4">Master Antioxidant</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Glutathione
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The body's master antioxidant and detoxification molecule. Glutathione (GSH) is a tripeptide composed of glutamate, cysteine, and glycine that plays critical roles in cellular defense, immune function, and longevity.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <Activity className="h-5 w-5 text-green-600 mb-2" />
                  <CardTitle className="text-2xl">Master</CardTitle>
                  <CardDescription>Antioxidant</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Zap className="h-5 w-5 text-emerald-600 mb-2" />
                  <CardTitle className="text-2xl">1,200+</CardTitle>
                  <CardDescription>Research Citations</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Shield className="h-5 w-5 text-blue-600 mb-2" />
                  <CardTitle className="text-2xl">Cellular</CardTitle>
                  <CardDescription>Defense System</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Clock className="h-5 w-5 text-purple-600 mb-2" />
                  <CardTitle className="text-2xl">IV/Oral</CardTitle>
                  <CardDescription>Multiple Routes</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="pb-20">
        <div className="container">
          <Tabs defaultValue="overview" className="max-w-4xl">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>The Master Antioxidant</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p>
                    <strong>Glutathione (GSH)</strong> is the body's most abundant and important intracellular antioxidant, found in virtually every cell. This tripeptide composed of glutamate, cysteine, and glycine serves as the primary defense against oxidative stress, neutralizing free radicals and reactive oxygen species that damage cellular components. Glutathione levels decline with age, chronic disease, and environmental toxins, making supplementation an important longevity and health optimization strategy.
                  </p>
                  
                  <h3>Clinical Applications</h3>
                  <ul>
                    <li><strong>Detoxification Support:</strong> Essential cofactor for Phase II liver detoxification enzymes</li>
                    <li><strong>Immune Enhancement:</strong> Critical for lymphocyte proliferation and natural killer cell function</li>
                    <li><strong>Neuroprotection:</strong> Protects brain from oxidative damage in neurodegenerative diseases</li>
                    <li><strong>Skin Health:</strong> Reduces melanin production for skin brightening effects</li>
                    <li><strong>Athletic Recovery:</strong> Reduces exercise-induced oxidative stress and inflammation</li>
                    <li><strong>Mitochondrial Function:</strong> Protects mitochondrial DNA from oxidative damage</li>
                    <li><strong>Longevity:</strong> Maintains cellular redox balance critical for healthy aging</li>
                  </ul>

                  <h3>Why Glutathione Matters</h3>
                  <p>
                    Glutathione is unique among antioxidants because it functions intracellularly and can regenerate other antioxidants like vitamin C and E. It also serves as a critical substrate for glutathione peroxidase and glutathione S-transferase enzymes that neutralize toxins and carcinogens. Declining glutathione levels are associated with virtually every chronic disease and accelerated aging.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Landmark Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold">Glutathione and Aging (Free Radic Biol Med 2011)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Richie et al. | <Badge variant="secondary">1,234 citations</Badge>
                    </p>
                    <p className="text-sm">
                      Comprehensive review demonstrating glutathione decline with aging across multiple tissues. GSH levels decrease 20-40% between ages 40-80 years. Reduced glutathione correlates with increased oxidative damage, mitochondrial dysfunction, and age-related disease. Restoration of glutathione levels shows promise for healthy aging interventions.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-600 pl-4">
                    <p className="font-semibold">Glutathione in Neurodegenerative Disease (Prog Neurobiol 2009)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Johnson et al. | <Badge variant="secondary">892 citations</Badge>
                    </p>
                    <p className="text-sm">
                      Glutathione depletion is an early marker in Parkinson's disease, occurring before clinical symptoms. Brain GSH levels reduced by 40% in substantia nigra of PD patients. N-acetylcysteine (GSH precursor) shows neuroprotective effects in animal models. Suggests glutathione restoration as therapeutic target for neurodegeneration.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold">Glutathione and Immune Function (Immunology 2003)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Dröge & Breitkreutz | <Badge variant="secondary">567 citations</Badge>
                    </p>
                    <p className="text-sm">
                      Glutathione critical for T-cell proliferation and cytokine production. GSH depletion impairs immune response to infections and vaccines. Supplementation enhances natural killer cell activity and antibody production. Particularly important for elderly and immunocompromised populations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3>Antioxidant Defense</h3>
                  <ul>
                    <li><strong>Direct ROS Scavenging:</strong> Neutralizes hydroxyl radicals, superoxide, and hydrogen peroxide</li>
                    <li><strong>Glutathione Peroxidase Cofactor:</strong> Essential substrate for GPx enzymes that reduce lipid peroxides</li>
                    <li><strong>Antioxidant Regeneration:</strong> Recycles oxidized vitamin C and E back to active forms</li>
                    <li><strong>Protein Thiol Protection:</strong> Prevents oxidation of critical cysteine residues in proteins</li>
                  </ul>

                  <h3>Detoxification</h3>
                  <ul>
                    <li><strong>Phase II Conjugation:</strong> Glutathione S-transferases conjugate GSH to toxins for excretion</li>
                    <li><strong>Heavy Metal Chelation:</strong> Binds mercury, lead, cadmium for elimination</li>
                    <li><strong>Xenobiotic Metabolism:</strong> Neutralizes drugs, pollutants, and carcinogens</li>
                    <li><strong>Acetaminophen Detox:</strong> Critical for preventing liver damage from APAP overdose</li>
                  </ul>

                  <h3>Immune Modulation</h3>
                  <ul>
                    <li><strong>T-Cell Proliferation:</strong> Required for lymphocyte activation and clonal expansion</li>
                    <li><strong>Cytokine Production:</strong> Regulates IL-2, IL-12, and interferon-gamma synthesis</li>
                    <li><strong>NK Cell Activity:</strong> Enhances natural killer cell cytotoxicity</li>
                    <li><strong>Antibody Production:</strong> Supports B-cell function and immunoglobulin synthesis</li>
                  </ul>

                  <h3>Mitochondrial Protection</h3>
                  <ul>
                    <li><strong>mtDNA Protection:</strong> Shields mitochondrial DNA from oxidative damage</li>
                    <li><strong>Respiratory Chain Support:</strong> Maintains electron transport chain function</li>
                    <li><strong>Apoptosis Regulation:</strong> Prevents inappropriate cell death signaling</li>
                    <li><strong>ATP Production:</strong> Optimizes energy metabolism by reducing oxidative stress</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Evidence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aging & Longevity</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm mb-2">
                        Glutathione levels decline 20-40% between ages 40-80 years across multiple tissues. Reduced GSH correlates with increased oxidative damage, mitochondrial dysfunction, telomere shortening, and age-related disease. Animal studies show glutathione supplementation extends lifespan and delays age-related decline. Human trials demonstrate improved markers of oxidative stress and inflammation with GSH restoration.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Neurodegenerative Disease</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm mb-2">
                        Brain glutathione depletion is an early marker in Parkinson's disease (40% reduction in substantia nigra) and Alzheimer's disease. N-acetylcysteine (GSH precursor) shows neuroprotective effects in animal models and preliminary human trials. Intranasal glutathione delivery bypasses blood-brain barrier for direct CNS effects. Clinical trials ongoing for PD and cognitive decline.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Immune Function</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm mb-2">
                        Glutathione critical for T-cell proliferation, cytokine production, and antibody synthesis. GSH supplementation enhances immune response in elderly and immunocompromised populations. Studies show improved natural killer cell activity, reduced infection rates, and enhanced vaccine responses. Particularly beneficial during acute illness and recovery.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Athletic Performance & Recovery</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm mb-2">
                        Exercise generates reactive oxygen species that deplete glutathione. GSH supplementation reduces exercise-induced oxidative stress, muscle damage markers (CK, LDH), and inflammation. Studies show improved recovery, reduced fatigue, and enhanced subsequent performance. Particularly beneficial for endurance athletes and high-intensity training.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Skin Health & Aesthetics</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm mb-2">
                        Glutathione inhibits tyrosinase enzyme, reducing melanin production for skin brightening effects. Clinical trials show reduced hyperpigmentation, improved skin tone, and anti-aging benefits. IV glutathione popular in aesthetic medicine for skin whitening (controversial). Topical and oral formulations show modest effects compared to IV administration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">⚕️ Healthcare Provider Consultation Required</p>
                    <p className="text-sm text-blue-800">
                      Glutathione supplementation should be supervised by a qualified healthcare provider, especially for IV administration. Individual needs vary based on health status, oxidative stress levels, and therapeutic goals.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Intravenous (IV) Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                      <p className="text-sm mb-2">
                        <strong>Most effective route</strong> for achieving high blood levels and cellular uptake. Bypasses gastrointestinal limitations.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Dose:</strong> 600-2,000mg per infusion</li>
                        <li>• <strong>Frequency:</strong> 1-3x weekly for therapeutic effects</li>
                        <li>• <strong>Duration:</strong> 15-30 minute infusion</li>
                        <li>• <strong>Maintenance:</strong> Weekly or bi-weekly after initial series</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Oral Liposomal Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                      <p className="text-sm mb-2">
                        <strong>Liposomal delivery</strong> improves oral bioavailability compared to standard glutathione capsules.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Dose:</strong> 500-1,000mg daily</li>
                        <li>• <strong>Timing:</strong> On empty stomach for best absorption</li>
                        <li>• <strong>Duration:</strong> Continuous or 8-12 week cycles</li>
                        <li>• <strong>Note:</strong> Less effective than IV but more convenient</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Precursor Support Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                      <p className="text-sm mb-2">
                        <strong>N-Acetylcysteine (NAC)</strong> provides cysteine, the rate-limiting amino acid for glutathione synthesis.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>NAC Dose:</strong> 600-1,800mg daily in divided doses</li>
                        <li>• <strong>Glycine:</strong> 3-5g daily (often deficient)</li>
                        <li>• <strong>Selenium:</strong> 200mcg daily (GPx cofactor)</li>
                        <li>• <strong>Vitamin C:</strong> 1-2g daily (glutathione sparing)</li>
                        <li>• <strong>Alpha-Lipoic Acid:</strong> 300-600mg daily (recycles GSH)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Synergistic Combinations</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Glutathione + NAD+</p>
                        <p className="text-sm">
                          Synergistic antioxidant and cellular energy support. NAD+ required for glutathione reductase enzyme that regenerates GSH from oxidized form. Combine IV glutathione with NAD+ infusions for comprehensive cellular optimization.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Glutathione + Vitamin C</p>
                        <p className="text-sm">
                          Vitamin C spares glutathione by serving as first-line antioxidant. High-dose IV vitamin C (25-50g) combined with glutathione (1-2g) provides powerful antioxidant support for cancer patients, chronic infections, and acute illness.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-900 mb-2">✓ Excellent Safety Profile</p>
                    <p className="text-sm text-green-800">
                      Glutathione is an endogenous molecule with minimal side effects at therapeutic doses. IV administration should be performed by qualified healthcare providers using pharmaceutical-grade glutathione.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Common Side Effects (Rare)</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Gastrointestinal:</strong> Nausea, bloating with oral supplementation (uncommon)</li>
                        <li>• <strong>Sulfur Odor:</strong> Breath or body odor from sulfur-containing amino acids</li>
                        <li>• <strong>Skin Rash:</strong> Rare allergic reactions to IV formulations</li>
                        <li>• <strong>Headache:</strong> Occasional with high-dose IV administration</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contraindications</h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Asthma:</strong> Inhaled glutathione may trigger bronchospasm in asthmatics (avoid inhaled route)</li>
                        <li>• <strong>Chemotherapy:</strong> May interfere with certain chemotherapy drugs (consult oncologist)</li>
                        <li>• <strong>Pregnancy/Breastfeeding:</strong> Safety not established; avoid high-dose supplementation</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Quality Standards</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Pharmaceutical Grade:</strong> Use USP-grade glutathione for IV administration</li>
                        <li>• <strong>Reduced Form:</strong> Ensure product contains reduced glutathione (GSH), not oxidized (GSSG)</li>
                        <li>• <strong>Liposomal Oral:</strong> Choose liposomal formulations for better oral bioavailability</li>
                        <li>• <strong>Third-Party Testing:</strong> Verify purity and potency with certificate of analysis</li>
                      </ul>
                      <p className="text-sm mt-3 text-muted-foreground">
                        <strong>Source:</strong> Click "Source Medical Grade Peptides Now" above to access verified suppliers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Comprehensive monitoring protocols for Glutathione therapy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Baseline oxidative stress markers</li>
                      <li>Liver function tests (AST, ALT, GGT)</li>
                      <li>Kidney function (creatinine, BUN)</li>
                      <li>Complete blood count</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability assessment, early response</p>
                      <p><strong>Month 3:</strong> Liver/kidney function, clinical response</p>
                      <p><strong>Month 6:</strong> Comprehensive safety and efficacy evaluation</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Severe allergic reaction</li>
                      <li>Liver toxicity signs</li>
                      <li>Kidney dysfunction</li>
                      <li>Pregnancy (discontinue immediately)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
    </div>
    </>
  );
}
