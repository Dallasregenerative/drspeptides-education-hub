import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Brain, Sparkles, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function BlendFormulaN69() {
  usePageTitle("Formula N-69: Sexual Enhancement & Intimacy", {
    description: "Advanced sexual enhancement formula with NALT, Kisspeptin, PT-141, Oxytocin, and VIP for comprehensive sexual health optimization.",
    keywords: ["sexual enhancement", "PT-141", "bremelanotide", "kisspeptin", "oxytocin", "VIP", "libido", "intimacy", "sexual health"]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 via-pink-900 to-rose-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-rose-500/30 text-rose-200 border-rose-400">
              Sexual Health
            </Badge>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-400">
              Multi-Pathway Formula
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula N-69
          </h1>
          <p className="text-xl text-rose-200 mb-6">
            Advanced Sexual Enhancement & Intimacy Protocol
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-rose-100">
              100 mg N-Acetyl L-Tyrosine (NALT) + 0.5 mg Kisspeptin + 0.5 mg PT-141 (Bremelanotide) + 1 mg Oxytocin + 0.25 mg VIP
            </p>
            <p className="text-sm text-rose-300 mt-2">
              Enteric-coated capsules for optimal peptide protection and absorption
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-rose-600" />
              Mechanism of Action: Five-Pathway Sexual Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-rose-50 rounded-lg p-5">
                <h4 className="font-bold text-rose-800 mb-3">NALT (Catecholamine Replenishment)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Replenishes dopamine, norepinephrine, epinephrine</li>
                  <li>• Supports cognitive clarity and motivation during arousal</li>
                  <li>• Enhanced bioavailability vs. standard L-tyrosine</li>
                  <li>• GRAS designation; safe up to 2,000 mg/day</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-lg p-5">
                <h4 className="font-bold text-pink-800 mb-3">Kisspeptin (Hypothalamic-Gonadal Activation)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Activates GnRH neurons → pulsatile LH/FSH release</li>
                  <li>• Increases endogenous testosterone production</li>
                  <li>• Enhances sexual brain processing in limbic/reward centers</li>
                  <li>• Up to 56% increase in penile tumescence vs. placebo</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">PT-141/Bremelanotide (Central Arousal)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MC3R/MC4R agonist - activates desire pathways centrally</li>
                  <li>• FDA-approved for female HSDD (2019)</li>
                  <li>• Independent of vascular mechanisms</li>
                  <li>• Onset 30-90 min, peak 4-6 hours, duration 6-12 hours</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-5">
                <h4 className="font-bold text-red-800 mb-3">Oxytocin (Bonding & Orgasmic Enhancement)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Amplifies emotional intimacy, trust, partner attachment</li>
                  <li>• Facilitates erectile function via nitric oxide synthesis</li>
                  <li>• Up to 5-fold orgasm intensity elevation</li>
                  <li>• Reduces performance anxiety through cortisol suppression</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-5">
                <h4 className="font-bold text-amber-800 mb-3">VIP (Peripheral Vascular Optimization)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• VPAC2 receptor agonist on penile smooth muscle</li>
                  <li>• 75-84% intercourse-suitable erections in ED patients</li>
                  <li>• No priapism reported in 8,000+ injections</li>
                  <li>• Enhanced efficacy in hypogonadal states</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-5">
              <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                Central arousal (PT-141, Kisspeptin, Oxytocin) activates hypothalamic and reward centers while peripheral function (VIP, Oxytocin) optimizes blood flow. Hormonal optimization (Kisspeptin, NALT) sustains arousal through endogenous testosterone and catecholamine synthesis.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-rose-50 rounded-lg p-4">
                <h4 className="font-bold text-rose-800 mb-3">Sexual Function</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Restored libido within 1-2 hrs</li>
                  <li>• 56% penile rigidity increase</li>
                  <li>• Normalized ejaculatory latency</li>
                  <li>• Reduced performance anxiety</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-pink-800 mb-3">Orgasmic Enhancement</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Up to 5-fold orgasm intensity</li>
                  <li>• Increased frequency (esp. women)</li>
                  <li>• Sustained oxytocin 1-7 hrs post</li>
                  <li>• Both male and female benefit</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3">Emotional & Relational</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced trust and empathy</li>
                  <li>• Hormonal synchronization</li>
                  <li>• Improved relationship satisfaction</li>
                  <li>• Reduced sexual aversion</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-3">Cognitive & Mood</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Mental clarity during arousal</li>
                  <li>• Mild antidepressant effects</li>
                  <li>• Stress resilience</li>
                  <li>• Improved confidence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Onset & Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-rose-50 rounded-lg p-5 text-center">
                <Zap className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                <h4 className="font-bold text-rose-800">Onset</h4>
                <p className="text-2xl font-bold text-rose-600">30-90 min</p>
                <p className="text-sm text-gray-600">After administration</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-5 text-center">
                <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <h4 className="font-bold text-pink-800">Peak Effects</h4>
                <p className="text-2xl font-bold text-pink-600">4-6 hours</p>
                <p className="text-sm text-gray-600">Maximum benefit window</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-800">Duration</h4>
                <p className="text-2xl font-bold text-purple-600">6-12 hours</p>
                <p className="text-sm text-gray-600">Total effect duration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety */}
        <Card className="mb-8 border-amber-200">
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-6 w-6" />
              Safety Profile & Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy/lactation</li>
                  <li>• Uncontrolled hypertension</li>
                  <li>• Known hypersensitivity to any component</li>
                  <li>• Recent cardiovascular events</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cardiovascular disease</li>
                  <li>• Hormone-sensitive conditions</li>
                  <li>• Concurrent use of PDE5 inhibitors</li>
                  <li>• Psychiatric conditions</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Common Side Effects</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mild nausea (transient, typically resolves)</li>
                <li>• Flushing</li>
                <li>• Headache</li>
                <li>• Nasal congestion</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-69?</h3>
            <p className="mb-6 text-teal-100">
              DrsPeptides.com provides pharmaceutical-grade formulas with comprehensive quality assurance for healthcare provider use.
            </p>
            <Button 
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => window.open('https://drspeptides.com', '_blank')}
            >
              Source Medical-Grade Peptides
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
