"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepNine() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/dep2.jpeg"
            alt="Resultados Naturais"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-light text-gray-900 tracking-tight">
            Elimine Rugas, Papada e Rejuvenesça
            <br />
            <span className="font-medium">Até 10 Anos Sem Botox!</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-100">
          <p className="text-gray-600 text-lg leading-relaxed text-center font-light">
            Aumente sua confiança com uma combinação única de exercícios de Face Yoga e uma rotina de skincare personalizada.
          </p>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <span className="text-gray-900 font-light">Exercícios faciais direcionados</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <span className="text-gray-900 font-light">Rotina personalizada de skincare</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <span className="text-gray-900 font-light">Resultados duradouros e naturais</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4 space-y-4">
        <button
          onClick={() => setCurrentStep(10)}
          className="w-full py-4 rounded-full font-light text-white bg-black hover:bg-gray-900 transition-all duration-300"
        >
          Quero começar agora
        </button>

        <button
          onClick={() => setCurrentStep(8)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 font-light"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 