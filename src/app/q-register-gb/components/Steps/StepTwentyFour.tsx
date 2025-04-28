"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const timeOptions = [
  {
    id: "ten_minutes",
    text: "Até 10 minutos",
    description: "Tenho pouco tempo disponível"
  },
  {
    id: "fifteen_minutes",
    text: "Até 15 minutos",
    description: "Posso dedicar um tempo moderado"
  },
  {
    id: "thirty_minutes",
    text: "Até 30 minutos",
    description: "Tenho mais tempo para dedicar"
  }
];

export default function StepTwentyFour() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Quanto tempo por dia você pode dedicar ao programa?"
      subtitle="Protocolo Coreano"
      onBack={() => setCurrentStep(23)}
      onNext={() => setCurrentStep(25)}
    >
      <div className="space-y-3">
        <p className="text-gray-600 text-center mb-4">
          Selecione o tempo que você tem disponível
        </p>
        {timeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setCurrentStep(25)}
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