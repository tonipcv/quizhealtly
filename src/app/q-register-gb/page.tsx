"use client";

import React from "react";
import { QuizProvider } from "./components/Quiz/QuizProvider";
import QuizSteps from "./components/Quiz/QuizSteps";
import Image from "next/image";
import { useQuizContext } from "./components/Quiz/QuizProvider";
import { theme } from "./styles/theme";
import Link from "next/link";

// Facebook-compliant disclaimer footer
const Disclaimer = () => {
  return (
    <div className="mt-8 pt-4 pb-2 px-4 text-xs text-gray-500 text-center max-w-3xl mx-auto">
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

function QuizContent() {
  const { currentStep } = useQuizContext();

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[${theme.colors.background.gradient.from}] to-[${theme.colors.background.gradient.to}] py-12 px-4 sm:px-6 lg:px-8 font-[${theme.fontFamily.primary}] tracking-[-0.03em]`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/logo-2.png"
            alt="VUOM"
            width={200}
            height={60}
            className="brightness-0"
            priority
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="relative">
            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-white/20">
              <div
                style={{ width: `${(currentStep / 36) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#35426A] transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-100/20">
          <QuizSteps />
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}

export default function Quiz() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
