import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Sun, Shield, Heart, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideMelanotan1() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Melanotan 1 (MT-1)</h1>
              <p className="text-lg text-slate-600">Selective MC1R Agonist for Photoprotection & Tanning</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Sexual Wellness</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Sun className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Natural Tanning</h3>
              <p className="text-slate-600">Stimulates melanin production without UV exposure</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Photoprotection</h3>
              <p className="text-slate-600">Provides natural sun protection through increased melanin</p>
            </Card>
            <Card className="p-6">
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Safer Profile</h3>
              <p className="text-slate-600">More selective than MT-2 with fewer systemic effects</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Skin Health</h3>
              <p className="text-slate-600">May reduce UV-induced DNA damage</p>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Melanotan 1 (Afamelanotide) is a synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) that selectively activates MC1R receptors on melanocytes. Unlike its counterpart MT-2, Melanotan 1 has a more targeted mechanism focused primarily on skin pigmentation with minimal effects on other melanocortin receptors.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Originally developed for photoprotection in individuals with photosensitivity disorders, MT-1 has demonstrated efficacy in increasing eumelanin production and providing natural sun protection. The peptide has received regulatory approval in some regions for treating erythropoietic protoporphyria (EPP), a rare genetic disorder causing severe photosensitivity.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              MT-1's selective action on MC1R receptors results in a more favorable side effect profile compared to non-selective melanocortin agonists, making it an attractive option for individuals seeking photoprotection and cosmetic tanning with reduced systemic effects.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mechanism of Action</h2>
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Selective MC1R Activation</h3>
                <p className="text-slate-700 leading-relaxed">
                  MT-1 binds specifically to MC1R receptors on melanocytes in the skin, triggering increased production and distribution of eumelanin (brown-black pigment). This selective activation minimizes effects on other melanocortin receptors responsible for appetite, sexual function, and other systemic effects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Photoprotective Mechanism</h3>
                <p className="text-slate-700 leading-relaxed">
                  The increased melanin acts as a natural sunscreen, absorbing UV radiation and reducing DNA damage in skin cells. This photoprotection occurs without the need for UV exposure, providing a "base tan" that offers protection before sun exposure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">DNA Repair Enhancement</h3>
                <p className="text-slate-700 leading-relaxed">
                  Research suggests MT-1 may enhance DNA repair mechanisms in skin cells, potentially reducing the risk of UV-induced mutations and skin cancer development beyond its direct photoprotective effects.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Standard Protocol</h3>
                <p className="text-slate-700 mb-2"><strong>Dose:</strong> 0.5-1.0 mg subcutaneously</p>
                <p className="text-slate-700 mb-2"><strong>Frequency:</strong> Daily or every other day</p>
                <p className="text-slate-700"><strong>Duration:</strong> Loading phase 1-2 weeks, then maintenance as needed</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Administration</h3>
                <p className="text-slate-700 mb-2"><strong>Route:</strong> Subcutaneous injection</p>
                <p className="text-slate-700 mb-2"><strong>Timing:</strong> Can be administered at any time of day</p>
                <p className="text-slate-700"><strong>Note:</strong> Effects develop gradually over days to weeks</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> MT-1 typically requires higher doses than MT-2 to achieve similar tanning effects. Side effects are generally milder and less frequent than with MT-2.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-blue-600">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Common Side Effects</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Mild nausea (less common than MT-2)</li>
                  <li>Injection site reactions</li>
                  <li>Darkening of existing moles and freckles</li>
                  <li>Mild headache (uncommon)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Advantages Over MT-2</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>No sexual side effects (selective MC1R activity)</li>
                  <li>No appetite suppression</li>
                  <li>Fewer systemic effects</li>
                  <li>Better tolerability profile</li>
                  <li>FDA-approved formulation available (Scenesse) for EPP</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> While MT-1 has a more favorable safety profile than MT-2, it should still be used under medical supervision with regular skin monitoring, especially for changes in existing moles.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="p-6 bg-slate-50 border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Educational Purpose Only:</strong> This information is provided for educational purposes. Consult qualified healthcare providers before considering peptide therapy. MT-1 (as Scenesse) is FDA-approved only for erythropoietic protoporphyria.
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}
