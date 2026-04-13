import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dna, FlaskConical, TrendingUp, BookOpen, Network } from "lucide-react";

export default function AIAgentBanner() {
  const [variant, setVariant] = useState<"a" | "b">("a");

  useEffect(() => {
    const stored = localStorage.getItem("drp-banner-variant");
    if (stored === "a" || stored === "b") {
      setVariant(stored);
    } else {
      const pick = Math.random() > 0.5 ? "b" : "a";
      localStorage.setItem("drp-banner-variant", pick);
      setVariant(pick);
    }
  }, []);

  return (
    <div
      data-variant={`banner-${variant}`}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 rounded-2xl p-8 my-12 shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
        {/* Dr. Peptide Image */}
        <div className="flex-shrink-0 hidden sm:block">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl shadow-teal-500/20">
            <img
              src="/dr-peptide-logo.png"
              alt="Dr. Peptide - Self-Evolving Collective Intelligence Agent"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1">
          {variant === "a" ? <VersionA /> : <VersionB />}
        </div>

        <div className="flex flex-col gap-3 min-w-[220px] self-center">
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
              {variant === "a" ? "Build a Precision Protocol" : "Join the Network"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="/dr-peptide" className="w-full">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-teal-400/30 text-teal-300 hover:bg-teal-500/10 font-semibold"
            >
              {variant === "a" ? "Learn More" : "See How It Works"}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Version A — "The Bridge" (education → action) ── */
function VersionA() {
  return (
    <div className="text-white">
      <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase">
        From Education to Precision
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        You Just Learned the Science. Now Personalize It.
      </h2>
      <p className="text-base text-slate-300 mb-4 max-w-2xl">
        Dr. Peptide builds advanced precision protocols using your patient's genetics, labs, and the collective intelligence of practitioners nationwide.
      </p>
      <PillarList />
    </div>
  );
}

/* ── Version B — "The Network Effect" (FOMO / community) ── */
function VersionB() {
  return (
    <div className="text-white">
      <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase">
        Self-Evolving Collective Intelligence
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Practitioners Nationwide Are Already Contributing. Are You?
      </h2>
      <p className="text-base text-slate-300 mb-4 max-w-2xl">
        Dr. Peptide is the only clinical AI that learns from every practitioner interaction — genetic insights, lab correlations, and real-world outcomes flowing back into a living knowledge base.
      </p>
      <PillarList networkVersion />
    </div>
  );
}

/* ── Shared five-pillar bullet list ── */
function PillarList({ networkVersion = false }: { networkVersion?: boolean }) {
  const items = networkVersion
    ? [
        { icon: Dna, text: "Genomic-informed protocol generation" },
        { icon: FlaskConical, text: "Lab analysis with biomarker tracking" },
        { icon: TrendingUp, text: "Predictive analytics on treatment trajectories" },
        { icon: BookOpen, text: "Every claim backed by verifiable PubMed citations" },
        { icon: Network, text: "AI that evolves with every interaction" },
      ]
    : [
        { icon: Dna, text: "Upload genetics — protocols adapt to their SNPs" },
        { icon: FlaskConical, text: "Import labs — dosing responds to real biomarkers" },
        { icon: TrendingUp, text: "Predictive analytics — forecast outcomes before they happen" },
        { icon: BookOpen, text: "Every recommendation cited — PubMed links you can verify" },
        { icon: Network, text: "Collective intelligence — gets smarter with every practitioner" },
      ];

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
          <item.icon className="h-4 w-4 text-teal-400 flex-shrink-0" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
