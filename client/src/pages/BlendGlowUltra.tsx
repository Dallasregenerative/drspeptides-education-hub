import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlendGlowUltra() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">Maximum Strength Beauty Blend</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">Glow Ultra</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Maximum strength Glow formula with elevated GHK-Cu (70mg) for intensive anti-aging and collagen stimulation. GHK-Cu (70mg) + TB-500 (10mg) + BPC-157 (10mg).
          </p>
          <Card><CardHeader><CardTitle>Blend Composition</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Formula per Vial</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 1</p><p className="text-2xl font-bold text-pink-600">70mg</p><p className="font-semibold">GHK-Cu</p><Badge variant="secondary" className="mt-2">+40% vs Core</Badge></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 2</p><p className="text-2xl font-bold text-rose-600">10mg</p><p className="font-semibold">TB-500</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 3</p><p className="text-2xl font-bold text-purple-600">10mg</p><p className="font-semibold">BPC-157</p></div>
                </div>
              </div>
              <h3>Why Ultra Strength?</h3>
              <p>Glow Ultra increases GHK-Cu from 50mg to <strong>70mg</strong> (+40%) for maximum collagen and elastin stimulation. This higher dose provides more aggressive anti-aging effects, deeper wrinkle reduction, and accelerated skin remodeling. Ideal for mature skin, significant photoaging, or intensive rejuvenation protocols.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>Intensive Anti-Aging:</strong> Maximum collagen and elastin synthesis</li>
                <li><strong>Deep Wrinkle Reduction:</strong> Higher GHK-Cu dose targets established wrinkles</li>
                <li><strong>Skin Tightening:</strong> Enhanced firmness and elasticity</li>
                <li><strong>Photoaging Reversal:</strong> Repairs sun-damaged skin</li>
                <li><strong>Accelerated Healing:</strong> TB-500 and BPC-157 support tissue repair</li>
                <li><strong>Hair Restoration:</strong> Maximum follicle stimulation</li>
              </ul>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 0.5-1.0mL per injection (subcutaneous)</li>
                  <li>• <strong>Frequency:</strong> 2-3x weekly, or daily for intensive 4-6 week protocols</li>
                  <li>• <strong>Duration:</strong> 8-12 week cycles with 4-week breaks</li>
                  <li>• <strong>Best For:</strong> Mature skin (40+), significant photoaging, intensive rejuvenation goals</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
                <p className="text-sm"><strong>Note:</strong> Higher GHK-Cu dose may cause more noticeable skin purging initially as cellular turnover accelerates. This is normal and indicates the peptide is working. Ensure adequate hydration and sun protection.</p>
              </div>
              <p className="text-sm text-muted-foreground"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> - Glow Ultra (GHK-Cu+TB-500+BPC-157) 70/10/10mg</p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
