import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, Sparkles, Heart, Sun } from "lucide-react";
import { Link } from "wouter";

export default function BlendKLOWCapsules() {
  return (
    <>
    <Helmet>
        <title>KLOW Blend Capsules | DrsPeptides</title>
        <meta name="description" content="KLOW oral capsules for metabolic health and weight management. Clinical guide to ingredients, mechanisms, bioavailability, dosing protocols, and evidence-based applications." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="KLOW Blend Capsules | DrsPeptides" />
        <meta property="og:description" content="KLOW oral capsules for metabolic health and weight management. Clinical guide to ingredients, mechanisms, bioavailability, dosing protocols, and evidence-based applications." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KLOW Blend Capsules | DrsPeptides" />
        <meta name="twitter:description" content="KLOW oral capsules for metabolic health and weight management. Clinical guide to ingredients, mechanisms, bioavailability, dosing protocols, and evidence-based applications." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "KLOW Blend Capsules",
          "description": "KLOW oral capsules for metabolic health and weight management. Clinical guide to ingredients, mechanisms, bioavailability, dosing protocols, and evidence-based applications.",
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Enhanced Oral Beauty Capsules</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">KLOW Blend Capsules</h1>
            <p className="text-xl text-purple-50 mb-6">
              Enhanced GLOW formula adding KPV for superior anti-inflammatory and skin brightening effects. Combines GHK-Cu (2mg), BPC-157 (500mcg), TB-500 (500mcg), KPV (500mcg), and Hyaluronic Acid (100mg) in convenient oral capsules.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Oral Formulation</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Anti-Inflammatory</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Skin Brightening</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">+ KPV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
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
                  <CardTitle>What are KLOW Blend Capsules?</CardTitle>
                  <CardDescription>Enhanced oral beauty blend with anti-inflammatory KPV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    KLOW Blend Capsules build upon the GLOW formula by adding KPV (Lys-Pro-Val, 500mcg), a potent anti-inflammatory tripeptide derived from α-MSH. This enhanced oral formulation combines GHK-Cu (2mg), BPC-157 (500mcg), TB-500 (500mcg), KPV (500mcg), and Hyaluronic Acid (100mg) to provide comprehensive beauty and regeneration benefits with superior inflammation control and skin brightening effects - all in a convenient daily capsule.
                  </p>
                  <p>
                    The addition of KPV specifically targets inflammatory skin conditions, hyperpigmentation, and gut inflammation. KPV inhibits NF-κB activation, a master regulator of inflammation, and reduces pro-inflammatory cytokines. This makes KLOW Capsules particularly effective for individuals with rosacea, acne, inflammatory hyperpigmentation, or inflammatory bowel conditions that affect skin quality. The oral route is ideal for KPV delivery, as it provides both local gut anti-inflammatory effects and systemic absorption for skin benefits.
                  </p>
                  <p>
                    KLOW Capsules are ideal for those seeking the convenience of oral supplementation combined with targeted anti-inflammatory and brightening benefits. Choose KLOW over GLOW when inflammation, redness, hyperpigmentation, or gut-related skin issues are primary concerns alongside general anti-aging goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Capsule Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">Formula per Capsule</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 1</p>
                        <p className="text-2xl font-bold text-pink-600">2mg</p>
                        <p className="font-semibold">GHK-Cu</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 2</p>
                        <p className="text-2xl font-bold text-purple-600">500mcg</p>
                        <p className="font-semibold">BPC-157</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 3</p>
                        <p className="text-2xl font-bold text-rose-600">500mcg</p>
                        <p className="font-semibold">TB-500</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border-2 border-indigo-300">
                        <p className="text-sm text-muted-foreground">Component 4</p>
                        <p className="text-2xl font-bold text-indigo-600">500mcg</p>
                        <p className="font-semibold">KPV</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 5</p>
                        <p className="text-2xl font-bold text-blue-600">100mg</p>
                        <p className="font-semibold">HA</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Pill className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">All GLOW Benefits + KPV</h3>
                        <p className="text-sm text-gray-600">Complete beauty support with enhanced anti-inflammatory power</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Superior Inflammation Control</h3>
                        <p className="text-sm text-gray-600">KPV reduces skin and gut inflammation via NF-κB inhibition</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Skin Brightening</h3>
                        <p className="text-sm text-gray-600">Melanin regulation for even tone and reduced hyperpigmentation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gut-Skin Axis Optimization</h3>
                        <p className="text-sm text-gray-600">KPV + BPC-157 provide powerful gut healing for skin health</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Inflammatory skin conditions (rosacea, acne), hyperpigmentation, skin brightening, gut-related skin issues. <strong>Secondary benefits:</strong> General anti-aging, hydration, joint health. <strong>Advantages:</strong> Oral convenience with targeted anti-inflammatory and brightening effects.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">GLOW vs KLOW: Choose the Right Formula</h3>
                <p className="text-sm text-amber-800">
                  <strong>GLOW Capsules:</strong> GHK-Cu, BPC-157, TB-500, HA - general beauty, hydration, anti-aging<br/>
                  <strong>KLOW Capsules:</strong> Adds KPV (500mcg) - enhanced anti-inflammatory, brightening, gut healing<br/>
                  <strong>Choose GLOW for:</strong> General maintenance, hydration focus, no inflammatory concerns<br/>
                  <strong>Choose KLOW for:</strong> Rosacea, acne, hyperpigmentation, inflammatory skin/gut conditions
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How KLOW Capsules work systemically</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. KPV: Oral Anti-Inflammatory Powerhouse</h3>
                    <p className="text-sm text-gray-700">
                      KPV is particularly well-suited for oral delivery. It is transported into intestinal cells via PepT1 peptide transporters, allowing excellent oral bioavailability. Once absorbed, KPV potently inhibits NF-κB activation, a master regulator of inflammatory responses. This reduces production of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) both locally in the gut and systemically. KPV also regulates melanin production pathways, contributing to skin brightening and even tone. The oral route provides dual benefits: local gut anti-inflammatory effects and systemic skin benefits.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Enhanced Gut-Skin Axis Activation</h3>
                    <p className="text-sm text-gray-700">
                      The combination of KPV and BPC-157 provides superior gut healing compared to BPC-157 alone. KPV reduces intestinal inflammation through NF-κB inhibition, while BPC-157 promotes mucosal healing and angiogenesis. This powerful gut-healing combination directly impacts skin quality, as gut inflammation is a major driver of skin conditions including acne, rosacea, and eczema. Improved gut health translates to clearer, healthier skin.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. GHK-Cu, TB-500, HA: Systemic Beauty Support</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu stimulates collagen synthesis and gene modulation systemically. TB-500 promotes tissue repair and angiogenesis. Hyaluronic Acid (100mg) provides superior skin hydration and joint lubrication. These three components work synergistically to support skin structure, moisture, and regeneration from within.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Anti-Inflammatory Synergy</h3>
                    <p className="text-sm text-gray-700">
                      The five-component formula creates comprehensive anti-inflammatory and regenerative effects: KPV controls inflammation via NF-κB inhibition, BPC-157 heals gut tissue and reduces systemic inflammation, TB-500 supports tissue repair, GHK-Cu builds collagen and provides antioxidant protection, and HA hydrates and lubricates. This multi-pathway approach addresses inflammation at its source (gut) while supporting skin health systemically.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Melanin Regulation for Brightening</h3>
                    <p className="text-sm text-gray-700">
                      KPV, as a fragment of α-MSH, influences melanin production pathways. By modulating melanocyte activity and reducing inflammation-induced hyperpigmentation, KPV promotes more even skin tone and reduces dark spots. Combined with the skin-remodeling effects of GHK-Cu, KLOW Capsules provide superior brightening benefits compared to GLOW.
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
                  <CardDescription>Evidence supporting KLOW components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">KPV: PepT1-Mediated Oral Bioavailability</h3>
                    <p className="text-sm text-gray-700">
                      Dalmasso G et al. Gastroenterology. 2008 - KPV demonstrates excellent oral bioavailability through PepT1-mediated cellular uptake in the intestine. The study showed that oral KPV significantly reduced inflammatory markers in colitis models, demonstrating effective absorption and anti-inflammatory action.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/18226596/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">KPV: Anti-Inflammatory Mechanisms</h3>
                    <p className="text-sm text-gray-700">
                      Land SC et al. Peptides. 2012 - KPV suppresses both local and systemic immune responses by inhibiting NF-κB activation. Demonstrated significant reduction in inflammatory cytokines and immune-mediated tissue damage in preclinical models.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Gut-Skin Axis: Clinical Evidence</h3>
                    <p className="text-sm text-gray-700">
                      Multiple studies have established the gut-skin axis connection, showing that gut inflammation and dysbiosis contribute to acne, rosacea, eczema, and other skin conditions. Interventions that improve gut health consistently demonstrate skin quality improvements. The KPV + BPC-157 combination in KLOW Capsules targets this axis directly.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Oral HA: Skin Hydration Benefits</h3>
                    <p className="text-sm text-gray-700">
                      Clinical trials demonstrate that oral HA supplementation (80-200mg daily) significantly increases skin moisture, reduces wrinkle depth, and improves elasticity. The 100mg dose in KLOW Capsules is clinically validated for skin and joint benefits.
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
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">KPV Oral Absorption</h3>
                      <p className="text-sm text-indigo-800">Excellent oral bioavailability via PepT1 transporters, making it ideal for oral formulations.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">NF-κB Inhibition</h3>
                      <p className="text-sm text-purple-800">Potent anti-inflammatory effects through master inflammatory pathway suppression.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Gut-Skin Connection</h3>
                      <p className="text-sm text-rose-800">KPV + BPC-157 combination provides superior gut healing that reflects in skin quality.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Brightening Effects</h3>
                      <p className="text-sm text-amber-800">KPV's melanin regulation properties provide skin brightening and tone-evening benefits.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Oral supplementation guidelines for KLOW</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Inflammatory Skin Conditions Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 2 capsules twice daily (morning and evening)<br/>
                      <strong>Timing:</strong> With meals for optimal absorption<br/>
                      <strong>Duration:</strong> 8-12 weeks intensive, then reduce to 1-2 capsules daily maintenance<br/>
                      <strong>Best for:</strong> Active rosacea, acne, inflammatory skin conditions
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Hyperpigmentation/Brightening Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 1-2 capsules daily<br/>
                      <strong>Timing:</strong> Consistent daily timing (morning or evening)<br/>
                      <strong>Duration:</strong> 12-16 weeks for optimal melanin regulation<br/>
                      <strong>Best for:</strong> Dark spots, uneven tone, post-inflammatory hyperpigmentation
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Gut-Skin Axis Support Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 2 capsules daily (divided or once daily)<br/>
                      <strong>Timing:</strong> With meals<br/>
                      <strong>Duration:</strong> 8-12 weeks for gut healing, then maintenance<br/>
                      <strong>Best for:</strong> Gut-related skin issues, inflammatory bowel conditions affecting skin
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">General Maintenance Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 1 capsule daily<br/>
                      <strong>Timing:</strong> Any time, consistent daily<br/>
                      <strong>Duration:</strong> Continuous for long-term benefits<br/>
                      <strong>Best for:</strong> Maintaining results, preventing inflammation
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Consistency:</strong> Daily dosing provides best anti-inflammatory effects<br/>
                      <strong>Hydration:</strong> Adequate water intake supports HA hydration<br/>
                      <strong>Food:</strong> With meals may enhance peptide absorption<br/>
                      <strong>Patience:</strong> Anti-inflammatory effects begin within days, brightening takes 8-12 weeks<br/>
                      <strong>Combination:</strong> Can be used with topical treatments for enhanced results
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
                      <h3 className="font-semibold">Day 1-7: Initial Anti-Inflammatory Response</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Reduction in skin redness and inflammation</li>
                        <li>Improved gut comfort (reduced bloating, inflammation)</li>
                        <li>Enhanced skin hydration from HA</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Visible Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable reduction in inflammatory lesions (acne, rosacea flares)</li>
                        <li>Improved skin texture and tone</li>
                        <li>Beginning of hyperpigmentation fading</li>
                        <li>Enhanced gut health reflecting in skin quality</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Transformation</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Marked improvement in inflammatory skin conditions</li>
                        <li>Visible skin brightening and tone evening</li>
                        <li>Reduced fine lines from collagen synthesis</li>
                        <li>Sustained inflammation control</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Peak Results</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum anti-inflammatory and brightening effects</li>
                        <li>Optimal skin quality and appearance</li>
                        <li>Gut health improvements stabilized</li>
                        <li>Transition to maintenance protocol for long-term benefits</li>
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
                  <CardDescription>Safety information for KLOW Capsules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      KLOW Capsules combine five well-tolerated compounds with established safety profiles. KPV has been studied extensively for inflammatory conditions with minimal adverse effects. The oral route provides lower systemic exposure than injectables, reducing theoretical risks. All components are suitable for long-term daily use.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Theoretical concern with growth-promoting peptides (limited data)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Known allergy:</strong> To any component of the formulation</li>
                      <li><strong>Severe GI disorders:</strong> Consult healthcare provider before use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      KLOW Capsules are very well tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>GI effects:</strong> Mild nausea, bloating (rare, usually resolves quickly)</li>
                      <li><strong>Headache:</strong> Rare, mild, transient</li>
                      <li><strong>Skin purging:</strong> Temporary increase in breakouts as skin detoxifies (resolves 1-2 weeks)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable manufacturers with quality testing. Require:<br/>
                      • &gt;98% purity for all peptide components (HPLC verified)<br/>
                      • High molecular weight HA<br/>
                      • Enteric coating for peptide protection<br/>
                      • Third-party testing and COA<br/>
                      • GMP manufacturing standards
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
                  <CardDescription>Tracking progress with KLOW supplementation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline photos:</strong> Document inflammatory conditions, hyperpigmentation</li>
                      <li><strong>Medical history:</strong> Screen for contraindications</li>
                      <li><strong>Skin assessment:</strong> Evaluate rosacea, acne severity, pigmentation</li>
                      <li><strong>Gut health:</strong> Assess digestive symptoms, inflammatory conditions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Assess initial anti-inflammatory response, check for GI effects</p>
                      <p><strong>Week 2-3:</strong> Evaluate reduction in inflammation, redness, active lesions</p>
                      <p><strong>Week 4:</strong> Document progress with photos, assess brightening effects</p>
                      <p><strong>Week 8:</strong> Comprehensive assessment of skin and gut improvements</p>
                      <p><strong>Week 12:</strong> Final assessment, determine maintenance protocol</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Inflammation reduction:</strong> Decreased redness, fewer inflammatory lesions</li>
                      <li><strong>Skin brightening:</strong> More even tone, reduced hyperpigmentation</li>
                      <li><strong>Acne/rosacea control:</strong> Fewer flares, reduced severity</li>
                      <li><strong>Gut health:</strong> Improved digestion, reduced bloating/inflammation</li>
                      <li><strong>Skin quality:</strong> Enhanced texture, hydration, overall appearance</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe allergic reaction:</strong> Difficulty breathing, severe swelling, anaphylaxis</li>
                      <li><strong>Persistent GI symptoms:</strong> Severe nausea, vomiting, abdominal pain</li>
                      <li><strong>Worsening skin condition:</strong> Paradoxical increase in inflammation or lesions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Combine with gentle, anti-inflammatory skincare routine</li>
                      <li>Use sun protection (SPF 30+) especially when treating hyperpigmentation</li>
                      <li>Support gut health with probiotics and anti-inflammatory diet</li>
                      <li>Avoid inflammatory triggers (harsh products, excessive sun, smoking)</li>
                      <li>Be patient with brightening - melanin regulation takes 8-12 weeks</li>
                      <li>Maintain adequate hydration for optimal HA effects</li>
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
            Educational resource for healthcare providers. KLOW Blend Capsules are dietary supplements. 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
