"use client";

import React from "react";
import { useQuizContext } from "./QuizProvider";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";
import StepFour from "../Steps/StepFour";
import StepFive from "../Steps/StepFive";
import StepSix from "../Steps/StepSix";
import StepSeven from "../Steps/StepSeven";
import StepEight from "../Steps/StepEight";
import StepNine from "../Steps/StepNine";
import StepTen from "../Steps/StepTen";
import StepEleven from "../Steps/StepEleven";
import StepTwelve from "../Steps/StepTwelve";
import StepThirteen from "../Steps/StepThirteen";
import StepFourteen from "../Steps/StepFourteen";
import StepFifteen from "../Steps/StepFifteen";
import StepSixteen from "../Steps/StepSixteen";
import StepSeventeen from "../Steps/StepSeventeen";

const QuizSteps = () => {
  const { currentStep } = useQuizContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSix />;
      case 7:
        return <StepSeven />;
      case 8:
        return <StepEight />;
      case 9:
        return <StepNine />;
      case 10:
        return <StepTen />;
      case 11:
        return <StepEleven />;
      case 12:
        return <StepTwelve />;
      case 13:
        return <StepThirteen />;
      case 14:
        return <StepFourteen />;
      case 15:
        return <StepFifteen />;
      case 16:
        return <StepSixteen />;
      case 17:
        return <StepSeventeen />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderStep()}
    </div>
  );
};

export default QuizSteps; 