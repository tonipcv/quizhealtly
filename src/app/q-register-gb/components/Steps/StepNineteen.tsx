"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";
import { stepStyles } from "./styles";

const skinConcerns = [
  {
    id: "acne",
    text: "Acne e espinhas",
    description: "Problemas com cravos e espinhas"
  },
  {
    id: "redness",
    text: "Vermelhidão",
    description: "Áreas avermelhadas na pele"
  },
  {
    id: "dullness",
    text: "Opacidade",
    description: "Falta de luminosidade na pele"
  },
  {
    id: "texture",
    text: "Textura irregular",
    description: "Pele com textura desigual"
  },
  {
    id: "uneven_tone",
    text: "Tom desigual",
    description: "Variações no tom da pele"
  },
  {
    id: "pigmentation",
    text: "Manchas de pigmentação",
    description: "Manchas escuras ou claras"
  },
  {
    id: "none",
    text: "Nenhuma das anteriores",
    description: "Não tenho essas preocupações"
  }
];

export default function StepNineteen() {
  const { setCurrentStep } = useQuizContext();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const toggleConcern = (id: string) => {
    if (id === "none") {
      // Se "Nenhuma das anteriores" for selecionada, limpa outras seleções
      setSelectedConcerns(["none"]);
    } else {
      setSelectedConcerns(prev => {
        // Remove "Nenhuma das anteriores" se estiver selecionada
        const filtered = prev.filter(item => item !== "none");
        
        if (prev.includes(id)) {
          return filtered.filter(concernId => concernId !== id);
        } else {
          return [...filtered, id];
        }
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Você tem alguma dessas preocupações com a pele?"
          subtitle="Selecione todas as opções que se aplicam"
          onBack={() => setCurrentStep(18)}
          hideButtons={true}
        >
          <div className={stepStyles.grid}>
            {skinConcerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => toggleConcern(concern.id)}
                className={`${stepStyles.button.base} ${
                  selectedConcerns.includes(concern.id)
                    ? stepStyles.button.selected
                    : stepStyles.button.unselected
                }`}
              >
                <div className="space-y-1">
                  <p className={`font-medium text-gray-900 ${stepStyles.button.text}`}>
                    {concern.text}
                  </p>
                  <p className={stepStyles.button.description}>
                    {concern.description}
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
          onClick={() => setCurrentStep(20)}
          disabled={selectedConcerns.length === 0}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            selectedConcerns.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(18)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 