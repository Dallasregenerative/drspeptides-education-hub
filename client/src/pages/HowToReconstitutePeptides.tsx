import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Beaker, AlertTriangle, CheckCircle2, Calculator } from "lucide-react";
import { MedicalWebPageSchema } from "@/components/StructuredData";

export default function HowToReconstitutePeptides() {
  return (
    <>
      <Helmet>
        <title>How to Reconstitute Peptides: Step-by-Step Guide | DrsPeptides</title>
        <meta name="description" content="Complete guide to peptide reconstitution: step-by-step instructions, bacteriostatic water ratios, dosage calculations, storage, and safety protocols." />
        <meta name="keywords" content="how to reconstitute peptides, peptide reconstitution, bacteriostatic water, peptide mixing, lyophilized peptides" />
        <link rel="canonical" href="https://education.drspeptides.com/how-to-reconstitute-peptides" />
      </Helmet>

      <MedicalWebPageSchema
        name="How to Reconstitute Peptides: Complete Guide"
        description="Step-by-step guide to reconstituting lyophilized peptides with bacteriostatic water, including calculations, storage, and safety protocols."
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <Navigation />

        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Beaker className="h-16 w-16 text-teal-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                How to Reconstitute Peptides
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Complete step-by-step guide to safely reconstituting lyophilized peptides with bacteriostatic water.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-4xl space-y-8">
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">What is Peptide Reconstitution?</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  <strong>Reconstitution</strong> is the process of mixing lyophilized (freeze-dried) peptide powder with bacteriostatic water to create an injectable solution. Most therapeutic peptides are shipped as stable powder and must be reconstituted before use.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Why Lyophilized?</strong> Peptides are more stable as powder, extending shelf life and allowing for room temperature shipping. Once reconstituted, they must be refrigerated and used within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Supplies Needed</h2>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Lyophilized peptide vial</strong> (powder form)
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Bacteriostatic water</strong> (sterile water with 0.9% benzyl alcohol)
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Syringes</strong> (3ml or 5ml for reconstitution, insulin syringes for dosing)
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Alcohol swabs</strong> for sterilization
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Sharps container</strong> for safe disposal
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Important:</strong> Use bacteriostatic water, NOT sterile water. Bacteriostatic water contains benzyl alcohol which prevents bacterial growth, allowing for multiple-dose use over 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Step-by-Step Reconstitution Process</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Step 1: Preparation</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• <strong>Wash hands</strong> thoroughly with soap and water</li>
                      <li>• Gather all supplies on clean, flat surface</li>
                      <li>• Allow peptide vial to reach room temperature (10-15 minutes)</li>
                      <li>• Check peptide vial label for amount (e.g., 5mg, 10mg)</li>
                      <li>• Determine how much water to add (see calculation section below)</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Step 2: Sterilize</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Clean rubber stopper of peptide vial with alcohol swab</li>
                      <li>• Clean rubber stopper of bacteriostatic water vial with alcohol swab</li>
                      <li>• Allow both to air dry (15-30 seconds)</li>
                      <li>• Do not touch or blow on cleaned stoppers</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Step 3: Draw Bacteriostatic Water</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Remove syringe from packaging (do not touch needle)</li>
                      <li>• Pull back plunger to desired water volume</li>
                      <li>• Insert needle into bacteriostatic water vial</li>
                      <li>• Push air into vial (equalizes pressure)</li>
                      <li>• Invert vial and draw water to desired volume</li>
                      <li>• Remove needle from vial, check for air bubbles</li>
                      <li>• Tap syringe gently to remove bubbles if present</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Step 4: Add Water to Peptide</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• Insert needle into peptide vial at an angle</li>
                      <li>• <strong>SLOWLY</strong> inject water down the side of the vial</li>
                      <li>• <strong>DO NOT</strong> spray directly onto powder (can damage peptide)</li>
                      <li>• Allow water to gently slide down vial wall</li>
                      <li>• Remove needle and dispose in sharps container</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Step 5: Mix Gently</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• <strong>DO NOT SHAKE</strong> the vial (damages peptide structure)</li>
                      <li>• Gently swirl or roll vial between palms</li>
                      <li>• Allow to sit for 1-2 minutes</li>
                      <li>• Continue gentle swirling until powder fully dissolves</li>
                      <li>• Solution should be clear, not cloudy</li>
                      <li>• If cloudy, allow to sit longer or gently swirl more</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Step 6: Storage</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li>• <strong>Immediately refrigerate</strong> (2-8°C / 36-46°F)</li>
                      <li>• Label vial with reconstitution date</li>
                      <li>• Label with concentration (e.g., "5mg/2ml")</li>
                      <li>• Use within 30 days of reconstitution</li>
                      <li>• Keep away from light (store in box if possible)</li>
                      <li>• Never freeze reconstituted peptides</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Calculator className="h-8 w-8 text-teal-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Reconstitution Calculations</h2>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      The amount of bacteriostatic water you add determines the concentration of your final solution. Choose a volume that makes dosing easy.
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold mb-3">Common Reconstitution Ratios:</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                          <strong>5mg peptide + 2ml water = 2.5mg/ml</strong>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Each 0.1ml (10 units on insulin syringe) = 0.25mg (250mcg)
                          </p>
                        </div>
                        
                        <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                          <strong>10mg peptide + 2ml water = 5mg/ml</strong>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Each 0.1ml (10 units) = 0.5mg (500mcg)
                          </p>
                        </div>
                        
                        <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                          <strong>10mg peptide + 1ml water = 10mg/ml</strong>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Each 0.1ml (10 units) = 1mg (1000mcg)
                          </p>
                        </div>
                        
                        <div>
                          <strong>2mg peptide + 2ml water = 1mg/ml</strong>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Each 0.1ml (10 units) = 0.1mg (100mcg)
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Pro Tip:</strong> Choose a water volume that makes your desired dose easy to measure. For example:
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        If your dose is 250mcg and you have 5mg peptide, add 2ml water. This gives 2.5mg/ml, so 250mcg = 0.1ml (10 units on insulin syringe).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Critical Safety Rules</h2>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">DO NOT:</h3>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                          <li>✗ Shake the vial (damages peptide structure)</li>
                          <li>✗ Spray water directly onto powder</li>
                          <li>✗ Use sterile water instead of bacteriostatic water</li>
                          <li>✗ Freeze reconstituted peptides</li>
                          <li>✗ Use if solution is cloudy or has particles</li>
                          <li>✗ Use after 30 days of reconstitution</li>
                          <li>✗ Leave at room temperature for extended periods</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">DO:</h3>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                          <li>✓ Use bacteriostatic water only</li>
                          <li>✓ Add water slowly down the side of vial</li>
                          <li>✓ Swirl gently, never shake</li>
                          <li>✓ Refrigerate immediately after reconstitution</li>
                          <li>✓ Label with date and concentration</li>
                          <li>✓ Use within 30 days</li>
                          <li>✓ Check for clarity before each use</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Solution is cloudy after mixing</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Cause:</strong> Peptide not fully dissolved or contamination<br />
                      <strong>Solution:</strong> Allow to sit longer (10-15 min), gently swirl. If still cloudy after 30 minutes, do not use. Contact supplier.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Powder won't dissolve</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Cause:</strong> Water too cold, insufficient mixing<br />
                      <strong>Solution:</strong> Ensure both vials are at room temperature. Continue gentle swirling for 5-10 minutes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Foam or bubbles after mixing</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Cause:</strong> Added water too quickly or shook vial<br />
                      <strong>Solution:</strong> Allow to sit undisturbed for 10-15 minutes. Foam will dissipate. Avoid shaking in future.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Particles floating in solution</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Cause:</strong> Contamination or degraded peptide<br />
                      <strong>Solution:</strong> Do not use. Discard vial and contact supplier for replacement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Storage Guidelines</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-teal-600">Lyophilized (Powder)</h3>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• <strong>Refrigerated:</strong> 2-3 years</li>
                      <li>• <strong>Frozen (-20°C):</strong> 3-5 years</li>
                      <li>• <strong>Room temp:</strong> 30-90 days (varies by peptide)</li>
                      <li>• Keep away from light</li>
                      <li>• Store in original packaging</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-purple-600">Reconstituted (Liquid)</h3>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• <strong>Refrigerated:</strong> 30 days maximum</li>
                      <li>• <strong>Never freeze</strong></li>
                      <li>• <strong>Room temp:</strong> Avoid (degrades quickly)</li>
                      <li>• Keep away from light</li>
                      <li>• Label with reconstitution date</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Dosage Calculator</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                    Use our calculator to determine exact reconstitution ratios and dosing amounts.
                  </p>
                  <Link href="/tools/dosage-calculator">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Calculate Doses
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Injection Guide</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                    Learn proper injection techniques after reconstituting your peptides.
                  </p>
                  <Link href="/how-to-inject-peptides">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      View Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        <footer className="bg-slate-900 text-white py-12 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400">© 2024 Peptide Education Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
