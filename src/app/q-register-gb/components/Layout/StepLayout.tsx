"use client";

import React from "react";

interface StepLayoutProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  onNext?: () => void;
  children: React.ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  buttonClassName?: string;
  backButtonClassName?: string;
}

export default function StepLayout({
  title,
  subtitle,
  onBack,
  onNext,
  children,
  titleClassName = "",
  subtitleClassName = "",
  contentClassName = "",
  buttonClassName = "",
  backButtonClassName = "",
}: StepLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Botão de avançar no topo */}
      {onNext && (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
          <div className="px-4 py-3">
            <button
              onClick={onNext}
              className={`w-full py-3 bg-black text-white rounded-full font-light hover:bg-gray-900 transition-colors ${buttonClassName}`}
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="flex-1 px-4 pb-4">
        <div className="space-y-4">
          {/* Título e subtítulo */}
          <div className="text-center space-y-2">
            <h2 className={`text-xl md:text-2xl font-light text-gray-900 ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-sm md:text-base text-gray-600 ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Conteúdo */}
          <div className={contentClassName}>{children}</div>
        </div>
      </div>

      {/* Botão de voltar no final */}
      <div className="sticky bottom-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="px-4 py-3">
          <button
            onClick={onBack}
            className={`w-full py-3 bg-white text-black border border-gray-200 rounded-full font-light hover:bg-gray-50 transition-colors ${backButtonClassName}`}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 