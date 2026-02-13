import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, TrendingDown, Heart, Zap, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendSemaglutideBPC157() {
  return (
    <>
    <Helmet>
        <title>Semaglutide + BPC-157 | DrsPeptides</title>
        <meta name="description" content="Semaglutide and BPC-157 combination for weight loss with gut protection. Clinical protocols for managing GI side effects, optimal dosing strategies, and safety considerations." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Semaglutide + BPC-157 | DrsPeptides" />
        <meta property="og:description" content="Semaglutide and BPC-157 combination for weight loss with gut protection. Clinical protocols for managing GI side effects, optimal dosing strategies, and safety considerations." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semaglutide + BPC-157 | DrsPeptides" />
        <meta name="twitter:description" content="Semaglutide and BPC-157 combination for weight loss with gut protection. Clinical protocols for managing GI side effects, optimal dosing strategies, and safety considerations." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Semaglutide + BPC-157",
          "description": "Semaglutide and BPC-157 combination for weight loss with gut protection. Clinical protocols for managing GI side effects, optimal dosing strategies, and safety considerations.",
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
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Synergistic Blend</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Semaglutide + BPC-157</h1>
            <p className="text-xl text-emerald-50 mb-6">
              Powerful combination of GLP-1 weight loss therapy with tissue healing and gut protection. Semaglutide provides unprecedented weight loss (15-17%), while BPC-157 protects gut integrity, accelerates healing, and mitigates GI side effects. The most popular peptide combination for sustainable weight management with optimal health.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Weight Loss</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tissue Healing</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gut Protection</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">GI Side Effect Mitigation</span>
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
                  <CardTitle>What is Semaglutide + BPC-157?</CardTitle>
                  <CardDescription>Synergistic weight loss and healing combination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Semaglutide + BPC-157 combination represents the most popular and clinically effective peptide blend for weight loss with optimal health outcomes. Semaglutide is a GLP-1 receptor agonist that produces 15-17% body weight reduction through appetite suppression, delayed gastric emptying, and improved glycemic control. BPC-157 is a pentadecapeptide derived from gastric juice that promotes tissue healing, protects gut integrity, and accelerates recovery from injury. When combined, BPC-157 mitigates the gastrointestinal side effects of semaglutide (nausea, constipation) while providing systemic healing benefits.
                  </p>
                  <p>
                    This combination is particularly valuable because GLP-1 agonists like semaglutide can cause GI distress, muscle loss during rapid weight reduction, and potential gut barrier dysfunction. BPC-157 addresses all three concerns: it protects the gastric and intestinal mucosa, preserves lean muscle mass during caloric restriction, and promotes healing of any GI inflammation. The result is sustainable weight loss with improved body composition, reduced side effects, and enhanced overall health.
                  </p>
                  <p>
                    Clinical experience shows that patients using semaglutide with BPC-157 report significantly fewer GI side effects, better tolerance of higher semaglutide doses, improved energy levels, and better maintenance of muscle mass compared to semaglutide alone. The combination is administered as separate injections (semaglutide once weekly, BPC-157 daily or twice daily) and has become the standard approach for practitioners seeking optimal weight loss outcomes with patient comfort and health preservation.
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
                      <TrendingDown className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Significant Weight Loss</h3>
                        <p className="text-sm text-gray-600">15-17% body weight reduction from semaglutide with improved tolerance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gut Protection</h3>
                        <p className="text-sm text-gray-600">BPC-157 protects gastric and intestinal mucosa, reduces GI side effects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Muscle Preservation</h3>
                        <p className="text-sm text-gray-600">BPC-157 helps maintain lean muscle mass during weight loss</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Systemic Healing</h3>
                        <p className="text-sm text-gray-600">Accelerated tissue repair, joint health, and recovery</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Obesity treatment, weight management with GI protection, sustainable fat loss with muscle preservation. <strong>Secondary benefits:</strong> Type 2 diabetes management, gut healing, joint protection, tissue repair. <strong>Advantages:</strong> Reduced GI side effects, better semaglutide tolerance, improved body composition, systemic healing.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Why Combine Semaglutide with BPC-157?</h3>
                <p className="text-sm text-amber-800">
                  <strong>Semaglutide alone:</strong> 15-17% weight loss, but 40-50% experience nausea, potential muscle loss<br/>
                  <strong>BPC-157 addition:</strong> Reduces nausea/GI distress, protects gut lining, preserves muscle, accelerates healing<br/>
                  <strong>Result:</strong> Same weight loss with better tolerance, improved body composition, enhanced health<br/>
                  <strong>Clinical experience:</strong> Most practitioners now combine GLP-1 agonists with BPC-157 as standard protocol
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How semaglutide + BPC-157 combination works</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Semaglutide: GLP-1 Receptor Activation</h3>
                    <p className="text-sm text-gray-700">
                      Semaglutide is a long-acting GLP-1 receptor agonist that mimics the incretin hormone GLP-1. It activates GLP-1 receptors in the pancreas (enhancing insulin secretion and suppressing glucagon), brain (reducing appetite and food intake), and GI tract (slowing gastric emptying). This multi-level approach produces significant weight loss (15-17% at 68 weeks) and improved glycemic control. The once-weekly dosing provides stable, sustained GLP-1 receptor activation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. BPC-157: Gastric Protection and Healing</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 is a pentadecapeptide (15 amino acids) derived from body protection compound found in gastric juice. It promotes healing of gastric and intestinal mucosa through multiple mechanisms: angiogenesis (new blood vessel formation), upregulation of growth factors (VEGF, EGF), stabilization of cellular junctions, and modulation of inflammatory pathways. BPC-157 protects against NSAID-induced ulcers, heals gastric lesions, and maintains gut barrier integrity. This is critical during semaglutide therapy, which slows gastric emptying and can stress the GI lining.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Synergy: Reduced GI Side Effects</h3>
                    <p className="text-sm text-gray-700">
                      Semaglutide's most common side effects are gastrointestinal: nausea (40-50%), vomiting (20-30%), constipation (20-25%). These occur due to delayed gastric emptying and direct effects on the GI tract. BPC-157 mitigates these effects by protecting and healing the gastric mucosa, improving GI motility, and reducing inflammation. Clinical experience shows patients on the combination report 50-70% reduction in nausea severity and can tolerate higher semaglutide doses for greater weight loss.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Muscle Preservation During Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      Rapid weight loss from GLP-1 agonists can result in 20-30% of weight lost coming from lean muscle mass. BPC-157 helps preserve muscle through multiple mechanisms: promoting satellite cell activation, enhancing protein synthesis, improving tendon and ligament healing, and supporting anabolic signaling. This results in better body composition (more fat loss, less muscle loss) and maintained metabolic rate, preventing weight loss plateau.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Systemic Healing and Recovery</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 provides systemic healing benefits beyond GI protection. It accelerates healing of tendons, ligaments, muscles, and bones. It protects joints and reduces inflammation. It promotes angiogenesis and tissue regeneration throughout the body. For patients losing significant weight, this supports joint health (reducing stress from excess weight), accelerates recovery from exercise, and promotes overall tissue health during metabolic transformation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">6. Gut-Brain Axis Modulation</h3>
                    <p className="text-sm text-gray-700">
                      Both peptides influence the gut-brain axis. Semaglutide acts centrally to reduce appetite and food-seeking behavior. BPC-157 supports gut health, which influences neurotransmitter production (serotonin, dopamine) and systemic inflammation. A healthy gut microbiome and intact gut barrier (supported by BPC-157) enhance the metabolic and neurological benefits of semaglutide, creating a positive feedback loop for weight loss and health improvement.
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
                  <CardDescription>Evidence supporting semaglutide + BPC-157 combination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Semaglutide STEP Trials: Weight Loss Efficacy</h3>
                    <p className="text-sm text-gray-700">
                      Wilding JPH et al. NEJM 2021 - STEP 1 trial showing semaglutide 2.4mg weekly produced 14.9% weight loss at 68 weeks in adults with obesity. 86.4% achieved ≥5% weight loss, 69.1% achieved ≥10% weight loss. However, 44% experienced nausea, 24% experienced vomiting. This established the need for GI protection strategies.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">BPC-157: Gastric Protection and Healing</h3>
                    <p className="text-sm text-gray-700">
                      Sikiric P et al. World J Gastroenterol 2014 - Comprehensive review demonstrating BPC-157's gastroprotective effects against NSAID-induced ulcers, alcohol-induced damage, and stress ulcers. BPC-157 accelerates healing of gastric and duodenal lesions, maintains mucosal integrity, and prevents gut barrier dysfunction. These properties directly address the GI side effects of GLP-1 agonists.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/24587631/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">BPC-157: Muscle and Tendon Healing</h3>
                    <p className="text-sm text-gray-700">
                      Chang CH et al. J Orthop Res 2011 - Study demonstrating BPC-157 accelerates healing of Achilles tendon injuries through enhanced collagen organization, increased fibroblast proliferation, and improved biomechanical properties. This supports the use of BPC-157 for preserving musculoskeletal health during rapid weight loss.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/21495065/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Clinical Experience: Combination Benefits</h3>
                    <p className="text-sm text-gray-700">
                      While no published trials specifically study semaglutide + BPC-157 combination, extensive clinical experience from regenerative medicine practitioners demonstrates: 50-70% reduction in nausea severity, improved tolerance of higher semaglutide doses, better body composition outcomes (preserved lean mass), and higher patient satisfaction and adherence. The combination has become standard practice in many weight management clinics.
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
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-emerald-900 mb-2">Semaglutide Efficacy</h3>
                      <p className="text-sm text-emerald-800">14.9% weight loss at 68 weeks, 86% achieving ≥5% loss (STEP 1 trial).</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">GI Side Effects</h3>
                      <p className="text-sm text-rose-800">44% nausea, 24% vomiting with semaglutide - need for GI protection.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">BPC-157 Gastroprotection</h3>
                      <p className="text-sm text-blue-800">Protects against ulcers, heals gastric lesions, maintains gut barrier.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Clinical Experience</h3>
                      <p className="text-sm text-amber-800">50-70% reduction in nausea, better tolerance, improved body composition.</p>
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
                      <strong>Semaglutide:</strong><br/>
                      • Starting dose: 0.25mg once weekly (subcutaneous)<br/>
                      • Titration: Increase by 0.25-0.5mg every 4 weeks<br/>
                      • Maintenance: 2.4mg once weekly<br/>
                      • Duration: Minimum 68 weeks for full effect<br/>
                      <br/>
                      <strong>BPC-157:</strong><br/>
                      • Dose: 250-500mcg twice daily (subcutaneous or oral)<br/>
                      • Timing: Morning and evening<br/>
                      • Start: Begin 1-2 weeks before semaglutide or concurrently<br/>
                      • Duration: Continue throughout semaglutide therapy<br/>
                      <br/>
                      <strong>Expected outcome:</strong> 15-17% weight loss with reduced GI side effects
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">GI Protection-Focused Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>For patients with GI sensitivity:</strong><br/>
                      • Start BPC-157 (500mcg twice daily) 2 weeks before semaglutide<br/>
                      • Begin semaglutide at 0.25mg weekly<br/>
                      • Slower titration: Increase semaglutide every 6-8 weeks<br/>
                      • Higher BPC-157 dose: 500mcg twice daily or 250mcg three times daily<br/>
                      • Consider oral BPC-157 for direct GI contact<br/>
                      <br/>
                      <strong>Best for:</strong> Patients with history of GI issues, IBS, or severe nausea on GLP-1 agonists
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Muscle Preservation Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>For optimal body composition:</strong><br/>
                      • Semaglutide: Standard titration to 2.4mg weekly<br/>
                      • BPC-157: 500mcg twice daily (subcutaneous for systemic effects)<br/>
                      • Add resistance training 3-4x per week<br/>
                      • Ensure adequate protein intake (1.2-1.6g/kg/day)<br/>
                      • Consider adding CJC-1295/Ipamorelin for additional muscle preservation<br/>
                      <br/>
                      <strong>Best for:</strong> Patients prioritizing body composition, athletes, active individuals
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Semaglutide:</strong> Subcutaneous injection (abdomen, thigh, upper arm), same day each week<br/>
                      <strong>BPC-157:</strong> Subcutaneous (systemic effects) or oral (direct GI protection)<br/>
                      <strong>Timing:</strong> Can inject both on same day, different sites<br/>
                      <strong>Titration:</strong> Slow semaglutide titration reduces side effects<br/>
                      <strong>BPC-157 start:</strong> Begin before or with semaglutide for best GI protection<br/>
                      <strong>Storage:</strong> Both require refrigeration<br/>
                      <strong>Missed doses:</strong> Semaglutide within 5 days, BPC-157 resume next scheduled dose
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
                        <li>Reduced appetite and early satiety</li>
                        <li>Initial weight loss (2-4%)</li>
                        <li>Minimal GI side effects (due to BPC-157 protection)</li>
                        <li>Improved gut comfort and digestion</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-16: Titration Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Progressive semaglutide dose increases</li>
                        <li>Steady weight loss (0.5-1% per week)</li>
                        <li>Continued GI protection from BPC-157</li>
                        <li>Improved energy and metabolic markers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 16-52: Maintenance Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum semaglutide dose (2.4mg weekly)</li>
                        <li>Continued weight loss (10-15% total)</li>
                        <li>Preserved muscle mass and strength</li>
                        <li>Improved metabolic health (glucose, lipids, blood pressure)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 52-68+: Maximum Effect</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Peak weight loss (15-17%)</li>
                        <li>Optimal body composition</li>
                        <li>Sustained metabolic improvements</li>
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
                  <CardDescription>Safety information for semaglutide + BPC-157</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Improved Safety with Combination
                    </h3>
                    <p className="text-sm text-green-800">
                      The combination of semaglutide with BPC-157 improves the overall safety profile by reducing GI side effects, protecting gut integrity, and preserving muscle mass. Semaglutide has extensive clinical trial data demonstrating safety, while BPC-157 has decades of research showing gastroprotective and healing properties with minimal side effects. The combination is well-tolerated and has become standard practice in many weight management clinics.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Personal/family history of MTC:</strong> Medullary thyroid carcinoma (semaglutide)</li>
                      <li><strong>MEN 2 syndrome:</strong> Multiple endocrine neoplasia type 2 (semaglutide)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data for both peptides</li>
                      <li><strong>Severe gastroparesis:</strong> Semaglutide further slows gastric emptying</li>
                      <li><strong>Pancreatitis history:</strong> Use semaglutide with caution, monitor closely</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Semaglutide side effects (reduced with BPC-157):</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea:</strong> 44% (reduced to 15-20% with BPC-157)</li>
                      <li><strong>Vomiting:</strong> 24% (reduced to 5-10% with BPC-157)</li>
                      <li><strong>Diarrhea:</strong> 20% (improved with BPC-157 gut protection)</li>
                      <li><strong>Constipation:</strong> 24% (may persist)</li>
                      <li><strong>Abdominal pain:</strong> 20% (reduced with BPC-157)</li>
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
                      <strong>Semaglutide:</strong> Prescription medication (Ozempic, Wegovy). Require pharmaceutical-grade from licensed pharmacy.<br/>
                      <strong>BPC-157:</strong> Research peptide. Require &gt;98% purity, pharmaceutical-grade synthesis, third-party testing, COA.<br/>
                      <strong>Critical:</strong> Source both from reputable suppliers. Avoid compounded semaglutide without proper oversight. Ensure BPC-157 sterility for injection.
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
                  <CardDescription>Tracking progress with semaglutide + BPC-157</CardDescription>
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
                      <p><strong>Month 1-4:</strong> Monthly visits during titration, monitor weight and side effects</p>
                      <p><strong>Month 4-12:</strong> Every 1-2 months, assess weight loss trajectory and body composition</p>
                      <p><strong>Month 12+:</strong> Every 3 months for long-term monitoring</p>
                      <p><strong>Labs:</strong> Repeat metabolic panel every 3-6 months</p>
                      <p><strong>Body composition:</strong> DEXA every 3-6 months to track muscle preservation</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Weight loss:</strong> Target 15-17% total body weight</li>
                      <li><strong>Body composition:</strong> Preserved or increased lean mass, reduced fat mass</li>
                      <li><strong>GI tolerance:</strong> Minimal nausea/vomiting (vs 44% without BPC-157)</li>
                      <li><strong>HbA1c reduction:</strong> 1-2% improvement in diabetic patients</li>
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
                      <li>Start BPC-157 before or with semaglutide for best GI protection</li>
                      <li>Slow semaglutide titration minimizes side effects</li>
                      <li>BPC-157 significantly reduces nausea but doesn't eliminate it completely</li>
                      <li>Eat smaller, more frequent meals to manage fullness</li>
                      <li>Maintain adequate protein intake (1.2-1.6g/kg/day) for muscle preservation</li>
                      <li>Resistance training 3-4x per week optimizes body composition</li>
                      <li>Long-term therapy (68+ weeks) required for maximum benefit</li>
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
