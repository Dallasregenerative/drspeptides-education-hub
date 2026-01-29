import { TrendingUp, Activity, Beaker, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "$81.5B",
    label: "U.S. Peptide Market by 2034"
  },
  {
    icon: Activity,
    value: "50+",
    label: "Clinical Applications"
  },
  {
    icon: Beaker,
    value: "99%+",
    label: "Purity Standard Required"
  },
  {
    icon: BookOpen,
    value: "2,800+",
    label: "Clinical Studies Analyzed"
  }
];

export default function IndustryStatsBar() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-3">
                  <div className="h-10 w-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
