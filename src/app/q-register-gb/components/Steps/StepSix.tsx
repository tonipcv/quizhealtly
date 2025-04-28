"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const routineOptions = [
  {
    id: "both",
    text: "Sim, tenho rotina de manhã e à noite",
    description: "Cuidados completos ao longo do dia"
  },
  {
    id: "morning",
    text: "Apenas de manhã",
    description: "Proteção durante o dia"
  },
  {
    id: "night",
    text: "Apenas à noite",
    description: "Cuidados antes de dormir"
  },
  {
    id: "none",
    text: "Não tenho rotina",
    description: "Ainda não estabeleci uma rotina"
  }
];

export default function StepSix() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Você tem uma rotina diária de cuidados com a pele?"
      onBack={() => setCurrentStep(5)}
    >
      <div className="space-y-2">
        {routineOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(7)}
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
          >
            <div className="space-y-1">
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