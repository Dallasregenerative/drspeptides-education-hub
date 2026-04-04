import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function AIAgentCard() {
  return (
    <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 border-0 shadow-xl overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-teal-400/30 shadow-lg">
            <img 
              src="/dr-peptide-logo.png" 
              alt="Dr. Peptide" 
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            <Zap className="h-3 w-3" />
            Pre-Release
          </div>
        </div>
        <CardTitle className="text-2xl text-white">Dr. Peptide</CardTitle>
        <CardDescription className="text-base text-teal-100/80 italic">
          The World's First Clinical AI Agent for Peptide Therapy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-teal-400" />
            <span>16 specialized AI agents</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-teal-400" />
            <span>2,800+ PubMed studies analyzed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-teal-400" />
            <span>87 clinical protocols</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-teal-400" />
            <span>Patient tracking & management</span>
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
              Meet Dr. Peptide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          
          <a href="/dr-peptide" className="w-full">
            <Button variant="outline" className="w-full border-teal-400/30 text-teal-300 hover:bg-teal-500/10">
              Learn More
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
