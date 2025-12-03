import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, Sparkles, Heart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function BlendGlowCore() {
  return (
    <>
    <Helmet>
        <title>Glow Core | DrsPeptides</title>
        <meta name="description" content="Glow Core foundational anti-aging blend with peptides and antioxidants. Clinical guide to mechanisms, benefits, dosing protocols, and evidence for skin rejuvenation." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glow Core | DrsPeptides" />
        <meta property="og:description" content="Glow Core foundational anti-aging blend with peptides and antioxidants. Clinical guide to mechanisms, benefits, dosing protocols, and evidence for skin rejuvenation." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glow Core | DrsPeptides" />
        <meta name="twitter:description" content="Glow Core foundational anti-aging blend with peptides and antioxidants. Clinical guide to mechanisms, benefits, dosing protocols, and evidence for skin rejuvenation." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Glow Core",
          "description": "Glow Core foundational anti-aging blend with peptides and antioxidants. Clinical guide to mechanisms, benefits, dosing protocols, and evidence for skin rejuvenation.",
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
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Glow Core</h1>
            <p className="text-xl text-rose-50 mb-6">
              Triple-action beauty and regeneration blend combining GHK-Cu, TB-500, and BPC-157 for comprehensive skin rejuvenation, collagen synthesis, and tissue repair. The foundational formula in the Glow series.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Beauty & Regeneration</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Collagen Synthesis</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Anti-Aging</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tissue Repair</span>
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
                  <CardTitle>What is Glow Core?</CardTitle>
                  <CardDescription>Foundational beauty and regeneration peptide blend</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Glow Core is a physician-formulated peptide blend combining three powerful regenerative peptides: GHK-Cu (50mg), TB-500 (10mg), and BPC-157 (10mg). This synergistic combination targets multiple pathways involved in skin rejuvenation, collagen synthesis, wound healing, and tissue repair. The blend is designed to provide comprehensive anti-aging and regenerative support for both aesthetic and therapeutic applications.
                  </p>
                  <p>
                    GHK-Cu serves as the primary skin rejuvenation agent, activating tissue remodeling genes and stimulating collagen synthesis. TB-500 enhances cellular migration and angiogenesis for improved tissue repair. BPC-157 accelerates healing through growth factor upregulation and anti-inflammatory effects. Together, these peptides create a powerful formula for skin health, connective tissue repair, and systemic regeneration.
                  </p>
                  <p>
                    The Glow Core formula represents the foundational tier in the Glow series. It provides essential beauty and regeneration benefits suitable for general maintenance and anti-aging protocols. For enhanced anti-inflammatory and skin brightening effects, Glow Plus adds KPV. For maximum collagen stimulation, Glow Ultra increases GHK-Cu concentration to 70mg.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Blend Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">Formula per Vial</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 1</p>
                        <p className="text-2xl font-bold text-pink-600">50mg</p>
                        <p className="font-semibold">GHK-Cu</p>
                        <p className="text-xs text-gray-600 mt-1">Copper Peptide</p>
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
                        <p className="text-xs text-gray-600 mt-1">Body Protection Compound</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Skin Rejuvenation</h3>
                        <p className="text-sm text-gray-600">GHK-Cu stimulates collagen and elastin synthesis for firmer, younger-looking skin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Wound Healing</h3>
                        <p className="text-sm text-gray-600">Triple-action tissue repair from all three peptides accelerates healing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Anti-Aging Effects</h3>
                        <p className="text-sm text-gray-600">Reduces fine lines, wrinkles, and age-related skin changes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Systemic Repair</h3>
                        <p className="text-sm text-gray-600">TB-500 and BPC-157 support joint, tendon, and gut health</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Skin rejuvenation, anti-aging, wound healing, scar reduction, hair growth. <strong>Secondary benefits:</strong> Joint and tendon support, gut health, systemic tissue repair. <strong>Advantages:</strong> Synergistic multi-pathway approach combining three well-researched peptides for comprehensive regenerative support.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How Glow Core works at the cellular level</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. GHK-Cu: Gene Regulation and Collagen Synthesis</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu modulates expression of over 30% of human genes, with particular effects on tissue remodeling and regeneration pathways. It stimulates synthesis of collagen types I, II, and III, elastin, and glycosaminoglycans in dermal fibroblasts. GHK-Cu also regulates metalloproteinases (MMPs) and their inhibitors (TIMPs), balancing protein breakdown and synthesis for optimal skin matrix turnover. The copper complex enhances antioxidant enzyme activity (SOD, catalase) and reduces oxidative stress.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. TB-500: Cellular Migration and Angiogenesis</h3>
                    <p className="text-sm text-gray-700">
                      TB-500 (Thymosin Beta-4) regulates actin polymerization, facilitating cell migration to injury sites. It promotes angiogenesis through upregulation of VEGF and other pro-angiogenic factors, improving blood supply to healing tissues. TB-500 reduces inflammation by modulating cytokine production and inhibits fibrosis through regulation of TGF-β pathways. It also supports stem cell differentiation and migration, enhancing tissue regeneration capacity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. BPC-157: Growth Factor Upregulation</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 accelerates healing by upregulating growth factors including VEGF, EGF, and FGF. It stabilizes gastric pentadecapeptide BPC 157 and enhances nitric oxide (NO) production, improving blood flow to injured tissues. BPC-157 demonstrates cytoprotective effects through multiple pathways including modulation of the FAK-paxillin pathway and activation of the Src-Caveolin-1-eNOS pathway. It also exhibits anti-inflammatory properties by reducing pro-inflammatory cytokines.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Synergistic Interactions</h3>
                    <p className="text-sm text-gray-700">
                      The combination creates complementary effects: GHK-Cu provides structural protein synthesis, TB-500 ensures cellular migration and vascularization, and BPC-157 accelerates overall healing through growth factor modulation. All three peptides demonstrate anti-inflammatory properties through different mechanisms, providing comprehensive inflammation control. The blend addresses multiple rate-limiting steps in tissue repair simultaneously.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>GHK-Cu Half-life:</strong> 0.5-1 hour in circulation, but effects persist through gene modulation<br/>
                      <strong>TB-500 Half-life:</strong> Hours to days depending on tissue binding<br/>
                      <strong>BPC-157 Half-life:</strong> Relatively short, but demonstrates prolonged tissue effects<br/>
                      <strong>Route:</strong> Subcutaneous injection allows sustained release<br/>
                      <strong>Onset:</strong> Initial effects within days, peak benefits at 4-8 weeks
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
                  <CardDescription>Scientific evidence supporting Glow Core components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">GHK-Cu: Regenerative and Protective Actions</h3>
                    <p className="text-sm text-gray-700">
                      Pickart L, Margolina A. Int J Mol Sci. 2018 - Comprehensive review demonstrating GHK-Cu stimulates blood vessel and nerve outgrowth, increases collagen/elastin/glycosaminoglycan synthesis, and modulates 31.2% of human genes. Clinical studies showed 12-week application improved skin density, reduced wrinkles, and enhanced overall appearance.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/29986520/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (186+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">TB-500: Tissue Repair and Angiogenesis</h3>
                    <p className="text-sm text-gray-700">
                      Goldstein AL et al. Ann N Y Acad Sci. 2012 - Thymosin beta-4 promotes wound healing, angiogenesis, and tissue regeneration through regulation of actin dynamics and cell migration. Demonstrated efficacy in dermal wound healing, cardiac repair, and corneal injury models.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/22950697/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (150+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">BPC-157: Cytoprotective and Healing Effects</h3>
                    <p className="text-sm text-gray-700">
                      Sikiric P et al. Curr Pharm Des. 2018 - BPC-157 demonstrates remarkable healing effects in multiple tissue types including skin, muscle, tendon, and gastrointestinal tract. Mechanisms include growth factor upregulation, angiogenesis promotion, and anti-inflammatory activity.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/29557737/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (100+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Combination Therapy Rationale</h3>
                    <p className="text-sm text-gray-700">
                      Multiple studies support combining peptides with complementary mechanisms for enhanced regenerative effects. GHK-Cu's collagen synthesis, TB-500's angiogenesis, and BPC-157's growth factor modulation address different rate-limiting steps in tissue repair, creating synergistic benefits beyond individual peptide effects.
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
                      <h3 className="font-semibold text-pink-900 mb-2">Collagen Stimulation</h3>
                      <p className="text-sm text-pink-800">GHK-Cu increased collagen synthesis 70% when combined with LED therapy. Clinical studies showed increased skin density and thickness after 12 weeks.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Wound Healing</h3>
                      <p className="text-sm text-rose-800">TB-500 and BPC-157 both demonstrated accelerated wound closure in animal models through complementary mechanisms of angiogenesis and growth factor upregulation.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Anti-Aging Effects</h3>
                      <p className="text-sm text-purple-800">GHK-Cu reduced fine lines and wrinkle depth in clinical trials. Gene profiling showed activation of tissue remodeling and protective pathways.</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Safety Profile</h3>
                      <p className="text-sm text-indigo-800">All three components demonstrated excellent safety in clinical and preclinical studies with minimal adverse effects reported.</p>
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
                  <CardDescription>Evidence-based administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Maintenance Protocol (General Anti-Aging)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection (based on reconstitution volume)<br/>
                      <strong>Route:</strong> Subcutaneous (abdomen, thigh, or upper arm)<br/>
                      <strong>Frequency:</strong> 2-3 times weekly<br/>
                      <strong>Duration:</strong> 8-12 week cycles with 4-week breaks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Intensive Protocol (Active Healing/Rejuvenation)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous<br/>
                      <strong>Frequency:</strong> Daily or 5-6 times weekly<br/>
                      <strong>Duration:</strong> 4-8 weeks, then transition to maintenance
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Reconstitution:</strong> Add 2-3mL bacteriostatic water to vial. Gently swirl (do not shake).<br/>
                      <strong>Storage:</strong> Refrigerate reconstituted solution (2-8°C). Use within 30 days.<br/>
                      <strong>Timing:</strong> Can be administered any time of day. Some prefer evening for overnight repair processes.<br/>
                      <strong>Injection sites:</strong> Rotate sites to prevent tissue irritation. Common sites include abdomen, thighs, upper arms.
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
                      <h3 className="font-semibold">Day 1-7: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved skin hydration and glow</li>
                        <li>Reduced inflammation if present</li>
                        <li>Enhanced sense of well-being</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Early Changes</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable improvement in skin texture and tone</li>
                        <li>Reduction in fine lines</li>
                        <li>Accelerated healing of minor wounds or blemishes</li>
                        <li>Improved hair quality and growth</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Visible reduction in wrinkle depth</li>
                        <li>Improved skin firmness and elasticity</li>
                        <li>Enhanced collagen density (measurable)</li>
                        <li>Reduction in scars and hyperpigmentation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Peak Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum collagen remodeling and skin improvement</li>
                        <li>Sustained anti-aging benefits</li>
                        <li>Optimal tissue repair and regeneration</li>
                        <li>Transition to maintenance dosing for sustained results</li>
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
                  <CardDescription>Comprehensive safety information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Glow Core combines three well-tolerated peptides with established safety profiles. GHK-Cu is a naturally occurring human peptide. TB-500 and BPC-157 have been extensively studied in preclinical models with minimal adverse effects. The combination has been used clinically for beauty and regenerative applications with high patient satisfaction and safety.
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
                      <li><strong>Known allergy:</strong> To any component of the blend</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Glow Core is generally very well tolerated. Most users experience no significant side effects.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Mild redness, swelling, or bruising (5-10% of users, typically resolves quickly)</li>
                      <li><strong>Skin purging:</strong> Temporary increase in cellular turnover may cause minor breakouts initially (resolves within 1-2 weeks)</li>
                      <li><strong>Flushing:</strong> Rare, mild, transient (related to increased blood flow)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable suppliers with third-party testing. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Certificate of Analysis (COA)<br/>
                      • Endotoxin testing (&lt;1 EU/mg)<br/>
                      • GMP manufacturing standards<br/>
                      • Proper lyophilization and storage
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
                  <CardDescription>Tracking progress and safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline photos:</strong> Document skin condition, wrinkles, texture before starting</li>
                      <li><strong>Medical history:</strong> Screen for contraindications (active cancer, pregnancy)</li>
                      <li><strong>Skin assessment:</strong> Evaluate skin type, concerns, treatment goals</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 2:</strong> Check for injection site reactions, assess initial skin response</p>
                      <p><strong>Week 4:</strong> Evaluate early improvements, adjust dosing if needed</p>
                      <p><strong>Week 8:</strong> Document progress with photos, assess collagen improvements</p>
                      <p><strong>Week 12:</strong> Final assessment, determine maintenance protocol</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Skin texture:</strong> Smoother, more refined appearance</li>
                      <li><strong>Fine lines/wrinkles:</strong> Visible reduction in depth and number</li>
                      <li><strong>Skin firmness:</strong> Improved elasticity and tightness</li>
                      <li><strong>Skin tone:</strong> More even, reduced hyperpigmentation</li>
                      <li><strong>Hydration:</strong> Improved moisture retention and glow</li>
                      <li><strong>Hair quality:</strong> Increased thickness, growth rate</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe allergic reaction:</strong> Difficulty breathing, severe swelling, anaphylaxis</li>
                      <li><strong>Persistent injection site infection:</strong> Increasing redness, warmth, pus, fever</li>
                      <li><strong>Unexpected symptoms:</strong> Any concerning or unusual reactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Combine with quality skincare routine for optimal results</li>
                      <li>Use sun protection (SPF 30+) to protect regenerating skin</li>
                      <li>Maintain adequate hydration and nutrition (protein, vitamin C, zinc)</li>
                      <li>Avoid smoking and excessive alcohol which impair collagen synthesis</li>
                      <li>Be patient - significant results take 4-8 weeks</li>
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
            Educational resource for healthcare providers. Glow Core is a research peptide blend. 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
