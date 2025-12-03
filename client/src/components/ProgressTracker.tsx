import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, TrendingDown, Minus, Plus, Calendar, Camera, FileText, Download } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProgressEntry {
  date: string;
  weight: number;
  bodyFat?: number;
  energy: number; // 1-10 scale
  mood: number; // 1-10 scale
  sleep: number; // hours
  sideEffects: string;
  notes: string;
}

const sampleData: ProgressEntry[] = [
  { date: '2025-01-01', weight: 220, bodyFat: 28, energy: 5, mood: 6, sleep: 6.5, sideEffects: 'None', notes: 'Starting protocol' },
  { date: '2025-01-08', weight: 218, bodyFat: 27.5, energy: 6, mood: 7, sleep: 7, sideEffects: 'Mild nausea', notes: 'Feeling better' },
  { date: '2025-01-15', weight: 215, bodyFat: 27, energy: 7, mood: 7, sleep: 7.5, sideEffects: 'None', notes: 'Energy improving' },
  { date: '2025-01-22', weight: 212, bodyFat: 26, energy: 8, mood: 8, sleep: 8, sideEffects: 'None', notes: 'Great progress' },
  { date: '2025-01-29', weight: 210, bodyFat: 25.5, energy: 8, mood: 8, sleep: 8, sideEffects: 'None', notes: 'On track' },
  { date: '2025-02-05', weight: 207, bodyFat: 25, energy: 9, mood: 9, sleep: 8, sideEffects: 'None', notes: 'Excellent results' },
];

export default function ProgressTracker() {
  const [entries, setEntries] = useState<ProgressEntry[]>(sampleData);
  const [newEntry, setNewEntry] = useState<Partial<ProgressEntry>>({
    date: new Date().toISOString().split('T')[0],
    energy: 5,
    mood: 5,
    sleep: 7
  });
  const [viewMode, setViewMode] = useState<'weight' | 'energy' | 'mood' | 'sleep'>('weight');

  const addEntry = () => {
    if (newEntry.weight && newEntry.date) {
      setEntries([...entries, newEntry as ProgressEntry].sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      ));
      setNewEntry({
        date: new Date().toISOString().split('T')[0],
        energy: 5,
        mood: 5,
        sleep: 7
      });
    }
  };

  const calculateChange = (metric: keyof ProgressEntry) => {
    if (entries.length < 2) return 0;
    const first = entries[0][metric] as number;
    const last = entries[entries.length - 1][metric] as number;
    return last - first;
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  const weightChange = calculateChange('weight');
  const energyChange = calculateChange('energy');
  const moodChange = calculateChange('mood');

  return (
    <div className="space-y-6">
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
              {getTrendIcon(weightChange)}
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
              Last 30 days average
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Visualization */}
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
              <Tooltip 
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Legend />
              {viewMode === 'weight' && (
                <Line type="monotone" dataKey="weight" stroke="#0d9488" strokeWidth={2} name="Weight (lbs)" />
              )}
              {viewMode === 'energy' && (
                <Line type="monotone" dataKey="energy" stroke="#3b82f6" strokeWidth={2} name="Energy (1-10)" />
              )}
              {viewMode === 'mood' && (
                <Line type="monotone" dataKey="mood" stroke="#8b5cf6" strokeWidth={2} name="Mood (1-10)" />
              )}
              {viewMode === 'sleep' && (
                <Line type="monotone" dataKey="sleep" stroke="#f59e0b" strokeWidth={2} name="Sleep (hours)" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Add New Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Log Progress Entry
          </CardTitle>
          <CardDescription>Track your daily progress and observations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>Weight (lbs)</Label>
              <Input
                type="number"
                step="0.1"
                value={newEntry.weight || ''}
                onChange={(e) => setNewEntry({...newEntry, weight: parseFloat(e.target.value)})}
                placeholder="210.5"
              />
            </div>
            <div className="space-y-2">
              <Label>Body Fat %</Label>
              <Input
                type="number"
                step="0.1"
                value={newEntry.bodyFat || ''}
                onChange={(e) => setNewEntry({...newEntry, bodyFat: parseFloat(e.target.value)})}
                placeholder="25.0"
              />
            </div>
            <div className="space-y-2">
              <Label>Sleep (hours)</Label>
              <Input
                type="number"
                step="0.5"
                value={newEntry.sleep || ''}
                onChange={(e) => setNewEntry({...newEntry, sleep: parseFloat(e.target.value)})}
                placeholder="7.5"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Energy Level (1-10)</Label>
              <Select 
                value={newEntry.energy?.toString()} 
                onValueChange={(value) => setNewEntry({...newEntry, energy: parseInt(value)})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Mood (1-10)</Label>
              <Select 
                value={newEntry.mood?.toString()} 
                onValueChange={(value) => setNewEntry({...newEntry, mood: parseInt(value)})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
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
              onChange={(e) => setNewEntry({...newEntry, sideEffects: e.target.value})}
              placeholder="None, mild nausea, etc."
            />
          </div>

          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea
              value={newEntry.notes || ''}
              onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
              placeholder="How are you feeling? Any observations?"
              rows={3}
            />
          </div>

          <div className="flex gap-4">
            <Button onClick={addEntry} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Entry
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Add Progress Photo
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Data
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {entries.slice(-5).reverse().map((entry, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">
                    {new Date(entry.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {entry.weight} lbs
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
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {entry.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
