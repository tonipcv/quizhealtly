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
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const handleOptionSelect = (id: string) => {
    setSelectedOption(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Você tem uma rotina diária de cuidados com a pele?"
          onBack={() => setCurrentStep(5)}
          hideButtons={true}
        >
          <div className="space-y-2">
            {routineOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full p-3 sm:p-4 rounded-xl border transition-all duration-200 group text-left ${
                  selectedOption === option.id 
                    ? "border-[#35426A] bg-[#35426A]/5" 
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="space-y-1">
                  <p className={`text-sm sm:text-base font-medium ${
                    selectedOption === option.id
                      ? "text-[#35426A]"
                      : "text-gray-900"
                  }`}>
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

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(7)}
          disabled={!selectedOption}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            !selectedOption
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(5)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 