import { usePageTitle } from '../hooks/usePageTitle';
import PrintButton from "@/components/PrintButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Shield, AlertTriangle, Phone, FileText, Activity, Users, ArrowLeft} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function SafetyManagement() {
  usePageTitle("Safety Management & Adverse Events", { description: "Comprehensive adverse event database with 100+ documented reactions and management protocols. Emergency response guidelines, FDA MedWatch reporting, patient monitoring schedules, and safety equipment checklist for peptide therapy." });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Shield className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Safety Management & Adverse Events
          </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Safety Management - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-center text-red-50 max-w-3xl mx-auto mb-8">
            Comprehensive guide to peptide therapy safety, adverse event recognition, management protocols, and reporting requirements
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-red-100">Documented Events</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-sm text-red-100">Peptides Covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-red-100">Safety Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">2025</div>
              <div className="text-sm text-red-100">Latest Updates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Medical Emergency Protocol</h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <p className="font-semibold mb-2">
                  For life-threatening adverse events: Call 911 immediately. Do not delay emergency care.
                </p>
                <p>
                  Severe allergic reactions (anaphylaxis), chest pain, difficulty breathing, altered mental status, or severe bleeding require immediate emergency medical attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="common-aes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-8">
            <TabsTrigger value="common-aes">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Common AEs
            </TabsTrigger>
            <TabsTrigger value="serious-aes">
              <Shield className="h-4 w-4 mr-2" />
              Serious AEs
            </TabsTrigger>
            <TabsTrigger value="management">
              <Activity className="h-4 w-4 mr-2" />
              Management
            </TabsTrigger>
            <TabsTrigger value="reporting">
              <FileText className="h-4 w-4 mr-2" />
              Reporting
            </TabsTrigger>
            <TabsTrigger value="monitoring">
              <Users className="h-4 w-4 mr-2" />
              Monitoring
            </TabsTrigger>
            <TabsTrigger value="emergency">
              <Phone className="h-4 w-4 mr-2" />
              Emergency
            </TabsTrigger>
          </TabsList>

          {/* Common Adverse Events */}
          <TabsContent value="common-aes" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Common Adverse Events by Peptide Category
              </h2>

              {/* GLP-1 Agonists */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                    <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    GLP-1 Agonists (Semaglutide, Tirzepatide)
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Gastrointestinal (Very Common)</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Nausea</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">40-50%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Usually mild-moderate, peaks during titration, improves with time
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Slower titration, smaller meals, ginger, anti-emetics if severe
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Diarrhea</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">20-30%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Typically transient, resolves within 1-2 weeks
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Hydration, probiotics, adjust fiber intake, loperamide if needed
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Constipation</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">15-25%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Due to delayed gastric emptying
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Increase fiber and water, stool softeners, magnesium
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Vomiting</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">10-15%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Usually during titration phase
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Reduce dose, slower titration, anti-emetics
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Other Common AEs</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Injection Site Reactions</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">5-10%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Redness, swelling, bruising at injection site
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Rotate sites, proper technique, ice if needed
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Fatigue</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">10-15%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          May be related to caloric restriction
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Ensure adequate nutrition, check for deficiencies
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Headache</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">8-12%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Usually mild, transient
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Hydration, OTC analgesics, check BP
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white">Dizziness</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">5-8%</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          May indicate hypoglycemia or dehydration
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                          <strong>Management:</strong> Check glucose, ensure hydration, adjust diabetic meds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Hormone Secretagogues */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                    <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Growth Hormone Secretagogues (CJC-1295, Ipamorelin, GHRP-6)
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Water Retention</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">15-25%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Mild edema, especially in hands and feet
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Usually resolves in 1-2 weeks, reduce sodium, consider diuretics if severe
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Increased Hunger (GHRP-6)</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">30-40%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Ghrelin mimetic effect
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Dose before bed, switch to Ipamorelin if problematic
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Injection Site Reactions</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">10-15%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Redness, itching at injection site
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Rotate sites, ensure proper reconstitution
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Headache</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">8-12%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Usually mild, transient
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Reduce dose, OTC analgesics
                    </p>
                  </div>
                </div>
              </div>

              {/* Recovery Peptides */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded">
                    <AlertTriangle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Recovery Peptides (BPC-157, TB-500)
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Injection Site Discomfort</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">10-20%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Mild pain or burning at injection site
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Inject slowly, rotate sites, ice if needed
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Fatigue (TB-500)</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">5-10%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Transient tiredness after injection
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Dose before bed, usually resolves in 1-2 weeks
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Nausea (BPC-157)</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">3-5%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Rare, usually mild
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Take with food, reduce dose
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Dizziness</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">2-5%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Rare, transient
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Ensure hydration, check BP
                    </p>
                  </div>
                </div>
              </div>

              {/* Cognitive Peptides */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded">
                    <AlertTriangle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Cognitive Peptides (Semax, Selank)
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Nasal Irritation</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">15-25%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Dryness, mild burning with intranasal use
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Saline spray, reduce frequency, consider subcutaneous route
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Insomnia (Semax)</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">10-15%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Stimulating effect if dosed late in day
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Dose in morning only, reduce evening dose
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Headache</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">5-8%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Usually mild, transient
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Reduce dose, ensure hydration
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">Anxiety (rare)</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">2-3%</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Paradoxical reaction in sensitive individuals
                    </p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                      <strong>Management:</strong> Discontinue, consider Selank instead
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Serious Adverse Events */}
          <TabsContent value="serious-aes" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Serious Adverse Events Requiring Immediate Attention
              </h2>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded mb-6">
                <p className="text-red-800 dark:text-red-200 font-semibold">
                  These events are rare but potentially life-threatening. Immediate medical evaluation is required.
                </p>
              </div>

              <div className="space-y-6">
                {/* Anaphylaxis */}
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Anaphylaxis / Severe Allergic Reaction
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Signs & Symptoms</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Difficulty breathing, wheezing, throat tightness</li>
                        <li>Rapid swelling of face, lips, tongue</li>
                        <li>Widespread hives or rash</li>
                        <li>Rapid pulse, dizziness, loss of consciousness</li>
                        <li>Severe drop in blood pressure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Immediate Actions</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li><strong>Call 911 immediately</strong></li>
                        <li>Administer epinephrine (EpiPen) if available</li>
                        <li>Position patient supine with legs elevated</li>
                        <li>Monitor airway, breathing, circulation</li>
                        <li>Prepare for CPR if needed</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                    <p className="text-sm text-red-900 dark:text-red-100">
                      <strong>Prevention:</strong> Screen for allergies, have emergency equipment available, observe patients for 30 minutes after first dose, educate patients on signs of allergic reaction.
                    </p>
                  </div>
                </div>

                {/* Pancreatitis */}
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Acute Pancreatitis (GLP-1 Agonists)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Signs & Symptoms</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Severe upper abdominal pain (often radiating to back)</li>
                        <li>Nausea and vomiting</li>
                        <li>Fever</li>
                        <li>Rapid pulse</li>
                        <li>Abdominal tenderness and distension</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Immediate Actions</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Discontinue peptide immediately</li>
                        <li>Send to emergency department</li>
                        <li>Order lipase, amylase, CBC, CMP</li>
                        <li>CT scan if diagnosis unclear</li>
                        <li>NPO, IV fluids, pain management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                    <p className="text-sm text-orange-900 dark:text-orange-100">
                      <strong>Risk Factors:</strong> History of pancreatitis, gallstones, hypertriglyceridemia, alcohol use. Screen for these before initiating GLP-1 therapy. Do not use in patients with history of pancreatitis.
                    </p>
                  </div>
                </div>

                {/* Thyroid Tumors */}
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Thyroid C-Cell Tumors (GLP-1 Agonists)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Warning Signs</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Neck mass or swelling</li>
                        <li>Difficulty swallowing</li>
                        <li>Hoarseness or voice changes</li>
                        <li>Persistent cough</li>
                        <li>Elevated calcitonin levels</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Screening & Monitoring</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Screen for personal/family history of MTC or MEN2</li>
                        <li>Baseline calcitonin (controversial but recommended)</li>
                        <li>Thyroid exam at each visit</li>
                        <li>Refer to endocrinology if concerns</li>
                        <li>Ultrasound if palpable nodule</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded">
                    <p className="text-sm text-yellow-900 dark:text-yellow-100">
                      <strong>Contraindication:</strong> Do not use GLP-1 agonists in patients with personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN2). Black box warning.
                    </p>
                  </div>
                </div>

                {/* Hypoglycemia */}
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Severe Hypoglycemia
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Signs & Symptoms</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Confusion, altered mental status</li>
                        <li>Seizures</li>
                        <li>Loss of consciousness</li>
                        <li>Severe shakiness, sweating</li>
                        <li>Rapid heartbeat</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Immediate Actions</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Check blood glucose immediately</li>
                        <li>If conscious: 15g fast-acting carbs</li>
                        <li>If unconscious: Glucagon injection or IV dextrose</li>
                        <li>Call 911 if severe or not responding</li>
                        <li>Adjust diabetic medications</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                    <p className="text-sm text-purple-900 dark:text-purple-100">
                      <strong>Prevention:</strong> Reduce insulin/sulfonylurea doses when starting GLP-1 therapy. Educate patients on hypoglycemia symptoms. Provide glucose monitoring device and glucagon emergency kit.
                    </p>
                  </div>
                </div>

                {/* Gallbladder Disease */}
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Acute Cholecystitis / Cholelithiasis
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Signs & Symptoms</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Right upper quadrant pain</li>
                        <li>Pain after fatty meals</li>
                        <li>Nausea, vomiting</li>
                        <li>Fever (if cholecystitis)</li>
                        <li>Jaundice (if bile duct obstruction)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Immediate Actions</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Send to emergency department if acute</li>
                        <li>Right upper quadrant ultrasound</li>
                        <li>Liver function tests, bilirubin</li>
                        <li>Surgical consultation if cholecystitis</li>
                        <li>Consider discontinuing peptide</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <p className="text-sm text-green-900 dark:text-green-100">
                      <strong>Risk Factors:</strong> Rapid weight loss increases gallstone risk. More common with GLP-1 agonists. Consider ursodeoxycholic acid prophylaxis in high-risk patients. Educate on warning signs.
                    </p>
                  </div>
                </div>

                {/* Kidney Injury */}
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Acute Kidney Injury
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Signs & Symptoms</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Decreased urine output</li>
                        <li>Swelling in legs, ankles, feet</li>
                        <li>Fatigue, confusion</li>
                        <li>Nausea</li>
                        <li>Elevated creatinine</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Immediate Actions</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Discontinue peptide</li>
                        <li>Check BUN, creatinine, electrolytes</li>
                        <li>Ensure adequate hydration</li>
                        <li>Nephrology consultation if severe</li>
                        <li>Review all medications</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      <strong>Risk Factors:</strong> Dehydration from GI side effects, pre-existing kidney disease, concurrent nephrotoxic medications. Monitor renal function regularly. Ensure adequate hydration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Management Protocols */}
          <TabsContent value="management" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Adverse Event Management Protocols
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    General Approach to Adverse Events
                  </h3>
                  <ol className="space-y-3 text-slate-700 dark:text-slate-300 list-decimal list-inside">
                    <li className="font-semibold">Assess Severity
                      <ul className="ml-6 mt-1 space-y-1 list-disc list-inside font-normal text-sm">
                        <li>Mild: Manageable with supportive care, no dose adjustment needed</li>
                        <li>Moderate: Requires intervention, may need dose reduction or temporary hold</li>
                        <li>Severe: Requires immediate medical attention, discontinue peptide</li>
                        <li>Life-threatening: Emergency care, call 911</li>
                      </ul>
                    </li>
                    <li className="font-semibold">Determine Causality
                      <ul className="ml-6 mt-1 space-y-1 list-disc list-inside font-normal text-sm">
                        <li>Temporal relationship to peptide administration</li>
                        <li>Known adverse effect of this peptide</li>
                        <li>Alternative explanations (other medications, medical conditions)</li>
                        <li>Response to dose reduction or discontinuation</li>
                      </ul>
                    </li>
                    <li className="font-semibold">Implement Management Strategy
                      <ul className="ml-6 mt-1 space-y-1 list-disc list-inside font-normal text-sm">
                        <li>Supportive care and symptom management</li>
                        <li>Dose reduction or temporary hold</li>
                        <li>Switch to alternative peptide</li>
                        <li>Discontinue therapy if severe or persistent</li>
                      </ul>
                    </li>
                    <li className="font-semibold">Document Thoroughly
                      <ul className="ml-6 mt-1 space-y-1 list-disc list-inside font-normal text-sm">
                        <li>Detailed description of event</li>
                        <li>Severity assessment</li>
                        <li>Management actions taken</li>
                        <li>Patient response to intervention</li>
                        <li>Follow-up plan</li>
                      </ul>
                    </li>
                    <li className="font-semibold">Report as Required
                      <ul className="ml-6 mt-1 space-y-1 list-disc list-inside font-normal text-sm">
                        <li>FDA MedWatch for serious events</li>
                        <li>Compounding pharmacy notification</li>
                        <li>Internal quality improvement tracking</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Dose Modification Guidelines
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">AE Severity</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Action</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Follow-up</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm text-slate-900 dark:text-white font-medium">Grade 1 (Mild)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Continue current dose, supportive care</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Monitor, reassess in 1-2 weeks</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-slate-900 dark:text-white font-medium">Grade 2 (Moderate)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Reduce dose by 25-50% or hold temporarily</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Reassess in 1 week, resume at lower dose if improved</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-slate-900 dark:text-white font-medium">Grade 3 (Severe)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Hold therapy, consider discontinuation</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Medical evaluation, may resume at 50% dose if resolved</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-slate-900 dark:text-white font-medium">Grade 4 (Life-threatening)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Discontinue permanently, emergency care</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Do not rechallenge, report to FDA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    When to Discontinue Therapy
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Immediate discontinuation is required for:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      <li>Any life-threatening adverse event</li>
                      <li>Anaphylaxis or severe allergic reaction</li>
                      <li>Acute pancreatitis</li>
                      <li>Acute kidney injury</li>
                      <li>Severe hypoglycemia (recurrent)</li>
                      <li>Suspected thyroid tumor</li>
                      <li>Patient request</li>
                      <li>Pregnancy (for most peptides)</li>
                      <li>Persistent severe AEs despite dose reduction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reporting Tab */}
          <TabsContent value="reporting" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Adverse Event Reporting Requirements
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    FDA MedWatch Reporting
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-3">
                    Healthcare providers are encouraged to report all serious adverse events to the FDA MedWatch program.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What to Report</h4>
                      <ul className="space-y-1 text-blue-800 dark:text-blue-200 list-disc list-inside text-sm">
                        <li>Death</li>
                        <li>Life-threatening events</li>
                        <li>Hospitalization (initial or prolonged)</li>
                        <li>Disability or permanent damage</li>
                        <li>Congenital anomaly/birth defect</li>
                        <li>Required intervention to prevent permanent impairment</li>
                        <li>Other serious important medical events</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">How to Report</h4>
                      <ul className="space-y-1 text-blue-800 dark:text-blue-200 list-disc list-inside text-sm">
                        <li><strong>Online:</strong> <a href="https://www.fda.gov/safety/medwatch" target="_blank" rel="noopener noreferrer" className="underline">www.fda.gov/safety/medwatch</a></li>
                        <li><strong>Phone:</strong> 1-800-FDA-1088</li>
                        <li><strong>Fax:</strong> 1-800-FDA-0178</li>
                        <li><strong>Mail:</strong> Download Form FDA 3500 and mail</li>
                        <li>Reports can be submitted anonymously</li>
                        <li>Follow-up reports encouraged as new information becomes available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Information to Include in Reports
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Patient Information</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Patient initials (de-identified)</li>
                        <li>Age, sex, weight</li>
                        <li>Relevant medical history</li>
                        <li>Concomitant medications</li>
                        <li>Allergies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Event Information</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Detailed description of adverse event</li>
                        <li>Date of onset</li>
                        <li>Severity and outcome</li>
                        <li>Treatment provided</li>
                        <li>Lab results if relevant</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Product Information</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Peptide name and dose</li>
                        <li>Route of administration</li>
                        <li>Lot number if available</li>
                        <li>Compounding pharmacy name</li>
                        <li>Dates of therapy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Reporter Information</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Your name and contact information</li>
                        <li>Profession</li>
                        <li>Practice name and address</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Compounding Pharmacy Notification
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      In addition to FDA reporting, notify the compounding pharmacy of any serious adverse events:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      <li>Allows pharmacy to investigate potential product quality issues</li>
                      <li>May identify contamination or formulation problems</li>
                      <li>Pharmacy may need to recall affected lots</li>
                      <li>Helps pharmacy improve quality control processes</li>
                      <li>Required for 503B outsourcing facilities</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 mt-3">
                      <strong>Include:</strong> Lot number, date dispensed, description of event, patient outcome
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Internal Documentation & Quality Improvement
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Maintain internal adverse event tracking for quality improvement:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      <li>Create adverse event log in EMR or spreadsheet</li>
                      <li>Track all AEs, not just serious ones</li>
                      <li>Review quarterly for patterns or trends</li>
                      <li>Identify opportunities to improve safety protocols</li>
                      <li>Share learnings with staff</li>
                      <li>Update patient education materials based on findings</li>
                      <li>Adjust protocols to minimize future events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Patient Monitoring Protocols
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    General Monitoring Schedule
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Timepoint</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Clinical Assessment</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Laboratory Testing</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">Baseline</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>Complete history & physical</li>
                              <li>Vital signs, weight, BMI</li>
                              <li>Screen for contraindications</li>
                              <li>Informed consent</li>
                            </ul>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>CMP (kidney, liver function)</li>
                              <li>Lipid panel</li>
                              <li>HbA1c (if diabetic/prediabetic)</li>
                              <li>TSH (GLP-1s)</li>
                              <li>Peptide-specific labs</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">Week 2</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>Phone check-in</li>
                              <li>Assess tolerability</li>
                              <li>Review adverse events</li>
                              <li>Reinforce education</li>
                            </ul>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            None (unless concerns)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">Week 4</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>In-person visit</li>
                              <li>Vital signs, weight</li>
                              <li>Assess response</li>
                              <li>Adjust dose if needed</li>
                            </ul>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>CMP</li>
                              <li>HbA1c (if diabetic)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">Month 3</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>Comprehensive assessment</li>
                              <li>Vital signs, weight</li>
                              <li>Evaluate outcomes</li>
                              <li>Adjust treatment plan</li>
                            </ul>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            <ul className="list-disc list-inside space-y-1">
                              <li>CMP</li>
                              <li>Lipid panel</li>
                              <li>HbA1c</li>
                              <li>TSH (GLP-1s)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">Ongoing</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            Every 3 months or as clinically indicated
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                            Every 3-6 months or as clinically indicated
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Peptide-Specific Monitoring
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">GLP-1 Agonists (Semaglutide, Tirzepatide)</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li><strong>Weekly:</strong> Weight, blood glucose (if diabetic)</li>
                        <li><strong>Monthly:</strong> Blood pressure, heart rate, GI symptoms</li>
                        <li><strong>Every 3 months:</strong> HbA1c, lipid panel, CMP, TSH</li>
                        <li><strong>Annually:</strong> Thyroid exam, calcitonin (if baseline elevated)</li>
                        <li><strong>Watch for:</strong> Pancreatitis symptoms, gallbladder disease, hypoglycemia</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Growth Hormone Secretagogues (CJC-1295, Ipamorelin)</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li><strong>Baseline:</strong> IGF-1, fasting glucose, HbA1c</li>
                        <li><strong>Every 3 months:</strong> IGF-1, fasting glucose, HbA1c</li>
                        <li><strong>Every 6 months:</strong> CMP, lipid panel</li>
                        <li><strong>Watch for:</strong> Edema, carpal tunnel symptoms, joint pain, glucose changes</li>
                        <li><strong>Consider:</strong> DEXA scan at baseline and 6-12 months for body composition</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Recovery Peptides (BPC-157, TB-500)</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li><strong>Baseline:</strong> CBC, CMP (if long-term use planned)</li>
                        <li><strong>Weekly:</strong> Pain scales, functional assessments</li>
                        <li><strong>Every 4 weeks:</strong> Clinical exam of injury site</li>
                        <li><strong>As indicated:</strong> Imaging to assess healing progress</li>
                        <li><strong>Watch for:</strong> Injection site reactions, systemic symptoms</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Cognitive Peptides (Semax, Selank)</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li><strong>Baseline:</strong> Cognitive assessment (MoCA or similar)</li>
                        <li><strong>Weekly:</strong> Subjective cognitive function, sleep quality</li>
                        <li><strong>Every 4 weeks:</strong> Repeat cognitive assessment</li>
                        <li><strong>Watch for:</strong> Insomnia, anxiety, nasal irritation (if intranasal)</li>
                        <li><strong>Consider:</strong> Blood pressure monitoring if history of hypertension</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Patient Self-Monitoring Education
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Educate patients to monitor and report:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Daily Monitoring</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Weight (if weight loss peptide)</li>
                          <li>Blood glucose (if diabetic)</li>
                          <li>Injection site reactions</li>
                          <li>GI symptoms (nausea, vomiting, diarrhea)</li>
                          <li>Energy levels</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Report Immediately</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Severe abdominal pain</li>
                          <li>Difficulty breathing</li>
                          <li>Severe allergic reaction</li>
                          <li>Chest pain</li>
                          <li>Severe hypoglycemia</li>
                          <li>Neck swelling or difficulty swallowing</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mt-3">
                      <strong>Provide:</strong> Patient diary or app for tracking, emergency contact information, clear instructions on when to seek care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Emergency Protocols */}
          <TabsContent value="emergency" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Emergency Response Protocols
              </h2>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded mb-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      Emergency Contact Information
                    </h3>
                    <ul className="space-y-1 text-red-800 dark:text-red-200 text-sm">
                      <li><strong>Emergency Services:</strong> 911</li>
                      <li><strong>Poison Control:</strong> 1-800-222-1222</li>
                      <li><strong>FDA MedWatch:</strong> 1-800-FDA-1088</li>
                      <li><strong>Your Practice Emergency Line:</strong> [Insert your number]</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Anaphylaxis Emergency Protocol
                  </h3>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-4">
                    <p className="text-red-900 dark:text-red-100 font-semibold mb-2">
                      IMMEDIATE ACTIONS (within 60 seconds):
                    </p>
                    <ol className="space-y-2 text-red-800 dark:text-red-200 list-decimal list-inside">
                      <li><strong>Call 911</strong> - Do not delay</li>
                      <li><strong>Administer epinephrine</strong> - 0.3-0.5mg IM (anterolateral thigh)</li>
                      <li><strong>Position patient supine</strong> - Legs elevated 12 inches</li>
                      <li><strong>Maintain airway</strong> - Prepare for intubation if needed</li>
                      <li><strong>Administer oxygen</strong> - High-flow via non-rebreather mask</li>
                    </ol>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      <strong>Secondary interventions (while waiting for EMS):</strong>
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                      <li>Establish IV access, begin normal saline bolus</li>
                      <li>Repeat epinephrine every 5-15 minutes if no improvement</li>
                      <li>Administer H1 antihistamine (diphenhydramine 25-50mg IV/IM)</li>
                      <li>Administer H2 antihistamine (ranitidine 50mg IV or famotidine 20mg IV)</li>
                      <li>Administer corticosteroid (methylprednisolone 125mg IV)</li>
                      <li>Albuterol nebulizer if bronchospasm</li>
                      <li>Monitor vital signs continuously</li>
                      <li>Document all interventions with timestamps</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Severe Hypoglycemia Protocol
                  </h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded mb-4">
                    <p className="text-orange-900 dark:text-orange-100 font-semibold mb-2">
                      If patient is CONSCIOUS and able to swallow:
                    </p>
                    <ol className="space-y-1 text-orange-800 dark:text-orange-200 list-decimal list-inside text-sm">
                      <li>Give 15-20g fast-acting carbohydrates (4oz juice, glucose tablets)</li>
                      <li>Recheck blood glucose in 15 minutes</li>
                      <li>Repeat if still less than 70 mg/dL</li>
                      <li>Once glucose normalizes, give complex carb/protein snack</li>
                      <li>Monitor for 1-2 hours</li>
                    </ol>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-red-900 dark:text-red-100 font-semibold mb-2">
                      If patient is UNCONSCIOUS or unable to swallow:
                    </p>
                    <ol className="space-y-1 text-red-800 dark:text-red-200 list-decimal list-inside text-sm">
                      <li><strong>Call 911</strong></li>
                      <li><strong>Administer glucagon</strong> - 1mg IM or subcutaneous</li>
                      <li><strong>OR IV dextrose</strong> - 25g (50mL of D50W) if IV access available</li>
                      <li>Position on side (recovery position) to prevent aspiration</li>
                      <li>Monitor airway and breathing</li>
                      <li>Recheck glucose every 15 minutes</li>
                      <li>Transport to emergency department</li>
                    </ol>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Acute Pancreatitis Suspected
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                    <ol className="space-y-2 text-yellow-900 dark:text-yellow-100 list-decimal list-inside">
                      <li><strong>Discontinue peptide immediately</strong></li>
                      <li><strong>Send to emergency department</strong> - Do not delay</li>
                      <li><strong>Order labs:</strong> Lipase, amylase, CBC, CMP</li>
                      <li><strong>NPO</strong> - Nothing by mouth</li>
                      <li><strong>IV fluids</strong> - Aggressive hydration</li>
                      <li><strong>Pain management</strong> - Avoid NSAIDs (use opioids if needed)</li>
                      <li><strong>Imaging</strong> - CT abdomen if diagnosis unclear</li>
                      <li><strong>Admit</strong> - Most cases require hospitalization</li>
                      <li><strong>Report to FDA MedWatch</strong></li>
                    </ol>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Emergency Equipment Checklist
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Every practice offering peptide therapy should have the following emergency equipment readily available:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Anaphylaxis Kit</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Epinephrine auto-injectors (multiple)</li>
                        <li>Diphenhydramine (IV and oral)</li>
                        <li>Corticosteroids (IV)</li>
                        <li>Albuterol nebulizer</li>
                        <li>Oxygen and delivery system</li>
                        <li>IV supplies and normal saline</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Hypoglycemia Kit</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Glucagon emergency kit</li>
                        <li>D50W (dextrose 50%)</li>
                        <li>Glucose tablets</li>
                        <li>Juice boxes</li>
                        <li>Blood glucose meter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Basic Life Support</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>AED (automated external defibrillator)</li>
                        <li>Bag-valve-mask</li>
                        <li>Airway adjuncts</li>
                        <li>Blood pressure cuff</li>
                        <li>Pulse oximeter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Documentation</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Emergency protocol flowcharts</li>
                        <li>Emergency contact list</li>
                        <li>Adverse event reporting forms</li>
                        <li>Patient emergency information</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mt-4 text-sm">
                    <strong>Important:</strong> Check expiration dates monthly. Ensure all staff are trained in emergency protocols. Conduct emergency drills quarterly.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Safety Management?
          </h2>
          <p className="text-xl text-red-50 mb-6 max-w-2xl mx-auto">
            Access our comprehensive safety protocols and adverse event management resources
          </p>
          <Link href="/downloadable-resources">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Download Safety Protocols
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
