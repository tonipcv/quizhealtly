"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import StepLayout from "../Layout/StepLayout";
import { stepStyles } from "./styles";

export default function StepTwentyOne() {
  const { setCurrentStep } = useQuizContext();
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowResults(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Automatically proceed to next step after showing results for a few seconds
  useEffect(() => {
    if (showResults) {
      const nextStepTimer = setTimeout(() => {
        setCurrentStep(22);
      }, 3000);
      
      return () => clearTimeout(nextStepTimer);
    }
  }, [showResults, setCurrentStep]);

  if (!showResults) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <StepLayout
            title="Criando um plano personalizado para você"
            hideButtons={true}
          >
            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-full max-w-md space-y-4">
                <div className="text-center space-y-3">
                  <div className="w-full bg-neutral-100 rounded-full h-1">
                    <div
                      className="bg-black h-1 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-gray-500 text-sm font-light">{progress}%</p>
                </div>
              </div>
            </div>
          </StepLayout>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Plano de 28 dias para você está quase sendo finalizado..."
          subtitle="Em 28 dias você pode ter uma transformação única na sua pele"
          hideButtons={true}
        >
          <div className="flex flex-col items-center p-4">
            <div className="w-full max-w-md space-y-6">
              <div className="flex justify-center">
                <Image
                  src="/dep3.jpg"
                  alt="Transformação"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </StepLayout>
      </div>
    </div>
  );
} 