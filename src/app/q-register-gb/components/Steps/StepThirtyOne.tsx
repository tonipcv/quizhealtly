"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

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
    <div className="pb-24 max-w-2xl mx-auto px-4">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Nos últimos tempos você tem sentido:
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Selecione todas as opções que se aplicam
          </p>
        </div>

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
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <button
            onClick={handleNext}
            disabled={selectedOptions.length === 0 || isTransitioning}
            className={`w-full h-12 md:h-14 rounded-full font-medium text-base md:text-lg transition-all duration-200
              ${selectedOptions.length > 0
                ? "bg-black text-white hover:bg-gray-900 shadow-lg"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Continuar
          </button>

          <button
            onClick={() => setCurrentStep(30)}
            disabled={isTransitioning}
            className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-xs md:text-sm flex items-center gap-2 disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 