import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlendKLOWCapsules() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">Enhanced Oral Beauty Capsules</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">KLOW Blend Capsules</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Enhanced oral capsule formulation adding KPV (500mcg) to the GLOW Blend for superior anti-inflammatory and skin brightening effects. GHK-Cu (2mg) + BPC-157 (500mcg) + TB-500 (500mcg) + KPV (500mcg) + Hyaluronic Acid (100mg).
          </p>
          <Card><CardHeader><CardTitle>Blend Composition</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Formula per Capsule</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-white p-3 rounded-lg"><p className="text-xs text-muted-foreground">Component 1</p><p className="text-xl font-bold text-pink-600">2mg</p><p className="text-sm font-semibold">GHK-Cu</p></div>
                  <div className="bg-white p-3 rounded-lg"><p className="text-xs text-muted-foreground">Component 2</p><p className="text-xl font-bold text-purple-600">500mcg</p><p className="text-sm font-semibold">BPC-157</p></div>
                  <div className="bg-white p-3 rounded-lg"><p className="text-xs text-muted-foreground">Component 3</p><p className="text-xl font-bold text-rose-600">500mcg</p><p className="text-sm font-semibold">TB-500</p></div>
                  <div className="bg-white p-3 rounded-lg"><p className="text-xs text-muted-foreground">Component 4</p><p className="text-xl font-bold text-indigo-600">500mcg</p><p className="text-sm font-semibold">KPV</p></div>
                  <div className="bg-white p-3 rounded-lg"><p className="text-xs text-muted-foreground">Component 5</p><p className="text-xl font-bold text-blue-600">100mg</p><p className="text-sm font-semibold">Hyaluronic Acid</p></div>
                </div>
              </div>
              <h3>Why Add KPV to GLOW Blend?</h3>
              <p><strong>KPV (Lys-Pro-Val)</strong> is an anti-inflammatory tripeptide that reduces skin inflammation, redness, and hyperpigmentation. Adding KPV to the GLOW formula creates KLOW Blend, which provides enhanced benefits for inflammatory skin conditions, gut-skin axis support, and melanin regulation.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>All GLOW Benefits:</strong> Skin hydration, collagen support, joint health, systemic repair</li>
                <li><strong>Enhanced Anti-Inflammatory:</strong> KPV reduces skin inflammation and redness</li>
                <li><strong>Skin Brightening:</strong> Superior melanin regulation for even tone</li>
                <li><strong>Acne & Rosacea:</strong> Reduces inflammatory skin conditions</li>
                <li><strong>Gut-Skin Axis:</strong> KPV and BPC-157 support gut health which reflects in skin quality</li>
                <li><strong>IBD Support:</strong> KPV shows promise for inflammatory bowel conditions</li>
              </ul>
              <h3>KLOW vs GLOW: Which to Choose?</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <p className="text-sm mb-3"><strong>Choose GLOW Blend if:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• General beauty and anti-aging support</li>
                  <li>• Skin hydration and joint health focus</li>
                  <li>• No specific inflammatory or pigmentation concerns</li>
                </ul>
                <p className="text-sm mb-3 mt-4"><strong>Choose KLOW Blend if:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Inflammatory skin conditions (acne, rosacea, eczema)</li>
                  <li>• Hyperpigmentation or uneven skin tone</li>
                  <li>• Gut health issues affecting skin quality</li>
                  <li>• Want maximum anti-inflammatory benefits</li>
                </ul>
              </div>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 1-2 capsules daily</li>
                  <li>• <strong>Timing:</strong> With or without food (consistent timing recommended)</li>
                  <li>• <strong>Duration:</strong> Continuous supplementation, or 8-12 week cycles</li>
                  <li>• <strong>Best For:</strong> Inflammatory skin conditions, hyperpigmentation, gut-skin axis support</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> - KLOW Blend Capsules (GHK-Cu 2mg / BPC-157 500mcg / TB-500 500mcg / KPV 500mcg / HA 100mg)</p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
