import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles, ArrowRight, CheckCircle2, XCircle, Zap, Users, BookOpen, Clock } from "lucide-react";

export default function AIAgentLanding() {
  usePageTitle(
    "Dr. Peptide AI - World's First AI Peptide Agent | Peptide Education Hub",
    {
      description: "Generate personalized peptide protocols in minutes using 16 specialized AI agents trained on 2,800+ clinical studies. Stop using generic stacks and start delivering truly individualized care."
    }
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">World's First AI Peptide Agent</span>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Brain className="h-24 w-24 animate-pulse" />
                <Sparkles className="h-12 w-12 absolute -top-2 -right-2 text-yellow-300 animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Dr. Peptide AI
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Generate personalized peptide protocols in minutes using 16 specialized AI agents trained on 2,800+ clinical studies. Stop using generic "stacks" and start delivering truly individualized care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://peptideprotocols.ai/?v=3.1.1762548959057" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold text-lg px-8 py-6"
                >
                  Try Dr. Peptide AI Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold">2,800+</div>
                <div className="text-purple-200 text-sm">Clinical Studies</div>
              </div>
              <div>
                <div className="text-4xl font-bold">16</div>
                <div className="text-purple-200 text-sm">AI Agents</div>
              </div>
              <div>
                <div className="text-4xl font-bold">5 min</div>
                <div className="text-purple-200 text-sm">Protocol Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold">1,000+</div>
                <div className="text-purple-200 text-sm">Practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Generic Peptide Stacks Fail Your Patients</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-red-200 dark:border-red-900">
              <CardHeader>
                <XCircle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-red-600">Generic "Stacks"</CardTitle>
                <CardDescription>One-size-fits-all approach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Ignores individual patient factors</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>No consideration for contraindications</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Arbitrary dosing without evidence</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Suboptimal results and compliance</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-600">Dr. Peptide AI</CardTitle>
                <CardDescription>Personalized precision medicine</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Analyzes 50+ patient-specific factors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Screens for contraindications automatically</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Evidence-based dosing from 2,800+ studies</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Optimized outcomes and patient satisfaction</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Dr. Peptide AI Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>1. Input Patient Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Enter patient goals, health history, medications, lab results, and preferences. Our AI analyzes 50+ factors.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>2. AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    16 specialized AI agents analyze 2,800+ studies to identify optimal peptides, dosing, and timing for your patient.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>3. Get Protocol</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Receive a comprehensive, evidence-based protocol with dosing, administration, monitoring, and patient education materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Join 1,000+ healthcare providers using Dr. Peptide AI to deliver personalized peptide therapy
          </p>
          
          <a 
            href="https://peptideprotocols.ai/?v=3.1.1762548959057" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 font-semibold text-lg px-8 py-6"
            >
              Start Using Dr. Peptide AI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
            Free to try • No credit card required • 5-minute setup
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Peptide Education Hub. Educational resource supporting DrsPeptides.com
          </p>
        </div>
      </footer>
    </div>
  );
}
