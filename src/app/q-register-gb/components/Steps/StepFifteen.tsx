"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const proteinOptions = [
  {
    id: "daily",
    text: "Todos os dias",
    description: "Consumo proteínas em todas as refeições principais"
  },
  {
    id: "frequently",
    text: "Frequentemente",
    description: "Consumo proteínas várias vezes por semana"
  },
  {
    id: "occasionally",
    text: "Ocasionalmente",
    description: "Consumo proteínas algumas vezes por semana"
  },
  {
    id: "rarely",
    text: "Raramente",
    description: "Consumo proteínas com pouca frequência"
  }
];

export default function StepFifteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Com que frequência você consome proteínas?"
      subtitle="Considere carnes, ovos, peixes e proteínas vegetais"
      onBack={() => setCurrentStep(14)}
      onNext={() => setCurrentStep(16)}
    >
      <div className="space-y-3">
        {proteinOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(16)}
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