"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const goals = [
  { id: "sculpt", text: "Esculpir o rosto" },
  { id: "fresh", text: "Pele mais fresca" },
  { id: "habits", text: "Hábitos saudáveis" },
  { id: "collagen", text: "Estímulo de colágeno" },
  { id: "routine", text: "Rotina consistente" },
  { id: "tone", text: "Tom uniforme" },
  { id: "spots", text: "Redução de manchas" },
  { id: "mental", text: "Saúde mental" },
  { id: "doublechin", text: "Redução de papada" },
  { id: "stress", text: "Alívio do estresse" },
  { id: "lifting", text: "Lifting facial" },
  { id: "detox", text: "Detox" }
];

export default function StepFive() {
  const { setCurrentStep } = useQuizContext();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Qual é o seu principal foco agora?"
          subtitle="Escolha quantos quiser"
          onBack={() => setCurrentStep(4)}
          onNext={() => setCurrentStep(6)}
          hideButtons={true}
        >
          <div className="grid grid-cols-2 gap-2">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`p-2 sm:p-3 rounded-lg border transition-all duration-200 ${
                  selectedGoals.includes(goal.id)
                    ? "border-[#35426A] bg-[#35426A]/5"
                    : "border-gray-200 hover:border-[#35426A]/30"
                }`}
              >
                <span className={`text-xs sm:text-sm font-medium ${
                  selectedGoals.includes(goal.id)
                    ? "text-[#35426A]"
                    : "text-gray-700"
                }`}>
                  {goal.text}
                </span>
              </button>
            ))}
          </div>
        </StepLayout>
      </div>

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(6)}
          disabled={selectedGoals.length === 0}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            selectedGoals.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(4)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 