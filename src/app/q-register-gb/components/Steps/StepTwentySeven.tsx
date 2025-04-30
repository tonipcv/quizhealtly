"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const ratingOptions = [1, 2, 3, 4, 5];

export default function StepTwentySeven() {
  const { setCurrentStep } = useQuizContext();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (value: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedRating(value);
    setTimeout(() => {
      setCurrentStep(28);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Sua aparência afeta seus relacionamentos?"
          subtitle="Em uma escala de 1 a 5, onde 1 é 'Nada' e 5 é 'Totalmente'"
          onBack={() => setCurrentStep(26)}
          hideButtons={true}
        >
          <div className="flex justify-center items-center gap-4">
            {ratingOptions.map((value) => (
              <button
                key={value}
                onClick={() => handleSelect(value)}
                disabled={isTransitioning}
                className={`w-10 h-10 rounded-md border-2 transition-all duration-200 flex items-center justify-center text-gray-900 font-medium
                  ${selectedRating === value 
                    ? "border-gray-900 bg-gray-900 text-white transform scale-110" 
                    : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                  }
                  ${isTransitioning && selectedRating !== value ? "opacity-50" : ""}
                `}
              >
                {value}
              </button>
            ))}
          </div>
        </StepLayout>
      </div>

      {/* Apenas botão de voltar */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(26)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 