import { Badge } from "@/components/ui/badge";
import PrintButton from "@/components/PrintButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2, XCircle, ExternalLink } from "lucide-react";

export default function SafetyCompliance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Safety & Regulatory Compliance
          </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Safety Compliance - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-red-50 max-w-3xl">
            Comprehensive guide to FDA approval status, WADA prohibitions, safety protocols, and legal compliance for peptide therapy
          </p>
        </div>
      </div>

      {/* Critical Disclaimer */}
      <div className="container py-8">
        <Alert className="border-red-500 bg-red-50">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-900 font-bold text-lg">CRITICAL DISCLAIMER - RESEARCH USE ONLY</AlertTitle>
          <AlertDescription className="text-red-800 mt-2">
            All peptides and protocols discussed on this site are for research and educational purposes only. These compounds are NOT approved for human or animal consumption outside of FDA-approved medical settings. This information describes research applications and should NOT be construed as medical advice. Many peptides discussed here are unapproved, prohibited in sport, or carry significant safety concerns as noted by FDA, WADA, and other regulatory agencies.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <div className="container py-12 space-y-12">
        
        {/* FDA Approval Status */}
        <section>
          <h2 className="text-3xl font-bold mb-6">FDA Approval Status</h2>
          <p className="text-lg text-gray-700 mb-8">
            Understanding the regulatory status of peptides is critical before considering any research application. The FDA has approved only a small number of peptides for specific medical indications, while the majority remain unapproved for any use.
          </p>

          {/* FDA-Approved Peptides */}
          <Card className="mb-8 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-900">
                <CheckCircle2 className="h-6 w-6" />
                FDA-Approved Peptides (For Specific Indications)
              </CardTitle>
              <CardDescription>These peptides have undergone rigorous clinical trials and received FDA approval for specific medical conditions</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      Semaglutide 
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Brand Names:</strong> Ozempic, Wegovy</p>
                    <p className="text-gray-600"><strong>Approved For:</strong> Type 2 diabetes, chronic weight management</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/213051s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      Tirzepatide
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Brand Names:</strong> Mounjaro, Zepbound</p>
                    <p className="text-gray-600"><strong>Approved For:</strong> Type 2 diabetes, chronic weight management</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      Liraglutide
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Brand Names:</strong> Victoza, Saxenda</p>
                    <p className="text-gray-600"><strong>Approved For:</strong> Type 2 diabetes, chronic weight management</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/206321Orig1s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      Tesamorelin
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Brand Name:</strong> Egrifta</p>
                    <p className="text-gray-600"><strong>Approved For:</strong> HIV-associated lipodystrophy ONLY (not general weight loss)</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2010/022505lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      PT-141 (Bremelanotide)
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Brand Name:</strong> Vyleesi</p>
                    <p className="text-gray-600"><strong>Approved For:</strong> Female hypoactive sexual desire disorder (HSDD)</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      Desmopressin
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Approved For:</strong> Diabetes insipidus, bedwetting</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2007/017922s043lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      Oxytocin
                      <Badge variant="outline" className="bg-green-100">FDA Approved</Badge>
                    </h4>
                    <p className="text-gray-600 mt-1"><strong>Approved For:</strong> Labor induction</p>
                    <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/017919s057lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                      View FDA Label <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Unapproved Peptides */}
          <Card className="border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center gap-2 text-red-900">
                <XCircle className="h-6 w-6" />
                Unapproved Peptides (No FDA Approval for Any Indication)
              </CardTitle>
              <CardDescription>These peptides have NOT been approved by the FDA and should only be used in research settings under appropriate oversight</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Growth Hormone Related</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• CJC-1295</li>
                    <li>• Ipamorelin</li>
                    <li>• GHRP-6</li>
                    <li>• Sermorelin</li>
                    <li>• Hexarelin</li>
                    <li>• AOD-9604</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tissue Repair & Recovery</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• BPC-157</li>
                    <li>• TB-500</li>
                    <li>• GHK-Cu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cognitive & Longevity</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Semax</li>
                    <li>• Selank</li>
                    <li>• DSIP</li>
                    <li>• Epitalon</li>
                    <li>• MOTS-c</li>
                    <li>• Humanin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Applications</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Melanotan I/II</li>
                    <li>• Kisspeptin</li>
                    <li>• Follistatin-344</li>
                    <li>• Thymosin Alpha-1*</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">*Approved in some countries, not FDA-approved in US</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FDA Warnings */}
        <section>
          <h2 className="text-3xl font-bold mb-6">FDA Warnings & Safety Concerns</h2>
          
          <Card className="mb-6 border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-900">Compounding Safety Concerns</CardTitle>
              <CardDescription>The FDA has identified specific safety concerns with compounded versions of these peptides</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">GLP-1 Agonists (Semaglutide, Tirzepatide, Liraglutide)</h4>
                  <p className="text-gray-700 mt-1">FDA warns about unapproved salt forms and quality issues with compounded versions</p>
                  <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                    View FDA Warning <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">Ipamorelin, Kisspeptin, MOTS-c, Thymosin Alpha-1</h4>
                  <p className="text-gray-700 mt-1">FDA highlights compounding safety concerns and lack of adequate safety data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300">
            <CardHeader className="bg-red-100">
              <CardTitle className="text-red-900">Illegal/Unsafe Products</CardTitle>
              <CardDescription>These peptides have been repeatedly flagged as illegal or unsafe by FDA and other regulatory agencies</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-800">Melanotan I/II</h4>
                  <p className="text-gray-700 mt-1">Repeatedly flagged as illegal/unsafe by FDA, TGA (Australia), and other health agencies</p>
                  <a href="https://www.fda.gov/consumers/consumer-updates/unapproved-and-potentially-harmful-products-marketed-tanning" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                    View FDA Consumer Update <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">BPC-157 & TB-500</h4>
                  <p className="text-gray-700 mt-1">DoD's Operation Supplement Safety (OPSS) and USADA highlight risks; not approved as drug or supplement</p>
                  <a href="https://www.opss.org/article/bpc-157-and-tb-500-what-you-need-know" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-2">
                    View OPSS Warning <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* WADA Prohibitions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">WADA Prohibited Substances</h2>
          <p className="text-lg text-gray-700 mb-8">
            Athletes subject to drug testing should be aware that many peptides are prohibited by the World Anti-Doping Agency (WADA). Use of these substances can result in serious sanctions including multi-year bans from competition.
          </p>

          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-900">Prohibited at All Times</CardTitle>
              <CardDescription>These peptides are banned for all athletes under the WADA code</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">S2. Peptide Hormones & Growth Factors</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Growth Hormone (GH)</li>
                    <li>• IGF-1</li>
                    <li>• GHRH analogs (CJC-1295, Tesamorelin, Sermorelin)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">GH Secretagogues</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Ipamorelin</li>
                    <li>• GHRP-6</li>
                    <li>• Hexarelin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">S0. Non-Approved Substances</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• AOD-9604</li>
                    <li>• Follistatin-344</li>
                    <li>• TB-500</li>
                    <li>• BPC-157</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Myostatin Inhibitors</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Follistatin and related agents</li>
                  </ul>
                </div>
              </div>

              <Alert className="mt-6 border-purple-300 bg-purple-50">
                <AlertTriangle className="h-4 w-4 text-purple-600" />
                <AlertTitle className="text-purple-900">Consequences for Athletes</AlertTitle>
                <AlertDescription className="text-purple-800">
                  Positive test results in sanctions ranging from 2-4 year bans. This applies to all competitive athletes under the WADA code, including NCAA, professional sports, and Olympic sports.
                </AlertDescription>
              </Alert>

              <a href="https://www.wada-ama.org/en/prohibited-list" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm flex items-center gap-1 mt-4">
                View WADA Prohibited List <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        </section>

        {/* General Safety Principles */}
        <section>
          <h2 className="text-3xl font-bold mb-6">General Safety Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Source Quality & Purity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Peptide purity and identity vary widely between sources. Compounded products may contain impurities, incorrect dosages, or even different compounds than labeled. Always verify third-party testing and certificates of analysis.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Injection Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Improper injection technique can lead to infection, injection site reactions, tissue damage, and other complications. Sterile technique and proper training are essential.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Immunogenicity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Peptides can trigger antibody formation, which may reduce efficacy over time or cause allergic reactions. This risk varies by peptide and individual immune response.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Long-Term Effects Unknown</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">For most unapproved peptides, long-term safety data does not exist. Potential risks including cancer promotion, hormonal disruption, and organ damage remain unknown.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drug Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Peptides may interact with medications, especially diabetes drugs, blood pressure medications, and hormonal therapies. Medical supervision is essential.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contraindications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Many peptides are contraindicated in pregnancy, cancer history, certain medical conditions, and specific age groups. Individual assessment is required.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Red Flags */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Red Flags Requiring Medical Evaluation</h2>
          
          <Alert className="border-red-400 bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-900 font-bold">Seek Immediate Medical Attention If You Experience:</AlertTitle>
            <AlertDescription className="text-red-800 mt-3">
              <ul className="space-y-2">
                <li>• <strong>Severe allergic reactions</strong> (anaphylaxis, difficulty breathing, severe swelling)</li>
                <li>• <strong>Persistent injection site reactions</strong> (redness, swelling, pain lasting &gt;48 hours)</li>
                <li>• <strong>Unexpected symptoms or side effects</strong> not documented in research literature</li>
                <li>• <strong>Worsening of pre-existing conditions</strong></li>
                <li>• <strong>Signs of infection</strong> (fever, chills, spreading redness, pus)</li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        {/* Responsible Use */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Responsible Use Guidelines</h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  This resource is provided for educational and research purposes only. The information presented here:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Does NOT constitute medical advice</li>
                  <li>• Should NOT be used to self-prescribe or self-administer peptides</li>
                  <li>• Describes research protocols, not approved medical treatments</li>
                  <li>• Includes many unapproved, illegal, or unsafe compounds</li>
                  <li>• Is intended for researchers, healthcare professionals, and educated consumers</li>
                </ul>
                <p className="text-lg font-semibold text-gray-900 mt-6">
                  Always consult qualified healthcare professionals before considering any peptide-based intervention.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/research-studies" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Research Studies Database</h3>
              <p className="text-gray-600">Browse clinical studies and research supporting peptide applications</p>
            </a>
            
            <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                PeptideProtocols.ai
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">AI-powered peptide protocol generation and clinical decision support</p>
            </a>
            
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                DrsPeptides.com
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">Professional-grade peptide supplier for healthcare providers</p>
            </a>
            
            <a href="https://www.fda.gov/drugs" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                FDA Drug Information
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">Official FDA drug approval and safety information</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Guidance?
          </h2>
          <p className="text-xl text-teal-50 mb-6 max-w-2xl mx-auto">
            Work with qualified healthcare professionals who understand peptide therapy and can provide personalized, evidence-based recommendations.
          </p>
          <a 
            href="https://drspeptides.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Visit DrsPeptides.com
          </a>
        </div>
      </div>
    </div>
  );
}
