import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calculator, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";

const peptidePresets: Record<string, { dosePerKg: number; frequency: number; cycleDays: number; mgPerVial: number }> = {
  'BPC-157': { dosePerKg: 5, frequency: 7, cycleDays: 30, mgPerVial: 5 },
  'TB-500': { dosePerKg: 30, frequency: 2, cycleDays: 42, mgPerVial: 5 },
  'Ipamorelin': { dosePerKg: 3, frequency: 7, cycleDays: 90, mgPerVial: 5 },
  'CJC-1295': { dosePerKg: 2, frequency: 7, cycleDays: 90, mgPerVial: 2 },
  'Sermorelin': { dosePerKg: 4, frequency: 7, cycleDays: 90, mgPerVial: 6 },
  'AOD-9604': { dosePerKg: 4, frequency: 7, cycleDays: 30, mgPerVial: 5 },
  'GHK-Cu': { dosePerKg: 10, frequency: 7, cycleDays: 30, mgPerVial: 50 },
  'Thymosin Alpha-1': { dosePerKg: 20, frequency: 3, cycleDays: 28, mgPerVial: 10 },
  'LL-37': { dosePerKg: 1, frequency: 7, cycleDays: 30, mgPerVial: 5 },
  'PT-141': { dosePerKg: 20, frequency: 2, cycleDays: 30, mgPerVial: 10 },
  'MOTS-c': { dosePerKg: 50, frequency: 3, cycleDays: 28, mgPerVial: 10 },
  'Epithalon': { dosePerKg: 60, frequency: 7, cycleDays: 20, mgPerVial: 50 },
  'Selank': { dosePerKg: 3, frequency: 7, cycleDays: 30, mgPerVial: 5 },
  'Semax': { dosePerKg: 7, frequency: 7, cycleDays: 30, mgPerVial: 5 },
  'KPV': { dosePerKg: 3, frequency: 7, cycleDays: 30, mgPerVial: 5 },
};

export default function EnhancedDosingCalculatorPage() {
  usePageTitle("Enhanced Dosing Calculator - Weight-Based Peptide Dosing & Cycle Cost Tool", {
    description: "Calculate personalized peptide dosing based on body weight, injection frequency, and cycle length. Includes cycle cost estimation and vial requirements."
  });

  const [bodyWeight, setBodyWeight] = useState<number>(70);
  const [weightUnit, setWeightUnit] = useState<string>("kg");
  const [dosePerKg, setDosePerKg] = useState<number>(5);
  const [frequency, setFrequency] = useState<number>(7);
  const [cycleDays, setCycleDays] = useState<number>(30);
  const [costPerVial, setCostPerVial] = useState<number>(50);
  const [mgPerVial, setMgPerVial] = useState<number>(5);
  const [selectedPreset, setSelectedPreset] = useState<string>("");

  const weightInKg = weightUnit === "lbs" ? bodyWeight * 0.453592 : bodyWeight;

  const calculateDosing = () => {
    const dailyDose = (weightInKg * dosePerKg) / 1000; // in mg
    const weeklyDose = dailyDose * frequency;
    const cycleDose = (dailyDose * frequency * cycleDays) / 7;
    const vialsNeeded = Math.ceil(cycleDose / mgPerVial);
    const cycleCost = vialsNeeded * costPerVial;

    return {
      dailyDose: dailyDose.toFixed(2),
      weeklyDose: weeklyDose.toFixed(2),
      cycleDose: cycleDose.toFixed(2),
      vialsNeeded,
      cycleCost: cycleCost.toFixed(2),
      dailyDoseMcg: (weightInKg * dosePerKg).toFixed(0),
    };
  };

  const results = calculateDosing();

  const applyPreset = (name: string) => {
    const preset = peptidePresets[name];
    if (preset) {
      setSelectedPreset(name);
      setDosePerKg(preset.dosePerKg);
      setFrequency(preset.frequency);
      setCycleDays(preset.cycleDays);
      setMgPerVial(preset.mgPerVial);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Navigation */}
        <Link href="/tools">
          <a className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </a>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Enhanced Dosing Calculator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Calculate personalized weight-based dosing, cycle requirements, and estimated costs. Select a peptide preset or enter custom values.
          </p>
        </div>

        {/* Peptide Presets */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-teal-600" />
            Quick Presets
          </h2>
          <div className="flex flex-wrap gap-2">
            {Object.keys(peptidePresets).map(name => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedPreset === name
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-teal-900 hover:text-teal-700"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Body Weight</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={bodyWeight}
                  onChange={(e) => setBodyWeight(parseFloat(e.target.value) || 0)}
                  className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <select
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value)}
                  className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                >
                  <option value="kg">kg</option>
                  <option value="lbs">lbs</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Dose per kg (mcg/kg)</label>
              <input
                type="number"
                value={dosePerKg}
                onChange={(e) => setDosePerKg(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Frequency (times/week)</label>
              <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Cycle Length (days)</label>
              <input
                type="number"
                value={cycleDays}
                onChange={(e) => setCycleDays(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Cost per Vial ($)</label>
              <input
                type="number"
                value={costPerVial}
                onChange={(e) => setCostPerVial(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">mg per Vial</label>
              <input
                type="number"
                value={mgPerVial}
                onChange={(e) => setMgPerVial(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 space-y-4">
            <div className="bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-teal-900 dark:text-teal-100 mb-4">Dosing Results</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-teal-700 dark:text-teal-300">Daily Dose</p>
                  <p className="text-2xl font-bold text-teal-800 dark:text-teal-200">{results.dailyDose} mg</p>
                  <p className="text-xs text-teal-600 dark:text-teal-400">({results.dailyDoseMcg} mcg)</p>
                </div>
                <div>
                  <p className="text-sm text-teal-700 dark:text-teal-300">Weekly Dose</p>
                  <p className="text-2xl font-bold text-teal-800 dark:text-teal-200">{results.weeklyDose} mg</p>
                </div>
                <div>
                  <p className="text-sm text-teal-700 dark:text-teal-300">Total Cycle Dose</p>
                  <p className="text-2xl font-bold text-teal-800 dark:text-teal-200">{results.cycleDose} mg</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-100 mb-4">Cycle Cost Estimate</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">Vials Needed</p>
                  <p className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">{results.vialsNeeded}</p>
                </div>
                <div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">Estimated Cycle Cost</p>
                  <p className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">${results.cycleCost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-100">
              <p className="font-semibold mb-1">Educational Tool Only</p>
              <p>This calculator provides estimates for educational purposes. Actual dosing should be determined by a qualified healthcare provider based on individual patient assessment, clinical goals, and manufacturer guidelines.</p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link href="/tools/dosage-calculator">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-400 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Reconstitution Calculator</h4>
              <p className="text-xs text-slate-500 mt-1">Calculate injection volumes and syringe units</p>
            </div>
          </Link>
          <Link href="/tools/reconstitution-calculator">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-400 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Quick Reconstitution</h4>
              <p className="text-xs text-slate-500 mt-1">Simple reconstitution math tool</p>
            </div>
          </Link>
          <Link href="/tools/cost-calculator">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-teal-400 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Cost Calculator</h4>
              <p className="text-xs text-slate-500 mt-1">Compare peptide therapy costs</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Professional dosing calculator for healthcare providers. For educational and clinical use only.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            &copy; {new Date().getFullYear()} Peptide Education Hub. Educational resource supporting DrsPeptides.com
          </p>
        </div>
      </footer>
    </div>
  );
}
