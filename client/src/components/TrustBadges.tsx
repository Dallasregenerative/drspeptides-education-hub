import { Shield, Award, FileCheck, Lock, CheckCircle, BookOpen } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Patient privacy protected"
  },
  {
    icon: Award,
    title: "Evidence-Based",
    description: "2,800+ clinical studies"
  },
  {
    icon: FileCheck,
    title: "cGMP Standards",
    description: "Quality assurance verified"
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description: "Enterprise-grade security"
  },
  {
    icon: CheckCircle,
    title: "Medical-Grade",
    description: "Professional healthcare focus"
  },
  {
    icon: BookOpen,
    title: "FDA Regulatory Compliant",
    description: "Guidelines followed"
  }
];

export default function TrustBadges() {
  return (
    <section className="bg-white dark:bg-slate-800 py-12 border-y border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
            Trusted by Healthcare Professionals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="h-14 w-14 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                    <Icon className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="font-semibold text-sm mb-1 text-slate-800 dark:text-slate-200">{badge.title}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{badge.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
