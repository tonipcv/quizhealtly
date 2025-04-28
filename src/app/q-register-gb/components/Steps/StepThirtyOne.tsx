"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const symptomOptions = [
  {
    id: "stress",
    text: "Estresse",
  },
  {
    id: "insomnia",
    text: "Insônia",
  },
  {
    id: "anxiety",
    text: "Ansiedade / Pânico",
  },
  {
    id: "depression",
    text: "Depressão",
  },
  {
    id: "none",
    text: "Nenhum dos acima",
  },
  {
    id: "prefer_not",
    text: "Prefiro não responder",
  }
];

export default function StepThirtyOne() {
  const { setCurrentStep } = useQuizContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (optionId: string) => {
    if (isTransitioning) return;

    setSelectedOptions(prev => {
      // If selecting "None" or "Prefer not", clear other selections
      if (optionId === "none" || optionId === "prefer_not") {
        return [optionId];
      }
      
      // If selecting other option while "None" or "Prefer not" is selected, clear those
      if (prev.includes("none") || prev.includes("prefer_not")) {
        return [optionId];
      }

      // Toggle selection for other options
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };

  const handleNext = () => {
    if (isTransitioning || selectedOptions.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(32);
    }, 600);
  };

  return (
    <StepLayout
      title="Nos últimos tempos você tem sentido:"
      subtitle="Selecione todas as opções que se aplicam"
      onBack={() => setCurrentStep(30)}
      onNext={handleNext}
    >
      <div className="space-y-3">
        {symptomOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={isTransitioning}
            className={`w-full p-3 md:p-4 rounded-xl border transition-all duration-200 text-left
              ${selectedOptions.includes(option.id)
                ? "border-black bg-black text-white shadow-lg transform scale-[1.02]" 
                : "border-gray-300 hover:border-black hover:bg-gray-50 text-gray-900 hover:shadow-md"
              }
              ${isTransitioning && !selectedOptions.includes(option.id) ? "opacity-50" : ""}
            `}
          >
            <span className="text-base md:text-lg font-medium">{option.text}</span>
          </button>
        ))}
      </div>
    </StepLayout>
  );
} 