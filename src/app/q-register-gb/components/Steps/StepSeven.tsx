"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import StepLayout from "../Layout/StepLayout";

const products = [
  { id: "cleanser", text: "Sabonete facial" },
  { id: "toner", text: "Tônico" },
  { id: "serum", text: "Sérum" },
  { id: "moisturizer", text: "Hidratante" },
  { id: "eye_cream", text: "Creme para os olhos" },
  { id: "mask", text: "Máscara facial" },
  { id: "exfoliant", text: "Esfoliantes" },
  { id: "lip_care", text: "Tratamento labial" },
  { id: "none", text: "Nenhum desses" }
];

export default function StepSeven() {
  const { setCurrentStep } = useQuizContext();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    if (id === "none") {
      setSelectedProducts(["none"]);
      return;
    }
    
    setSelectedProducts(prev => {
      if (prev.includes("none")) {
        return [id];
      }
      return prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
    });
  };

  return (
    <StepLayout
      title="Quais desses produtos você usa?"
      subtitle="Selecione todos que você utiliza"
      onBack={() => setCurrentStep(6)}
      onNext={() => setCurrentStep(8)}
      nextDisabled={selectedProducts.length === 0}
    >
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => toggleProduct(product.id)}
            className={`p-2 sm:p-3 rounded-lg border transition-all duration-200 ${
              selectedProducts.includes(product.id)
                ? "border-[#35426A] bg-[#35426A]/5"
                : "border-gray-200 hover:border-[#35426A]/30"
            }`}
          >
            <span className={`text-xs sm:text-sm font-medium ${
              selectedProducts.includes(product.id)
                ? "text-[#35426A]"
                : "text-gray-700"
            }`}>
              {product.text}
            </span>
          </button>
        ))}
      </div>
    </StepLayout>
  );
} 