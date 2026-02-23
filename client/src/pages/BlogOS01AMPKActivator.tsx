import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlogOS01AMPKActivator() {
  usePageTitle("OS-01 (ATX-304): The First Oral Pan-AMPK Activator That Burns Fat While Protecting Muscle", {
    description: "Explore OS-01 (ATX-304), a first-in-class oral pan-AMPK activator that promotes fat-focused weight loss while preserving lean muscle mass. Discover its dual mechanism, clinical trial results, and exercise-mimetic properties.",
    keywords: ['OS-01', 'ATX-304', 'O-304', 'AMPK activator', 'weight loss', 'muscle preservation', 'fat loss', 'metabolic science', 'longevity', 'DrsPeptides', 'Peptide Education Hub'],
    ogType: 'article' as const,
    schema: [{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "OS-01 (ATX-304): The First Oral Pan-AMPK Activator That Burns Fat While Protecting Muscle",
      "author": { "@type": "Organization", "name": "Peptide Education Hub" },
      "publisher": { "@type": "Organization", "name": "DrsPeptides", "url": "https://drspeptides.com" },
      "datePublished": "2026-02-23",
      "url": "https://pepedhub.com/blog/os-01-first-oral-ampk-activator"
    }]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="mb-8">
          <Badge className="bg-indigo-100 text-indigo-800 mb-4">Longevity & Metabolic Science</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OS-01 (ATX-304): The First Oral Pan-AMPK Activator That Burns Fat While Protecting Muscle</h1>
          <p className="text-gray-500 text-sm">Published February 23, 2026 · Peptide Education Hub</p>
        </div>

        {/* Content sections */}
        <Card className="mb-8">
          <CardHeader><CardTitle>Introduction: A New Era in Metabolic Health</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">In the relentless pursuit of solutions for metabolic diseases, a groundbreaking compound has emerged, promising to redefine our approach to weight management and overall metabolic health. OS-01, also known as O-304 or ATX-304, is a first-in-class, orally available, pan-AMPK activator that has demonstrated remarkable efficacy in promoting fat-focused weight loss while preserving precious lean muscle mass. This article, brought to you by the <a href="https://pepedhub.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Peptide Education Hub</a>, will delve into the science behind OS-01, its dual mechanism of action, and the compelling clinical and preclinical data that position it as a potential game-changer in the fight against obesity and related metabolic disorders. As a leading provider of research compounds, <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">DrsPeptides</a> is committed to advancing scientific understanding, and OS-01 represents a significant leap forward.</p>
            <p className="text-gray-700">AMP-activated protein kinase (AMPK) is a master regulator of cellular energy homeostasis. It is activated in response to low energy levels, such as during exercise or caloric restriction, and plays a crucial role in stimulating glucose uptake and fatty acid oxidation. The ability to pharmacologically activate AMPK has long been a coveted goal in metabolic research, and OS-01 appears to have unlocked this potential.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>The Dual Mechanism of OS-01: AMPK Activation and Mitochondrial Uncoupling</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">OS-01's unique therapeutic profile stems from its dual mechanism of action. Firstly, it acts as a pan-AMPK activator by suppressing the dephosphorylation of phosphorylated AMPK (pAMPK) at the Thr172 residue, a key step in maintaining AMPK in its active state. This is achieved without depleting cellular ATP levels, a significant advantage over other AMPK activation strategies. A 2018 study published in *JCI Insight* detailed how O304, by activating AMPK, improved glucose homeostasis and microvascular perfusion in both mice and type 2 diabetes patients [1].</p>
            <p className="mb-4 text-gray-700">Secondly, OS-01 exhibits mild mitochondrial uncoupling effects. Mitochondrial uncoupling is a process where the energy from the electron transport chain is dissipated as heat rather than being used to produce ATP. This increase in energy expenditure can contribute to weight loss. A 2025 study in *Chemico-Biological Interactions* confirmed O304 as a mitochondrial uncoupler and demonstrated its ability to extend the lifespan of *C. elegans* [6]. This dual action of activating AMPK and promoting mitochondrial uncoupling creates a powerful synergy for metabolic benefits.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Unprecedented Fat-Focused Weight Loss with Muscle Preservation</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">Perhaps the most striking finding from preclinical studies is OS-01's ability to induce significant weight loss that is almost entirely derived from fat, with a remarkable preservation of lean muscle mass. Data presented at the ENDO 2025 conference revealed that in a diet-induced obesity (DIO) mouse model, ATX-304 monotherapy resulted in a 21% reduction in body weight over 28 days. When combined with the GLP-1 receptor agonist semaglutide, the weight loss was even more pronounced, reaching 27% in just 15 days. Crucially, body composition analysis showed that this weight loss was attributable to a reduction in fat mass, with no loss of lean mass [4]. This is a critical differentiator from many current weight loss drugs, which often lead to a significant loss of muscle mass, a major concern, especially for older adults.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Human Clinical Trial Results: Translating Preclinical Promise to Patients</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">The promising preclinical findings with OS-01 have been corroborated by human clinical data. A Phase IIa trial in patients with type 2 diabetes, as reported in a press release from Betagenon, demonstrated that O304 significantly reduced fasting plasma glucose by 0.60 mM and lowered HOMA-IR, a measure of insulin resistance. The trial also showed improvements in cardiovascular parameters, including a reduction in blood pressure and an increase in microvascular perfusion [2]. These results, published in *JCI Insight*, highlight the potential of O304 to address multiple facets of metabolic syndrome [1]. The compound was also found to be safe and well-tolerated in human subjects.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Exercise in a Pill? The Exercise-Mimetic Properties of OS-01</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">The benefits of exercise on metabolic health are well-established, and OS-01 appears to mimic many of these effects. A 2021 study in *Communications Biology* showed that O304 acted as an exercise mimetic in aged mice, improving their physical performance and muscle physiology. The compound prevented and even reverted age-associated hyperinsulinemia and insulin resistance, and improved cardiac function and exercise capacity [3]. This suggests that OS-01 could offer a therapeutic strategy for individuals who are unable to engage in regular physical activity, helping them to reap some of the metabolic benefits of exercise.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Peripheral Restriction and Future Directions</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">An important feature of OS-01 is its peripheral restriction. The compound primarily acts on skeletal muscle, liver, heart, kidney, and the vasculature, with limited penetration into the central nervous system. This targeted action helps to minimize potential off-target effects in the brain. As research continues, the full therapeutic potential of OS-01 is still being explored. Amplifier Therapeutics, a Cambrian Biopharma pipeline company, is actively developing ATX-304 for obesity, with a focus on its unique muscle-preserving properties [5, 7, 8].</p>
            <p className="text-gray-700">**Disclaimer:** OS-01 (ATX-304) is a research compound and is not approved by the FDA for human consumption. The information provided in this article is for educational purposes only and should not be considered medical advice. Always consult with a qualified healthcare professional before making any decisions about your health or treatment.</p>
          </CardContent>
        </Card>

        {/* References section */}
        <Card className="mt-8">
          <CardHeader><CardTitle>References</CardTitle></CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>1. <a href="https://insight.jci.org/articles/view/99114" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Steneberg, P., et al. (2018). PAN-AMPK activator O304 improves glucose homeostasis and microvascular perfusion in mice and type 2 diabetes patients. *JCI Insight*, 3(12), e99114.</a></li>
              <li>2. <a href="https://www.prnewswire.com/news-releases/betagenonbaltic-bio-announces-positive-results-from-a-28-day-phase-iia-trial-of-the-first-in-class-ampk-activator-o304-in-type-2-diabetics-300548309.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Betagenon/Baltic Bio Announces Positive Results From a 28-day Phase IIa Trial of the First-in-class AMPK Activator O304 in Type 2 Diabetics. (2017). *PR Newswire*.</a></li>
              <li>3. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8602430/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Ericsson, M., et al. (2021). AMPK activator O304 improves metabolic and cardiac function, and exercise capacity in aged mice. *Communications Biology*, 4(1), 1-13.</a></li>
              <li>4. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12545902/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Schneider, E. J., et al. (2025). OR22-05 Weight Loss and Change in Body Composition in a DIO Mouse Model by the Combined AMPK and Mitochondrial Activator, ATX-304, Alone, in Combination With Semaglutide, and After Semaglutide Withdrawal. *Journal of the Endocrine Society*, 9(Supplement_1), bvad149-080.</a></li>
              <li>5. <a href="https://www.cambrianbio.com/blogs/atx-304-the-other-side-of-the-diet-exercise-equation-in-metabolic-disease" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Peyer, J. (2023). ATX-304: The Other Side of the Diet & Exercise Equation in Metabolic Disease. *Cambrian Bio Blog*.</a></li>
              <li>6. <a href="https://pubmed.ncbi.nlm.nih.gov/41130350/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Li, W. F., et al. (2025). O304 is a mitochondrial uncoupler which extends C. elegans lifespan and induces vasorelaxation of rat mesenteric arteries. *Chemico-Biological Interactions*, 421, 111788.</a></li>
              <li>7. <a href="https://www.amplifier-tx.com/programs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Therapeutics. (n.d.). *Our Programs*.</a></li>
              <li>8. <a href="https://www.biospace.com/amplifier-launches-to-bring-first-ampk-activator-for-obesity-to-clinic" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Launches to Bring First AMPK Activator for Obesity to Clinic. (2023). *BioSpace*.</a></li>
            </ol>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
