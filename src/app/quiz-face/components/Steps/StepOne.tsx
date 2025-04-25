// /components/Quiz/Steps/Step1.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepOne() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Protocolo Coreano para
            <br className="sm:hidden" /> Rejuvenescimento
          </h2>
          <p className="text-gray-600 text-lg">
            Plano Personalizado para 28 dias
          </p>
        </div>

        {/* Imagem Principal */}
        <div className="relative mx-auto w-full max-w-lg aspect-[4/3]">
          <Image
            src="/ad-vuom.png"
            alt="Protocolo Coreano"
            fill
            className="object-contain rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Descrição */}
        <div className="text-center space-y-3">
          <h3 className="text-gray-700 text-lg leading-relaxed">
            Descubra como transformar sua pele e elevar sua autoestima com o protocolo coreano personalizado da{" "}
            <span className="text-gray-900 font-semibold">VUOM™</span>
          </h3>
        </div>

        {/* Botão */}
        <div className="pt-6">
          <button
            onClick={() => setCurrentStep(2)}
            className="w-full h-14 rounded-full font-medium text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 shadow-lg"
          >
            Criar plano agora!
          </button>
        </div>
      </div>
    </div>
  );
}
