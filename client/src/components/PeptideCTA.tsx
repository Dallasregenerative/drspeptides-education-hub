import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BookOpen, ArrowRight, Stethoscope, Users, Zap } from "lucide-react";

interface PeptideCTAProps {
  peptideName?: string;
  className?: string;
}

export default function PeptideCTA({ peptideName, className = "" }: PeptideCTAProps) {
  return (
    <Card className={`overflow-hidden border-0 shadow-xl ${className}`}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Dr. Peptide Image */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl shadow-teal-500/20">
                <img 
                  src="/dr-peptide-logo.png" 
                  alt="Dr. Peptide - AI Clinical Agent" 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase">
                <Zap className="h-3 w-3" />
                Pre-Release Access Available
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Get a Personalized {peptideName || "Peptide"} Protocol
              </h3>
              <p className="text-teal-100/80 text-sm md:text-base mb-1 font-medium italic">
                The World's First Clinical AI Agent for Peptide Therapy
              </p>
              <p className="text-slate-300 mb-5 text-sm md:text-base">
                Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents 
                trained on 2,800+ PubMed studies across 87 clinical protocols.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Brain className="h-4 w-4 text-teal-400" />
                  <span>16 AI Agents</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <BookOpen className="h-4 w-4 text-teal-400" />
                  <span>2,800+ PubMed Studies</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Stethoscope className="h-4 w-4 text-teal-400" />
                  <span>87 Clinical Protocols</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users className="h-4 w-4 text-teal-400" />
                  <span>50+ Practitioners</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  size="lg"
                  onClick={() => window.open("https://peptideprotocols.ai", "_blank", "noopener,noreferrer")}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-6 py-5 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  Meet Dr. Peptide
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                PeptideProtocols.ai — Evidence-based clinical decision support for practitioners
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
