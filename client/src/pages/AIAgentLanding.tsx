import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dna, FlaskConical, TrendingUp, BookOpen, Network,
  ArrowRight, CheckCircle2, XCircle, Zap, Brain, Sparkles,
  ShieldCheck, Clock
} from "lucide-react";

export default function AIAgentLanding() {
  usePageTitle(
    "Dr. Peptide - Self-Evolving Collective Intelligence Agent",
    {
      description:
        "Dr. Peptide is the world's first self-evolving clinical AI agent for peptide therapy. Integrating genetics, labs, predictive analytics, PubMed citations, and collective practitioner intelligence into precision protocols.",
    }
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Self-Evolving Collective Intelligence
              </span>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl shadow-teal-500/20">
                <img
                  src="/dr-peptide-logo.png"
                  alt="Dr. Peptide - Self-Evolving Collective Intelligence Agent"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Dr. Peptide
            </h1>
            <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
              The world's first self-evolving clinical AI agent for peptide therapy.
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
              Dr. Peptide integrates patient genetics, lab biomarkers, predictive analytics,
              PubMed-cited evidence, and the collective intelligence of practitioners nationwide
              to generate precision peptide protocols that improve with every interaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://peptideprotocols.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold text-lg px-8 py-6"
                >
                  Build a Precision Protocol
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                onClick={() =>
                  document.getElementById("five-pillars")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See What Makes It Different
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five Pillars ── */}
      <section id="five-pillars" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Five Pillars of Precision
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Dr. Peptide isn't a chatbot. It's a clinical decision engine built on five
            interconnected intelligence layers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PillarCard
              icon={Dna}
              title="Genetic Analysis"
              description="Upload patient genetics — protocols adapt to their genotype. SNP-aware dosing, methylation pathway analysis, and pharmacogenomic risk screening."
              color="purple"
            />
            <PillarCard
              icon={FlaskConical}
              title="Lab Integration"
              description="Import labs, flag interactions, track biomarkers over time. Real-time dosing adjustments based on CBC, CMP, hormones, and inflammatory markers."
              color="blue"
            />
            <PillarCard
              icon={TrendingUp}
              title="Predictive Analytics"
              description="Forecast treatment trajectories and flag risks before they happen. Machine learning models trained on real-world practitioner outcomes."
              color="green"
            />
            <PillarCard
              icon={BookOpen}
              title="Evidence-Based Citations"
              description="Every recommendation backed by verifiable PubMed citations. No black-box answers — trace any claim to the original research."
              color="amber"
            />
            <PillarCard
              icon={Network}
              title="Collective Intelligence"
              description="Every practitioner interaction makes Dr. Peptide smarter. A living knowledge base that evolves with real-world clinical experience."
              color="teal"
            />
          </div>
        </div>
      </section>

      {/* ── Generic Stacks vs Dr. Peptide ── */}
      <section className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Generic Peptide Stacks Fail Your Patients
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                  <XCircle className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle className="text-red-600">Generic "Stacks"</CardTitle>
                  <CardDescription>One-size-fits-all approach</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {[
                    "Ignores patient genetics and pharmacogenomics",
                    "No lab integration or biomarker tracking",
                    "Arbitrary dosing without evidence citations",
                    "Static — never improves or learns",
                    "No contraindication screening",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-900">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-600">Dr. Peptide AI</CardTitle>
                  <CardDescription>Self-evolving precision medicine</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {[
                    "SNP-aware protocols adapted to patient genotype",
                    "Real-time lab integration and biomarker tracking",
                    "Every dose backed by PubMed-cited evidence",
                    "Collective intelligence — improves with every practitioner",
                    "Automated contraindication and interaction screening",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Dr. Peptide Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              step={1}
              icon={Brain}
              title="Input Patient Data"
              description="Enter patient goals, genetics, labs, health history, medications, and preferences. Dr. Peptide analyzes every variable."
              color="purple"
            />
            <StepCard
              step={2}
              icon={Sparkles}
              title="AI Precision Analysis"
              description="Multiple specialized agents cross-reference genetics, biomarkers, drug interactions, and the collective intelligence of practitioners to build a precision protocol."
              color="teal"
            />
            <StepCard
              step={3}
              icon={ShieldCheck}
              title="Get Your Protocol"
              description="Receive a comprehensive, PubMed-cited protocol with dosing, administration, monitoring schedule, and patient education materials — ready for clinical use."
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Built for Clinical Rigor
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <TrustItem icon={BookOpen} label="PubMed-Cited" detail="Every recommendation traceable" />
              <TrustItem icon={Dna} label="Genomic-Aware" detail="SNP-adapted protocols" />
              <TrustItem icon={Clock} label="Minutes, Not Hours" detail="Precision protocols fast" />
              <TrustItem icon={Network} label="Self-Evolving" detail="Learns from every interaction" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 rounded-2xl p-12 text-center shadow-2xl">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-lg mx-auto mb-6">
              <img
                src="/dr-peptide-logo.png"
                alt="Dr. Peptide"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to Build Precision Protocols?
            </h2>
            <p className="text-teal-100/80 italic mb-2">
              Self-Evolving Collective Intelligence Agent for Peptide Therapy
            </p>
            <p className="text-xl text-slate-300 mb-8">
              Practitioners nationwide are already contributing to the collective intelligence.
              Every interaction makes Dr. Peptide smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://peptideprotocols.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold text-lg px-8 py-6"
                >
                  Build a Precision Protocol
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://peptideprotocols.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-400/30 text-teal-300 hover:bg-teal-500/10 font-semibold text-lg px-8 py-6"
                >
                  Try It Free
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ── */

function PillarCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    purple: "bg-purple-100 dark:bg-purple-900/50 text-purple-600",
    blue: "bg-blue-100 dark:bg-blue-900/50 text-blue-600",
    green: "bg-green-100 dark:bg-green-900/50 text-green-600",
    amber: "bg-amber-100 dark:bg-amber-900/50 text-amber-600",
    teal: "bg-teal-100 dark:bg-teal-900/50 text-teal-600",
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${colorMap[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepCard({
  step,
  icon: Icon,
  title,
  description,
  color,
}: {
  step: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-600",
    teal: "bg-teal-100 dark:bg-teal-900 text-teal-600",
    emerald: "bg-emerald-100 dark:bg-emerald-900 text-emerald-600",
  };

  return (
    <Card>
      <CardHeader>
        <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${colorMap[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>{step}. {title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function TrustItem({
  icon: Icon,
  label,
  detail,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
        <Icon className="h-6 w-6 text-teal-600" />
      </div>
      <div className="font-bold text-lg">{label}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{detail}</div>
    </div>
  );
}
