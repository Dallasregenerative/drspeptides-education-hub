import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";

export default function ConsentFormCalifornia() {
  usePageTitle("Form 2: California Peptide Therapy Informed Consent");
  const [clinicName, setClinicName] = useState("[Clinic Name]");

  const handlePrint = () => window.print();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto print:shadow-none print:border-none">
          <CardHeader className="text-center print:text-left">
            <div className="flex justify-between items-start print:hidden">
                <Link href="/resources/consent-forms">
                    <Button variant="outline">← Back to Consent Forms</Button>
                </Link>
                <div className="flex space-x-2">
                    <Button variant="outline" onClick={handlePrint}>Download/Print</Button>
                </div>
            </div>
            <CardTitle className="text-2xl font-bold mt-4">Form 2: California Peptide Therapy Informed Consent</CardTitle>
            <p className="text-sm text-gray-600">Governing Law: California Health & Safety Code §§24170-24179</p>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="mb-6 print:hidden">
                <label htmlFor="clinicName" className="print-hide" className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
                <Input 
                    id="clinicName" className="print-hide" 
                    value={clinicName} 
                    onChange={(e) => setClinicName(e.target.value || "[Clinic Name]")} 
                    placeholder="Enter Clinic Name"
                    className="max-w-xs"
                />
                <p className="text-xs text-gray-500 mt-1">This name will populate the header of the form.</p>
            </div>

            <div className="border-t pt-6">
                <h2 className="text-xl font-bold text-center mb-4">{clinicName}</h2>
                <h3 className="text-lg font-semibold mb-2">INFORMED CONSENT FOR MEDICAL EXPERIMENTATION</h3>

                <div className="space-y-4">
                    <p>This document outlines your rights as a participant in a medical experiment and provides information about the use of research-grade peptides. Your signature below indicates that you have read, understood, and voluntarily consent to participate.</p>

                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-base mb-2">Patient Information</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div><span className="font-semibold">Name:</span> _________________________</div>
                            <div><span className="font-semibold">Date of Birth:</span> _________________</div>
                        </div>
                    </div>

                    <h4 className="font-bold text-base pt-4">Experimental Participant's Bill of Rights</h4>
                    <p>As a participant in a medical experiment, you have the right to:</p>
                    <ol className="list-decimal list-inside space-y-2 bg-gray-100 p-4 rounded-md">
                        <li>Be informed of the nature and purpose of the experiment.</li>
                        <li>Be given an explanation of the procedures to be followed in the medical experiment, and any drug or device to be utilized.</li>
                        <li>Be given a description of any attendant discomforts and risks reasonably to be expected from the experiment.</li>
                        <li>Be given an explanation of any benefits to you reasonably to be expected from the experiment, if applicable.</li>
                        <li>Be given a disclosure of any appropriate alternative procedures, drugs, or devices that might be advantageous to you, and their relative risks and benefits.</li>
                        <li>Be informed of the avenues of medical treatment, if any, available to you after the experiment if complications should arise.</li>
                        <li>Be permitted to ask any questions concerning the experiment, both before and during the experiment.</li>
                        <li>Be instructed that consent to participate in the medical experiment may be withdrawn at any time and that you may discontinue participation in the medical experiment without prejudice.</li>
                        <li>Be given a copy of the signed and dated written consent form.</li>
                        <li>Be given the opportunity to decide to consent or not to consent to a medical experiment without the intervention of any element of force, fraud, deceit, duress, coercion, or undue influence on your decision.</li>
                    </ol>

                    <h4 className="font-bold text-base pt-4">Nature of Research-Grade Peptides</h4>
                    <p>You understand that the peptide(s) being provided are for research purposes only. They are not manufactured under Good Manufacturing Practices (cGMP) required for human drugs and are not approved by the Food and Drug Administration (FDA). There is no oversight from a pharmacy for these products. Their use is considered experimental.</p>

                    <h4 className="font-bold text-base pt-4">Specific Risks of BPC-157</h4>
                    <p>While research suggests potential benefits, you acknowledge the known and unknown risks associated with BPC-157, which may include but are not limited to: changes in blood pressure, nausea, dizziness, and unknown long-term effects due to the lack of extensive human trials.</p>

                    <h4 className="font-bold text-base pt-4">Physician Conflict of Interest Disclosure</h4>
                    <p>Your physician may have a financial interest in the research facility or the products being used. You have the right to be informed of the nature and extent of any such interest. By signing below, you acknowledge you have been given the opportunity to inquire about any potential conflicts of interest.</p>

                    <h4 className="font-bold text-base pt-4">Attestation of Witness</h4>
                    <p>Per CA Health & Safety Code §24173, your signature must be witnessed by an individual who can attest that the requirements for informed consent have been satisfied. This witness cannot be the person conducting the experiment.</p>

                    <div className="border-t border-b py-6 my-6 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="mb-6">_________________________________________</p>
                                <p className="font-semibold">Patient Signature</p>
                                <p>Date: _________________________</p>
                            </div>
                            <div>
                                <p className="mb-6">_________________________________________</p>
                                <p className="font-semibold">Practitioner Signature</p>
                                <p>Date: _________________________</p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-6">_________________________________________</p>
                            <p className="font-semibold">Witness Signature</p>
                            <p>Date: _________________________</p>
                        </div>
                    </div>

                    <div className="text-xs text-gray-600 space-y-2">
                        <p>For complaints regarding this experiment, you may contact the Medical Board of California at 1-800-633-2322 or the California State Board of Pharmacy at 916-574-7900.</p>
                        <p className="font-bold">Disclaimer: For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
