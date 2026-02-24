import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { useState } from "react";

export default function ConsentFormStandardUS() {
  usePageTitle("Form 5: Standard U.S. Peptide Therapy Informed Consent");
  const [clinicName, setClinicName] = useState("[Clinic Name]");

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold mb-2">Form 5: Standard U.S. Peptide Therapy Informed Consent</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Framework: 21 CFR Part 50</Badge>
                  <Badge variant="secondary">Public Law 115-176 (Right to Try)</Badge>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => window.print()}>Download / Print</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            <div className="space-y-2">
                <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700">Clinic Name</label>
                <input
                    id="clinicName"
                    type="text"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="text-center font-bold text-lg py-4 border-y">{clinicName}</div>

            <div className="space-y-2 p-4 border rounded-lg bg-gray-50">
                <h3 className="font-bold text-base">Key Information Summary (Revised Common Rule)</h3>
                <p>This summary provides the key information about this consent. Please read the full document for a complete understanding.</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Purpose:</strong> To consent to the use of research-grade peptides.</li>
                    <li><strong>Duration:</strong> Varies based on treatment plan.</li>
                    <li><strong>Procedures:</strong> Self-administration of peptides.</li>
                    <li><strong>Risks:</strong> Includes but not limited to unknown long-term effects, batch variability, and lack of sterility guarantee.</li>
                    <li><strong>Benefits:</strong> Potential benefits are not guaranteed.</li>
                    <li><strong>Alternatives:</strong> Conventional medical treatments.</li>
                    <li><strong>Voluntary Participation:</strong> Your participation is voluntary and you can withdraw at any time.</li>
                </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Patient Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Name:</strong> _________________________</p>
                <p><strong>Date of Birth:</strong> _________________________</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Purpose and Description</h3>
              <p>This informed consent is for the use of research-grade peptides for wellness and research purposes. These products are not drugs and are not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Research-Grade Specific Language</h3>
              <p>You understand and acknowledge the following:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>These peptides are not manufactured under cGMP (current Good Manufacturing Practices).</li>
                <li>There is no pharmacy or FDA oversight of these products.</li>
                <li>Products are labeled "not for human use" and are for research purposes only.</li>
                <li>There is no guarantee of sterility. You accept all risks associated with non-sterile products.</li>
                <li>Certificates of Analysis (COA) may be limited and not fully verifiable.</li>
                <li>Batch-to-batch variability in purity and concentration can occur.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">BPC-157 Risk Disclosures</h3>
              <p>Specific to BPC-157, you acknowledge:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Concerns about potential angiogenesis (new blood vessel growth).</li>
                <li>Risk of Nitric Oxide (NO) overproduction and its consequences.</li>
                <li>Potential for toxic metabolites.</li>
                <li>Fewer than 30 human subjects have been studied in formal trials.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Right to Try Act Provisions (Public Law 115-176)</h3>
              <p>While these are not investigational drugs, the spirit of the Right to Try act is acknowledged, allowing access to treatments not yet approved by the FDA. You are taking full responsibility for this choice.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Telemedicine and Multi-State Practice</h3>
              <p>This consent is suitable for telemedicine and multi-state practices, acknowledging the complexities of jurisdiction and care across state lines.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Alternative Treatments</h3>
              <p>Alternative treatments include conventional medical care, lifestyle changes, and other therapies. You have discussed these alternatives with your provider.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">Right to Withdraw</h3>
              <p>You have the right to withdraw from this consent and discontinue the use of peptides at any time without penalty.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-base">HIPAA Notice</h3>
              <p>Your health information will be protected as required by the Health Insurance Portability and Accountability Act (HIPAA).</p>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-bold text-base">Signature and Acknowledgment</h3>
              <p>By signing below, you acknowledge that you have read, understood, and agree to the terms of this consent form. You have had the opportunity to ask questions and have had them answered to your satisfaction.</p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p>_________________________________________</p>
                  <p>Patient Signature (or Electronic Equivalent)</p>
                </div>
                <div>
                  <p>_________________________________________</p>
                  <p>Date</p>
                </div>
                <div>
                  <p>_________________________________________</p>
                  <p>Provider Signature (or Electronic Equivalent)</p>
                </div>
                 <div>
                  <p>_________________________________________</p>
                  <p>Date</p>
                </div>
              </div>
            </div>

            <div className="text-xs text-center text-gray-500 pt-6">
              <p>For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
