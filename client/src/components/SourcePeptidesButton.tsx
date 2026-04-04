import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SourcePeptidesButtonProps {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function SourcePeptidesButton({ 
  variant = "default", 
  size = "default",
  className = "",
  showIcon = true
}: SourcePeptidesButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => window.open("https://peptideprotocols.ai", "_blank", "noopener,noreferrer")}
      className={`bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold ${className}`}
    >
      {showIcon && <img src="/dr-peptide-logo.png" alt="Dr. Peptide" className="h-6 w-6 mr-2 rounded-full object-cover object-top" />}
      Meet Dr. Peptide
      <ArrowRight className="h-4 w-4 ml-2" />
    </Button>
  );
}
