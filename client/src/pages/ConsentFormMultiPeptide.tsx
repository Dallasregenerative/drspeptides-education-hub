import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function ConsentFormMultiPeptide() {
  usePageTitle("Form 7: Multi-Peptide Protocol Consent");
  const [clinicName, setClinicName] = useState("");

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4 print:hidden">
            <Link href="/resources/consent-forms">
              <Button variant="outline">← Back to Consent Forms</Button>
            </Link>
            <div>
              <Button onClick={handlePrint} className="mr-2">Download / Print</Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gray-100 p-6">
              <div className="flex flex-col items-center text-center">
                <Input
                  type="text"
                  placeholder="[Clinic Name]"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="text-2xl font-bold text-center border-none shadow-none focus-visible:ring-0 p-0 m-0 w-full"
                />
                <h1 className="text-2xl font-bold">Form 7: Multi-Peptide Protocol Consent with Patient Registry</h1>
                <p className="text-sm text-gray-600 mt-1">The most comprehensive form for multi-peptide stacking protocols</p>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Patient Information */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">Patient Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="font-medium">Full Name:</label><p className="border-b pb-1"></p></div>
                  <div className="space-y-1"><label className="font-medium">Date of Birth:</label><p className="border-b pb-1"></p></div>
                  <div className="space-y-1"><label className="font-medium">Address:</label><p className="border-b pb-1"></p></div>
                  <div className="space-y-1"><label className="font-medium">Phone Number:</label><p className="border-b pb-1"></p></div>
                  <div className="space-y-1"><label className="font-medium">Email:</label><p className="border-b pb-1"></p></div>
                  <div className="space-y-1"><label className="font-medium">Date:</label><p className="border-b pb-1"></p></div>
                </div>
              </section>

              {/* Purpose and Description */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">1. Purpose and Description</h2>
                <p className="text-gray-700">
                  This consent form is for participation in a multi-peptide protocol using research-grade peptides. These products are intended for laboratory research purposes only and are not approved by the FDA for human use. You are consenting to use these peptides under the direct supervision of a qualified practitioner for investigational purposes. The goal is to evaluate the effects and safety of using multiple peptides in a stacked protocol.
                </p>
              </section>

              {/* Multi-Peptide Stacking Risk Disclosures */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">2. Multi-Peptide Stacking Risk Disclosures</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">The use of multiple peptides simultaneously ("stacking") carries unique and poorly understood risks. You must be aware of the following:</p>
                  <ul className="list-disc list-inside space-y-2 bg-red-50 border border-red-200 p-4 rounded-md">
                    <li><strong>Unknown Drug-Drug Interactions:</strong> The interactions between different peptides have not been formally studied. Combining them may lead to unpredictable and potentially harmful synergistic or antagonistic effects.</li>
                    <li><strong>Cumulative Immunogenicity Risks:</strong> Each peptide carries a risk of an immune reaction. Using multiple peptides may increase the overall risk of developing antibodies that could neutralize the peptides' effects or cause allergic reactions.</li>
                    <li><strong>Additive Side Effect Potential:</strong> If multiple peptides share similar side effect profiles, using them together could increase the severity and frequency of those side effects.</li>
                    <li><strong>No Clinical Trials:</strong> There are no clinical trials that have established the safety or efficacy of the specific peptide combination you will be using. This protocol is considered experimental.</li>
                  </ul>
                </div>
              </section>

              {/* Peptide-Specific Risk Table */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">3. Peptide-Specific Risk Table</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3">Peptide</th>
                        <th className="p-3">Mechanism</th>
                        <th className="p-3">Key Risks</th>
                        <th className="p-3">Monitoring Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"> <td className="p-3 font-medium">BPC-157</td> <td className="p-3">Body Protective Compound, promotes healing</td> <td className="p-3">Angiogenesis, NO overproduction, unknown metabolites</td> <td className="p-3">Symptom tracking, blood pressure</td> </tr>
                      <tr className="border-b"> <td className="p-3 font-medium">TB-500</td> <td className="p-3">Thymosin Beta-4 fragment, actin-sequestering</td> <td className="p-3">Potential for tumor growth acceleration, flu-like symptoms</td> <td className="p-3">Cancer screening, symptom log</td> </tr>
                      <tr className="border-b"> <td className="p-3 font-medium">GHK-Cu</td> <td className="p-3">Copper peptide, gene regulation, antioxidant</td> <td className="p-3">Copper toxicity, blood pressure changes, skin irritation</td> <td className="p-3">Serum copper/ceruloplasmin, blood pressure</td> </tr>
                      <tr className="border-b"> <td className="p-3 font-medium">CJC-1295 / Ipamorelin</td> <td className="p-3">GHRH and GHRP, stimulates GH pulse</td> <td className="p-3">Increased IGF-1, water retention, insulin resistance</td> <td className="p-3">IGF-1, fasting glucose, HbA1c</td> </tr>
                      <tr className="border-b"> <td className="p-3 font-medium">Semaglutide</td> <td className="p-3">GLP-1 Receptor Agonist</td> <td className="p-3">GI distress, pancreatitis, thyroid C-cell tumors (animal data)</td> <td className="p-3">Amylase/Lipase, calcitonin (if indicated), GI symptoms</td> </tr>
                      <tr className="border-b"> <td className="p-3 font-medium">Tirzepatide</td> <td className="p-3">Dual GIP/GLP-1 Receptor Agonist</td> <td className="p-3">Similar to Semaglutide, potentially more GI side effects</td> <td className="p-3">Amylase/Lipase, calcitonin (if indicated), GI symptoms</td> </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* BPC-157 Detailed Disclosures */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">4. Detailed Disclosures for BPC-157</h2>
                <div className="space-y-3 text-gray-700">
                  <p>Due to its potent angiogenic (blood vessel-forming) properties, BPC-157 requires special consideration:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Angiogenesis:</strong> While beneficial for healing, promoting new blood vessel growth could theoretically accelerate the growth of undiagnosed cancerous or pre-cancerous cells. You confirm you have no personal or strong family history of cancer.</li>
                    <li><strong>Nitric Oxide (NO) System:</strong> BPC-157 may cause NO overproduction, leading to potential drops in blood pressure or other circulatory issues.</li>
                    <li><strong>Toxic Metabolites:</strong> As a research chemical, the long-term breakdown products (metabolites) in humans are unknown and could have toxic effects.</li>
                    <li><strong>Limited Human Data:</strong> Human studies are extremely limited, with fewer than 30 subjects in published trials, none of which were long-term.</li>
                  </ul>
                </div>
              </section>

              {/* Patient Registry Enrollment */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">5. Patient Registry Enrollment</h2>
                <div className="space-y-4 bg-blue-50 border border-blue-200 p-4 rounded-md">
                  <p className="text-gray-700">You are invited to participate in a patient registry to systematically collect data on the outcomes and safety of multi-peptide protocols.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Data Collection:</strong> By consenting, you agree to the collection of your demographics, peptide protocol details (peptides, doses, duration), reported outcomes (positive and negative), and any adverse events.</li>
                    <li><strong>Data Privacy:</strong> Your data will be de-identified to protect your privacy. All personally identifiable information will be removed, and data will be analyzed in aggregate.</li>
                    <li><strong>Voluntary Participation:</strong> Your participation is completely voluntary. Your decision will not affect the quality of care you receive. You can opt-out of the registry at any time.</li>
                  </ul>
                </div>
              </section>

              {/* Structured Monitoring Protocol */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">6. Structured Monitoring Protocol</h2>
                <p className="text-gray-700 mb-4">To ensure safety, you agree to adhere to the following monitoring schedule:</p>
                <ul className="list-decimal list-inside space-y-3">
                  <li><strong>Baseline:</strong> Comprehensive lab work (CBC, CMP, lipids, inflammatory markers, relevant hormone panels) before starting.</li>
                  <li><strong>Week 2:</strong> Symptom and side effect check-in with your practitioner.</li>
                  <li><strong>Week 4:</strong> Follow-up labs and assessment of initial response.</li>
                  <li><strong>Week 8:</strong> Comprehensive evaluation of progress and safety labs.</li>
                  <li><strong>Ongoing:</strong> Monthly check-ins and labs every 3-6 months as determined by your practitioner.</li>
                  <li><strong>Stopping Criteria:</strong> The protocol will be immediately discontinued if you experience severe adverse events, including but not limited to: signs of pancreatitis (severe abdominal pain), suspected allergic reaction (hives, swelling, difficulty breathing), significant and persistent drop in blood pressure, or as determined by your practitioner.</li>
                </ul>
              </section>

              {/* Alternatives, Withdrawal, and Disclaimer */}
              <section>
                <h2 className="text-xl font-semibold border-b pb-2 mb-4">7. Alternative Treatments & Right to Withdraw</h2>
                <p className="text-gray-700 mb-2">Alternatives to this protocol, including conventional medical treatments, have been discussed with you. You have the right to withdraw your consent and discontinue this protocol at any time without penalty.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 mt-6">
                  <p className="font-bold">Disclaimer:</p>
                  <p>For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
                </div>
              </section>

              {/* Signature Blocks */}
              <section className="pt-8 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Patient Signature</label></div>
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Date</label></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Practitioner Signature</label></div>
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Date</label></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Patient Signature (Consent for Registry)</label></div>
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Date</label></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Witness Signature</label></div>
                  <div className="space-y-1"><p className="border-b pb-1"></p><label className="font-medium">Date</label></div>
                </div>
              </section>

            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
