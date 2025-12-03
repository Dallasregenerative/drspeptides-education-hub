import { Button } from "@/components/ui/button";
import { Brain, Sparkles, ArrowRight, Zap } from "lucide-react";

export default function AIAgentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 my-12 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 via-indigo-600/50 to-blue-600/50 animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <Brain className="h-12 w-12 animate-pulse" />
              <Sparkles className="h-6 w-6 absolute -top-1 -right-1 text-yellow-300 animate-bounce" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-2">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span>World First AI Peptide Agent</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet Dr. Peptide AI
              </h2>
            </div>
          </div>
          
          <p className="text-lg text-purple-100 mb-4 max-w-2xl">
            Generate personalized peptide protocols in minutes using 16 specialized AI agents trained on 2,800+ clinical studies.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>2,800+ Studies Analyzed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>16 AI Agents</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 min-w-[200px]">
          <a 
            href="https://peptideprotocols.ai/?v=3.1.1762548959057" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              size="lg" 
              className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold text-lg shadow-xl"
            >
              Try Dr. Peptide AI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          
          <a href="/dr-peptide" className="w-full">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
