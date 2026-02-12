import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ExternalLink, Microscope, Shield, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function ProtocolInjuryHealing() {
  return (
    <>
    <Helmet>
        <title>Peptide Education Hub | DrsPeptides</title>
        <meta name="description" content="Comprehensive peptide protocols for injury recovery and tissue repair. BPC-157, TB-500, growth factors, dosing strategies, and evidence-based healing protocols for practitioners." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Peptide Education Hub | DrsPeptides" />
        <meta property="og:description" content="Comprehensive peptide protocols for injury recovery and tissue repair. BPC-157, TB-500, growth factors, dosing strategies, and evidence-based healing protocols for practitioners." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptide Education Hub | DrsPeptides" />
        <meta name="twitter:description" content="Comprehensive peptide protocols for injury recovery and tissue repair. BPC-157, TB-500, growth factors, dosing strategies, and evidence-based healing protocols for practitioners." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Peptide Education Hub",
          "description": "Comprehensive peptide protocols for injury recovery and tissue repair. BPC-157, TB-500, growth factors, dosing strategies, and evidence-based healing protocols for practitioners.",
          "url": ${window.location.href},
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Injury Healing & Tissue Repair Protocol</h2>
            <p className="text-2xl text-blue-50 mb-8">
              Evidence-based regenerative peptide therapy for accelerated recovery
            </p>
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-3 mt-4">
              <p className="text-sm text-white font-medium">⚠️ BPC-157 and TB-500 are not FDA approved and are for research and investigational use only. For healthcare provider use under appropriate supervision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">Protocol Overview</CardTitle>
              <CardDescription>Regenerative peptides for soft tissue injury and accelerated healing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Injury healing protocols leverage peptides with regenerative properties to accelerate tissue repair, reduce inflammation, and support recovery from acute and chronic injuries. This protocol focuses on two primary peptides with complementary mechanisms of action.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Primary Applications</h4>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Tendon and ligament injuries</li>
                    <li>• Muscle tears and strains</li>
                    <li>• Joint injuries and inflammation</li>
                    <li>• Surgical recovery</li>
                    <li>• Chronic tendinopathies</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Evidence Level</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Level 2B:</strong> Primarily animal studies with limited human trials showing promising tissue repair effects. Investigational use requires informed consent and appropriate medical supervision.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BPC-157 Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="h-6 w-6 text-teal-600" />
                BPC-157 (Body Protection Compound)
              </CardTitle>
              <CardDescription>Stable gastric pentadecapeptide with broad regenerative properties</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Mechanism of Action</h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Angiogenesis promotion:</strong> Stimulates VEGF (vascular endothelial growth factor) to enhance blood vessel formation and tissue perfusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Growth factor modulation:</strong> Upregulates growth hormone receptors and enhances collagen synthesis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Anti-inflammatory effects:</strong> Reduces pro-inflammatory cytokines and oxidative stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Nitric oxide modulation:</strong> Regulates NO pathways to support healing and reduce inflammation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Clinical Applications & Research</h4>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Tendon & Ligament Healing</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Animal studies demonstrate accelerated healing of Achilles tendon injuries, with improved tensile strength and collagen organization. Research shows BPC-157 may promote tendon-to-bone healing after surgical repair.
                    </p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1">
                      View study on PubMed <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Muscle Injury Recovery</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Preclinical evidence suggests BPC-157 accelerates healing of muscle tears and contusions, with enhanced functional recovery and reduced scar tissue formation.
                    </p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/24046608/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1">
                      View study on PubMed <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Gastrointestinal Protection</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Originally studied for gastric ulcer healing, BPC-157 demonstrates protective effects on the GI tract and may support gut-joint axis in inflammatory conditions.
                    </p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/28222814/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1">
                      View study on PubMed <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Dosing Protocols (Investigational)</h4>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-lg mb-4">
                  <p className="text-sm text-yellow-900 dark:text-yellow-100">
                    <AlertTriangle className="inline h-4 w-4 mr-1" />
                    <strong>Healthcare Provider Supervision Required:</strong> These protocols are for investigational use only and must be administered under appropriate medical supervision with informed consent.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Systemic Administration</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• <strong>Dose:</strong> 250-500 mcg subcutaneous</li>
                      <li>• <strong>Frequency:</strong> Once or twice daily</li>
                      <li>• <strong>Duration:</strong> 4-8 weeks</li>
                      <li>• <strong>Timing:</strong> Morning and/or evening</li>
                    </ul>
                  </div>
                  <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Localized Administration</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• <strong>Dose:</strong> 200-400 mcg per site</li>
                      <li>• <strong>Frequency:</strong> 2-3 times per week</li>
                      <li>• <strong>Duration:</strong> 4-6 weeks</li>
                      <li>• <strong>Method:</strong> Perilesional injection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TB-500 Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                TB-500 (Thymosin Beta-4 Fragment)
              </CardTitle>
              <CardDescription>Synthetic peptide derived from naturally occurring thymosin beta-4</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Mechanism of Action</h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Actin regulation:</strong> Binds to actin and promotes cell migration and differentiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Angiogenesis:</strong> Promotes new blood vessel formation through endothelial cell migration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Anti-inflammatory:</strong> Reduces acute inflammation and modulates immune response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stem cell recruitment:</strong> Attracts stem cells to injury sites for enhanced regeneration</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Research Evidence</h4>
                <div className="space-y-3">
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Wound Healing & Tissue Repair</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Studies demonstrate TB-500 accelerates wound closure, improves collagen deposition, and enhances tissue remodeling. Shows promise in both acute injury and chronic wound management.
                    </p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/17406642/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1">
                      View study on PubMed <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Cardiac Protection</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Research in cardiac injury models shows TB-500 may support cardiac cell survival and promote functional recovery after myocardial injury.
                    </p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/15240559/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1">
                      View study on PubMed <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Dosing Protocols (Investigational)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Loading Phase</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• <strong>Dose:</strong> 2-2.5 mg subcutaneous</li>
                      <li>• <strong>Frequency:</strong> Twice weekly</li>
                      <li>• <strong>Duration:</strong> 4-6 weeks</li>
                      <li>• <strong>Goal:</strong> Establish therapeutic levels</li>
                    </ul>
                  </div>
                  <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Maintenance Phase</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• <strong>Dose:</strong> 2-2.5 mg subcutaneous</li>
                      <li>• <strong>Frequency:</strong> Once weekly</li>
                      <li>• <strong>Duration:</strong> 4-8 weeks</li>
                      <li>• <strong>Goal:</strong> Sustain regenerative effects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Combination Protocol */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Combination Protocol: BPC-157 + TB-500</CardTitle>
              <CardDescription>Synergistic approach for comprehensive tissue repair</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300">
                Many practitioners use BPC-157 and TB-500 in combination to leverage their complementary mechanisms of action. While no human clinical trials have evaluated this combination, anecdotal reports and theoretical rationale support synergistic effects.
              </p>
              
              <div className="bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Sample Combination Protocol</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Week 1-4 (Acute Phase)</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• BPC-157: 250-500 mcg subcutaneous, twice daily</li>
                      <li>• TB-500: 2.5 mg subcutaneous, twice weekly</li>
                      <li>• Focus: Reduce inflammation, initiate healing cascade</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Week 5-8 (Proliferative Phase)</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• BPC-157: 250-500 mcg subcutaneous, once daily</li>
                      <li>• TB-500: 2.5 mg subcutaneous, once weekly</li>
                      <li>• Focus: Tissue remodeling, strength restoration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Week 9-12 (Remodeling Phase - Optional)</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• BPC-157: 250 mcg subcutaneous, 3-4 times weekly</li>
                      <li>• TB-500: 2.5 mg subcutaneous, every 2 weeks</li>
                      <li>• Focus: Optimize tissue quality, prevent re-injury</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety & Monitoring */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-slate-600" />
                Safety Considerations & Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Important Safety Notes</h4>
                <ul className="text-sm space-y-1 text-red-900 dark:text-red-100">
                  <li>• Neither BPC-157 nor TB-500 are FDA-approved for human use</li>
                  <li>• Long-term safety data in humans is limited</li>
                  <li>• Use requires informed consent and medical supervision</li>
                  <li>• Not recommended during pregnancy or breastfeeding</li>
                  <li>• May be prohibited by athletic governing bodies (check WADA status)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Potential Side Effects (Reported)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">BPC-157</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Injection site reactions (rare)</li>
                      <li>• Transient fatigue (uncommon)</li>
                      <li>• Headache (rare)</li>
                      <li>• Generally well-tolerated in studies</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2">TB-500</h5>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• Injection site reactions</li>
                      <li>• Transient lethargy</li>
                      <li>• Head rush or lightheadedness (rare)</li>
                      <li>• Generally well-tolerated</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Monitoring Recommendations</h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Baseline assessment:</strong> Document injury severity, pain levels, and functional limitations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Weekly tracking:</strong> Pain scores, range of motion, functional capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Imaging (as appropriate):</strong> Ultrasound or MRI to assess tissue healing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Adverse event reporting:</strong> Document any unexpected symptoms or reactions</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Regenerative Peptide Therapy?</h3>
              <p className="mb-6 text-teal-50">
                DrsPeptides.com provides research-grade peptides for healthcare providers. All products are third-party tested for purity and potency.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-teal-600 hover:bg-slate-100">
                    Browse Peptides
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/safety-compliance">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    View Safety Guidelines
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>

      {/* Footer */}
    </div>
    </>
  );
}
