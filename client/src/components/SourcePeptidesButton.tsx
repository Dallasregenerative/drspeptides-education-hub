import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import PeptideSourcingModal from "./PeptideSourcingModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsModalOpen(true)}
        className={`bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold ${className}`}
      >
        {showIcon && <FlaskConical className="h-5 w-5 mr-2" />}
        Source Medical Grade Peptides Now
      </Button>
      
      <PeptideSourcingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
