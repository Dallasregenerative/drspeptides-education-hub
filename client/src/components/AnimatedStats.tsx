import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedStat({ end, label, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={2800} label="Clinical Studies" suffix="+" />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={87} label="Educational Pages" />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={42} label="Peptide Profiles" />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={1000} label="Practitioners" suffix="+" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
