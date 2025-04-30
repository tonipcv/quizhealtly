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
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <StepLayout
          title="Quais desses produtos você usa?"
          subtitle="Selecione todos que você utiliza"
          onBack={() => setCurrentStep(6)}
          onNext={() => setCurrentStep(8)}
          hideButtons={true}
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
      </div>

      {/* Botões fixos no final */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(8)}
          disabled={selectedProducts.length === 0}
          className={`w-full h-12 rounded-xl font-medium text-white transition-all duration-200 text-base ${
            selectedProducts.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          Continuar
        </button>
        <button
          onClick={() => setCurrentStep(6)}
          className="mx-auto mt-2 text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          Voltar
        </button>
      </div>
    </div>
  );
} 