import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dna, Network } from "lucide-react";

export default function AIAgentInlineCTA() {
  const [variant, setVariant] = useState<"a" | "b">("a");

  useEffect(() => {
    const stored = localStorage.getItem("drp-inline-variant");
    if (stored === "a" || stored === "b") {
      setVariant(stored);
    } else {
      const pick = Math.random() > 0.5 ? "b" : "a";
      localStorage.setItem("drp-inline-variant", pick);
      setVariant(pick);
    }
  }, []);

  return (
    <div
      data-variant={`inline-${variant}`}
      className="my-8 p-6 bg-gradient-to-br from-slate-800 to-teal-900 rounded-xl border border-teal-400/20 shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-teal-400/30 flex-shrink-0">
            <img
              src="/dr-peptide-logo.png"
              alt="Dr. Peptide"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            {variant === "a" ? (
              <>
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <Dna className="h-4 w-4 text-teal-400" />
                  Turn This Knowledge Into a Precision Protocol
                </h3>
                <p className="text-sm text-slate-300">
                  Dr. Peptide integrates genetics, labs, and predictive analytics — every recommendation backed by PubMed citations.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <Network className="h-4 w-4 text-teal-400" />
                  Every Practitioner Makes Dr. Peptide Smarter
                </h3>
                <p className="text-sm text-slate-300">
                  A self-evolving collective intelligence agent — trained on real-world outcomes from practitioners nationwide.
                </p>
              </>
            )}
          </div>
        </div>
        <a
          href="https://peptideprotocols.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white whitespace-nowrap font-semibold">
            {variant === "a" ? "Build a Precision Protocol" : "Join the Network"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
