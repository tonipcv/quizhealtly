"use client";

import React, { useState } from "react";
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
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);

  const toggleRestriction = (id: string) => {
    if (id === "none") {
      setSelectedRestrictions(prev => prev.includes("none") ? [] : ["none"]);
      return;
    }
    
    setSelectedRestrictions(prev => {
      // Remove "none" if it's selected and we're selecting something else
      const newSelection = prev.includes("none") ? prev.filter(item => item !== "none") : [...prev];
      
      // Toggle the selected restriction
      return newSelection.includes(id)
        ? newSelection.filter(item => item !== id)
        : [...newSelection, id];
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Você tem alguma restrição alimentar?"
          subtitle="Selecione todas as restrições alimentares que se aplicam"
          onBack={() => setCurrentStep(11)}
          hideButtons={true}
        >
          <div className="space-y-3">
            {dietaryRestrictions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleRestriction(option.id)}
                className={`w-full p-5 rounded-xl border-2 transition-all duration-200 group text-left ${
                  selectedRestrictions.includes(option.id)
                    ? "border-[#35426A] bg-[#35426A]/5"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="space-y-1">
                  <p className={`font-medium text-lg ${
                    selectedRestrictions.includes(option.id)
                      ? "text-[#35426A]"
                      : "text-gray-900"
                  }`}>
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

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(13)}
          disabled={selectedRestrictions.length === 0}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            selectedRestrictions.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(11)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 