import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Sun, Heart, Shield, Zap, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideMelanotan2() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Melanotan 2 (MT-2)</h1>
              <p className="text-lg text-slate-600">Melanocortin Receptor Agonist for Tanning & Sexual Enhancement</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Sexual Wellness</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Sun className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Skin Tanning</h3>
              <p className="text-slate-600">Stimulates melanin production for natural-looking tan</p>
            </Card>
            <Card className="p-6">
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Libido Enhancement</h3>
              <p className="text-slate-600">Increases sexual desire and arousal in both sexes</p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Erectile Function</h3>
              <p className="text-slate-600">Supports erectile function through MC4R activation</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Appetite Reduction</h3>
              <p className="text-slate-600">May help reduce appetite and support weight management</p>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Melanotan 2 (MT-2) is a synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) that acts as a non-selective agonist of melanocortin receptors. Originally developed to provide photoprotection through enhanced melanin production, MT-2 has gained attention for its dual effects on skin pigmentation and sexual function.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              The peptide works by activating melanocortin receptors MC1R (responsible for melanin production) and MC4R (involved in sexual arousal and appetite regulation). This multi-receptor activity explains MT-2's diverse effects, including skin darkening, enhanced libido, improved erectile function, and potential appetite suppression.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              While MT-2 has shown promising effects in research settings, it remains an investigational compound with important safety considerations. Users should be aware of potential side effects and the importance of proper dosing protocols under medical supervision.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mechanism of Action</h2>
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">MC1R Activation (Tanning)</h3>
                <p className="text-slate-700 leading-relaxed">
                  MT-2 binds to MC1R receptors on melanocytes, stimulating eumelanin synthesis and distribution. This increases skin pigmentation without UV exposure, providing a protective tan that may reduce sun damage risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">MC4R Activation (Sexual Function)</h3>
                <p className="text-slate-700 leading-relaxed">
                  Activation of MC4R receptors in the central nervous system enhances sexual arousal and desire. This mechanism is independent of hormonal pathways, making MT-2 effective for both psychological and physiological aspects of sexual function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Metabolic Effects</h3>
                <p className="text-slate-700 leading-relaxed">
                  MC4R activation also influences appetite regulation and energy homeostasis, potentially contributing to reduced food intake and modest weight management effects observed in some users.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Loading Phase</h3>
                <p className="text-slate-700 mb-2"><strong>Dose:</strong> 0.25-0.5 mg subcutaneously</p>
                <p className="text-slate-700 mb-2"><strong>Frequency:</strong> Daily or every other day</p>
                <p className="text-slate-700"><strong>Duration:</strong> Until desired tan achieved (typically 1-2 weeks)</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Maintenance Phase</h3>
                <p className="text-slate-700 mb-2"><strong>Dose:</strong> 0.25-0.5 mg subcutaneously</p>
                <p className="text-slate-700 mb-2"><strong>Frequency:</strong> 1-2 times per week</p>
                <p className="text-slate-700"><strong>Purpose:</strong> Maintain pigmentation levels</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> Start with lowest effective dose to assess tolerance. Side effects like nausea and flushing are dose-dependent. Avoid UV exposure during initial loading phase.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-red-600">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Common Side Effects</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Nausea (especially at higher doses)</li>
                  <li>Facial flushing</li>
                  <li>Spontaneous erections</li>
                  <li>Darkening of existing moles and freckles</li>
                  <li>Appetite suppression</li>
                  <li>Yawning and stretching</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Serious Considerations</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Not approved by FDA for any indication</li>
                  <li>Potential effects on existing moles (monitor for changes)</li>
                  <li>Unknown long-term safety profile</li>
                  <li>Risk of uneven pigmentation</li>
                  <li>Contraindicated in pregnancy and breastfeeding</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-900">
                    <strong>Critical Warning:</strong> MT-2 is not approved for human use by regulatory agencies. Use only under medical supervision with regular skin monitoring. Individuals with history of melanoma or atypical moles should avoid MT-2.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="p-6 bg-slate-50 border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Educational Purpose Only:</strong> This information is provided for educational purposes only. Melanotan 2 is a research peptide not approved for human use. Consult qualified healthcare providers before considering any peptide therapy.
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}
