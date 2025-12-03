import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PeptideGHRP6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">GH Secretagogue</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GHRP-6</h1>
          <p className="text-xl text-muted-foreground mb-8">First-generation growth hormone releasing peptide with potent GH stimulation and appetite-enhancing effects. Stimulates ghrelin receptors for robust GH release and increased hunger.</p>
          <Card><CardHeader><CardTitle>Overview</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p><strong>GHRP-6 (Growth Hormone Releasing Peptide-6)</strong> is a synthetic hexapeptide that stimulates growth hormone secretion through ghrelin receptor activation. Unlike more selective GH secretagogues (like Ipamorelin), GHRP-6 also significantly increases appetite and may elevate cortisol and prolactin at higher doses.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>GH Stimulation:</strong> Potent growth hormone release</li>
                <li><strong>Appetite Enhancement:</strong> Increases hunger through ghrelin activation</li>
                <li><strong>Muscle Growth:</strong> Supports lean mass gains</li>
                <li><strong>Recovery:</strong> Enhances tissue repair and healing</li>
                <li><strong>Joint Health:</strong> May improve collagen synthesis</li>
                <li><strong>Sleep Quality:</strong> Enhances deep sleep stages</li>
              </ul>
              <h3>Research</h3>
              <div className="border-l-4 border-blue-600 pl-4 my-4">
                <p className="font-semibold">GHRP-6 GH Stimulation (J Clin Endocrinol Metab 1994)</p>
                <p className="text-sm text-muted-foreground mb-2">Bowers et al. | <Badge variant="secondary">456 citations</Badge></p>
                <p className="text-sm">GHRP-6 produced dose-dependent GH release in humans with peak levels at 30-60 minutes. Synergistic effects when combined with GHRH. Established GHRP-6 as prototype for GH secretagogue development.</p>
              </div>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 100-300mcg per injection (subcutaneous)</li>
                  <li>• <strong>Frequency:</strong> 2-3x daily (morning, post-workout, bedtime)</li>
                  <li>• <strong>Timing:</strong> On empty stomach, wait 20-30 minutes before eating</li>
                  <li>• <strong>Duration:</strong> 8-12 week cycles</li>
                  <li>• <strong>Note:</strong> Expect significant appetite increase</li>
                </ul>
              </div>
              <h3>GHRP-6 vs Ipamorelin</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
                <p className="text-sm"><strong>Key Differences:</strong> GHRP-6 causes significant appetite increase and may elevate cortisol/prolactin. Ipamorelin is more selective with minimal appetite or hormone effects. Choose GHRP-6 if appetite stimulation desired; choose Ipamorelin for cleaner GH stimulation.</p>
              </div>
              <p className="text-sm text-muted-foreground"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a></p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
