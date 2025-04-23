"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

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
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Quais áreas você gostaria de melhorar?
          </h2>
          <p className="text-gray-600">
            Selecione todas as áreas que você deseja focar
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {areaOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleArea(option.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedAreas.includes(option.id)
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-lg">
                  {option.text}
                </p>
                <p className="text-sm text-gray-500">
                  {option.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => setCurrentStep(18)}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedAreas.length > 0
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedAreas.length === 0}
          >
            Continuar
          </button>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(16)}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
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