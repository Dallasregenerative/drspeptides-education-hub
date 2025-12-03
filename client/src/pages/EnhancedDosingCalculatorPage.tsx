import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function EnhancedDosingCalculatorPage() {
  const [bodyWeight, setBodyWeight] = useState<number>(70);
  const [dosePerKg, setDosePerKg] = useState<number>(5);
  const [frequency, setFrequency] = useState<number>(7);
  const [cycleDays, setCycleDays] = useState<number>(30);
  const [costPerVial, setCostPerVial] = useState<number>(50);
  const [mgPerVial, setMgPerVial] = useState<number>(5);

  const calculateDosing = () => {
    const dailyDose = (bodyWeight * dosePerKg) / 1000; // in mg
    const weeklyDose = dailyDose * frequency;
    const cycleDose = (dailyDose * frequency * cycleDays) / 7;
    const vialsNeeded = Math.ceil(cycleDose / mgPerVial);
    const cycleCost = vialsNeeded * costPerVial;

    return {
      dailyDose: dailyDose.toFixed(2),
      weeklyDose: weeklyDose.toFixed(2),
      cycleDose: cycleDose.toFixed(2),
      vialsNeeded,
      cycleCost: cycleCost.toFixed(2)
    };
  };

  const results = calculateDosing();

  return (
    <>
      <Helmet>
        <title>Enhanced Dosing Calculator | DrsPeptides</title>
        <meta name="description" content="Calculate personalized peptide dosing based on body weight and cycle cost" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <Navigation />
        
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Enhanced Dosing Calculator</h1>
          <p className="text-xl text-slate-600 mb-8">Calculate personalized dosing and cycle costs</p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Body Weight (kg)</label>
                <input
                  type="number"
                  value={bodyWeight}
                  onChange={(e) => setBodyWeight(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Dose per kg (mcg)</label>
                <input
                  type="number"
                  value={dosePerKg}
                  onChange={(e) => setDosePerKg(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Frequency (times/week)</label>
                <input
                  type="number"
                  value={frequency}
                  onChange={(e) => setFrequency(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cycle Length (days)</label>
                <input
                  type="number"
                  value={cycleDays}
                  onChange={(e) => setCycleDays(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cost per Vial ($)</label>
                <input
                  type="number"
                  value={costPerVial}
                  onChange={(e) => setCostPerVial(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">mg per Vial</label>
                <input
                  type="number"
                  value={mgPerVial}
                  onChange={(e) => setMgPerVial(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Dosing Results:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Daily Dose</p>
                    <p className="text-2xl font-bold text-blue-700">{results.dailyDose} mg</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Weekly Dose</p>
                    <p className="text-2xl font-bold text-blue-700">{results.weeklyDose} mg</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Cycle Information:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Total Cycle Dose</p>
                    <p className="text-xl font-bold text-green-700">{results.cycleDose} mg</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Vials Needed</p>
                    <p className="text-xl font-bold text-green-700">{results.vialsNeeded}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Cycle Cost</p>
                    <p className="text-xl font-bold text-green-700">${results.cycleCost}</p>
                  </div>
                </div>
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
