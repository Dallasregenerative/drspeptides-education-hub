import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlendGLOWCapsules() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">Oral Beauty Capsules</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">GLOW Blend Capsules</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Convenient oral capsule formulation combining GHK-Cu (2mg), BPC-157 (500mcg), TB-500 (500mcg), and Hyaluronic Acid (100mg) for systemic beauty and regeneration support. No injections required.
          </p>
          <Card><CardHeader><CardTitle>Blend Composition</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Formula per Capsule</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 1</p><p className="text-2xl font-bold text-pink-600">2mg</p><p className="font-semibold">GHK-Cu</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 2</p><p className="text-2xl font-bold text-purple-600">500mcg</p><p className="font-semibold">BPC-157</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 3</p><p className="text-2xl font-bold text-rose-600">500mcg</p><p className="font-semibold">TB-500</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 4</p><p className="text-2xl font-bold text-blue-600">100mg</p><p className="font-semibold">Hyaluronic Acid</p></div>
                </div>
              </div>
              <h3>Oral vs Injectable: Key Differences</h3>
              <p>GLOW Blend capsules provide <strong>convenient oral administration</strong> without needles. While oral bioavailability is lower than injectable forms, the addition of <strong>Hyaluronic Acid (100mg)</strong> provides unique benefits for skin hydration and joint health. Ideal for those who prefer oral supplementation or want to complement injectable protocols.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>Skin Hydration:</strong> Hyaluronic acid retains moisture for plump, hydrated skin</li>
                <li><strong>Collagen Support:</strong> GHK-Cu stimulates collagen synthesis systemically</li>
                <li><strong>Gut-Skin Axis:</strong> BPC-157 supports gut health which reflects in skin quality</li>
                <li><strong>Joint Health:</strong> HA and TB-500 support joint lubrication and repair</li>
                <li><strong>Systemic Repair:</strong> All peptides provide whole-body regenerative support</li>
                <li><strong>Convenience:</strong> No injections, easy daily supplementation</li>
              </ul>
              <h3>Why Add Hyaluronic Acid?</h3>
              <p>Hyaluronic Acid (HA) is a glycosaminoglycan that holds up to 1,000x its weight in water. Oral HA supplementation increases skin moisture, reduces wrinkles, and supports joint lubrication. The 100mg dose provides clinically effective HA levels for skin and joint benefits.</p>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 1-2 capsules daily</li>
                  <li>• <strong>Timing:</strong> With or without food (consistent timing recommended)</li>
                  <li>• <strong>Duration:</strong> Continuous supplementation, or 8-12 week cycles</li>
                  <li>• <strong>Best For:</strong> Maintenance, needle-averse individuals, or complementing injectable protocols</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-sm"><strong>GLOW vs KLOW:</strong> GLOW Blend contains GHK-Cu, BPC-157, TB-500, and HA. KLOW Blend adds KPV (500mcg) for enhanced anti-inflammatory and skin brightening effects. Choose GLOW for general beauty support, KLOW for inflammation/pigmentation concerns.</p>
              </div>
              <p className="text-sm text-muted-foreground"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> - GLOW Blend Capsules (GHK-Cu 2mg / BPC-157 500mcg / TB-500 500mcg / HA 100mg)</p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
