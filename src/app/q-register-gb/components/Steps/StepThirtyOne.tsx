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

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Nos últimos tempos você tem sentido:"
          subtitle="Selecione todas as opções que se aplicam"
          onBack={() => setCurrentStep(30)}
          hideButtons={true}
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
      </div>

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => {
            if (selectedOptions.length === 0) return;
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentStep(32);
            }, 600);
          }}
          disabled={selectedOptions.length === 0 || isTransitioning}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            selectedOptions.length === 0 || isTransitioning
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(30)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 