"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface DietOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const dietOptions: DietOption[] = [
  { id: "everything", label: "Everything", emoji: "🍽️", selected: false },
  { id: "low_carb", label: "Low-carb", emoji: "🥑", selected: false },
  { id: "vegetarian", label: "Vegetarian", emoji: "🥬", selected: false },
  { id: "vegan", label: "Vegan", emoji: "🌱", selected: false },
  { id: "pescatarian", label: "Pescatarian", emoji: "🐟", selected: false },
  { id: "carnitarian", label: "Carnitarian", emoji: "🥩", selected: false },
];

export default function StepNineteen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<DietOption[]>(dietOptions);

  useEffect(() => {
    if (answers && answers[19]) {
      const savedAnswer = answers[19];
      setOptions(prev => prev.map(option => ({
        ...option,
        selected: option.id === savedAnswer
      })));
    }
  }, [answers]);

  const handleSelect = (id: string) => {
    setOptions(prev => prev.map(option => ({
      ...option,
      selected: option.id === id
    })));
    setCurrentStep(20);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          What's your diet type?
        </h2>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              option.selected
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{option.emoji}</span>
              <span className={`text-lg ${option.selected ? "text-black" : "text-gray-700"}`}>
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 