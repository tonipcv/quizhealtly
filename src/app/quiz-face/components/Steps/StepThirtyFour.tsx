"use client";

import React, { useState, useEffect } from "react";

export default function StepThirtyFour() {
  const [seconds, setSeconds] = useState(10);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequência de timers para mostrar as mensagens
    const step1 = setTimeout(() => setStep(1), 1000);
    const step2 = setTimeout(() => setStep(2), 3000);
    const step3 = setTimeout(() => setStep(3), 5000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        window.location.href = "https://app.vuom.life/register";
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" mx-auto px-4 text-center space-y-8">
        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>

        {/* Loading Messages */}
        <div className="space-y-4">
          {step >= 1 && (
            <h2 className="text-xl font-light text-gray-900 animate-fade-in">
              Agora você poderá criar sua conta para receber o plano...
            </h2>
          )}
          
          {step >= 2 && (
            <p className="text-xl text-gray-600 font-light animate-fade-in">
              Liberamos um Plano com valor de custo para você
            </p>
          )}

          {step >= 3 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-xl text-gray-600 font-light">
                Mas só ficará disponível por 10 minutos, iremos te redirecionar em...
              </p>
              <div className="text-2xl font-bold text-gray-900">
                {String(seconds).padStart(2, "0")}s
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 