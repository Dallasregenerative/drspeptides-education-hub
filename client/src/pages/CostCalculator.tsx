import { useState, useMemo } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { ArrowLeft, Calculator, Plus, Trash2, DollarSign, TrendingDown, Package, Microscope } from "lucide-react";
import { Link } from "wouter";

interface PeptideSelection {
  id: string;
  peptide: string;
  quantity: number;
  frequency: string;
  duration: number; // weeks
}

interface PeptideData {
  name: string;
  category: string;
  pricePerVial: number;
  dosesPerVial: number;
  typicalDose: string;
  unit: string;
}

const peptideDatabase: PeptideData[] = [
  // GH Secretagogues
  { name: "Ipamorelin", category: "GH Secretagogue", pricePerVial: 45, dosesPerVial: 20, typicalDose: "200-300mcg", unit: "5mg vial" },
  { name: "CJC-1295 (no DAC)", category: "GH Secretagogue", pricePerVial: 55, dosesPerVial: 20, typicalDose: "100-200mcg", unit: "2mg vial" },
  { name: "CJC-1295 + Ipamorelin", category: "GH Secretagogue", pricePerVial: 85, dosesPerVial: 20, typicalDose: "300mcg", unit: "combo vial" },
  { name: "Sermorelin", category: "GH Secretagogue", pricePerVial: 65, dosesPerVial: 30, typicalDose: "200-500mcg", unit: "6mg vial" },
  { name: "Tesamorelin", category: "GH Secretagogue", pricePerVial: 180, dosesPerVial: 30, typicalDose: "1-2mg", unit: "30mg vial" },
  { name: "Hexarelin", category: "GH Secretagogue", pricePerVial: 55, dosesPerVial: 25, typicalDose: "100-200mcg", unit: "5mg vial" },
  { name: "GHRP-2", category: "GH Secretagogue", pricePerVial: 40, dosesPerVial: 25, typicalDose: "100-300mcg", unit: "5mg vial" },
  { name: "GHRP-6", category: "GH Secretagogue", pricePerVial: 35, dosesPerVial: 25, typicalDose: "100-300mcg", unit: "5mg vial" },
  
  // Tissue Repair
  { name: "BPC-157", category: "Tissue Repair", pricePerVial: 55, dosesPerVial: 20, typicalDose: "250-500mcg", unit: "5mg vial" },
  { name: "TB-500", category: "Tissue Repair", pricePerVial: 75, dosesPerVial: 4, typicalDose: "2-5mg", unit: "10mg vial" },
  { name: "BPC-157 + TB-500", category: "Tissue Repair", pricePerVial: 110, dosesPerVial: 10, typicalDose: "combo dose", unit: "combo vial" },
  { name: "GHK-Cu", category: "Tissue Repair", pricePerVial: 65, dosesPerVial: 20, typicalDose: "1-2mg", unit: "50mg vial" },
  
  // Weight Management
  { name: "Semaglutide", category: "Weight Management", pricePerVial: 250, dosesPerVial: 8, typicalDose: "0.25-2.4mg", unit: "5mg vial" },
  { name: "Tirzepatide", category: "Weight Management", pricePerVial: 350, dosesPerVial: 8, typicalDose: "2.5-15mg", unit: "30mg vial" },
  { name: "AOD-9604", category: "Weight Management", pricePerVial: 60, dosesPerVial: 20, typicalDose: "300mcg", unit: "5mg vial" },
  { name: "Tesofensine", category: "Weight Management", pricePerVial: 95, dosesPerVial: 30, typicalDose: "0.25-0.5mg", unit: "capsules" },
  { name: "Fragment 176-191", category: "Weight Management", pricePerVial: 55, dosesPerVial: 20, typicalDose: "250-500mcg", unit: "5mg vial" },
  { name: "5-Amino-1MQ", category: "Weight Management", pricePerVial: 120, dosesPerVial: 30, typicalDose: "50-100mg", unit: "capsules" },
  
  // Cognitive
  { name: "Semax", category: "Cognitive", pricePerVial: 45, dosesPerVial: 30, typicalDose: "200-600mcg", unit: "nasal spray" },
  { name: "Selank", category: "Cognitive", pricePerVial: 50, dosesPerVial: 30, typicalDose: "250-500mcg", unit: "nasal spray" },
  { name: "NA-Semax", category: "Cognitive", pricePerVial: 65, dosesPerVial: 30, typicalDose: "200-400mcg", unit: "nasal spray" },
  { name: "Dihexa", category: "Cognitive", pricePerVial: 85, dosesPerVial: 30, typicalDose: "10-20mg", unit: "capsules" },
  { name: "Noopept", category: "Cognitive", pricePerVial: 35, dosesPerVial: 60, typicalDose: "10-30mg", unit: "capsules" },
  { name: "Cerebrolysin", category: "Cognitive", pricePerVial: 120, dosesPerVial: 10, typicalDose: "5-10ml", unit: "10ml ampoule" },
  
  // Immune
  { name: "Thymosin Alpha-1", category: "Immune", pricePerVial: 85, dosesPerVial: 10, typicalDose: "1.6mg", unit: "10mg vial" },
  { name: "Thymalin", category: "Immune", pricePerVial: 75, dosesPerVial: 10, typicalDose: "10mg", unit: "100mg vial" },
  { name: "LL-37", category: "Immune", pricePerVial: 95, dosesPerVial: 20, typicalDose: "50-100mcg", unit: "5mg vial" },
  { name: "KPV", category: "Immune", pricePerVial: 65, dosesPerVial: 30, typicalDose: "200-400mcg", unit: "capsules" },
  
  // Longevity
  { name: "Epithalon", category: "Longevity", pricePerVial: 75, dosesPerVial: 10, typicalDose: "5-10mg", unit: "50mg vial" },
  { name: "MOTS-c", category: "Longevity", pricePerVial: 95, dosesPerVial: 10, typicalDose: "5-10mg", unit: "10mg vial" },
  { name: "Humanin", category: "Longevity", pricePerVial: 110, dosesPerVial: 10, typicalDose: "1-5mg", unit: "10mg vial" },
  { name: "NAD+ (injection)", category: "Longevity", pricePerVial: 150, dosesPerVial: 5, typicalDose: "100-500mg", unit: "500mg vial" },
  { name: "NMN", category: "Longevity", pricePerVial: 85, dosesPerVial: 30, typicalDose: "250-1000mg", unit: "capsules" },
  { name: "Rapamycin", category: "Longevity", pricePerVial: 120, dosesPerVial: 12, typicalDose: "3-6mg", unit: "tablets" },
  
  // Sexual Health
  { name: "PT-141", category: "Sexual Health", pricePerVial: 65, dosesPerVial: 10, typicalDose: "1-2mg", unit: "10mg vial" },
  { name: "Melanotan II", category: "Sexual Health", pricePerVial: 45, dosesPerVial: 20, typicalDose: "0.25-0.5mg", unit: "10mg vial" },
  { name: "Kisspeptin-10", category: "Sexual Health", pricePerVial: 85, dosesPerVial: 10, typicalDose: "1-2mg", unit: "10mg vial" },
  
  // Sleep
  { name: "DSIP", category: "Sleep", pricePerVial: 55, dosesPerVial: 20, typicalDose: "100-200mcg", unit: "5mg vial" },
  { name: "Epitalon", category: "Sleep", pricePerVial: 75, dosesPerVial: 10, typicalDose: "5-10mg", unit: "50mg vial" },
];

const frequencyOptions = [
  { label: "Once daily", multiplier: 7 },
  { label: "Twice daily", multiplier: 14 },
  { label: "Three times daily", multiplier: 21 },
  { label: "Once weekly", multiplier: 1 },
  { label: "Twice weekly", multiplier: 2 },
  { label: "Three times weekly", multiplier: 3 },
  { label: "Every other day", multiplier: 3.5 },
  { label: "5 days on, 2 off", multiplier: 5 },
];

export default function CostCalculator() {
  usePageTitle(
    "Cost Calculator - Peptide Therapy Pricing",
    "Estimate peptide therapy costs with our interactive calculator. Compare prices, calculate monthly expenses, and plan treatment budgets for 40+ peptides."
  );

  const [selections, setSelections] = useState<PeptideSelection[]>([]);
  const [showSavings, setShowSavings] = useState(false);

  const addPeptide = () => {
    setSelections([
      ...selections,
      {
        id: Date.now().toString(),
        peptide: "",
        quantity: 1,
        frequency: "Once daily",
        duration: 8,
      },
    ]);
  };

  const removePeptide = (id: string) => {
    setSelections(selections.filter((s) => s.id !== id));
  };

  const updateSelection = (id: string, field: keyof PeptideSelection, value: any) => {
    setSelections(
      selections.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const calculations = useMemo(() => {
    return selections.map((selection) => {
      const peptide = peptideDatabase.find((p) => p.name === selection.peptide);
      if (!peptide) return { ...selection, weeklyDoses: 0, vialsNeeded: 0, totalCost: 0, monthlyCost: 0 };

      const freq = frequencyOptions.find((f) => f.label === selection.frequency);
      const weeklyDoses = freq ? freq.multiplier : 7;
      const totalDoses = weeklyDoses * selection.duration;
      const vialsNeeded = Math.ceil(totalDoses / peptide.dosesPerVial);
      const totalCost = vialsNeeded * peptide.pricePerVial;
      const monthlyCost = (totalCost / selection.duration) * 4;

      return {
        ...selection,
        peptideData: peptide,
        weeklyDoses,
        totalDoses,
        vialsNeeded,
        totalCost,
        monthlyCost,
      };
    });
  }, [selections]);

  const totals = useMemo(() => {
    return calculations.reduce(
      (acc, calc) => ({
        totalCost: acc.totalCost + (calc.totalCost || 0),
        monthlyCost: acc.monthlyCost + (calc.monthlyCost || 0),
      }),
      { totalCost: 0, monthlyCost: 0 }
    );
  }, [calculations]);

  const categories = [...new Set(peptideDatabase.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Calculator className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Peptide Cost Calculator</h1>
              <p className="text-xl text-white/90">
                Estimate treatment costs and plan your peptide therapy budget
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">{peptideDatabase.length}+</div>
              <div className="text-white/80 text-sm">Peptides Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">{categories.length}</div>
              <div className="text-white/80 text-sm">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">Real-Time</div>
              <div className="text-white/80 text-sm">Cost Estimates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">Export</div>
              <div className="text-white/80 text-sm">Treatment Plans</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Calculator */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add Peptides */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Build Your Protocol</h2>
                <button
                  onClick={addPeptide}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Peptide
                </button>
              </div>

              {selections.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>No peptides added yet. Click "Add Peptide" to start calculating costs.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {selections.map((selection, index) => (
                    <div
                      key={selection.id}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-lg font-semibold text-emerald-600">
                          Peptide #{index + 1}
                        </span>
                        <button
                          onClick={() => removePeptide(selection.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Peptide
                          </label>
                          <select
                            value={selection.peptide}
                            onChange={(e) =>
                              updateSelection(selection.id, "peptide", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          >
                            <option value="">Select peptide...</option>
                            {categories.map((category) => (
                              <optgroup key={category} label={category}>
                                {peptideDatabase
                                  .filter((p) => p.category === category)
                                  .map((p) => (
                                    <option key={p.name} value={p.name}>
                                      {p.name} (${p.pricePerVial}/{p.unit})
                                    </option>
                                  ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Frequency
                          </label>
                          <select
                            value={selection.frequency}
                            onChange={(e) =>
                              updateSelection(selection.id, "frequency", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          >
                            {frequencyOptions.map((f) => (
                              <option key={f.label} value={f.label}>
                                {f.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Duration (weeks)
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="52"
                            value={selection.duration}
                            onChange={(e) =>
                              updateSelection(
                                selection.id,
                                "duration",
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Estimated Cost
                          </label>
                          <div className="px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 font-semibold">
                            ${calculations[index]?.totalCost?.toFixed(2) || "0.00"}
                          </div>
                        </div>
                      </div>

                      {calculations[index]?.peptideData && (
                        <div className="mt-4 text-sm text-gray-600 grid grid-cols-2 md:grid-cols-4 gap-2">
                          <div>
                            <span className="font-medium">Typical dose:</span>{" "}
                            {calculations[index].peptideData.typicalDose}
                          </div>
                          <div>
                            <span className="font-medium">Doses/vial:</span>{" "}
                            {calculations[index].peptideData.dosesPerVial}
                          </div>
                          <div>
                            <span className="font-medium">Vials needed:</span>{" "}
                            {calculations[index].vialsNeeded}
                          </div>
                          <div>
                            <span className="font-medium">Monthly cost:</span> $
                            {calculations[index].monthlyCost?.toFixed(2)}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Pricing Disclaimer</h3>
              <p className="text-amber-800 text-sm">
                These are estimated costs based on typical market pricing. Actual costs may vary
                based on supplier, quality, quantity discounts, and geographic location. Always
                source peptides from reputable, quality-tested suppliers. Consult with a
                healthcare provider before starting any peptide therapy.
              </p>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 text-emerald-600 mr-2" />
                Cost Summary
              </h2>

              {selections.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Add peptides to see cost breakdown
                </p>
              ) : (
                <div className="space-y-6">
                  {/* Individual Peptide Costs */}
                  <div className="space-y-3">
                    {calculations.map((calc, index) =>
                      calc.peptideData ? (
                        <div
                          key={calc.id}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-gray-600">{calc.peptide}</span>
                          <span className="font-medium">${calc.totalCost.toFixed(2)}</span>
                        </div>
                      ) : null
                    )}
                  </div>

                  <hr />

                  {/* Totals */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Protocol Cost</span>
                      <span className="text-2xl font-bold text-emerald-600">
                        ${totals.totalCost.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Est. Monthly Cost</span>
                      <span className="text-lg font-semibold text-gray-900">
                        ${totals.monthlyCost.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Savings Toggle */}
                  <button
                    onClick={() => setShowSavings(!showSavings)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-emerald-200 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <TrendingDown className="w-4 h-4" />
                    {showSavings ? "Hide" : "Show"} Savings Tips
                  </button>

                  {showSavings && (
                    <div className="bg-emerald-50 rounded-lg p-4 text-sm text-emerald-800 space-y-2">
                      <p>
                        <strong>💡 Bulk Discounts:</strong> Many suppliers offer 10-20% off for
                        3+ vials
                      </p>
                      <p>
                        <strong>💡 Combo Products:</strong> Pre-mixed blends often cost less than
                        separate vials
                      </p>
                      <p>
                        <strong>💡 Subscription:</strong> Monthly subscriptions can save 15-25%
                      </p>
                      <p>
                        <strong>💡 Quality Matters:</strong> Cheaper isn't always better - verify
                        third-party testing
                      </p>
                    </div>
                  )}

                  {/* DrsPeptides CTA */}
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg p-4 text-white">
                    <h3 className="font-semibold mb-2">Quality Peptides from DrsPeptides</h3>
                    <p className="text-sm text-white/90 mb-3">
                      Third-party tested, pharmaceutical-grade peptides with fast shipping.
                    </p>
                    <a
                      href="https://drspeptides.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-4 py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Shop DrsPeptides →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Peptide Education Hub. For educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
