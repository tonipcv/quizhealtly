"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const routineOptions = [
  {
    id: "forget_sunscreen",
    text: "Esqueço até do protetor solar",
    description: "Não tenho uma rotina estabelecida"
  },
  {
    id: "can_improve",
    text: "Posso melhorar, preciso me organizar",
    description: "Tenho uma rotina básica, mas inconsistente"
  },
  {
    id: "good_routine",
    text: "Sigo uma boa rotina e hábitos saudáveis",
    description: "Mantenho uma rotina regular de cuidados"
  }
];

export default function StepTwentyTwo() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Como está sua rotina de cuidados atualmente?"
          subtitle="Selecione a opção que melhor descreve seus hábitos"
          onBack={() => setCurrentStep(21)}
          hideButtons={true}
        >
          <div className="space-y-3">
            {routineOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentStep(23)}
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
          onClick={() => setCurrentStep(21)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 