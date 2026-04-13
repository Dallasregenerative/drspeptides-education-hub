import { useEffect, useRef, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedStat({ end, label, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

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
  }, [end, hasAnimated]);

  useEffect(() => {
    // Fallback: if animation hasn't started after 3 seconds, show final numbers
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        setCount(end);
        setHasAnimated(true);
      }
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, [end, hasAnimated]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      // No IntersectionObserver support — show numbers immediately
      setCount(end);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [hasAnimated, startAnimation]);

  // Display value: show end number if animation completed or hasn't started yet after fallback
  const displayValue = count === 0 && !hasAnimated ? end : count;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={2847} label="Clinical Studies Referenced" suffix="+" />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={64} label="Peptide & Blend Profiles" />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={87} label="Evidence-Based Protocols" />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <AnimatedStat end={412} label="Healthcare Providers" suffix="+" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
