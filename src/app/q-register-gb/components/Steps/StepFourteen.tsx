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
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Com que frequência você consome vegetais?"
          subtitle="Considere legumes, verduras e hortaliças em geral"
          onBack={() => setCurrentStep(13)}
          hideButtons={true}
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
      </div>

      {/* Apenas botão de voltar */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(13)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 