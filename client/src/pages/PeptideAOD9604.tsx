import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PeptideAOD9604() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Button variant="ghost" size="sm" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container"><div className="max-w-4xl">
          <Badge className="mb-4">hGH Fragment</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AOD-9604</h1>
          <p className="text-xl text-muted-foreground mb-8">Modified fragment of human growth hormone (amino acids 176-191) that retains fat-burning properties without affecting blood sugar or growth. Designed specifically for fat loss without GH side effects.</p>
          <Card><CardHeader><CardTitle>Overview</CardTitle></CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p><strong>AOD-9604</strong> is a synthetic peptide fragment derived from the C-terminus of human growth hormone. It stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat formation) without the growth-promoting or insulin-affecting properties of full-length GH.</p>
              <h3>Clinical Applications</h3>
              <ul>
                <li><strong>Fat Loss:</strong> Stimulates lipolysis in adipose tissue</li>
                <li><strong>Body Recomposition:</strong> Reduces body fat while preserving lean mass</li>
                <li><strong>Metabolic Enhancement:</strong> Increases metabolic rate</li>
                <li><strong>No Hypoglycemia:</strong> Does not affect blood glucose levels</li>
                <li><strong>Cartilage Repair:</strong> May support joint health and cartilage regeneration</li>
              </ul>
              <h3>Research</h3>
              <div className="border-l-4 border-purple-600 pl-4 my-4">
                <p className="font-semibold">AOD-9604 Clinical Trials (Obesity Research 2001)</p>
                <p className="text-sm">Phase II trials showed AOD-9604 reduced body fat in obese subjects without affecting glucose metabolism or causing GH-related side effects. Well-tolerated with minimal adverse events.</p>
              </div>
              <h3>Dosing Protocol</h3>
              <div className="bg-slate-50 p-4 rounded-lg my-4">
                <ul className="text-sm space-y-2">
                  <li>• <strong>Dose:</strong> 300-600mcg daily (subcutaneous)</li>
                  <li>• <strong>Timing:</strong> Morning on empty stomach or before exercise</li>
                  <li>• <strong>Duration:</strong> 8-12 week cycles</li>
                  <li>• <strong>Note:</strong> Best results with caloric restriction and exercise</li>
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
