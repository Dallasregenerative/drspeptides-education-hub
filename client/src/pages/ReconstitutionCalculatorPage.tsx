import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function ReconstitutionCalculatorPage() {
  const [vialSize, setVialSize] = useState<number>(5);
  const [desiredConcentration, setDesiredConcentration] = useState<number>(250);
  const [waterVolume, setWaterVolume] = useState<number>(0);

  const calculateWater = () => {
    if (vialSize > 0 && desiredConcentration > 0) {
      const volume = (vialSize / desiredConcentration) * 1000;
      setWaterVolume(parseFloat(volume.toFixed(2)));
    }
  };

  return (
    <>
      <Helmet>
        <title>Peptide Reconstitution Calculator | DrsPeptides</title>
        <meta name="description" content="Calculate exact bacteriostatic water volume needed for peptide reconstitution" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <Navigation />
        
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Reconstitution Calculator</h1>
          <p className="text-xl text-slate-600 mb-8">Calculate the exact amount of bacteriostatic water needed</p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Peptide Vial Size (mg)</label>
                <input
                  type="number"
                  value={vialSize}
                  onChange={(e) => setVialSize(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="e.g., 5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Desired Concentration (mcg per 0.1ml)</label>
                <input
                  type="number"
                  value={desiredConcentration}
                  onChange={(e) => setDesiredConcentration(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="e.g., 250"
                />
              </div>

              <button
                onClick={calculateWater}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Calculate
              </button>

              {waterVolume > 0 && (
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-2">Result:</h3>
                  <p className="text-2xl font-bold text-green-700">{waterVolume} ml</p>
                  <p className="text-sm mt-2">of bacteriostatic water needed</p>
                </div>
              )}

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="font-bold mb-3">Common Concentrations:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 250 mcg per 0.1ml (2.5mg/ml)</li>
                  <li>• 500 mcg per 0.1ml (5mg/ml)</li>
                  <li>• 100 mcg per 0.1ml (1mg/ml)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 DrsPeptides Education Hub</p>
          </div>
        </footer>
      </div>
    </>
  );
}
