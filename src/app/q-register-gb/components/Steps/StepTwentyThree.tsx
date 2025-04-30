"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const sleepOptions = [
  {
    id: "less_than_5",
    text: "Menos de 5 horas",
    description: "Durmo muito pouco durante a noite"
  },
  {
    id: "five_to_six",
    text: "5 a 6 horas",
    description: "Durmo um pouco abaixo do recomendado"
  },
  {
    id: "seven_to_eight",
    text: "7 a 8 horas",
    description: "Durmo o tempo recomendado"
  },
  {
    id: "more_than_eight",
    text: "Mais de 8 horas",
    description: "Durmo bastante durante a noite"
  }
];

export default function StepTwentyThree() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Quantas horas você dorme por noite?"
          subtitle="Considere seu tempo médio de sono noturno"
          onBack={() => setCurrentStep(22)}
          hideButtons={true}
        >
          <div className="space-y-3">
            {sleepOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentStep(24)}
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
          onClick={() => setCurrentStep(22)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 