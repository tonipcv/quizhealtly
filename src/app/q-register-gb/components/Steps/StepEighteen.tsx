"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";
import { stepStyles } from "./styles";

const skinOptions = [
  {
    id: "normal",
    text: "Normal",
    description: "Pele equilibrada, nem muito seca nem muito oleosa"
  },
  {
    id: "dry",
    text: "Seca",
    description: "Pele que tende a descamar e sentir repuxada"
  },
  {
    id: "oily",
    text: "Oleosa",
    description: "Pele que produz excesso de oleosidade"
  },
  {
    id: "combination",
    text: "Mista",
    description: "Algumas áreas secas e outras oleosas"
  },
  {
    id: "unknown",
    text: "Não sei dizer",
    description: "Tenho dúvidas sobre meu tipo de pele"
  }
];

export default function StepEighteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Como você descreveria sua pele?"
          subtitle="Selecione o tipo que melhor descreve sua pele"
          onBack={() => setCurrentStep(17)}
          hideButtons={true}
        >
          <div className="space-y-3">
            {skinOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentStep(19)}
                className={`${stepStyles.button.base} w-full ${stepStyles.button.unselected}`}
              >
                <div className="space-y-1">
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

      {/* Apenas botão de voltar */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(17)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 