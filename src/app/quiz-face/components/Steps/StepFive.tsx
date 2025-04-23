"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

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
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Qual é o seu principal foco agora?
          </h2>
          <p className="text-gray-600 text-lg">
            Escolha quantos quiser
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-sm ${
                selectedGoals.includes(goal.id)
                  ? "border-black bg-black/5"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <span className={`text-base font-medium ${
                selectedGoals.includes(goal.id)
                  ? "text-black"
                  : "text-gray-700"
              }`}>
                {goal.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4 space-y-4">
        <button
          onClick={() => setCurrentStep(6)}
          disabled={selectedGoals.length === 0}
          className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-300 ${
            selectedGoals.length > 0
              ? "bg-black hover:bg-gray-900"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continuar
        </button>

        <button
          onClick={() => setCurrentStep(4)}
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