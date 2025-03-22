// /components/Quiz/Steps/Step1.tsx
"use client";
import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

const StepOne: React.FC = () => {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-black text-4xl font-bold mb-3 font-poppins">
          500,000+
        </h1>
        <p className="text-gray-800 text-xl font-bold max-w-[75%] mx-auto leading-snug font-poppins">
          women have already joined
        </p>
      </div>
      
      <div className="w-full max-w-[500px] mx-auto">
        <Image
          src="/P1-E1-join-us.avif"
          alt="Join us"
          width={500}
          height={280}
          className="w-full h-auto rounded-xl shadow-md"
          priority
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setCurrentStep(2)}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg font-poppins"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepOne;
