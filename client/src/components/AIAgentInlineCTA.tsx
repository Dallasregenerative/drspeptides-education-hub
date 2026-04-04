import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AIAgentInlineCTA() {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-teal-900 rounded-xl border border-teal-400/20 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-teal-400/30 flex-shrink-0">
            <img 
              src="/dr-peptide-logo.png" 
              alt="Dr. Peptide" 
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">
              Need a Personalized Protocol?
            </h3>
            <p className="text-sm text-slate-300">
              Let Dr. Peptide create a customized protocol based on your patient's specific needs
            </p>
          </div>
        </div>
        <a 
          href="https://peptideprotocols.ai" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white whitespace-nowrap font-semibold">
            Meet Dr. Peptide
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
