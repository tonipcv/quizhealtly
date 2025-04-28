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
    <StepLayout
      title="Qual é o seu principal foco agora?"
      subtitle="Escolha quantos quiser"
      onBack={() => setCurrentStep(4)}
      onNext={() => setCurrentStep(6)}
      nextDisabled={selectedGoals.length === 0}
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
  );
} 