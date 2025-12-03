import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, Users, Brain, Shield, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function PeptideOxytocin() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => setLocation("/")} className="mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Oxytocin</h1>
              <p className="text-lg text-slate-600">The Social Bonding & Wellness Hormone</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">Sexual Wellness</Badge>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6"><Heart className="h-12 w-12 text-rose-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Social Bonding</h3><p className="text-slate-600">Enhances trust, empathy, and interpersonal connection</p></Card>
            <Card className="p-6"><Users className="h-12 w-12 text-purple-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Relationship Quality</h3><p className="text-slate-600">Improves intimacy and emotional connection</p></Card>
            <Card className="p-6"><Brain className="h-12 w-12 text-blue-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Stress Reduction</h3><p className="text-slate-600">Reduces anxiety and promotes calm feelings</p></Card>
            <Card className="p-6"><Shield className="h-12 w-12 text-teal-600 mb-4" /><h3 className="font-semibold text-lg mb-2">Sexual Function</h3><p className="text-slate-600">Supports arousal and orgasmic response</p></Card>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Oxytocin is a naturally occurring neuropeptide hormone produced in the hypothalamus and released by the posterior pituitary gland. Often called the "love hormone" or "bonding hormone," oxytocin plays crucial roles in social bonding, trust, empathy, sexual reproduction, and childbirth.</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">Beyond its well-known roles in labor and lactation, oxytocin has profound effects on social behavior, emotional regulation, and stress response. Research has demonstrated its involvement in pair bonding, parent-child attachment, social recognition, and the formation of trust between individuals.</p>
            <p className="text-lg text-slate-700 leading-relaxed">In therapeutic contexts, oxytocin is being explored for applications in social anxiety, autism spectrum disorders, relationship counseling, and sexual wellness. Its ability to modulate social cognition and emotional processing makes it a unique tool for enhancing interpersonal connections and emotional well-being.</p>
          </div>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dosing Protocol</h2>
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Intranasal Administration</h3><p className="text-slate-700 mb-2"><strong>Dose:</strong> 18-40 IU per administration</p><p className="text-slate-700 mb-2"><strong>Frequency:</strong> As needed or 1-2 times daily</p><p className="text-slate-700"><strong>Timing:</strong> 30-45 minutes before desired effects</p></div>
              <div><h3 className="text-xl font-semibold text-slate-900 mb-3">Subcutaneous Injection</h3><p className="text-slate-700 mb-2"><strong>Dose:</strong> 10-20 IU subcutaneously</p><p className="text-slate-700"><strong>Note:</strong> Effects may differ from intranasal route due to systemic vs. central delivery</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-amber-900"><strong>Important:</strong> Intranasal administration is preferred for central nervous system effects. Individual response varies significantly. Start with lower doses to assess tolerance.</p></div></div>
            </div>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety & Considerations</h2>
          <Card className="p-8 border-l-4 border-l-blue-600">
            <div className="space-y-4">
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Common Side Effects</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Nasal irritation (intranasal route)</li><li>Mild headache</li><li>Increased emotional sensitivity</li><li>Rare: uterine contractions in women</li></ul></div>
              <div><h3 className="text-lg font-semibold text-slate-900 mb-2">Contraindications</h3><ul className="list-disc list-inside text-slate-700 space-y-1"><li>Pregnancy (may induce labor)</li><li>Cardiovascular conditions (use with caution)</li><li>Hypersensitivity to oxytocin</li></ul></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4"><div className="flex items-start"><AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><p className="text-sm text-blue-900"><strong>Note:</strong> Oxytocin has FDA approval for medical uses (labor induction, postpartum bleeding). Therapeutic use for social/sexual wellness should be under medical supervision.</p></div></div>
            </div>
          </Card>
        </section>
        <section className="mb-12"><Card className="p-6 bg-slate-50 border-slate-200"><p className="text-sm text-slate-600 leading-relaxed"><strong>Educational Purpose Only:</strong> This information is provided for educational purposes. Consult qualified healthcare providers before considering oxytocin therapy.</p></Card></section>
      </main>
    </div>
  );
}
