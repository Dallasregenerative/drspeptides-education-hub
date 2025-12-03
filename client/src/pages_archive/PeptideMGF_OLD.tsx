import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PeptideMGF() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">Mechano Growth Factor</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MGF (Mechano Growth Factor)</h1>
          <p className="text-xl text-muted-foreground mb-8">Splice variant of IGF-1 produced in response to mechanical stress on muscle tissue. Activates satellite cells for muscle repair and hypertrophy. Critical for exercise-induced muscle growth.</p>
          <Card><CardHeader><CardTitle>Overview</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p><strong>Mechano Growth Factor (MGF)</strong> is a splice variant of IGF-1 that is expressed locally in muscle tissue following mechanical damage or exercise. MGF activates muscle satellite cells (stem cells) to proliferate and differentiate into new muscle fibers, making it essential for muscle repair and growth.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>Muscle Hypertrophy:</strong> Activates satellite cells for new muscle fiber formation</li>
                <li><strong>Injury Recovery:</strong> Accelerates muscle repair after damage</li>
                <li><strong>Strength Gains:</strong> Enhances muscle fiber recruitment and size</li>
                <li><strong>Age-Related Sarcopenia:</strong> Combats muscle loss with aging</li>
                <li><strong>Neuroprotection:</strong> May protect neurons from damage</li>
              </ul>
              <h3>Research</h3>
              <div className="border-l-4 border-orange-600 pl-4 my-4">
                <p className="font-semibold">MGF and Satellite Cell Activation (Am J Physiol 2003)</p>
                <p className="text-sm text-muted-foreground mb-2">Hill et al. | <Badge variant="secondary">234 citations</Badge></p>
                <p className="text-sm">MGF expression increases 2-4 fold after resistance exercise, peaking at 2-4 hours post-workout. MGF activates satellite cells to proliferate and fuse with existing muscle fibers. Critical for exercise-induced muscle hypertrophy.</p>
              </div>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 200-400mcg per injection (subcutaneous or intramuscular)</li>
                  <li>• <strong>Timing:</strong> Immediately post-workout for maximum satellite cell activation</li>
                  <li>• <strong>Frequency:</strong> 3-5x weekly on training days</li>
                  <li>• <strong>Duration:</strong> 4-6 week cycles</li>
                  <li>• <strong>Note:</strong> Short half-life (minutes); must be used immediately after reconstitution</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground"><strong>Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a></p>
            </CardContent>
          </Card>
        </div></div>
      </section>
    </div>
  );
}
