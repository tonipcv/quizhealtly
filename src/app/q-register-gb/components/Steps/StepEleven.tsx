"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const dietOptions = [
  {
    id: "strict",
    text: "Rigoroso",
    description: "Sigo uma dieta estrita"
  },
  {
    id: "moderate",
    text: "Moderado",
    description: "Tento manter uma dieta equilibrada"
  },
  {
    id: "flexible",
    text: "Flexível",
    description: "Como o que quero, quando quero"
  }
];

export default function StepEleven() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Como você descreveria sua dieta?"
      subtitle="Escolha a opção que melhor descreve seus hábitos alimentares"
      onBack={() => setCurrentStep(10)}
      onNext={() => setCurrentStep(12)}
    >
      <div className="space-y-3">
        {dietOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(12)}
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