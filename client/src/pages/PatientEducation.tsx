import { usePageTitle } from '../hooks/usePageTitle';
import PrintButton from "@/components/PrintButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { FileText, Download, Users, Heart, Brain, Dumbbell, Sparkles, Shield, Info, ArrowLeft} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PatientEducation() {
  usePageTitle("Patient Education Library", { description: "Downloadable patient handouts, informed consent templates, and safety guides for 15+ peptides. Save 100+ hours with ready-to-use educational materials for weight loss, recovery, anti-aging, and cognitive enhancement peptides." });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
              <Users className="w-10 h-10 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Patient Education Library
            </h1>
            
          <div className="mt-4 mb-6">
            <PrintButton title="Patient Education - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Downloadable patient handouts, informed consent templates, and educational materials to help your patients 
              understand peptide therapy and make informed decisions
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">15+</div>
                <div className="text-sm text-blue-100">Patient Handouts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">10+</div>
                <div className="text-sm text-blue-100">Consent Templates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">5</div>
                <div className="text-sm text-blue-100">Safety Guides</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">100%</div>
                <div className="text-sm text-blue-100">Free to Download</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="weight-loss" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 gap-2">
            <TabsTrigger value="weight-loss">Weight Loss</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
            <TabsTrigger value="longevity">Longevity</TabsTrigger>
            <TabsTrigger value="consent">Consent Forms</TabsTrigger>
            <TabsTrigger value="safety">Safety Guides</TabsTrigger>
          </TabsList>

          {/* Weight Loss Tab */}
          <TabsContent value="weight-loss" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-pink-600 mr-3" />
                Weight Loss & Metabolism Peptides
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Patient-friendly educational materials for GLP-1 agonists and metabolic peptides. These handouts 
                  explain how the medications work, what to expect, and how to manage side effects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Semaglutide (Ozempic/Wegovy) Patient Guide',
                    description: 'Comprehensive 2-page handout explaining mechanism, dosing schedule, expected weight loss, side effects, and when to call the doctor.',
                    pages: '2 pages',
                    topics: ['How it works', 'Dosing schedule', 'Expected results', 'Side effects', 'Diet tips', 'When to call doctor']
                  },
                  {
                    title: 'Tirzepatide (Mounjaro/Zepbound) Patient Guide',
                    description: 'Patient education on dual GIP/GLP-1 agonist, including comparison to semaglutide, dosing, and managing nausea.',
                    pages: '2 pages',
                    topics: ['Dual mechanism', 'Dosing titration', 'Weight loss timeline', 'Nausea management', 'Food choices', 'Exercise tips']
                  },
                  {
                    title: 'GLP-1 Injection Training Guide',
                    description: 'Step-by-step visual guide for subcutaneous self-injection, including injection sites, technique, and disposal.',
                    pages: '1 page',
                    topics: ['Injection sites', 'Step-by-step technique', 'Needle disposal', 'Storage', 'Troubleshooting']
                  },
                  {
                    title: 'Managing GLP-1 Side Effects',
                    description: 'Practical tips for managing nausea, constipation, and other common GLP-1 side effects.',
                    pages: '1 page',
                    topics: ['Nausea relief', 'Constipation management', 'Food strategies', 'When to reduce dose', 'Red flags']
                  },
                  {
                    title: 'AOD-9604 Patient Information',
                    description: 'Educational handout on fat-burning peptide AOD-9604, including mechanism, dosing, and realistic expectations.',
                    pages: '1 page',
                    topics: ['Fat metabolism', 'Dosing protocol', 'Expected timeline', 'Diet requirements', 'Exercise synergy']
                  },
                  {
                    title: '5-Amino-1MQ Patient Guide',
                    description: 'Information on NNMT inhibitor for metabolic enhancement, including mechanism and protocol.',
                    pages: '1 page',
                    topics: ['Metabolic mechanism', 'Dosing', 'Expected effects', 'Monitoring', 'Combination therapy']
                  }
                ].map((handout, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{handout.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">{handout.description}</p>
                        <span className="inline-block px-3 py-1 bg-pink-200 text-pink-900 text-xs font-semibold rounded-full">
                          {handout.pages}
                        </span>
                      </div>
                      <FileText className="w-8 h-8 text-pink-600 ml-4 flex-shrink-0" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {handout.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-white px-2 py-1 rounded-full text-gray-700">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Recovery Tab */}
          <TabsContent value="recovery" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Dumbbell className="w-8 h-8 text-teal-600 mr-3" />
                Recovery & Healing Peptides
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Educational materials for patients using BPC-157, TB-500, and other healing peptides for injury recovery, 
                  post-surgical healing, and tissue repair.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'BPC-157 Patient Information Sheet',
                    description: 'Comprehensive guide to "Body Protection Compound" for tendon, ligament, and gut healing.',
                    pages: '2 pages',
                    topics: ['Healing mechanism', 'Dosing protocol', 'Injection technique', 'Expected timeline', 'Combining with PT']
                  },
                  {
                    title: 'TB-500 (Thymosin Beta-4) Guide',
                    description: 'Patient education on tissue repair peptide, including dosing, administration, and recovery expectations.',
                    pages: '2 pages',
                    topics: ['Tissue repair', 'Dosing schedule', 'Administration', 'Recovery timeline', 'Athletic use']
                  },
                  {
                    title: 'BPC-157 + TB-500 Combination Protocol',
                    description: 'How to use BPC-157 and TB-500 together for maximum healing synergy.',
                    pages: '1 page',
                    topics: ['Synergistic effects', 'Dosing both', 'Injection timing', 'Expected results', 'Duration']
                  },
                  {
                    title: 'GHK-Cu for Skin & Wound Healing',
                    description: 'Patient guide to copper peptide for skin rejuvenation, wound healing, and scar reduction.',
                    pages: '1 page',
                    topics: ['Skin benefits', 'Topical vs injection', 'Application', 'Timeline', 'Before/after care']
                  }
                ].map((handout, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{handout.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">{handout.description}</p>
                        <span className="inline-block px-3 py-1 bg-teal-200 text-teal-900 text-xs font-semibold rounded-full">
                          {handout.pages}
                        </span>
                      </div>
                      <FileText className="w-8 h-8 text-teal-600 ml-4 flex-shrink-0" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {handout.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-white px-2 py-1 rounded-full text-gray-700">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Cognitive Tab */}
          <TabsContent value="cognitive" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="w-8 h-8 text-purple-600 mr-3" />
                Cognitive Enhancement Peptides
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Patient education materials for nootropic peptides that enhance focus, memory, and cognitive performance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Semax Patient Guide',
                    description: 'Comprehensive information on Russian nootropic peptide for focus, memory, and neuroprotection.',
                    pages: '2 pages',
                    topics: ['Cognitive benefits', 'Nasal administration', 'Dosing', 'Expected effects', 'Duration of use']
                  },
                  {
                    title: 'Selank for Anxiety & Focus',
                    description: 'Patient education on anxiolytic peptide that reduces anxiety while improving focus.',
                    pages: '1 page',
                    topics: ['Anti-anxiety effects', 'Nasal spray use', 'Dosing', 'Onset time', 'Safety profile']
                  },
                  {
                    title: 'Dihexa Cognitive Enhancement Guide',
                    description: 'Information on powerful cognitive enhancer for memory, learning, and neuroplasticity.',
                    pages: '1 page',
                    topics: ['Memory enhancement', 'Dosing protocol', 'Expected benefits', 'Monitoring', 'Precautions']
                  }
                ].map((handout, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{handout.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">{handout.description}</p>
                        <span className="inline-block px-3 py-1 bg-purple-200 text-purple-900 text-xs font-semibold rounded-full">
                          {handout.pages}
                        </span>
                      </div>
                      <FileText className="w-8 h-8 text-purple-600 ml-4 flex-shrink-0" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {handout.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-white px-2 py-1 rounded-full text-gray-700">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Longevity Tab */}
          <TabsContent value="longevity" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="w-8 h-8 text-amber-600 mr-3" />
                Longevity & Anti-Aging Peptides
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Educational materials for patients interested in longevity peptides, telomerase activation, and healthy aging.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Epithalon (Epitalon) Patient Guide',
                    description: 'Comprehensive information on telomerase-activating peptide for longevity and cellular health.',
                    pages: '2 pages',
                    topics: ['Telomere science', 'Dosing cycles', 'Expected benefits', 'Safety', 'Monitoring']
                  },
                  {
                    title: 'NAD+ Therapy Patient Information',
                    description: 'Guide to NAD+ supplementation for cellular energy, DNA repair, and healthy aging.',
                    pages: '1 page',
                    topics: ['Cellular energy', 'IV vs subcutaneous', 'Dosing', 'Benefits', 'Side effects']
                  },
                  {
                    title: 'Thymosin Alpha-1 Immune Support',
                    description: 'Patient education on immune-modulating peptide for immune health and longevity.',
                    pages: '1 page',
                    topics: ['Immune function', 'Dosing protocol', 'Benefits', 'Who should use', 'Safety']
                  }
                ].map((handout, index) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{handout.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">{handout.description}</p>
                        <span className="inline-block px-3 py-1 bg-amber-200 text-amber-900 text-xs font-semibold rounded-full">
                          {handout.pages}
                        </span>
                      </div>
                      <FileText className="w-8 h-8 text-amber-600 ml-4 flex-shrink-0" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {handout.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-white px-2 py-1 rounded-full text-gray-700">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Consent Forms Tab */}
          <TabsContent value="consent" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Informed Consent Templates
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Legal Protection & Patient Safety</h3>
                <p className="text-gray-700 text-sm">
                  These informed consent templates are designed to protect both you and your patients by ensuring patients 
                  understand the investigational nature of peptide therapy, potential risks, and alternatives. Customize 
                  these templates with your practice information and have your healthcare attorney review before use.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'GLP-1 Agonist Informed Consent',
                    description: 'Comprehensive consent form for semaglutide, tirzepatide, and other GLP-1 medications.',
                    includes: ['Mechanism of action', 'Expected benefits', 'Common side effects', 'Serious risks', 'Alternatives', 'Patient responsibilities']
                  },
                  {
                    title: 'Peptide Therapy General Consent',
                    description: 'Universal consent form for investigational peptide therapy (non-FDA approved peptides).',
                    includes: ['Investigational status', 'Off-label use', 'Compounding risks', 'Monitoring requirements', 'Right to refuse']
                  },
                  {
                    title: 'Injectable Peptide Consent',
                    description: 'Specific consent for subcutaneous and intramuscular peptide injections.',
                    includes: ['Injection risks', 'Infection prevention', 'Proper technique', 'Adverse reactions', 'Emergency procedures']
                  },
                  {
                    title: 'Telemedicine Peptide Consultation Consent',
                    description: 'Consent form for telemedicine prescribing of peptides, including limitations and risks.',
                    includes: ['Telemedicine limitations', 'Physical exam waiver', 'Technology risks', 'Privacy', 'State laws']
                  },
                  {
                    title: 'Growth Hormone Peptide Consent',
                    description: 'Consent for CJC-1295, Ipamorelin, and other GH-releasing peptides.',
                    includes: ['GH mechanism', 'Benefits/risks', 'Contraindications', 'Monitoring', 'Athletic use prohibition']
                  },
                  {
                    title: 'Cognitive Enhancement Peptide Consent',
                    description: 'Consent for Semax, Selank, and other nootropic peptides.',
                    includes: ['Cognitive effects', 'Research status', 'Side effects', 'Monitoring', 'Alternatives']
                  }
                ].map((form, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{form.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">{form.description}</p>
                      </div>
                      <Shield className="w-8 h-8 text-blue-600 ml-4 flex-shrink-0" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Includes:</p>
                      <ul className="space-y-1">
                        {form.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-xs text-gray-700 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-2" />
                      Download Template (Word)
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Legal Notice</h3>
                    <p className="text-yellow-800 text-sm">
                      These consent templates are provided for educational purposes only and do not constitute legal advice. 
                      You MUST have your healthcare attorney review and customize these forms for your specific practice, 
                      state laws, and patient population before use. Informed consent requirements vary by state and specialty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Safety Guides Tab */}
          <TabsContent value="safety" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                Safety Guides & Emergency Protocols
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Critical safety information for patients, including injection safety, side effect management, and when 
                  to seek emergency care.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Safe Injection Technique Guide',
                    description: 'Step-by-step visual guide for safe subcutaneous injection, including site rotation and infection prevention.',
                    topics: ['Hand washing', 'Site selection', 'Injection technique', 'Needle disposal', 'Infection signs']
                  },
                  {
                    title: 'Peptide Storage & Handling',
                    description: 'How to properly store, reconstitute, and handle peptides to maintain potency and safety.',
                    topics: ['Refrigeration', 'Reconstitution', 'Sterile technique', 'Expiration dates', 'Travel tips']
                  },
                  {
                    title: 'When to Call Your Doctor',
                    description: 'Red flags and warning signs that require immediate medical attention.',
                    topics: ['Allergic reactions', 'Severe side effects', 'Injection site issues', 'Emergency symptoms', 'Contact info']
                  },
                  {
                    title: 'Managing Common Side Effects',
                    description: 'Practical tips for managing nausea, injection site reactions, and other common side effects.',
                    topics: ['Nausea relief', 'Site reactions', 'Headaches', 'Fatigue', 'When to adjust dose']
                  },
                  {
                    title: 'Peptide Therapy Safety Checklist',
                    description: 'Comprehensive safety checklist for patients to review before each injection.',
                    topics: ['Pre-injection checks', 'Contraindications', 'Drug interactions', 'Monitoring', 'Record keeping']
                  }
                ].map((guide, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                        <p className="text-sm text-gray-700 mb-3">{guide.description}</p>
                      </div>
                      <Shield className="w-8 h-8 text-red-600 ml-4 flex-shrink-0" />
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-white px-2 py-1 rounded-full text-gray-700">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Empower Your Patients with Education</h2>
          <p className="text-xl text-blue-100 mb-8">
            Download all patient education materials and consent templates to streamline your practice and improve patient outcomes.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            <Download className="w-5 h-5 mr-2" />
            Download Complete Library (ZIP)
          </button>
        </div>
      </div>
    </div>
  );
}
