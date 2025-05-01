// /components/Quiz/Steps/Step1.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import StepLayout from "../Layout/StepLayout";

export default function StepOne() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Protocolo VUOM para Rejuvenescimento"
          subtitle="Plano Personalizado para 28 dias"
          onBack={() => {}}
          onNext={() => setCurrentStep(2)}
          hideButtons={true}
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

            {/* Facebook Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-800">
              <p className="font-medium mb-1">Aviso de Privacidade</p>
              <p className="text-xs">
                Este questionário não é patrocinado, endossado ou administrado pelo Facebook/Meta.
                Ao participar, você entende que está fornecendo suas informações à VUOM™ e não ao Facebook.
              </p>
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
      </div>

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(2)}
          className="w-full h-12 rounded-xl font-medium text-white bg-black hover:bg-gray-900 transition-all duration-200 text-base"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
