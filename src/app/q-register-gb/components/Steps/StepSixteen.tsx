"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const waterOptions = [
  {
    id: "more_than_2L",
    text: "Mais de 2 litros",
    description: "Bebo mais de 8 copos de água por dia"
  },
  {
    id: "1_to_2L",
    text: "1 a 2 litros",
    description: "Bebo entre 4 e 8 copos de água por dia"
  },
  {
    id: "less_than_1L",
    text: "Menos de 1 litro",
    description: "Bebo menos de 4 copos de água por dia"
  },
  {
    id: "rarely",
    text: "Raramente",
    description: "Bebo água com pouca frequência"
  }
];

export default function StepSixteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Qual seu consumo diário de água?"
          subtitle="Considere apenas água pura, não inclua outras bebidas"
          onBack={() => setCurrentStep(15)}
          hideButtons={true}
        >
          <div className="space-y-3">
            {waterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentStep(17)}
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
          onClick={() => setCurrentStep(15)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 