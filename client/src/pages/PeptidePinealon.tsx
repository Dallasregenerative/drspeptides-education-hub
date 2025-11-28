import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Brain, Moon, Shield, Sparkles, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptidePinealon() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Pinealon</h1>
              <p className="text-lg text-slate-600">Pineal Gland Peptide Bioregulator for Brain Health</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Longevity</Badge>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6"><Brain className="h-12 w-12 text-purple-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Brain Function</h3><p className="text-slate-600">Supports cognitive function and neuroprotection</p></Card>
            <Card className="p-6"><Moon className="h-12 w-12 text-indigo-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Circadian Rhythm</h3><p className="text-slate-600">Regulates sleep-wake cycles and melatonin production</p></Card>
            <Card className="p-6"><Shield className="h-12 w-12 text-teal-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Pineal Health</h3><p className="text-slate-600">Supports pineal gland function and longevity</p></Card>
            <Card className="p-6"><Sparkles className="h-12 w-12 text-amber-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Anti-Aging</h3><p className="text-slate-600">May slow age-related decline in brain function</p></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Pinealon is a synthetic peptide bioregulator consisting of three amino acids (Glu-Asp-Arg) that specifically targets the pineal gland. Developed as part of the Khavinson peptide bioregulator research in Russia, Pinealon is designed to support and restore optimal pineal gland function.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">The pineal gland, often called the "third eye," plays a crucial role in regulating circadian rhythms through melatonin production, influences mood and cognitive function, and has been implicated in aging processes. Pinealon works by interacting with DNA in pineal cells to promote gene expression associated with healthy gland function.</p>
            <p className="text-lg text-slate-700 leading-relaxed">Research suggests that Pinealon may help maintain healthy sleep patterns, support cognitive function, provide neuroprotection, and potentially slow age-related decline in pineal gland activity. It represents a targeted approach to supporting one of the brain's most important regulatory centers.</p>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Standard Protocol</h3><p className="text-slate-700 mb-2"><strong>Dose:</strong> 10-20 mg per administration</p><p className="text-slate-700 mb-2"><strong>Route:</strong> Subcutaneous or intramuscular injection</p><p className="text-slate-700"><strong>Frequency:</strong> Daily or every other day for 10-20 days</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Cycle Approach</h3><p className="text-slate-700 mb-2"><strong>Treatment Cycle:</strong> 10-20 days of daily administration</p><p className="text-slate-700 mb-2"><strong>Rest Period:</strong> 2-6 months between cycles</p><p className="text-slate-700"><strong>Maintenance:</strong> Repeat cycles 1-2 times per year</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-amber-900"><strong>Important:</strong> Pinealon follows the bioregulator protocol developed by Khavinson. Effects are typically subtle and cumulative over time.</p></div></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-purple-600">
            <div className="space-y-4">
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Safety Profile</h3><p className="text-slate-700 leading-relaxed">Pinealon has demonstrated a favorable safety profile in research studies with minimal reported side effects. Most users tolerate it well with no significant adverse events.</p></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Potential Side Effects</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Mild injection site reactions</li><li>Temporary sleep pattern changes (adjustment period)</li><li>Rare: mild headache</li></ul></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-blue-900"><strong>Note:</strong> Pinealon is a research peptide with most studies conducted in Russia. Long-term safety data is limited. Use under qualified medical supervision.</p></div></div>
            </div>
          </Card>
        </section>
        <section className="mb-12"><Card className="p-6 bg-slate-50 border-slate-200"><p className="text-sm text-slate-600 leading-relaxed"><strong>Educational Purpose Only:</strong> This information is provided for educational purposes. Pinealon is a research peptide. Consult qualified healthcare providers before use.</p></Card></section>
      </main>
    </div>
  );
}
