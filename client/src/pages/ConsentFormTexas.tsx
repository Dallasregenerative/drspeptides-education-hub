import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { useState } from 'react';
import { Input } from "@/components/ui/input";

export default function ConsentFormTexas() {
  usePageTitle("Form 1: Texas Peptide Therapy Informed Consent");
  const [clinicName, setClinicName] = useState("[CLINIC NAME]");

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 text-center">
            <Link href="/resources/consent-forms" className="text-sm text-blue-500 hover:underline">&larr; Back to Consent Forms Hub</Link>
        </div>

        <Card className="max-w-4xl mx-auto print:shadow-none print:border-none">
          <CardHeader className="text-center print:text-left">
            <div className="flex justify-center items-center mb-4 print:hidden">
                <Input
                    type="text"
                    placeholder="Enter Clinic Name"
                    className="w-1/2 text-center"
                    onChange={(e) => setClinicName(e.target.value || "[CLINIC NAME]")}
                />
            </div>
            <CardTitle className="text-2xl font-bold">{clinicName}</CardTitle>
            <p className="text-lg font-semibold">Form 1: Texas Peptide Therapy Informed Consent</p>
            <p className="text-sm text-gray-500">Governing Law: Texas Health & Safety Code Chapter 490, 25 TAC §1.4</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-end space-x-2 print:hidden">
                <Button variant="outline" onClick={handlePrint}>Download as PDF</Button>
                <Button onClick={handlePrint}>Print</Button>
            </div>

            <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Patient Information</h3>
                <p><strong>Patient Name:</strong> [PATIENT NAME]</p>
                <p><strong>Date of Birth:</strong> [PATIENT DOB]</p>
                <p><strong>Medical Record Number:</strong> [PATIENT MRN]</p>
            </div>

            <div className="space-y-4 text-sm">
                <h3 className="text-lg font-bold border-b pb-2">1. Purpose of Treatment</h3>
                <p>This consent form is for participation in a treatment plan involving research-grade peptides, which are not approved by the U.S. Food and Drug Administration (FDA) for human use. The purpose is to address symptoms associated with a diagnosed severe chronic disease, as defined under Texas law, through the use of these investigational articles.</p>

                <h3 className="text-lg font-bold border-b pb-2">2. Description of Products (Research-Grade Peptides)</h3>
                <p>I understand that the peptide products used in my treatment are sold for research purposes only and are labeled "not for human use." I acknowledge my understanding of the following critical points:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>No FDA Approval:</strong> The products are not drugs and have not been evaluated, approved, or regulated by the FDA for safety, efficacy, or quality.</li>
                    <li><strong>No Pharmacy Compounding or cGMP:</strong> These products are not compounded in a pharmacy and are not manufactured under Current Good Manufacturing Practices (cGMP) required for pharmaceuticals.</li>
                    <li><strong>No Guarantee of Sterility or Purity:</strong> While providers may take steps to filter products, there is no guarantee of sterility. Contamination with bacteria, endotoxins, or heavy metals is possible.</li>
                    <li><strong>Certificate of Analysis (COA) Limitations:</strong> A COA may be provided, but it typically only shows the sequence and purity of the main peptide. It does not test for sterility, endotoxins, or other contaminants. The COA is a snapshot of a specific batch and may not represent the exact vial I receive.</li>
                    <li><strong>Batch Variability:</strong> There may be significant variability in purity, concentration, and the presence of contaminants from one batch to another.</li>
                </ul>

                <h3 className="text-lg font-bold border-b pb-2">3. Specific Peptide(s) Being Administered</h3>
                <p>The following research-grade peptide(s) will be part of my treatment plan:</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border p-2">Peptide Name</th>
                                <th className="border p-2">Dosage & Frequency</th>
                                <th className="border p-2">Route of Administration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">[e.g., BPC-157]</td>
                                <td className="border p-2">[e.g., 250mcg daily]</td>
                                <td className="border p-2">[e.g., Subcutaneous]</td>
                            </tr>
                             <tr>
                                <td className="border p-2">[Placeholder]</td>
                                <td className="border p-2">[Placeholder]</td>
                                <td className="border p-2">[Placeholder]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-bold border-b pb-2">4. Potential Benefits</h3>
                <p>Potential benefits of peptide therapy are investigational and not guaranteed. Based on preclinical (animal) and limited human data, proposed benefits may include [insert potential benefits relevant to patient's condition, e.g., improved tissue repair, reduced inflammation, enhanced immune function]. I understand these are not proven outcomes.</p>

                <h3 className="text-lg font-bold border-b pb-2">5. Risks and Side Effects</h3>
                <p>I understand that the risks of using research-grade peptides are not fully known. In addition to the risks related to product quality (contamination, impurity), potential side effects may include, but are not limited to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Injection site reactions (pain, redness, swelling)</li>
                    <li>Nausea, dizziness, headache, fatigue</li>
                    <li>Unpredictable immune reactions</li>
                    <li>Unknown long-term effects, including the potential for promoting cancer growth</li>
                    <li><strong>Specific Risks for BPC-157:</strong> Due to its potent angiogenic (blood vessel growth) properties, BPC-157 carries specific theoretical risks, including pathologic angiogenesis via the VEGFR2/eNOS pathway, potential for NO (nitric oxide) overproduction leading to vasodilation and hypotension, and the formation of toxic metabolites. It has been studied in fewer than 30 human subjects in published literature.</li>
                </ul>

                <h3 className="text-lg font-bold border-b pb-2">6. Alternative Treatments</h3>
                <p>I have been informed of and have considered alternative treatments for my condition, which may include FDA-approved medications, physical therapy, surgery, and lifestyle modifications. I have had the opportunity to discuss these alternatives with my physician.</p>

                <h3 className="text-lg font-bold border-b pb-2">7. Right to Withdraw</h3>
                <p>I understand that my participation is voluntary and I have the right to withdraw from this treatment plan at any time without penalty or loss of benefits to which I am otherwise entitled.</p>

                <h3 className="text-lg font-bold border-b pb-2">8. Patient Acknowledgments (Texas Specific)</h3>
                <p>Please initial each statement:</p>
                <ul className="space-y-3 pl-4">
                    <li><span className="font-mono">[__]</span> I have been informed that the peptide(s) are investigational and have not been approved by the FDA.</li>
                    <li><span className="font-mono">[__]</span> I understand the potential benefits, risks, and side effects as explained to me.</li>
                    <li><span className="font-mono">[__]</span> I understand the alternative treatments available for my condition.</li>
                    <li><span className="font-mono">[__]</span> I have had the opportunity to ask questions and have had them answered to my satisfaction.</li>
                    <li><span className="font-mono">[__]</span> I consent to the use of these peptides under the supervision of my physician.</li>
                </ul>

                <h3 className="text-lg font-bold border-b pb-2">9. Confirmation of Severe Chronic Disease (Texas Specific)</h3>
                <p>I hereby confirm in writing that I have a "severe chronic disease" as defined by Texas law, which means a condition, injury, or illness that may be treated, but not cured, and is so debilitating that it results in a diminished quality of life. I have provided my physician with a diagnosis of this condition from a separate qualified medical provider.</p>

                <h3 className="text-lg font-bold border-b pb-2">10. Physician Attestation (Per Texas Health & Safety Code §490.052)</h3>
                <p>"By signing below, I, the treating physician, attest that I have complied with all requirements of Texas Health and Safety Code Chapter 490. I have confirmed the patient's diagnosis of a severe chronic disease, provided all required disclosures, and obtained informed consent. I will maintain records as required by law."</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t mt-6">
                    <div className="space-y-2 ">
                        <div className="border-b border-gray-400 h-8"></div>
                        <p className="text-sm">Patient/Legal Guardian Signature</p>
                    </div>
                    <div className="space-y-2 ">
                        <div className="border-b border-gray-400 h-8"></div>
                        <p className="text-sm">Date</p>
                    </div>
                    <div className="space-y-2 ">
                        <div className="border-b border-gray-400 h-8"></div>
                        <p className="text-sm">Treating Physician Signature</p>
                    </div>
                     <div className="space-y-2 ">
                        <div className="border-b border-gray-400 h-8"></div>
                        <p className="text-sm">Printed Physician Name</p>
                    </div>
                    <div className="space-y-2 ">
                        <div className="border-b border-gray-400 h-8"></div>
                        <p className="text-sm">Witness Signature</p>
                    </div>
                    <div className="space-y-2 ">
                        <div className="border-b border-gray-400 h-8"></div>
                        <p className="text-sm">Date</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-xs text-gray-600 font-semibold">For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
            </div>

          </CardContent>
        </Card>
      </div>
    </>
  );
}
