import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dumbbell, Clock, Flame, Sparkles, AlertTriangle, CheckCircle, TrendingUp, ArrowLeft} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaM51() {
  usePageTitle("Formula M-51: Metabolic Series Peptide Blend", {
    description: "Advanced exercise mimetic formula with 5-AMINO-1MQ and SLU-PP-332 for enhanced fat burning, muscle strength, and metabolic optimization.",
    keywords: ["exercise mimetic", "5-AMINO-1MQ", "SLU-PP-332", "NNMT inhibitor", "ERR agonist", "fat burning", "muscle strength", "metabolism"]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-green-500/30 text-green-200 border-green-400">
              Metabolic Series
            </Badge>
            <Badge className="bg-emerald-500/30 text-emerald-200 border-emerald-400">
              Metabolic Enhancement
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula M-51
          </h1>
          <p className="text-xl text-green-200 mb-6">
            Advanced Metabolic Series Peptide Blend
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Dumbbell className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-green-100">
              50 mg 5-AMINO-1MQ + 1 mg SLU-PP-332
            </p>
            <p className="text-sm text-green-300 mt-2">
              Capsule-based delivery system for convenient daily dosing
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-green-600" />
              Mechanism of Action: Dual-Pathway Exercise Mimicking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-5">
                <h4 className="font-bold text-green-800 mb-3">5-AMINO-1MQ (NNMT Inhibitor)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Inhibits NNMT enzyme</li>
                  <li>• Increases NAD+ and SAM (S-adenosylmethionine)</li>
                  <li>• Enhances cellular energy and protein synthesis</li>
                  <li>• Drives mitochondrial biogenesis</li>
                  <li>• Shifts metabolism from fat storage to fat oxidation</li>
                  <li>• <strong>10-fold increase in fat loss</strong> with caloric restriction</li>
                  <li>• Reduces visceral adiposity 30-40%</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-5">
                <h4 className="font-bold text-emerald-800 mb-3">SLU-PP-332 (ERR Receptor Agonist)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Activates ERR receptors (α, β, γ)</li>
                  <li>• Triggers exercise-like gene programs</li>
                  <li>• Increases fat oxidation and mitochondrial function</li>
                  <li>• Mimics aerobic exercise metabolic effects</li>
                  <li>• Enhances endurance and physical performance</li>
                  <li>• "Exercise in a pill" mechanism</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-5">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Effects
              </h4>
              <p className="text-gray-700">
                Research shows <strong>40% strength gains</strong> with NNMT inhibition alone, <strong>60% when combined</strong> with exercise-like pathways—demonstrating true additive benefits.
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
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-3">Metabolic Enhancement</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 25% increase in fatty acid burning within hours</li>
                  <li>• Enhanced glucose uptake and insulin sensitivity</li>
                  <li>• Improved mitochondrial function</li>
                  <li>• Enhanced cellular energy</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-bold text-emerald-800 mb-3">Physical Performance</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 20% improvements in muscle strength (2-4 weeks)</li>
                  <li>• Enhanced endurance and reduced fatigue</li>
                  <li>• Faster recovery from physical exertion</li>
                  <li>• Improved exercise capacity</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <h4 className="font-bold text-teal-800 mb-3">Body Composition</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 12% reduction in fat mass over 28 days (animal studies)</li>
                  <li>• 30% reduction in intramyocellular lipids</li>
                  <li>• 25% increase in muscle fiber cross-sectional area</li>
                  <li>• Preferential visceral fat loss</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Stats */}
        <Card className="mb-8 border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="py-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600">60%</p>
                <p className="text-sm text-gray-600">Strength Gains (Combined)</p>
              </div>
              <div>
                <Flame className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-emerald-600">25%</p>
                <p className="text-sm text-gray-600">Fat Burning Increase</p>
              </div>
              <div>
                <Dumbbell className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal-600">12%</p>
                <p className="text-sm text-gray-600">Fat Mass Reduction</p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-cyan-600">10x</p>
                <p className="text-sm text-gray-600">Fat Loss with Diet</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Patient Expectations & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-6 Hours</div>
                <p className="text-gray-700">Metabolic shift to fat burning, stable energy without jitters, improved mental clarity, enhanced exercise performance</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                <div className="bg-emerald-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Days</div>
                <p className="text-gray-700">Enhanced exercise performance, reduced fatigue, sustained energy</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                <div className="bg-teal-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-2 Weeks</div>
                <p className="text-gray-700">Energy stability throughout day, reduced carb cravings, 20% strength improvements, better sleep quality</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                <div className="bg-cyan-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-4 Weeks</div>
                <p className="text-gray-700">Early body composition changes, improved metabolic markers</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Months</div>
                <p className="text-gray-700">Optimized metabolic health, sustained benefits, significant body composition changes</p>
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
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Excellent Safety Profile</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Wide therapeutic window (20x safety margin for 5-AMINO-1MQ)</li>
                <li>• No significant adverse effects in 28-day studies</li>
                <li>• High selectivity for target pathways</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy and lactation</li>
                  <li>• Known hypersensitivity to components</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Diabetes (may require 10-30% medication dose reduction)</li>
                  <li>• Cardiovascular disease (monitor in severe conditions)</li>
                  <li>• Liver disease (monitor liver function)</li>
                  <li>• Thyroid disorders (may require medication adjustments)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Diabetes medications (monitor blood sugar closely, adjust doses)</li>
                <li>• NAD+ supplements (reduce doses by 50% to avoid excessive elevation)</li>
                <li>• Stimulants (use cautiously due to additive metabolic effects)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula M-51?</h3>
            <p className="mb-6 text-teal-100">
              DrsPeptides.com provides pharmaceutical-grade formulas with comprehensive quality assurance for healthcare provider use.
            </p>
            <SourcePeptidesButton className="bg-white text-teal-700 hover:bg-teal-50" showIcon={false} />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
