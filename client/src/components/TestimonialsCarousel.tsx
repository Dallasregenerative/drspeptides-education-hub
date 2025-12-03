import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Functional Medicine Physician",
    quote: "DrsPeptides Education Hub has become my go-to resource for peptide therapy education. The depth of information is unmatched.",
    location: "Austin, TX"
  },
  {
    name: "Dr. James Chen",
    title: "Anti-Aging Specialist",
    quote: "The clinical tools and protocols on DrsPeptides Education Hub have transformed how I approach peptide therapy in my practice.",
    location: "San Diego, CA"
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Integrative Medicine",
    quote: "Finally, a comprehensive resource that covers everything from basic peptide education to advanced protocols.",
    location: "Miami, FL"
  },
  {
    name: "Dr. Michael Thompson",
    title: "Sports Medicine Physician",
    quote: "The evidence-based approach and extensive research citations make DrsPeptides Education Hub an invaluable clinical resource.",
    location: "Denver, CO"
  },
  {
    name: "Dr. Lisa Patel",
    title: "Regenerative Medicine",
    quote: "DrsPeptides Education Hub's tools and educational content have significantly improved patient outcomes in my practice.",
    location: "Seattle, WA"
  }
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Healthcare Providers</h2>
          
          <Card className="relative">
            <CardContent className="pt-8 pb-12 px-8">
              <Quote className="h-12 w-12 text-purple-200 dark:text-purple-900 mb-4" />
              
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 italic">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">{testimonials[current].name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonials[current].title}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">
                    {testimonials[current].location}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? 'w-8 bg-purple-600'
                        : 'w-2 bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
