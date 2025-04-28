"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";
import { stepStyles } from "./styles";

const motivationOptions = [
  {
    id: "confidence",
    text: "Quero parecer mais jovem e confiante",
    description: "Busco melhorar minha autoestima"
  },
  {
    id: "less_makeup",
    text: "Quero usar menos maquiagem",
    description: "Desejo uma pele naturalmente bonita"
  },
  {
    id: "impress",
    text: "Quero impressionar",
    description: "Busco causar uma boa impressão"
  },
  {
    id: "partner",
    text: "Tenho medo que meu parceiro se afaste",
    description: "Preocupo-me com meu relacionamento"
  },
  {
    id: "prevent",
    text: "Quero prevenir o envelhecimento",
    description: "Busco manter a juventude da pele"
  },
  {
    id: "rituals",
    text: "Quero criar meus próprios rituais de beleza",
    description: "Desejo estabelecer uma rotina personalizada"
  }
];

export default function StepTwenty() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="O que te motiva a manter uma rotina de Protocolo Coreano e skincare?"
      subtitle="Selecione sua principal motivação"
      onBack={() => setCurrentStep(19)}
      onNext={() => setCurrentStep(21)}
    >
      <div className="space-y-3">
        {motivationOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(21)}
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