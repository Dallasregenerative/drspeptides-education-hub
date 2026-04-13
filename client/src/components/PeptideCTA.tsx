import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dna, FlaskConical, TrendingUp, BookOpen, Network, ArrowRight } from "lucide-react";

interface PeptideCTAProps {
  peptideName?: string;
  className?: string;
}

export default function PeptideCTA({ peptideName, className = "" }: PeptideCTAProps) {
  const pillars = [
    { icon: Dna, text: "Upload genetics — protocols adapt to patient SNPs" },
    { icon: FlaskConical, text: "Import labs — dosing responds to real biomarkers" },
    { icon: TrendingUp, text: "Predictive analytics — forecast outcomes before they happen" },
    { icon: BookOpen, text: "Every recommendation cited — PubMed links you can verify" },
    { icon: Network, text: "Collective intelligence — gets smarter with every practitioner" },
  ];

  return (
    <Card data-variant="peptide-cta" className={`overflow-hidden border-0 shadow-xl ${className}`}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Dr. Peptide Image */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl shadow-teal-500/20">
                <img
                  src="/dr-peptide-logo.png"
                  alt="Dr. Peptide - Self-Evolving Collective Intelligence Agent"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase">
                Self-Evolving Collective Intelligence
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {peptideName
                  ? `Build a Precision ${peptideName} Protocol`
                  : "Build a Precision Peptide Protocol"}
              </h3>
              <p className="text-teal-100/80 text-sm md:text-base mb-1 font-medium italic">
                The World's First Self-Evolving Clinical AI Agent for Peptide Therapy
              </p>
              <p className="text-slate-300 mb-5 text-sm md:text-base">
                {peptideName
                  ? `Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build a precision ${peptideName} protocol — every recommendation PubMed-cited.`
                  : "Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build a precision protocol — every recommendation PubMed-cited."}
              </p>

              <div className="flex flex-col gap-2 mb-6">
                {pillars.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <p.icon className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() =>
                    window.open("https://peptideprotocols.ai", "_blank", "noopener,noreferrer")
                  }
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-6 py-5 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  Build a Precision Protocol
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open("/dr-peptide", "_self")
                  }
                  className="border-2 border-teal-400/30 text-teal-300 hover:bg-teal-500/10 font-semibold px-6 py-5 text-base"
                >
                  See What Dr. Peptide Knows
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                PeptideProtocols.ai — Self-evolving collective intelligence for precision peptide therapy
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
