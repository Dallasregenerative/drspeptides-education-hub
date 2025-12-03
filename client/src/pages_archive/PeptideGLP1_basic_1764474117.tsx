import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ExternalLink, Heart, Microscope, Scale, TrendingDown } from "lucide-react";
import { Link } from "wouter";

export default function PeptideGLP1() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
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
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">GLP-1 Therapy: Semaglutide & Tirzepatide</h2>
            <p className="text-2xl text-purple-50 mb-8">
              FDA-approved peptide therapy for weight management and metabolic health
            </p>
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-3 mt-4">
              <p className="text-sm text-white font-medium">✅ Semaglutide and Tirzepatide are FDA-approved for Type 2 Diabetes Mellitus and chronic weight management in adults with obesity or overweight with weight-related conditions.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">15-20%</div>
                <div className="text-sm text-purple-100">Weight Loss</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">FDA</div>
                <div className="text-sm text-purple-100">Approved</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">$81.5B</div>
                <div className="text-sm text-purple-100">Market by 2034</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are GLP-1 Agonists */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">What are GLP-1 Receptor Agonists?</h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              GLP-1 (Glucagon-Like Peptide-1) receptor agonists are a class of FDA-approved peptide medications that mimic the action of the naturally occurring hormone GLP-1. These medications have demonstrated significant efficacy in treating obesity and type 2 diabetes by targeting multiple pathways involved in appetite regulation, glucose metabolism, and energy balance.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              Semaglutide (brand names Ozempic, Wegovy) and Tirzepatide (brand name Mounjaro, Zepbound) represent the current gold standard in peptide-based weight management. While Semaglutide is a pure GLP-1 agonist, Tirzepatide is a dual GIP/GLP-1 agonist, offering enhanced efficacy through activation of both incretin pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison: Semaglutide vs Tirzepatide */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Semaglutide vs Tirzepatide</h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Semaglutide</CardTitle>
                  <CardDescription>Pure GLP-1 Receptor Agonist</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Weight Loss:</strong> 12-15% average body weight reduction in clinical trials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dosing:</strong> Weekly subcutaneous injection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>FDA Approved:</strong> 2021 for chronic weight management (Wegovy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Mechanism:</strong> GLP-1 receptor activation only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Benefits:</strong> Cardiovascular risk reduction, proven track record</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Tirzepatide</CardTitle>
                  <CardDescription>Dual GIP/GLP-1 Receptor Agonist</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Weight Loss:</strong> 15-22% average body weight reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Dosing:</strong> Weekly subcutaneous injection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span><strong>FDA Approved:</strong> 2023 for chronic weight management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Mechanism:</strong> Dual GIP and GLP-1 receptor activation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Benefits:</strong> Superior weight loss, improved metabolic markers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Clinical Benefits Beyond Weight Loss</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Cardiovascular Health</CardTitle>
              <CardDescription>
                Reduces major adverse cardiovascular events by 20% in high-risk patients
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Blood Sugar Control</CardTitle>
              <CardDescription>
                Significant HbA1c reduction and improved glycemic control in diabetic patients
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Metabolic Improvement</CardTitle>
              <CardDescription>
                Enhanced insulin sensitivity, reduced inflammation, improved lipid profiles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Appetite Regulation</CardTitle>
              <CardDescription>
                Reduced hunger, increased satiety, and improved eating behavior patterns
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Dosing Protocols */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Dosing Protocols</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Semaglutide Titration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 1-4:</span>
                    <span className="text-purple-600">0.25 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 5-8:</span>
                    <span className="text-purple-600">0.5 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 9-12:</span>
                    <span className="text-purple-600">1.0 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 13-16:</span>
                    <span className="text-purple-600">1.7 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 17+:</span>
                    <span className="text-purple-600">2.4 mg weekly (maintenance)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tirzepatide Titration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 1-4:</span>
                    <span className="text-pink-600">2.5 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 5-8:</span>
                    <span className="text-pink-600">5 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 9-12:</span>
                    <span className="text-pink-600">7.5 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 13-16:</span>
                    <span className="text-pink-600">10 mg weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                    <span className="font-semibold">Week 17+:</span>
                    <span className="text-pink-600">12.5-15 mg weekly (maintenance)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-4xl font-bold mb-4">Source Medical-Grade GLP-1 Peptides</h3>
          <p className="text-xl mb-8 text-purple-50 max-w-2xl mx-auto">
            DrsPeptides.com provides pharmaceutical-grade Semaglutide and Tirzepatide with comprehensive provider support, dosing protocols, and patient education materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Order GLP-1 Peptides
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/blog/glp1-therapy">
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
            <p>&copy; 2025 Peptide Education Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
