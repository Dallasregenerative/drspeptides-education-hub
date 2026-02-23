import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlogOS01LongevityScience() {
  usePageTitle("AMPK, Longevity, and the Exercise Mimetic Revolution: The Science Behind OS-01", {
    description: "Explore the science behind OS-01, a direct AMPK activator with exercise mimetic properties. Learn how it impacts longevity, metabolic health, and its journey to the clinic.",
    keywords: ['OS-01', 'O304', 'ATX-304', 'AMPK', 'longevity', 'exercise mimetic', 'caloric restriction', 'metformin', 'rapamycin', 'C. elegans', 'beta-cell', 'Betagenon', 'Amplifier Therapeutics', 'Cambrian Bio', 'chronic weight management', 'NAD+', 'GHK-Cu', 'MOTS-c'],
    ogType: 'article' as const,
    schema: [{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AMPK, Longevity, and the Exercise Mimetic Revolution: The Science Behind OS-01",
      "author": { "@type": "Organization", "name": "Peptide Education Hub" },
      "publisher": { "@type": "Organization", "name": "DrsPeptides", "url": "https://drspeptides.com" },
      "datePublished": "2026-02-23",
      "url": "https://pepedhub.com/blog/os-01-ampk-longevity-exercise-mimetic"
    }]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="mb-8">
          <Badge className="bg-indigo-100 text-indigo-800 mb-4">Longevity Science</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AMPK, Longevity, and the Exercise Mimetic Revolution: The Science Behind OS-01</h1>
          <p className="text-gray-500 text-sm">Published February 23, 2026 · Peptide Education Hub</p>
        </div>

        {/* Content sections */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg text-gray-700">A new era in longevity science is dawning, and at its heart lies a molecule with the potential to redefine our understanding of aging. OS-01, a groundbreaking AMPK activator, is not just another supplement; it's a key that could unlock the very mechanisms of cellular energy and repair. This article, brought to you by the <a href="https://pepedhub.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Peptide Education Hub</a>, will delve into the science behind OS-01, exploring its journey from a lab discovery to a promising therapeutic poised to revolutionize the way we approach longevity and metabolic health.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>The Master Switch of Metabolism: An Introduction to AMPK</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">AMP-activated protein kinase (AMPK) is a crucial enzyme that acts as a master regulator of cellular energy homeostasis. Think of it as your body's internal fuel gauge. When energy levels are low, AMPK is activated, triggering a cascade of events to restore balance. This includes increasing glucose uptake, boosting fatty acid oxidation, and promoting mitochondrial biogenesis—the creation of new mitochondria, the powerhouses of our cells.</p>
            <p className="text-gray-700">AMPK's role extends far beyond simple energy regulation. It is a central hub in the network of longevity pathways, intersecting with other well-known players like caloric restriction, exercise, and even pharmaceuticals like metformin and rapamycin. By activating AMPK, we can essentially mimic the beneficial effects of these interventions, promoting cellular health and resilience.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>OS-01: A Direct and Potent AMPK Activator</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">While interventions like exercise and metformin can indirectly activate AMPK, OS-01, also known as O304, takes a more direct approach. Developed by Betagenon AB and now under the stewardship of Amplifier Therapeutics, a Cambrian Bio company, OS-01 is a first-in-class, orally bioavailable, and peripherally-restricted pan-AMPK activator. This means it directly targets and activates AMPK throughout the body, without crossing the blood-brain barrier, minimizing the potential for central nervous system side effects.</p>
            <p className="text-gray-700">This direct mechanism of action is what sets OS-01 apart. It offers a more targeted and potent way to harness the power of AMPK, with the potential for greater therapeutic benefits.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>The Exercise Mimetic Revolution</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">One of the most exciting aspects of OS-01 is its ability to act as an "exercise mimetic." In a foundational study published in <a href="https://insight.jci.org/articles/view/99114" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline"><i>JCI Insight</i></a>, researchers demonstrated that O304 improved glucose homeostasis and microvascular perfusion in both mice and type 2 diabetes patients. The study showed that O304 increased glucose uptake in skeletal muscle, reduced β-cell stress, and promoted β-cell rest. It also improved cardiac function, increasing left ventricular stroke volume without causing an increase in heart weight.</p>
            <p className="text-gray-700">Another study, published in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8602430/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline"><i>Communications Biology</i></a>, further explored the exercise mimetic properties of O304 in aged mice. The researchers found that O304 prevented and reverted age-associated hyperinsulinemia and insulin resistance, and improved cardiac function and exercise capacity. These findings provide compelling preclinical evidence that O304 can mimic the beneficial effects of exercise, offering a potential solution for individuals who are unable to engage in regular physical activity.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Extending Lifespan in C. elegans</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700">The anti-aging potential of OS-01 is not limited to its exercise mimetic effects. A study published in <a href="https://pubmed.ncbi.nlm.nih.gov/41130350/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline"><i>Chemico-Biological Interactions</i></a> revealed that O304 extends the lifespan of the nematode <i>C. elegans</i> through mitochondrial uncoupling. Mitochondrial uncoupling is a process that can reduce the production of reactive oxygen species (ROS), a major contributor to cellular aging. By uncoupling mitochondria, O304 was able to extend the lifespan of <i>C. elegans</i> and also showed anti-aging effects in mouse embryonic fibroblasts.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Protecting the Pancreas: Beta-Cell Epigenetics</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700">Type 2 diabetes is characterized by the progressive failure of pancreatic beta-cells. A study published in <a href="https://www.nature.com/articles/s41598-021-03567-3" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline"><i>Scientific Reports</i></a> investigated the protective effects of O304 on beta-cells in mice fed a high-fat diet. The researchers found that O304 prevented genome-wide gene expression changes and remodeled chromatin in the pancreatic islets. It also abrogated the increased expression of the beta-cell stress marker Aldh1a3 and restored dysfunctional glucose homeostasis. These findings suggest that O304 can protect beta-cells from the damaging effects of a high-fat diet, potentially preserving their function and preventing the onset of type 2 diabetes.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>The Journey to the Clinic: From Betagenon to Amplifier</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">The development of OS-01 has been a journey of scientific innovation and strategic partnership. Originally discovered and developed by the Swedish biopharma company <a href="https://www.prnewswire.com/news-releases/betagenonbaltic-bio-announces-positive-results-from-a-28-day-phase-iia-trial-of-the-first-in-class-ampk-activator-o304-in-type-2-diabetics-300548309.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Betagenon AB</a>, the compound, then known as O304, showed immense promise in preclinical studies. In 2023, <a href="https://www.cambrianbio.com/pipeline" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cambrian BioPharma</a>, a clinical-stage longevity biotech company, acquired the rights to O304 and launched <a href="https://www.amplifier-tx.com/programs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Therapeutics</a> to advance its clinical development. The compound was renamed ATX-304, and later OS-01 for the research market.</p>
            <p className="text-gray-700">This acquisition marked a significant milestone in the development of OS-01, bringing it under the umbrella of a company dedicated to extending healthy lifespan. With a <a href="https://www.biospace.com/article/releases/amplifier-therapeutics-announces-33-25-million-series-a-financing-to-advance-clinical-development-of-atx-304-for-cardiometabolic-diseases/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">$33.25M Series A financing</a>, Amplifier Therapeutics is well-positioned to accelerate the clinical development of OS-01 and bring this promising therapeutic to patients.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Clinical Progression and Future Directions</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">OS-01 has already undergone several clinical trials, demonstrating a favorable safety and tolerability profile in over 150 human subjects. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6124394/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Phase IIa trial</a> in type 2 diabetics on metformin showed that O304 significantly reduced fasting plasma glucose and improved vascular function. Currently, Amplifier Therapeutics is conducting a Phase 1B trial in pre-diabetic, overweight/obese subjects in the European Union.</p>
            <p className="text-gray-700">The future of OS-01 is bright. Upon completion of the Phase 1B study, Amplifier is considering further development for chronic weight management, a major public health challenge. The potential for OS-01 to be approved by the FDA for this indication would be a game-changer in the field of obesity medicine.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>OS-01 in a Longevity Stack</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700">For those interested in longevity and biohacking, OS-01 presents an exciting new tool to add to their arsenal. As a direct AMPK activator, it can be stacked with other longevity-promoting compounds to create a synergistic effect. For example, combining OS-01 with NAD+ precursors, GHK-Cu, and MOTS-c could create a powerful combination to support cellular health, energy production, and repair. The <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">DrsPeptides</a> team is a valuable resource for information on these and other research compounds.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Regulatory Status and Ethical Positioning</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-700">It is important to note that OS-01 is currently available as a research compound only. It has not been approved by the FDA for any medical use. As with any research compound, it is crucial to approach its use with caution and to consult with a qualified healthcare professional. The <a href="https://pepedhub.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Peptide Education Hub</a> and DrsPeptides are committed to providing accurate and unbiased information about peptides and research compounds, and we encourage our readers to do their own research and to make informed decisions about their health.</p>
          </CardContent>
        </Card>

        {/* References section */}
        <Card className="mt-8">
          <CardHeader><CardTitle>References</CardTitle></CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>1. <a href="https://insight.jci.org/articles/view/99114" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Steneberg, P., et al. (2018). PAN-AMPK activator O304 improves glucose homeostasis and microvascular perfusion in mice and type 2 diabetes patients. <i>JCI Insight</i>.</a></li>
              <li>2. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8602430/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Ericsson, M., et al. (2021). AMPK activator O304 improves metabolic and cardiac function, and exercise capacity in aged mice. <i>Communications Biology</i>.</a></li>
              <li>3. <a href="https://pubmed.ncbi.nlm.nih.gov/41130350/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Li, W. F., et al. (2025). O304 is a mitochondrial uncoupler which extends C. elegans lifespan and induces vasorelaxation of rat mesenteric arteries. <i>Chemico-Biological Interactions</i>.</a></li>
              <li>4. <a href="https://www.nature.com/articles/s41598-021-03567-3" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">López-Pérez, A., et al. (2021). Pan-AMPK activator O304 prevents gene expression changes and remobilisation of histone marks in islets of diet-induced obese mice. <i>Scientific Reports</i>.</a></li>
              <li>5. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6124394/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cuthbertson, D. J., et al. (2018). A First-in-Human Phase 2a Study of the AMPK Activator O304 in Patients with Type 2 Diabetes. <i>Diabetes</i>.</a></li>
              <li>6. <a href="https://www.prnewswire.com/news-releases/betagenonbaltic-bio-announces-positive-results-from-a-28-day-phase-iia-trial-of-the-first-in-class-ampk-activator-o304-in-type-2-diabetics-300548309.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Betagenon/Baltic Bio Announces Positive Results From a 28-day Phase IIa Trial of the First-in-class AMPK Activator O304 in Type 2 Diabetics. (2017). <i>PR Newswire</i>.</a></li>
              <li>7. <a href="https://www.amplifier-tx.com/programs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Amplifier Therapeutics. (n.d.). Programs.</a></li>
              <li>8. <a href="https://www.biospace.com/amplifier-launches-to-bring-first-ampk-activator-for-obesity-to-clinic" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Goodwin, K. (2023). Amplifier Launches to Bring First AMPK Activator to the Clinic. <i>BioSpace</i>.</a></li>
              <li>9. <a href="https://www.cambrianbio.com/pipeline" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cambrian Bio. (n.d.). Pipeline.</a></li>
              <li>10. <a href="https://www.cambrianbio.com/blogs/atx-304-the-other-side-of-the-diet-exercise-equation-in-metabolic-disease" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Cambrian Bio. (2023). ATX-304: The Other Side of the Diet & Exercise Equation in Metabolic Disease.</a></li>
              <li>11. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8924548/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Kitada, M., et al. (2022). AMPK-activating agent O304 protects against the progression of diabetic nephropathy in db/db mice. <i>International Journal of Molecular Sciences</i>.</a></li>
              <li>12. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11981618/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Zhang, Y., et al. (2025). AMPK activator ATX-304 reduces oxidative stress and improves MASLD via metabolic switching. <i>Metabolism</i>.</a></li>
            </ol>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
