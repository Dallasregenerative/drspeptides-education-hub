import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlendGlowPlus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">Enhanced Beauty Blend</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Glow Plus</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Enhanced Glow formula adding KPV (10mg) to the Core blend for superior anti-inflammatory and skin brightening effects. GHK-Cu (50mg) + TB-500 (10mg) + BPC-157 (10mg) + KPV (10mg).
          </p>
          <Card><CardHeader><CardTitle>Blend Composition</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Formula per Vial</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 1</p><p className="text-2xl font-bold text-pink-600">50mg</p><p className="font-semibold">GHK-Cu</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 2</p><p className="text-2xl font-bold text-rose-600">10mg</p><p className="font-semibold">TB-500</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 3</p><p className="text-2xl font-bold text-purple-600">10mg</p><p className="font-semibold">BPC-157</p></div>
                  <div className="bg-white p-4 rounded-lg"><p className="text-sm text-muted-foreground">Component 4</p><p className="text-2xl font-bold text-indigo-600">10mg</p><p className="font-semibold">KPV</p></div>
                </div>
              </div>
              <h3>Why Add KPV?</h3>
              <p><strong>KPV (Lys-Pro-Val)</strong> is an anti-inflammatory tripeptide that reduces skin inflammation, redness, and hyperpigmentation. Adding KPV to the Glow Core formula enhances skin brightening, reduces inflammatory skin conditions (rosacea, acne), and provides superior melanin regulation for even skin tone.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>All Glow Core Benefits:</strong> Skin rejuvenation, collagen synthesis, wound healing, anti-aging</li>
                <li><strong>Enhanced Anti-Inflammatory:</strong> KPV reduces skin inflammation and redness</li>
                <li><strong>Skin Brightening:</strong> Superior melanin regulation for even tone</li>
                <li><strong>Acne & Rosacea:</strong> Reduces inflammatory skin conditions</li>
                <li><strong>Gut-Skin Axis:</strong> KPV supports gut health which reflects in skin quality</li>
              </ul>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 0.5-1.0mL per injection (subcutaneous)</li>
                  <li>• <strong>Frequency:</strong> 2-3x weekly for maintenance, daily for intensive protocols</li>
                  <li>• <strong>Duration:</strong> 8-12 week cycles</li>
                  <li>• <strong>Best For:</strong> Those with inflammatory skin conditions, hyperpigmentation, or gut issues</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> - Glow Plus (GHK-Cu+TB-500+BPC-157+KPV) 50/10/10/10mg</p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
