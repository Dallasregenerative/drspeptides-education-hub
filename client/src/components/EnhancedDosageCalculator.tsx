import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Download, Plus, X, AlertCircle } from 'lucide-react';

interface PeptideInput {
  id: string;
  name: string;
  vialSize: string;
  water: string;
  dose: string;
}

const peptidePresets: Record<string, { vialSize: string; water: string; dose: string }> = {
  'BPC-157': { vialSize: '5', water: '2', dose: '0.25' },
  'TB-500': { vialSize: '5', water: '2', dose: '2.5' },
  'Semaglutide': { vialSize: '5', water: '2', dose: '0.25' },
  'Tirzepatide': { vialSize: '30', water: '3', dose: '2.5' },
  'CJC-1295': { vialSize: '2', water: '2', dose: '0.1' },
  'Ipamorelin': { vialSize: '5', water: '2', dose: '0.2' },
  'CJC-1295/Ipamorelin': { vialSize: '5', water: '2', dose: '0.3' },
  'Sermorelin': { vialSize: '6', water: '3', dose: '0.3' },
  'Tesamorelin': { vialSize: '30', water: '3', dose: '2' },
  'AOD-9604': { vialSize: '5', water: '2', dose: '0.3' },
  'GHK-Cu': { vialSize: '50', water: '5', dose: '1' },
  'Thymosin Alpha-1': { vialSize: '10', water: '2', dose: '1.6' },
  'LL-37': { vialSize: '5', water: '2', dose: '0.05' },
  'PT-141': { vialSize: '10', water: '2', dose: '1.5' },
  'Epithalon': { vialSize: '50', water: '5', dose: '5' },
  'DSIP': { vialSize: '5', water: '2', dose: '0.1' },
  'Semax': { vialSize: '5', water: '2', dose: '0.5' },
  'Selank': { vialSize: '5', water: '2', dose: '0.25' },
  'MOTS-c': { vialSize: '10', water: '2', dose: '5' },
  'IGF-1 LR3': { vialSize: '1', water: '1', dose: '0.05' },
  'Melanotan II': { vialSize: '10', water: '2', dose: '0.25' },
  'Fragment 176-191': { vialSize: '5', water: '2', dose: '0.25' },
  'GHRP-2': { vialSize: '5', water: '2', dose: '0.1' },
  'GHRP-6': { vialSize: '5', water: '2', dose: '0.1' },
  'Hexarelin': { vialSize: '5', water: '2', dose: '0.1' },
  'KPV': { vialSize: '5', water: '2', dose: '0.2' },
  'NAD+ (injection)': { vialSize: '500', water: '5', dose: '100' },
};

const presetNames = Object.keys(peptidePresets);

export default function EnhancedDosageCalculator() {
  const [peptides, setPeptides] = useState<PeptideInput[]>([
    { id: '1', name: 'BPC-157', vialSize: '5', water: '2', dose: '0.25' }
  ]);
  const [patientWeight, setPatientWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<string>('kg');
  const [frequency, setFrequency] = useState<string>('daily');
  const [syringeType, setSyringeType] = useState<string>('insulin');
  const [results, setResults] = useState<any[]>([]);
  const [validationMessage, setValidationMessage] = useState<string>('');

  const addPeptide = () => {
    setPeptides([...peptides, { 
      id: Date.now().toString(), 
      name: '', 
      vialSize: '', 
      water: '', 
      dose: '' 
    }]);
  };

  const removePeptide = (id: string) => {
    if (peptides.length > 1) {
      setPeptides(peptides.filter(p => p.id !== id));
    }
  };

  const updatePeptide = (id: string, field: keyof PeptideInput, value: string) => {
    setPeptides(peptides.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const calculateAll = () => {
    setValidationMessage('');
    const hasEmptyFields = peptides.some(p => !p.vialSize || !p.water || !p.dose);
    if (hasEmptyFields) {
      setValidationMessage('Please fill in Vial Size, Bacteriostatic Water, and Desired Dose for all peptides before calculating.');
      return;
    }
    const calculatedResults = peptides.map(peptide => {
      const vial = parseFloat(peptide.vialSize);
      const water = parseFloat(peptide.water);
      const dose = parseFloat(peptide.dose);

      if (!vial || !water || !dose) {
        return null;
      }

      // Calculate concentration (mg/mL)
      const concentration = vial / water;

      // Calculate injection volume (mL)
      const injectionVolume = dose / concentration;

      // Calculate syringe units
      const syringeUnits = syringeType === 'insulin' ? injectionVolume * 100 : injectionVolume;

      // Calculate doses per vial
      const dosesPerVial = Math.floor(vial / dose);

      // Calculate vial duration
      let injectionsPerWeek = 7;
      if (frequency === 'eod') injectionsPerWeek = 3.5;
      if (frequency === 'weekly') injectionsPerWeek = 1;
      if (frequency === 'twice-weekly') injectionsPerWeek = 2;

      const vialDuration = Math.floor(dosesPerVial / (injectionsPerWeek / 7));

      // Weight-based calculation
      let weightBasedDose = null;
      if (patientWeight) {
        const weight = parseFloat(patientWeight);
        const weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
        weightBasedDose = {
          perKg: (dose / weightInKg).toFixed(3),
          totalPerKg: weightInKg,
        };
      }

      return {
        name: peptide.name || 'Unnamed Peptide',
        concentration,
        syringeUnits,
        dosesPerVial,
        vialDuration,
        injectionVolume,
        weightBasedDose,
      };
    }).filter(r => r !== null);

    setResults(calculatedResults);
  };

  const generateSchedule = () => {
    if (results.length === 0) return;

    const scheduleData = results.map(result => {
      const days = [];
      let injectionsPerWeek = 7;
      if (frequency === 'eod') injectionsPerWeek = 3.5;
      if (frequency === 'weekly') injectionsPerWeek = 1;
      if (frequency === 'twice-weekly') injectionsPerWeek = 2;

      const totalDays = result.vialDuration;
      const daysBetween = Math.floor(7 / injectionsPerWeek);

      for (let day = 0; day < totalDays; day += daysBetween) {
        days.push({
          day: day + 1,
          dose: result.injectionVolume.toFixed(2),
          units: result.syringeUnits.toFixed(1),
        });
      }

      return {
        peptide: result.name,
        schedule: days.slice(0, 14), // First 2 weeks
      };
    });

    return scheduleData;
  };

  const exportToPDF = () => {
    // Create printable version
    const printContent = `
      <html>
        <head>
          <title>Peptide Dosing Schedule</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #0d9488; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #0d9488; color: white; }
            .warning { background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          </style>
        </head>
        <body>
          <h1>Peptide Dosing Schedule</h1>
          <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Frequency:</strong> ${frequency}</p>
          ${patientWeight ? `<p><strong>Patient Weight:</strong> ${patientWeight} ${weightUnit}</p>` : ''}
          
          ${results.map(result => `
            <h2>${result.name}</h2>
            <table>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Concentration</td>
                <td>${result.concentration.toFixed(2)} mg/mL</td>
              </tr>
              <tr>
                <td>Injection Volume</td>
                <td>${result.injectionVolume.toFixed(2)} mL (${result.syringeUnits.toFixed(1)} units)</td>
              </tr>
              <tr>
                <td>Doses Per Vial</td>
                <td>${result.dosesPerVial}</td>
              </tr>
              <tr>
                <td>Vial Duration</td>
                <td>${result.vialDuration} days</td>
              </tr>
            </table>
          `).join('')}
          
          <div class="warning">
            <strong>⚠️ Important:</strong> This calculator is for educational purposes. Always verify calculations and follow proper medical protocols.
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-6">
      {/* Patient Information */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Information (Optional)</CardTitle>
          <CardDescription>Enter patient weight for weight-based dosing calculations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Patient Weight</Label>
              <Input
                type="number"
                value={patientWeight}
                onChange={(e) => setPatientWeight(e.target.value)}
                placeholder="70"
              />
            </div>
            <div>
              <Label>Weight Unit</Label>
              <Select value={weightUnit} onValueChange={setWeightUnit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">Kilograms (kg)</SelectItem>
                  <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Peptide Inputs */}
      {peptides.map((peptide, index) => (
        <Card key={peptide.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Peptide {index + 1}</CardTitle>
              {peptides.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removePeptide(peptide.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Peptide Name</Label>
              <div className="flex gap-2">
                <Input
                  value={peptide.name}
                  onChange={(e) => updatePeptide(peptide.id, 'name', e.target.value)}
                  placeholder="e.g., BPC-157"
                  className="flex-1"
                />
                <Select
                  value=""
                  onValueChange={(value) => {
                    const preset = peptidePresets[value];
                    if (preset) {
                      setPeptides(peptides.map(p => 
                        p.id === peptide.id ? { ...p, name: value, ...preset } : p
                      ));
                    }
                  }}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Quick fill" />
                  </SelectTrigger>
                  <SelectContent>
                    {presetNames.map(name => (
                      <SelectItem key={name} value={name}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Vial Size (mg)</Label>
                <Input
                  type="number"
                  value={peptide.vialSize}
                  onChange={(e) => updatePeptide(peptide.id, 'vialSize', e.target.value)}
                  placeholder="5"
                />
              </div>
              <div>
                <Label>Bacteriostatic Water (mL)</Label>
                <Input
                  type="number"
                  value={peptide.water}
                  onChange={(e) => updatePeptide(peptide.id, 'water', e.target.value)}
                  placeholder="2"
                />
              </div>
              <div>
                <Label>Desired Dose (mg)</Label>
                <Input
                  type="number"
                  value={peptide.dose}
                  onChange={(e) => updatePeptide(peptide.id, 'dose', e.target.value)}
                  placeholder="0.25"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button onClick={addPeptide} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Another Peptide
      </Button>

      {/* Dosing Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Dosing Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Injection Frequency</Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="eod">Every Other Day (EOD)</SelectItem>
                  <SelectItem value="twice-weekly">Twice Weekly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Syringe Type</Label>
              <Select value={syringeType} onValueChange={setSyringeType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="insulin">Insulin Syringe (100 units = 1mL)</SelectItem>
                  <SelectItem value="standard">Standard Syringe (mL)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Validation Message */}
      {validationMessage && (
        <div className="p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
          <div className="flex gap-2 items-center">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <p className="text-sm text-amber-800 dark:text-amber-200">{validationMessage}</p>
          </div>
        </div>
      )}

      {/* Calculate Button */}
      <div className="flex gap-4">
        <Button onClick={calculateAll} className="flex-1">
          <Calculator className="h-4 w-4 mr-2" />
          Calculate Dosages
        </Button>
        {results.length > 0 && (
          <Button onClick={exportToPDF} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <Card key={index} className="border-teal-200 dark:border-teal-800">
              <CardHeader>
                <CardTitle className="text-teal-600 dark:text-teal-400">{result.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Concentration:</span>
                      <span className="font-semibold">{result.concentration.toFixed(2)} mg/mL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Injection Volume:</span>
                      <span className="font-semibold">{result.injectionVolume.toFixed(3)} mL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Syringe Units:</span>
                      <span className="font-semibold">{result.syringeUnits.toFixed(1)} units</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Doses Per Vial:</span>
                      <span className="font-semibold">{result.dosesPerVial}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Vial Duration:</span>
                      <span className="font-semibold">{result.vialDuration} days</span>
                    </div>
                    {result.weightBasedDose && (
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Dose per kg:</span>
                        <span className="font-semibold">{result.weightBasedDose.perKg} mg/kg</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Visual Syringe Conversion */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Syringe Conversion Guide</p>
                  <div className="space-y-2">
                    {[{label: '0.3mL (30u)', max: 30}, {label: '0.5mL (50u)', max: 50}, {label: '1.0mL (100u)', max: 100}].map(syringe => {
                      const units = result.injectionVolume * syringe.max;
                      const pct = Math.min((units / syringe.max) * 100, 100);
                      const exceeds = units > syringe.max;
                      return (
                        <div key={syringe.label} className="flex items-center gap-3">
                          <span className={`text-xs w-24 text-right ${exceeds ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}>{syringe.label}</span>
                          <div className="flex-1 h-5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden relative">
                            <div 
                              className={`h-full rounded-full transition-all ${exceeds ? 'bg-red-400' : 'bg-teal-500'}`}
                              style={{width: `${pct}%`}}
                            />
                          </div>
                          <span className={`text-xs font-bold w-16 ${exceeds ? 'text-red-500' : 'text-teal-600 dark:text-teal-400'}`}>
                            {exceeds ? 'Too large' : `${units.toFixed(1)}u`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900 dark:text-amber-100">
                  <p className="font-semibold mb-1">Important Safety Information</p>
                  <p>This calculator is for educational purposes only. Always verify calculations, follow proper reconstitution procedures, and adhere to medical protocols. Consult manufacturer guidelines for specific peptides.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
