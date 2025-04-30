"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";
import { stepStyles } from "./styles";

const areaOptions = [
  {
    id: "forehead",
    text: "Testa",
    description: "Região superior do rosto"
  },
  {
    id: "temples",
    text: "Têmporas",
    description: "Laterais da testa"
  },
  {
    id: "eyes",
    text: "Olhos",
    description: "Região ao redor dos olhos"
  },
  {
    id: "cheeks",
    text: "Bochechas",
    description: "Região central do rosto"
  },
  {
    id: "jaw",
    text: "Mandíbula",
    description: "Linha do maxilar"
  },
  {
    id: "mouth",
    text: "Boca",
    description: "Região dos lábios"
  },
  {
    id: "chin",
    text: "Queixo",
    description: "Parte inferior do rosto"
  },
  {
    id: "neck",
    text: "Pescoço",
    description: "Região do pescoço"
  },
  {
    id: "decolletage",
    text: "Colo",
    description: "Região superior do tronco"
  }
];

export default function StepSeventeen() {
  const { setCurrentStep } = useQuizContext();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (id: string) => {
    setSelectedAreas(prev => {
      if (prev.includes(id)) {
        return prev.filter(areaId => areaId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Quais áreas você gostaria de melhorar?"
          subtitle="Selecione todas as áreas que você deseja focar"
          onBack={() => setCurrentStep(16)}
          hideButtons={true}
        >
          <div className={stepStyles.grid}>
            {areaOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleArea(option.id)}
                className={`${stepStyles.button.base} text-left ${
                  selectedAreas.includes(option.id)
                    ? stepStyles.button.selected
                    : stepStyles.button.unselected
                }`}
              >
                <div className="space-y-0.5">
                  <p className={`font-medium text-gray-900 ${stepStyles.button.text}`}>
                    {option.text}
                  </p>
                  <p className={stepStyles.button.description}>
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
          onClick={() => setCurrentStep(18)}
          disabled={selectedAreas.length === 0}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            selectedAreas.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(16)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 