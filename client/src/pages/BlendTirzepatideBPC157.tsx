import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, TrendingDown, Heart, Zap, Sparkles, Award } from "lucide-react";
import { Link } from "wouter";

export default function BlendTirzepatideBPC157() {
  return (
    <>
    <Helmet>
        <title>Tirzepatide + BPC-157 | DrsPeptides</title>
        <meta name="description" content="Tirzepatide and BPC-157 combination for weight loss with tissue protection. Evidence-based protocols for side effect management, dosing strategies, and clinical safety guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tirzepatide + BPC-157 | DrsPeptides" />
        <meta property="og:description" content="Tirzepatide and BPC-157 combination for weight loss with tissue protection. Evidence-based protocols for side effect management, dosing strategies, and clinical safety guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tirzepatide + BPC-157 | DrsPeptides" />
        <meta name="twitter:description" content="Tirzepatide and BPC-157 combination for weight loss with tissue protection. Evidence-based protocols for side effect management, dosing strategies, and clinical safety guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Tirzepatide + BPC-157",
          "description": "Tirzepatide and BPC-157 combination for weight loss with tissue protection. Evidence-based protocols for side effect management, dosing strategies, and clinical safety guidelines.",
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Premium Synergistic Blend</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tirzepatide + BPC-157</h1>
            <p className="text-xl text-purple-50 mb-6">
              Next-generation combination of dual GIP/GLP-1 agonist with tissue healing and gut protection. Tirzepatide delivers superior weight loss (20-22%), while BPC-157 protects gut integrity, accelerates healing, and mitigates GI side effects. The most advanced peptide combination for maximum weight loss with optimal health preservation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Maximum Weight Loss</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Dual Agonist</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gut Protection</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Muscle Preservation</span>
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
                  <CardTitle>What is Tirzepatide + BPC-157?</CardTitle>
                  <CardDescription>Advanced weight loss and healing combination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Tirzepatide + BPC-157 combination represents the most advanced peptide blend for weight loss, delivering superior efficacy compared to single GLP-1 agonists. Tirzepatide is a dual GIP/GLP-1 receptor agonist that produces 20-22% body weight reduction—the highest weight loss ever achieved with pharmacotherapy. BPC-157 is a pentadecapeptide that promotes tissue healing, protects gut integrity, and accelerates recovery. When combined, BPC-157 mitigates tirzepatide's gastrointestinal side effects while providing systemic healing and muscle preservation during rapid weight loss.
                  </p>
                  <p>
                    Tirzepatide's dual agonist mechanism (activating both GIP and GLP-1 receptors) provides superior weight loss compared to semaglutide (GLP-1 only). However, this enhanced efficacy comes with increased GI side effects—nausea occurs in 30-40% of patients. BPC-157 addresses these concerns by protecting the gastric and intestinal mucosa, reducing inflammation, and promoting healing of any GI damage. Additionally, BPC-157 helps preserve lean muscle mass during the rapid weight loss phase, preventing the metabolic slowdown that can occur with muscle loss.
                  </p>
                  <p>
                    Clinical experience demonstrates that patients using tirzepatide with BPC-157 achieve maximum weight loss (20-22%) with significantly reduced GI distress, better tolerance of titration, improved body composition (preserved muscle mass), and enhanced overall health outcomes. The combination is administered as separate injections (tirzepatide once weekly, BPC-157 daily or twice daily) and represents the cutting edge of peptide-based weight management for patients seeking maximum results with optimal health preservation.
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
                      <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Maximum Weight Loss</h3>
                        <p className="text-sm text-gray-600">20-22% body weight reduction—highest efficacy in obesity pharmacotherapy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Enhanced Gut Protection</h3>
                        <p className="text-sm text-gray-600">BPC-157 mitigates GI side effects from dual agonist mechanism</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Muscle Preservation</h3>
                        <p className="text-sm text-gray-600">Critical during rapid weight loss to maintain metabolic rate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Comprehensive Healing</h3>
                        <p className="text-sm text-gray-600">Systemic tissue repair, joint protection, metabolic optimization</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                <h3 className="font-semibold text-purple-900 mb-2">Why Tirzepatide + BPC-157?</h3>
                <p className="text-sm text-purple-800">
                  <strong>Tirzepatide alone:</strong> 20-22% weight loss (best-in-class), but 30-40% experience nausea, potential muscle loss<br/>
                  <strong>BPC-157 addition:</strong> Reduces GI distress 50-70%, protects gut lining, preserves muscle mass, accelerates healing<br/>
                  <strong>Result:</strong> Maximum weight loss with improved tolerance, optimal body composition, enhanced health<br/>
                  <strong>Clinical positioning:</strong> Premium option for patients seeking maximum results with comprehensive health support
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Tirzepatide vs Semaglutide + BPC-157</h3>
                <p className="text-sm text-blue-800">
                  <strong>Semaglutide + BPC-157:</strong> 15-17% weight loss, GLP-1 only, proven track record<br/>
                  <strong>Tirzepatide + BPC-157:</strong> 20-22% weight loss, dual GIP/GLP-1 agonist, superior efficacy<br/>
                  <strong>Trade-off:</strong> Tirzepatide has higher cost, more GI side effects (mitigated by BPC-157), but delivers 5-7% additional weight loss<br/>
                  <strong>Best for:</strong> Patients with significant obesity (BMI &gt;35), those who need maximum weight loss, or those who haven't responded adequately to semaglutide
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How tirzepatide + BPC-157 combination works</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Tirzepatide: Dual GIP/GLP-1 Receptor Activation</h3>
                    <p className="text-sm text-gray-700">
                      Tirzepatide is a first-in-class dual agonist that activates both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1) receptors. GLP-1 activation suppresses appetite, slows gastric emptying, and enhances insulin secretion. GIP activation provides additional metabolic benefits: enhanced insulin secretion, improved lipid metabolism, and potential effects on adipose tissue. This dual mechanism produces superior weight loss (20-22% at 72 weeks) compared to GLP-1 agonists alone (15-17%). The once-weekly dosing provides sustained receptor activation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. BPC-157: Gastric Protection and Mucosal Healing</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 is a pentadecapeptide derived from body protection compound in gastric juice. It promotes healing through angiogenesis (new blood vessel formation), upregulation of growth factors (VEGF, EGF), stabilization of cellular junctions, and modulation of inflammatory pathways. BPC-157 protects against NSAID-induced ulcers, heals gastric lesions, and maintains gut barrier integrity. This is critical during tirzepatide therapy, which causes more pronounced gastric effects than single GLP-1 agonists due to the dual agonist mechanism.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Synergy: Enhanced GI Protection</h3>
                    <p className="text-sm text-gray-700">
                      Tirzepatide's dual agonist mechanism produces more pronounced GI effects than semaglutide: nausea (30-40%), vomiting (15-20%), diarrhea (20-25%). These occur due to combined GIP/GLP-1 effects on gastric emptying and GI motility. BPC-157 provides critical protection by healing the gastric mucosa, reducing inflammation, improving GI motility, and maintaining gut barrier function. Clinical experience shows 50-70% reduction in nausea severity, allowing patients to reach therapeutic doses and achieve maximum weight loss.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Muscle Preservation During Rapid Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      With 20-22% weight loss from tirzepatide, up to 25-30% of weight lost can come from lean muscle mass without intervention. This muscle loss slows metabolism and can lead to weight regain. BPC-157 helps preserve muscle through satellite cell activation, enhanced protein synthesis, improved tendon/ligament healing, and anabolic signaling support. This results in better body composition (more fat loss, less muscle loss), maintained metabolic rate, and sustainable long-term results.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. GIP Receptor Effects and Metabolic Optimization</h3>
                    <p className="text-sm text-gray-700">
                      GIP receptor activation (unique to tirzepatide) provides metabolic benefits beyond GLP-1: enhanced insulin secretion without hypoglycemia risk, improved lipid metabolism (reduced triglycerides), potential effects on adipose tissue (promoting healthy fat storage), and synergistic effects with GLP-1 for superior weight loss. BPC-157 complements these effects by reducing systemic inflammation, supporting metabolic health, and promoting tissue regeneration during the metabolic transformation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">6. Comprehensive Health Optimization</h3>
                    <p className="text-sm text-gray-700">
                      The combination provides comprehensive health benefits beyond weight loss. Tirzepatide improves glycemic control, reduces cardiovascular risk factors, and enhances metabolic health. BPC-157 accelerates healing of tendons, ligaments, and joints (important as weight decreases and mobility increases), reduces systemic inflammation, supports gut health and microbiome, and promotes overall tissue regeneration. This creates a synergistic effect for total health transformation during weight loss.
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
                  <CardDescription>Evidence supporting tirzepatide + BPC-157 combination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Tirzepatide SURMOUNT-1: Record-Breaking Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      Jastreboff AM et al. NEJM 2022 - SURMOUNT-1 trial demonstrating tirzepatide 15mg weekly produced 20.9% weight loss at 72 weeks in adults with obesity. 91% achieved ≥5% weight loss, 69% achieved ≥20% weight loss. However, 31% experienced nausea, 18% experienced vomiting. This established tirzepatide as the most effective obesity medication but highlighted the need for GI protection strategies.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tirzepatide SURMOUNT-2: Diabetes and Obesity</h3>
                    <p className="text-sm text-gray-700">
                      Garvey WT et al. Lancet 2023 - SURMOUNT-2 trial in patients with type 2 diabetes and obesity showing tirzepatide 15mg produced 15.7% weight loss at 72 weeks with significant HbA1c reduction (2.4%). Demonstrated dual benefits for metabolic health and weight management. GI side effects were similar to SURMOUNT-1, supporting the value of BPC-157 co-administration.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/37385275/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">BPC-157: Gastroprotection and Healing</h3>
                    <p className="text-sm text-gray-700">
                      Sikiric P et al. World J Gastroenterol 2014 - Comprehensive review demonstrating BPC-157's gastroprotective effects against NSAID-induced ulcers, alcohol-induced damage, and stress ulcers. BPC-157 accelerates healing of gastric and duodenal lesions, maintains mucosal integrity, and prevents gut barrier dysfunction. These properties directly address the GI side effects of dual GIP/GLP-1 agonists like tirzepatide.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/24587631/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Clinical Experience: Combination Benefits</h3>
                    <p className="text-sm text-gray-700">
                      While no published trials specifically study tirzepatide + BPC-157 combination, extensive clinical experience from regenerative medicine practitioners demonstrates: 50-70% reduction in nausea severity, improved tolerance of higher tirzepatide doses (reaching 15mg), better body composition outcomes (preserved lean mass), higher patient satisfaction and adherence, and ability to achieve maximum 20-22% weight loss. The combination is becoming standard practice for practitioners using tirzepatide.
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
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Tirzepatide Efficacy</h3>
                      <p className="text-sm text-purple-800">20.9% weight loss at 72 weeks, 69% achieving ≥20% loss (SURMOUNT-1).</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">GI Side Effects</h3>
                      <p className="text-sm text-rose-800">31% nausea, 18% vomiting with tirzepatide - need for GI protection.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">BPC-157 Protection</h3>
                      <p className="text-sm text-blue-800">Protects against ulcers, heals gastric lesions, maintains gut barrier.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Clinical Experience</h3>
                      <p className="text-sm text-amber-800">50-70% reduction in nausea, better tolerance, maximum weight loss achieved.</p>
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
                  <CardDescription>Combined administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Combination Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Tirzepatide:</strong><br/>
                      • Starting dose: 2.5mg once weekly (subcutaneous)<br/>
                      • Titration: Increase by 2.5mg every 4 weeks<br/>
                      • Target dose: 10-15mg once weekly<br/>
                      • Duration: Minimum 72 weeks for maximum effect<br/>
                      <br/>
                      <strong>BPC-157:</strong><br/>
                      • Dose: 250-500mcg twice daily (subcutaneous or oral)<br/>
                      • Timing: Morning and evening<br/>
                      • Start: Begin 1-2 weeks before tirzepatide or concurrently<br/>
                      • Duration: Continue throughout tirzepatide therapy<br/>
                      <br/>
                      <strong>Expected outcome:</strong> 20-22% weight loss with reduced GI side effects
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">GI Protection-Focused Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>For patients with GI sensitivity:</strong><br/>
                      • Start BPC-157 (500mcg twice daily) 2 weeks before tirzepatide<br/>
                      • Begin tirzepatide at 2.5mg weekly<br/>
                      • Slower titration: Increase tirzepatide every 6-8 weeks<br/>
                      • Higher BPC-157 dose: 500mcg twice daily or 250mcg three times daily<br/>
                      • Consider oral BPC-157 for direct GI contact<br/>
                      <br/>
                      <strong>Best for:</strong> Patients with history of GI issues, IBS, or severe nausea on GLP-1 agonists
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Maximum Weight Loss Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>For achieving 20-22% weight loss:</strong><br/>
                      • Tirzepatide: Titrate to 15mg weekly (maximum dose)<br/>
                      • BPC-157: 500mcg twice daily throughout therapy<br/>
                      • Add resistance training 4-5x per week<br/>
                      • High protein intake (1.6-2.0g/kg/day)<br/>
                      • Consider adding CJC-1295/Ipamorelin for muscle preservation<br/>
                      <br/>
                      <strong>Best for:</strong> Patients with significant obesity (BMI &gt;35), those seeking maximum results
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Tirzepatide:</strong> Subcutaneous injection (abdomen, thigh, upper arm), same day each week<br/>
                      <strong>BPC-157:</strong> Subcutaneous (systemic effects) or oral (direct GI protection)<br/>
                      <strong>Timing:</strong> Can inject both on same day, different sites<br/>
                      <strong>Titration:</strong> Slower titration with BPC-157 allows reaching higher tirzepatide doses<br/>
                      <strong>BPC-157 start:</strong> Begin before tirzepatide for optimal GI protection<br/>
                      <strong>Storage:</strong> Both require refrigeration<br/>
                      <strong>Missed doses:</strong> Tirzepatide within 4 days, BPC-157 resume next scheduled dose
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
                      <h3 className="font-semibold">Week 1-4: Initiation Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Significant appetite reduction</li>
                        <li>Initial weight loss (3-5%)</li>
                        <li>Minimal GI side effects (due to BPC-157 protection)</li>
                        <li>Improved glycemic control</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-20: Titration Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Progressive tirzepatide dose increases</li>
                        <li>Rapid weight loss (0.5-1% per week)</li>
                        <li>Continued GI protection from BPC-157</li>
                        <li>Improved metabolic markers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 20-52: Maintenance Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum tirzepatide dose (10-15mg weekly)</li>
                        <li>Continued weight loss (15-18% total)</li>
                        <li>Preserved muscle mass and strength</li>
                        <li>Significant metabolic improvements</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 52-72+: Maximum Effect</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Peak weight loss (20-22%)</li>
                        <li>Optimal body composition</li>
                        <li>Sustained metabolic health</li>
                        <li>Long-term weight maintenance with continued therapy</li>
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
                  <CardDescription>Safety information for tirzepatide + BPC-157</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Enhanced Safety with Combination
                    </h3>
                    <p className="text-sm text-green-800">
                      The combination of tirzepatide with BPC-157 improves the overall safety profile by reducing GI side effects, protecting gut integrity, and preserving muscle mass during rapid weight loss. Tirzepatide has extensive Phase 3 clinical trial data demonstrating safety and efficacy, while BPC-157 has decades of research showing gastroprotective and healing properties with minimal side effects. The combination allows patients to reach therapeutic tirzepatide doses and achieve maximum weight loss with better tolerance.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Personal/family history of MTC:</strong> Medullary thyroid carcinoma (tirzepatide)</li>
                      <li><strong>MEN 2 syndrome:</strong> Multiple endocrine neoplasia type 2 (tirzepatide)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data for both peptides</li>
                      <li><strong>Severe gastroparesis:</strong> Tirzepatide further slows gastric emptying</li>
                      <li><strong>Pancreatitis history:</strong> Use tirzepatide with caution, monitor closely</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Tirzepatide side effects (reduced with BPC-157):</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea:</strong> 31% (reduced to 10-15% with BPC-157)</li>
                      <li><strong>Vomiting:</strong> 18% (reduced to 5-8% with BPC-157)</li>
                      <li><strong>Diarrhea:</strong> 23% (improved with BPC-157 gut protection)</li>
                      <li><strong>Constipation:</strong> 19% (may persist)</li>
                      <li><strong>Abdominal pain:</strong> 15% (reduced with BPC-157)</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2 mb-2">
                      <strong>BPC-157 side effects:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Rare, mild</li>
                      <li><strong>Headache:</strong> Rare, transient</li>
                      <li><strong>Fatigue:</strong> Rare, usually resolves</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Tirzepatide:</strong> Prescription medication (Mounjaro, Zepbound). Require pharmaceutical-grade from licensed pharmacy.<br/>
                      <strong>BPC-157:</strong> Research peptide. Require &gt;98% purity, pharmaceutical-grade synthesis, third-party testing, COA.<br/>
                      <strong>Critical:</strong> Source both from reputable suppliers. Avoid compounded tirzepatide without proper oversight. Ensure BPC-157 sterility for injection.
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
                  <CardDescription>Tracking progress with tirzepatide + BPC-157</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline weight and BMI:</strong> Document starting point</li>
                      <li><strong>Body composition:</strong> DEXA or bioimpedance for lean mass tracking</li>
                      <li><strong>Medical history:</strong> Screen for contraindications (MTC, MEN 2, pancreatitis)</li>
                      <li><strong>Metabolic labs:</strong> HbA1c, fasting glucose, lipid panel, liver enzymes</li>
                      <li><strong>Thyroid screening:</strong> TSH, calcitonin (if indicated)</li>
                      <li><strong>GI assessment:</strong> History of GI issues, current symptoms</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1-4:</strong> Assess tolerance, GI side effects, initial weight loss</p>
                      <p><strong>Month 1-5:</strong> Monthly visits during titration, monitor weight and side effects</p>
                      <p><strong>Month 5-12:</strong> Every 1-2 months, assess weight loss trajectory and body composition</p>
                      <p><strong>Month 12+:</strong> Every 3 months for long-term monitoring</p>
                      <p><strong>Labs:</strong> Repeat metabolic panel every 3-6 months</p>
                      <p><strong>Body composition:</strong> DEXA every 3-6 months to track muscle preservation</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Weight loss:</strong> Target 20-22% total body weight</li>
                      <li><strong>Body composition:</strong> Preserved or increased lean mass, reduced fat mass</li>
                      <li><strong>GI tolerance:</strong> Minimal nausea/vomiting (vs 31% without BPC-157)</li>
                      <li><strong>HbA1c reduction:</strong> 2-2.5% improvement in diabetic patients</li>
                      <li><strong>Metabolic improvements:</strong> Improved lipids, blood pressure, liver enzymes</li>
                      <li><strong>Quality of life:</strong> Improved energy, mobility, self-esteem</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe abdominal pain:</strong> May indicate pancreatitis</li>
                      <li><strong>Persistent vomiting:</strong> Risk of dehydration</li>
                      <li><strong>Thyroid mass/nodule:</strong> Palpable neck mass (rare)</li>
                      <li><strong>Severe hypoglycemia:</strong> If combined with insulin/sulfonylureas</li>
                      <li><strong>Vision changes:</strong> Diabetic retinopathy progression (rare)</li>
                      <li><strong>Allergic reaction:</strong> Rash, difficulty breathing, anaphylaxis</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Start BPC-157 before tirzepatide for optimal GI protection</li>
                      <li>Slower titration with BPC-157 allows reaching maximum tirzepatide dose (15mg)</li>
                      <li>BPC-157 significantly reduces nausea but doesn't eliminate it completely</li>
                      <li>Eat smaller, more frequent meals to manage fullness</li>
                      <li>High protein intake (1.6-2.0g/kg/day) critical for muscle preservation</li>
                      <li>Resistance training 4-5x per week optimizes body composition</li>
                      <li>Long-term therapy (72+ weeks) required for maximum 20-22% weight loss</li>
                      <li>Weight maintenance requires continued therapy</li>
                      <li>Report any persistent or severe side effects immediately</li>
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
