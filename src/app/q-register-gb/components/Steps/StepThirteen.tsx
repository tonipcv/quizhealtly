"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const sugarOptions = [
  {
    id: "daily",
    text: "Todos os dias",
    description: "Consumo doces ou bebidas açucaradas diariamente"
  },
  {
    id: "frequently",
    text: "Frequentemente",
    description: "Consumo açúcar várias vezes por semana"
  },
  {
    id: "occasionally",
    text: "Ocasionalmente",
    description: "Consumo açúcar com moderação"
  },
  {
    id: "rarely",
    text: "Raramente",
    description: "Evito ao máximo o consumo de açúcar"
  }
];

export default function StepThirteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Com que frequência você consome açúcar?"
      subtitle="Considere doces, sobremesas e bebidas açucaradas"
      onBack={() => setCurrentStep(12)}
      onNext={() => setCurrentStep(14)}
    >
      <div className="space-y-3">
        {sugarOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(14)}
            className="w-full p-5 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
          >
            <div className="space-y-1">
              <p className="font-medium text-gray-900 text-lg">
                {option.text}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-600">
                {option.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </StepLayout>
  );
} 