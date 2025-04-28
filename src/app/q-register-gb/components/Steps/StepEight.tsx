"use client";

import React from "react";
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

  return (
    <StepLayout
      title="Com que frequência você vai ao dermatologista ou esteticista?"
      onBack={() => setCurrentStep(7)}
      onNext={() => setCurrentStep(9)}
    >
      <div className="space-y-2">
        {frequencyOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(9)}
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
  );
} 