"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepNineLayout from "../Layout/StepNineLayout";

export default function StepNine() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepNineLayout
      onBack={() => setCurrentStep(8)}
      onNext={() => setCurrentStep(10)}
    >
      <div className="bg-white rounded-xl p-6 space-y-4 border border-gray-100 mx-4">
        <p className="text-gray-600 text-base leading-relaxed text-center font-light">
          Aumente sua confiança com uma combinação única de exercícios de massagem facial e uma rotina de skincare personalizada.
        </p>

        <div className="grid gap-3">
          <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-1 h-5 bg-black rounded-full"></div>
            <span className="text-gray-900 font-light text-sm">Exercícios faciais direcionados</span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-1 h-5 bg-black rounded-full"></div>
            <span className="text-gray-900 font-light text-sm">Rotina personalizada de skincare</span>
          </div>

          <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-1 h-5 bg-black rounded-full"></div>
            <span className="text-gray-900 font-light text-sm">Resultados duradouros e naturais</span>
          </div>
        </div>
      </div>
    </StepNineLayout>
  );
} 