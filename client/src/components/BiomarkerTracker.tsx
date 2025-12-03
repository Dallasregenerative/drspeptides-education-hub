import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Beaker, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Plus, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BiomarkerEntry {
  date: string;
  marker: string;
  value: number;
  unit: string;
  referenceRange: string;
  status: 'normal' | 'high' | 'low';
}

const biomarkerTemplates = {
  'metabolic-panel': {
    name: 'Comprehensive Metabolic Panel',
    markers: [
      { name: 'Glucose', unit: 'mg/dL', range: '70-100', optimal: 85 },
      { name: 'HbA1c', unit: '%', range: '4.0-5.6', optimal: 5.0 },
      { name: 'Total Cholesterol', unit: 'mg/dL', range: '<200', optimal: 180 },
      { name: 'LDL', unit: 'mg/dL', range: '<100', optimal: 80 },
      { name: 'HDL', unit: 'mg/dL', range: '>40', optimal: 60 },
      { name: 'Triglycerides', unit: 'mg/dL', range: '<150', optimal: 100 },
      { name: 'Creatinine', unit: 'mg/dL', range: '0.7-1.3', optimal: 1.0 },
      { name: 'eGFR', unit: 'mL/min', range: '>60', optimal: 90 }
    ]
  },
  'hormone-panel': {
    name: 'Hormone Panel',
    markers: [
      { name: 'IGF-1', unit: 'ng/mL', range: '115-307', optimal: 200 },
      { name: 'Testosterone (Total)', unit: 'ng/dL', range: '300-1000', optimal: 600 },
      { name: 'Free Testosterone', unit: 'pg/mL', range: '9-30', optimal: 20 },
      { name: 'Estradiol', unit: 'pg/mL', range: '10-40', optimal: 25 },
      { name: 'DHEA-S', unit: 'μg/dL', range: '80-560', optimal: 300 },
      { name: 'Cortisol (AM)', unit: 'μg/dL', range: '6-23', optimal: 15 },
      { name: 'TSH', unit: 'μIU/mL', range: '0.4-4.0', optimal: 2.0 },
      { name: 'Free T3', unit: 'pg/mL', range: '2.3-4.2', optimal: 3.2 }
    ]
  },
  'inflammation-panel': {
    name: 'Inflammation & Immune',
    markers: [
      { name: 'hsCRP', unit: 'mg/L', range: '<1.0', optimal: 0.5 },
      { name: 'ESR', unit: 'mm/hr', range: '<20', optimal: 10 },
      { name: 'Homocysteine', unit: 'μmol/L', range: '<10', optimal: 7 },
      { name: 'Fibrinogen', unit: 'mg/dL', range: '200-400', optimal: 300 },
      { name: 'WBC', unit: 'K/μL', range: '4.0-11.0', optimal: 7.0 },
      { name: 'Neutrophils', unit: '%', range: '40-70', optimal: 55 },
      { name: 'Lymphocytes', unit: '%', range: '20-40', optimal: 30 }
    ]
  },
  'peptide-monitoring': {
    name: 'Peptide Therapy Monitoring',
    markers: [
      { name: 'IGF-1', unit: 'ng/mL', range: '115-307', optimal: 200 },
      { name: 'Glucose (Fasting)', unit: 'mg/dL', range: '70-100', optimal: 85 },
      { name: 'HbA1c', unit: '%', range: '4.0-5.6', optimal: 5.0 },
      { name: 'Insulin (Fasting)', unit: 'μIU/mL', range: '2-20', optimal: 5 },
      { name: 'hsCRP', unit: 'mg/L', range: '<1.0', optimal: 0.5 },
      { name: 'ALT', unit: 'U/L', range: '7-56', optimal: 25 },
      { name: 'AST', unit: 'U/L', range: '10-40', optimal: 25 }
    ]
  }
};

export default function BiomarkerTracker() {
  const [selectedPanel, setSelectedPanel] = useState<string>('');
  const [entries, setEntries] = useState<BiomarkerEntry[]>([
    { date: '2025-01-01', marker: 'IGF-1', value: 180, unit: 'ng/mL', referenceRange: '115-307', status: 'normal' },
    { date: '2025-02-01', marker: 'IGF-1', value: 220, unit: 'ng/mL', referenceRange: '115-307', status: 'normal' },
    { date: '2025-03-01', marker: 'IGF-1', value: 250, unit: 'ng/mL', referenceRange: '115-307', status: 'normal' },
  ]);
  const [newEntry, setNewEntry] = useState<Partial<BiomarkerEntry>>({
    date: new Date().toISOString().split('T')[0]
  });

  const currentPanel = selectedPanel ? biomarkerTemplates[selectedPanel as keyof typeof biomarkerTemplates] : null;

  const addEntry = () => {
    if (newEntry.marker && newEntry.value && newEntry.date) {
      const entry: BiomarkerEntry = {
        ...newEntry as BiomarkerEntry
      };
      setEntries([...entries, entry].sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      ));
      setNewEntry({ date: new Date().toISOString().split('T')[0] });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'high':
        return <TrendingUp className="h-5 w-5 text-red-600" />;
      case 'low':
        return <TrendingDown className="h-5 w-5 text-orange-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800';
      case 'high':
        return 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800';
      case 'low':
        return 'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800';
      default:
        return 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800';
    }
  };

  const igf1Data = entries.filter(e => e.marker === 'IGF-1');

  return (
    <div className="space-y-6">
      {/* Panel Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Beaker className="h-5 w-5" />
            Select Lab Panel
          </CardTitle>
          <CardDescription>
            Choose a pre-configured panel or add custom biomarkers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Lab Panel Template</Label>
            <Select value={selectedPanel} onValueChange={setSelectedPanel}>
              <SelectTrigger>
                <SelectValue placeholder="Select a lab panel..." />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(biomarkerTemplates).map(([key, panel]) => (
                  <SelectItem key={key} value={key}>
                    {panel.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {currentPanel && (
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {currentPanel.name}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {currentPanel.markers.map((marker, index) => (
                  <div key={index} className="text-blue-800 dark:text-blue-200">
                    • {marker.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Trend Visualization */}
      {igf1Data.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>IGF-1 Trend</CardTitle>
            <CardDescription>Track changes over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={igf1Data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis domain={[100, 350]} />
                <Tooltip 
                  labelFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0d9488" 
                  strokeWidth={2} 
                  name="IGF-1 (ng/mL)"
                  dot={{ fill: '#0d9488', r: 5 }}
                />
                {/* Reference range lines */}
                <Line 
                  type="monotone" 
                  data={[
                    { date: igf1Data[0].date, value: 115 },
                    { date: igf1Data[igf1Data.length - 1].date, value: 115 }
                  ]}
                  dataKey="value"
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  name="Lower Limit"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  data={[
                    { date: igf1Data[0].date, value: 307 },
                    { date: igf1Data[igf1Data.length - 1].date, value: 307 }
                  ]}
                  dataKey="value"
                  stroke="#94a3b8"
                  strokeDasharray="5 5"
                  name="Upper Limit"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Add New Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add Lab Result
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>Biomarker</Label>
              {currentPanel ? (
                <Select 
                  value={newEntry.marker} 
                  onValueChange={(value) => {
                    const marker = currentPanel.markers.find(m => m.name === value);
                    setNewEntry({
                      ...newEntry, 
                      marker: value,
                      unit: marker?.unit,
                      referenceRange: marker?.range
                    });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select marker..." />
                  </SelectTrigger>
                  <SelectContent>
                    {currentPanel.markers.map((marker, index) => (
                      <SelectItem key={index} value={marker.name}>
                        {marker.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={newEntry.marker || ''}
                  onChange={(e) => setNewEntry({...newEntry, marker: e.target.value})}
                  placeholder="e.g., IGF-1"
                />
              )}
            </div>
            <div className="space-y-2">
              <Label>Value</Label>
              <Input
                type="number"
                step="0.1"
                value={newEntry.value || ''}
                onChange={(e) => setNewEntry({...newEntry, value: parseFloat(e.target.value)})}
                placeholder="220"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Unit</Label>
              <Input
                value={newEntry.unit || ''}
                onChange={(e) => setNewEntry({...newEntry, unit: e.target.value})}
                placeholder="ng/mL"
              />
            </div>
            <div className="space-y-2">
              <Label>Reference Range</Label>
              <Input
                value={newEntry.referenceRange || ''}
                onChange={(e) => setNewEntry({...newEntry, referenceRange: e.target.value})}
                placeholder="115-307"
              />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select 
                value={newEntry.status} 
                onValueChange={(value: any) => setNewEntry({...newEntry, status: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={addEntry} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Result
          </Button>
        </CardContent>
      </Card>

      {/* Recent Results */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Lab Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {entries.slice(-10).reverse().map((entry, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getStatusColor(entry.status)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(entry.status)}
                    <div>
                      <div className="font-semibold">{entry.marker}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {new Date(entry.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {entry.value} <span className="text-sm font-normal">{entry.unit}</span>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Range: {entry.referenceRange}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clinical Insights */}
      <Card className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle>Clinical Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>IGF-1 Trending Upward:</strong> Patient showing positive response to growth hormone secretagogue protocol. Continue current dosing.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Monitor Glucose:</strong> Consider adding fasting glucose and HbA1c to next panel to assess metabolic effects.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Next Labs Due:</strong> Recommend follow-up panel in 8-12 weeks to assess continued response.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
