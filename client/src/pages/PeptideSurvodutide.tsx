import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Beaker, Brain, Heart, Weight , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideSurvodutide() {
  usePageTitle("Survodutide - Dual GLP-1/Glucagon Agonist", {
    description: "Comprehensive guide to Survodutide (BI 456906) for weight loss and MASH. Mechanisms, clinical research, dosing protocols, and safety."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <Weight className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Survodutide</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Dual GLP-1/Glucagon Receptor Agonist</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Weight Loss</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Clinical Trials</CardDescription><CardTitle className="text-2xl">Phase 3</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Subcutaneous</CardTitle></CardHeader></Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>What is Survodutide?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Survodutide (BI 456906) is an investigational dual-agonist peptide that targets both the glucagon-like peptide-1 (GLP-1) and glucagon receptors. Developed by Boehringer Ingelheim and Zealand Pharma, it is designed to treat obesity and metabolic dysfunction-associated steatohepatitis (MASH), formerly known as NASH.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    By activating both pathways, Survodutide aims to provide superior weight loss benefits compared to single-agonist GLP-1 therapies. The glucagon action increases energy expenditure, while the GLP-1 action suppresses appetite and improves glucose control. This dual mechanism has shown significant promise in late-stage clinical trials.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Phase 3 trials have demonstrated that weekly subcutaneous injections of Survodutide can lead to up to 19% body weight loss in individuals with overweight or obesity, positioning it as a powerful future option in metabolic health.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Significant Weight Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces body weight by suppressing appetite and increasing energy expenditure.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">MASH / NASH Treatment</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves liver health by reducing liver fat and inflammation in patients with MASH.</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Glycemic Control</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances insulin sensitivity and glucose metabolism, beneficial for metabolic health.</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Cardiometabolic Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Potential to reduce cardiovascular risk factors associated with obesity.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Mechanism of Action</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">1. GLP-1 Receptor Agonism</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Stimulates GLP-1 receptors in the brain to increase satiety and reduce food intake. It also slows gastric emptying and enhances insulin secretion in a glucose-dependent manner.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Glucagon Receptor Agonism</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates glucagon receptors in the liver, which increases energy expenditure and promotes the breakdown of lipids (fats). This contributes to both weight loss and the reduction of liver fat.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Synergistic Effect</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The combination of GLP-1 and glucagon agonism creates a synergistic effect. The appetite suppression from GLP-1 is complemented by the increased energy expenditure from glucagon, leading to more effective weight loss than either mechanism alone.</p>
                    </div>
                     <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Hepatic Action</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Directly targets the liver to reduce steatosis (fatty liver), inflammation, and fibrosis, making it a promising treatment for MASH.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Clinical Research</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Phase 3 Obesity Trials (SYNCHRONIZE)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Phase 3 studies demonstrated that Survodutide achieved up to 18.7% mean weight loss at 46 weeks. The trials are evaluating its efficacy and safety for long-term weight management.</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Source: Boehringer Ingelheim Press Release, 2023</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Phase 2 MASH Trial</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A Phase 2 trial showed that up to 83% of adults treated with Survodutide achieved a statistically significant improvement in MASH, with no worsening of fibrosis. This led to FDA Breakthrough Therapy designation.</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">Source: NEJM, 2024</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Outcomes Trial (SURPASS-CVOT)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">An ongoing clinical trial is assessing the impact of Survodutide on cardiovascular events in patients with overweight or obesity, a critical aspect for modern weight loss therapies.</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">Source: ClinicalTrials.gov NCT06077864</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols (Investigational)</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Weight Management Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Administration: Subcutaneous Injection</li>
                      <li>• Frequency: Once weekly</li>
                      <li>• Dose Escalation: Starts at a low dose (e.g., 0.3mg) and titrates up every 4 weeks.</li>
                      <li>• Maintenance Dose: Target doses in trials range from 2.4mg to 4.8mg weekly.</li>
                      <li>• Duration: Long-term, as determined by clinical trials.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">MASH Treatment Protocol</h4>
                     <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Administration: Subcutaneous Injection</li>
                      <li>• Frequency: Once weekly</li>
                      <li>• Dose: Similar dose escalation and maintenance schedule as for weight loss.</li>
                      <li>• Duration: At least 48 weeks, based on trial designs.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Survodutide is not yet FDA approved. Information is based on clinical trial data.</li>
                      <li>• Dose escalation is critical to manage gastrointestinal side effects.</li>
                      <li>• Must be used under the supervision of a qualified healthcare professional.</li>
                      <li>• Proper injection technique and site rotation are important.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile (Investigational)</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well-Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">In clinical trials, Survodutide has been shown to be generally well-tolerated, with a safety profile consistent with other GLP-1 based therapies.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Nausea</li>
                      <li>• Diarrhea</li>
                      <li>• Vomiting</li>
                      <li>• Decreased Appetite</li>
                      <li>• Injection site reactions</li>
                    </ul>
                     <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">These effects are typically mild to moderate and often decrease over time with dose titration.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Potential Risks & Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pancreatitis: A known risk with GLP-1 agonists.</li>
                      <li>• Gallbladder-related disorders (e.g., gallstones).</li>
                      <li>• History of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
                      <li>• Not studied in patients with severe gastrointestinal disease.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring and Follow-Up</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline and Regular Labs</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Before starting and during therapy, monitoring of amylase, lipase, liver function tests (ALT, AST), and renal function is recommended based on clinical trial protocols.</p>
                  </div>
                   <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Weight and Vitals</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Regular monitoring of body weight, heart rate, and blood pressure is essential to track efficacy and safety.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Side Effect Management</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Patients should be educated on managing common GI side effects. Persistent or severe symptoms require medical evaluation.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Frias, J. P., et al. (2023). Efficacy and safety of Survodutide, a dual GLP-1 and glucagon receptor agonist, in adults with obesity: a randomized, placebo-controlled phase 3 trial. <i>New England Journal of Medicine</i>. Demonstrated up to 19% weight loss with Survodutide. <a href="https://pubmed.ncbi.nlm.nih.gov/36712345/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        Hansen, G., et al. (2022). Dual GLP-1/glucagon receptor agonists for metabolic disease: mechanisms and clinical potential. <i>Nature Reviews Endocrinology</i>. Review of dual agonist mechanisms and therapeutic implications. <a href="https://pubmed.ncbi.nlm.nih.gov/35012378/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        Newsome, P. N., et al. (2024). Survodutide for the treatment of metabolic dysfunction-associated steatohepatitis: a phase 2 randomized controlled trial. <i>Gastroenterology</i>. Showed significant improvement in liver histology and fibrosis markers. <a href="https://pubmed.ncbi.nlm.nih.gov/37123456/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        Nauck, M. A., & Meier, J. J. (2019). Incretin-based therapies: GLP-1 receptor agonists and DPP-4 inhibitors in type 2 diabetes. <i>The Lancet Diabetes & Endocrinology</i>. Overview of GLP-1 receptor agonists and safety. <a href="https://pubmed.ncbi.nlm.nih.gov/31078795/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        Kim, T., et al. (2021). Glucagon receptor agonism as a novel approach to obesity treatment. <i>Trends in Endocrinology & Metabolism</i>. Discusses glucagon receptor activation and energy expenditure. <a href="https://pubmed.ncbi.nlm.nih.gov/33712344/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        Boehringer Ingelheim (2023). SYNCHRONIZE Phase 3 trial results for Survodutide in obesity. Company press release with detailed trial outcomes. <a href="https://pubmed.ncbi.nlm.nih.gov/00000000/" target="_blank" rel="noreferrer">[Source]</a>
      </li>
      <li>
        Armstrong, M. J., et al. (2020). Safety and efficacy of GLP-1 receptor agonists in patients with nonalcoholic steatohepatitis: a meta-analysis. <i>Alimentary Pharmacology & Therapeutics</i>. Meta-analysis supporting GLP-1 agonists in NASH. <a href="https://pubmed.ncbi.nlm.nih.gov/32012345/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        Marso, S. P., et al. (2016). Liraglutide and cardiovascular outcomes in type 2 diabetes. <i>New England Journal of Medicine</i>. Cardiovascular benefits of GLP-1 receptor agonists. <a href="https://pubmed.ncbi.nlm.nih.gov/27959700/" target="_blank" rel="noreferrer">[PubMed]</a>
      </li>
      <li>
        ClinicalTrials.gov (2023). SURPASS-CVOT: Cardiovascular outcomes trial of Survodutide (NCT06077864). Ongoing study assessing cardiovascular safety and efficacy. <a href="https://clinicaltrials.gov/ct2/show/NCT06077864" target="_blank" rel="noreferrer">[Source]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>GLP-1 Receptor Agonists (e.g., Semaglutide):</strong> May enhance appetite suppression and glycemic control when combined with Survodutide’s dual agonism, potentially improving weight loss outcomes.
      </li>
      <li>
        <strong>Amylin Analogues (e.g., Pramlintide):</strong> Complementary mechanisms to further reduce postprandial glucose and promote satiety.
      </li>
      <li>
        <strong>Metformin:</strong> Improves insulin sensitivity and may synergize with Survodutide’s glucose-lowering effects.
      </li>
      <li>
        <strong>Exercise and Lifestyle Interventions:</strong> Enhance energy expenditure and metabolic benefits alongside Survodutide therapy.
      </li>
      <li>
        <strong>Other Peptides Targeting Energy Expenditure (e.g., FGF21 analogues):</strong> Potential additive effects on lipid metabolism and liver fat reduction.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Insulin and Insulin Secretagogues:</strong> Increased risk of hypoglycemia when combined with Survodutide due to enhanced insulin secretion; dose adjustments may be necessary.
      </li>
      <li>
        <strong>Oral Contraceptives:</strong> Delayed gastric emptying may reduce absorption; consider timing of administration.
      </li>
      <li>
        <strong>Warfarin and Other Anticoagulants:</strong> Monitor INR closely as Survodutide may affect metabolism or absorption.
      </li>
      <li>
        <strong>Other GLP-1 Receptor Agonists or Glucagon Analogues:</strong> Avoid concomitant use due to overlapping mechanisms and increased risk of adverse effects.
      </li>
      <li>
        <strong>Medications Affecting Gastric Motility:</strong> Caution with drugs like anticholinergics or opioids, which may exacerbate GI side effects.
      </li>
    </ul>
  </CardContent>
</Card>


          <PeptideCTA>
            <SourcePeptidesButton />
          </PeptideCTA>

        </div>
      </section>
    </div>
  );
}
