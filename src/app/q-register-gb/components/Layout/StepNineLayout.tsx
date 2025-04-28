"use client";

import React from "react";
import Image from "next/image";

interface StepNineLayoutProps {
  children: React.ReactNode;
  onBack: () => void;
  onNext: () => void;
}

export default function StepNineLayout({ children, onBack, onNext }: StepNineLayoutProps) {
  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {/* Image Section */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/dep2.jpeg"
              alt="Resultados Naturais"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Header Section */}
          <div className="text-center space-y-2 px-4">
            <h2 className="text-xl font-light text-gray-900 tracking-tight">
              Estamos começando a preparar um plano personalizado para você
              <br />
              <span className="font-medium">Mais de 3.234 mulheres já estão rejuvenescendo conosco!</span>
            </h2>
          </div>

          {children}
        </div>
      </div>

      {/* Botões */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <div className="space-y-3">
          <button
            onClick={onNext}
            className="w-full h-12 rounded-xl font-medium text-white bg-black hover:bg-gray-900 transition-all duration-200 text-base"
          >
            Quero começar agora
          </button>

          <button
            onClick={onBack}
            className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-xs flex items-center gap-2"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 