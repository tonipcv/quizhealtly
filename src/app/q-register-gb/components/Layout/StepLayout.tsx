"use client";

import React from "react";
import Link from "next/link";

interface StepLayoutProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  hideButtons?: boolean;
  children: React.ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  buttonClassName?: string;
  backButtonClassName?: string;
}

// Facebook-compliant disclaimer footer
const Disclaimer = () => {
  return (
    <div className="pt-4 pb-2 px-4 text-xs text-gray-500 text-center">
      <p className="mb-1">
        Este questionário não é patrocinado, endossado ou administrado pelo Facebook.
      </p>
      <p className="mb-1">
        As informações fornecidas são confidenciais e serão utilizadas apenas para personalizar sua experiência com o protocolo VUOM™.
      </p>
      <p>
        <Link href="/politicas" className="text-blue-600 hover:underline">
          Política de Privacidade
        </Link>
      </p>
    </div>
  );
};

export default function StepLayout({
  title,
  subtitle,
  onBack,
  onNext,
  nextDisabled = false,
  hideButtons = false,
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
      {!hideButtons && (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
          <div className="px-4 py-3">
            <button
              onClick={onNext}
              disabled={nextDisabled}
              className={`w-full py-3 rounded-full font-light transition-colors ${
                nextDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              } ${buttonClassName}`}
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

      {/* Disclaimer */}
      <Disclaimer />

      {/* Botão de voltar no final */}
      {!hideButtons && (
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
      )}
    </div>
  );
} 