import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, ShieldCheck, Award, ArrowRight } from "lucide-react";
import PeptideSourcingModal from "./PeptideSourcingModal";

interface PeptideCTAProps {
  peptideName?: string;
  className?: string;
}

export default function PeptideCTA({ peptideName, className = "" }: PeptideCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className={`bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950 border-teal-200 dark:border-teal-800 ${className}`}>
        <CardContent className="p-8">
          <div className="text-center">
            <div className="inline-flex p-3 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
              <FlaskConical className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Ready to Source {peptideName || "Medical Grade Peptides"}?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Access pharmaceutical-quality peptides through verified 503A compounding pharmacies, 
              503B outsourcing facilities, or research-grade suppliers.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <ShieldCheck className="h-5 w-5 text-teal-600" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Award className="h-5 w-5 text-teal-600" />
                <span>COA Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <FlaskConical className="h-5 w-5 text-teal-600" />
                <span>Multiple Options</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <FlaskConical className="h-5 w-5 mr-2" />
              Source Medical Grade Peptides Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
              Available exclusively to verified healthcare professionals
            </p>
          </div>
        </CardContent>
      </Card>

      <PeptideSourcingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
