import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { useState, useMemo } from "react";
import { ArrowLeft, Beaker, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import PrintButton from "@/components/PrintButton";

const commonPeptides = [
  // Tissue Repair
  { name: "BPC-157", vialMg: 5, typicalDoseMcg: 250, note: "250-500 mcg/day" },
  { name: "TB-500", vialMg: 5, typicalDoseMcg: 2000, note: "2-5 mg 2x/week" },
  { name: "GHK-Cu", vialMg: 50, typicalDoseMcg: 1000, note: "1-2 mg/day" },
  // GH Secretagogues
  { name: "Ipamorelin", vialMg: 5, typicalDoseMcg: 200, note: "200-300 mcg 2-3x/day" },
  { name: "CJC-1295 (no DAC)", vialMg: 2, typicalDoseMcg: 100, note: "100-200 mcg 2-3x/week" },
  { name: "CJC-1295/Ipamorelin", vialMg: 6, typicalDoseMcg: 300, note: "300 mcg before bed" },
  { name: "Sermorelin", vialMg: 6, typicalDoseMcg: 300, note: "200-500 mcg/day" },
  { name: "Tesamorelin", vialMg: 2, typicalDoseMcg: 2000, note: "2 mg/day" },
  { name: "Hexarelin", vialMg: 5, typicalDoseMcg: 200, note: "100-200 mcg 2-3x/day" },
  { name: "GHRP-2", vialMg: 5, typicalDoseMcg: 200, note: "100-300 mcg 2-3x/day" },
  { name: "GHRP-6", vialMg: 5, typicalDoseMcg: 200, note: "100-300 mcg 2-3x/day" },
  // Weight Management
  { name: "Semaglutide", vialMg: 5, typicalDoseMcg: 250, note: "0.25-2.4 mg/week" },
  { name: "Tirzepatide", vialMg: 30, typicalDoseMcg: 2500, note: "2.5-15 mg/week" },
  { name: "Retatrutide", vialMg: 30, typicalDoseMcg: 1000, note: "1-12 mg/week" },
  { name: "AOD-9604", vialMg: 5, typicalDoseMcg: 300, note: "300 mcg/day" },
  { name: "Fragment 176-191", vialMg: 5, typicalDoseMcg: 250, note: "250-500 mcg/day" },
  // Longevity
  { name: "Epithalon", vialMg: 10, typicalDoseMcg: 5000, note: "5-10 mg/day x 10-20 days" },
  { name: "MOTS-c", vialMg: 10, typicalDoseMcg: 5000, note: "5-10 mg 3x/week" },
  { name: "Humanin", vialMg: 10, typicalDoseMcg: 3000, note: "1-5 mg/day" },
  { name: "SS-31", vialMg: 50, typicalDoseMcg: 5000, note: "5-40 mg/day" },
  // Immune
  { name: "Thymosin Alpha-1", vialMg: 10, typicalDoseMcg: 1600, note: "1.6 mg 2x/week" },
  { name: "LL-37", vialMg: 5, typicalDoseMcg: 100, note: "50-100 mcg/day" },
  // Cognitive
  { name: "Semax", vialMg: 3, typicalDoseMcg: 300, note: "200-600 mcg intranasal" },
  { name: "Selank", vialMg: 3, typicalDoseMcg: 250, note: "250-500 mcg intranasal" },
  // Sexual Health
  { name: "PT-141", vialMg: 10, typicalDoseMcg: 1000, note: "1-2 mg as needed" },
  { name: "Kisspeptin-10", vialMg: 10, typicalDoseMcg: 1000, note: "1-2 mg SC" },
  // Sleep
  { name: "DSIP", vialMg: 5, typicalDoseMcg: 100, note: "100-200 mcg before bed" },
  // Muscle & Recovery
  { name: "IGF-1 LR3", vialMg: 1, typicalDoseMcg: 40, note: "20-50 mcg/day" },
  { name: "MGF", vialMg: 5, typicalDoseMcg: 200, note: "200-400 mcg post-workout" },
  { name: "Follistatin", vialMg: 1, typicalDoseMcg: 100, note: "100 mcg/day" },
  // Skin
  { name: "Melanotan II", vialMg: 10, typicalDoseMcg: 250, note: "0.25-0.5 mg/day" },
  // Gut Health
  { name: "VIP", vialMg: 5, typicalDoseMcg: 50, note: "50-100 mcg intranasal" },
  // Neuroprotection
  { name: "Cerebrolysin", vialMg: 215, typicalDoseMcg: 5000, note: "5-10 ml IM" },
  { name: "NAD+ (injection)", vialMg: 500, typicalDoseMcg: 100000, note: "100-500 mg SC/IV" },
];

export default function ReconstitutionCalculatorPage() {
  const [vialSize, setVialSize] = useState<number>(5);
  const [waterVolume, setWaterVolume] = useState<number>(2);
  const [desiredDoseMcg, setDesiredDoseMcg] = useState<number>(250);
  const [syringeSize, setSyringeSize] = useState<number>(100);

  const results = useMemo(() => {
    if (vialSize <= 0 || waterVolume <= 0 || desiredDoseMcg <= 0) return null;

    const vialMcg = vialSize * 1000;
    const concentrationMcgPerMl = vialMcg / waterVolume;
    const injectionVolumeMl = desiredDoseMcg / concentrationMcgPerMl;
    const syringeUnits = injectionVolumeMl * syringeSize;
    const dosesPerVial = Math.floor(vialMcg / desiredDoseMcg);

    return {
      concentrationMcgPerMl,
      concentrationMgPerMl: concentrationMcgPerMl / 1000,
      injectionVolumeMl,
      syringeUnits,
      dosesPerVial,
    };
  }, [vialSize, waterVolume, desiredDoseMcg, syringeSize]);

  const applyPreset = (preset: typeof commonPeptides[0]) => {
    setVialSize(preset.vialMg);
    setDesiredDoseMcg(preset.typicalDoseMcg);
  };

  return (
    <>
      <Helmet>
        <title>Reconstitution Calculator - Peptide Mixing Guide | Peptide Education Hub</title>
        <meta name="description" content="Calculate exact bacteriostatic water volume, syringe units, and concentration for peptide reconstitution. Supports all common peptides with preset values." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Reconstitution Calculator' }]} />
          
          <div className="mb-8">
<h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Reconstitution Calculator
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              Calculate the exact concentration, injection volume, and syringe units for peptide reconstitution. 
              Results update in real-time as you adjust values.
            </p>
            <div className="mt-4">
              <PrintButton title="Reconstitution Calculator Results" subtitle="Peptide Education Hub" />
            </div>
          </div>

          {/* Quick Presets */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Quick Presets</h2>
            <div className="flex flex-wrap gap-2">
              {commonPeptides.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className="px-3 py-1.5 text-sm bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-teal-600" />
                  Reconstitution Parameters
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Peptide Vial Size (mg)
                    </label>
                    <input
                      type="number"
                      value={vialSize}
                      onChange={(e) => setVialSize(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      min="0"
                      step="0.5"
                    />
                    <p className="text-xs text-slate-500 mt-1">Total peptide content in the vial (e.g., 5mg, 10mg)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Bacteriostatic Water (mL)
                    </label>
                    <input
                      type="number"
                      value={waterVolume}
                      onChange={(e) => setWaterVolume(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      min="0"
                      step="0.5"
                    />
                    <p className="text-xs text-slate-500 mt-1">Amount of BAC water to add (common: 1mL, 2mL, 3mL)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Desired Dose per Injection (mcg)
                    </label>
                    <input
                      type="number"
                      value={desiredDoseMcg}
                      onChange={(e) => setDesiredDoseMcg(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      min="0"
                      step="10"
                    />
                    <p className="text-xs text-slate-500 mt-1">Your target dose in micrograms (1mg = 1000mcg)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Syringe Size
                    </label>
                    <select
                      value={syringeSize}
                      onChange={(e) => setSyringeSize(parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value={30}>0.3 mL (30 unit) insulin syringe</option>
                      <option value={50}>0.5 mL (50 unit) insulin syringe</option>
                      <option value={100}>1.0 mL (100 unit) insulin syringe</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {results ? (
                <>
                  <div className="bg-teal-50 dark:bg-teal-950 rounded-xl border border-teal-200 dark:border-teal-800 p-6">
                    <h2 className="text-xl font-semibold text-teal-900 dark:text-teal-100 mb-6">
                      Results
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-teal-200 dark:border-teal-800">
                        <span className="text-teal-800 dark:text-teal-200">Concentration</span>
                        <span className="text-xl font-bold text-teal-900 dark:text-teal-100">
                          {results.concentrationMgPerMl.toFixed(2)} mg/mL
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b border-teal-200 dark:border-teal-800">
                        <span className="text-teal-800 dark:text-teal-200">Injection Volume</span>
                        <span className="text-xl font-bold text-teal-900 dark:text-teal-100">
                          {results.injectionVolumeMl.toFixed(3)} mL
                        </span>
                      </div>

                      <div className="bg-teal-100 dark:bg-teal-900 rounded-lg p-4">
                        <div className="text-center">
                          <p className="text-sm text-teal-700 dark:text-teal-300 mb-1">Draw to this mark on your syringe</p>
                          <p className="text-3xl font-bold text-teal-900 dark:text-teal-100">
                            {results.syringeUnits.toFixed(1)} units
                          </p>
                          <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                            on a {syringeSize}-unit ({(syringeSize / 100).toFixed(1)} mL) syringe
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-teal-200 dark:border-teal-800">
                        <span className="text-teal-800 dark:text-teal-200">Doses Per Vial</span>
                        <span className="text-xl font-bold text-teal-900 dark:text-teal-100">
                          {results.dosesPerVial}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Syringe */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Visual Syringe Guide</h3>
                    <div className="flex flex-col items-center">
                      {/* SVG Syringe */}
                      <svg viewBox="0 0 120 320" className="w-24 h-64 mb-4">
                        {/* Plunger */}
                        <rect x="45" y="5" width="30" height="15" rx="3" fill="#94a3b8" />
                        <rect x="57" y="20" width="6" height={Math.max(0, (1 - Math.min(results.syringeUnits / syringeSize, 1)) * 200)} fill="#94a3b8" />
                        {/* Barrel */}
                        <rect x="35" y="20" width="50" height="220" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                        {/* Fluid fill */}
                        <rect 
                          x="37" 
                          y={22 + (1 - Math.min(results.syringeUnits / syringeSize, 1)) * 216} 
                          width="46" 
                          height={Math.min(results.syringeUnits / syringeSize, 1) * 216} 
                          fill="#14b8a6" 
                          opacity="0.6" 
                          rx="2"
                        />
                        {/* Tick marks */}
                        {[0, 0.25, 0.5, 0.75, 1].map((frac, i) => (
                          <g key={i}>
                            <line x1="35" y1={22 + (1 - frac) * 216} x2="28" y2={22 + (1 - frac) * 216} stroke="#64748b" strokeWidth="1.5" />
                            <text x="24" y={26 + (1 - frac) * 216} textAnchor="end" fontSize="10" fill="#64748b">
                              {Math.round(frac * syringeSize)}
                            </text>
                          </g>
                        ))}
                        {/* Dose marker arrow */}
                        {results.syringeUnits <= syringeSize && (
                          <g>
                            <line x1="85" y1={22 + (1 - results.syringeUnits / syringeSize) * 216} x2="95" y2={22 + (1 - results.syringeUnits / syringeSize) * 216} stroke="#ef4444" strokeWidth="2" />
                            <polygon points={`95,${22 + (1 - results.syringeUnits / syringeSize) * 216 - 4} 95,${22 + (1 - results.syringeUnits / syringeSize) * 216 + 4} 89,${22 + (1 - results.syringeUnits / syringeSize) * 216}`} fill="#ef4444" />
                            <text x="98" y={26 + (1 - results.syringeUnits / syringeSize) * 216} fontSize="11" fill="#ef4444" fontWeight="bold">
                              {results.syringeUnits.toFixed(1)}u
                            </text>
                          </g>
                        )}
                        {/* Needle */}
                        <rect x="57" y="240" width="6" height="30" fill="#94a3b8" />
                        <polygon points="57,270 63,270 60,290" fill="#94a3b8" />
                      </svg>
                      <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                        Draw to <span className="font-bold text-teal-600">{results.syringeUnits.toFixed(1)} units</span> on your {(syringeSize / 100).toFixed(1)}mL syringe
                      </p>
                    </div>

                    {/* Also keep the horizontal bar for quick reference */}
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-xs text-slate-500 mb-2">Linear scale</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="relative h-8 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="absolute left-0 top-0 h-full bg-teal-500 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min((results.syringeUnits / syringeSize) * 100, 100)}%` }}
                            />
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-slate-500">
                            <span>0</span>
                            <span>{Math.round(syringeSize * 0.25)}</span>
                            <span>{Math.round(syringeSize * 0.5)}</span>
                            <span>{Math.round(syringeSize * 0.75)}</span>
                            <span>{syringeSize}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-teal-600">{results.syringeUnits.toFixed(1)}u</span>
                        </div>
                      </div>
                      {results.syringeUnits > syringeSize && (
                        <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Dose exceeds syringe capacity. Use a larger syringe or add less water.
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8 text-center">
                  <Beaker className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-500">Enter valid values to see results</p>
                </div>
              )}

              {/* Common Concentrations Reference */}
              <div className="bg-blue-50 dark:bg-blue-950 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Common Reconstitution Reference</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-blue-800 dark:text-blue-200">
                        <th className="pb-2">Vial</th>
                        <th className="pb-2">Water</th>
                        <th className="pb-2">Concentration</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-700 dark:text-blue-300">
                      <tr><td className="py-1">5mg</td><td>1 mL</td><td>5 mg/mL (500mcg per 10 units)</td></tr>
                      <tr><td className="py-1">5mg</td><td>2 mL</td><td>2.5 mg/mL (250mcg per 10 units)</td></tr>
                      <tr><td className="py-1">5mg</td><td>3 mL</td><td>1.67 mg/mL (167mcg per 10 units)</td></tr>
                      <tr><td className="py-1">10mg</td><td>2 mL</td><td>5 mg/mL (500mcg per 10 units)</td></tr>
                      <tr><td className="py-1">10mg</td><td>3 mL</td><td>3.33 mg/mL (333mcg per 10 units)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="mt-8 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900 dark:text-amber-100">
                <p className="font-semibold mb-1">Important Safety Information</p>
                <p>This calculator is for educational purposes only. Always verify calculations, use sterile technique for reconstitution, 
                store reconstituted peptides at 2-8°C, and follow proper medical protocols. Consult manufacturer guidelines for specific peptides.</p>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mt-8 bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Quick Reference Guide
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Insulin Syringe Conversions</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>10 units = 0.1 mL</li>
                  <li>25 units = 0.25 mL</li>
                  <li>50 units = 0.5 mL</li>
                  <li>100 units = 1.0 mL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Unit Conversions</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>1 mg = 1,000 mcg</li>
                  <li>1 mL = 1 cc</li>
                  <li>1 IU = varies by peptide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Storage Guidelines</h4>
                <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Lyophilized: Room temp or fridge</li>
                  <li>Reconstituted: 2-8°C (fridge)</li>
                  <li>Typical shelf life: 28-30 days</li>
                </ul>
              </div>
            </div>
          </div>
        </main>


        <BackToTop />
      </div>
    </>
  );
}
