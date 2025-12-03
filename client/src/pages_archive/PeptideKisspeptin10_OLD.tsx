import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, Activity, Zap, Shield, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideKisspeptin10() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Kisspeptin-10
              </h1>
              <p className="text-lg text-slate-600">
                Reproductive Hormone Regulator & Sexual Wellness Peptide
              </p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              Sexual Wellness
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Reproductive Health</h3>
              <p className="text-slate-600">
                Regulates GnRH secretion and reproductive hormone axis
              </p>
            </Card>
            <Card className="p-6">
              <Activity className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fertility Support</h3>
              <p className="text-slate-600">
                Enhances LH and FSH release for improved fertility
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sexual Function</h3>
              <p className="text-slate-600">
                Improves libido and sexual arousal in both sexes
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Metabolic Effects</h3>
              <p className="text-slate-600">
                Influences energy balance and metabolic regulation
              </p>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Kisspeptin-10 is a naturally occurring peptide hormone that plays a crucial role in regulating the reproductive system through its action on the hypothalamic-pituitary-gonadal (HPG) axis. As a truncated form of the kisspeptin peptide family, Kisspeptin-10 represents the minimal active sequence required for biological activity, making it highly potent and efficient for therapeutic applications.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              This peptide functions as a master regulator of reproductive hormones by stimulating gonadotropin-releasing hormone (GnRH) neurons in the hypothalamus. Through this mechanism, Kisspeptin-10 triggers a cascade of hormonal events that influence fertility, sexual function, and metabolic processes. Research has demonstrated its potential applications in treating hypogonadism, infertility, and sexual dysfunction.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Beyond reproductive health, emerging research suggests Kisspeptin-10 may have broader metabolic effects, including influences on energy homeostasis, insulin sensitivity, and body composition. Its role as a central regulator of the reproductive axis makes it a valuable tool for both clinical and research applications in endocrinology and sexual medicine.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Mechanism of Action */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Mechanism of Action
          </h2>
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  GPR54 Receptor Activation
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Kisspeptin-10 binds to the GPR54 (KISS1R) receptor on GnRH neurons in the hypothalamus, triggering intracellular signaling cascades that stimulate GnRH secretion. This activation is essential for initiating and maintaining reproductive function.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Gonadotropin Release
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  By stimulating GnRH release, Kisspeptin-10 indirectly promotes the secretion of luteinizing hormone (LH) and follicle-stimulating hormone (FSH) from the pituitary gland. These gonadotropins are critical for gonadal function, sex hormone production, and gametogenesis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Metabolic Integration
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  The kisspeptin system integrates metabolic signals with reproductive function, linking energy status to fertility. This mechanism explains why body composition and nutritional status affect reproductive capacity, with Kisspeptin-10 serving as a key mediator of this relationship.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Clinical Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Clinical Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                Reproductive Medicine
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hypogonadotropic hypogonadism treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fertility enhancement in both males and females</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ovulation induction support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Testosterone production optimization</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                Sexual Wellness
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Libido enhancement in both sexes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sexual arousal and desire improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Treatment of sexual dysfunction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Age-related sexual decline management</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Dosing Protocol */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Dosing Protocol
          </h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Standard Dosing
                </h3>
                <p className="text-slate-700 mb-2">
                  <strong>Typical Range:</strong> 0.01-1.0 mcg/kg subcutaneously
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Common Protocol:</strong> 0.1-0.3 mcg/kg per dose
                </p>
                <p className="text-slate-700">
                  <strong>Frequency:</strong> Single dose or as directed by healthcare provider
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Administration
                </h3>
                <p className="text-slate-700 mb-2">
                  <strong>Route:</strong> Subcutaneous or intravenous injection
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Timing:</strong> Can be administered at any time of day
                </p>
                <p className="text-slate-700">
                  <strong>Duration:</strong> Effects typically last 2-4 hours; protocols vary based on indication
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> Kisspeptin-10 dosing is highly individualized and should be determined by a qualified healthcare provider based on specific clinical indications, patient characteristics, and treatment goals. Research protocols vary significantly.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Research & Evidence */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Research & Clinical Evidence
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                Reproductive Function Studies
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Clinical trials have demonstrated that Kisspeptin-10 administration effectively stimulates LH and FSH release in healthy volunteers and patients with reproductive disorders. Studies in women have shown its potential for controlled ovulation induction, offering a more physiological alternative to traditional fertility treatments. In men, research indicates improvements in testosterone levels and sperm parameters.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                Sexual Function Research
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Neuroimaging studies have revealed that Kisspeptin-10 activates brain regions associated with sexual arousal and romantic attachment. Clinical research has shown improvements in sexual desire and arousal in both men and women, with effects observed on psychological measures of sexual function and relationship satisfaction.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                Metabolic Effects
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Emerging research suggests Kisspeptin-10 may influence glucose metabolism and insulin sensitivity. Studies have explored its role in linking nutritional status with reproductive function, with potential implications for metabolic disorders affecting fertility.
              </p>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Safety Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Safety & Considerations
          </h2>
          <Card className="p-8 border-l-4 border-l-blue-600">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  General Safety Profile
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Kisspeptin-10 has demonstrated a favorable safety profile in clinical studies, with most adverse events being mild and transient. The peptide is generally well-tolerated at therapeutic doses.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Potential Side Effects
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Mild injection site reactions</li>
                  <li>Transient headache</li>
                  <li>Nausea (uncommon)</li>
                  <li>Flushing or warmth sensation</li>
                  <li>Mood changes (rare)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Contraindications & Precautions
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Pregnancy and breastfeeding (insufficient data)</li>
                  <li>Hormone-sensitive cancers (use with caution)</li>
                  <li>Active reproductive system tumors</li>
                  <li>Uncontrolled thyroid disorders</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-900">
                    <strong>Medical Supervision Required:</strong> Kisspeptin-10 should only be used under the supervision of a qualified healthcare provider experienced in reproductive endocrinology. Appropriate monitoring of hormone levels and clinical response is essential.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Educational Disclaimer */}
        <section className="mb-12">
          <Card className="p-6 bg-slate-50 border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Educational Purpose Only:</strong> This information is provided for educational purposes and should not be considered medical advice. Kisspeptin-10 is a research peptide with emerging clinical applications. Always consult with a qualified healthcare provider before starting any peptide therapy. Individual results may vary, and proper medical supervision is essential for safe and effective use.
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}
