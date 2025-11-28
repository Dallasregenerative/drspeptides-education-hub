import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlendGlowCore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">Beauty & Regeneration Blend</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Glow Core</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Triple-action beauty and regeneration blend combining GHK-Cu (50mg), TB-500 (10mg), and BPC-157 (10mg) for comprehensive skin rejuvenation, collagen synthesis, and tissue repair. The foundational Glow series formula.
          </p>
          <Card><CardHeader><CardTitle>Blend Composition</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Formula per Vial</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Component 1</p>
                    <p className="text-2xl font-bold text-pink-600">50mg</p>
                    <p className="font-semibold">GHK-Cu</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Component 2</p>
                    <p className="text-2xl font-bold text-rose-600">10mg</p>
                    <p className="font-semibold">TB-500</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Component 3</p>
                    <p className="text-2xl font-bold text-purple-600">10mg</p>
                    <p className="font-semibold">BPC-157</p>
                  </div>
                </div>
              </div>

              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>Skin Rejuvenation:</strong> GHK-Cu stimulates collagen and elastin synthesis for firmer, younger-looking skin</li>
                <li><strong>Wound Healing:</strong> Triple-action tissue repair from all three peptides</li>
                <li><strong>Anti-Aging:</strong> Reduces fine lines, wrinkles, and age-related skin changes</li>
                <li><strong>Hair Growth:</strong> GHK-Cu promotes hair follicle proliferation and thickness</li>
                <li><strong>Scar Reduction:</strong> Improves appearance of scars and stretch marks</li>
                <li><strong>Systemic Repair:</strong> TB-500 and BPC-157 support joint, tendon, and gut health</li>
              </ul>

              <h3>Synergistic Mechanisms</h3>
              <p>
                <strong>GHK-Cu</strong> serves as the primary skin rejuvenation agent, activating tissue remodeling genes and stimulating collagen synthesis. <strong>TB-500</strong> enhances cellular migration and angiogenesis for improved tissue repair. <strong>BPC-157</strong> accelerates healing through growth factor upregulation and anti-inflammatory effects. Together, these peptides provide comprehensive regenerative support for skin, connective tissue, and systemic health.
              </p>

              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 0.5-1.0mL per injection (adjust based on reconstitution volume)</li>
                  <li>• <strong>Frequency:</strong> 2-3x weekly for maintenance, daily for intensive protocols</li>
                  <li>• <strong>Route:</strong> Subcutaneous injection (abdomen or thigh)</li>
                  <li>• <strong>Duration:</strong> 8-12 week cycles with 4-week breaks</li>
                  <li>• <strong>Best Results:</strong> Combine with quality skincare, sun protection, and collagen-rich diet</li>
                </ul>
              </div>

              <h3>Glow Core vs Glow Plus vs Glow Ultra</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-sm">
                  <strong>Glow Core</strong> (50/10/10mg) is the foundational formula. <strong>Glow Plus</strong> adds KPV (10mg) for enhanced anti-inflammatory and skin brightening effects. <strong>Glow Ultra</strong> increases GHK-Cu to 70mg for maximum collagen stimulation. Choose Core for general maintenance, Plus for inflammation/pigmentation issues, Ultra for intensive anti-aging.
                </p>
              </div>

              <h3>Safety & Side Effects</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm">
                  Glow Core combines three well-tolerated peptides with excellent safety profiles. Mild injection site reactions possible. GHK-Cu may cause temporary skin purging as cellular turnover increases. Consult healthcare provider before use, especially if pregnant/breastfeeding.
                </p>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                <strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> - Glow Core (GHK-Cu+TB-500+BPC-157) 50/10/10mg
              </p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
