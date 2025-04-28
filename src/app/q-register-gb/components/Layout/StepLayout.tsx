import React from 'react';

interface StepLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onBack: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  showBackButton?: boolean;
  hideButtons?: boolean;
}

export default function StepLayout({
  title,
  subtitle,
  children,
  onBack,
  onNext,
  nextDisabled = false,
  showBackButton = true,
  hideButtons = false
}: StepLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col font-["Avenir"]`}>
      <div className="flex-1 pb-20">
        <div className="text-center space-y-1 px-4">
          <h2 className="text-xl sm:text-2xl font-light text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="px-4 mt-4">
          {children}
        </div>
      </div>

      {/* Botões fixos na parte inferior */}
      {!hideButtons && (
        <div className="sticky bottom-0 left-0 right-0 z-50">
          <div className="px-4 py-3 bg-white/80 backdrop-blur-sm space-y-2">
            {onNext && (
              <button
                onClick={onNext}
                disabled={nextDisabled}
                className={`w-full h-10 sm:h-12 rounded-full text-white transition-all duration-200 text-sm sm:text-base ${
                  nextDisabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#35426A] hover:bg-[#2A3557]"
                }`}
              >
                Continuar
              </button>
            )}

            {showBackButton && (
              <button
                onClick={onBack}
                className="mx-auto text-gray-500 hover:text-[#35426A] transition-colors text-xs sm:text-sm flex items-center gap-1"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 