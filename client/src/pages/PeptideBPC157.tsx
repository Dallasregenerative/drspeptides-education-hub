import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ExternalLink, Microscope, Shield, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";

export default function PeptideBPC157() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Therapy Hub</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">Home</Link>
            <Link href="/blog" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">Blog</Link>
            <Link href="/resources" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">Resources</Link>
          </nav>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">BPC-157: The Regenerative Peptide</h2>
            <p className="text-2xl text-teal-50 mb-8">
              Research-backed tissue repair and healing for healthcare providers
            </p>
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-3 mt-4">
              <p className="text-sm text-white font-medium">⚠️ BPC-157 is not FDA approved and is for research and investigational use only. For healthcare provider use under appropriate supervision.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">99%+</div>
                <div className="text-sm text-teal-100">Purity Standard</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-teal-100">Clinical Studies</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">Multiple</div>
                <div className="text-sm text-teal-100">Applications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is BPC-157 */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">What is BPC-157?</h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a protective protein found in human gastric juice. This 15-amino acid sequence has been studied for its regenerative properties across multiple tissue types in preclinical and limited clinical research, making it an area of significant interest for healthcare providers exploring regenerative medicine.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              Originally studied for its gastroprotective effects, research suggests BPC-157 may support healing processes in tendons, ligaments, muscles, bones, and neural tissue. Evidence indicates its mechanism may involve angiogenesis promotion, collagen formation, and modulation of growth factors. Most evidence comes from animal studies with limited human clinical trials (Level 2B evidence).
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Clinical Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Tendon & Ligament Repair</CardTitle>
                <CardDescription>
                  Research suggests potential for supporting healing of tendinopathies, tears, and chronic injuries through enhanced collagen synthesis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Muscle Recovery</CardTitle>
                <CardDescription>
                  Studies indicate potential for supporting muscle healing, reducing inflammation, and aiding recovery from strains and contusions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Gastrointestinal Protection</CardTitle>
                <CardDescription>
                  Research shows potential for supporting ulcer healing, reducing inflammation, and protecting the GI tract from NSAID damage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Joint Health</CardTitle>
                <CardDescription>
                  Supports cartilage repair and reduces inflammation in osteoarthritis and joint injuries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Wound Healing</CardTitle>
                <CardDescription>
                  Enhances angiogenesis and tissue regeneration for surgical wounds and chronic ulcers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Neuroprotection</CardTitle>
                <CardDescription>
                  Emerging evidence for neural tissue protection and recovery from traumatic brain injury
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Dosing & Administration */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
            <p className="text-amber-900 dark:text-amber-200 font-semibold mb-2">⚠️ Healthcare Provider Information Only</p>
            <p className="text-amber-800 dark:text-amber-300 text-sm">The following dosing information is for licensed healthcare providers only and is based on research protocols. BPC-157 is not FDA approved. All use should be under appropriate medical supervision with informed patient consent.</p>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Research-Based Dosing Protocols</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Protocol</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Dose:</strong> 250-500 mcg per injection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Frequency:</strong> Once or twice daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Route:</strong> Subcutaneous or intramuscular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> 4-8 weeks typical course</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Acute Injury:</strong> Higher doses (500-1000 mcg) initially</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Chronic Conditions:</strong> Lower maintenance doses long-term</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Combination:</strong> Often paired with TB-500 for synergy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Oral Option:</strong> Emerging evidence for oral administration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Safety Profile</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                BPC-157 has demonstrated an excellent safety profile in both animal and human studies, with minimal reported side effects. The peptide is well-tolerated across a wide dose range and has shown no significant toxicity in preclinical research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Common Effects:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Minimal to no side effects reported
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Well-tolerated at therapeutic doses
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      No known drug interactions
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Considerations:</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                      Use sterile technique for injections
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                      Monitor for injection site reactions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                      Pregnancy/breastfeeding: insufficient data
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-4xl font-bold mb-4">Source Medical-Grade BPC-157</h3>
          <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
            DrsPeptides.com provides USA-manufactured BPC-157 with 99%+ purity, third-party COAs, and comprehensive provider support for your clinical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Order BPC-157
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/blog/bpc157-tb500">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                Read Clinical Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About This Resource</h4>
              <p className="text-slate-400">
                An educational hub providing evidence-based information on peptide therapy for healthcare practitioners.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="hover:text-teal-400 transition-colors">Resources</Link></li>
                <li><a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">DrsPeptides.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
              <p className="text-slate-400 text-sm">
                This content is for educational purposes only and is not medical advice. Consult with qualified healthcare professionals before implementing peptide therapy.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Peptide Therapy Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
