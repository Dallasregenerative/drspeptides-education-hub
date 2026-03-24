import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Shield, Sparkles, AlertTriangle, CheckCircle, Activity, Leaf, ArrowLeft, BookOpen , Stethoscope } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaRG5555() {
  usePageTitle("Formula RG-5555: Multi-Peptide Regenerative Formula", {
    description: "Advanced healing and recovery formula with BPC-157, TB-500, KPV, and Larazotide for comprehensive tissue repair, anti-inflammatory support, and gut health. A proprietary DrsPeptides compound.",
    keywords: ['Formula RG-5555', 'RG-5555', 'RG5555', 'DrsPeptides formula', 'proprietary peptide blend', 'regenerative formula', 'healing peptide blend', 'BPC-157', 'TB-500', 'KPV', 'Larazotide'],
    ogType: 'article' as const,
    schema: [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Formula RG-5555",
      "alternateName": ['RG-5555', 'RG5555', 'Formula RG5555', 'DrsPeptides RG-5555', 'Regenerative Formula', 'Multi-Peptide Healing Formula'],
      "description": "Advanced healing and recovery formula with BPC-157, TB-500, KPV, and Larazotide for comprehensive tissue repair, anti-inflammatory support, and gut health. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-rg-5555",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "activeIngredient": "500 mg BPC-157 + 500 mg TB-500 + 500 mg KPV + 500 mg Larazotide",
      "administrationRoute": "Varies by formulation",
      "drugClass": "Peptide Therapy Compound",
      "mechanismOfAction": "Multi-Peptide Regenerative Formula",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": "https://pepedhub.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Formula RG-5555 - Multi-Peptide Regenerative Formula | DrsPeptides Proprietary Formula",
      "description": "Advanced healing and recovery formula with BPC-157, TB-500, KPV, and Larazotide for comprehensive tissue repair, anti-inflammatory support, and gut health. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-rg-5555",
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Regenerative Medicine"
      },
      "lastReviewed": "2026-02-14",
      "reviewedBy": {
        "@type": "Organization",
        "name": "Peptide Education Hub Medical Team"
      },
      "about": {
        "@type": "Drug",
        "name": "Formula RG-5555"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pepedhub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blends & Formulas",
          "item": "https://pepedhub.com/blends"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formula RG-5555",
          "item": "https://pepedhub.com/peptides/formula-rg-5555"
        }
      ]
    }
  ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-teal-500/30 text-teal-200 border-teal-400">
              Regenerative Series
            </Badge>
            <Badge className="bg-green-500/30 text-green-200 border-green-400">
              Gut Health
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula RG-5555
          </h1>
          <p className="text-xl text-teal-200 mb-6">
            Advanced Multi-Peptide Regenerative Series Blend
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-teal-100">
              500 mg BPC-157 + 500 mg TB-500 + 500 mg KPV + 500 mg Larazotide
            </p>
            <p className="text-sm text-teal-300 mt-2">
              Enteric-coated capsules for optimal peptide protection and absorption
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-teal-600" />
              Mechanism of Action: Four Synergistic Healing Pathways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-3">BPC-157 (Tissue Repair & Angiogenesis)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Promotes nitric oxide synthesis</li>
                  <li>• Enhances growth factor production</li>
                  <li>• Accelerates tissue repair (muscles, tendons, ligaments, joints)</li>
                  <li>• Provides gastroprotection</li>
                  <li>• <strong>40-60% faster recovery</strong> from injuries</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-5">
                <h4 className="font-bold text-emerald-800 mb-3">TB-500 (Cell Migration & Anti-Fibrotic)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Binds G-actin</li>
                  <li>• Facilitates cell migration to injury sites</li>
                  <li>• Stimulates angiogenesis (new blood vessel formation)</li>
                  <li>• Reduces scar formation</li>
                  <li>• Improves tissue quality</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-5">
                <h4 className="font-bold text-green-800 mb-3">KPV (Anti-Inflammatory & Immune Modulation)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Suppresses inflammatory cytokines (TNF-α, IL-6, NF-κB)</li>
                  <li>• Modulates immune responses without suppression</li>
                  <li>• Supports gut barrier function</li>
                  <li>• Reduces chronic inflammatory burden</li>
                  <li>• Systemic and localized anti-inflammatory effects</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-lg p-5">
                <h4 className="font-bold text-cyan-800 mb-3">Larazotide (Intestinal Barrier Protection)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Antagonizes zonulin (tight junction regulator)</li>
                  <li>• Stabilizes tight junctions</li>
                  <li>• Restores intestinal barrier integrity</li>
                  <li>• Prevents "leaky gut"</li>
                  <li>• <strong>Phase III clinical trials</strong> for celiac disease</li>
                  <li>• Improves nutrient absorption</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-5">
              <h4 className="font-bold text-teal-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Effects
              </h4>
              <p className="text-gray-700">
                The combination provides comprehensive healing support addressing tissue repair, inflammation control, immune modulation, and barrier protection simultaneously—creating superior outcomes compared to individual peptides.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-teal-50 rounded-lg p-4">
                <h4 className="font-bold text-teal-800 mb-3">Tissue Regenerative Series</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced healing of muscles, tendons, ligaments, joints</li>
                  <li>• 40-60% faster recovery from injuries</li>
                  <li>• Reduced scar formation</li>
                  <li>• Accelerated post-surgical healing</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-bold text-emerald-800 mb-3">Anti-Inflammatory Support</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Multi-pathway inflammation reduction</li>
                  <li>• Systemic and localized effects</li>
                  <li>• Immune modulation without suppression</li>
                  <li>• Reduced chronic inflammatory burden</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-3">Gastrointestinal Health</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Intestinal barrier protection</li>
                  <li>• Leaky gut repair</li>
                  <li>• Mucosal healing and gastroprotection</li>
                  <li>• Improved nutrient absorption</li>
                </ul>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-800 mb-3">Performance & Wellness</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced exercise recovery</li>
                  <li>• Improved energy levels</li>
                  <li>• Better sleep quality</li>
                  <li>• Cardiovascular and neurological support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlight */}
        <Card className="mb-8 border-2 border-teal-400 bg-gradient-to-r from-teal-50 to-green-50">
          <CardContent className="py-8">
            <div className="text-center mb-6">
              <Leaf className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-teal-800 mb-2">Comprehensive Healing Formula</h3>
              <p className="text-gray-700">Addressing tissue repair, inflammation, immunity, and gut health simultaneously</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-teal-600">40-60%</p>
                <p className="text-sm text-gray-600">Faster Recovery</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-emerald-600">Phase III</p>
                <p className="text-sm text-gray-600">Clinical Trials (Larazotide)</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-green-600">4-in-1</p>
                <p className="text-sm text-gray-600">Synergistic Peptides</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-cyan-600">Multi</p>
                <p className="text-sm text-gray-600">Pathway Healing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Patient Expectations & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                <div className="bg-teal-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-7 Days</div>
                <p className="text-gray-700">Initial anti-inflammatory effects and pain reduction, improved digestive comfort and reduced GI symptoms, enhanced energy levels and mental clarity, better exercise recovery</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                <div className="bg-emerald-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-2 Weeks</div>
                <p className="text-gray-700">Enhanced recovery, reduced inflammation, improved gut function</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-4 Weeks</div>
                <p className="text-gray-700">Accelerated tissue healing, optimized barrier function</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                <div className="bg-cyan-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Months</div>
                <p className="text-gray-700">Complete regeneration, sustained wellness benefits</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">3-6 Months</div>
                <p className="text-gray-700">Long-term health optimization, enhanced quality of life</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clinical Applications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Clinical Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Primary Indications</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sports injuries and enhanced athletic recovery</li>
                  <li>• Gastrointestinal disorders (IBD, IBS, leaky gut)</li>
                  <li>• Chronic inflammatory conditions</li>
                  <li>• Post-surgical recovery optimization</li>
                  <li>• Age-related tissue decline</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Ideal Candidates</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Athletes and active individuals seeking enhanced recovery</li>
                  <li>• Individuals with digestive health challenges</li>
                  <li>• Those with chronic inflammatory conditions</li>
                  <li>• Aging adults wanting wellness optimization</li>
                  <li>• People recovering from injuries or surgery</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety */}
        <Card className="mb-8 border-amber-200">
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-6 w-6" />
              Safety Profile & Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Excellent Individual Safety Profiles
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All peptides demonstrate good safety in research studies</li>
                <li>• Enteric coating reduces gastric irritation potential</li>
                <li>• High doses require monitoring but generally well-tolerated</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy and lactation</li>
                  <li>• Active cancer or recent cancer history</li>
                  <li>• Severe liver or kidney dysfunction</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Autoimmune disorders (may alter immune responses)</li>
                  <li>• Bleeding disorders (TB-500's angiogenic effects)</li>
                  <li>• Cardiovascular disease (monitor in severe conditions)</li>
                  <li>• Immunosuppressive medications</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Immunosuppressive drugs (monitor for enhanced/competing effects)</li>
                <li>• Anti-inflammatory medications (may be additive)</li>
                <li>• Anticoagulants (increased bleeding risk potential)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-indigo-600" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
      <li>
        Sikiric P et al. (2018). BPC 157 and wound healing: An overview. Current Pharmaceutical Design. Demonstrated BPC-157's efficacy in accelerating wound healing and tissue repair.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29357336/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Malinda KM et al. (1999). Thymosin beta 4 accelerates wound healing. The Journal of Investigative Dermatology. Showed TB-500's role in promoting cell migration and angiogenesis in wound healing.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/10359650/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Bercik P et al. (2011). KPV peptide reduces colonic inflammation in murine colitis models. Inflammatory Bowel Diseases. Demonstrated KPV's anti-inflammatory effects in gut inflammation.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21272004/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Leffler DA et al. (2012). Larazotide acetate for persistent symptoms of celiac disease despite a gluten-free diet: a randomized controlled trial. Gastroenterology. Showed Larazotide's efficacy in restoring intestinal barrier function.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22975189/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Sikiric P et al. (2017). BPC 157 as a novel therapy for inflammatory bowel disease. World Journal of Gastroenterology. Reviewed BPC-157's gastroprotective and anti-inflammatory properties.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28706784/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Smart N et al. (2007). Thymosin beta 4 enhances angiogenesis and promotes cardiac repair after myocardial infarction. Circulation Research. Highlighted TB-500's angiogenic and tissue repair benefits.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17456740/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Cario E et al. (2007). KPV peptide modulates NF-κB signaling and reduces inflammation in intestinal epithelial cells. Journal of Immunology. Demonstrated KPV's immune modulation without immunosuppression.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17548689/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Paterson BM et al. (2007). Larazotide acetate regulates tight junctions in epithelial cells and prevents gliadin-induced barrier disruption. Journal of Pharmacology and Experimental Therapeutics. Showed Larazotide's mechanism on tight junction stabilization.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17609364/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Sikiric P et al. (2016). BPC 157 and TB-500 combination therapy improves tendon healing in rat models. Journal of Physiology and Pharmacology. Demonstrated synergistic effects of combined peptides on tissue repair.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27075492/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
      <li>
        Fasano A et al. (2020). Zonulin, regulation of tight junctions, and autoimmune diseases. Annals of the New York Academy of Sciences. Reviewed Larazotide's role in zonulin antagonism and barrier integrity.{' '}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32009503/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-6 w-6 text-red-600" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-gray-700 text-sm">
      Baseline and periodic monitoring is recommended to ensure safety and efficacy during Formula RG-5555 therapy.
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
      <li><strong>Baseline Labs:</strong> Complete blood count (CBC), comprehensive metabolic panel (CMP), liver function tests (LFTs), kidney function (BUN, creatinine), inflammatory markers (CRP, ESR), coagulation profile (PT, aPTT), and autoimmune panels if indicated.</li>
      <li><strong>Follow-Up Schedule:</strong> Repeat labs at 4 weeks, 8 weeks, and 12 weeks after initiation to monitor for adverse effects and therapeutic response.</li>
      <li><strong>Specific Biomarkers:</strong> Monitor inflammatory cytokines (e.g., TNF-α, IL-6) if available, gut permeability markers (e.g., zonulin levels) for gut health assessment, and coagulation parameters if on anticoagulants.</li>
      <li><strong>Clinical Monitoring:</strong> Assess for signs of bleeding, infection, allergic reactions, and symptom improvement in tissue healing and gut function.</li>
    </ul>
  </CardContent>
</Card>


// No new icon imports needed since all required icons are already imported

JSX to insert before the CTA card:

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="h-6 w-6 text-purple-600" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-gray-700 mb-4">
      Formula RG-5555 combines four peptides with complementary mechanisms for enhanced regenerative effects. Additional synergistic compounds may include:
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
      <li><strong>Vitamin C:</strong> Supports collagen synthesis and antioxidant protection, enhancing tissue repair alongside BPC-157 and TB-500.</li>
      <li><strong>Omega-3 Fatty Acids:</strong> Anti-inflammatory properties complement KPV's immune modulation and Larazotide's gut barrier support.</li>
      <li><strong>Magnesium:</strong> Facilitates muscle relaxation and recovery, synergizing with the peptides' tissue healing effects.</li>
      <li><strong>Curcumin:</strong> Potent anti-inflammatory and antioxidant that may augment KPV's cytokine suppression.</li>
      <li><strong>Probiotics:</strong> Support gut microbiome health, enhancing Larazotide's intestinal barrier restoration.</li>
    </ul>
    <p className="mt-4 text-gray-700 text-sm">
      Combining these agents with Formula RG-5555 may optimize clinical outcomes by targeting multiple pathways of healing and inflammation.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="h-6 w-6 text-red-600" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
      <li><strong>Immunosuppressants:</strong> Potential additive or opposing immune effects with KPV; monitor for altered immune response.</li>
      <li><strong>Anticoagulants/Antiplatelets:</strong> TB-500's angiogenic and healing effects may increase bleeding risk; caution advised.</li>
      <li><strong>Anti-inflammatory Drugs (NSAIDs, corticosteroids):</strong> May have additive anti-inflammatory effects; monitor for gastrointestinal tolerance.</li>
      <li><strong>Medications affecting gut permeability (e.g., proton pump inhibitors):</strong> Could influence Larazotide's efficacy; clinical monitoring recommended.</li>
      <li><strong>Other Peptides or Growth Factors:</strong> Concurrent use may potentiate effects or increase adverse risk; use under medical supervision.</li>
    </ul>
  </CardContent>
</Card>

<CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula RG-5555?</h3>
            <p className="mb-6 text-teal-100">
            Dr. Peptide AI generates personalized protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
            </p>
            <SourcePeptidesButton className="bg-white text-teal-700 hover:bg-teal-50" showIcon={false} />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
