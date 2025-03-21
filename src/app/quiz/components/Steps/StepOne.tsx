// /components/Quiz/Steps/Step1.tsx
"use client";
import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const StepOne: React.FC = () => {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-black text-4xl font-bold mb-3">
          500,000+
        </h1>
        <p className="text-gray-800 text-xl font-bold max-w-[75%] mx-auto leading-snug">
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

      <div className="text-center">
        <h2 className="text-gray-800 text-xl font-bold leading-tight">
          Designed for women's bodies'
          <br />
          changing needs over 40
        </h2>
      </div>

      <div className="mt-8">
        <button
          onClick={() => setCurrentStep(2)}
          className="w-full h-14 bg-black rounded-full relative group flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:shadow-black/20"
        >
          <span className="text-white text-lg font-bold">Continue</span>
          <div className="absolute right-3 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform group-hover:bg-gray-700">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default StepOne;
