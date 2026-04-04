import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, BookOpen, Stethoscope } from "lucide-react";

export default function AIAgentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 rounded-2xl p-8 my-12 shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 flex-1">
          {/* Dr. Peptide Image */}
          <div className="flex-shrink-0 hidden sm:block">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl shadow-teal-500/20">
              <img 
                src="/dr-peptide-logo.png" 
                alt="Dr. Peptide - AI Clinical Agent" 
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase">
              <Zap className="h-3 w-3" />
              Pre-Release Access Available
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Meet Dr. Peptide
            </h2>
            <p className="text-teal-100/80 text-sm font-medium italic mb-2">
              The World's First Clinical AI Agent for Peptide Therapy
            </p>
            <p className="text-lg text-slate-300 mb-4 max-w-2xl">
              Generate personalized peptide protocols using 16 specialized AI agents trained on 2,800+ PubMed studies.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-teal-400" />
                <span>16 AI Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-teal-400" />
                <span>2,800+ PubMed Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-teal-400" />
                <span>87 Clinical Protocols</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 min-w-[200px]">
          <a 
            href="https://peptideprotocols.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold text-lg shadow-xl"
            >
              Meet Dr. Peptide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          
          <a href="/dr-peptide" className="w-full">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-2 border-teal-400/30 text-teal-300 hover:bg-teal-500/10 font-semibold"
            >
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
