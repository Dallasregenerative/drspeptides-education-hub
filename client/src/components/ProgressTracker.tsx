import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, TrendingDown, Minus, Plus, Calendar, Download, Trash2, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProgressEntry {
  id: string;
  date: string;
  weight: number;
  bodyFat?: number;
  energy: number;
  mood: number;
  sleep: number;
  sideEffects: string;
  notes: string;
}

const STORAGE_KEY = 'pepedhub-progress-tracker';

const sampleData: ProgressEntry[] = [
  { id: 's1', date: '2026-01-01', weight: 220, bodyFat: 28, energy: 5, mood: 6, sleep: 6.5, sideEffects: 'None', notes: 'Starting protocol' },
  { id: 's2', date: '2026-01-08', weight: 218, bodyFat: 27.5, energy: 6, mood: 7, sleep: 7, sideEffects: 'Mild nausea', notes: 'Feeling better' },
  { id: 's3', date: '2026-01-15', weight: 215, bodyFat: 27, energy: 7, mood: 7, sleep: 7.5, sideEffects: 'None', notes: 'Energy improving' },
  { id: 's4', date: '2026-01-22', weight: 212, bodyFat: 26, energy: 8, mood: 8, sleep: 8, sideEffects: 'None', notes: 'Great progress' },
  { id: 's5', date: '2026-01-29', weight: 210, bodyFat: 25.5, energy: 8, mood: 8, sleep: 8, sideEffects: 'None', notes: 'On track' },
  { id: 's6', date: '2026-02-05', weight: 207, bodyFat: 25, energy: 9, mood: 9, sleep: 8, sideEffects: 'None', notes: 'Excellent results' },
];

function loadEntries(): { entries: ProgressEntry[]; isDemo: boolean } {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { entries: parsed, isDemo: false };
    }
  } catch (e) {
    console.error('Failed to load progress data:', e);
  }
  return { entries: sampleData, isDemo: true };
}

function saveEntries(entries: ProgressEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (e) {
    console.error('Failed to save progress data:', e);
  }
}

export default function ProgressTracker() {
  const [isDemo, setIsDemo] = useState(true);
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [newEntry, setNewEntry] = useState<Partial<ProgressEntry>>({
    date: new Date().toISOString().split('T')[0],
    energy: 5,
    mood: 5,
    sleep: 7
  });
  const [viewMode, setViewMode] = useState<'weight' | 'energy' | 'mood' | 'sleep'>('weight');

  // Load from localStorage on mount
  useEffect(() => {
    const { entries: loaded, isDemo: demo } = loadEntries();
    setEntries(loaded);
    setIsDemo(demo);
  }, []);

  // Save to localStorage whenever entries change (but not demo data)
  useEffect(() => {
    if (!isDemo && entries.length > 0) {
      saveEntries(entries);
    }
  }, [entries, isDemo]);

  const addEntry = () => {
    if (newEntry.weight && newEntry.date) {
      const entry: ProgressEntry = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        date: newEntry.date!,
        weight: newEntry.weight!,
        bodyFat: newEntry.bodyFat,
        energy: newEntry.energy || 5,
        mood: newEntry.mood || 5,
        sleep: newEntry.sleep || 7,
        sideEffects: newEntry.sideEffects || 'None',
        notes: newEntry.notes || '',
      };

      let updatedEntries: ProgressEntry[];
      if (isDemo) {
        // First real entry replaces demo data
        updatedEntries = [entry];
        setIsDemo(false);
      } else {
        updatedEntries = [...entries, entry].sort((a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      }

      setEntries(updatedEntries);
      saveEntries(updatedEntries);
      setNewEntry({
        date: new Date().toISOString().split('T')[0],
        energy: 5,
        mood: 5,
        sleep: 7
      });
    }
  };

  const deleteEntry = (id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    if (updated.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
      setEntries(sampleData);
      setIsDemo(true);
    } else {
      saveEntries(updated);
    }
  };

  const clearAllData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEntries(sampleData);
    setIsDemo(true);
  };

  const startFresh = () => {
    setEntries([]);
    setIsDemo(false);
    localStorage.setItem(STORAGE_KEY, '[]');
  };

  const exportCSV = () => {
    const headers = ['Date', 'Weight (lbs)', 'Body Fat %', 'Energy (1-10)', 'Mood (1-10)', 'Sleep (hours)', 'Side Effects', 'Notes'];
    const rows = entries.map(e => [
      e.date, e.weight, e.bodyFat || '', e.energy, e.mood, e.sleep, e.sideEffects, `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `peptide-progress-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const calculateChange = (metric: keyof ProgressEntry) => {
    if (entries.length < 2) return 0;
    const first = entries[0][metric] as number;
    const last = entries[entries.length - 1][metric] as number;
    return last - first;
  };

  const getTrendIcon = (change: number, invertColor = false) => {
    if (change > 0) return <TrendingUp className={`h-4 w-4 ${invertColor ? 'text-red-600' : 'text-green-600'}`} />;
    if (change < 0) return <TrendingDown className={`h-4 w-4 ${invertColor ? 'text-green-600' : 'text-red-600'}`} />;
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  const weightChange = calculateChange('weight');
  const energyChange = calculateChange('energy');
  const moodChange = calculateChange('mood');

  return (
    <div className="space-y-6">
      {/* Demo Data Banner */}
      {isDemo && (
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Viewing sample data
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                This is example data to show how the tracker works. Add your first entry below to start tracking your own progress, or click "Start Fresh" to begin with a blank tracker.
              </p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" onClick={startFresh} className="text-blue-700 border-blue-300 hover:bg-blue-100">
                  Start Fresh
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Weight Change</p>
                <p className="text-2xl font-bold">
                  {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} lbs
                </p>
              </div>
              {getTrendIcon(weightChange, true)}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {entries.length > 0 && `Current: ${entries[entries.length - 1].weight} lbs`}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Energy Level</p>
                <p className="text-2xl font-bold">
                  {entries.length > 0 && `${entries[entries.length - 1].energy}/10`}
                </p>
              </div>
              {getTrendIcon(energyChange)}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {energyChange > 0 ? '+' : ''}{energyChange.toFixed(1)} change
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Mood Score</p>
                <p className="text-2xl font-bold">
                  {entries.length > 0 && `${entries[entries.length - 1].mood}/10`}
                </p>
              </div>
              {getTrendIcon(moodChange)}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {moodChange > 0 ? '+' : ''}{moodChange.toFixed(1)} change
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Avg Sleep</p>
                <p className="text-2xl font-bold">
                  {entries.length > 0 &&
                    `${(entries.reduce((sum, e) => sum + e.sleep, 0) / entries.length).toFixed(1)}h`
                  }
                </p>
              </div>
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {entries.length} entries tracked
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Visualization */}
      {entries.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Progress Visualization</CardTitle>
              <Select value={viewMode} onValueChange={(value: any) => setViewMode(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight">Weight Trend</SelectItem>
                  <SelectItem value="energy">Energy Levels</SelectItem>
                  <SelectItem value="mood">Mood Scores</SelectItem>
                  <SelectItem value="sleep">Sleep Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={entries}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis />
                <Tooltip labelFormatter={(date) => new Date(date).toLocaleDateString()} />
                <Legend />
                {viewMode === 'weight' && <Line type="monotone" dataKey="weight" stroke="#0d9488" strokeWidth={2} name="Weight (lbs)" dot={{ r: 4 }} />}
                {viewMode === 'energy' && <Line type="monotone" dataKey="energy" stroke="#3b82f6" strokeWidth={2} name="Energy (1-10)" dot={{ r: 4 }} />}
                {viewMode === 'mood' && <Line type="monotone" dataKey="mood" stroke="#8b5cf6" strokeWidth={2} name="Mood (1-10)" dot={{ r: 4 }} />}
                {viewMode === 'sleep' && <Line type="monotone" dataKey="sleep" stroke="#f59e0b" strokeWidth={2} name="Sleep (hours)" dot={{ r: 4 }} />}
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
            Log Progress Entry
          </CardTitle>
          <CardDescription>
            {isDemo ? 'Add your first entry to start tracking your own progress' : 'Track your daily progress and observations'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Weight (lbs) *</Label>
              <Input
                type="number"
                step="0.1"
                value={newEntry.weight || ''}
                onChange={(e) => setNewEntry({ ...newEntry, weight: parseFloat(e.target.value) })}
                placeholder="210.5"
              />
            </div>
            <div className="space-y-2">
              <Label>Body Fat %</Label>
              <Input
                type="number"
                step="0.1"
                value={newEntry.bodyFat || ''}
                onChange={(e) => setNewEntry({ ...newEntry, bodyFat: parseFloat(e.target.value) })}
                placeholder="25.0"
              />
            </div>
            <div className="space-y-2">
              <Label>Sleep (hours)</Label>
              <Input
                type="number"
                step="0.5"
                value={newEntry.sleep || ''}
                onChange={(e) => setNewEntry({ ...newEntry, sleep: parseFloat(e.target.value) })}
                placeholder="7.5"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Energy Level (1-10)</Label>
              <Select
                value={newEntry.energy?.toString()}
                onValueChange={(value) => setNewEntry({ ...newEntry, energy: parseInt(value) })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Mood (1-10)</Label>
              <Select
                value={newEntry.mood?.toString()}
                onValueChange={(value) => setNewEntry({ ...newEntry, mood: parseInt(value) })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Side Effects</Label>
            <Input
              value={newEntry.sideEffects || ''}
              onChange={(e) => setNewEntry({ ...newEntry, sideEffects: e.target.value })}
              placeholder="None, mild nausea, etc."
            />
          </div>

          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea
              value={newEntry.notes || ''}
              onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
              placeholder="How are you feeling? Any observations?"
              rows={3}
            />
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button onClick={addEntry} className="flex items-center gap-2" disabled={!newEntry.weight || !newEntry.date}>
              <Plus className="h-4 w-4" />
              {isDemo ? 'Add First Entry' : 'Add Entry'}
            </Button>
            {!isDemo && entries.length > 0 && (
              <>
                <Button variant="outline" className="flex items-center gap-2" onClick={exportCSV}>
                  <Download className="h-4 w-4" />
                  Export CSV
                </Button>
                <Button variant="outline" className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={clearAllData}>
                  <Trash2 className="h-4 w-4" />
                  Clear All Data
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Entries {isDemo && <span className="text-sm font-normal text-slate-500">(sample data)</span>}</CardTitle>
        </CardHeader>
        <CardContent>
          {entries.length === 0 ? (
            <p className="text-center text-slate-500 py-8">No entries yet. Add your first entry above to start tracking.</p>
          ) : (
            <div className="space-y-3">
              {entries.slice(-5).reverse().map((entry) => (
                <div key={entry.id} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{entry.weight} lbs</span>
                      {!isDemo && (
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                          title="Delete entry"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                    <div>Energy: {entry.energy}/10</div>
                    <div>Mood: {entry.mood}/10</div>
                    <div>Sleep: {entry.sleep}h</div>
                  </div>
                  {entry.sideEffects && entry.sideEffects !== 'None' && (
                    <div className="text-sm text-amber-600 dark:text-amber-400">
                      Side effects: {entry.sideEffects}
                    </div>
                  )}
                  {entry.notes && (
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">{entry.notes}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
