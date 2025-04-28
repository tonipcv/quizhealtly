"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const vegetableOptions = [
  {
    id: "daily",
    text: "Todos os dias",
    description: "Consumo vegetais em todas as refeições principais"
  },
  {
    id: "frequently",
    text: "Frequentemente",
    description: "Consumo vegetais várias vezes por semana"
  },
  {
    id: "occasionally",
    text: "Ocasionalmente",
    description: "Consumo vegetais algumas vezes por semana"
  },
  {
    id: "rarely",
    text: "Raramente",
    description: "Consumo vegetais com pouca frequência"
  }
];

export default function StepFourteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Com que frequência você consome vegetais?"
      subtitle="Considere legumes, verduras e hortaliças em geral"
      onBack={() => setCurrentStep(13)}
      onNext={() => setCurrentStep(15)}
    >
      <div className="space-y-3">
        {vegetableOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(15)}
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