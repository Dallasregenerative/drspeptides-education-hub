import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Sparkles, Shield, Heart, Droplets, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideGHKCuSerum() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">GHK-Cu Serum</h1>
              <p className="text-lg text-slate-600">Topical Copper Peptide for Skin Rejuvenation & Anti-Aging</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Recovery</Badge>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6"><Sparkles className="h-12 w-12 text-amber-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Skin Rejuvenation</h3><p className="text-slate-600">Stimulates collagen and elastin production</p></Card>
            <Card className="p-6"><Shield className="h-12 w-12 text-teal-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Anti-Aging</h3><p className="text-slate-600">Reduces fine lines, wrinkles, and age spots</p></Card>
            <Card className="p-6"><Heart className="h-12 w-12 text-rose-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Wound Healing</h3><p className="text-slate-600">Accelerates skin repair and regeneration</p></Card>
            <Card className="p-6"><Droplets className="h-12 w-12 text-blue-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Topical Application</h3><p className="text-slate-600">Direct skin delivery for maximum efficacy</p></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">GHK-Cu Serum is a topical formulation of the copper peptide GHK-Cu (Glycyl-L-Histidyl-L-Lysine-Copper), one of the most researched and effective anti-aging peptides in skincare. The 30mL serum provides a convenient, non-invasive way to deliver this powerful regenerative peptide directly to the skin.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">GHK-Cu naturally occurs in human plasma, saliva, and urine, with levels declining with age. This peptide-copper complex has remarkable abilities to stimulate collagen synthesis, promote wound healing, reduce inflammation, and activate skin remodeling processes. Topical application allows for high local concentrations at the skin level without systemic exposure.</p>
            <p className="text-lg text-slate-700 leading-relaxed">The serum format is ideal for facial application, targeting fine lines, wrinkles, sun damage, and overall skin texture. Clinical studies have demonstrated improvements in skin firmness, elasticity, and appearance with regular use. GHK-Cu Serum represents a scientifically-validated approach to skin rejuvenation and anti-aging skincare.</p>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Application Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Daily Application</h3><p className="text-slate-700 mb-2"><strong>Frequency:</strong> Apply 1-2 times daily (morning and/or evening)</p><p className="text-slate-700 mb-2"><strong>Amount:</strong> 2-3 drops for face, more for larger areas</p><p className="text-slate-700"><strong>Timing:</strong> Apply to clean, dry skin before moisturizer</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Application Technique</h3><p className="text-slate-700 mb-2"><strong>Step 1:</strong> Cleanse face and pat dry</p><p className="text-slate-700 mb-2"><strong>Step 2:</strong> Apply 2-3 drops to fingertips and gently massage into skin</p><p className="text-slate-700 mb-2"><strong>Step 3:</strong> Allow to absorb for 2-3 minutes</p><p className="text-slate-700"><strong>Step 4:</strong> Follow with moisturizer and sunscreen (AM)</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-amber-900"><strong>Important:</strong> Results are cumulative and typically visible after 4-8 weeks of consistent use. Store in cool, dark place. Use sunscreen during daytime as skin renewal may increase photosensitivity.</p></div></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Skin Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6"><h3 className="text-xl font-semibold mb-4 text-slate-900">Anti-Aging Effects</h3><ul className="space-y-3 text-slate-700"><li className="flex items-start"><span className="mr-2">•</span><span>Reduces fine lines and wrinkles</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Improves skin firmness and elasticity</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Fades age spots and hyperpigmentation</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Enhances overall skin texture</span></li></ul></Card>
            <Card className="p-6"><h3 className="text-xl font-semibold mb-4 text-slate-900">Regenerative Properties</h3><ul className="space-y-3 text-slate-700"><li className="flex items-start"><span className="mr-2">•</span><span>Stimulates collagen and elastin synthesis</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Accelerates wound healing and scar reduction</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Reduces inflammation and redness</span></li><li className="flex items-start"><span className="mr-2">•</span><span>Promotes skin remodeling and renewal</span></li></ul></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-amber-600">
            <div className="space-y-4">
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Safety Profile</h3><p className="text-slate-700 leading-relaxed">GHK-Cu has an excellent safety profile for topical use with decades of research supporting its efficacy and tolerability. It is generally well-tolerated by all skin types.</p></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Potential Side Effects</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Mild tingling upon initial application (normal)</li><li>Temporary redness (rare, resolves quickly)</li><li>Skin purging during first 1-2 weeks (increased cell turnover)</li><li>Allergic reactions (very rare)</li></ul></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Best Practices</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Patch test on small area before full application</li><li>Use sunscreen daily (increased photosensitivity)</li><li>Store away from light and heat</li><li>Can be combined with other skincare actives</li><li>Avoid use on broken or irritated skin</li></ul></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-blue-900"><strong>Note:</strong> GHK-Cu is one of the most researched cosmetic peptides with extensive safety data. Results improve with consistent long-term use.</p></div></div>
            </div>
          </Card>
        </section>
        <section className="mb-12"><Card className="p-6 bg-slate-50 border-slate-200"><p className="text-sm text-slate-600 leading-relaxed"><strong>Educational Purpose Only:</strong> This information is provided for educational purposes. For topical skincare use. Consult dermatologist for specific skin concerns.</p></Card></section>
      </main>
    </div>
  );
}
