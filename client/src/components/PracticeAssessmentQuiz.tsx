import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Target, Stethoscope, Brain, Heart, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; icon?: any }[];
}

const questions: Question[] = [
  { id: 1, question: "What is your primary practice focus?", options: [
    { value: "anti-aging", label: "Anti-Aging & Longevity", icon: Heart },
    { value: "weight-loss", label: "Weight Management", icon: Target },
    { value: "sports-medicine", label: "Sports Medicine & Recovery", icon: Dumbbell },
    { value: "cognitive", label: "Cognitive Enhancement", icon: Brain },
    { value: "general", label: "General Wellness", icon: Stethoscope },
  ]},
  { id: 2, question: "How many patients do you see monthly?", options: [
    { value: "1-50", label: "1-50 patients" },
    { value: "51-100", label: "51-100 patients" },
    { value: "101-200", label: "101-200 patients" },
    { value: "200+", label: "200+ patients" },
  ]},
  { id: 3, question: "What is your experience level with peptide therapy?", options: [
    { value: "beginner", label: "New to peptides (< 1 year)" },
    { value: "intermediate", label: "Some experience (1-3 years)" },
    { value: "advanced", label: "Experienced (3+ years)" },
    { value: "expert", label: "Expert/Trainer" },
  ]},
  { id: 4, question: "Which patient outcomes are most important to your practice?", options: [
    { value: "fat-loss", label: "Fat Loss & Body Composition" },
    { value: "recovery", label: "Injury Recovery & Healing" },
    { value: "energy", label: "Energy & Vitality" },
    { value: "sleep", label: "Sleep & Stress Management" },
    { value: "longevity", label: "Longevity & Disease Prevention" },
  ]},
  { id: 5, question: "What is your preferred administration method?", options: [
    { value: "injectable", label: "Injectable (Subcutaneous/IM)" },
    { value: "oral", label: "Oral/Capsules" },
    { value: "topical", label: "Topical/Transdermal" },
    { value: "all", label: "All Methods" },
  ]},
];

const recommendations: Record<string, { peptides: string[]; protocols: string[]; description: string }> = {
  "anti-aging": { peptides: ["Epithalon", "GHK-Cu", "NAD+", "BPC-157", "Thymosin Alpha-1"], protocols: ["Longevity Protocol", "Cellular Regeneration"], description: "Focus on telomere support, cellular repair, and immune optimization." },
  "weight-loss": { peptides: ["Semaglutide", "Tirzepatide", "AOD-9604", "CJC-1295/Ipamorelin", "5-Amino-1MQ"], protocols: ["Weight Loss Protocol", "Metabolic Optimization"], description: "GLP-1 agonists combined with metabolic enhancers for sustainable results." },
  "sports-medicine": { peptides: ["BPC-157", "TB-500", "MGF", "IGF-1 LR3", "CJC-1295/Ipamorelin"], protocols: ["Injury Healing Protocol", "Performance Enhancement"], description: "Accelerate recovery and optimize tissue repair." },
  "cognitive": { peptides: ["Semax", "Selank", "Dihexa", "P21", "Noopept"], protocols: ["Cognitive Enhancement Protocol", "Neuroprotection"], description: "Enhance focus, memory, and neuroprotection." },
  "general": { peptides: ["BPC-157", "CJC-1295/Ipamorelin", "Thymosin Alpha-1", "NAD+", "GHK-Cu"], protocols: ["General Wellness Protocol", "Immune Support"], description: "Comprehensive approach to overall health optimization." },
};

export default function PracticeAssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    const focus = answers[1] || 'general';
    return recommendations[focus] || recommendations.general;
  };

  if (showResults) {
    const rec = getRecommendation();
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-t-lg">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <CardTitle className="text-2xl">Your Personalized Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 text-center">{rec.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 dark:bg-teal-950 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-teal-800 dark:text-teal-200">Recommended Peptides</h3>
              <ul className="space-y-2">
                {rec.peptides.map((peptide, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>{peptide}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-emerald-800 dark:text-emerald-200">Suggested Protocols</h3>
              <ul className="space-y-2">
                {rec.protocols.map((protocol, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-emerald-600" />
                    <span>{protocol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/peptides"><Button className="bg-teal-600 hover:bg-teal-700">Explore Peptides</Button></Link>
            <Link href="/tools/protocol-builder"><Button variant="outline">Build Custom Protocol</Button></Link>
            <Button variant="ghost" onClick={() => { setShowResults(false); setCurrentQuestion(0); setAnswers({}); }}>Retake Quiz</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-slate-500">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm font-medium text-teal-600">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div className="bg-teal-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <CardTitle className="text-xl mt-6">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option) => {
          const Icon = option.icon;
          return (
            <button key={option.value} onClick={() => handleAnswer(option.value)} className={cn("w-full p-4 rounded-lg border-2 text-left transition-all hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950 flex items-center gap-4", answers[question.id] === option.value ? "border-teal-500 bg-teal-50 dark:bg-teal-950" : "border-slate-200 dark:border-slate-700")}>
              {Icon && <Icon className="h-6 w-6 text-teal-600" />}
              <span className="font-medium">{option.label}</span>
              <ChevronRight className="h-5 w-5 ml-auto text-slate-400" />
            </button>
          );
        })}
        {currentQuestion > 0 && (
          <Button variant="ghost" onClick={() => setCurrentQuestion(currentQuestion - 1)} className="mt-4">
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous Question
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
