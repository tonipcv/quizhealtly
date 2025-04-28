// /components/Quiz/Steps/Step1.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { quizStyles } from "../../styles/theme";

export default function StepOne() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Conteúdo principal */}
      <div className="flex-1 px-4 pb-4">
        <div className="space-y-4">
          {/* Cabeçalho */}
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-light text-gray-900">
              Protocolo VUOM para
              <br className="sm:hidden" /> Rejuvenescimento
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Plano Personalizado para 28 dias
            </p>
          </div>

          {/* Imagem Principal */}
          <div className="relative mx-auto w-full max-w-xs aspect-[4/3]">
            <Image
              src="/ad-vuom.png"
              alt="Protocolo Coreano"
              fill
              className="object-contain rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* Descrição */}
          <div className="text-center space-y-2">
            <h3 className="text-base md:text-lg text-gray-900">
              Eleve sua autoestima com o protocolo personalizado da{" "}
              <span className="font-semibold">VUOM™</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Botão fixo */}
      <div className="sticky bottom-0 left-0 right-0 z-50">
        <div className="px-4 py-3 bg-white/80 backdrop-blur-sm">
          <button
            onClick={() => setCurrentStep(2)}
            className="w-full py-3 bg-black text-white rounded-full font-light hover:bg-gray-900 transition-colors"
          >
            Criar plano agora!
          </button>
        </div>
      </div>
    </div>
  );
}
