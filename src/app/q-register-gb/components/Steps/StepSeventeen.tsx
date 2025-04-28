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
    <StepLayout
      title="Quais áreas você gostaria de melhorar?"
      subtitle="Selecione todas as áreas que você deseja focar"
      onBack={() => setCurrentStep(16)}
      onNext={() => setCurrentStep(18)}
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
  );
} 