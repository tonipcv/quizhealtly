"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const options = [
  {
    id: "satisfied",
    text: "Sim, só quero manter esse resultado para sempre",
    description: "Manter a pele saudável e prevenir o envelhecimento",
    emoji: "✨"
  },
  {
    id: "somewhat",
    text: "Não muito, ainda preciso de alguns ajustes",
    description: "Melhorar aspectos específicos da pele",
    emoji: "💫"
  },
  {
    id: "not_satisfied",
    text: "Não, tenho muitos problemas com a pele",
    description: "Transformação completa para uma pele saudável",
    emoji: "🌱"
  }
];

export default function StepFour() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Você está satisfeita com o estado atual da sua pele?
          </h2>
          <p className="text-gray-500 text-lg">
            Escolha a opção que melhor descreve sua situação
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(5)}
              className="w-full p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-900 bg-white transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                  <span className="text-3xl">{option.emoji}</span>
                </div>
                <div className="text-left space-y-1">
                  <p className="font-medium text-gray-900 text-lg">
                    {option.text}
                  </p>
                  <p className="text-gray-500">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4 flex justify-center">
        <button
          onClick={() => setCurrentStep(3)}
          className="text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
      </div>
    </div>
  );
} 