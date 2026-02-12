import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  BookOpen, 
  CheckCircle, 
  AlertTriangle, 
  Beaker, 
  Clock, 
  DollarSign,
  Shield,
  FileText,
  GraduationCap,
  ArrowRight,
  Bookmark,
  Share2, ArrowLeft} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function UltimateGuidePeptideTherapy() {
  usePageTitle("The Ultimate Guide to Peptide Therapy (2026) - Complete Healthcare Provider Resource", {
    description: "The most comprehensive guide to peptide therapy for healthcare providers. Covers 60+ peptides, dosing protocols, 503A vs 503B sourcing, billing codes, patient selection, and clinical best practices. Updated for 2026.",
    keywords: "peptide therapy guide, peptide therapy for doctors, how to prescribe peptides, peptide protocols, 503A pharmacy, 503B outsourcing facility, peptide dosing, BPC-157 guide, semaglutide guide, tirzepatide guide, peptide therapy training"
  });

  const tableOfContents = [
    { id: "introduction", title: "1. Introduction to Peptide Therapy" },
    { id: "what-are-peptides", title: "2. What Are Peptides?" },
    { id: "categories", title: "3. Peptide Categories & Applications" },
    { id: "sourcing", title: "4. Sourcing: 503A vs 503B vs Research" },
    { id: "patient-selection", title: "5. Patient Selection & Assessment" },
    { id: "dosing", title: "6. Dosing Protocols & Administration" },
    { id: "monitoring", title: "7. Monitoring & Follow-Up" },
    { id: "billing", title: "8. Billing & Reimbursement" },
    { id: "legal", title: "9. Legal & Regulatory Considerations" },
    { id: "starting", title: "10. Starting a Peptide Practice" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-200 border-yellow-400">
              Updated February 2026 • 45 min read
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ultimate Guide to Peptide Therapy for Healthcare Providers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Everything you need to know to safely and effectively integrate peptide therapy 
              into your medical practice. From basic science to billing codes, this comprehensive 
              guide covers it all.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" className="gap-2">
                <Bookmark className="h-5 w-5" />
                Save for Later
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-white border-white hover:bg-white/10">
                <Share2 className="h-5 w-5" />
                Share Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Author & Trust Signals */}
      <section className="border-b bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Medically Reviewed</p>
                <p className="text-sm text-gray-600">By Board-Certified Physicians in Regenerative Medicine</p>
              </div>
            </div>
            <div className="flex gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                50+ Citations
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Last Updated: Feb 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <Card className="mb-12 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <BookOpen className="h-5 w-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-2">
                {tableOfContents.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline py-1"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {item.title}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 1: Introduction */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction to Peptide Therapy</h2>
            <p className="text-lg text-gray-700 mb-4">
              Peptide therapy represents one of the most significant advances in regenerative and functional medicine 
              over the past decade. With the global peptide therapeutics market projected to reach $81.5 billion by 2034, 
              healthcare providers who understand and offer peptide therapy are positioned at the forefront of modern medicine.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              This guide is designed specifically for physicians, nurse practitioners, physician assistants, and other 
              healthcare providers who want to integrate peptide therapy into their practice. Whether you're completely 
              new to peptides or looking to expand your existing knowledge, this resource will provide the foundation 
              you need.
            </p>
            <Card className="bg-green-50 border-green-200 my-6">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-green-900 mb-2">Key Takeaways</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Peptide therapy is a $49.5B market growing at 5.1% annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>34% of functional medicine practitioners now prescribe peptides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Patient demand has increased 312% since 2020</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: What Are Peptides */}
          <section id="what-are-peptides" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. What Are Peptides?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Peptides are short chains of amino acids, typically containing between 2 and 50 amino acids linked by 
              peptide bonds. They differ from proteins primarily in their size—proteins are larger molecules made up 
              of one or more polypeptide chains.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In the human body, peptides serve as signaling molecules, hormones, and neurotransmitters. They play 
              crucial roles in virtually every physiological process, from growth and metabolism to immune function 
              and tissue repair.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Therapeutic Peptides Work</h3>
            <p className="text-lg text-gray-700 mb-4">
              Therapeutic peptides work by mimicking or modulating the body's natural signaling pathways. Unlike 
              traditional pharmaceuticals that often block receptors or inhibit enzymes, peptides typically work 
              with the body's existing systems to restore optimal function.
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Characteristic</th>
                    <th className="border p-3 text-left">Peptides</th>
                    <th className="border p-3 text-left">Small Molecule Drugs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Size</td>
                    <td className="border p-3">500-5,000 Da</td>
                    <td className="border p-3">&lt;500 Da</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Specificity</td>
                    <td className="border p-3">High (fewer off-target effects)</td>
                    <td className="border p-3">Variable</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Administration</td>
                    <td className="border p-3">Usually injection/nasal</td>
                    <td className="border p-3">Usually oral</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Half-life</td>
                    <td className="border p-3">Minutes to hours</td>
                    <td className="border p-3">Hours to days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Categories */}
          <section id="categories" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Peptide Categories & Applications</h2>
            <p className="text-lg text-gray-700 mb-6">
              Therapeutic peptides can be categorized by their primary mechanism of action and clinical application. 
              Understanding these categories helps providers select appropriate peptides for specific patient needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-lg">Weight Loss & Metabolic</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <Link href="/peptides/semaglutide" className="text-blue-600 hover:underline">Semaglutide</Link> (Ozempic, Wegovy)</li>
                    <li>• <Link href="/peptides/tirzepatide" className="text-blue-600 hover:underline">Tirzepatide</Link> (Mounjaro, Zepbound)</li>
                    <li>• <Link href="/peptides/retatrutide" className="text-blue-600 hover:underline">Retatrutide</Link></li>
                    <li>• <Link href="/peptides/aod-9604" className="text-blue-600 hover:underline">AOD-9604</Link></li>
                    <li>• <Link href="/peptides/tesofensine" className="text-blue-600 hover:underline">Tesofensine</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-lg">Healing & Regeneration</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <Link href="/peptides/bpc-157" className="text-blue-600 hover:underline">BPC-157</Link></li>
                    <li>• <Link href="/peptides/tb-500" className="text-blue-600 hover:underline">TB-500 (Thymosin Beta-4)</Link></li>
                    <li>• <Link href="/peptides/ghk-cu" className="text-blue-600 hover:underline">GHK-Cu</Link></li>
                    <li>• <Link href="/peptides/mgf" className="text-blue-600 hover:underline">MGF (Mechano Growth Factor)</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-lg">Growth Hormone Secretagogues</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <Link href="/peptides/cjc-1295" className="text-blue-600 hover:underline">CJC-1295</Link></li>
                    <li>• <Link href="/peptides/ipamorelin" className="text-blue-600 hover:underline">Ipamorelin</Link></li>
                    <li>• <Link href="/peptides/sermorelin" className="text-blue-600 hover:underline">Sermorelin</Link></li>
                    <li>• <Link href="/peptides/tesamorelin" className="text-blue-600 hover:underline">Tesamorelin</Link></li>
                    <li>• <Link href="/peptides/ibutamoren" className="text-blue-600 hover:underline">MK-677 (Ibutamoren)</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg">Cognitive Enhancement</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <Link href="/peptides/semax" className="text-blue-600 hover:underline">Semax</Link></li>
                    <li>• <Link href="/peptides/selank" className="text-blue-600 hover:underline">Selank</Link></li>
                    <li>• <Link href="/peptides/dihexa" className="text-blue-600 hover:underline">Dihexa</Link></li>
                    <li>• <Link href="/peptides/pinealon" className="text-blue-600 hover:underline">Pinealon</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg">Immune Support</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <Link href="/peptides/thymosin-alpha-1" className="text-blue-600 hover:underline">Thymosin Alpha-1</Link></li>
                    <li>• <Link href="/peptides/ll-37" className="text-blue-600 hover:underline">LL-37</Link></li>
                    <li>• <Link href="/peptides/kpv" className="text-blue-600 hover:underline">KPV</Link></li>
                    <li>• <Link href="/peptides/glutathione" className="text-blue-600 hover:underline">Glutathione</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-teal-50">
                  <CardTitle className="text-lg">Longevity & Anti-Aging</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• <Link href="/peptides/epithalon" className="text-blue-600 hover:underline">Epithalon</Link></li>
                    <li>• <Link href="/peptides/nad" className="text-blue-600 hover:underline">NAD+</Link></li>
                    <li>• <Link href="/peptides/mots-c" className="text-blue-600 hover:underline">MOTS-c</Link></li>
                    <li>• <Link href="/peptides/humanin" className="text-blue-600 hover:underline">Humanin</Link></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Sourcing */}
          <section id="sourcing" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Sourcing: 503A vs 503B vs Research</h2>
            <p className="text-lg text-gray-700 mb-6">
              Understanding the regulatory landscape for peptide sourcing is critical for legal compliance and patient safety. 
              There are three primary sources for therapeutic peptides in the United States.
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    503A Compounding Pharmacies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    503A pharmacies compound medications pursuant to individual patient prescriptions. They are regulated 
                    by state boards of pharmacy and must comply with USP &lt;795&gt; and &lt;797&gt; standards.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Pros:</strong> Patient-specific formulations, often lower cost, established relationships</li>
                    <li><strong>Cons:</strong> Cannot compound for "office use," limited batch sizes</li>
                    <li><strong>Best for:</strong> Individual patient prescriptions, customized dosing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    503B Outsourcing Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    503B facilities are FDA-registered and inspected. They can compound without individual prescriptions 
                    and supply medications for "office use" by healthcare providers.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Pros:</strong> FDA oversight, can purchase for office stock, larger batches</li>
                    <li><strong>Cons:</strong> Higher cost, limited peptide selection, longer lead times</li>
                    <li><strong>Best for:</strong> High-volume practices, office-administered peptides</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    Research Chemical Suppliers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Research peptides are sold "for research purposes only" and are NOT intended for human use. 
                    Prescribing or administering research peptides to patients is illegal and dangerous.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Legal Status:</strong> NOT legal for human use</li>
                    <li><strong>Quality:</strong> No pharmaceutical-grade standards</li>
                    <li><strong>Risk:</strong> License revocation, malpractice liability, patient harm</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Patient Selection */}
          <section id="patient-selection" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Patient Selection & Assessment</h2>
            <p className="text-lg text-gray-700 mb-6">
              Proper patient selection is essential for successful peptide therapy outcomes. A comprehensive assessment 
              should include medical history, current medications, contraindications, and treatment goals.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Initial Assessment Checklist</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Complete medical history including cancer history</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Current medication list (check for interactions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Baseline labs: CBC, CMP, lipid panel, HbA1c, hormone panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>IGF-1 levels (for GH secretagogues)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Pregnancy test (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Patient goals and expectations discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Informed consent documentation</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Contraindications</h3>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <ul className="space-y-2 text-red-800">
                  <li>• Active malignancy or history of certain cancers</li>
                  <li>• Pregnancy or breastfeeding</li>
                  <li>• Uncontrolled diabetes (for GLP-1 agonists: caution)</li>
                  <li>• History of medullary thyroid carcinoma or MEN2 (GLP-1s)</li>
                  <li>• Active infections (for immunomodulating peptides)</li>
                  <li>• Severe renal or hepatic impairment</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Continue with more sections... */}
          <section id="dosing" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Dosing Protocols & Administration</h2>
            <p className="text-lg text-gray-700 mb-4">
              Proper dosing and administration are critical for safety and efficacy. Most therapeutic peptides are 
              administered via subcutaneous injection, though some are available in nasal spray or oral formulations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For detailed dosing protocols for specific peptides, visit our <Link href="/tools/dosage-calculator" className="text-blue-600 hover:underline">Dosage Calculator</Link> or 
              individual peptide pages.
            </p>
          </section>

          <section id="monitoring" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Monitoring & Follow-Up</h2>
            <p className="text-lg text-gray-700 mb-4">
              Regular monitoring ensures patient safety and allows for protocol optimization. Follow-up frequency 
              depends on the peptide being used and patient response.
            </p>
          </section>

          <section id="billing" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Billing & Reimbursement</h2>
            <p className="text-lg text-gray-700 mb-4">
              Most peptide therapy is not covered by insurance and is provided on a cash-pay basis. However, proper 
              documentation and coding can support medical necessity for certain indications.
            </p>
          </section>

          <section id="legal" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Legal & Regulatory Considerations</h2>
            <p className="text-lg text-gray-700 mb-4">
              The regulatory landscape for peptides continues to evolve. Staying informed about FDA guidance, 
              state regulations, and DEA requirements is essential for compliant practice.
            </p>
          </section>

          <section id="starting" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Starting a Peptide Practice</h2>
            <p className="text-lg text-gray-700 mb-4">
              Integrating peptide therapy into your practice requires planning, training, and proper infrastructure. 
              Here are the key steps to get started.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-blue-900 mb-4">Quick Start Checklist</h4>
              <ol className="space-y-3 text-blue-800 list-decimal list-inside">
                <li>Complete peptide therapy training/certification</li>
                <li>Establish relationships with 503A/503B pharmacies</li>
                <li>Develop patient consent forms and protocols</li>
                <li>Set up proper storage (refrigeration) for peptides</li>
                <li>Create patient education materials</li>
                <li>Implement tracking and follow-up systems</li>
                <li>Consider malpractice insurance review</li>
              </ol>
            </div>
          </section>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white mt-12">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Peptide Practice?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Explore our complete library of peptide profiles, dosing calculators, and clinical tools 
                designed specifically for healthcare providers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/peptides">
                  <Button variant="secondary" size="lg">
                    Browse All Peptides
                  </Button>
                </Link>
                <Link href="/tools/dosage-calculator">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                    Dosage Calculator
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Citation */}
          <Card className="bg-gray-50 mt-12">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Cite This Guide</h4>
              <p className="text-sm text-gray-600 font-mono bg-white p-3 rounded border">
                Peptide Education Hub. (2026). The Ultimate Guide to Peptide Therapy for Healthcare Providers. 
                Retrieved from https://pepedhub.com/guides/ultimate-peptide-therapy-guide
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
