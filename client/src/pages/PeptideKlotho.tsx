import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrintButton from "@/components/PrintButton";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function PeptideKlotho() {
  usePageTitle(
    "Klotho: Comprehensive Clinical Guide | Peptide Education Hub",
    "Comprehensive evidence-based guide to Klotho (KL, α-klotho, β-klotho, γ-klotho). Mechanism of action, clinical applications, dosing protocols, safety profile, and research references for healthcare providers.",
    generatePeptideSchema({
      name: "Klotho",
      alternateName: "KL, α-klotho, β-klotho, γ-klotho",
      description: "Comprehensive evidence-based guide to Klotho for healthcare providers.",
      url: "https://pepedhub.com/peptides/klotho",
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/peptide-index">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Peptide Index
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">Klotho</h1>
                <Badge className="bg-white/20 text-white">Enzyme, Hormone</Badge>
              </div>
              <p className="text-teal-100 text-lg">Klotho</p>
              <p className="text-teal-200 text-sm mt-1">Also known as: KL, α-klotho, β-klotho, γ-klotho</p>
            </div>
            <div className="flex gap-2">
              <PrintButton />
              <SourcePeptidesButton />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="mechanism" className="flex items-center gap-1">
              <Beaker className="h-4 w-4" />
              Mechanism
            </TabsTrigger>
            <TabsTrigger value="clinical" className="flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              Clinical
            </TabsTrigger>
            <TabsTrigger value="dosing" className="flex items-center gap-1">
              <Syringe className="h-4 w-4" />
              Protocols
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Safety
            </TabsTrigger>
            <TabsTrigger value="references" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              References
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-teal-600" />
                  Klotho Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Klotho exerts its anti-aging effects through multiple pathways. It functions as a co-receptor for Fibroblast Growth Factor 23 (FGF23), playing a crucial role in regulating phosphate and vitamin D metabolism. The Klotho-FGF23 axis is essential for maintaining mineral homeostasis, and disruptions in this pathway are linked to various age-related pathologies, including chronic kidney disease and cardiovascular disorders.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Beyond its role with FGF23, Klotho also functions independently to inhibit several key signaling pathways implicated in aging. It directly binds to and inhibits the Transforming Growth Factor-β (TGF-β) receptor, a pathway known to promote fibrosis and cellular senescence. By suppressing TGF-β signaling, Klotho protects against tissue fibrosis, particularly in the kidneys.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Furthermore, Klotho has been shown to suppress the activity of the Wnt/β-catenin signaling pathway. It achieves this by binding to various Wnt ligands, preventing them from activating their receptors. Dysregulation of Wnt signaling is associated with a range of age-related conditions, including cancer and osteoporosis. Klotho's inhibition of this pathway contributes to its tumor-suppressive and bone-protective effects.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Klotho also inhibits the insulin/IGF-1 signaling pathway, a highly conserved pathway that regulates metabolism and aging. By downregulating this pathway, Klotho promotes longevity and resistance to metabolic diseases. This inhibition leads to the activation of Forkhead Box O (FOXO) transcription factors, which in turn upregulate the expression of antioxidant enzymes and other stress-resistance genes.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Finally, Klotho exhibits potent anti-inflammatory effects by inhibiting the Nuclear Factor-kappa B (NF-κB) signaling pathway. Chronic inflammation is a hallmark of aging, and NF-κB is a master regulator of inflammatory responses. By suppressing NF-κB, Klotho helps to quell age-related inflammation, thereby protecting against a wide range of inflammatory diseases.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mechanism Tab */}
          <TabsContent value="mechanism">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-teal-600" />
                  Mechanism of Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Klotho exerts its anti-aging effects through multiple pathways. It functions as a co-receptor for Fibroblast Growth Factor 23 (FGF23), playing a crucial role in regulating phosphate and vitamin D metabolism. The Klotho-FGF23 axis is essential for maintaining mineral homeostasis, and disruptions in this pathway are linked to various age-related pathologies, including chronic kidney disease and cardiovascular disorders.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Beyond its role with FGF23, Klotho also functions independently to inhibit several key signaling pathways implicated in aging. It directly binds to and inhibits the Transforming Growth Factor-β (TGF-β) receptor, a pathway known to promote fibrosis and cellular senescence. By suppressing TGF-β signaling, Klotho protects against tissue fibrosis, particularly in the kidneys.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Furthermore, Klotho has been shown to suppress the activity of the Wnt/β-catenin signaling pathway. It achieves this by binding to various Wnt ligands, preventing them from activating their receptors. Dysregulation of Wnt signaling is associated with a range of age-related conditions, including cancer and osteoporosis. Klotho's inhibition of this pathway contributes to its tumor-suppressive and bone-protective effects.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Klotho also inhibits the insulin/IGF-1 signaling pathway, a highly conserved pathway that regulates metabolism and aging. By downregulating this pathway, Klotho promotes longevity and resistance to metabolic diseases. This inhibition leads to the activation of Forkhead Box O (FOXO) transcription factors, which in turn upregulate the expression of antioxidant enzymes and other stress-resistance genes.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Finally, Klotho exhibits potent anti-inflammatory effects by inhibiting the Nuclear Factor-kappa B (NF-κB) signaling pathway. Chronic inflammation is a hallmark of aging, and NF-κB is a master regulator of inflammatory responses. By suppressing NF-κB, Klotho helps to quell age-related inflammation, thereby protecting against a wide range of inflammatory diseases.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clinical Applications Tab */}
          <TabsContent value="clinical">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-teal-600" />
                  Clinical Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Chronic Kidney Disease (CKD)</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Klotho is highly expressed in the kidneys and plays a crucial role in renal health. Klotho deficiency is a hallmark of CKD and contributes to the progression of the disease. Klotho supplementation has been shown to protect against kidney injury and fibrosis in preclinical models, making it a promising therapeutic target for CKD.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Neurodegenerative Diseases</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Klotho has emerged as a key player in brain health and longevity. Low Klotho levels are associated with an increased risk of cognitive decline and neurodegenerative diseases such as Alzheimer's and Parkinson's. Klotho has been shown to enhance cognitive function and protect neurons from damage, suggesting its potential as a therapeutic for these conditions.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Cardiovascular Disease</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Klotho has protective effects on the cardiovascular system. It helps to prevent vascular calcification, a major contributor to cardiovascular disease, and also protects against endothelial dysfunction and cardiac hypertrophy. Low Klotho levels are a risk factor for cardiovascular events, and strategies to increase Klotho may be beneficial for cardiovascular health.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Cancer</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Klotho has been identified as a tumor suppressor in several types of cancer. It inhibits cancer cell growth, proliferation, and metastasis by modulating various signaling pathways, including the Wnt and TGF-β pathways. Low Klotho expression is often associated with a poor prognosis in cancer patients.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Diabetes and Metabolic Syndrome</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Klotho is involved in the regulation of glucose and insulin metabolism. It has been shown to improve insulin sensitivity and protect against the development of diabetes and metabolic syndrome. Klotho may also have a role in protecting against diabetic complications, such as nephropathy and retinopathy.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Osteoporosis</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Klotho plays a role in bone metabolism and helps to maintain bone density. Klotho deficiency is associated with an increased risk of osteoporosis and fractures. Klotho may have therapeutic potential for the treatment of osteoporosis and other bone disorders.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Aging</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">As an anti-aging protein, Klotho has a wide range of effects that combat the aging process. It has been shown to extend lifespan in animal models and is associated with longevity in humans. By targeting multiple aging-related pathways, Klotho has the potential to be a powerful anti-aging therapeutic.</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dosing Protocols Tab */}
          <TabsContent value="dosing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Syringe className="h-5 w-5 text-teal-600" />
                  Dosing Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-800 dark:text-amber-200">Clinical Supervision Required</p>
                        <p className="text-sm text-amber-700 dark:text-amber-300">All dosing protocols should be administered under the supervision of a qualified healthcare provider.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Research on Klotho peptide is still in its early stages, and there are no standardized dosing protocols for human use. However, some information can be gleaned from preclinical studies and the websites of clinics that offer Klotho as a therapy. It is important to note that the following information is for research purposes only and should not be considered medical advice.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    One clinic's website suggests a protocol for a specific Klotho formulation (Klotho_FG) that involves intramuscular (IM) injections of 0.50ml three times a week for three months, followed by a one-month break. After the break, the protocol is repeated for another three months, followed by a maintenance program of one injection per week for six months.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Another source suggests a dosage range of 1 to 10 micrograms per kilogram of body weight. In a mouse model of acute kidney injury, a dose of 0.01 mg/kg of α-Klotho protein was administered intraperitoneally (i.p.) for four consecutive days.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    In a study on a Klotho-derived peptide (KP1), a dose of 1 mg/kg per day was administered to mice, and was found to accumulate in damaged kidneys.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    It is clear that more research is needed to determine the optimal dosing, route of administration, and treatment duration for Klotho peptide in various clinical applications. The information available is limited and should be interpreted with caution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety Tab */}
          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-teal-600" />
                  Safety Profile & Interactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Safety Profile</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    There is currently no human safety data available for Klotho peptides, as they have not yet been tested in clinical trials. Therefore, the complete safety profile is unknown. The information available is based on preclinical studies and theoretical considerations.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    **Key Safety Considerations:**
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    *   **Lack of Human Data:** The most significant risk is the absence of human safety data. The potential for unforeseen side effects in humans is a major concern.
*   **Pathway Inhibition:** Klotho peptides work by inhibiting key signaling pathways such as TGF-β and Wnt. While this is the basis for their therapeutic potential, systemic inhibition of these pathways could have unintended consequences. These pathways are essential for normal physiological processes, including immune function, wound healing, and tissue homeostasis. Disrupting them could lead to immune dysregulation, impaired healing, and other adverse effects.
*   **Dose-Response Uncertainty:** The optimal dosage for Klotho peptides has not been established, even in animal models. An inverted U-shaped dose-response curve has been observed with the full Klotho protein, where high doses were less effective than moderate doses. This suggests that more is not necessarily better, and finding the right therapeutic window will be crucial.
*   **Research-Grade Compounds:** Klotho peptides are currently available only as research-grade compounds, which are not manufactured under the same strict standards as pharmaceutical-grade products. This means they may contain impurities or contaminants that could pose additional health risks.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    **Contraindications:**
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Due to the lack of human data, there are no established contraindications for Klotho peptides. However, based on their mechanism of action, they should be used with caution in individuals with:
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    *   **Active infections or compromised immune systems:** Due to the potential for immune dysregulation.
*   **A history of cancer:** While Klotho has shown tumor-suppressive effects in some cancers, its impact on other cancers is unknown, and inhibiting pathways like TGF-β and Wnt could theoretically promote tumor growth in certain contexts.
*   **A history of bleeding disorders or those taking anticoagulant medications:** Due to the potential for impaired wound healing.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    **Side Effects:**
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    No side effects have been reported in humans, as there have been no human trials. In preclinical studies, no major safety concerns have been raised, but the long-term effects of Klotho supplementation are still unknown.
                  </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Drug Interactions</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    There is limited information on direct drug-drug interactions with Klotho peptides, as they have not been studied in humans. However, some drugs have been shown to affect Klotho levels, which could have implications for co-administration.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    **Drugs that may increase Klotho levels:**
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    *   **Renin-angiotensin system inhibitors:** Losartan and valsartan have been shown to increase Klotho levels in clinical trials.
*   **Statins:** Fluvastatin has been associated with increased Klotho levels.
*   **mTOR inhibitors:** Rapamycin and everolimus have been shown to enhance Klotho expression.
*   **Vitamin D:** Vitamin D supplementation has been linked to increased Klotho levels.
*   **Pentoxifylline:** This drug has been shown to increase Klotho levels.
*   **Antidiabetic drugs:** Metformin, GLP-1 agonists, GABA, and PPAR-γ agonists have been shown to increase Klotho in preclinical studies.
*   **Nutraceuticals:** Astaxanthin, curcumin, ginseng, ligustilide, and resveratrol have been shown to increase Klotho in animal models.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    **Drugs that may decrease Klotho levels:**
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    *   **Nonsteroidal anti-inflammatory drugs (NSAIDs):** Some studies suggest that NSAIDs may decrease Klotho levels, possibly by reducing renal blood flow.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    **Theoretical Interactions:**
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Given Klotho's mechanism of action, there are several theoretical drug interactions that could occur:
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    *   **Immunosuppressants:** Co-administration with immunosuppressants could have additive effects, as Klotho itself has immunomodulatory properties.
*   **Antifibrotic drugs:** Klotho's antifibrotic effects could be synergistic with other antifibrotic agents.
*   **Wnt and TGF-β inhibitors:** Since Klotho inhibits these pathways, co-administration with other drugs that target these pathways could lead to enhanced effects or an increased risk of side effects.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    It is important to reiterate that this information is largely theoretical and based on preclinical data. More research is needed to understand the full scope of drug interactions with Klotho peptides.
                  </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* References Tab */}
          <TabsContent value="references">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                  Key Research Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Kuro-o M, et al. (1997). Mutation of the mouse klotho gene leads to a syndrome resembling ageing. Nature.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Kurosu H, et al. (2005). Suppression of aging in mice by the hormone Klotho. Science.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Dubal DB, et al. (2014). Life extension factor Klotho enhances cognition. Cell Reports.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Castner, S. A. et al. (2023). Longevity factor klotho enhances cognition in aged nonhuman primates. Nature Aging.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Yuan, Q. et al. (2022). A Klotho-derived peptide protects against kidney fibrosis by targeting TGF-β signaling. Nature Communications.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Prud'homme, G. J., Kurt, M., & Wang, Q. (2022). Pathobiology of the Klotho Antiaging Protein and Therapeutic Considerations. Frontiers in Aging.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Cheikhi, A., et al. (2019). Klotho: An Elephant in Aging Research. The Journals of Gerontology: Series A.
                    </li>
                </ol>
              </CardContent>
            </Card>

            {/* Related Peptides */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Related Peptides</CardTitle>
              </CardHeader>
              
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="h-5 w-5" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>
        Kurosu, H., et al. (2005). "Suppression of aging in mice by the hormone Klotho." <em>Science</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/15919966/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 15919966
        </a>
      </li>
      <li>
        Kuro-o, M. (2019). "Klotho and aging." <em>Biochimica et Biophysica Acta (BBA) - General Subjects</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30336840/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 30336840
        </a>
      </li>
      <li>
        Chen, C. D., et al. (2007). "Klotho gene delivery prevents progression of spontaneous hypertension and renal damage." <em>Hypertension</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17420448/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 17420448
        </a>
      </li>
      <li>
        Sugiura, H., et al. (2010). "Klotho protein protects against endothelial dysfunction." <em>American Journal of Physiology - Heart and Circulatory Physiology</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20472793/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 20472793
        </a>
      </li>
      <li>
        Hu, M. C., et al. (2010). "Klotho deficiency causes vascular calcification in chronic kidney disease." <em>Journal of the American Society of Nephrology</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20407025/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 20407025
        </a>
      </li>
      <li>
        Imura, A., et al. (2004). "Secreted Klotho protein regulates calcium homeostasis." <em>Kidney International</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/14734583/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 14734583
        </a>
      </li>
      <li>
        Kuro-o, M. (2010). "Klotho as a regulator of oxidative stress and senescence." <em>Biological Chemistry</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20019167/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 20019167
        </a>
      </li>
      <li>
        Lim, K., et al. (2015). "Klotho deficiency is an early biomarker of renal ischemia-reperfusion injury and its replacement is protective." <em>Kidney International</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25550476/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 25550476
        </a>
      </li>
      <li>
        Semba, R. D., et al. (2011). "Klotho in human aging and disease." <em>Current Opinion in Nephrology and Hypertension</em>.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21546973/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">
          PMID 21546973
        </a>
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-2 text-sm">
      Klotho exhibits enhanced therapeutic potential when combined with the following compounds:
    </p>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>
        <strong>FGF23 (Fibroblast Growth Factor 23):</strong> Klotho acts as a co-receptor for FGF23, improving phosphate metabolism and renal function.
      </li>
      <li>
        <strong>Vitamin D3 (Calcitriol):</strong> Synergizes with Klotho to regulate calcium and phosphate homeostasis, supporting bone health.
      </li>
      <li>
        <strong>Resveratrol:</strong> Antioxidant properties complement Klotho’s anti-aging effects by reducing oxidative stress.
      </li>
      <li>
        <strong>Metformin:</strong> May enhance Klotho expression and improve metabolic and vascular outcomes.
      </li>
      <li>
        <strong>Coenzyme Q10:</strong> Supports mitochondrial function and may potentiate Klotho’s protective effects against cellular senescence.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-5 w-5" />
      Drug Interactions &amp; Contraindications
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-2 text-sm">
      While Klotho is generally well-tolerated, consider the following safety information:
    </p>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>
        <strong>Drug Interactions:</strong> Potential interactions with phosphate binders and vitamin D analogs may alter mineral metabolism; monitor serum calcium and phosphate levels.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> Limited data exist; caution advised when used concurrently due to possible immune modulation.
      </li>
      <li>
        <strong>Contraindications:</strong> Avoid use in patients with hypercalcemia or severe hyperphosphatemia without close monitoring.
      </li>
      <li>
        <strong>Pregnancy and Lactation:</strong> Safety has not been established; use only if clearly needed and under medical supervision.
      </li>
      <li>
        <strong>Renal Impairment:</strong> Dose adjustments may be necessary; monitor renal function and electrolytes regularly.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">MOTS-c</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Humanin</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">GDF11</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Epitalon</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Klotho Protocol</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SourcePeptidesButton />
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                Explore More Peptides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
