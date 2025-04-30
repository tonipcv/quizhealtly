"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const frequencyOptions = [
  {
    id: "monthly",
    text: "Uma vez por mês ou mais",
    description: "Acompanhamento regular"
  },
  {
    id: "quarterly",
    text: "A cada alguns meses",
    description: "Visitas ocasionais"
  },
  {
    id: "yearly",
    text: "Uma vez por ano",
    description: "Checkup anual"
  },
  {
    id: "never",
    text: "Nunca",
    description: "Ainda não consultei"
  }
];

export default function StepEight() {
  const { setCurrentStep } = useQuizContext();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (id: string) => {
    setSelectedOption(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Com que frequência você vai ao dermatologista ou esteticista?"
          onBack={() => setCurrentStep(7)}
          hideButtons={true}
        >
          <div className="space-y-2">
            {frequencyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full p-3 sm:p-4 rounded-xl border transition-all duration-200 group text-left ${
                  selectedOption === option.id 
                    ? "border-[#35426A] bg-[#35426A]/5" 
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="space-y-0.5">
                  <p className={`text-sm sm:text-base font-medium ${
                    selectedOption === option.id
                      ? "text-[#35426A]"
                      : "text-gray-900"
                  }`}>
                    {option.text}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600">
                    {option.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </StepLayout>
      </div>

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(9)}
          disabled={!selectedOption}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            !selectedOption
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(7)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 