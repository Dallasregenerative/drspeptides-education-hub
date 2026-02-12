import { usePageTitle } from '../hooks/usePageTitle';
import PrintButton from "@/components/PrintButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { HelpCircle, BookOpen, AlertCircle, DollarSign, Shield, Briefcase, ArrowLeft} from "lucide-react";
import { useState } from 'react';
import { getCompleteFAQSchema } from '@/data/faqSchema';
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function FAQ() {
  usePageTitle('Peptide Therapy FAQ - 50+ Questions Answered for Healthcare Providers', {
    description: '50+ frequently asked questions about peptide therapy answered. Complete glossary of 100+ terms covering regulatory, clinical, billing, and safety topics for healthcare providers.',
    keywords: 'peptide therapy FAQ, peptide questions, peptide prescribing, peptide dosing questions, 503A vs 503B, peptide side effects, peptide protocols',
    schema: getCompleteFAQSchema()
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-500/20 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-indigo-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions & Glossary
            </h1>
            
          <div className="mt-4 mb-6">
            <PrintButton title="F A Q - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Get answers to the most common questions about peptide therapy, from getting started to advanced protocols
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-300">50+</div>
                <div className="text-sm text-indigo-100">Questions Answered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-300">100+</div>
                <div className="text-sm text-indigo-100">Terms Defined</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-300">6</div>
                <div className="text-sm text-indigo-100">Topic Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-300">2025</div>
                <div className="text-sm text-indigo-100">Up-to-Date Info</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="getting-started" className="space-y-8">
          <TabsList className="flex flex-wrap w-full h-auto gap-1">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
            <TabsTrigger value="clinical">Clinical</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
          </TabsList>

          {/* Getting Started Tab */}
          <TabsContent value="getting-started" className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-8 h-8 text-indigo-600 mr-3" />
                Getting Started with Peptide Therapy
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "I'm a physician interested in offering peptide therapy. Where do I start?",
                    a: "Start by completing a peptide therapy certification program (see our Training page). Then: (1) Review FDA regulations and your state's prescribing laws, (2) Establish a relationship with a reputable 503B compounding pharmacy, (3) Implement informed consent processes, (4) Start with well-studied peptides like BPC-157 or CJC-1295/Ipamorelin, (5) Join professional communities for ongoing education."
                  },
                  {
                    q: "Do I need special training or certification to prescribe peptides?",
                    a: "There is no legal requirement for special certification to prescribe compounded peptides (they fall under your general prescribing authority). However, specialized training is HIGHLY recommended for patient safety, efficacy, and liability protection. Organizations like A4M, SSRP, and AMMG offer peptide therapy certification programs."
                  },
                  {
                    q: "What equipment do I need to start offering peptide therapy?",
                    a: "Minimal equipment needed: (1) Refrigerator for peptide storage (2-8°C), (2) Sharps disposal containers, (3) Patient education materials, (4) Informed consent forms, (5) EMR system for documentation. You do NOT need to compound peptides yourself - order from 503B facilities."
                  },
                  {
                    q: "Which peptides should I start with as a beginner?",
                    a: "Best peptides for beginners: (1) BPC-157 - well-tolerated, clear benefits for healing, (2) CJC-1295/Ipamorelin - safe GH secretagogue combination, (3) Semaglutide/Tirzepatide - FDA-approved, strong evidence base. Avoid: Melanotan-II, PT-141, or experimental peptides until you have more experience."
                  },
                  {
                    q: "How much can I charge for peptide therapy?",
                    a: "Pricing varies by region and peptide. Typical ranges: (1) Semaglutide: $300-600/month, (2) BPC-157: $200-400/month, (3) CJC-1295/Ipamorelin: $300-500/month, (4) Initial consultation: $150-300, (5) Follow-up visits: $75-150. Most peptide therapy is cash-pay, though some insurance covers FDA-approved peptides."
                  },
                  {
                    q: "How do I market peptide therapy to patients?",
                    a: "Ethical marketing strategies: (1) Educational content (blog posts, social media), (2) Patient testimonials (with consent), (3) Before/after photos (where appropriate), (4) Free educational seminars, (5) Partnerships with gyms, wellness centers. AVOID: Making disease claims for non-FDA-approved peptides, guaranteeing results, or using celebrity endorsements without disclosure."
                  },
                  {
                    q: "What are the biggest mistakes new providers make?",
                    a: "Common mistakes: (1) Not obtaining proper informed consent, (2) Using unreliable compounding pharmacies, (3) Prescribing without adequate patient evaluation, (4) Inadequate patient education, (5) Poor documentation, (6) Not monitoring for adverse events, (7) Making unsupported claims, (8) Ignoring FDA regulations."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        {openFAQ === index && (
                          <p className="text-gray-700 mt-3 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                      <div className={`ml-4 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Regulatory Tab */}
          <TabsContent value="regulatory" className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                Regulatory & Legal Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Are peptides FDA-approved?",
                    a: "Some peptides are FDA-approved for specific indications (e.g., semaglutide for diabetes/obesity, sermorelin for growth hormone deficiency). However, MOST peptides used in wellness/anti-aging are NOT FDA-approved and are prescribed off-label as compounded medications. This is legal under the Federal Food, Drug, and Cosmetic Act sections 503A and 503B, but requires proper informed consent."
                  },
                  {
                    q: "What's the difference between 503A and 503B compounding?",
                    a: "503A: Traditional compounding pharmacies that compound patient-specific prescriptions. Can only compound after receiving a prescription for an individual patient. Lower regulatory oversight. 503B: Outsourcing facilities that can compound in larger batches without patient-specific prescriptions. Higher regulatory standards (cGMP). Subject to FDA inspection. Generally preferred for peptides due to better quality control."
                  },
                  {
                    q: "Can I prescribe peptides across state lines via telemedicine?",
                    a: "It depends on state law. Generally: (1) You must be licensed in the state where the PATIENT is located, (2) Some states require an in-person exam before prescribing, (3) Some states prohibit telemedicine prescribing of controlled substances or certain medications, (4) Check your state medical board's telemedicine regulations. Many providers use multi-state licenses (Interstate Medical Licensure Compact) to expand their reach."
                  },
                  {
                    q: "What are Category 2 peptides and why do they matter?",
                    a: "Category 2 peptides are bulk drug substances that FDA has determined present significant safety risks when used in compounding. As of 2025, 30+ peptides are on this list. 503B facilities can still compound them (with restrictions), but 503A pharmacies generally cannot. Examples: Sermorelin, CJC-1295, BPC-157, TB-500. This affects sourcing and prescribing."
                  },
                  {
                    q: "Can I get in trouble for prescribing off-label peptides?",
                    a: "Off-label prescribing is legal and common in medicine. However, you CAN face liability if: (1) You don't obtain proper informed consent, (2) You make false or misleading claims, (3) You prescribe outside your scope of practice, (4) You don't adequately evaluate the patient, (5) You ignore contraindications or drug interactions. Document everything and use informed consent forms."
                  },
                  {
                    q: "Do I need a DEA license to prescribe peptides?",
                    a: "No. Peptides are not controlled substances and do not require a DEA license. However, if you're prescribing other medications that ARE controlled (e.g., testosterone, HCG), you'll need a DEA license for those."
                  },
                  {
                    q: "What happened with compounded semaglutide in 2025?",
                    a: "In February 2025, FDA removed semaglutide and tirzepatide from the drug shortage list, meaning compounding pharmacies were required to stop compounding these medications. 503A pharmacies had until April 22, 2025, and 503B facilities until May 22, 2025. Providers must now prescribe FDA-approved versions (Ozempic, Wegovy, Mounjaro, Zepbound) or alternative peptides."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(100 + index)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        {openFAQ === 100 + index && (
                          <p className="text-gray-700 mt-3 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                      <div className={`ml-4 transform transition-transform ${openFAQ === 100 + index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Clinical Tab */}
          <TabsContent value="clinical" className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="w-8 h-8 text-blue-600 mr-3" />
                Clinical Practice Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "How do I dose peptides? Are there standard protocols?",
                    a: "Dosing varies by peptide and indication. General principles: (1) Start low, go slow (especially with GLP-1s), (2) Use evidence-based protocols when available (see our peptide pages), (3) Adjust based on patient response and tolerability, (4) Consider patient weight, age, and comorbidities. Example: BPC-157 typically 250-500 mcg daily, CJC-1295 100-200 mcg 2-3x/week."
                  },
                  {
                    q: "How long should patients stay on peptide therapy?",
                    a: "Duration depends on the peptide and goal: (1) Acute healing (BPC-157, TB-500): 4-12 weeks, (2) Weight loss (GLP-1s): 6-12+ months, then maintenance, (3) Growth hormone optimization: 3-6 month cycles with breaks, (4) Longevity peptides (Epithalon): 10-20 day cycles 2-4x/year. Avoid indefinite use without periodic reassessment."
                  },
                  {
                    q: "What labs should I order before starting peptide therapy?",
                    a: "Baseline labs vary by peptide: (1) All patients: CBC, CMP, lipid panel, (2) GLP-1s: HbA1c, fasting glucose, thyroid panel, (3) GH peptides: IGF-1, fasting glucose, (4) Thymosin Alpha-1: CBC with differential, (5) Consider: hormone panels, inflammatory markers (CRP, ESR). Repeat labs at 3 months, then every 6 months."
                  },
                  {
                    q: "Can patients combine multiple peptides?",
                    a: "Yes, but carefully. Safe combinations: (1) BPC-157 + TB-500 (synergistic healing), (2) CJC-1295 + Ipamorelin (complementary GH release), (3) Semax + Selank (cognitive + anxiolytic). AVOID: Multiple GLP-1s together, combining peptides with similar mechanisms without medical supervision. Start one peptide at a time to assess individual response."
                  },
                  {
                    q: "How do I monitor patients on peptide therapy?",
                    a: "Monitoring protocol: (1) Initial follow-up at 2-4 weeks, (2) Then monthly for first 3 months, (3) Then every 3-6 months if stable, (4) Track: weight, vital signs, side effects, lab values, (5) Use patient diaries for symptom tracking, (6) Document everything in EMR. Adjust dosing based on response and tolerability."
                  },
                  {
                    q: "What are the most common side effects I'll see?",
                    a: "By peptide: (1) GLP-1s: Nausea (most common), constipation, fatigue, (2) BPC-157/TB-500: Injection site reactions, rare headaches, (3) GH peptides: Water retention, joint pain, carpal tunnel, (4) Cognitive peptides: Headaches, vivid dreams. Most side effects are mild and resolve with dose adjustment or time."
                  },
                  {
                    q: "When should I discontinue a peptide?",
                    a: "Discontinue if: (1) Severe adverse reaction (anaphylaxis, severe GI symptoms), (2) No response after adequate trial (8-12 weeks), (3) Patient non-compliance, (4) Contraindication develops (pregnancy, cancer diagnosis), (5) Patient achieves goal and wants to stop, (6) Cost becomes prohibitive. Taper GLP-1s to avoid rebound weight gain."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(200 + index)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        {openFAQ === 200 + index && (
                          <p className="text-gray-700 mt-3 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                      <div className={`ml-4 transform transition-transform ${openFAQ === 200 + index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                Billing & Insurance Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "Do insurance companies cover peptide therapy?",
                    a: "It depends: (1) FDA-approved peptides for approved indications: Usually covered (e.g., semaglutide for diabetes), (2) FDA-approved peptides for off-label use: Sometimes covered with prior authorization, (3) Compounded peptides: Rarely covered. Most peptide therapy in wellness/anti-aging is cash-pay. Some HSA/FSA accounts can be used."
                  },
                  {
                    q: "What CPT codes do I use for peptide therapy?",
                    a: "Common codes: (1) Initial consultation: 99204-99205 (new patient), (2) Follow-up visits: 99213-99214 (established patient), (3) Injection training: 96372 (therapeutic injection), (4) Metabolic assessment: 96160, (5) Nutritional counseling: 97802-97803. Document medical necessity for each service."
                  },
                  {
                    q: "How do I bill for telemedicine peptide consultations?",
                    a: "Use standard E/M codes with modifier -95 (synchronous telemedicine) or use telehealth-specific codes (99441-99443 for phone, G2012 for virtual check-in). Requirements: (1) Patient consent, (2) HIPAA-compliant platform, (3) Documentation of encounter, (4) State licensure in patient's location. Reimbursement varies by payer."
                  },
                  {
                    q: "Should I operate cash-pay or try to bill insurance?",
                    a: "Most peptide practices are cash-pay because: (1) Faster revenue cycle, (2) No prior authorizations, (3) No insurance denials, (4) Higher profit margins, (5) More flexibility in pricing. However, billing insurance for FDA-approved peptides (semaglutide, sermorelin) can expand patient access. Many practices do hybrid models."
                  },
                  {
                    q: "What's a fair markup on peptides?",
                    a: "Industry standard: 2-3x cost of goods. Example: If BPC-157 costs you $80 from pharmacy, charge patient $160-240. This covers: (1) Your time for consultation/monitoring, (2) Overhead (staff, facility, supplies), (3) Liability risk, (4) Patient education materials. Be transparent about pricing - patients appreciate honesty."
                  },
                  {
                    q: "Do I need to collect sales tax on peptides?",
                    a: "It depends on your state. Generally: (1) Prescription medications are exempt from sales tax in most states, (2) Over-the-counter supplements are taxable, (3) Compounded peptides with a prescription are usually exempt. Check with your state's department of revenue or your accountant. Rules vary significantly by state."
                  },
                  {
                    q: "How do I handle patients who can't afford peptide therapy?",
                    a: "Options: (1) Offer payment plans (e.g., monthly installments), (2) Suggest less expensive alternatives (e.g., oral semaglutide vs injection), (3) Recommend lifestyle interventions first, (4) Partner with financing companies (CareCredit), (5) Offer group programs to reduce per-patient cost, (6) Be transparent about costs upfront to avoid surprises."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(300 + index)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        {openFAQ === 300 + index && (
                          <p className="text-gray-700 mt-3 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                      <div className={`ml-4 transform transition-transform ${openFAQ === 300 + index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Safety Tab */}
          <TabsContent value="safety" className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                Safety & Risk Management
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "What are the biggest safety concerns with peptide therapy?",
                    a: "Top safety concerns: (1) Quality/purity of compounded peptides (contamination, wrong concentration), (2) Allergic reactions (rare but serious), (3) Injection site infections, (4) Drug interactions, (5) Use in contraindicated populations (pregnancy, cancer), (6) Long-term effects unknown for many peptides. Mitigate with: proper sourcing, informed consent, patient education, monitoring."
                  },
                  {
                    q: "Who should NOT receive peptide therapy?",
                    a: "Absolute contraindications: (1) Pregnancy/breastfeeding (most peptides), (2) Active cancer (especially GH peptides), (3) Severe kidney/liver disease, (4) Allergy to specific peptide. Relative contraindications: (1) History of pancreatitis (GLP-1s), (2) Thyroid disease (GLP-1s), (3) Diabetic retinopathy (GLP-1s), (4) Psychiatric disorders (some cognitive peptides). Evaluate risk/benefit individually."
                  },
                  {
                    q: "How do I handle adverse events?",
                    a: "Adverse event protocol: (1) Document immediately in EMR with details, (2) Assess severity (mild/moderate/severe), (3) Determine if peptide-related (temporal relationship, known side effect), (4) Manage symptomatically or discontinue if severe, (5) Report serious adverse events to FDA MedWatch, (6) Notify compounding pharmacy if quality concern, (7) Follow up with patient until resolved."
                  },
                  {
                    q: "Do I need malpractice insurance for peptide therapy?",
                    a: "YES. Peptide therapy falls under your general medical practice, so your existing malpractice insurance should cover it. However: (1) Notify your carrier that you're offering peptide therapy, (2) Ensure your policy covers off-label prescribing, (3) Consider higher coverage limits if peptides become a major part of your practice, (4) Some carriers exclude certain high-risk procedures - verify coverage."
                  },
                  {
                    q: "What should I do if a patient has an allergic reaction?",
                    a: "Allergic reaction protocol: (1) Assess severity (hives vs anaphylaxis), (2) For anaphylaxis: Call 911, administer epinephrine if available, (3) For mild reactions: Discontinue peptide, give antihistamine, observe, (4) Document thoroughly, (5) Do NOT rechallenge with same peptide, (6) Consider allergy testing before trying alternative peptides, (7) Report to FDA MedWatch if serious."
                  },
                  {
                    q: "How do I minimize my liability risk?",
                    a: "Risk mitigation strategies: (1) Comprehensive informed consent (document risks, alternatives, off-label status), (2) Thorough patient evaluation before prescribing, (3) Use reputable compounding pharmacies only, (4) Document everything in EMR, (5) Monitor patients regularly, (6) Stay current with training/education, (7) Follow evidence-based protocols, (8) Have clear adverse event procedures, (9) Maintain malpractice insurance."
                  },
                  {
                    q: "Should I report adverse events to FDA?",
                    a: "Yes, report serious adverse events to FDA MedWatch. Reportable events: (1) Death, (2) Life-threatening reaction, (3) Hospitalization, (4) Disability/permanent damage, (5) Congenital anomaly, (6) Required intervention to prevent permanent harm. Reporting is voluntary for healthcare providers but strongly encouraged. Protects public health and helps identify safety signals."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(400 + index)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                        {openFAQ === 400 + index && (
                          <p className="text-gray-700 mt-3 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                      <div className={`ml-4 transform transition-transform ${openFAQ === 400 + index ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Glossary Tab */}
          <TabsContent value="glossary" className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
                Peptide Therapy Glossary
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-8">
                  Essential terms and definitions for understanding peptide therapy, from basic concepts to advanced protocols.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { term: "503A Pharmacy", def: "Traditional compounding pharmacy that compounds patient-specific prescriptions after receiving an order from a licensed prescriber." },
                  { term: "503B Outsourcing Facility", def: "FDA-registered facility that can compound larger batches of sterile drugs under cGMP standards without patient-specific prescriptions." },
                  { term: "Anabolic", def: "Building up or promoting growth of tissues, especially muscle. Many peptides have anabolic effects." },
                  { term: "Bioavailability", def: "The proportion of a drug that enters circulation and is available at the site of action. Peptides have low oral bioavailability." },
                  { term: "Category 2 Peptides", def: "Bulk drug substances FDA has identified as presenting significant safety risks when used in compounding." },
                  { term: "Certificate of Analysis (COA)", def: "Document from testing laboratory certifying a product meets specifications for purity, potency, and sterility." },
                  { term: "cGMP", def: "Current Good Manufacturing Practice - FDA quality standards for pharmaceutical manufacturing." },
                  { term: "Compounding", def: "The creation of a pharmaceutical preparation by combining, mixing, or altering ingredients to create a customized medication." },
                  { term: "Endotoxin", def: "Toxic substance from bacterial cell walls that can cause fever and inflammation. Must be tested in injectable peptides." },
                  { term: "Form 483", def: "FDA document listing observations of objectionable conditions found during facility inspection." },
                  { term: "GLP-1 Agonist", def: "Glucagon-like peptide-1 receptor agonist. Mimics GLP-1 hormone to regulate blood sugar and appetite. Examples: semaglutide, tirzepatide." },
                  { term: "Growth Hormone Secretagogue", def: "Substance that stimulates the pituitary gland to release growth hormone. Examples: CJC-1295, Ipamorelin, GHRP-6." },
                  { term: "Half-Life", def: "Time required for half of a drug to be eliminated from the body. Affects dosing frequency." },
                  { term: "HPLC", def: "High-Performance Liquid Chromatography - analytical technique used to identify and quantify peptides." },
                  { term: "Lyophilized", def: "Freeze-dried. Most peptides are shipped as lyophilized powder and reconstituted with bacteriostatic water before use." },
                  { term: "Mass Spectrometry", def: "Analytical technique that measures molecular weight and identifies chemical structures. Used to verify peptide identity." },
                  { term: "Nootropic", def: "Substance that enhances cognitive function, memory, creativity, or motivation. Examples: Semax, Selank, Dihexa." },
                  { term: "Off-Label Use", def: "Prescribing an FDA-approved drug for a use not listed in the official labeling. Legal but requires informed consent." },
                  { term: "Peptide", def: "Short chain of amino acids (typically 2-50) linked by peptide bonds. Smaller than proteins but similar structure." },
                  { term: "Pharmacokinetics", def: "Study of how the body absorbs, distributes, metabolizes, and excretes a drug (ADME)." },
                  { term: "Purity", def: "Percentage of the desired peptide in a sample, excluding impurities. Pharmaceutical-grade should be ≥95% pure." },
                  { term: "Reconstitution", def: "Process of mixing lyophilized peptide powder with bacteriostatic water to create injectable solution." },
                  { term: "Subcutaneous (SQ)", def: "Injection into the fatty tissue layer between skin and muscle. Most common route for peptide administration." },
                  { term: "Telomerase", def: "Enzyme that lengthens telomeres (protective caps on chromosomes). Some peptides (Epithalon) activate telomerase." },
                  { term: "USP <71>", def: "United States Pharmacopeia sterility testing standard for injectable products. Requires 14-day incubation." },
                  { term: "USP <85>", def: "United States Pharmacopeia endotoxin testing standard. Bacterial endotoxin test (LAL test)." },
                  { term: "USP <795>", def: "United States Pharmacopeia standards for non-sterile compounding (oral, topical, nasal preparations)." },
                  { term: "USP <797>", def: "United States Pharmacopeia standards for sterile compounding (injectable preparations). Requires cleanroom." }
                ].map((item, index) => (
                  <div key={index} className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-sm text-gray-700">{item.def}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join our community forum to ask questions and learn from experienced peptide therapy providers.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg">
            Join Community Forum
          </button>
        </div>
      </div>
    </div>
  );
}
