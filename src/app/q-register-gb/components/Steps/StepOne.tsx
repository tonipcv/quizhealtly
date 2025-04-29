// /components/Quiz/Steps/Step1.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import StepLayout from "../Layout/StepLayout";

export default function StepOne() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Protocolo VUOM para Rejuvenescimento"
      subtitle="Plano Personalizado para 28 dias"
      onBack={() => {}}
      onNext={() => setCurrentStep(2)}
    >
      <div className="space-y-4">
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
    </StepLayout>
  );
}
