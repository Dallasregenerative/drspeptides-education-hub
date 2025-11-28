import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Wind, Brain, Zap, Activity, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideNADNasalSpray() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">NAD+ Nasal Spray</h1>
              <p className="text-lg text-slate-600">Rapid-Absorption NAD+ for Energy & Cognitive Enhancement</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Longevity</Badge>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6"><Wind className="h-12 w-12 text-blue-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Rapid Absorption</h3><p className="text-slate-600">Intranasal delivery bypasses digestive system for fast uptake</p></Card>
            <Card className="p-6"><Brain className="h-12 w-12 text-purple-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Brain Delivery</h3><p className="text-slate-600">Direct pathway to central nervous system</p></Card>
            <Card className="p-6"><Zap className="h-12 w-12 text-amber-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Energy Boost</h3><p className="text-slate-600">Rapid increase in cellular energy production</p></Card>
            <Card className="p-6"><Activity className="h-12 w-12 text-teal-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Convenient</h3><p className="text-slate-600">No injections or IV infusions required</p></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">NAD+ Nasal Spray represents an innovative delivery method for nicotinamide adenine dinucleotide (NAD+), a critical coenzyme involved in cellular energy production, DNA repair, and longevity pathways. The intranasal route offers unique advantages over oral supplementation and provides a more accessible alternative to IV NAD+ therapy.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">The nasal mucosa provides a direct pathway to the bloodstream and brain, bypassing first-pass metabolism in the liver that degrades oral NAD+. This results in higher bioavailability and more rapid onset of effects compared to oral NAD+ precursors. The 300mg/15mL formulation provides therapeutic doses suitable for daily use.</p>
            <p className="text-lg text-slate-700 leading-relaxed">Users typically report enhanced mental clarity, improved energy levels, and better cognitive function within minutes of administration. The nasal spray format makes NAD+ supplementation practical for daily use, supporting mitochondrial function, cellular repair, and overall vitality without the time and cost associated with IV infusions.</p>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Standard Dosing</h3><p className="text-slate-700 mb-2"><strong>Concentration:</strong> 300mg NAD+ per 15mL bottle</p><p className="text-slate-700 mb-2"><strong>Dose:</strong> 1-2 sprays per nostril (approximately 10-20mg per administration)</p><p className="text-slate-700"><strong>Frequency:</strong> 1-3 times daily as needed</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Administration Guidelines</h3><p className="text-slate-700 mb-2"><strong>Timing:</strong> Morning for energy, afternoon for mental clarity</p><p className="text-slate-700 mb-2"><strong>Technique:</strong> Spray into nostril while inhaling gently</p><p className="text-slate-700"><strong>Onset:</strong> Effects typically felt within 5-15 minutes</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-amber-900"><strong>Important:</strong> Start with lower dose to assess tolerance. Some users experience mild nasal irritation initially. Avoid use close to bedtime as it may interfere with sleep.</p></div></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Clinical Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6"><h3 className="text-xl font-semibold mb-4 text-slate-900">Cognitive Enhancement</h3><ul className="space-y-3 text-slate-700"><li className="flex items-start"><span className="mr-2">•</span><span>Mental clarity and focus</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Cognitive performance under stress</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Memory and learning support</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Neuroprotection</span></li></ul></Card>
            <Card className="p-6"><h3 className="text-xl font-semibold mb-4 text-slate-900">Energy & Recovery</h3><ul className="space-y-3 text-slate-700"><li className="flex items-start"><span className="mr-2">•</span><span>Cellular energy production</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Physical performance support</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Recovery from fatigue</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Anti-aging cellular support</span></li></ul></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-blue-600">
            <div className="space-y-4">
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Common Side Effects</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Mild nasal irritation or tingling</li><li>Temporary flushing sensation</li><li>Increased energy (may affect sleep if used late)</li><li>Rare: mild headache</li></ul></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Advantages Over Other Forms</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Higher bioavailability than oral NAD+</li><li>More convenient than IV infusions</li><li>Rapid onset of effects</li><li>Direct brain delivery pathway</li><li>Cost-effective for daily use</li></ul></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-blue-900"><strong>Note:</strong> NAD+ nasal spray is a relatively new delivery method. While promising, long-term studies are limited. Store in refrigerator for optimal stability.</p></div></div>
            </div>
          </Card>
        </section>
        <section className="mb-12"><Card className="p-6 bg-slate-50 border-slate-200"><p className="text-sm text-slate-600 leading-relaxed"><strong>Educational Purpose Only:</strong> This information is provided for educational purposes. Consult qualified healthcare providers before starting NAD+ supplementation.</p></Card></section>
      </main>
    </div>
  );
}
