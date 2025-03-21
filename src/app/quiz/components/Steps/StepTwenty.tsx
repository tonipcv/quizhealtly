"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface AllergyOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const allergyOptions: AllergyOption[] = [
  { id: "none", label: "None", emoji: "❌", selected: false },
  { id: "dairy", label: "Dairy", emoji: "🧀", selected: false },
  { id: "gluten", label: "Gluten", emoji: "🥐", selected: false },
  { id: "eggs", label: "Eggs", emoji: "🥚", selected: false },
  { id: "nuts", label: "Nuts", emoji: "🥜", selected: false },
  { id: "fish", label: "Fish", emoji: "🐟", selected: false },
  { id: "shellfish", label: "Shellfish", emoji: "🦐", selected: false },
  { id: "soy", label: "Soy", emoji: "🌱", selected: false },
  { id: "other", label: "Other", emoji: "🙄", selected: false },
];

export default function StepTwenty() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<AllergyOption[]>(allergyOptions);

  useEffect(() => {
    if (answers && answers[20]) {
      const savedAnswers = answers[20];
      setOptions(prev => prev.map(option => ({
        ...option,
        selected: savedAnswers.includes(option.id)
      })));
    }
  }, [answers]);

  const handleSelect = (id: string) => {
    setOptions(prev => {
      const newOptions = [...prev];
      const selectedOption = newOptions.find(opt => opt.id === id);
      
      if (!selectedOption) return prev;

      if (id === "none") {
        // Se selecionar "None", desmarca todas as outras opções
        return newOptions.map(opt => ({
          ...opt,
          selected: opt.id === "none"
        }));
      } else {
        // Se selecionar qualquer outra opção, desmarca "None"
        return newOptions.map(opt => ({
          ...opt,
          selected: opt.id === id ? !opt.selected : opt.id === "none" ? false : opt.selected
        }));
      }
    });
  };

  const handleContinue = () => {
    const selectedIds = options.filter(opt => opt.selected).map(opt => opt.id);
    setCurrentStep(21);
  };

  const hasSelection = options.some(opt => opt.selected);

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Do you have any food allergies?
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

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleContinue}
          disabled={!hasSelection}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-200 ${
            hasSelection
              ? "bg-black hover:bg-black/90"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
} 