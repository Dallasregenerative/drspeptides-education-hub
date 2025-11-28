import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PeptideIbutamoren() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <Badge className="mb-4">Oral GH Secretagogue</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ibutamoren (MK-677)</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oral ghrelin mimetic that stimulates growth hormone and IGF-1 secretion. Unique among GH secretagogues for oral bioavailability and 24-hour half-life, providing sustained GH elevation with once-daily dosing.
            </p>
            <Card>
              <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p><strong>Ibutamoren (MK-677)</strong> is an orally active ghrelin receptor agonist that stimulates growth hormone secretion without suppressing endogenous production. Unlike injectable peptides, MK-677 offers convenient once-daily oral administration with sustained 24-hour GH elevation.</p>
                <h3>Clinical Applications</h3>
                <ul>
                  <li><strong>Muscle Growth:</strong> Increases lean body mass through GH/IGF-1 elevation</li>
                  <li><strong>Bone Density:</strong> Improves bone mineral density in elderly populations</li>
                  <li><strong>Sleep Quality:</strong> Enhances REM sleep duration and quality</li>
                  <li><strong>Appetite Stimulation:</strong> Increases hunger through ghrelin receptor activation</li>
                  <li><strong>Wound Healing:</strong> Accelerates tissue repair and recovery</li>
                  <li><strong>Anti-Aging:</strong> Reverses age-related GH decline</li>
                </ul>
                <h3>Landmark Research</h3>
                <div className="border-l-4 border-blue-600 pl-4 my-4">
                  <p className="font-semibold">MK-677 in Elderly (J Clin Endocrinol Metab 1998)</p>
                  <p className="text-sm text-muted-foreground mb-2">Chapman et al. | <Badge variant="secondary">789 citations</Badge></p>
                  <p className="text-sm">MK-677 25mg daily increased GH and IGF-1 levels in healthy elderly subjects without serious adverse effects. Improved lean body mass and bone mineral density over 12 months. Well-tolerated with sustained efficacy.</p>
                </div>
                <h3>Dosing Protocol</h3>
                <div className="bg-slate-50 p-4 rounded-lg my-4">
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Dose:</strong> 10-25mg once daily (oral)</li>
                    <li>• <strong>Timing:</strong> Before bed to align with natural GH pulse</li>
                    <li>• <strong>Duration:</strong> 8-12 week cycles with 4-week breaks</li>
                    <li>• <strong>Note:</strong> Monitor blood glucose; may impair insulin sensitivity</li>
                  </ul>
                </div>
                <h3>Safety Considerations</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm"><strong>Side Effects:</strong> Increased appetite, water retention, elevated blood glucose, fatigue. Monitor glucose levels in diabetics or prediabetics. Not FDA-approved; research compound only.</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
