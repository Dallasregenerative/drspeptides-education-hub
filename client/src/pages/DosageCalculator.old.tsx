import { useState } from "react";
import EnhancedDosageCalculator from "@/components/EnhancedDosageCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calculator, Beaker, Syringe, Calendar, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function DosageCalculator() {
  usePageTitle("Dosage Calculator - Peptide Reconstitution Tool");
  
  const [vialSize, setVialSize] = useState<string>("");
  const [bacteriostaticWater, setBacteriostaticWater] = useState<string>("");
  const [desiredDose, setDesiredDose] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("daily");
  const [syringeType, setSyringeType] = useState<string>("insulin");
  
  const [results, setResults] = useState<{
    concentration: number;
    syringeUnits: number;
    dosesPerVial: number;
    vialDuration: number;
    injectionVolume: number;
  } | null>(null);

  const calculateDosage = () => {
    const vial = parseFloat(vialSize);
    const water = parseFloat(bacteriostaticWater);
    const dose = parseFloat(desiredDose);

    if (!vial || !water || !dose) {
      alert("Please fill in all required fields");
      return;
    }

    // Calculate concentration (mg/mL)
    const concentration = vial / water;

    // Calculate injection volume (mL) needed for desired dose
    const injectionVolume = dose / concentration;

    // Calculate syringe units (for insulin syringe, 1 unit = 0.01 mL)
    const syringeUnits = syringeType === "insulin" ? injectionVolume * 100 : injectionVolume;

    // Calculate doses per vial
    const dosesPerVial = Math.floor(vial / dose);

    // Calculate vial duration based on frequency
    let injectionsPerWeek = 7; // daily
    if (frequency === "eod") injectionsPerWeek = 3.5;
    if (frequency === "weekly") injectionsPerWeek = 1;
    if (frequency === "twice-weekly") injectionsPerWeek = 2;

    const vialDuration = Math.floor(dosesPerVial / (injectionsPerWeek / 7));

    setResults({
      concentration,
      syringeUnits,
      dosesPerVial,
      vialDuration,
      injectionVolume
    });
  };

  const resetCalculator = () => {
    setVialSize("");
    setBacteriostaticWater("");
    setDesiredDose("");
    setFrequency("daily");
    setSyringeType("insulin");
    setResults(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Dosage Calculator</h1>
            </div>
            <p className="text-xl text-blue-50 mb-6">
              Professional tool for calculating peptide reconstitution, dosing, and injection schedules. 
              Designed for healthcare providers to ensure accurate dosing and optimal patient outcomes.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Beaker className="w-5 h-5 text-blue-600" />
                    Reconstitution Parameters
                  </CardTitle>
                  <CardDescription>Enter vial and reconstitution details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="vialSize">Vial Size (mg)</Label>
                    <Input
                      id="vialSize"
                      type="number"
                      placeholder="e.g., 5"
                      value={vialSize}
                      onChange={(e) => setVialSize(e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Total peptide content in vial</p>
                  </div>

                  <div>
                    <Label htmlFor="water">Bacteriostatic Water (mL)</Label>
                    <Input
                      id="water"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 2.0"
                      value={bacteriostaticWater}
                      onChange={(e) => setBacteriostaticWater(e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Volume of water to add for reconstitution</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Syringe className="w-5 h-5 text-blue-600" />
                    Dosing Parameters
                  </CardTitle>
                  <CardDescription>Enter desired dose and frequency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="dose">Desired Dose (mg)</Label>
                    <Input
                      id="dose"
                      type="number"
                      step="0.01"
                      placeholder="e.g., 0.25"
                      value={desiredDose}
                      onChange={(e) => setDesiredDose(e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Amount per injection</p>
                  </div>

                  <div>
                    <Label htmlFor="frequency">Injection Frequency</Label>
                    <Select value={frequency} onValueChange={setFrequency}>
                      <SelectTrigger id="frequency" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily (7x/week)</SelectItem>
                        <SelectItem value="eod">Every Other Day (3.5x/week)</SelectItem>
                        <SelectItem value="twice-weekly">Twice Weekly (2x/week)</SelectItem>
                        <SelectItem value="weekly">Weekly (1x/week)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="syringe">Syringe Type</Label>
                    <Select value={syringeType} onValueChange={setSyringeType}>
                      <SelectTrigger id="syringe" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="insulin">Insulin Syringe (U-100)</SelectItem>
                        <SelectItem value="standard">Standard Syringe (mL)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button onClick={calculateDosage} className="flex-1 gap-2">
                      <Calculator className="w-4 h-4" />
                      Calculate
                    </Button>
                    <Button onClick={resetCalculator} variant="outline">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-900">
                        <CheckCircle2 className="w-5 h-5" />
                        Calculation Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Concentration</p>
                          <p className="text-2xl font-bold text-blue-600">{results.concentration.toFixed(2)} mg/mL</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Injection Volume</p>
                          <p className="text-2xl font-bold text-blue-600">{results.injectionVolume.toFixed(3)} mL</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Syringe Units</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {syringeType === "insulin" 
                              ? `${results.syringeUnits.toFixed(0)} units`
                              : `${results.syringeUnits.toFixed(2)} mL`
                            }
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Doses Per Vial</p>
                          <p className="text-2xl font-bold text-blue-600">{results.dosesPerVial}</p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <p className="font-semibold text-gray-900">Vial Duration</p>
                        </div>
                        <p className="text-3xl font-bold text-blue-600">{results.vialDuration} days</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Based on {frequency === "daily" ? "daily" : frequency === "eod" ? "every other day" : frequency === "twice-weekly" ? "twice weekly" : "weekly"} injections
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        Administration Instructions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p><strong>Reconstitution:</strong> Add {bacteriostaticWater} mL bacteriostatic water to {vialSize} mg vial. Gently swirl (do not shake).</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p><strong>Dose:</strong> Draw {syringeType === "insulin" ? `${results.syringeUnits.toFixed(0)} units` : `${results.syringeUnits.toFixed(2)} mL`} ({desiredDose} mg) per injection.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p><strong>Frequency:</strong> Inject {frequency === "daily" ? "once daily" : frequency === "eod" ? "every other day" : frequency === "twice-weekly" ? "twice weekly" : "once weekly"}.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p><strong>Storage:</strong> Refrigerate reconstituted vial at 2-8°C. Use within 28 days.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p><strong>Injection site:</strong> Subcutaneous injection in abdomen, thigh, or upper arm. Rotate sites.</p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-600">
                      <Calculator className="w-5 h-5" />
                      Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-400">
                      <Calculator className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>Enter parameters and click Calculate to see results</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <AlertTriangle className="w-5 h-5" />
                    Important Safety Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-amber-900">
                  <p>• This calculator is for educational purposes and professional use only</p>
                  <p>• Always verify calculations before administering medication</p>
                  <p>• Follow proper aseptic technique during reconstitution</p>
                  <p>• Discard vial if solution is cloudy or contains particles</p>
                  <p>• Consult prescribing information for specific peptide guidelines</p>
                  <p>• Monitor patients for adverse reactions</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reference Guide */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Reference Guide</CardTitle>
              <CardDescription>Common reconstitution ratios and conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Common Vial Sizes</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• 2 mg (2000 mcg)</li>
                    <li>• 5 mg (5000 mcg)</li>
                    <li>• 10 mg (10000 mcg)</li>
                    <li>• 15 mg (15000 mcg)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Water Volumes</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• 1.0 mL (easy math)</li>
                    <li>• 2.0 mL (standard)</li>
                    <li>• 2.5 mL (dilute)</li>
                    <li>• 3.0 mL (very dilute)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Syringe Conversions</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• 10 units = 0.1 mL</li>
                    <li>• 25 units = 0.25 mL</li>
                    <li>• 50 units = 0.5 mL</li>
                    <li>• 100 units = 1.0 mL</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Professional dosage calculator for healthcare providers. For educational and clinical use only. 
            Always verify calculations and follow proper medical protocols.
          </p>
        </div>
      </footer>
    </div>
  );
}
