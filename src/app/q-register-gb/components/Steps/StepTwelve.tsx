"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const dietaryRestrictions = [
  {
    id: "none",
    text: "Nenhuma",
    description: "Não tenho restrições alimentares"
  },
  {
    id: "gluten",
    text: "Glúten",
    description: "Evito alimentos com glúten"
  },
  {
    id: "lactose",
    text: "Lactose",
    description: "Evito produtos lácteos"
  },
  {
    id: "nuts",
    text: "Nozes e Amendoim",
    description: "Evito nozes e amendoim"
  },
  {
    id: "shellfish",
    text: "Frutos do Mar",
    description: "Evito frutos do mar"
  },
  {
    id: "eggs",
    text: "Ovos",
    description: "Evito ovos e derivados"
  }
];

export default function StepTwelve() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Você tem alguma restrição alimentar?"
      subtitle="Selecione todas as restrições alimentares que se aplicam"
      onBack={() => setCurrentStep(11)}
      onNext={() => setCurrentStep(13)}
    >
      <div className="space-y-3">
        {dietaryRestrictions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(13)}
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