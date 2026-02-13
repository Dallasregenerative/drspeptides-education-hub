import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendGlowUltra() {
  return (
    <>
    <Helmet>
        <title>Glow Ultra | DrsPeptides</title>
        <meta name="description" content="Glow Ultra premium anti-aging blend with maximum peptide concentration. Comprehensive clinical guide to mechanisms, protocols, safety, and evidence for advanced aesthetic applications." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glow Ultra | DrsPeptides" />
        <meta property="og:description" content="Glow Ultra premium anti-aging blend with maximum peptide concentration. Comprehensive clinical guide to mechanisms, protocols, safety, and evidence for advanced aesthetic applications." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glow Ultra | DrsPeptides" />
        <meta name="twitter:description" content="Glow Ultra premium anti-aging blend with maximum peptide concentration. Comprehensive clinical guide to mechanisms, protocols, safety, and evidence for advanced aesthetic applications." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Glow Ultra",
          "description": "Glow Ultra premium anti-aging blend with maximum peptide concentration. Comprehensive clinical guide to mechanisms, protocols, safety, and evidence for advanced aesthetic applications.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2026-02-12",
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

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Glow Ultra</h1>
            <p className="text-xl text-pink-50 mb-6">
              Maximum strength Glow formula with elevated GHK-Cu (70mg) for intensive anti-aging and collagen stimulation. Combines GHK-Cu (70mg), TB-500 (10mg), and BPC-157 (10mg) for aggressive skin rejuvenation and deep wrinkle reduction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Maximum Strength</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intensive Anti-Aging</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Deep Wrinkle Reduction</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">+40% GHK-Cu</span>
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
                <Syringe className="h-4 w-4" />
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
                  <CardTitle>What is Glow Ultra?</CardTitle>
                  <CardDescription>Maximum strength beauty and anti-aging peptide blend</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Glow Ultra represents the pinnacle of the Glow series, featuring an elevated GHK-Cu concentration of 70mg (40% higher than Glow Core) combined with TB-500 (10mg) and BPC-157 (10mg). This maximum strength formulation is designed for intensive anti-aging protocols, significant photoaging reversal, and aggressive collagen remodeling in mature skin.
                  </p>
                  <p>
                    The increased GHK-Cu dosage provides enhanced gene modulation effects, stimulating higher levels of collagen types I, II, and III synthesis, increased elastin production, and more robust glycosaminoglycan formation. This translates to more dramatic improvements in skin firmness, deeper wrinkle reduction, and accelerated reversal of age-related skin changes. TB-500 and BPC-157 support the intensive regeneration process through enhanced angiogenesis, cell migration, and growth factor upregulation.
                  </p>
                  <p>
                    Glow Ultra is ideal for individuals 40+ with significant photoaging, established deep wrinkles, substantial skin laxity, or those seeking maximum anti-aging results. It's the premium choice for intensive rejuvenation protocols and represents the highest tier of the Glow series for those who want the most aggressive collagen-stimulating formula available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Blend Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">Formula per Vial</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border-2 border-pink-300">
                        <p className="text-sm text-muted-foreground">Component 1</p>
                        <p className="text-3xl font-bold text-pink-600">70mg</p>
                        <p className="font-semibold">GHK-Cu</p>
                        <Badge variant="secondary" className="mt-2">+40% vs Core</Badge>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 2</p>
                        <p className="text-2xl font-bold text-rose-600">10mg</p>
                        <p className="font-semibold">TB-500</p>
                        <p className="text-xs text-gray-600 mt-1">Thymosin Beta-4</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 3</p>
                        <p className="text-2xl font-bold text-purple-600">10mg</p>
                        <p className="font-semibold">BPC-157</p>
                        <p className="text-xs text-gray-600 mt-1">Body Protection</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Maximum Collagen Stimulation</h3>
                        <p className="text-sm text-gray-600">70mg GHK-Cu provides peak collagen and elastin synthesis for dramatic skin improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-fuchsia-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Deep Wrinkle Reduction</h3>
                        <p className="text-sm text-gray-600">Higher dose targets established wrinkles and significant photoaging</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Intensive Skin Tightening</h3>
                        <p className="text-sm text-gray-600">Enhanced firmness and elasticity from maximum collagen remodeling</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Accelerated Regeneration</h3>
                        <p className="text-sm text-gray-600">TB-500 and BPC-157 support rapid tissue repair and healing</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Intensive anti-aging (40+ years), significant photoaging reversal, deep wrinkle reduction, skin tightening. <strong>Secondary benefits:</strong> Hair restoration, scar remodeling, accelerated wound healing. <strong>Advantages:</strong> Maximum strength GHK-Cu formula for those seeking the most aggressive collagen-stimulating protocol available.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How Glow Ultra works at maximum strength</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Enhanced GHK-Cu Gene Modulation (70mg)</h3>
                    <p className="text-sm text-gray-700">
                      At 70mg concentration, GHK-Cu provides maximum gene modulation effects, regulating over 30% of human genes with enhanced magnitude. The higher dose amplifies stimulation of collagen types I, II, and III synthesis, elastin production, and glycosaminoglycan formation. It provides stronger regulation of metalloproteinases (MMPs) and their inhibitors (TIMPs), optimizing the balance between protein synthesis and breakdown for aggressive skin remodeling. The elevated copper complex concentration enhances antioxidant enzyme activity (SOD, catalase) and provides superior protection against oxidative stress.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Dose-Response Relationship</h3>
                    <p className="text-sm text-gray-700">
                      Research demonstrates that GHK-Cu exhibits dose-dependent effects on collagen synthesis and skin regeneration. The 70mg dose in Glow Ultra (versus 50mg in Core) provides approximately 40% higher peptide concentration, translating to enhanced fibroblast stimulation, increased collagen deposition, and more robust tissue remodeling. This higher dose is particularly effective for mature skin where baseline collagen synthesis is significantly reduced.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. TB-500: Angiogenesis Support</h3>
                    <p className="text-sm text-gray-700">
                      TB-500 becomes increasingly important at higher GHK-Cu doses, as enhanced collagen synthesis requires robust blood supply for nutrient delivery. TB-500 promotes angiogenesis through VEGF upregulation, ensuring adequate vascularization to support intensive tissue remodeling. It facilitates cell migration and reduces inflammation that could impair the regeneration process.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. BPC-157: Growth Factor Amplification</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 amplifies the regenerative effects through growth factor upregulation (VEGF, EGF, FGF), creating a synergistic environment for maximum collagen remodeling. It enhances nitric oxide production, improving blood flow to support the intensive metabolic demands of accelerated tissue regeneration. BPC-157's cytoprotective effects protect cells during the aggressive remodeling process.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Maximum Strength Synergy</h3>
                    <p className="text-sm text-gray-700">
                      The 70mg GHK-Cu dose creates a more aggressive regenerative environment that requires the supporting effects of TB-500 and BPC-157 to optimize results. The three-peptide combination ensures that increased collagen synthesis is supported by adequate vascularization, growth factor availability, and cellular protection, preventing imbalances that could occur with high-dose GHK-Cu alone.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>GHK-Cu (70mg):</strong> Higher dose provides sustained gene modulation effects<br/>
                      <strong>TB-500:</strong> Prolonged tissue binding supports extended regeneration<br/>
                      <strong>BPC-157:</strong> Rapid uptake with sustained tissue effects<br/>
                      <strong>Route:</strong> Subcutaneous injection for gradual release<br/>
                      <strong>Onset:</strong> Initial effects within 1-2 weeks, peak benefits 8-12 weeks
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
                  <CardDescription>Evidence supporting maximum strength GHK-Cu formulation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">GHK-Cu Dose-Dependent Effects</h3>
                    <p className="text-sm text-gray-700">
                      Pickart L, Margolina A. Int J Mol Sci. 2018 - GHK-Cu demonstrates dose-dependent effects on gene expression and collagen synthesis. Higher concentrations provide enhanced tissue remodeling and regenerative effects. Clinical studies with GHK-Cu formulations showed progressive improvements in skin density, wrinkle reduction, and overall appearance with increasing concentrations.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/29986520/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (186+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Collagen Synthesis in Aged Skin</h3>
                    <p className="text-sm text-gray-700">
                      Multiple studies demonstrate that aged skin exhibits significantly reduced collagen synthesis capacity. Higher GHK-Cu concentrations are required to achieve comparable stimulation in mature skin versus younger skin. The 70mg dose in Glow Ultra addresses this age-related decline in collagen production, providing sufficient peptide concentration to overcome reduced fibroblast responsiveness.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Photoaging Reversal</h3>
                    <p className="text-sm text-gray-700">
                      Clinical trials with GHK-Cu formulations demonstrated significant improvements in photoaged skin including increased skin thickness, improved density, reduced wrinkle depth, and enhanced clarity. Higher concentrations showed more dramatic results, particularly for established signs of photoaging and deep wrinkles.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Combination Therapy Rationale</h3>
                    <p className="text-sm text-gray-700">
                      The combination of high-dose GHK-Cu with TB-500 and BPC-157 addresses multiple aspects of intensive skin regeneration: collagen synthesis (GHK-Cu), vascularization (TB-500), and growth factor support (BPC-157). This multi-pathway approach optimizes results for aggressive anti-aging protocols.
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
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">Maximum Collagen Boost</h3>
                      <p className="text-sm text-pink-800">70mg GHK-Cu provides peak collagen synthesis stimulation, particularly effective in mature skin with reduced baseline production.</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-fuchsia-900 mb-2">Deep Wrinkle Improvement</h3>
                      <p className="text-sm text-fuchsia-800">Higher GHK-Cu concentrations demonstrated superior results for established wrinkles and significant photoaging.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Skin Density Increase</h3>
                      <p className="text-sm text-purple-800">Clinical studies showed measurable increases in skin thickness and density with GHK-Cu treatment.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Gene Expression Changes</h3>
                      <p className="text-sm text-rose-800">GHK-Cu modulates over 30% of human genes, with dose-dependent effects on tissue remodeling pathways.</p>
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
                  <CardDescription>Maximum strength administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Intensive Anti-Aging Protocol (Recommended)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous (abdomen, thigh, or upper arm)<br/>
                      <strong>Frequency:</strong> 3-4 times weekly<br/>
                      <strong>Duration:</strong> 12-week intensive cycle, then 4-week break, repeat as needed
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Maximum Strength Protocol (Advanced)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous<br/>
                      <strong>Frequency:</strong> Daily for 4-6 weeks, then transition to 3-4x weekly<br/>
                      <strong>Duration:</strong> 12-week total, then 4-week break
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Maintenance Protocol (Post-Intensive)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous<br/>
                      <strong>Frequency:</strong> 2-3 times weekly<br/>
                      <strong>Duration:</strong> Ongoing maintenance after intensive cycle
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Reconstitution:</strong> Add 2-3mL bacteriostatic water. Gently swirl (do not shake).<br/>
                      <strong>Storage:</strong> Refrigerate reconstituted solution (2-8°C). Use within 30 days.<br/>
                      <strong>Timing:</strong> Evening administration may support overnight regeneration processes.<br/>
                      <strong>Injection sites:</strong> Rotate sites to prevent irritation.<br/>
                      <strong>Best for:</strong> Mature skin (40+), significant photoaging, deep wrinkles, intensive rejuvenation goals.
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
                      <h3 className="font-semibold">Week 1-2: Initial Response</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved skin hydration and radiance</li>
                        <li>Enhanced skin texture</li>
                        <li>Subtle firmness improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 3-6: Visible Changes</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable reduction in fine lines</li>
                        <li>Improved skin tone and clarity</li>
                        <li>Beginning of deep wrinkle improvement</li>
                        <li>Enhanced skin firmness</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 6-10: Dramatic Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Significant reduction in wrinkle depth</li>
                        <li>Measurable increase in skin density and thickness</li>
                        <li>Visible skin tightening and lifting</li>
                        <li>Improved photoaging signs</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 10-12: Peak Results</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum collagen remodeling effects</li>
                        <li>Optimal wrinkle reduction and skin quality</li>
                        <li>Dramatic overall appearance improvement</li>
                        <li>Transition to maintenance protocol to sustain results</li>
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
                  <CardDescription>Safety considerations for maximum strength formula</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Well-Tolerated Maximum Strength Formula
                    </h3>
                    <p className="text-sm text-green-800">
                      Despite the higher GHK-Cu concentration, Glow Ultra maintains an excellent safety profile. GHK-Cu is a naturally occurring human peptide with extensive clinical use. The 70mg dose remains within safe ranges demonstrated in research. TB-500 and BPC-157 have established preclinical safety profiles. Clinical use of this combination has shown high patient satisfaction with minimal adverse effects.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Growth-promoting effects may theoretically affect tumor growth (limited data, theoretical concern)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Known allergy:</strong> To any component of the blend or copper sensitivity</li>
                      <li><strong>Wilson's disease:</strong> Copper metabolism disorder (absolute contraindication)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Glow Ultra is generally well tolerated even at maximum strength. Side effects are typically mild and transient.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Mild redness, swelling, or bruising (5-15% of users, typically resolves quickly)</li>
                      <li><strong>Skin purging:</strong> Increased cellular turnover may cause temporary breakouts (resolves within 1-2 weeks)</li>
                      <li><strong>Mild copper taste:</strong> Rare, transient metallic taste (related to copper complex)</li>
                      <li><strong>Flushing:</strong> Rare, mild, related to increased blood flow</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical for maximum strength formula:</strong> Source from reputable suppliers with rigorous testing. Require:<br/>
                      • &gt;99% purity for GHK-Cu (HPLC verified)<br/>
                      • &gt;98% purity for TB-500 and BPC-157<br/>
                      • Certificate of Analysis (COA) for all components<br/>
                      • Endotoxin testing (&lt;1 EU/mg)<br/>
                      • GMP manufacturing standards<br/>
                      • Proper lyophilization and sterile compounding
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
                  <CardDescription>Tracking progress with maximum strength protocol</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline photos:</strong> Document wrinkles, skin laxity, photoaging before starting</li>
                      <li><strong>Medical history:</strong> Screen for contraindications, especially copper metabolism disorders</li>
                      <li><strong>Skin assessment:</strong> Evaluate wrinkle depth, skin thickness, elasticity, photoaging severity</li>
                      <li><strong>Realistic expectations:</strong> Discuss timeline and expected improvements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 2:</strong> Check for injection site reactions, assess initial skin response</p>
                      <p><strong>Week 4:</strong> Evaluate early improvements, document changes with photos</p>
                      <p><strong>Week 6:</strong> Mid-cycle assessment, adjust dosing frequency if needed</p>
                      <p><strong>Week 8:</strong> Document significant improvements, assess collagen remodeling</p>
                      <p><strong>Week 12:</strong> Final intensive cycle assessment, plan maintenance protocol</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Wrinkle depth:</strong> Measurable reduction in deep wrinkles</li>
                      <li><strong>Skin thickness:</strong> Increased dermal density (can be measured)</li>
                      <li><strong>Skin firmness:</strong> Improved elasticity and tightness</li>
                      <li><strong>Fine lines:</strong> Visible reduction or elimination</li>
                      <li><strong>Skin tone:</strong> More even, improved clarity</li>
                      <li><strong>Overall appearance:</strong> Dramatic rejuvenation and age reversal</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe allergic reaction:</strong> Difficulty breathing, severe swelling, anaphylaxis</li>
                      <li><strong>Persistent injection site infection:</strong> Increasing redness, warmth, pus, fever</li>
                      <li><strong>Copper toxicity symptoms:</strong> Nausea, vomiting, abdominal pain (extremely rare)</li>
                      <li><strong>Unexpected symptoms:</strong> Any concerning or unusual reactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Combine with professional-grade skincare for optimal results</li>
                      <li>Strict sun protection (SPF 50+) during intensive regeneration</li>
                      <li>Maintain excellent nutrition (protein, vitamin C, zinc, copper)</li>
                      <li>Avoid smoking and excessive alcohol which impair collagen synthesis</li>
                      <li>Be patient - maximum results take 10-12 weeks</li>
                      <li>Plan for maintenance protocol to sustain improvements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
    </div>
    </>
  );
}
