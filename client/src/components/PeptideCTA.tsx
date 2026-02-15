import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Sparkles, Brain, ArrowRight } from "lucide-react";

interface PeptideCTAProps {
  peptideName?: string;
  className?: string;
}

export default function PeptideCTA({ peptideName, className = "" }: PeptideCTAProps) {
  return (
    <Card className={`bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950 border-teal-200 dark:border-teal-800 ${className}`}>
      <CardContent className="p-8">
        <div className="text-center">
          <div className="inline-flex p-3 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
            <Bot className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Get a Personalized {peptideName || "Peptide"} Protocol
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Dr. Peptide AI generates personalized protocols using 16 specialized AI agents 
            trained on 2,800+ clinical studies. Get evidence-based dosing, cycling, and monitoring recommendations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Brain className="h-5 w-5 text-teal-600" />
              <span>AI-Powered Protocols</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Sparkles className="h-5 w-5 text-teal-600" />
              <span>2,800+ Studies</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Bot className="h-5 w-5 text-teal-600" />
              <span>16 AI Agents</span>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => window.open("https://peptideprotocols.ai", "_blank", "noopener,noreferrer")}
            className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Bot className="h-5 w-5 mr-2" />
            Talk to Dr. Peptide AI
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            Powered by PeptideProtocols.ai — Evidence-based AI protocol generation
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
