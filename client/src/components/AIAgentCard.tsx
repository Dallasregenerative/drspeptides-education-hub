import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dna, FlaskConical, TrendingUp, BookOpen, Network } from "lucide-react";

export default function AIAgentCard() {
  return (
    <Card
      data-variant="sidebar-card"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 border-0 shadow-xl overflow-hidden"
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-teal-400/30 shadow-lg">
            <img
              src="/dr-peptide-logo.png"
              alt="Dr. Peptide - Self-Evolving Collective Intelligence Agent"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            Collective Intelligence
          </div>
        </div>
        <CardTitle className="text-2xl text-white">Dr. Peptide</CardTitle>
        <CardDescription className="text-base text-teal-100/80 italic">
          Self-Evolving Clinical AI Agent for Peptide Therapy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Dna className="h-4 w-4 text-teal-400 flex-shrink-0" />
            <span>Genetic analysis — adapts to patient SNPs</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <FlaskConical className="h-4 w-4 text-teal-400 flex-shrink-0" />
            <span>Lab integration — real biomarker tracking</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <TrendingUp className="h-4 w-4 text-teal-400 flex-shrink-0" />
            <span>Predictive analytics on outcomes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <BookOpen className="h-4 w-4 text-teal-400 flex-shrink-0" />
            <span>Every claim backed by PubMed citations</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Network className="h-4 w-4 text-teal-400 flex-shrink-0" />
            <span>Gets smarter with every practitioner</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="https://peptideprotocols.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold">
              Build a Precision Protocol
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a href="/dr-peptide" className="w-full">
            <Button
              variant="outline"
              className="w-full border-teal-400/30 text-teal-300 hover:bg-teal-500/10"
            >
              See What Dr. Peptide Knows
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
