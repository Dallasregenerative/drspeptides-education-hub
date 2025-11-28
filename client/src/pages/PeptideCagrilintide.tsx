import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, TrendingDown, Activity, Zap, Heart, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideCagrilintide() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Cagrilintide</h1>
              <p className="text-lg text-slate-600">Long-Acting Amylin Analog for Weight Management</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Weight Management</Badge>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6"><TrendingDown className="h-12 w-12 text-blue-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Weight Loss</h3><p className="text-slate-600">Significant body weight reduction through appetite control</p></Card>
            <Card className="p-6"><Activity className="h-12 w-12 text-purple-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Appetite Suppression</h3><p className="text-slate-600">Reduces hunger and promotes satiety</p></Card>
            <Card className="p-6"><Zap className="h-12 w-12 text-amber-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Glycemic Control</h3><p className="text-slate-600">Slows gastric emptying and improves glucose regulation</p></Card>
            <Card className="p-6"><Heart className="h-12 w-12 text-rose-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Metabolic Health</h3><p className="text-slate-600">Improves overall metabolic parameters</p></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Cagrilintide is a novel long-acting amylin analog developed for the treatment of obesity and type 2 diabetes. As a synthetic version of the naturally occurring hormone amylin, cagrilintide mimics and enhances the physiological effects of amylin, which is co-secreted with insulin from pancreatic beta cells.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">The peptide works through multiple mechanisms to promote weight loss, including slowing gastric emptying, reducing appetite, and promoting satiety. Clinical trials have shown impressive weight loss results, particularly when combined with GLP-1 receptor agonists like semaglutide, suggesting synergistic effects for metabolic health.</p>
            <p className="text-lg text-slate-700 leading-relaxed">Cagrilintide represents the next generation of weight management therapies, offering a complementary mechanism to GLP-1 agonists. Its long duration of action allows for convenient once-weekly dosing, and ongoing research continues to explore its potential in combination therapies for obesity and metabolic disease.</p>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mechanism of Action</h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Amylin Receptor Activation</h3><p className="text-slate-700 leading-relaxed">Cagrilintide activates amylin receptors in the area postrema of the brainstem, reducing appetite and food intake through central nervous system pathways. This mechanism is distinct from but complementary to GLP-1 receptor activation.</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Gastric Emptying Delay</h3><p className="text-slate-700 leading-relaxed">By slowing the rate at which food leaves the stomach, cagrilintide promotes prolonged satiety and reduces postprandial glucose excursions. This effect contributes to both weight loss and improved glycemic control.</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Synergy with GLP-1 Agonists</h3><p className="text-slate-700 leading-relaxed">When combined with GLP-1 receptor agonists, cagrilintide demonstrates enhanced weight loss effects beyond either agent alone, suggesting complementary mechanisms that target different aspects of appetite regulation and metabolism.</p></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Clinical Trial Dosing</h3><p className="text-slate-700 mb-2"><strong>Starting Dose:</strong> 0.6 mg subcutaneously once weekly</p><p className="text-slate-700 mb-2"><strong>Titration:</strong> Increase gradually to 2.4-4.5 mg weekly</p><p className="text-slate-700"><strong>Maintenance:</strong> 2.4-4.5 mg once weekly</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Administration</h3><p className="text-slate-700 mb-2"><strong>Route:</strong> Subcutaneous injection</p><p className="text-slate-700 mb-2"><strong>Timing:</strong> Can be administered any time of day, with or without food</p><p className="text-slate-700"><strong>Note:</strong> Gradual dose escalation reduces gastrointestinal side effects</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-amber-900"><strong>Important:</strong> Cagrilintide is still in clinical development. Dosing protocols are based on ongoing trials and may change. Use only under medical supervision in approved research settings.</p></div></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-blue-600">
            <div className="space-y-4">
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Common Side Effects</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Nausea (most common, dose-dependent)</li><li>Vomiting</li><li>Diarrhea</li><li>Injection site reactions</li><li>Decreased appetite</li></ul></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Clinical Development Status</h3><p className="text-slate-700 leading-relaxed">Cagrilintide is currently in Phase 3 clinical trials and is not yet approved by regulatory agencies. Most safety data comes from controlled clinical trial settings.</p></div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-red-900"><strong>Critical Note:</strong> Cagrilintide is an investigational drug not approved for clinical use. Information provided is based on ongoing research and may change as studies progress.</p></div></div>
            </div>
          </Card>
        </section>
        <section className="mb-12"><Card className="p-6 bg-slate-50 border-slate-200"><p className="text-sm text-slate-600 leading-relaxed"><strong>Educational Purpose Only:</strong> This information is provided for educational purposes. Cagrilintide is an investigational peptide in clinical development. Not available for general use.</p></Card></section>
      </main>
    </div>
  );
}
