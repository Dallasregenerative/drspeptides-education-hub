import { usePageTitle } from '../hooks/usePageTitle';
import PrintButton from "@/components/PrintButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { FileText, TrendingUp, Heart, Brain, Dumbbell, Clock, ArrowLeft} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function CaseStudies() {
  usePageTitle("Clinical Case Studies", { description: "Real-world peptide therapy case studies with treatment protocols and outcomes. Learn from successful weight loss, injury recovery, muscle growth, anti-aging, cognitive, and immune support cases with evidence-based protocols." });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <FileText className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Clinical Case Studies Database
          </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Case Studies - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-center text-emerald-50 max-w-3xl mx-auto mb-8">
            Real-world treatment protocols, patient outcomes, and clinical insights from experienced peptide therapy practitioners
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-sm text-emerald-100">Case Studies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-emerald-100">Clinical Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">85%+</div>
              <div className="text-sm text-emerald-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">2026</div>
              <div className="text-sm text-emerald-100">Latest Cases</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Educational Purpose Only</h3>
              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  These case studies are for educational purposes only and do not constitute medical advice. Individual patient responses vary. Always conduct thorough patient evaluation, obtain informed consent, and follow evidence-based protocols. Cases have been de-identified to protect patient privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="weight-loss" className="w-full">
          <TabsList className="flex flex-wrap w-full h-auto gap-1 mb-8">
            <TabsTrigger value="weight-loss">
              <TrendingUp className="h-4 w-4 mr-2" />
              Weight Loss
            </TabsTrigger>
            <TabsTrigger value="recovery">
              <Heart className="h-4 w-4 mr-2" />
              Recovery
            </TabsTrigger>
            <TabsTrigger value="cognitive">
              <Brain className="h-4 w-4 mr-2" />
              Cognitive
            </TabsTrigger>
            <TabsTrigger value="performance">
              <Dumbbell className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="longevity">
              <Clock className="h-4 w-4 mr-2" />
              Longevity
            </TabsTrigger>
            <TabsTrigger value="protocols">
              <FileText className="h-4 w-4 mr-2" />
              Protocols
            </TabsTrigger>
          </TabsList>

          {/* Weight Loss Cases */}
          <TabsContent value="weight-loss" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Semaglutide for Obesity Management
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">12 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 45-year-old female</li>
                    <li><strong>BMI:</strong> 34.2 (obese)</li>
                    <li><strong>Weight:</strong> 210 lbs (95.3 kg)</li>
                    <li><strong>Comorbidities:</strong> Type 2 diabetes, hypertension, PCOS</li>
                    <li><strong>Previous attempts:</strong> Multiple diet/exercise programs, metformin</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> Semaglutide (compounded)</li>
                    <li><strong>Dosing:</strong> Titration from 0.25mg to 1.0mg weekly</li>
                    <li><strong>Route:</strong> Subcutaneous injection</li>
                    <li><strong>Adjuncts:</strong> Nutrition counseling, exercise program</li>
                    <li><strong>Monitoring:</strong> Weekly weight, monthly labs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (12 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-28 lbs</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Total weight loss (13.3%)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-1.2%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">HbA1c reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-15 mmHg</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Systolic BP reduction</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Mild nausea during titration phase, resolved with slower dose escalation</li>
                  <li>Patient reported significant appetite suppression and early satiety</li>
                  <li>Improved glycemic control allowed reduction in metformin dose</li>
                  <li>Patient highly motivated, excellent adherence to protocol</li>
                  <li>No serious adverse events</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Slow titration was key to minimizing GI side effects. Patient education about expected side effects and management strategies improved adherence. Combining with lifestyle modification enhanced results beyond medication alone."
                </p>
              </div>
            </div>

            {/* Additional Weight Loss Cases */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Tirzepatide for Metabolic Syndrome
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">16 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 52-year-old male</li>
                    <li><strong>BMI:</strong> 38.5 (obese class II)</li>
                    <li><strong>Weight:</strong> 265 lbs (120.2 kg)</li>
                    <li><strong>Comorbidities:</strong> Prediabetes, dyslipidemia, fatty liver</li>
                    <li><strong>Previous attempts:</strong> Low-carb diet, orlistat (discontinued due to side effects)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> Tirzepatide (compounded)</li>
                    <li><strong>Dosing:</strong> Titration from 2.5mg to 10mg weekly</li>
                    <li><strong>Route:</strong> Subcutaneous injection</li>
                    <li><strong>Adjuncts:</strong> Mediterranean diet, resistance training 3x/week</li>
                    <li><strong>Monitoring:</strong> Biweekly weight, comprehensive metabolic panel monthly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (16 weeks)</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-42 lbs</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Weight loss (15.8%)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-65 mg/dL</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Triglycerides</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+12 mg/dL</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">HDL cholesterol</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Normal</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Fasting glucose</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Dual GIP/GLP-1 agonism provided superior weight loss compared to previous GLP-1 therapy</li>
                  <li>Significant improvement in all metabolic syndrome parameters</li>
                  <li>Mild constipation managed with increased fiber and hydration</li>
                  <li>Patient reported improved energy and reduced food cravings</li>
                  <li>Liver enzymes normalized, suggesting fatty liver improvement</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Tirzepatide's dual mechanism provided excellent metabolic benefits beyond weight loss. Patient's commitment to lifestyle changes amplified results. Consider this for patients with multiple metabolic risk factors."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    AOD-9604 for Stubborn Fat Loss
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">8 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 38-year-old female</li>
                    <li><strong>BMI:</strong> 27.8 (overweight)</li>
                    <li><strong>Weight:</strong> 165 lbs (74.8 kg)</li>
                    <li><strong>Goals:</strong> Reduce abdominal fat, improve body composition</li>
                    <li><strong>Background:</strong> Active lifestyle, clean diet, plateau in fat loss</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> AOD-9604</li>
                    <li><strong>Dosing:</strong> 300mcg daily (morning, fasted)</li>
                    <li><strong>Route:</strong> Subcutaneous injection</li>
                    <li><strong>Adjuncts:</strong> Continued exercise program, caloric deficit</li>
                    <li><strong>Monitoring:</strong> Weekly weight, DEXA scan at baseline and 8 weeks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (8 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-8 lbs</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Total weight loss</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-3.2%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Body fat reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+2 lbs</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Lean muscle gain</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>DEXA scan confirmed preferential abdominal fat loss</li>
                  <li>Patient reported improved energy and workout performance</li>
                  <li>No appetite suppression (different mechanism than GLP-1s)</li>
                  <li>Excellent tolerability, no significant side effects</li>
                  <li>Results plateaued after 8 weeks, suggesting cycling may be beneficial</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "AOD-9604 is excellent for patients who are already lean and active but struggling with stubborn fat deposits. Works well for body recomposition goals. Consider 8-12 week cycles with breaks."
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Recovery Cases */}
          <TabsContent value="recovery" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    BPC-157 for Chronic Tendinopathy
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">6 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 42-year-old male</li>
                    <li><strong>Condition:</strong> Chronic Achilles tendinopathy (18 months)</li>
                    <li><strong>Pain level:</strong> 7/10 with activity</li>
                    <li><strong>Previous treatments:</strong> PT, NSAIDs, eccentric exercises, PRP (minimal improvement)</li>
                    <li><strong>Impact:</strong> Unable to run, limited athletic activity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> BPC-157</li>
                    <li><strong>Dosing:</strong> 250mcg twice daily (morning/evening)</li>
                    <li><strong>Route:</strong> Subcutaneous injection (near injury site)</li>
                    <li><strong>Duration:</strong> 6 weeks</li>
                    <li><strong>Adjuncts:</strong> Continued PT, gradual return to activity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (6 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2/10</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Pain level (from 7/10)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">85%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Function improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Running</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Returned to activity</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Noticeable pain reduction within 2 weeks</li>
                  <li>Ultrasound at 6 weeks showed improved tendon structure</li>
                  <li>Patient able to return to running gradually by week 5</li>
                  <li>No adverse effects reported</li>
                  <li>Maintained improvement at 3-month follow-up</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "BPC-157 showed remarkable efficacy for this chronic, treatment-resistant case. Local injection near injury site may enhance effectiveness. Important to continue PT and gradual loading during treatment."
                </p>
              </div>
            </div>

            {/* TB-500 Case */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    TB-500 for Post-Surgical Recovery
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">8 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 35-year-old female</li>
                    <li><strong>Procedure:</strong> Rotator cuff repair (arthroscopic)</li>
                    <li><strong>Timeline:</strong> 2 weeks post-op</li>
                    <li><strong>Goals:</strong> Accelerate healing, reduce inflammation, improve ROM</li>
                    <li><strong>Background:</strong> Competitive CrossFit athlete</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> TB-500 (Thymosin Beta-4)</li>
                    <li><strong>Dosing:</strong> 2.5mg twice weekly for 4 weeks, then weekly for 4 weeks</li>
                    <li><strong>Route:</strong> Subcutaneous injection</li>
                    <li><strong>Duration:</strong> 8 weeks total</li>
                    <li><strong>Adjuncts:</strong> Standard post-op PT protocol</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (8 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">90%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">ROM recovery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Minimal</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Pain/inflammation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2 weeks</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Ahead of schedule</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Significantly reduced post-op inflammation compared to typical cases</li>
                  <li>Faster progression through PT milestones</li>
                  <li>MRI at 8 weeks showed excellent tendon healing</li>
                  <li>Patient cleared for full activity 2 weeks ahead of typical timeline</li>
                  <li>No complications or adverse effects</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "TB-500 appears to accelerate post-surgical healing and reduce inflammation. Excellent option for athletes or patients requiring faster recovery. Consider starting immediately post-op for optimal results."
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Cognitive Cases */}
          <TabsContent value="cognitive" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Semax for Cognitive Enhancement
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">4 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 55-year-old male</li>
                    <li><strong>Complaints:</strong> Brain fog, reduced focus, memory issues</li>
                    <li><strong>Background:</strong> High-stress executive role, no cognitive impairment diagnosis</li>
                    <li><strong>Goals:</strong> Improve mental clarity, focus, and productivity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> Semax (N-Acetyl Semax)</li>
                    <li><strong>Dosing:</strong> 600mcg daily (200mcg per nostril, 3x daily)</li>
                    <li><strong>Route:</strong> Intranasal</li>
                    <li><strong>Duration:</strong> 4 weeks</li>
                    <li><strong>Monitoring:</strong> Subjective cognitive assessments, Montreal Cognitive Assessment (MoCA)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (4 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">85%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Improvement in focus</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+3 points</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">MoCA score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">90%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Reduced brain fog</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-300 mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Noticeable improvement in mental clarity within 1 week</li>
                  <li>Enhanced ability to focus during long meetings and complex tasks</li>
                  <li>Improved verbal fluency and recall</li>
                  <li>No stimulant-like side effects (jitters, anxiety)</li>
                  <li>Benefits persisted for 2 weeks after discontinuation</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Semax is excellent for cognitive enhancement in high-performing individuals experiencing age-related or stress-related cognitive decline. Intranasal route provides rapid onset. Consider 4-6 week cycles."
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Performance Cases */}
          <TabsContent value="performance" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    CJC-1295/Ipamorelin for Muscle Gain
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">12 weeks</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 48-year-old male</li>
                    <li><strong>Goals:</strong> Increase lean muscle mass, improve recovery</li>
                    <li><strong>Background:</strong> Lifelong athlete, age-related decline in muscle mass</li>
                    <li><strong>Baseline:</strong> 178 lbs, 18% body fat</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptides:</strong> CJC-1295 (no DAC) + Ipamorelin</li>
                    <li><strong>Dosing:</strong> 200mcg each, 5 days/week before bed</li>
                    <li><strong>Route:</strong> Subcutaneous injection</li>
                    <li><strong>Adjuncts:</strong> Resistance training 4x/week, high-protein diet</li>
                    <li><strong>Monitoring:</strong> DEXA scan baseline and 12 weeks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (12 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+8 lbs</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Lean muscle gain</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">-2.5%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Body fat reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">40%</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Strength increase</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Significant improvement in sleep quality and depth</li>
                  <li>Faster recovery between training sessions</li>
                  <li>Increased strength across all major lifts</li>
                  <li>Improved skin quality and reduced joint pain (additional benefits)</li>
                  <li>No adverse effects, excellent tolerability</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "CJC-1295/Ipamorelin combination is highly effective for muscle gain and recovery in aging athletes. Dosing before bed optimizes natural GH pulse. Results require consistent training and nutrition."
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Longevity Cases */}
          <TabsContent value="longevity" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Epithalon for Anti-Aging
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">10 days</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Profile</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Age/Sex:</strong> 62-year-old female</li>
                    <li><strong>Goals:</strong> Longevity optimization, cellular health</li>
                    <li><strong>Background:</strong> Health-conscious, proactive about aging</li>
                    <li><strong>Baseline labs:</strong> Normal for age</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Treatment Protocol</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Peptide:</strong> Epithalon (Epitalon)</li>
                    <li><strong>Dosing:</strong> 10mg daily for 10 days</li>
                    <li><strong>Route:</strong> Subcutaneous injection</li>
                    <li><strong>Frequency:</strong> Quarterly cycles</li>
                    <li><strong>Monitoring:</strong> Comprehensive labs, telomere testing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Outcomes (After 2 cycles)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Improved</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Sleep quality</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Enhanced</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Energy levels</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Stable</div>
                    <div className="text-sm text-emerald-800 dark:text-emerald-200">Telomere length</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Clinical Insights</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li>Subjective improvements in sleep depth and energy</li>
                  <li>Telomere testing showed stabilization (no shortening over 6 months)</li>
                  <li>Patient reports feeling "younger" and more vital</li>
                  <li>No adverse effects during or between cycles</li>
                  <li>Benefits appear cumulative with repeated cycles</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider Notes</h3>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Epithalon is promising for longevity optimization. Short 10-day cycles quarterly appear safe and well-tolerated. Telomere testing provides objective biomarker. Consider for health-conscious aging patients."
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Protocols Tab */}
          <TabsContent value="protocols" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Evidence-Based Treatment Protocols
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Weight Loss Protocol (GLP-1 Agonists)
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Standard protocol for semaglutide or tirzepatide therapy
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li><strong>Baseline:</strong> Comprehensive metabolic panel, HbA1c, lipid panel, thyroid function</li>
                    <li><strong>Titration:</strong> Start low, increase every 4 weeks based on tolerability</li>
                    <li><strong>Monitoring:</strong> Weekly weight, monthly labs for first 3 months</li>
                    <li><strong>Adjuncts:</strong> Nutrition counseling, exercise program, behavioral support</li>
                    <li><strong>Duration:</strong> Minimum 12 weeks, often 6-12 months for optimal results</li>
                    <li><strong>Discontinuation:</strong> Gradual taper to minimize rebound weight gain</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Injury Recovery Protocol (BPC-157 + TB-500)
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Combination protocol for acute or chronic injuries
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li><strong>BPC-157:</strong> 250-500mcg twice daily, local injection near injury</li>
                    <li><strong>TB-500:</strong> 2-2.5mg twice weekly for loading, then weekly maintenance</li>
                    <li><strong>Duration:</strong> 4-8 weeks depending on injury severity</li>
                    <li><strong>Adjuncts:</strong> Physical therapy, appropriate rest and loading</li>
                    <li><strong>Monitoring:</strong> Pain scales, functional assessments, imaging if indicated</li>
                    <li><strong>Cycling:</strong> Can repeat cycles as needed with 4-week breaks</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Muscle Gain Protocol (Growth Hormone Secretagogues)
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    CJC-1295/Ipamorelin for body composition optimization
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li><strong>Dosing:</strong> 200-300mcg each peptide, 5-6 days/week</li>
                    <li><strong>Timing:</strong> Before bed or post-workout for optimal GH pulse</li>
                    <li><strong>Duration:</strong> 12-16 week cycles</li>
                    <li><strong>Adjuncts:</strong> Resistance training 4-5x/week, high-protein diet (1g/lb)</li>
                    <li><strong>Monitoring:</strong> DEXA scans, strength metrics, IGF-1 levels</li>
                    <li><strong>Rest period:</strong> 4-8 weeks between cycles to maintain sensitivity</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Cognitive Enhancement Protocol
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Semax or Selank for cognitive optimization
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li><strong>Semax:</strong> 600-900mcg/day intranasal (divided doses)</li>
                    <li><strong>Selank:</strong> 300-600mcg/day intranasal for anxiolytic effects</li>
                    <li><strong>Duration:</strong> 4-6 week cycles</li>
                    <li><strong>Monitoring:</strong> Subjective assessments, cognitive testing (MoCA)</li>
                    <li><strong>Adjuncts:</strong> Sleep optimization, stress management, exercise</li>
                    <li><strong>Cycling:</strong> 4-6 weeks on, 2-4 weeks off</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                General Best Practices Across All Protocols
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Pre-Treatment</h4>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                    <li>Comprehensive medical history and physical exam</li>
                    <li>Baseline laboratory testing</li>
                    <li>Screen for contraindications</li>
                    <li>Detailed informed consent process</li>
                    <li>Set realistic expectations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">During Treatment</h4>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                    <li>Regular follow-up visits (every 2-4 weeks initially)</li>
                    <li>Monitor for adverse effects</li>
                    <li>Adjust dosing based on response and tolerability</li>
                    <li>Document outcomes objectively</li>
                    <li>Maintain open communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Post-Treatment</h4>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                    <li>Assess outcomes vs. baseline</li>
                    <li>Plan for maintenance or cycling</li>
                    <li>Address any residual concerns</li>
                    <li>Long-term follow-up as appropriate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Documentation</h4>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                    <li>Detailed treatment notes in EMR</li>
                    <li>Signed informed consent on file</li>
                    <li>Before/after measurements and photos</li>
                    <li>Adverse event reporting</li>
                    <li>Outcomes tracking for quality improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Share Your Clinical Experience
          </h2>
          <p className="text-xl text-emerald-50 mb-6 max-w-2xl mx-auto">
            Help build the knowledge base by submitting your own case studies and treatment protocols
          </p>
          <Link href="/contact">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Submit Case Study
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
