"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const cycleOptions = [
  {
    id: "regular",
    text: "Regular",
  },
  {
    id: "irregular",
    text: "Irregular",
  },
  {
    id: "no_cycle",
    text: "Não tenho ciclo (idade ou condição médica)",
  },
  {
    id: "prefer_not",
    text: "Prefiro não responder",
  }
];

export default function StepThirty() {
  const { setCurrentStep } = useQuizContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedOption(optionId);
    setTimeout(() => {
      setCurrentStep(31);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Seu ciclo menstrual é:"
          onBack={() => setCurrentStep(29)}
          hideButtons={true}
        >
          <div className="space-y-3">
            {cycleOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={isTransitioning}
                className={`w-full p-4 rounded-xl border transition-all duration-200 text-left
                  ${selectedOption === option.id 
                    ? "border-black bg-black text-white shadow-lg transform scale-[1.02]" 
                    : "border-gray-300 hover:border-black hover:bg-gray-50 text-gray-900 hover:shadow-md"
                  }
                  ${isTransitioning && selectedOption !== option.id ? "opacity-50" : ""}
                `}
              >
                <span className="text-lg font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </StepLayout>
      </div>

      {/* Apenas botão de voltar */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(29)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 