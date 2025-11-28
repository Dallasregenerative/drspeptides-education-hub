import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Pill, Shield, Heart, Zap, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideBPC157Capsules() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">BPC-157 Capsules</h1>
              <p className="text-lg text-slate-600">Oral BPC-157 for Convenient Gut & Systemic Healing</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Recovery</Badge>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6"><Pill className="h-12 w-12 text-blue-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Oral Convenience</h3><p className="text-slate-600">No injections required - easy capsule administration</p></Card>
            <Card className="p-6"><Shield className="h-12 w-12 text-teal-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Gut Healing</h3><p className="text-slate-600">Direct GI tract contact for digestive system repair</p></Card>
            <Card className="p-6"><Heart className="h-12 w-12 text-rose-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Systemic Effects</h3><p className="text-slate-600">Absorbed for body-wide healing benefits</p></Card>
            <Card className="p-6"><Zap className="h-12 w-12 text-purple-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Daily Support</h3><p className="text-slate-600">Easy to integrate into daily wellness routine</p></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">BPC-157 Capsules provide an oral delivery method for the renowned healing peptide BPC-157 (Body Protection Compound-157). This formulation offers a convenient alternative to injectable BPC-157, making it accessible for individuals seeking the peptide's therapeutic benefits without injections.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">The oral capsule form is particularly advantageous for gastrointestinal applications, as the peptide comes into direct contact with the digestive tract lining. This allows for targeted healing of gut tissues while also providing systemic absorption for broader healing effects throughout the body.</p>
            <p className="text-lg text-slate-700 leading-relaxed">While injectable BPC-157 has more established research, oral formulations are gaining recognition for their effectiveness, especially in addressing digestive issues, inflammatory bowel conditions, and general gut health. The 500mcg dosage provides therapeutic levels suitable for daily maintenance and healing protocols.</p>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Standard Dosing</h3><p className="text-slate-700 mb-2"><strong>Dose:</strong> 500 mcg per capsule</p><p className="text-slate-700 mb-2"><strong>Frequency:</strong> 1-2 capsules daily (500-1000 mcg total)</p><p className="text-slate-700"><strong>Timing:</strong> Take on empty stomach for optimal absorption</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Administration Guidelines</h3><p className="text-slate-700 mb-2"><strong>Best Practice:</strong> Take 30 minutes before meals or 2 hours after</p><p className="text-slate-700 mb-2"><strong>Duration:</strong> Minimum 4-6 weeks for healing protocols</p><p className="text-slate-700"><strong>Maintenance:</strong> Can be used long-term for ongoing gut health support</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-amber-900"><strong>Important:</strong> Oral bioavailability may be lower than injectable forms. Some users take higher oral doses to achieve similar systemic effects.</p></div></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Clinical Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6"><h3 className="text-xl font-semibold mb-4 text-slate-900">Gastrointestinal Health</h3><ul className="space-y-3 text-slate-700"><li className="flex items-start"><span className="mr-2">•</span><span>Inflammatory bowel disease support (IBD, Crohn's, UC)</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Leaky gut syndrome repair</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Gastric ulcer healing</span></li><li className="flex items-start"><span className="mr-2">•</span><span>General digestive inflammation</span></li></ul></Card>
            <Card className="p-6"><h3 className="text-xl font-semibold mb-4 text-slate-900">Systemic Benefits</h3><ul className="space-y-3 text-slate-700"><li className="flex items-start"><span className="mr-2">•</span><span>Joint and tendon healing</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Muscle recovery support</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Anti-inflammatory effects</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Overall tissue repair enhancement</span></li></ul></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-blue-600">
            <div className="space-y-4">
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Safety Profile</h3><p className="text-slate-700 leading-relaxed">BPC-157 has demonstrated excellent safety in research studies with minimal side effects. The oral capsule form is generally well-tolerated with no injection site reactions.</p></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Potential Side Effects</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Mild digestive changes (rare)</li><li>Temporary fatigue during initial use (uncommon)</li><li>No significant adverse events reported in studies</li></ul></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-blue-900"><strong>Note:</strong> BPC-157 is a research peptide. While oral forms are convenient, injectable forms have more extensive research documentation. Consult healthcare providers for guidance.</p></div></div>
            </div>
          </Card>
        </section>
        <section className="mb-12"><Card className="p-6 bg-slate-50 border-slate-200"><p className="text-sm text-slate-600 leading-relaxed"><strong>Educational Purpose Only:</strong> This information is provided for educational purposes. BPC-157 is a research peptide. Consult qualified healthcare providers before use.</p></Card></section>
      </main>
    </div>
  );
}
