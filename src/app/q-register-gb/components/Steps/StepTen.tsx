"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const mealOptions = [
  {
    id: "less_than_3",
    text: "Menos de 3",
    description: "1-2 refeições por dia"
  },
  {
    id: "at_least_3",
    text: "Pelo menos 3",
    description: "3 ou mais refeições por dia"
  },
  {
    id: "varies",
    text: "Varia",
    description: "Número irregular de refeições"
  }
];

export default function StepTen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Quantas refeições você faz por dia?"
          subtitle="Escolha a opção que melhor descreve seus hábitos alimentares"
          onBack={() => setCurrentStep(9)}
          hideButtons={true}
        >
          <div className="space-y-2">
            {mealOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentStep(11)}
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
              >
                <div className="space-y-0.5">
                  <p className="text-sm sm:text-base font-medium text-gray-900">
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

      {/* Apenas botão de voltar */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(9)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 