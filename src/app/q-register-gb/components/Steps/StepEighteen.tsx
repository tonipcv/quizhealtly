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
    <StepLayout
      title="Como você descreveria sua pele?"
      subtitle="Selecione o tipo que melhor descreve sua pele"
      onBack={() => setCurrentStep(17)}
      onNext={() => setCurrentStep(19)}
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
  );
} 