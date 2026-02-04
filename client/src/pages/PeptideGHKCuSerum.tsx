import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, Sparkles, Droplet, Sun, Heart } from "lucide-react";
import { Link } from "wouter";

export default function PeptideGHKCuSerum() {
  return (
    <>
    <Helmet>
        <title>GHK-Cu Serum | DrsPeptides</title>
        <meta name="description" content="Clinical guide to topical GHK-Cu serum for skin rejuvenation and anti-aging. Mechanisms, application protocols, cosmetic benefits, and evidence for aesthetic medicine." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GHK-Cu Serum | DrsPeptides" />
        <meta property="og:description" content="Clinical guide to topical GHK-Cu serum for skin rejuvenation and anti-aging. Mechanisms, application protocols, cosmetic benefits, and evidence for aesthetic medicine." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GHK-Cu Serum | DrsPeptides" />
        <meta name="twitter:description" content="Clinical guide to topical GHK-Cu serum for skin rejuvenation and anti-aging. Mechanisms, application protocols, cosmetic benefits, and evidence for aesthetic medicine." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "GHK-Cu Serum",
          "description": "Clinical guide to topical GHK-Cu serum for skin rejuvenation and anti-aging. Mechanisms, application protocols, cosmetic benefits, and evidence for aesthetic medicine.",
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
            <PrintButton title="G H K Cu Serum - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Topical Formulation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GHK-Cu Serum</h1>
            <p className="text-xl text-cyan-50 mb-6">
              Topical copper peptide serum for skin rejuvenation and anti-aging. Stimulates collagen production, improves skin firmness and elasticity, reduces wrinkles, and promotes wound healing through direct dermal application.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Topical</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Collagen Boost</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Anti-Aging</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Skin Firming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanism" className="gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanism</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="gap-2">
                <Beaker className="h-4 w-4" />
                <span className="hidden sm:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="gap-2">
                <Pill className="h-4 w-4" />
                <span className="hidden sm:inline">Protocols</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Monitoring</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is GHK-Cu Serum?</CardTitle>
                  <CardDescription>Topical copper peptide for skin rejuvenation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GHK-Cu Serum is a topical formulation of Glycyl-L-Histidyl-L-Lysine-Copper (GHK-Cu), a naturally occurring copper peptide complex with powerful regenerative and anti-aging properties. GHK-Cu is a tripeptide that binds copper ions, creating a bioactive complex that stimulates collagen synthesis, promotes wound healing, and reverses multiple signs of aging when applied directly to the skin. Topical application delivers GHK-Cu directly to dermal tissues, where it exerts local regenerative effects.
                  </p>
                  <p>
                    The copper peptide complex has been extensively studied for its ability to improve skin appearance, firmness, and texture. GHK-Cu stimulates collagen and elastin production, increases hyaluronic acid synthesis, promotes angiogenesis (new blood vessel formation), and possesses antioxidant and anti-inflammatory properties. These mechanisms work synergistically to reduce wrinkles, tighten loose skin, improve skin barrier function, and accelerate healing of damaged tissue.
                  </p>
                  <p>
                    GHK-Cu Serum is ideal for individuals seeking non-invasive anti-aging treatments, skin rejuvenation, or accelerated wound healing. It provides an alternative to systemic peptide administration, delivering high local concentrations directly to target tissues without systemic exposure. Topical GHK-Cu is suitable for all skin types and can be incorporated into daily skincare routines for long-term skin health and appearance optimization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Collagen Stimulation</h3>
                        <p className="text-sm text-gray-600">Increases collagen and elastin production for firmer, more youthful skin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Wrinkle Reduction</h3>
                        <p className="text-sm text-gray-600">Reduces fine lines and deep wrinkles through dermal remodeling</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplet className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Skin Hydration</h3>
                        <p className="text-sm text-gray-600">Enhances hyaluronic acid synthesis for improved moisture retention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Wound Healing</h3>
                        <p className="text-sm text-gray-600">Accelerates tissue repair and reduces scarring</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Anti-aging skincare, wrinkle reduction, skin firming, collagen enhancement. <strong>Secondary benefits:</strong> Wound healing, scar reduction, skin barrier repair, antioxidant protection. <strong>Advantages:</strong> Non-invasive, direct dermal delivery, no systemic side effects, suitable for daily use.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">GHK-Cu Delivery Methods Comparison</h3>
                <p className="text-sm text-amber-800">
                  <strong>Topical Serum:</strong> Direct skin delivery, high local concentration, no systemic effects, convenient<br/>
                  <strong>Injectable (subcutaneous):</strong> Systemic effects, higher bioavailability, requires needles<br/>
                  <strong>Oral (limited):</strong> Poor bioavailability, degradation in GI tract<br/>
                  <strong>Choose Topical for:</strong> Facial anti-aging, wrinkle reduction, skin rejuvenation, daily skincare<br/>
                  <strong>Choose Injectable for:</strong> Systemic anti-aging, hair growth, wound healing (internal)
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How topical GHK-Cu works on skin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Dermal Penetration and Absorption</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu is a small tripeptide (molecular weight ~340 Da) that can penetrate the stratum corneum and reach the viable epidermis and dermis when formulated properly. The copper complex enhances peptide stability and facilitates cellular uptake. Topical application delivers high local concentrations directly to dermal fibroblasts, keratinocytes, and other skin cells, where GHK-Cu exerts its regenerative effects.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Collagen and Elastin Synthesis</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu stimulates dermal fibroblasts to increase production of collagen types I and III, as well as elastin. It upregulates genes involved in extracellular matrix (ECM) synthesis while downregulating matrix metalloproteinases (MMPs) that degrade collagen. This dual action—increased synthesis and decreased degradation—results in net collagen accumulation, improving skin firmness, elasticity, and thickness. Clinical studies show 20-30% improvement in skin firmness after 12 weeks of topical use.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Angiogenesis and Tissue Remodeling</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu promotes angiogenesis (formation of new blood vessels) in the dermis, improving nutrient and oxygen delivery to skin cells. Enhanced microcirculation supports cellular metabolism and accelerates tissue repair. GHK-Cu also stimulates keratinocyte migration and proliferation, facilitating re-epithelialization of damaged skin. These mechanisms contribute to wound healing and scar reduction.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Antioxidant and Anti-Inflammatory Effects</h3>
                    <p className="text-sm text-gray-700">
                      The copper component of GHK-Cu provides antioxidant activity through copper-dependent superoxide dismutase (SOD) enzymes, which neutralize free radicals and reduce oxidative stress. GHK-Cu also modulates inflammatory pathways, reducing pro-inflammatory cytokines (IL-1, IL-6, TNF-α) and promoting anti-inflammatory signaling. These effects protect skin from environmental damage and reduce chronic inflammation that accelerates aging.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Hyaluronic Acid and Skin Hydration</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu increases synthesis of hyaluronic acid (HA) in the dermis, enhancing skin hydration and plumpness. HA binds water molecules, maintaining dermal moisture and volume. Increased HA content improves skin texture, reduces the appearance of fine lines, and creates a more youthful appearance. This mechanism complements collagen stimulation for comprehensive skin rejuvenation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">6. Skin Barrier Function and Protection</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu strengthens the skin barrier by promoting synthesis of barrier proteins (filaggrin, loricrin) and lipids. A healthy skin barrier prevents transepidermal water loss (TEWL), protects against environmental irritants, and maintains optimal skin hydration. GHK-Cu also upregulates genes involved in DNA repair, protecting skin cells from UV damage and other stressors.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence supporting topical GHK-Cu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Collagen Production and Skin Firmness</h3>
                    <p className="text-sm text-gray-700">
                      Pickart L et al. PMC. 2018 - GHK-Cu applied to thigh skin for 12 weeks improved collagen production in 70% of women treated, compared to 50% with vitamin C. Clinical studies measured 20-30% improvements in skin firmness after 12 weeks of topical GHK-Cu treatment. The peptide stimulates collagen synthesis while inhibiting collagen degradation.
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Wrinkle Reduction and Skin Elasticity</h3>
                    <p className="text-sm text-gray-700">
                      Clinical studies demonstrate 30% improvement in skin elasticity and 25% reduction in wrinkle depth after 12 weeks of topical GHK-Cu application. Objective measurement techniques (profilometry, elastometry) confirmed significant improvements in skin texture and firmness. GHK-Cu outperformed many traditional anti-aging ingredients in head-to-head comparisons.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Wound Healing and Tissue Repair</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu accelerates wound healing through multiple mechanisms: increased angiogenesis, enhanced collagen synthesis, improved keratinocyte migration, and reduced inflammation. Studies show faster wound closure, reduced scar formation, and improved tissue quality in GHK-Cu treated wounds. The peptide is particularly effective for chronic wounds and post-procedure healing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Gene Expression and Anti-Aging</h3>
                    <p className="text-sm text-gray-700">
                      Research shows GHK-Cu modulates expression of thousands of genes involved in aging, inflammation, and tissue repair. It upregulates genes for collagen synthesis, antioxidant enzymes, and DNA repair while downregulating genes for inflammation and matrix degradation. This broad gene regulatory activity explains GHK-Cu's comprehensive anti-aging effects.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Research Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-cyan-900 mb-2">Collagen Boost</h3>
                      <p className="text-sm text-cyan-800">70% of users show improved collagen production after 12 weeks of topical use.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Skin Firmness</h3>
                      <p className="text-sm text-blue-800">20-30% improvement in skin firmness measured objectively in clinical trials.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Wrinkle Reduction</h3>
                      <p className="text-sm text-amber-800">25% reduction in wrinkle depth and 30% improvement in elasticity after 12 weeks.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Wound Healing</h3>
                      <p className="text-sm text-rose-800">Accelerated tissue repair with reduced scarring and improved tissue quality.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Protocols</CardTitle>
                  <CardDescription>Topical use guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging/Wrinkle Reduction Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Concentration:</strong> 1-3% GHK-Cu in serum base<br/>
                      <strong>Application:</strong> Apply 2-3 drops to clean, dry face and neck<br/>
                      <strong>Frequency:</strong> Twice daily (morning and evening)<br/>
                      <strong>Duration:</strong> Minimum 12 weeks for visible results, ongoing for maintenance<br/>
                      <strong>Best for:</strong> Fine lines, wrinkles, loss of firmness, overall anti-aging
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Skin Firming Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Concentration:</strong> 2-5% GHK-Cu (higher for body use)<br/>
                      <strong>Application:</strong> Apply to target areas (face, neck, décolletage, body)<br/>
                      <strong>Frequency:</strong> Once or twice daily<br/>
                      <strong>Duration:</strong> 8-12 weeks for significant firming<br/>
                      <strong>Best for:</strong> Loose skin, loss of elasticity, skin laxity
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Wound Healing/Scar Reduction Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Concentration:</strong> 1-2% GHK-Cu<br/>
                      <strong>Application:</strong> Apply directly to wound or scar after cleaning<br/>
                      <strong>Frequency:</strong> 2-3 times daily<br/>
                      <strong>Duration:</strong> Until wound healed or scar improved (4-12 weeks)<br/>
                      <strong>Best for:</strong> Post-procedure healing, acne scars, surgical scars
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Maintenance/Prevention Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Concentration:</strong> 0.5-1% GHK-Cu<br/>
                      <strong>Application:</strong> Apply to face and neck<br/>
                      <strong>Frequency:</strong> Once daily (evening)<br/>
                      <strong>Duration:</strong> Ongoing for long-term skin health<br/>
                      <strong>Best for:</strong> Younger skin, prevention, general skin health
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Application Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Cleanse first:</strong> Apply to clean, dry skin for best absorption<br/>
                      <strong>Layering:</strong> Apply GHK-Cu before heavier creams/oils<br/>
                      <strong>Sunscreen:</strong> Always use SPF during day (GHK-Cu increases photosensitivity slightly)<br/>
                      <strong>Combination:</strong> Can combine with vitamin C, hyaluronic acid, retinoids (apply separately)<br/>
                      <strong>Storage:</strong> Refrigerate for extended shelf life, protect from light<br/>
                      <strong>Patience:</strong> Results take 4-12 weeks, continue for best outcomes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expectations Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Week 1-2: Initial Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved skin hydration and texture</li>
                        <li>Subtle glow and radiance</li>
                        <li>Reduced inflammation/redness</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 3-4: Early Visible Changes</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Smoother skin texture</li>
                        <li>Reduced appearance of fine lines</li>
                        <li>Improved skin tone evenness</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 6-8: Significant Results</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable reduction in wrinkle depth</li>
                        <li>Improved skin firmness and elasticity</li>
                        <li>Enhanced facial contours</li>
                        <li>Visible collagen remodeling</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 12+: Maximum Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>20-30% improvement in firmness (measured)</li>
                        <li>25% reduction in wrinkle depth</li>
                        <li>Thicker, more resilient skin</li>
                        <li>Sustained anti-aging effects with continued use</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Safety information for topical GHK-Cu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Topical GHK-Cu has an excellent safety record with decades of use in skincare products. It is well-tolerated by all skin types, including sensitive skin. The topical route provides local effects without systemic absorption, minimizing potential side effects. GHK-Cu is a naturally occurring peptide in human plasma, contributing to its biocompatibility.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Known allergy:</strong> To GHK-Cu, copper, or serum components</li>
                      <li><strong>Active skin infections:</strong> Bacterial, viral, or fungal (treat first)</li>
                      <li><strong>Open wounds:</strong> Use cautiously, may increase copper absorption</li>
                      <li><strong>Wilson's disease:</strong> Copper metabolism disorder (theoretical concern)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Topical GHK-Cu is extremely well tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Mild irritation:</strong> Rare, transient redness or tingling</li>
                      <li><strong>Purging:</strong> Temporary breakouts as skin renews (resolves quickly)</li>
                      <li><strong>Blue discoloration:</strong> Temporary if high concentration (cosmetic only)</li>
                      <li><strong>Photosensitivity:</strong> Slight increase, use sunscreen</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable skincare manufacturers. Require:<br/>
                      • Pharmaceutical-grade GHK-Cu (&gt;98% purity)<br/>
                      • Proper formulation for skin penetration<br/>
                      • pH-balanced (5.0-6.0 for skin compatibility)<br/>
                      • Stabilized formulation (copper peptides can degrade)<br/>
                      • Third-party testing and COA<br/>
                      • Opaque or amber packaging (light protection)<br/>
                      • Refrigerated storage recommended
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Tracking progress with GHK-Cu serum</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline photos:</strong> Take high-quality photos in consistent lighting (front, sides, close-ups)</li>
                      <li><strong>Skin assessment:</strong> Document wrinkles, firmness, texture, tone</li>
                      <li><strong>Skin type:</strong> Determine skin type and any sensitivities</li>
                      <li><strong>Current routine:</strong> Document existing skincare products</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Check for irritation or adverse reactions</p>
                      <p><strong>Week 2-4:</strong> Assess early improvements (hydration, texture)</p>
                      <p><strong>Week 6-8:</strong> Take progress photos, evaluate firmness and wrinkles</p>
                      <p><strong>Week 12:</strong> Final assessment, compare to baseline photos</p>
                      <p><strong>Ongoing:</strong> Monthly photos and assessments for long-term tracking</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Wrinkle reduction:</strong> Decreased depth and number of fine lines</li>
                      <li><strong>Skin firmness:</strong> Improved elasticity and reduced sagging</li>
                      <li><strong>Texture improvement:</strong> Smoother, more refined skin surface</li>
                      <li><strong>Tone evenness:</strong> Reduced hyperpigmentation and redness</li>
                      <li><strong>Hydration:</strong> Improved moisture retention and plumpness</li>
                      <li><strong>Radiance:</strong> Healthier, more youthful glow</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue Use</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Persistent irritation:</strong> Redness, burning, or discomfort lasting &gt;48 hours</li>
                      <li><strong>Allergic reaction:</strong> Hives, swelling, severe itching</li>
                      <li><strong>Worsening skin condition:</strong> Increased breakouts, inflammation</li>
                      <li><strong>Unusual discoloration:</strong> Persistent blue/green tint (rare)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Apply to clean, dry skin for best absorption</li>
                      <li>Use sunscreen daily (SPF 30+) to protect skin</li>
                      <li>Be patient - visible results take 4-12 weeks</li>
                      <li>Take regular progress photos in consistent lighting</li>
                      <li>Store serum properly (refrigerate, protect from light)</li>
                      <li>Combine with healthy lifestyle (hydration, nutrition, sleep)</li>
                      <li>Continue long-term for sustained anti-aging benefits</li>
                      <li>Can combine with other anti-aging ingredients (vitamin C, retinol)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. GHK-Cu Serum is a cosmetic product. 
            Always consult qualified healthcare professionals for medical advice.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
