import { Badge } from "@/components/ui/badge";
import PrintButton from "@/components/PrintButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Droplet, Thermometer, Syringe, Clock, Shield, ExternalLink, ArrowLeft} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function AdministrationGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Peptide Administration & Preparation Guide
          </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Administration Guide - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-blue-50 max-w-3xl">
            Comprehensive protocols for reconstitution, storage, administration techniques, and bioavailability optimization
          </p>
        </div>
      </div>

      {/* Critical Disclaimer */}
      <div className="container py-8">
        <Alert className="border-orange-500 bg-orange-50">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <AlertTitle className="text-orange-900 font-bold text-lg">For Healthcare Professionals Only</AlertTitle>
          <AlertDescription className="text-orange-800 mt-2">
            This guide is intended for qualified healthcare professionals trained in sterile technique and peptide administration. Improper preparation or administration can result in infection, tissue damage, reduced efficacy, or serious adverse events. Always follow proper medical protocols and regulatory guidelines.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <div className="container py-12 space-y-12">
        
        {/* Reconstitution Protocols */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Reconstitution Protocols</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Proper reconstitution is critical for peptide stability, sterility, and accurate dosing. Most research peptides are supplied as lyophilized (freeze-dried) powder and must be reconstituted with bacteriostatic water before use.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lyophilized peptide vial</li>
                  <li>• Bacteriostatic water (0.9% benzyl alcohol)</li>
                  <li>• Alcohol swabs</li>
                  <li>• Sterile syringes (1mL, 3mL)</li>
                  <li>• Sterile needles (18G for drawing, 27-31G for injection)</li>
                  <li>• Clean work surface</li>
                  <li>• Gloves (optional but recommended)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sterile Technique Essentials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wash hands thoroughly before starting</li>
                  <li>• Clean work surface with alcohol</li>
                  <li>• Swab all vial tops with alcohol before puncturing</li>
                  <li>• Never touch needle tips</li>
                  <li>• Use each needle only once</li>
                  <li>• Work quickly to minimize contamination risk</li>
                  <li>• Discard any contaminated materials immediately</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Step-by-Step Reconstitution</CardTitle>
              <CardDescription>Follow these steps carefully to ensure proper reconstitution</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Calculate Required Volume</h4>
                    <p className="text-gray-700">Determine how much bacteriostatic water to add based on desired concentration. Common ratios: 1mg peptide + 1mL water = 1mg/mL concentration.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Prepare Vials</h4>
                    <p className="text-gray-700">Remove caps from peptide and bacteriostatic water vials. Swab both rubber stoppers thoroughly with alcohol swabs. Allow to air dry (10-15 seconds).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Draw Bacteriostatic Water</h4>
                    <p className="text-gray-700">Using a sterile syringe with 18G or 20G needle, draw the calculated volume of bacteriostatic water. Remove air bubbles by tapping syringe and gently pushing plunger.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Add Water to Peptide Vial</h4>
                    <p className="text-gray-700"><strong>CRITICAL:</strong> Inject water slowly down the side of the vial, NOT directly onto the peptide powder. Direct injection can denature the peptide. Aim for the glass wall and let water gently slide down.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Gentle Mixing</h4>
                    <p className="text-gray-700">DO NOT shake the vial. Gently swirl or roll the vial between your palms until powder is fully dissolved. This may take 1-3 minutes. Solution should be clear (some peptides may have slight color).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Inspect Solution</h4>
                    <p className="text-gray-700">Check for complete dissolution, clarity, and absence of particulates. Discard if solution is cloudy, contains particles, or has unusual color (unless expected for that specific peptide).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">7</div>
                  <div>
                    <h4 className="font-semibold mb-2">Label and Store</h4>
                    <p className="text-gray-700">Label vial with peptide name, concentration, reconstitution date, and expiration date (typically 30 days). Store immediately in refrigerator (2-8°C).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="border-red-400 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-900">Common Reconstitution Mistakes to Avoid</AlertTitle>
            <AlertDescription className="text-red-800 mt-2">
              <ul className="space-y-1">
                <li>• Injecting water directly onto powder (causes foaming/denaturation)</li>
                <li>• Shaking the vial vigorously (damages peptide structure)</li>
                <li>• Using sterile water instead of bacteriostatic water (shorter shelf life)</li>
                <li>• Failing to swab vial tops with alcohol (contamination risk)</li>
                <li>• Reconstituting at room temperature (should be done quickly and refrigerated)</li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        {/* Storage Guidelines */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Thermometer className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Storage & Stability</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Proper storage is essential for maintaining peptide potency and preventing degradation. Temperature, light exposure, and storage duration all affect peptide stability.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle>Lyophilized (Powder) Storage</CardTitle>
                <CardDescription>Before reconstitution</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-900">Temperature:</p>
                    <p className="text-gray-700">-20°C to -80°C (freezer) for long-term storage</p>
                    <p className="text-gray-700">2-8°C (refrigerator) acceptable for short-term (&lt;3 months)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Shelf Life:</p>
                    <p className="text-gray-700">Typically 2-3 years when stored properly at -20°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Protection:</p>
                    <p className="text-gray-700">Keep away from light, moisture, and temperature fluctuations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle>Reconstituted Solution Storage</CardTitle>
                <CardDescription>After mixing with bacteriostatic water</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-green-900">Temperature:</p>
                    <p className="text-gray-700">2-8°C (refrigerator) - REQUIRED</p>
                    <p className="text-gray-700">Never freeze reconstituted peptides</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Shelf Life:</p>
                    <p className="text-gray-700">Typically 30 days when using bacteriostatic water</p>
                    <p className="text-gray-700">Only 24-72 hours if using sterile water</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Protection:</p>
                    <p className="text-gray-700">Store in original vial, protect from light, minimize freeze-thaw cycles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Peptide-Specific Storage Considerations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">GLP-1 Agonists (Semaglutide, Tirzepatide)</h4>
                  <p className="text-gray-700">Highly sensitive to temperature. Must remain refrigerated (2-8°C) at all times. Can be kept at room temperature for up to 21 days if needed for travel.</p>
                </div>
                <div>
                  <h4 className="font-semibold">BPC-157, TB-500</h4>
                  <p className="text-gray-700">Relatively stable. Reconstituted solutions stable for 30 days at 2-8°C. Powder stable for 2+ years at -20°C.</p>
                </div>
                <div>
                  <h4 className="font-semibold">CJC-1295, Ipamorelin</h4>
                  <p className="text-gray-700">Sensitive to light and heat. Store in amber vials or wrap in foil. Reconstituted solutions stable for 30 days at 2-8°C.</p>
                </div>
                <div>
                  <h4 className="font-semibold">GHK-Cu</h4>
                  <p className="text-gray-700">Copper peptides are sensitive to oxidation. Store in airtight containers, minimize air exposure. Reconstituted solutions stable for 14-30 days at 2-8°C.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Administration Routes */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Syringe className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Administration Routes & Bioavailability</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Different administration routes offer varying bioavailability, onset times, and practical considerations. Understanding these differences is critical for protocol optimization.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center justify-between">
                  Subcutaneous (SubQ) Injection
                  <Badge className="bg-green-600">Most Common</Badge>
                </CardTitle>
                <CardDescription>Injection into fatty tissue layer under the skin</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-green-900">Bioavailability:</p>
                    <p className="text-gray-700">70-90% (varies by peptide)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Onset:</p>
                    <p className="text-gray-700">15-30 minutes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Common Sites:</p>
                    <p className="text-gray-700">Abdomen (most common), thighs, upper arms, buttocks</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Needle Size:</p>
                    <p className="text-gray-700">27-31 gauge, 5-8mm length</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Best For:</p>
                    <p className="text-gray-700">Most peptides including GLP-1s, BPC-157, TB-500, growth hormone secretagogues</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Advantages:</p>
                    <ul className="text-gray-700 ml-4 mt-1">
                      <li>• Easy to self-administer</li>
                      <li>• Minimal discomfort</li>
                      <li>• Consistent absorption</li>
                      <li>• Multiple injection sites available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle>Intramuscular (IM) Injection</CardTitle>
                <CardDescription>Injection directly into muscle tissue</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-900">Bioavailability:</p>
                    <p className="text-gray-700">80-95% (slightly higher than SubQ)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Onset:</p>
                    <p className="text-gray-700">10-20 minutes (faster than SubQ)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Common Sites:</p>
                    <p className="text-gray-700">Deltoid (shoulder), vastus lateralis (thigh), gluteus (buttock)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Needle Size:</p>
                    <p className="text-gray-700">22-25 gauge, 1-1.5 inch length</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Best For:</p>
                    <p className="text-gray-700">BPC-157 (for localized injury), TB-500, some growth hormone protocols</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Advantages:</p>
                    <ul className="text-gray-700 ml-4 mt-1">
                      <li>• Faster absorption</li>
                      <li>• Higher bioavailability</li>
                      <li>• Localized effects (for injury healing)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle>Oral Administration</CardTitle>
                <CardDescription>Taken by mouth (capsules, tablets, sublingual)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-purple-900">Bioavailability:</p>
                    <p className="text-gray-700">5-30% (significantly lower due to GI degradation)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-900">Onset:</p>
                    <p className="text-gray-700">30-90 minutes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-900">Best For:</p>
                    <p className="text-gray-700">BPC-157 (GI healing), some collagen peptides, oral semaglutide (Rybelsus)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-900">Advantages:</p>
                    <ul className="text-gray-700 ml-4 mt-1">
                      <li>• No needles required</li>
                      <li>• Convenient for daily use</li>
                      <li>• Direct GI tract exposure (for BPC-157)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-900">Disadvantages:</p>
                    <ul className="text-gray-700 ml-4 mt-1">
                      <li>• Much lower bioavailability</li>
                      <li>• Variable absorption</li>
                      <li>• Not suitable for most peptides</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardHeader className="bg-teal-50">
                <CardTitle>Topical/Transdermal</CardTitle>
                <CardDescription>Applied to skin surface</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-teal-900">Bioavailability:</p>
                    <p className="text-gray-700">1-10% (very low for most peptides)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900">Onset:</p>
                    <p className="text-gray-700">1-4 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900">Best For:</p>
                    <p className="text-gray-700">GHK-Cu (cosmetic), some cosmeceutical peptides</p>
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900">Advantages:</p>
                    <ul className="text-gray-700 ml-4 mt-1">
                      <li>• Non-invasive</li>
                      <li>• Localized skin effects</li>
                      <li>• Easy to apply</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-teal-900">Limitations:</p>
                    <ul className="text-gray-700 ml-4 mt-1">
                      <li>• Very low systemic absorption</li>
                      <li>• Only suitable for skin-targeted peptides</li>
                      <li>• Requires penetration enhancers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-blue-400 bg-blue-50">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900">Route Selection Guidance</AlertTitle>
            <AlertDescription className="text-blue-800 mt-2">
              <strong>Subcutaneous injection is the gold standard</strong> for most peptide protocols due to optimal balance of bioavailability, convenience, and safety. Intramuscular injection may be preferred for localized injury healing (BPC-157, TB-500) or when faster onset is desired. Oral and topical routes are limited to specific peptides with appropriate formulations.
            </AlertDescription>
          </Alert>
        </section>

        {/* Injection Technique */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Proper Injection Technique</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Subcutaneous Injection Step-by-Step</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Prepare Materials</h4>
                    <p className="text-gray-700">Gather reconstituted peptide vial, alcohol swabs, syringe (insulin syringe 0.3-1mL), and sharps container.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Wash Hands</h4>
                    <p className="text-gray-700">Wash hands thoroughly with soap and water for at least 20 seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Draw Dose</h4>
                    <p className="text-gray-700">Swab vial top with alcohol. Draw prescribed dose into syringe. Remove air bubbles by tapping syringe and pushing plunger gently.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Select & Prepare Site</h4>
                    <p className="text-gray-700">Choose injection site (abdomen is most common). Clean area with alcohol swab in circular motion. Let dry for 10-15 seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold mb-1">Pinch Skin</h4>
                    <p className="text-gray-700">Pinch a fold of skin between thumb and forefinger to create a raised area. This ensures injection into subcutaneous tissue, not muscle.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">6</div>
                  <div>
                    <h4 className="font-semibold mb-1">Insert Needle</h4>
                    <p className="text-gray-700">Insert needle at 45-90 degree angle (90° for most people, 45° if very lean) with a quick, smooth motion. Insert fully.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">7</div>
                  <div>
                    <h4 className="font-semibold mb-1">Inject Solution</h4>
                    <p className="text-gray-700">Release pinched skin. Push plunger slowly and steadily (over 5-10 seconds). Rapid injection can cause discomfort.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">8</div>
                  <div>
                    <h4 className="font-semibold mb-1">Withdraw & Dispose</h4>
                    <p className="text-gray-700">Withdraw needle at same angle it was inserted. Apply gentle pressure with clean alcohol swab if needed. Immediately dispose of syringe in sharps container.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Rotation Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Rotating injection sites prevents lipohypertrophy (fatty lumps), scarring, and maintains consistent absorption. Keep a log of injection sites and dates.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Abdomen:</strong> Divide into 4 quadrants, rotate clockwise</p>
                  <p><strong>Thighs:</strong> Alternate left/right, front/outer areas</p>
                  <p><strong>Arms:</strong> Back of upper arms (may need assistance)</p>
                  <p><strong>Minimum spacing:</strong> 1 inch from previous injection site</p>
                  <p><strong>Avoid:</strong> 2 inches around navel, areas with scars, moles, or bruises</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting Common Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Bruising</p>
                    <p className="text-sm text-gray-600">Normal occasionally. Apply ice before injection, avoid blood thinners if possible.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Stinging/Burning</p>
                    <p className="text-sm text-gray-600">Inject more slowly, ensure solution is at room temperature, check pH compatibility.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Leakage</p>
                    <p className="text-sm text-gray-600">Leave needle in place 5-10 seconds after injection, apply gentle pressure after withdrawal.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Lumps</p>
                    <p className="text-sm text-gray-600">Rotate sites more frequently, massage area gently after injection, ensure proper depth.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timing & Frequency */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Timing & Frequency Optimization</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Optimal timing and frequency vary by peptide based on half-life, mechanism of action, and desired outcomes. Understanding these principles maximizes efficacy and minimizes side effects.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>GLP-1 Agonists</CardTitle>
                <CardDescription>Semaglutide, Tirzepatide, Liraglutide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Frequency:</strong> Once weekly (semaglutide, tirzepatide) or daily (liraglutide)</p>
                  <p><strong>Best Time:</strong> Same day/time each week for consistency</p>
                  <p><strong>With/Without Food:</strong> Can be taken any time, regardless of meals</p>
                  <p><strong>Rationale:</strong> Long half-life (5-7 days) maintains steady levels</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BPC-157</CardTitle>
                <CardDescription>Tissue repair and healing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Frequency:</strong> 1-2 times daily</p>
                  <p><strong>Best Time:</strong> Morning and evening, or post-workout</p>
                  <p><strong>With/Without Food:</strong> Empty stomach preferred (30 min before meals)</p>
                  <p><strong>Rationale:</strong> Short half-life requires multiple daily doses</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TB-500</CardTitle>
                <CardDescription>Systemic recovery and healing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Frequency:</strong> 2-3 times per week</p>
                  <p><strong>Best Time:</strong> Evening or post-workout</p>
                  <p><strong>With/Without Food:</strong> No specific requirements</p>
                  <p><strong>Rationale:</strong> Longer half-life allows less frequent dosing</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Hormone Secretagogues</CardTitle>
                <CardDescription>CJC-1295, Ipamorelin, GHRP-6</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Frequency:</strong> 1-2 times daily</p>
                  <p><strong>Best Time:</strong> Before bed and/or morning fasted</p>
                  <p><strong>With/Without Food:</strong> Empty stomach required (2-3 hours after eating)</p>
                  <p><strong>Rationale:</strong> Maximizes GH pulse, avoids insulin interference</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Monitoring */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Safety Monitoring & Red Flags</h2>
          
          <Alert className="border-red-400 bg-red-50 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-900 font-bold">Seek Immediate Medical Attention If:</AlertTitle>
            <AlertDescription className="text-red-800 mt-3">
              <ul className="space-y-2">
                <li>• Signs of severe allergic reaction (difficulty breathing, severe swelling, hives)</li>
                <li>• Signs of infection (fever, chills, spreading redness, pus, red streaks from injection site)</li>
                <li>• Severe or persistent pain at injection site</li>
                <li>• Unusual bleeding or bruising</li>
                <li>• Severe nausea, vomiting, or abdominal pain (especially with GLP-1 agonists)</li>
                <li>• Vision changes or severe headache</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Routine Monitoring Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Injection Site Inspection</h4>
                  <p className="text-gray-700">Check daily for redness, swelling, warmth, or unusual lumps. Mild redness for 24 hours is normal; persistent symptoms require evaluation.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Symptom Tracking</h4>
                  <p className="text-gray-700">Keep a log of any side effects, timing, severity. This helps identify patterns and optimize protocols.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Laboratory Monitoring</h4>
                  <p className="text-gray-700">Baseline and periodic labs as appropriate for specific peptides (e.g., HbA1c for GLP-1s, IGF-1 for GH secretagogues).</p>
                </div>
                <div>
                  <h4 className="font-semibold">Professional Follow-Up</h4>
                  <p className="text-gray-700">Regular check-ins with prescribing provider to assess efficacy, adjust dosing, and monitor for adverse effects.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/safety-compliance" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Safety & Regulatory Compliance</h3>
              <p className="text-gray-600">FDA approval status, WADA prohibitions, and comprehensive safety guidelines</p>
            </a>
            
            <a href="/research-studies" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Research Studies Database</h3>
              <p className="text-gray-600">Clinical studies supporting peptide administration protocols</p>
            </a>
            
            <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                PeptideProtocols.ai
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">AI-powered protocol generation with personalized administration guidance</p>
            </a>
            
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                DrsPeptides.com
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">Professional-grade peptides with third-party testing and certificates of analysis</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional-Grade Peptides?
          </h2>
          <p className="text-xl text-blue-50 mb-6 max-w-2xl mx-auto">
            DrsPeptides.com provides healthcare professionals with pharmaceutical-grade peptides, third-party testing, and comprehensive support.
          </p>
          <a 
            href="https://drspeptides.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Visit DrsPeptides.com
          </a>
        </div>
      </div>
    </div>
  );
}
